import getElementById from '../common/getElementById';
import setInnerHtml from '../dom/setInnerHtml';

const thisName = (name) => (enhancement) => enhancement.name === name;

function thisEnhancementLevel(enhancements, name) {
  const thisEnhancement = enhancements.find(thisName(name));
  return thisEnhancement?.value ?? 0;
}

function getEnhancement(enhancements, name, inject) {
  const enhLevel = thisEnhancementLevel(enhancements, name);
  let enhClass = 'fshLime';
  if (enhLevel < 100) {
    enhClass = 'fshRed';
  }
  setInnerHtml(`<span class="${enhClass}">${enhLevel}%</span>`, inject);
}

export default function populateEnhancements(responseText) {
  if (!responseText?._enhancements) return;
  const enh = responseText._enhancements;
  getEnhancement(enh, 'Sustain', getElementById('fshSus'));
  getEnhancement(enh, 'Fury Caster', getElementById('fshFur'));
}
