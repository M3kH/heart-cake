module.exports = function(Handlebars) {

var templates = {};

templates["home/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1>Hello! </h1>\n\n<p class=\"lead\">You are viewing the home/index template.</p>\n<p>You can find this template at '<strong>/Users/mm/work/heart-cake/app/templates/home/index.hbs</strong>'</p>\n\n";
  });

templates["todos/all"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <li class=\"";
  stack1 = helpers['if'].call(depth0, depth0.completed, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" >\n	<div class=\"view\">\n		<input class=\"toggle\" type=\"checkbox\" ";
  stack1 = helpers['if'].call(depth0, depth0.completed, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " >\n		<label>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</label>\n		<button class=\"destroy\"></button>\n	</div>\n	<input class=\"edit\" value=\"";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" >\n  </li>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "completed";
  }

function program4(depth0,data) {
  
  
  return "checked=\"checked\"";
  }

  buffer += "<!-- <h1>Hello! </h1>\n\n<p class=\"lead\">You are viewing the Todos/all template.</p>\n<p>You can find this template at '<strong>/Users/mm/work/heart-cake/app/templates/todos/all.hbs</strong>'</p>\n-->\n\n\n<input id=\"toggle-all\" type=\"checkbox\">\n<label for=\"toggle-all\">Mark all as complete</label>\n<ul id=\"todo-list\">\n";
  stack1 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n\n<!-- <span id=\"todo-count\"><strong><%= remaining %></strong> <%= remaining === 1 ? 'item' : 'items' %> left</span>\n<ul id=\"filters\">\n	<li>\n		<a class=\"selected\" href=\"#/\">All</a>\n	</li>\n	<li>\n		<a href=\"#/active\">Active</a>\n	</li>\n	<li>\n		<a href=\"#/completed\">Completed</a>\n	</li>\n</ul>\n<% if (completed) { %>\n<button id=\"clear-completed\">Clear completed (<%= completed %>)</button>\n<% } %> -->";
  return buffer;
  });

templates["todos/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1>Hello! </h1>\n\n<p class=\"lead\">You are viewing the Todos/index template.</p>\n<p>You can find this template at '<strong>/Users/mm/work/heart-cake/app/templates/todos/index.hbs</strong>'</p>\n\n";
  });

return templates;

};