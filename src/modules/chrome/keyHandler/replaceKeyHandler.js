import on from '../../common/on';
import doSendGold from '../../world/newMap/doSendGold';
import backpack from './backpack';
import combatSetKey from './combatSetKey';
import createGroup from './createGroup';
import doRepair from './doRepair';
import fastWearMgr from './fastWearMgr';
import gotoGuild from './gotoGuild';
import joinAllGroup from './joinAllGroup';
import logPage from './logPage';
import movePage from './movePage';
import profile from './profile';
import toWorld from './toWorld';

const keyLookup = [
  ['!', combatSetKey, 0], // Shift+1
  ['@', combatSetKey, 1], // Shift+2
  ['"', combatSetKey, 1], // Shift+2 -- for UK keyboards
  ['#', combatSetKey, 2], // Shift+3
  ['£', combatSetKey, 2], // Shift+3 -- for UK keyboards
  ['$', combatSetKey, 3], // Shift+4
  ['%', combatSetKey, 4], // Shift+5
  ['^', combatSetKey, 5], // Shift+6
  ['&', combatSetKey, 6], // Shift+7
  ['*', combatSetKey, 7], // Shift+8
  ['(', combatSetKey, 8], // Shift+9
  ['0', toWorld], // go to world [0]
  ['<', movePage, '<'], // move to prev page [<]
  ['>', movePage, '>'], // move to next page [>]
  ['G', createGroup], // create group [G]
  ['L', logPage], // Log Page [L]
  ['b', backpack], // backpack [b]
  ['g', gotoGuild], // go to guild [g]
  ['j', joinAllGroup], // join all group [j]
  ['l', logPage], // Log Page [l]
  ['p', profile], // profile [p]
  ['r', doRepair], // repair [r]
  ['v', fastWearMgr], // fast wear manager [v]
  ['y', doSendGold], // fast send gold [y]
];

function handleKey(key) {
  const mapping = keyLookup.find(([mapped]) => key === mapped);
  if (mapping) { mapping[1](mapping[2]); }
}

const bailOut = [
  (evt) => ['HTML', 'BODY'].every((tag) => evt.target.tagName !== tag),
  /* ignore control, alt and meta keys
  (I think meta is the command key in Macintoshes) */
  (evt) => evt.ctrlKey,
  (evt) => evt.metaKey,
  (evt) => evt.altKey,
];

function doNotHandle(evt) {
  return bailOut.some((fn) => fn(evt));
}

function handleKeyUp(e) {
  if (doNotHandle(e)) { return; }
  handleKey(e.key);
}

export default function replaceKeyHandler() {
  on(document, 'keyup', handleKeyUp);
}
