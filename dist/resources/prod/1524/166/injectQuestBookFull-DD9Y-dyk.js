import { K as e } from "./constants-CenxlFMY.js";
import { t } from "./getValue-sxwJaOE3.js";
import { t as n } from "./setValue-B2O8DHLF.js";
import { t as r } from "./getCustomUrlParameter-C5vi2hsN.js";
import { t as i } from "./getElementsByTagName-B8gMqefB.js";
import { t as a } from "./getTextTrim-CvXe85fp.js";
import { t as o } from "./partial-Bo20zBni.js";
import { t as s } from "./layout-B2Q1UoM2.js";
import { t as c } from "./setInnerHtml-f0MFRJnQ.js";
import { t as l } from "./onclick-nv-Fl1th.js";
import { t as u } from "./hideElement-D2Je4J0O.js";
import { t as d } from "./shouldBeArray-BEbKebUg.js";
import { t as f } from "./dataRows-De29j_4W.js";
import { t as p } from "./interceptSubmit-vIdFdaaM.js";
import { t as m } from "./replaceDoubleSpace-CeATU0oi.js";
import { n as h, t as g } from "./questEvent-DCyjceDT.js";
// src/modules/questbook/injectQuestRow.js
function _() {
	return t("hideQuests") ? d("hideQuestNames") : [];
}
function v(e, t, n) {
	if (e.includes(t)) {
		let e = n;
		u(e);
		for (let t = 0; t < 3; t++) e = e.nextElementSibling, u(e);
	}
}
function y(e, t) {
	let n = m(a(t.cells[0]));
	v(e, n, t);
	let i = r(t.cells[0].children[0].href, "quest_id");
	c(h(i, n), t.cells[4]);
}
function b(e) {
	let t = _();
	f(e, 5, 0).forEach(o(y, t)), l(e, g("Quest Book"));
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
	let e = i("a", s());
	[x, S, C, w, T] = e, E = D.reduce(o(k, e), 0);
}
function j() {
	let e = window.location.search;
	n("lastActiveQuestPage", e), n(O[E], e);
}
function M(e) {
	return t(e);
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
	t("storeLastQuestPage") && (A(), j(), L());
}
function z() {
	p(), R();
	let t = i(e, s())[5];
	t && b(t);
}
export { z as default };

//# sourceMappingURL=injectQuestBookFull-DD9Y-dyk.js.map