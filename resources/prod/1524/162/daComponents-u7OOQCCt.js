import { $ as e } from "./constants-C54mky4_.js";
import { t } from "./retryAjax-p9geDMSY.js";
import { t as n } from "./_dataAccess-tuhLVrPW.js";
import { t as r } from "./createDocument-95hjGOI1.js";
import { t as i } from "./indexAjaxDoc-DHqD1q8U.js";
import { t as a } from "./profile-DwNdicRm.js";
import { t as o } from "./querySelectorAll-6sjy8RXa.js";
import { t as s } from "./querySelectorArray-BZbNvND7.js";
import { t as c } from "./regExpGroups-TjYD4DOT.js";
import { t as l } from "./all-Dy4LjBGw.js";
import { t as u } from "./sum-Ccwd7DeS.js";
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

//# sourceMappingURL=daComponents-u7OOQCCt.js.map