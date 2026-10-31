import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./querySelector-C6ReNysW.js";
import { t as n } from "./on-DfyX3AS4.js";
import { t as r } from "./calf-SqS2SeU4.js";
import { t as i } from "./dynamicAlert-BnFmov1Z.js";
import { t as a } from "./getTextTrim-CvXe85fp.js";
import { t as o } from "./partial-Bo20zBni.js";
import { t as s } from "./layout-B2Q1UoM2.js";
import { t as c } from "./sendEvent-yx1DwCDA.js";
import { t as l } from "./_dataAccess-BLVLQyDJ.js";
import { t as u } from "./indexAjaxData-BcvK7Oaz.js";
import { t as d } from "./toLowerCase-Cpm0Ikhj.js";
import { t as f } from "./clickThis-UHuK6eKQ.js";
import { t as p } from "./onclick-nv-Fl1th.js";
import { t as m } from "./querySelectorArray-C70U47NF.js";
import { t as h } from "./closest-BE9LIvvz.js";
import { t as g } from "./closestTr-BGwSv-6S.js";
import { t as _ } from "./createSpan-9KJdvIXK.js";
import { t as v } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as y } from "./classHandler-DlWspvww.js";
import { t as b } from "./setText-CVjyFkRt.js";
import { t as x } from "./itemIdFromImg-O3uB0Iqa.js";
import { t as S } from "./injectGuild-LdFwEuIL.js";
import { t as ee } from "./guildInventory-DYPTwtsS.js";
import { t as C } from "./htmlResult-ChzxOgJl.js";
import { t as w } from "./closestTable-B73T3rIi.js";
import { t as T } from "./chunk-A8FcSK6x.js";
import { t as E } from "./daGsTake-BEeBRbbo.js";
// src/modules/app/guild/inventory/doTags.js
function D(e, t) {
	return ee({
		subcmd2: e,
		tagIndex: t
	});
}
// src/modules/_dataAccess/daTagItems.js
async function O(e, t) {
	let n = await u({
		cmd: "guild",
		subcmd: "inventory",
		subcmd2: e,
		tagIndex: t
	});
	return C(n);
}
function k(e, t) {
	return l(D, O, e, t);
}
// src/modules/guild/inventory/addRemoveTags/actionType.js
function A() {
	return t("[name=\"subcmd2\"]").value;
}
// src/modules/guild/inventory/addRemoveTags/clickHandler.js
var j = (e) => t("input", g(e)), M = (e) => h("div", e).dataset.invId;
function N() {
	c("addRemoveTags", "doCheckAll"), m("#pCC input[name=\"tagIndex[]\"]").forEach(f);
}
function P(e, t) {
	c("addRemoveTags", "checkType");
	let n = M(t), [, , r, i] = e.find(([, e]) => e === n);
	e.filter(([, , e, t]) => e === r && t === i).filter(([e]) => document.body.contains(e)).map(([e]) => e).forEach(f);
}
function F(e) {
	let t = _({ className: e.className.replace("-btn", "") });
	e.replaceWith(t);
}
function I(e) {
	m("button:not(.tag-bp-btn)", e).forEach(F);
}
function L(e, t) {
	let n = _({ className: `tag-${e} fshSpinner fshSpinner12` });
	return t.replaceWith(n), I(h("div", n)), n;
}
async function R(e, t, n, r) {
	c("addRemoveTags", e);
	let i = M(r);
	j(r)?.remove();
	let a = L(e, r);
	(await t(i)).s && (a.classList.remove("fshSpinner"), b(n, a));
}
function z(e) {
	return k(A(), [e]);
}
function B(e) {
	return [
		["tag-all-custom", N],
		["tag-bp-btn", o(R, "bp", E, "Taken")],
		["tag-all-btn", o(P, e)],
		["tag-add-btn", o(R, "add", z, "Tagged")],
		["tag-remove-btn", o(R, "remove", z, "Removed")]
	];
}
function V(e) {
	p(s(), y(B(e)));
}
// src/modules/guild/inventory/addRemoveTags/removeRow.js
function H(e) {
	let t = g(e);
	if (!t) return;
	let n = t.nextElementSibling;
	n && (n.remove(), t.remove());
}
// src/modules/guild/inventory/addRemoveTags/interceptSubmit.js
var te = () => m("[name=\"tagIndex[]\"]:checked");
async function U(e, t) {
	let n = await k(e, t.map((e) => e.value));
	n.s ? t.forEach(H) : i(n.e.message);
}
function W(e) {
	e.preventDefault(), T(25, te()).forEach(o(U, A())), c("addRemoveTags", "Tag by AJAX");
}
function G() {
	n(document.forms[0], "submit", W);
}
// src/modules/guild/inventory/addRemoveTags/addRemoveTags.js
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
	fe(n), de(n), t.forEach(se), V(t), G();
}
function me() {
	e("tagging_cost") ? pe() : S();
}
export { me as default };

//# sourceMappingURL=addRemoveTags-yM0BxYic.js.map