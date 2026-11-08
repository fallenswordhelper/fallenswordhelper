import { t as e } from "./inventing-KjxfBKSF.js";
import { t } from "./_dataAccess-BLVLQyDJ.js";
import { t as n } from "./aGenericFallback-6foHv24I.js";
import { t as r } from "./dynamicAlert-xklxr5Wl.js";
import { t as i } from "./sendEvent-Co2_qySS.js";
import { t as a } from "./arrayFromRadioNodeList-D_c970RI.js";
import { t as o } from "./createSpan-dzM9C32V.js";
import { t as s } from "./closestTr-BGwSv-6S.js";
import { n as c, t as l } from "./selfIdIs-R0PGIjS5.js";
import { t as u } from "./insertElementAfter-Bc9YFj76.js";
import { t as d } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as f } from "./on-DfyX3AS4.js";
import { t as p } from "./querySelector-C6ReNysW.js";
import { r as m } from "./simpleCheckbox-BrCsqZ3Q.js";
import { t as h } from "./getCustomUrlParameter-C5vi2hsN.js";
import { t as g } from "./getValue-vrUqpo0a.js";
import { t as _ } from "./setValue-D-C74rTg.js";
// src/modules/app/inventing/domoverecipes.js
function v(t, n) {
	return e({
		subcmd: "domoverecipes",
		target_folder_id: t,
		recipe_selected: n
	});
}
// src/modules/_dataAccess/daRecipeMove.js
function y(e, t) {
	return n({
		cmd: "inventing",
		subcmd: "domoverecipes",
		recipe_selected: t,
		target_folder_id: e
	}, "Selected recipes have been moved to the target folder.");
}
function b(e, n) {
	return t(v, y, e, n);
}
// src/modules/inventing/inventing.js
var x = "ajaxifyMoveRecipe", S = 0;
function C() {
	i("inventing", "toggle ajaxify pref"), S = !S, _(x, S);
}
var w = [[l(x), C]];
function T(e) {
	d(e.parentNode, `&nbsp;&nbsp;${m(x)}`), f(e.parentNode, "change", c(w));
}
function E(e) {
	e.parentNode.classList.add("fshRelative"), e.classList.add("hideCheckbox"), u(o({ className: "fshSpinner fshSpinner12" }), e);
}
function D(e) {
	let t = s(e);
	t && (t.nextElementSibling.remove(), t.remove());
}
function O(e) {
	e.classList.remove("hideCheckbox"), e.nextElementSibling.remove();
}
function k(e, t) {
	t.s ? e.forEach(D) : (r(t.e.message), e.forEach(O));
}
async function A(e, t) {
	i("inventing", "Move recipes by AJAX"), t.forEach(E), k(t, await b(e, t.map((e) => Number(e.value))));
}
function j(e, t) {
	let n = e["recipe_selected[]"];
	if (!n) return;
	let r = a(n).filter((e) => e.checked);
	r.length && A(t, r);
}
function M() {
	let e = p("#pCC img[src*=\"/folder_on.\"]").parentNode.href;
	return h(e, "folder_id");
}
function N(e) {
	if (!S) return;
	e.preventDefault();
	let t = M(), { elements: n } = e.target, r = n.target_folder_id.value;
	t !== r && j(n, r);
}
function P() {
	let e = p("input[value=\"Move Recipes\"]");
	e && (T(e), S = g(x), f(e.form, "submit", N));
}
export { P as default };

//# sourceMappingURL=inventing-DpyJx-fc.js.map