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
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    var array1 = arr1.slice(0)
    var array2 = arr2.slice(0)
    while (array2.length > 0) {
      var item = array2.shift()
      array1.push(item)
    };
    return array1
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var counter = 0
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        counter += 1
      }
    };
    return counter;
  },

  duplicates: function(arr) {
    var a = arr.slice(0)
    a.sort()
    var duplicates = []
    for (var i = 0; i < arr.length; i++) {
  
    }
  },

  square: function(arr) {
    var a = []
    for (var i = 0; i < arr.length; i++) {
      a.push(arr[i] * arr[i])
    };
    return a
  },

  findAllOccurrences: function(arr, target) {
    var a = []
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == target) {
        a.push(i)
      };
    };
    return a
  }
};
