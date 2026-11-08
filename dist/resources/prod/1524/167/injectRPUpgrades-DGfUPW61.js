import { t as e } from "./myStats-BWnLkvy4.js";
import { t } from "./getArrayByTagName-Dyx_AQto.js";
import { t as n } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as r } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as i } from "./partial-Bo20zBni.js";
import { t as a } from "./reduceBuffArray-DOTIg2OP.js";
import { t as o } from "./layout-B2Q1UoM2.js";
// src/modules/guild/injectRPUpgrades.js
var s = />(?<a>[^>(]+) \(Level (?<b>\d{1,4})/g, c = (e) => `<br><span class="fshRed fshNoWrap">${e[1]} ${e[2]} active</span>`;
function l(e, t) {
	let { tipped: r } = t.dataset, i = [...r.matchAll(s)].filter((t) => e[t[1]] === Number(t[2]));
	i.length > 0 && n(t.parentNode, i.map(c).join(""));
}
function u(e) {
	let n = o().children[0].rows[9];
	n && t("a", n.cells[0].children[0]).forEach(i(l, e));
}
function d(e) {
	e._skills?.length && u(a(e._skills));
}
async function f() {
	r() || d(await e(!0));
}
export { f as default };

//# sourceMappingURL=injectRPUpgrades-DGfUPW61.js.map