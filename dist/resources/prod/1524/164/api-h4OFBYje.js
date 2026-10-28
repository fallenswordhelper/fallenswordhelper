import { t as e } from "./jsonParse-CTM1cd4F.js";
import { t } from "./retryAjax-Cx5Fvrfg.js";
// src/modules/app/api.js
async function n(n, r) {
	let i = await t({
		url: "app.php",
		data: {
			browser: 1,
			v: 9,
			...n
		},
		dataType: "text",
		...r
	});
	return e(i) ?? {
		e: {
			code: 0,
			message: "Server Error"
		},
		s: !1
	};
}
export { n as t };

//# sourceMappingURL=api-h4OFBYje.js.map