<?php
// APK Direct Download Handler
$filePath = __DIR__ . '/Final DC Epz.apk';
if (!file_exists($filePath)) {
    $filePath = dirname(__DIR__) . '/Final DC Epz.apk';
}

if (!file_exists($filePath)) {
    http_response_code(404);
    die('Error: APK file not found.');
}

$filename = 'Final DC Epz.apk';
$filesize = filesize($filePath);

while (ob_get_level() > 0) {
    ob_end_clean();
}

header('Content-Description: File Transfer');
header('Content-Type: application/vnd.android.package-archive');
header('Content-Disposition: attachment; filename="' . $filename . '"');
header('Content-Transfer-Encoding: binary');
header('Expires: 0');
header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
header('Pragma: public');
header('Content-Length: ' . $filesize);
header('Accept-Ranges: bytes');

$chunkSize = 1024 * 1024;
$handle = fopen($filePath, 'rb');
if ($handle !== false) {
    while (!feof($handle)) {
        echo fread($handle, $chunkSize);
        flush();
    }
    fclose($handle);
} else {
    readfile($filePath);
}
exit;
