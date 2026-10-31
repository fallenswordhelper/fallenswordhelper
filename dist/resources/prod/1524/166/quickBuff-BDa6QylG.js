import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./getText-BqjgTHLv.js";
import { t as n } from "./playerName-DbmV53SI.js";
import { t as r } from "./devStdOut-D2qFWpUj.js";
import { t as i } from "./getValue-sxwJaOE3.js";
import { t as a } from "./setValue-B2O8DHLF.js";
import { t as o } from "./querySelector-C6ReNysW.js";
import { t as s } from "./on-DfyX3AS4.js";
import { t as c } from "./getUrlParameter-DQUJPuXf.js";
import { t as l } from "./getElementsByTagName-B8gMqefB.js";
import { t as u } from "./partial-Bo20zBni.js";
import { t as d } from "./sendEvent-yx1DwCDA.js";
import { t as f } from "./setInnerHtml-f0MFRJnQ.js";
import { t as p } from "./onclick-nv-Fl1th.js";
import { t as ee } from "./querySelectorAll-D_a7rcw0.js";
import { t as m } from "./querySelectorArray-C70U47NF.js";
import { t as te } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as h } from "./insertElementAfter-Bc9YFj76.js";
import { t as g } from "./createSpan-9KJdvIXK.js";
import { t as _ } from "./csvSplit-C5BboO-R.js";
import { t as v } from "./outputFormat-aHxO-pG1.js";
import { t as y } from "./formatLastActivity-CqfkIE3C.js";
import { t as b } from "./setTipped-B47iaPSf.js";
import { t as x } from "./insertHtmlAfterEnd-DMHOI0WH.js";
import { t as S } from "./executeAll-C4zl3Iix.js";
import { t as C } from "./getProfile-bZJ0QjcN.js";
import { n as ne, t as re } from "./quickbuffSuccess-CnXp8fbE.js";
// src/modules/quickbuff/addStatsQuickBuff.js
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
// src/modules/quickbuff/parseBuffLevel.js
function w(e) {
	return Number(t(e).replace(/[[\]]/g, ""));
}
// src/modules/quickbuff/addBuffLevels.js
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
	let r = e.nextElementSibling.children[0].children[0], i = w(r), a = oe(e, n), o = se(i, t);
	f(` <span class="${o}">[${t}]</span>`, a);
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
// src/modules/quickbuff/assets.js
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
// src/modules/quickbuff/doLabels.js
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
// src/modules/quickbuff/firstPlayerStats.js
function H(e, t) {
	return !e && t;
}
function U(t) {
	let n = l("h1", e("players"))[0];
	H(n, t) ? setTimeout(U, 100, t - 1) : n && j(n);
}
function W() {
	e("targetPlayers").value && U(9);
}
// src/modules/quickbuff/populateBuffs.js
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
// src/modules/quickbuff/populateEnhancements.js
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
// src/modules/quickbuff/getSustain.js
function he(e) {
	me(e), de(e);
}
// src/modules/quickbuff/passThruBuffs.js
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
// src/modules/quickbuff/passThruPlayers.js
var Y = 0;
function X() {
	Y.length ? (window.addPlayers([Y.shift()]), setTimeout(X, 200)) : setTimeout(W, 200);
}
function ye() {
	let e = c("players");
	e && (Y = _(e), X());
}
// src/modules/quickbuff/quickActivate.js
async function be(e) {
	let t = e.target;
	if (t.className !== "quickbuffActivate") return;
	d("quickbuff", "quickActivate"), f("", t), t.className = "fshSpinner fshSpinner12";
	let r = await ne([n()], [t.dataset.buffid]);
	re(r) && (t.className = "fshLime", f("On", t));
}
// src/modules/quickbuff/quickbuffSort.js
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
	for (let e = 1; e <= 3; e++) {
		let t = `block${e}`;
		Z[e] = ee(`#${t} > p`);
	}
}
function we() {
	Ce();
	let t = e("check-all");
	x(t, F);
	let n = o(".quickbuffSortCheckbox"), r = i(I);
	n.checked = r, r && $(r), s(n, "change", Se);
}
// src/modules/quickbuff/quickBuff.js
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
export { De as default };

//# sourceMappingURL=quickBuff-BDa6QylG.js.map