import { t as e } from "./getElementById-PlRCtyBA.js";
import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import "./constants-C54mky4_.js";
import { t } from "./querySelector-qkBBhiGH.js";
import { t as n } from "./on-f-HmOL0n.js";
import { t as r } from "./calf-OM11NjAU.js";
import "./disclose-version-CVZFuhb0.js";
import "./index-client-BaeBki7R.js";
import { t as i } from "./dynamicAlert-dINSPEx3.js";
import { t as a } from "./getTextTrim-Wj82yPPN.js";
import { t as o } from "./partial-goh6HOls.js";
import { t as s } from "./layout-Bapa39KM.js";
import { t as c } from "./sendEvent-bwvhd4A-.js";
import { t as l } from "./_dataAccess-tuhLVrPW.js";
import "./indexAjax-BXHvJ2Y7.js";
import { t as u } from "./indexAjaxData-CqOTihOX.js";
import { t as d } from "./toLowerCase-uMYD5EVv.js";
import { t as f } from "./clickThis-CZdkFZtj.js";
import { t as p } from "./onclick-9iRduoOH.js";
import { t as m } from "./querySelectorArray-BZbNvND7.js";
import { t as h } from "./closest-CVR7I6wE.js";
import { t as g } from "./closestTr-C0LB9ALA.js";
import "./indexAjaxJson-DuDMsKRC.js";
import { t as _ } from "./createSpan-DpSRnwEQ.js";
import { t as v } from "./insertHtmlBeforeEnd-CRJWaYJw.js";
import { t as y } from "./classHandler-7gbey5gb.js";
import { t as b } from "./setText-C9n73usW.js";
import { t as x } from "./itemIdFromImg-C_nHsO4c.js";
import { t as S } from "./injectGuild-Cr_z6d6S.js";
import { t as ee } from "./guildInventory-BO2v5nuo.js";
import { t as C } from "./htmlResult-VSGrcENv.js";
import { t as w } from "./closestTable-Dfg3mstY.js";
import { t as T } from "./chunk-DM2KJQ4C.js";
import "./takeItem-CIVEdK3m.js";
import { t as E } from "./daGsTake-BgJXImnW.js";
import { t as D } from "./removeRow-BxRfjPCl.js";
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

//# sourceMappingURL=addRemoveTags-Bxdu_62j.js.map