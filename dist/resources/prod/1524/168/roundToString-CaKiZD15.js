import { t as e } from "./numberIsNaN-DNn4rI1u.js";
// src/modules/common/round.js
function t(t, n) {
	let r = 10 ** n;
	return e(r) && (r = 1), Math.round(t * r) / r;
}
// src/modules/common/roundToString.js
function n(e, n) {
	return t(e, n).toString();
}
export { t as n, n as t };

//# sourceMappingURL=roundToString-CaKiZD15.js.map