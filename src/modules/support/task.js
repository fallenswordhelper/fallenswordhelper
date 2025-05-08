import Honeybadger from '@honeybadger-io/js';
import isArray from '../common/isArray';
import isFunction from '../common/isFunction';
import isUndefined from '../common/isUndefined';
import on from '../common/on';
import sendException from '../exceptions/sendException';
import fallback from '../system/fallback';
import { getLength, pop, push } from './sch';
import stdout from './stdout';

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
    sendException(`pop() was not a function (${typeof fn})`);
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
    Honeybadger.notify(e);
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
  if (args && !isArray(args)) stdout('addTask isArray(args)', isArray(args));
}

export default function task(priority, fn, args, scope) {
  if (defineUserIsDev) devLog(args); //  Not sending args as Array
  if (isFunction(fn)) {
    initMessageHandler();
    const scopeGuard = fallback(scope, window);
    const argsGuard = fallback(args, []);
    push(fn.bind(scopeGuard, ...argsGuard), priority);
    if (paused) { taskRunner(); }
  }
}
