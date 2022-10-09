function solution(N, A) {
  let resultArr = new Array(N).fill(0);
  let max = 0;
  A.forEach((el) => {
    if (el <= N) {
      resultArr[el - 1]++;
      max = Math.max(resultArr[el - 1], max);
    } else resultArr.fill(max);
  });
  return resultArr;
}
