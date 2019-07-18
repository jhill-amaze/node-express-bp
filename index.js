var path = require('path');
var express = require('express');
var PORT = process.env.PORT || 5000;
var app = express();

app.set('port', PORT);

app.get('/', function(req, res){

	res.sendFile(__dirname + '/index.html');
});

app.listen(app.get('port'), function(){

	console.log('server started on port ' + app.get('port'));
});