import { t as e } from "./regExpFirstCapture-D_QeHFEY.js";
import { It as t, Mt as n, St as r } from "./constants-CenxlFMY.js";
import { t as i } from "./getTextTrim-CvXe85fp.js";
import { t as a } from "./partial-Bo20zBni.js";
import { t as o } from "./currentGuildId-WKn2jVcy.js";
import { t as s } from "./createDocument-B1aK9_TZ.js";
import { t as c } from "./querySelectorArray-C70U47NF.js";
import { t as l } from "./guildManage-D4o3CS1R.js";
import { t as u } from "./closestTr-BGwSv-6S.js";
import { t as d } from "./regExpGroups-DJF-Cl1w.js";
import { t as f } from "./lastActivity-DkuqQAux.js";
import { t as p } from "./playerIdFromAnchor-j6OJemyo.js";
import { t as m } from "./uniq-DgWt7KlP.js";
// src/modules/_dataAccess/fallbacks/ranksView.js
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
	let e = await l(), t = s(e).getElementById("pCC");
	if (!t) return {
		e: {
			code: 0,
			message: "Failure"
		},
		s: !1
	};
	let n = c(r, t).map(b);
	return {
		r: m(n, "rank").map(a(x, n)),
		s: !0
	};
}
export { S as t };

//# sourceMappingURL=ranksView-Dvqyjtw4.js.map