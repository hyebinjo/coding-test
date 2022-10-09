function solution(A) {
  const set = new Set([]);
  A.forEach((el) => {
    if (set.has(el)) set.delete(el);
    else set.add(el);
  });
  return set.values().next().value;
}
