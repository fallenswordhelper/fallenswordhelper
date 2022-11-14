import jsonStringify from '../common/jsonStringify';

function parseStack(e) {
  const concatStack = e.stack.replace(/\n +/g, '|');
  if (e.stack.includes(e.message)) {
    return concatStack;
  }
  return `${e.message}|${concatStack}`;
}

function isError(e) {
  if (e.stack) { return parseStack(e); }
  if (e.message) { return e.message; }
  return String(e);
}

export default function parseError(e) {
  if (e instanceof Error) { return isError(e); }
  if (typeof e === 'object') { return jsonStringify(e); }
  return String(e);
}
