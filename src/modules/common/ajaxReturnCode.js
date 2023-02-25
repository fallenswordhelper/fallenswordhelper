export default function ajaxReturnCode(json) {
  if (json) {
    return {
      ...json,
      r: json.s ? 0 : 1,
    };
  }
  return json;
}
