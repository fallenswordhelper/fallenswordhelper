import { T as getUrlParameter, b as createDiv, i as insertElement, f as insertHtmlBeforeEnd, ax as cdn, B as setInnerHtml, s as partial, k as on, E as querySelector, z as getElementById } from './calfSystem-476ab75d.js';
import { a as arena, i as injectArena, v as view } from './arena-fbe90178.js';
import { i as interceptSubmit } from './interceptSubmit-1cc9bbe8.js';
import { a as addCommas } from './addCommas-5b74e836.js';
import { c as createSelect } from './createSelect-25ba97b2.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-7c55ba28.js';
import { i as isSelected } from './isSelected-7dbc97c6.js';
import './allthen-0f84efe6.js';
import './all-0d44a747.js';
import './closestTr-92a4bf9c.js';
import './closest-bc1fafe7.js';
import './idb-07a4f1ba.js';
import './intValue-fefb28df.js';
import './changeMinMax-54c36996.js';
import './numberIsNaN-885a5556.js';
import './assets-c96edcaf.js';
import './lvlTests-d3fbadf8.js';
import './loadDataTables-d48f4e54.js';
import './currentGuildId-1f42e657.js';
import './setTipped-2c9c4c64.js';
import './formToUrl-3223a0cf.js';
import './insertElementBefore-23d4e956.js';

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
//# sourceMappingURL=arenaJoin-6d6fcf00.js.map
