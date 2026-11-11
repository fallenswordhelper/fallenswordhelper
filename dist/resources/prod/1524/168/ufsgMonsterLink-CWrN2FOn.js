import { t as e } from "./sendEvent-DdWrU3DL.js";
import { G as t, mt as n, nt as r } from "./constants-CenxlFMY.js";
import { t as i } from "./createAnchor-HiREQnLZ.js";
import { t as a } from "./insertElement-6ZBKaryO.js";
import { t as o } from "./insertElementBefore-CaihVZse.js";
import { t as s } from "./onclick-nv-Fl1th.js";
import { t as c } from "./regExpFirstCapture-D_QeHFEY.js";
// src/modules/common/ufsgMonsterLink.js
function l(n, a, o) {
	let c = o ?? i({});
	return c.href = `${r}creatures${t}view&creature_id=${a}`, c.target = "_blank", s(c, () => e(n, "Ufsg link")), c;
}
function u(e, t) {
	let r = c(n, t.src);
	if (!r) return;
	let i = l(e, r);
	o(i, t), a(i, t);
}
export { l as n, u as t };

//# sourceMappingURL=ufsgMonsterLink-CWrN2FOn.js.map