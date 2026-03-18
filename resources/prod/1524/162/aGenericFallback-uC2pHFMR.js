import { t as e } from "./indexAjaxDoc-DHqD1q8U.js";
import { t } from "./infoBox-BqL_tRSH.js";
//#region src/modules/_dataAccess/fallbacks/aGenericFallback.js
async function n(n, r) {
	let i = await e(n);
	if (!i) return { s: !1 };
	let a = t(i);
	return a === r ? { s: !0 } : {
		s: !1,
		e: { message: a }
	};
}
//#endregion
export { n as t };

//# sourceMappingURL=aGenericFallback-uC2pHFMR.js.map