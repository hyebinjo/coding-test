function solution(A) {
  const map = new Map([]);
  A.forEach((el, i) => {
    if (!map.has(el)) map.set(el, { minIdx: i, sum: 1 });
    else map.set(el, { minIdx: map.get(el).minIdx, sum: map.get(el).sum + 1 });
  });
  for (const key of map.keys()) {
    if (map.get(key).sum === 1) return key;
  }
  return -1;
}

// O(N * log(N))
