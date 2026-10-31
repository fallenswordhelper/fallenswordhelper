import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./regExpFirstCapture-D_QeHFEY.js";
import { t as n } from "./getArrayByTagName-Dyx_AQto.js";
import { t as r } from "./sendEvent-yx1DwCDA.js";
import { t as i } from "./createDiv-XU2XBEIv.js";
import { t as a } from "./insertElement-6ZBKaryO.js";
import { t as o } from "./setInnerHtml-f0MFRJnQ.js";
import { t as s } from "./_dataAccess-BLVLQyDJ.js";
import { t as c } from "./indexAjaxDoc-WR96kHce.js";
import { t as l } from "./infoBox-QJxiDGQb.js";
import { t as u } from "./profile-BZrU9oa_.js";
import { t as d } from "./onclick-nv-Fl1th.js";
import { t as f } from "./createButton-DCXb__Na.js";
import { t as p } from "./insertTextBeforeEnd-RtQnGU19.js";
// src/modules/app/profile/unequipitem.js
function m(e) {
	return u({
		subcmd: "unequipitem",
		inventory_id: e
	});
}
// src/modules/_dataAccess/daUnequipItem.js
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
// src/modules/profile/ifSelf/nekidBtn.js
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
export { C as default };

//# sourceMappingURL=nekidBtn-DDs-asDR.js.map