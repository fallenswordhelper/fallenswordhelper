import { t as e } from "./indexAjaxJson-DywREKHQ.js";
import { t } from "./daUseItem-CgmzU7AU.js";
import { t as n } from "./dialog-BEalBxf7.js";
import { t as r } from "./errorDialog-CwxmqjPI.js";
//#region src/modules/ajax/equipItem.js
async function i(t) {
	return n(await e({
		cmd: "profile",
		subcmd: "equipitem",
		inventory_id: t,
		ajax: 1
	}));
}
//#endregion
//#region src/modules/common/ajaxReturnCode.js
function a(e) {
	return e && {
		...e,
		r: +!e.s
	};
}
//#endregion
//#region src/modules/ajax/useItem.js
async function o(e) {
	let n = await t(e);
	return r(n), a(n);
}
//#endregion
export { a as n, i as r, o as t };

//# sourceMappingURL=useItem-Bdgw70D6.js.map