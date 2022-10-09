function solution(A) {
  const peaksIdxs = [];
  for (let i = 1; i < A.length - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      peaksIdxs.push(i);
    }
  }

  let numOfFlagedPeaks = 0;
  for (let j = peaksIdxs.length; j > 0; j--) {
    let beforeFlagIdx = peaksIdxs[0];
    for (let i = 1; i <= j; i++) {
      if (peaksIdxs[i] - beforeFlagIdx < j) peaksIdxs[i] = 0;
      else beforeFlagIdx = peaksIdxs[i];
    }
    const flagedPeaksIdxs = peaksIdxs.filter((idx) => idx > 0);
    numOfFlagedPeaks = Math.max(numOfFlagedPeaks, flagedPeaksIdxs.length);
  }
  return numOfFlagedPeaks;
}
// Task Score 33% Correctness 62% Performance 0%

function solution(A) {
  var peaks = [];
  for (var i = 1; i < A.length - 1; i++) {
    if (A[i - 1] < A[i] && A[i] > A[i + 1]) peaks.push(i);
  }
  if (peaks.length < 2) return peaks.length;
  var root = Math.floor(Math.sqrt(peaks[peaks.length - 1] - peaks[0]));
  for (i = root + 1; i > 0; i--) {
    var distanceSum = 0;
    var flags = 1;
    for (var j = 0; j < peaks.length - 1; j++) {
      var current = peaks[j];
      var next = peaks[j + 1];
      var difference = Math.abs(next - current);
      if (difference + distanceSum >= i) {
        flags++;
        distanceSum = 0;
      } else distanceSum += difference;
      if (flags == i) return flags;
    }
  }
}
