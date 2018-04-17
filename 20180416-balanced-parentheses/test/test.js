const assert = require('assert')
const balanced = require('../index')

describe('balanced', function() {
    describe('empty string returns true', function() {
        assert.equal(balanced(''), true)
    })
    describe('single open parentheses should return false', function() {
        assert.equal(balanced('('), false)
    })
    describe('string without parentheses returns true', function() {
        assert.equal(balanced('abcde'), true)
    })
    describe('single matching parentheses pair returns true', function() {
        assert.equal(balanced('()'), true)
    })
    describe('single closing parentheses returns false', function() {
        assert.equal(balanced(')'), false)
    })
    describe('single square bracket returns false', function() {
        assert.equal(balanced('['), false)
    })
    describe('pair of square brackets returns true', function() {
        assert.equal(balanced('[]'), true)
    })
    describe('overlapping parens returns false', function() {
        assert.equal(balanced('[(])'), false)
    })
    describe('nested parens returns true', function() {
        assert.equal(balanced('([])'), true)
    })
    describe('single opening curly braces returns false', function() {
        assert.equal(balanced('{'), false)
    })
    describe('single closing curly brace returns false', function() {
        assert.equal(balanced('}'), false)
    })
    describe('nested parens returns true', function() {
        assert.equal(balanced('{()}[[{}]]'), true)
    })
})