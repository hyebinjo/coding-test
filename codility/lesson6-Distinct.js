function solution(A) {
  const set = new Set([]);
  A.forEach((el) => {
    set.add(el);
  });
  return set.size;
}
