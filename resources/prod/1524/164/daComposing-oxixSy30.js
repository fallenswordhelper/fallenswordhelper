import { Q as e } from "./constants-CenxlFMY.js";
import { t } from "./getTextTrim-CvXe85fp.js";
import { t as n } from "./getArrayByClassName-RPqCUmVz.js";
import { t as r } from "./getApp-ClZXM9Yf.js";
import { t as i } from "./_dataAccess-BLVLQyDJ.js";
import { t as a } from "./indexAjaxDoc-WR96kHce.js";
import { t as o } from "./regExpGroups-DJF-Cl1w.js";
// src/modules/app/composing/composing.js
function s(e) {
	return r({
		cmd: "composing",
		...e
	});
}
// src/modules/app/composing/view.js
function c() {
	return s({ subcmd: "view" });
}
// src/modules/_dataAccess/daComposing.js
function l(t) {
	let { h: n, m: r, s: i } = o(e, t);
	return { time_remaining: Number(n) * 60 * 60 + Number(r) * 60 + Number(i) };
}
function u(e) {
	if (!e) return { s: !1 };
	let r = n("composing-potion", e);
	return r.length === 0 ? { s: !1 } : {
		r: {
			max_potions: r.length,
			potions: n("composing-potion-time", e).map(t).filter((e) => e.endsWith("s")).map(l)
		},
		s: !0
	};
}
async function d() {
	return u(await a({ cmd: "composing" }));
}
function f() {
	return i(c, d);
}
export { s as n, f as t };

//# sourceMappingURL=daComposing-oxixSy30.js.map