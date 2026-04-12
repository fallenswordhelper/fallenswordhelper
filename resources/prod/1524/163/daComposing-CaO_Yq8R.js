import { Q as e } from "./constants-CIKidKvt.js";
import { t } from "./getTextTrim-hYBF-bdh.js";
import { t as n } from "./getArrayByClassName-9tzft1UU.js";
import { t as r } from "./getApp-CqGRjnvO.js";
import { t as i } from "./_dataAccess-Cm9xXxBc.js";
import { t as a } from "./indexAjaxDoc-BNgfSQTJ.js";
import { t as o } from "./regExpGroups-BIQtVEST.js";
//#region src/modules/app/composing/composing.js
function s(e) {
	return r({
		cmd: "composing",
		...e
	});
}
//#endregion
//#region src/modules/app/composing/view.js
function c() {
	return s({ subcmd: "view" });
}
//#endregion
//#region src/modules/_dataAccess/daComposing.js
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
//#endregion
export { s as n, f as t };

//# sourceMappingURL=daComposing-CaO_Yq8R.js.map