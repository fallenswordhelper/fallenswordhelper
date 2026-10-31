import { t as e } from "./regExpFirstCapture-D_QeHFEY.js";
import { G as t, mt as n, nt as r } from "./constants-CenxlFMY.js";
import { t as i } from "./sendEvent-yx1DwCDA.js";
import { t as a } from "./insertElement-6ZBKaryO.js";
import { t as o } from "./onclick-nv-Fl1th.js";
import { t as s } from "./createAnchor-BMaWUfMc.js";
import { t as c } from "./insertElementBefore-CaihVZse.js";
// src/modules/common/ufsgMonsterLink.js
function l(e, n, a) {
	let c = a ?? s({});
	return c.href = `${r}creatures${t}view&creature_id=${n}`, c.target = "_blank", o(c, () => i(e, "Ufsg link")), c;
}
function u(t, r) {
	let i = e(n, r.src);
	if (!i) return;
	let o = l(t, i);
	c(o, r), a(o, r);
}
export { l as n, u as t };

//# sourceMappingURL=ufsgMonsterLink-9Bww-DOa.js.map