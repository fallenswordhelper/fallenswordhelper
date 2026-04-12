import { t as e } from "./getElementById-DgC-_E5u.js";
import { t } from "./querySelector-8FH1hhUv.js";
import { t as n } from "./on-afIPYx-0.js";
import { t as r } from "./calf-DxCOTxVt.js";
import { t as i } from "./dynamicAlert-DtHqMIea.js";
import { t as a } from "./getTextTrim-hYBF-bdh.js";
import { t as o } from "./partial-CYzPXpZP.js";
import { t as s } from "./layout-6CPY-bfq.js";
import { t as c } from "./sendEvent-DFQy5lFi.js";
import { t as l } from "./_dataAccess-Cm9xXxBc.js";
import { t as u } from "./indexAjaxData-yJPb4vet.js";
import { t as d } from "./toLowerCase-8GoRkIKu.js";
import { t as f } from "./clickThis-5GuZiKOQ.js";
import { t as p } from "./onclick-8ZwMJyqI.js";
import { t as m } from "./querySelectorArray-Bdj4peIm.js";
import { t as h } from "./closest-C9Rjjn17.js";
import { t as g } from "./closestTr-DTXY0qkG.js";
import { t as _ } from "./createSpan-DCxGsyWX.js";
import { t as v } from "./insertHtmlBeforeEnd-D5-rjWCh.js";
import { t as y } from "./classHandler-C-bFqTDO.js";
import { t as b } from "./setText-Ckr3aw9W.js";
import { t as x } from "./itemIdFromImg-ChyU4_Zu.js";
import { t as S } from "./injectGuild-U9e7L9DA.js";
import { t as ee } from "./guildInventory-m5r-w2nc.js";
import { t as C } from "./htmlResult-Dc_vf-tW.js";
import { t as w } from "./closestTable-B_Km1mKH.js";
import { t as T } from "./chunk-BRn3bpie.js";
import { t as E } from "./daGsTake-Bolnd4lF.js";
import { t as D } from "./removeRow-D9oDv5EC.js";
//#region src/modules/app/guild/inventory/doTags.js
function O(e, t) {
	return ee({
		subcmd2: e,
		tagIndex: t
	});
}
//#endregion
//#region src/modules/_dataAccess/daTagItems.js
async function k(e, t) {
	return C(await u({
		cmd: "guild",
		subcmd: "inventory",
		subcmd2: e,
		tagIndex: t
	}));
}
function A(e, t) {
	return l(O, k, e, t);
}
//#endregion
//#region src/modules/guild/inventory/addRemoveTags/actionType.js
function j() {
	return t("[name=\"subcmd2\"]").value;
}
//#endregion
//#region src/modules/guild/inventory/addRemoveTags/clickHandler.js
var M = (e) => t("input", g(e)), N = (e) => h("div", e).dataset.invId;
function P() {
	c("addRemoveTags", "doCheckAll"), m("#pCC input[name=\"tagIndex[]\"]").forEach(f);
}
function F(e, t) {
	c("addRemoveTags", "checkType");
	let n = N(t), [, , r, i] = e.find(([, e]) => e === n);
	e.filter(([, , e, t]) => e === r && t === i).filter(([e]) => document.body.contains(e)).map(([e]) => e).forEach(f);
}
function I(e) {
	let t = _({ className: e.className.replace("-btn", "") });
	e.replaceWith(t);
}
function L(e) {
	m("button:not(.tag-bp-btn)", e).forEach(I);
}
function R(e, t) {
	let n = _({ className: `tag-${e} fshSpinner fshSpinner12` });
	return t.replaceWith(n), L(h("div", n)), n;
}
async function z(e, t, n, r) {
	c("addRemoveTags", e);
	let i = N(r);
	M(r)?.remove();
	let a = R(e, r);
	(await t(i)).s && (a.classList.remove("fshSpinner"), b(n, a));
}
function B(e) {
	return A(j(), [e]);
}
function V(e) {
	return [
		["tag-all-custom", P],
		["tag-bp-btn", o(z, "bp", E, "Taken")],
		["tag-all-btn", o(F, e)],
		["tag-add-btn", o(z, "add", B, "Tagged")],
		["tag-remove-btn", o(z, "remove", B, "Removed")]
	];
}
function H(e) {
	p(s(), y(V(e)));
}
//#endregion
//#region src/modules/guild/inventory/addRemoveTags/interceptSubmit.js
var te = () => m("[name=\"tagIndex[]\"]:checked");
async function U(e, t) {
	let n = await A(e, t.map((e) => e.value));
	n.s ? t.forEach(D) : i(n.e.message);
}
function W(e) {
	e.preventDefault(), T(25, te()).forEach(o(U, j())), c("addRemoveTags", "Tag by AJAX");
}
function G() {
	n(document.forms[0], "submit", W);
}
//#endregion
//#region src/modules/guild/inventory/addRemoveTags/addRemoveTags.js
var K = () => r.subcmd2 === "addtags", q = (e) => x(t("img", g(e))), J = (e) => a(g(e).cells[2]), Y = (e, t) => `<button class="${e}" type="button">${t}</button>`, X = (e) => d(e).split(" ").at(-1), Z = (e) => `tag-${X(e)}-btn`, Q = (e) => `[${Y(Z(e), e)}]`, ne = (e) => e > 1 ? `${Q("Check All")}&nbsp;` : "", re = () => K() ? "Add" : "Remove", ie = () => Q(`Fast ${re()}`), ae = () => Q("Fast BP"), oe = (e, t) => `<div class="btn-div" data-inv-id="${e}">${t}</div>`, $ = (e, t) => oe(e, `&nbsp;${ne(t)}${ie()}&nbsp;${ae()}`);
function se([e, t, , , n]) {
	let r = g(e).cells[2];
	v(r, $(t, n));
}
function ce(e) {
	return [
		e,
		e.value,
		q(e),
		J(e)
	];
}
function le(e) {
	return e.map((t) => [...t, e.filter(([, , e, n]) => e === t[2] && n === t[3]).length]);
}
function ue() {
	return le(m("input[name=\"tagIndex[]\"]", s()).map(ce));
}
function de(e) {
	let t = e.parentNode;
	K() && (t = g(e).insertCell(-1)), v(t, Y("tag-all-custom custombutton", "Check&nbsp;All"));
}
function fe(e) {
	if (!K()) return;
	let t = w(e);
	t.className = "add-remove-tags";
}
function pe() {
	let t = ue();
	if (!t.length) return;
	let n = e("tagging_cost");
	fe(n), de(n), t.forEach(se), H(t), G();
}
function me() {
	e("tagging_cost") ? pe() : S();
}
//#endregion
export { me as default };

//# sourceMappingURL=addRemoveTags-hQ9ir0IW.js.map