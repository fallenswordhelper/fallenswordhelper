import { t as e } from "./querySelector-8FH1hhUv.js";
import { t } from "./getTextTrim-hYBF-bdh.js";
import { t as n } from "./layout-6CPY-bfq.js";
import { t as r } from "./querySelectorArray-Bdj4peIm.js";
//#region src/modules/guild/titanrewards/titanrewards.js
var i = (e) => Number(t(e).replace(",", "").replace("\xA0TKP", "")), a = (e) => i(e.parentElement.nextElementSibling.nextElementSibling), o = (e) => i(e.parentElement.nextElementSibling.nextElementSibling.nextElementSibling), s = (t) => e("input[type=\"submit\"]", t.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);
function c() {
	if (!n()) return;
	let e = r("img[src*=\"/items/\"]", n()).map((e) => [
		e,
		a(e),
		o(e),
		s(e)
	]);
	e.filter(([, e, t]) => t >= e).forEach(([, , , e]) => {
		e.classList.add("green", "awesome");
	}), e.filter(([, e, t]) => t < e).forEach(([, , , e]) => {
		e.disabled = !0;
	});
}
//#endregion
export { c as default };

//# sourceMappingURL=titanrewards-BLNDJsNF.js.map