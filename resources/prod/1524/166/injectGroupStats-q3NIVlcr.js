import { t as e } from "./setInnerHtml-f0MFRJnQ.js";
import { t } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as n } from "./addCommas-Bv8TEVoY.js";
import { n as r } from "./attribsToArray-Bd0J_KyI.js";
import { n as i, t as a } from "./mercEffect-vNYuj1YV.js";
// src/modules/guild/groups/injectGroupStats.js
function o(t, r, i) {
	e(`<span class="fshBlue">${n(r)}</span> ( ${n(r - i)} )`, t);
}
function s(e, t) {
	o(e.attackElement, e.attack, t?.[0]), o(e.defenseElement, e.defense, t?.[1]), o(e.armorElement, e.armor, t?.[2]), o(e.hpElement, e.hp, t?.[3]), o(e.damageElement, e.damage, t?.[4]);
}
async function c() {
	if (t()) return;
	let e = r(document);
	if (e.attackElement) {
		let t = await i();
		s(e, a(t));
	}
}
export { c as default };

//# sourceMappingURL=injectGroupStats-q3NIVlcr.js.map