import { $ as e } from "./constants-CIKidKvt.js";
import { t } from "./retryAjax-oA4ZKObL.js";
import { t as n } from "./_dataAccess-Cm9xXxBc.js";
import { t as r } from "./createDocument-CAZCPKmJ.js";
import { t as i } from "./indexAjaxDoc-BNgfSQTJ.js";
import { t as a } from "./profile-DolCHxvz.js";
import { t as o } from "./querySelectorAll-Bwhb2XCF.js";
import { t as s } from "./querySelectorArray-Bdj4peIm.js";
import { t as c } from "./regExpGroups-BIQtVEST.js";
import { t as l } from "./all-Csir9X7x.js";
import { t as u } from "./sum-C7p962tc.js";
//#region src/modules/app/profile/loadcomponents.js
function d() {
	return a({ subcmd: "loadcomponents" });
}
//#endregion
//#region src/modules/_dataAccess/daComponents.js
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
//#endregion
export { b as t };

//# sourceMappingURL=daComponents-DVZiAtQ6.js.map