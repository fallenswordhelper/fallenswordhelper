// Words for one step of a route. `step` is what the router returns: { from, edge, walk, cost }.
const coord = (x, y) => `(${x},${y})`;
const isWalk = (kind) =>
  kind === 'stairs' || kind === 'exit' || kind === 'portal';

// a world map is shown with its level in brackets, the way the game sorts its portal menu
export function worldMap(router, name) {
  const a = router.byName[name];
  return a?.kind === 'master' ? `${name} [${a.level}]` : name;
}

// moves from where you stand to the tile the step starts on
export function liveWalk(step, tile) {
  const { edge } = step;
  if (!isWalk(edge.kind) || !tile || edge.x == null) return 0;
  return Math.max(Math.abs(tile[0] - edge.x), Math.abs(tile[1] - edge.y));
}

export function startsOnTile(step) {
  return isWalk(step.edge.kind);
}

function stairs(e) {
  const at = e.x == null ? '' : ` at ${coord(e.x, e.y)}`;
  const arrive = e.ax == null ? '' : `, you arrive at ${coord(e.ax, e.ay)}`;
  return { main: `Stairs${at}`, sub: `to ${e.to}${arrive}` };
}

export function stepMain(router, step) {
  const e = step.edge;
  const wm = (n) => worldMap(router, n);
  if (e.kind === 'stairs') return stairs(e);
  if (e.kind === 'portal') {
    return {
      main: `Portal at ${coord(e.x, e.y)}`,
      sub: `${e.name} to the ${wm(e.to)} world map`,
    };
  }
  if (e.kind === 'free') {
    return { main: `Teleport to ${e.to}`, sub: 'free from anywhere' };
  }
  if (e.kind === 'exit') {
    return {
      main: `Leave to the ${wm(e.to)} world map`,
      sub: e.x == null ? '' : `exit tile ${coord(e.x, e.y)}`,
    };
  }
  if (e.kind === 'enter') {
    return {
      main: `Enter ${e.to}`,
      sub: `from the ${wm(step.from)} world map${
        e.x == null ? '' : `, you appear at ${coord(e.x, e.y)}`
      }`,
    };
  }
  return {
    main: `Cross to the ${wm(e.to)} world map`,
    sub: 'neighbouring world maps',
  };
}

export function stepShort(router, step) {
  const e = step.edge;
  const wm = (n) => worldMap(router, n);
  if (e.kind === 'stairs') {
    return `Stairs ${e.x == null ? '' : `${coord(e.x, e.y)} `}→ ${e.to}`;
  }
  if (e.kind === 'portal') {
    return `Portal ${coord(e.x, e.y)} → ${wm(e.to)} world map`;
  }
  if (e.kind === 'free') return `Teleport → ${e.to}`;
  if (e.kind === 'exit') return `Leave to ${wm(e.to)} world map`;
  if (e.kind === 'enter') return `Enter ${e.to}`;
  return `Cross to ${wm(e.to)} world map`;
}
