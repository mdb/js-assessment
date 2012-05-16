if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(arr) {
      var greeting = arr[0],
          name = arr[1],
          punctuation = arr[2];

      return greeting + ', ' + name + punctuation;
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function() {
      var args = arguments;

      return function (param) {
        return args[0] + ', ' + param;
      };
    },

    partial : function(origFn) {
      var fn = origFn,
          context = this,
          args = Array.prototype.slice.call(arguments, 1); //arguments is enought of an array for this to work
      
      return function () {
        for (var i=0; i<arguments.length; i++) {
          args.push(arguments[i]);
        }
        return fn.apply(context, args);
      };
    },

    useArguments : function() {
      var total = 0,
          argsLength = arguments.length,
          i;

      for (i=0; i<argsLength; i++) {
        total = total + arguments[i];
      }

      return total;
    },

    callIt : function() {

    },

    curryIt : function() {

    },

    makeClosures : function() {

    }
  };
});
