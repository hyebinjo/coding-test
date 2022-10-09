function solution(A) {
  const abs = A.map((el) => Math.abs(el));
  abs.sort((a, b) => a - b);
  return new Set(abs).size;
}
