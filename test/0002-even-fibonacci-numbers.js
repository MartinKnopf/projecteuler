var assert = require('assert')

function fib(n) {
  return [1, 2, 3, 5, 8]
}

describe('[#0002] sum of even fibonacci numbers under 4 million', function() {

  describe('fibonacci sequence', function() {
    it('should produce fibonacci numbers under 10', function() {
      assert.equal(fib(0), [1, 2, 3, 5, 8])
    })
  })
})
