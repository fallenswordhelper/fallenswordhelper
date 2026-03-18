import { G as e, nt as t } from "./constants-C54mky4_.js";
import { t as n } from "./sendEvent-bwvhd4A-.js";
import { t as r } from "./insertElement-DtUB7uKq.js";
import { t as i } from "./onclick-9iRduoOH.js";
import { t as a } from "./createAnchor-DH9dG-LN.js";
import { t as o } from "./insertElementBefore-B-ZBDHwR.js";
import { t as s } from "./itemIdFromImg-C_nHsO4c.js";
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

//# sourceMappingURL=ufsgItemLink-T8Z778st.js.map