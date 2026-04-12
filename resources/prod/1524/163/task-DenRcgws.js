import { i as e, n as t, t as n } from "./sendException-ezSEAahU.js";
import { t as r } from "./isUndefined-Dfbc1KRP.js";
import { t as i } from "./isFunction-CWoZbFiZ.js";
import { t as a } from "./on-afIPYx-0.js";
import { t as o } from "./fallback-DjzJos97.js";
//#region src/modules/support/sch.js
var s = /* @__PURE__ */ e(t(), 1), c = [null];
function l(e, t) {
	return c[e] && c[e].priority < c[t].priority;
}
function u(e, t) {
	let n = c[e];
	c[e] = c[t], c[t] = n;
}
function d(e, t) {
	return e ? t * 2 : t * 2 + 1;
}
function f(e) {
	let t = e;
	for (; t * 2 < c.length;) {
		let e = d(!l(t * 2 + 1, t * 2), t);
		if (l(t, e)) break;
		u(t, e), t = e;
	}
}
function p(e) {
	let t = e;
	for (; t > 1;) {
		let e = t >> 1;
		if (!l(t, e)) break;
		u(t, e), t = e;
	}
}
function m() {
	if (c.length === 1) return;
	let e = c[1].data, t = c.pop();
	return c.length > 1 && (c[1] = t, f(1)), e;
}
function h(e, t) {
	p(c.push({
		data: e,
		priority: t
	}) - 1);
}
function g() {
	return c.length - 1;
}
//#endregion
//#region src/modules/support/task.js
var _ = !0, v = "fshMessage", y = 0;
function b() {
	g() === 0 ? _ = !0 : (_ = !1, window.postMessage(v, window.location.origin));
}
function x(e) {
	r(e) || n(`pop() was not a function (${typeof e})`);
}
function S() {
	let e = m();
	i(e) ? e() : x(e);
}
function C() {
	try {
		S();
	} catch (e) {
		s.default.notify(e, "taskFailure");
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
		h(t.bind(i, ...a), e), _ && b();
	}
}
//#endregion
export { E as t };

//# sourceMappingURL=task-DenRcgws.js.map