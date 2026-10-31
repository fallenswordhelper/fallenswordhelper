import { t as e } from "./insertElement-6ZBKaryO.js";
import { t } from "./clickThis-UHuK6eKQ.js";
import { t as n } from "./createAnchor-BMaWUfMc.js";
// src/modules/common/download.js
function r(r, i) {
	let a = URL.createObjectURL(r), o = n({
		download: i,
		href: a,
		style: { display: "none" }
	});
	e(document.body, o), t(o), document.body.removeChild(o), setTimeout(() => {
		URL.revokeObjectURL(a);
	}, 0);
}
export { r as t };

//# sourceMappingURL=download-DtnC4WBW.js.map