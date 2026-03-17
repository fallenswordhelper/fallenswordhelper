import { i as e, n as t, t as n } from "./sendException-s1csWDQs.js";
import { t as r } from "./isUndefined-B3VLlmfL.js";
import { t as i } from "./isFunction-brgHXDf3.js";
import { t as a } from "./on-f-HmOL0n.js";
import { t as o } from "./fallback-BaBUEkCV.js";
//#region src/modules/support/sch.js
var s = [null];
function c(e, t) {
	return s[e] && s[e].priority < s[t].priority;
}
function l(e, t) {
	let n = s[e];
	s[e] = s[t], s[t] = n;
}
function u(e, t) {
	return e ? t * 2 : t * 2 + 1;
}
function d(e) {
	let t = e;
	for (; t * 2 < s.length;) {
		let e = u(!c(t * 2 + 1, t * 2), t);
		if (c(t, e)) break;
		l(t, e), t = e;
	}
}
function f(e) {
	let t = e;
	for (; t > 1;) {
		let e = t >> 1;
		if (!c(t, e)) break;
		l(t, e), t = e;
	}
}
function p() {
	if (s.length === 1) return;
	let e = s[1].data, t = s.pop();
	return s.length > 1 && (s[1] = t, d(1)), e;
}
function m(e, t) {
	f(s.push({
		data: e,
		priority: t
	}) - 1);
}
function h() {
	return s.length - 1;
}
//#endregion
//#region src/modules/support/task.js
var g = /* @__PURE__ */ e(t(), 1), _ = !0, v = "fshMessage", y = 0;
function b() {
	h() === 0 ? _ = !0 : (_ = !1, window.postMessage(v, window.location.origin));
}
function x(e) {
	r(e) || n(`pop() was not a function (${typeof e})`);
}
function S() {
	let e = p();
	i(e) ? e() : x(e);
}
function C() {
	try {
		S();
	} catch (e) {
		g.default.notify(e, "taskFailure");
	} finally {
		b();
	}
}
function w(e) {
	let t = e.data;
	e.origin === window.location.origin && t === v && C();
}
function T() {
	y ||= (a(window, "message", w), !0);
}
function E(e, t, n, r) {
	if (i(t)) {
		T();
		let i = o(r, window), a = o(n, []);
		m(t.bind(i, ...a), e), _ && b();
	}
}
//#endregion
export { E as t };

//# sourceMappingURL=task-jKbgFyYT.js.map