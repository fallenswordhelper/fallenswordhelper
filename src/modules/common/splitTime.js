export default function splitTime(timeInSecs) {
  let secs = timeInSecs;
  let mins = Math.floor(secs / 60);
  secs %= 60;
  let hrs = Math.floor(mins / 60);
  mins %= 60;
  const days = Math.floor(hrs / 24);
  hrs %= 24;
  return [days, hrs, mins, secs];
}
