import { t as e } from "./getElementById-DgC-_E5u.js";
import { t } from "./getText-BybFkJV6.js";
import { H as n, U as r, v as i } from "./constants-CIKidKvt.js";
import { t as a } from "./getValue-j5JjE6f3.js";
import { t as o } from "./setValue-31jE_mRr.js";
import { t as s } from "./task-DenRcgws.js";
import { t as c } from "./runDefault-BQU_bBOR.js";
import { t as l } from "./jQueryNotPresent-UT8-ZycH.js";
import { t as u } from "./asInt-Cw2-nS30.js";
import { t as d } from "./interceptSubmit-CAvRTZlR.js";
import { t as f } from "./doStatTotal-Da2svjj7.js";
import { t as p } from "./colouredDots-DAgIOjN1.js";
import { t as m } from "./executeAll-BHmlL1bS.js";
import { t as h } from "./getIsSelf-DI8DXIi8.js";
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
	(e || t) && (await import("./debuff-DcjL1-BA.js")).default(e, t);
}
function S() {
	a("countAllyEnemy") && c(import("./profileAllyEnemy-CvVgyYvV.js"));
}
function C() {
	a("enableQuickDrink") && c(import("./fastWear-BLmDcqQY.js"));
}
function w() {
	a("componentWidgets") && c(import("./components-CmgkAr9S.js"));
}
function T() {
	a("quickWearLink") && c(import("./quickWearLink-DK07hE1c.js"));
}
function E() {
	a("selectAllLink") && c(import("./selectAllLink-D1hU_Hf_.js"));
}
function D() {
	a("nekidButton") && c(import("./nekidBtn-C-3w8DO_.js"));
}
function O() {
	a("ajaxifyProfileSections") && c(import("./ajaxifyProfileSections-CA4lMrAt.js"));
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
	a("showGuildRelationship") && c(import("./profileInjectGuildRel-DFNVAAa7.js"));
}
function j() {
	a("showQuickButtons") && c(import("./profileInjectQuickButton-DOFwZCRX.js"));
}
function M() {
	a("injectBuffGuide") && c(import("./updateBuffs-pZyZLAu4.js"));
}
function N() {
	a("statisticsWrap") && c(import("./updateStatistics-HifgKACy.js"));
}
function P() {
	a("highlightPvpProtection") && c(import("./highlightPvpProtection-Qz2nmAHx.js"));
}
function F() {
	v() && c(import("./bio-Uazi8xea.js"));
}
function I() {
	a("enableBioCompressor") && c(import("./compressBio-4iDizlkN.js").then((e) => e.n));
}
function L() {
	a("showBuffLevel") && c(import("./buffLevelDisplay-CBRD9Xgh.js"));
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

//# sourceMappingURL=profile-uQyF_i5y.js.map