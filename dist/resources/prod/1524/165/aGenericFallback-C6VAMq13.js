import { t as e } from "./indexAjaxDoc-WR96kHce.js";
import { t } from "./infoBox-QJxiDGQb.js";
// src/modules/_dataAccess/fallbacks/aGenericFallback.js
async function n(n, r) {
	let i = await e(n);
	if (!i) return { s: !1 };
	let a = t(i);
	return a === r ? { s: !0 } : {
		s: !1,
		e: { message: a }
	};
}
export { n as t };

//# sourceMappingURL=aGenericFallback-C6VAMq13.js.map