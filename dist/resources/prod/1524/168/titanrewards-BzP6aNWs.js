import { t as e } from "./getTextTrim-CvXe85fp.js";
import { t } from "./querySelector-C6ReNysW.js";
import { t as n } from "./querySelectorArray-C70U47NF.js";
import { t as r } from "./layout-B2Q1UoM2.js";
// src/modules/guild/titanrewards/titanrewards.js
var i = (t) => Number(e(t).replace(",", "").replace("\xA0TKP", "")), a = (e) => i(e.parentElement.nextElementSibling.nextElementSibling), o = (e) => i(e.parentElement.nextElementSibling.nextElementSibling.nextElementSibling), s = (e) => t("input[type=\"submit\"]", e.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);
function c() {
	if (!r()) return;
	let e = n("img[src*=\"/items/\"]", r()).map((e) => [
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

//# sourceMappingURL=titanrewards-BzP6aNWs.js.map