'use strict';

const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const port = 3000;

app.use(express.static(__dirname + ''));
app.set('view engine', 'njk');
nunjucks.configure({
	express: app,
	autoescape: true
});

app.get('/', function (request, response) {
	response.send('a');
});

app.listen(port, function () {
	console.log ('we are on ' + port);
});