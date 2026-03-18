import { t as e } from "./getElementById-PlRCtyBA.js";
import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import { G as t, h as n } from "./constants-C54mky4_.js";
import { t as r } from "./getValue-CCThXEzy.js";
import { t as i } from "./setValue-Cb0PYC7t.js";
import { t as a } from "./jsonParse-CHQNrrub.js";
import { t as o } from "./partial-goh6HOls.js";
import { t as s } from "./layout-Bapa39KM.js";
import { t as c } from "./sendEvent-bwvhd4A-.js";
import { t as l } from "./createDiv-Bb3O54wx.js";
import { t as u } from "./getArrayByClassName-BzDfah40.js";
import { t as d } from "./insertElement-DtUB7uKq.js";
import "./indexAjax-BXHvJ2Y7.js";
import { t as f } from "./navigateTo-CDpyk-TN.js";
import { t as p } from "./clickThis-CZdkFZtj.js";
import { t as m } from "./onclick-9iRduoOH.js";
import "./indexAjaxJson-DuDMsKRC.js";
import { t as h } from "./fromEntries-Bc4U4usg.js";
import { t as g } from "./jQueryNotPresent-oTtW_9Ua.js";
import { t as _ } from "./insertHtmlBeforeEnd-CRJWaYJw.js";
import { t as v } from "./hasClass-OkTHxcQE.js";
import "./backpackOk-D61pwOdg.js";
import { t as y } from "./daLoadInventory-CNPYoxt-.js";
import { t as b } from "./indexAjaxPost-EsQkTWl0.js";
import { t as x } from "./flattenItems-CQAcRQtd.js";
import { r as S } from "./simpleCheckbox-D5o0QaTA.js";
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

//# sourceMappingURL=breakdown-S_iv1k29.js.map