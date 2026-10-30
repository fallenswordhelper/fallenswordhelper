import { n as e, t } from "./isUndefined-CH45qJXY.js";
import { t as n } from "./jsonParse-CTM1cd4F.js";
import { t as r } from "./jsonStringify-DbCVtu3B.js";
import { A as i, B as a, D as o, F as s, G as c, H as l, I as u, K as d, L as f, M as p, N as m, Q as h, R as g, S as _, St as v, T as y, V as b, W as x, Z as S, _ as C, et as w, f as ee, ft as T, h as E, it as D, lt as O, n as te, nt as k, p as ne, pt as A, q as j, r as M, rt as N, st as P, tt as F, ut as I, v as L, vt as R, w as z, x as B, yt as V } from "./disclose-version-gxrYovMN.js";
import { t as H } from "./sendEvent-DkxfZozg.js";
import { t as U } from "./currentGuildId-WKn2jVcy.js";
import { t as W } from "./entries-PXiXtjwA.js";
import { t as G } from "./alpha-BRx-EQ4u.js";
import { t as K } from "./clickThis-UHuK6eKQ.js";
import { t as q } from "./uniq-DgWt7KlP.js";
import { n as J, r as Y } from "./idb-D8xqEbs-.js";
import { t as X } from "./indexConstants-DNkt8oVH.js";
import { t as Z } from "./fromEntries-BytjDDMx.js";
import { t as re } from "./padZ-HTo14JN-.js";
import { t as Q } from "./all-D5SlTl7_.js";
import { t as ie } from "./numberIsNaN-DNn4rI1u.js";
import { t as ae } from "./download-DtnC4WBW.js";
import { t as oe } from "./formatUtcDateTime-BGPMTqhi.js";
import { t as se } from "./guildMembers-BEmaNqNG.js";
import { t as ce } from "./ModalTabbed-DBcYFU8s.js";
import { t as le } from "./keys-Ch_1-2o8.js";
// src/modules/common/VirtualScroll.svelte
var ue = l("<div></div>"), de = l("<div> </div>"), fe = l("<virtual-scroll-item><!></virtual-scroll-item>", 2), pe = l("<virtual-scroll-viewport><virtual-scroll-content><!> <!> <!></virtual-scroll-content></virtual-scroll-viewport>", 2);
function me(e, t) {
	A(t, !0);
	let n = M(t, "items", 19, () => []), r = M(t, "overscan", 3, 5), c = M(t, "scrollToIndex", 15);
	function l(e, { index: t, updateItemHeight: n }) {
		function r() {
			let r = e.offsetHeight;
			r > 0 && n(t, r);
		}
		let i = new ResizeObserver(r);
		return i.observe(e), r(), { destroy() {
			i.disconnect();
		} };
	}
	let u = O(0), f = O(0), m = O(void 0), _ = O(0), v = O(!1), x = [], C = [], E = 50, D = O(0), L = !1, R = !1, B = !1, H, U = I(() => n().slice(j(u), j(f)).map((e, t) => ({
		index: t + j(u),
		item: e
	}))), W = I(() => K(j(u))), G = I(() => j(f) >= n().length ? 0 : j(D) - K(j(f)));
	function K(e) {
		if (!x.length) return e * E;
		if (C[e] !== void 0) return C[e];
		let t = 0;
		for (let n = 0; n < e; n++) t += x[n] || E;
		return t;
	}
	function q(e, t) {
		x[e] !== t && (x[e] = t, !L && !B && (L = !0, requestAnimationFrame(() => {
			L = !1, J();
		})));
	}
	function J() {
		let e = 0, t = 0;
		C = [], P(D, 0);
		for (let r = 0; r < n().length; r++) {
			C[r] = j(D);
			let n = x[r];
			n > 0 ? (e++, t += n, P(D, j(D) + n)) : P(D, j(D) + E);
		}
		if (e > 0 && (E = t / e), j(v) && j(_) > 0) {
			let e = j(m)?.scrollTop || 0, t = Y(e), n = X(t, e, j(_));
			P(u, t, !0), P(f, n, !0);
		}
	}
	function Y(e) {
		if (!j(v) || !n().length) return 0;
		if (C.length) {
			let t = 0, i = n().length - 1;
			for (; t < i;) {
				let n = Math.floor((t + i) / 2);
				C[n] + (x[n] || E) > e ? i = n : t = n + 1;
			}
			return Math.max(0, t - r());
		}
		return 0;
	}
	function X(e, t, i) {
		if (!j(v) || !n().length) return 0;
		let a = t + i;
		for (let t = e; t < n().length; t++) if ((C[t] || t * E) > a) return Math.min(n().length, t + r());
		return n().length;
	}
	function Z() {
		j(v) && !R && (B = !0, clearTimeout(H), H = setTimeout(() => {
			B = !1;
		}, 150), R = !0, requestAnimationFrame(() => {
			R = !1;
			let e = j(m).scrollTop, t = Y(e), n = X(t, e, j(_));
			(j(u) !== t || j(f) !== n) && (P(u, t, !0), P(f, n, !0));
		}));
	}
	function re(e, t = "smooth") {
		if (!j(v) || e < 0 || e >= n().length) return;
		let r = K(e);
		j(m).scrollTo({
			top: r,
			behavior: t
		});
	}
	te(() => {
		P(v, !0);
	}), h(() => {
		n().length && j(v) && (x = Array(n().length).fill(0), P(D, n().length * E), P(u, 0), P(f, Math.min(n().length, r() * 4), !0));
	}), h(() => {
		if (j(_) > 0 && j(v)) {
			let e = j(m)?.scrollTop || 0, t = Y(e), n = X(t, e, j(_));
			P(u, t, !0), P(f, n, !0);
		}
	}), h(() => {
		c() !== void 0 && j(v) && (re(c()), c(void 0));
	});
	var Q = pe();
	y(Q, 1, "svelte-jpynml");
	var ie = w(Q);
	y(ie, 1, "svelte-jpynml");
	var ae = w(ie), oe = (e) => {
		var t = ue();
		S(() => z(t, `height: ${j(W) ?? ""}px;`)), a(e, t);
	};
	s(ae, (e) => {
		j(W) > 0 && e(oe);
	});
	var se = N(ae, 2);
	p(se, 17, () => j(U), ({ index: e, item: t }) => e, (e, n) => {
		let r = () => j(n).index, c = () => j(n).item;
		var u = fe();
		y(u, 1, "svelte-jpynml");
		var d = w(u), f = (e) => {
			var n = b(), o = F(n);
			i(o, () => t.children, () => ({
				item: c(),
				index: r()
			})), a(e, n);
		}, p = (e) => {
			var t = de(), n = k(t);
			S(() => g(n, `Item ${r() ?? ""}`)), a(e, t);
		};
		s(d, (e) => {
			t.children ? e(f) : e(p, -1);
		}), V(u), o(u, (e, t) => l?.(e, t), () => ({
			index: r(),
			updateItemHeight: q
		})), a(e, u);
	});
	var ce = N(se, 2), le = (e) => {
		var t = ue();
		S(() => z(t, `height: ${j(G) ?? ""}px;`)), a(e, t);
	};
	s(ce, (e) => {
		j(G) > 0 && e(le);
	}), V(ie), V(Q), ee(Q, (e) => P(m, e), () => j(m)), d("scroll", Q, Z), ne(Q, "offsetHeight", (e) => P(_, e)), a(e, Q), T();
}
// src/modules/notepad/guildTracker/utils.js
async function $() {
	return await J("fsh_guildActivity") ?? {
		lastUpdate: 0,
		members: {}
	};
}
var he = (e) => oe(/* @__PURE__ */ new Date(e * 1e3)), ge = (e) => [
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
	return `${ve}${W(n).flatMap(_e(he(t))).join("\n")}`;
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
	return be(xe.map(Se(/* @__PURE__ */ new Date())).map(re));
}
async function we(e, t) {
	let n = await $();
	if (!n.lastUpdate || !n.members) return;
	let r = e(n), i = new Blob([r], { type: t }), a = `${Ce()}_GuildTracker.${t.split("/")[1]}`;
	ae(i, a);
}
async function Te(e) {
	let t = await $(), n = {
		lastUpdate: t.lastUpdate,
		members: Z(W(t.members).filter(([t]) => t !== e))
	};
	Y(X, n);
}
async function Ee(e) {
	let t = await $(), n = {
		lastUpdate: t.lastUpdate,
		members: Z(W(t.members).map(([t, n]) => [t, n.filter((t) => t[4] > e)]))
	};
	Y(X, n);
}
var De = (e) => (t) => !e.find((e) => e === t);
async function Oe() {
	let [e, t] = await Q([$(), se(U())]), n = t.map(({ username: e }) => e);
	return le(e.members).filter(De(n)).sort(G);
}
// src/modules/notepad/guildTracker/GuildTracker.svelte
var ke = "", Ae = l("<option> </option>"), je = l("<div class=\"grid-row svelte-1bj4gm2\"><div class=\"svelte-1bj4gm2\"> </div> <div class=\"svelte-1bj4gm2\"> </div> <div class=\"svelte-1bj4gm2\"> </div> <div class=\"svelte-1bj4gm2\"> </div> <div class=\"svelte-1bj4gm2\"> </div> <div class=\"svelte-1bj4gm2\"> </div> <div class=\"svelte-1bj4gm2\"> </div> <div class=\"svelte-1bj4gm2\"> </div> <div class=\"svelte-1bj4gm2\"> </div></div>"), Me = l("<div class=\"grid-row head svelte-1bj4gm2\"><div class=\"svelte-1bj4gm2\">Date</div> <div class=\"svelte-1bj4gm2\">Member <select class=\"svelte-1bj4gm2\"></select></div> <div class=\"svelte-1bj4gm2\">Level</div> <div class=\"svelte-1bj4gm2\">VL</div> <div class=\"svelte-1bj4gm2\">Stam</div> <div class=\"svelte-1bj4gm2\">Max Stam</div> <div class=\"svelte-1bj4gm2\">Stam %</div> <div class=\"svelte-1bj4gm2\">Last Activity (Days)</div> <div class=\"svelte-1bj4gm2\">GXP</div></div> <div class=\"items svelte-1bj4gm2\"><!></div>", 1), Ne = l("<div class=\"fsh-guild-tracker svelte-1bj4gm2\"><!></div>");
function Pe(n, r) {
	A(r, !0);
	let i = O(D({})), o = O(D([])), s = O(""), l = I(() => j(i)?.[j(s)] ?? []), d = (e) => Z(W(e).map(([e, t]) => [e, [...t].sort((e, t) => t[4] - e[4])]));
	async function f() {
		let e = await $();
		P(i, d(e.members), !0), P(o, le(j(i)).sort(G), !0), ke ? P(s, ke, !0) : ((e) => {
			var t = v(e, 1);
			P(s, t[0], !0);
		})(j(o));
	}
	function h() {
		H("Guild Tracker", "handleChange"), ke = j(s);
	}
	function y(n) {
		return t(n) ? "#DEF" : e(n) ? "null" : n.toLocaleString();
	}
	var b = Ne(), x = w(b);
	u(x, f, null, (e) => {
		var t = Me(), n = F(t), r = N(w(n), 2), i = N(w(r));
		p(i, 21, () => j(o), m, (e, t) => {
			var n = Ae(), r = k(n, !0), i = {};
			S(() => {
				g(r, j(t)), i !== (i = j(t)) && (n.value = (n.__value = i) ?? "");
			}), a(e, n);
		}), V(i), _(i), V(r), R(14), V(n);
		var u = N(n, 2);
		me(w(u), {
			get items() {
				return j(l);
			},
			children: (e, t) => {
				let n = () => (t?.()).item;
				var r = je(), i = w(r), o = k(i, !0), c = N(i, 2), l = k(c, !0), u = N(c, 2), d = k(u, !0), f = N(u, 2), p = k(f, !0), m = N(f, 2), h = k(m, !0), _ = N(m, 2), v = k(_, !0), b = N(_, 2), x = k(b, !0), C = N(b, 2), ee = k(C, !0), T = N(C, 2), E = k(T, !0);
				V(r), S((e, t, r, i, a, c, u) => {
					g(o, e), g(l, j(s)), g(d, t), g(p, r), g(h, i), g(v, a), g(x, c), g(ee, n()[0]), g(E, u);
				}, [
					() => oe(/* @__PURE__ */ new Date(n()[4] * 1e3)),
					() => y(n()[2]),
					() => y(n()[5]),
					() => y(n()[1]),
					() => y(n()[3]),
					() => Math.floor(n()[1] / n()[3] * 100),
					() => y(n()[6])
				]), a(e, r);
			},
			$$slots: { default: !0 }
		}), V(u), c("change", i, h), B(i, () => j(s), (e) => P(s, e)), a(e, t);
	}), V(b), a(n, b), T();
}
x(["change"]);
// src/modules/notepad/guildTracker/fileImport.js
var Fe = ([e, t]) => t.map((t) => [e, ...t]);
function Ie(e) {
	return W(e?.members ?? {}).flatMap(Fe);
}
function Le(e) {
	let t = n(e), r = Ie(t);
	return [t?.lastUpdate ?? 0, r];
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
var Ue = (t) => !t.some(e), We = ([, ...e]) => !e.some(ie), Ge = ([, ...e], [, ...t]) => e[4] - t[4], Ke = ([e, ...t]) => [
	e,
	Math.trunc(t[4] / 86400),
	...t
], qe = (e, t) => e.concat(t).filter(Ue).filter(We).sort(Ge).map(Ke), Je = ([e, t]) => `${e}|${t}`, Ye = (e) => e.split("|"), Xe = ([e, t]) => [e, Number(t)], Ze = (e, t) => ([n, r]) => n === e && r === t, Qe = (e) => ([t, n]) => e.find(Ze(t, n)), $e = ([e, , ...t]) => [e, ...t];
function et(e, t) {
	let n = qe(e, t);
	return q(n.map(Je)).map(Ye).map(Xe).map(Qe(n)).map($e);
}
var tt = ([e]) => e, nt = ([, ...e]) => [...e];
function rt(e) {
	return Z(q(e.map(tt)).map((t) => [t, e.filter(([e]) => e === t).map(nt)]));
}
async function it(e, t) {
	let [n, r] = await Q([$(), e.text()]), i = t ? [] : Ie(n), [a, o] = He(r), s = et(i, o);
	Y(X, {
		lastUpdate: n.lastUpdate ?? a ?? 0,
		members: rt(s)
	});
}
// src/modules/notepad/guildTracker/Utils.svelte
var at = l("<option class=\"svelte-zcxhfk\"> </option>"), ot = l("<div class=\"svelte-zcxhfk\"><button type=\"button\" class=\"svelte-zcxhfk\">Export JSON</button> <br class=\"svelte-zcxhfk\"/><br class=\"svelte-zcxhfk\"/> <button type=\"button\" class=\"svelte-zcxhfk\">Export CSV</button> <br class=\"svelte-zcxhfk\"/><br class=\"svelte-zcxhfk\"/><br class=\"svelte-zcxhfk\"/> <input accept=\".csv, .json, .txt\" type=\"file\" class=\"svelte-zcxhfk\"/> <button type=\"button\" class=\"svelte-zcxhfk\">Import</button> <label class=\"svelte-zcxhfk\"><input type=\"checkbox\" class=\"svelte-zcxhfk\"/> Overwrite</label> (Warning: This can take a while on large files)<br class=\"svelte-zcxhfk\"/><br class=\"svelte-zcxhfk\"/><br class=\"svelte-zcxhfk\"/> <button type=\"button\" class=\"svelte-zcxhfk\">Purge</button> data before <input type=\"date\" class=\"svelte-zcxhfk\"/><br class=\"svelte-zcxhfk\"/><br class=\"svelte-zcxhfk\"/> <button type=\"button\" class=\"svelte-zcxhfk\">Purge</button> username <select class=\"svelte-zcxhfk\"></select></div>");
function st(e, t) {
	A(t, !0);
	let n = O(0), i = O(0), o = O(""), s = O(D([])), l = O(""), u = O(1), d = I(() => j(o) && Date.parse(j(o)) / 1e3);
	function f() {
		H("Utils", "exportJson"), we(r, "application/json");
	}
	function h() {
		H("Utils", "exportCsv"), we(ye, "text/csv");
	}
	function y() {
		H("Utils", "importFile", j(i));
		let [e] = j(n).files;
		it(e, j(i));
	}
	function b() {
		H("Utils", "importButton"), K(j(n));
	}
	function x() {
		H("Utils", "datePurge"), P(o, ""), Ee(j(d));
	}
	async function te() {
		P(s, await Oe(), !0), j(s).length && (P(u, 0), ((e) => {
			var t = v(e, 1);
			P(l, t[0], !0);
		})(j(s)));
	}
	async function ne() {
		H("Utils", "userPurge"), P(u, 1), await Te(j(l)), P(s, j(s).filter((e) => e !== j(l)), !0), j(s).length && (P(u, 0), ((e) => {
			var t = v(e, 1);
			P(l, t[0], !0);
		})(j(s)));
	}
	te();
	var M = ot(), F = w(M), z = N(F, 5), U = N(z, 6);
	ee(U, (e) => P(n, e), () => j(n));
	var W = N(U, 2), G = N(W, 2), q = w(G);
	L(q), R(), V(G);
	var J = N(G, 6), Y = N(J, 2);
	L(Y);
	var X = N(Y, 4), Z = N(X, 2);
	p(Z, 21, () => j(s), m, (e, t) => {
		var n = at(), r = k(n, !0), i = {};
		S(() => {
			g(r, j(t)), i !== (i = j(t)) && (n.value = (n.__value = i) ?? "");
		}), a(e, n);
	}), V(Z), _(Z), V(M), S(() => {
		J.disabled = !j(o), X.disabled = j(u), Z.disabled = j(u);
	}), c("click", F, f), c("click", z, h), c("change", U, y), c("click", W, b), c("change", q, () => {
		H("Utils", "overwriteToggle");
	}), E(q, () => j(i), (e) => P(i, e)), c("click", J, x), c("change", Y, () => {
		H("Utils", "purgeDateChange");
	}), C(Y, () => j(o), (e) => P(o, e)), c("click", X, ne), c("change", Z, () => {
		H("Utils", "handleChange");
	}), B(Z, () => j(l), (e) => P(l, e)), a(e, M), T();
}
x(["click", "change"]);
// src/modules/notepad/guildTracker/GuildTrackerModal.svelte
function ct(e, t) {
	A(t, !0);
	let n = M(t, "visible", 15, !0);
	function r() {
		H("Guild Tracker", "close"), n(!1);
	}
	let i = [{
		component: Pe,
		label: "Guild Tracker"
	}, {
		component: st,
		label: "Import/Export"
	}];
	ce(e, {
		close: r,
		get tabs() {
			return i;
		},
		get visible() {
			return n();
		}
	}), T();
}
// src/modules/notepad/guildTracker/mountGuildTracker.svelte.js
var lt = D({ visible: !0 }), ut = 0;
function dt() {
	ut ? lt.visible = !0 : ut = f(ct, {
		props: lt,
		target: document.body
	});
}
export { dt as default };

//# sourceMappingURL=mountGuildTracker.svelte-Dl4TjgVn.js.map