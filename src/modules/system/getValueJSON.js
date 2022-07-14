import jsonParse from '../common/jsonParse';
import regExpExec from '../common/regExpExec';
import getValue from './getValue';

function reviver(_key, value) {
  if (typeof value === 'string') {
    const dateParts = regExpExec(/^(?<year>\d{4})-(?<month>\d{2})-(?<date>\d{2})T(?<hr>\d{2}):(?<min>\d{2}):(?<sec>\d{2}(?:\.\d*)?)Z$/, value);
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
  if (resultJSON) return jsonParse(resultJSON, reviver);
}
