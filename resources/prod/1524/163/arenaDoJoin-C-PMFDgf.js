import { t as e } from "./getElementById-DgC-_E5u.js";
import { r as t } from "./now-CA_NVGr7.js";
import { t as n } from "./querySelector-8FH1hhUv.js";
import { t as r } from "./sendEvent-DFQy5lFi.js";
import { t as i } from "./infoBox-CqlNbC9M.js";
import { n as a, r as o } from "./idb-BvD4EIHy.js";
import s from "./arena-S2yLcZXU.js";
//#region src/modules/arena/arenaDoJoin.js
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
	if (!l(e)) if (u(e)) {
		let e = n("#pCC input[name=\"pvp_id\"]").value;
		c(e, await a("fsh_arenaFull"));
	} else r("arena", "doJoin", e);
}
function f() {
	e("arenaTypeTabs") ? s() : d();
}
//#endregion
export { f as default };

//# sourceMappingURL=arenaDoJoin-C-PMFDgf.js.map