import getTextTrim from '../../common/getTextTrim';
import querySelectorArray from '../../common/querySelectorArray';

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
  return transform.exec(report);
}

export default function buffReportParser(scope) {
  buildTransform();
  const buffsAttempted = querySelectorArray('#quickbuff-report font:not(font *)', scope)
    .map(getTextTrim).map(meta);
  return buffsAttempted;
}
