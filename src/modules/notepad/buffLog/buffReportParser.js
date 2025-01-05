import getTextTrim from '../../common/getTextTrim';
import querySelectorArray from '../../common/querySelectorArray';
import regExpExec from '../../common/regExpExec';
import sendException from '../../exceptions/sendException';

let transform = 0;

const outcomes = [
  "Skill ([\\w ]*) level (\\d*) was activated on '(\\w*)'",
  "The skill ([\\w ]*) of (current or higher level is currently active) on '(\\w*)'",
  "Player '(\\w*)' (has set their preferences to block the skill) '([\\w ]*)' from being cast on them.",
  "Player '\\w*' could not be found to buff.",
  'You do not have enough stamina remaining.',
  "Unable to cast skill(s) on '\\w*' due to their preferences.",
];

function getTransform() {
  if (!transform) {
    transform = new RegExp(outcomes.join('|'));
  }
  return transform;
}

function meta(report) {
  const buffParts = regExpExec(getTransform(), report);
  if (!buffParts) sendException(`unmatched buffReportParser - ${report}`);
  return buffParts;
}

export default function buffReportParser(scope) {
  return querySelectorArray('#quickbuff-report font:not(font *)', scope)
    .map(getTextTrim)
    .map(meta)
    .filter((i) => i);
}
