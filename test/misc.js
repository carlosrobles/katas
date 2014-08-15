var mocha  = require('mocha')
var should = require('should')

var misc = require('../lib/misc')

describe('Misc', function() {

  describe('swap', function() {
    it('should swap 2 values', function() {
      misc.swap([1,2]).should.eql([2,1])
      misc.swap([34,193]).should.eql([193,34])
      misc.swap([-12,8]).should.eql([8,-12])
      misc.swap([-6,-3]).should.eql([-3,-6])
    })
  })

  describe('findFirst', function () {
    // Paris -> Madrid; Madrid -> Lisbon; Lisbon -> New York; New York -> San Francisco
    var tickets = [
    {
      "origin": "Madrid",
      "destination": "Lisbon"
    },
    {
      "origin": "Paris",
      "destination": "Madrid"
    },
    {
      "origin": "Lisbon",
      "destination": "New York"
    },
    {
      "origin": "New York",
      "destination": "San Francisco"
    }
    ]
    it('should find the first ticket of a trip', function() {
      misc.findFirst(tickets).should.equal("Paris")
    })
    it('should return -1 if no origin could be determined', function() {
      misc.findFirst([{ origin: "Paris", destination: "Paris" }]).should.equal(-1)
    })
  })

  describe('lookAndSay', function () {
    it('should return -1 if argument is < 0', function () {
      misc.lookAndSay(-2).should.equal(-1)
    })
    it('should return -1 is argument isNaN or empty string', function () {
      misc.lookAndSay(" ").should.equal(-1)
      misc.lookAndSay("").should.equal(-1)
    })
    it('should return a string matching the "lookAndSay" algorithm', function () {
      misc.lookAndSay(2).should.equal("1,11")
      misc.lookAndSay(3).should.equal("1,11,21")
      misc.lookAndSay(5).should.equal("1,11,21,1211,111221")
      misc.lookAndSay(6).should.equal("1,11,21,1211,111221,312211")
    })
  })
})
