import { t as e } from "./indexAjaxDoc-MnAqiGyz.js";
import { t } from "./profile-By-S2hRI.js";
import { t as n } from "./infoBox-QJxiDGQb.js";
import { t as r } from "./_dataAccess-BLVLQyDJ.js";
import { t as i } from "./sendEvent-Co2_qySS.js";
import { t as a } from "./createButton-xxO4WpnK.js";
import { t as o } from "./createDiv-B84RqGfo.js";
import { t as s } from "./getArrayByTagName-Dyx_AQto.js";
import { t as c } from "./getElementById-C08-3H-C.js";
import { t as l } from "./insertElement-6ZBKaryO.js";
import { t as u } from "./insertTextBeforeEnd-RtQnGU19.js";
import { t as d } from "./onclick-nv-Fl1th.js";
import { t as f } from "./regExpFirstCapture-D_QeHFEY.js";
import { t as p } from "./setInnerHtml-f0MFRJnQ.js";
// src/modules/app/profile/unequipitem.js
function m(e) {
	return t({
		subcmd: "unequipitem",
		inventory_id: e
	});
}
// src/modules/_dataAccess/daUnequipItem.js
function h(e) {
	let t = n(e);
	return t ? {
		e: { message: t },
		s: !1
	} : { s: !0 };
}
async function g(t) {
	let n = await e({
		cmd: "profile",
		subcmd: "unequipitem",
		inventory_id: t
	});
	return n ? h(n) : { s: !1 };
}
function _(e) {
	return r(m, g, e);
}
// src/modules/profile/ifSelf/nekidBtn.js
var v = 0;
function y(e, t) {
	t?.s && p("", e.parentNode);
}
async function b(e) {
	let t = f(/inventory_id=(?<id>\d+)/, e.href);
	t && y(e, await _(t));
}
function x() {
	i("profile", "nekidBtn");
	let e = v.nextElementSibling;
	s("a", e).forEach(b);
}
function S() {
	let e = o({ className: "fshCenter" }), t = a({
		className: "fshBl fshBls",
		textContent: "Nekid"
	});
	return u(e, "[ "), l(e, t), u(e, " ]"), d(t, x), e;
}
function C() {
	if (v = c("profileCombatSetDiv"), !v) return;
	let e = v.parentNode.nextElementSibling;
	if (!e) return;
	let t = S();
	c("profileRightColumn").replaceChild(t, e);
}
export { C as default };

//# sourceMappingURL=nekidBtn-DMNkLGqq.js.map