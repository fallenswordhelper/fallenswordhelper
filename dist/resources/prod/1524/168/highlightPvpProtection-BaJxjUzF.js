import { t as e } from "./getTextTrim-CvXe85fp.js";
import { t } from "./hrefIs-BYc01uXZ.js";
import { t as n } from "./querySelectorArray-C70U47NF.js";
import { Ct as r } from "./constants-CenxlFMY.js";
// src/modules/profile/highlightPvpProtection.js
function i() {
	let i = n("#profileLeftColumn a").find(t(r));
	i && e(i.parentNode.nextSibling) !== "N/A" && i.parentNode.parentNode.classList.add("fshPvpWarn");
}
export { i as default };

//# sourceMappingURL=highlightPvpProtection-BaJxjUzF.js.map