import "./constants-C54mky4_.js";
import { t as e } from "./getValue-CCThXEzy.js";
import { t } from "./asInt-BWWrvyCB.js";
//#region src/modules/common/levelHighlight.js
var n = 0;
function r(e, t) {
	return e.find(([e]) => e(t))?.[1](t);
}
function i() {
	return n ||= e("characterVirtualLevel") || t("stat-level"), n;
}
var a = [
	[(e) => e > 4049, () => 50],
	[(e) => e > 4039, (e) => e - 4e3],
	[(e) => e > 3039, () => 40],
	[(e) => e > 3029, (e) => e - 3e3],
	[(e) => e > 2029, () => 30],
	[(e) => e > 2019, (e) => e - 2e3],
	[(e) => e > 1019, () => 20],
	[(e) => e > 1009, (e) => e - 1e3],
	[(e) => e > 209, () => 10],
	[(e) => e > 204, (e) => e - 200],
	[(e) => e > 5, () => 5],
	[(e) => e > 0, (e) => e - 1]
];
function o(e) {
	return e - r(a, e);
}
function s() {
	return o(i());
}
var c = [
	[(e) => e > 3999, () => 50],
	[(e) => e > 2999, () => 40],
	[(e) => e > 1999, () => 30],
	[(e) => e > 999, () => 20],
	[(e) => e > 199, () => 10],
	[() => !0, () => 5]
];
function l(e) {
	return e + r(c, e);
}
function u() {
	return l(i());
}
function d(e) {
	return e > 700 ? 100 + Math.floor((e - 1) / 1e3) * 25 : e > 300 ? 50 : 25;
}
function f(e) {
	return e < 50 ? 0 : e + d(e);
}
var p = [
	701,
	301,
	50
];
function m(e) {
	return e > 1e3 ? Math.floor((e - 1) / 1e3) * 1e3 + 1 : p.find((t) => e >= t);
}
function h(e) {
	if (e < 50) return 0;
	let t = d(e), n = m(e);
	return e - t < n ? Math.max(Math.min(n, e - d(e - t)), 50) : Math.max(e - t, 50);
}
function g() {
	return f(i());
}
function _() {
	return h(i());
}
//#endregion
export { u as i, s as n, g as r, _ as t };

//# sourceMappingURL=levelHighlight-D4H4ANZr.js.map