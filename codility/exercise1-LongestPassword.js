function solution(A) {
  const arr = A.split(" ");
  let maxLength = -1;
  arr.forEach((el) => {
    if (/^[a-z0-9]*$/gi.test(el)) {
      const letterLength = el.match(/[a-z]/gi)?.length || 0;
      const digitLength = el.match(/[0-9]/gi)?.length || 0;
      if (letterLength % 2 === 0 && digitLength % 2 === 1) maxLength = Math.max(maxLength, el.length);
    }
  });
  return maxLength;
}
