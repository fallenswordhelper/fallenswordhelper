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
  const area = router.byName[name];
  return area?.kind === 'master' ? `${name} [${area.level}]` : name;
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
 * @param {object} edge The stairs edge.
 * @returns {{lead: string, main: string, sub: string}}
 */
function stairs(edge) {
  const at = edge.x == null ? '' : ` at ${coord(edge.x, edge.y)}`;
  const arrive =
    edge.ax == null ? '' : `you arrive at ${coord(edge.ax, edge.ay)}`;
  return { lead: `Take the stairs${at} to`, main: edge.to, sub: arrive };
}

/**
 * Words for the next step, shown big. `step` is what the router returns: { from, edge, walk, cost }.
 * @param {object} router
 * @param {object} step
 * @returns {{lead?: string, main: string, sub?: string}}
 */
export function stepMain(router, step) {
  const edge = step.edge;
  const wm = (mapName) => worldMap(router, mapName);
  if (edge.kind === 'stairs') return stairs(edge);
  if (edge.kind === 'portal') {
    return {
      lead: `Take the portal at ${coord(edge.x, edge.y)} to`,
      main: wm(edge.to),
      sub: `${edge.name}, world map`,
    };
  }
  if (edge.kind === 'free') {
    return {
      main: `Teleport to ${edge.to}`,
      sub: `from anywhere, costs 25 stamina, you arrive at ${coord(edge.ax, edge.ay)}`,
    };
  }
  if (edge.kind === 'exit') {
    return {
      main: `Leave to the ${wm(edge.to)} world map`,
      sub: edge.x == null ? '' : `exit tile ${coord(edge.x, edge.y)}`,
    };
  }
  if (edge.kind === 'enter') {
    return {
      main: `Enter ${edge.to}`,
      sub: `from the ${wm(step.from)} world map${
        edge.x == null ? '' : `, you appear at ${coord(edge.x, edge.y)}`
      }`,
    };
  }
  return {
    main: `Cross to the ${wm(edge.to)} world map`,
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
  const edge = step.edge;
  const wm = (mapName) => worldMap(router, mapName);
  if (edge.kind === 'stairs') {
    const at = edge.x == null ? '' : `${coord(edge.x, edge.y)} `;
    return `Stairs ${at}→ ${edge.to}`;
  }
  if (edge.kind === 'portal') {
    return `Portal ${coord(edge.x, edge.y)} → ${wm(edge.to)} world map`;
  }
  if (edge.kind === 'free') return `Teleport → ${edge.to}`;
  if (edge.kind === 'exit') return `Leave to ${wm(edge.to)} world map`;
  if (edge.kind === 'enter') return `Enter ${edge.to}`;
  return `Cross to ${wm(edge.to)} world map`;
}
