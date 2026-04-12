import { Ct as e } from "./constants-CIKidKvt.js";
import { t } from "./querySelector-8FH1hhUv.js";
import { t as n } from "./getTextTrim-hYBF-bdh.js";
//#region src/modules/profile/highlightPvpProtection.js
function r() {
	let r = t(`#profileLeftColumn a[href="${e}"]`);
	r && n(r.parentNode.nextSibling) !== "N/A" && r.parentNode.parentNode.classList.add("fshPvpWarn");
}
//#endregion
export { r as default };

//# sourceMappingURL=highlightPvpProtection-Qz2nmAHx.js.map