import getElementById from '../common/getElementById';
import querySelector from '../common/querySelector';
import setInnerHtml from '../dom/setInnerHtml';
import outputFormat from '../system/outputFormat';

function buffTimeLeft(secs) {
  const min = Math.floor(secs / 60);
  const sec = secs % 60;
  let buffTimeToExpire = outputFormat(min, 'm');
  if (min > 0 && sec > 0) { buffTimeToExpire += ' '; }
  buffTimeToExpire += outputFormat(sec, 's');
  return buffTimeToExpire;
}

function timeToExpire(secs) {
  const buffTimeToExpire = buffTimeLeft(secs);
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
  const secs = dict[buff] || 0;
  if (secs) { return timeToExpire(secs); }
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
