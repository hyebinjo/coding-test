function solution(A) {
  A = A.filter((el) => el > 0);
  if (A.length === 0) return 1;

  A.sort((a, b) => a - b);
  if (A[0] !== 1) return 1;
  else if (A.length === 1) return 2;

  let result = 1;
  for (let i = 0; i < A.length - 1; i++) {
    if (A[i + 1] - A[i] <= 1) result = A[i + 1];
    else return result + 1;
  }
  return result + 1;
}
