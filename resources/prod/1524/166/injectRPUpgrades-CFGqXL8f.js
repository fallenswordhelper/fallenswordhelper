import { t as e } from "./getArrayByTagName-Dyx_AQto.js";
import { t } from "./partial-Bo20zBni.js";
import { t as n } from "./layout-B2Q1UoM2.js";
import { t as r } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as i } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as a } from "./myStats-HD1oSI27.js";
import { t as o } from "./reduceBuffArray-DOTIg2OP.js";
// src/modules/guild/injectRPUpgrades.js
var s = />(?<a>[^>(]+) \(Level (?<b>\d{1,4})/g, c = (e) => `<br><span class="fshRed fshNoWrap">${e[1]} ${e[2]} active</span>`;
function l(e, t) {
	let { tipped: n } = t.dataset, r = [...n.matchAll(s)].filter((t) => e[t[1]] === Number(t[2]));
	r.length > 0 && i(t.parentNode, r.map(c).join(""));
}
function u(r) {
	let i = n().children[0].rows[9];
	i && e("a", i.cells[0].children[0]).forEach(t(l, r));
}
function d(e) {
	e._skills?.length && u(o(e._skills));
}
async function f() {
	r() || d(await a(!0));
}
export { f as default };

//# sourceMappingURL=injectRPUpgrades-CFGqXL8f.js.map