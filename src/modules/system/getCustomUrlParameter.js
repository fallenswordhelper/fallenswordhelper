// Takes a full or relative URL, or just its query string
export default function getCustomUrlParameter(url, sParam) {
  const str = String(url ?? '');
  const start = str.indexOf('?');
  return new URLSearchParams(start === -1 ? str : str.slice(start)).get(sParam);
}
