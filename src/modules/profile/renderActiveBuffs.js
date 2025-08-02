import getValue from '../system/getValue';
import ModalConfirm from '../modal/ModalConfirm.svelte';
import daRemoveSkill from '../_dataAccess/daRemoveSkill';
import { mount } from 'svelte';
import createDiv from '../common/cElement/createDiv';
import cElement from '../common/cElement/cElement';
import setTipped from '../common/setTipped';
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

function deactivateBuff(div, buff) {
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
          div.remove();
        }
      }
    },
  );
}

function buffImg(buff) {
  const img = cElement('img', {
    src: `${cdn}skills/${buff.id}.png`,
    alt: buff.name,
    width: 25,
    height: 24,
    className: 'tip-static',
  });
  setTipped(
    `<div style='width: 250px; font-size: 12px;'><center><span style='color: #0f0'><b>${buff.name}</b> (Level: ${buff.level})</span><br>${buff.tooltip}<br>[Click to De-Activate]</center></div>`,
    img,
  );
  return img;
}

function buffLevelDiv(buff) {
  const buffLevel = createDiv({
    className: 'fshBold',
    innerText: `(${buff.level})`,
  });
  return buffLevel;
}

function buffElement(buff) {
  const div = createDiv({
    className: 'fshBlock fshCenter fshPoint',
    style: { cssText: `
      font-size: 10px;
      text-wrap: nowrap;
      width: 52px;
      padding-top: 2px;`,
    },
    onclick: () => deactivateBuff(div, buff),
  });
  div.append(buffImg(buff));

  if (getValue('showBuffLevel')) {
    div.append(buffLevelDiv(buff));
  }

  div.append(
    createDiv({ innerText: formatDuration(buff.duration) }),
  );
  return(div);
}

export default function renderActiveBuffs(activeBuffs) {
  activeBuffs.sort((a, b) => a.duration > b.duration);
  const buffListWrapper = createDiv();
  if (activeBuffs.length < 6) {
    buffListWrapper.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    `;
  }

  buffListWrapper.append(...activeBuffs.map(buffElement));
  querySelector('#profileRightColumn > div:nth-child(14)')
    .replaceWith(buffListWrapper);
}
