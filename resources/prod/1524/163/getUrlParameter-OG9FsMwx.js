import { t as e } from "./devStdOut-BAVmsJfc.js";
import { t } from "./getCustomUrlParameter-Dna1URkG.js";
//#region src/modules/system/getUrlParameter.js
function n(n) {
	try {
		return t(decodeURIComponent(window.location.search), n);
	} catch (t) {
		return e(t), "";
	}
}
//#endregion
export { n as t };

//# sourceMappingURL=getUrlParameter-OG9FsMwx.js.map