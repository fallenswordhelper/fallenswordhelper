import { t as e } from "./contains-DU2fd_7n.js";
import { t } from "./getElementsByTagName-B8gMqefB.js";
import { t as n } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as r } from "./partial-Bo20zBni.js";
import { t as i } from "./querySelectorArray-C70U47NF.js";
import { K as a } from "./constants-CenxlFMY.js";
import { t as o } from "./getValue-vrUqpo0a.js";
// src/modules/profile/ifSelf/profileAllyEnemy.js
function s(e) {
	return e ? "alliestotal" : "enemiestotal";
}
function c(e, t) {
	return t && t >= e ? `/${t}` : "";
}
function l(e, r) {
	let i = r.parentNode, l = t(a, i.nextElementSibling).length - 1;
	n(i, `<span class="fshBlue">&nbsp;${l.toString()}${c(l, o(s(e)))}</span>`);
}
function u() {
	let t = i("#profileLeftColumn strong");
	t.filter(e("Allies")).forEach(r(l, !0)), t.filter(e("Enemies")).forEach(r(l, !1));
}
export { u as default };

//# sourceMappingURL=profileAllyEnemy-DVviYCxF.js.map