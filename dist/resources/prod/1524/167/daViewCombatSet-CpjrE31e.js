import { t as e } from "./indexAjaxDoc-MnAqiGyz.js";
import { t } from "./alpha-BRx-EQ4u.js";
import { t as n } from "./profile-By-S2hRI.js";
import { t as r } from "./arrayFrom-CKk6qt2j.js";
import { t as i } from "./querySelector-C6ReNysW.js";
import { t as a } from "./_dataAccess-BLVLQyDJ.js";
// src/modules/app/profile/viewcombatset.js
async function o() {
	let e = await n({ subcmd: "viewcombatset" });
	return e?.r ? {
		...e,
		r: e.r.sort((e, n) => t(e.name, n.name))
	} : e;
}
// src/modules/_dataAccess/daViewCombatSet.js
var s = (e, t) => t > 0, c = (e) => ({ id: Number(e.value) });
async function l() {
	let t = await e({ cmd: "profile" });
	if (!t) return { s: !1 };
	let n = i("select[name=\"combatSetId\"]", t);
	return n ? {
		r: r(n.children).filter(s).map(c),
		s: !0
	} : { s: !1 };
}
function u() {
	return a(o, l);
}
export { u as t };

//# sourceMappingURL=daViewCombatSet-CpjrE31e.js.map