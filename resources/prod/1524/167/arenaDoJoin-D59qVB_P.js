import { t as e } from "./sendEvent-Co2_qySS.js";
import { t } from "./getElementById-C08-3H-C.js";
import { t as n } from "./infoBox-QJxiDGQb.js";
import { t as r } from "./querySelector-C6ReNysW.js";
import { r as i } from "./now-B3pCBQja.js";
import { n as a, r as o } from "./idb-D8xqEbs-.js";
import s from "./arena-DuRPlQqH.js";
// src/modules/arena/arenaDoJoin.js
function c(e, t) {
	let n = t || {};
	n[e] = i(), o("fsh_arenaFull", n);
}
function l(e) {
	return e?.includes("combat move");
}
function u(e) {
	return e?.includes("your guild");
}
async function d() {
	let t = n();
	if (!l(t)) {
		if (u(t)) {
			let e = r("#pCC input[name=\"pvp_id\"]").value;
			c(e, await a("fsh_arenaFull"));
		} else e("arena", "doJoin", t);
	}
}
function f() {
	t("arenaTypeTabs") ? s() : d();
}
export { f as default };

//# sourceMappingURL=arenaDoJoin-D59qVB_P.js.map