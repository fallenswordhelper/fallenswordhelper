import profile from '../_dataAccess/export/profile';
import setTipped from '../common/setTipped';
import querySelector from '../common/querySelector';
import setText from '../dom/setText';
import createDiv from '../common/cElement/createDiv';
import createAnchor from '../common/cElement/createAnchor';
import cElement from '../common/cElement/cElement';
import playerName from '../common/playerName';
import addCommas from '../system/addCommas';

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

function enhancementTooltip(enhancement) {
  return `<center><b>${enhancement.name}</b></center><br>${enhancement.tooltip}`;
}

function enhancementTr(enhancement) {
  const labelAnchor = createAnchor({
    href: '#',
    className: 'tip-static',
    innerText: enhancement.name,
  })
  setTipped(enhancementTooltip(enhancement), labelAnchor);
  const labelSpan = cElement('span');
  labelSpan.append(labelAnchor, ':');

  const valueTd = cElement('td');
  const valueBar = createDiv({
    className: 'tip-static',
  });
  valueBar.style.cssText = `
    border: 1px solid #333333;
    width: 162px;
    height: 10px;
    padding: 0px;
    margin: 1px 0px;
    display: inline-block;
  `;
  setTipped(`<center>Skill Level:<br>${enhancement.value}%</center>`, valueBar);

  const valueBarFill = createDiv();
  const fillImg = enhancement.value <= 100
    ? 'https://cdn2.fallensword.com/ui/misc/progress_purple.png'
    : 'https://cdn2.fallensword.com/ui/misc/progress_blue.png';
  valueBarFill.style.cssText = `
    width: ${Math.min(enhancement.value, 100)}%;
    height: 100%;
    background: url('${fillImg}');
  `;
  valueBar.append(valueBarFill);
  valueTd.append(valueBar);

  const element = cElement('div');
  element.style.cssText = `
    display: grid;
    grid-template-columns: 1fr 162px;
    padding: 0.25px 2px;
    margin-right: 2px;
  `;

  element.append(
    labelSpan,
    valueBar,
  );
  return(element);
}

function updateEnhancements(response) {
  querySelector('#profileLeftColumn > div:nth-child(11)')
    .replaceChildren(...response._enhancements.map(enhancementTr));
}

export default async function updateStatistics() {
  const response = await profile(playerName());
  updateBaseStats(response);
  updateStamina(response);
  updateEnhancements(response);
}
