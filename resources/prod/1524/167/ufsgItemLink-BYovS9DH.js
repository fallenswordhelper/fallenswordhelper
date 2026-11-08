import { t as e } from "./sendEvent-Co2_qySS.js";
import { G as t, nt as n } from "./constants-CenxlFMY.js";
import { t as r } from "./createAnchor-HiREQnLZ.js";
import { t as i } from "./insertElement-6ZBKaryO.js";
import { t as a } from "./insertElementBefore-CaihVZse.js";
import { t as o } from "./itemIdFromImg-O3uB0Iqa.js";
import { t as s } from "./onclick-nv-Fl1th.js";
// src/modules/common/ufsgItemLink.js
function c(i, a) {
	let o = r({
		href: `${n}items${t}view&item_id=${a}`,
		target: "_blank"
	});
	return s(o, () => e(i, "Ufsg link")), o;
}
function l(e, t) {
	let n = o(t);
	if (!n) return;
	let r = c(e, n);
	a(r, t), i(r, t);
}
export { l as t };

//# sourceMappingURL=ufsgItemLink-BYovS9DH.js.map