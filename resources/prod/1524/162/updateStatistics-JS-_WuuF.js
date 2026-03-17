import "./system-De1jBRGa.js";
import { K as e } from "./constants-C54mky4_.js";
import { t } from "./querySelector-qkBBhiGH.js";
import { t as n } from "./getElementsByTagName-BUN1mNPF.js";
import { t as r } from "./trim-BIFcpoD2.js";
import { t as i } from "./getTextTrim-Wj82yPPN.js";
import { t as a } from "./setInnerHtml-ClDKp0Zh.js";
import { t as o } from "./querySelectorArray-BZbNvND7.js";
import { t as s } from "./insertElementBefore-B-ZBDHwR.js";
import { t as c } from "./createStyle-tF7Gye70.js";
//#region src/modules/profile/updateStatistics.js
var l = ".profile-stat-bonus { font-size: x-small; }\n.fshCharStats { table-layout: fixed; }\n.fshCharStats td:first-of-type { width: 22%; }\n.fshCharStats td:nth-of-type(2) { width: 25%; }\n.fshCharStats td:nth-of-type(3) { width: 18%; }\n.fshCharStats td:nth-of-type(4) { width: 35%; }";
function u(e) {
	let t = i(e);
	return t ? ` <div class="profile-stat-bonus">${t}</div>` : "";
}
function d(e) {
	let [t, i] = n("td", e);
	a(`<span id="${t.id}">${r(t.innerHTML.replace(/&nbsp;/g, " "))}</span>${u(i)}`, e.parentNode);
}
var f = (e, t, n) => o(`${t}[${n}]`, e).forEach((e) => e.removeAttribute(n));
function p(e) {
	f(e, "tr", "style"), f(e, "td", "width"), t("td[colspan]", e)?.removeAttribute("colspan");
}
function m(t) {
	t.classList.add("fshCharStats"), p(t), o(e, t).forEach(d), s(c(l), t);
}
function h() {
	let e = t("#profileLeftColumn table");
	e && m(e);
}
//#endregion
export { h as default };

//# sourceMappingURL=updateStatistics-JS-_WuuF.js.map