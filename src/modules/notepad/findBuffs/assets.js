import buffList from '../../support/buffObj.json';
import getValue from '../../system/getValue';

function makeOptions(el) {
  return `<option value="${el.id}">${el.name}</option>`;
}

export const buffCustom = {
  header: 'Buff',
  what: 'buff',
  control() {
    return `<select style="width:140px;" id="selectedBuff">${
      buffList.map(makeOptions).join('')}</select>`;
  },
  cutoff: '175 buff',
  searched: 'Nicknames of buff searched',
  potential: 'buff',
  processed: 'Buff',
  progress: 'buffers',
};
export const otherCustom = {
  header: 'Other',
  what: 'text',
  control() {
    const textToSearchFor = getValue('textToSearchFor') || ''; // skipcq: JS-W1043
    return '<input style="width:140px;" class="custominput" '
      + `id="textToSearchFor" type="text" title="Text to search for" value="${
        textToSearchFor}">`;
  },
  cutoff: '500+ play',
  searched: 'Text searched for',
  potential: 'play',
  processed: 'Play',
  progress: 'Other',
};
