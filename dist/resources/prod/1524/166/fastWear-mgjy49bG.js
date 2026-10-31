import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./getText-BqjgTHLv.js";
import { t as n } from "./isFunction-BydUD9aW.js";
import { t as r } from "./querySelector-C6ReNysW.js";
import { t as i } from "./task-97dxbWda.js";
import { t as a } from "./partial-Bo20zBni.js";
import { t as o } from "./sendEvent-yx1DwCDA.js";
import { t as s } from "./createDiv-XU2XBEIv.js";
import { t as c } from "./insertElement-6ZBKaryO.js";
import { t as l } from "./setInnerHtml-f0MFRJnQ.js";
import { t as u } from "./onclick-nv-Fl1th.js";
import { t as d } from "./querySelectorArray-C70U47NF.js";
import { t as f } from "./insertElementBefore-CaihVZse.js";
import { t as p } from "./awaitWidget-EMmYC_aH.js";
import { t as m } from "./hasClass-B8BlPKl4.js";
import { t as h } from "./setText-CVjyFkRt.js";
import { r as g, t as _ } from "./useItem-BLx5J27E.js";
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
	i.r === 0 ? (v(e, r), y(e, n), n.classList.remove("fshSpinner"), l(`<span class="fastWorn">${t}</span>`, n.parentNode)) : n.remove();
}
async function x(e, t, n, r) {
	o("profile", `fastAction - ${r}`);
	let { target: i } = t, a = i.parentNode.parentNode.children[0].dataset.inv;
	h("", i), i.blur(), i.className = "fastAction fshBl fshSpinner fshSpinner12";
	let s = await n(a);
	s && b([
		e,
		r,
		i,
		a,
		s
	]);
}
function S(e, t) {
	m("fastWear", t.target) && x(e, t, g, "Worn"), m("fastUse", t.target) && x(e, t, _, "Used");
}
// src/modules/profile/backpack/fastWearLinks.js
function C(e) {
	return e ? "fastUse" : "fastWear";
}
function w(e) {
	return e ? "Use" : "Wear";
}
function T(e, t) {
	let n = m("backpackContextMenuUsable", t), i = s({
		className: "fastDiv",
		innerHTML: `<button class="fshBl fastAction ${C(n)}">${w(n)}</button>`
	}), a = t.closest("div"), o = r(".backpackCheckbox", a);
	e.options.checkboxesEnabled && o ? f(i, o) : c(a, i);
}
function E(e) {
	d(`#backpackTab_${e.type.toString()} .backpackContextMenuEquippable, #backpackTab_${e.type.toString()} .backpackContextMenuUsable`).forEach(a(T, e));
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
	D.includes(t) || (O || A(e), n(t) && D.push(t));
}
// src/modules/profile/backpack/restyleBackpack.js
function M() {
	let t = e("backpack");
	t && (t.classList.add("fshBackpack"), t.removeAttribute("style"));
}
// src/modules/profile/backpack/fastWear.js
function N(n) {
	M(), j(n, E), t(e("backpack_current")).length !== 0 && i(3, E, [n]), u(e("backpackContainer"), a(S, n));
}
async function P() {
	let t = await p(e("backpackContainer"), "Backpack", "hcs");
	t && N(t);
}
export { P as default };

//# sourceMappingURL=fastWear-mgjy49bG.js.map