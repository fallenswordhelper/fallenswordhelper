import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./retryAjax-Cx5Fvrfg.js";
import { t as n } from "./getCustomUrlParameter-C5vi2hsN.js";
import { t as r } from "./layout-B2Q1UoM2.js";
import { t as i } from "./sendEvent-yx1DwCDA.js";
import { t as a } from "./onclick-nv-Fl1th.js";
import { t as o } from "./hideElement-D2Je4J0O.js";
// src/modules/profile/ifSelf/ajaxifyProfileSections.js
var s = 0;
function c() {
	return s ||= e("backpackContainer"), s;
}
function l(e) {
	e.style.display === "block" && o(e), e.removeAttribute("style");
}
function u(e) {
	e.hasAttribute("style") ? l(e) : e.classList.toggle("fshHide");
}
function d(e) {
	i("ajaxifyProfileSections", "toggleSection"), Number(n(e.search, "section_id")) === 5 ? u(c()) : u(e.parentNode.parentNode.nextElementSibling);
}
function f(e) {
	let { target: n } = e;
	n.href?.includes("togglesection") && (d(n), t(n.href), e.preventDefault());
}
function p() {
	a(r(), f);
}
export { p as default };

//# sourceMappingURL=ajaxifyProfileSections-eib4syfF.js.map