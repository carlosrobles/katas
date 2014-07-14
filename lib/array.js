module.exports = {
  /**
   * Returns the index of an item in an ordered array
   *
   * @param {int} the integer to search
   * @return {int}
   */
  binarySearch: function (arr, item) {
    var floor = 0
    , ceil    = arr.length-1
    , guess
    while (floor <= ceil) {
      guess = Math.floor( (floor + ceil)/2 )
      if (arr[guess] < item) {
        floor = guess + 1
      }
      else if (arr[guess] > item) {
        ceil = guess - 1
      }
      else if (arr[guess] == item) {
        return guess
      }
    }
    return -1
  },

  /**
   * Given that an unsorted array of integer values,
   * find the maximum sum of any contiguous range within the array.
   *
   * Example:
   *
   * [3, -4, 8, 7, -10, 19, -3]
   *         -------------
   *               ||
   *               \/
   *               24
   *
   * @param {Array} arr    The array to analyze
   * @return {Array}
   */
  maxContiguousSum: function (arr) {
    var max_so_far    = 0
    , max_ending_here = 0
    for (var i = 0; i < arr.length; i++) {
      max_ending_here = Math.max(0, max_ending_here + arr[i])
      max_so_far = Math.max(max_so_far, max_ending_here)
    }
    return max_so_far
  },

  /**
   * The very simple Bubble sort
   *
   * @param {Array} arr    The array to sort
   * @return {Array}
   */
  bubbleSort: function (arr) {
    var sorted = false
    , size     = arr.length
    , tmp      = 0
    while (!sorted) {
      sorted = true
      for (var i = 0 ; i < size ; i++) {
        if (arr[i] > arr[i + 1]) {
          tmp        = arr[i]
          arr[i]     = arr[i + 1]
          arr[i + 1] = tmp
          sorted = false
        }
      }
      size--
    }
    return arr
  },

  /**
   * Reverse the array
   * {"h","e","l","l","o"} becomes {"o","l","l","e","h"}
   *
   * @param {Array} arr    The array to reverse
   * @return {Array}
   */
  reverse: function (arr) {
    var tmp
    , i = arr.length - 1
    while (i >= arr.length/2) {
      tmp    = arr[i]
      arr[i] = arr[arr.length - i -1]
      arr[arr.length - i -1] = tmp
      i--
    }
    return arr
  },

  /**
   * Returns the biggest value not in an array of positive integers
   *
   * Example:
   * [8,2,3,5,6] returns 7
   * [1,2,3,4,5] return 0
   *
   * @param {Array} arr    The array to analyze
   * @return {int} if found {-1} if the array is complete
   */
  maxIntNotIn: function (arr) {
    // Find the max
    var max = arr[0]
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]
      }
    }
    // Go through the array to find the (min - x)
    var curMax = max - 1
    , found    = false
    , i        = 0
    while (curMax > 0) {
      i = 0
      found = false
      while (i < arr.length) {
        if (arr[i] == curMax) {
          found = true
        }
        i++
      }
      if (!found) return curMax
        curMax--
    }
    // Well, arr array has no missing value (complete from 0 to max)
    return -1
  },

  /**
   * http://www.codewars.com/dojo/katas/5279f6fe5ab7f447890006a7/train/javascript
   *
   * Create an object that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.
   *
   * Example:
   * the array arr = [ 0 , 1 , 2 , 5 , 1 , 0 ] has a peak in position 3 with a value of 5 (arr[3] = 5)
   *
   * The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays.
   * If there is no peak in the given array, then the output should be {pos: [], peaks: []}.
   *
   * Example:
   * pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]) returns {pos:[3,7],peaks:[6,3]}
   *
   * All input arrays will be valid numeric arrays (although it could still be empty), so you won't need to validate the input.
   *
   * The first and last elements of the array will not be considered as peaks
   * (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).
   *
   * Also, beware of plateaus !!! [1,2,2,2,1] has a peak while [1, 2, 2, 2, 3] does not.
   * In case of a plateau-peak, please only return the position and value of the beginning of the plateau.
   *
   * Example:
   * pickPeaks([1,2,2,2,1]) returns {pos:[1],peaks:[2]}
   */
  pickPeaks: function(arr) {
    r = {pos:[], peaks: []}
    var m = 0;
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > arr[i-1]) m = i;
      else if (m && arr[i] < arr[i-1]) {
        r.peaks.push(arr[m]);
        r.pos.push(m);
        m = 0;
      }
    }
    return r;
  }

  /**
  Old solution:

  function pickPeaks(arr){
      var peaks   = {pos:[],peaks:[]}
      , curMax    = 0
      , ascending = true
      for (var i = 1; i < arr.length - 1; i++) {
          var cur = arr[i]
          , plateau = cur === arr[i+1]
          curMax = Math.max(cur, curMax)
          if (cur < curMax && ascending) {
              peaks.pos.push(i-1)
              peaks.peaks.push(curMax)
              curMax = 0
              ascending = false
          }
          if (plateau) {
              var plateauIndex = i
              while(cur === arr[i+1]){i++}
              if (arr[i+1] < cur && cur > arr[plateauIndex-1] && i+1 < arr.length) {
                  peaks.pos.push(plateauIndex)
                  peaks.peaks.push(cur)
                  curMax = 0
              }
          }
          if (cur < arr[i+1]) {
              ascending = true
          }
      }

      return peaks
  }
  */
}
