<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Document</title>
</head>
<body>
    <div id="app">
        <employee-edit :employee="{{$employee}}"></employee-edit>
    </div>
    <script src="{{asset('js/app.js')}}"></script>
</body>
</html>