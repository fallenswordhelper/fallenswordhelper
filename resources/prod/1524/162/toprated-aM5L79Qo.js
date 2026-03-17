import { t as e } from "./regExpFirstCapture-CdTmAP5x.js";
import "./posthog-C2Vh_0Hn.js";
import { s as t } from "./now-DpYjGucP.js";
import { n, t as r } from "./isUndefined-B3VLlmfL.js";
import "./system-De1jBRGa.js";
import { St as i, it as a } from "./constants-C54mky4_.js";
import { t as o } from "./getValue-CCThXEzy.js";
import { t as s } from "./getElementsByTagName-BUN1mNPF.js";
import { t as c } from "./getTextTrim-Wj82yPPN.js";
import { t as l } from "./layout-Bapa39KM.js";
import { t as u } from "./sendEvent-bwvhd4A-.js";
import { t as d } from "./currentGuildId-Br10wzx3.js";
import "./indexAjax-BXHvJ2Y7.js";
import { t as f } from "./onclick-9iRduoOH.js";
import { t as p } from "./querySelectorArray-BZbNvND7.js";
import { t as m } from "./jQueryPresent-BHusVK29.js";
import "./indexAjaxJson-DuDMsKRC.js";
import "./cmdExport-C_7TLPs-.js";
import "./profile-BWfgrKDA.js";
import { t as h } from "./functionPasses-DqWHvesh.js";
import { t as g } from "./createSpan-DpSRnwEQ.js";
import { t as _ } from "./insertHtmlBeforeEnd-CRJWaYJw.js";
import { t as v } from "./all-Dy4LjBGw.js";
import { t as y } from "./hideQTip-DvP2VIxD.js";
import { t as b } from "./insertElementAfterBegin-D7gF3V2Y.js";
import { t as x } from "./createInput-B2lyiYPw.js";
import { t as S } from "./closestTable-Dfg3mstY.js";
import { i as C, n as w } from "./levelHighlight-D4H4ANZr.js";
import { t as T } from "./onlineDot-CXb1YqvF.js";
import { t as E } from "./getProfile-BdYxaM9M.js";
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

//# sourceMappingURL=toprated-aM5L79Qo.js.map