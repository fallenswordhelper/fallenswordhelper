import { t as e } from "./getElementById-PlRCtyBA.js";
import { t } from "./regExpFirstCapture-CdTmAP5x.js";
import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import "./constants-C54mky4_.js";
import { t as n } from "./getArrayByTagName-L2qWyNZV.js";
import { t as r } from "./sendEvent-bwvhd4A-.js";
import { t as i } from "./createDiv-Bb3O54wx.js";
import { t as a } from "./insertElement-DtUB7uKq.js";
import { t as o } from "./setInnerHtml-ClDKp0Zh.js";
import { t as s } from "./_dataAccess-tuhLVrPW.js";
import "./indexAjax-BXHvJ2Y7.js";
import "./indexAjaxData-CqOTihOX.js";
import { t as c } from "./indexAjaxDoc-DHqD1q8U.js";
import { t as l } from "./infoBox-BqL_tRSH.js";
import { t as u } from "./profile-DwNdicRm.js";
import { t as d } from "./onclick-9iRduoOH.js";
import { t as f } from "./createButton-B2HXwHjh.js";
import { t as p } from "./insertTextBeforeEnd-DHBcAPdo.js";
//#region src/modules/app/profile/unequipitem.js
function m(e) {
	return u({
		subcmd: "unequipitem",
		inventory_id: e
	});
}
//#endregion
//#region src/modules/_dataAccess/daUnequipItem.js
function h(e) {
	let t = l(e);
	return t ? {
		e: { message: t },
		s: !1
	} : { s: !0 };
}
async function g(e) {
	let t = await c({
		cmd: "profile",
		subcmd: "unequipitem",
		inventory_id: e
	});
	return t ? h(t) : { s: !1 };
}
function _(e) {
	return s(m, g, e);
}
//#endregion
//#region src/modules/profile/ifSelf/nekidBtn.js
var v = 0;
function y(e, t) {
	t?.s && o("", e.parentNode);
}
async function b(e) {
	let n = t(/inventory_id=(?<id>\d+)/, e.href);
	n && y(e, await _(n));
}
function x() {
	r("profile", "nekidBtn");
	let e = v.nextElementSibling;
	n("a", e).forEach(b);
}
function S() {
	let e = i({ className: "fshCenter" }), t = f({
		className: "fshBl fshBls",
		textContent: "Nekid"
	});
	return p(e, "[ "), a(e, t), p(e, " ]"), d(t, x), e;
}
function C() {
	if (v = e("profileCombatSetDiv"), !v) return;
	let t = v.parentNode.nextElementSibling;
	if (!t) return;
	let n = S();
	e("profileRightColumn").replaceChild(n, t);
}
//#endregion
export { C as default };

//# sourceMappingURL=nekidBtn-DShsZAVm.js.map