// zaciąganie całego folderu 

var express = require('express');

var app = express();

app.use(express.static(__dirname));

app.use(express.static('static'));

app.listen(4000);


// zaciąganie expressem tylko pliku html - na początek

// var express = require('express');

// var app = express();
// var path = require('path');

// app.get('/', function(req, res){
//     res.sendFile(path.join(__dirname + "/static/index.html"));
// });

// app.listen(3000);
