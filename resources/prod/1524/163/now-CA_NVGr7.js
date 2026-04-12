//#region src/modules/support/now.js
var e = 0, t = 0, n = 0, r = 0, i = 0, a = 0, o = 0, s = () => Date.now(), c = () => Math.floor(s() / 1e3);
function l() {
	return e ||= s(), e;
}
function u() {
	return t ||= l() - 300 * 1e3, t;
}
function d() {
	return n ||= l() - 2880 * 60 * 1e3, n;
}
function f() {
	return r ||= Math.floor(l() / 1e3), r;
}
function p() {
	return i ||= f() - 120, i;
}
function m() {
	return a ||= f() - 1440 * 60, a;
}
function h() {
	return o ||= f() - 10080 * 60, o;
}
//#endregion
export { s as a, d as c, m as i, p as l, l as n, c as o, f as r, h as s, u as t };

//# sourceMappingURL=now-CA_NVGr7.js.map