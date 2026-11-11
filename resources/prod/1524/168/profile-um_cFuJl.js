import { n as e } from "./rolldown-runtime-QGRDbDUS.js";
import { t } from "./colouredDots-CTs3Sti9.js";
import { t as n } from "./executeAll-C4zl3Iix.js";
import { t as r } from "./interceptSubmit-QT2t7a5u.js";
import { t as i } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as a } from "./runDefault-DITet-we.js";
import { t as o } from "./task-CUnrVZDS.js";
import { t as s } from "./getValue-DMlY7SSn.js";
import { n as c } from "./isUndefined-CH45qJXY.js";
import { t as l } from "./playerName-DbmV53SI.js";
import { t as u } from "./getPlayerName-4cwBFEhT.js";
import { t as d } from "./doStatTotal-BcpRJ5gQ.js";
import { t as f } from "./asInt-CjL2FAMf.js";
import { t as p } from "./getElementById-C08-3H-C.js";
import { t as m } from "./getText-BqjgTHLv.js";
import { H as h, U as g, v as _ } from "./constants-CenxlFMY.js";
import { t as v } from "./setValue-D-C74rTg.js";
// src/modules/profile/getIsSelf.js
var y = null;
function b() {
	return c(y) && (y = u() === l()), y;
}
// src/modules/profile/bio/shouldRender.js
function x(e) {
	return e && s("renderSelfBio");
}
function S(e) {
	return !e && s("renderOtherBios");
}
function C() {
	let e = b();
	return x(e) || S(e);
}
// src/modules/profile/ifSelf/storeVL.js
var w = (e) => f(h) === e;
function T() {
	let e = Number(m(p(g)));
	w(e) ? v(_, "") : v(_, e);
}
// src/modules/profile/ifSelf/ifSelf.js
async function E() {
	let e = s("fastDebuff"), t = s("disableDeactivatePrompts");
	(e || t) && (await import("./debuff-QQ2WmYD_.js")).default(e, t);
}
function D() {
	s("countAllyEnemy") && a(import("./profileAllyEnemy-B78YfFC6.js"));
}
function O() {
	s("enableQuickDrink") && a(import("./fastWear-gwqNxf_h.js"));
}
function k() {
	s("componentWidgets") && a(import("./components-CsU0REFv.js"));
}
function A() {
	s("quickWearLink") && a(import("./quickWearLink-D-7APl1V.js"));
}
function j() {
	s("selectAllLink") && a(import("./selectAllLink-DxV3sKqp.js"));
}
function M() {
	s("nekidButton") && a(import("./nekidBtn-D2HusDpy.js"));
}
function N() {
	b() && n([
		E,
		D,
		O,
		k,
		A,
		j,
		T,
		M
	]);
}
// src/modules/profile/profile.js
var P = /* @__PURE__ */ e({ default: () => W });
function F() {
	s("showGuildRelationship") && a(import("./profileInjectGuildRel-CAq864O4.js"));
}
function I() {
	s("showQuickButtons") && a(import("./profileInjectQuickButton-LOyiQYqg.js"));
}
function L() {
	s("injectBuffGuide") && a(import("./updateBuffs-CuC1jMGP.js"));
}
function R() {
	s("statisticsWrap") && a(import("./updateStatistics-Bqd2hOg0.js"));
}
function z() {
	s("highlightPvpProtection") && a(import("./highlightPvpProtection-BaJxjUzF.js"));
}
function B() {
	C() && a(import("./bio-BBmOcLmo.js"));
}
function V() {
	s("enableBioCompressor") && a(import("./compressBio-sTiFGOCQ.js").then((e) => e.n));
}
function H() {
	s("showBuffLevel") && a(import("./buffLevelDisplay-DzLL7zsp.js"));
}
function U() {
	n([
		N,
		F,
		I,
		L,
		R,
		z,
		B,
		V,
		d,
		H
	]), o(3, t);
}
function W() {
	i() || (U(), r());
}
export { W as default, b as n, P as t };

//# sourceMappingURL=profile-um_cFuJl.js.map