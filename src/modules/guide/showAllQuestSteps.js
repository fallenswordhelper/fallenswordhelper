import getElementById from '../common/getElementById';
import querySelectorArray from '../common/querySelectorArray';
import getValue from '../system/getValue';

function showStep(e) { e.style.display = 'block'; }

export default function showAllQuestSteps() {
  if (!getValue('showNextQuestSteps')) { return; }
  const nextStageBtn = getElementById('next_stage_button');
  if (!nextStageBtn) { return; }
  querySelectorArray('div[id^="stage"]').forEach(showStep);
  nextStageBtn.style.display = 'none';
}
