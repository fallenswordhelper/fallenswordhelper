import { t as e } from "./indexAjaxDoc-MnAqiGyz.js";
import { t } from "./getArrayByClassName-RPqCUmVz.js";
import { t as n } from "./getTextTrim-CvXe85fp.js";
import { t as r } from "./querySelectorAll-D_a7rcw0.js";
import { t as i } from "./regExpGroups-DJF-Cl1w.js";
import { Q as a } from "./constants-CenxlFMY.js";
// src/modules/_dataAccess/fallbacks/composingView.js
function o(e) {
	let { h: t, m: n, s: r } = i(a, e);
	return { time_remaining: Number(t) * 60 * 60 + Number(n) * 60 + Number(r) };
}
function s(e) {
	if (!e) return { s: !1 };
	let i = t("composing-potion", e).length, a = r("[id|=\"composing-template\"]:not(#composing-template-multi)", e).length;
	if (i + a === 0) return { s: !1 };
	let s = t("composing-potion-time", e).map(n).filter((e) => e.endsWith("s")).map(o);
	return {
		r: {
			max_potions: i + a,
			potions: s
		},
		s: !0
	};
}
async function c() {
	return s(await e({ cmd: "composing" }));
}
export { c as t };

//# sourceMappingURL=composingView-CdryNQJE.js.map