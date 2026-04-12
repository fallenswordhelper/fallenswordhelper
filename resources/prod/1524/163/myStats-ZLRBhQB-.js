import { t as e } from "./playerName-WE8p-OHq.js";
import { n as t } from "./now-CA_NVGr7.js";
import { t as n } from "./calf-DxCOTxVt.js";
import { n as r, r as i } from "./idb-BvD4EIHy.js";
import { t as a } from "./profile-CppQhefR.js";
//#region src/modules/ajax/myStats.js
async function o(n) {
	let r = await a(e(), n), o = r?.username === e(), s = o ? {
		...r,
		lastUpdate: t()
	} : r;
	return o && i("fsh_selfProfile", s), s;
}
var s = (e) => t() - n.allyEnemyOnlineRefreshTime < e?.lastUpdate;
function c(e) {
	return s(e) ? e : o();
}
async function l(e) {
	return e ? o(e) : c(await r("fsh_selfProfile"));
}
//#endregion
export { l as t };

//# sourceMappingURL=myStats-ZLRBhQB-.js.map