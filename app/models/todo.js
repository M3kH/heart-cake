var Base = require('./base');

module.exports = Base.extend({
	title: '',
	completed: false,
  	// Toggle the `completed` state of this todo item.
	toggle: function () {
        this.save({
                completed: !this.get('completed')
        });
	}
});
module.exports.id = 'Todo';