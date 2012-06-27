if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
      var n = str2,
          g = str1;
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

