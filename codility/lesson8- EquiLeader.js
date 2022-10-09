function getLeader(A) {
  const half = Math.floor(A.length / 2) + 1;
  const obj = {};
  for (let i = 0; i < A.length; i++) {
    if (!obj[A[i]]) obj[A[i]] = 1;
    else {
      obj[A[i]]++;
      if (obj[A[i]] >= half) return A[i];
    }
  }
  if (A.length === 1) return 0;
  return 0;
}

function solution(A) {
  const length = A.length;
  const leader = getLeader(A);
  const numOfLeader = A.filter((el) => el === leader).length;
  let numOfLeftLeader = 0;
  let numOfRightLeader;
  let result = 0;
  for (let i = 0; i < length; i++) {
    const leftLength = i + 1;
    const rightLength = length - leftLength;
    const leftHalf = Math.floor(leftLength / 2) + 1;
    const rightHalf = Math.floor(rightLength / 2) + 1;
    if (A[i] === leader) {
      numOfLeftLeader++;
      numOfRightLeader = numOfLeader - numOfLeftLeader;
    }
    if (numOfLeftLeader >= leftHalf && numOfRightLeader >= rightHalf) result++;
  }
  return result;
}
