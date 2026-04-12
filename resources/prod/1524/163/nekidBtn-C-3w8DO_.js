import { t as e } from "./getElementById-DgC-_E5u.js";
import { t } from "./regExpFirstCapture-Bi32xMqS.js";
import { t as n } from "./getArrayByTagName-QRr9ypcm.js";
import { t as r } from "./sendEvent-DFQy5lFi.js";
import { t as i } from "./createDiv-CH3rNL4c.js";
import { t as a } from "./insertElement-C_6uFPNr.js";
import { t as o } from "./setInnerHtml-Dh9y9Se-.js";
import { t as s } from "./_dataAccess-Cm9xXxBc.js";
import { t as c } from "./indexAjaxDoc-BNgfSQTJ.js";
import { t as l } from "./infoBox-CqlNbC9M.js";
import { t as u } from "./profile-DolCHxvz.js";
import { t as d } from "./onclick-8ZwMJyqI.js";
import { t as f } from "./createButton-YvU0Rx_S.js";
import { t as p } from "./insertTextBeforeEnd-CKzAXeJc.js";
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

//# sourceMappingURL=nekidBtn-C-3w8DO_.js.map