import { t as e } from "./getText-rCJDurvG.js";
import { t } from "./regExpExec-6_Ntf_JM.js";
import { t as n } from "./regExpFirstCapture-CdTmAP5x.js";
import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import { Tt as r, ht as i, xt as ee, yt as a } from "./constants-C54mky4_.js";
import { t as te } from "./getValue-CCThXEzy.js";
import { t as o } from "./querySelector-qkBBhiGH.js";
import { t as s } from "./calf-OM11NjAU.js";
import { t as c } from "./partial-goh6HOls.js";
import { t as l } from "./sendEvent-bwvhd4A-.js";
import { t as ne } from "./currentGuildId-Br10wzx3.js";
import { t as u } from "./createDiv-Bb3O54wx.js";
import { t as d } from "./getArrayByClassName-BzDfah40.js";
import { t as f } from "./insertElement-DtUB7uKq.js";
import { t as p } from "./setInnerHtml-ClDKp0Zh.js";
import "./indexAjax-BXHvJ2Y7.js";
import "./indexAjaxData-CqOTihOX.js";
import "./indexAjaxDoc-DHqD1q8U.js";
import { t as m } from "./onclick-9iRduoOH.js";
import { t as h } from "./querySelectorArray-BZbNvND7.js";
import { t as g } from "./hideElement-DH6fODir.js";
import { t as _ } from "./closestTr-C0LB9ALA.js";
import "./idb-sdcp-8vV.js";
import "./indexAjaxJson-DuDMsKRC.js";
import "./cmdExport-C_7TLPs-.js";
import { t as v } from "./jQueryNotPresent-oTtW_9Ua.js";
import { t as y } from "./createLi-BpXbz2a_.js";
import { t as b } from "./insertHtmlBeforeEnd-CRJWaYJw.js";
import { t as x } from "./csvSplit-Dg-U97MN.js";
import { t as S } from "./fshOpen-y-EfaH6D.js";
import { t as C } from "./createButton-B2HXwHjh.js";
import { t as w } from "./daJoinAll-CMq-thOm.js";
import { t as T } from "./dateUtc-CzlnFLKV.js";
import "./playerLink-B6KUxd0X.js";
import { t as E } from "./createUl-DZ1yA1il.js";
import { t as D } from "./createInput-B2lyiYPw.js";
import "./guildMembers-CZU-uLr9.js";
import { t as O } from "./getMembrList-B5emVD6O.js";
import { t as k } from "./closestTable-Dfg3mstY.js";
import { t as A } from "./getId-CYwWkshr.js";
import { t as j } from "./insertHtmlBeforeBegin-DxBuoQhv.js";
import { t as M } from "./playerLinkFromMembrList-Cg2qOPyG.js";
import { t as N } from "./chunk-DM2KJQ4C.js";
import { t as P } from "./onlineDot-CXb1YqvF.js";
import { t as F } from "./daGroupStats-DCUyK80i.js";
import { t as I } from "./attribsToArray-Dfb2rZXE.js";
//#region src/modules/common/doBuffLinks.js
function L(e, t) {
	let n = y(), i = C({
		className: "fshBl fshBls",
		textContent: e
	});
	return m(i, (n) => {
		n.target.blur(), S(`${r}&players=${t}`, "fsQuickBuff", 618, 1e3, ",scrollbars"), l("doBuffLinks", e);
	}), f(n, i), n;
}
function R(e, t, n) {
	return f(e, L(`Buff ${a[n]} 16`, t.join(","))), e;
}
function z(e) {
	let t = N(16, e), n = E();
	return t.reduce(R, n);
}
//#endregion
//#region src/modules/guild/groups/doGroupPaint.js
var B = /(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/, V = (e, t) => e?.[t]?.level ?? 0, H = (e, t, n) => V(e, n) - V(e, t), U = (e) => e !== "[none]" && e.indexOf("<font") === -1;
function re(e) {
	let t = (/* @__PURE__ */ new Date()).getFullYear();
	return i[(/* @__PURE__ */ new Date()).getMonth()] === "Dec" && e === "Jan" && (t += 1), t;
}
function W([, , e, t, n, r]) {
	return new Date(T([
		re(t),
		t,
		e,
		n,
		r
	]));
}
function G(n) {
	let r = n.cells[3], i = t(B, e(r));
	i && b(r, `<br><span class="fshBlue fshXSmall">Local: ${W(i).toString().slice(0, 21)}</span>`);
}
function K(t, n) {
	let r = e(n.children[0]);
	return t?.[r] ? `${P({ last_login: t[r].last_login })}&nbsp;<a href="${ee}${t[r].id}"><b>${r}</b></a> [${t[r].level}]` : `<b>${r}</b>`;
}
function q(e, t) {
	let n = x(t.innerHTML);
	return n.length > 1 && n.sort(c(H, e)), n;
}
function J(e, t) {
	let n = t.filter(U);
	n.length > 0 && f(e, z(n)), b(e, `<span class="fshXSmall">Members: ${n.length}</span>`);
}
function Y(e, t, n) {
	p(`<span>${n.map(c(M, e)).join(", ")}</span>`, t);
}
function X(e, t) {
	let n = t.cells[0];
	p(K(e, n), n);
	let r = t.cells[1], i = q(e, r);
	J(n, i), Y(e, r, i), G(t);
}
function ie(e) {
	e.target.tagName === "A" && l("groups", "member click"), e.target.tagName === "B" && l("groups", "leader click");
}
function ae(e) {
	d("group-action-container").map((e) => _(e)).forEach(c(X, e)), m(k(o(".group-action-container")), ie);
}
//#endregion
//#region src/modules/guild/groups/addButton.js
function Z(e, t) {
	let n = D({
		className: "custombutton",
		type: "button",
		value: t
	});
	return b(e, "&nbsp;"), f(e, n), n;
}
//#endregion
//#region src/modules/guild/groups/fetchGroupStatsButton.js
function oe(e) {
	return `<div class="fshgrpstat"><div>Attack</div><div>${e[0]}</div><div>Defense</div><div>${e[1]}</div><div>Armor</div><div>${e[2]}</div><div>Damage</div><div>${e[4]}</div><div>HP</div><div>${e[3]}</div></div>`;
}
async function se(e) {
	let t = await F(A(e));
	if (t?.r?.attributes) {
		let n = I(t.r.attributes), r = e.parentNode.parentNode.previousElementSibling;
		b(r, oe(n));
	}
}
function ce(e) {
	l("groups", "fetchGroupData");
	let { target: t } = e;
	t.disabled = !0, h("#pCC a[href*=\"=viewstats&\"]").forEach(se);
}
function le(e) {
	e.classList.add("fshRelative");
	let t = Z(e, "Fetch Group Stats");
	t.style.position = "absolute", m(t, ce);
}
//#endregion
//#region src/modules/guild/groups/groupButtons.js
var ue = (e) => !e.includes("#000099"), de = ([, e]) => e < s.maxGroupSizeToJoin, fe = ([e]) => [
	e,
	u({
		className: "group-action-link fshRelative",
		innerHTML: "<span class=\"fshSpinner fshSpinner12\"></span>",
		style: {
			height: "19px",
			width: "19px"
		}
	}),
	n(/confirmJoin\((?<id>\d+)\)/, e.href)
];
function pe(t) {
	let n = t.parentNode.parentNode.parentNode.cells[1];
	return [t, x(e(n)).filter(ue).length];
}
function me([e, t]) {
	e.replaceWith(t);
}
function Q([, e]) {
	p("<span class=\"fshXSmall fshBlue\" style=\"line-height: 19px;\">Joined</span>", e);
}
async function $() {
	let e = h("#pCC a[href*=\"confirmJoin\"]").map(pe).filter(de).map(fe);
	e.forEach(me), await w(e.map(([, , e]) => e)), e.forEach(Q);
}
function he() {
	l("groups", "joinAllGroupsUnderSize"), $();
}
function ge(e) {
	m(Z(e, `Join All Groups < ${s.maxGroupSizeToJoin} Members`), he);
}
function _e(e) {
	let t = e.parentNode;
	s.enableMaxGroupSizeToJoin && (g(e), ge(t)), le(t), s.subcmd2 === "joinallgroupsundersize" && $();
}
//#endregion
//#region src/modules/guild/groups/groups.js
function ve() {
	let e = te("minGroupLevel");
	e && j(o("br", o("#pCC table[width=\"650\"]")), `<span class="fshBlue"> Current Min Level Setting: ${e}</span>`);
}
function ye() {
	let e = h("#pCC td.header-dark");
	e.length < 5 || (e[0].setAttribute("width", "20%"), e[1].setAttribute("width", "44%"), e[2].setAttribute("width", "7%"), e[3].setAttribute("width", "22%"), e[4].setAttribute("width", "7%"));
}
async function be() {
	if (!ne() || v()) return;
	let e = o("#pCC input[value=\"Join All Available Groups\"]");
	if (!e) return;
	let t = O(!1);
	ve(), _e(e), ye();
	let n = await t;
	n && ae(n);
}
//#endregion
export { be as default };

//# sourceMappingURL=groups-DNxQL2nm.js.map