import "./system-De1jBRGa.js";
import "./constants-C54mky4_.js";
import { t as e } from "./setInnerHtml-ClDKp0Zh.js";
import "./indexAjax-BXHvJ2Y7.js";
import "./indexAjaxData-CqOTihOX.js";
import "./indexAjaxDoc-DHqD1q8U.js";
import "./closestTr-C0LB9ALA.js";
import { t } from "./jQueryNotPresent-oTtW_9Ua.js";
import { t as n } from "./addCommas-Ca7d_KBz.js";
import { n as r } from "./attribsToArray-Dfb2rZXE.js";
import { n as i, t as a } from "./mercEffect-DN9B4fBN.js";
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

//# sourceMappingURL=injectGroupStats-BkU15ria.js.map