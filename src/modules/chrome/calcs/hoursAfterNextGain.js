// whole hours needed after the next gain to cover the remaining amount
export default function hoursAfterNextGain(remaining, gainPerHour) {
  return Math.max(0, Math.ceil(remaining / gainPerHour) - 1);
}
