import { playerIdUrl } from '../support/constants';

export default function playerLink(id, name) {
  return `<a href="${playerIdUrl}${id}">${name}</a>`;
}
