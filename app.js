var express = require('express');
var moment = require('moment');
var v = require('voca');
moment().format('yyyy-mm-dd');
var app = express();


app.get('/', function(req, res) {
	res.send('Hola, bienvenido al Heading to Codefest');
});

app.get('/numdias', function(req, res) {
	var fechaHoy = moment();
	let fecha = moment(req.query.fecha);
	var dia = fecha.diff(fechaHoy, 'days');
	if (dia > 0 ) {
		res.send(`Número de días hasta hoy: ${dia}`);
	} else {
		var dia = Math.abs(dia);
		res.send(`Han pasado: ${dia}`);
	}
	
});

app.get('/saludo', function(req, res) {
	let nombre = req.query.nombre;
	if(nombre) {
		res.send(`Hola ${nombre}, bienvenido al Heading to Codefest`);
	} else {
		res.send('Hola, bienvenido al Heading to Codefest');
	}
});
app.get('/reverse-word', function(req, res) {
	let vuelta = req.query.vuelta;
	var palabra = v.reverse(vuelta);
	res.send(`Palabra dada la vuelta: ${palabra}`);
	
});
app.get('/is-lower-case', function(req, res) {
	let palabra = req.query.vuelta;
	var bool = v.isLowerCase(palabra);
	res.send(`${bool}`);
});


app.listen(3000, function() {
	console.log("Taller NodeJS app listening on port 3000");
});