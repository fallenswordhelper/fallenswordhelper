import { t as e } from "./getValue-Aap0zlcO.js";
import { t } from "./setValue-B1MbQwxn.js";
import { t as n } from "./querySelector-C6ReNysW.js";
import { t as r } from "./on-DfyX3AS4.js";
import { t as i } from "./getCustomUrlParameter-C5vi2hsN.js";
import { t as a } from "./dynamicAlert-BnFmov1Z.js";
import { t as o } from "./sendEvent-DkxfZozg.js";
import { t as s } from "./_dataAccess-BLVLQyDJ.js";
import { t as c } from "./aGenericFallback-C6VAMq13.js";
import { t as l } from "./closestTr-BGwSv-6S.js";
import { t as u } from "./insertElementAfter-Bc9YFj76.js";
import { t as d } from "./createSpan-9KJdvIXK.js";
import { t as f } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { i as p } from "./simpleCheckbox-DUFnKFg1.js";
import { t as m } from "./arrayFromRadioNodeList-D_c970RI.js";
import { t as h } from "./inventing-Rn2nY9pc.js";
import { n as g, t as _ } from "./selfIdIs-R0PGIjS5.js";
// src/modules/app/inventing/domoverecipes.js
function v(e, t) {
	return h({
		subcmd: "domoverecipes",
		target_folder_id: e,
		recipe_selected: t
	});
}
// src/modules/_dataAccess/daRecipeMove.js
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
// src/modules/inventing/inventing.js
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
export { P as default };

//# sourceMappingURL=inventing-Dwh6fg9B.js.map