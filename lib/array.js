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
    }
}
