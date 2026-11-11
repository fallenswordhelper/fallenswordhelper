import { n as e, t } from "./mercEffect-BH6H9zzQ.js";
import { n } from "./attribsToArray-Bd0J_KyI.js";
import { t as r } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as i } from "./setInnerHtml-f0MFRJnQ.js";
import { t as a } from "./addCommas-Bv8TEVoY.js";
// src/modules/guild/groups/injectGroupStats.js
function o(e, t, n) {
	i(`<span class="fshBlue">${a(t)}</span> ( ${a(t - n)} )`, e);
}
function s(e, t) {
	o(e.attackElement, e.attack, t?.[0]), o(e.defenseElement, e.defense, t?.[1]), o(e.armorElement, e.armor, t?.[2]), o(e.hpElement, e.hp, t?.[3]), o(e.damageElement, e.damage, t?.[4]);
}
async function c() {
	if (r()) return;
	let i = n(document);
	if (i.attackElement) {
		let n = await e();
		s(i, t(n));
	}
}
export { c as default };

//# sourceMappingURL=injectGroupStats-KYjRafqQ.js.map