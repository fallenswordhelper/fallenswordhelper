import { t as e } from "./getElementById-DgC-_E5u.js";
import { t } from "./system-DeHfCtq2.js";
import { $ as n } from "./constants-CIKidKvt.js";
import { t as r } from "./querySelector-8FH1hhUv.js";
import { A as i, B as a, D as o, F as s, I as c, J as l, N as u, O as d, P as f, Q as p, T as m, U as h, W as g, X as _, Y as v, _t as y, at as b, ct as x, dt as S, et as C, gt as w, it as T, j as E, k as D, lt as O, nt as k, p as A, rt as j, st as M, tt as N, ut as P } from "./disclose-version-Bvjv4_yw.js";
import "./index-client-Ognjo7Vg.js";
import { t as F } from "./dynamicAlert-DtHqMIea.js";
import { t as I } from "./partial-CYzPXpZP.js";
import { t as L } from "./sendEvent-DFQy5lFi.js";
import { t as ee } from "./entries-CiJ6YMwx.js";
import { t as te } from "./createDiv-CH3rNL4c.js";
import { t as ne } from "./getElementsByClassName-Do7Dx9EW.js";
import { t as re } from "./quickExtract-CbE83Wph.js";
import { t as ie } from "./_dataAccess-Cm9xXxBc.js";
import { t as ae } from "./indexAjaxDoc-BNgfSQTJ.js";
import { t as R } from "./infoBox-CqlNbC9M.js";
import { t as z } from "./profile-DolCHxvz.js";
import { t as oe } from "./onclick-8ZwMJyqI.js";
import { t as se } from "./querySelectorArray-Bdj4peIm.js";
import { t as ce } from "./regExpGroups-BIQtVEST.js";
import { t as B } from "./uniq-BIFd13I0.js";
import { t as V } from "./all-Csir9X7x.js";
import { t as H } from "./hideQTip-C_38AHJv.js";
import { t as U } from "./LinkBtnBracketed-gMsPs3Lo.js";
import { t as W } from "./playerId-CffVNjD0.js";
import { t as G } from "./closestTd-B6S4IM7U.js";
import { t as le } from "./chunk-BRn3bpie.js";
import { t as ue } from "./daComponents-DVZiAtQ6.js";
//#region node_modules/svelte/src/reactivity/map.js
var K = class extends Map {
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ k(0);
	#n = /* @__PURE__ */ k(0);
	#r = h || -1;
	constructor(e) {
		if (super(), e) {
			for (var [t, n] of e) super.set(t, n);
			this.#n.v = super.size;
		}
	}
	#i(e) {
		return h === this.#r ? /* @__PURE__ */ k(e) : N(e);
	}
	has(e) {
		var t = this.#e, n = t.get(e);
		if (n === void 0) if (super.has(e)) n = this.#i(0), t.set(e, n);
		else return a(this.#t), !1;
		return a(n), !0;
	}
	forEach(e, t) {
		this.#a(), super.forEach(e, t);
	}
	get(e) {
		var t = this.#e, n = t.get(e);
		if (n === void 0) if (super.has(e)) n = this.#i(0), t.set(e, n);
		else {
			a(this.#t);
			return;
		}
		return a(n), super.get(e);
	}
	set(e, t) {
		var n = this.#e, r = n.get(e), i = super.get(e), a = super.set(e, t), o = this.#t;
		if (r === void 0) r = this.#i(0), n.set(e, r), C(this.#n, super.size), p(o);
		else if (i !== t) {
			p(r);
			var s = o.reactions === null ? null : new Set(o.reactions);
			(s === null || !r.reactions?.every((e) => s.has(e))) && p(o);
		}
		return a;
	}
	delete(e) {
		var t = this.#e, n = t.get(e), r = super.delete(e);
		return n !== void 0 && (t.delete(e), C(n, -1)), r && (C(this.#n, super.size), p(this.#t)), r;
	}
	clear() {
		if (super.size !== 0) {
			super.clear();
			var e = this.#e;
			C(this.#n, 0);
			for (var t of e.values()) C(t, -1);
			p(this.#t), e.clear();
		}
	}
	#a() {
		a(this.#t);
		var e = this.#e;
		if (this.#n.v !== e.size) {
			for (var t of super.keys()) if (!e.has(t)) {
				var n = this.#i(0);
				e.set(t, n);
			}
		}
		for ([, n] of this.#e) a(n);
	}
	keys() {
		return a(this.#t), super.keys();
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
		return a(this.#n), super.size;
	}
}, q = O(new K()), de = M(q, (e) => [...e].reduce((e, [, t]) => e + (t.get("del")?.length ?? 0), 0)), fe = s("<td class=\"compSumSpin\"><span class=\"fshSpinner fshSpinner12\"></span></td>"), pe = s("<td><!></td>"), me = s("<tr><td><img class=\"tip-dynamic\" alt=\"component\"/></td><td> </td><!></tr>"), he = s("<tr><td class=\"compDel svelte-1phdchv\" colspan=\"3\">Deleted</td></tr>");
function ge(e, n) {
	S(n, !0);
	let r = () => b(q, "$compStore", i), [i, o] = T(), s = j(() => r().get(n.itemId)), p = !0, m = W(), h = (e) => `${t}items/${e.get("b")}.gif`, x = (e) => `fetchitem.php?item_id=${e.get("b")}&inv_id=${e.get("a")}&t=2&p=${m}&vcode=${e.get("v")}`;
	function C() {
		p && (p = !1, L("components", "delType"), n.dispatchDelType(n.itemId));
	}
	var D = f(), O = v(D), k = (e) => {
		var t = me(), n = l(t), r = l(n);
		y(n);
		var i = _(n), o = l(i, !0);
		y(i);
		var f = _(i), p = (e) => {
			u(e, fe());
		}, m = j(() => a(s).get("delPending")), v = (e) => {
			var t = pe();
			U(l(t), {
				onclick: C,
				children: (e, t) => {
					w(), u(e, c("Del"));
				},
				$$slots: { default: !0 }
			}), y(t), u(e, t);
		};
		d(f, (e) => {
			a(m) ? e(p) : e(v, -1);
		}), y(t), g((e, t, n) => {
			A(r, "src", e), A(r, "data-tipped", t), E(o, n);
		}, [
			() => h(a(s)),
			() => x(a(s)),
			() => a(s).get("del").length
		]), u(e, t);
	}, M = j(() => a(s).get("del").length), N = (e) => {
		u(e, he());
	};
	d(O, (e) => {
		a(M) ? e(k) : e(N, -1);
	}), u(e, D), P(), o();
}
//#endregion
//#region src/modules/profile/components/getAsyncData.js
async function _e(e) {
	let t = await e();
	if (!t?.s) throw Error(t?.e?.message ?? "Unknown Error");
	return t;
}
//#endregion
//#region src/modules/profile/components/Count.svelte
var ve = s("<div><table class=\"fshTblCenter\"><thead><tr><th colspan=\"3\">Component Summary</th></tr><tr><th>Total:</th><th colspan=\"2\"> </th></tr></thead><tbody></tbody></table></div>"), ye = s("<p style=\"color: red\"> </p>"), be = s("<div class=\"compSumSpin\"><span class=\"fshSpinner fshSpinner12\"></span></div>");
function xe(e, t) {
	S(t, !0);
	let n = () => b(de, "$total", r), [r, i] = T();
	function o(e) {
		return new K(ee(e));
	}
	function s(e) {
		let t = new K(B(e, "b").map((t) => [t.b, o({
			...t,
			del: e.filter(({ b: e }) => e === t.b).map(({ a: e }) => e),
			delPending: !1
		})]));
		return q.set(t), [...t.keys()];
	}
	async function c() {
		let e = await _e(ue);
		return {
			rollup: s(e.r),
			maxComp: e.h?.p.find(({ k: e }) => e === 56)?.v
		};
	}
	var d = f();
	D(v(d), c, (e) => {
		u(e, be());
	}, (e, r) => {
		var i = j(() => {
			var { rollup: e, maxComp: t } = a(r);
			return {
				rollup: e,
				maxComp: t
			};
		}), o = j(() => a(i).rollup), s = j(() => a(i).maxComp), c = ve(), d = l(c), f = l(d), p = _(l(f)), h = _(l(p)), v = l(h);
		y(h), y(p), y(f);
		var b = _(f);
		m(b, 20, () => a(o), (e) => e, (e, n) => {
			ge(e, {
				get dispatchDelType() {
					return t.dispatchDelType;
				},
				get itemId() {
					return n;
				}
			});
		}), y(b), y(d), y(c), g(() => E(v, `${n() ?? ""} / ${a(s) ?? ""}`)), u(e, c);
	}, (e, t) => {
		var n = ye(), r = l(n, !0);
		y(n), g(() => E(r, a(t).message)), u(e, n);
	}), u(e, d), P(), i();
}
//#endregion
//#region src/modules/profile/components/Components.svelte
var Se = s("<div><!></div>"), Ce = s("<div><!></div>"), we = s("<div><svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper></div>"), Te = s("<div class=\"fshCenter\"><!> <!> <div><!></div> <!></div>");
function Ee(e, t) {
	S(t, !0);
	let n = k(void 0), r = k(void 0), i = !0, s = !0, f = !0;
	function p() {
		i && (i = !1, L("components", "enableQuickDel"), C(n, !0), t.dispatchQuickDel());
	}
	function m() {
		s && (s = !1, L("components", "countComponents"), C(r, !0));
	}
	function h() {
		L("components", "insertQuickExtract"), re();
	}
	function g() {
		f && (f = !1, L("components", "deleteAllVisible"), t.dispatchDelete());
	}
	var v = Te(), b = l(v), x = (e) => {
		var t = Se();
		U(l(t), {
			onclick: p,
			children: (e, t) => {
				w(), u(e, c("Enable Quick Del"));
			},
			$$slots: { default: !0 }
		}), y(t), u(e, t);
	};
	d(b, (e) => {
		a(n) || e(x);
	});
	var T = _(b, 2), E = (e) => {
		var t = Ce();
		U(l(t), {
			onclick: m,
			children: (e, t) => {
				w(), u(e, c("Count Components"));
			},
			$$slots: { default: !0 }
		}), y(t), u(e, t);
	}, D = (e) => {
		xe(e, { get dispatchDelType() {
			return t.dispatchDelType;
		} });
	};
	d(T, (e) => {
		a(r) ? e(D, -1) : e(E);
	});
	var O = _(T, 2);
	U(l(O), {
		onclick: h,
		children: (e, t) => {
			w(), u(e, c("Quick Extract"));
		},
		$$slots: { default: !0 }
	}), y(O);
	var A = _(O, 2), j = (e) => {
		var t = we(), n = l(t);
		o(n, () => ({ "--button-color": "red" })), U(n.lastChild, {
			onclick: g,
			children: (e, t) => {
				w(), u(e, c("Delete All Visible"));
			},
			$$slots: { default: !0 }
		}), y(n), y(t), u(e, t);
	};
	d(A, (e) => {
		a(n) && e(j);
	}), y(v), u(e, v), P();
}
//#endregion
//#region src/modules/app/profile/destroycomponent.js
function De(e) {
	return z({
		subcmd: "destroycomponent",
		removeIndex: e
	});
}
//#endregion
//#region src/modules/_dataAccess/daDestroyComponent.js
function Oe(e, t) {
	let n = R(t);
	return {
		r: n === "Component destroyed." ? 0 : 1,
		m: n,
		c: e
	};
}
async function J(e) {
	let t = await ae({
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
	return ke(await V(e.map(J)));
}
function je(e) {
	return ie(De, Ae, e);
}
//#endregion
//#region src/modules/profile/components/deleteBatch.js
function Me(e, t) {
	if (!t) return;
	let n = t.get("del").filter((t) => !e.includes(t));
	t.set("del", n);
}
function Ne(e, t) {
	q.update((n) => (Me(t, n.get(e)), n));
}
function Pe(e, t, n) {
	q.update((r) => (r.get(e)?.set(t, n), r));
}
function Fe(e) {
	if (!e) return;
	let t = e.children[0];
	return t.replaceWith(te({
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
var Le = (e) => e.forEach(([e]) => e?.children[0]?.remove()), Re = (e) => e.map(([e]) => [e, Fe(e)]), ze = ([, e]) => e, X = (e) => B(e.map(ze)), Z = ([, , e]) => e, Be = (e) => X(e).map((t) => [t, e.filter(([, e]) => e === t).map(Z)]), Ve = (e) => Ne(...e);
async function He(e) {
	let t = Re(e), n = await je(e.map(Z));
	n?.s ? (Be(e).forEach(Ve), Le(t)) : (F(n?.e?.message ?? "Unknown Error"), Ie(t));
}
async function Q(e) {
	let t = X(e);
	t.forEach(I(Y, !0)), await V(le(30, e).map(He)), t.forEach(I(Y, !1));
}
//#endregion
//#region src/modules/profile/components/getProps.js
function $(e) {
	let { itemId: t, invId: r } = ce(n, e.dataset.tipped);
	return [Number(t), Number(r)];
}
//#endregion
//#region src/modules/profile/components/dispatchDelete.js
var Ue = (e) => [G(e), ...$(e)];
function We(e) {
	Q(se("img", e).map(Ue));
}
//#endregion
//#region src/modules/profile/components/dispatchDelType.js
var Ge = (e) => x(q).get(e).get("del"), Ke = (e, t) => G(r(`img[data-tipped*="&inv_id=${t}&"]`, e));
function qe(e, t) {
	Q(Ge(t).map((n) => [
		Ke(e, n),
		t,
		n
	]));
}
//#endregion
//#region src/modules/profile/components/dispatchQuickDel.js
function Je(e) {
	e.target.tagName === "IMG" && (e.preventDefault(), L("components", "quickDel"), H(e.target), Q([[G(e.target), ...$(e.target)]]));
}
function Ye(e) {
	e.classList.add("fshQuickDel"), oe(e, Je);
}
//#endregion
//#region src/modules/profile/components/components.js
function Xe() {
	let t = ne("inventory-table", e("profileRightColumn"));
	if (t.length === 2) return t[1];
}
function Ze() {
	let e = Xe();
	e && i(Ee, {
		props: {
			dispatchDelete: I(We, e),
			dispatchDelType: I(qe, e),
			dispatchQuickDel: I(Ye, e)
		},
		target: e.parentNode
	});
}
//#endregion
export { Ze as default };

//# sourceMappingURL=components-CmgkAr9S.js.map