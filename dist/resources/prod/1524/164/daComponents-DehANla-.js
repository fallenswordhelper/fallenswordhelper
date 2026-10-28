import { $ as e } from "./constants-CenxlFMY.js";
import { t } from "./retryAjax-Cx5Fvrfg.js";
import { t as n } from "./_dataAccess-BLVLQyDJ.js";
import { t as r } from "./createDocument-B1aK9_TZ.js";
import { t as i } from "./indexAjaxDoc-WR96kHce.js";
import { t as a } from "./profile-BZrU9oa_.js";
import { t as o } from "./querySelectorAll-D_a7rcw0.js";
import { t as s } from "./querySelectorArray-C70U47NF.js";
import { t as c } from "./regExpGroups-DJF-Cl1w.js";
import { t as l } from "./all-D5SlTl7_.js";
import { t as u } from "./sum-D2GDuxYE.js";
// src/modules/app/profile/loadcomponents.js
function d() {
	return a({ subcmd: "loadcomponents" });
}
// src/modules/_dataAccess/daComponents.js
function f(t) {
	let { itemId: n, invId: r, vcode: i } = c(e, t.children[0].dataset.tipped);
	return {
		a: Number(r),
		b: Number(n),
		v: i
	};
}
var p = async (e) => r(await t(e.href)), m = (e) => s("a[href*=\"=destroycomponent&\"]", e).map(f), h = (e) => o("td[background*=\"/1x1mini.\"]", e).length;
function g(e) {
	return s("a[href*=\"profile&component_page=\"]", e).slice(1).map(p);
}
function _(e) {
	return { p: [{
		k: 56,
		v: e.map(h).reduce(u, 0)
	}] };
}
var v = (e) => ({
	h: _(e),
	r: e.flatMap(m),
	s: !0
});
async function y() {
	let e = await i({ cmd: "profile" });
	return v(await l([e, ...g(e)]));
}
function b() {
	return n(d, y);
}
export { b as t };

//# sourceMappingURL=daComponents-DehANla-.js.map