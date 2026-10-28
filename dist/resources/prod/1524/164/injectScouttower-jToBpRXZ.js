import { t as e } from "./getText-BqjgTHLv.js";
import { n as t } from "./now-B3pCBQja.js";
import { K as n, nt as r } from "./constants-CenxlFMY.js";
import { t as i } from "./querySelector-C6ReNysW.js";
import { t as a } from "./getUrlParameter-DQUJPuXf.js";
import { B as o, F as s, G as c, H as l, I as u, L as d, M as f, N as ee, R as p, St as m, U as h, W as g, Z as _, et as v, ft as y, gt as te, h as ne, it as re, lt as b, nt as x, pt as S, q as C, rt as w, st as T, tt as E, ut as D, v as O, vt as k, yt as A } from "./disclose-version-gxrYovMN.js";
import { t as ie } from "./arrayFrom-CKk6qt2j.js";
import { t as ae } from "./getElementsByTagName-B8gMqefB.js";
import { t as oe } from "./layout-B2Q1UoM2.js";
import { t as j } from "./sendEvent-DkxfZozg.js";
import { t as M } from "./entries-PXiXtjwA.js";
import { t as N } from "./setInnerHtml-f0MFRJnQ.js";
import { t as se } from "./alpha-BRx-EQ4u.js";
import { t as P } from "./containsText-BpUZGVhy.js";
import { t as F } from "./onclick-nv-Fl1th.js";
import { t as I } from "./uniq-DgWt7KlP.js";
import { n as L, r as R } from "./idb-D8xqEbs-.js";
import { t as z } from "./fromEntries-BytjDDMx.js";
import { t as B } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as V } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as H } from "./hasClass-B8BlPKl4.js";
import { t as U } from "./getPlayerId-DtAI89Cf.js";
import { t as W } from "./openQuickBuffById-B66eBgWb.js";
import { t as G } from "./dataRows-De29j_4W.js";
import { t as K } from "./parseDateAsTimestamp-CdtzIDN9.js";
import { t as q } from "./LinkBtnBracketed-C2pSnAm8.js";
import { t as ce } from "./closestTable-B73T3rIi.js";
import { t as le } from "./toggleForce-DTdXZaY8.js";
import { t as J } from "./roundToString-CaKiZD15.js";
import { n as Y, r as X, t as ue } from "./getTitanString-sRtib-pR.js";
import { t as Z } from "./ufsgMonsterLink-HaSuIuny.js";
// src/modules/common/getTitle.js
function Q(e) {
	return e.getAttribute("oldtitle") || e.getAttribute("title");
}
// src/modules/guild/scoutTower/injectScouttowerBuffLinks.js
function de(e) {
	e.previousElementSibling && (j("scout tower", "buffIndividual"), W(U(e.previousElementSibling.href)));
}
var fe = (e) => U(e.cells[0].children[0].href);
function pe(e) {
	let t = e.parentNode.parentNode.parentNode.parentNode, n = G(t, 3, 0).map(fe).join();
	j("scout tower", "buffAll"), W(n);
}
function me(e) {
	let { target: t } = e;
	P("[b]", t) && de(t), P("all", t) && pe(t);
}
function he(e) {
	H("fshBl", e.target) && me(e);
}
function ge(e) {
	V(e.cells[0], " <button class=\"fshBl fshXSmall\">[b]</button>");
}
function _e(e) {
	G(e, 3, 0).forEach(ge), V(e.rows[0].cells[0], " <button class=\"fshBl fshXSmall\">all</button>");
}
function ve(e, t) {
	return e.rows.length > 1 && t > 1;
}
function ye(e) {
	ie(e).filter(ve).forEach(_e), F(e[1], he);
}
function be(e) {
	e.length > 2 && ye(e);
}
// src/modules/guild/scoutTower/killsSummary.js
function xe(e, t, n) {
	return `<br><span class="fshBlue"> (${J(Y(n - t, e), 2)}% Current <br>${J(e * 100 / n, 2)}% Total<br>${ue(e, n, t)})`;
}
function Se(t) {
	let n = t.hp.split("/");
	V(t.tr.cells[3], xe(Number(e(t.tr.cells[3])), Number(n[0]), Number(n[1])));
}
function Ce(e) {
	e.active && Se(e);
}
// src/modules/guild/scoutTower/Cooldown.svelte
var we = l("<tr><td class=\"svelte-2mevpu\"> </td><td class=\"cd svelte-2mevpu\"> </td><td class=\"svelte-2mevpu\"> </td></tr>"), Te = l("<table class=\"svelte-2mevpu\"><tbody><tr><td class=\"header svelte-2mevpu\">Titan</td><td class=\"header svelte-2mevpu\">Cooldown</td><td class=\"header svelte-2mevpu\">Visible</td></tr><!></tbody></table>");
function Ee(e, n) {
	S(n, !0);
	let r = ([, e]) => e.coolTime > t(), i = ([, e], [, t]) => e.coolTime - t.coolTime, a = () => M(n.theTitans).filter(r).sort(i);
	var s = Te(), c = v(s), l = w(v(c));
	f(l, 17, a, ([e, t]) => e, (e, t) => {
		var n = D(() => m(C(t), 2));
		let r = () => C(n)[0], i = () => C(n)[1];
		var a = we(), s = v(a), c = x(s, !0), l = w(s), u = x(l, !0), d = w(l), f = x(d, !0);
		A(a), _(() => {
			p(c, r()), p(u, i().cooldownText), p(f, i().seen);
		}), o(e, a);
	}), A(c), A(s), o(e, s), y();
}
// src/modules/guild/scoutTower/TitanFilter.svelte
var De = l("<tr><td class=\"header svelte-rzcaop\" colspan=\"3\"></td></tr> <tr><td colspan=\"3\" class=\"svelte-rzcaop\"><label class=\"svelte-rzcaop\"><input type=\"checkbox\"/> Securable</label></td></tr>", 1), Oe = l("<label class=\"titan-label svelte-rzcaop\"><input type=\"checkbox\"/> </label>"), ke = l("<div id=\"titan-list\" class=\"svelte-rzcaop\"></div> <div class=\"svelte-rzcaop\"><!> <!></div>", 1), Ae = l("<table class=\"svelte-rzcaop\"><tbody><!><tr><td class=\"header svelte-rzcaop\" colspan=\"3\"></td></tr><tr><td colspan=\"3\" class=\"svelte-rzcaop\"><!></td></tr><tr><td class=\"header svelte-rzcaop\" colspan=\"3\"></td></tr></tbody></table>");
function je(e, t) {
	S(t, !0);
	let n = "fsh_titanFilter", r = b(!1), i = b(re([])), l = ([e], [t]) => se(e, t), d = () => L(n), g = () => R(n, {
		securable: te(C(r)),
		titans: te(C(i))
	}), x = ({ titanName: e }) => C(i).find(([t]) => t === e)[1], ae = () => M({
		...z(M(t.theTitans).map(([e]) => [e, !0])),
		...z(C(i).map(([e, t]) => [X(e), t]))
	}).sort(l), oe = (e) => e.securable || !C(r);
	function N(e) {
		return x(e) && oe(e);
	}
	function P([e, t]) {
		let n = ie(ce(e.tr).rows), r = e.tr.rowIndex;
		n.slice(r, r + 6).forEach((e) => le(e, !t)), e.visible = t;
	}
	function F() {
		t.titanRows.map((e) => [e, N(e)]).filter(([e, t]) => e.visible !== t).forEach(P);
	}
	async function I() {
		let e = await d();
		e && (T(r, e.securable, !0), T(i, e.titans, !0)), T(i, ae(), !0), F();
	}
	function B() {
		g(), F();
	}
	function V() {
		j("TitanFilter", "toggleSecurable"), B();
	}
	function H() {
		j("TitanFilter", "toggleTitan"), B();
	}
	function U() {
		j("TitanFilter", "selectAll"), T(i, C(i).map(([e]) => [e, !0]), !0), B();
	}
	function W() {
		j("TitanFilter", "selectNone"), T(i, C(i).map(([e]) => [e, !1]), !0), B();
	}
	var G = Ae(), K = v(G), J = v(K), Y = (e) => {
		var t = De(), n = w(E(t), 2), i = v(n), a = v(i), s = v(a);
		O(s), k(), A(a), A(i), A(n), c("change", s, V), ne(s, () => C(r), (e) => T(r, e)), o(e, t);
	}, ue = D(() => a("tab") !== "completed");
	s(J, (e) => {
		C(ue) && e(Y);
	});
	var Z = w(J, 2), Q = v(Z), de = v(Q);
	u(de, I, null, (e) => {
		var t = ke(), n = E(t);
		f(n, 21, () => C(i), ee, (e, t, n) => {
			var r = D(() => m(C(t), 1));
			let a = () => C(r)[0];
			var s = Oe(), l = v(s);
			O(l);
			var u = w(l);
			A(s), _(() => p(u, ` ${a() ?? ""}`)), c("change", l, H), ne(l, () => C(i)[n][1], (e) => C(i)[n][1] = e), o(e, s);
		}), A(n);
		var r = w(n, 2), a = v(r);
		q(a, {
			onclick: U,
			children: (e, t) => {
				k();
				var n = h("Select All");
				o(e, n);
			},
			$$slots: { default: !0 }
		});
		var s = w(a, 2);
		q(s, {
			onclick: W,
			children: (e, t) => {
				k();
				var n = h("Select None");
				o(e, n);
			},
			$$slots: { default: !0 }
		}), A(r), o(e, t);
	}), A(Q), A(Z), k(), A(K), A(G), o(e, G), y();
}
g(["change"]);
// src/modules/guild/scoutTower/TitanTracker.svelte
var Me = l("<tr><td colspan=\"3\"><!> <!></td></tr>");
function Ne(e, t) {
	var n = Me(), r = v(n), i = v(r);
	Ee(i, { get theTitans() {
		return t.theTitans;
	} }), je(w(i, 2), {
		get theTitans() {
			return t.theTitans;
		},
		get titanRows() {
			return t.titanRows;
		}
	}), A(r), A(n), o(e, n);
}
// src/modules/guild/scoutTower/titanTracker.js
function Pe(e, t, n) {
	return d(Ne, {
		anchor: e.rows[5],
		props: {
			theTitans: t,
			titanRows: n
		},
		target: e.children[0]
	});
}
var Fe = (e) => e?.includes("until") ? K(e.replace("Cooldown until: ", "")) : 0;
function Ie(t) {
	let n = e(t.nextElementSibling.cells[0]);
	return n.startsWith("Cooldown until: ") || (n = e(t.cells[4])), {
		cooldownText: n,
		coolTime: Fe(n),
		seen: "yes"
	};
}
var Le = ({ titanName: e, tr: t }) => [e, Ie(t)];
function Re(e, n) {
	return z(M(e).map(([e, t]) => [X(e), t]).filter(([e]) => !n[e]).filter(([, e]) => e.coolTime > t()).map(([e, t]) => [e, {
		...t,
		seen: "no"
	}]));
}
function ze(e, t) {
	let n = z(I(t, "titanName").map(Le));
	return {
		...n,
		...e && Re(e, n)
	};
}
async function Be(e, t) {
	let n = ze(await L("fsh_titans"), t);
	e[0].rows.length > 5 && Pe(e[0], n, t), R("fsh_titans", n);
}
// src/modules/guild/scoutTower/injectScouttower.js
function Ve(e) {
	let [t] = e.tr.cells[0].children;
	Z("scoutTower", t);
}
function He(e) {
	e.target.tagName === "A" && j("scoutTower", "realmLink");
}
function Ue(t) {
	let [, n] = t.tr.cells, i = e(n);
	N(`<a href="${r}realms&search_name=${i}" target="_blank">${i}</a>`, n), F(n, He);
}
function We(e) {
	V(e.tr.cells[0], e.titanName);
}
function Ge(e) {
	Ve(e), We(e);
}
function Ke(e) {
	Ce(e), Ge(e), Ue(e);
}
function qe(e) {
	return Q(i("img", e));
}
var Je = (t) => ({
	guildKills: Number(e(t.cells[3])),
	hp: "-",
	titanName: X(qe(t)),
	tr: t,
	visible: !0
}), Ye = (t) => ({
	guildKills: Number(e(t.cells[3])),
	hp: e(t.cells[2]),
	titanName: X(qe(t)),
	tr: t,
	visible: !0
}), Xe = (e) => ({
	...e,
	active: !e.hp.includes("-"),
	titanHp: e.hp.split("/").map(Number)
}), $ = (e) => ({
	...e,
	securable: e.active && Math.ceil(e.titanHp[1] / 2 + 1) - e.guildKills <= e.titanHp[0]
}), Ze = (e) => G(e[1], 4, 0)?.map(Ye).map(Xe).map($), Qe = (e) => G(e[1], 5, 0)?.map(Je).map(Xe).map($);
function $e() {
	if (B()) return;
	let e = ae(n, oe());
	if (!e?.length) return;
	be(e);
	let t = a("tab") === "completed" ? Qe(e) : Ze(e);
	t && (t.forEach(Ke), Be(e, t));
}
export { $e as default };

//# sourceMappingURL=injectScouttower-jToBpRXZ.js.map