function solution(N) {
  let num = N;
  let result = 0;
  while (num % 2 === 0) {
    num = num / 2;
    result++;
  }
  return result;
}
