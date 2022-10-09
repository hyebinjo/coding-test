function solution(S) {
  if (S.length % 2 !== 0) return 0;

  const arr = [];
  for (let i = 0; i < S.length; i++) {
    if (S.charAt(i) === "{" || S.charAt(i) === "[" || S.charAt(i) === "(") {
      arr.push(S.charAt(i));
    } else if (S.charAt(i) === "}") {
      if (arr.pop() !== "{") return 0;
    } else if (S.charAt(i) === ")") {
      if (arr.pop() !== "(") return 0;
    } else if (S.charAt(i) === "]") {
      if (arr.pop() !== "[") return 0;
    }
  }

  if (arr.length > 0) return 0;
  else return 1;
}
