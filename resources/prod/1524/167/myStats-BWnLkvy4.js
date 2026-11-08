import { t as e } from "./profile-Btrp_Ri7.js";
import { t } from "./playerName-DbmV53SI.js";
import { t as n } from "./calf-SqS2SeU4.js";
import { n as r } from "./now-B3pCBQja.js";
import { n as i, r as a } from "./idb-D8xqEbs-.js";
// src/modules/ajax/myStats.js
async function o(n) {
	let i = await e(t(), n), o = i?.username === t(), s = o ? {
		...i,
		lastUpdate: r()
	} : i;
	return o && a("fsh_selfProfile", s), s;
}
var s = (e) => r() - n.allyEnemyOnlineRefreshTime < e?.lastUpdate;
function c(e) {
	return s(e) ? e : o();
}
async function l(e) {
	return e ? o(e) : c(await i("fsh_selfProfile"));
}
export { l as t };

//# sourceMappingURL=myStats-BWnLkvy4.js.map