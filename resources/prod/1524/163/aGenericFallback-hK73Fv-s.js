import { t as e } from "./indexAjaxDoc-BNgfSQTJ.js";
import { t } from "./infoBox-CqlNbC9M.js";
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

//# sourceMappingURL=aGenericFallback-hK73Fv-s.js.map