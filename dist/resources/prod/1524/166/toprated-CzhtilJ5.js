import { t as e } from "./regExpFirstCapture-D_QeHFEY.js";
import { s as t } from "./now-B3pCBQja.js";
import { n, t as r } from "./isUndefined-CH45qJXY.js";
import { St as i, it as a } from "./constants-CenxlFMY.js";
import { t as o } from "./getValue-sxwJaOE3.js";
import { t as s } from "./getElementsByTagName-B8gMqefB.js";
import { t as c } from "./getTextTrim-CvXe85fp.js";
import { t as l } from "./layout-B2Q1UoM2.js";
import { t as u } from "./sendEvent-yx1DwCDA.js";
import { t as d } from "./currentGuildId-WKn2jVcy.js";
import { t as f } from "./onclick-nv-Fl1th.js";
import { t as p } from "./querySelectorArray-C70U47NF.js";
import { t as m } from "./jQueryPresent-DUWNBls9.js";
import { t as h } from "./functionPasses-Cx9ou2fk.js";
import { t as g } from "./createSpan-9KJdvIXK.js";
import { t as _ } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as v } from "./all-D5SlTl7_.js";
import { t as y } from "./hideQTip-BN4jwVBE.js";
import { t as b } from "./insertElementAfterBegin-igbTIqzp.js";
import { t as x } from "./createInput-DPgk9mYC.js";
import { t as S } from "./closestTable-B73T3rIi.js";
import { i as C, n as w } from "./levelHighlight-B8gfPyrY.js";
import { t as T } from "./onlineDot-B-a-eWFn.js";
import { t as E } from "./getProfile-bZJ0QjcN.js";
// src/modules/topRated/decoratePlayer.js
var D = null, O = 0;
function k() {
	return n(D) && (D = o("highlightPlayersNearMyLvl")), D;
}
function A() {
	return O = d(), O;
}
var j = [
	() => k(),
	(e, t) => r(t) || t !== (O || A()),
	(e) => e.last_login >= t(),
	(e) => e.virtual_level >= w(),
	(e) => e.virtual_level <= C()
];
function M(t) {
	if (t.rows[0].cells[0].children[0]) return Number(e(a, t.rows[0].cells[0].children[0].href));
}
function N(e, t) {
	return j.every((n) => n(t, e));
}
function P(e, t) {
	let n = M(e);
	_(e.rows[0], `<td>${T({ last_login: t.last_login })}</td>`), N(n, t) && e.parentNode.parentNode.classList.add("lvlHighlight");
}
// src/modules/topRated/findOnlinePlayers.js
var F = (e) => [S(e), c(e)];
function I(e) {
	y(e);
	let t = g({
		className: "fshCurveContainer fshTopListSpinner",
		innerHTML: "<div class=\"fshCurveEle fshCurveLbl fshOldSpinner\"></div>"
	});
	return e.parentNode.replaceChild(t, e), t;
}
async function L([e, t]) {
	let n = await E(t);
	n && P(e, n);
}
async function R() {
	let e = p(i, l()).map(F);
	await v(e.map(L));
}
async function z(e) {
	u("toprated", "FindOnlinePlayers");
	let t = I(e.target);
	await R(), t.remove();
}
// src/modules/topRated/toprated.js
function B() {
	let e = s("td", l())[0];
	e.children[0].className = "fshTopListWrap";
	let t = x({
		id: "fshFindOnlinePlayers",
		className: "custombutton tip-static",
		type: "button",
		value: "Find Online Players",
		dataset: { tipped: "Fetch the online status of the top 250 players (warning ... takes a few seconds)." }
	});
	b(e, t), f(t, z);
}
var V = [
	() => m(),
	() => l()?.children?.[0]?.rows?.length > 2,
	() => c(l().children[0].rows[1]).startsWith("Last Updated")
];
function H() {
	return V.every(h);
}
function U() {
	H() && B();
}
export { U as default };

//# sourceMappingURL=toprated-CzhtilJ5.js.map