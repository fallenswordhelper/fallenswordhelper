import { hDataPlayerFields, hDataGuildFields } from '../support/constants';

export default function hData(response, section, field) {
  const fieldId = section === 'p'
    ? hDataPlayerFields[field]
    : hDataGuildFields[field];
  return response.h[section].find((i) => i.k === fieldId)?.v;
}
