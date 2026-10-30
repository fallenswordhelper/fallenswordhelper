import "./calfSystem-BrOFwh3f.js";
import { t as e } from "./getText-BqjgTHLv.js";
import { t } from "./getValue-Aap0zlcO.js";
import { t as n } from "./setValue-B2O8DHLF.js";
import { t as r } from "./querySelector-C6ReNysW.js";
import { t as i } from "./on-DfyX3AS4.js";
import { t as a } from "./getCustomUrlParameter-C5vi2hsN.js";
import { L as o, d as s, ft as c, pt as l } from "./disclose-version-gxrYovMN.js";
import { t as u } from "./partial-Bo20zBni.js";
import { t as d } from "./layout-B2Q1UoM2.js";
import { t as f } from "./sendEvent-DkxfZozg.js";
import { t as p } from "./querySelectorArray-C70U47NF.js";
import { t as m } from "./asyncPThree-bWSwOXri.js";
import { t as h } from "./closestTr-BGwSv-6S.js";
import { t as g } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as _ } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as v } from "./QuickSelectClasses-CxyK0T8Z.js";
import { t as y } from "./closestTable-B73T3rIi.js";
import { i as b } from "./simpleCheckbox-DUFnKFg1.js";
import { t as x } from "./chunk-A8FcSK6x.js";
import { t as S } from "./removeRow-BEw0kPeE.js";
import { t as C } from "./errorDialog-CK0T_lOR.js";
import { a as w, c as T, n as E, o as D, s as O, t as k } from "./injectStoreItems-D7xOl9Lo.js";
import { n as A, t as j } from "./selfIdIs-R0PGIjS5.js";
// src/modules/profile/dropitems/DropItems.svelte
function M(e, t) {
	l(t, !1), s(), v(e, {
		dispatchPerf: () => f("drop-items", "doPerf"),
		dispatchSelect: (e) => f("drop-items", "doSelect", e),
		dispatchToggle: () => f("drop-items", "toggleSelectST")
	}), c();
}
// src/modules/profile/dropitems/getCheckedItems.js
function N() {
	return p("[name=\"removeIndex[]\"]:checked");
}
// src/modules/profile/dropitems/injectMoveItems.js
var P = (t) => ({
	id: a(t.parentNode.href, "folder_id"),
	name: e(t.parentNode.parentNode)
});
async function F(e, t) {
	(await D(e, t.map((e) => e.value)))?.s && t.forEach(S);
}
function ee(e) {
	f("dropitems", "Move to Folder"), x(30, N()).forEach(u(F, e));
}
function I() {
	let e = p("#pCC img[src$=\"/folder.png\"]");
	if (!e.length) return;
	let t = h(y(e[0])), n = e.map(P);
	o(w, {
		anchor: t.nextElementSibling,
		props: {
			folders: n,
			moveItemsToFolder: ee
		},
		target: t.parentNode
	});
}
// src/modules/profile/dropitems/interceptDestroy.js
function L(e) {
	O().forEach((t) => {
		t.checked = !!e;
	});
}
var R = "ajaxifyDestroy", z = "disableDestroyPrompts", B = 0, V = 1, H = 0;
async function U(e) {
	let t = await E(e.map((e) => e.value));
	C(t), t.s && e.forEach(S);
}
function W(e) {
	e.returnValue && B && (e.preventDefault(), x(30, N()).forEach(U), f("dropitems", "Destroy by AJAX"));
}
function G() {
	return f("dropitems", "Destroy without prompts"), !0;
}
function K() {
	window.confirmDestroy = V ? G : H;
}
function q() {
	V = t(z), H = window.confirmDestroy, K();
}
function J() {
	f("dropitems", "handleAjaxifyPref"), B = !B, n(R, B);
}
function Y() {
	f("dropitems", "handleDestroyPref"), V = !V, n(z, V), K();
}
var X = () => A([[j(R), J], [j(z), Y]]);
function Z(e) {
	_(e.parentNode, `&nbsp;&nbsp;${b(R)}&nbsp;&nbsp;${b(z)}`), i(e.parentNode, "change", X());
}
function Q() {
	let e = r("input[type=\"submit\"]");
	e && (Z(e), q(), B = t(R), i(document.forms[0], "submit", W), window.check = L);
}
// src/modules/profile/dropitems/injectProfileDropItems.js
var $ = [
	I,
	k,
	Q
];
function te() {
	r(".backpack-manage-container") && (o(M, { target: d() }), !g() && T() && m($));
}
export { te as default };

//# sourceMappingURL=injectProfileDropItems-DQn3sL2g.js.map