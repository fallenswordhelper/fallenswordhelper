import { t as e } from "./takeItem-C4aGVWZk.js";
import { t } from "./guildInventory-Cb6J3fhR.js";
import { t as n } from "./_dataAccess-BLVLQyDJ.js";
// src/modules/app/guild/inventory/takeitem.js
function r(e) {
	return t({
		subcmd2: "takeitem",
		guildstore_id: e
	});
}
// src/modules/_dataAccess/daGsTake.js
function i(e) {
	return e.r === 0 ? { s: !0 } : {
		e: { message: e.m },
		s: !1
	};
}
async function a(t) {
	return i(await e(t));
}
function o(e) {
	return n(r, a, e);
}
export { o as t };

//# sourceMappingURL=daGsTake-wNhCEtLa.js.map