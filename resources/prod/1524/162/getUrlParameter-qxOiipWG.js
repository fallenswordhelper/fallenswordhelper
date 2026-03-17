import { t as e } from "./devStdOut-BnwcHKWA.js";
import { t } from "./getCustomUrlParameter-CFd8fvHs.js";
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

//# sourceMappingURL=getUrlParameter-qxOiipWG.js.map