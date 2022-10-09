function solution(A) {
  let left = A[0];
  let right = A.reduce((a, b) => a + b, 0) - A[0];
  let diff = Math.abs(right - left);
  for (let i = 1; i < A.length - 1; i++) {
    left += A[i];
    right -= A[i];
    let newDiff = Math.abs(right - left);
    diff = Math.min(diff, newDiff);
  }
  return diff;
}
