<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @vite(['resources/sass/app.scss'])

    <title>Laravel</title>

    <link href="https://fonts.googleapis.com/css?family=Inter:100,200,500,600" rel="stylesheet">
</head>
<body>

<div id="rootVueApp"></div>
@vite(['resources/js/app.js'])
</body>
</html>
