import { A as e, B as t, D as n, F as r, G as i, H as a, I as o, K as s, L as c, M as l, N as u, Q as d, R as f, S as p, St as m, T as h, V as g, W as _, Z as v, _ as y, et as b, f as x, ft as S, h as C, it as w, lt as T, n as ee, nt as E, p as te, pt as D, q as O, r as k, rt as A, st as j, tt as M, ut as N, v as P, vt as F, w as ne, x as I, yt as L } from "./disclose-version-Cj0Bwtvz.js";
import { t as R } from "./sendEvent-Co2_qySS.js";
import { t as z } from "./ModalTabbed-C_0hI67S.js";
import { t as B } from "./alpha-BRx-EQ4u.js";
import { t as V } from "./entries-PXiXtjwA.js";
import { t as H } from "./formatUtcDateTime-BGPMTqhi.js";
import { t as U } from "./fromEntries-BytjDDMx.js";
import { n as W, t as G } from "./isUndefined-CH45qJXY.js";
import { t as K } from "./keys-Ch_1-2o8.js";
import { t as q } from "./indexConstants-DNkt8oVH.js";
import { t as J } from "./guildMembers-CPbT3-Re.js";
import { t as Y } from "./all-D5SlTl7_.js";
import { t as X } from "./currentGuildId-Bpd4l1O8.js";
import { t as re } from "./download-CTav-qqG.js";
import { n as ie, r as Z } from "./idb-D8xqEbs-.js";
import { t as Q } from "./padZ-HTo14JN-.js";
import { t as ae } from "./clickThis-UHuK6eKQ.js";
import { t as oe } from "./jsonStringify-DbCVtu3B.js";
import { t as se } from "./jsonParse-CTM1cd4F.js";
import { t as ce } from "./numberIsNaN-DNn4rI1u.js";
import { t as le } from "./uniq-DgWt7KlP.js";
// src/modules/common/VirtualScroll.svelte
var ue = a("<div></div>"), de = a("<div> </div>"), fe = a("<virtual-scroll-item><!></virtual-scroll-item>", 2), pe = a("<virtual-scroll-viewport><virtual-scroll-content><!> <!> <!></virtual-scroll-content></virtual-scroll-viewport>", 2);
function me(i, a) {
	D(a, !0);
	let o = k(a, "items", 19, () => []), c = k(a, "overscan", 3, 5), u = k(a, "scrollToIndex", 15);
	function p(e, { index: t, updateItemHeight: n }) {
		function r() {
			let r = e.offsetHeight;
			r > 0 && n(t, r);
		}
		let i = new ResizeObserver(r);
		return i.observe(e), r(), { destroy() {
			i.disconnect();
		} };
	}
	let m = T(0), _ = T(0), y = T(void 0), C = T(0), w = T(!1), P = [], F = [], I = 50, R = T(0), z = !1, B = !1, V = !1, H, U = N(() => o().slice(O(m), O(_)).map((e, t) => ({
		index: t + O(m),
		item: e
	}))), W = N(() => K(O(m))), G = N(() => O(_) >= o().length ? 0 : O(R) - K(O(_)));
	function K(e) {
		if (!P.length) return e * I;
		if (F[e] !== void 0) return F[e];
		let t = 0;
		for (let n = 0; n < e; n++) t += P[n] || I;
		return t;
	}
	function q(e, t) {
		P[e] !== t && (P[e] = t, !z && !V && (z = !0, requestAnimationFrame(() => {
			z = !1, J();
		})));
	}
	function J() {
		let e = 0, t = 0;
		F = [], j(R, 0);
		for (let n = 0; n < o().length; n++) {
			F[n] = O(R);
			let r = P[n];
			r > 0 ? (e++, t += r, j(R, O(R) + r)) : j(R, O(R) + I);
		}
		if (e > 0 && (I = t / e), O(w) && O(C) > 0) {
			let e = O(y)?.scrollTop || 0, t = Y(e), n = X(t, e, O(C));
			j(m, t, !0), j(_, n, !0);
		}
	}
	function Y(e) {
		if (!O(w) || !o().length) return 0;
		if (F.length) {
			let t = 0, n = o().length - 1;
			for (; t < n;) {
				let r = Math.floor((t + n) / 2);
				F[r] + (P[r] || I) > e ? n = r : t = r + 1;
			}
			return Math.max(0, t - c());
		}
		return 0;
	}
	function X(e, t, n) {
		if (!O(w) || !o().length) return 0;
		let r = t + n;
		for (let t = e; t < o().length; t++) if ((F[t] || t * I) > r) return Math.min(o().length, t + c());
		return o().length;
	}
	function re() {
		O(w) && !B && (V = !0, clearTimeout(H), H = setTimeout(() => {
			V = !1;
		}, 150), B = !0, requestAnimationFrame(() => {
			B = !1;
			let e = O(y).scrollTop, t = Y(e), n = X(t, e, O(C));
			(O(m) !== t || O(_) !== n) && (j(m, t, !0), j(_, n, !0));
		}));
	}
	function ie(e, t = "smooth") {
		if (!O(w) || e < 0 || e >= o().length) return;
		let n = K(e);
		O(y).scrollTo({
			top: n,
			behavior: t
		});
	}
	ee(() => {
		j(w, !0);
	}), d(() => {
		o().length && O(w) && (P = Array(o().length).fill(0), j(R, o().length * I), j(m, 0), j(_, Math.min(o().length, c() * 4), !0));
	}), d(() => {
		if (O(C) > 0 && O(w)) {
			let e = O(y)?.scrollTop || 0, t = Y(e), n = X(t, e, O(C));
			j(m, t, !0), j(_, n, !0);
		}
	}), d(() => {
		u() !== void 0 && O(w) && (ie(u()), u(void 0));
	});
	var Z = pe();
	h(Z, 1, "svelte-jpynml");
	var Q = b(Z);
	h(Q, 1, "svelte-jpynml");
	var ae = b(Q), oe = (e) => {
		var n = ue();
		v(() => ne(n, `height: ${O(W) ?? ""}px;`)), t(e, n);
	};
	r(ae, (e) => {
		O(W) > 0 && e(oe);
	});
	var se = A(ae, 2);
	l(se, 17, () => O(U), ({ index: e, item: t }) => e, (i, o) => {
		let s = () => O(o).index, c = () => O(o).item;
		var l = fe();
		h(l, 1, "svelte-jpynml");
		var u = b(l), d = (n) => {
			var r = g(), i = M(r);
			e(i, () => a.children, () => ({
				item: c(),
				index: s()
			})), t(n, r);
		}, m = (e) => {
			var n = de(), r = E(n);
			v(() => f(r, `Item ${s() ?? ""}`)), t(e, n);
		};
		r(u, (e) => {
			a.children ? e(d) : e(m, -1);
		}), L(l), n(l, (e, t) => p?.(e, t), () => ({
			index: s(),
			updateItemHeight: q
		})), t(i, l);
	});
	var ce = A(se, 2), le = (e) => {
		var n = ue();
		v(() => ne(n, `height: ${O(G) ?? ""}px;`)), t(e, n);
	};
	r(ce, (e) => {
		O(G) > 0 && e(le);
	}), L(Q), L(Z), x(Z, (e) => j(y, e), () => O(y)), s("scroll", Z, re), te(Z, "offsetHeight", (e) => j(C, e)), t(i, Z), S();
}
// src/modules/notepad/guildTracker/utils.js
async function $() {
	return await ie("fsh_guildActivity") ?? {
		lastUpdate: 0,
		members: {}
	};
}
var he = (e) => H(/* @__PURE__ */ new Date(e * 1e3)), ge = (e) => [
	e[0],
	e[1],
	e[2],
	e[3],
	he(e[4]),
	e[5],
	e[6]
], _e = (e) => ([t, n]) => n.map(ge).map((n) => [
	e,
	t,
	...n
].join(",")), ve = "Last Update,Member,Last Activity,Stam,Level,Max Stam,Date,VL,GXP\n";
function ye(e) {
	let { lastUpdate: t, members: n } = e;
	return `${ve}${V(n).flatMap(_e(he(t))).join("\n")}`;
}
var be = (e) => `${e[0]}${e[1]}${e[2]}${e[3]}${e[4]}${e[5]}`, xe = [
	(e) => e.getFullYear().toString(),
	(e) => e.getMonth() + 1,
	(e) => e.getDate(),
	(e) => e.getHours(),
	(e) => e.getMinutes(),
	(e) => e.getSeconds()
], Se = (e) => (t) => t(e);
function Ce() {
	return be(xe.map(Se(/* @__PURE__ */ new Date())).map(Q));
}
async function we(e, t) {
	let n = await $();
	if (!n.lastUpdate || !n.members) return;
	let r = e(n), i = new Blob([r], { type: t }), a = `${Ce()}_GuildTracker.${t.split("/")[1]}`;
	re(i, a);
}
async function Te(e) {
	let t = await $(), n = {
		lastUpdate: t.lastUpdate,
		members: U(V(t.members).filter(([t]) => t !== e))
	};
	Z(q, n);
}
async function Ee(e) {
	let t = await $(), n = {
		lastUpdate: t.lastUpdate,
		members: U(V(t.members).map(([t, n]) => [t, n.filter((t) => t[4] > e)]))
	};
	Z(q, n);
}
var De = (e) => (t) => !e.find((e) => e === t);
async function Oe() {
	let [e, t] = await Y([$(), J(X())]), n = t.map(({ username: e }) => e);
	return K(e.members).filter(De(n)).sort(B);
}
// src/modules/notepad/guildTracker/GuildTracker.svelte
var ke = "", Ae = a("<option> </option>"), je = a("<div class=\"grid-row svelte-1bj4gm2\"><div class=\"svelte-1bj4gm2\"> </div> <div class=\"svelte-1bj4gm2\"> </div> <div class=\"svelte-1bj4gm2\"> </div> <div class=\"svelte-1bj4gm2\"> </div> <div class=\"svelte-1bj4gm2\"> </div> <div class=\"svelte-1bj4gm2\"> </div> <div class=\"svelte-1bj4gm2\"> </div> <div class=\"svelte-1bj4gm2\"> </div> <div class=\"svelte-1bj4gm2\"> </div></div>"), Me = a("<div class=\"grid-row head svelte-1bj4gm2\"><div class=\"svelte-1bj4gm2\">Date</div> <div class=\"svelte-1bj4gm2\">Member <select class=\"svelte-1bj4gm2\"></select></div> <div class=\"svelte-1bj4gm2\">Level</div> <div class=\"svelte-1bj4gm2\">VL</div> <div class=\"svelte-1bj4gm2\">Stam</div> <div class=\"svelte-1bj4gm2\">Max Stam</div> <div class=\"svelte-1bj4gm2\">Stam %</div> <div class=\"svelte-1bj4gm2\">Last Activity (Days)</div> <div class=\"svelte-1bj4gm2\">GXP</div></div> <div class=\"items svelte-1bj4gm2\"><!></div>", 1), Ne = a("<div class=\"fsh-guild-tracker svelte-1bj4gm2\"><!></div>");
function Pe(e, n) {
	D(n, !0);
	let r = T(w({})), a = T(w([])), s = T(""), c = N(() => O(r)?.[O(s)] ?? []), d = (e) => U(V(e).map(([e, t]) => [e, [...t].sort((e, t) => t[4] - e[4])]));
	async function h() {
		let e = await $();
		j(r, d(e.members), !0), j(a, K(O(r)).sort(B), !0), ke ? j(s, ke, !0) : ((e) => {
			var t = m(e, 1);
			j(s, t[0], !0);
		})(O(a));
	}
	function g() {
		R("Guild Tracker", "handleChange"), ke = O(s);
	}
	function _(e) {
		return G(e) ? "#DEF" : W(e) ? "null" : e.toLocaleString();
	}
	var y = Ne(), x = b(y);
	o(x, h, null, (e) => {
		var n = Me(), r = M(n), o = A(b(r), 2), d = A(b(o));
		l(d, 21, () => O(a), u, (e, n) => {
			var r = Ae(), i = E(r, !0), a = {};
			v(() => {
				f(i, O(n)), a !== (a = O(n)) && (r.value = (r.__value = a) ?? "");
			}), t(e, r);
		}), L(d), p(d), L(o), F(14), L(r);
		var m = A(r, 2);
		me(b(m), {
			get items() {
				return O(c);
			},
			children: (e, n) => {
				let r = () => (n?.()).item;
				var i = je(), a = b(i), o = E(a, !0), c = A(a, 2), l = E(c, !0), u = A(c, 2), d = E(u, !0), p = A(u, 2), m = E(p, !0), h = A(p, 2), g = E(h, !0), y = A(h, 2), x = E(y, !0), S = A(y, 2), C = E(S, !0), w = A(S, 2), T = E(w, !0), ee = A(w, 2), te = E(ee, !0);
				L(i), v((e, t, n, i, a, c, u) => {
					f(o, e), f(l, O(s)), f(d, t), f(m, n), f(g, i), f(x, a), f(C, c), f(T, r()[0]), f(te, u);
				}, [
					() => H(/* @__PURE__ */ new Date(r()[4] * 1e3)),
					() => _(r()[2]),
					() => _(r()[5]),
					() => _(r()[1]),
					() => _(r()[3]),
					() => Math.floor(r()[1] / r()[3] * 100),
					() => _(r()[6])
				]), t(e, i);
			},
			$$slots: { default: !0 }
		}), L(m), i("change", d, g), I(d, () => O(s), (e) => j(s, e)), t(e, n);
	}), L(y), t(e, y), S();
}
_(["change"]);
// src/modules/notepad/guildTracker/fileImport.js
var Fe = ([e, t]) => t.map((t) => [e, ...t]);
function Ie(e) {
	return V(e?.members ?? {}).flatMap(Fe);
}
function Le(e) {
	let t = se(e), n = Ie(t);
	return [t?.lastUpdate ?? 0, n];
}
var Re = (e) => e.split(","), ze = (e) => Date.parse(`${e.replace(" ", "T")}Z`) / 1e3, Be = ([, e, ...t]) => [
	e,
	Number(t[0]),
	Number(t[1]),
	Number(t[2]),
	Number(t[3]),
	ze(t[4]),
	Number(t[5]),
	Number(t[6])
];
function Ve(e) {
	let t = e.split("\n").slice(1).map(Re);
	return [ze(t[0][0]), t.map(Be)];
}
function He(e) {
	return e.startsWith("{") ? Le(e) : Ve(e);
}
var Ue = (e) => !e.some(W), We = ([, ...e]) => !e.some(ce), Ge = ([, ...e], [, ...t]) => e[4] - t[4], Ke = ([e, ...t]) => [
	e,
	Math.trunc(t[4] / 86400),
	...t
], qe = (e, t) => e.concat(t).filter(Ue).filter(We).sort(Ge).map(Ke), Je = ([e, t]) => `${e}|${t}`, Ye = (e) => e.split("|"), Xe = ([e, t]) => [e, Number(t)], Ze = (e, t) => ([n, r]) => n === e && r === t, Qe = (e) => ([t, n]) => e.find(Ze(t, n)), $e = ([e, , ...t]) => [e, ...t];
function et(e, t) {
	let n = qe(e, t);
	return le(n.map(Je)).map(Ye).map(Xe).map(Qe(n)).map($e);
}
var tt = ([e]) => e, nt = ([, ...e]) => [...e];
function rt(e) {
	return U(le(e.map(tt)).map((t) => [t, e.filter(([e]) => e === t).map(nt)]));
}
async function it(e, t) {
	let [n, r] = await Y([$(), e.text()]), i = t ? [] : Ie(n), [a, o] = He(r), s = et(i, o);
	Z(q, {
		lastUpdate: n.lastUpdate ?? a ?? 0,
		members: rt(s)
	});
}
// src/modules/notepad/guildTracker/Utils.svelte
var at = a("<option class=\"svelte-zcxhfk\"> </option>"), ot = a("<div class=\"svelte-zcxhfk\"><button type=\"button\" class=\"svelte-zcxhfk\">Export JSON</button> <br class=\"svelte-zcxhfk\"/><br class=\"svelte-zcxhfk\"/> <button type=\"button\" class=\"svelte-zcxhfk\">Export CSV</button> <br class=\"svelte-zcxhfk\"/><br class=\"svelte-zcxhfk\"/><br class=\"svelte-zcxhfk\"/> <input accept=\".csv, .json, .txt\" type=\"file\" class=\"svelte-zcxhfk\"/> <button type=\"button\" class=\"svelte-zcxhfk\">Import</button> <label class=\"svelte-zcxhfk\"><input type=\"checkbox\" class=\"svelte-zcxhfk\"/> Overwrite</label> (Warning: This can take a while on large files)<br class=\"svelte-zcxhfk\"/><br class=\"svelte-zcxhfk\"/><br class=\"svelte-zcxhfk\"/> <button type=\"button\" class=\"svelte-zcxhfk\">Purge</button> data before <input type=\"date\" class=\"svelte-zcxhfk\"/><br class=\"svelte-zcxhfk\"/><br class=\"svelte-zcxhfk\"/> <button type=\"button\" class=\"svelte-zcxhfk\">Purge</button> username <select class=\"svelte-zcxhfk\"></select></div>");
function st(e, n) {
	D(n, !0);
	let r = T(0), a = T(0), o = T(""), s = T(w([])), c = T(""), d = T(1), h = N(() => O(o) && Date.parse(O(o)) / 1e3);
	function g() {
		R("Utils", "exportJson"), we(oe, "application/json");
	}
	function _() {
		R("Utils", "exportCsv"), we(ye, "text/csv");
	}
	function ee() {
		R("Utils", "importFile", O(a));
		let [e] = O(r).files;
		it(e, O(a));
	}
	function te() {
		R("Utils", "importButton"), ae(O(r));
	}
	function k() {
		R("Utils", "datePurge"), j(o, ""), Ee(O(h));
	}
	async function M() {
		j(s, await Oe(), !0), O(s).length && (j(d, 0), ((e) => {
			var t = m(e, 1);
			j(c, t[0], !0);
		})(O(s)));
	}
	async function ne() {
		R("Utils", "userPurge"), j(d, 1), await Te(O(c)), j(s, O(s).filter((e) => e !== O(c)), !0), O(s).length && (j(d, 0), ((e) => {
			var t = m(e, 1);
			j(c, t[0], !0);
		})(O(s)));
	}
	M();
	var z = ot(), B = b(z), V = A(B, 5), H = A(V, 6);
	x(H, (e) => j(r, e), () => O(r));
	var U = A(H, 2), W = A(U, 2), G = b(W);
	P(G), F(), L(W);
	var K = A(W, 6), q = A(K, 2);
	P(q);
	var J = A(q, 4), Y = A(J, 2);
	l(Y, 21, () => O(s), u, (e, n) => {
		var r = at(), i = E(r, !0), a = {};
		v(() => {
			f(i, O(n)), a !== (a = O(n)) && (r.value = (r.__value = a) ?? "");
		}), t(e, r);
	}), L(Y), p(Y), L(z), v(() => {
		K.disabled = !O(o), J.disabled = O(d), Y.disabled = O(d);
	}), i("click", B, g), i("click", V, _), i("change", H, ee), i("click", U, te), i("change", G, () => {
		R("Utils", "overwriteToggle");
	}), C(G, () => O(a), (e) => j(a, e)), i("click", K, k), i("change", q, () => {
		R("Utils", "purgeDateChange");
	}), y(q, () => O(o), (e) => j(o, e)), i("click", J, ne), i("change", Y, () => {
		R("Utils", "handleChange");
	}), I(Y, () => O(c), (e) => j(c, e)), t(e, z), S();
}
_(["click", "change"]);
// src/modules/notepad/guildTracker/GuildTrackerModal.svelte
function ct(e, t) {
	D(t, !0);
	let n = k(t, "visible", 15, !0);
	function r() {
		R("Guild Tracker", "close"), n(!1);
	}
	let i = [{
		component: Pe,
		label: "Guild Tracker"
	}, {
		component: st,
		label: "Import/Export"
	}];
	z(e, {
		close: r,
		get tabs() {
			return i;
		},
		get visible() {
			return n();
		}
	}), S();
}
// src/modules/notepad/guildTracker/mountGuildTracker.svelte.js
var lt = w({ visible: !0 }), ut = 0;
function dt() {
	ut ? lt.visible = !0 : ut = c(ct, {
		props: lt,
		target: document.body
	});
}
export { dt as default };

//# sourceMappingURL=mountGuildTracker.svelte-DcnCHQaC.js.map