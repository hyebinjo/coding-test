function solution(S) {
  const arr = [];
  for (let i = 0; i < S.length; i++) {
    if (S.charAt(i) === "(") {
      arr.push(S.charAt(i));
    } else {
      if (arr[arr.length - 1] === "(") arr.pop();
      else if (arr.length === 0) return 0;
    }
  }

  if (arr.length === 0) return 1;
  else return 0;
}
