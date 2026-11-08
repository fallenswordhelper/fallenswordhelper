import { t as e } from "./indexAjaxDoc-MnAqiGyz.js";
import { t } from "./getApp-xCmcyAG-.js";
import { t as n } from "./getArrayByClassName-RPqCUmVz.js";
import { t as r } from "./getTextTrim-CvXe85fp.js";
import { t as i } from "./regExpGroups-DJF-Cl1w.js";
import { Q as a } from "./constants-CenxlFMY.js";
import { t as o } from "./_dataAccess-BLVLQyDJ.js";
// src/modules/app/composing/composing.js
function s(e) {
	return t({
		cmd: "composing",
		...e
	});
}
// src/modules/app/composing/view.js
function c() {
	return s({ subcmd: "view" });
}
// src/modules/_dataAccess/daComposing.js
function l(e) {
	let { h: t, m: n, s: r } = i(a, e);
	return { time_remaining: Number(t) * 60 * 60 + Number(n) * 60 + Number(r) };
}
function u(e) {
	if (!e) return { s: !1 };
	let t = n("composing-potion", e);
	return t.length === 0 ? { s: !1 } : {
		r: {
			max_potions: t.length,
			potions: n("composing-potion-time", e).map(r).filter((e) => e.endsWith("s")).map(l)
		},
		s: !0
	};
}
async function d() {
	return u(await e({ cmd: "composing" }));
}
function f() {
	return o(c, d);
}
export { s as n, f as t };

//# sourceMappingURL=daComposing-RMx9jvft.js.map