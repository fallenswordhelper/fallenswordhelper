import { t as e } from "./regExpFirstCapture-D_QeHFEY.js";
import { t } from "./getTextTrim-CvXe85fp.js";
import { t as n } from "./querySelectorArray-C70U47NF.js";
import { n as r, r as i } from "./idb-D8xqEbs-.js";
import { n as a } from "./assets-_K5Cj5ar.js";
import { t as o } from "./closestTd-qGJKTnGX.js";
// src/modules/arena/storeMoves.js
function s(n) {
	return e(/(?<cnt>\d)$/, t(o(n)));
}
function c(t, n) {
	let r = e(/\/(?<id>\d{1,2})\.png/, n.src);
	return t[r] = Number(s(n)), t;
}
function l(e) {
	let t = e || {};
	t.moves = n("#pCC img[vspace=\"4\"]").slice(1).reduce(c, {}), i(a, t);
}
async function u() {
	l(await r(a));
}
export { u as default };

//# sourceMappingURL=storeMoves-DT7pss_6.js.map