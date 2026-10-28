import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./getText-BqjgTHLv.js";
import { t as n } from "./playerName-DbmV53SI.js";
import { t as r } from "./regExpExec-JYUpFNim.js";
import { t as i } from "./regExpFirstCapture-D_QeHFEY.js";
import { t as a } from "./isUndefined-CH45qJXY.js";
import { It as o, U as s, jt as ee, wt as te } from "./constants-CenxlFMY.js";
import { t as c } from "./getValue-Aap0zlcO.js";
import { t as l } from "./setValue-B1MbQwxn.js";
import { t as ne } from "./isObject-BL3L1f85.js";
import { t as re } from "./querySelector-C6ReNysW.js";
import { t as u } from "./retryAjax-Cx5Fvrfg.js";
import { t as d } from "./calf-SqS2SeU4.js";
import { t as ie } from "./fallback-S8GIlBFf.js";
import { t as ae } from "./arrayFrom-CKk6qt2j.js";
import { t as f } from "./getElementsByTagName-B8gMqefB.js";
import { t as p } from "./getArrayByTagName-Dyx_AQto.js";
import { t as m } from "./trim-CU-eMahN.js";
import { t as h } from "./partial-Bo20zBni.js";
import { t as g } from "./layout-B2Q1UoM2.js";
import { t as _ } from "./sendEvent-DkxfZozg.js";
import { t as v } from "./setInnerHtml-f0MFRJnQ.js";
import { t as y } from "./createDocument-B1aK9_TZ.js";
import { t as oe } from "./alpha-BRx-EQ4u.js";
import { t as b } from "./contains-CziyX11O.js";
import { t as x } from "./onclick-nv-Fl1th.js";
import { t as S } from "./querySelectorArray-C70U47NF.js";
import { t as se } from "./guildManage-D4o3CS1R.js";
import { t as ce } from "./lastActivity-DkuqQAux.js";
import { t as le } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as ue } from "./csvSplit-C5BboO-R.js";
import { t as de } from "./intValue-DGRimvm1.js";
import { t as C } from "./buffObj-BqB_LPan.js";
import { t as fe } from "./simpleCheckbox-DUFnKFg1.js";
import { t as pe } from "./onlineDot-B-a-eWFn.js";
import { t as w } from "./onlinePlayersPage-bS146pcC.js";
// src/modules/system/path.js
function me(e, t, n) {
	let r = e, i = t.split("."), a = i.length;
	for (let e = 0; e < a; e += 1) {
		if (ie(!r, !ne(r))) return n;
		r = r[i[e]];
	}
	return r;
}
function T(e, t, n) {
	let r = me(e, t, n);
	return a(r) ? n : r;
}
// src/modules/system/sortDesc.js
function he(e) {
	return d.sortAsc ? e : -e;
}
// src/modules/system/stringSort.js
function ge(e, t) {
	let n = T(e, d.sortBy, "a"), r = T(t, d.sortBy, "a");
	return he(oe(n, r));
}
// src/modules/notepad/findBuffs/assets.js
function _e(e) {
	return `<option value="${e.id}">${e.name}</option>`;
}
var ve = {
	header: "Buff",
	what: "buff",
	control() {
		return `<select style="width:140px;" id="selectedBuff">${C.map(_e).join("")}</select>`;
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
		return `<input style="width:140px;" class="custominput" id="textToSearchFor" type="text" title="Text to search for" value="${c("textToSearchFor") || ""}">`;
	},
	cutoff: "500+ play",
	searched: "Text searched for",
	potential: "play",
	processed: "Play",
	progress: "Other"
}, E = null;
function D() {
	E = e("bufferProgress");
}
function O(e, t) {
	v(e, E), t && (E.style.color = t);
}
// src/modules/notepad/findBuffs/minLvl.js
var k = 0;
function A() {
	return k ? 500 : 1;
}
function j() {
	k = e("level175").checked;
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
	return fe("Search Allies/Enemies", "The checkbox enables searching your own personal allies/enemies list for buffs.<br><br>Additional profiles to search can be added in the text field to the right, separated by commas.");
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
function ke(t) {
	let n = p("a", e("profileLeftColumn", t)).find(b("Sustain"));
	if (n) {
		let e = n.parentNode.parentNode.parentNode.nextElementSibling.children[0].dataset.tipped;
		return parseInt(i(De, e), 10) || -1;
	}
	return 0;
}
function Ae(n) {
	return t(f("h1", e("pCC", n))[0]);
}
function je(n) {
	return de(t(e("profileLeftColumn", n).children[4].children[0].rows[0].cells[1]));
}
function Me(n) {
	return parseInt(t(e(s, n)), 10);
}
function Ne(e, t, n, r) {
	let i = Ae(e), a = je(e), o = Me(e), s = parseInt(n[1], 10);
	return `<nobr>${pe({ min: s })}&nbsp;<a href="${t.href}" target="new" class="tip-static" data-tipped="${r.replace(/['"\n]/g, "")}">${i}</a>&nbsp;<span class="fshBlue">[<span class="a-reply fshLink" target_player="${i}">m</span>]</span></nobr><br><span class="fshGrey">Level:&nbsp;</span>${a}&nbsp;(${o})`;
}
function Pe(e) {
	window.openQuickMsgDialog(e.target.getAttribute("target_player"));
}
function Fe(e) {
	let t = e.newRow.insertCell(0);
	t.style.verticalAlign = "top", v(Ne(e.doc, e.callback, e.lastActivity, e.bioCellHtml), t), $(".a-reply").on("click", Pe);
}
function Ie(e, t, n) {
	let r = "fshRed";
	t >= 100 && (r = "fshGreen");
	let i = "<span class=\"fshRed\">No</span>";
	return n && (i = "<span class=\"fshGreen\">Yes</span>"), `<table><tbody><tr><td colspan="2" class="resAct">Last Activity:</td><td colspan="2"><nobr>${e[0]}</nobr></td></tr><tr><td class="resLbl">Sustain:</td><td class="resVal ${r}">${t}%</td><td class="resLbl">Extend:</td><td class="resVal">${i}</td></tr>`;
}
function Le(e, t, n, r) {
	let i = e.insertCell(1);
	v(Ie(t, n, r), i), i.style.verticalAlign = "top";
}
function Re(e, t) {
	e.innerHTML += `${t}<br>`;
}
function ze(e, t) {
	let n = e.insertCell(2);
	t.forEach(h(Re, n));
}
function Be() {
	let n = e("buffersProcessed"), r = parseInt(t(e("potentialBuffers")), 10), i = parseInt(t(n), 10);
	v(i + 1, n), r === i + 1 && O("Done.", "blue");
}
function Ve(n) {
	let i = e("pCC", n), a = f("p", i)[0];
	return r(/(?<mins>\d{1,2}) mins, (?<secs>\d{1,2}) secs/, t(a));
}
function He(e) {
	return re("img.tip-static[data-tipped*=\"Extend\"]", e);
}
function Ue(t, n, r, i) {
	let a = Ve(r), o = e("buffTable").insertRow(-1);
	Fe({
		newRow: o,
		doc: r,
		callback: n,
		lastActivity: a,
		bioCellHtml: t
	}), Le(o, a, ke(r), He(r)), ze(o, i);
}
function We(t, n) {
	let r = y(t), i = e("profile-bio", r);
	if (!i) return;
	let a = i.innerHTML, o = Oe(a, n.findBuffNicks);
	o.length > 0 && Ue(a, n, r, o), Be();
}
// src/modules/notepad/findBuffs/findBuffs.js
var F = 0, I = 0, L = 0, R = 0, z = 0, B = 0, V = 0;
function H(t, n) {
	v(t, e(n));
}
function Ge(e, t) {
	We(t, {
		href: e,
		findBuffNicks: F
	});
}
async function Ke(e) {
	Ge(e, await u(e));
}
function U() {
	H(L.length, "potentialBuffers"), L.length <= 0 ? O("Done.", "blue") : (O("Parsing player data ...", "green"), L.forEach(Ke));
}
function qe(e, t) {
	return e === 1 ? Math.round(R * t / 50) : e + 1;
}
function W(e, t) {
	n() !== m(t) && L.push(e);
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
async function et(e, t, n) {
	let r = qe(e, t);
	O(`Parsing online page ${e} ...`), n(await w(r));
}
function G(e) {
	let t = y(e), n = Qe(t);
	n !== 1 && $e(t);
	let r = Ze(t);
	n < r ? et(n, r, G) : U();
}
async function K() {
	R = parseInt(e("onlinePlayers").value, 10), R === 0 ? U() : G(await w(1));
}
function tt(e, t, n) {
	return e < 5 && t >= I && t >= n;
}
function q(e) {
	let { tipped: n } = e.dataset, { mins: r } = ce(n);
	tt(r, Number(i(o, n)), A()) && W(e.href, t(e));
}
function nt(e) {
	let t = y(e);
	S("#profileLeftColumn a[data-tipped*=\"Last Activity\"]", t).forEach(q), V += 1, V === B.length && K();
}
function rt(e) {
	B.push(ee + e);
}
async function it(e) {
	nt(await u(e));
}
function at() {
	B = [], B.push(te), ue(z).forEach(rt), V = 0, e("alliesEnemies").checked ? B.forEach(it) : K();
}
function ot(t) {
	let n = y(t);
	e("guildMembers").checked && S("#pCC a[data-tipped*=\"<td>VL:</td>\"]", n).forEach(q), at();
}
function J(e, t) {
	return t !== 0;
}
function st(e) {
	e.deleteRow(-1);
}
function ct() {
	let t = e("buffTable");
	ae(t.rows).filter(J).forEach(h(st, t));
}
function lt() {
	_("find buffs", "clear results"), ct(), H("", "buffNicks"), O("Idle.", "black"), H("", "potentialBuffers"), H("0", "buffersProcessed");
}
async function ut() {
	ot(await se());
}
function Y(t) {
	le() || (H(F, "buffNicks"), O(`Gathering list of ${t} ...`, "green"), j(), H("0", "buffersProcessed"), L = [], z = e("extraProfile").value, l("extraProfile", z), ut());
}
function dt(e, t) {
	return e === t.id;
}
function ft() {
	_("find buffs", "findBuffsStart");
	let e = parseInt($("#selectedBuff").val(), 10), t = C.find(h(dt, e));
	F = t.nicks, I = t.lvl, Y("potential buffers");
}
function pt() {
	_("find buffs", "findOtherStart");
	let e = $("#textToSearchFor").val().split(",").map(m).join(",");
	l("textToSearchFor", e), F = e, I = 1, Y("profiles to search");
}
function X() {
	z = c("extraProfile");
}
function Z(t) {
	x(e("findbuffsbutton"), t, !0);
}
function Q() {
	x(e("clearresultsbutton"), lt, !0);
}
function mt(e) {
	let t = e || g();
	d.sortBy = "name", d.sortAsc = !0, C.sort(ge), X(), v(P(ve, z), t), D(), Z(ft), Q();
}
function ht(e) {
	let t = e || g();
	X(), v(P(ye, z), t), D(), Z(pt), Q();
}
export { mt as injectFindBuffs, ht as injectFindOther };

//# sourceMappingURL=findBuffs-COACAKoD.js.map