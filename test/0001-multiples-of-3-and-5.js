var assert = require('assert')

function solve(a, b, n) {
  var i = 0, j = 0, k = 0, sum = 0
  var iMax = n / a, jMax = n / b, kMax = n / (a* b)

  while(i < iMax) sum += i++ * a
  while(j < jMax) sum += j++ * b
  while(k < kMax) sum -= a * b * k++

  return sum
}

function solveRecursively(a, b, n, i, sum) {
  return i >= n ? sum : solve(a, b, n, i + 1, sum + (i % a == 0 || i % b == 0 ? i : 0))
}

describe('[#0001] sum of multiples of 3 or 5 under 1000', function() {
  it('should sum all multiples of 3 or 5 under 10', function() {
    assert.equal(solve(3, 5, 10), 23)
  })

  it('should sum all multiples of 3 or 5 under 9', function() {
    assert.equal(solve(3, 5, 9), 14)
  })

  it('should sum all multiples of 3 or 5 under 1000', function() {
    assert.equal(solve(3, 5, 1000), 233168)
  })

  it('should sum all multiples of 3 or 5 under 1000 recursively', function() {
    assert.equal(solveRecursively(3, 5, 1000), 233168)
  })
})
