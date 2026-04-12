import { t as e } from "./numberIsNaN-Y6LDm3bY.js";
//#region src/modules/common/formatDateTime.js
function t(e) {
	return `${e[0]}-${e[1]}-${e[2]} ${e[3]}:${e[4]}:${e[5]}`;
}
//#endregion
//#region src/modules/common/isDate.js
function n(t) {
	return Object.prototype.toString.call(t) === "[object Date]" && !e(t.getTime());
}
//#endregion
export { t as n, n as t };

//# sourceMappingURL=isDate-U9e3PAau.js.map