import { t as e } from "./querySelector-C6ReNysW.js";
// src/modules/common/loadScript.js
function t(e) {
	return new Promise((t) => {
		let n = document.createElement("script");
		n.async = !0, n.onload = t, n.src = e, document.body.appendChild(n);
	});
}
// src/modules/common/loadCss.js
function n() {
	let e = document.createElement("link");
	e.href = "https://github.com/fallenswordhelper/fallenswordhelper", document.body.append(e);
}
function r(t) {
	if (!t) return n(), Promise.resolve();
	let r = e("link", document.body);
	return new Promise((e) => {
		let n = document.createElement("link");
		n.type = "text/css", n.rel = "stylesheet", n.onload = () => {
			e();
		}, n.href = t, r ? r.before(n) : document.body.append(n);
	});
}
export { t as n, r as t };

//# sourceMappingURL=loadCss-Dfo4jS9C.js.map