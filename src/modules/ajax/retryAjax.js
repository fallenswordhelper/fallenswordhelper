import on from '../common/on';
import AjaxError from './AjaxError';

function setOpts(options) {
  if (typeof options === 'string') {
    return { url: options };
  }
  return options;
}

function beforeSend(xhr) {
  on(window, 'beforeunload', () => xhr.abort());
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
  } else await delay(100);
}

async function limiter() {
  // eslint-disable-next-line no-await-in-loop
  while (tokens < 1) await refillTokens();
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
    throw new AjaxError([options, jqXhr, jqXhr.textStatus, jqXhr.errorThrown]);
  }
  return result;
}
