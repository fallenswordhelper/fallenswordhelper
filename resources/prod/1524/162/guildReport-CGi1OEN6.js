import "./sendException-s1csWDQs.js";
import { t as e } from "./getText-rCJDurvG.js";
import { t } from "./regExpFirstCapture-CdTmAP5x.js";
import "./posthog-C2Vh_0Hn.js";
import { t as n } from "./system-De1jBRGa.js";
import { bt as r } from "./constants-C54mky4_.js";
import "./getValue-CCThXEzy.js";
import { t as i } from "./calf-OM11NjAU.js";
import { t as a } from "./task-jKbgFyYT.js";
import { t as o } from "./getUrlParameter-qxOiipWG.js";
import { t as ee } from "./getElementsByTagName-BUN1mNPF.js";
import { t as s } from "./partial-goh6HOls.js";
import { t as c } from "./layout-Bapa39KM.js";
import { t as l } from "./sendEvent-bwvhd4A-.js";
import { t as u } from "./currentGuildId-Br10wzx3.js";
import { t as d } from "./createDiv-Bb3O54wx.js";
import { t as f } from "./insertElement-DtUB7uKq.js";
import { t as p } from "./setInnerHtml-ClDKp0Zh.js";
import "./indexAjax-BXHvJ2Y7.js";
import "./indexAjaxData-CqOTihOX.js";
import "./indexAjaxDoc-DHqD1q8U.js";
import { t as m } from "./containsText-s1xoTwSh.js";
import { t as h } from "./contains-D51Mjk5W.js";
import { t as g } from "./onclick-9iRduoOH.js";
import { t as _ } from "./querySelectorAll-6sjy8RXa.js";
import { t as v } from "./querySelectorArray-BZbNvND7.js";
import { t as y } from "./closestTr-C0LB9ALA.js";
import "./idb-sdcp-8vV.js";
import "./indexAjaxJson-DuDMsKRC.js";
import "./cmdExport-C_7TLPs-.js";
import { t as b } from "./jQueryNotPresent-oTtW_9Ua.js";
import { t as x } from "./classPair-C2pEaqbM.js";
import { t as te } from "./classHandler-7gbey5gb.js";
import { t as ne } from "./playerId-KKJEdV6P.js";
import { t as S } from "./itemId-Cw5TvBrf.js";
import "./daUseItem-DT7YEAiv.js";
import { t as re } from "./playerLink-B6KUxd0X.js";
import "./backpackOk-D61pwOdg.js";
import { t as ie } from "./closestTd-CSAfmoRl.js";
import "./guildMembers-CZU-uLr9.js";
import { t as ae } from "./getMembrList-B5emVD6O.js";
import { t as oe } from "./onlineDot-CXb1YqvF.js";
import { t as C } from "./batch-D9tKs5xx.js";
import "./takeItem-CIVEdK3m.js";
import { r as w } from "./useItem-48ZSMXui.js";
import { t as T } from "./queue-zno2wehD.js";
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

//# sourceMappingURL=guildReport-CGi1OEN6.js.map