var mocha  = require('mocha')
var should = require('should')

var algos = require('../lib/algos.js')

describe('Array.binarySearch', function () {
	var array = [1,2,3,4,5,6]
	it('should find a value in a sorted array', function () {
		console.log(array.binarySearch(2))
		console.log(array.binarySearch(5))
		array.binarySearch(2).should.equal(1)
		array.binarySearch(5).should.equal(4)
	})
	it('should return -1 if value is not found', function () {
		console.log(array.binarySearch(12))
		array.binarySearch(12).should.equal(-1)
		array.binarySearch(34).should.equal(-1)
	})
})

describe('Array.maxContiguousSum', function () {
	var array = [3, -4, 8, 7, -10, 19, -3]
	it('should return the max contiguous sum', function () {
		array.maxContiguousSum().should.equal(24)
	})
})

describe('Array.binarySearch', function () {
	
})

describe('Array.bubbleSort', function () {
	
})

describe('Array.reverse', function () {
	
})

describe('Array.maxIntNotIn', function () {
	
})