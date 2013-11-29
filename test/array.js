var mocha  = require('mocha')
var should = require('should')

var array = require('../lib/array')

describe('Array', function () {

	describe('binarySearch', function () {
		var arr = [1,2,3,4,5,6]
		it('should find the index of a value in a sorted array', function () {
			array.binarySearch(arr, 2).should.equal(1)
			array.binarySearch(arr, 5).should.equal(4)
		})
		it('should return -1 if value is not found', function () {
			array.binarySearch(12).should.equal(-1)
			array.binarySearch(34).should.equal(-1)
		})
	})

	describe('maxContiguousSum', function () {
		var arr = [3, -4, 8, 7, -10, 19, -3]
		it('should return the max contiguous sum', function () {
			array.maxContiguousSum(arr).should.equal(24)
		})
	})

	describe('bubbleSort', function () {
		
	})

	describe('reverse', function () {
		
	})

	describe('maxIntNotIn', function () {
		
	})

})