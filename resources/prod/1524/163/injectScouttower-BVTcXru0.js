import { t as e } from "./getText-BybFkJV6.js";
import { n as t } from "./now-CA_NVGr7.js";
import { K as n, nt as r } from "./constants-CIKidKvt.js";
import { t as i } from "./querySelector-8FH1hhUv.js";
import { t as a } from "./getUrlParameter-OG9FsMwx.js";
import { A as o, B as s, E as c, F as l, I as u, J as d, L as f, N as p, O as ee, R as te, T as m, W as h, X as g, Y as ne, Z as re, _t as _, bt as v, dt as y, et as b, f as x, gt as S, j as C, k as ie, l as ae, mt as w, nt as T, rt as E, ut as D } from "./disclose-version-Bvjv4_yw.js";
import { t as O } from "./arrayFrom-B0aMFj4F.js";
import { t as k } from "./getElementsByTagName-CkoUUI_g.js";
import { t as A } from "./layout-6CPY-bfq.js";
import { t as j } from "./sendEvent-DFQy5lFi.js";
import { t as M } from "./entries-CiJ6YMwx.js";
import { t as oe } from "./setInnerHtml-Dh9y9Se-.js";
import { t as se } from "./alpha-Dzfd-64M.js";
import { t as N } from "./containsText-DYGH6hdF.js";
import { t as P } from "./onclick-8ZwMJyqI.js";
import { t as F } from "./uniq-BIFd13I0.js";
import { n as I, r as L } from "./idb-BvD4EIHy.js";
import { t as R } from "./fromEntries-CXGCeH0k.js";
import { t as z } from "./jQueryNotPresent-UT8-ZycH.js";
import { t as B } from "./insertHtmlBeforeEnd-D5-rjWCh.js";
import { t as V } from "./hasClass-B5HBqSaS.js";
import { t as H } from "./getPlayerId-DOaPZMl6.js";
import { t as U } from "./openQuickBuffById-B9fhtNQi.js";
import { t as W } from "./dataRows-BlMmmxmo.js";
import { t as G } from "./parseDateAsTimestamp-DjNjeXQc.js";
import { t as K } from "./LinkBtnBracketed-gMsPs3Lo.js";
import { t as ce } from "./closestTable-B_Km1mKH.js";
import { t as le } from "./toggleForce-CGKf4S1c.js";
import { t as q } from "./roundToString-GwdvYP3d.js";
import { n as J, r as Y, t as X } from "./getTitanString-Ah44RPli.js";
import { t as ue } from "./ufsgMonsterLink-B2NKq12t.js";
//#region src/modules/common/getTitle.js
function Z(e) {
	return e.getAttribute("oldtitle") || e.getAttribute("title");
}
//#endregion
//#region src/modules/guild/scoutTower/injectScouttowerBuffLinks.js
function Q(e) {
	e.previousElementSibling && (j("scout tower", "buffIndividual"), U(H(e.previousElementSibling.href)));
}
var de = (e) => H(e.cells[0].children[0].href);
function fe(e) {
	let t = e.parentNode.parentNode.parentNode.parentNode, n = W(t, 3, 0).map(de).join();
	j("scout tower", "buffAll"), U(n);
}
function pe(e) {
	let { target: t } = e;
	N("[b]", t) && Q(t), N("all", t) && fe(t);
}
function me(e) {
	V("fshBl", e.target) && pe(e);
}
function he(e) {
	B(e.cells[0], " <button class=\"fshBl fshXSmall\">[b]</button>");
}
function ge(e) {
	W(e, 3, 0).forEach(he), B(e.rows[0].cells[0], " <button class=\"fshBl fshXSmall\">all</button>");
}
function _e(e, t) {
	return e.rows.length > 1 && t > 1;
}
function ve(e) {
	O(e).filter(_e).forEach(ge), P(e[1], me);
}
function ye(e) {
	e.length > 2 && ve(e);
}
//#endregion
//#region src/modules/guild/scoutTower/killsSummary.js
function be(e, t, n) {
	return `<br><span class="fshBlue"> (${q(J(n - t, e), 2)}% Current <br>${q(e * 100 / n, 2)}% Total<br>${X(e, n, t)})`;
}
function xe(t) {
	let n = t.hp.split("/");
	B(t.tr.cells[3], be(Number(e(t.tr.cells[3])), Number(n[0]), Number(n[1])));
}
function Se(e) {
	e.active && xe(e);
}
//#endregion
//#region src/modules/guild/scoutTower/Cooldown.svelte
var Ce = l("<tr><td class=\"svelte-2mevpu\"> </td><td class=\"cd svelte-2mevpu\"> </td><td class=\"svelte-2mevpu\"> </td></tr>"), we = l("<table class=\"svelte-2mevpu\"><tbody><tr><td class=\"header svelte-2mevpu\">Titan</td><td class=\"header svelte-2mevpu\">Cooldown</td><td class=\"header svelte-2mevpu\">Visible</td></tr><!></tbody></table>");
function Te(e, n) {
	y(n, !0);
	let r = ([, e]) => e.coolTime > t(), i = ([, e], [, t]) => e.coolTime - t.coolTime, a = () => M(n.theTitans).filter(r).sort(i);
	var o = we(), c = d(o);
	m(g(d(c)), 17, a, ([e, t]) => e, (e, t) => {
		var n = E(() => v(s(t), 2));
		let r = () => s(n)[0], i = () => s(n)[1];
		var a = Ce(), o = d(a), c = d(o, !0);
		_(o);
		var l = g(o), u = d(l, !0);
		_(l);
		var f = g(l), ee = d(f, !0);
		_(f), _(a), h(() => {
			C(c, r()), C(u, i().cooldownText), C(ee, i().seen);
		}), p(e, a);
	}), _(c), _(o), p(e, o), D();
}
//#endregion
//#region src/modules/guild/scoutTower/TitanFilter.svelte
var Ee = l("<tr><td class=\"header svelte-rzcaop\" colspan=\"3\"></td></tr> <tr><td colspan=\"3\" class=\"svelte-rzcaop\"><label class=\"svelte-rzcaop\"><input type=\"checkbox\"/> Securable</label></td></tr>", 1), De = l("<label class=\"titan-label svelte-rzcaop\"><input type=\"checkbox\"/> </label>"), Oe = l("<div id=\"titan-list\" class=\"svelte-rzcaop\"></div> <div class=\"svelte-rzcaop\"><!> <!></div>", 1), ke = l("<table class=\"svelte-rzcaop\"><tbody><!><tr><td class=\"header svelte-rzcaop\" colspan=\"3\"></td></tr><tr><td colspan=\"3\" class=\"svelte-rzcaop\"><!></td></tr><tr><td class=\"header svelte-rzcaop\" colspan=\"3\"></td></tr></tbody></table>");
function Ae(e, t) {
	y(t, !0);
	let n = "fsh_titanFilter", r = T(!1), i = T(re([])), o = ([e], [t]) => se(e, t), l = () => I(n), f = () => L(n, {
		securable: w(s(r)),
		titans: w(s(i))
	}), k = ({ titanName: e }) => s(i).find(([t]) => t === e)[1], A = () => M({
		...R(M(t.theTitans).map(([e]) => [e, !0])),
		...R(s(i).map(([e, t]) => [Y(e), t]))
	}).sort(o), oe = (e) => e.securable || !s(r);
	function N(e) {
		return k(e) && oe(e);
	}
	function P([e, t]) {
		let n = O(ce(e.tr).rows), r = e.tr.rowIndex;
		n.slice(r, r + 6).forEach((e) => le(e, !t)), e.visible = t;
	}
	function F() {
		t.titanRows.map((e) => [e, N(e)]).filter(([e, t]) => e.visible !== t).forEach(P);
	}
	async function z() {
		let e = await l();
		e && (b(r, e.securable, !0), b(i, e.titans, !0)), b(i, A(), !0), F();
	}
	function B() {
		f(), F();
	}
	function V() {
		j("TitanFilter", "toggleSecurable"), B();
	}
	function H() {
		j("TitanFilter", "toggleTitan"), B();
	}
	function U() {
		j("TitanFilter", "selectAll"), b(i, s(i).map(([e]) => [e, !0]), !0), B();
	}
	function W() {
		j("TitanFilter", "selectNone"), b(i, s(i).map(([e]) => [e, !1]), !0), B();
	}
	var G = ke(), q = d(G), J = d(q), X = (e) => {
		var t = Ee(), n = g(ne(t), 2), i = d(n), a = d(i), o = d(a);
		x(o), S(), _(a), _(i), _(n), te("change", o, V), ae(o, () => s(r), (e) => b(r, e)), p(e, t);
	}, ue = E(() => a("tab") !== "completed");
	ee(J, (e) => {
		s(ue) && e(X);
	});
	var Z = g(J, 2), Q = d(Z);
	ie(d(Q), z, null, (e) => {
		var t = Oe(), n = ne(t);
		m(n, 21, () => s(i), c, (e, t, n) => {
			var r = E(() => v(s(t), 1));
			let a = () => s(r)[0];
			var o = De(), c = d(o);
			x(c);
			var l = g(c);
			_(o), h(() => C(l, ` ${a() ?? ""}`)), te("change", c, H), ae(c, () => s(i)[n][1], (e) => s(i)[n][1] = e), p(e, o);
		}), _(n);
		var r = g(n, 2), a = d(r);
		K(a, {
			onclick: U,
			children: (e, t) => {
				S(), p(e, u("Select All"));
			},
			$$slots: { default: !0 }
		}), K(g(a, 2), {
			onclick: W,
			children: (e, t) => {
				S(), p(e, u("Select None"));
			},
			$$slots: { default: !0 }
		}), _(r), p(e, t);
	}), _(Q), _(Z), S(), _(q), _(G), p(e, G), D();
}
f(["change"]);
//#endregion
//#region src/modules/guild/scoutTower/TitanTracker.svelte
var je = l("<tr><td colspan=\"3\"><!> <!></td></tr>");
function Me(e, t) {
	var n = je(), r = d(n), i = d(r);
	Te(i, { get theTitans() {
		return t.theTitans;
	} }), Ae(g(i, 2), {
		get theTitans() {
			return t.theTitans;
		},
		get titanRows() {
			return t.titanRows;
		}
	}), _(r), _(n), p(e, n);
}
//#endregion
//#region src/modules/guild/scoutTower/titanTracker.js
function Ne(e, t, n) {
	return o(Me, {
		anchor: e.rows[5],
		props: {
			theTitans: t,
			titanRows: n
		},
		target: e.children[0]
	});
}
var Pe = (e) => e?.includes("until") ? G(e.replace("Cooldown until: ", "")) : 0;
function Fe(t) {
	let n = e(t.nextElementSibling.cells[0]);
	return n.startsWith("Cooldown until: ") || (n = e(t.cells[4])), {
		cooldownText: n,
		coolTime: Pe(n),
		seen: "yes"
	};
}
var Ie = ({ titanName: e, tr: t }) => [e, Fe(t)];
function Le(e, n) {
	return R(M(e).map(([e, t]) => [Y(e), t]).filter(([e]) => !n[e]).filter(([, e]) => e.coolTime > t()).map(([e, t]) => [e, {
		...t,
		seen: "no"
	}]));
}
function Re(e, t) {
	let n = R(F(t, "titanName").map(Ie));
	return {
		...n,
		...e && Le(e, n)
	};
}
async function ze(e, t) {
	let n = Re(await I("fsh_titans"), t);
	e[0].rows.length > 5 && Ne(e[0], n, t), L("fsh_titans", n);
}
//#endregion
//#region src/modules/guild/scoutTower/injectScouttower.js
function Be(e) {
	let [t] = e.tr.cells[0].children;
	ue("scoutTower", t);
}
function Ve(e) {
	e.target.tagName === "A" && j("scoutTower", "realmLink");
}
function He(t) {
	let [, n] = t.tr.cells, i = e(n);
	oe(`<a href="${r}realms&search_name=${i}" target="_blank">${i}</a>`, n), P(n, Ve);
}
function Ue(e) {
	B(e.tr.cells[0], e.titanName);
}
function We(e) {
	Be(e), Ue(e);
}
function Ge(e) {
	Se(e), We(e), He(e);
}
function Ke(e) {
	return Z(i("img", e));
}
var qe = (t) => ({
	guildKills: Number(e(t.cells[3])),
	hp: "-",
	titanName: Y(Ke(t)),
	tr: t,
	visible: !0
}), Je = (t) => ({
	guildKills: Number(e(t.cells[3])),
	hp: e(t.cells[2]),
	titanName: Y(Ke(t)),
	tr: t,
	visible: !0
}), Ye = (e) => ({
	...e,
	active: !e.hp.includes("-"),
	titanHp: e.hp.split("/").map(Number)
}), $ = (e) => ({
	...e,
	securable: e.active && Math.ceil(e.titanHp[1] / 2 + 1) - e.guildKills <= e.titanHp[0]
}), Xe = (e) => W(e[1], 4, 0)?.map(Je).map(Ye).map($), Ze = (e) => W(e[1], 5, 0)?.map(qe).map(Ye).map($);
function Qe() {
	if (z()) return;
	let e = k(n, A());
	if (!e?.length) return;
	ye(e);
	let t = a("tab") === "completed" ? Ze(e) : Xe(e);
	t && (t.forEach(Ge), ze(e, t));
}
//#endregion
export { Qe as default };

//# sourceMappingURL=injectScouttower-BVTcXru0.js.map