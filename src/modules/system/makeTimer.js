/* Timer functions taken from Jack Archibald
 * https://gist.github.com/jakearchibald
 * https://gist.github.com/jakearchibald/cb03f15670817001b1157e62a076fe95 */
function setTimer(ms, signal, callback) {
  const start = document.timeline.currentTime;

  function frame(time) {
    if (signal.aborted) return;
    callback(time);
    // eslint-disable-next-line no-use-before-define
    scheduleFrame(time);
  }

  function scheduleFrame(time) {
    const elapsed = time - start;
    const roundedElapsed = Math.round(elapsed / ms) * ms;
    const targetNext = start + roundedElapsed + ms;
    const delay = targetNext - performance.now();
    setTimeout(() => requestAnimationFrame(frame), delay);
  }

  scheduleFrame(start);
}
export default function makeTimer(fn, ms) {
  // eslint-disable-next-line no-undef
  const controller = new AbortController();
  setTimer(ms, controller.signal, fn);
  return controller;
}
