import "./system-De1jBRGa.js";
import "./constants-C54mky4_.js";
import { t as e } from "./getArrayByTagName-L2qWyNZV.js";
import { t } from "./partial-goh6HOls.js";
import { t as n } from "./layout-Bapa39KM.js";
import "./indexAjax-BXHvJ2Y7.js";
import "./idb-sdcp-8vV.js";
import "./indexAjaxJson-DuDMsKRC.js";
import "./cmdExport-C_7TLPs-.js";
import "./profile-BWfgrKDA.js";
import { t as r } from "./jQueryNotPresent-oTtW_9Ua.js";
import { t as i } from "./insertHtmlBeforeEnd-CRJWaYJw.js";
import { t as a } from "./myStats-Basm1Ltz.js";
import { t as o } from "./reduceBuffArray-DIJQ6bxQ.js";
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

//# sourceMappingURL=injectRPUpgrades-ub9lSc4w.js.map