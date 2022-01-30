let chai = require("chai");
var assert = require("assert");
const { add, sub, mul, div } = require("../lab2_mocha_test/app/calculator");

describe("Add", function () {
  it("Returns the sum of two values", function () {
    assert.equal(add(6, 8), 14);
  });
});
describe("Add", function () {
  it("Returns the sum of two values", function () {
    assert.equal(add(6, 8), 13);
  });
});

describe("Subtract", function () {
  it("Returns the difference of two values", function () {
    assert.equal(sub(9, 3), 6);
  });
});
describe("Subtract", function () {
  it("Returns the difference of two values", function () {
    assert.equal(sub(9, 3), 5);
  });
});

describe("Multiplty", function () {
  it("Returns the product of two values", function () {
    assert.equal(mul(5, 5), 25);
  });
});
describe("Multiplty", function () {
  it("Returns the product of two values", function () {
    assert.equal(mul(5, 5), 20);
  });
});

describe("Divide", function () {
  it("Returns the quotient of two values", function () {
    assert.equal(div(18, 6), 3);
  });
});
describe("Divide", function () {
  it("Returns the quotient of two values", function () {
    assert.equal(div(18, 6), 4);
  });
});
