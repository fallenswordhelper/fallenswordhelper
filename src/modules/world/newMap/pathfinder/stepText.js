/**
 * Formats a tile as (x,y).
 * @param {number} x
 * @param {number} y
 * @returns {string}
 */
const coord = (x, y) => `(${x},${y})`;
/**
 * Whether a step starts by walking to a tile.
 * @param {string} kind Edge kind.
 * @returns {boolean}
 */
const isWalk = (kind) =>
  kind === 'stairs' || kind === 'exit' || kind === 'portal';

/**
 * A world map is shown with its level in brackets, the way the game sorts its portal menu.
 * @param {object} router
 * @param {string} name
 * @returns {string}
 */
export function worldMap(router, name) {
  const a = router.byName[name];
  return a?.kind === 'master' ? `${name} [${a.level}]` : name;
}

/**
 * Moves from where you stand to the tile the step starts on.
 * @param {object} step
 * @param {number[]} [tile] Where you stand, [x, y].
 * @returns {number}
 */
export function liveWalk(step, tile) {
  const { edge } = step;
  if (!isWalk(edge.kind) || !tile || edge.x == null) return 0;
  return Math.max(Math.abs(tile[0] - edge.x), Math.abs(tile[1] - edge.y));
}

/**
 * Whether the step starts on a tile you have to walk to.
 * @param {object} step
 * @returns {boolean}
 */
export function startsOnTile(step) {
  return isWalk(step.edge.kind);
}

/**
 * Words for a stairs step.
 * @param {object} e The stairs edge.
 * @returns {{lead: string, main: string, sub: string}}
 */
function stairs(e) {
  const at = e.x == null ? '' : ` at ${coord(e.x, e.y)}`;
  const arrive = e.ax == null ? '' : `you arrive at ${coord(e.ax, e.ay)}`;
  return { lead: `Take the stairs${at} to`, main: e.to, sub: arrive };
}

/**
 * Words for the next step, shown big. `step` is what the router returns: { from, edge, walk, cost }.
 * @param {object} router
 * @param {object} step
 * @returns {{lead?: string, main: string, sub?: string}}
 */
export function stepMain(router, step) {
  const e = step.edge;
  const wm = (n) => worldMap(router, n);
  if (e.kind === 'stairs') return stairs(e);
  if (e.kind === 'portal') {
    return {
      lead: `Take the portal at ${coord(e.x, e.y)} to`,
      main: wm(e.to),
      sub: `${e.name}, world map`,
    };
  }
  if (e.kind === 'free') {
    return {
      main: `Teleport to ${e.to}`,
      sub: `from anywhere, costs 25 stamina, you arrive at ${coord(e.ax, e.ay)}`,
    };
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

/**
 * One line for a step further along the route.
 * @param {object} router
 * @param {object} step
 * @returns {string}
 */
export function stepShort(router, step) {
  const e = step.edge;
  const wm = (n) => worldMap(router, n);
  if (e.kind === 'stairs') {
    const at = e.x == null ? '' : `${coord(e.x, e.y)} `;
    return `Stairs ${at}→ ${e.to}`;
  }
  if (e.kind === 'portal') {
    return `Portal ${coord(e.x, e.y)} → ${wm(e.to)} world map`;
  }
  if (e.kind === 'free') return `Teleport → ${e.to}`;
  if (e.kind === 'exit') return `Leave to ${wm(e.to)} world map`;
  if (e.kind === 'enter') return `Enter ${e.to}`;
  return `Cross to ${wm(e.to)} world map`;
}
