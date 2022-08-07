import sendException from '../analytics/sendException';
import on from '../common/on';
import parseError from './parseError';

let enabled = 0;

function handleMsgStack(type, stuff) {
  const msg = parseError(stuff);
  sendException(type + msg, true);
}

function handleError(type, stuff) {
  if (stuff) handleMsgStack(type, stuff);
}

function logError(e) {
  handleError('window onerror ', e.error);
}

function unhandledrejection(e) {
  handleError('Uncaught (in promise) ', e.reason);
}

export default function globalErrorHandler() {
  if (!enabled) {
    on(window, 'error', logError);
    on(window, 'unhandledrejection', unhandledrejection);
    enabled = true;
  }
}
