import { t as e } from "./getElementById-PlRCtyBA.js";
import "./posthog-C2Vh_0Hn.js";
import { r as t } from "./now-DpYjGucP.js";
import "./system-De1jBRGa.js";
import "./constants-C54mky4_.js";
import { t as n } from "./querySelector-qkBBhiGH.js";
import { t as r } from "./sendEvent-bwvhd4A-.js";
import { t as i } from "./infoBox-BqL_tRSH.js";
import "./closestTr-C0LB9ALA.js";
import { n as a, r as o } from "./idb-sdcp-8vV.js";
import "./formToUrl-BROd6YBE.js";
import "./interceptSubmit-0losboil.js";
import s from "./arena-BrPPNeES.js";
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

//# sourceMappingURL=arenaDoJoin-DSFMO8U0.js.map