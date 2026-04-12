import { t as e } from "./regExpFirstCapture-Bi32xMqS.js";
import { s as t } from "./now-CA_NVGr7.js";
import { n, t as r } from "./isUndefined-Dfbc1KRP.js";
import { St as i, it as a } from "./constants-CIKidKvt.js";
import { t as o } from "./getValue-j5JjE6f3.js";
import { t as s } from "./getElementsByTagName-CkoUUI_g.js";
import { t as c } from "./getTextTrim-hYBF-bdh.js";
import { t as l } from "./layout-6CPY-bfq.js";
import { t as u } from "./sendEvent-DFQy5lFi.js";
import { t as d } from "./currentGuildId-D9JtVH2U.js";
import { t as f } from "./onclick-8ZwMJyqI.js";
import { t as p } from "./querySelectorArray-Bdj4peIm.js";
import { t as m } from "./jQueryPresent-BeJtq5OB.js";
import { t as h } from "./functionPasses-sNk2duHs.js";
import { t as g } from "./createSpan-DCxGsyWX.js";
import { t as _ } from "./insertHtmlBeforeEnd-D5-rjWCh.js";
import { t as v } from "./all-Csir9X7x.js";
import { t as y } from "./hideQTip-C_38AHJv.js";
import { t as b } from "./insertElementAfterBegin-BtRv1I55.js";
import { t as x } from "./createInput-dXzC1oHv.js";
import { t as S } from "./closestTable-B_Km1mKH.js";
import { i as C, n as w } from "./levelHighlight-D78MsDRp.js";
import { t as T } from "./onlineDot-D0WTzhgS.js";
import { t as E } from "./getProfile-D_2Tpx3G.js";
//#region src/modules/topRated/decoratePlayer.js
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
//#endregion
//#region src/modules/topRated/findOnlinePlayers.js
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
	await v(p(i, l()).map(F).map(L));
}
async function z(e) {
	u("toprated", "FindOnlinePlayers");
	let t = I(e.target);
	await R(), t.remove();
}
//#endregion
//#region src/modules/topRated/toprated.js
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
//#endregion
export { U as default };

//# sourceMappingURL=toprated-BMiposGg.js.map