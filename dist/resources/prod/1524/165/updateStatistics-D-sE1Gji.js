import { K as e } from "./constants-CenxlFMY.js";
import { t } from "./querySelector-C6ReNysW.js";
import { t as n } from "./getElementsByTagName-B8gMqefB.js";
import { t as r } from "./trim-CU-eMahN.js";
import { t as i } from "./getTextTrim-CvXe85fp.js";
import { t as a } from "./setInnerHtml-f0MFRJnQ.js";
import { t as o } from "./querySelectorArray-C70U47NF.js";
import { t as s } from "./insertElementBefore-CaihVZse.js";
import { t as c } from "./createStyle-CbdGPpS5.js";
// src/modules/profile/updateStatistics.js
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
export { h as default };

//# sourceMappingURL=updateStatistics-D-sE1Gji.js.map