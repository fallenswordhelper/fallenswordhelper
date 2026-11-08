import { t as e } from "./guildManage-Sw9nWSjc.js";
import { t } from "./closestTr-BGwSv-6S.js";
import { t as n } from "./currentGuildId-Bpd4l1O8.js";
import { t as r } from "./getTextTrim-CvXe85fp.js";
import { t as i } from "./lastActivity-CKrnHdgN.js";
import { t as a } from "./partial-Bo20zBni.js";
import { t as o } from "./playerIdFromAnchor-CzsUTVHu.js";
import { t as s } from "./querySelectorArray-C70U47NF.js";
import { t as c } from "./regExpFirstCapture-D_QeHFEY.js";
import { t as l } from "./regExpGroups-DJF-Cl1w.js";
import { t as u } from "./uniq-DgWt7KlP.js";
import { It as d, Mt as f, St as p } from "./constants-CenxlFMY.js";
import { t as m } from "./createDocument-B1aK9_TZ.js";
// src/modules/_dataAccess/fallbacks/ranksView.js
var h = (e) => Number(r(t(e)?.cells[4])?.replaceAll(",", "")), g = (e) => r(t(e)?.cells[3]), _ = (e) => Number(c(d, e));
function v(e) {
	return {
		guild_xp: h(e),
		id: o(e),
		name: r(e),
		rank: g(e)
	};
}
function y(e) {
	let { stam: t, max: n } = l(f, e);
	return {
		current_stamina: Number(t),
		last_activity: i(e).timestamp,
		level: Number(c(/Level:.+?(?<l>\d+)/, e)),
		max_stamina: Number(n),
		vl: _(e)
	};
}
function b(e) {
	return {
		guild_id: n(),
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
	let t = await e(), n = m(t).getElementById("pCC");
	if (!n) return {
		e: {
			code: 0,
			message: "Failure"
		},
		s: !1
	};
	let r = s(p, n).map(b);
	return {
		r: u(r, "rank").map(a(x, r)),
		s: !0
	};
}
export { S as t };

//# sourceMappingURL=ranksView-BNKqelVA.js.map