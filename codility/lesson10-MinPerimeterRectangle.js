function solution(N) {
  const sqrt = Math.sqrt(N);
  if (sqrt % 1 === 0) return sqrt * 4;

  const integer = Math.floor(sqrt);
  let A;
  for (let i = integer; i > 0; i--) {
    if (N % i === 0) {
      A = i;
      break;
    }
  }
  const B = N / A;

  return (A + B) * 2;
}
