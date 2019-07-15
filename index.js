var path = require('path');
var express = require('express');

var app = express();

app.set('port', (process.env.PORT || 8080));

app.get('/', function(req, res){

	res.sendFile(__dirname + '/index.html');
});

app.listen(app.get('port'), function(){

	console.log('server started on port ' + app.get('port'));
});