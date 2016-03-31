'use strict';

var path = process.cwd();
var ClickHandler = require(path + '/app/controllers/clickHandler.server.js');

module.exports = function (app, passport) {
	app.route('/')
		.get(function (req, res) {
			var ip = req.connection.remoteAddress;
			res.send("IP: "+ip)
			//res.sendFile(path + '/public/index.html');
		});
};
