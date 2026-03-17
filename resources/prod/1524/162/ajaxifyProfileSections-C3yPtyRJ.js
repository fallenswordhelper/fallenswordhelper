import { t as e } from "./getElementById-PlRCtyBA.js";
import "./posthog-C2Vh_0Hn.js";
import { t } from "./retryAjax-p9geDMSY.js";
import { t as n } from "./getCustomUrlParameter-CFd8fvHs.js";
import { t as r } from "./layout-Bapa39KM.js";
import { t as i } from "./sendEvent-bwvhd4A-.js";
import { t as a } from "./onclick-9iRduoOH.js";
import { t as o } from "./hideElement-DH6fODir.js";
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

//# sourceMappingURL=ajaxifyProfileSections-C3yPtyRJ.js.map