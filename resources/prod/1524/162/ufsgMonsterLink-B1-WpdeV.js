import { t as e } from "./regExpFirstCapture-CdTmAP5x.js";
import { G as t, mt as n, nt as r } from "./constants-C54mky4_.js";
import { t as i } from "./sendEvent-bwvhd4A-.js";
import { t as a } from "./insertElement-DtUB7uKq.js";
import { t as o } from "./onclick-9iRduoOH.js";
import { t as s } from "./createAnchor-DH9dG-LN.js";
import { t as c } from "./insertElementBefore-B-ZBDHwR.js";
//#region src/modules/common/ufsgMonsterLink.js
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
//#endregion
export { l as n, u as t };

//# sourceMappingURL=ufsgMonsterLink-B1-WpdeV.js.map