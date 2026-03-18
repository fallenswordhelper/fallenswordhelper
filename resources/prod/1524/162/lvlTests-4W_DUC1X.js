import { t as e } from "./numberIsNaN-D2-MBtSw.js";
//#region src/modules/common/lvlTests.js
var t = [
	(e) => !e,
	(e, t) => !t,
	(t, n) => e(t) && e(n),
	(t, n, r) => e(t) && r <= n,
	(t, n, r) => t <= r && e(n),
	(e, t, n) => e <= n && n <= t
];
function n(e, t, n, r) {
	return e.some((e) => e(n, r, t));
}
//#endregion
export { t as n, n as t };

//# sourceMappingURL=lvlTests-4W_DUC1X.js.map