import getElementById from '../common/getElementById';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';

const timers = {};
let footWrap;

function getFootWrap() {
  if (!footWrap) { footWrap = getElementById('foot-wrap'); }
  return footWrap;
}

export function log(text, value) {
  if (getFootWrap()) {
    insertHtmlBeforeEnd(footWrap, `<br>${text}: ${value} (${typeof value})`);
  }
}

export function time(name) {
  if (name) { timers[name] = performance.now() * 1000; }
}

export function timeEnd(name) {
  if (timers[name]) {
    log(name, `${Math.round(performance.now() * 1000
      - timers[name]) / 1000}ms`);
    delete timers[name];
  }
}
