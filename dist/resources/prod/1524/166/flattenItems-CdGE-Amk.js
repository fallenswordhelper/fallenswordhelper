import { t as e } from "./isArray-jaX-hZZq.js";
// src/modules/_dataAccess/export/flattenItems.js
var t = ({ id: e, items: t }) => t.map((t) => ({
	...t,
	folder_id: e
}));
function n(n) {
	return e(n?.inventories) ? n.inventories.flatMap(t) : [];
}
export { n as t };

//# sourceMappingURL=flattenItems-CdGE-Amk.js.map