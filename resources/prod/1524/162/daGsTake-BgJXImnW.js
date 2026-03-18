import { t as e } from "./_dataAccess-tuhLVrPW.js";
import { t } from "./guildInventory-BO2v5nuo.js";
import { t as n } from "./takeItem-CIVEdK3m.js";
//#region src/modules/app/guild/inventory/takeitem.js
function r(e) {
	return t({
		subcmd2: "takeitem",
		guildstore_id: e
	});
}
//#endregion
//#region src/modules/_dataAccess/daGsTake.js
function i(e) {
	return e.r === 0 ? { s: !0 } : {
		e: { message: e.m },
		s: !1
	};
}
async function a(e) {
	return i(await n(e));
}
function o(t) {
	return e(r, a, t);
}
//#endregion
export { o as t };

//# sourceMappingURL=daGsTake-BgJXImnW.js.map