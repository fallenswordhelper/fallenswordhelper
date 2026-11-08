import { t as e } from "./guildManage-Sw9nWSjc.js";
import { t } from "./onlinePlayersPage-BVXAB_na.js";
import { t as n } from "./retryAjax-Cx5Fvrfg.js";
import { t as r } from "./sendEvent-Co2_qySS.js";
import { t as i } from "./arrayFrom-CKk6qt2j.js";
import { t as a } from "./csvSplit-C5BboO-R.js";
import { t as o } from "./getElementById-C08-3H-C.js";
import { t as s } from "./getText-BqjgTHLv.js";
import { t as c } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as l } from "./lastActivity-CKrnHdgN.js";
import { t as u } from "./onclick-nv-Fl1th.js";
import { t as d } from "./partial-Bo20zBni.js";
import { t as f } from "./playerName-DbmV53SI.js";
import { t as p } from "./querySelectorArray-C70U47NF.js";
import { t as m } from "./regExpFirstCapture-D_QeHFEY.js";
import { t as h } from "./trim-CU-eMahN.js";
import { t as g } from "./setInnerHtml-f0MFRJnQ.js";
import { t as _ } from "./buffObj-BqB_LPan.js";
import { t as v } from "./calf-SqS2SeU4.js";
import { It as y, U as ee, jt as te, wt as ne } from "./constants-CenxlFMY.js";
import { t as b } from "./layout-B2Q1UoM2.js";
import { t as x } from "./createDocument-B1aK9_TZ.js";
import { t as S } from "./getValue-vrUqpo0a.js";
import { t as C } from "./setValue-D-C74rTg.js";
import { t as re } from "./alpha-BRx-EQ4u.js";
import { t as ie } from "./isObject-BL3L1f85.js";
import { t as ae } from "./isUndefined-CH45qJXY.js";
import { t as oe } from "./fallback-S8GIlBFf.js";
import { t as se } from "./simpleCheckbox-BrCsqZ3Q.js";
import { t as ce } from "./contains-DU2fd_7n.js";
import { t as le } from "./getArrayByTagName-Dyx_AQto.js";
import { t as w } from "./getElementsByTagName-B8gMqefB.js";
import { t as ue } from "./onlineDot-B-a-eWFn.js";
import { t as de } from "./querySelector-C6ReNysW.js";
import { t as fe } from "./regExpExec-JYUpFNim.js";
import { t as pe } from "./intValue-DGRimvm1.js";
// src/modules/system/path.js
function me(e, t, n) {
	let r = e, i = t.split("."), a = i.length;
	for (let e = 0; e < a; e += 1) {
		if (oe(!r, !ie(r))) return n;
		r = r[i[e]];
	}
	return r;
}
function T(e, t, n) {
	let r = me(e, t, n);
	return ae(r) ? n : r;
}
// src/modules/system/sortDesc.js
function he(e) {
	return v.sortAsc ? e : -e;
}
// src/modules/system/stringSort.js
function ge(e, t) {
	let n = T(e, v.sortBy, "a"), r = T(t, v.sortBy, "a");
	return he(re(n, r));
}
// src/modules/notepad/findBuffs/assets.js
function _e(e) {
	return `<option value="${e.id}">${e.name}</option>`;
}
var ve = {
	header: "Buff",
	what: "buff",
	control() {
		return `<select style="width:140px;" id="selectedBuff">${_.map(_e).join("")}</select>`;
	},
	cutoff: "175 buff",
	searched: "Nicknames of buff searched",
	potential: "buff",
	processed: "Buff",
	progress: "buffers"
}, ye = {
	header: "Other",
	what: "text",
	control() {
		return `<input style="width:140px;" class="custominput" id="textToSearchFor" type="text" title="Text to search for" value="${S("textToSearchFor") || ""}">`;
	},
	cutoff: "500+ play",
	searched: "Text searched for",
	potential: "play",
	processed: "Play",
	progress: "Other"
}, E = null;
function D() {
	E = o("bufferProgress");
}
function O(e, t) {
	g(e, E), t && (E.style.color = t);
}
// src/modules/notepad/findBuffs/minLvl.js
var k = 0;
function A() {
	return k ? 500 : 1;
}
function j() {
	k = o("level175").checked;
}
// src/modules/notepad/findBuffs/pageLayout.js
function M(e) {
	return `<tr><td rowspan="2" colspan="2" class="headCell"><h1>Find ${e.header}</h1></td><td class="findLabel">Select ${e.what} to search for:</td><td>${e.control()}</td></tr>`;
}
function N(e) {
	return `<tr><td class="findLabel">Level ${e.cutoff}ers only:</td><td><input id="level175" type="checkbox"></td></tr>`;
}
function be(e) {
	return `<tr><td class="leftLabel">${e.searched}:&nbsp;</td><td id="buffNicks">&nbsp;</td><td class="findLabel">Search guild members:</td><td><input id="guildMembers" type="checkbox" checked></td></tr>`;
}
function xe() {
	return se("Search Allies/Enemies", "The checkbox enables searching your own personal allies/enemies list for buffs.<br><br>Additional profiles to search can be added in the text field to the right, separated by commas.");
}
function Se(e, t) {
	return `<tr><td class="findLabel"># potential ${e.potential}ers to search:&nbsp;</td><td id="potentialBuffers"></td><td class="findLabel">Search allies/enemies:${xe()}</td><td><input id="alliesEnemies" type="checkbox" checked><input class="extraProfile" class="custominput" id="extraProfile" type="text" title="Extra profiles to search" value="${t || ""}"></td></tr>`;
}
function Ce(e) {
	return `<tr><td class="findLabel"># ${e.processed}ers processed:&nbsp;</td><td id="buffersProcessed">0</td><td class="findLabel">Search online list:</td><td><select class="selectOnline" id="onlinePlayers"><option value="0">Disabled</option><option value="49">Short (fastest)</option><option value="47">Medium (medium)</option><option value="45">Long (slowest)</option></select></td></tr>`;
}
function we(e) {
	return `<tr><td class="findLabel">Find ${e.progress} progress:&nbsp;</td><td class="buffProg" id="bufferProgress">Idle</td><td align="center"><input id="clearresultsbutton" class="custombutton" type="button" value="Clear Results"></td><td align="center"><input id="findbuffsbutton" class="custombutton" type="button" value="Find Buffers"></td></tr>`;
}
function Te(e) {
	return `<br><h1>Potential ${e.processed}ers and Bio Info</h1><br><table class="fshResult" id="buffTable"><tbody><tr><th class="nameCol">&nbsp;Name</th><th class="infoCol">&nbsp;Player Info</th><th>&nbsp;Notable Bio Text</th></tr></tbody></table><br>`;
}
function Ee() {
	return "<div class=\"disclaim\">Disclaimer: This functionality does a simple text search for the terms above. It is not as smart as you are, so please do not judge the results too harshly. It does not search all online players, just a subset of those that have been on recently. The aim is to be fast and still return a good set of results. This feature is a work in progress, so it may be tweaked and enhanced over time.</div>";
}
function P(e, t) {
	return `<table class="fshFind"><tbody>${M(e)}${N(e)}${be(e)}${Se(e, t)}${Ce(e)}${we(e)}</tbody></table>${Te(e)}${Ee()}`;
}
// src/modules/notepad/findBuffs/parseProfileAndDisplay.js
var De = /Level<br>(?<lvl>\d+)%/;
function Oe(e, t) {
	let n = RegExp(`^.*\\b(?:(?:${t.replace(/,/g, ")|(?:")}))\\b.*$`, "gim");
	return [...e.matchAll(n)].map((e) => e[0]);
}
function ke(e) {
	let t = le("a", o("profileLeftColumn", e)).find(ce("Sustain"));
	if (t) {
		let e = t.parentNode.parentNode.parentNode.nextElementSibling.children[0].dataset.tipped;
		return parseInt(m(De, e), 10) || -1;
	}
	return 0;
}
function Ae(e) {
	return s(w("h1", o("pCC", e))[0]);
}
function je(e) {
	return pe(s(o("profileLeftColumn", e).children[4].children[0].rows[0].cells[1]));
}
function Me(e) {
	return parseInt(s(o(ee, e)), 10);
}
function Ne(e, t, n, r) {
	let i = Ae(e), a = je(e), o = Me(e), s = parseInt(n[1], 10);
	return `<nobr>${ue({ min: s })}&nbsp;<a href="${t.href}" target="new" class="tip-static" data-tipped="${r.replace(/['"\n]/g, "")}">${i}</a>&nbsp;<span class="fshBlue">[<span class="a-reply fshLink" target_player="${i}">m</span>]</span></nobr><br><span class="fshGrey">Level:&nbsp;</span>${a}&nbsp;(${o})`;
}
function Pe(e) {
	window.openQuickMsgDialog(e.target.getAttribute("target_player"));
}
function Fe(e) {
	let t = e.newRow.insertCell(0);
	t.style.verticalAlign = "top", g(Ne(e.doc, e.callback, e.lastActivity, e.bioCellHtml), t), $(".a-reply").on("click", Pe);
}
function Ie(e, t, n) {
	let r = "fshRed";
	t >= 100 && (r = "fshGreen");
	let i = "<span class=\"fshRed\">No</span>";
	return n && (i = "<span class=\"fshGreen\">Yes</span>"), `<table><tbody><tr><td colspan="2" class="resAct">Last Activity:</td><td colspan="2"><nobr>${e[0]}</nobr></td></tr><tr><td class="resLbl">Sustain:</td><td class="resVal ${r}">${t}%</td><td class="resLbl">Extend:</td><td class="resVal">${i}</td></tr>`;
}
function Le(e, t, n, r) {
	let i = e.insertCell(1);
	g(Ie(t, n, r), i), i.style.verticalAlign = "top";
}
function Re(e, t) {
	e.innerHTML += `${t}<br>`;
}
function ze(e, t) {
	let n = e.insertCell(2);
	t.forEach(d(Re, n));
}
function Be() {
	let e = o("buffersProcessed"), t = parseInt(s(o("potentialBuffers")), 10), n = parseInt(s(e), 10);
	g(n + 1, e), t === n + 1 && O("Done.", "blue");
}
function Ve(e) {
	let t = o("pCC", e), n = w("p", t)[0];
	return fe(/(?<mins>\d{1,2}) mins, (?<secs>\d{1,2}) secs/, s(n));
}
function He(e) {
	return de("img.tip-static[data-tipped*=\"Extend\"]", e);
}
function Ue(e, t, n, r) {
	let i = Ve(n), a = o("buffTable").insertRow(-1);
	Fe({
		newRow: a,
		doc: n,
		callback: t,
		lastActivity: i,
		bioCellHtml: e
	}), Le(a, i, ke(n), He(n)), ze(a, r);
}
function We(e, t) {
	let n = x(e), r = o("profile-bio", n);
	if (!r) return;
	let i = r.innerHTML, a = Oe(i, t.findBuffNicks);
	a.length > 0 && Ue(i, t, n, a), Be();
}
// src/modules/notepad/findBuffs/findBuffs.js
var F = 0, I = 0, L = 0, R = 0, z = 0, B = 0, V = 0;
function H(e, t) {
	g(e, o(t));
}
function Ge(e, t) {
	We(t, {
		href: e,
		findBuffNicks: F
	});
}
async function Ke(e) {
	Ge(e, await n(e));
}
function U() {
	H(L.length, "potentialBuffers"), L.length <= 0 ? O("Done.", "blue") : (O("Parsing player data ...", "green"), L.forEach(Ke));
}
function qe(e, t) {
	return e === 1 ? Math.round(R * t / 50) : e + 1;
}
function W(e, t) {
	f() !== h(t) && L.push(e);
}
function Je(e) {
	return parseInt($(e).find("td:eq(2)").text().replace(/,/g, ""), 10);
}
function Ye(e) {
	return e >= I && e >= A();
}
function Xe(e, t) {
	Ye(Je(t)) && W($(t).find("td:eq(1) a").attr("href"), $(t).find("td:eq(1) a").text());
}
function Ze(e) {
	return parseInt($(e).find("td:has(input[name=\"page\"]):last").text().replace(/\D/g, ""), 10);
}
function Qe(e) {
	return parseInt($(e).find("input[name=\"page\"]:last").val().replace(/\D/g, ""), 10);
}
function $e(e) {
	$(e).find("table:contains(\"Username\")>tbody>tr:has(td>a[href*=\"cmd=profile&player_id=\"])").each(Xe);
}
async function et(e, n, r) {
	let i = qe(e, n);
	O(`Parsing online page ${e} ...`), r(await t(i));
}
function G(e) {
	let t = x(e), n = Qe(t);
	n !== 1 && $e(t);
	let r = Ze(t);
	n < r ? et(n, r, G) : U();
}
async function K() {
	R = parseInt(o("onlinePlayers").value, 10), R === 0 ? U() : G(await t(1));
}
function tt(e, t, n) {
	return e < 5 && t >= I && t >= n;
}
function q(e) {
	let { tipped: t } = e.dataset, { mins: n } = l(t);
	tt(n, Number(m(y, t)), A()) && W(e.href, s(e));
}
function nt(e) {
	let t = x(e);
	p("#profileLeftColumn a[data-tipped*=\"Last Activity\"]", t).forEach(q), V += 1, V === B.length && K();
}
function rt(e) {
	B.push(te + e);
}
async function it(e) {
	nt(await n(e));
}
function at() {
	B = [], B.push(ne), a(z).forEach(rt), V = 0, o("alliesEnemies").checked ? B.forEach(it) : K();
}
function ot(e) {
	let t = x(e);
	o("guildMembers").checked && p("#pCC a[data-tipped*=\"<td>VL:</td>\"]", t).forEach(q), at();
}
function J(e, t) {
	return t !== 0;
}
function st(e) {
	e.deleteRow(-1);
}
function ct() {
	let e = o("buffTable");
	i(e.rows).filter(J).forEach(d(st, e));
}
function lt() {
	r("find buffs", "clear results"), ct(), H("", "buffNicks"), O("Idle.", "black"), H("", "potentialBuffers"), H("0", "buffersProcessed");
}
async function ut() {
	ot(await e());
}
function Y(e) {
	c() || (H(F, "buffNicks"), O(`Gathering list of ${e} ...`, "green"), j(), H("0", "buffersProcessed"), L = [], z = o("extraProfile").value, C("extraProfile", z), ut());
}
function dt(e, t) {
	return e === t.id;
}
function ft() {
	r("find buffs", "findBuffsStart");
	let e = parseInt($("#selectedBuff").val(), 10), t = _.find(d(dt, e));
	F = t.nicks, I = t.lvl, Y("potential buffers");
}
function pt() {
	r("find buffs", "findOtherStart");
	let e = $("#textToSearchFor").val().split(",").map(h).join(",");
	C("textToSearchFor", e), F = e, I = 1, Y("profiles to search");
}
function X() {
	z = S("extraProfile");
}
function Z(e) {
	u(o("findbuffsbutton"), e, !0);
}
function Q() {
	u(o("clearresultsbutton"), lt, !0);
}
function mt(e) {
	let t = e || b();
	v.sortBy = "name", v.sortAsc = !0, _.sort(ge), X(), g(P(ve, z), t), D(), Z(ft), Q();
}
function ht(e) {
	let t = e || b();
	X(), g(P(ye, z), t), D(), Z(pt), Q();
}
export { mt as injectFindBuffs, ht as injectFindOther };

//# sourceMappingURL=findBuffs-DvPIQjOu.js.map