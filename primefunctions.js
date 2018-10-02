function primeGen(n) {
  const array = [];
  for (let i = 2; i < n; i++) {
    if (i === 2) array.push(i); else {
      let prime = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) prime = false;
      }
      if (prime) array.push(i);
    }
  }
  return array;
}

function cumulativeSum(arr) {
  const total = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) total.push(arr[i]); else {
      let sum = 0;
      for (let n = i; n >= 0; n--) sum += arr[n];
      total.push(sum);
    }
  }
  return total;
}

// function maxPrimeSum(array) {
//   const limit = 1000000;
//   const notPrime = new Uint8Array(limit);
//   const primes = [];
//
//   notPrime[0] = notPrime[1] = 1;
//
//   for (let i = 2; i < limit; i++) {
//     if (notPrime[i] === 0) {
//       primes.push(i);
//       for (let j = 2 * i; j < limit; j += i) {
//         notPrime[j] = 1;
//       }
//     }
//   }
//   let maxSum = 0;
//   let maxRun = -1;
//   for (let i = 0; i < primes.length; i++) {
//     let sum = 0;
//     for (let j = i; j < primes.length; j++) {
//       sum += primes[j];
//       if (sum > limit) break;
//       if (!notPrime[sum] && sum > maxSum && j - i > maxRun) {
//         maxRun = j - i;
//         maxSum = sum;
//       }
//     }
//   }
// }

console.log(primeGen(10));
console.log(cumulativeSum([1, 2, 3, 4]));
// console.log(maxPrimeSum(100));
