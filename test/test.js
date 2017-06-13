function multiplyByThree(number){
  return number * 3;
}

var assert = require('assert');
describe('multiply by 3', function() {
  it('should return 9 when multiplying 3 by 3', function() {
    assert.equal(9, multiplyByThree(3));
  });
  it('should return 0 when multiplying 0 by 3', function() {
    assert.equal(0, multiplyByThree(0));
  });
});
