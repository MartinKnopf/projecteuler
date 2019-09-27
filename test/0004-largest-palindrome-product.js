import test from 'ava'

const largestPalindrome = n => {
  let min = Math.pow(10, n-1), max = Math.pow(10, n) - 1
  let result = -1

  for(let i = min; i <= max; i++) {
    for(let j = min; j <= max; j++) {
      let p = i*j
      if(isSymmetric(p.toString()) && p > result) result = p
    }
  }

  return result
}

const isSymmetric = str => {
  if(str.length <= 1) return true

  let [a, ...rest] = [...str]
  let [b, ...junk] = rest.reverse()

  if(a != b) return false
  else return isSymmetric(junk)
}

test('should detect symmetric string', t => {
  t.true(isSymmetric('b'))
  t.true(isSymmetric('aa'))
  t.true(isSymmetric('aaa'))
  t.true(isSymmetric('aba'))
  t.true(isSymmetric('9009'))
})

test('should detect asymmetric string', t => {
  t.false(isSymmetric('aab'))
  t.false(isSymmetric('9109'))
})

test('should return the largest palindrome product of two-digit numbers', t => {
  t.is(largestPalindrome(2), 9009)
})

test('should return the largest palindrome product of three-digit numbers', t => {
  t.is(largestPalindrome(3), 906609)
})

//test('should return the largest palindrome product of four-digit numbers', t => {
//  t.is(largestPalindrome(4), 99000099)
//})
