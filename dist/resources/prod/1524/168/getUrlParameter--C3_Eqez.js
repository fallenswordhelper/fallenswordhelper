import { t as e } from "./devStdOut-D2qFWpUj.js";
import { t } from "./getCustomUrlParameter-OUJUdwqs.js";
// src/modules/system/getUrlParameter.js
function n(n) {
	try {
		let e = decodeURIComponent(window.location.search);
		return t(e, n);
	} catch (t) {
		return e(t), "";
	}
}
export { n as t };

//# sourceMappingURL=getUrlParameter--C3_Eqez.js.map