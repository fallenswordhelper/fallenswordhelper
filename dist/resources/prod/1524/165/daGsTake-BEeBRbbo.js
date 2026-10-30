import { t as e } from "./_dataAccess-BLVLQyDJ.js";
import { t } from "./guildInventory-DYPTwtsS.js";
import { t as n } from "./takeItem-Cqy0Pz8n.js";
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
async function a(e) {
	return i(await n(e));
}
function o(t) {
	return e(r, a, t);
}
export { o as t };

//# sourceMappingURL=daGsTake-BEeBRbbo.js.map