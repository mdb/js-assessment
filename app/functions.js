if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      var greeting = arr[0],
          name = arr[1],
          punctuation = arr[2];

      return fn(greeting, name, punctuation);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str) {

      return function (param) {
        return str + ', ' + param;
      };
    },

    partial : function(fn, str1, str2) {
      var context = this,
          args = Array.prototype.slice.call(arguments, 1);
      
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

    callIt : function(fn) {
      var args = [],
          argsLength = arguments.length,
          i;

      for (i=1; i<argsLength; i++) {
        args.push(arguments[i]);
      }

      return fn.apply(null, args);
    },

    curryIt : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1);

      return function() {
        return fn.apply(this, args.concat(Array.prototype.slice.call(arguments)));
      }
    },

    makeClosures : function(arr, fn) {
      var arrLength = arr.length,
          i,
          newArr = [],
          closure = function (arg) {
            return function() {
              return fn(arg);
            };
          };

      for (i=0; i<arrLength; i++) {
        newArr.push(closure(arr[i]));
      }

      return newArr;
    }
  };
});
