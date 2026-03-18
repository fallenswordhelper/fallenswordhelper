import "./system-De1jBRGa.js";
import { Ct as e } from "./constants-C54mky4_.js";
import { t } from "./querySelector-qkBBhiGH.js";
import { t as n } from "./getTextTrim-Wj82yPPN.js";
//#region src/modules/profile/highlightPvpProtection.js
function r() {
	let r = t(`#profileLeftColumn a[href="${e}"]`);
	r && n(r.parentNode.nextSibling) !== "N/A" && r.parentNode.parentNode.classList.add("fshPvpWarn");
}
//#endregion
export { r as default };

//# sourceMappingURL=highlightPvpProtection-UsAH9mmu.js.map