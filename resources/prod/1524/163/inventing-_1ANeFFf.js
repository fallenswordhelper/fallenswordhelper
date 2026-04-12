import { t as e } from "./getValue-j5JjE6f3.js";
import { t } from "./setValue-31jE_mRr.js";
import { t as n } from "./querySelector-8FH1hhUv.js";
import { t as r } from "./on-afIPYx-0.js";
import { t as i } from "./getCustomUrlParameter-Dna1URkG.js";
import { t as a } from "./dynamicAlert-DtHqMIea.js";
import { t as o } from "./sendEvent-DFQy5lFi.js";
import { t as s } from "./_dataAccess-Cm9xXxBc.js";
import { t as c } from "./aGenericFallback-hK73Fv-s.js";
import { t as l } from "./closestTr-DTXY0qkG.js";
import { t as u } from "./insertElementAfter-DbTCI72b.js";
import { t as d } from "./createSpan-DCxGsyWX.js";
import { t as f } from "./insertHtmlBeforeEnd-D5-rjWCh.js";
import { i as p } from "./simpleCheckbox-BrfzFmVJ.js";
import { t as m } from "./arrayFromRadioNodeList-DKi4zZC6.js";
import { t as h } from "./inventing-CnX7rmLZ.js";
import { n as g, t as _ } from "./selfIdIs-C95X7Yin.js";
//#region src/modules/app/inventing/domoverecipes.js
function v(e, t) {
	return h({
		subcmd: "domoverecipes",
		target_folder_id: e,
		recipe_selected: t
	});
}
//#endregion
//#region src/modules/_dataAccess/daRecipeMove.js
function y(e, t) {
	return c({
		cmd: "inventing",
		subcmd: "domoverecipes",
		recipe_selected: t,
		target_folder_id: e
	}, "Selected recipes have been moved to the target folder.");
}
function b(e, t) {
	return s(v, y, e, t);
}
//#endregion
//#region src/modules/inventing/inventing.js
var x = "ajaxifyMoveRecipe", S = 0;
function C() {
	o("inventing", "toggle ajaxify pref"), S = !S, t(x, S);
}
var w = [[_(x), C]];
function T(e) {
	f(e.parentNode, `&nbsp;&nbsp;${p(x)}`), r(e.parentNode, "change", g(w));
}
function E(e) {
	e.parentNode.classList.add("fshRelative"), e.classList.add("hideCheckbox"), u(d({ className: "fshSpinner fshSpinner12" }), e);
}
function D(e) {
	let t = l(e);
	t && (t.nextElementSibling.remove(), t.remove());
}
function O(e) {
	e.classList.remove("hideCheckbox"), e.nextElementSibling.remove();
}
function k(e, t) {
	t.s ? e.forEach(D) : (a(t.e.message), e.forEach(O));
}
async function A(e, t) {
	o("inventing", "Move recipes by AJAX"), t.forEach(E), k(t, await b(e, t.map((e) => Number(e.value))));
}
function j(e, t) {
	let n = e["recipe_selected[]"];
	if (!n) return;
	let r = m(n).filter((e) => e.checked);
	r.length && A(t, r);
}
function M() {
	let e = n("#pCC img[src*=\"/folder_on.\"]").parentNode.href;
	return i(e, "folder_id");
}
function N(e) {
	if (!S) return;
	e.preventDefault();
	let t = M(), { elements: n } = e.target, r = n.target_folder_id.value;
	t !== r && j(n, r);
}
function P() {
	let t = n("input[value=\"Move Recipes\"]");
	t && (T(t), S = e(x), r(t.form, "submit", N));
}
//#endregion
export { P as default };

//# sourceMappingURL=inventing-_1ANeFFf.js.map