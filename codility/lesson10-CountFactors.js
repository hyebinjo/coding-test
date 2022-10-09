function solution(N) {
  if (N === 1) return 1;

  let prime = 2;
  let changedPrime = true;
  const arr = [];
  while (N !== 1) {
    while (N % prime !== 0) {
      prime++;
      changedPrime = true;
    }
    N = N / prime;
    if (changedPrime) {
      arr.push(1);
      changedPrime = !changedPrime;
    }
    arr[arr.length - 1]++;
  }

  const result = arr.reduce((a, b) => a * b, 1);
  return result;
}
// Task Score 85% Correctness 100% Performance 66%

function solution(N) {
  if (N === 1) return 1;

  let factorCnt = 1;

  for (let i = 2; i < Math.sqrt(N); i++) {
    if (N % i === 0) {
      factorCnt++;
    }
  }

  factorCnt = factorCnt * 2;

  if (Math.sqrt(N) % 1 === 0) factorCnt++;

  return factorCnt;
}
