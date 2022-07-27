import sendException from '../analytics/sendException';
import on from '../common/on';
import calf from './calf';
import parseError from './parseError';

let enabled = 0;

function handleMsgStack(type, stuff) {
  const msg = parseError(stuff);
  sendException(type + msg, true);
  return true;
}

function handleError(type, stuff) {
  if (stuff) {
    return handleMsgStack(type, stuff);
  }
}

function logError(e) {
  handleError('window onerror ', e.error);
}

function unhandledrejection(e) {
  if (handleError('Uncaught (in promise) ', e.reason) && !calf.userIsDev) {
    e.preventDefault();
  }
}

export default function globalErrorHandler() {
  if (!enabled) {
    on(window, 'error', logError);
    on(window, 'unhandledrejection', unhandledrejection);
    enabled = true;
  }
}
