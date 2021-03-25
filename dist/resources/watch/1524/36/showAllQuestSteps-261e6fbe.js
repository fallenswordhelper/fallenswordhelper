import { I as getValue, F as querySelectorArray, z as getElementById } from './calfSystem-c08399e5.js';

function showStep(e) { e.style.display = 'block'; }

function showAllQuestSteps() {
  if (!getValue('showNextQuestSteps')) { return; }
  querySelectorArray('div[id^="stage"]').forEach(showStep);
  getElementById('next_stage_button').style.display = 'none';
}

export default showAllQuestSteps;
//# sourceMappingURL=showAllQuestSteps-261e6fbe.js.map
