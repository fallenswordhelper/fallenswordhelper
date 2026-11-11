import { t as e } from "./sendEvent-DdWrU3DL.js";
import { t } from "./dataRows-De29j_4W.js";
import { t as n } from "./getElementsByTagName-B8gMqefB.js";
import { t as r } from "./getText-BqjgTHLv.js";
import { t as i } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as a } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as o } from "./onclick-nv-Fl1th.js";
import { t as s } from "./querySelector-C6ReNysW.js";
import { n as c, r as l, t as u } from "./getTitanString-sRtib-pR.js";
import { t as d } from "./ufsgMonsterLink-CWrN2FOn.js";
import { t as f } from "./setInnerHtml-f0MFRJnQ.js";
import { K as p, nt as m } from "./constants-CenxlFMY.js";
import { t as h } from "./layout-B2Q1UoM2.js";
import { t as ee } from "./getUrlParameter--C3_Eqez.js";
import { t as g } from "./arrayFrom-CKk6qt2j.js";
import { t as _ } from "./containsText-BpUZGVhy.js";
import { t as v } from "./getPlayerId-DtQtocY2.js";
import { t as y } from "./hasClass-B8BlPKl4.js";
import { t as b } from "./openQuickBuffById-C25RQjPG.js";
import { t as x } from "./roundToString-CaKiZD15.js";
import { B as S, F as te, G as C, H as w, I as ne, L as T, M as E, N as re, R as D, St as O, U as k, W as A, Z as ie, et as j, ft as M, gt as N, h as P, it as ae, lt as F, nt as I, pt as L, q as R, rt as z, st as B, tt as V, ut as H, v as U, vt as W, yt as G } from "./disclose-version-Cj0Bwtvz.js";
import { t as K } from "./entries-PXiXtjwA.js";
import { t as q } from "./fromEntries-BytjDDMx.js";
import { t as J } from "./uniq-DgWt7KlP.js";
import { n as Y } from "./now-B3pCBQja.js";
import { n as X, r as Z } from "./idb-D8xqEbs-.js";
import { t as Q } from "./parseDateAsTimestamp-CdtzIDN9.js";
import { t as oe } from "./alpha-BRx-EQ4u.js";
import { t as se } from "./closestTable-B73T3rIi.js";
import { t as ce } from "./LinkBtnBracketed-C70NVX79.js";
import { t as le } from "./toggleForce-DTdXZaY8.js";
// src/modules/common/getTitle.js
function $(e) {
	return e.getAttribute("oldtitle") || e.getAttribute("title");
}
// src/modules/guild/scoutTower/injectScouttowerBuffLinks.js
function ue(t) {
	t.previousElementSibling && (e("scout tower", "buffIndividual"), b(v(t.previousElementSibling.href)));
}
var de = (e) => v(e.cells[0].children[0].href);
function fe(n) {
	let r = n.parentNode.parentNode.parentNode.parentNode, i = t(r, 3, 0).map(de).join();
	e("scout tower", "buffAll"), b(i);
}
function pe(e) {
	let { target: t } = e;
	_("[b]", t) && ue(t), _("all", t) && fe(t);
}
function me(e) {
	y("fshBl", e.target) && pe(e);
}
function he(e) {
	i(e.cells[0], " <button class=\"fshBl fshXSmall\">[b]</button>");
}
function ge(e) {
	t(e, 3, 0).forEach(he), i(e.rows[0].cells[0], " <button class=\"fshBl fshXSmall\">all</button>");
}
function _e(e, t) {
	return e.rows.length > 1 && t > 1;
}
function ve(e) {
	g(e).filter(_e).forEach(ge), o(e[1], me);
}
function ye(e) {
	e.length > 2 && ve(e);
}
// src/modules/guild/scoutTower/killsSummary.js
function be(e, t, n) {
	return `<br><span class="fshBlue"> (${x(c(n - t, e), 2)}% Current <br>${x(e * 100 / n, 2)}% Total<br>${u(e, n, t)})`;
}
function xe(e) {
	let t = e.hp.split("/");
	i(e.tr.cells[3], be(Number(r(e.tr.cells[3])), Number(t[0]), Number(t[1])));
}
function Se(e) {
	e.active && xe(e);
}
// src/modules/guild/scoutTower/Cooldown.svelte
var Ce = w("<tr><td class=\"svelte-2mevpu\"> </td><td class=\"cd svelte-2mevpu\"> </td><td class=\"svelte-2mevpu\"> </td></tr>"), we = w("<table class=\"svelte-2mevpu\"><tbody><tr><td class=\"header svelte-2mevpu\">Titan</td><td class=\"header svelte-2mevpu\">Cooldown</td><td class=\"header svelte-2mevpu\">Visible</td></tr><!></tbody></table>");
function Te(e, t) {
	L(t, !0);
	let n = ([, e]) => e.coolTime > Y(), r = ([, e], [, t]) => e.coolTime - t.coolTime, i = () => K(t.theTitans).filter(n).sort(r);
	var a = we(), o = j(a), s = z(j(o));
	E(s, 17, i, ([e, t]) => e, (e, t) => {
		var n = H(() => O(R(t), 2));
		let r = () => R(n)[0], i = () => R(n)[1];
		var a = Ce(), o = j(a), s = I(o, !0), c = z(o), l = I(c, !0), u = z(c), d = I(u, !0);
		G(a), ie(() => {
			D(s, r()), D(l, i().cooldownText), D(d, i().seen);
		}), S(e, a);
	}), G(o), G(a), S(e, a), M();
}
// src/modules/guild/scoutTower/TitanFilter.svelte
var Ee = w("<tr><td class=\"header svelte-rzcaop\" colspan=\"3\"></td></tr> <tr><td colspan=\"3\" class=\"svelte-rzcaop\"><label class=\"svelte-rzcaop\"><input type=\"checkbox\"/> Securable</label></td></tr>", 1), De = w("<label class=\"titan-label svelte-rzcaop\"><input type=\"checkbox\"/> </label>"), Oe = w("<div id=\"titan-list\" class=\"svelte-rzcaop\"></div> <div class=\"svelte-rzcaop\"><!> <!></div>", 1), ke = w("<table class=\"svelte-rzcaop\"><tbody><!><tr><td class=\"header svelte-rzcaop\" colspan=\"3\"></td></tr><tr><td colspan=\"3\" class=\"svelte-rzcaop\"><!></td></tr><tr><td class=\"header svelte-rzcaop\" colspan=\"3\"></td></tr></tbody></table>");
function Ae(t, n) {
	L(n, !0);
	let r = "fsh_titanFilter", i = F(!1), a = F(ae([])), o = ([e], [t]) => oe(e, t), s = () => X(r), c = () => Z(r, {
		securable: N(R(i)),
		titans: N(R(a))
	}), u = ({ titanName: e }) => R(a).find(([t]) => t === e)[1], d = () => K({
		...q(K(n.theTitans).map(([e]) => [e, !0])),
		...q(R(a).map(([e, t]) => [l(e), t]))
	}).sort(o), f = (e) => e.securable || !R(i);
	function p(e) {
		return u(e) && f(e);
	}
	function m([e, t]) {
		let n = g(se(e.tr).rows), r = e.tr.rowIndex;
		n.slice(r, r + 6).forEach((e) => le(e, !t)), e.visible = t;
	}
	function h() {
		n.titanRows.map((e) => [e, p(e)]).filter(([e, t]) => e.visible !== t).forEach(m);
	}
	async function _() {
		let e = await s();
		e && (B(i, e.securable, !0), B(a, e.titans, !0)), B(a, d(), !0), h();
	}
	function v() {
		c(), h();
	}
	function y() {
		e("TitanFilter", "toggleSecurable"), v();
	}
	function b() {
		e("TitanFilter", "toggleTitan"), v();
	}
	function x() {
		e("TitanFilter", "selectAll"), B(a, R(a).map(([e]) => [e, !0]), !0), v();
	}
	function w() {
		e("TitanFilter", "selectNone"), B(a, R(a).map(([e]) => [e, !1]), !0), v();
	}
	var T = ke(), A = j(T), I = j(A), J = (e) => {
		var t = Ee(), n = z(V(t), 2), r = j(n), a = j(r), o = j(a);
		U(o), W(), G(a), G(r), G(n), C("change", o, y), P(o, () => R(i), (e) => B(i, e)), S(e, t);
	}, Y = H(() => ee("tab") !== "completed");
	te(I, (e) => {
		R(Y) && e(J);
	});
	var Q = z(I, 2), $ = j(Q), ue = j($);
	ne(ue, _, null, (e) => {
		var t = Oe(), n = V(t);
		E(n, 21, () => R(a), re, (e, t, n) => {
			var r = H(() => O(R(t), 1));
			let i = () => R(r)[0];
			var o = De(), s = j(o);
			U(s);
			var c = z(s);
			G(o), ie(() => D(c, ` ${i() ?? ""}`)), C("change", s, b), P(s, () => R(a)[n][1], (e) => R(a)[n][1] = e), S(e, o);
		}), G(n);
		var r = z(n, 2), i = j(r);
		ce(i, {
			onclick: x,
			children: (e, t) => {
				W();
				var n = k("Select All");
				S(e, n);
			},
			$$slots: { default: !0 }
		});
		var o = z(i, 2);
		ce(o, {
			onclick: w,
			children: (e, t) => {
				W();
				var n = k("Select None");
				S(e, n);
			},
			$$slots: { default: !0 }
		}), G(r), S(e, t);
	}), G($), G(Q), W(), G(A), G(T), S(t, T), M();
}
A(["change"]);
// src/modules/guild/scoutTower/TitanTracker.svelte
var je = w("<tr><td colspan=\"3\"><!> <!></td></tr>");
function Me(e, t) {
	var n = je(), r = j(n), i = j(r);
	Te(i, { get theTitans() {
		return t.theTitans;
	} }), Ae(z(i, 2), {
		get theTitans() {
			return t.theTitans;
		},
		get titanRows() {
			return t.titanRows;
		}
	}), G(r), G(n), S(e, n);
}
// src/modules/guild/scoutTower/titanTracker.js
function Ne(e, t, n) {
	return T(Me, {
		anchor: e.rows[5],
		props: {
			theTitans: t,
			titanRows: n
		},
		target: e.children[0]
	});
}
var Pe = (e) => e?.includes("until") ? Q(e.replace("Cooldown until: ", "")) : 0;
function Fe(e) {
	let t = r(e.nextElementSibling.cells[0]);
	return t.startsWith("Cooldown until: ") || (t = r(e.cells[4])), {
		cooldownText: t,
		coolTime: Pe(t),
		seen: "yes"
	};
}
var Ie = ({ titanName: e, tr: t }) => [e, Fe(t)];
function Le(e, t) {
	return q(K(e).map(([e, t]) => [l(e), t]).filter(([e]) => !t[e]).filter(([, e]) => e.coolTime > Y()).map(([e, t]) => [e, {
		...t,
		seen: "no"
	}]));
}
function Re(e, t) {
	let n = q(J(t, "titanName").map(Ie));
	return {
		...n,
		...e && Le(e, n)
	};
}
async function ze(e, t) {
	let n = Re(await X("fsh_titans"), t);
	e[0].rows.length > 5 && Ne(e[0], n, t), Z("fsh_titans", n);
}
// src/modules/guild/scoutTower/injectScouttower.js
function Be(e) {
	let [t] = e.tr.cells[0].children;
	d("scoutTower", t);
}
function Ve(t) {
	t.target.tagName === "A" && e("scoutTower", "realmLink");
}
function He(e) {
	let [, t] = e.tr.cells, n = r(t);
	f(`<a href="${m}realms&search_name=${n}" target="_blank">${n}</a>`, t), o(t, Ve);
}
function Ue(e) {
	i(e.tr.cells[0], e.titanName);
}
function We(e) {
	Be(e), Ue(e);
}
function Ge(e) {
	Se(e), We(e), He(e);
}
function Ke(e) {
	return $(s("img", e));
}
var qe = (e) => ({
	guildKills: Number(r(e.cells[3])),
	hp: "-",
	titanName: l(Ke(e)),
	tr: e,
	visible: !0
}), Je = (e) => ({
	guildKills: Number(r(e.cells[3])),
	hp: r(e.cells[2]),
	titanName: l(Ke(e)),
	tr: e,
	visible: !0
}), Ye = (e) => ({
	...e,
	active: !e.hp.includes("-"),
	titanHp: e.hp.split("/").map(Number)
}), Xe = (e) => ({
	...e,
	securable: e.active && Math.ceil(e.titanHp[1] / 2 + 1) - e.guildKills <= e.titanHp[0]
}), Ze = (e) => t(e[1], 4, 0)?.map(Je).map(Ye).map(Xe), Qe = (e) => t(e[1], 5, 0)?.map(qe).map(Ye).map(Xe);
function $e() {
	if (a()) return;
	let e = n(p, h());
	if (!e?.length) return;
	ye(e);
	let t = ee("tab") === "completed" ? Qe(e) : Ze(e);
	t && (t.forEach(Ge), ze(e, t));
}
export { $e as default };

//# sourceMappingURL=injectScouttower-gOv_wle5.js.map