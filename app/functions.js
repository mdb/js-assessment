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

    },

    functionFunction : function() {

    },

    partial : function() {

    },

    useArguments : function() {

    },

    callIt : function() {

    },

    curryIt : function() {

    },

    makeClosures : function() {

    }
  };
});
