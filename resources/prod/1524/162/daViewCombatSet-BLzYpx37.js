import { t as e } from "./querySelector-qkBBhiGH.js";
import { t } from "./arrayFrom-LpiPmbFE.js";
import { t as n } from "./_dataAccess-tuhLVrPW.js";
import { t as r } from "./indexAjaxDoc-DHqD1q8U.js";
import { t as i } from "./alpha-gvIHBiw7.js";
import { t as a } from "./profile-DwNdicRm.js";
//#region src/modules/app/profile/viewcombatset.js
async function o() {
	let e = await a({ subcmd: "viewcombatset" });
	return e?.r ? {
		...e,
		r: e.r.sort((e, t) => i(e.name, t.name))
	} : e;
}
//#endregion
//#region src/modules/_dataAccess/daViewCombatSet.js
var s = (e, t) => t > 0, c = (e) => ({ id: Number(e.value) });
async function l() {
	let n = await r({ cmd: "profile" });
	if (!n) return { s: !1 };
	let i = e("select[name=\"combatSetId\"]", n);
	return i ? {
		r: t(i.children).filter(s).map(c),
		s: !0
	} : { s: !1 };
}
function u() {
	return n(o, l);
}
//#endregion
export { u as t };

//# sourceMappingURL=daViewCombatSet-BLzYpx37.js.map