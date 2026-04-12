import { t as e } from "./getArrayByTagName-QRr9ypcm.js";
import { t } from "./partial-CYzPXpZP.js";
import { t as n } from "./layout-6CPY-bfq.js";
import { t as r } from "./jQueryNotPresent-UT8-ZycH.js";
import { t as i } from "./insertHtmlBeforeEnd-D5-rjWCh.js";
import { t as a } from "./myStats-ZLRBhQB-.js";
import { t as o } from "./reduceBuffArray-V6ycMNHc.js";
//#region src/modules/guild/injectRPUpgrades.js
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
//#endregion
export { f as default };

//# sourceMappingURL=injectRPUpgrades-Crlu-fsQ.js.map