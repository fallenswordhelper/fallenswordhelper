import { t as e } from "./regExpFirstCapture-CdTmAP5x.js";
import { It as t, Mt as n, St as r } from "./constants-C54mky4_.js";
import { t as i } from "./getTextTrim-Wj82yPPN.js";
import { t as a } from "./partial-goh6HOls.js";
import { t as o } from "./currentGuildId-Br10wzx3.js";
import { t as s } from "./createDocument-95hjGOI1.js";
import { t as c } from "./querySelectorArray-BZbNvND7.js";
import { t as l } from "./guildManage-DmJ34aSd.js";
import { t as u } from "./closestTr-C0LB9ALA.js";
import { t as d } from "./regExpGroups-TjYD4DOT.js";
import { t as f } from "./lastActivity-CUAo9jGH.js";
import { t as p } from "./playerIdFromAnchor-C_3QBerg.js";
import { t as m } from "./uniq-SYQgNgys.js";
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

//# sourceMappingURL=ranksView-D82-PwGT.js.map