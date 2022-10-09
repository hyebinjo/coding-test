function solution(A) {
  if (A.length <= 1) return 0;

  let buy = A[0];
  let sell = 0;
  let profit = 0;
  for (let i = 1; i < A.length; i++) {
    if (A[i] < buy) {
      buy = A[i];
      sell = 0;
    } else if (A[i] > sell) {
      sell = A[i];
      if (profit < sell - buy) profit = sell - buy;
    }
  }

  if (profit < 0) return 0;
  return profit;
}
