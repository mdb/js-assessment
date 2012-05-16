if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(greeting, name) {
      var n = name,
          g = greeting;
      return {
        name: n,
        greeting: g,
        sayIt: function () {
          return g + ', ' + n;
        }
      }
    }
  };
});

