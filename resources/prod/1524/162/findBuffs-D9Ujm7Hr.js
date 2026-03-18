import { t as e } from "./getElementById-PlRCtyBA.js";
import { t } from "./getText-rCJDurvG.js";
import { t as n } from "./playerName-BXAa_cHJ.js";
import { t as r } from "./regExpExec-6_Ntf_JM.js";
import { t as i } from "./regExpFirstCapture-CdTmAP5x.js";
import "./posthog-C2Vh_0Hn.js";
import { t as a } from "./isUndefined-B3VLlmfL.js";
import "./system-De1jBRGa.js";
import { It as o, U as ee, jt as te, wt as ne } from "./constants-C54mky4_.js";
import { t as s } from "./getValue-CCThXEzy.js";
import { t as c } from "./setValue-Cb0PYC7t.js";
import { t as re } from "./isObject-gppvJNXN.js";
import { t as ie } from "./querySelector-qkBBhiGH.js";
import { t as l } from "./retryAjax-p9geDMSY.js";
import { t as u } from "./calf-OM11NjAU.js";
import { t as ae } from "./fallback-BaBUEkCV.js";
import { t as d } from "./arrayFrom-LpiPmbFE.js";
import { t as f } from "./getElementsByTagName-BUN1mNPF.js";
import { t as oe } from "./getArrayByTagName-L2qWyNZV.js";
import { t as p } from "./trim-BIFcpoD2.js";
import { t as m } from "./partial-goh6HOls.js";
import { t as h } from "./layout-Bapa39KM.js";
import { t as g } from "./sendEvent-bwvhd4A-.js";
import { t as _ } from "./setInnerHtml-ClDKp0Zh.js";
import { t as v } from "./createDocument-95hjGOI1.js";
import "./indexAjax-BXHvJ2Y7.js";
import "./indexAjaxData-CqOTihOX.js";
import { t as y } from "./alpha-gvIHBiw7.js";
import { t as b } from "./contains-D51Mjk5W.js";
import { t as x } from "./onclick-9iRduoOH.js";
import { t as S } from "./querySelectorArray-BZbNvND7.js";
import { t as se } from "./guildManage-DmJ34aSd.js";
import { t as ce } from "./lastActivity-CUAo9jGH.js";
import { t as le } from "./jQueryNotPresent-oTtW_9Ua.js";
import { t as ue } from "./csvSplit-Dg-U97MN.js";
import { t as de } from "./intValue-NIZZTFPF.js";
import { t as C } from "./buffObj-BcP2E5eH.js";
import { t as fe } from "./simpleCheckbox-D5o0QaTA.js";
import { t as pe } from "./onlineDot-CXb1YqvF.js";
import { t as w } from "./onlinePlayersPage-nAweaF4L.js";
//#region src/modules/system/path.js
function me(e, t, n) {
	let r = e, i = t.split("."), a = i.length;
	for (let e = 0; e < a; e += 1) {
		if (ae(!r, !re(r))) return n;
		r = r[i[e]];
	}
	return r;
}
function T(e, t, n) {
	let r = me(e, t, n);
	return a(r) ? n : r;
}
//#endregion
//#region src/modules/system/sortDesc.js
function he(e) {
	return u.sortAsc ? e : -e;
}
//#endregion
//#region src/modules/system/stringSort.js
function ge(e, t) {
	return he(y(T(e, u.sortBy, "a"), T(t, u.sortBy, "a")));
}
//#endregion
//#region src/modules/notepad/findBuffs/assets.js
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
		return `<input style="width:140px;" class="custominput" id="textToSearchFor" type="text" title="Text to search for" value="${s("textToSearchFor") || ""}">`;
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
	_(e, E), t && (E.style.color = t);
}
//#endregion
//#region src/modules/notepad/findBuffs/minLvl.js
var k = 0;
function A() {
	return k ? 500 : 1;
}
function j() {
	k = e("level175").checked;
}
//#endregion
//#region src/modules/notepad/findBuffs/pageLayout.js
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
//#endregion
//#region src/modules/notepad/findBuffs/parseProfileAndDisplay.js
var De = /Level<br>(?<lvl>\d+)%/;
function Oe(e, t) {
	let n = RegExp(`^.*\\b(?:(?:${t.replace(/,/g, ")|(?:")}))\\b.*$`, "gim");
	return [...e.matchAll(n)].map((e) => e[0]);
}
function ke(t) {
	let n = oe("a", e("profileLeftColumn", t)).find(b("Sustain"));
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
	return parseInt(t(e(ee, n)), 10);
}
function Ne(e, t, n, r) {
	let i = Ae(e), a = je(e), o = Me(e);
	return `<nobr>${pe({ min: parseInt(n[1], 10) })}&nbsp;<a href="${t.href}" target="new" class="tip-static" data-tipped="${r.replace(/['"\n]/g, "")}">${i}</a>&nbsp;<span class="fshBlue">[<span class="a-reply fshLink" target_player="${i}">m</span>]</span></nobr><br><span class="fshGrey">Level:&nbsp;</span>${a}&nbsp;(${o})`;
}
function Pe(e) {
	window.openQuickMsgDialog(e.target.getAttribute("target_player"));
}
function Fe(e) {
	let t = e.newRow.insertCell(0);
	t.style.verticalAlign = "top", _(Ne(e.doc, e.callback, e.lastActivity, e.bioCellHtml), t), $(".a-reply").on("click", Pe);
}
function Ie(e, t, n) {
	let r = "fshRed";
	t >= 100 && (r = "fshGreen");
	let i = "<span class=\"fshRed\">No</span>";
	return n && (i = "<span class=\"fshGreen\">Yes</span>"), `<table><tbody><tr><td colspan="2" class="resAct">Last Activity:</td><td colspan="2"><nobr>${e[0]}</nobr></td></tr><tr><td class="resLbl">Sustain:</td><td class="resVal ${r}">${t}%</td><td class="resLbl">Extend:</td><td class="resVal">${i}</td></tr>`;
}
function Le(e, t, n, r) {
	let i = e.insertCell(1);
	_(Ie(t, n, r), i), i.style.verticalAlign = "top";
}
function Re(e, t) {
	e.innerHTML += `${t}<br>`;
}
function ze(e, t) {
	let n = e.insertCell(2);
	t.forEach(m(Re, n));
}
function Be() {
	let n = e("buffersProcessed"), r = parseInt(t(e("potentialBuffers")), 10), i = parseInt(t(n), 10);
	_(i + 1, n), r === i + 1 && O("Done.", "blue");
}
function Ve(n) {
	let i = f("p", e("pCC", n))[0];
	return r(/(?<mins>\d{1,2}) mins, (?<secs>\d{1,2}) secs/, t(i));
}
function He(e) {
	return ie("img.tip-static[data-tipped*=\"Extend\"]", e);
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
	let r = v(t), i = e("profile-bio", r);
	if (!i) return;
	let a = i.innerHTML, o = Oe(a, n.findBuffNicks);
	o.length > 0 && Ue(a, n, r, o), Be();
}
//#endregion
//#region src/modules/notepad/findBuffs/findBuffs.js
var F = 0, I = 0, L = 0, R = 0, z = 0, B = 0, V = 0;
function H(t, n) {
	_(t, e(n));
}
function Ge(e, t) {
	We(t, {
		href: e,
		findBuffNicks: F
	});
}
async function Ke(e) {
	Ge(e, await l(e));
}
function U() {
	if (H(L.length, "potentialBuffers"), L.length <= 0) {
		O("Done.", "blue");
		return;
	}
	O("Parsing player data ...", "green"), L.forEach(Ke);
}
function qe(e, t) {
	return e === 1 ? Math.round(R * t / 50) : e + 1;
}
function W(e, t) {
	n() !== p(t) && L.push(e);
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
	let t = v(e), n = Qe(t);
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
	S("#profileLeftColumn a[data-tipped*=\"Last Activity\"]", v(e)).forEach(q), V += 1, V === B.length && K();
}
function rt(e) {
	B.push(te + e);
}
async function it(e) {
	nt(await l(e));
}
function at() {
	B = [], B.push(ne), ue(z).forEach(rt), V = 0, e("alliesEnemies").checked ? B.forEach(it) : K();
}
function ot(t) {
	let n = v(t);
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
	d(t.rows).filter(J).forEach(m(st, t));
}
function lt() {
	g("find buffs", "clear results"), ct(), H("", "buffNicks"), O("Idle.", "black"), H("", "potentialBuffers"), H("0", "buffersProcessed");
}
async function ut() {
	ot(await se());
}
function Y(t) {
	le() || (H(F, "buffNicks"), O(`Gathering list of ${t} ...`, "green"), j(), H("0", "buffersProcessed"), L = [], z = e("extraProfile").value, c("extraProfile", z), ut());
}
function dt(e, t) {
	return e === t.id;
}
function ft() {
	g("find buffs", "findBuffsStart");
	let e = parseInt($("#selectedBuff").val(), 10), t = C.find(m(dt, e));
	F = t.nicks, I = t.lvl, Y("potential buffers");
}
function pt() {
	g("find buffs", "findOtherStart");
	let e = $("#textToSearchFor").val().split(",").map(p).join(",");
	c("textToSearchFor", e), F = e, I = 1, Y("profiles to search");
}
function X() {
	z = s("extraProfile");
}
function Z(t) {
	x(e("findbuffsbutton"), t, !0);
}
function Q() {
	x(e("clearresultsbutton"), lt, !0);
}
function mt(e) {
	let t = e || h();
	u.sortBy = "name", u.sortAsc = !0, C.sort(ge), X(), _(P(ve, z), t), D(), Z(ft), Q();
}
function ht(e) {
	let t = e || h();
	X(), _(P(ye, z), t), D(), Z(pt), Q();
}
//#endregion
export { mt as injectFindBuffs, ht as injectFindOther };

//# sourceMappingURL=findBuffs-D9Ujm7Hr.js.map