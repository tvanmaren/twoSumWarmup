'use strict';

const chai = require('chai');
const expect = chai.expect;

const arrayTarget = require('../arrayTarget');

describe('function', function () {
  describe('arrayTarget', function () {
    it('should return [-1,-1] when no array numbers add up to the target', function () {
      expect(arrayTarget([1,2,3],0)).to.equal([-1,-1]);
    });
  });
});
