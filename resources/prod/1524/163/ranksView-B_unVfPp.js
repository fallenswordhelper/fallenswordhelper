import { t as e } from "./regExpFirstCapture-Bi32xMqS.js";
import { It as t, Mt as n, St as r } from "./constants-CIKidKvt.js";
import { t as i } from "./getTextTrim-hYBF-bdh.js";
import { t as a } from "./partial-CYzPXpZP.js";
import { t as o } from "./currentGuildId-D9JtVH2U.js";
import { t as s } from "./createDocument-CAZCPKmJ.js";
import { t as c } from "./querySelectorArray-Bdj4peIm.js";
import { t as l } from "./guildManage-BqPknTp6.js";
import { t as u } from "./closestTr-DTXY0qkG.js";
import { t as d } from "./regExpGroups-BIQtVEST.js";
import { t as f } from "./lastActivity-DUD_rfoH.js";
import { t as p } from "./playerIdFromAnchor-33DtIlyQ.js";
import { t as m } from "./uniq-BIFd13I0.js";
//#region src/modules/_dataAccess/fallbacks/ranksView.js
var h = (e) => Number(i(u(e)?.cells[4])?.replaceAll(",", "")), g = (e) => i(u(e)?.cells[3]), _ = (n) => Number(e(t, n));
function v(e) {
	return {
		guild_xp: h(e),
		id: p(e),
		name: i(e),
		rank: g(e)
	};
}
function y(t) {
	let { stam: r, max: i } = d(n, t);
	return {
		current_stamina: Number(r),
		last_activity: f(t).timestamp,
		level: Number(e(/Level:.+?(?<l>\d+)/, t)),
		max_stamina: Number(i),
		vl: _(t)
	};
}
function b(e) {
	return {
		guild_id: o(),
		image_version: 0,
		xp: -1,
		...v(e),
		...y(e.dataset.tipped)
	};
}
function x(e, t, n) {
	return {
		id: n,
		members: e.filter((e) => e.rank === t.rank),
		name: t.rank,
		permissions: 0,
		tax: -1
	};
}
async function S() {
	let e = s(await l()).getElementById("pCC");
	if (!e) return {
		e: {
			code: 0,
			message: "Failure"
		},
		s: !1
	};
	let t = c(r, e).map(b);
	return {
		r: m(t, "rank").map(a(x, t)),
		s: !0
	};
}
//#endregion
export { S as t };

//# sourceMappingURL=ranksView-B_unVfPp.js.map