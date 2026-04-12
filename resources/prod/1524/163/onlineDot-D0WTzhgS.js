import { r as e } from "./now-CA_NVGr7.js";
import { t } from "./partial-CYzPXpZP.js";
//#region src/modules/common/onlineDot.js
var n = [
	(e, t) => e.day ? t + parseInt(e.day, 10) * 1440 : t,
	(e, t) => e.hour ? t + parseInt(e.hour, 10) * 60 : t,
	(e, t) => e.min ? t + parseInt(e.min, 10) : t,
	(t, n) => t.last_login ? Math.floor((e() - t.last_login) / 60) : n,
	(e, t) => "last_login" in e && !e.last_login ? 99999 : t
];
function r(e, t, n) {
	return n(e, t);
}
function i(e) {
	return n.reduce(t(r, e), 0);
}
var a = [
	[2, "greenDiamond"],
	[5, "yellowDiamond"],
	[30, "orangeDiamond"],
	[10080, "offlineDot"],
	[44640, "sevenDayDot"]
];
function o(e, t) {
	return e < t[0];
}
function s(e) {
	let t = "Offline";
	return e === "greenDiamond" && (t = "Online"), `<span class="fshDot ${e}" data-tooltip="${t}"></span>`;
}
function c(e) {
	let n = i(e), r = a.find(t(o, n));
	return s(r ? r[1] : "redDot");
}
//#endregion
export { c as t };

//# sourceMappingURL=onlineDot-D0WTzhgS.js.map