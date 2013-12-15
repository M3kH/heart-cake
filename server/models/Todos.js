
	// elsewhere, to use the client:
	var base = require("./base"),
		Bookshelf = base.BS,
		DB = base.DB;

	var Todos = Bookshelf.Model.extend({
		
	  tableName : "todos"
	  
	});
	
	var TodosCollection = Bookshelf.Collection.extend({
		model: Todos
	});
	
	
	module.exports.id = "todos";
	module.exports = {
		
		// get: function(req, api, callback){
			// console.log(api);
			// this.all(req, api, callback);
		// },
		
		get:{
			
			index: function(req, api, callback){
				this.all(req, api, callback);
			},
			
			install: function(req, api, callback){
				DB.schema.hasTable('todos').then(function(exists) {
					
				  if (!exists) {
				  	
					// Create the table
				    DB.schema.createTable('todos', function(t) {
				      t.increments('id').primary();
				      t.string('title', 100);
				      t.boolean('completed');
				    }).then(function(){
				    	callback(null, "Table 'players' as been created!");
				    });
				    
				  }else{
				  	
					// Modify the table
				    DB.schema.table('todos', function(t) {
				      t.increments('id').primary();
				      t.string('title', 100);
				      t.boolean('completed');
				    }).then(function(){
				    	callback(null, "Table 'players' as Modify!");
				    });
				  }
				});
			},
			
			all: function(req, api, callback){
		  	 		  
		  	 		  
		  	 	// This is the simple query system of Knex
		  	 	DB('todos').select('title', 'completed').then(function( result ){
					 callback(null,result);
		  	 	});
		  	 		 	
		  	 	// This is the Model and Collection Rapresentation by Bookshelf.
		 		// TodosCollection.forge().fetch().then(function( collection ){
					 // callback(null,collection.toJSON());
			  	// });
			}
		},
		
		post:{
			
		},
		
		put:{
			
		},
		
		del:{
			
		}
	};
