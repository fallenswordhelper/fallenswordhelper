import { t as e } from "./closestTd-qGJKTnGX.js";
import { t } from "./getTextTrim-CvXe85fp.js";
import { t as n } from "./querySelectorArray-C70U47NF.js";
import { t as r } from "./regExpFirstCapture-D_QeHFEY.js";
import { n as i, r as a } from "./idb-D8xqEbs-.js";
import { n as o } from "./assets-_K5Cj5ar.js";
// src/modules/arena/storeMoves.js
function s(n) {
	return r(/(?<cnt>\d)$/, t(e(n)));
}
function c(e, t) {
	let n = r(/\/(?<id>\d{1,2})\.png/, t.src);
	return e[n] = Number(s(t)), e;
}
function l(e) {
	let t = e || {};
	t.moves = n("#pCC img[vspace=\"4\"]").slice(1).reduce(c, {}), a(o, t);
}
async function u() {
	l(await i(o));
}
export { u as default };

//# sourceMappingURL=storeMoves-CqqN97t9.js.map