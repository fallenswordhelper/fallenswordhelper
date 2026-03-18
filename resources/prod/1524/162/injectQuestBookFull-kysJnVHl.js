import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import { K as e } from "./constants-C54mky4_.js";
import { t } from "./getValue-CCThXEzy.js";
import { t as n } from "./setValue-Cb0PYC7t.js";
import { t as r } from "./getCustomUrlParameter-CFd8fvHs.js";
import { t as i } from "./getElementsByTagName-BUN1mNPF.js";
import { t as a } from "./getTextTrim-Wj82yPPN.js";
import { t as o } from "./partial-goh6HOls.js";
import { t as s } from "./layout-Bapa39KM.js";
import "./sendEvent-bwvhd4A-.js";
import { t as c } from "./setInnerHtml-ClDKp0Zh.js";
import { t as l } from "./onclick-9iRduoOH.js";
import { t as u } from "./hideElement-DH6fODir.js";
import { t as d } from "./shouldBeArray-DPM-qLb4.js";
import { t as f } from "./dataRows-DiOsmm8A.js";
import "./formToUrl-BROd6YBE.js";
import { t as p } from "./interceptSubmit-0losboil.js";
import { t as m } from "./replaceDoubleSpace-DW7D0zX8.js";
import { n as h, t as g } from "./questEvent-t7v2VPgP.js";
//#region src/modules/questbook/injectQuestRow.js
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
	v(e, n, t), c(h(r(t.cells[0].children[0].href, "quest_id"), n), t.cells[4]);
}
function b(e) {
	let t = _();
	f(e, 5, 0).forEach(o(y, t)), l(e, g("Quest Book"));
}
//#endregion
//#region src/modules/questbook/injectQuestBookFull.js
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
//#endregion
export { z as default };

//# sourceMappingURL=injectQuestBookFull-kysJnVHl.js.map