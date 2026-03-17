import { t as e } from "./querySelector-qkBBhiGH.js";
import { t } from "./getTextTrim-Wj82yPPN.js";
import { t as n } from "./layout-Bapa39KM.js";
import { t as r } from "./querySelectorArray-BZbNvND7.js";
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

//# sourceMappingURL=titanrewards-DDFofKw3.js.map