import { t as e } from "./awaitWidget-EMmYC_aH.js";
import { t } from "./getElementById-C08-3H-C.js";
import { t as n } from "./getText-BqjgTHLv.js";
import { t as r } from "./onclick-nv-Fl1th.js";
import { t as i } from "./partial-Bo20zBni.js";
import { t as a } from "./task-C5UKL2RH.js";
import { r as o, t as s } from "./useItem-Wcp_ihj0.js";
import { t as c } from "./sendEvent-Co2_qySS.js";
import { t as l } from "./hasClass-B8BlPKl4.js";
import { t as u } from "./setInnerHtml-f0MFRJnQ.js";
import { t as d } from "./setText-CVjyFkRt.js";
import { t as f } from "./createDiv-B84RqGfo.js";
import { t as p } from "./insertElement-6ZBKaryO.js";
import { t as m } from "./insertElementBefore-CaihVZse.js";
import { t as h } from "./querySelector-C6ReNysW.js";
import { t as g } from "./querySelectorArray-C70U47NF.js";
import { t as _ } from "./isFunction-BydUD9aW.js";
// src/modules/profile/backpack/fastEvent.js
function v(e, t) {
	let n = e.srcData.findIndex((e) => String(e.a) === t);
	n !== -1 && e.srcData.splice(n, 1);
}
function y(e, t) {
	let n = t.closest(".backpackSlot");
	if (!n) return;
	n.classList.add("fastDone"), n.querySelector(".backpackCheckbox")?.remove();
	let r = n.querySelector(".backpack-selected");
	r && (r.classList.remove("backpack-selected"), --e.selectedCount, e._updateMultiOptions());
}
function b([e, t, n, r, i]) {
	i.r === 0 ? (v(e, r), y(e, n), n.classList.remove("fshSpinner"), u(`<span class="fastWorn">${t}</span>`, n.parentNode)) : n.remove();
}
async function x(e, t, n, r) {
	c("profile", `fastAction - ${r}`);
	let { target: i } = t, a = i.parentNode.parentNode.children[0].dataset.inv;
	d("", i), i.blur(), i.className = "fastAction fshBl fshSpinner fshSpinner12";
	let o = await n(a);
	o && b([
		e,
		r,
		i,
		a,
		o
	]);
}
function S(e, t) {
	l("fastWear", t.target) && x(e, t, o, "Worn"), l("fastUse", t.target) && x(e, t, s, "Used");
}
// src/modules/profile/backpack/fastWearLinks.js
function C(e) {
	return e ? "fastUse" : "fastWear";
}
function w(e) {
	return e ? "Use" : "Wear";
}
function T(e, t) {
	let n = l("backpackContextMenuUsable", t), r = f({
		className: "fastDiv",
		innerHTML: `<button class="fshBl fastAction ${C(n)}">${w(n)}</button>`
	}), i = t.closest("div"), a = h(".backpackCheckbox", i);
	e.options.checkboxesEnabled && a ? m(r, a) : p(i, r);
}
function E(e) {
	g(`#backpackTab_${e.type.toString()} .backpackContextMenuEquippable, #backpackTab_${e.type.toString()} .backpackContextMenuUsable`).forEach(i(T, e));
}
// src/modules/profile/backpack/monkeyBp.js
var D = [], O = 0;
function k(e) {
	D.length > 0 && D.forEach((t) => t(e));
}
function A(e) {
	let t = e._showPage;
	e._showPage = function(n, r) {
		e.tabData && (t.call(e, n, r), k(e));
	}, O = !0;
}
function j(e, t) {
	D.includes(t) || (O || A(e), _(t) && D.push(t));
}
// src/modules/profile/backpack/restyleBackpack.js
function M() {
	let e = t("backpack");
	e && (e.classList.add("fshBackpack"), e.removeAttribute("style"));
}
// src/modules/profile/backpack/fastWear.js
function N(e) {
	M(), j(e, E), n(t("backpack_current")).length !== 0 && a(3, E, [e]), r(t("backpackContainer"), i(S, e));
}
async function P() {
	let n = await e(t("backpackContainer"), "Backpack", "hcs");
	n && N(n);
}
export { P as default };

//# sourceMappingURL=fastWear-B7uAWRCr.js.map