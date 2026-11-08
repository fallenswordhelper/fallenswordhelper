import { t as e } from "./createStyle-DG3VYLtp.js";
import { t } from "./getElementsByTagName-B8gMqefB.js";
import { t as n } from "./getTextTrim-CvXe85fp.js";
import { t as r } from "./insertElementBefore-CaihVZse.js";
import { t as i } from "./querySelector-C6ReNysW.js";
import { t as a } from "./querySelectorArray-C70U47NF.js";
import { t as o } from "./trim-CU-eMahN.js";
import { t as s } from "./setInnerHtml-f0MFRJnQ.js";
import { K as c } from "./constants-CenxlFMY.js";
// src/modules/profile/updateStatistics.js
var l = ".profile-stat-bonus { font-size: x-small; }\n.fshCharStats { table-layout: fixed; }\n.fshCharStats td:first-of-type { width: 22%; }\n.fshCharStats td:nth-of-type(2) { width: 25%; }\n.fshCharStats td:nth-of-type(3) { width: 18%; }\n.fshCharStats td:nth-of-type(4) { width: 35%; }";
function u(e) {
	let t = n(e);
	return t ? ` <div class="profile-stat-bonus">${t}</div>` : "";
}
function d(e) {
	let [n, r] = t("td", e);
	s(`<span id="${n.id}">${o(n.innerHTML.replace(/&nbsp;/g, " "))}</span>${u(r)}`, e.parentNode);
}
var f = (e, t, n) => a(`${t}[${n}]`, e).forEach((e) => e.removeAttribute(n));
function p(e) {
	f(e, "tr", "style"), f(e, "td", "width"), i("td[colspan]", e)?.removeAttribute("colspan");
}
function m(t) {
	t.classList.add("fshCharStats"), p(t), a(c, t).forEach(d), r(e(l), t);
}
function h() {
	let e = i("#profileLeftColumn table");
	e && m(e);
}
export { h as default };

//# sourceMappingURL=updateStatistics-Bqd2hOg0.js.map