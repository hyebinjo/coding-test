function solution(E, L) {
  const entryTime = E.split(":");
  const leaveTime = L.split(":");
  const entryHour = entryTime[0];
  const entryMinute = entryTime[1];
  const leaveHour = leaveTime[0];
  const leaveMinute = leaveTime[1];

  if (entryHour > leaveHour) leaveHour += 24;
  let hours = leaveHour - entryHour;
  if (leaveMinute > entryMinute) hours++;

  return 2 + 3 + 4 * (hours - 1);
}
