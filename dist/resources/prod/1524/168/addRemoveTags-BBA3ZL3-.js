import { t as e } from "./injectGuild-DQwtr8A4.js";
import { t } from "./closestTable-B73T3rIi.js";
import { t as n } from "./closestTr-BGwSv-6S.js";
import { t as r } from "./getElementById-C08-3H-C.js";
import { t as i } from "./getTextTrim-CvXe85fp.js";
import { t as a } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as o } from "./querySelector-C6ReNysW.js";
import { t as s } from "./querySelectorArray-C70U47NF.js";
import { t as c } from "./toLowerCase-Cpm0Ikhj.js";
import { t as l } from "./calf-SqS2SeU4.js";
import { t as u } from "./layout-B2Q1UoM2.js";
import { t as d } from "./daGsTake-wNhCEtLa.js";
import { t as f } from "./indexAjaxData-BAm_dTyc.js";
import { t as ee } from "./guildInventory-Cb6J3fhR.js";
import { t as p } from "./_dataAccess-BLVLQyDJ.js";
import { t as m } from "./htmlResult-ChzxOgJl.js";
import { t as h } from "./sendEvent-DdWrU3DL.js";
import { t as g } from "./createSpan-dzM9C32V.js";
import { t as _ } from "./classHandler-hzfvoR03.js";
import { t as v } from "./clickThis-UHuK6eKQ.js";
import { t as y } from "./closest-BE9LIvvz.js";
import { t as b } from "./onclick-nv-Fl1th.js";
import { t as x } from "./partial-Bo20zBni.js";
import { t as S } from "./setText-CVjyFkRt.js";
import { t as C } from "./dynamicAlert-xklxr5Wl.js";
import { t as w } from "./chunk-A8FcSK6x.js";
import { t as T } from "./on-DfyX3AS4.js";
import { t as E } from "./itemIdFromImg-O3uB0Iqa.js";
// src/modules/app/guild/inventory/doTags.js
function D(e, t) {
	return ee({
		subcmd2: e,
		tagIndex: t
	});
}
// src/modules/_dataAccess/daTagItems.js
async function O(e, t) {
	let n = await f({
		cmd: "guild",
		subcmd: "inventory",
		subcmd2: e,
		tagIndex: t
	});
	return m(n);
}
function k(e, t) {
	return p(D, O, e, t);
}
// src/modules/guild/inventory/addRemoveTags/actionType.js
function A() {
	return o("[name=\"subcmd2\"]").value;
}
// src/modules/guild/inventory/addRemoveTags/clickHandler.js
var j = (e) => o("input", n(e)), M = (e) => y("div", e).dataset.invId;
function N() {
	h("addRemoveTags", "doCheckAll"), s("#pCC input[name=\"tagIndex[]\"]").forEach(v);
}
function P(e, t) {
	h("addRemoveTags", "checkType");
	let n = M(t), [, , r, i] = e.find(([, e]) => e === n);
	e.filter(([, , e, t]) => e === r && t === i).filter(([e]) => document.body.contains(e)).map(([e]) => e).forEach(v);
}
function F(e) {
	let t = g({ className: e.className.replace("-btn", "") });
	e.replaceWith(t);
}
function I(e) {
	s("button:not(.tag-bp-btn)", e).forEach(F);
}
function L(e, t) {
	let n = g({ className: `tag-${e} fshSpinner fshSpinner12` });
	return t.replaceWith(n), I(y("div", n)), n;
}
async function R(e, t, n, r) {
	h("addRemoveTags", e);
	let i = M(r);
	j(r)?.remove();
	let a = L(e, r);
	(await t(i)).s && (a.classList.remove("fshSpinner"), S(n, a));
}
function z(e) {
	return k(A(), [e]);
}
function B(e) {
	return [
		["tag-all-custom", N],
		["tag-bp-btn", x(R, "bp", d, "Taken")],
		["tag-all-btn", x(P, e)],
		["tag-add-btn", x(R, "add", z, "Tagged")],
		["tag-remove-btn", x(R, "remove", z, "Removed")]
	];
}
function V(e) {
	b(u(), _(B(e)));
}
// src/modules/guild/inventory/addRemoveTags/removeRow.js
function te(e) {
	let t = n(e);
	if (!t) return;
	let r = t.nextElementSibling;
	r && (r.remove(), t.remove());
}
// src/modules/guild/inventory/addRemoveTags/interceptSubmit.js
var H = () => s("[name=\"tagIndex[]\"]:checked");
async function U(e, t) {
	let n = await k(e, t.map((e) => e.value));
	n.s ? t.forEach(te) : C(n.e.message);
}
function W(e) {
	e.preventDefault(), w(25, H()).forEach(x(U, A())), h("addRemoveTags", "Tag by AJAX");
}
function G() {
	T(document.forms[0], "submit", W);
}
// src/modules/guild/inventory/addRemoveTags/addRemoveTags.js
var K = () => l.subcmd2 === "addtags", q = (e) => E(o("img", n(e))), J = (e) => i(n(e).cells[2]), Y = (e, t) => `<button class="${e}" type="button">${t}</button>`, X = (e) => c(e).split(" ").at(-1), Z = (e) => `tag-${X(e)}-btn`, Q = (e) => `[${Y(Z(e), e)}]`, ne = (e) => e > 1 ? `${Q("Check All")}&nbsp;` : "", re = () => K() ? "Add" : "Remove", ie = () => Q(`Fast ${re()}`), ae = () => Q("Fast BP"), oe = (e, t) => `<div class="btn-div" data-inv-id="${e}">${t}</div>`, $ = (e, t) => oe(e, `&nbsp;${ne(t)}${ie()}&nbsp;${ae()}`);
function se([e, t, , , r]) {
	let i = n(e).cells[2];
	a(i, $(t, r));
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
	return le(s("input[name=\"tagIndex[]\"]", u()).map(ce));
}
function de(e) {
	let t = e.parentNode;
	K() && (t = n(e).insertCell(-1)), a(t, Y("tag-all-custom custombutton", "Check&nbsp;All"));
}
function fe(e) {
	if (!K()) return;
	let n = t(e);
	n.className = "add-remove-tags";
}
function pe() {
	let e = ue();
	if (!e.length) return;
	let t = r("tagging_cost");
	fe(t), de(t), e.forEach(se), V(e), G();
}
function me() {
	r("tagging_cost") ? pe() : e();
}
export { me as default };

//# sourceMappingURL=addRemoveTags-BBA3ZL3-.js.map