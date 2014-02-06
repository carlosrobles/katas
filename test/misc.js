var mocha  = require('mocha')
var should = require('should')

var misc = require('../lib/misc')

describe('Misc', function () {

    describe('validateBrackets', function () {
        it('should validate a string with same ammount of opening/closing characters', function () {
            misc.validateBrackets("()()()").should.be.true
            misc.validateBrackets("[]{}()").should.be.true
            misc.validateBrackets("([])").should.be.true
        })
        it('should invalidate a string with different amounf of opening/closing characters', function () {
            misc.validateBrackets("()()(").should.be.false
            misc.validateBrackets("[]{()").should.be.false
            misc.validateBrackets("([]){}}").should.be.false
        })
        it('should invalidate a string if closing char is not correct for last opened char', function () {
            misc.validateBrackets("(){(})").should.be.false
            //misc.validateBrackets("[]{}()").should.be.true
        })
        it('should validate complex strings', function () {
            misc.validateBrackets("([{}])").should.be.true
            misc.validateBrackets("([{}{}])").should.be.true
            misc.validateBrackets("[({})](]").should.be.false
            misc.validateBrackets("[(])").should.be.false
        })
    })

})
