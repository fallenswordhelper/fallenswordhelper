import "./sendException-s1csWDQs.js";
import { t as e } from "./getElementById-PlRCtyBA.js";
import { t } from "./getText-rCJDurvG.js";
import "./system-De1jBRGa.js";
import { H as n, U as r, v as i } from "./constants-C54mky4_.js";
import { t as a } from "./getValue-CCThXEzy.js";
import { t as o } from "./setValue-Cb0PYC7t.js";
import { t as s } from "./task-jKbgFyYT.js";
import { t as c } from "./runDefault-D8heasmq.js";
import "./lastActivity-CUAo9jGH.js";
import { t as l } from "./jQueryNotPresent-oTtW_9Ua.js";
import { t as u } from "./asInt-BWWrvyCB.js";
import "./formToUrl-BROd6YBE.js";
import { t as d } from "./interceptSubmit-0losboil.js";
import { t as f } from "./doStatTotal-ASjvWJGO.js";
import "./batch-D9tKs5xx.js";
import { t as p } from "./colouredDots-xudUjxga.js";
import { t as m } from "./executeAll-DpcDw_ug.js";
import { t as h } from "./getIsSelf-9nFrsqqO.js";
//#region src/modules/profile/bio/shouldRender.js
function g(e) {
	return e && a("renderSelfBio");
}
function _(e) {
	return !e && a("renderOtherBios");
}
function v() {
	let e = h();
	return g(e) || _(e);
}
//#endregion
//#region src/modules/profile/ifSelf/storeVL.js
var y = (e) => u(n) === e;
function b() {
	let n = Number(t(e(r)));
	y(n) ? o(i, "") : o(i, n);
}
//#endregion
//#region src/modules/profile/ifSelf/ifSelf.js
async function x() {
	let e = a("fastDebuff"), t = a("disableDeactivatePrompts");
	(e || t) && (await import("./debuff-ChCA4-NS.js")).default(e, t);
}
function S() {
	a("countAllyEnemy") && c(import("./profileAllyEnemy-B_ecNZIy.js"));
}
function C() {
	a("enableQuickDrink") && c(import("./fastWear-DwYuItuT.js"));
}
function w() {
	a("componentWidgets") && c(import("./components-DFLi0zZI.js"));
}
function T() {
	a("quickWearLink") && c(import("./quickWearLink-Blf2ckDT.js"));
}
function E() {
	a("selectAllLink") && c(import("./selectAllLink-BgYruP9h.js"));
}
function D() {
	a("nekidButton") && c(import("./nekidBtn-DShsZAVm.js"));
}
function O() {
	a("ajaxifyProfileSections") && c(import("./ajaxifyProfileSections-C3yPtyRJ.js"));
}
function k() {
	h() && m([
		x,
		S,
		C,
		w,
		T,
		E,
		b,
		D,
		O
	]);
}
//#endregion
//#region src/modules/profile/profile.js
function A() {
	a("showGuildRelationship") && c(import("./profileInjectGuildRel-CLNM4EG-.js"));
}
function j() {
	a("showQuickButtons") && c(import("./profileInjectQuickButton-C0K5Y1ao.js"));
}
function M() {
	a("injectBuffGuide") && c(import("./updateBuffs-BH35oWKJ.js"));
}
function N() {
	a("statisticsWrap") && c(import("./updateStatistics-JS-_WuuF.js"));
}
function P() {
	a("highlightPvpProtection") && c(import("./highlightPvpProtection-UsAH9mmu.js"));
}
function F() {
	v() && c(import("./bio-DTUqlRdA.js"));
}
function I() {
	a("enableBioCompressor") && c(import("./compressBio-7Fexs66X.js").then((e) => e.n));
}
function L() {
	a("showBuffLevel") && c(import("./buffLevelDisplay-BKu8HM5q.js"));
}
function R() {
	m([
		k,
		A,
		j,
		M,
		N,
		P,
		F,
		I,
		f,
		L
	]), s(3, p);
}
function z() {
	l() || (R(), d());
}
//#endregion
export { z as default };

//# sourceMappingURL=profile-CKHf06vH.js.map