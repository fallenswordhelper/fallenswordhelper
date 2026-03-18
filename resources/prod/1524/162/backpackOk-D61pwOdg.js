import { t as e } from "./isArray-oWM-Qp9j.js";
import { t } from "./indexAjaxJson-DuDMsKRC.js";
//#region src/modules/ajaxQueue/backpack.js
function n() {
	return t({
		cmd: "profile",
		subcmd: "fetchinv"
	});
}
//#endregion
//#region src/modules/ajaxQueue/backpackOk.js
function r(t) {
	return e(t?.folders) && e(t?.items);
}
//#endregion
export { n, r as t };

//# sourceMappingURL=backpackOk-D61pwOdg.js.map