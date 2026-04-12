import { t as e } from "./jsonParse-C99pLn1W.js";
import { t } from "./retryAjax-oA4ZKObL.js";
//#region src/modules/app/api.js
async function n(n, r) {
	return e(await t({
		url: "app.php",
		data: {
			browser: 1,
			v: 9,
			...n
		},
		dataType: "text",
		...r
	})) ?? {
		e: {
			code: 0,
			message: "Server Error"
		},
		s: !1
	};
}
//#endregion
export { n as t };

//# sourceMappingURL=api-D9VAPAWC.js.map