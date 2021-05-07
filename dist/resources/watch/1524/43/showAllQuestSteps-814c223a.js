import { I as getValue, z as getElementById, F as querySelectorArray } from './calfSystem-476ab75d.js';

function showStep(e) { e.style.display = 'block'; }

function showAllQuestSteps() {
  if (!getValue('showNextQuestSteps')) { return; }
  const nextStageBtn = getElementById('next_stage_button');
  if (!nextStageBtn) { return; }
  querySelectorArray('div[id^="stage"]').forEach(showStep);
  nextStageBtn.style.display = 'none';
}

export default showAllQuestSteps;
//# sourceMappingURL=showAllQuestSteps-814c223a.js.map
