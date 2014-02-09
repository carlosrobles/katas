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
			array.maxContiguousSum([1, 2, 3, -8, 3, 3, 4, -2, 7, -2]).should.equal(15)
			array.maxContiguousSum([-8, 1, 7, -2, -3, 4, -2, 5]).should.equal(10)
			array.maxContiguousSum([-8, -10, -12, -2, -3, -4, -2]).should.equal(0)
			array.maxContiguousSum([7, -7, 8, -2, 3, -2, 1, -1]).should.equal(9)
			array.maxContiguousSum([-2, -1, 4, -2, 2, 3, -2]).should.equal(7)
			array.maxContiguousSum([32, -11, -56, 78, -8, 1, -2]).should.equal(78)
			array.maxContiguousSum([-10, 8, 3, -100, 23, 12, 56]).should.equal(91)
			array.maxContiguousSum([58, 10, -32, -22, 3, -4, 34]).should.equal(68)
		})
	})

	describe('bubbleSort', function () {
		it('should sort an array', function () {
			array.bubbleSort([3, 4, -3, 2, -9]).should.eql([-9, -3, 2, 3, 4])
		})
	})

	describe('reverse', function () {
		it('should reverse an array', function () {
			array.reverse("hello".split('')).should.eql("olleh".split(''))
			array.reverse("foobar".split('')).should.eql("raboof".split(''))
		})
	})

	describe('maxIntNotIn', function () {
		it('should return the biggest value in an array of positive integers', function () {
			array.maxIntNotIn([5, 2, 3, 9, 6]).should.equal(8)
			array.maxIntNotIn([2, 3, 4, 5, 6]).should.equal(1)
		})
		it('should return -1 if the array is complete from 0 to max', function () {
			array.maxIntNotIn([0,1,2,3,4,5]).should.equal(-1)
		})
	})

})
