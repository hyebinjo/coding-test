function solution(A, B) {
  const arr = [];
  function stack(arr, i) {
    if (B[i] === 1) arr.push([A[i], B[i]]);
    else if (B[i] === 0) {
      if (arr.length === 0 || arr[arr.length - 1][1] === 0) arr.push([A[i], B[i]]);
      else if (arr[arr.length - 1][0] < A[i]) {
        arr.pop();
        if (arr.length === 0 || arr[arr.length - 1][1] === 0) arr.push([A[i], B[i]]);
        else stack(arr, i);
      }
    }
  }

  for (let i = 0; i < A.length; i++) {
    stack(arr, i);
  }
  return arr.length;
}

// O(N) Runtime Error
// Total score: 87%
