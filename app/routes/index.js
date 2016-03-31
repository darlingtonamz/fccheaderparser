'use strict';

var path = process.cwd();
var ClickHandler = require(path + '/app/controllers/clickHandler.server.js');

module.exports = function (app, passport) {
	app.route('/')
		.get(function (req, res) {
			var agent = req.headers["user-agent"];
			var out = {
			    "ipaddress": req.ip,
			    "language": req.headers["accept-language"].split(",")[0],
			    "software": agent.slice(agent.indexOf("(")+1, agent.indexOf(")"))
			}
			res.send(out)
			//res.sendFile(path + '/public/index.html');
		});
};
