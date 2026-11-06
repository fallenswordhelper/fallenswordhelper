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

/**
 * Opens the panel when it is closed, closes it when it is open.
 */
function toggle() {
  sendEvent('NewMap', 'pathfinder');
  if (pf.open) closePanel();
  else void openPanel(); // skipcq: JS-0098
}

/**
 * Builds the Path Finder button for the world button bar.
 * @returns {HTMLButtonElement}
 */
function makeButton() {
  const btn = createButton({
    className: 'fshCurveEle fshCurveBtn fshPoint fshPfButton tip-static',
    dataset: { tipped: 'Find the way to an area' },
  });
  onclick(btn, toggle);
  return btn;
}

/**
 * Adds the Path Finder button and panel to the world page, unless the setting is off.
 */
export default function injectPathfinder() {
  if (!getValue('showPathfinder')) return;
  const buttons = getElementById('fshWorldButtonContainer');
  if (!buttons) return;
  insertElement(buttons, makeButton());
  // like the Action List, the panel sits inside the map's container, so it moves with the map when the page scrolls
  const container =
    getElementById('actionContainer')?.offsetParent ?? document.body;
  const target = createDiv();
  insertElement(container, target);
  mount(PathfinderPanel, { target, props: { container } });
  if (restoreState()) void openPanel(); // skipcq: JS-0098
}
