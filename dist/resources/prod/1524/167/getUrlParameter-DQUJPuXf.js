import { t as e } from "./devStdOut-D2qFWpUj.js";
import { t } from "./getCustomUrlParameter-C5vi2hsN.js";
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

//# sourceMappingURL=getUrlParameter-DQUJPuXf.js.map