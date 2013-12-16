module.exports = {

  index: function (params, callback) {
    
    callback();
    
  },

  all: function(params, callback) {
    
    this.app.set('title', 'Todos');
    this.app.set('completed', 'Todos');

    var spec = {
      collection: {collection: 'Todos', params: params}
    };
    
    this.app.fetch(spec, function(err, result) {
      callback(err, result);
    });
    
  }

};