import { r as e } from "./sendException-BQ7Cj-s_.js";
import { t } from "./getElementById-C08-3H-C.js";
import { t as n } from "./getText-BqjgTHLv.js";
import { t as r } from "./playerName-DbmV53SI.js";
import { n as i } from "./isUndefined-CH45qJXY.js";
import { H as a, U as o, v as s } from "./constants-CenxlFMY.js";
import { t as c } from "./getValue-sxwJaOE3.js";
import { t as l } from "./setValue-B2O8DHLF.js";
import { t as u } from "./task-97dxbWda.js";
import { t as d } from "./runDefault-DITet-we.js";
import { t as f } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as p } from "./asInt-CjL2FAMf.js";
import { t as m } from "./interceptSubmit-vIdFdaaM.js";
import { t as h } from "./doStatTotal-8M0EYmHp.js";
import { t as g } from "./colouredDots-CgelF9MJ.js";
import { t as _ } from "./executeAll-C4zl3Iix.js";
import { t as v } from "./getPlayerName-CJ5mkGKc.js";
// src/modules/profile/getIsSelf.js
var y = null;
function b() {
	return i(y) && (y = v() === r()), y;
}
// src/modules/profile/bio/shouldRender.js
function x(e) {
	return e && c("renderSelfBio");
}
function S(e) {
	return !e && c("renderOtherBios");
}
function C() {
	let e = b();
	return x(e) || S(e);
}
// src/modules/profile/ifSelf/storeVL.js
var w = (e) => p(a) === e;
function T() {
	let e = Number(n(t(o)));
	w(e) ? l(s, "") : l(s, e);
}
// src/modules/profile/ifSelf/ifSelf.js
async function E() {
	let e = c("fastDebuff"), t = c("disableDeactivatePrompts");
	(e || t) && (await import("./debuff-gmaUKNsh.js")).default(e, t);
}
function D() {
	c("countAllyEnemy") && d(import("./profileAllyEnemy-sLcHVYtv.js"));
}
function O() {
	c("enableQuickDrink") && d(import("./fastWear-mgjy49bG.js"));
}
function k() {
	c("componentWidgets") && d(import("./components-BNG7g3PC.js"));
}
function A() {
	c("quickWearLink") && d(import("./quickWearLink-Dy-JP38B.js"));
}
function j() {
	c("selectAllLink") && d(import("./selectAllLink-Dh1gUmB6.js"));
}
function M() {
	c("nekidButton") && d(import("./nekidBtn-DDs-asDR.js"));
}
function N() {
	c("ajaxifyProfileSections") && d(import("./ajaxifyProfileSections-eib4syfF.js"));
}
function P() {
	b() && _([
		E,
		D,
		O,
		k,
		A,
		j,
		T,
		M,
		N
	]);
}
// src/modules/profile/profile.js
var F = /* @__PURE__ */ e({ default: () => G });
function I() {
	c("showGuildRelationship") && d(import("./profileInjectGuildRel-vH9qNGEO.js"));
}
function L() {
	c("showQuickButtons") && d(import("./profileInjectQuickButton-Bf3ywg13.js"));
}
function R() {
	c("injectBuffGuide") && d(import("./updateBuffs-DU4fEJvB.js"));
}
function z() {
	c("statisticsWrap") && d(import("./updateStatistics-D-sE1Gji.js"));
}
function B() {
	c("highlightPvpProtection") && d(import("./highlightPvpProtection-DgRNGu7J.js"));
}
function V() {
	C() && d(import("./bio-DquZ6ZzA.js"));
}
function H() {
	c("enableBioCompressor") && d(import("./compressBio-DrfBdou6.js").then((e) => e.n));
}
function U() {
	c("showBuffLevel") && d(import("./buffLevelDisplay-BO0rcInq.js"));
}
function W() {
	_([
		P,
		I,
		L,
		R,
		z,
		B,
		V,
		H,
		h,
		U
	]), u(3, g);
}
function G() {
	f() || (W(), m());
}
export { G as default, b as n, F as t };

//# sourceMappingURL=profile-BhN3duoh.js.map