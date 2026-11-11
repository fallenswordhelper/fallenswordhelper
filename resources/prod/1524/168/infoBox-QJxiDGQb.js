import { t as e } from "./getElementById-C08-3H-C.js";
// src/modules/common/infoBox.js
function t(t) {
	let n = e("info-msg", t);
	if (n) {
		let e = n.innerHTML;
		return e ? e.replace(/<br.*/, "") : "";
	}
}
export { t };

//# sourceMappingURL=infoBox-QJxiDGQb.js.map