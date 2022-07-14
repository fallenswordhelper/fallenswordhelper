import getTextTrim from '../../common/getTextTrim';
import querySelectorArray from '../../common/querySelectorArray';
import regExpExec from '../../common/regExpExec';

let transform = 0;

const outcomes = [
  'Skill ([\\w ]*) level (\\d*) was activated on \'(\\w*)\'',
  'The skill ([\\w ]*) of (current or higher level is currently active) on \'(\\w*)\'',
  'Player \'(\\w*)\' (has set their preferences to block the skill) \'([\\w ]*)\' from being cast on them.',
];

function getTransform() {
  if (!transform) {
    transform = new RegExp(outcomes.join('|'));
  }
  return transform;
}

function meta(report) {
  return regExpExec(getTransform(), report);
}

export default function buffReportParser(scope) {
  return querySelectorArray('#quickbuff-report font:not(font *)', scope)
    .map(getTextTrim).map(meta);
}
