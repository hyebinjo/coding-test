function solution(A) {
  const map = new Map([]);
  const newArr = [];
  A.forEach((el, i) => {
    if (map.has(el)) newArr[i] = map.get(el);
    else {
      let num = 0;
      for (let j = 0; j < A.length; j++) {
        if (el % A[j] !== 0) num++;
      }
      map.set(el, num);
      newArr[i] = num;
    }
  });
  return newArr;
}
//Task Score 77% Correctness 100% Performance 50%
