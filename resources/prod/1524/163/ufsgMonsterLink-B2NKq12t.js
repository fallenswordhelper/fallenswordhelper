import { t as e } from "./regExpFirstCapture-Bi32xMqS.js";
import { G as t, mt as n, nt as r } from "./constants-CIKidKvt.js";
import { t as i } from "./sendEvent-DFQy5lFi.js";
import { t as a } from "./insertElement-C_6uFPNr.js";
import { t as o } from "./onclick-8ZwMJyqI.js";
import { t as s } from "./createAnchor-DIf1F0uc.js";
import { t as c } from "./insertElementBefore-Bwz7Hji8.js";
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

//# sourceMappingURL=ufsgMonsterLink-B2NKq12t.js.map