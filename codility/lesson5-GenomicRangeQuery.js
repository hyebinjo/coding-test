function solution(S, P, Q) {
  const resultArr = [];
  P.forEach((el, i) => {
    const slicedString = S.slice(el, Q[i] + 1);
    if (slicedString.includes("A")) resultArr[i] = 1;
    else if (slicedString.includes("C")) resultArr[i] = 2;
    else if (slicedString.includes("G")) resultArr[i] = 3;
    else if (slicedString.includes("T")) resultArr[i] = 4;
  });
  return resultArr;
}
