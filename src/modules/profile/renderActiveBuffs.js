import getValue from '../system/getValue';
import ModalConfirm from '../modal/ModalConfirm.svelte';
import daRemoveSkill from '../_dataAccess/daRemoveSkill';
import { mount } from 'svelte';
import createDiv from '../common/cElement/createDiv';
import cElement from '../common/cElement/cElement';
import onclick from '../common/onclick';
import setTipped from '../common/setTipped';
import setText from '../dom/setText';
import querySelector from '../common/querySelector';
import { cdn } from '../system/system';

function formatDuration(secondsLeft) {
  if (secondsLeft > 60) {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    return `${minutes}m ${seconds}s`;
  }
  return `${secondsLeft}s`;
}

function deactivateBuff(buff) {
  mount(
    ModalConfirm,
    {
      target: document.body,
      props: {
        msg: `Are you sure you wish to remove the ${buff.name} skill?`,
        visible: true,
        resolve: async (doDeactivate) => {
          if (!doDeactivate) return;
          await daRemoveSkill(buff.id);
        }
      }
    },
  );
}

function buffElement(buff) {
  const div = createDiv();
  div.style.cssText = `
    display: inline-block;
    text-align: center;
    cursor: pointer;
    font-size: 10px;
    text-wrap: nowrap;
  `;
  onclick(div, () => deactivateBuff(buff));

  const img = cElement('img', {
    src: `${cdn}skills/${buff.id}.png`,
    alt: buff.name,
    width: 25,
    height: 24,
    className: 'tip-static',
  });
  setTipped(`<div style='width: 250px; font-size: 12px;'><center><span style='color: #0f0'><b>${buff.name}</b> (Level: ${buff.level})</span><br>${buff.tooltip}<br>[Click to De-Activate]</center></div>`, img);
  div.append(img);

  if (getValue('showBuffLevel')) {
    const buffLevel = createDiv();
    setText(`(${buff.level})`, buffLevel);
    buffLevel.style.fontWeight = 'bold';
    div.append(buffLevel);
  }

  const timeLeft = createDiv({ innerText: formatDuration(buff.duration) });
  div.append(timeLeft);
  return(div);
}

export default function renderActiveBuffs(activeBuffs) {
  const buffListWrapper = createDiv();
  buffListWrapper.style.cssText = `
    padding-top: 2px;
    display: flex;
    justify-content: space-around;
  `;

  buffListWrapper.append(...activeBuffs.map(buffElement));
  querySelector('#profileRightColumn > div:nth-child(14)')
    .replaceWith(buffListWrapper);
}
