import { t as e } from "./retryAjax-Cx5Fvrfg.js";
import { t } from "./jsonParse-CTM1cd4F.js";
// src/modules/app/api.js
async function n(n, r) {
	let i = await e({
		url: "app.php",
		data: {
			browser: 1,
			v: 9,
			...n
		},
		dataType: "text",
		...r
	});
	return t(i) ?? {
		e: {
			code: 0,
			message: "Server Error"
		},
		s: !1
	};
}
export { n as t };

//# sourceMappingURL=api-2FJeNWdD.js.map