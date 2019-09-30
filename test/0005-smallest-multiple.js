import test from 'ava'

const smallestMultiple = (min, max) => {
  let n = 0

  while(true) if(isDivisable(++n, min, max)) return n

  return -1
}

const isDivisable = (n, min, max) => {
  for(let i = min; i <= max; i++) {
    if(n % i != 0) return false
  }
  return true
}

test('should find smallest multiple for numbers from 1 to 10', t => {
  t.is(smallestMultiple(1, 10), 2520)
})

test('should find smallest multiple for numbers from 1 to 20', t => {
  t.is(smallestMultiple(1, 20), 232792560)
})
