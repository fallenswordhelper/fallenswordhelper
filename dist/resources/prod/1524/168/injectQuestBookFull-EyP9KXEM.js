import { t as e } from "./getElementsByTagName-B8gMqefB.js";
import { t } from "./interceptSubmit-QT2t7a5u.js";
import { t as n } from "./partial-Bo20zBni.js";
import { K as r } from "./constants-CenxlFMY.js";
import { t as i } from "./layout-B2Q1UoM2.js";
import { t as a } from "./getValue-DMlY7SSn.js";
import { t as o } from "./setValue-D-C74rTg.js";
import { t as s } from "./dataRows-De29j_4W.js";
import { t as c } from "./getTextTrim-CvXe85fp.js";
import { t as l } from "./hideElement-D2Je4J0O.js";
import { t as u } from "./onclick-nv-Fl1th.js";
import { t as d } from "./replaceDoubleSpace-CeATU0oi.js";
import { t as f } from "./setInnerHtml-f0MFRJnQ.js";
import { t as p } from "./getCustomUrlParameter-OUJUdwqs.js";
import { t as m } from "./shouldBeArray-DntyGKXO.js";
import { n as h, t as g } from "./questEvent-ChTyL9Xu.js";
// src/modules/questbook/injectQuestRow.js
function _() {
	return a("hideQuests") ? m("hideQuestNames") : [];
}
function v(e, t, n) {
	if (e.includes(t)) {
		let e = n;
		l(e);
		for (let t = 0; t < 3; t++) e = e.nextElementSibling, l(e);
	}
}
function y(e, t) {
	let n = d(c(t.cells[0]));
	v(e, n, t);
	let r = p(t.cells[0].children[0].href, "quest_id");
	f(h(r, n), t.cells[4]);
}
function b(e) {
	let t = _();
	s(e, 5, 0).forEach(n(y, t)), u(e, g("Quest Book"));
}
// src/modules/questbook/injectQuestBookFull.js
var x = 0, S = 0, C = 0, w = 0, T = 0, E = 0, D = [
	0,
	3,
	0,
	1,
	2
], O = [
	"lastNormalActiveQuestPage",
	"lastNormalCompletedQuestPage",
	"lastNormalNotStartedQuestPage",
	"lastSeasonalActiveQuestPage",
	"lastSeasonalCompletedQuestPage",
	"lastSeasonalNotStartedQuestPage"
];
function k(e, t, n, r) {
	return e[r].children[0].getAttribute("color") === "#FF0000" ? t + n : t;
}
function A() {
	let t = e("a", i());
	[x, S, C, w, T] = t, E = D.reduce(n(k, t), 0);
}
function j() {
	let e = window.location.search;
	o("lastActiveQuestPage", e), o(O[E], e);
}
function M(e) {
	return a(e);
}
function N() {
	return O.map(M);
}
function P(e) {
	return [
		e[3],
		e[4],
		e[5],
		e[0],
		e[1],
		e[2]
	];
}
function F(e, t) {
	t.length > 0 && e.setAttribute("href", t);
}
function I(e, t) {
	F(C, e[t]), F(w, e[t + 1]), F(T, e[t + 2]);
}
function L() {
	let e = N(), t = P(e);
	E < 3 ? (F(S, t[E]), I(e, 0)) : (F(x, t[E]), I(e, 3));
}
function R() {
	a("storeLastQuestPage") && (A(), j(), L());
}
function z() {
	t(), R();
	let n = e(r, i())[5];
	n && b(n);
}
export { z as default };

//# sourceMappingURL=injectQuestBookFull-EyP9KXEM.js.map