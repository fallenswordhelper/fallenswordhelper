import profile from '../../../_dataAccess/export/profile';
import querySelector from '../../../common/querySelector';
import setText from '../../../dom/setText';
import createDiv from '../../../common/cElement/createDiv';
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
      setText(addCommas(response[statName]), statTd);
      const bonuseKey = `bonus_${statName}`
      statTd.append(
        createDiv({
          className: 'profile-stat-bonus',
          innerText: `(+${addCommas(response[bonuseKey])})`,
        }),
      );
  });
}

export default async function updateStatistics(enhancementsApp) {
  const response = await profile(playerName());
  updateBaseStats(response);
  updateStamina(response);
  enhancementsApp.updateEnhancements(response._enhancements);
  //updateEnhancements(response);
}
