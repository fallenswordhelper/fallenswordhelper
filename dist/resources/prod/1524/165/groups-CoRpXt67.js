import { t as e } from "./getText-BqjgTHLv.js";
import { t } from "./regExpExec-JYUpFNim.js";
import { t as n } from "./regExpFirstCapture-D_QeHFEY.js";
import { Tt as r, ht as i, xt as ee, yt as a } from "./constants-CenxlFMY.js";
import { t as te } from "./getValue-Aap0zlcO.js";
import { t as o } from "./querySelector-C6ReNysW.js";
import { t as s } from "./calf-SqS2SeU4.js";
import { t as c } from "./partial-Bo20zBni.js";
import { t as l } from "./sendEvent-DkxfZozg.js";
import { t as ne } from "./currentGuildId-WKn2jVcy.js";
import { t as u } from "./createDiv-XU2XBEIv.js";
import { t as d } from "./getArrayByClassName-RPqCUmVz.js";
import { t as f } from "./insertElement-6ZBKaryO.js";
import { t as p } from "./setInnerHtml-f0MFRJnQ.js";
import { t as m } from "./onclick-nv-Fl1th.js";
import { t as h } from "./querySelectorArray-C70U47NF.js";
import { t as g } from "./hideElement-D2Je4J0O.js";
import { t as _ } from "./closestTr-BGwSv-6S.js";
import { t as v } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as y } from "./createLi-BRGADhB9.js";
import { t as b } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as x } from "./csvSplit-C5BboO-R.js";
import { t as S } from "./fshOpen-ThkxNxdG.js";
import { t as C } from "./createButton-DCXb__Na.js";
import { t as w } from "./daJoinAll-C8UfwCkt.js";
import { t as T } from "./dateUtc-Xxl4jKba.js";
import { t as E } from "./createUl-DYP2v4cB.js";
import { t as D } from "./createInput-DPgk9mYC.js";
import { t as O } from "./getMembrList-D7ixdxPX.js";
import { t as k } from "./closestTable-B73T3rIi.js";
import { t as A } from "./getId-Ccs5W7A1.js";
import { t as j } from "./insertHtmlBeforeBegin-B76it-PJ.js";
import { t as M } from "./playerLinkFromMembrList-DB8TVnAD.js";
import { t as N } from "./chunk-A8FcSK6x.js";
import { t as P } from "./onlineDot-B-a-eWFn.js";
import { t as F } from "./daGroupStats-dgj1u1ML.js";
import { t as I } from "./attribsToArray-Bd0J_KyI.js";
// src/modules/common/doBuffLinks.js
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
// src/modules/guild/groups/doGroupPaint.js
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
	let r = n.map(c(M, e));
	p(`<span>${r.join(", ")}</span>`, t);
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
// src/modules/guild/groups/addButton.js
function Z(e, t) {
	let n = D({
		className: "custombutton",
		type: "button",
		value: t
	});
	return b(e, "&nbsp;"), f(e, n), n;
}
// src/modules/guild/groups/fetchGroupStatsButton.js
function oe(e) {
	return `<div class="fshgrpstat"><div>Attack</div><div>${e[0]}</div><div>Defense</div><div>${e[1]}</div><div>Armor</div><div>${e[2]}</div><div>Damage</div><div>${e[4]}</div><div>HP</div><div>${e[3]}</div></div>`;
}
async function se(e) {
	let t = A(e), n = await F(t);
	if (n?.r?.attributes) {
		let t = I(n.r.attributes), r = e.parentNode.parentNode.previousElementSibling;
		b(r, oe(t));
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
// src/modules/guild/groups/groupButtons.js
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
	let t = Z(e, `Join All Groups < ${s.maxGroupSizeToJoin} Members`);
	m(t, he);
}
function _e(e) {
	let t = e.parentNode;
	s.enableMaxGroupSizeToJoin && (g(e), ge(t)), le(t), s.subcmd2 === "joinallgroupsundersize" && $();
}
// src/modules/guild/groups/groups.js
function ve() {
	let e = te("minGroupLevel");
	if (e) {
		let t = o("#pCC table[width=\"650\"]");
		j(o("br", t), `<span class="fshBlue"> Current Min Level Setting: ${e}</span>`);
	}
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
export { be as default };

//# sourceMappingURL=groups-CoRpXt67.js.map