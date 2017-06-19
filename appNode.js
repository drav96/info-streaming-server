'use strict';
const Process = require('process');
Process.on('SIGINT', function () {
	Process.exit();
});


//=============================Dependencies list================================
const express = require('express');
const config = require('config');
const cors = require('cors');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const helmet = require('helmet');
const expressValidator = require('express-validator');
const os = require("os");
const http = require('http');
const fs = require('fs');
const passport = require('passport');


//===========================Application router basic config====================
const app = express();

//===========================Middleware loading=================================
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressValidator());
app.use(cookieParser());

//===========================Access log configuration===========================
const accessLogStream = fs.createWriteStream(path.join(config.get('log.path'), 'access.log'), {flags: 'a'});
if (app.get('env') === 'production') {
	app.use(logger('combined', {stream: accessLogStream}));
	let access = fs.createWriteStream(__dirname + 'node.log');
	process.stdout.write = process.stderr.write = access.write.bind(access);
	process.on('uncaughtException', (err) => {
		console.error((err && err.stack) ? err.stack : err);
	});
} else {
	app.use(logger('dev'));
}

//===========================Route configuration map============================
app.use(express.static(config.get('content.path')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/views/index.html'));
});

//Passport init & Bring in Passport Strategy
app.use(passport.initialize());
require('./app/middleware/passport/passport')(passport);


const Routing = require('./config/routing/routing');

Routing.loadAuthenticationMiddleware(app);
Routing.route(app);


//===========================Database configuration=============================
const dbDSN =
	      config.get('database.scheme') +
	      "://" + config.get('database.user') + ":" +
	      config.get('database.pass') + "@" +
	      config.get('database.host') +
	      ":" +
	      config.get('database.port') +
	      "/" +
	      config.get('database.database');
mongoose.Promise = require('bluebird');
mongoose.connect(dbDSN);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//===========================Server bootup======================================
db.once('open', () => {
	let server = http.createServer(app);
	server.listen(3000, () => {
		console.log(`====== SM Calendar Server is listening on host: ${config.get('server.hostname')} and port: ${config.get('server.port')} ======`);
		console.log('Date: ' + new Date());
		console.log(`Environment: ${app.get('env') }`);
	});

});
