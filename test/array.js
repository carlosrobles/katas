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

	describe('pickPeaks', function() {
		it('sould support finding peaks', function() {
			array.pickPeaks([1,2,3,6,4,1,2,3,2,1]).should.eql({"pos":[3,7],"peaks":[6,3]})
			array.pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]).should.eql({"pos":[2,7,14,20],"peaks":[5,6,5,5]})
		})
		it('should support finding peaks, but should ignore peaks on the edge of the array', function() {
			array.pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]).should.eql( {"pos":[3,7],"peaks":[6,3]})
		})
		it('should support finding peaks; if the peak is a plateau, it should only return the position of the first element of the plateau', function() {
			array.pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]).should.eql({"pos":[3,7,10],"peaks":[6,3,2]})
		})
		it('should support finding peaks; if the peak is a plateau, it should only return the position of the first element of the plateau', function() {
			array.pickPeaks([2,1,3,1,2,2,2,2,1]).should.eql({"pos":[2,4],"peaks":[3,2]})
		})
		it('should support finding peaks, but should ignore peaks on the edge of the array', function() {
			array.pickPeaks([2,1,3,1,2,2,2,2]).should.eql({"pos":[2],"peaks":[3]})
		})
		it('should support finding peaks, but should ignore peaks on the edge of the array', function() {
			array.pickPeaks([2,1,3,2,2,2,2,5,6]).should.eql({"pos":[2],"peaks":[3]})
		})
		it('should support finding peaks, despite the plateau', function() {
			array.pickPeaks([2,1,3,2,2,2,2,1]).should.eql({"pos":[2],"peaks":[3]})
		})
		it('should return an object with empty arrays if the input is an empty array', function() {
			array.pickPeaks([]).should.eql({"pos":[],"peaks":[]})
		})
		it('should return an object with empty arrays if the input does not contain any peak', function() {
			array.pickPeaks([1,1,1,1]).should.eql({"pos":[],"peaks":[]})
		})
	})
})
