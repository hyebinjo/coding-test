function solution(A) {
  A.sort((a, b) => a - b);
  if (A.length === 3 || A[A.length - 1] <= 0 || A[0] >= 0 || A[0] * A[1] <= 0) {
    return A[A.length - 1] * A[A.length - 2] * A[A.length - 3];
  }
  return Math.max(A[0] * A[1] * A[A.length - 1], A[A.length - 1] * A[A.length - 2] * A[A.length - 3]);
}
