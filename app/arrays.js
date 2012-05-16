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
      var newArr = arr;

      newArr.splice(index, 0, item);

      return newArr;
    },

    count : function(arr, item) {
      var count = 0,
          arrLength = arr.length,
          i;

      for (i = 0; i < arrLength; i++) {
        if (arr[i] === item) {
          count = count + 1;
        }
      }

      return count;
    },

    duplicates : function(arr) {
      var current,
          dups = [];
          
      for (var i=0; i<arr.length; i++) {
        current = arr[i];
        for (var j=0; j<arr.length; j++) {
          if (i !== j && arr[i] === arr[j]) {
            var documented = false;

            for (var k=0; k<dups.length; k++) {
              if (current === dups[k]) {
                documented = true;
              }
            }

            if (documented === false) {
              dups.push(current); 
            }
          }
        }
      }

      return dups;
    },

    square : function(arr) {
      var newArr = [],
          arrLength = arr.length,
          i;

      for (i=0; i<arrLength; i++) {
        newArr.push(arr[i] * arr[i]);
      }

      return newArr;
    },

    findAllOccurrences : function(arr, target) {
      var arrLength = arr.length,
          i,
          positions = [];

      for (i=0; i<arrLength; i++) {
        if (arr[i] === target) {
          positions.push(i);
        }
      }
      
      positions.join(' ');

      return positions;
    }
  };
});
