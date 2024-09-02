export default function fixRafInWorld() {
  let lastTime = 0;
  window.requestAnimationFrame = (callback) => {
    const now = window.performance.now();
    const nextTime = Math.max(lastTime + 16, now);
    lastTime = nextTime;
    return setTimeout(
      () => { callback(lastTime); },
      nextTime - now,
    );
  };
  window.cancelAnimationFrame = clearTimeout;
}
