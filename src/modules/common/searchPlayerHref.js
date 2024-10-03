import { showPlayerUrl } from '../support/constants';

export default function searchPlayerHref(targetPlayerName) {
  return `<a href="${showPlayerUrl}${targetPlayerName}">${
    targetPlayerName
  }</a>`;
}
