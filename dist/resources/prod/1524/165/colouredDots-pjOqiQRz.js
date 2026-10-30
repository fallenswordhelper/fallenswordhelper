import { t as e } from "./getValue-Aap0zlcO.js";
import { t } from "./setInnerHtml-f0MFRJnQ.js";
import { t as n } from "./querySelectorArray-C70U47NF.js";
import { t as r } from "./lastActivity-DkuqQAux.js";
import { t as i } from "./onlineDot-B-a-eWFn.js";
import { t as a } from "./batch-D3pHvEAg.js";
// src/modules/common/getPlayers.js
function o() {
	return n("#pCC a[data-tipped*=\"Last Activity\"]");
}
// src/modules/common/colouredDots.js
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
export { o as n, c as t };

//# sourceMappingURL=colouredDots-pjOqiQRz.js.map