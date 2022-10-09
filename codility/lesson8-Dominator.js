function solution(A) {
  const half = Math.floor(A.length / 2) + 1;
  const obj = {};
  for (let i = 0; i < A.length; i++) {
    if (!obj[A[i]]) obj[A[i]] = 1;
    else {
      obj[A[i]]++;
      if (obj[A[i]] >= half) return i;
    }
  }
  if (A.length === 1) return 0;
  return -1;
}
