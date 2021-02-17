<!DOCTYPE html>
<html lang="kr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ url('css/app.css') }}">
</head>
<body>
    <div id="root"></div>
    <script src="{{ url('js/app.js') }}"></script>
</body>
</html>
