function solution(N) {
  const bin = N.toString(2);
  const arr = bin.split("1");
  if (arr[arr.length - 1] !== "") arr.pop();
  const binaryGap = arr.map((el) => el.length).sort((a, b) => b - a)[0];
  return binaryGap;
}
