<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$dataFile = __DIR__ . '/../data/products.json';
$quotesFile = __DIR__ . '/../data/quotes.json';

function getProducts($file) {
    if (!file_exists($file)) {
        return [];
    }
    $content = file_get_contents($file);
    return json_decode($content, true) ?: [];
}

function saveProducts($file, $data) {
    return file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
}

function getQuotes($file) {
    if (!file_exists($file)) {
        return [];
    }
    $content = file_get_contents($file);
    return json_decode($content, true) ?: [];
}

function saveQuotes($file, $data) {
    return file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $action = $_GET['action'] ?? 'list';

    if ($action === 'quotes') {
        echo json_encode(['status' => 'success', 'data' => getQuotes($quotesFile)]);
        exit;
    }

    $products = getProducts($dataFile);
    $category = $_GET['category'] ?? '';
    $search = $_GET['search'] ?? '';
    $visibleOnly = !isset($_GET['all']);

    $filtered = array_values(array_filter($products, function ($p) use ($category, $search, $visibleOnly) {
        if ($visibleOnly && empty($p['visible'])) {
            return false;
        }
        if (!empty($category) && strtolower($p['category']) !== strtolower($category)) {
            return false;
        }
        if (!empty($search)) {
            $q = strtolower($search);
            $haystack = strtolower(($p['name'] ?? '') . ' ' . ($p['description'] ?? '') . ' ' . ($p['category'] ?? '') . ' ' . ($p['specs'] ?? ''));
            if (strpos($haystack, $q) === false) {
                return false;
            }
        }
        return true;
    }));

    echo json_encode(['status' => 'success', 'count' => count($filtered), 'data' => $filtered]);
    exit;
}

if ($method === 'POST') {
    $raw = file_get_contents('php://input');
    $payload = json_decode($raw, true) ?: $_POST;
    $action = $payload['action'] ?? '';

    // 1. Submit a Quote Request
    if ($action === 'request_quote') {
        $quotes = getQuotes($quotesFile);
        $newQuote = [
            'id' => 'QUO-' . strtoupper(substr(uniqid(), -6)),
            'timestamp' => date('Y-m-d H:i:s'),
            'name' => htmlspecialchars($payload['name'] ?? ''),
            'company' => htmlspecialchars($payload['company'] ?? ''),
            'phone' => htmlspecialchars($payload['phone'] ?? ''),
            'email' => htmlspecialchars($payload['email'] ?? ''),
            'location' => htmlspecialchars($payload['location'] ?? ''),
            'materials_text' => htmlspecialchars($payload['materials_text'] ?? ''),
            'items' => $payload['items'] ?? [],
            'notes' => htmlspecialchars($payload['notes'] ?? ''),
            'status' => 'Pending'
        ];
        array_unshift($quotes, $newQuote);
        saveQuotes($quotesFile, $quotes);

        echo json_encode([
            'status' => 'success',
            'message' => 'Quote request received successfully. Our team will contact you shortly.',
            'quote_id' => $newQuote['id'],
            'quote' => $newQuote
        ]);
        exit;
    }

    // 2. Richard's Business App: Save / Update Product
    if ($action === 'save_product') {
        $products = getProducts($dataFile);
        $prod = $payload['product'] ?? [];
        if (empty($prod['name'])) {
            echo json_encode(['status' => 'error', 'message' => 'Product name is required.']);
            exit;
        }

        $id = $prod['id'] ?? ('ribit-' . substr(strtolower(preg_replace('/[^a-zA-Z0-9]/', '', $prod['name'])), 0, 6) . '-' . rand(10, 99));
        $prod['id'] = $id;
        $prod['currency'] = $prod['currency'] ?? 'KES';
        $prod['visible'] = isset($prod['visible']) ? (bool)$prod['visible'] : true;

        $found = false;
        foreach ($products as $i => $item) {
            if ($item['id'] === $id) {
                $products[$i] = array_merge($item, $prod);
                $found = true;
                break;
            }
        }
        if (!$found) {
            $products[] = $prod;
        }

        saveProducts($dataFile, $products);
        echo json_encode(['status' => 'success', 'message' => 'Product saved successfully.', 'product' => $prod]);
        exit;
    }

    // 3. Delete Product
    if ($action === 'delete_product') {
        $id = $payload['id'] ?? '';
        $products = getProducts($dataFile);
        $initial = count($products);
        $products = array_values(array_filter($products, fn($p) => $p['id'] !== $id));

        saveProducts($dataFile, $products);
        echo json_encode(['status' => 'success', 'message' => 'Product removed.', 'deleted' => ($initial > count($products))]);
        exit;
    }

    // 4. Update Quote Status
    if ($action === 'update_quote_status') {
        $quoteId = $payload['id'] ?? '';
        $newStatus = $payload['status'] ?? 'Pending';
        $quotes = getQuotes($quotesFile);
        foreach ($quotes as &$q) {
            if ($q['id'] === $quoteId) {
                $q['status'] = $newStatus;
                break;
            }
        }
        saveQuotes($quotesFile, $quotes);
        echo json_encode(['status' => 'success', 'message' => 'Quote status updated.']);
        exit;
    }

    echo json_encode(['status' => 'error', 'message' => 'Unknown action: ' . htmlspecialchars($action)]);
    exit;
}
