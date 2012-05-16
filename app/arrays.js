if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      var i,
          arrLength = arr.length;
      
      for (i = 0; i <= arrLength; i++) {
        if (arr[i] == item) {
          return i;
        }
      }
    },

    sum : function(arr) {
      var total = 0,
          i;

      for (i in arr) {
        total += arr[i]
      }

      return total;
    },

    remove : function(arr, item) {
      var newArr = [],
          arrLength = arr.length,
          i;

      for (i = 0; i < arrLength; i++) {
        if (arr[i] !== item) {
          newArr.push(arr[i]);
        }
      }

      return newArr;
    },

    append : function(arr, item) {
      var newArr = arr;

      newArr.push(item);

      return newArr;
    },

    truncate : function(arr) {
      var newArr = arr;

      newArr.pop();

      return newArr;
    },

    concat : function(arr1, arr2) {
      var newArr = arr1.concat(arr2);

      return newArr;
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
