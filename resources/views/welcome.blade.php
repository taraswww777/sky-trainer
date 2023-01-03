<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="{{ URL::asset('css/app.css') }}">

    <title>Laravel</title>

    <link href="https://fonts.googleapis.com/css?family=Inter:200,600" rel="stylesheet">
</head>
<body>

<div id="rootVueApp"></div>

<script src="{{ URL::asset('js/app.js') }}" type="text/javascript"></script>
</body>
</html>
