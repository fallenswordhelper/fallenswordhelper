import { t as e } from "./querySelector-8FH1hhUv.js";
import { t } from "./arrayFrom-B0aMFj4F.js";
import { t as n } from "./_dataAccess-Cm9xXxBc.js";
import { t as r } from "./indexAjaxDoc-BNgfSQTJ.js";
import { t as i } from "./alpha-Dzfd-64M.js";
import { t as a } from "./profile-DolCHxvz.js";
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

//# sourceMappingURL=daViewCombatSet-CyB2ddbE.js.map