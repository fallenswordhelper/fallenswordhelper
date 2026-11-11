import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./getElementsByClassName-DQB1YOHi.js";
import { t as n } from "./partial-Bo20zBni.js";
import { B as r, F as i, H as a, I as o, L as s, M as c, P as l, R as u, U as d, V as f, X as p, Z as m, a as h, at as g, c as _, ct as v, et as y, ft as b, l as x, lt as S, nt as C, o as w, pt as T, q as E, rt as D, st as O, tt as k, u as A, ut as j, vt as M, y as N, yt as P } from "./disclose-version-Cj0Bwtvz.js";
import { t as F } from "./sendEvent-DdWrU3DL.js";
import { t as ee } from "./quickExtract-CQ8ARIyC.js";
import { t as I } from "./LinkBtnBracketed-C70NVX79.js";
import { t as te } from "./profileComponents-CBOIDqRY.js";
import { t as L } from "./uniq-DgWt7KlP.js";
import "./index-client-DhxyzQyH.js";
import { t as ne } from "./playerId-C1UyEKeb.js";
import { t as re } from "./system-CNA0YLOa.js";
import { t as ie } from "./entries-PXiXtjwA.js";
import { t as R } from "./closestTd-qGJKTnGX.js";
import { t as ae } from "./querySelectorArray-C70U47NF.js";
import { t as oe } from "./indexAjaxDoc-MnAqiGyz.js";
import { t as se } from "./profile-By-S2hRI.js";
import { t as z } from "./all-D5SlTl7_.js";
import { t as ce } from "./infoBox-QJxiDGQb.js";
import { t as le } from "./_dataAccess-BLVLQyDJ.js";
import { t as B } from "./dynamicAlert-xklxr5Wl.js";
import { t as V } from "./createDiv-B84RqGfo.js";
import { t as H } from "./chunk-A8FcSK6x.js";
import { t as U } from "./regExpGroups-DJF-Cl1w.js";
import { $ as W } from "./constants-CenxlFMY.js";
import { t as ue } from "./querySelector-C6ReNysW.js";
import { t as de } from "./hideQTip-BN4jwVBE.js";
import { t as fe } from "./onclick-nv-Fl1th.js";
// node_modules/svelte/src/reactivity/map.js
var G = class extends Map {
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ S(0);
	#n = /* @__PURE__ */ S(0);
	#r = p || -1;
	constructor(e) {
		if (super(), e) {
			for (var [t, n] of e) super.set(t, n);
			this.#n.v = super.size;
		}
	}
	#i(e) {
		return p === this.#r ? /* @__PURE__ */ S(e) : v(e);
	}
	has(e) {
		var t = this.#e, n = t.get(e);
		if (n === void 0) {
			if (super.has(e)) n = this.#i(0), t.set(e, n);
			else return E(this.#t), !1;
		}
		return E(n), !0;
	}
	forEach(e, t) {
		this.#a(), super.forEach(e, t);
	}
	get(e) {
		var t = this.#e, n = t.get(e);
		if (n === void 0) {
			if (super.has(e)) n = this.#i(0), t.set(e, n);
			else {
				E(this.#t);
				return;
			}
		}
		return E(n), super.get(e);
	}
	getOrInsert(e, t) {
		return super.has(e) || this.set(e, t), this.get(e);
	}
	getOrInsertComputed(e, t) {
		return super.has(e) || this.set(e, t(e)), this.get(e);
	}
	set(e, t) {
		var n = this.#e, r = n.get(e), i = super.get(e), a = super.set(e, t), o = this.#t;
		if (r === void 0) r = this.#i(0), n.set(e, r), O(this.#n, super.size), g(o);
		else if (i !== t) {
			g(r);
			var s = o.reactions === null ? null : new Set(o.reactions);
			s !== null && r.reactions?.every((e) => s.has(e)) || g(o);
		}
		return a;
	}
	delete(e) {
		var t = this.#e, n = t.get(e), r = super.delete(e);
		return n !== void 0 && (t.delete(e), O(n, -1)), r && (O(this.#n, super.size), g(this.#t)), r;
	}
	clear() {
		if (super.size !== 0) {
			super.clear();
			var e = this.#e;
			O(this.#n, 0);
			for (var t of e.values()) O(t, -1);
			g(this.#t), e.clear();
		}
	}
	#a() {
		E(this.#t);
		var e = this.#e;
		if (this.#n.v !== e.size) {
			for (var t of super.keys()) if (!e.has(t)) {
				var n = this.#i(0);
				e.set(t, n);
			}
		}
		for ([, n] of this.#e) E(n);
	}
	keys() {
		return E(this.#t), super.keys();
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
		return E(this.#n), super.size;
	}
}, K = A(new G()), pe = _(K, (e) => [...e].reduce((e, [, t]) => e + (t.get("del")?.length ?? 0), 0)), me = a("<td class=\"compSumSpin\"><span class=\"fshSpinner fshSpinner12\"></span></td>"), he = a("<td><!></td>"), ge = a("<tr><td><img class=\"tip-dynamic\" alt=\"component\"/></td><td> </td><!></tr>"), _e = a("<tr><td class=\"compDel svelte-1phdchv\" colspan=\"3\">Deleted</td></tr>");
function ve(e, t) {
	T(t, !0);
	let n = () => w(K, "$compStore", a), [a, o] = h(), s = j(() => n().get(t.itemId)), c = !0, l = ne(), p = (e) => `${re}items/${e.get("b")}.gif`, g = (e) => `fetchitem.php?item_id=${e.get("b")}&inv_id=${e.get("a")}&t=2&p=${l}&vcode=${e.get("v")}`;
	function _() {
		c && (c = !1, F("components", "delType"), t.dispatchDelType(t.itemId));
	}
	var v = f(), x = k(v), S = (e) => {
		var t = ge(), n = y(t), a = C(n), o = D(n), c = C(o, !0), l = D(o), f = (e) => {
			var t = me();
			r(e, t);
		}, h = j(() => E(s).get("delPending")), v = (e) => {
			var t = he(), n = y(t);
			I(n, {
				onclick: _,
				children: (e, t) => {
					M();
					var n = d("Del");
					r(e, n);
				},
				$$slots: { default: !0 }
			}), P(t), r(e, t);
		};
		i(l, (e) => {
			E(h) ? e(f) : e(v, -1);
		}), P(t), m((e, t, n) => {
			N(a, "src", e), N(a, "data-tipped", t), u(c, n);
		}, [
			() => p(E(s)),
			() => g(E(s)),
			() => E(s).get("del").length
		]), r(e, t);
	}, O = j(() => E(s).get("del").length), A = (e) => {
		var t = _e();
		r(e, t);
	};
	i(x, (e) => {
		E(O) ? e(S) : e(A, -1);
	}), r(e, v), b(), o();
}
// src/modules/profile/components/getAsyncData.js
async function ye(e) {
	let t = await e();
	if (!t?.s) throw Error(t?.e?.message ?? "Unknown Error");
	return t;
}
// src/modules/profile/components/Count.svelte
var be = a("<div><table class=\"fshTblCenter\"><thead><tr><th colspan=\"3\">Component Summary</th></tr><tr><th>Total:</th><th colspan=\"2\"> </th></tr></thead><tbody></tbody></table></div>"), xe = a("<p style=\"color: red\"> </p>"), Se = a("<div class=\"compSumSpin\"><span class=\"fshSpinner fshSpinner12\"></span></div>");
function Ce(e, t) {
	T(t, !0);
	let n = () => w(pe, "$total", i), [i, a] = h();
	function s(e) {
		return new G(ie(e));
	}
	function l(e) {
		let t = new G(L(e, "b").map((t) => [t.b, s({
			...t,
			del: e.filter(({ b: e }) => e === t.b).map(({ a: e }) => e),
			delPending: !1
		})]));
		return K.set(t), [...t.keys()];
	}
	async function d() {
		let e = await ye(te);
		return {
			rollup: l(e.r),
			maxComp: e.h?.p.find(({ k: e }) => e === 56)?.v
		};
	}
	var p = f(), g = k(p);
	o(g, d, (e) => {
		var t = Se();
		r(e, t);
	}, (e, i) => {
		var a = j(() => {
			var { rollup: e, maxComp: t } = E(i);
			return {
				rollup: e,
				maxComp: t
			};
		}), o = j(() => E(a).rollup), s = j(() => E(a).maxComp), l = be(), d = y(l), f = y(d), p = D(y(f)), h = D(y(p)), g = C(h);
		P(p), P(f);
		var _ = D(f);
		c(_, 20, () => E(o), (e) => e, (e, n) => {
			ve(e, {
				get dispatchDelType() {
					return t.dispatchDelType;
				},
				get itemId() {
					return n;
				}
			});
		}), P(_), P(d), P(l), m(() => u(g, `${n() ?? ""} / ${E(s) ?? ""}`)), r(e, l);
	}, (e, t) => {
		var n = xe(), i = C(n, !0);
		m(() => u(i, E(t).message)), r(e, n);
	}), r(e, p), b(), a();
}
// src/modules/profile/components/Components.svelte
var q = a("<div><!></div>"), we = a("<div><svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper></div>"), Te = a("<div class=\"fshCenter\"><!> <!> <div><!></div> <!></div>");
function Ee(e, t) {
	T(t, !0);
	let n = S(void 0), a = S(void 0), o = !0, s = !0, c = !0;
	function u() {
		o && (o = !1, F("components", "enableQuickDel"), O(n, !0), t.dispatchQuickDel());
	}
	function f() {
		s && (s = !1, F("components", "countComponents"), O(a, !0));
	}
	function p() {
		F("components", "insertQuickExtract"), ee();
	}
	function m() {
		c && (c = !1, F("components", "deleteAllVisible"), t.dispatchDelete());
	}
	var h = Te(), g = y(h), _ = (e) => {
		var t = q(), n = y(t);
		I(n, {
			onclick: u,
			children: (e, t) => {
				M();
				var n = d("Enable Quick Del");
				r(e, n);
			},
			$$slots: { default: !0 }
		}), P(t), r(e, t);
	};
	i(g, (e) => {
		E(n) || e(_);
	});
	var v = D(g, 2), x = (e) => {
		var t = q(), n = y(t);
		I(n, {
			onclick: f,
			children: (e, t) => {
				M();
				var n = d("Count Components");
				r(e, n);
			},
			$$slots: { default: !0 }
		}), P(t), r(e, t);
	}, C = (e) => {
		Ce(e, { get dispatchDelType() {
			return t.dispatchDelType;
		} });
	};
	i(v, (e) => {
		E(a) ? e(C, -1) : e(x);
	});
	var w = D(v, 2), k = y(w);
	I(k, {
		onclick: p,
		children: (e, t) => {
			M();
			var n = d("Quick Extract");
			r(e, n);
		},
		$$slots: { default: !0 }
	}), P(w);
	var A = D(w, 2), j = (e) => {
		var t = we(), n = y(t);
		l(n, () => ({ "--button-color": "red" })), I(n.lastChild, {
			onclick: m,
			children: (e, t) => {
				M();
				var n = d("Delete All Visible");
				r(e, n);
			},
			$$slots: { default: !0 }
		}), P(n), P(t), r(e, t);
	};
	i(A, (e) => {
		E(n) && e(j);
	}), P(h), r(e, h), b();
}
// src/modules/app/profile/destroycomponent.js
function De(e) {
	return se({
		subcmd: "destroycomponent",
		removeIndex: e
	});
}
// src/modules/_dataAccess/daDestroyComponent.js
function Oe(e, t) {
	let n = ce(t);
	return {
		r: n === "Component destroyed." ? 0 : 1,
		m: n,
		c: e
	};
}
async function J(e) {
	let t = await oe({
		cmd: "profile",
		subcmd: "destroycomponent",
		component_id: e
	});
	return t ? Oe(e, t) : { s: !1 };
}
function ke(e) {
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
async function Ae(e) {
	return ke(await z(e.map(J)));
}
function je(e) {
	return le(De, Ae, e);
}
// src/modules/profile/components/deleteBatch.js
function Me(e, t) {
	if (!t) return;
	let n = t.get("del").filter((t) => !e.includes(t));
	t.set("del", n);
}
function Ne(e, t) {
	K.update((n) => (Me(t, n.get(e)), n));
}
function Pe(e, t, n) {
	K.update((r) => (r.get(e)?.set(t, n), r));
}
function Fe(e) {
	if (!e) return;
	let t = e.children[0];
	return t.replaceWith(V({
		className: "compSumSpin",
		innerHTML: "<span class=\"fshSpinner fshSpinner12\"></span>"
	})), t;
}
function Y(e, t) {
	Pe(t, "delPending", e);
}
function Ie(e) {
	e.forEach(([e, t]) => {
		t && e.children[0].replaceWith(t);
	});
}
var Le = (e) => e.forEach(([e]) => e?.children[0]?.remove()), Re = (e) => e.map(([e]) => [e, Fe(e)]), ze = ([, e]) => e, X = (e) => L(e.map(ze)), Z = ([, , e]) => e, Be = (e) => X(e).map((t) => [t, e.filter(([, e]) => e === t).map(Z)]), Ve = (e) => Ne(...e);
async function He(e) {
	let t = Re(e), n = await je(e.map(Z));
	n?.s ? (Be(e).forEach(Ve), Le(t)) : (B(n?.e?.message ?? "Unknown Error"), Ie(t));
}
async function Q(e) {
	let t = X(e);
	t.forEach(n(Y, !0)), await z(H(30, e).map(He)), t.forEach(n(Y, !1));
}
// src/modules/profile/components/getProps.js
function $(e) {
	let { itemId: t, invId: n } = U(W, e.dataset.tipped);
	return [Number(t), Number(n)];
}
// src/modules/profile/components/dispatchDelete.js
var Ue = (e) => [R(e), ...$(e)];
function We(e) {
	Q(ae("img", e).map(Ue));
}
// src/modules/profile/components/dispatchDelType.js
var Ge = (e) => x(K).get(e).get("del"), Ke = (e, t) => R(ue(`img[data-tipped*="&inv_id=${t}&"]`, e));
function qe(e, t) {
	Q(Ge(t).map((n) => [
		Ke(e, n),
		t,
		n
	]));
}
// src/modules/profile/components/dispatchQuickDel.js
function Je(e) {
	e.target.tagName === "IMG" && (e.preventDefault(), F("components", "quickDel"), de(e.target), Q([[R(e.target), ...$(e.target)]]));
}
function Ye(e) {
	e.classList.add("fshQuickDel"), fe(e, Je);
}
// src/modules/profile/components/components.js
function Xe() {
	let n = e("profileRightColumn"), r = t("inventory-table", n);
	if (r.length === 2) return r[1];
}
function Ze() {
	let e = Xe();
	e && s(Ee, {
		props: {
			dispatchDelete: n(We, e),
			dispatchDelType: n(qe, e),
			dispatchQuickDel: n(Ye, e)
		},
		target: e.parentNode
	});
}
export { Ze as default };

//# sourceMappingURL=components-CsU0REFv.js.map