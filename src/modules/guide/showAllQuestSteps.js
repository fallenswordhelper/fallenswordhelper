import getElementById from '../common/getElementById';
import getValue from '../system/getValue';
import querySelectorArray from '../common/querySelectorArray';

function showStep(e) { e.style.display = 'block'; }

export default function showAllQuestSteps() {
  if (!getValue('showNextQuestSteps')) { return; }
  const nextStageBtn = getElementById('next_stage_button');
  if (!nextStageBtn) { return; }
  querySelectorArray('div[id^="stage"]').forEach(showStep);
  nextStageBtn.style.display = 'none';
}
