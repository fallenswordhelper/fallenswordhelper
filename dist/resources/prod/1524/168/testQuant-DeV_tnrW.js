import { t as e } from "./numberIsNaN-DNn4rI1u.js";
// src/modules/system/testRange.js
function t(t, n, r) {
	return !e(t) && t > n && t < r;
}
function n(e, n, r) {
	let i = parseInt(e, 10);
	if (t(i, n, r)) return i;
}
// src/modules/system/testQuant.js
function r(e) {
	return n(e, 0, 100);
}
export { r as t };

//# sourceMappingURL=testQuant-DeV_tnrW.js.map