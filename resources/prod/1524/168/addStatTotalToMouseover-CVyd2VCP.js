import { t as e } from "./arrayFrom-CKk6qt2j.js";
import { t } from "./createDiv-B84RqGfo.js";
import { t as n } from "./closestTable-B73T3rIi.js";
import { t as r } from "./contains-DU2fd_7n.js";
import { t as i } from "./getArrayByTagName-Dyx_AQto.js";
import { t as a } from "./getText-BqjgTHLv.js";
import { t as o } from "./getTextTrim-CvXe85fp.js";
import { t as s } from "./insertHtmlBeforeBegin-B76it-PJ.js";
import { t as c } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as l } from "./partial-Bo20zBni.js";
// src/modules/common/addStatTotalToMouseover.js
function u(e) {
	return e.cells[1] && a(e.cells[1]);
}
function d(e, t, n) {
	let r = o(t.cells[0]).replace(":", "");
	return r && (e[r] = { ind: n }, u(t) && (e[r].value = Number(o(t.cells[1]).replace("+", "")))), e;
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
	].reduce(l(m, e), 0);
}
function g(t) {
	let r = n(t), i = e(r.rows).reduce(d, {}), a = h(i);
	s(p(i, r), `<tr class="fshDodgerBlue"><td>Stat Total:</td><td align="right">${a}&nbsp;</td></tr>`);
}
function _(e) {
	let n = t();
	return c(n, e), i("font", n).filter(r("Bonuses")).forEach(g), n.innerHTML;
}
function v(e) {
	e.url.startsWith("fetchitem") && (e.dataFilter = _);
}
function y() {
	$.ajaxPrefilter(v);
}
export { y as default };

//# sourceMappingURL=addStatTotalToMouseover-CVyd2VCP.js.map