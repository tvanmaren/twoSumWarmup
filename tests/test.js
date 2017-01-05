'use strict';

const chai = require('chai');
const expect = chai.expect;

const arrayTarget = require('../arrayTarget');

describe('function', function () {
  describe('arrayTarget', function () {
    it('should return [-1,-1] when no array numbers sum to the target', function () {
      expect(arrayTarget([1, 2, 3], 0)).to.deep.equal([-1, -1]);
      expect(arrayTarget([1,2,3],10)).to.deep.equal([-1,-1]);
    });
    it('should return an array of the indices of the first two numbers that sum to the target',
      function () {
        expect(arrayTarget([1, 2, 3], 3)).to.deep.equal([0,1]);
        expect(arrayTarget([1,2,3], 5)).to.deep.equal([1,2]);
      });
  });
});
