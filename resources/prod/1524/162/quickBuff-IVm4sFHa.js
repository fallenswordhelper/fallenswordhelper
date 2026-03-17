import "./sendException-s1csWDQs.js";
import { t as e } from "./getElementById-PlRCtyBA.js";
import { t } from "./getText-rCJDurvG.js";
import { t as n } from "./playerName-BXAa_cHJ.js";
import "./posthog-C2Vh_0Hn.js";
import { t as r } from "./devStdOut-BnwcHKWA.js";
import "./system-De1jBRGa.js";
import "./constants-C54mky4_.js";
import { t as i } from "./getValue-CCThXEzy.js";
import { t as a } from "./setValue-Cb0PYC7t.js";
import { t as o } from "./querySelector-qkBBhiGH.js";
import { t as s } from "./on-f-HmOL0n.js";
import { t as c } from "./getUrlParameter-qxOiipWG.js";
import { t as l } from "./getElementsByTagName-BUN1mNPF.js";
import { t as u } from "./partial-goh6HOls.js";
import { t as d } from "./sendEvent-bwvhd4A-.js";
import { t as f } from "./setInnerHtml-ClDKp0Zh.js";
import "./indexAjax-BXHvJ2Y7.js";
import "./indexAjaxData-CqOTihOX.js";
import "./indexAjaxDoc-DHqD1q8U.js";
import { t as p } from "./onclick-9iRduoOH.js";
import { t as ee } from "./querySelectorAll-6sjy8RXa.js";
import { t as m } from "./querySelectorArray-BZbNvND7.js";
import "./indexAjaxJson-DuDMsKRC.js";
import "./cmdExport-C_7TLPs-.js";
import "./profile-BWfgrKDA.js";
import { t as te } from "./jQueryNotPresent-oTtW_9Ua.js";
import { t as h } from "./insertElementAfter-_lHbpCVl.js";
import { t as g } from "./createSpan-DpSRnwEQ.js";
import { t as _ } from "./csvSplit-Dg-U97MN.js";
import { t as v } from "./outputFormat-Oy78OCSG.js";
import { t as y } from "./formatLastActivity-CXcckba-.js";
import { t as b } from "./setTipped-vR4mu9k3.js";
import "./buffReportParser-CWfaADse.js";
import { t as x } from "./insertHtmlAfterEnd-UBfyVLKA.js";
import { t as S } from "./executeAll-DpcDw_ug.js";
import { t as C } from "./getProfile-BdYxaM9M.js";
import { n as ne, t as re } from "./quickbuffSuccess-BF_YKomW.js";
//#region src/modules/quickbuff/addStatsQuickBuff.js
function ie(e) {
	let t = o("span.fshLastActivity", e);
	if (!t) {
		t = g({ className: "fshLastActivity" });
		let n = l("h1", e)[0];
		h(t, n);
	}
	return t;
}
function ae(e) {
	if (!e) return;
	let t = ie(o(`div.player[data-username="${e.username}"]`));
	f(`Last Activity: ${y(e.last_login)}<br>Stamina: ${e.current_stamina} / ${e.stamina} ( ${Math.floor(e.current_stamina / e.stamina * 100)}% )`, t);
}
//#endregion
//#region src/modules/quickbuff/parseBuffLevel.js
function w(e) {
	return Number(t(e).replace(/[[\]]/g, ""));
}
//#endregion
//#region src/modules/quickbuff/addBuffLevels.js
function oe(e, t) {
	if (!t) {
		let t = g({ className: "fshPlayer" });
		return h(t, e.nextElementSibling), t;
	}
	return t;
}
function se(e, t) {
	return e > t ? "fshRed" : "fshGreen";
}
function T(e, t, n) {
	if (!t) {
		f("", n);
		return;
	}
	let r = e.nextElementSibling.children[0].children[0], i = w(r), a = oe(e, n);
	f(` <span class="${se(i, t)}">[${t}]</span>`, a);
}
function E(e, t) {
	return t[0] === e;
}
function D(e, t) {
	let n = t.getAttribute("data-name"), r = e.find(u(E, n));
	if (r) return r[1];
}
function O(e, t) {
	let n = D(e, t), r = t.nextElementSibling.nextElementSibling;
	(n || r) && T(t, n, r);
}
function k(e) {
	return e.split(/ \[|]/);
}
function A(e) {
	return _(t(e.parentNode.lastElementChild)).map(k);
}
async function j(e) {
	let n = C(t(e)), r = A(e);
	m("#buff-outer input[name]").forEach(u(O, r)), ae(await n);
}
function M(e) {
	let t = e.target;
	t.tagName === "H1" && (d("quickbuff", "addBuffLevels"), j(t));
}
//#endregion
//#region src/modules/quickbuff/assets.js
var N = "<div id=\"helperQBheader\"><table class=\"quickbuffTable\"><thead><tr><th class=\"quickbuffTableHeader\">Sustain</th><th class=\"quickbuffTableHeader\">Fury Caster</th><th class=\"quickbuffTableHeader\">Guild Buffer</th><th class=\"quickbuffTableHeader\">Buff Master</th><th class=\"quickbuffTableHeader\">Extend</th><th class=\"quickbuffTableHeader\">Reinforce</th></tr></thead><tbody><tr><td id=\"fshSus\" class=\"quickbuffTableDetail\">&nbsp;</td><td id=\"fshFur\" class=\"quickbuffTableDetail\">&nbsp;</td><td id=\"fshGB\"  class=\"quickbuffTableDetail\">&nbsp;</td><td id=\"fshBM\"  class=\"quickbuffTableDetail\">&nbsp;</td><td id=\"fshExt\" class=\"quickbuffTableDetail\">&nbsp;</td><td id=\"fshRI\"  class=\"quickbuffTableDetail\">&nbsp;</td></tr></tbody></table></div>", P = [
	50,
	54,
	55,
	56,
	60,
	61,
	98,
	101,
	179,
	181
], F = "<p class=\"quickbuffSortCheckboxContainer\"><input id=\"quickbuffSortCheckbox\" class=\"quickbuffSortCheckbox\" type=\"checkbox\"><label for=\"quickbuffSortCheckbox\">Sort buffs alphabetically</label></p>", I = "qbSortBuffsAlphabetically";
//#endregion
//#region src/modules/quickbuff/doLabels.js
function L(e, t) {
	let n = t.dataset.tipped, { cost: r } = e.previousElementSibling.dataset;
	b(n.replace("</center>", `<br>Stamina Cost: ${r}$&`), t);
}
function R(e, t) {
	return !P.includes(Number(e.htmlFor.slice(6))) && w(t.children[0]) < 125;
}
function z(e, t) {
	R(e, t) && e.classList.add("fshDim");
}
function B(e) {
	let t = e.children[0];
	L(e, t), z(e, t);
}
function V() {
	m("#buff-outer label[for^=\"skill-\"]").forEach(B);
}
//#endregion
//#region src/modules/quickbuff/firstPlayerStats.js
function H(e, t) {
	return !e && t;
}
function U(t) {
	let n = l("h1", e("players"))[0];
	if (H(n, t)) {
		setTimeout(U, 100, t - 1);
		return;
	}
	n && j(n);
}
function W() {
	e("targetPlayers").value && U(9);
}
//#endregion
//#region src/modules/quickbuff/populateBuffs.js
function G(e) {
	let t = Math.floor(e / 60), n = e % 60, r = v(t, "m");
	return t > 0 && n > 0 && (r += " "), r += v(n, "s"), r;
}
function K(e) {
	return `<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${G(e)})</span>`;
}
function ce(e) {
	let t = o(`#buff-outer input[data-name="${e}"]`);
	return t ? `<span class="quickbuffActivate" data-buffid="${t.value}">Activate</span>` : "<span class=\"fshRed;\">Off</span>";
}
function le(e, t) {
	let n = e[t] ?? 0;
	return n ? K(n) : ce(t);
}
function q(e, t, n) {
	f(le(e, t), n);
}
function ue(e, t) {
	return e[t.name] = t.duration, e;
}
function de(t) {
	if (!t?._skills) return;
	let n = t._skills.reduce(ue, {});
	q(n, "Guild Buffer", e("fshGB")), q(n, "Buff Master", e("fshBM")), q(n, "Extend", e("fshExt")), q(n, "Reinforce", e("fshRI"));
}
//#endregion
//#region src/modules/quickbuff/populateEnhancements.js
var fe = (e) => (t) => t.name === e;
function pe(e, t) {
	return e.find(fe(t))?.value ?? 0;
}
function J(e, t, n) {
	let r = pe(e, t), i = "fshLime";
	r < 100 && (i = "fshRed"), f(`<span class="${i}">${r}%</span>`, n);
}
function me(t) {
	if (!t?._enhancements) return;
	let n = t._enhancements;
	J(n, "Sustain", e("fshSus")), J(n, "Fury Caster", e("fshFur"));
}
//#endregion
//#region src/modules/quickbuff/getSustain.js
function he(e) {
	me(e), de(e);
}
//#endregion
//#region src/modules/quickbuff/passThruBuffs.js
function ge(t) {
	let n = e(`skill-${t}`);
	n && (n.checked = !0);
}
function _e(e) {
	e.split(";").forEach(ge);
}
function ve() {
	let e = c("blist");
	e && _e(e);
}
//#endregion
//#region src/modules/quickbuff/passThruPlayers.js
var Y = 0;
function X() {
	Y.length ? (window.addPlayers([Y.shift()]), setTimeout(X, 200)) : setTimeout(W, 200);
}
function ye() {
	let e = c("players");
	e && (Y = _(e), X());
}
//#endregion
//#region src/modules/quickbuff/quickActivate.js
async function be(e) {
	let t = e.target;
	t.className === "quickbuffActivate" && (d("quickbuff", "quickActivate"), f("", t), t.className = "fshSpinner fshSpinner12", re(await ne([n()], [t.dataset.buffid])) && (t.className = "fshLime", f("On", t)));
}
//#endregion
//#region src/modules/quickbuff/quickbuffSort.js
var Z = [];
function xe(e) {
	let t = m(`#${e} > p`);
	t.sort((e, t) => e.children[0].dataset.name > t.children[0].dataset.name ? 1 : -1);
	let n = o(`#${e}`);
	for (let e of t) n.appendChild(e);
}
function Q(e) {
	let t = o(`#block${e}`);
	for (let n of Z[e]) t.appendChild(n);
}
function $(e) {
	for (let t = 1; t <= 3; t++) e ? xe(`block${t}`) : Q(t);
}
function Se(e) {
	d("quickbuff", "sortBuffs"), a(I, e.target.checked), $(e.target.checked);
}
function Ce() {
	for (let e = 1; e <= 3; e++) Z[e] = ee(`#${`block${e}`} > p`);
}
function we() {
	Ce(), x(e("check-all"), F);
	let t = o(".quickbuffSortCheckbox"), n = i(I);
	t.checked = n, n && $(n), s(t, "change", Se);
}
//#endregion
//#region src/modules/quickbuff/quickBuff.js
function Te() {
	p(e("helperQBheader"), be), p(e("players"), M);
}
function Ee() {
	r("playerName", n());
}
async function De() {
	if (te()) return;
	let t = e("quickbuff");
	if (!t) return;
	let r = C(n());
	x(t.children[0], N), S([
		V,
		ve,
		ye,
		Te,
		W,
		we,
		Ee
	]), he(await r);
}
//#endregion
export { De as default };

//# sourceMappingURL=quickBuff-IVm4sFHa.js.map