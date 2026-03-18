import { t as e } from "./jsonParse-CHQNrrub.js";
import { t } from "./indexAjax-BXHvJ2Y7.js";
//#region src/modules/ajax/indexAjaxJson.js
async function n(n) {
	return e(await t({
		data: n,
		dataType: "text"
	})) ?? {
		r: 1,
		m: "Server Error"
	};
}
//#endregion
export { n as t };

//# sourceMappingURL=indexAjaxJson-DuDMsKRC.js.map