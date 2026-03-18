import { t as e } from "./regExpFirstCapture-CdTmAP5x.js";
import "./system-De1jBRGa.js";
import "./constants-C54mky4_.js";
import { t } from "./getTextTrim-Wj82yPPN.js";
import { t as n } from "./querySelectorArray-BZbNvND7.js";
import { n as r, r as i } from "./idb-sdcp-8vV.js";
import { n as a } from "./assets-DIyroKYu.js";
import { t as o } from "./closestTd-CSAfmoRl.js";
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

//# sourceMappingURL=storeMoves-D12B0sCt.js.map