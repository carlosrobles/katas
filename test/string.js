var mocha  = require('mocha')
var should = require('should')

var string = require('../lib/string')

describe('String', function () {

    describe('validateBrackets', function () {
        it('should validate a string with same ammount of opening/closing characters', function () {
            string.validateBrackets("()()()").should.be.true
            string.validateBrackets("[]{}()").should.be.true
            string.validateBrackets("([])").should.be.true
        })
        it('should invalidate a string with different amounf of opening/closing characters', function () {
            string.validateBrackets("()()(").should.be.false
            string.validateBrackets("[]{()").should.be.false
            string.validateBrackets("([]){}}").should.be.false
        })
        it('should invalidate a string if closing char is not correct for last opened char', function () {
            string.validateBrackets("(){(})").should.be.false
        })
        it('should validate/invalidate complex strings', function () {
            string.validateBrackets("([{}])").should.be.true
            string.validateBrackets("([{}{}])").should.be.true
            string.validateBrackets("[({})](]").should.be.false
            string.validateBrackets("[(])").should.be.false
        })
    })

    describe('validParentheses', function () {
        it('should invalidate incorrect strings', function () {
            string.validParentheses("())").should.be.false
            string.validParentheses("((())").should.be.false
        })
        it('should validate correct strings', function () {
            string.validParentheses("()").should.be.true
            string.validParentheses("((()))").should.be.true
        })
    })
})
