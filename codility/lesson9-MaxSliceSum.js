function solution(A) {
  if (A.length === 1) return A[0];

  let localMaxSum = A[0];
  let globalMaxSum = A[0];

  for (let i = 1; i < A.length; i++) {
    localMaxSum = Math.max(A[i], localMaxSum + A[i]);
    globalMaxSum = Math.max(globalMaxSum, localMaxSum);
  }

  return globalMaxSum;
}
