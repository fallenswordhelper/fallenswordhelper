import { t as e } from "./getText-BybFkJV6.js";
import { t } from "./regExpFirstCapture-Bi32xMqS.js";
import { t as n } from "./system-DeHfCtq2.js";
import { bt as r } from "./constants-CIKidKvt.js";
import { t as i } from "./calf-DxCOTxVt.js";
import { t as a } from "./task-DenRcgws.js";
import { t as o } from "./getUrlParameter-OG9FsMwx.js";
import { t as ee } from "./getElementsByTagName-CkoUUI_g.js";
import { t as s } from "./partial-CYzPXpZP.js";
import { t as c } from "./layout-6CPY-bfq.js";
import { t as l } from "./sendEvent-DFQy5lFi.js";
import { t as u } from "./currentGuildId-D9JtVH2U.js";
import { t as d } from "./createDiv-CH3rNL4c.js";
import { t as f } from "./insertElement-C_6uFPNr.js";
import { t as p } from "./setInnerHtml-Dh9y9Se-.js";
import { t as m } from "./containsText-DYGH6hdF.js";
import { t as h } from "./contains-wh2Zi4Dq.js";
import { t as g } from "./onclick-8ZwMJyqI.js";
import { t as _ } from "./querySelectorAll-Bwhb2XCF.js";
import { t as v } from "./querySelectorArray-Bdj4peIm.js";
import { t as y } from "./closestTr-DTXY0qkG.js";
import { t as b } from "./jQueryNotPresent-UT8-ZycH.js";
import { t as x } from "./classPair-ChlFQqxU.js";
import { t as te } from "./classHandler-C-bFqTDO.js";
import { t as ne } from "./playerId-CffVNjD0.js";
import { t as S } from "./itemId-Bz2u5iGq.js";
import { t as re } from "./playerLink-B8RkPCAH.js";
import { t as ie } from "./closestTd-B6S4IM7U.js";
import { t as ae } from "./getMembrList-8D_88xrl.js";
import { t as oe } from "./onlineDot-D0WTzhgS.js";
import { t as C } from "./batch-Bv-NXhgk.js";
import { r as w } from "./useItem-Bdgw70D6.js";
import { t as T } from "./queue-CHySld3G.js";
//#region src/modules/guild/inventory/guildReport/eventHandlers.js
var E = `<span class="guildReportSpinner" style="background-image: url('${n}ui/misc/spinner.gif');"></span>`;
function D(e) {
	p("<span class=\"fastWorn\">You successfully recalled the item</span>", e);
}
function O(e) {
	p("<span class=\"fastWorn\">Worn</span>", e);
}
function k(e) {
	window.openQuickMsgDialog(e.getAttribute("target_player"));
}
function A(e, t, n) {
	n.r !== 1 && (e === "recall" ? D(t) : O(t));
}
async function j(e, n, i, a) {
	A(a, e, await T(S(n), t(r, n), i, a));
}
function M(e, t, n) {
	j(e, t, n, "recall");
}
function N(e, t) {
	l("GuildReport", "Fast BP"), M(e, t, 0);
}
function P(e, t) {
	l("GuildReport", "Fast GS"), M(e, t, 1);
}
async function F(e, n) {
	l("GuildReport", "Fast Wear"), Number(t(r, n)) === ne() ? (await w(S(n)), O(e)) : j(e, n, 0, "wear");
}
var I = [
	["fast-bp", N],
	["fast-gs", P],
	["fast-wear", F]
];
function L(e) {
	let t = e.parentNode.parentNode;
	if (!t) return;
	let [{ href: n }] = t.children;
	n && (I.find(s(x, e))[1](t, n), p(E, t));
}
function R(e) {
	l("GuildReport", "Collapsible");
	let t = y(e).nextElementSibling, n = t.className === "fshHide" ? "" : "fshHide";
	for (; t && !t.children[0].hasAttribute("bgcolor");) t.className = n, t = t.nextElementSibling;
}
var z = [
	["sendLink", L],
	["a-reply", k],
	["fshBl", R]
];
function B() {
	g(ee("table", c())[1], te(z));
}
//#endregion
//#region src/modules/guild/inventory/guildReport/makeFastRecall.js
var V = "<span class=\"sendLink fast-bp\">Fast BP</span> | ", H = "<span class=\"sendLink fast-gs\">Fast GS</span>", U = " | <span class=\"sendLink fast-wear\">Fast Wear</span>", W = 0, G = 0, K = 0, q = 0, J = 0;
function se() {
	return W ||= /* @__PURE__ */ RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum"), W;
}
function ce() {
	return K ||= d({ innerHTML: V + H }), K.cloneNode(!0);
}
function le() {
	return q ||= d({ innerHTML: V + H + U }), q.cloneNode(!0);
}
function ue() {
	return G ||= d({ innerHTML: H }), G.cloneNode(!0);
}
function de() {
	return J ||= d({ innerHTML: H + U }), J.cloneNode(!0);
}
var fe = [
	[
		!0,
		!0,
		le
	],
	[
		!0,
		!1,
		de
	],
	[
		!1,
		!0,
		ce
	],
	[
		!1,
		!1,
		ue
	]
];
function pe(e, t, n) {
	return n[0] === e && n[1] === t;
}
function me(e) {
	let t = !se().test(e.previousElementSibling.innerHTML), n = e.children.length === 2;
	return fe.find(s(pe, t, n))[2]();
}
//#endregion
//#region src/modules/guild/inventory/guildReport/prepareChildRows.js
var Y = null, X = [];
function he(e, t) {
	let n = Y[t];
	f(n, e);
}
function Z(e) {
	X.push(me(e));
}
function ge() {
	C([
		3,
		X,
		0,
		he
	]);
}
function _e() {
	c() && (Y = _("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"), X = [], C([
		3,
		Y,
		0,
		Z,
		ge
	]));
}
//#endregion
//#region src/modules/guild/inventory/guildReport/reportHeader.js
function ve(e) {
	return `${oe({ last_login: i.membrList[e].last_login })}${re(i.membrList[e].id, e)} [ <span class="a-reply fshLink" target_player=${e}>m</span> ]`;
}
function ye(t) {
	let n = e(t);
	i.membrList?.[n] && p(ve(n), t), p("<span class=\"fshFloatRight fshXSmall\">[ <button class=\"fshBl fshBls\" type=\"button\">X</button> ]</span>", ie(t).nextElementSibling);
}
function be() {
	C([
		3,
		_("#pCC table table tr:not(.fshHide) td[bgcolor=\"#DAA534\"][colspan=\"2\"] b"),
		0,
		ye
	]);
}
//#endregion
//#region src/modules/guild/inventory/guildReport/searchUser.js
var Q = 0, $ = 0;
function xe(e) {
	e.children[0].hasAttribute("bgcolor") && ($ = m(Q, e.children[0].children[0])), $ || (e.className = "fshHide");
}
function Se() {
	Q = o("user"), Q && v("#pCC table table td[bgcolor=\"#DAA534\"] b").some(h(Q)) && C([
		2,
		_("#pCC table table tr"),
		0,
		xe
	]);
}
//#endregion
//#region src/modules/guild/inventory/guildReport/guildReport.js
async function Ce() {
	await ae(!1), a(3, be);
}
function we() {
	b() || !u() || (Ce(), a(2, Se), a(3, _e), B());
}
//#endregion
export { we as default };

//# sourceMappingURL=guildReport-Dar7aF1f.js.map