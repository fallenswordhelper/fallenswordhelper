import { t as e } from "./getValue-CCThXEzy.js";
import { t } from "./setInnerHtml-ClDKp0Zh.js";
import { t as n } from "./querySelectorArray-BZbNvND7.js";
import { t as r } from "./lastActivity-CUAo9jGH.js";
import { t as i } from "./onlineDot-CXb1YqvF.js";
import { t as a } from "./batch-D9tKs5xx.js";
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

//# sourceMappingURL=colouredDots-xudUjxga.js.map