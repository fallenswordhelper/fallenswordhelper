import { t as e } from "./devStdOut-BAVmsJfc.js";
import { n as t, t as n } from "./isUndefined-Dfbc1KRP.js";
import "./constants-CIKidKvt.js";
import { t as r } from "./dataObj-BLiU9H_5.js";
//#region src/modules/system/getValue.js
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
//#endregion
export { s as t };

//# sourceMappingURL=getValue-j5JjE6f3.js.map