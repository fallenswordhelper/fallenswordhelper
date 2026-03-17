import "./sendException-s1csWDQs.js";
import { t as e } from "./getElementById-PlRCtyBA.js";
import { t } from "./getText-rCJDurvG.js";
import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import "./constants-C54mky4_.js";
import "./getValue-CCThXEzy.js";
import { t as n } from "./isFunction-brgHXDf3.js";
import { t as r } from "./querySelector-qkBBhiGH.js";
import { t as i } from "./task-jKbgFyYT.js";
import { t as a } from "./partial-goh6HOls.js";
import { t as o } from "./sendEvent-bwvhd4A-.js";
import { t as s } from "./createDiv-Bb3O54wx.js";
import { t as c } from "./insertElement-DtUB7uKq.js";
import { t as l } from "./setInnerHtml-ClDKp0Zh.js";
import "./indexAjax-BXHvJ2Y7.js";
import "./indexAjaxData-CqOTihOX.js";
import "./indexAjaxDoc-DHqD1q8U.js";
import { t as u } from "./onclick-9iRduoOH.js";
import { t as d } from "./querySelectorArray-BZbNvND7.js";
import "./indexAjaxJson-DuDMsKRC.js";
import { t as f } from "./awaitWidget-BtuGYtrd.js";
import { t as p } from "./hasClass-OkTHxcQE.js";
import { t as m } from "./setText-C9n73usW.js";
import "./daUseItem-DT7YEAiv.js";
import { r as h, t as g } from "./useItem-48ZSMXui.js";
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

//# sourceMappingURL=fastWear-DwYuItuT.js.map