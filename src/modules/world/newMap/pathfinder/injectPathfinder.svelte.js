import './pathfinder.css';
import { mount } from 'svelte';
import sendEvent from '../../../analytics/sendEvent';
import createButton from '../../../common/cElement/createButton';
import createDiv from '../../../common/cElement/createDiv';
import getElementById from '../../../common/getElementById';
import insertElement from '../../../common/insertElement';
import onclick from '../../../common/onclick';
import getValue from '../../../system/getValue';
import PathfinderPanel from './PathfinderPanel.svelte';
import { closePanel, openPanel, pf, restoreState } from './pathfinder.svelte';

function toggle() {
  sendEvent('NewMap', 'pathfinder');
  if (pf.open) closePanel();
  else openPanel();
}

function makeButton() {
  const btn = createButton({
    className: 'fshCurveEle fshCurveBtn fshPoint fshPfButton tip-static',
    dataset: { tipped: 'Find the way to an area' },
  });
  onclick(btn, toggle);
  return btn;
}

export default function injectPathfinder() {
  if (!getValue('showPathfinder')) return;
  const buttons = getElementById('fshWorldButtonContainer');
  if (!buttons) return;
  insertElement(buttons, makeButton());
  const target = createDiv();
  insertElement(document.body, target);
  mount(PathfinderPanel, { target });
  if (restoreState()) openPanel();
}
