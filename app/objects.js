if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.call(obj);
    },

    alterObjects : function(constructor) {
      var c = constructor;

      c.prototype.greeting = arguments[1];
    },

    iterate : function(obj) {

    }
  };
});
