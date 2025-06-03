import profile from '../../../_dataAccess/export/profile';
import querySelector from '../../../common/querySelector';
import setText from '../../../dom/setText';
import playerName from '../../../common/playerName';
import addCommas from '../../../system/addCommas';

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
      setText(
        addCommas(response[`bonus_${statName}`]),
        querySelector('.profile-stat-bonus', statTd),
      );
  });
}

export default async function updateStatistics(enhancementsApp) {
  const response = await profile(playerName());
  updateBaseStats(response);
  updateStamina(response);
  enhancementsApp.updateEnhancements(response._enhancements);
}