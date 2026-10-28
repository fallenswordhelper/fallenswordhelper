import { t as e } from "./querySelector-C6ReNysW.js";
import { t } from "./arrayFrom-CKk6qt2j.js";
import { t as n } from "./_dataAccess-BLVLQyDJ.js";
import { t as r } from "./indexAjaxDoc-WR96kHce.js";
import { t as i } from "./alpha-BRx-EQ4u.js";
import { t as a } from "./profile-BZrU9oa_.js";
// src/modules/app/profile/viewcombatset.js
async function o() {
	let e = await a({ subcmd: "viewcombatset" });
	return e?.r ? {
		...e,
		r: e.r.sort((e, t) => i(e.name, t.name))
	} : e;
}
// src/modules/_dataAccess/daViewCombatSet.js
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
export { u as t };

//# sourceMappingURL=daViewCombatSet-gx2k2c8O.js.map