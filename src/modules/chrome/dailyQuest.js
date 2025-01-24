import indexAjaxDoc from '../ajax/indexAjaxDoc';
import sendEvent from '../analytics/sendEvent';
import getElementById from '../common/getElementById';
import onclick from '../common/onclick';
import confirm from '../modal/confirm';
import getValue from '../system/getValue';

async function reroll() {
  const oldQuest = getElementById('minibox-daily-quest');
  if (!oldQuest) return;
  sendEvent('dailyQuest', 'reroll');
  const doc = await indexAjaxDoc({
    cmd: 'dailyquests',
    subcmd: 'reroll',
  });
  if (!doc) return;
  const newQuest = getElementById('minibox-daily-quest', doc);
  if (!newQuest) return;
  oldQuest.replaceWith(newQuest);
}

async function interceptReRoll(e) {
  e.stopPropagation();
  const canProceed = await confirm(
    'Are you sure you want to re-roll the Daily Quest?',
  );
  if (canProceed) reroll();
}

export default function dailyQuest() {
  if (!getValue('dailyQuestReRoll')) return;
  const rerollBtn = getElementById('daily-quest-reroll-button');
  if (!rerollBtn) return;
  onclick(rerollBtn, interceptReRoll, true);
}
