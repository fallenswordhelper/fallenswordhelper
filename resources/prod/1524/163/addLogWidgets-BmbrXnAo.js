import { t as e } from "./getText-BybFkJV6.js";
import { St as t, T as n, X as r, gt as i, s as a } from "./constants-CIKidKvt.js";
import { t as o } from "./getValue-j5JjE6f3.js";
import { t as s } from "./setValue-31jE_mRr.js";
import { t as ee } from "./querySelector-8FH1hhUv.js";
import { t as c } from "./getCustomUrlParameter-Dna1URkG.js";
import { t as l } from "./getTextTrim-hYBF-bdh.js";
import { t as te } from "./partial-CYzPXpZP.js";
import { t as u } from "./sendEvent-DFQy5lFi.js";
import { t as d } from "./entries-CiJ6YMwx.js";
import { t as f } from "./createDiv-CH3rNL4c.js";
import { t as p } from "./insertElement-C_6uFPNr.js";
import { t as m } from "./onclick-8ZwMJyqI.js";
import { t as h } from "./querySelectorArray-Bdj4peIm.js";
import { t as g } from "./closestTr-DTXY0qkG.js";
import { t as _ } from "./jQueryNotPresent-UT8-ZycH.js";
import { t as v } from "./insertHtmlBeforeEnd-D5-rjWCh.js";
import { t as y } from "./setText-Ckr3aw9W.js";
import { t as b } from "./all-Csir9X7x.js";
import { t as x } from "./parseDateAsTimestamp-DjNjeXQc.js";
import { t as S } from "./getCombat-DaYOWYjq.js";
import { t as C } from "./addCommas-BgpPUQrd.js";
import { t as w } from "./insertHtmlAfterBegin-B7TFwEJg.js";
import { n as T, t as E } from "./relatePlayer-DaZSPkGj.js";
import { t as D } from "./createStyle-Qs_9mDCV.js";
import { t as O } from "./getId-ChfM7x7M.js";
import { t as k } from "./insertHtmlAfterEnd-CedwWY1B.js";
import { n as A } from "./addLogColoring-B2rIOttn.js";
import { t as j } from "./getLogTime--M9mIoGb.js";
//#region src/modules/logs/playerLogWidgets/addAttackLink.js
var M = (e) => [e, c(e.href, "target_username")], N = async ([e, t]) => [
	e,
	t,
	await T(t)
], P = (e) => e ? " class=\"pmAttackUrl\"" : "";
function F(t, [n, r]) {
	k(n, ` | <a${P(t)} href="${a}${r}">Attack</a>`), !t && m(n.parentNode, (t) => {
		e(t.target) === "Attack" && u("playerLogWidgets", "Attack");
	});
}
async function I(e, t) {
	let n = h("a[href*=\"=createsecure&\"]", e);
	n.length && (await b(n.map(M).map(N))).filter(([, , e]) => !e).forEach((e) => F(t, e));
}
//#endregion
//#region src/modules/logs/playerLogWidgets/addIgnoreLinks.js
var L = (e) => e ? " class=\"pmIgnoreUrl\"" : "", R = (e, t) => `<a${L(e)} href="${r}${l(t)}" data-tooltip="Add to Ignore List">Ignore</a>`;
function z(t, [n, r]) {
	v(r.cells[1], `<font size="1"><br>[ ${R(t, n)} ]</font>`), !t && m(r.cells[1], (t) => {
		e(t.target) === "Ignore" && u("playerLogWidgets", "Ignore");
	});
}
function B(e, n) {
	let r = h(t, e);
	r.length !== 0 && r.map((e) => [e, g(e)]).forEach((e) => z(n, e));
}
//#endregion
//#region src/modules/logs/playerLogWidgets/addPvPSummary.js
var V = "fshGreen", H = "fshRed", U = ([, e]) => ee(t, e), W = async ([e, t, n]) => [
	t,
	n,
	await S(j(t), O(e))
], ne = ([, , e]) => e?.s, G = (e) => [
	18,
	21,
	31
].includes(e.id), K = (e) => `<span class="fshRed fshBold">${e}.</span>`;
function q(e) {
	return e.includes("You were victorious over") ? [V, `You were <span class="${V}">victorious</span> over `] : e.includes("You were defeated by") ? [H, `You were <span class="${H}">defeated</span> by `] : ["", null];
}
function J(e) {
	return e.id === 18 ? K(`${e.params[0]} leeched the buff '${e.params[1]}'`) : e.id === 21 ? K(`${e.params[0]} was mesmerized by Spell Breaker, losing the '${e.params[1]}' buff`) : K(`${e.params[0]} activated Fist Fight`);
}
function Y(e, t, n) {
	return e === 0 ? "" : `${t}:<span class="${n}">${C(e)}</span> `;
}
function X(e, t) {
	let n = e.specials?.filter(G).map(J), r = Y(e.xp_gain, "XP stolen", t) + Y(e.gold_gain, "Gold lost", t) + Y(e.gold_stolen, "Gold stolen", t) + Y(e.pvp_prestige_gain, "Prestige gain", t) + Y(e.pvp_rating_change, "PvP change", t);
	return r + (r && n?.length ? "<br>" : "") + (n?.length ? `${n.join("<br>")}` : "");
}
function Z([e, t, n]) {
	let [r, i] = q(t);
	i && (e.cells[2].firstChild.remove(), w(e.cells[2], i));
	let a = X(n.r.combat, r);
	a && p(e.cells[2], f({ innerHTML: a }));
}
function re(e) {
	return e.map((e) => [e, g(e)]).filter(U).map(([e, t]) => [
		e,
		t,
		t.cells[2].innerHTML
	]).map(W);
}
async function ie(e) {
	let t = h("a[href*=\"&combat_id=\"]", e);
	t.length !== 0 && (await b(re(t))).filter(ne).forEach(Z);
}
//#endregion
//#region src/modules/logs/playerLogWidgets/changeLabels.js
function ae(e) {
	h("a[href*=\"=trade&\"]", e).filter((e) => !c(e.href, "subcmd")).forEach((e) => y("Trade", e)), h("a[href*=\"=createsecure&\"]", e).forEach((e) => y("ST", e));
}
//#endregion
//#region src/modules/logs/playerLogWidgets/colorPlayers.js
function oe(e, t) {
	let [, , n] = e.rows[0].cells;
	n && !t && v(n, "&nbsp;&nbsp;<span class=\"fshWhite\">(Guild mates show up in <span class=\"fshGreen\">green</span>)</span>");
}
async function se(e) {
	let [, t] = await E(e);
	return [`.fshPlayerColoring tr:nth-of-type(${g(e).rowIndex + 1}) td:nth-of-type(3) > a:first-of-type`, t];
}
function ce(e, [t, n]) {
	return e[n] ? e[n].push(t) : e[n] = [t], e;
}
var le = {
	guild: "green",
	ally: "blue",
	enemy: "red"
};
function ue([e, t]) {
	return `${t.join(", ")} { color: ${le[e]}; }`;
}
var de = ([, e]) => e;
function fe(e) {
	return d(e.filter(de).reduce(ce, {})).map(ue);
}
function pe(e, t, n) {
	let r = fe(t);
	r.length && (oe(e, n), e.classList.add("fshPlayerColoring"), p(document.body, D(r.join("\n"))));
}
async function me(e, n) {
	let r = h(t, e);
	r.length && pe(e, await b(r.map(se)), n);
}
//#endregion
//#region src/modules/logs/playerLogWidgets/processLadder.js
var Q = 0, he = /You ranked \w{3,4} in your PvP Band! You have gained \d x PvP Ladder Token/;
function ge(t) {
	return he.test(e(t.cells[2]));
}
function $(e) {
	let t = x(l(e.cells[1]));
	t > Q && (s(n, t), Q = t);
}
function _e(e) {
	Q = o(n), h(i, e).map(g).filter(ge).forEach($);
}
//#endregion
//#region src/modules/logs/playerLogWidgets/addLogWidgets.js
var ve = [
	["addIgnoreLink", B],
	["colorPlayerNames", me],
	["addAttackLinkToLog", I],
	["changeButtonLabels", ae],
	["trackLadderReset", _e],
	["showPvPSummaryInLog", ie]
];
function ye(e, t, [n, r]) {
	o(n) && r(e, t);
}
function be(e, t) {
	ve.forEach(te(ye, e, t));
}
function xe(e) {
	if (_()) return;
	let t = A();
	t && be(t, e);
}
//#endregion
export { xe as t };

//# sourceMappingURL=addLogWidgets-BmbrXnAo.js.map