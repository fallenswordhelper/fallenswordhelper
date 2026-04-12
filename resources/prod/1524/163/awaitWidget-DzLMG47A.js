import { t as e } from "./toLowerCase-8GoRkIKu.js";
//#region src/modules/common/awaitWidget.js
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
//#endregion
export { r as t };

//# sourceMappingURL=awaitWidget-DzLMG47A.js.map