import { G as e, nt as t } from "./constants-CenxlFMY.js";
import { t as n } from "./sendEvent-DkxfZozg.js";
import { t as r } from "./insertElement-6ZBKaryO.js";
import { t as i } from "./onclick-nv-Fl1th.js";
import { t as a } from "./createAnchor-BMaWUfMc.js";
import { t as o } from "./insertElementBefore-CaihVZse.js";
import { t as s } from "./itemIdFromImg-O3uB0Iqa.js";
// src/modules/common/ufsgItemLink.js
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
export { l as t };

//# sourceMappingURL=ufsgItemLink-CDPWZ5xt.js.map