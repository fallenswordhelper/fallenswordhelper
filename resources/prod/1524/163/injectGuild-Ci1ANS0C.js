import { t as e } from "./getElementById-DgC-_E5u.js";
import { t } from "./getText-BybFkJV6.js";
import { t as n } from "./playerName-WE8p-OHq.js";
import { t as r } from "./regExpFirstCapture-Bi32xMqS.js";
import { Dt as i, It as a, K as o, Mt as ee, St as te, at as s, x as c, xt as ne } from "./constants-CIKidKvt.js";
import { t as l } from "./getValue-j5JjE6f3.js";
import { t as u } from "./setValue-31jE_mRr.js";
import { t as d } from "./querySelector-8FH1hhUv.js";
import { t as f } from "./on-afIPYx-0.js";
import { t as p } from "./calf-DxCOTxVt.js";
import { t as m } from "./task-DenRcgws.js";
import { t as re } from "./getUrlParameter-OG9FsMwx.js";
import { t as h } from "./getElementsByTagName-CkoUUI_g.js";
import { t as g } from "./getArrayByTagName-QRr9ypcm.js";
import { t as ie } from "./trim-C3qdDCs0.js";
import { t as _ } from "./partial-CYzPXpZP.js";
import { t as v } from "./layout-6CPY-bfq.js";
import { t as y } from "./sendEvent-DFQy5lFi.js";
import { t as ae } from "./currentGuildId-D9JtVH2U.js";
import { t as b } from "./createDiv-CH3rNL4c.js";
import { t as x } from "./insertElement-C_6uFPNr.js";
import { t as S } from "./setInnerHtml-Dh9y9Se-.js";
import { i as oe, n as se, r as ce } from "./guildActivity-CHTFrBOj.js";
import { t as le } from "./indexAjaxDoc-BNgfSQTJ.js";
import { t as C } from "./contains-wh2Zi4Dq.js";
import { t as w } from "./onclick-8ZwMJyqI.js";
import { t as ue } from "./querySelectorAll-Bwhb2XCF.js";
import { t as T } from "./querySelectorArray-Bdj4peIm.js";
import { t as de } from "./hideElement-TH4JEbXy.js";
import { t as E } from "./lastActivity-DUD_rfoH.js";
import { n as fe } from "./idb-BvD4EIHy.js";
import { t as pe } from "./indexConstants-CP3i_Y_v.js";
import { t as me } from "./jQueryNotPresent-UT8-ZycH.js";
import { t as D } from "./createSpan-DCxGsyWX.js";
import { t as O } from "./insertHtmlBeforeEnd-D5-rjWCh.js";
import { t as he } from "./hasClass-B5HBqSaS.js";
import { t as ge } from "./getPlayerId-DOaPZMl6.js";
import { t as _e } from "./openQuickBuffById-B9fhtNQi.js";
import { t as ve } from "./createButton-YvU0Rx_S.js";
import { t as ye } from "./dataRows-BlMmmxmo.js";
import { t as be } from "./numberIsNaN-Y6LDm3bY.js";
import { t as k } from "./addCommas-BgpPUQrd.js";
import { t as xe } from "./setTipped-DSzC-h_d.js";
import { t as A } from "./createStyle-Qs_9mDCV.js";
import { t as j } from "./closestTable-B_Km1mKH.js";
import { i as M } from "./simpleCheckbox-BrfzFmVJ.js";
import { i as Se, n as Ce, r as we, t as Te } from "./levelHighlight-D78MsDRp.js";
import { t as Ee } from "./batch-Bv-NXhgk.js";
import { n as De, t as Oe } from "./colouredDots-DAgIOjN1.js";
import { t as ke } from "./compressBio-4iDizlkN.js";
//#region src/modules/guild/activeMembers.js
var N = 0, P = 1;
function Ae(e, t) {
	let { mins: n } = E(t.dataset.tipped);
	return n < 44640 && (e[N] += 1, e[P] += Number(r(ee, t.dataset.tipped))), e;
}
function je(e) {
	return e.reduce(Ae, [0, 0]);
}
function Me() {
	let e = g("b", v()).find(C("Members"));
	if (e) {
		let t = De(), n = je(t);
		e.classList.add("tip-static");
		let r = be(n[P]) ? "" : `<br>Stamina: ${k(n[P])}`;
		xe(`Active: ${n[N]}/${t.length}${r}`, e);
	}
}
//#endregion
//#region src/modules/guild/compactRanks/compactRanks.js
var F = "compactRanks", I = 0, L = 0;
function R() {
	L.classList.toggle("compact-ranks", I);
}
function Ne() {
	y("guild", "compactRanks"), I = !I, u(F, I), R();
}
function Pe() {
	f(x(j(L.parentNode).parentNode, b({
		innerHTML: M(F),
		style: { textAlign: "center" }
	})), "change", Ne);
}
function Fe() {
	if (!v()) return;
	let e = h(o, v());
	L = e[e.length - 1], L && (Pe(), I = l(F), I && R());
}
//#endregion
//#region src/modules/guild/guildXPLock.js
function z(e, t) {
	let n = r(t, e.replace(/,/g, ""));
	return n ? parseInt(n, 10) : 0;
}
function Ie(e, t) {
	let n = "";
	return e > t && (n = "+"), n + k(e - t);
}
function Le(e) {
	let t = e.dataset.tipped, n = z(t, /XP Lock: <b>(?<lockXp>\d*)/), r = z(t, /XP: <b>(?<realXp>\d*)/);
	O(e.parentNode.nextElementSibling, ` (<b>${Ie(r, n)}</b>)`);
}
function Re() {
	let e = d("#pCC a[data-tipped^=\"<b>Guild XP</b>\"]");
	e && Le(e);
}
//#endregion
//#region src/modules/guild/compressHistory.js
function ze() {
	let e = g(o, v()).slice(-2, -1)[0];
	if (!e) return;
	let t = e.rows[0].cells[0], n = b({
		id: "profile-bio",
		innerHTML: t.innerHTML
	});
	S("", t), x(t, n), ke();
}
//#endregion
//#region src/modules/guild/injectViewGuild.js
var B = 0, V = 0;
function Be(e) {
	return B && e >= Ce() && e <= Se();
}
function Ve(e) {
	return V && e >= Te() && e <= we();
}
var He = (e) => [e, E(e.dataset.tipped).days], Ue = ([, e]) => e < 7, We = ([e]) => [e, Number(r(a, e.dataset.tipped))], Ge = ([e, t]) => [
	e.parentNode.parentNode.rowIndex,
	Be(t),
	Ve(t)
];
function Ke() {
	return T("#pCC a[data-tipped*=\"<td>VL:</td>\"]").map(He).filter(Ue).map(We).map(Ge);
}
function qe() {
	return Number(re("guild_id")) !== ae() && (B || V);
}
var Je = (e) => e.map(([e]) => `.fshHighlight tr:nth-child(${e + 1})`).join(",");
function H(e, t) {
	if (e.length) {
		let n = `${Je(e)} {background-color: #${t};}`;
		x(document.body, A(n));
	}
}
function Ye(e, t) {
	if (e.length + t.length) {
		let e = h(o, v());
		e[e.length - 1].classList.add("fshHighlight");
	}
}
function Xe() {
	let e = Ke(), t = e.filter(([, e]) => e), n = e.filter(([, e, t]) => !e && t);
	H(t, "4671C8"), H(n, "FF9900"), Ye(t, n);
}
function Ze() {
	qe() && Xe();
}
function Qe() {
	B = l("highlightPlayersNearMyLvl"), V = l("highlightGvGPlayersNearMyLvl"), Ze(), l("enableHistoryCompressor") && ze();
}
//#endregion
//#region src/modules/guild/buffLinks.js
function $e(e) {
	O(e.parentNode, " <span class=\"smallLink\">[b]</span>");
}
function et(e) {
	e.target.className === "smallLink" && (y("guild", "buffLinks"), _e(ge(e.target.previousElementSibling.href)));
}
function tt() {
	Ee([
		3,
		ue(`#pCC a[href^="${ne}"]`),
		0,
		$e
	]), w(v(), et);
}
//#endregion
//#region src/modules/guild/conflictInfo.js
function U(e) {
	return le({
		cmd: "guild",
		subcmd: "conflicts",
		page: e
	});
}
function W(e, t) {
	S(t, e.insertCell(-1));
}
function G(e, t, n) {
	let r = e.insertRow(e.rows.length - 2);
	return W(r, t), W(r, n), r;
}
function nt(e) {
	w(G(e, `<a href="${s}conflicts">Active Conflicts</a>`, "Score"), (e) => {
		e.target.tagName === "A" && y("guildManage", "conflictHeader");
	});
}
function rt(e, t) {
	G(e, t.cells[0].innerHTML, `<b>${t.cells[6].innerHTML}</b>`);
}
function it(e, t, n) {
	t === 1 && nt(n), ye(e, 7, 0).forEach(_(rt, n));
}
function at(e, t, n) {
	let r = d("#pCC > table > tbody > tr > td > table", e);
	r && r.rows.length > 3 && it(r, t, n);
}
function ot(e) {
	return Number(e.nextSibling.textContent.split("\xA0")[2]);
}
async function st(e, t, n) {
	t(n, await U(e + 1));
}
function K(e, t) {
	let n = d("#pCC input[name=\"page\"]", t);
	if (!n) return;
	let r = Number(n.value), i = ot(n);
	at(t, r, e.node), i > r && st(r, K, e);
}
async function ct(e) {
	let [t] = e.rows[6].cells[0].children;
	if (t) {
		let e = await U(1);
		K({ node: t }, e);
	}
}
//#endregion
//#region src/modules/guild/panelToggle.js
function lt(e) {
	return D({
		className: "fshLink",
		dataset: {
			linkto: e,
			tooltip: "Toggle Section"
		},
		textContent: "X"
	});
}
function ut(e) {
	let t = D({
		className: "fshNoWrap",
		innerHTML: "[&nbsp;"
	});
	return x(t, e), O(t, "&nbsp;]"), t;
}
function dt(t) {
	let n = t.target.dataset.linkto;
	y("guildManage", "toggleVisibilty", n);
	let r = e(n);
	if (!r) return;
	let i = he("fshHide", r);
	r.classList.toggle("fshHide"), i ? u(n, "") : u(n, "ON");
}
function q(e, t, n) {
	let r = lt(n);
	x(e, ut(r)), t.id = n, l(n) && de(t), w(r, dt);
}
function ft(e) {
	q(e.rows[0].cells[1].children[0], e.rows[2].cells[0].children[0], "guildLogoControl");
}
function pt(e) {
	let t = e.rows[4].cells[1].children[0];
	S(ie(t.innerHTML), t), q(t, e.rows[6].cells[0].children[0], "statisticsControl");
}
function mt(e) {
	let t = e.rows[15]?.cells[1].children[0];
	t && q(t, e.rows[17].cells[0].children[0], "guildStructureControl");
}
//#endregion
//#region src/modules/guild/stamBars/toggleStyle.js
var J = 0, Y = null;
async function ht() {
	let e = await fe(pe);
	if (e?.members) {
		Y = {};
		for (let [t, n] of Object.entries(e.members)) if (n.length > 0) {
			let e = n.at(-1);
			Y[t] = {
				current: e[1],
				max: e[3]
			};
		}
	}
}
function gt(e) {
	let n = t(e), r = Y?.[n];
	return r ? Math.min(Math.round(r.current / r.max * 100), 100) : 0;
}
function _t(e) {
	let t = gt(e);
	return `.fshProgressBar tr:nth-child(${e.parentNode.parentNode.rowIndex + 1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${t}%, transparent ${t + 1}%)}`;
}
async function vt() {
	await ht();
	let e = h(o, v()), n = e[e.length - 1], r = T(te, n);
	if (!r.length) return;
	let i = r.filter((e) => {
		let n = t(e);
		return Y?.[n];
	});
	if (!i.length) return;
	n.classList.add("fshProgressBar");
	let a = i.map(_t).join("\n");
	J = x(document.body, A(a)).sheet;
}
async function X(e) {
	J ? J.disabled = !e : await vt();
}
//#endregion
//#region src/modules/guild/stamBars/stamBars.js
var Z = "enableStamBars", Q = 0;
function yt() {
	Q = !Q, u(Z, Q), X(Q), y("guildManage", "StamBars");
}
function $() {
	if (!d("#pCC img.guild_openGuildStore")) return;
	let e = h(o, v()), t = e[e.length - 1];
	f(x(j(t.parentNode).parentNode, b({
		innerHTML: M(Z),
		style: {
			marginBottom: "5px",
			textAlign: "center"
		}
	})), "change", yt);
}
function bt() {
	$(), Q = l(Z), Q && X(Q);
}
//#endregion
//#region src/modules/guild/tracker/tracker.js
function xt(e) {
	e.target.id === "enableGuildActivityTracker" && (y("Guild Tracker", "togglePref"), u(c, e.target.checked), e.target.checked ? se() : ce());
}
function St() {
	y("Guild Tracker", "showTracker"), oe();
}
function Ct() {
	let e = d("#pCC img.guild_openGuildStore");
	if (!e) return;
	let t = e.parentNode;
	t.classList.add("fshRelative");
	let n = b({
		className: "fsh-tracker",
		innerHTML: `${M(c)}&nbsp;`
	});
	f(n, "change", xt);
	let r = ve({ textContent: "Show" });
	w(r, St), x(n, r), x(t, n);
}
//#endregion
//#region src/modules/guild/manage.js
function wt(e) {
	let t = g("b", e).filter(C("Relics"));
	if (t.length !== 1) return;
	let n = t[0].parentNode.nextElementSibling.children[0];
	S(`[ <a href="${s}reliclist">Control</a> ]&nbsp;`, n), w(n, (e) => {
		e.target.tagName === "A" && y("guildManage", "relic control");
	});
}
function Tt(e) {
	let r = h("li", e);
	if (!r?.length) return;
	let a = r[r.length - 1].parentNode;
	O(a, `<li><a href="${i}${n()}">Self Recall</a></li>`), w(a, (e) => {
		t(e.target) === "Self Recall" && y("guildManage", "Self Recall");
	});
}
function Et() {
	return v().lastElementChild.rows?.[2]?.cells[0].children[0];
}
function Dt(e, t) {
	m(3, t, [e]);
}
function Ot(e) {
	[
		ft,
		pt,
		mt,
		wt,
		Tt
	].forEach(_(Dt, e));
}
function kt(e) {
	me() || (l("detailedConflictInfo") && m(3, ct, [e]), m(4, Ct));
}
function At() {
	if (!v()) return;
	let e = Et();
	e && (Ot(e), l("showBuffLinks") && m(3, tt), kt(e), bt());
}
//#endregion
//#region src/modules/guild/injectGuild.js
function jt() {
	m(3, Oe), m(3, Re), m(3, Me), m(3, Fe), ["-", "manage"].includes(p.subcmd) && At(), p.subcmd === "view" && Qe();
}
//#endregion
export { jt as default };

//# sourceMappingURL=injectGuild-Ci1ANS0C.js.map