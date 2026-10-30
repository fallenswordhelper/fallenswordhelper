import { t as e } from "./indexAjaxJson-DlbvYfbd.js";
import { t } from "./daUseItem-KKw1U1m5.js";
import { t as n } from "./dialog-CyQtsKCT.js";
import { t as r } from "./errorDialog-CK0T_lOR.js";
// src/modules/ajax/equipItem.js
async function i(t) {
	let r = await e({
		cmd: "profile",
		subcmd: "equipitem",
		inventory_id: t,
		ajax: 1
	});
	return n(r);
}
// src/modules/common/ajaxReturnCode.js
function a(e) {
	return e && {
		...e,
		r: +!e.s
	};
}
// src/modules/ajax/useItem.js
async function o(e) {
	let n = await t(e);
	return r(n), a(n);
}
export { a as n, i as r, o as t };

//# sourceMappingURL=useItem-DIt-Gr0e.js.map