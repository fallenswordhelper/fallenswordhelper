import './participants.css';
import currentGuildId from '../common/currentGuildId';
import isArray from '../common/isArray';
import isObject from '../common/isObject';
import partial from '../common/partial';
import querySelectorArray from '../common/querySelectorArray';
import setTipped from '../common/setTipped';

const addId = (e) => [e, Number(e.previousElementSibling.value)];

function addMeta(json, e) {
  if (json.r.arenas) {
    return e.concat(json.r.arenas.find((a) => a.id === e[1]));
  }
  return e;
}

function listPlayers(myGuild, p) {
  if (p.guild_id === myGuild) {
    return `<span class="fshRed">${p.name}</span>`;
  }
  return p.name;
}

function grey(el) {
  if (el && el.classList) { el.classList.add('fshGray'); }
}

const validMoves = (json, arena) => arena.reward_type === 1 && json.r.moves;

const findMove = (json, arena) => json.r.moves.find((a) => a.id === arena.reward);

const isMax = (thisMove) => thisMove && thisMove.max === 3;

const hasMax = (json, arena) => validMoves(json, arena) && isMax(findMove(json, arena));

function testMoves(json, [button, , arena]) {
  if (arena && hasMax(json, arena)) { grey(button); }
}

function testGuildies(myGuild, button, arena) {
  const fromMyGuild = arena.players.filter((p) => p.guild_id === myGuild)
    .length;
  const maxGuildies = arena.max_players / 4;
  if (fromMyGuild === maxGuildies) { grey(button); }
}

function hazPlayers(myGuild, button, arena) {
  setTipped(arena.players.map(partial(listPlayers, myGuild)).join('<br>'), button);
  button.classList.add('tip-static');
  if (myGuild && button.value === 'Join') {
    testGuildies(myGuild, button, arena);
  }
}

const arenaPlayerListChecks = [
  isObject,
  (e) => isArray(e.players),
  (e) => e.players.length > 0,
];

function decorate(myGuild, [button, , arena]) {
  if (arenaPlayerListChecks.every((f) => f(arena))) {
    hazPlayers(myGuild, button, arena);
  }
}

function getMeta(json) {
  return querySelectorArray(
    '#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]',
  ).map(addId).map(partial(addMeta, json));
}

export default function participants(json) {
  if (!json || !json.s || !isObject(json.r)) { return; }
  const withMeta = getMeta(json);
  withMeta.forEach(partial(decorate, currentGuildId()));
  withMeta.forEach(partial(testMoves, json));
}
