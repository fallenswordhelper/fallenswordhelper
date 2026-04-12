import { t as e } from "./setInnerHtml-Dh9y9Se-.js";
import { t } from "./jQueryNotPresent-UT8-ZycH.js";
import { t as n } from "./addCommas-BgpPUQrd.js";
import { n as r } from "./attribsToArray-DXTtRlj5.js";
import { n as i, t as a } from "./mercEffect-76JNXob6.js";
//#region src/modules/guild/groups/injectGroupStats.js
function o(t, r, i) {
	e(`<span class="fshBlue">${n(r)}</span> ( ${n(r - i)} )`, t);
}
function s(e, t) {
	o(e.attackElement, e.attack, t?.[0]), o(e.defenseElement, e.defense, t?.[1]), o(e.armorElement, e.armor, t?.[2]), o(e.hpElement, e.hp, t?.[3]), o(e.damageElement, e.damage, t?.[4]);
}
async function c() {
	if (t()) return;
	let e = r(document);
	e.attackElement && s(e, a(await i()));
}
//#endregion
export { c as default };

//# sourceMappingURL=injectGroupStats-CxAOws0O.js.map