import { r as e } from "./sendException-ezSEAahU.js";
import { t } from "./regExpFirstCapture-Bi32xMqS.js";
import { o as n } from "./now-CA_NVGr7.js";
import { mt as r, nt as i } from "./constants-CIKidKvt.js";
import { t as a } from "./setValue-31jE_mRr.js";
import { t as o } from "./querySelector-8FH1hhUv.js";
import { n as s } from "./retryAjax-oA4ZKObL.js";
import { t as c } from "./isArray-FpVoUujB.js";
import { A as l, B as u, E as d, F as f, I as p, J as m, L as h, N as g, O as _, R as v, T as y, W as b, X as x, Y as S, Z as C, _ as w, _t as T, a as E, at as D, bt as ee, dt as O, et as te, f as k, gt as A, it as j, j as M, l as N, lt as P, nt as ne, ot as re, p as F, r as ie, rt as ae, st as oe, ut as I, x as se } from "./disclose-version-Bvjv4_yw.js";
import "./index-client-Ognjo7Vg.js";
import { r as ce } from "./transition-t2plMJ19.js";
import { t as le } from "./arrayFrom-B0aMFj4F.js";
import { t as L } from "./getTextTrim-hYBF-bdh.js";
import { t as ue } from "./partial-CYzPXpZP.js";
import { t as de } from "./ModalTitled-Ksl_tZBv.js";
import { t as R } from "./sendEvent-DFQy5lFi.js";
import { t as fe } from "./entries-CiJ6YMwx.js";
import { t as pe } from "./indexAjaxDoc-BNgfSQTJ.js";
import { t as z } from "./alpha-Dzfd-64M.js";
import { t as B } from "./playerIdFromAnchor-33DtIlyQ.js";
import { t as V } from "./uniq-BIFd13I0.js";
import { n as me, r as he } from "./idb-BvD4EIHy.js";
import { t as ge } from "./fromEntries-CXGCeH0k.js";
import { t as _e } from "./dataRows-BlMmmxmo.js";
import { t as ve } from "./dateUtc-CGkqJdCf.js";
import { t as ye } from "./itemIdFromImg-ChyU4_Zu.js";
import "./legacy-DUan0FaP.js";
import { t as H } from "./formatUtcTimestamp-CjMQjPi2.js";
//#region src/modules/notepad/superelite/processOldMobs.js
function U(e) {
	return fe(e?.seData ?? {}).flatMap(([t, n]) => c(n) ? n.map(([n, r, i, a, o, s, c = -1]) => [
		n,
		t,
		r,
		i,
		e?.realms[a],
		o,
		s,
		c
	]) : [[
		n,
		t.replaceAll(" ", "_"),
		0,
		"",
		"",
		"",
		""
	]]);
}
//#endregion
//#region src/modules/notepad/superelite/mergeSeData.js
var W = (e) => e.join("|"), be = (e) => e.split("|");
function xe(e) {
	let { time: t, creature: n, playerId: r, playerName: i, location: a, drop: o, creatureId: s } = e, c = a.match(/^(.*?)\s(\(\d+, \d+\))$/);
	return [
		t,
		n.replace(" (Super Elite)", "").replaceAll(" ", "_"),
		r,
		i,
		c ? c[1] : "realm unknown",
		c ? c[2] : "coordinates unknown",
		o,
		s
	];
}
var Se = (e, t) => V(e.map(W).concat(t.map(W))).map(be).map(([e, t, n, r, i, a, o, s]) => [
	Number(e),
	t,
	Number(n),
	r,
	i,
	a,
	o,
	Number(s)
]).sort(([e], [t]) => t - e), Ce = (e) => (t) => ge(V(t.map(([, e]) => e)).map((n) => [n, t.filter(([, e]) => e === n).map(([t, , n, r, i, a, o, s]) => [
	t,
	n,
	r,
	e.findIndex((e) => e === i),
	a,
	o,
	s
]).slice(0, 10)]));
function we(e, t) {
	let n = Se(t.map(xe), U(e)), r = V(n.map(([, , , , e]) => e)).sort(z);
	return {
		seData: Ce(r)(n),
		realms: r
	};
}
//#endregion
//#region src/modules/notepad/superelite/seLogStore.js
var G = P(), K = !1, q = {}, J = 0, Y = !1, Te = (e) => Math.max(0, 600 - (n() - (e?.lastUpdate ?? 0)), 600 - (n() - J));
function Ee(e) {
	let t = e.replace("<br>", " ").split(/[: /]/);
	return ve([
		t[2],
		t[1],
		t[0],
		t[3],
		t[4]
	]);
}
function De(e) {
	let t = le(e.childNodes).filter((e) => e.nodeType === Node.TEXT_NODE && L(e) !== "");
	return t.length === 0 ? "" : t.map((e) => L(e)).join(" ");
}
var Oe = (e) => ({
	time: Ee(e.cells[0].innerHTML) / 1e3,
	creature: L(e.cells[1]),
	creatureId: Number(t(r, o("img", e.cells[1]).src)),
	playerId: B(o("a", e.cells[2])),
	playerName: L(o("a", e.cells[2])),
	location: De(e.cells[2]),
	drop: ye(o("img", e.cells[3])) ?? "no drop"
});
async function ke() {
	let e = await pe({ cmd: "superelite" });
	return !e || !o("img[src*=\"eliteslayerlog\"]", e) ? [] : _e(o("#pCC table table", e), 4, 0).map(Oe);
}
async function Ae() {
	J = n();
	let e = await ke();
	e?.length && (q = we(q, e), he("fsh_seLog", {
		lastUpdate: J,
		...q
	}), G.set(q));
}
async function je() {
	for (K = !0, q = await me("fsh_seLog"), G.set(q); Y;) K = !0, await s(Te(q) * 1e3), Y && await Ae(), K = !1;
}
function Me(e, t) {
	Y = t, e(Y), Y && !K && je();
}
function Ne() {
	let { subscribe: e, set: t } = P(0);
	return {
		subscribe: e,
		set: ue(Me, t)
	};
}
var X = Ne(), Pe = f("<button type=\"button\" class=\"svelte-142b9qt\"><!></button>"), Fe = f("<a target=\"_blank\" class=\"svelte-142b9qt\"> </a>"), Ie = f("<div></div> <div></div> <div class=\"last-kill svelte-142b9qt\"> </div> <div><a target=\"_blank\" class=\"svelte-142b9qt\"> </a></div>", 1), Le = f("<div class=\"wide svelte-142b9qt\"></div>"), Re = f("<div class=\"expando svelte-142b9qt\"><!></div> <div><!></div> <div class=\"last-kill svelte-142b9qt\"> </div> <div><a target=\"_blank\" class=\"svelte-142b9qt\"> </a></div> <!>", 1);
function ze(e, t) {
	O(t, !0);
	let n = ne(!1), r = () => {
		R("SE Tracker", "Expand Row"), te(n, !u(n));
	};
	var a = Re(), o = S(a), s = m(o), c = (e) => {
		var t = Pe(), i = m(t), a = (e) => {
			g(e, p("∨"));
		}, o = (e) => {
			g(e, p(">"));
		};
		_(i, (e) => {
			u(n) ? e(a) : e(o, -1);
		}), T(t), b(() => F(t, "aria-expanded", u(n))), v("click", t, r), g(e, t);
	};
	_(s, (e) => {
		t.entry[3].length && e(c);
	}), T(o);
	var l = x(o, 2), f = m(l), h = (e) => {
		var n = Fe(), r = m(n, !0);
		T(n), b((e) => {
			F(n, "href", `${i ?? ""}creatures&subcmd=view&creature_id=${t.entry[4] ?? ""}`), M(r, e);
		}, [() => t.entry[0].replaceAll("_", " ")]), g(e, n);
	}, C = (e) => {
		var n = p();
		b((e) => M(n, e), [() => t.entry[0].replaceAll("_", " ")]), g(e, n);
	};
	_(f, (e) => {
		t.entry[4] > 0 ? e(h) : e(C, -1);
	}), T(l);
	var w = x(l, 2), E = m(w, !0);
	T(w);
	var D = x(w, 2), k = m(D), A = m(k, !0);
	T(k), T(D);
	var j = x(D, 2), N = (e) => {
		var n = Le();
		y(n, 21, () => t.entry[3], d, (e, t) => {
			var n = ae(() => ee(u(t), 2));
			let r = () => u(n)[0], a = () => u(n)[1];
			var o = Ie(), s = x(S(o), 4), c = m(s, !0);
			T(s);
			var l = x(s, 2), d = m(l), f = m(d, !0);
			T(d), T(l), b((e, t) => {
				M(c, e), F(d, "href", `${i ?? ""}realms&search_name=${t ?? ""}`), M(f, a());
			}, [() => H(r()), () => encodeURIComponent(a())]), g(e, o);
		}), T(n), se(3, n, () => ce, () => ({ duration: 300 })), g(e, n);
	};
	_(j, (e) => {
		u(n) && e(N);
	}), b((e, n) => {
		M(E, e), F(k, "href", `${i ?? ""}realms&search_name=${n ?? ""}`), M(A, t.entry[2]);
	}, [() => H(t.entry[1]), () => encodeURIComponent(t.entry[2])]), g(e, a), I();
}
h(["click"]);
//#endregion
//#region src/modules/notepad/superelite/TrackerPref.svelte
var Z = f("<span class=\"network svelte-1n8ngaj\"></span> <label>Enable SE Tracker [&thinsp; <div class=\"tooltip svelte-1n8ngaj\">? <div class=\"tooltiptext svelte-1n8ngaj\"><span class=\"tooltiptitle svelte-1n8ngaj\">Enable SE Tracker</span><br/><br/> <div>If enabled, will track the last time each SE was killed.<br/> This is DIFFERENT from the usual FSH network activity.<br/> When this is enabled, if you have ANY game page open in a browser tab it\n        will scan the SE Log every 10 minutes.<br/> You do not need auto-refresh for this to work.</div></div></div> &thinsp;]: <input type=\"checkbox\" class=\"svelte-1n8ngaj\"/></label>", 1);
function Be(e, t) {
	O(t, !1);
	let n = () => D(X, "$trackerPrefStore", r), [r, i] = j();
	function o(e) {
		R("SE Tracker", "Toggle Pref"), a("enableSeTracker", e.target.checked);
	}
	E();
	var s = Z(), c = S(s);
	w(c, "", {}, { "background-image": "url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAB3RJTUUH1QgGDTMWk1twEwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAC8SURBVHjahVPBEcQgCEQnHdmTqUlr0qe16I8cufOiCGZnGCcIy4LEICJwmGgWJ3o0IOCQEqVg9Y4U3CoCHQhvxuPUZEiA3XYkxyI1/6S6R6rke8AlJbkV7u95lleXq3yrdyUjLGxwnifmnHEXY3fJIQSIMcKOZCLgMltrr+1ZWgxp8wi1VrEqxfeFWloYq4wKtOHeBNqeawqmeOnNvfdYSvkbfaeUxP0w/G+k6WsT/xCBc25SuxDsnownEy4u5BHudpMFegAAAABJRU5ErkJggg==\")" });
	var l = x(c, 2), u = x(m(l), 3);
	k(u), T(l), v("click", u, o), N(u, n, (e) => re(X, e)), g(e, s), I(), i();
}
h(["click"]);
//#endregion
//#region src/modules/notepad/superelite/trackerTableStore.js
function Ve(e, t) {
	let n = U(e);
	t(V(n.map(([, e]) => e)).map((e) => [e, n.filter(([, t]) => t === e).map(([e, , , , t, , , n = -1]) => [
		e,
		t,
		n
	])]).map(([e, t]) => [
		e,
		t[0][0],
		t[0][1],
		t.slice(1),
		t[0][2]
	]));
}
var He = oe([X, G], ([e, t], n) => {
	t && e ? Ve(t, n) : n();
}), Ue = f("<div><div class=\"innerColumnHeader svelte-1sib168\">&nbsp;</div></div> <div><div class=\"innerColumnHeader svelte-1sib168\">Creature</div></div> <div><div class=\"innerColumnHeader svelte-1sib168\">Last Kill</div></div> <div><div class=\"innerColumnHeader svelte-1sib168\">Location</div></div> <!>", 1), We = f("<div class=\"container svelte-1sib168\"><div class=\"top svelte-1sib168\"><!></div> <div class=\"tracker-table svelte-1sib168\"><!></div></div>");
function Ge(e) {
	let t = () => D(He, "$trackerTableStore", n), [n, r] = j();
	var i = We(), a = m(i);
	Be(m(a), {}), T(a);
	var o = x(a, 2), s = m(o), c = (e) => {
		var n = Ue();
		y(x(S(n), 8), 1, t, (e) => e[0], (e, t) => {
			ze(e, { get entry() {
				return u(t);
			} });
		}), g(e, n);
	};
	_(s, (e) => {
		t() && e(c);
	}), T(o), T(i), g(e, i), r();
}
//#endregion
//#region src/modules/notepad/superelite/SuperEliteModal.svelte
function Ke(e, t) {
	O(t, !0);
	let n = ie(t, "visible", 15, !0);
	function r() {
		R("SE Tracker", "close"), n(!1);
	}
	de(e, {
		close: r,
		get visible() {
			return n();
		},
		title: (e) => {
			A(), g(e, p("Super Elite Tracker"));
		},
		children: (e, t) => {
			Ge(e, {});
		},
		$$slots: {
			title: !0,
			default: !0
		}
	}), I();
}
//#endregion
//#region src/modules/notepad/superelite/mountSuperElite.svelte.js
var qe = /* @__PURE__ */ e({ default: () => Je }), Q = C({ visible: !0 }), $ = 0;
function Je() {
	$ ? Q.visible = !0 : $ = l(Ke, {
		props: Q,
		target: document.body
	});
}
//#endregion
export { X as n, qe as t };

//# sourceMappingURL=mountSuperElite.svelte-BGrh26aD.js.map