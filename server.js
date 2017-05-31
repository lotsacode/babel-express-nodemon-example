var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('<script src="/lib/test.js"></script>');
});

app.use('/lib', express.static(__dirname + '/lib'));

app.listen(9001, function() {
	console.log('Listening on port 9001.');
});
