// This is the prefix
var p = "/api";

exports.init = function (app) {
	app.get(p+"/", function(req, res){
		// return {};
		res.send(" ");
	});
	
	app.get(p+"/players/all/", function(req, res){
		res.send(" ");
	});
	
	app.get(p+"/players/show/:id/", function(req, res){
		res.send(" ");
		// res.send({});
	});
};