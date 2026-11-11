import { t as e } from "./jQueryNotPresent-Cx9lm32d.js";
import { t } from "./partial-Bo20zBni.js";
import { t as n } from "./getValue-DMlY7SSn.js";
import { t as r } from "./sendEvent-DdWrU3DL.js";
import { t as i } from "./all-D5SlTl7_.js";
import { t as a } from "./getText-BqjgTHLv.js";
import { t as ee } from "./insertHtmlAfterEnd-DMHOI0WH.js";
import { t as o } from "./onclick-nv-Fl1th.js";
import { t as s } from "./querySelectorArray-C70U47NF.js";
import { St as c, T as l, X as u, gt as d, s as f } from "./constants-CenxlFMY.js";
import { t as p } from "./getCustomUrlParameter-OUJUdwqs.js";
import { n as m, t as h } from "./relatePlayer-B0eiB1iu.js";
import { t as g } from "./closestTr-BGwSv-6S.js";
import { t as _ } from "./getTextTrim-CvXe85fp.js";
import { t as v } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as te } from "./createDiv-B84RqGfo.js";
import { t as y } from "./insertElement-6ZBKaryO.js";
import { t as b } from "./insertHtmlAfterBegin-NUXc07IC.js";
import { t as x } from "./querySelector-C6ReNysW.js";
import { t as S } from "./addCommas-Bv8TEVoY.js";
import { t as C } from "./getCombat-xWyb9OfF.js";
import { t as w } from "./getLogTime-BXMKSMLX.js";
import { t as T } from "./setText-CVjyFkRt.js";
import { t as E } from "./createStyle-DG3VYLtp.js";
import { t as D } from "./entries-PXiXtjwA.js";
import { n as O } from "./addLogColoring-rtKYuT0E.js";
import { t as k } from "./parseDateAsTimestamp-CdtzIDN9.js";
import { t as A } from "./setValue-D-C74rTg.js";
// src/modules/logs/playerLogWidgets/addAttackLink.js
var j = (e) => [e, p(e.href, "target_username")], M = async ([e, t]) => [
	e,
	t,
	await m(t)
], N = (e) => e ? " class=\"pmAttackUrl\"" : "";
function P(e, [t, n]) {
	ee(t, ` | <a${N(e)} href="${f}${n}">Attack</a>`), e || o(t.parentNode, (e) => {
		a(e.target) === "Attack" && r("playerLogWidgets", "Attack");
	});
}
async function F(e, t) {
	let n = s("a[href*=\"=createsecure&\"]", e);
	if (!n.length) return;
	let r = n.map(j);
	(await i(r.map(M))).filter(([, , e]) => !e).forEach((e) => P(t, e));
}
// src/modules/logs/playerLogWidgets/addIgnoreLinks.js
var I = (e) => e ? " class=\"pmIgnoreUrl\"" : "", L = (e, t) => `<a${I(e)} href="${u}${_(t)}" data-tooltip="Add to Ignore List">Ignore</a>`;
function R(e, [t, n]) {
	v(n.cells[1], `<font size="1"><br>[ ${L(e, t)} ]</font>`), e || o(n.cells[1], (e) => {
		a(e.target) === "Ignore" && r("playerLogWidgets", "Ignore");
	});
}
function z(e, t) {
	let n = s(c, e);
	n.length !== 0 && n.map((e) => [e, g(e)]).forEach((e) => R(t, e));
}
// src/modules/logs/playerLogWidgets/addPvPSummary.js
var B = "fshGreen", V = "fshRed", H = ([, e]) => x(c, e), U = async ([e, t, n]) => [
	t,
	n,
	await C(w(t), p(e.href, "combat_id"))
], ne = ([, , e]) => e?.s, W = (e) => [
	18,
	21,
	31
].includes(e.id), G = (e) => `<span class="fshRed fshBold">${e}.</span>`;
function K(e) {
	return e.includes("You were victorious over") ? [B, `You were <span class="${B}">victorious</span> over `] : e.includes("You were defeated by") ? [V, `You were <span class="${V}">defeated</span> by `] : ["", null];
}
function q(e) {
	return e.id === 18 ? G(`${e.params[0]} leeched the buff '${e.params[1]}'`) : e.id === 21 ? G(`${e.params[0]} was mesmerized by Spell Breaker, losing the '${e.params[1]}' buff`) : G(`${e.params[0]} activated Fist Fight`);
}
function J(e, t, n) {
	return e === 0 ? "" : `${t}:<span class="${n}">${S(e)}</span> `;
}
function Y(e, t) {
	let n = e.specials?.filter(W).map(q), r = J(e.xp_gain, "XP stolen", t) + J(e.gold_gain, "Gold lost", t) + J(e.gold_stolen, "Gold stolen", t) + J(e.pvp_prestige_gain, "Prestige gain", t) + J(e.pvp_rating_change, "PvP change", t);
	return r + (r && n?.length ? "<br>" : "") + (n?.length ? `${n.join("<br>")}` : "");
}
function X([e, t, n]) {
	let [r, i] = K(t);
	i && (e.cells[2].firstChild.remove(), b(e.cells[2], i));
	let a = Y(n.r.combat, r);
	a && y(e.cells[2], te({ innerHTML: a }));
}
function Z(e) {
	return e.map((e) => [e, g(e)]).filter(H).map(([e, t]) => [
		e,
		t,
		t.cells[2].innerHTML
	]).map(U);
}
async function re(e) {
	let t = s("a[href*=\"&combat_id=\"]", e);
	t.length !== 0 && (await i(Z(t))).filter(ne).forEach(X);
}
// src/modules/logs/playerLogWidgets/changeLabels.js
function ie(e) {
	s("a[href*=\"=trade&\"]", e).filter((e) => !p(e.href, "subcmd")).forEach((e) => T("Trade", e)), s("a[href*=\"=createsecure&\"]", e).forEach((e) => T("ST", e));
}
// src/modules/logs/playerLogWidgets/colorPlayers.js
function ae(e, t) {
	let [, , n] = e.rows[0].cells;
	n && !t && v(n, "&nbsp;&nbsp;<span class=\"fshWhite\">(Guild mates show up in <span class=\"fshGreen\">green</span>)</span>");
}
async function oe(e) {
	let [, t] = await h(e);
	return [`.fshPlayerColoring tr:nth-of-type(${g(e).rowIndex + 1}) td:nth-of-type(3) > a:first-of-type`, t];
}
function se(e, [t, n]) {
	return e[n] ? e[n].push(t) : e[n] = [t], e;
}
var ce = {
	guild: "green",
	ally: "blue",
	enemy: "red"
};
function le([e, t]) {
	return `${t.join(", ")} { color: ${ce[e]}; }`;
}
var ue = ([, e]) => e;
function de(e) {
	return D(e.filter(ue).reduce(se, {})).map(le);
}
function fe(e, t, n) {
	let r = de(t);
	r.length && (ae(e, n), e.classList.add("fshPlayerColoring"), y(document.body, E(r.join("\n"))));
}
async function pe(e, t) {
	let n = s(c, e);
	n.length && fe(e, await i(n.map(oe)), t);
}
// src/modules/logs/playerLogWidgets/processLadder.js
var Q = 0, $ = /You ranked \w{3,4} in your PvP Band! You have gained \d x PvP Ladder Token/;
function me(e) {
	return $.test(a(e.cells[2]));
}
function he(e) {
	let t = k(_(e.cells[1]));
	t > Q && (A(l, t), Q = t);
}
function ge(e) {
	Q = n(l), s(d, e).map(g).filter(me).forEach(he);
}
// src/modules/logs/playerLogWidgets/addLogWidgets.js
var _e = [
	["addIgnoreLink", z],
	["colorPlayerNames", pe],
	["addAttackLinkToLog", F],
	["changeButtonLabels", ie],
	["trackLadderReset", ge],
	["showPvPSummaryInLog", re]
];
function ve(e, t, [r, i]) {
	n(r) && i(e, t);
}
function ye(e, n) {
	_e.forEach(t(ve, e, n));
}
function be(t) {
	if (e()) return;
	let n = O();
	n && ye(n, t);
}
export { be as t };

//# sourceMappingURL=addLogWidgets-D56Wbjzl.js.map