import analytics from '../analytics/analytics';
import isAuto from '../analytics/isAuto';
import { posthogInit } from '../analytics/posthog';
import screenview from '../analytics/screenview';
import isFunction from '../common/isFunction';
import isObject from '../common/isObject';
import jsonParse from '../common/jsonParse';
import loadCss from '../common/loadCss';
import querySelector from '../common/querySelector';
import exceptions from '../exceptions/exceptions';
import calf from '../support/calf';
import stdout from '../support/stdout';
import task from '../support/task';
import getUrlParameter from '../system/getUrlParameter';
import isMessageSound from './isMessageSound';
import jqueryEventTracker from './jqueryEventTracker';
import lookForHcsData from './lookForHcsData/lookForHcsData';
import pageSwitcher from './pageSwitcher/pageSwitcher';
import doQuickLinks from './quicklinks/doQuickLinks';

jqueryEventTracker();

let cmd = 0;
let subcmd = 0;
let subcmd2 = 0;
let type = '';
let coreFunction = 0;
let functionPath = 0;

function getParam(param) {
  return getUrlParameter(param) || '-'; // skipcq: JS-W1043
}

function newSelector(selector) {
  const testCmd = querySelector(selector);
  return testCmd?.value || '-'; // skipcq: JS-W1043
}

function isValid() {
  return (
    isObject(pageSwitcher[cmd]) &&
    isObject(pageSwitcher[cmd][subcmd]) &&
    isFunction(pageSwitcher[cmd][subcmd][subcmd2])
  );
}

function testCoreFunction() {
  if (isValid()) return pageSwitcher[cmd][subcmd][subcmd2];
}

function getParamsFromUrl() {
  cmd = getParam('cmd');
  subcmd = getParam('subcmd');
  subcmd2 = getParam('subcmd2');
  if (['points', 'privatemessage'].includes(cmd)) {
    type = `/${getParam('type')}`;
  }
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
  if (document.location.search !== '') getParamsFromUrl();
  else getParamsFromPage();
  setCalfParams();
  functionPath = `${cmd}/${subcmd}/${subcmd2}${type}`;
  coreFunction = testCoreFunction();
}

function devHooks() {
  const showPath = 0;
  if (showPath) stdout('functionPath', functionPath);
  if (!coreFunction) stdout('No Core Function.');
  else if (!isFunction(coreFunction)) stdout('Not Core Function.');
}

function asyncDispatcher() {
  if (defineUserIsDev) devHooks(); //  asyncDispatcher messages
  if (isFunction(coreFunction)) {
    screenview(functionPath);
    coreFunction();
  }
}

async function runCore(cssPrm) {
  getCoreFunction();
  await cssPrm;
  lookForHcsData();
  task(3, asyncDispatcher);
  isMessageSound();
  /* This must be at the end in order not to
  screw up other findNode calls (Issue 351) */
  doQuickLinks();
}

const envTests = [
  () => !('showPicker' in HTMLSelectElement.prototype),
  () => !navigator.cookieEnabled,
  () => window !== window.parent,
  isAuto,
];

const badEnv = () => envTests.some((fn) => fn());

function setVer(fshVer, gmInfo) {
  calf.gmInfo = jsonParse(decodeURIComponent(gmInfo));
  if (calf.gmInfo) calf.fshVer = fshVer;
  else calf.fshVer = `${fshVer}_native`;
  calf.calfVer = defineCalfVer;
}

// main event dispatcher
export default function dispatch(fshVer, gmInfo) {
  if (badEnv()) {
    return;
  }
  const cssPrm = loadCss(defineCalfPath);
  exceptions();
  setVer(fshVer, gmInfo);
  analytics();
  posthogInit();
  runCore(cssPrm);
}
