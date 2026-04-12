import { t as e } from "./getElementById-DgC-_E5u.js";
import { t } from "./getText-BybFkJV6.js";
import { t as n } from "./isFunction-CWoZbFiZ.js";
import { t as r } from "./querySelector-8FH1hhUv.js";
import { t as i } from "./task-DenRcgws.js";
import { t as a } from "./partial-CYzPXpZP.js";
import { t as o } from "./sendEvent-DFQy5lFi.js";
import { t as s } from "./createDiv-CH3rNL4c.js";
import { t as c } from "./insertElement-C_6uFPNr.js";
import { t as l } from "./setInnerHtml-Dh9y9Se-.js";
import { t as u } from "./onclick-8ZwMJyqI.js";
import { t as d } from "./querySelectorArray-Bdj4peIm.js";
import { t as f } from "./awaitWidget-DzLMG47A.js";
import { t as p } from "./hasClass-B5HBqSaS.js";
import { t as m } from "./setText-Ckr3aw9W.js";
import { r as h, t as g } from "./useItem-Bdgw70D6.js";
//#region src/modules/profile/backpack/fastEvent.js
function _(e, t) {
	let n = e.srcData.findIndex((e) => e.a === t);
	n !== -1 && e.srcData.splice(n, 1);
}
function v([e, t, n, r, i]) {
	if (i.r !== 0) {
		n.remove();
		return;
	}
	_(e, r), n.classList.remove("fshSpinner"), l(`<span class="fastWorn">${t}</span>`, n.parentNode);
}
async function y(e, t, n, r) {
	o("profile", `fastAction - ${r}`);
	let { target: i } = t, a = i.parentNode.parentNode.children[0].dataset.inv;
	m("", i), i.blur(), i.className = "fastAction fshBl fshSpinner fshSpinner12";
	let s = await n(a);
	s && v([
		e,
		r,
		i,
		a,
		s
	]);
}
function b(e, t) {
	p("fastWear", t.target) && y(e, t, h, "Worn"), p("fastUse", t.target) && y(e, t, g, "Used");
}
//#endregion
//#region src/modules/profile/backpack/fastWearLinks.js
function x(e) {
	return e ? "fastUse" : "fastWear";
}
function S(e) {
	return e ? "Use" : "Wear";
}
function C(e, t) {
	let n = p("backpackContextMenuUsable", t), i = s({
		className: "fastDiv",
		innerHTML: `<button class="fshBl fastAction ${x(n)}">${S(n)}</button>`
	}), a = t.closest("div");
	e.options.checkboxesEnabled && c(i, r("input", a)), c(a, i);
}
function w(e) {
	d(`#backpackTab_${e.type.toString()} .backpackContextMenuEquippable, #backpackTab_${e.type.toString()} .backpackContextMenuUsable`).forEach(a(C, e));
}
//#endregion
//#region src/modules/profile/backpack/monkeyBp.js
var T = [], E = 0;
function D(e) {
	T.length > 0 && T.forEach((t) => t(e));
}
function O(e) {
	let t = e._showPage;
	e._showPage = function(n, r) {
		e.tabData && (t.call(e, n, r), D(e));
	}, E = !0;
}
function k(e, t) {
	T.includes(t) || (E || O(e), n(t) && T.push(t));
}
//#endregion
//#region src/modules/profile/backpack/restyleBackpack.js
function A() {
	let t = e("backpack");
	t && (t.className = "fshBackpack", t.removeAttribute("style"));
}
//#endregion
//#region src/modules/profile/backpack/fastWear.js
function j(n) {
	A(), k(n, w), t(e("backpack_current")).length !== 0 && i(3, w, [n]), u(e("backpackContainer"), a(b, n));
}
async function M() {
	let t = await f(e("backpackContainer"), "Backpack", "hcs");
	t && j(t);
}
//#endregion
export { M as default };

//# sourceMappingURL=fastWear-BLmDcqQY.js.map