import { t as e } from "./getValue-Aap0zlcO.js";
import { t } from "./jsonStringify-DbCVtu3B.js";
import { t as n } from "./_dataAccess-BLVLQyDJ.js";
import { t as r } from "./indexAjaxJson-DlbvYfbd.js";
import { t as i } from "./dialog-CyQtsKCT.js";
import { n as a, t as o } from "./sendItems-etywPxgX.js";
// src/modules/ajax/moveItem.js
async function s(e, n) {
	let a = await r({
		cmd: "profile",
		subcmd: "sendtofolder",
		inv_list: t(e),
		folder_id: n,
		ajax: 1
	});
	return i(a);
}
// src/modules/app/trade/sendItemsToRecipient.js
function c(t) {
	return a(e("itemRecipient"), t);
}
// src/modules/_dataAccess/daAjaxSendItemsToRecipient.js
function l(t) {
	return o(e("itemRecipient"), t);
}
function u(e) {
	return n(c, l, e);
}
// src/modules/ajax/dropItem.js
async function d(e) {
	let t = await r({
		cmd: "profile",
		subcmd: "dodropitems",
		removeIndex: e,
		ajax: 1
	});
	return i(t);
}
export { u as n, s as r, d as t };

//# sourceMappingURL=dropItem-CTXtw7rd.js.map