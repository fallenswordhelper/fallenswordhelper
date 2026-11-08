import { t as e } from "./jsonParse-CTM1cd4F.js";
import { t } from "./indexAjax-CdFPBWrF.js";
// src/modules/ajax/indexAjaxJson.js
async function n(n) {
	let r = await t({
		data: n,
		dataType: "text"
	});
	return e(r) ?? {
		r: 1,
		m: "Server Error"
	};
}
export { n as t };

//# sourceMappingURL=indexAjaxJson-DWeSX1ZL.js.map