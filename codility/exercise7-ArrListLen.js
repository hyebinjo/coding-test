function solution(A) {
  if (!A.includes(-1)) return A.length;
  let sum = 1;
  let nodeValue = A[0];
  while (nodeValue !== -1) {
    nodeValue = A[nodeValue];
    sum++;
  }
  return sum;
}
