import "./sendException-s1csWDQs.js";
import { t as e } from "./getText-rCJDurvG.js";
import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import "./constants-C54mky4_.js";
import { t } from "./getValue-CCThXEzy.js";
import { t as n } from "./setValue-Cb0PYC7t.js";
import { t as r } from "./querySelector-qkBBhiGH.js";
import { t as i } from "./on-f-HmOL0n.js";
import "./task-jKbgFyYT.js";
import { t as a } from "./getCustomUrlParameter-CFd8fvHs.js";
import { A as o, a as s, dt as c, ut as l } from "./disclose-version-CVZFuhb0.js";
import { t as u } from "./partial-goh6HOls.js";
import { t as d } from "./layout-Bapa39KM.js";
import { t as f } from "./sendEvent-bwvhd4A-.js";
import "./indexAjax-BXHvJ2Y7.js";
import "./indexAjaxData-CqOTihOX.js";
import { t as p } from "./querySelectorArray-BZbNvND7.js";
import { t as m } from "./asyncPThree-CkKBopVV.js";
import { t as h } from "./closestTr-C0LB9ALA.js";
import "./indexAjaxJson-DuDMsKRC.js";
import "./cmdExport-C_7TLPs-.js";
import { t as g } from "./jQueryNotPresent-oTtW_9Ua.js";
import { t as _ } from "./insertHtmlBeforeEnd-CRJWaYJw.js";
import "./legacy-TVNYOKqu.js";
import "./LinkBtn-BGsXfdDi.js";
import "./LinkBtnBracketed-Rc3cBj0A.js";
import "./inventory-DgY8Lj8t.js";
import "./SelectInST-B7dJQZbj.js";
import "./doStatTotal-ASjvWJGO.js";
import { t as v } from "./QuickSelectClasses-vrZWcuBL.js";
import { t as y } from "./closestTable-Dfg3mstY.js";
import { i as b } from "./simpleCheckbox-D5o0QaTA.js";
import { t as x } from "./chunk-DM2KJQ4C.js";
import "./batch-D9tKs5xx.js";
import { t as S } from "./removeRow-BxRfjPCl.js";
import { t as C } from "./errorDialog-B7xXYZmL.js";
import { a as w, c as T, n as E, o as D, s as O, t as k } from "./injectStoreItems-B3xCpn9D.js";
import "./dropItem-CF0rI2de.js";
import "./sendItems-TAu70_Eh.js";
import { n as A, t as j } from "./selfIdIs-DwmsQacR.js";
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

//# sourceMappingURL=injectProfileDropItems-BNZDaVD3.js.map