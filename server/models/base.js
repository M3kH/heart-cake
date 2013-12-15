	
	var Bookshelf = require("bookshelf"),
		Knex = require("knex");
	
	/*
	 * Insert your DB Connection details
	 */	
	var confg = {
	  client: 'pg',
	  connection: {
	    // your connection config
	    host     : 'localhost',
	    user     : 'mm',
	    password : '',
	    database : 'todos'
	  }
	};
	
	/*
	 * Export two DB Classes,
	 * - BS is a BookShelf method witch give us the possibility to make Models and Collections
	 * - DB is a Knex initizialization witch give as a full describe interface query system.
	 */
	Bookshelf.BS = Bookshelf.initialize(confg);
	Bookshelf.DB = Knex.initialize(confg);
	
	module.exports = Bookshelf;
