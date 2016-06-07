exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    var isEmpty = true
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        isEmpty = false
        return i;
      };
    };
    if (isEmpty) {
      return -1;
    };
  },

  sum: function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    };
    return sum;
  },

  remove: function(arr, item) {
    var a = arr.slice(0)
    while(a.indexOf(item) !== -1) {
      itemIndex = a.indexOf(item);
      a.splice(itemIndex, 1);
    };
    return a;
  },

  removeWithoutCopy: function(arr, item) {
    while(arr.indexOf(item) !== -1) {
      itemIndex = arr.indexOf(item);
      arr.splice(itemIndex, 1);
    };
    return arr;
  },

  append: function(arr, item) {

  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
