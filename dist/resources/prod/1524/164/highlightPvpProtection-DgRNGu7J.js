import { Ct as e } from "./constants-CenxlFMY.js";
import { t } from "./getTextTrim-CvXe85fp.js";
import { t as n } from "./querySelectorArray-C70U47NF.js";
import { t as r } from "./hrefIs-BYc01uXZ.js";
// src/modules/profile/highlightPvpProtection.js
function i() {
	let i = n("#profileLeftColumn a").find(r(e));
	i && t(i.parentNode.nextSibling) !== "N/A" && i.parentNode.parentNode.classList.add("fshPvpWarn");
}
export { i as default };

//# sourceMappingURL=highlightPvpProtection-DgRNGu7J.js.map