import { t as e } from "./getText-rCJDurvG.js";
import { t } from "./regExpExec-6_Ntf_JM.js";
import { t as n } from "./regExpFirstCapture-CdTmAP5x.js";
import { t as r } from "./system-De1jBRGa.js";
import { At as i, Nt as a, at as o, it as s, ot as c, p as l, rt as u, xt as d } from "./constants-C54mky4_.js";
import { t as f } from "./getValue-CCThXEzy.js";
import { t as p } from "./isString-pOrxe2i7.js";
import { t as m } from "./setValue-Cb0PYC7t.js";
import { t as h } from "./querySelector-qkBBhiGH.js";
import { t as g } from "./isArray-oWM-Qp9j.js";
import { A as _, B as v, C as y, D as b, E as ee, F as x, G as S, H as te, I as C, J as w, L as T, N as E, O as D, P as O, R as k, T as A, W as j, X as M, Y as N, Z as P, _ as F, _t as I, b as L, d as ne, dt as re, et as R, f as z, gt as B, j as V, k as H, l as U, mt as W, n as ie, nt as G, o as K, p as q, r as J, rt as ae, s as oe, ut as se, v as Y, z as X } from "./disclose-version-CVZFuhb0.js";
import { t as ce } from "./getTextTrim-Wj82yPPN.js";
import { t as Z } from "./partial-goh6HOls.js";
import { t as Q } from "./ModalTitled-DUBQ6MwC.js";
import { t as le } from "./sendEvent-bwvhd4A-.js";
import { t as ue } from "./_dataAccess-tuhLVrPW.js";
import { t as de } from "./indexAjaxDoc-DHqD1q8U.js";
import { t as fe } from "./navigateTo-CDpyk-TN.js";
import { t as pe } from "./querySelectorArray-BZbNvND7.js";
import { t as me } from "./playerIdFromAnchor-C_3QBerg.js";
import { n as he, r as ge } from "./idb-sdcp-8vV.js";
import { t as _e } from "./openQuickBuffById-DJAK7mhj.js";
import { t as ve } from "./guild-aYCivZ4L.js";
import { t as ye } from "./numberIsNaN-D2-MBtSw.js";
import { r as be, t as xe } from "./pubsub-BpZI0g-B.js";
import { t as Se } from "./parseDateAsTimestamp-BNkjD7hF.js";
import { t as $ } from "./LinkBtn-BGsXfdDi.js";
import { t as Ce } from "./LinkBtnBracketed-Rc3cBj0A.js";
import { t as we } from "./formatUtcTimestamp-CcKIkC-e.js";
import { t as Te } from "./playerId-KKJEdV6P.js";
import { t as Ee } from "./getCombat-BWQPLBtT.js";
//#region src/modules/common/VirtualScrollFiltered.svelte
var De = x("<div> </div>"), Oe = x("<virtual-scroll-item><!></virtual-scroll-item>", 2), ke = x("<virtual-scroll-viewport><virtual-scroll-content><virtual-scroll-items></virtual-scroll-items></virtual-scroll-content></virtual-scroll-viewport>", 2);
function Ae(e, t) {
	re(t, !0);
	let n = J(t, "items", 19, () => []), r = J(t, "filter", 3, () => !0), i = J(t, "filterKey", 3, 0), a = J(t, "debounceMs", 3, 150), o = J(t, "overscan", 3, 5), s = J(t, "estimatedHeight", 3, 50), c = /* @__PURE__ */ new Map(), l = G(void 0), u = G(0), d = G(!1), f = G(0), p = G(0), m = G(0), h = G(P([])), g = G(P([])), _ = null, b = !1;
	S(() => {
		let e = n(), t = r();
		return i(), clearTimeout(_), _ = setTimeout(() => {
			R(g, e.filter(t), !0);
		}, a()), () => clearTimeout(_);
	});
	let ee = ae(() => v(g).slice(v(f), v(p)).map((e, n) => ({
		index: n + v(f),
		item: e,
		key: t.getKey(e)
	}))), x = ae(() => v(f) > 0 && v(h)[v(f)] || 0);
	function C(e, { key: t, updateHeightFn: n }) {
		let r = e.offsetHeight;
		r > 0 && n(t, r);
	}
	function T(e, t) {
		c.has(e) || (c.set(e, t), W || M());
	}
	function k() {
		if (c.size === 0) return s();
		let e = 0;
		for (let t of c.values()) e += t;
		return e / c.size;
	}
	function M() {
		b || (b = !0, requestAnimationFrame(() => {
			b = !1, ne();
		}));
	}
	function ne() {
		te(() => {
			let e = v(g);
			if (!e.length) {
				R(h, [], !0), R(m, 0);
				return;
			}
			let n = k(), r = [], i = 0;
			for (let a = 0; a < e.length; a++) {
				r[a] = i;
				let o = t.getKey(e[a]), s = c.get(o) || n;
				i += s;
			}
			R(h, r, !0), R(m, i, !0);
		});
	}
	function z(e) {
		let n = k();
		if (e < 0 || e >= v(g).length) return n;
		let r = t.getKey(v(g)[e]);
		return c.get(r) || n;
	}
	function B(e) {
		if (!v(g).length || !v(h).length) return 0;
		let t = 0, n = v(g).length - 1;
		for (; t < n;) {
			let r = Math.floor((t + n) / 2);
			v(h)[r] + z(r) > e ? n = r : t = r + 1;
		}
		return Math.max(0, t - o());
	}
	function H(e, t) {
		if (!v(g).length) return 0;
		let n = t + v(u);
		for (let t = e; t < v(g).length; t++) if ((v(h)[t] || 0) > n) return Math.min(v(g).length, t + o());
		return v(g).length;
	}
	function U(e) {
		let t = B(e), n = H(t, e);
		(v(f) !== t || v(p) !== n) && (R(f, t, !0), R(p, n, !0));
	}
	let W = !1, q;
	function ce() {
		v(d) && (W = !0, clearTimeout(q), q = setTimeout(() => {
			W = !1;
		}, 150), U(v(l).scrollTop));
	}
	ie(() => {
		R(d, !0);
	}), S(() => {
		let e = v(g).length;
		v(d) && (ne(), v(l) && (v(l).scrollTop = 0), R(f, 0), R(p, Math.min(e, o() * 4), !0));
	}), S(() => {
		v(u) > 0 && v(d) && v(g).length > 0 && te(() => {
			U(v(l)?.scrollTop || 0);
		});
	});
	var Z = ke();
	Y(Z, 1, "svelte-ykr0pq");
	var Q = w(Z);
	Y(Q, 1, "svelte-ykr0pq");
	var le = w(Q);
	Y(le, 1, "svelte-ykr0pq"), A(le, 21, () => v(ee), ({ index: e, item: t, key: n }) => n, (e, n) => {
		let r = () => v(n).index, i = () => v(n).item, a = () => v(n).key;
		var o = Oe();
		Y(o, 1, "svelte-ykr0pq");
		var s = w(o), c = (e) => {
			var n = O();
			y(N(n), () => t.children, () => ({
				item: i(),
				index: r()
			})), E(e, n);
		}, l = (e) => {
			var t = De(), n = w(t);
			I(t), j(() => V(n, `Item ${r() ?? ""}`)), E(e, t);
		};
		D(s, (e) => {
			t.children ? e(c) : e(l, -1);
		}), I(o), L(o, (e, t) => C?.(e, t), () => ({
			key: a(),
			updateHeightFn: T
		})), E(e, o);
	}), I(le), I(Q), I(Z), K(Z, (e) => R(l, e), () => v(l)), j(() => {
		F(Q, `height: ${v(m) ?? ""}px;`), F(le, `transform: translateY(${v(x) ?? ""}px);`);
	}), X("scroll", Z, ce), oe(Z, "offsetHeight", (e) => R(u, e)), E(e, Z), se();
}
//#endregion
//#region src/modules/app/guild/log.js
function je(e, t, n) {
	return ve({
		subcmd: "log",
		log_id: e,
		latest: t,
		limit: n
	});
}
//#endregion
//#region src/modules/_dataAccess/daGuildLog.js
var Me = 3, Ne = 0, Pe = 0;
function Fe() {
	xe("guildLog-progress", "Server Error.");
}
function Ie(e) {
	return de({
		cmd: "guild",
		subcmd: "log",
		page: e
	});
}
function Le(n) {
	let r = h("input[name=\"page\"]", n), i = Number(r.value);
	xe("guildLog-progress", `page ${i}`);
	let [a] = t(/\d+/, e(r.parentNode));
	return i >= Math.min(Number(a), Me);
}
async function Re(e = 1, t = []) {
	let n = await Ie(e);
	if (!n) return Fe();
	let r = t.concat(n);
	return Le(n) ? r : Re(e + 1, r);
}
var ze = ({ cells: e }) => e.length === 3, Be = (e, t) => (Ne = t > Pe ? Ne + 1 : 0, Pe = t, `<link=a${Ne}></link>`);
function Ve([e]) {
	let t = me(e);
	if (t) return {
		data: {
			id: t,
			name: n(/>(?=([^<]+))\1</, e)
		},
		type: 0
	};
	let r = n(s, e);
	return r ? {
		data: {
			id: r,
			name: n(/>(?=([^<]+))\1</, e)
		},
		type: 1
	} : {};
}
function He([e, t, n, r]) {
	return {
		msg: {
			before: t,
			combat: n,
			text: r.replace(/<a.+?a>/g, Be),
			attachments: (n && [{
				data: Number(n),
				type: 11
			}]) ?? [...r.matchAll(/<a.+?a>/g)].map(Ve)
		},
		time: Se(ce(e.cells[1])) / 1e3,
		...n && { type: 17 }
	};
}
function Ue(e) {
	return pe(".width_full tr", e).slice(1).filter(ze).map((e) => [e, e.cells[2].innerHTML]).map(([e, t]) => [
		e,
		t,
		n(/;combat_id=(\d+)/, t)
	]).map(([e, t, n]) => [
		e,
		t,
		n,
		t.split("&nbsp;&nbsp;[")[0]
	]).map(He);
}
async function We() {
	return (await Re()).flatMap(Ue);
}
async function Ge(e = -1, t = 1, n = []) {
	let r = 1e3, i = await je(e, t, r);
	if (!i?.s) return Fe();
	xe("guildLog-progress");
	let a = n.concat(i.r.logs);
	return i.r.logs.length !== r || a.length >= r * Me ? a : Ge(i.r.logs[0].id, 0, a);
}
function Ke() {
	return Me = Number(f("newGuildLogHistoryPages")), ue(Ge, We);
}
//#endregion
//#region src/modules/notepad/guildLog/FilterHeader.svelte
var qe = x("<div class=\"filter-header svelte-1onji9i\"><div class=\"filters svelte-1onji9i\"><div class=\"front svelte-1onji9i\"><span>Filters:</span></div> <div><label>Potions: <input type=\"checkbox\"/></label></div> <div><label>Store/Recalls: <input type=\"checkbox\"/></label></div> <div><label>Relics: <input type=\"checkbox\"/></label></div> <div><label>Mercenaries: <input type=\"checkbox\"/></label></div> <div><label>Group Combats: <input type=\"checkbox\"/></label></div> <div><!></div> <div><label>Donations: <input type=\"checkbox\"/></label></div> <div><label>Rankings: <input type=\"checkbox\"/></label></div> <div><label>GvGs: <input type=\"checkbox\"/></label></div> <div><label>Tag/UnTags: <input type=\"checkbox\"/></label></div> <div><label>Titans: <input type=\"checkbox\"/></label></div> <div><label>Other: <input type=\"checkbox\"/></label></div></div> <div class=\"button-row svelte-1onji9i\"><div></div> <div class=\"buttons svelte-1onji9i\"><div><!></div> <div><!></div> <div><!></div></div> <div class=\"search-box svelte-1onji9i\"><label>Search: <span class=\"search-wrapper svelte-1onji9i\"><input type=\"text\" class=\"svelte-1onji9i\"/> <svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper></span></label></div></div></div>");
function Je(e, t) {
	re(t, !0);
	let n = J(t, "checks", 31, () => P(Array(11).fill(!0))), r = J(t, "searchValue", 15, "");
	function i() {
		ge("fsh_LogChecks", W(n()));
	}
	function a() {
		i(), t.cbChange();
	}
	function o(e) {
		n(n().map(() => e)), i();
	}
	function s() {
		o(!0), t.selectAll();
	}
	function c() {
		o(!1), t.selectNone();
	}
	async function l() {
		n(await he("fsh_LogChecks") ?? Array(11).fill(!0));
	}
	l();
	var u = qe(), d = w(u), f = M(w(d), 2), p = w(f), m = M(w(p));
	z(m), m.value = m.__value = "1", I(p), I(f);
	var h = M(f, 2), g = w(h), _ = M(w(g));
	z(_), _.value = _.__value = "2", I(g), I(h);
	var y = M(h, 2), ee = w(y), x = M(w(ee));
	z(x), x.value = x.__value = "4", I(ee), I(y);
	var S = M(y, 2), te = w(S), T = M(w(te));
	z(T), T.value = T.__value = "5", I(te), I(S);
	var D = M(S, 2), O = w(D), A = M(w(O));
	z(A), A.value = A.__value = "6", I(O), I(D);
	var j = M(D, 2);
	$(w(j), {
		get onclick() {
			return t.oldGuildLog;
		},
		children: (e, t) => {
			B(), E(e, C("Old Guild Log"));
		},
		$$slots: { default: !0 }
	}), I(j);
	var N = M(j, 2), F = w(N), L = M(w(F));
	z(L), L.value = L.__value = "7", I(F), I(N);
	var R = M(N, 2), V = w(R), H = M(w(V));
	z(H), H.value = H.__value = "8", I(V), I(R);
	var ie = M(R, 2), G = w(ie), K = M(w(G));
	z(K), K.value = K.__value = "9", I(G), I(ie);
	var q = M(ie, 2), oe = w(q), Y = M(w(oe));
	z(Y), Y.value = Y.__value = "3", I(oe), I(q);
	var X = M(q, 2), ce = w(X), Z = M(w(ce));
	z(Z), Z.value = Z.__value = "10", I(ce), I(X);
	var Q = M(X, 2), le = w(Q), ue = M(w(le));
	z(ue), ue.value = ue.__value = "0", I(le), I(Q), I(d);
	var de = M(d, 2), fe = M(w(de), 2), pe = w(fe);
	Ce(w(pe), {
		onclick: s,
		children: (e, t) => {
			B(), E(e, C("Select All"));
		},
		$$slots: { default: !0 }
	}), I(pe);
	var me = M(pe, 2);
	Ce(w(me), {
		onclick: c,
		children: (e, t) => {
			B(), E(e, C("Select None"));
		},
		$$slots: { default: !0 }
	}), I(me);
	var _e = M(me, 2);
	Ce(w(_e), {
		get onclick() {
			return t.refresh;
		},
		children: (e, t) => {
			B(), E(e, C("Refresh"));
		},
		$$slots: { default: !0 }
	}), I(_e), I(fe);
	var ve = M(fe, 2), ye = w(ve), be = M(w(ye)), xe = w(be);
	z(xe);
	var Se = M(xe, 2);
	{
		let e = ae(() => !r());
		b(Se, () => ({ "--button-deco": "none" })), $(Se.lastChild, {
			get disabled() {
				return v(e);
			},
			get onclick() {
				return t.clearSearch;
			},
			children: (e, t) => {
				B(), E(e, C("×"));
			},
			$$slots: { default: !0 }
		}), I(Se);
	}
	I(be), I(ye), I(ve), I(de), I(u), k("change", m, a), U(m, () => n()[1], (e) => n(n()[1] = e, !0)), k("change", _, a), U(_, () => n()[2], (e) => n(n()[2] = e, !0)), k("change", x, a), U(x, () => n()[4], (e) => n(n()[4] = e, !0)), k("change", T, a), U(T, () => n()[5], (e) => n(n()[5] = e, !0)), k("change", A, a), U(A, () => n()[6], (e) => n(n()[6] = e, !0)), k("change", L, a), U(L, () => n()[7], (e) => n(n()[7] = e, !0)), k("change", H, a), U(H, () => n()[8], (e) => n(n()[8] = e, !0)), k("change", K, a), U(K, () => n()[9], (e) => n(n()[9] = e, !0)), k("change", Y, a), U(Y, () => n()[3], (e) => n(n()[3] = e, !0)), k("change", Z, a), U(Z, () => n()[10], (e) => n(n()[10] = e, !0)), k("change", ue, a), U(ue, () => n()[0], (e) => n(n()[0] = e, !0)), ne(xe, r), E(e, u), se();
}
T(["change"]);
//#endregion
//#region src/modules/app/guild/recruit/recruit.js
function Ye(e) {
	return ve({
		subcmd: "recruit",
		...e
	});
}
//#endregion
//#region src/modules/app/guild/recruit/view.js
function Xe() {
	return Ye({ subcmd2: "view" });
}
//#endregion
//#region src/modules/notepad/guildLog/LogItem.svelte
var Ze = x("<i class=\"fas fa-envelope\" aria-hidden=\"true\"></i>"), Qe = x("<a class=\"svelte-87xocm\"> </a>"), $e = x("[ <a class=\"svelte-87xocm\"><img class=\"svelte-87xocm\"/> </a> ]", 1), et = x("<!> <!>", 1), tt = x("<span class=\"action-buttons svelte-87xocm\">[ <!> | <!> ]</span>"), nt = x("<div class=\"rel svelte-87xocm\"> </div>"), rt = x("<div class=\"rel svelte-87xocm\"><span class=\"fshSpinner recruit-spinner svelte-87xocm\"></span></div>"), it = x("<!> <span class=\"action-buttons svelte-87xocm\">[ <!> | <!> | <!> | <!> ]</span>", 1), at = x("<span class=\"action-buttons svelte-87xocm\">[ <!> ]</span>"), ot = x("<div><a class=\"svelte-87xocm\"> </a>'s group looted an item</div>"), st = x("<div><div><!></div> <div><!></div> <div><!> <!> <!> <!></div></div>");
function ct(e, t) {
	re(t, !0);
	let n = J(t, "groupCombatItems", 3, null), s = J(t, "hideNonPlayerGuildLogMessages", 3, null), u = J(t, "logEntry", 3, null), f = G(P(Promise.resolve())), p = G("waiting");
	function m(e) {
		le("Guild Log", e);
	}
	let h = (e) => e;
	function _(e) {
		let t = e.msg.attachments?.filter((e) => e.type === 0);
		return t?.length && !t.filter(({ data: { id: e } }) => e === Te()).length;
	}
	async function y(e, t) {
		m(t), R(f, Xe(), !0);
		let n = await v(f);
		if (n?.s && g(n?.r)) {
			let r = n.r.find(({ player: { id: t } }) => t === e.id);
			r?.id ? fe(`${o}recruit&subcmd2=${t}&id=${r.id}`) : R(p, "gone");
		} else R(p, "error");
	}
	function b(e) {
		m("buff"), _e(e.id);
	}
	function x(e) {
		m("combat"), fe(`${l}combat&subcmd=view&combat_id=${e}`);
	}
	function S(e) {
		m("reply"), window.openQuickMsgDialog(e.name);
	}
	function te(e) {
		m("send"), fe(`${a}${e.name}`);
	}
	function T(e) {
		m("trade"), fe(`${i}${e.name}`);
	}
	var k = st();
	let F;
	var L = w(k);
	let ne;
	var z = w(L), U = (e) => {
		E(e, Ze());
	};
	D(z, (e) => {
		u().time && e(U);
	}), I(L);
	var W = M(L, 2);
	let ie;
	var K = w(W), oe = (e) => {
		var t = C();
		j((e) => V(t, e), [() => we(u().time)]), E(e, t);
	};
	D(K, (e) => {
		u().time && e(oe);
	}), I(W);
	var X = M(W, 2);
	let ce;
	var Z = w(X);
	A(Z, 17, () => u().msg.text.split(/<link=a(\d)><\/link>/).filter(h), ee, (e, t) => {
		var n = O(), i = N(n), a = (e) => {
			var n = et(), i = N(n), a = (e) => {
				var n = Qe(), r = w(n, !0);
				I(n), j(() => {
					q(n, "href", `${d ?? ""}${u().msg.attachments[v(t)].data.id ?? ""}`), V(r, u().msg.attachments[v(t)].data.name);
				}), E(e, n);
			};
			D(i, (e) => {
				u().msg.attachments[v(t)].type === 0 && e(a);
			});
			var o = M(i, 2), s = (e) => {
				var n = $e(), i = M(N(n)), a = w(i), o = M(a, 1, !0);
				I(i), B(), j(() => {
					q(i, "href", `${c ?? ""}${u().msg.attachments[v(t)].data.id ?? ""}`), q(a, "src", `${r ?? ""}guilds/${u().msg.attachments[v(t)].data.id ?? ""}_mini.png`), q(a, "alt", u().msg.attachments[v(t)].data.name), V(o, u().msg.attachments[v(t)].data.name);
				}), E(e, n);
			};
			D(o, (e) => {
				u().msg.attachments[v(t)].type === 1 && e(s);
			}), E(e, n);
		}, o = ae(() => v(t).length === 1 && !ye(Number(v(t)))), s = (e) => {
			var n = C();
			j(() => V(n, v(t))), E(e, n);
		};
		D(i, (e) => {
			v(o) ? e(a) : e(s, -1);
		}), E(e, n);
	});
	var Q = M(Z, 2);
	A(Q, 17, () => u().msg.attachments && u().msg.attachments.filter(({ type: e }) => e === 0), ee, (e, t) => {
		let n = () => v(t).data;
		var r = it(), i = N(r), a = (e) => {
			var t = O();
			H(N(t), () => v(f), (e) => {
				E(e, rt());
			}, (e) => {
				var t = O(), r = N(t), i = (e) => {
					var t = tt(), r = M(w(t));
					$(r, {
						onclick: () => y(n(), "acceptjoin"),
						children: (e, t) => {
							B(), E(e, C("Accept"));
						},
						$$slots: { default: !0 }
					}), $(M(r, 2), {
						onclick: () => y(n(), "denyjoin"),
						children: (e, t) => {
							B(), E(e, C("Deny"));
						},
						$$slots: { default: !0 }
					}), B(), I(t), E(e, t);
				}, a = (e) => {
					var t = nt(), n = w(t, !0);
					I(t), j(() => V(n, v(p))), E(e, t);
				};
				D(r, (e) => {
					v(p) === "waiting" ? e(i) : e(a, -1);
				}), E(e, t);
			}), E(e, t);
		};
		D(i, (e) => {
			u().type === 21 && e(a);
		});
		var o = M(i, 2), s = M(w(o));
		$(s, {
			onclick: () => S(n()),
			children: (e, t) => {
				B(), E(e, C("Reply"));
			},
			$$slots: { default: !0 }
		});
		var c = M(s, 2);
		$(c, {
			onclick: () => b(n()),
			children: (e, t) => {
				B(), E(e, C("Buff"));
			},
			$$slots: { default: !0 }
		});
		var l = M(c, 2);
		$(l, {
			onclick: () => te(n()),
			children: (e, t) => {
				B(), E(e, C("Send"));
			},
			$$slots: { default: !0 }
		}), $(M(l, 2), {
			onclick: () => T(n()),
			children: (e, t) => {
				B(), E(e, C("Trade"));
			},
			$$slots: { default: !0 }
		}), B(), I(o), E(e, r);
	});
	var ue = M(Q, 2);
	A(ue, 17, () => u().msg.attachments && u().msg.attachments.filter(({ type: e }) => e === 11), ee, (e, t) => {
		let n = () => v(t).data;
		var r = at();
		$(M(w(r)), {
			onclick: () => x(n()),
			children: (e, t) => {
				B(), E(e, C("View Combat"));
			},
			$$slots: { default: !0 }
		}), B(), I(r), E(e, r);
	});
	var de = M(ue, 2), pe = (e) => {
		var t = O();
		H(N(t), () => Ee(u().time, u().msg.attachments[0].data), null, (e, t) => {
			var n = O(), r = N(n), i = (e) => {
				var n = ot(), r = w(n), i = w(r, !0);
				I(r), B(), I(n), j(() => {
					q(r, "href", `${d ?? ""}${v(t).r.combat.attacker.group.players[0].id ?? ""}`), V(i, v(t).r.combat.attacker.group.players[0].name);
				}), E(e, n);
			};
			D(r, (e) => {
				v(t)?.r?.combat?.items?.[0] && e(i);
			}), E(e, n);
		}), E(e, t);
	}, me = ae(() => u().type === 17 && n() && u().msg.text.includes("victorious"));
	D(de, (e) => {
		v(me) && e(pe);
	}), I(X), I(k), j((e) => {
		F = Y(k, 1, "row-container svelte-87xocm", null, F, e), ne = Y(L, 1, "svelte-87xocm", null, ne, {
			old: u().old,
			new: u().new
		}), ie = Y(W, 1, "svelte-87xocm", null, ie, {
			old: u().old,
			new: u().new
		}), ce = Y(X, 1, "svelte-87xocm", null, ce, {
			old: u().old,
			new: u().new
		});
	}, [() => ({
		"not-self": s() && _(u()),
		separator: u().index
	})]), E(e, k), se();
}
//#endregion
//#region src/modules/notepad/guildLog/profiler.js
var lt = [
	[],
	["(Potion)"],
	[
		"recalled the item",
		"took the item",
		"auto-returned the",
		"stored the item"
	],
	[
		"has added flags to",
		"has removed flags to",
		"has added tags to",
		"has removed some tags from"
	],
	[
		"relic. This relic now has an empower level of",
		"relic. The relic empower level has been reset to zero.",
		"failed to capture the relic",
		"captured the relic",
		"captured your relic",
		"has captured the undefended relic",
		"attempted to capture your relic",
		/ empowered the .+ relic/,
		/ removed the empowerment from the .+ relic/
	],
	["disbanded a mercenary.", "hired the mercenary"],
	["has disbanded one of their groups", /A group from your guild was (.*) in combat./],
	[/deposited [,0-9]+ gold into the guild bank/, /deposited [,0-9]+ Fallen Sword Points into the guild./],
	[
		"has added a new rank entitled",
		"has deleted the rank",
		"has requested to join the guild",
		"has invited the player",
		"has officially joined the guild",
		"has been kicked from the guild by",
		"has left the guild",
		"has been assigned the rank",
		"has added/updated a rank entitled",
		"has been stripped of their rank by",
		/has revoked .+'s invite to the guild/,
		"has been rejected from joining the guild"
	],
	[
		/resulted in .* with a final score of/,
		"resulted in a draw. Your GvG rating ",
		"has just initiated a conflict with",
		"has initiated a conflict with your guild",
		"is participating in the conflict against"
	],
	[
		"Titan Reward item",
		"from your guild's contribution to the defeat of the titan",
		"7 day cooldown has been activated on your guild for this titan"
	]
];
function ut(e, t) {
	return p(t) ? e.includes(t) : t.test(e);
}
function dt(e, t) {
	return t.some(Z(ut, e));
}
function ft(e) {
	let t = lt.findIndex(Z(dt, e));
	return t === -1 ? 0 : t;
}
//#endregion
//#region src/modules/notepad/guildLog/GuildLog.svelte
var pt = x("<span class=\"white svelte-ertdo2\">(Guild Log messages not involving self are dimmed!)</span>"), mt = x("<div class=\"vs svelte-ertdo2\"><!></div>"), ht = x(" <br/>", 1), gt = x("<div class=\"fsh-guild-log svelte-ertdo2\"><!> <div class=\"row-container svelte-ertdo2\"><div class=\"innerColumnHeader svelte-ertdo2\">&nbsp;</div> <div class=\"innerColumnHeader svelte-ertdo2\">Date</div> <div class=\"innerColumnHeader svelte-ertdo2\">Message <!></div></div> <!></div>");
function _t(e, t) {
	re(t, !0);
	let n = J(t, "visible", 15, !0), r = G(P(Array(11).fill(!0))), i = G(null), a = G(null), o = G(P([])), s = G(P(Promise.resolve())), c = G(P([])), l = G(""), d = ae(() => {
		let e = v(r), t = v(l).toLowerCase();
		return (n) => e[n.fshType] ? t === "" ? !0 : n.searchable.includes(t) : !1;
	}), p = ae(() => v(r).join(",") + "|" + v(l)), h = (e) => e.id, g = 0, _ = 0, y = null, b = null, x = null, te = ({ msg: e }) => e.text.replace(/<link=a(\d)><\/link>/g, (t, n) => e.attachments[n].data.name), T = (e) => ({
		...e,
		id: _++,
		fshType: ft(e.msg.text),
		new: y && e.time > b,
		old: y && (x - e.time) / 60 > 20 && e.time <= b,
		searchable: te(e).toLowerCase()
	}), k = (e, t) => t.time - e.time;
	function F(e) {
		le("Guild Log", e);
	}
	function L() {
		F("close"), n(!1);
	}
	function ne() {
		F("cbChange");
	}
	function z() {
		F("selectAll");
	}
	function U() {
		F("selectNone");
	}
	function W() {
		F("oldGuildLog"), fe(u);
	}
	function ie() {
		F("clearSearch"), R(l, "");
	}
	function K() {
		R(c, ["Loading..."], !0), R(o, [], !0), _ = 0, x = (/* @__PURE__ */ new Date()).setUTCSeconds(0, 0) / 1e3, b = f("lastModalGuildLogCheck") ?? x, m("lastModalGuildLogCheck", x);
	}
	function q() {
		y = f("enableLogColoring"), R(i, f("groupCombatItems"), !0), R(a, f("hideNonPlayerGuildLogMessages"), !0);
	}
	function oe(e) {
		R(c, v(c).concat(e), !0);
	}
	function Y(e) {
		if (e) {
			oe(e);
			return;
		}
		g += 1, oe(`chunk ${g}`);
	}
	function X() {
		g = 0, be("guildLog-progress", Y);
	}
	async function ce() {
		K(), q(), X();
		let e = await Ke();
		e && R(o, e.toSorted(k).map(T), !0);
	}
	function Z() {
		R(s, ce(), !0);
	}
	S(() => {
		n() && Z();
	}), Q(e, {
		close: L,
		get visible() {
			return n();
		},
		title: (e) => {
			B(), E(e, C("Guild Log"));
		},
		children: (e, t) => {
			var n = gt(), u = w(n);
			Je(u, {
				cbChange: ne,
				clearSearch: ie,
				oldGuildLog: W,
				refresh: Z,
				selectAll: z,
				selectNone: U,
				get checks() {
					return v(r);
				},
				set checks(e) {
					R(r, e, !0);
				},
				get searchValue() {
					return v(l);
				},
				set searchValue(e) {
					R(l, e, !0);
				}
			});
			var f = M(u, 2), m = M(w(f), 4), g = M(w(m)), _ = (e) => {
				E(e, pt());
			};
			D(g, (e) => {
				v(a) && e(_);
			}), I(m), I(f), H(M(f, 2), () => v(s), (e) => {
				var t = O();
				A(N(t), 17, () => v(c), ee, (e, t) => {
					B();
					var n = ht(), r = N(n);
					B(), j(() => V(r, `${v(t) ?? ""} `)), E(e, n);
				}), E(e, t);
			}, (e) => {
				var t = mt();
				Ae(w(t), {
					get items() {
						return v(o);
					},
					get filter() {
						return v(d);
					},
					get filterKey() {
						return v(p);
					},
					getKey: h,
					debounceMs: 50,
					overscan: 20,
					estimatedHeight: 22,
					children: (e, t) => {
						let n = () => t?.().item;
						ct(e, {
							get groupCombatItems() {
								return v(i);
							},
							get hideNonPlayerGuildLogMessages() {
								return v(a);
							},
							get logEntry() {
								return n();
							}
						});
					},
					$$slots: { default: !0 }
				}), I(t), E(e, t);
			}, (e, t) => {
				var n = C();
				j(() => V(n, v(t))), E(e, n);
			}), I(n), E(e, n);
		},
		$$slots: {
			title: !0,
			default: !0
		}
	}), se();
}
//#endregion
//#region src/modules/notepad/guildLog/mountGuildLog.svelte.js
var vt = P({ visible: !0 }), yt = 0;
function bt() {
	yt ? vt.visible = !0 : yt = _(_t, {
		props: vt,
		target: document.body
	});
}
//#endregion
export { bt as t };

//# sourceMappingURL=mountGuildLog.svelte-C6nf9j4a.js.map