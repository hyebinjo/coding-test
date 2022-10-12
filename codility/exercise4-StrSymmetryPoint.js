function solution(S) {
  if (S.length === 1) return 0;
  else if (S.length % 2 === 0) return -1;
  else if (S.length % 2 === 1) {
    const centerIdx = Math.floor(S.length / 2);
    for (let i = 1; i <= centerIdx; i++) {
      if (S.charAt(centerIdx - i) !== S.charAt(centerIdx + i)) return -1;
    }
    return centerIdx;
  }
}

//O(length(S))
