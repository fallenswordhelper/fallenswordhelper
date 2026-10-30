import { t as e } from "./getValue-Aap0zlcO.js";
import { B as t, G as n, H as r, L as i, W as a, et as o, ft as s, pt as c, r as l, tt as u, vt as d, yt as f } from "./disclose-version-gxrYovMN.js";
import { t as p } from "./arrayFrom-CKk6qt2j.js";
import { t as m } from "./partial-Bo20zBni.js";
import { t as h } from "./sendEvent-DkxfZozg.js";
import { t as g } from "./entries-PXiXtjwA.js";
import { t as _ } from "./querySelectorArray-C70U47NF.js";
import { t as v } from "./closestTr-BGwSv-6S.js";
import { t as y } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as b } from "./chunk-A8FcSK6x.js";
import { t as x } from "./toggleForce-DTdXZaY8.js";
import { t as S } from "./batch-D3pHvEAg.js";
import { t as C } from "./FolderButtons-LIoKEslm.js";
import { a as w, i as T, o as E, r as D, s as O, t as k } from "./injectStoreItems-D7xOl9Lo.js";
// src/modules/guild/inventory/storeitems/CheckAll.svelte
var A = r("<button class=\"custombutton svelte-wn7xht\" type=\"button\">Check All</button>&nbsp;", 1);
function j(e, r) {
	c(r, !0);
	function i() {
		h("storeitems", "Check All"), r.dispatchCheckAll();
	}
	var a = A(), o = u(a);
	d(), n("click", o, i), t(e, a), s();
}
a(["click"]);
// src/modules/guild/inventory/storeitems/FolderFilter.svelte
var M = r("<tr class=\"fshCenter\"><td colspan=\"3\" class=\"svelte-105bt0i\"><!></td></tr>");
function N(e, n) {
	c(n, !0);
	let r = l(n, "inv", 19, () => ({ folders: {} }));
	var i = M(), a = o(i), u = o(a);
	C(u, {
		get doFilter() {
			return n.doFilter;
		},
		get folders() {
			return r().folders;
		}
	}), f(a), f(i), t(e, i), s();
}
// src/modules/guild/inventory/storeitems/doFolderFilter.js
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
function I(e, t) {
	i(N, {
		anchor: t,
		props: {
			doFilter: m(F, e),
			inv: e
		},
		target: t.parentNode
	});
}
// src/modules/guild/inventory/storeitems/doMoveItems.js
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
	h("storeitems", "Move to Folder");
	let n = _("[name=\"storeIndex[]\"]:checked");
	b(30, n).forEach(m(z, e, t));
}
function V(e, t) {
	let n = [{
		id: "-1",
		name: "Main"
	}, ...g(e.folders).map(([e, t]) => ({
		id: e,
		name: t
	}))];
	i(w, {
		anchor: t,
		props: {
			folders: n,
			moveItemsToFolder: m(B, e)
		},
		target: t.parentNode
	});
}
// src/modules/guild/inventory/storeitems/storeitems.js
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
	let { elements: t } = e;
	if (!t?.length) return;
	let [n] = p(t).filter((e) => e.type === "submit");
	n && i(j, {
		anchor: n,
		props: { dispatchCheckAll: U },
		target: n.parentNode
	});
}
function G() {
	if (y()) return;
	let [e] = document.forms;
	e && (H(e), W(e), k());
}
export { G as default };

//# sourceMappingURL=storeitems-CshG76Bn.js.map