function solution(A, K) {
  const rotateTimes = K % A.length;
  if (rotateTimes === 0) return A;
  const splicedArr = A.splice(A.length - rotateTimes, A.length - 1);
  return splicedArr.concat(A);
}
