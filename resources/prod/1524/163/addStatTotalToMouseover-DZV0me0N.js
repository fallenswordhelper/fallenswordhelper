import { t as e } from "./getText-BybFkJV6.js";
import { t } from "./arrayFrom-B0aMFj4F.js";
import { t as n } from "./getArrayByTagName-QRr9ypcm.js";
import { t as r } from "./getTextTrim-hYBF-bdh.js";
import { t as i } from "./partial-CYzPXpZP.js";
import { t as a } from "./createDiv-CH3rNL4c.js";
import { t as o } from "./contains-wh2Zi4Dq.js";
import { t as s } from "./insertHtmlBeforeEnd-D5-rjWCh.js";
import { t as c } from "./closestTable-B_Km1mKH.js";
import { t as l } from "./insertHtmlBeforeBegin-cRb3-rQb.js";
//#region src/modules/common/addStatTotalToMouseover.js
function u(t) {
	return t.cells[1] && e(t.cells[1]);
}
function d(e, t, n) {
	let i = r(t.cells[0]).replace(":", "");
	return i ? (e[i] = { ind: n }, u(t) && (e[i].value = Number(r(t.cells[1]).replace("+", ""))), e) : e;
}
function f(e, t) {
	return t[e]?.value ? t[e].value : 0;
}
function p(e, t) {
	return e.Enhancements ? t.rows[e.Enhancements.ind - 1] : t.rows[t.rows.length - 1];
}
function m(e, t, n) {
	return t + f(n, e);
}
function h(e) {
	return [
		"Attack",
		"Defense",
		"Armor",
		"Damage",
		"HP"
	].reduce(i(m, e), 0);
}
function g(e) {
	let n = c(e), r = t(n.rows).reduce(d, {}), i = h(r);
	l(p(r, n), `<tr class="fshDodgerBlue"><td>Stat Total:</td><td align="right">${i}&nbsp;</td></tr>`);
}
function _(e) {
	let t = a();
	return s(t, e), n("font", t).filter(o("Bonuses")).forEach(g), t.innerHTML;
}
function v(e) {
	e.url.startsWith("fetchitem") && (e.dataFilter = _);
}
function y() {
	$.ajaxPrefilter(v);
}
//#endregion
export { y as default };

//# sourceMappingURL=addStatTotalToMouseover-DZV0me0N.js.map