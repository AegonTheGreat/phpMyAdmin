#!/usr/bin/env node

const express = require('express');
const args = process.argv.splice(2);
const port = args[0] || 8547;
const app = express();

// var execPHP = require('./execphp.js')();

// execPHP.phpFolder = '/var/www/html';
app.use(express.static('/var/www/html'));

/* app.use('*.php',function(request,response,next) {
  console.log(request.originalUrl);
	execPHP.parseFile(request.originalUrl,function(phpResult) {
		response.write(phpResult);
		response.end();
	});
}); */

app.get('/phpmyadmin',function(request,response,next) {
  response.redirect("/phpmyadmin/index.php");
});

app.listen(port)
