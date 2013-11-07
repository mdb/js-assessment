if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      var length = arr.length,
          i,
          pos;

      for (i=0; i<length; i++) {
        if (item === arr[i]) {
          pos = i;
          break;
        }
      }

      return pos ? pos : -1;
    },

    sum : function(arr) {
      var length = arr.length,
          sum = 0,
          i;

      for (i=0; i<length; i++) {
        sum += arr[i];
      }

      return sum;
    },

    remove : function(arr, item) {
      var result = [],
          length = arr.length,
          i;

      for (i=0; i<length; i++) {
        if (item !== arr[i]) {
          result.push(arr[i]);
        }
      }

      return result;
    },

    removeWithoutCopy : function(arr, item) {
      var length = arr.length,
          i;

      for (i=0; i<length; i++) {
        while (item === arr[i]) {
          arr.splice(i, 1);
        }
      }

      return arr;
    },

    append : function(arr, item) {
      arr.push(item);

      return arr;
    },

    truncate : function(arr) {

    },

    prepend : function(arr, item) {

    },

    curtail : function(arr) {

    },

    concat : function(arr1, arr2) {

    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
