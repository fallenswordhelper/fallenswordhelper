import { t as e } from "./getMembrList-DQELBcHH.js";
import { t } from "./currentGuildId-Bpd4l1O8.js";
import { t as n } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as r } from "./task-C5UKL2RH.js";
import { r as ee } from "./useItem-Wcp_ihj0.js";
import { t as i } from "./queue-DLMhUoaF.js";
import { t as a } from "./sendEvent-Co2_qySS.js";
import { t as o } from "./classHandler-hzfvoR03.js";
import { t as s } from "./classPair-BWJYkZb4.js";
import { t as c } from "./closestTr-BGwSv-6S.js";
import { t as l } from "./getElementsByTagName-B8gMqefB.js";
import { t as u } from "./onclick-nv-Fl1th.js";
import { t as d } from "./partial-Bo20zBni.js";
import { t as f } from "./playerId-C1UyEKeb.js";
import { t as p } from "./regExpFirstCapture-D_QeHFEY.js";
import { t as m } from "./setInnerHtml-f0MFRJnQ.js";
import { bt as h } from "./constants-CenxlFMY.js";
import { t as g } from "./layout-B2Q1UoM2.js";
import { t as _ } from "./system-CNA0YLOa.js";
import { t as v } from "./itemId-d9adhb0C.js";
import { t as y } from "./batch-B3DxuTgO.js";
import { t as b } from "./insertElement-6ZBKaryO.js";
import { t as x } from "./querySelectorAll-D_a7rcw0.js";
import { t as S } from "./createDiv-B84RqGfo.js";
import { t as C } from "./closestTd-qGJKTnGX.js";
import { t as w } from "./getText-BqjgTHLv.js";
import { t as te } from "./onlineDot-B-a-eWFn.js";
import { t as ne } from "./playerLink-CMLZT8Xs.js";
import { t as T } from "./calf-SqS2SeU4.js";
import { t as re } from "./contains-DU2fd_7n.js";
import { t as ie } from "./containsText-BpUZGVhy.js";
import { t as ae } from "./querySelectorArray-C70U47NF.js";
import { t as E } from "./getUrlParameter-DQUJPuXf.js";
// src/modules/guild/inventory/guildReport/eventHandlers.js
var D = `<span class="guildReportSpinner" style="background-image: url('${_}ui/misc/spinner.gif');"></span>`;
function O(e) {
	m("<span class=\"fastWorn\">You successfully recalled the item</span>", e);
}
function k(e) {
	m("<span class=\"fastWorn\">Worn</span>", e);
}
function A(e) {
	window.openQuickMsgDialog(e.getAttribute("target_player"));
}
function j(e, t, n) {
	n.r !== 1 && (e === "recall" ? O(t) : k(t));
}
async function M(e, t, n, r) {
	j(r, e, await i(v(t), p(h, t), n, r));
}
function N(e, t, n) {
	M(e, t, n, "recall");
}
function P(e, t) {
	a("GuildReport", "Fast BP"), N(e, t, 0);
}
function F(e, t) {
	a("GuildReport", "Fast GS"), N(e, t, 1);
}
async function I(e, t) {
	a("GuildReport", "Fast Wear"), Number(p(h, t)) === f() ? (await ee(v(t)), k(e)) : M(e, t, 0, "wear");
}
var L = [
	["fast-bp", P],
	["fast-gs", F],
	["fast-wear", I]
];
function R(e) {
	let t = e.parentNode.parentNode;
	if (!t) return;
	let [{ href: n }] = t.children;
	n && (L.find(d(s, e))[1](t, n), m(D, t));
}
function z(e) {
	a("GuildReport", "Collapsible");
	let t = c(e).nextElementSibling, n = t.className === "fshHide" ? "" : "fshHide";
	for (; t && !t.children[0].hasAttribute("bgcolor");) t.className = n, t = t.nextElementSibling;
}
var B = [
	["sendLink", R],
	["a-reply", A],
	["fshBl", z]
];
function V() {
	u(l("table", g())[1], o(B));
}
// src/modules/guild/inventory/guildReport/makeFastRecall.js
var H = "<span class=\"sendLink fast-bp\">Fast BP</span> | ", U = "<span class=\"sendLink fast-gs\">Fast GS</span>", W = " | <span class=\"sendLink fast-wear\">Fast Wear</span>", G = 0, K = 0, q = 0, J = 0, Y = 0;
function oe() {
	return G ||= /* @__PURE__ */ RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum"), G;
}
function se() {
	return q ||= S({ innerHTML: H + U }), q.cloneNode(!0);
}
function ce() {
	return J ||= S({ innerHTML: H + U + W }), J.cloneNode(!0);
}
function le() {
	return K ||= S({ innerHTML: U }), K.cloneNode(!0);
}
function ue() {
	return Y ||= S({ innerHTML: U + W }), Y.cloneNode(!0);
}
var de = [
	[
		!0,
		!0,
		ce
	],
	[
		!0,
		!1,
		ue
	],
	[
		!1,
		!0,
		se
	],
	[
		!1,
		!1,
		le
	]
];
function fe(e, t, n) {
	return n[0] === e && n[1] === t;
}
function pe(e) {
	let t = !oe().test(e.previousElementSibling.innerHTML), n = e.children.length === 2;
	return de.find(d(fe, t, n))[2]();
}
// src/modules/guild/inventory/guildReport/prepareChildRows.js
var X = null, Z = [];
function me(e, t) {
	let n = X[t];
	b(n, e);
}
function he(e) {
	Z.push(pe(e));
}
function ge() {
	y([
		3,
		Z,
		0,
		me
	]);
}
function _e() {
	g() && (X = x("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"), Z = [], y([
		3,
		X,
		0,
		he,
		ge
	]));
}
// src/modules/guild/inventory/guildReport/reportHeader.js
function ve(e) {
	return `${te({ last_login: T.membrList[e].last_login })}${ne(T.membrList[e].id, e)} [ <span class="a-reply fshLink" target_player=${e}>m</span> ]`;
}
function ye(e) {
	let t = w(e);
	T.membrList?.[t] && m(ve(t), e), m("<span class=\"fshFloatRight fshXSmall\">[ <button class=\"fshBl fshBls\" type=\"button\">X</button> ]</span>", C(e).nextElementSibling);
}
function be() {
	let e = x("#pCC table table tr:not(.fshHide) td[bgcolor=\"#DAA534\"][colspan=\"2\"] b");
	y([
		3,
		e,
		0,
		ye
	]);
}
// src/modules/guild/inventory/guildReport/searchUser.js
var Q = 0, $ = 0;
function xe(e) {
	e.children[0].hasAttribute("bgcolor") && ($ = ie(Q, e.children[0].children[0])), $ || (e.className = "fshHide");
}
function Se() {
	if (Q = E("user"), !Q || !ae("#pCC table table td[bgcolor=\"#DAA534\"] b").some(re(Q))) return;
	let e = x("#pCC table table tr");
	y([
		2,
		e,
		0,
		xe
	]);
}
// src/modules/guild/inventory/guildReport/guildReport.js
async function Ce() {
	await e(!1), r(3, be);
}
function we() {
	!n() && t() && (Ce(), r(2, Se), r(3, _e), V());
}
export { we as default };

//# sourceMappingURL=guildReport-OC3chUzw.js.map