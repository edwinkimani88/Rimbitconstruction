<?php
// Prevent caching and buffer leaks
while (ob_get_level() > 0) {
    ob_end_clean();
}

$candidates = [
    __DIR__ . '/Final DC Epz.apk',
    dirname(__DIR__) . '/Final DC Epz.apk'
];

$filePath = null;
foreach ($candidates as $c) {
    if (file_exists($c) && is_readable($c)) {
        $filePath = $c;
        break;
    }
}

if (!$filePath) {
    http_response_code(404);
    die('File not found.');
}

$filesize = filesize($filePath);
$filename = 'Final DC Epz.apk';

// Use standard octet-stream to bypass WAF / CDN restrictions on .apk MIME types
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename="' . $filename . '"');
header('Content-Length: ' . $filesize);
header('Cache-Control: private, no-transform, no-store, must-revalidate');
header('Pragma: no-cache');
header('Expires: 0');

// Stream file
$chunkSize = 1024 * 512; // 512KB chunks
$fp = fopen($filePath, 'rb');
if ($fp) {
    while (!feof($fp)) {
        echo fread($fp, $chunkSize);
        flush();
    }
    fclose($fp);
} else {
    readfile($filePath);
}
exit;
