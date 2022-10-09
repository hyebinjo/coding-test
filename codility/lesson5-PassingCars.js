function solution(A) {
  let sum = 0;
  let result = 0;
  A.forEach((el) => {
    switch (el) {
      case 0:
        sum++;
        break;
      case 1:
        result += sum;
        break;
    }
  });

  if (result > 1000000000) return -1;
  else return result;
}
