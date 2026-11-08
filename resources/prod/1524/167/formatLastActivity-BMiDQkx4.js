import { t as e } from "./splitTime-DV8R5tbN.js";
import { r as t } from "./now-B3pCBQja.js";
import { t as n } from "./outputFormat-aHxO-pG1.js";
// src/modules/system/formatLastActivity.js
function r(r) {
	let i = e(Math.abs(t() - r));
	return `${n(i[0], " days, ") + n(i[1], " hours, ") + n(i[2], " mins, ") + i[3]} secs`;
}
export { r as t };

//# sourceMappingURL=formatLastActivity-BMiDQkx4.js.map