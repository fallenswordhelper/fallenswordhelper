import { t as e } from "./querySelector-8FH1hhUv.js";
//#region src/modules/common/loadScript.js
function t(e) {
	return new Promise((t) => {
		let n = document.createElement("script");
		n.async = !0, n.onload = t, n.src = e, document.body.appendChild(n);
	});
}
//#endregion
//#region src/modules/common/loadCss.js
function n(t) {
	if (!t) return Promise.resolve();
	let n = e("link", document.body);
	return new Promise((e) => {
		let r = document.createElement("link");
		r.type = "text/css", r.rel = "stylesheet", r.onload = () => {
			e();
		}, r.href = t, n ? n.before(r) : document.body.append(r);
	});
}
//#endregion
export { t as n, n as t };

//# sourceMappingURL=loadCss-0TJ5lBHD.js.map