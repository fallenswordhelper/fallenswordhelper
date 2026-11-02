import getValue from '../../../system/getValue';
import setValue from '../../../system/setValue';
import loadRouter from './pathfinderData';

// Everything the widget shows lives here. The panel is a view of this state.
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

function recompute() {
  const { router, dest, here, tile } = pf;
  pf.route = null;
  if (!router || !dest || !here || !router.byName[dest] || here.name === dest) {
    return;
  }
  pf.route = router.findRoute(here.name, dest, tile);
}

function later(ms, fn) {
  clearTimeout(settle);
  settle = setTimeout(fn, ms);
}

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

function startTicking() {
  if (timer) return;
  timer = setInterval(tick, 400);
  tick();
}

function stopTicking() {
  clearInterval(timer);
  clearTimeout(settle);
  timer = 0;
}

export async function loadData() {
  pf.loadError = '';
  try {
    pf.router = await loadRouter();
    recompute();
  } catch (error) {
    pf.loadError = error.message;
  }
}

export function setDest(name) {
  pf.dest = name || '';
  setValue('pathfinderDest', pf.dest);
  recompute();
}

export async function openPanel() {
  pf.open = true;
  setValue('pathfinderOpen', true);
  if (!pf.router) await loadData();
  if (pf.open && pf.router) startTicking();
}

export function closePanel() {
  pf.open = false;
  setValue('pathfinderOpen', false);
  stopTicking();
}

export function restoreState() {
  pf.dest = getValue('pathfinderDest') || '';
  return getValue('pathfinderOpen');
}
