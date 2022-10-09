function solution(A) {
  const N = A.length;

  if (N === 3) return 0;

  let headSum = A.map((i) => 0);
  let tailSum = A.map((i) => 0);

  for (let i = 1; i < N - 1; i++) {
    headSum[i] = Math.max(0, headSum[i - 1] + A[i]);
  }

  for (let i = N - 2; i >= 1; i--) {
    tailSum[i] = Math.max(0, tailSum[i + 1] + A[i]);
  }

  let maxSum = 0;

  for (let i = 1; i < N - 1; i++) {
    maxSum = Math.max(maxSum, headSum[i - 1] + tailSum[i + 1]);
  }

  return maxSum;
}
