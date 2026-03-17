import "./system-De1jBRGa.js";
import { K as e } from "./constants-C54mky4_.js";
import { t } from "./getValue-CCThXEzy.js";
import { t as n } from "./getElementsByTagName-BUN1mNPF.js";
import { t as r } from "./partial-goh6HOls.js";
import { t as i } from "./contains-D51Mjk5W.js";
import { t as a } from "./querySelectorArray-BZbNvND7.js";
import { t as o } from "./insertHtmlBeforeEnd-CRJWaYJw.js";
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

//# sourceMappingURL=profileAllyEnemy-B_ecNZIy.js.map