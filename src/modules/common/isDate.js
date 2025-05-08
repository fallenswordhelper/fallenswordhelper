import numberIsNaN from './numberIsNaN';

export default function isDate(aDate) {
  return (
    Object.prototype.toString.call(aDate) === '[object Date]' &&
    !numberIsNaN(aDate.getTime())
  );
}
