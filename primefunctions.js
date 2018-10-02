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

function isPrime(n) {
  for (let x = 2; x < n; x++) if (n % x === 0) return false;
  return n > 1;
}

function Sum(n) {
  let sum = 0;
  for (let i = 0; i < n.length; i++) sum += n[i];
  return sum;
}

function maxPrimeSum(n) {
  const List = primeGen(n);
  let nMax = 0;
  let lenMax = 0;
  let temp;
  let array = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      array = List.slice(i, j);
      temp = Sum(array);
      if (nMax < temp) {
        if (isPrime(temp) !== false) {
          if (temp < n) {
            if (array.length > lenMax) {
              lenMax = array.length;
              nMax = temp;
            }
          }
        }
      }
    }
  }
  return [nMax, lenMax];
}

console.log(primeGen(10));
console.log(cumulativeSum([1, 2, 3, 4]));
console.log(maxPrimeSum(100));
