import { t as e } from "./indexAjaxDoc-MnAqiGyz.js";
import { t } from "./retryAjax-Cx5Fvrfg.js";
import { t as n } from "./all-D5SlTl7_.js";
import { t as r } from "./querySelectorAll-D_a7rcw0.js";
import { t as i } from "./querySelectorArray-C70U47NF.js";
import { t as a } from "./regExpGroups-DJF-Cl1w.js";
import { t as o } from "./sum-D2GDuxYE.js";
import { $ as s } from "./constants-CenxlFMY.js";
import { t as c } from "./createDocument-B1aK9_TZ.js";
// src/modules/_dataAccess/fallbacks/profileComponents.js
function l(e) {
	let { itemId: t, invId: n, vcode: r } = a(s, e.children[0].dataset.tipped);
	return {
		a: Number(n),
		b: Number(t),
		v: r
	};
}
var u = async (e) => c(await t(e.href)), d = (e) => i("a[href*=\"=destroycomponent&\"]", e).map(l), f = (e) => r("td[background*=\"/1x1mini.\"]", e).length;
function p(e) {
	return i("a[href*=\"profile&component_page=\"]", e).slice(1).map(u);
}
function m(e) {
	return { p: [{
		k: 56,
		v: e.map(f).reduce(o, 0)
	}] };
}
var h = (e) => ({
	h: m(e),
	r: e.flatMap(d),
	s: !0
});
async function g() {
	let t = await e({ cmd: "profile" });
	return h(await n([t, ...p(t)]));
}
export { g as t };

//# sourceMappingURL=profileComponents-CBOIDqRY.js.map