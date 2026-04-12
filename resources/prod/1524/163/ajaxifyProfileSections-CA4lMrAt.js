import { t as e } from "./getElementById-DgC-_E5u.js";
import { t } from "./retryAjax-oA4ZKObL.js";
import { t as n } from "./getCustomUrlParameter-Dna1URkG.js";
import { t as r } from "./layout-6CPY-bfq.js";
import { t as i } from "./sendEvent-DFQy5lFi.js";
import { t as a } from "./onclick-8ZwMJyqI.js";
import { t as o } from "./hideElement-TH4JEbXy.js";
//#region src/modules/profile/ifSelf/ajaxifyProfileSections.js
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
//#endregion
export { p as default };

//# sourceMappingURL=ajaxifyProfileSections-CA4lMrAt.js.map