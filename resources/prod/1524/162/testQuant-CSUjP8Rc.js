import { t as e } from "./numberIsNaN-D2-MBtSw.js";
//#region src/modules/system/testRange.js
function t(t, n, r) {
	return !e(t) && t > n && t < r;
}
function n(e, n, r) {
	let i = parseInt(e, 10);
	if (t(i, n, r)) return i;
}
//#endregion
//#region src/modules/system/testQuant.js
function r(e) {
	return n(e, 0, 100);
}
//#endregion
export { r as t };

//# sourceMappingURL=testQuant-CSUjP8Rc.js.map