'use strict';

var path = process.cwd();
var ClickHandler = require(path + '/app/controllers/clickHandler.server.js');

module.exports = function (app, passport) {
	app.route('/')
		.get(function (req, res) {
			var agent = req.headers["user-agent"];
			var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
			var out = {
			    "ipaddress": (ip.startsWith("::ffff:") ? ip.substring(7, ip.length) : ip) ,
			    "language": req.headers["accept-language"].split(",")[0],
			    "software": agent.slice(agent.indexOf("(")+1, agent.indexOf(")"))
			}
			res.send(out)
			//res.sendFile(path + '/public/index.html');
		});
};
