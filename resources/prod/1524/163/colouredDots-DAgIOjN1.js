import { t as e } from "./getValue-j5JjE6f3.js";
import { t } from "./setInnerHtml-Dh9y9Se-.js";
import { t as n } from "./querySelectorArray-Bdj4peIm.js";
import { t as r } from "./lastActivity-DUD_rfoH.js";
import { t as i } from "./onlineDot-D0WTzhgS.js";
import { t as a } from "./batch-Bv-NXhgk.js";
//#region src/modules/common/getPlayers.js
function o() {
	return n("#pCC a[data-tipped*=\"Last Activity\"]");
}
//#endregion
//#region src/modules/common/colouredDots.js
function s(e) {
	let { day: n, hour: a, min: o } = r(e.dataset.tipped);
	t(i({
		min: o,
		hour: a,
		day: n
	}), e.parentNode.previousElementSibling);
}
function c() {
	e("enhanceOnlineDots") && a([
		3,
		o(),
		0,
		s
	]);
}
//#endregion
export { o as n, c as t };

//# sourceMappingURL=colouredDots-DAgIOjN1.js.map