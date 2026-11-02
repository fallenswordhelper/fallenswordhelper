// Routing over the Path Finder data (https://cristimirt.github.io/fspathfinder/). No DOM in here.
//   const router = createRouter(data);   // data = the parsed route.json
//   router.findRoute('Mountain Path', 'Ramdal Caves (Level 1)', [3, 8])  ->  steps (or null), steps.total = estimated moves
import MinHeap from './minHeap';

const norm = (s) =>
  String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
const FREE_TO = 'Mountain Path';
const FREE_AT = [9, 11]; // the free teleport always puts you on this tile

export default function createRouter(D) {
  const byName = {};
  const realmByGuide = {};
  const masterByGuide = {};
  D.areas.forEach((a) => {
    byName[a.name] = a;
    if (a.guideId != null)
      (a.kind === 'master' ? masterByGuide : realmByGuide)[a.guideId] = a;
  });
  const masters = D.worlds.map((n) => byName[n]);
  const realms = D.areas.filter((a) => a.kind === 'realm');

  // graph: every area has a list of edges { to, kind, x, y, ax, ay, note }
  //   stairs (tile x,y -> arrive ax,ay), exit (realm -> its world map), enter (world map -> realm), world (next to each other)
  const adj = {};
  D.areas.forEach((a) => {
    adj[a.name] = [];
  });
  const addEdge = (a, b, kind, info) =>
    adj[a].push(Object.assign({ to: b, kind }, info));
  const drawn = new Map(); // one entry per pair of connected areas, used by the website to draw lines
  const addDrawn = (a, b, kind) => {
    const k = [a, b].sort().join('\u0000');
    if (!drawn.has(k)) drawn.set(k, { a, b, kind });
  };
  realms.forEach((a) => {
    a.stairs.forEach((s) => {
      addEdge(a.name, s.to, 'stairs', {
        x: s.x,
        y: s.y,
        ax: s.arrive && s.arrive.x,
        ay: s.arrive && s.arrive.y,
        note: s.note || '',
      });
      addDrawn(a.name, s.to, 'stairs');
    });
    a.worldExits.forEach((e) => {
      addEdge(a.name, e.world, 'exit', { x: e.x, y: e.y });
      addEdge(e.world, a.name, 'enter', { x: e.x, y: e.y });
      addDrawn(a.name, e.world, 'exit');
    });
  });
  masters.forEach((m) => {
    (m.entries || []).forEach((n) => {
      if (!adj[m.name].some((e) => e.to === n)) {
        addEdge(m.name, n, 'enter', {});
        addEdge(n, m.name, 'exit', {});
        addDrawn(m.name, n, 'exit');
      }
    });
    if (m.nextWorld) {
      addEdge(m.name, m.nextWorld, 'world', {});
      addEdge(m.nextWorld, m.name, 'world', {});
    }
  });

  // Cost is in moves: walking inside a realm is the straight-line distance between the tile you arrive on and the tile of
  // the next stairs / portal (diagonals allowed, obstacles ignored). A portal reaches any master realm's world map, and you can
  // always teleport to Mountain Path for free, so the cheapest way may start by walking to a nearby portal instead.
  const cheb = (t, x, y) =>
    t && x != null ? Math.max(Math.abs(t[0] - x), Math.abs(t[1] - y)) : 0;
  function moveOptions(name, tile) {
    const out = [];
    adj[name].forEach((e) => {
      const walk = cheb(tile, e.x, e.y);
      if (e.kind === 'stairs')
        out.push({
          e,
          walk,
          cost: walk + 1,
          at: e.ax != null ? [e.ax, e.ay] : null,
        });
      else if (e.kind === 'exit')
        out.push({ e, walk, cost: walk + 1, at: null });
      else if (e.kind === 'enter')
        out.push({ e, walk: 0, cost: 4, at: e.x != null ? [e.x, e.y] : null });
      else out.push({ e, walk: 0, cost: 20, at: null });
    });
    // a portal takes you to the world map of any master realm; every portal of a realm leads to the same places, so only the nearest one counts
    let near = null;
    (byName[name].portals || []).forEach((p) => {
      const walk = cheb(tile, p.x, p.y);
      if (!near || walk < near.walk) near = { p, walk };
    });
    if (near) {
      masters.forEach((m) => {
        if (m.name === name) return;
        out.push({
          e: {
            to: m.name,
            kind: 'portal',
            x: near.p.x,
            y: near.p.y,
            name: near.p.name,
          },
          walk: near.walk,
          cost: near.walk + 2,
          at: null,
        });
      });
    }
    if (byName[FREE_TO])
      out.push({
        e: { to: FREE_TO, kind: 'free', ax: FREE_AT[0], ay: FREE_AT[1] },
        walk: 0,
        cost: 1,
        at: FREE_AT,
      });
    return out;
  }

  // Cheapest way from one area to another. `tile` is [x, y] of where you stand now (optional, makes the first walk exact).
  // Event-only areas are never used as a way through, only as the start or the destination.
  function findRoute(from, to, tile) {
    const key = (n, t) => n + '@' + (t ? t[0] + ',' + t[1] : '');
    const info = {};
    const dist = {};
    const prev = {};
    const heap = new MinHeap();
    const k0 = key(from, tile || null);
    info[k0] = { name: from, tile: tile || null };
    dist[k0] = 0;
    heap.push(0, k0);
    let goal = null;
    while (heap.size) {
      const [d, k] = heap.pop();
      if (d > dist[k]) continue;
      const st = info[k];
      if (st.name === to) {
        goal = k;
        break;
      }
      moveOptions(st.name, st.tile).forEach((o) => {
        if (o.e.to !== to && byName[o.e.to].event) return;
        const nk = key(o.e.to, o.at);
        const nd = d + o.cost;
        if (dist[nk] === undefined || nd < dist[nk]) {
          dist[nk] = nd;
          info[nk] = { name: o.e.to, tile: o.at };
          prev[nk] = {
            from: k,
            step: { from: st.name, edge: o.e, walk: o.walk, cost: o.cost },
          };
          heap.push(nd, nk);
        }
      });
    }
    if (!goal) return null;
    const steps = [];
    for (let k = goal; k !== k0; k = prev[k].from) steps.unshift(prev[k].step);
    steps.total = dist[goal];
    return steps;
  }

  // Name search: starts-with first, then contains, then every typed word somewhere in the name. Shorter names first.
  const index = D.areas.map((a) => ({
    a,
    n: norm(a.name),
    w: a.name.toLowerCase(),
  }));
  function search(q, limit) {
    const nq = norm(q);
    if (!nq) return [];
    const words = String(q).toLowerCase().split(/\s+/).filter(Boolean);
    const hits = [];
    index.forEach((e) => {
      let rank = -1;
      if (e.n.startsWith(nq)) rank = 0;
      else if (e.n.indexOf(nq) !== -1) rank = 1;
      else if (words.length > 1 && words.every((w) => e.w.indexOf(w) !== -1))
        rank = 2;
      if (rank >= 0) hits.push([rank, e.a]);
    });
    hits.sort(
      (x, y) =>
        x[0] - y[0] ||
        x[1].name.length - y[1].name.length ||
        x[1].level - y[1].level,
    );
    return hits.slice(0, limit || 8).map((h) => h[1]);
  }

  // Where the game says the player is. `realmId` / `masterRealmId` are the game's realm_id and master_realm_id, which are the guide's ids.
  function fromGame(realmId, masterRealmId) {
    if (realmId != null && realmId > 0 && realmByGuide[realmId])
      return realmByGuide[realmId];
    if (
      masterRealmId != null &&
      masterRealmId >= 0 &&
      masterByGuide[masterRealmId]
    )
      return masterByGuide[masterRealmId];
    return null;
  }

  return { byName, masters, realms, adj, drawn, findRoute, search, fromGame };
}
