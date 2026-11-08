import { t as e } from "./setInnerHtml-f0MFRJnQ.js";
import { t } from "./getValue-vrUqpo0a.js";
import { t as n } from "./batch-B3DxuTgO.js";
import { t as r } from "./querySelectorArray-C70U47NF.js";
import { t as i } from "./lastActivity-CKrnHdgN.js";
import { t as a } from "./onlineDot-B-a-eWFn.js";
// src/modules/common/getPlayers.js
function o() {
	return r("#pCC a[data-tipped*=\"Last Activity\"]");
}
// src/modules/common/colouredDots.js
function s(t) {
	let { day: n, hour: r, min: o } = i(t.dataset.tipped);
	e(a({
		min: o,
		hour: r,
		day: n
	}), t.parentNode.previousElementSibling);
}
function c() {
	t("enhanceOnlineDots") && n([
		3,
		o(),
		0,
		s
	]);
}
export { o as n, c as t };

//# sourceMappingURL=colouredDots-DU9QBFC6.js.map