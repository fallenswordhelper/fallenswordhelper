import { n as numberIsNaN } from './numberIsNaN-c0e87dea.js';

function formatDateTime(dateParts) {
  return `${dateParts[0]}-${dateParts[1]}-${dateParts[2]} ${
    dateParts[3]}:${dateParts[4]}:${dateParts[5]}`;
}

function isDate(aDate) {
  return Object.prototype.toString.call(aDate) === '[object Date]'
    && !numberIsNaN(aDate.getTime());
}

export { formatDateTime as f, isDate as i };
//# sourceMappingURL=isDate-c10883b5.js.map
