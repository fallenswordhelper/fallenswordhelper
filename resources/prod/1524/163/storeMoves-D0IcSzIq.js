import { t as e } from "./regExpFirstCapture-Bi32xMqS.js";
import { t } from "./getTextTrim-hYBF-bdh.js";
import { t as n } from "./querySelectorArray-Bdj4peIm.js";
import { n as r, r as i } from "./idb-BvD4EIHy.js";
import { n as a } from "./assets-BGkCJRcO.js";
import { t as o } from "./closestTd-B6S4IM7U.js";
//#region src/modules/arena/storeMoves.js
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
//#endregion
export { u as default };

//# sourceMappingURL=storeMoves-D0IcSzIq.js.map