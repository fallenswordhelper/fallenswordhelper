import { K as e } from "./constants-CIKidKvt.js";
import { t } from "./getValue-j5JjE6f3.js";
import { t as n } from "./getElementsByTagName-CkoUUI_g.js";
import { t as r } from "./partial-CYzPXpZP.js";
import { t as i } from "./contains-wh2Zi4Dq.js";
import { t as a } from "./querySelectorArray-Bdj4peIm.js";
import { t as o } from "./insertHtmlBeforeEnd-D5-rjWCh.js";
//#region src/modules/profile/ifSelf/profileAllyEnemy.js
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
//#endregion
export { u as default };

//# sourceMappingURL=profileAllyEnemy-CvVgyYvV.js.map