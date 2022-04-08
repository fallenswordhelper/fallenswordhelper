import jsonParse from './jsonParse';

export default function arrayfromList(classes) {
  return jsonParse(`[${classes}]`);
}
