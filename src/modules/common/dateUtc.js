import { months } from '../support/constants';

export default function dateUtc([year, month, day, hour, minute]) {
  return Date.UTC(
    Number(year),
    months.indexOf(month),
    Number(day),
    Number(hour),
    Number(minute),
    0,
  );
}
