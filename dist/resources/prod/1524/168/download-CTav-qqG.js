import { t as e } from "./createAnchor-HiREQnLZ.js";
import { t } from "./clickThis-UHuK6eKQ.js";
import { t as n } from "./insertElement-6ZBKaryO.js";
// src/modules/common/download.js
function r(r, i) {
	let a = URL.createObjectURL(r), o = e({
		download: i,
		href: a,
		style: { display: "none" }
	});
	n(document.body, o), t(o), document.body.removeChild(o), setTimeout(() => {
		URL.revokeObjectURL(a);
	}, 0);
}
export { r as t };

//# sourceMappingURL=download-CTav-qqG.js.map