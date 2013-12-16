var BaseView = require('../base');

var ItemView = BaseView.extend({
	tagName: 'li',
});

module.exports = BaseView.extend({
	className: 'todos_all_view',
	
    // The DOM events specific to an item.
    events: {
        'click .toggle': 'toggleCompleted',
        'dblclick label': 'edit',
        'click .destroy': 'clear',
        'keypress #new-todo': 'insert',
        'keypress .edit': 'updateOnEnter',
        'blur .edit': 'close'
    },
    
    // The TodoView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a **Todo** and a **TodoView** in this
    // app, we set a direct reference on the model for convenience.
    postInitialize: function () {
            // this.listenTo(this.model, 'change', this.postRender);
            // this.listenTo(this.model, 'destroy', this.remove);
            // this.listenTo(this.model, 'visible', this.toggleVisible);
    },

    // Re-render the titles of the todo item.
    postRender: function () {
            // this.$el.html(this.getTemplate(this.model.toJSON()));
            // this.$el.toggleClass('completed', this.model.get('completed'));
            // this.toggleVisible();
            // this.$input = this.$('.edit');
            // return this;
    },
    
    insert: function(){
    	console.log("Key Enter");
        if (e.which === 13) {
                this.close();
        }
    },
    
	toggleVisible: function () {
            this.$el.toggleClass('hidden', this.isHidden());
    },

    isHidden: function () {
            var isCompleted = this.model.get('completed');
            return (// hidden cases only
                    (!isCompleted && app.TodoFilter === 'completed') ||
                    (isCompleted && app.TodoFilter === 'active')
            );
    },

    // Toggle the `"completed"` state of the model.
    toggleCompleted: function () {
            this.model.toggle();
    },

    // Switch this view into `"editing"` mode, displaying the input field.
    insert: function () {
    	console.log(this);
        this.$el.addClass('editing');
        this.$input.focus();
    },
    
    // Switch this view into `"editing"` mode, displaying the input field.
    edit: function () {
    	console.log(this);
        this.$el.addClass('editing');
        this.$input.focus();
    },

    // Close the `"editing"` mode, saving changes to the todo.
    close: function () {
            var value = this.$input.val();
            var trimmedValue = value.trim();

            if (trimmedValue) {
                    this.model.save({ title: trimmedValue });

                    if (value !== trimmedValue) {
                            // Model values changes consisting of whitespaces only are not causing change to be triggered
                            // Therefore we've to compare untrimmed version with a trimmed one to chech whether anything changed
                            // And if yes, we've to trigger change event ourselves
                            this.model.trigger('change');
                    }
            } else {
                    this.clear();
            }

            this.$el.removeClass('editing');
    },

    // If you hit `enter`, we're through editing the item.
    updateOnEnter: function (e) {
    	console.log("Key Enter");
        if (e.which === 13) {
                this.close();
        }
    },

    // Remove the item, destroy the model from *localStorage* and delete its view.
    clear: function () {
            this.model.destroy();
    }
});
module.exports.id = 'todos/all';
