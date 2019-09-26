import test from 'ava'

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

test('should sum all multiples of 3 or 5 under 10', t => {
  t.is(solve(3, 5, 10), 23)
})

test('should sum all multiples of 3 or 5 under 9', t => {
  t.is(solve(3, 5, 9), 14)
})

test('should sum all multiples of 3 or 5 under 1000', t => {
  t.is(solve(3, 5, 1000), 233168)
})

test('should sum all multiples of 3 or 5 under 1000 recursively', t => {
  t.is(solveRecursively(3, 5, 1000), 233168)
})
