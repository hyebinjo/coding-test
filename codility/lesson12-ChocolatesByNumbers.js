function solution(N, M) {
  let i = 1;
  while ((N * i) % M !== 0) {
    i++;
  }
  return (N * i) / M;
}
// O(log(N + M))
// Task Score 87% Correctness 100% Performance 75%
