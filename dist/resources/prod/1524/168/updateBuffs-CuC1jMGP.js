import { t as e } from "./arrayFrom-CKk6qt2j.js";
import { t } from "./createDiv-B84RqGfo.js";
import { t as n } from "./getArrayByTagName-Dyx_AQto.js";
import { t as r } from "./getElementById-C08-3H-C.js";
import { t as i } from "./getTextTrim-CvXe85fp.js";
import { t as a } from "./numberIsNaN-DNn4rI1u.js";
import { t as o } from "./querySelector-C6ReNysW.js";
import { t as s } from "./setTipped-B47iaPSf.js";
// src/modules/common/textNodes.js
function c(e) {
	if (e instanceof Node) return e.nodeType === Node.TEXT_NODE;
}
// src/modules/profile/updateBuffs.js
var l = 98, u = 85, d = 60;
function f(t) {
	return Number(e(r(`stat-${t.toLowerCase()}`).childNodes).filter(c).map(i).join("").split(",").join(""));
}
function p(e, t, n) {
	let r = f(t[3]), i = Math.floor(n * (Number(t[1].replace(/[+%]/g, "")) / 100));
	s(e.dataset.tipped.replace("</center></div>", `<br>Buff Effect: ${String(i)}<br>${t[2]}: ${String(n - i)}&nbsp;&nbsp;${t[3]}: ${String(r + i)}$&`), e);
}
function m(e) {
	let r = t({ innerHTML: e.dataset.tipped }), o = n("b", r).map((e) => i(e)), s = f(o[2]);
	a(s) || p(e, o, s);
}
function h(e) {
	let t = o(`#profileRightColumn img[src$="/${String(e)}.png"]`);
	t && m(t);
}
function g() {
	[
		l,
		u,
		d
	].forEach(h);
}
export { g as default };

//# sourceMappingURL=updateBuffs-CuC1jMGP.js.map