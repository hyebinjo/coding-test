function averageFn(A, P, Q) {
  const sum = A.slice(P, Q + 1).reduce((a, b) => a + b, 0);
  return sum / (Q - P + 1);
}

function solution(A) {
  const map = new Map([]);
  for (let P = 0; P < A.length - 1; P++) {
    for (let Q = P + 1; Q < A.length; Q++) {
      const average = averageFn(A, P, Q);
      if (!map.has(average)) map.set(average, P);
      else if (map.get(average) > P) map.set(average, P);
    }
  }

  const arr = [];
  map.forEach((P, average) => {
    arr.push([P, average]);
  });
  arr.sort((a, b) => a[1] - b[1]);
  return arr[0][0];
}

//O(N ** 3) Timeout Errors
