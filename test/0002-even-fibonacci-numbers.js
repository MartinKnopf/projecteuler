import test from 'ava'

const fib = (n, numbers) => {
  let [a, b, ...rest] = [...numbers].reverse()
  if(a+b < n) return fib(n, [...numbers, a+b])
  return numbers
}

const fibsum = n => {
  return fib(n, [1, 2]).filter(f => f % 2 == 0).reduce((i, j) => i + j)
}

test('should produce fibonacci numbers < 10', t => {
  t.deepEqual(fib(10, [1, 2]), [1, 2, 3, 5, 8])
})

test('should produce fibonacci numbers < 15', t => {
  t.deepEqual(fib(15, [1, 2]), [1, 2, 3, 5, 8, 13])
})

test('should produce fibonacci numbers < 30', t => {
  t.deepEqual(fib(30, [1, 2]), [1, 2, 3, 5, 8, 13, 21])
})

test('should return sum of even fibonacci numbers < 10', t => {
  t.deepEqual(fibsum(10), 10)
})

test('should return sum of even fibonacci numbers < 40', t => {
  t.deepEqual(fibsum(40), 44)
})

test('should return sum of even fibonacci numbers < 4000000', t => {
  t.deepEqual(fibsum(4000000), 4613732)
})
