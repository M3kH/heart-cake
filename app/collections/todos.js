var Base = require('./base');
    Todo = require('../models/todo');

module.exports = Base.extend({
  url: '/todos/all',
  model: Todo
});
module.exports.id = 'Todos';