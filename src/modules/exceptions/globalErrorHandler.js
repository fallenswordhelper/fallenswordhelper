import AjaxError from '../ajax/AjaxError';
import on from '../common/on';
import parseError from './parseError';
import sendException from './sendException';

let enabled = 1;

const ignoreStatus = [0, 503, 504];
const ignoreTextStatus = ['abort'];
const ignoreResponse = [
  'We have encountered an issue with a server connection',
  'We\'re performing maintenance on the game',
  'the team have been notified and will get it fixed soon',
  'uUDRezBqFM4',
];

function ignore(ajaxErr) {
  return ignoreStatus.includes(ajaxErr.jqXhr.status)
    || ignoreTextStatus.includes(ajaxErr.jqTextStatus)
    || ignoreResponse.some((substring) => ajaxErr.jqXhr.responseText.includes(substring));
}

const substrings = [
  'attackplayer.min.js',
  'dynamically imported module',
  'fs.min.js',
  'hcsBar',
  'index.php?cmd=auctionhouse&subcmd=quickcreate',
  'index.php?cmd=composing&subcmd=breakdown',
  'index.php?cmd=trade&target_player=',
  'layerClick',
  'play method is not allowed',
  'world.min.js',
  'openuserjs.org',
];

const canSend = (msg) => !substrings.some((ss) => msg.includes(ss));

function handleMsgStack(type, stuff) {
  const msg = parseError(stuff);
  if (canSend(msg)) sendException(type + msg);
}

function handleError(type, stuff) {
  if (stuff) handleMsgStack(type, stuff);
}

function logError(e) {
  handleError('window onerror ', e.error);
}

function unhandledrejection(e) {
  if (!(e.reason instanceof AjaxError) || !ignore(e.reason)) {
    handleError('Uncaught (in promise) ', e.reason);
  }
}

export default function globalErrorHandler() {
  if (!enabled) {
    on(window, 'error', logError);
    on(window, 'unhandledrejection', unhandledrejection);
    enabled = true;
  }
}
