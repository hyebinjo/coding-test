function solution(A) {
  const scopes = A.map((el, i) => [i - el, i + el]);

  let pairs = 0;
  for (let i = 0; i < scopes.length - 1; i++) {
    for (let j = i + 1; j < scopes.length; j++) {
      if (scopes[i][1] >= scopes[j][0]) {
        pairs = pairs + 1;
        if (pairs > 10000000) return -1;
      }
    }
  }

  return pairs;
}

// O(N**2) Timeout
// Total score: 81%
