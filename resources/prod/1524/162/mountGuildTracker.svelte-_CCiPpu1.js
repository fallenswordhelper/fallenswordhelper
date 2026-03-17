import "./posthog-C2Vh_0Hn.js";
import { n as e, t } from "./isUndefined-B3VLlmfL.js";
import "./system-De1jBRGa.js";
import "./constants-C54mky4_.js";
import { t as n } from "./jsonParse-CHQNrrub.js";
import { t as r } from "./jsonStringify-TOBgUNGU.js";
import { A as i, B as a, C as o, E as s, F as c, G as l, J as u, L as d, N as f, O as p, P as m, R as h, T as g, W as _, X as v, Y as y, Z as b, _ as x, _t as S, b as C, bt as w, d as T, dt as E, et as D, f as O, g as k, gt as A, j, k as M, l as N, n as ee, nt as P, o as te, r as F, rt as I, s as L, ut as R, v as z, z as ne } from "./disclose-version-CVZFuhb0.js";
import "./ModalTitled-DUBQ6MwC.js";
import { t as B } from "./sendEvent-bwvhd4A-.js";
import { t as V } from "./currentGuildId-Br10wzx3.js";
import { t as H } from "./entries-BPLrbAVw.js";
import "./indexAjax-BXHvJ2Y7.js";
import { t as U } from "./alpha-gvIHBiw7.js";
import { t as re } from "./clickThis-CZdkFZtj.js";
import { t as W } from "./uniq-SYQgNgys.js";
import { n as G, r as K } from "./idb-sdcp-8vV.js";
import { t as q } from "./indexConstants-BEiNArjz.js";
import "./indexAjaxJson-DuDMsKRC.js";
import "./cmdExport-C_7TLPs-.js";
import { t as J } from "./fromEntries-Bc4U4usg.js";
import { t as ie } from "./padZ-Cypg_I1Q.js";
import "./Modal-QdM-bPCT.js";
import { t as ae } from "./all-Dy4LjBGw.js";
import { t as Y } from "./numberIsNaN-D2-MBtSw.js";
import { t as X } from "./download-CPrODGU3.js";
import { t as Z } from "./formatUtcDateTime-DBWv7pQb.js";
import { t as oe } from "./guildMembers-CZU-uLr9.js";
import { t as se } from "./ModalTabbed-jIH__nSa.js";
import { t as Q } from "./keys-BS4RzZuN.js";
//#region src/modules/common/VirtualScroll.svelte
var ce = c("<div></div>"), le = c("<div> </div>"), ue = c("<virtual-scroll-item><!></virtual-scroll-item>", 2), de = c("<div></div>"), fe = c("<virtual-scroll-viewport><virtual-scroll-content><!> <!> <!></virtual-scroll-content></virtual-scroll-viewport>", 2);
function pe(e, t) {
	E(t, !0);
	let n = F(t, "items", 19, () => []), r = F(t, "overscan", 3, 5), i = F(t, "scrollToIndex", 15);
	function s(e, { index: t, updateItemHeight: n }) {
		function r() {
			let r = e.offsetHeight;
			r > 0 && n(t, r);
		}
		let i = new ResizeObserver(r);
		return i.observe(e), r(), { destroy() {
			i.disconnect();
		} };
	}
	let c = P(0), d = P(0), h = P(void 0), b = P(0), w = P(!1), T = [], O = [], k = 50, A = P(0), M = !1, N = !1, B = !1, V, H = I(() => n().slice(a(c), a(d)).map((e, t) => ({
		index: t + a(c),
		item: e
	}))), U = I(() => W(a(c))), re = I(() => a(d) >= n().length ? 0 : a(A) - W(a(d)));
	function W(e) {
		if (!T.length) return e * k;
		if (O[e] !== void 0) return O[e];
		let t = 0;
		for (let n = 0; n < e; n++) t += T[n] || k;
		return t;
	}
	function G(e, t) {
		T[e] !== t && (T[e] = t, !M && !B && (M = !0, requestAnimationFrame(() => {
			M = !1, K();
		})));
	}
	function K() {
		let e = 0, t = 0;
		O = [], D(A, 0);
		for (let r = 0; r < n().length; r++) {
			O[r] = a(A);
			let n = T[r];
			n > 0 ? (e++, t += n, D(A, a(A) + n)) : D(A, a(A) + k);
		}
		if (e > 0 && (k = t / e), a(w) && a(b) > 0) {
			let e = a(h)?.scrollTop || 0, t = q(e), n = J(t, e, a(b));
			D(c, t, !0), D(d, n, !0);
		}
	}
	function q(e) {
		if (!a(w) || !n().length) return 0;
		if (O.length) {
			let t = 0, i = n().length - 1;
			for (; t < i;) {
				let n = Math.floor((t + i) / 2);
				O[n] + (T[n] || k) > e ? i = n : t = n + 1;
			}
			return Math.max(0, t - r());
		}
		return 0;
	}
	function J(e, t, i) {
		if (!a(w) || !n().length) return 0;
		let o = t + i;
		for (let t = e; t < n().length; t++) if ((O[t] || t * k) > o) return Math.min(n().length, t + r());
		return n().length;
	}
	function ie() {
		!a(w) || N || (B = !0, clearTimeout(V), V = setTimeout(() => {
			B = !1;
		}, 150), N = !0, requestAnimationFrame(() => {
			N = !1;
			let e = a(h).scrollTop, t = q(e), n = J(t, e, a(b));
			(a(c) !== t || a(d) !== n) && (D(c, t, !0), D(d, n, !0));
		}));
	}
	function ae(e, t = "smooth") {
		if (!a(w) || e < 0 || e >= n().length) return;
		let r = W(e);
		a(h).scrollTo({
			top: r,
			behavior: t
		});
	}
	ee(() => {
		D(w, !0);
	}), l(() => {
		n().length && a(w) && (T = Array(n().length).fill(0), D(A, n().length * k), D(c, 0), D(d, Math.min(n().length, r() * 4), !0));
	}), l(() => {
		if (a(b) > 0 && a(w)) {
			let e = a(h)?.scrollTop || 0, t = q(e), n = J(t, e, a(b));
			D(c, t, !0), D(d, n, !0);
		}
	}), l(() => {
		i() !== void 0 && a(w) && (ae(i()), i(void 0));
	});
	var Y = fe();
	z(Y, 1, "svelte-jpynml");
	var X = u(Y);
	z(X, 1, "svelte-jpynml");
	var Z = u(X), oe = (e) => {
		var t = ce();
		_(() => x(t, `height: ${a(U) ?? ""}px;`)), f(e, t);
	};
	p(Z, (e) => {
		a(U) > 0 && e(oe);
	});
	var se = v(Z, 2);
	g(se, 17, () => a(H), ({ index: e, item: t }) => e, (e, n) => {
		let r = () => a(n).index, i = () => a(n).item;
		var c = ue();
		z(c, 1, "svelte-jpynml");
		var l = u(c), d = (e) => {
			var n = m();
			o(y(n), () => t.children, () => ({
				item: i(),
				index: r()
			})), f(e, n);
		}, h = (e) => {
			var t = le(), n = u(t);
			S(t), _(() => j(n, `Item ${r() ?? ""}`)), f(e, t);
		};
		p(l, (e) => {
			t.children ? e(d) : e(h, -1);
		}), S(c), C(c, (e, t) => s?.(e, t), () => ({
			index: r(),
			updateItemHeight: G
		})), f(e, c);
	});
	var Q = v(se, 2), pe = (e) => {
		var t = de();
		_(() => x(t, `height: ${a(re) ?? ""}px;`)), f(e, t);
	};
	p(Q, (e) => {
		a(re) > 0 && e(pe);
	}), S(X), S(Y), te(Y, (e) => D(h, e), () => a(h)), ne("scroll", Y, ie), L(Y, "offsetHeight", (e) => D(b, e)), f(e, Y), R();
}
//#endregion
//#region src/modules/notepad/guildTracker/utils.js
async function $() {
	return await G("fsh_guildActivity") ?? {
		lastUpdate: 0,
		members: {}
	};
}
var me = (e) => Z(/* @__PURE__ */ new Date(e * 1e3)), he = (e) => [
	e[0],
	e[1],
	e[2],
	e[3],
	me(e[4]),
	e[5],
	e[6]
], ge = (e) => ([t, n]) => n.map(he).map((n) => [
	e,
	t,
	...n
].join(",")), _e = "Last Update,Member,Last Activity,Stam,Level,Max Stam,Date,VL,GXP\n";
function ve(e) {
	let { lastUpdate: t, members: n } = e;
	return `${_e}${H(n).flatMap(ge(me(t))).join("\n")}`;
}
var ye = (e) => `${e[0]}${e[1]}${e[2]}${e[3]}${e[4]}${e[5]}`, be = [
	(e) => e.getFullYear().toString(),
	(e) => e.getMonth() + 1,
	(e) => e.getDate(),
	(e) => e.getHours(),
	(e) => e.getMinutes(),
	(e) => e.getSeconds()
], xe = (e) => (t) => t(e);
function Se() {
	return ye(be.map(xe(/* @__PURE__ */ new Date())).map(ie));
}
async function Ce(e, t) {
	let n = await $();
	if (!n.lastUpdate || !n.members) return;
	let r = e(n);
	X(new Blob([r], { type: t }), `${Se()}_GuildTracker.${t.split("/")[1]}`);
}
async function we(e) {
	let t = await $();
	K(q, {
		lastUpdate: t.lastUpdate,
		members: J(H(t.members).filter(([t]) => t !== e))
	});
}
async function Te(e) {
	let t = await $();
	K(q, {
		lastUpdate: t.lastUpdate,
		members: J(H(t.members).map(([t, n]) => [t, n.filter((t) => t[4] > e)]))
	});
}
var Ee = (e) => (t) => !e.find((e) => e === t);
async function De() {
	let [e, t] = await ae([$(), oe(V())]), n = t.map(({ username: e }) => e);
	return Q(e.members).filter(Ee(n)).sort(U);
}
//#endregion
//#region src/modules/notepad/guildTracker/GuildTracker.svelte
var Oe = "", ke = c("<option> </option>"), Ae = c("<div class=\"grid-row svelte-1bj4gm2\"><div class=\"svelte-1bj4gm2\"> </div> <div class=\"svelte-1bj4gm2\"> </div> <div class=\"svelte-1bj4gm2\"> </div> <div class=\"svelte-1bj4gm2\"> </div> <div class=\"svelte-1bj4gm2\"> </div> <div class=\"svelte-1bj4gm2\"> </div> <div class=\"svelte-1bj4gm2\"> </div> <div class=\"svelte-1bj4gm2\"> </div> <div class=\"svelte-1bj4gm2\"> </div></div>"), je = c("<div class=\"grid-row head svelte-1bj4gm2\"><div class=\"svelte-1bj4gm2\">Date</div> <div class=\"svelte-1bj4gm2\">Member <select class=\"svelte-1bj4gm2\"></select></div> <div class=\"svelte-1bj4gm2\">Level</div> <div class=\"svelte-1bj4gm2\">VL</div> <div class=\"svelte-1bj4gm2\">Stam</div> <div class=\"svelte-1bj4gm2\">Max Stam</div> <div class=\"svelte-1bj4gm2\">Stam %</div> <div class=\"svelte-1bj4gm2\">Last Activity (Days)</div> <div class=\"svelte-1bj4gm2\">GXP</div></div> <div class=\"items svelte-1bj4gm2\"><!></div>", 1), Me = c("<div class=\"fsh-guild-tracker svelte-1bj4gm2\"><!></div>");
function Ne(n, r) {
	E(r, !0);
	let i = P(b({})), o = P(b([])), c = P(""), l = I(() => a(i)?.[a(c)] ?? []), d = (e) => J(H(e).map(([e, t]) => [e, [...t].sort((e, t) => t[4] - e[4])]));
	async function p() {
		D(i, d((await $()).members), !0), D(o, Q(a(i)).sort(U), !0), Oe ? D(c, Oe, !0) : ((e) => {
			D(c, w(e, 1)[0], !0);
		})(a(o));
	}
	function m() {
		B("Guild Tracker", "handleChange"), Oe = a(c);
	}
	function x(n) {
		return t(n) ? "#DEF" : e(n) ? "null" : n.toLocaleString();
	}
	var C = Me();
	M(u(C), p, null, (e) => {
		var t = je(), n = y(t), r = v(u(n), 2), i = v(u(r));
		g(i, 21, () => a(o), s, (e, t) => {
			var n = ke(), r = u(n, !0);
			S(n);
			var i = {};
			_(() => {
				j(r, a(t)), i !== (i = a(t)) && (n.value = (n.__value = a(t)) ?? "");
			}), f(e, n);
		}), S(i), S(r), A(14), S(n);
		var d = v(n, 2);
		pe(u(d), {
			get items() {
				return a(l);
			},
			children: (e, t) => {
				let n = () => t?.().item;
				var r = Ae(), i = u(r), o = u(i, !0);
				S(i);
				var s = v(i, 2), l = u(s, !0);
				S(s);
				var d = v(s, 2), p = u(d, !0);
				S(d);
				var m = v(d, 2), h = u(m, !0);
				S(m);
				var g = v(m, 2), y = u(g, !0);
				S(g);
				var b = v(g, 2), C = u(b, !0);
				S(b);
				var w = v(b, 2), T = u(w, !0);
				S(w);
				var E = v(w, 2), D = u(E, !0);
				S(E);
				var O = v(E, 2), k = u(O, !0);
				S(O), S(r), _((e, t, r, i, s, u, d) => {
					j(o, e), j(l, a(c)), j(p, t), j(h, r), j(y, i), j(C, s), j(T, u), j(D, n()[0]), j(k, d);
				}, [
					() => Z(/* @__PURE__ */ new Date(n()[4] * 1e3)),
					() => x(n()[2]),
					() => x(n()[5]),
					() => x(n()[1]),
					() => x(n()[3]),
					() => Math.floor(n()[1] / n()[3] * 100),
					() => x(n()[6])
				]), f(e, r);
			},
			$$slots: { default: !0 }
		}), S(d), h("change", i, m), k(i, () => a(c), (e) => D(c, e)), f(e, t);
	}), S(C), f(n, C), R();
}
d(["change"]);
//#endregion
//#region src/modules/notepad/guildTracker/fileImport.js
var Pe = ([e, t]) => t.map((t) => [e, ...t]);
function Fe(e) {
	return H(e?.members ?? {}).flatMap(Pe);
}
function Ie(e) {
	let t = n(e), r = Fe(t);
	return [t?.lastUpdate ?? 0, r];
}
var Le = (e) => e.split(","), Re = (e) => Date.parse(`${e.replace(" ", "T")}Z`) / 1e3, ze = ([, e, ...t]) => [
	e,
	Number(t[0]),
	Number(t[1]),
	Number(t[2]),
	Number(t[3]),
	Re(t[4]),
	Number(t[5]),
	Number(t[6])
];
function Be(e) {
	let t = e.split("\n").slice(1).map(Le);
	return [Re(t[0][0]), t.map(ze)];
}
function Ve(e) {
	return e.startsWith("{") ? Ie(e) : Be(e);
}
var He = (t) => !t.some(e), Ue = ([, ...e]) => !e.some(Y), We = ([, ...e], [, ...t]) => e[4] - t[4], Ge = ([e, ...t]) => [
	e,
	Math.trunc(t[4] / (3600 * 24)),
	...t
], Ke = (e, t) => e.concat(t).filter(He).filter(Ue).sort(We).map(Ge), qe = ([e, t]) => `${e}|${t}`, Je = (e) => e.split("|"), Ye = ([e, t]) => [e, Number(t)], Xe = (e, t) => ([n, r]) => n === e && r === t, Ze = (e) => ([t, n]) => e.find(Xe(t, n)), Qe = ([e, , ...t]) => [e, ...t];
function $e(e, t) {
	let n = Ke(e, t);
	return W(n.map(qe)).map(Je).map(Ye).map(Ze(n)).map(Qe);
}
var et = ([e]) => e, tt = ([, ...e]) => [...e];
function nt(e) {
	return J(W(e.map(et)).map((t) => [t, e.filter(([e]) => e === t).map(tt)]));
}
async function rt(e, t) {
	let [n, r] = await ae([$(), e.text()]), i = t ? [] : Fe(n), [a, o] = Ve(r), s = $e(i, o);
	K(q, {
		lastUpdate: n.lastUpdate ?? a ?? 0,
		members: nt(s)
	});
}
//#endregion
//#region src/modules/notepad/guildTracker/Utils.svelte
var it = c("<option class=\"svelte-zcxhfk\"> </option>"), at = c("<div class=\"svelte-zcxhfk\"><button type=\"button\" class=\"svelte-zcxhfk\">Export JSON</button> <br class=\"svelte-zcxhfk\"/><br class=\"svelte-zcxhfk\"/> <button type=\"button\" class=\"svelte-zcxhfk\">Export CSV</button> <br class=\"svelte-zcxhfk\"/><br class=\"svelte-zcxhfk\"/><br class=\"svelte-zcxhfk\"/> <input accept=\".csv, .json, .txt\" type=\"file\" class=\"svelte-zcxhfk\"/> <button type=\"button\" class=\"svelte-zcxhfk\">Import</button> <label class=\"svelte-zcxhfk\"><input type=\"checkbox\" class=\"svelte-zcxhfk\"/> Overwrite</label> (Warning: This can take a while on large files)<br class=\"svelte-zcxhfk\"/><br class=\"svelte-zcxhfk\"/><br class=\"svelte-zcxhfk\"/> <button type=\"button\" class=\"svelte-zcxhfk\">Purge</button> data before <input type=\"date\" class=\"svelte-zcxhfk\"/><br class=\"svelte-zcxhfk\"/><br class=\"svelte-zcxhfk\"/> <button type=\"button\" class=\"svelte-zcxhfk\">Purge</button> username <select class=\"svelte-zcxhfk\"></select></div>");
function ot(e, t) {
	E(t, !0);
	let n = P(0), i = P(0), o = P(""), c = P(b([])), l = P(""), d = P(1), p = I(() => a(o) && Date.parse(a(o)) / 1e3);
	function m() {
		B("Utils", "exportJson"), Ce(r, "application/json");
	}
	function y() {
		B("Utils", "exportCsv"), Ce(ve, "text/csv");
	}
	function x() {
		B("Utils", "importFile", a(i));
		let [e] = a(n).files;
		rt(e, a(i));
	}
	function C() {
		B("Utils", "importButton"), re(a(n));
	}
	function M() {
		B("Utils", "datePurge"), D(o, ""), Te(a(p));
	}
	async function ee() {
		D(c, await De(), !0), a(c).length && (D(d, 0), ((e) => {
			D(l, w(e, 1)[0], !0);
		})(a(c)));
	}
	async function F() {
		B("Utils", "userPurge"), D(d, 1), await we(a(l)), D(c, a(c).filter((e) => e !== a(l)), !0), a(c).length && (D(d, 0), ((e) => {
			D(l, w(e, 1)[0], !0);
		})(a(c)));
	}
	ee();
	var L = at(), z = u(L), ne = v(z, 5), V = v(ne, 6);
	te(V, (e) => D(n, e), () => a(n));
	var H = v(V, 2), U = v(H, 2), W = u(U);
	O(W), A(), S(U);
	var G = v(U, 6), K = v(G, 2);
	O(K);
	var q = v(K, 4), J = v(q, 2);
	g(J, 21, () => a(c), s, (e, t) => {
		var n = it(), r = u(n, !0);
		S(n);
		var i = {};
		_(() => {
			j(r, a(t)), i !== (i = a(t)) && (n.value = (n.__value = a(t)) ?? "");
		}), f(e, n);
	}), S(J), S(L), _(() => {
		G.disabled = !a(o), q.disabled = a(d), J.disabled = a(d);
	}), h("click", z, m), h("click", ne, y), h("change", V, x), h("click", H, C), h("change", W, () => {
		B("Utils", "overwriteToggle");
	}), N(W, () => a(i), (e) => D(i, e)), h("click", G, M), h("change", K, () => {
		B("Utils", "purgeDateChange");
	}), T(K, () => a(o), (e) => D(o, e)), h("click", q, F), h("change", J, () => {
		B("Utils", "handleChange");
	}), k(J, () => a(l), (e) => D(l, e)), f(e, L), R();
}
d(["click", "change"]);
//#endregion
//#region src/modules/notepad/guildTracker/GuildTrackerModal.svelte
function st(e, t) {
	E(t, !0);
	let n = F(t, "visible", 15, !0);
	function r() {
		B("Guild Tracker", "close"), n(!1);
	}
	let i = [{
		component: Ne,
		label: "Guild Tracker"
	}, {
		component: ot,
		label: "Import/Export"
	}];
	se(e, {
		close: r,
		get tabs() {
			return i;
		},
		get visible() {
			return n();
		}
	}), R();
}
//#endregion
//#region src/modules/notepad/guildTracker/mountGuildTracker.svelte.js
var ct = b({ visible: !0 }), lt = 0;
function ut() {
	lt ? ct.visible = !0 : lt = i(st, {
		props: ct,
		target: document.body
	});
}
//#endregion
export { ut as default };

//# sourceMappingURL=mountGuildTracker.svelte-_CCiPpu1.js.map