import { t as e } from "./jQueryNotPresent-Cx9lm32d.js";
import { t } from "./partial-Bo20zBni.js";
import { t as n } from "./getValue-vrUqpo0a.js";
import { t as r } from "./sendEvent-Co2_qySS.js";
import { t as i } from "./all-D5SlTl7_.js";
import { t as a } from "./getText-BqjgTHLv.js";
import { t as o } from "./insertHtmlAfterEnd-DMHOI0WH.js";
import { t as s } from "./onclick-nv-Fl1th.js";
import { t as c } from "./querySelectorArray-C70U47NF.js";
import { St as l, T as u, X as d, gt as f, s as p } from "./constants-CenxlFMY.js";
import { t as m } from "./getCustomUrlParameter-C5vi2hsN.js";
import { n as h, t as g } from "./relatePlayer-sV01-C8j.js";
import { t as _ } from "./closestTr-BGwSv-6S.js";
import { t as v } from "./getTextTrim-CvXe85fp.js";
import { t as y } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as ee } from "./createDiv-B84RqGfo.js";
import { t as te } from "./getId-Ccs5W7A1.js";
import { t as b } from "./insertElement-6ZBKaryO.js";
import { t as x } from "./insertHtmlAfterBegin-NUXc07IC.js";
import { t as S } from "./querySelector-C6ReNysW.js";
import { t as C } from "./addCommas-Bv8TEVoY.js";
import { t as w } from "./getCombat-G6PtlCC_.js";
import { t as T } from "./getLogTime-BXMKSMLX.js";
import { t as E } from "./setText-CVjyFkRt.js";
import { t as D } from "./createStyle-DG3VYLtp.js";
import { t as O } from "./entries-PXiXtjwA.js";
import { n as k } from "./addLogColoring-BAZ8-8Tz.js";
import { t as A } from "./parseDateAsTimestamp-CdtzIDN9.js";
import { t as j } from "./setValue-D-C74rTg.js";
// src/modules/logs/playerLogWidgets/addAttackLink.js
var M = (e) => [e, m(e.href, "target_username")], N = async ([e, t]) => [
	e,
	t,
	await h(t)
], P = (e) => e ? " class=\"pmAttackUrl\"" : "";
function F(e, [t, n]) {
	o(t, ` | <a${P(e)} href="${p}${n}">Attack</a>`), e || s(t.parentNode, (e) => {
		a(e.target) === "Attack" && r("playerLogWidgets", "Attack");
	});
}
async function I(e, t) {
	let n = c("a[href*=\"=createsecure&\"]", e);
	if (!n.length) return;
	let r = n.map(M);
	(await i(r.map(N))).filter(([, , e]) => !e).forEach((e) => F(t, e));
}
// src/modules/logs/playerLogWidgets/addIgnoreLinks.js
var L = (e) => e ? " class=\"pmIgnoreUrl\"" : "", R = (e, t) => `<a${L(e)} href="${d}${v(t)}" data-tooltip="Add to Ignore List">Ignore</a>`;
function z(e, [t, n]) {
	y(n.cells[1], `<font size="1"><br>[ ${R(e, t)} ]</font>`), e || s(n.cells[1], (e) => {
		a(e.target) === "Ignore" && r("playerLogWidgets", "Ignore");
	});
}
function B(e, t) {
	let n = c(l, e);
	n.length !== 0 && n.map((e) => [e, _(e)]).forEach((e) => z(t, e));
}
// src/modules/logs/playerLogWidgets/addPvPSummary.js
var V = "fshGreen", H = "fshRed", U = ([, e]) => S(l, e), ne = async ([e, t, n]) => [
	t,
	n,
	await w(T(t), te(e))
], W = ([, , e]) => e?.s, G = (e) => [
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
	i && (e.cells[2].firstChild.remove(), x(e.cells[2], i));
	let a = X(n.r.combat, r);
	a && b(e.cells[2], ee({ innerHTML: a }));
}
function re(e) {
	return e.map((e) => [e, _(e)]).filter(U).map(([e, t]) => [
		e,
		t,
		t.cells[2].innerHTML
	]).map(ne);
}
async function ie(e) {
	let t = c("a[href*=\"&combat_id=\"]", e);
	t.length !== 0 && (await i(re(t))).filter(W).forEach(Z);
}
// src/modules/logs/playerLogWidgets/changeLabels.js
function ae(e) {
	c("a[href*=\"=trade&\"]", e).filter((e) => !m(e.href, "subcmd")).forEach((e) => E("Trade", e)), c("a[href*=\"=createsecure&\"]", e).forEach((e) => E("ST", e));
}
// src/modules/logs/playerLogWidgets/colorPlayers.js
function oe(e, t) {
	let [, , n] = e.rows[0].cells;
	n && !t && y(n, "&nbsp;&nbsp;<span class=\"fshWhite\">(Guild mates show up in <span class=\"fshGreen\">green</span>)</span>");
}
async function se(e) {
	let [, t] = await g(e);
	return [`.fshPlayerColoring tr:nth-of-type(${_(e).rowIndex + 1}) td:nth-of-type(3) > a:first-of-type`, t];
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
	return O(e.filter(de).reduce(ce, {})).map(ue);
}
function pe(e, t, n) {
	let r = fe(t);
	r.length && (oe(e, n), e.classList.add("fshPlayerColoring"), b(document.body, D(r.join("\n"))));
}
async function me(e, t) {
	let n = c(l, e);
	n.length && pe(e, await i(n.map(se)), t);
}
// src/modules/logs/playerLogWidgets/processLadder.js
var Q = 0, he = /You ranked \w{3,4} in your PvP Band! You have gained \d x PvP Ladder Token/;
function ge(e) {
	return he.test(a(e.cells[2]));
}
function $(e) {
	let t = A(v(e.cells[1]));
	t > Q && (j(u, t), Q = t);
}
function _e(e) {
	Q = n(u), c(f, e).map(_).filter(ge).forEach($);
}
// src/modules/logs/playerLogWidgets/addLogWidgets.js
var ve = [
	["addIgnoreLink", B],
	["colorPlayerNames", me],
	["addAttackLinkToLog", I],
	["changeButtonLabels", ae],
	["trackLadderReset", _e],
	["showPvPSummaryInLog", ie]
];
function ye(e, t, [r, i]) {
	n(r) && i(e, t);
}
function be(e, n) {
	ve.forEach(t(ye, e, n));
}
function xe(t) {
	if (e()) return;
	let n = k();
	n && be(n, t);
}
export { xe as t };

//# sourceMappingURL=addLogWidgets-BK5PA-tD.js.map