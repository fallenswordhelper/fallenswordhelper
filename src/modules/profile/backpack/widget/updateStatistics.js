import profile from '../../../_dataAccess/export/profile';
import querySelector from '../../../common/querySelector';
import setText from '../../../dom/setText';
import playerName from '../../../common/playerName';
import addCommas from '../../../system/addCommas';
import mountEnhancements from '../../mountEnhancements';
import renderActiveBuffs from '../../renderActiveBuffs';

let enhancementsApp = 0;

function updateStamina(response) {
  const staminaTd = querySelector('span#stat-stamina');
  setText(
    `${addCommas(response.current_stamina)} / ${addCommas(response.stamina)}`,
    staminaTd,
  );
}

function updateBaseStats(response) {
  ['attack', 'defense', 'damage', 'armor', 'hp']
    .forEach((statName) =>{
      const statTd = querySelector(`td#stat-${statName}`);
      setText(
        addCommas(response[statName]),
        statTd.childNodes[0],
      );
      const bonus = response[`bonus_${statName}`];
      setText(
        `(+${addCommas(bonus)})`,
        querySelector('.profile-stat-bonus', statTd),
      );
  });
}

export default async function updateStatistics() {
  const response = await profile(playerName());
  updateBaseStats(response);
  updateStamina(response);

  if (!enhancementsApp) {
    enhancementsApp = mountEnhancements(response._enhancements);
  } else {
    enhancementsApp.updateEnhancements(response._enhancements);
  }

  renderActiveBuffs(response._skills);
}
