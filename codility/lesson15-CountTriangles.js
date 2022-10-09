function solution(A) {
  if (A.length < 3) return 0;
  const newArr = A.filter((el) => el > 0).sort((a, b) => a - b);
  let result = 0;
  for (let i = newArr.length - 1; i > 1; i--) {
    for (let j = i - 1; j > 0; j--) {
      for (let k = j - 1; k >= 0; k--) {
        if (newArr[i] < newArr[j] + newArr[k]) result++;
      }
    }
  }
  return result;
}
// O(N**3) TimeoutError
// Task Score 72% Correctness 100% Performance 25%
