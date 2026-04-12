import { t as e } from "./getElementById-DgC-_E5u.js";
import { G as t, h as n } from "./constants-CIKidKvt.js";
import { t as r } from "./getValue-j5JjE6f3.js";
import { t as i } from "./setValue-31jE_mRr.js";
import { t as a } from "./jsonParse-C99pLn1W.js";
import { t as o } from "./partial-CYzPXpZP.js";
import { t as s } from "./layout-6CPY-bfq.js";
import { t as c } from "./sendEvent-DFQy5lFi.js";
import { t as l } from "./createDiv-CH3rNL4c.js";
import { t as u } from "./getArrayByClassName-9tzft1UU.js";
import { t as d } from "./insertElement-C_6uFPNr.js";
import { t as f } from "./navigateTo-DSpjkQ0R.js";
import { t as p } from "./clickThis-5GuZiKOQ.js";
import { t as m } from "./onclick-8ZwMJyqI.js";
import { t as h } from "./fromEntries-CXGCeH0k.js";
import { t as g } from "./jQueryNotPresent-UT8-ZycH.js";
import { t as _ } from "./insertHtmlBeforeEnd-D5-rjWCh.js";
import { t as v } from "./hasClass-B5HBqSaS.js";
import { t as y } from "./daLoadInventory-D2duLSdE.js";
import { t as b } from "./indexAjaxPost-D1W2Usam.js";
import { t as x } from "./flattenItems-D6g9OapM.js";
import { r as S } from "./simpleCheckbox-BrfzFmVJ.js";
//#region src/modules/ajax/doBreakdown.js
async function C(e) {
	return a(await b({
		data: {
			cmd: "composing",
			subcmd: "dobreakdown",
			item_list: e
		},
		dataType: "text"
	})) ?? {
		error: 1,
		msg: "Server Error"
	};
}
//#endregion
//#region src/modules/common/perfFilter.js
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
//#endregion
//#region src/modules/composing/breakdown/breakdown.js
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
	if (e.stopPropagation(), c("breakdown", "validBreakEvent"), M.length === 0) {
		L("Error: No items selected.", "rgb(164, 28, 28)");
		return;
	}
	z();
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
//#endregion
export { K as default };

//# sourceMappingURL=breakdown-DCsbb0Ht.js.map