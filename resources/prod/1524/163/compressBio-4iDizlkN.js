import { r as e } from "./sendException-ezSEAahU.js";
import { t } from "./getElementById-DgC-_E5u.js";
import { t as n } from "./on-afIPYx-0.js";
import { t as r } from "./calf-DxCOTxVt.js";
import { t as i } from "./sendEvent-DFQy5lFi.js";
import { t as a } from "./insertElementBefore-Bwz7Hji8.js";
import { t as o } from "./createInput-dXzC1oHv.js";
import { t as s } from "./createLabel-BGknsCKB.js";
//#region src/modules/profile/bio/compressBio.js
var c = /* @__PURE__ */ e({ default: () => f });
function l(e) {
	n(a(o({
		id: "fshCompressToggle",
		type: "checkbox"
	}), e), "change", () => i("bio", "toggle", r.cmd));
}
function u(e) {
	e.parentNode.classList.add("fshCompressor"), l(e), a(s({
		className: "sendLink",
		htmlFor: "fshCompressToggle"
	}), e);
}
function d(e) {
	let t = getComputedStyle(e);
	return parseInt(t.getPropertyValue("font-size"), 10);
}
function f() {
	let e = t("profile-bio");
	if (!e) return;
	let n = e.parentNode, { style: { display: r } } = n;
	n.style.display = "block", e.clientHeight / d(e) > 10 && u(e), n.style.display = r;
}
//#endregion
export { c as n, f as t };

//# sourceMappingURL=compressBio-4iDizlkN.js.map