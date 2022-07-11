import jsonParse from '../common/jsonParse';
import regExpExec from '../common/regExpExec';
import getValue from './getValue';

function reviver(key, value) {
  if (typeof value === 'string') {
    const dateParts = regExpExec(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/, value);
    if (dateParts) {
      return new Date(
        Date.UTC(
          Number(dateParts[1]),
          Number(dateParts[2]) - 1,
          Number(dateParts[3]),
          Number(dateParts[4]),
          Number(dateParts[5]),
          Number(dateParts[6]),
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
