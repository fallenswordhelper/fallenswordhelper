import { n as e, t } from "./isUndefined-CH45qJXY.js";
import "./constants-CenxlFMY.js";
import { t as n } from "./dataObj-B25xwORA.js";
import { t as r } from "./devStdOut-D2qFWpUj.js";
// src/modules/system/getValue.js
var i = [
	["S]", (e) => e.slice(2)],
	["N]", (e) => parseInt(e.slice(2), 10)],
	["B]", (e) => e.slice(2) === "true"]
];
function a(e) {
	let t = i.find((t) => e.startsWith(t[0]));
	return t ? t[1](e) : e;
}
function o(n, r) {
	let i = window.localStorage.getItem("GM_" + n);
	return e(i) || t(i) ? r : a(i);
}
function s(e) {
	return !e.startsWith("screenview__") && t(n[e]) && r("No default setting available", e, n[e]), o(e, n[e]);
}
export { s as t };

//# sourceMappingURL=getValue-DMlY7SSn.js.map