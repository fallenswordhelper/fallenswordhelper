import { t as e } from "./isArray-FpVoUujB.js";
//#region src/modules/_dataAccess/export/flattenItems.js
var t = ({ id: e, items: t }) => t.map((t) => ({
	...t,
	folder_id: e
}));
function n(n) {
	return e(n?.inventories) ? n.inventories.flatMap(t) : [];
}
//#endregion
export { n as t };

//# sourceMappingURL=flattenItems-D6g9OapM.js.map