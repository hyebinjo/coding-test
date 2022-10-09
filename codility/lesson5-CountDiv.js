function solution(A, B, K) {
  if (B - A === 0) {
    if (A % K === 0) return 1;
    else return 0;
  }

  let start = Math.ceil(A / K) * K;
  let end = Math.floor(B / K) * K;
  if (start > B || end < A) return 0;
  else return (end - start) / K + 1;
}
