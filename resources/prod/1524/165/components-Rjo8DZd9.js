import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./system-CNA0YLOa.js";
import { $ as n } from "./constants-CenxlFMY.js";
import { t as r } from "./querySelector-C6ReNysW.js";
import { B as i, F as a, H as o, I as s, L as c, M as l, P as u, R as d, U as f, V as p, X as m, Z as h, a as g, at as _, c as v, ct as y, et as b, ft as x, l as S, lt as C, nt as w, o as T, pt as E, q as D, rt as O, st as k, tt as A, u as j, ut as M, vt as N, y as P, yt as F } from "./disclose-version-gxrYovMN.js";
import "./index-client-DagsW5bk.js";
import { t as ee } from "./dynamicAlert-BnFmov1Z.js";
import { t as I } from "./partial-Bo20zBni.js";
import { t as L } from "./sendEvent-DkxfZozg.js";
import { t as te } from "./entries-PXiXtjwA.js";
import { t as ne } from "./createDiv-XU2XBEIv.js";
import { t as re } from "./getElementsByClassName-DQB1YOHi.js";
import { t as ie } from "./quickExtract-DT_xNCwO.js";
import { t as ae } from "./_dataAccess-BLVLQyDJ.js";
import { t as oe } from "./indexAjaxDoc-WR96kHce.js";
import { t as se } from "./infoBox-QJxiDGQb.js";
import { t as ce } from "./profile-BZrU9oa_.js";
import { t as R } from "./onclick-nv-Fl1th.js";
import { t as le } from "./querySelectorArray-C70U47NF.js";
import { t as ue } from "./regExpGroups-DJF-Cl1w.js";
import { t as z } from "./uniq-DgWt7KlP.js";
import { t as B } from "./all-D5SlTl7_.js";
import { t as V } from "./hideQTip-BN4jwVBE.js";
import { t as H } from "./LinkBtnBracketed-C2pSnAm8.js";
import { t as U } from "./playerId-C1UyEKeb.js";
import { t as W } from "./closestTd-qGJKTnGX.js";
import { t as de } from "./chunk-A8FcSK6x.js";
import { t as fe } from "./daComponents-DehANla-.js";
// node_modules/svelte/src/reactivity/map.js
var G = class extends Map {
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ C(0);
	#n = /* @__PURE__ */ C(0);
	#r = m || -1;
	constructor(e) {
		if (super(), e) {
			for (var [t, n] of e) super.set(t, n);
			this.#n.v = super.size;
		}
	}
	#i(e) {
		return m === this.#r ? /* @__PURE__ */ C(e) : y(e);
	}
	has(e) {
		var t = this.#e, n = t.get(e);
		if (n === void 0) {
			if (super.has(e)) n = this.#i(0), t.set(e, n);
			else return D(this.#t), !1;
		}
		return D(n), !0;
	}
	forEach(e, t) {
		this.#a(), super.forEach(e, t);
	}
	get(e) {
		var t = this.#e, n = t.get(e);
		if (n === void 0) {
			if (super.has(e)) n = this.#i(0), t.set(e, n);
			else {
				D(this.#t);
				return;
			}
		}
		return D(n), super.get(e);
	}
	getOrInsert(e, t) {
		return super.has(e) || this.set(e, t), this.get(e);
	}
	getOrInsertComputed(e, t) {
		return super.has(e) || this.set(e, t(e)), this.get(e);
	}
	set(e, t) {
		var n = this.#e, r = n.get(e), i = super.get(e), a = super.set(e, t), o = this.#t;
		if (r === void 0) r = this.#i(0), n.set(e, r), k(this.#n, super.size), _(o);
		else if (i !== t) {
			_(r);
			var s = o.reactions === null ? null : new Set(o.reactions);
			s !== null && r.reactions?.every((e) => s.has(e)) || _(o);
		}
		return a;
	}
	delete(e) {
		var t = this.#e, n = t.get(e), r = super.delete(e);
		return n !== void 0 && (t.delete(e), k(n, -1)), r && (k(this.#n, super.size), _(this.#t)), r;
	}
	clear() {
		if (super.size !== 0) {
			super.clear();
			var e = this.#e;
			k(this.#n, 0);
			for (var t of e.values()) k(t, -1);
			_(this.#t), e.clear();
		}
	}
	#a() {
		D(this.#t);
		var e = this.#e;
		if (this.#n.v !== e.size) {
			for (var t of super.keys()) if (!e.has(t)) {
				var n = this.#i(0);
				e.set(t, n);
			}
		}
		for ([, n] of this.#e) D(n);
	}
	keys() {
		return D(this.#t), super.keys();
	}
	values() {
		return this.#a(), super.values();
	}
	entries() {
		return this.#a(), super.entries();
	}
	[Symbol.iterator]() {
		return this.entries();
	}
	get size() {
		return D(this.#n), super.size;
	}
}, K = j(new G()), pe = v(K, (e) => [...e].reduce((e, [, t]) => e + (t.get("del")?.length ?? 0), 0)), me = o("<td class=\"compSumSpin\"><span class=\"fshSpinner fshSpinner12\"></span></td>"), he = o("<td><!></td>"), ge = o("<tr><td><img class=\"tip-dynamic\" alt=\"component\"/></td><td> </td><!></tr>"), _e = o("<tr><td class=\"compDel svelte-1phdchv\" colspan=\"3\">Deleted</td></tr>");
function ve(e, n) {
	E(n, !0);
	let r = () => T(K, "$compStore", o), [o, s] = g(), c = M(() => r().get(n.itemId)), l = !0, u = U(), m = (e) => `${t}items/${e.get("b")}.gif`, _ = (e) => `fetchitem.php?item_id=${e.get("b")}&inv_id=${e.get("a")}&t=2&p=${u}&vcode=${e.get("v")}`;
	function v() {
		l && (l = !1, L("components", "delType"), n.dispatchDelType(n.itemId));
	}
	var y = p(), S = A(y), C = (e) => {
		var t = ge(), n = b(t), r = w(n), o = O(n), s = w(o, !0), l = O(o), u = (e) => {
			var t = me();
			i(e, t);
		}, p = M(() => D(c).get("delPending")), g = (e) => {
			var t = he(), n = b(t);
			H(n, {
				onclick: v,
				children: (e, t) => {
					N();
					var n = f("Del");
					i(e, n);
				},
				$$slots: { default: !0 }
			}), F(t), i(e, t);
		};
		a(l, (e) => {
			D(p) ? e(u) : e(g, -1);
		}), F(t), h((e, t, n) => {
			P(r, "src", e), P(r, "data-tipped", t), d(s, n);
		}, [
			() => m(D(c)),
			() => _(D(c)),
			() => D(c).get("del").length
		]), i(e, t);
	}, k = M(() => D(c).get("del").length), j = (e) => {
		var t = _e();
		i(e, t);
	};
	a(S, (e) => {
		D(k) ? e(C) : e(j, -1);
	}), i(e, y), x(), s();
}
// src/modules/profile/components/getAsyncData.js
async function ye(e) {
	let t = await e();
	if (!t?.s) throw Error(t?.e?.message ?? "Unknown Error");
	return t;
}
// src/modules/profile/components/Count.svelte
var be = o("<div><table class=\"fshTblCenter\"><thead><tr><th colspan=\"3\">Component Summary</th></tr><tr><th>Total:</th><th colspan=\"2\"> </th></tr></thead><tbody></tbody></table></div>"), xe = o("<p style=\"color: red\"> </p>"), Se = o("<div class=\"compSumSpin\"><span class=\"fshSpinner fshSpinner12\"></span></div>");
function Ce(e, t) {
	E(t, !0);
	let n = () => T(pe, "$total", r), [r, a] = g();
	function o(e) {
		return new G(te(e));
	}
	function c(e) {
		let t = new G(z(e, "b").map((t) => [t.b, o({
			...t,
			del: e.filter(({ b: e }) => e === t.b).map(({ a: e }) => e),
			delPending: !1
		})]));
		return K.set(t), [...t.keys()];
	}
	async function u() {
		let e = await ye(fe);
		return {
			rollup: c(e.r),
			maxComp: e.h?.p.find(({ k: e }) => e === 56)?.v
		};
	}
	var f = p(), m = A(f);
	s(m, u, (e) => {
		var t = Se();
		i(e, t);
	}, (e, r) => {
		var a = M(() => {
			var { rollup: e, maxComp: t } = D(r);
			return {
				rollup: e,
				maxComp: t
			};
		}), o = M(() => D(a).rollup), s = M(() => D(a).maxComp), c = be(), u = b(c), f = b(u), p = O(b(f)), m = O(b(p)), g = w(m);
		F(p), F(f);
		var _ = O(f);
		l(_, 20, () => D(o), (e) => e, (e, n) => {
			ve(e, {
				get dispatchDelType() {
					return t.dispatchDelType;
				},
				get itemId() {
					return n;
				}
			});
		}), F(_), F(u), F(c), h(() => d(g, `${n() ?? ""} / ${D(s) ?? ""}`)), i(e, c);
	}, (e, t) => {
		var n = xe(), r = w(n, !0);
		h(() => d(r, D(t).message)), i(e, n);
	}), i(e, f), x(), a();
}
// src/modules/profile/components/Components.svelte
var q = o("<div><!></div>"), we = o("<div><svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper></div>"), Te = o("<div class=\"fshCenter\"><!> <!> <div><!></div> <!></div>");
function Ee(e, t) {
	E(t, !0);
	let n = C(void 0), r = C(void 0), o = !0, s = !0, c = !0;
	function l() {
		o && (o = !1, L("components", "enableQuickDel"), k(n, !0), t.dispatchQuickDel());
	}
	function d() {
		s && (s = !1, L("components", "countComponents"), k(r, !0));
	}
	function p() {
		L("components", "insertQuickExtract"), ie();
	}
	function m() {
		c && (c = !1, L("components", "deleteAllVisible"), t.dispatchDelete());
	}
	var h = Te(), g = b(h), _ = (e) => {
		var t = q(), n = b(t);
		H(n, {
			onclick: l,
			children: (e, t) => {
				N();
				var n = f("Enable Quick Del");
				i(e, n);
			},
			$$slots: { default: !0 }
		}), F(t), i(e, t);
	};
	a(g, (e) => {
		D(n) || e(_);
	});
	var v = O(g, 2), y = (e) => {
		var t = q(), n = b(t);
		H(n, {
			onclick: d,
			children: (e, t) => {
				N();
				var n = f("Count Components");
				i(e, n);
			},
			$$slots: { default: !0 }
		}), F(t), i(e, t);
	}, S = (e) => {
		Ce(e, { get dispatchDelType() {
			return t.dispatchDelType;
		} });
	};
	a(v, (e) => {
		D(r) ? e(S, -1) : e(y);
	});
	var w = O(v, 2), T = b(w);
	H(T, {
		onclick: p,
		children: (e, t) => {
			N();
			var n = f("Quick Extract");
			i(e, n);
		},
		$$slots: { default: !0 }
	}), F(w);
	var A = O(w, 2), j = (e) => {
		var t = we(), n = b(t);
		u(n, () => ({ "--button-color": "red" })), H(n.lastChild, {
			onclick: m,
			children: (e, t) => {
				N();
				var n = f("Delete All Visible");
				i(e, n);
			},
			$$slots: { default: !0 }
		}), F(n), F(t), i(e, t);
	};
	a(A, (e) => {
		D(n) && e(j);
	}), F(h), i(e, h), x();
}
// src/modules/app/profile/destroycomponent.js
function De(e) {
	return ce({
		subcmd: "destroycomponent",
		removeIndex: e
	});
}
// src/modules/_dataAccess/daDestroyComponent.js
function Oe(e, t) {
	let n = se(t);
	return {
		r: n === "Component destroyed." ? 0 : 1,
		m: n,
		c: e
	};
}
async function ke(e) {
	let t = await oe({
		cmd: "profile",
		subcmd: "destroycomponent",
		component_id: e
	});
	return t ? Oe(e, t) : { s: !1 };
}
function Ae(e) {
	let t = e.filter((e) => e.r === 0), n = e.filter((e) => e.r === 1);
	return t.length > 0 ? {
		r: t.map((e) => e.c),
		s: !0
	} : n.length > 0 ? {
		e: { message: n[0].m },
		s: !1
	} : {
		e: { message: e[0].m },
		s: !1
	};
}
async function je(e) {
	return Ae(await B(e.map(ke)));
}
function Me(e) {
	return ae(De, je, e);
}
// src/modules/profile/components/deleteBatch.js
function Ne(e, t) {
	if (!t) return;
	let n = t.get("del").filter((t) => !e.includes(t));
	t.set("del", n);
}
function Pe(e, t) {
	K.update((n) => (Ne(t, n.get(e)), n));
}
function Fe(e, t, n) {
	K.update((r) => (r.get(e)?.set(t, n), r));
}
function Ie(e) {
	if (!e) return;
	let t = e.children[0];
	return t.replaceWith(ne({
		className: "compSumSpin",
		innerHTML: "<span class=\"fshSpinner fshSpinner12\"></span>"
	})), t;
}
function J(e, t) {
	Fe(t, "delPending", e);
}
function Le(e) {
	e.forEach(([e, t]) => {
		t && e.children[0].replaceWith(t);
	});
}
var Re = (e) => e.forEach(([e]) => e?.children[0]?.remove()), ze = (e) => e.map(([e]) => [e, Ie(e)]), Be = ([, e]) => e, Y = (e) => z(e.map(Be)), X = ([, , e]) => e, Z = (e) => Y(e).map((t) => [t, e.filter(([, e]) => e === t).map(X)]), Ve = (e) => Pe(...e);
async function He(e) {
	let t = ze(e), n = await Me(e.map(X));
	n?.s ? (Z(e).forEach(Ve), Re(t)) : (ee(n?.e?.message ?? "Unknown Error"), Le(t));
}
async function Q(e) {
	let t = Y(e);
	t.forEach(I(J, !0)), await B(de(30, e).map(He)), t.forEach(I(J, !1));
}
// src/modules/profile/components/getProps.js
function $(e) {
	let { itemId: t, invId: r } = ue(n, e.dataset.tipped);
	return [Number(t), Number(r)];
}
// src/modules/profile/components/dispatchDelete.js
var Ue = (e) => [W(e), ...$(e)];
function We(e) {
	Q(le("img", e).map(Ue));
}
// src/modules/profile/components/dispatchDelType.js
var Ge = (e) => S(K).get(e).get("del"), Ke = (e, t) => W(r(`img[data-tipped*="&inv_id=${t}&"]`, e));
function qe(e, t) {
	Q(Ge(t).map((n) => [
		Ke(e, n),
		t,
		n
	]));
}
// src/modules/profile/components/dispatchQuickDel.js
function Je(e) {
	e.target.tagName === "IMG" && (e.preventDefault(), L("components", "quickDel"), V(e.target), Q([[W(e.target), ...$(e.target)]]));
}
function Ye(e) {
	e.classList.add("fshQuickDel"), R(e, Je);
}
// src/modules/profile/components/components.js
function Xe() {
	let t = e("profileRightColumn"), n = re("inventory-table", t);
	if (n.length === 2) return n[1];
}
function Ze() {
	let e = Xe();
	e && c(Ee, {
		props: {
			dispatchDelete: I(We, e),
			dispatchDelType: I(qe, e),
			dispatchQuickDel: I(Ye, e)
		},
		target: e.parentNode
	});
}
export { Ze as default };

//# sourceMappingURL=components-Rjo8DZd9.js.map