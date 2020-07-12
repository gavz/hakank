/* 

  Euler #3 in JavaScript.

  Problem 3
  """
  The prime factors of 13195 are 5, 7, 13 and 29.
  What is the largest prime factor of the number 600851475143 ?
  """

  This JavaScript program was created by Hakan Kjellerstrand, hakank@gmail.com
  See also my JavaScript page: http://www.hakank.org/javascript/

*/
'use strict';

var {prime_divisors,factors,isPrime,max,max2,timing2,primes} = require("./js_utils.js");


// 12ms
var euler3a = function() {
    var n = 600851475143;
    var max = 0;
    while (n > 1) {
        var m = Math.ceil(Math.sqrt(n));
        for(var i = 2; i <= m; i++) {
            if (n % i == 0 && isPrime(i)) {
                max = i;
                n /= i;
                continue;
            }
        }
    }
    return max;
}

// Move the loop to utils.prime_divisors
// 10ms
var euler3b = function() {
    // return max(prime_divisors(600851475143));
    return prime_divisors(600851475143).max2();
}

// 0ms
var euler3c = function() {
    // return max(prime_divisors(600851475143));
    return factors(600851475143).max2();
}

// timing2(euler3a);
// timing2(euler3b);
timing2(euler3c);

// Test of generating primes below 10_000_000
// 2.5s: Not too bad...
/*
var prime_test = function() {
    var p = primes(10000000);
    return p.length;
}
timing2(prime_test);

*/
