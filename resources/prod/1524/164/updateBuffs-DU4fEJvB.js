import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./querySelector-C6ReNysW.js";
import { t as n } from "./arrayFrom-CKk6qt2j.js";
import { t as r } from "./getArrayByTagName-Dyx_AQto.js";
import { t as i } from "./getTextTrim-CvXe85fp.js";
import { t as a } from "./createDiv-XU2XBEIv.js";
import { t as o } from "./numberIsNaN-DNn4rI1u.js";
import { t as s } from "./setTipped-B47iaPSf.js";
// src/modules/common/textNodes.js
function c(e) {
	if (e instanceof Node) return e.nodeType === Node.TEXT_NODE;
}
// src/modules/profile/updateBuffs.js
var l = 98, u = 85, d = 60;
function f(t) {
	return Number(n(e(`stat-${t.toLowerCase()}`).childNodes).filter(c).map(i).join("").split(",").join(""));
}
function p(e, t, n) {
	let r = f(t[3]), i = Math.floor(n * (Number(t[1].replace(/[+%]/g, "")) / 100));
	s(e.dataset.tipped.replace("</center></div>", `<br>Buff Effect: ${String(i)}<br>${t[2]}: ${String(n - i)}&nbsp;&nbsp;${t[3]}: ${String(r + i)}$&`), e);
}
function m(e) {
	let t = a({ innerHTML: e.dataset.tipped }), n = r("b", t).map((e) => i(e)), s = f(n[2]);
	o(s) || p(e, n, s);
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
export { g as default };

//# sourceMappingURL=updateBuffs-DU4fEJvB.js.map