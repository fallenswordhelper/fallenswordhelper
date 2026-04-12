import { t as e } from "./on-afIPYx-0.js";
//#region src/modules/ajax/AjaxError.js
function t(e) {
	return e.data ? (delete e.data.fshrnd, $.param(e.data)) : e.url;
}
function n(e, n, r, i) {
	let a = `${n.status} ${n.statusText} - `;
	if (n.statusText === i.toString()) return a + t(e);
	let o = `${a + r} ${i} - ${t(e)}`;
	return r === "parsererror" ? `${o} - ${n.responseText}` : o;
}
var r = class e extends Error {
	constructor([t, r, i, a], ...o) {
		super(n(t, r, i, a), ...o), Error.captureStackTrace && Error.captureStackTrace(this, e), this.jqSettings = t, this.jqXhr = r, this.jqTextStatus = i, this.jqErrorThrown = a;
	}
};
//#endregion
//#region src/modules/common/delay.js
function i(e) {
	return new Promise((t) => {
		setTimeout(t, e);
	});
}
//#endregion
//#region src/modules/ajax/retryAjax.js
function a(e) {
	return typeof e == "string" ? { url: e } : e;
}
function o(t) {
	e(window, "beforeunload", () => t.abort());
}
var s = 900, c = 0, l = 5, u = 0;
async function d() {
	u < l - $.active && performance.now() - c >= s ? (u = l - $.active, c = performance.now()) : await i(100);
}
async function f() {
	for (; u < 1;) await d();
	--u;
}
function p(e) {
	let t = a(e);
	return t.beforeSend = o, $.ajax(t).fail((e, t, n) => {
		e.textStatus = t, e.errorThrown = n;
	});
}
function m(e, t) {
	if (![
		0,
		500,
		503
	].includes(t.status)) throw new r([
		e,
		t,
		t.textStatus,
		t.errorThrown
	]);
}
async function h(e, t = 10) {
	await f();
	let n = null;
	try {
		n = await p(e);
	} catch (n) {
		if (t && n.status > 500) return h(e, t - 1);
		m(e, n);
	}
	return n;
}
//#endregion
export { i as n, h as t };

//# sourceMappingURL=retryAjax-oA4ZKObL.js.map