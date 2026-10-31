import { t as e } from "./querySelector-C6ReNysW.js";
import { t } from "./getTextTrim-CvXe85fp.js";
import { t as n } from "./layout-B2Q1UoM2.js";
import { t as r } from "./querySelectorArray-C70U47NF.js";
// src/modules/guild/titanrewards/titanrewards.js
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
export { c as default };

//# sourceMappingURL=titanrewards-CZfCUQ6S.js.map