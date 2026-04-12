import { G as e, nt as t } from "./constants-CIKidKvt.js";
import { t as n } from "./sendEvent-DFQy5lFi.js";
import { t as r } from "./insertElement-C_6uFPNr.js";
import { t as i } from "./onclick-8ZwMJyqI.js";
import { t as a } from "./createAnchor-DIf1F0uc.js";
import { t as o } from "./insertElementBefore-Bwz7Hji8.js";
import { t as s } from "./itemIdFromImg-ChyU4_Zu.js";
//#region src/modules/common/ufsgItemLink.js
function c(r, o) {
	let s = a({
		href: `${t}items${e}view&item_id=${o}`,
		target: "_blank"
	});
	return i(s, () => n(r, "Ufsg link")), s;
}
function l(e, t) {
	let n = s(t);
	if (!n) return;
	let i = c(e, n);
	o(i, t), r(i, t);
}
//#endregion
export { l as t };

//# sourceMappingURL=ufsgItemLink-DE-6eNiv.js.map