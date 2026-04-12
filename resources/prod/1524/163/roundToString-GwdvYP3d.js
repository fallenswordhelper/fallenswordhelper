import { t as e } from "./numberIsNaN-Y6LDm3bY.js";
//#region src/modules/common/round.js
function t(t, n) {
	let r = 10 ** n;
	return e(r) && (r = 1), Math.round(t * r) / r;
}
//#endregion
//#region src/modules/common/roundToString.js
function n(e, n) {
	return t(e, n).toString();
}
//#endregion
export { t as n, n as t };

//# sourceMappingURL=roundToString-GwdvYP3d.js.map