import { K as e } from "./constants-CenxlFMY.js";
import { t } from "./getValue-Aap0zlcO.js";
import { t as n } from "./getElementsByTagName-B8gMqefB.js";
import { t as r } from "./partial-Bo20zBni.js";
import { t as i } from "./contains-CziyX11O.js";
import { t as a } from "./querySelectorArray-C70U47NF.js";
import { t as o } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
// src/modules/profile/ifSelf/profileAllyEnemy.js
function s(e) {
	return e ? "alliestotal" : "enemiestotal";
}
function c(e, t) {
	return t && t >= e ? `/${t}` : "";
}
function l(r, i) {
	let a = i.parentNode, l = n(e, a.nextElementSibling).length - 1;
	o(a, `<span class="fshBlue">&nbsp;${l.toString()}${c(l, t(s(r)))}</span>`);
}
function u() {
	let e = a("#profileLeftColumn strong");
	e.filter(i("Allies")).forEach(r(l, !0)), e.filter(i("Enemies")).forEach(r(l, !1));
}
export { u as default };

//# sourceMappingURL=profileAllyEnemy-CQ_ESSjK.js.map