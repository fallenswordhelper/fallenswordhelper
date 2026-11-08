import { t as e } from "./indexAjaxDoc-MnAqiGyz.js";
import { t } from "./retryAjax-Cx5Fvrfg.js";
import { t as n } from "./profile-By-S2hRI.js";
import { t as r } from "./all-D5SlTl7_.js";
import { t as i } from "./querySelectorAll-D_a7rcw0.js";
import { t as a } from "./querySelectorArray-C70U47NF.js";
import { t as o } from "./regExpGroups-DJF-Cl1w.js";
import { t as s } from "./sum-D2GDuxYE.js";
import { $ as c } from "./constants-CenxlFMY.js";
import { t as l } from "./createDocument-B1aK9_TZ.js";
import { t as u } from "./_dataAccess-BLVLQyDJ.js";
// src/modules/app/profile/loadcomponents.js
function d() {
	return n({ subcmd: "loadcomponents" });
}
// src/modules/_dataAccess/daComponents.js
function f(e) {
	let { itemId: t, invId: n, vcode: r } = o(c, e.children[0].dataset.tipped);
	return {
		a: Number(n),
		b: Number(t),
		v: r
	};
}
var p = async (e) => l(await t(e.href)), m = (e) => a("a[href*=\"=destroycomponent&\"]", e).map(f), h = (e) => i("td[background*=\"/1x1mini.\"]", e).length;
function g(e) {
	return a("a[href*=\"profile&component_page=\"]", e).slice(1).map(p);
}
function _(e) {
	return { p: [{
		k: 56,
		v: e.map(h).reduce(s, 0)
	}] };
}
var v = (e) => ({
	h: _(e),
	r: e.flatMap(m),
	s: !0
});
async function y() {
	let t = await e({ cmd: "profile" });
	return v(await r([t, ...g(t)]));
}
function b() {
	return u(d, y);
}
export { b as t };

//# sourceMappingURL=daComponents-Bhc6hphf.js.map