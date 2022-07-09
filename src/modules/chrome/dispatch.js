import calf from '../support/calf';
import doQuickLinks from './doQuickLinks';
import getUrlParameter from '../system/getUrlParameter';
import globalErrorHandler from '../support/globalErrorHandler';
import isFunction from '../common/isFunction';
import isMessageSound from './isMessageSound';
import isObject from '../common/isObject';
import jsonParse from '../common/jsonParse';
import loadCss from '../common/loadCss';
import lookForHcsData from './lookForHcsData/lookForHcsData';
import pageSwitcher from './pageSwitcher/pageSwitcher';
import querySelector from '../common/querySelector';
import screenview from '../analytics/screenview';
import setup from '../analytics/setup';
import task from '../support/task';
import { end, start } from '../analytics/timing';

let cmd = 0;
let subcmd = 0;
let subcmd2 = 0;
let type = '';
let coreFunction = 0;
let functionPath = 0;

function getParam(param) {
  return getUrlParameter(param) || '-';
}

function newSelector(selector) {
  const testCmd = querySelector(selector);
  return (testCmd && testCmd.value) || '-';
}

function isValid() {
  return isObject(pageSwitcher[cmd])
    && isObject(pageSwitcher[cmd][subcmd])
    && isFunction(pageSwitcher[cmd][subcmd][subcmd2]);
}

function testCoreFunction() {
  if (isValid()) {
    return pageSwitcher[cmd][subcmd][subcmd2];
  }
}

function getParamsFromUrl() {
  cmd = getParam('cmd');
  subcmd = getParam('subcmd');
  subcmd2 = getParam('subcmd2');
  if (['points', 'privatemessage'].includes(cmd)) { type = `/${getParam('type')}`; }
}

function getParamsFromPage() {
  cmd = newSelector('input[name="cmd"]');
  subcmd = newSelector('input[name="subcmd"]');
  subcmd2 = newSelector('input[name="subcmd2"]');
}

function setCalfParams() {
  calf.cmd = cmd;
  calf.subcmd = subcmd;
  calf.subcmd2 = subcmd2;
}

function getCoreFunction() {
  if (document.location.search !== '') {
    getParamsFromUrl();
  } else {
    getParamsFromPage();
  }
  setCalfParams();
  functionPath = `${cmd}/${subcmd}/${subcmd2}${type}`;
  coreFunction = testCoreFunction();
}

function devHooks() {
  /* eslint-disable no-console */
  console.log('functionPath', functionPath); // skipcq: JS-0002
  if (!coreFunction) {
    console.log('No Core Function.'); // skipcq: JS-0002
  } else if (!isFunction(coreFunction)) {
    console.log('Not Core Function.'); // skipcq: JS-0002
  }
  /* eslint-enable no-console */
}

function asyncDispatcher() {
  if (calf.userIsDev) { //  asyncDispatcher messages
    devHooks();
  }
  if (isFunction(coreFunction)) {
    screenview(functionPath);
    start('JS Perf', functionPath);
    coreFunction();
    end('JS Perf', functionPath);
  }
}

async function runCore(cssPrm) {
  start('JS Perf', 'FSH.runCore');
  getCoreFunction();
  await cssPrm;
  lookForHcsData();
  task(3, asyncDispatcher);
  isMessageSound();
  /* This must be at the end in order not to
  screw up other findNode calls (Issue 351) */
  doQuickLinks();
  end('JS Perf', 'FSH.runCore');
}

function badEnv() {
  return !('showPicker' in HTMLInputElement.prototype) || !navigator.cookieEnabled;
}

function setVer(fshVer, gmInfo) {
  calf.gmInfo = jsonParse(decodeURIComponent(gmInfo));
  if (calf.gmInfo) {
    calf.fshVer = fshVer;
  } else {
    calf.fshVer = `${fshVer}_native`;
  }
  calf.calfVer = defineCalfVer; // eslint-disable-line no-undef
}

// main event dispatcher
export default function dispatch(fshVer, gmInfo) {
  start('JS Perf', 'FSH.dispatch');
  if (badEnv()) { return; }
  calf.userIsDev = defineUserIsDev; // eslint-disable-line no-undef
  const cssPrm = loadCss(defineCalfPath); // eslint-disable-line no-undef
  globalErrorHandler();
  setVer(fshVer, gmInfo);
  setup();
  runCore(cssPrm);
  end('JS Perf', 'FSH.dispatch');
}
