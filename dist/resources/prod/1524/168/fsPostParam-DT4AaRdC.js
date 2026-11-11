import { t as e } from "./regExpFirstCapture-D_QeHFEY.js";
// src/modules/common/fsPostParam.js
function t(t, n) {
	let r = t.dataset.fsPost;
	if (r) {
		let e = new URL(r, window.location.href).searchParams.get(n);
		if (/^\d+$/.test(e ?? "")) return e;
	}
	return e(RegExp(`${n}=(?<value>\\d+)`), t.getAttribute("onclick"));
}
export { t };

//# sourceMappingURL=fsPostParam-DT4AaRdC.js.map