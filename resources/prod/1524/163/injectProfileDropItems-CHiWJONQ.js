import { t as e } from "./getText-BybFkJV6.js";
import { t } from "./getValue-j5JjE6f3.js";
import { t as n } from "./setValue-31jE_mRr.js";
import { t as r } from "./querySelector-8FH1hhUv.js";
import { t as i } from "./on-afIPYx-0.js";
import { t as a } from "./getCustomUrlParameter-Dna1URkG.js";
import { A as o, a as s, dt as c, ut as l } from "./disclose-version-Bvjv4_yw.js";
import { t as u } from "./partial-CYzPXpZP.js";
import { t as d } from "./layout-6CPY-bfq.js";
import { t as f } from "./sendEvent-DFQy5lFi.js";
import { t as p } from "./querySelectorArray-Bdj4peIm.js";
import { t as m } from "./asyncPThree-BJbUegnm.js";
import { t as h } from "./closestTr-DTXY0qkG.js";
import { t as g } from "./jQueryNotPresent-UT8-ZycH.js";
import { t as _ } from "./insertHtmlBeforeEnd-D5-rjWCh.js";
import "./legacy-DUan0FaP.js";
import { t as v } from "./QuickSelectClasses-gaYkQJ2b.js";
import { t as y } from "./closestTable-B_Km1mKH.js";
import { i as b } from "./simpleCheckbox-BrfzFmVJ.js";
import { t as x } from "./chunk-BRn3bpie.js";
import { t as S } from "./removeRow-D9oDv5EC.js";
import { t as C } from "./errorDialog-CwxmqjPI.js";
import { a as w, c as T, n as E, o as D, s as O, t as k } from "./injectStoreItems-BMHZdzoF.js";
import { n as A, t as j } from "./selfIdIs-C95X7Yin.js";
//#region src/modules/profile/dropitems/DropItems.svelte
function M(e, t) {
	c(t, !1), s(), v(e, {
		dispatchPerf: () => f("drop-items", "doPerf"),
		dispatchSelect: (e) => f("drop-items", "doSelect", e),
		dispatchToggle: () => f("drop-items", "toggleSelectST")
	}), l();
}
//#endregion
//#region src/modules/profile/dropitems/getCheckedItems.js
function N() {
	return p("[name=\"removeIndex[]\"]:checked");
}
//#endregion
//#region src/modules/profile/dropitems/injectMoveItems.js
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
//#endregion
//#region src/modules/profile/dropitems/interceptDestroy.js
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
	!e.returnValue || !B || (e.preventDefault(), x(30, N()).forEach(U), f("dropitems", "Destroy by AJAX"));
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
//#endregion
//#region src/modules/profile/dropitems/injectProfileDropItems.js
var $ = [
	I,
	k,
	Q
];
function te() {
	r(".backpack-manage-container") && (o(M, { target: d() }), !(g() || !T()) && m($));
}
//#endregion
export { te as default };

//# sourceMappingURL=injectProfileDropItems-CHiWJONQ.js.map