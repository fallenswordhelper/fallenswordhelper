import sendException from '../analytics/sendException';
import isArray from '../common/isArray';
import isFunction from '../common/isFunction';
import isUndefined from '../common/isUndefined';
import on from '../common/on';
import fallback from '../system/fallback';
import calf from './calf';
import parseError from './parseError';
import { getLength, pop, push } from './sch';

let paused = true;
const message = 'fshMessage';
let messageHandler = 0;

function taskRunner() {
  if (getLength() === 0) {
    paused = true;
  } else {
    paused = false;
    window.postMessage(message, window.location.origin);
  }
}

function popError(fn) {
  if (!isUndefined(fn)) {
    sendException(`pop() was not a function (${typeof fn})`, false);
  }
}

function testPop() {
  const testFn = pop();
  if (isFunction(testFn)) {
    testFn();
  } else { popError(testFn); }
}

function asyncTask() {
  try {
    testPop();
  } catch (e) {
    sendException(parseError(e), false);
  } finally {
    taskRunner();
  }
}

function callback(event) {
  const key = event.data;
  if (event.origin === window.location.origin && key === message) {
    asyncTask();
  }
}

function initMessageHandler() {
  if (!messageHandler) {
    on(window, 'message', callback);
    messageHandler = true;
  }
}

function devLog(args) {
  if (args && !isArray(args)) {
    // eslint-disable-next-line no-console
    console.log('addTask isArray(args)', isArray(args)); // skipcq: JS-0002
  }
}

export default function task(priority, fn, args, scope) {
  if (calf.userIsDev) { //  Not sending args as Array
    devLog(args);
  }
  if (isFunction(fn)) {
    initMessageHandler();
    const scopeGuard = fallback(scope, window);
    const argsGuard = fallback(args, []);
    push(fn.bind(scopeGuard, ...argsGuard), priority);
    if (paused) { taskRunner(); }
  }
}
