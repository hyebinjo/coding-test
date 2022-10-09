function sum(N) {
  let result = 0;
  while (N > 0) {
    result += N;
    N--;
  }
  return result;
}

function solution(M, A) {
  let arr = [];
  let result = 0;
  let startIdx = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === A[i + 1] || i === A.length - 1) {
      arr = A.slice(startIdx, i + 1);
      result += sum(arr.length);
      startIdx = i + 1;
    }
  }
  return result;
}

//Task Score 30% Correctness 40% Performance 20%
