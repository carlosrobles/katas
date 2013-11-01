/**
* Returns the index of an item in an ordered array
* @param {int} the integer to search
* @return {int}
*/
Array.prototype.binarySearch = function (item) {
    var floor = 0
    var ceil  = this.length-1
    var guess
    while (floor <= ceil) {
        guess = Math.floor( (floor + ceil)/2 )
        if (this[guess] < item) {
            floor = guess + 1
        }
        else if (this[guess] > item) {
            ceil = guess - 1
        }
        else if (this[guess] == item) {
            return guess
        }
    }
    return -1
}


/**
* The very simple Bubble sort
* @return {void}
*/
Array.prototype.bubbleSort = function () {
    var sorted = false
    var size = this.length
    var tmp  = 0
    while (!sorted) {
        sorted = true
        for (var i=0 ; i<size-1 ; i++) {
            if (this[i] > this[i+1]) {
                tmp       = this[i]
                this[i]   = this[i+1]
                this[i+1] = tmp
            }
        }
        size--
    }
}

/**
 * Reverse the array 
 * {"h","e","l","l","o"} becomes {"o","l","l","e","h"}
 * @return {void}
 */
Array.reverse = function () {
    var tmp
    i = this.length-1
    while (i>this.length/2) {
        tmp            = this[i]
        this[i]        = this[i-this.length]
        this[i-length] = tmp
    }
}

/**
 * Returns the biggest value not in an array of integers
 * {"8","2","3","5","6"} returns 7. ("-8","2","3","-5","-6") returns 1.
 * @return {int} if found {-1} if the array is complete
 */
Array.prototype.maxIntNotIn = function () {
    // Find the max
    var max = this[0]
    for (i=1 ; i<this.length ; i++) {
        if (this[i]>max)
            max = this[i]
    }
    // Go through the array to find the (min - x)
    var curMax = max-1
    var found  = false
    i          = 0
    while (curMax>0) {
        i=0
        found=false
        while (i<this.length) {
            if (this[i] == curMax)
                found = true
            i++
        }
        if (!found) return curMax
        curMax--
    }
    // Well, this array has no missing value (complete from 0 to max)
    return -1
}

/**
* Empty and populate an array with integers until the specified size - 1
* Used for tests on big arrays
* @param  {size} size of the array
* @return {void}
*/
Array.prototype.populate = function (size) {
    this.splice(0,this.length)
    for (i=0 ; i<size ; i++)
        this[i]=i
}
