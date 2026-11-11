import { t as e } from "./createInput-x6h3QT7P.js";
import { t } from "./functionPasses-Cx9ou2fk.js";
import { t as n } from "./getElementsByTagName-B8gMqefB.js";
import { t as r } from "./getTextTrim-CvXe85fp.js";
import { t as i } from "./insertElementAfterBegin-igbTIqzp.js";
import { t as a } from "./jQueryPresent-DUWNBls9.js";
import { t as o } from "./onclick-nv-Fl1th.js";
import { t as s } from "./layout-B2Q1UoM2.js";
import { t as c } from "./getProfile-Y9VE6lNb.js";
import { t as l } from "./sendEvent-DdWrU3DL.js";
import { t as u } from "./all-D5SlTl7_.js";
import { t as d } from "./createSpan-dzM9C32V.js";
import { t as f } from "./closestTable-B73T3rIi.js";
import { t as p } from "./hideQTip-BN4jwVBE.js";
import { t as m } from "./querySelectorArray-C70U47NF.js";
import { St as h, it as g } from "./constants-CenxlFMY.js";
import { t as _ } from "./currentGuildId-Bpd4l1O8.js";
import { t as v } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { n as y, t as b } from "./isUndefined-CH45qJXY.js";
import { i as x, n as S } from "./levelHighlight-Dgy9OXhU.js";
import { t as C } from "./onlineDot-B-a-eWFn.js";
import { t as w } from "./regExpFirstCapture-D_QeHFEY.js";
import { s as T } from "./now-B3pCBQja.js";
import { t as E } from "./getValue-DMlY7SSn.js";
// src/modules/topRated/decoratePlayer.js
var D = null, O = 0;
function k() {
	return y(D) && (D = E("highlightPlayersNearMyLvl")), D;
}
function A() {
	return O = _(), O;
}
var j = [
	() => k(),
	(e, t) => b(t) || t !== (O || A()),
	(e) => e.last_login >= T(),
	(e) => e.virtual_level >= S(),
	(e) => e.virtual_level <= x()
];
function M(e) {
	if (e.rows[0].cells[0].children[0]) return Number(w(g, e.rows[0].cells[0].children[0].href));
}
function N(e, t) {
	return j.every((n) => n(t, e));
}
function P(e, t) {
	let n = M(e);
	v(e.rows[0], `<td>${C({ last_login: t.last_login })}</td>`), N(n, t) && e.parentNode.parentNode.classList.add("lvlHighlight");
}
// src/modules/topRated/findOnlinePlayers.js
var F = (e) => [f(e), r(e)];
function I(e) {
	p(e);
	let t = d({
		className: "fshCurveContainer fshTopListSpinner",
		innerHTML: "<div class=\"fshCurveEle fshCurveLbl fshOldSpinner\"></div>"
	});
	return e.parentNode.replaceChild(t, e), t;
}
async function L([e, t]) {
	let n = await c(t);
	n && P(e, n);
}
async function R() {
	let e = m(h, s()).map(F);
	await u(e.map(L));
}
async function z(e) {
	l("toprated", "FindOnlinePlayers");
	let t = I(e.target);
	await R(), t.remove();
}
// src/modules/topRated/toprated.js
function B() {
	let t = n("td", s())[0];
	t.children[0].className = "fshTopListWrap";
	let r = e({
		id: "fshFindOnlinePlayers",
		className: "custombutton tip-static",
		type: "button",
		value: "Find Online Players",
		dataset: { tipped: "Fetch the online status of the top 250 players (warning ... takes a few seconds)." }
	});
	i(t, r), o(r, z);
}
var V = [
	() => a(),
	() => s()?.children?.[0]?.rows?.length > 2,
	() => r(s().children[0].rows[1]).startsWith("Last Updated")
];
function H() {
	return V.every(t);
}
function U() {
	H() && B();
}
export { U as default };

//# sourceMappingURL=toprated-CAFqKDyI.js.map