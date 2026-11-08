import { n as e } from "./rolldown-runtime-QGRDbDUS.js";
import { t } from "./colouredDots-DU9QBFC6.js";
import { t as n } from "./executeAll-C4zl3Iix.js";
import { t as r } from "./interceptSubmit-QT2t7a5u.js";
import { t as i } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as a } from "./runDefault-DITet-we.js";
import { t as o } from "./task-C5UKL2RH.js";
import { t as s } from "./getValue-vrUqpo0a.js";
import { n as c } from "./isUndefined-CH45qJXY.js";
import { t as l } from "./playerName-DbmV53SI.js";
import { t as u } from "./getPlayerName-4cwBFEhT.js";
import { t as d } from "./doStatTotal-BJ2H-Y2H.js";
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
	(e || t) && (await import("./debuff-Bz27l8Ao.js")).default(e, t);
}
function D() {
	s("countAllyEnemy") && a(import("./profileAllyEnemy-DVviYCxF.js"));
}
function O() {
	s("enableQuickDrink") && a(import("./fastWear-B7uAWRCr.js"));
}
function k() {
	s("componentWidgets") && a(import("./components-B8fhHfw-.js"));
}
function A() {
	s("quickWearLink") && a(import("./quickWearLink-B7eiq2W6.js"));
}
function j() {
	s("selectAllLink") && a(import("./selectAllLink-DKBgOiFY.js"));
}
function M() {
	s("nekidButton") && a(import("./nekidBtn-DMNkLGqq.js"));
}
function N() {
	s("ajaxifyProfileSections") && a(import("./ajaxifyProfileSections-hzB9oR1G.js"));
}
function P() {
	b() && n([
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
	s("showGuildRelationship") && a(import("./profileInjectGuildRel-ftnTXcMJ.js"));
}
function L() {
	s("showQuickButtons") && a(import("./profileInjectQuickButton-D5eHkLhP.js"));
}
function R() {
	s("injectBuffGuide") && a(import("./updateBuffs-CuC1jMGP.js"));
}
function z() {
	s("statisticsWrap") && a(import("./updateStatistics-Bqd2hOg0.js"));
}
function B() {
	s("highlightPvpProtection") && a(import("./highlightPvpProtection-BaJxjUzF.js"));
}
function V() {
	C() && a(import("./bio-Cae3Qocy.js"));
}
function H() {
	s("enableBioCompressor") && a(import("./compressBio-GA9TlvaL.js").then((e) => e.n));
}
function U() {
	s("showBuffLevel") && a(import("./buffLevelDisplay-DzLL7zsp.js"));
}
function W() {
	n([
		P,
		I,
		L,
		R,
		z,
		B,
		V,
		H,
		d,
		U
	]), o(3, t);
}
function G() {
	i() || (W(), r());
}
export { G as default, b as n, F as t };

//# sourceMappingURL=profile-B6aWhZZf.js.map