import { t as e } from "./insertElement-DtUB7uKq.js";
import { t } from "./clickThis-CZdkFZtj.js";
import { t as n } from "./createAnchor-DH9dG-LN.js";
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

//# sourceMappingURL=download-CPrODGU3.js.map