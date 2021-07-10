import getElementById from '../common/getElementById';
import outputFormat from '../system/outputFormat';
import querySelector from '../common/querySelector';
import setInnerHtml from '../dom/setInnerHtml';

function buffTimeLeft(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  let buffTimeToExpire = outputFormat(m, 'm');
  if (m > 0 && s > 0) { buffTimeToExpire += ' '; }
  buffTimeToExpire += outputFormat(s, 's');
  return buffTimeToExpire;
}

function timeToExpire(s) {
  const buffTimeToExpire = buffTimeLeft(s);
  return `<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${
    buffTimeToExpire})</span>`;
}

function isAvailable(buff) {
  const elem = querySelector(`#buff-outer input[data-name="${buff}"]`);
  if (elem) {
    return `<span class="quickbuffActivate" data-buffid="${elem.value
    }">Activate</span>`;
  }
  return '<span class="fshRed;">Off</span>';
}

function buffRunning(dict, buff) {
  const s = dict[buff] || 0;
  if (s) { return timeToExpire(s); }
  return isAvailable(buff);
}

function getBuff(dict, buff, inject) {
  setInnerHtml(buffRunning(dict, buff), inject);
}

function makeDictionary(acc, curr) {
  acc[curr.name] = curr.duration;
  return acc;
}

export default function populateBuffs(responseText) {
  const skl = responseText._skills.reduce(makeDictionary, {});
  getBuff(skl, 'Guild Buffer', getElementById('fshGB'));
  getBuff(skl, 'Buff Master', getElementById('fshBM'));
  getBuff(skl, 'Extend', getElementById('fshExt'));
  getBuff(skl, 'Reinforce', getElementById('fshRI'));
}
