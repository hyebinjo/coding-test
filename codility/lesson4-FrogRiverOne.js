function solution(X, A) {
  if (X === 0) return -1;
  const timesArr = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] <= X && timesArr[A[i] - 1] === undefined) {
      timesArr[A[i] - 1] = i;
    }
  }

  let time = 0;
  for (let j = 0; j < X; j++) {
    if (timesArr[j] === undefined) return -1;
    time = Math.max(time, timesArr[j]);
  }
  return time;
}
