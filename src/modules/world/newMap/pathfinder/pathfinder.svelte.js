import getValue from '../../../system/getValue';
import setValue from '../../../system/setValue';
import loadRouter from './pathfinderData';

/**
 * Everything the widget shows lives here. The panel is a view of this state.
 */
export const pf = $state({
  open: false,
  dest: '',
  router: null,
  loadError: '',
  here: null, // the area the player is in (an entry of the route data), or null
  hereName: '', // the game's name for the area, for the "not in the data" message
  tile: null, // [x, y]
  route: null, // steps from here to dest
  planning: false, // a re-plan is queued, so the panel does not show an old route
});

let timer = 0;
let settle = 0;
let hereKey = null;

/**
 * Reads where the player is from the game.
 * @returns {{realmId: number, masterId: number, x: number, y: number, name: string}|null} Null when the game has no position yet.
 */
function readGame() {
  try {
    const player = GameData.player();
    if (!player?.location) return null;
    let name = '';
    try {
      name = GameData.realm().name || '';
    } catch {
      // the realm is not known yet
    }
    return {
      realmId: player.realm_id,
      masterId: player.master_realm_id,
      x: player.location.x,
      y: player.location.y,
      name,
    };
  } catch {
    return null;
  }
}

/**
 * Works out the route from here to the destination, or clears it when there is none.
 */
function recompute() {
  const { router, dest, here, tile } = pf;
  pf.route = null;
  if (!router || !dest || !here || !router.byName[dest] || here.name === dest) {
    return;
  }
  pf.route = router.findRoute(here.name, dest, tile);
}

/**
 * Runs `fn` after `ms`, replacing any run that is still waiting.
 * @param {number} ms
 * @param {Function} fn
 */
function later(ms, fn) {
  clearTimeout(settle);
  settle = setTimeout(fn, ms);
}

/**
 * Checks where the player is and plans again when the area or tile changed.
 */
function tick() {
  const game = readGame();
  const { router } = pf;
  if (!game || !router) return;
  const area =
    router.fromGame(game.realmId, game.masterId) ||
    router.byName[game.name] ||
    null;
  const key = area ? area.name : `?${game.realmId}`;
  const tile = [game.x, game.y];
  const moved = !pf.tile || pf.tile[0] !== tile[0] || pf.tile[1] !== tile[1];
  pf.tile = tile;
  if (key !== hereKey) {
    // searching takes a moment, so the panel is drawn first and the search runs right after
    hereKey = key;
    pf.here = area;
    pf.hereName = game.name;
    pf.planning = true;
    later(0, () => {
      recompute();
      pf.planning = false;
    });
  } else if (moved) {
    // the step shown follows you right away; the way itself is worked out again once you stand still
    later(450, recompute);
  }
}

/**
 * Starts following the player, if it is not already.
 */
function startTicking() {
  if (timer) return;
  timer = setInterval(tick, 400);
  tick();
}

/**
 * Stops following the player.
 */
function stopTicking() {
  clearInterval(timer);
  clearTimeout(settle);
  timer = 0;
}

/**
 * Loads the route data into the state; sets `loadError` when it fails.
 */
export async function loadData() {
  pf.loadError = '';
  try {
    pf.router = await loadRouter();
    recompute();
  } catch (error) {
    pf.loadError = error.message;
  }
}

/**
 * Sets the destination, remembers it and plans the route.
 * @param {string} name Area name, or empty to clear it.
 */
export function setDest(name) {
  pf.dest = name || '';
  setValue('pathfinderDest', pf.dest);
  recompute();
}

/**
 * Opens the panel, loads the data if needed and starts following the player.
 */
export async function openPanel() {
  pf.open = true;
  setValue('pathfinderOpen', true);
  if (!pf.router) await loadData();
  if (pf.open && pf.router) startTicking();
}

/**
 * Closes the panel and stops following the player.
 */
export function closePanel() {
  pf.open = false;
  setValue('pathfinderOpen', false);
  stopTicking();
}

/**
 * Restores the saved destination.
 * @returns {boolean} Whether the panel was open last time.
 */
export function restoreState() {
  pf.dest = getValue('pathfinderDest') || '';
  return getValue('pathfinderOpen');
}
