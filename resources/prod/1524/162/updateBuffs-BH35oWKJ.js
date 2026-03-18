import { t as e } from "./getElementById-PlRCtyBA.js";
import { t } from "./querySelector-qkBBhiGH.js";
import { t as n } from "./arrayFrom-LpiPmbFE.js";
import { t as r } from "./getArrayByTagName-L2qWyNZV.js";
import { t as i } from "./getTextTrim-Wj82yPPN.js";
import { t as a } from "./createDiv-Bb3O54wx.js";
import { t as o } from "./numberIsNaN-D2-MBtSw.js";
import { t as s } from "./setTipped-vR4mu9k3.js";
//#region src/modules/common/textNodes.js
function c(e) {
	if (e instanceof Node) return e.nodeType === Node.TEXT_NODE;
}
//#endregion
//#region src/modules/profile/updateBuffs.js
var l = 98, u = 85, d = 60;
function f(t) {
	return Number(n(e(`stat-${t.toLowerCase()}`).childNodes).filter(c).map(i).join("").split(",").join(""));
}
function p(e, t, n) {
	let r = f(t[3]), i = Math.floor(n * (Number(t[1].replace(/[+%]/g, "")) / 100));
	s(e.dataset.tipped.replace("</center></div>", `<br>Buff Effect: ${String(i)}<br>${t[2]}: ${String(n - i)}&nbsp;&nbsp;${t[3]}: ${String(r + i)}$&`), e);
}
function m(e) {
	let t = r("b", a({ innerHTML: e.dataset.tipped })).map((e) => i(e)), n = f(t[2]);
	o(n) || p(e, t, n);
}
function h(e) {
	let n = t(`#profileRightColumn img[src$="/${String(e)}.png"]`);
	n && m(n);
}
function g() {
	[
		l,
		u,
		d
	].forEach(h);
}
//#endregion
export { g as default };

//# sourceMappingURL=updateBuffs-BH35oWKJ.js.map