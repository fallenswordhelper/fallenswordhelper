import { t as e } from "./getProfile-Y9VE6lNb.js";
import { t } from "./executeAll-C4zl3Iix.js";
import { t as n } from "./getElementById-C08-3H-C.js";
import { t as r } from "./insertHtmlAfterEnd-DMHOI0WH.js";
import { t as i } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as a } from "./onclick-nv-Fl1th.js";
import { t as o } from "./playerName-DbmV53SI.js";
import { t as s } from "./devStdOut-D2qFWpUj.js";
import { t as c } from "./sendEvent-Co2_qySS.js";
import { t as l } from "./createSpan-dzM9C32V.js";
import { t as u } from "./csvSplit-C5BboO-R.js";
import { t as d } from "./getText-BqjgTHLv.js";
import { t as f } from "./insertElementAfter-Bc9YFj76.js";
import { t as p } from "./partial-Bo20zBni.js";
import { t as m } from "./querySelectorArray-C70U47NF.js";
import { t as h } from "./setInnerHtml-f0MFRJnQ.js";
import { t as g } from "./getElementsByTagName-B8gMqefB.js";
import { t as _ } from "./querySelector-C6ReNysW.js";
import { t as ee } from "./formatLastActivity-BMiDQkx4.js";
import { t as v } from "./setTipped-B47iaPSf.js";
import { t as y } from "./outputFormat-aHxO-pG1.js";
import { t as b } from "./getUrlParameter-DQUJPuXf.js";
import { n as x, t as S } from "./quickbuffSuccess-BMjqSW6J.js";
import { t as C } from "./on-DfyX3AS4.js";
import { t as te } from "./querySelectorAll-D_a7rcw0.js";
import { t as ne } from "./getValue-vrUqpo0a.js";
import { t as re } from "./setValue-D-C74rTg.js";
// src/modules/quickbuff/addStatsQuickBuff.js
function ie(e) {
	let t = _("span.fshLastActivity", e);
	if (!t) {
		t = l({ className: "fshLastActivity" });
		let n = g("h1", e)[0];
		f(t, n);
	}
	return t;
}
function ae(e) {
	if (!e) return;
	let t = ie(_(`div.player[data-username="${e.username}"]`));
	h(`Last Activity: ${ee(e.last_login)}<br>Stamina: ${e.current_stamina} / ${e.stamina} ( ${Math.floor(e.current_stamina / e.stamina * 100)}% )`, t);
}
// src/modules/quickbuff/parseBuffLevel.js
function w(e) {
	return Number(d(e).replace(/[[\]]/g, ""));
}
// src/modules/quickbuff/addBuffLevels.js
function oe(e, t) {
	if (!t) {
		let t = l({ className: "fshPlayer" });
		return f(t, e.nextElementSibling), t;
	}
	return t;
}
function se(e, t) {
	return e > t ? "fshRed" : "fshGreen";
}
function T(e, t, n) {
	if (!t) {
		h("", n);
		return;
	}
	let r = e.nextElementSibling.children[0].children[0], i = w(r), a = oe(e, n), o = se(i, t);
	h(` <span class="${o}">[${t}]</span>`, a);
}
function E(e, t) {
	return t[0] === e;
}
function D(e, t) {
	let n = t.getAttribute("data-name"), r = e.find(p(E, n));
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
	return u(d(e.parentNode.lastElementChild)).map(k);
}
async function j(t) {
	let n = e(d(t)), r = A(t);
	m("#buff-outer input[name]").forEach(p(O, r)), ae(await n);
}
function M(e) {
	let t = e.target;
	t.tagName === "H1" && (c("quickbuff", "addBuffLevels"), j(t));
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
	v(n.replace("</center>", `<br>Stamina Cost: ${r}$&`), t);
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
function U(e) {
	let t = g("h1", n("players"))[0];
	H(t, e) ? setTimeout(U, 100, e - 1) : t && j(t);
}
function W() {
	n("targetPlayers").value && U(9);
}
// src/modules/quickbuff/populateBuffs.js
function G(e) {
	let t = Math.floor(e / 60), n = e % 60, r = y(t, "m");
	return t > 0 && n > 0 && (r += " "), r += y(n, "s"), r;
}
function K(e) {
	return `<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${G(e)})</span>`;
}
function ce(e) {
	let t = _(`#buff-outer input[data-name="${e}"]`);
	return t ? `<span class="quickbuffActivate" data-buffid="${t.value}">Activate</span>` : "<span class=\"fshRed;\">Off</span>";
}
function le(e, t) {
	let n = e[t] ?? 0;
	return n ? K(n) : ce(t);
}
function q(e, t, n) {
	h(le(e, t), n);
}
function ue(e, t) {
	return e[t.name] = t.duration, e;
}
function de(e) {
	if (!e?._skills) return;
	let t = e._skills.reduce(ue, {});
	q(t, "Guild Buffer", n("fshGB")), q(t, "Buff Master", n("fshBM")), q(t, "Extend", n("fshExt")), q(t, "Reinforce", n("fshRI"));
}
// src/modules/quickbuff/populateEnhancements.js
var fe = (e) => (t) => t.name === e;
function pe(e, t) {
	return e.find(fe(t))?.value ?? 0;
}
function J(e, t, n) {
	let r = pe(e, t), i = "fshLime";
	r < 100 && (i = "fshRed"), h(`<span class="${i}">${r}%</span>`, n);
}
function me(e) {
	if (!e?._enhancements) return;
	let t = e._enhancements;
	J(t, "Sustain", n("fshSus")), J(t, "Fury Caster", n("fshFur"));
}
// src/modules/quickbuff/getSustain.js
function he(e) {
	me(e), de(e);
}
// src/modules/quickbuff/passThruBuffs.js
function ge(e) {
	let t = n(`skill-${e}`);
	t && (t.checked = !0);
}
function _e(e) {
	e.split(";").forEach(ge);
}
function ve() {
	let e = b("blist");
	e && _e(e);
}
// src/modules/quickbuff/passThruPlayers.js
var Y = 0;
function X() {
	Y.length ? (window.addPlayers([Y.shift()]), setTimeout(X, 200)) : setTimeout(W, 200);
}
function ye() {
	let e = b("players");
	e && (Y = u(e), X());
}
// src/modules/quickbuff/quickActivate.js
async function be(e) {
	let t = e.target;
	if (t.className !== "quickbuffActivate") return;
	c("quickbuff", "quickActivate"), h("", t), t.className = "fshSpinner fshSpinner12";
	let n = await x([o()], [t.dataset.buffid]);
	S(n) && (t.className = "fshLime", h("On", t));
}
// src/modules/quickbuff/quickbuffSort.js
var Z = [];
function xe(e) {
	let t = m(`#${e} > p`);
	t.sort((e, t) => e.children[0].dataset.name > t.children[0].dataset.name ? 1 : -1);
	let n = _(`#${e}`);
	for (let e of t) n.appendChild(e);
}
function Q(e) {
	let t = _(`#block${e}`);
	for (let n of Z[e]) t.appendChild(n);
}
function $(e) {
	for (let t = 1; t <= 3; t++) e ? xe(`block${t}`) : Q(t);
}
function Se(e) {
	c("quickbuff", "sortBuffs"), re(I, e.target.checked), $(e.target.checked);
}
function Ce() {
	for (let e = 1; e <= 3; e++) {
		let t = `block${e}`;
		Z[e] = te(`#${t} > p`);
	}
}
function we() {
	Ce();
	let e = n("check-all");
	r(e, F);
	let t = _(".quickbuffSortCheckbox"), i = ne(I);
	t.checked = i, i && $(i), C(t, "change", Se);
}
// src/modules/quickbuff/quickBuff.js
function Te() {
	a(n("helperQBheader"), be), a(n("players"), M);
}
function Ee() {
	s("playerName", o());
}
async function De() {
	if (i()) return;
	let a = n("quickbuff");
	if (!a) return;
	let s = e(o());
	r(a.children[0], N), t([
		V,
		ve,
		ye,
		Te,
		W,
		we,
		Ee
	]), he(await s);
}
export { De as default };

//# sourceMappingURL=quickBuff-TNCoW_Vs.js.map