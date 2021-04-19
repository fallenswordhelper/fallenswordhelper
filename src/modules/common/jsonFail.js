import outputResult from './outputResult';

let lastMsg;

function notSeenErrorMessage(json) {
  return !json.s && lastMsg !== json.e.message;
}

export default function jsonFail(json, handle) {
  if (!json) { return true; }
  if (notSeenErrorMessage(json)) {
    lastMsg = json.e.message;
    outputResult(json.e.message, handle);
  }
  if (!json.s) { return true; }
}
