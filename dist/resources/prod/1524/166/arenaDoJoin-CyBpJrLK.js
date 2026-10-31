import { t as e } from "./getElementById-C08-3H-C.js";
import { r as t } from "./now-B3pCBQja.js";
import { t as n } from "./querySelector-C6ReNysW.js";
import { t as r } from "./sendEvent-yx1DwCDA.js";
import { t as i } from "./infoBox-QJxiDGQb.js";
import { n as a, r as o } from "./idb-D8xqEbs-.js";
import s from "./arena-CMdiWZId.js";
// src/modules/arena/arenaDoJoin.js
function c(e, n) {
	let r = n || {};
	r[e] = t(), o("fsh_arenaFull", r);
}
function l(e) {
	return e?.includes("combat move");
}
function u(e) {
	return e?.includes("your guild");
}
async function d() {
	let e = i();
	if (!l(e)) {
		if (u(e)) {
			let e = n("#pCC input[name=\"pvp_id\"]").value;
			c(e, await a("fsh_arenaFull"));
		} else r("arena", "doJoin", e);
	}
}
function f() {
	e("arenaTypeTabs") ? s() : d();
}
export { f as default };

//# sourceMappingURL=arenaDoJoin-CyBpJrLK.js.map