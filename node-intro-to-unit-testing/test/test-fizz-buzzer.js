'use strict';

const chai = require('chai');
const expect = require('chai').expect;

const fizzBuzz = require('../fizzBuzzer.js');

describe('fizzBuzz', function(){

  const fizzCases = [3, 6, 9, 12, 18];
  const buzzCases = [5, 10, 20];
  const fizzbuzzCases = [15, 30];
  const numCases = [0.5, 1, 2, 4, 7, 8, 11, 13, 14, 16, 17];
  const edgeCases = [true, '5'];

  it('should return fizz on mults of 3', function(){
    fizzCases.forEach(num => {
      expect(fizzBuzz(num)).to.equal('fizz');
    });
  });

  it('should return buzz on multiples of 5', function(){
    buzzCases.forEach(num => {
      expect(fizzBuzz(num)).to.equal('buzz');
    });
  });

  it('should return fizz-buzz on multiples of both 3 and 5', function(){
    fizzbuzzCases.forEach(num => {
      expect(fizzBuzz(num)).to.equal('fizz-buzz');
    });
  });

  it('should return a number on numbers not a multiple of 3 or 5', function(){
    numCases.forEach(num => {
      expect(typeof fizzBuzz(num)).to.equal('number');
    });
  });

  it('should return an error on non-numeric values', function(){
    edgeCases.forEach(input => {
      expect(function(){
        fizzBuzz(input);}
      ).to.throw(Error);
    });
  });

});