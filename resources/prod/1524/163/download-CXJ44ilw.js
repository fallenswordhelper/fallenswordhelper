import { t as e } from "./insertElement-C_6uFPNr.js";
import { t } from "./clickThis-5GuZiKOQ.js";
import { t as n } from "./createAnchor-DIf1F0uc.js";
//#region src/modules/common/download.js
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
//#endregion
export { r as t };

//# sourceMappingURL=download-CXJ44ilw.js.map