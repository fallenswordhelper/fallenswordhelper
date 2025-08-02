import profile from '../../../_dataAccess/export/profile';
import querySelector from '../../../common/querySelector';
import setText from '../../../dom/setText';
import playerName from '../../../common/playerName';
import addCommas from '../../../system/addCommas';
import renderActiveBuffs from '../../renderActiveBuffs';
import renderEnhancements from '../../renderEnhancements';

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
        `(+${bonus})`,
        querySelector('.profile-stat-bonus', statTd),
      );
  });
}

export default async function updateStatistics() {
  const response = await profile(playerName());
  updateBaseStats(response);
  updateStamina(response);

  renderEnhancements(response._enhancements);
  renderActiveBuffs(response._skills);
}
