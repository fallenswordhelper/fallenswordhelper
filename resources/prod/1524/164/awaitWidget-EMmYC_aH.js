import { t as e } from "./toLowerCase-Cpm0Ikhj.js";
// src/modules/common/awaitWidget.js
var t = (e, t, n) => $(e).data(`${n}${t}`);
function n(n, r, i, a) {
	$(n).on(`${e(r)}create`, () => {
		a(t(n, r, i));
	});
}
function r(e, r, i) {
	return new Promise((a) => {
		let o = t(e, r, i);
		o ? a(o) : n(e, r, i, a);
	});
}
export { r as t };

//# sourceMappingURL=awaitWidget-EMmYC_aH.js.map