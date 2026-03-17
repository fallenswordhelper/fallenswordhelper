import { t as e } from "./getValue-CCThXEzy.js";
import { t } from "./jsonStringify-TOBgUNGU.js";
import { t as n } from "./_dataAccess-tuhLVrPW.js";
import { t as r } from "./indexAjaxJson-DuDMsKRC.js";
import { t as i } from "./dialog-D1zrc02U.js";
import { n as a, t as o } from "./sendItems-TAu70_Eh.js";
//#region src/modules/ajax/moveItem.js
async function s(e, n) {
	return i(await r({
		cmd: "profile",
		subcmd: "sendtofolder",
		inv_list: t(e),
		folder_id: n,
		ajax: 1
	}));
}
//#endregion
//#region src/modules/app/trade/sendItemsToRecipient.js
function c(t) {
	return a(e("itemRecipient"), t);
}
//#endregion
//#region src/modules/_dataAccess/daAjaxSendItemsToRecipient.js
function l(t) {
	return o(e("itemRecipient"), t);
}
function u(e) {
	return n(c, l, e);
}
//#endregion
//#region src/modules/ajax/dropItem.js
async function d(e) {
	return i(await r({
		cmd: "profile",
		subcmd: "dodropitems",
		removeIndex: e,
		ajax: 1
	}));
}
//#endregion
export { u as n, s as r, d as t };

//# sourceMappingURL=dropItem-CF0rI2de.js.map