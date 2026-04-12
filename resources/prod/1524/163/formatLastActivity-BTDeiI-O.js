import { r as e } from "./now-CA_NVGr7.js";
import { t } from "./splitTime-uPKhYvFB.js";
import { t as n } from "./outputFormat-BzWFN-bv.js";
//#region src/modules/system/formatLastActivity.js
function r(r) {
	let i = t(Math.abs(e() - r));
	return `${n(i[0], " days, ") + n(i[1], " hours, ") + n(i[2], " mins, ") + i[3]} secs`;
}
//#endregion
export { r as t };

//# sourceMappingURL=formatLastActivity-BTDeiI-O.js.map