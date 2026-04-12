import { K as e } from "./constants-CIKidKvt.js";
import { t } from "./querySelector-8FH1hhUv.js";
import { t as n } from "./getElementsByTagName-CkoUUI_g.js";
import { t as r } from "./trim-C3qdDCs0.js";
import { t as i } from "./getTextTrim-hYBF-bdh.js";
import { t as a } from "./setInnerHtml-Dh9y9Se-.js";
import { t as o } from "./querySelectorArray-Bdj4peIm.js";
import { t as s } from "./insertElementBefore-Bwz7Hji8.js";
import { t as c } from "./createStyle-Qs_9mDCV.js";
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

//# sourceMappingURL=updateStatistics-HifgKACy.js.map