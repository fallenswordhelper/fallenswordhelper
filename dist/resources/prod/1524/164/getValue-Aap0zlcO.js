import { t as e } from "./devStdOut-D2qFWpUj.js";
import { n as t, t as n } from "./isUndefined-CH45qJXY.js";
import "./constants-CenxlFMY.js";
import { t as r } from "./dataObj-CHZygbS1.js";
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
function o(e, r) {
	let i = window.localStorage.getItem("GM_" + e);
	return t(i) || n(i) ? r : a(i);
}
function s(t) {
	return !t.startsWith("screenview__") && n(r[t]) && e("No default setting available", t, r[t]), o(t, r[t]);
}
export { s as t };

//# sourceMappingURL=getValue-Aap0zlcO.js.map