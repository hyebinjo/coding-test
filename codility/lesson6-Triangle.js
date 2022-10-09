function solution(A) {
  const newArr = A.filter((el) => el > 0).sort((a, b) => a - b);
  for (let i = newArr.length - 1; i > 1; i--) {
    if (newArr[i] < newArr[i - 1] + newArr[i - 2]) {
      return 1;
    }
  }
  return 0;
}
