import { S as getUrlParameter, b as createDiv, i as insertElement, f as insertHtmlBeforeEnd, az as cdn, B as setInnerHtml, s as partial, k as on, E as querySelector, z as getElementById } from './calfSystem-02fd040d.js';
import { a as arena, i as injectArena, v as view } from './arena-3d8d1dce.js';
import { i as interceptSubmit } from './interceptSubmit-091d1f17.js';
import { a as addCommas } from './addCommas-c0fbc0a2.js';
import { c as createSelect } from './createSelect-164999ee.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-21fe50bb.js';
import { i as isSelected } from './isSelected-f063e2cb.js';
import './allthen-b379c12a.js';
import './all-47be5400.js';
import './closestTr-ac0d1c6b.js';
import './closest-8e46d454.js';
import './idb-d6386b46.js';
import './intValue-a6f9b475.js';
import './changeMinMax-62835ba1.js';
import './numberIsNaN-c7db67d0.js';
import './assets-38ff398f.js';
import './lvlTests-78b1d1df.js';
import './loadDataTables-64a7630e.js';
import './currentGuildId-b6506645.js';
import './setTipped-031e6715.js';
import './formToUrl-37eb4bb6.js';
import './insertElementBefore-c442a2a7.js';

var css = ".moveImg {\n  display: inline-block;\n  height: 25px;\n  width: 25px;\n}\n\n.flex {\n  align-items: center;\n  display: flex;\n  justify-content: center\n}\n\n.flex div {padding: 2px;}\n";
var modules_54fe6fde = {};

const thisTournament = () => Number(getUrlParameter('pvp_id'));

function findArena(r) {
  const tourney = thisTournament();
  return r.arenas.find((e) => e.id === tourney);
}

function usesetup(setId) {
  return arena({ subcmd: 'usesetup', set_id: setId });
}

let moveContainer;

function getContainer(movesController) {
  if (!moveContainer) {
    moveContainer = insertElement(movesController, createDiv());
  }
  return moveContainer;
}

function injectImg(container, id) {
  let move = String(id - 1);
  if (id === 0) { move = 'x'; }
  insertHtmlBeforeEnd(container,
    `<img src="${cdn}arena/${move}.png" class="moveImg">`);
}

function thisOptions(currentSet, e) {
  return `<option value="${String(e.id)}"${
    isSelected(currentSet.slots.join(), e.slots.join())}>${e.name}</option>`;
}

function doMoves(thisSet, movesController) {
  const container = getContainer(movesController);
  setInnerHtml('', container);
  thisSet.slots.forEach(partial(injectImg, container));
}

function doChange(movesController, evt, thisSet) {
  usesetup(evt.target.value).then((json) => {
    if (json.s) {
      doMoves(thisSet, movesController);
    }
  });
}

function onchange(r, movesController, evt) {
  const thisSet = r.sets.find((e) => e.id === Number(evt.target.value));
  if (thisSet) { doChange(movesController, evt, thisSet); }
}

function doSelect(r, movesController) {
  if (r.sets.length > 0) {
    const thisSelect = createSelect({
      innerHTML: r.sets.map(partial(thisOptions, r.current_set))
        .join(''),
    });
    on(thisSelect, 'change', partial(onchange, r, movesController));
    const div = createDiv({ className: 'flex' });
    insertElement(div, thisSelect);
    insertElementAfterBegin(movesController, div);
  }
}

function showMoves(r, thisCell, thisArena) {
  if (thisArena.specials) {
    const movesController = createDiv({ className: 'flex' });
    doSelect(r, movesController);
    doMoves(r.current_set, movesController);
    insertElement(thisCell, movesController);
  }
}

const boolToString = (e) => String(Number(e));

function param(label, value) {
  return `<div><div>${label}</div><div><img src="${cdn
  }ui/arena/specials_${boolToString(value)}.png"></div></div>`;
}

function paramBox(thisArena) {
  return `<div class="flex"><div><div>Players</div><div>${
    thisArena.players.length} / ${thisArena.max_players}</div></div>${
    param('Specials', thisArena.specials)}${
    param('Hell Forge', thisArena.hellforge)}${
    param('Epic', thisArena.epic)}<div><div>Max Equip Level</div><div>${
    addCommas(thisArena.equip_level)}</div></div></div>`;
}

function showAttribs(json) {
  const thisCell = querySelector('#pCC > form > table tr:nth-of-type(4) td');
  if (json.r && thisCell) {
    thisCell.setAttribute('align', 'center');
    const thisArena = findArena(json.r);
    insertHtmlBeforeEnd(thisCell, paramBox(thisArena));
    showMoves(json.r, thisCell, thisArena);
  }
}

function arenaJoin() {
  const tabs = getElementById('arenaTypeTabs');
  if (tabs) {
    injectArena();
  } else {
    interceptSubmit();
    view().catch(() => ({})).then(showAttribs);
  }
}

export default arenaJoin;
//# sourceMappingURL=arenaJoin-6245f41f.js.map
