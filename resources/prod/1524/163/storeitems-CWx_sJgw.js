import { t as e } from "./getValue-j5JjE6f3.js";
import { A as t, F as n, J as r, L as i, N as a, R as o, Y as s, _t as c, dt as l, gt as u, r as d, ut as f } from "./disclose-version-Bvjv4_yw.js";
import { t as p } from "./arrayFrom-B0aMFj4F.js";
import { t as m } from "./partial-CYzPXpZP.js";
import { t as h } from "./sendEvent-DFQy5lFi.js";
import { t as g } from "./entries-CiJ6YMwx.js";
import { t as _ } from "./querySelectorArray-Bdj4peIm.js";
import { t as v } from "./closestTr-DTXY0qkG.js";
import { t as y } from "./jQueryNotPresent-UT8-ZycH.js";
import { t as b } from "./chunk-BRn3bpie.js";
import { t as x } from "./toggleForce-CGKf4S1c.js";
import { t as S } from "./batch-Bv-NXhgk.js";
import { t as C } from "./FolderButtons-Lk0o0ejw.js";
import { a as w, i as T, o as E, r as D, s as O, t as k } from "./injectStoreItems-BMHZdzoF.js";
//#region src/modules/guild/inventory/storeitems/CheckAll.svelte
var A = n("<button class=\"custombutton svelte-wn7xht\" type=\"button\">Check All</button>&nbsp;", 1);
function j(e, t) {
	l(t, !0);
	function n() {
		h("storeitems", "Check All"), t.dispatchCheckAll();
	}
	var r = A(), i = s(r);
	u(), o("click", i, n), a(e, r), f();
}
i(["click"]);
//#endregion
//#region src/modules/guild/inventory/storeitems/FolderFilter.svelte
var M = n("<tr class=\"fshCenter\"><td colspan=\"3\" class=\"svelte-105bt0i\"><!></td></tr>");
function N(e, t) {
	l(t, !0);
	let n = d(t, "inv", 19, () => ({ folders: {} }));
	var i = M(), o = r(i);
	C(r(o), {
		get doFilter() {
			return t.doFilter;
		},
		get folders() {
			return n().folders;
		}
	}), c(o), c(i), a(e, i), f();
}
//#endregion
//#region src/modules/guild/inventory/storeitems/doFolderFilter.js
function P(e, t, n) {
	n.checked = !1;
	let r = v(n), i = e.items[n.value]?.folder_id, a = t !== -2 && t !== i;
	x(r, a), x(r.nextElementSibling, a);
}
function F(e, t) {
	h("storeitems", "Filter Folder"), S([
		3,
		O(),
		0,
		m(P, e, Number(t))
	]);
}
function I(e, n) {
	t(N, {
		anchor: n,
		props: {
			doFilter: m(F, e),
			inv: e
		},
		target: n.parentNode
	});
}
//#endregion
//#region src/modules/guild/inventory/storeitems/doMoveItems.js
function L(e, t, n) {
	e.items[n].folder_id = Number(t);
}
function R(e, t, n) {
	n.checked = !1, L(e, t, n.value);
	let r = v(n);
	x(r, !0), x(r.nextElementSibling, !0);
}
async function z(e, t, n) {
	(await E(t, n.map((e) => e.value))).s && n.forEach(m(R, e, t));
}
function B(e, t) {
	h("storeitems", "Move to Folder"), b(30, _("[name=\"storeIndex[]\"]:checked")).forEach(m(z, e, t));
}
function V(e, n) {
	t(w, {
		anchor: n,
		props: {
			folders: [{
				id: "-1",
				name: "Main"
			}, ...g(e.folders).map(([e, t]) => ({
				id: e,
				name: t
			}))],
			moveItemsToFolder: m(B, e)
		},
		target: n.parentNode
	});
}
//#endregion
//#region src/modules/guild/inventory/storeitems/storeitems.js
async function H(t) {
	if (!e("enableFolderFilter")) return;
	let n = await D();
	n?.folders && (I(n, t), V(n, t));
}
function U() {
	T().forEach((e) => {
		e.checked = !e.disabled && !e.checked;
	});
}
function W(e) {
	let { elements: n } = e;
	if (!n?.length) return;
	let [r] = p(n).filter((e) => e.type === "submit");
	r && t(j, {
		anchor: r,
		props: { dispatchCheckAll: U },
		target: r.parentNode
	});
}
function G() {
	if (y()) return;
	let [e] = document.forms;
	e && (H(e), W(e), k());
}
//#endregion
export { G as default };

//# sourceMappingURL=storeitems-CWx_sJgw.js.map