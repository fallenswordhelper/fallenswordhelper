import { t as e } from "./getElementById-C08-3H-C.js";
import { G as t, h as n } from "./constants-CenxlFMY.js";
import { t as r } from "./getValue-Aap0zlcO.js";
import { t as i } from "./setValue-B2O8DHLF.js";
import { t as a } from "./jsonParse-CTM1cd4F.js";
import { t as o } from "./partial-Bo20zBni.js";
import { t as s } from "./layout-B2Q1UoM2.js";
import { t as c } from "./sendEvent-DkxfZozg.js";
import { t as l } from "./createDiv-XU2XBEIv.js";
import { t as u } from "./getArrayByClassName-RPqCUmVz.js";
import { t as d } from "./insertElement-6ZBKaryO.js";
import { t as f } from "./navigateTo-CS33u2a7.js";
import { t as p } from "./clickThis-UHuK6eKQ.js";
import { t as m } from "./onclick-nv-Fl1th.js";
import { t as h } from "./fromEntries-BytjDDMx.js";
import { t as g } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as _ } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as v } from "./hasClass-B8BlPKl4.js";
import { t as y } from "./daLoadInventory-Cd8q-qGB.js";
import { t as b } from "./indexAjaxPost-8jJQKK1H.js";
import { t as x } from "./flattenItems-CdGE-Amk.js";
import { r as S } from "./simpleCheckbox-DUFnKFg1.js";
// src/modules/ajax/doBreakdown.js
async function C(e) {
	let t = await b({
		data: {
			cmd: "composing",
			subcmd: "dobreakdown",
			item_list: e
		},
		dataType: "text"
	});
	return a(t) ?? {
		error: 1,
		msg: "Server Error"
	};
}
// src/modules/common/perfFilter.js
var w = 0, T = 0;
function E(e) {
	let t = e.id.replace(`${T}-item-`, "");
	w[t] && p(e);
}
function D(t) {
	c("perfFilter", t), u("selectable-item", e(`${T}-items`)).forEach(E);
}
function O(e) {
	let t = l({ className: "fshAC" });
	_(t, "<button class=\"fshBl\">Perfect</button>"), d(s(), t), m(t, o(D, e));
}
async function k(e) {
	if (g()) return;
	T = e;
	let t = await y();
	t?.s && (w = h(x(t.r).filter(({ cf: e }) => e === 0).map(({ a: e }) => [e, 1])), O(e));
}
// src/modules/composing/breakdown/breakdown.js
var A = "disableBreakdownPrompts", j = 0, M = [];
function N(e) {
	e.hide();
}
function P(e, t) {
	e.animate({ height: 0 }, 500, t);
}
function F() {
	let e = $("#composingMessageContainer");
	e.animate({ opacity: 0 }, 500, o(P, e, o(N, e)));
}
function I(e, t) {
	return $("<div/>", { id: "composingMessageText" }).css({
		width: "90%",
		"text-align": "center",
		"background-color": t,
		color: "rgb(255, 255, 255)",
		margin: "5px auto 5px auto",
		padding: "2px"
	}).html(e);
}
function L(e, t) {
	$("#composingMessageContainer").remove(), $("#composingMessage").append($("<div/>", {
		id: "composingMessageContainer",
		width: "100%"
	}).append(I(e, t))), setTimeout(F, 5e3);
}
function R(e) {
	e.error === 0 ? f(`${n + t}breakdown&m=1`) : L(`Error: ${e.msg}`, "rgb(164, 28, 28)");
}
async function z() {
	R(await C(M));
}
function B(e) {
	e.stopPropagation(), c("breakdown", "validBreakEvent"), M.length === 0 ? L("Error: No items selected.", "rgb(164, 28, 28)") : z();
}
function V(e) {
	j && e.target.id === "breakdown-selected-items" && B(e);
}
function H(e) {
	if (!v("selectable-item", e.target)) return;
	c("breakdown", "itemClick");
	let t = e.target.id.replace("composing-item-", ""), n = M.indexOf(t);
	n === -1 ? M.push(t) : M.splice(n, 1);
}
function U() {
	c("breakdown", "togglePref"), j = !j, i(A, j);
}
function W() {
	_(s(), `<table class="fshTblCenter"><tbody>${S(A)}</tbody></table>`);
}
function G(t) {
	m(t.parentNode, V, !0), m(e("composing-items"), H), m(e(A), U);
}
function K() {
	if (g()) return;
	let t = e("breakdown-selected-items");
	t && (k("composing"), j = r(A), W(), G(t));
}
export { K as default };

//# sourceMappingURL=breakdown-zDpLjWJH.js.map