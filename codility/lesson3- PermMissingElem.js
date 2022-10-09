function solution(A) {
  A.sort((a, b) => a - b);

  const newArr = [];
  for (let i = 0; i < A.length + 1; i++) {
    newArr[i] = i + 1;
  }

  for (let j = 0; j < A.length + 1; j++) {
    if (A[j] !== newArr[j]) return newArr[j];
  }
}
