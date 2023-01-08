import sendException from '../analytics/sendException';
import on from '../common/on';
import partial from '../common/partial';
import AjaxError from './AjaxError';

function setOpts(options) {
  if (typeof options === 'string') {
    return { url: options };
  }
  return options;
}

function clearXhr(xhr) {
  xhr.abort();
}

function beforeSend(xhr) {
  on(window, 'beforeunload', partial(clearXhr, xhr));
}

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
    || ignoreResponse.some(
      (substring) => ajaxErr.jqXhr.responseText.includes(substring),
    );
}

function handleFailure(options, jqXhr) {
  const ajaxErr = new AjaxError([options, jqXhr, jqXhr.textStatus, jqXhr.errorThrown]);
  if (!ignore(ajaxErr)) sendException(ajaxErr.toString(), false);
}

const interval = 900;
let lastRefill = 0;
const refillAmount = 5;
let tokens = 0;

const delay = (ms) => new Promise((r) => { setTimeout(r, ms); });

async function refillTokens() {
  if (tokens < refillAmount - $.active && performance.now() - lastRefill >= interval) {
    tokens = refillAmount - $.active;
    lastRefill = performance.now();
  } else {
    await delay(100);
  }
}

async function limiter() {
  while (tokens < 1) {
    // eslint-disable-next-line no-await-in-loop
    await refillTokens();
  }
  tokens -= 1;
}

function getAjax(options) { // jQuery
  const opt = setOpts(options);
  opt.beforeSend = beforeSend;
  return $.ajax(opt).fail((jqXHR, textStatus, errorThrown) => {
    // eslint-disable-next-line no-param-reassign
    jqXHR.textStatus = textStatus;
    // eslint-disable-next-line no-param-reassign
    jqXHR.errorThrown = errorThrown;
  });
}

export default async function retryAjax(options, retries = 10) {
  await limiter();
  let result = null;
  try {
    result = await getAjax(options);
  } catch (jqXhr) {
    if (retries && jqXhr.status === 503) return retryAjax(options, retries - 1);
    handleFailure(options, jqXhr);
  }
  return result;
}
