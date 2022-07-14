import { log } from '../support/debug';
import getValue from '../system/getValue';
import noGa from './noGa';

const times = {};

export function start(category, variable, label) {
  times[`${category}:${variable}:${label}`] = performance.now() * 1000;
}

function sendTiming(category, variable, label) {
  const myTime = Math.round(performance.now() * 1000
    - times[`${category}:${variable}:${label}`]) / 1000;
  if (myTime > 10) {
    ga('fshApp.send', 'timing', category, variable, Math.round(myTime), label);
  }
  if (getValue('betaOptIn')) { //  Timing output
    log(variable, `${myTime}ms`);
  }
}

export function end(category, variable, label) {
  if (noGa()) { return; }
  sendTiming(category, variable, label);
}
