import { t as e } from "./getMembrList-DQELBcHH.js";
import { t } from "./currentGuildId-Bpd4l1O8.js";
import { t as n } from "./insertHtmlBeforeBegin-B76it-PJ.js";
import { t as r } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as i } from "./querySelector-C6ReNysW.js";
import { t as a } from "./querySelectorArray-C70U47NF.js";
import { t as o } from "./getValue-DMlY7SSn.js";
import { t as s } from "./sendEvent-DdWrU3DL.js";
import { t as c } from "./closestTable-B73T3rIi.js";
import { t as l } from "./closestTr-BGwSv-6S.js";
import { t as u } from "./csvSplit-C5BboO-R.js";
import { t as d } from "./dateUtc-Xxl4jKba.js";
import { t as f } from "./fshOpen-ThkxNxdG.js";
import { Tt as p, ht as m, xt as h, yt as ee } from "./constants-CenxlFMY.js";
import { t as te } from "./createButton-xxO4WpnK.js";
import { t as ne } from "./createLi-DyEJrNb_.js";
import { t as re } from "./createUl-C_0j3zUR.js";
import { t as g } from "./chunk-A8FcSK6x.js";
import { t as _ } from "./insertElement-6ZBKaryO.js";
import { t as v } from "./onclick-nv-Fl1th.js";
import { t as y } from "./getArrayByClassName-RPqCUmVz.js";
import { t as b } from "./getText-BqjgTHLv.js";
import { t as x } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as S } from "./onlineDot-B-a-eWFn.js";
import { t as C } from "./partial-Bo20zBni.js";
import { t as w } from "./playerLinkFromMembrList-DB8TVnAD.js";
import { t as T } from "./regExpExec-JYUpFNim.js";
import { t as E } from "./setInnerHtml-f0MFRJnQ.js";
import { t as D } from "./daJoinAll-Cm7BLo7I.js";
import { t as O } from "./createDiv-B84RqGfo.js";
import { t as k } from "./hideElement-D2Je4J0O.js";
import { t as A } from "./regExpFirstCapture-D_QeHFEY.js";
import { t as j } from "./calf-SqS2SeU4.js";
import { t as M } from "./createInput-x6h3QT7P.js";
import { t as N } from "./daGroupStats-CIDZ7nZl.js";
import { t as P } from "./attribsToArray-Bd0J_KyI.js";
import { t as F } from "./getCustomUrlParameter-OUJUdwqs.js";
// src/modules/common/doBuffLinks.js
function I(e, t) {
	let n = ne(), r = te({
		className: "fshBl fshBls",
		textContent: e
	});
	return v(r, (n) => {
		n.target.blur(), f(`${p}&players=${t}`, "fsQuickBuff", 618, 1e3, ",scrollbars"), s("doBuffLinks", e);
	}), _(n, r), n;
}
function L(e, t, n) {
	return _(e, I(`Buff ${ee[n]} 16`, t.join(","))), e;
}
function R(e) {
	let t = g(16, e), n = re();
	return t.reduce(L, n);
}
// src/modules/guild/groups/doGroupPaint.js
var z = /(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/, B = (e, t) => e?.[t]?.level ?? 0, V = (e, t, n) => B(e, n) - B(e, t), H = (e) => e !== "[none]" && e.indexOf("<font") === -1;
function U(e) {
	let t = (/* @__PURE__ */ new Date()).getFullYear();
	return m[(/* @__PURE__ */ new Date()).getMonth()] === "Dec" && e === "Jan" && (t += 1), t;
}
function W([, , e, t, n, r]) {
	return new Date(d([
		U(t),
		t,
		e,
		n,
		r
	]));
}
function G(e) {
	let t = e.cells[3], n = T(z, b(t));
	n && x(t, `<br><span class="fshBlue fshXSmall">Local: ${W(n).toString().slice(0, 21)}</span>`);
}
function K(e, t) {
	let n = b(t.children[0]);
	return e?.[n] ? `${S({ last_login: e[n].last_login })}&nbsp;<a href="${h}${e[n].id}"><b>${n}</b></a> [${e[n].level}]` : `<b>${n}</b>`;
}
function q(e, t) {
	let n = u(t.innerHTML);
	return n.length > 1 && n.sort(C(V, e)), n;
}
function J(e, t) {
	let n = t.filter(H);
	n.length > 0 && _(e, R(n)), x(e, `<span class="fshXSmall">Members: ${n.length}</span>`);
}
function Y(e, t, n) {
	let r = n.map(C(w, e));
	E(`<span>${r.join(", ")}</span>`, t);
}
function X(e, t) {
	let n = t.cells[0];
	E(K(e, n), n);
	let r = t.cells[1], i = q(e, r);
	J(n, i), Y(e, r, i), G(t);
}
function ie(e) {
	e.target.tagName === "A" && s("groups", "member click"), e.target.tagName === "B" && s("groups", "leader click");
}
function ae(e) {
	y("group-action-container").map((e) => l(e)).forEach(C(X, e)), v(c(i(".group-action-container")), ie);
}
// src/modules/guild/groups/addButton.js
function Z(e, t) {
	let n = M({
		className: "custombutton",
		type: "button",
		value: t
	});
	return x(e, "&nbsp;"), _(e, n), n;
}
// src/modules/guild/groups/fetchGroupStatsButton.js
function oe(e) {
	return `<div class="fshgrpstat"><div>Attack</div><div>${e[0]}</div><div>Defense</div><div>${e[1]}</div><div>Armor</div><div>${e[2]}</div><div>Damage</div><div>${e[4]}</div><div>HP</div><div>${e[3]}</div></div>`;
}
async function se(e) {
	let t = F(e.href, "group_id"), n = await N(t);
	if (n?.r?.attributes) {
		let t = P(n.r.attributes), r = e.parentNode.parentNode.previousElementSibling;
		x(r, oe(t));
	}
}
function ce(e) {
	s("groups", "fetchGroupData");
	let { target: t } = e;
	t.disabled = !0, a("#pCC a[href*=\"=viewstats&\"]").forEach(se);
}
function le(e) {
	e.classList.add("fshRelative");
	let t = Z(e, "Fetch Group Stats");
	t.style.position = "absolute", v(t, ce);
}
// src/modules/guild/groups/groupButtons.js
var ue = (e) => !e.includes("#000099"), de = ([, e]) => e < j.maxGroupSizeToJoin, fe = ([e]) => [
	e,
	O({
		className: "group-action-link fshRelative",
		innerHTML: "<span class=\"fshSpinner fshSpinner12\"></span>",
		style: {
			height: "19px",
			width: "19px"
		}
	}),
	A(/confirmJoin\((?<id>\d+)\)/, e.href)
];
function pe(e) {
	let t = e.parentNode.parentNode.parentNode.cells[1];
	return [e, u(b(t)).filter(ue).length];
}
function me([e, t]) {
	e.replaceWith(t);
}
function Q([, e]) {
	E("<span class=\"fshXSmall fshBlue\" style=\"line-height: 19px;\">Joined</span>", e);
}
async function $() {
	let e = a("#pCC a[href*=\"confirmJoin\"]").map(pe).filter(de).map(fe);
	e.forEach(me), await D(e.map(([, , e]) => e)), e.forEach(Q);
}
function he() {
	s("groups", "joinAllGroupsUnderSize"), $();
}
function ge(e) {
	let t = Z(e, `Join All Groups < ${j.maxGroupSizeToJoin} Members`);
	v(t, he);
}
function _e(e) {
	let t = e.parentNode;
	j.enableMaxGroupSizeToJoin && (k(e), ge(t)), le(t), j.subcmd2 === "joinallgroupsundersize" && $();
}
// src/modules/guild/groups/groups.js
function ve() {
	let e = o("minGroupLevel");
	if (e) {
		let t = i("#pCC table[width=\"650\"]");
		n(i("br", t), `<span class="fshBlue"> Current Min Level Setting: ${e}</span>`);
	}
}
function ye() {
	let e = a("#pCC td.header-dark");
	e.length < 5 || (e[0].setAttribute("width", "20%"), e[1].setAttribute("width", "44%"), e[2].setAttribute("width", "7%"), e[3].setAttribute("width", "22%"), e[4].setAttribute("width", "7%"));
}
async function be() {
	if (!t() || r()) return;
	let n = i("#pCC input[value=\"Join All Available Groups\"]");
	if (!n) return;
	let a = e(!1);
	ve(), _e(n), ye();
	let o = await a;
	o && ae(o);
}
export { be as default };

//# sourceMappingURL=groups-T-nCN2A-.js.map