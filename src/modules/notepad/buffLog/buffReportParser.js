import getTextTrim from '../../common/getTextTrim';
import querySelectorArray from '../../common/querySelectorArray';
import regExpExec from '../../common/regExpExec';

let transform;

const outcomes = [
  'Skill ([\\w ]*) level (\\d*) was activated on \'(\\w*)\'',
  'The skill ([\\w ]*) of (current or higher level is currently active) on \'(\\w*)\'',
  'Player \'(\\w*)\' (has set their preferences to block the skill) \'([\\w ]*)\' from being cast on them.',
];

function buildTransform() {
  if (!transform) {
    transform = new RegExp(outcomes.join('|'));
  }
}

function meta(report) {
  return regExpExec(transform, report);
}

export default function buffReportParser(scope) {
  buildTransform();
  return querySelectorArray('#quickbuff-report font:not(font *)', scope)
    .map(getTextTrim).map(meta);
}
