import { t as e } from "./retryAjax-Cx5Fvrfg.js";
import { t } from "./sendEvent-Co2_qySS.js";
import { t as n } from "./getElementById-C08-3H-C.js";
import { t as r } from "./hideElement-D2Je4J0O.js";
import { t as i } from "./onclick-nv-Fl1th.js";
import { t as a } from "./layout-B2Q1UoM2.js";
import { t as o } from "./getCustomUrlParameter-C5vi2hsN.js";
// src/modules/profile/ifSelf/ajaxifyProfileSections.js
var s = 0;
function c() {
	return s ||= n("backpackContainer"), s;
}
function l(e) {
	e.style.display === "block" && r(e), e.removeAttribute("style");
}
function u(e) {
	e.hasAttribute("style") ? l(e) : e.classList.toggle("fshHide");
}
function d(e) {
	t("ajaxifyProfileSections", "toggleSection"), Number(o(e.search, "section_id")) === 5 ? u(c()) : u(e.parentNode.parentNode.nextElementSibling);
}
function f(t) {
	let { target: n } = t;
	n.href?.includes("togglesection") && (d(n), e(n.href), t.preventDefault());
}
function p() {
	i(a(), f);
}
export { p as default };

//# sourceMappingURL=ajaxifyProfileSections-hzB9oR1G.js.map