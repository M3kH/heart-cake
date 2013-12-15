	
	var models,
		fs = require("fs");
	/*
	 * Export the DataAdapter Function;
	 */
	module.exports = DataAdapter;
	
	function DataAdapter(options) {
	  this.options = options || {};
	}
	
	/*
	 * Declare the request function, this is called by Rendr with url parameter;
	 */
	DataAdapter.prototype.request = function(req, api, options, callback) {
	  var Model, Funct, method;
	  
	  // console.log(api);
	
	  if (arguments.length === 3) {
	    callback = options;
	    options = {};
	  }
	  
	  method = api.method.toLowerCase().replace('delete', 'del');
	
	  Model = getModel(api);
	  Funct = getFunction(Model, api, method);
	  
	  // Check if Model and Functions are Correct Declare otherwise return an error
	  if (!Model) return callback(new Error('Model not found'));
	  if (!Funct) return callback(new Error('Function not found'));
	
	  // Run the Model methon check getModel and getFunction
	  Model[method][Funct](req, api, function(err, body){
	    var res = {
	      statusCode: 200 // TODO Rules to determine statusCode.
	    };
	    callback(err, res, body);
	  });
	
	};
	
	/*
	 * This function embend the correct Model based on the first paramether 
	 * in the url to the rest /api/Todos ../models/Todos.js
	 */
	function getModel(api) {
	  var modelName, models = false;
	  // Parse the path and Capitalize the first letter
	  modelName = capitaliseFirstLetter(api.path.split('/')[1]);
	  
	  // read all files from current directory
		var files = fs.readdirSync("./server/models/");
		
		  files.forEach(function(file){
		  	if(modelName+".js" == file){
	  		  models = require("./../models/" + file);
		  	}
		  });
		  
		  return models;
		
	}
	
	/*
	 * Is passed the method and the path of the Api and the real Model based on the result of the Model
	 * Then check with the second parameter if Model.method.function exist Get /Todos/all/ ../models/Todos->all();
	 */
	function getFunction(Model, api, method) {
	  var FunctName, funct, paths = false;
	  // Parse the path.
	  paths = api.path.split('/');
	  if(paths.length >= 2 && paths[2] != ""){
	  	funct = paths[2];
	  }else{
	  	funct = "index";
	  }
	  
	  if( typeof Model[method][funct] == "function"){
		  FunctName = funct;
	  }
	  return FunctName;
	}
	
	function capitaliseFirstLetter(string) {
	  return string.charAt(0).toUpperCase() + string.slice(1);
	}
	
