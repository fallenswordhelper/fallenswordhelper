import createSpan from '../common/cElement/createSpan';
import getElementsByTagName from '../common/getElementsByTagName';
import insertElementAfter from '../common/insertElementAfter';
import querySelector from '../common/querySelector';
import setInnerHtml from '../dom/setInnerHtml';
import formatLastActivity from '../system/formatLastActivity';

function getActivitySpan(myPlayer) {
  let activity = querySelector('span.fshLastActivity', myPlayer);
  if (!activity) {
    activity = createSpan({ className: 'fshLastActivity' });
    const player = getElementsByTagName('h1', myPlayer)[0];
    insertElementAfter(activity, player);
  }
  return activity;
}

export default function addStatsQuickBuff(data) {
  const myPlayer = querySelector(`div.player[data-username="${
    data.username}"]`);
  const activity = getActivitySpan(myPlayer);
  setInnerHtml(`Last Activity: ${
    formatLastActivity(data.last_login)}<br>Stamina: ${
    data.current_stamina} / ${data.stamina} ( ${
    Math.floor((data.current_stamina / data.stamina) * 100)}% )`, activity);
}
