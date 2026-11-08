import { n as e, t } from "./colouredDots-DU9QBFC6.js";
import { t as n } from "./calf-SqS2SeU4.js";
import { t as r } from "./task-C5UKL2RH.js";
import { t as i } from "./contains-DU2fd_7n.js";
import { t as a } from "./getArrayByTagName-Dyx_AQto.js";
import { t as o } from "./lastActivity-CKrnHdgN.js";
import { t as ee } from "./numberIsNaN-DNn4rI1u.js";
import { t as s } from "./regExpFirstCapture-D_QeHFEY.js";
import { t as te } from "./setTipped-B47iaPSf.js";
import { Dt as ne, It as re, K as c, Mt as ie, St as ae, at as l, x as u, xt as oe } from "./constants-CenxlFMY.js";
import { t as d } from "./layout-B2Q1UoM2.js";
import { t as f } from "./addCommas-Bv8TEVoY.js";
import { t as p } from "./sendEvent-Co2_qySS.js";
import { t as m } from "./createDiv-B84RqGfo.js";
import { t as h } from "./closestTable-B73T3rIi.js";
import { t as g } from "./getElementsByTagName-B8gMqefB.js";
import { t as _ } from "./insertElement-6ZBKaryO.js";
import { t as v } from "./on-DfyX3AS4.js";
import { r as y } from "./simpleCheckbox-BrCsqZ3Q.js";
import { t as b } from "./getValue-vrUqpo0a.js";
import { t as x } from "./setValue-D-C74rTg.js";
import { t as S } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as C } from "./querySelector-C6ReNysW.js";
import { t as w } from "./createStyle-DG3VYLtp.js";
import { t as se } from "./currentGuildId-Bpd4l1O8.js";
import { i as ce, n as le, r as ue, t as de } from "./levelHighlight-DURs3O7W.js";
import { t as T } from "./querySelectorArray-C70U47NF.js";
import { t as fe } from "./getUrlParameter-DQUJPuXf.js";
import { t as E } from "./setInnerHtml-f0MFRJnQ.js";
import { t as pe } from "./compressBio-GA9TlvaL.js";
import { t as D } from "./getText-BqjgTHLv.js";
import { t as me } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as O } from "./onclick-nv-Fl1th.js";
import { t as k } from "./partial-Bo20zBni.js";
import { t as he } from "./playerName-DbmV53SI.js";
import { t as ge } from "./batch-B3DxuTgO.js";
import { t as _e } from "./getPlayerId-DtAI89Cf.js";
import { t as ve } from "./hrefStartsWith-BYndfmMf.js";
import { t as ye } from "./openQuickBuffById-C25RQjPG.js";
import { t as be } from "./indexAjaxDoc-MnAqiGyz.js";
import { t as xe } from "./dataRows-De29j_4W.js";
import { t as A } from "./createSpan-dzM9C32V.js";
import { t as j } from "./getElementById-C08-3H-C.js";
import { t as M } from "./hasClass-B8BlPKl4.js";
import { t as Se } from "./hideElement-D2Je4J0O.js";
import { t as Ce } from "./trim-CU-eMahN.js";
import { n as we } from "./idb-D8xqEbs-.js";
import { t as Te } from "./indexConstants-DNkt8oVH.js";
import { i as Ee, n as De, r as Oe } from "./guildActivity-BzQWoC2L.js";
import { t as ke } from "./createButton-xxO4WpnK.js";
// src/modules/guild/activeMembers.js
var N = 0, P = 1;
function Ae(e, t) {
	let { mins: n } = o(t.dataset.tipped);
	return n < 44640 && (e[N] += 1, e[P] += Number(s(ie, t.dataset.tipped))), e;
}
function je(e) {
	return e.reduce(Ae, [0, 0]);
}
function Me() {
	let t = a("b", d()).find(i("Members"));
	if (t) {
		let n = e(), r = je(n);
		t.classList.add("tip-static");
		let i = ee(r[P]) ? "" : `<br>Stamina: ${f(r[P])}`;
		te(`Active: ${r[N]}/${n.length}${i}`, t);
	}
}
// src/modules/guild/compactRanks/compactRanks.js
var F = "compactRanks", I = 0, L = 0;
function R() {
	L.classList.toggle("compact-ranks", I);
}
function Ne() {
	p("guild", "compactRanks"), I = !I, x(F, I), R();
}
function Pe() {
	let e = _(h(L.parentNode).parentNode, m({
		innerHTML: y(F),
		style: { textAlign: "center" }
	}));
	v(e, "change", Ne);
}
function Fe() {
	if (!d()) return;
	let e = g(c, d());
	L = e[e.length - 1], L && (Pe(), I = b(F), I && R());
}
// src/modules/guild/guildXPLock.js
function z(e, t) {
	let n = s(t, e.replace(/,/g, ""));
	return n ? parseInt(n, 10) : 0;
}
function Ie(e, t) {
	let n = "";
	return e > t && (n = "+"), n + f(e - t);
}
function Le(e) {
	let t = e.dataset.tipped, n = z(t, /XP Lock: <b>(?<lockXp>\d*)/), r = z(t, /XP: <b>(?<realXp>\d*)/);
	S(e.parentNode.nextElementSibling, ` (<b>${Ie(r, n)}</b>)`);
}
function Re() {
	let e = C("#pCC a[data-tipped^=\"<b>Guild XP</b>\"]");
	e && Le(e);
}
// src/modules/guild/compressHistory.js
function ze() {
	let e = a(c, d()).slice(-2, -1)[0];
	if (!e) return;
	let t = e.rows[0].cells[0], n = m({
		id: "profile-bio",
		innerHTML: t.innerHTML
	});
	E("", t), _(t, n), pe();
}
// src/modules/guild/injectViewGuild.js
var B = 0, V = 0;
function Be(e) {
	return B && e >= le() && e <= ce();
}
function Ve(e) {
	return V && e >= de() && e <= ue();
}
var He = (e) => [e, o(e.dataset.tipped).days], Ue = ([, e]) => e < 7, We = ([e]) => [e, Number(s(re, e.dataset.tipped))], Ge = ([e, t]) => [
	e.parentNode.parentNode.rowIndex,
	Be(t),
	Ve(t)
];
function Ke() {
	return T("#pCC a[data-tipped*=\"<td>VL:</td>\"]").map(He).filter(Ue).map(We).map(Ge);
}
function qe() {
	return Number(fe("guild_id")) !== se() && (B || V);
}
var Je = (e) => e.map(([e]) => `.fshHighlight tr:nth-child(${e + 1})`).join(",");
function H(e, t) {
	if (e.length) {
		let n = `${Je(e)} {background-color: #${t};}`;
		_(document.body, w(n));
	}
}
function Ye(e, t) {
	if (e.length + t.length) {
		let e = g(c, d());
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
	B = b("highlightPlayersNearMyLvl"), V = b("highlightGvGPlayersNearMyLvl"), Ze(), b("enableHistoryCompressor") && ze();
}
// src/modules/guild/buffLinks.js
function $e(e) {
	S(e.parentNode, " <span class=\"smallLink\">[b]</span>");
}
function et(e) {
	e.target.className === "smallLink" && (p("guild", "buffLinks"), ye(_e(e.target.previousElementSibling.href)));
}
function tt() {
	let e = T("#pCC a").filter(ve(oe));
	ge([
		3,
		e,
		0,
		$e
	]), O(d(), et);
}
// src/modules/guild/conflictInfo.js
function U(e) {
	return be({
		cmd: "guild",
		subcmd: "conflicts",
		page: e
	});
}
function W(e, t) {
	E(t, e.insertCell(-1));
}
function G(e, t, n) {
	let r = e.insertRow(e.rows.length - 2);
	return W(r, t), W(r, n), r;
}
function nt(e) {
	let t = G(e, `<a href="${l}conflicts">Active Conflicts</a>`, "Score");
	O(t, (e) => {
		e.target.tagName === "A" && p("guildManage", "conflictHeader");
	});
}
function rt(e, t) {
	G(e, t.cells[0].innerHTML, `<b>${t.cells[6].innerHTML}</b>`);
}
function it(e, t, n) {
	t === 1 && nt(n), xe(e, 7, 0).forEach(k(rt, n));
}
function at(e, t, n) {
	let r = C("#pCC > table > tbody > tr > td > table", e);
	r && r.rows.length > 3 && it(r, t, n);
}
function ot(e) {
	return Number(e.nextSibling.textContent.split("\xA0")[2]);
}
async function st(e, t, n) {
	t(n, await U(e + 1));
}
function K(e, t) {
	let n = C("#pCC input[name=\"page\"]", t);
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
// src/modules/guild/panelToggle.js
function lt(e) {
	return A({
		className: "fshLink",
		dataset: {
			linkto: e,
			tooltip: "Toggle Section"
		},
		textContent: "X"
	});
}
function ut(e) {
	let t = A({
		className: "fshNoWrap",
		innerHTML: "[&nbsp;"
	});
	return _(t, e), S(t, "&nbsp;]"), t;
}
function dt(e) {
	let t = e.target.dataset.linkto;
	p("guildManage", "toggleVisibilty", t);
	let n = j(t);
	if (!n) return;
	let r = M("fshHide", n);
	n.classList.toggle("fshHide"), r ? x(t, "") : x(t, "ON");
}
function q(e, t, n) {
	let r = lt(n);
	_(e, ut(r)), t.id = n, b(n) && Se(t), O(r, dt);
}
function ft(e) {
	q(e.rows[0].cells[1].children[0], e.rows[2].cells[0].children[0], "guildLogoControl");
}
function pt(e) {
	let t = e.rows[4].cells[1].children[0];
	E(Ce(t.innerHTML), t), q(t, e.rows[6].cells[0].children[0], "statisticsControl");
}
function mt(e) {
	let t = e.rows[15]?.cells[1].children[0];
	t && q(t, e.rows[17].cells[0].children[0], "guildStructureControl");
}
// src/modules/guild/stamBars/toggleStyle.js
var J = 0, Y = null;
async function ht() {
	let e = await we(Te);
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
	let t = D(e), n = Y?.[t];
	return n ? Math.min(Math.round(n.current / n.max * 100), 100) : 0;
}
function _t(e) {
	let t = gt(e);
	return `.fshProgressBar tr:nth-child(${e.parentNode.parentNode.rowIndex + 1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${t}%, transparent ${t + 1}%)}`;
}
async function vt() {
	await ht();
	let e = g(c, d()), t = e[e.length - 1], n = T(ae, t);
	if (!n.length) return;
	let r = n.filter((e) => {
		let t = D(e);
		return Y?.[t];
	});
	if (!r.length) return;
	t.classList.add("fshProgressBar");
	let i = r.map(_t).join("\n");
	J = _(document.body, w(i)).sheet;
}
async function X(e) {
	J ? J.disabled = !e : await vt();
}
// src/modules/guild/stamBars/stamBars.js
var Z = "enableStamBars", Q = 0;
function yt() {
	Q = !Q, x(Z, Q), X(Q), p("guildManage", "StamBars");
}
function $() {
	if (!C("#pCC img.guild_openGuildStore")) return;
	let e = g(c, d()), t = e[e.length - 1], n = _(h(t.parentNode).parentNode, m({
		innerHTML: y(Z),
		style: {
			marginBottom: "5px",
			textAlign: "center"
		}
	}));
	v(n, "change", yt);
}
function bt() {
	$(), Q = b(Z), Q && X(Q);
}
// src/modules/guild/tracker/tracker.js
function xt(e) {
	e.target.id === "enableGuildActivityTracker" && (p("Guild Tracker", "togglePref"), x(u, e.target.checked), e.target.checked ? De() : Oe());
}
function St() {
	p("Guild Tracker", "showTracker"), Ee();
}
function Ct() {
	let e = C("#pCC img.guild_openGuildStore");
	if (!e) return;
	let t = e.parentNode;
	t.classList.add("fshRelative");
	let n = m({
		className: "fsh-tracker",
		innerHTML: `${y(u)}&nbsp;`
	});
	v(n, "change", xt);
	let r = ke({ textContent: "Show" });
	O(r, St), _(n, r), _(t, n);
}
// src/modules/guild/manage.js
function wt(e) {
	let t = a("b", e).filter(i("Relics"));
	if (t.length !== 1) return;
	let n = t[0].parentNode.nextElementSibling.children[0];
	E(`[ <a href="${l}reliclist">Control</a> ]&nbsp;`, n), O(n, (e) => {
		e.target.tagName === "A" && p("guildManage", "relic control");
	});
}
function Tt(e) {
	let t = g("li", e);
	if (!t?.length) return;
	let n = t[t.length - 1].parentNode;
	S(n, `<li><a href="${ne}${he()}">Self Recall</a></li>`), O(n, (e) => {
		D(e.target) === "Self Recall" && p("guildManage", "Self Recall");
	});
}
function Et() {
	return d().lastElementChild.rows?.[2]?.cells[0].children[0];
}
function Dt(e, t) {
	r(3, t, [e]);
}
function Ot(e) {
	[
		ft,
		pt,
		mt,
		wt,
		Tt
	].forEach(k(Dt, e));
}
function kt(e) {
	me() || (b("detailedConflictInfo") && r(3, ct, [e]), r(4, Ct));
}
function At() {
	if (!d()) return;
	let e = Et();
	e && (Ot(e), b("showBuffLinks") && r(3, tt), kt(e), bt());
}
// src/modules/guild/injectGuild.js
function jt() {
	r(3, t), r(3, Re), r(3, Me), r(3, Fe), ["-", "manage"].includes(n.subcmd) && At(), n.subcmd === "view" && Qe();
}
export { jt as default };

//# sourceMappingURL=injectGuild-DYgBtmuL.js.map