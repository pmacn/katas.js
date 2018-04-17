const assert = require('assert')
const closest = require('../index.js')

describe('closestToZero', function() {
    describe('should return zero when input is empty', function() {
        assert.equal(closest([]), 0)
    })
    describe('should return single number in 1 number array', function() {
        assert.equal(closest([7]), 7)
    })
    describe('should return lowest positive number', function() {
        assert.equal(closest([12, 5]), 5)
    })
    describe('should return highest negative number', function() {
        assert.equal(closest([-12, -4, -23]), -4)
    })
    describe('should return number closest to zero', function() {
        assert.equal(closest([-12, 5, 6, -3, 12]), -3)
    })
    describe('should return positive number when draw', function() {
        assert.equal(closest([-4, 12, 4, 50, -13]), 4)
    })
})