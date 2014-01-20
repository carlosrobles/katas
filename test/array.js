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
		var arr1 = [3, -4, 8, 7, -10, 19, -3]
		, arr2   = [2, -3, -3, 9, -29, 8, -9]
		it('should return the max contiguous sum', function () {
			array.maxContiguousSum(arr1).should.equal(24)
			array.maxContiguousSum(arr2).should.equal(9)
		})
	})

	describe('bubbleSort', function () {
		var arr = [3, 4, -3, 2, -9]
		it('should sort an array', function () {
			array.bubbleSort(arr).should.eql([-9, -3, 2, 3, 4])
		})
	})

	describe('reverse', function () {
		var arr1 = "hello"
		, arr2   = "foobar"
		it('should reverse an array', function () {
			array.reverse(arr1.split('')).should.eql("olleh".split(''))
			array.reverse(arr2.split('')).should.eql("raboof".split(''))
		})
	})

	describe('maxIntNotIn', function () {

	})

})
