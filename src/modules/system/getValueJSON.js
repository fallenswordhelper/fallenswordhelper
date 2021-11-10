import getValue from './getValue';
import jsonParse from '../common/jsonParse';

function reviver(key, value) {
  if (typeof value === 'string') {
    const a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/
      .exec(value);
    if (a) {
      return new Date(
        Date.UTC(
          Number(a[1]),
          Number(a[2]) - 1,
          Number(a[3]),
          Number(a[4]),
          Number(a[5]),
          Number(a[6]),
        ),
      );
    }
  }
  return value;
}

export default function getValueJSON(name) {
  const resultJSON = getValue(name);
  let result;
  if (resultJSON) { result = jsonParse(resultJSON, reviver); }
  return result;
}
