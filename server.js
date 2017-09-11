var express = require('express');
var path = require('path');
var app = express();
//var csrf = require('csurf');
//var bodyParser = require('body-parser');

// Define the static file directory, it will be 'app'
app.use('/', express.static(path.join(__dirname, 'src'), {maxAge: 600000}));
// app.use(favicon(__dirname + '/web/static_components/images/favicon.ico'));

//app.use(csrf());
//app.use(bodyParser.json());

// Create the http server and get it to
// listen on the specified port 8080
app.listen(process.env.PORT || 8080);
