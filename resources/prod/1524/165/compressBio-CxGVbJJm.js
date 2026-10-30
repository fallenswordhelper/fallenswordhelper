import { r as e } from "./sendException-DStaKIsB.js";
import { t } from "./getElementById-C08-3H-C.js";
import { t as n } from "./on-DfyX3AS4.js";
import { t as r } from "./calf-SqS2SeU4.js";
import { t as i } from "./sendEvent-DkxfZozg.js";
import { t as a } from "./insertElementBefore-CaihVZse.js";
import { t as o } from "./createInput-DPgk9mYC.js";
import { t as s } from "./createLabel-DTCDsteI.js";
// src/modules/profile/bio/compressBio.js
var c = /* @__PURE__ */ e({ default: () => f });
function l(e) {
	let t = a(o({
		id: "fshCompressToggle",
		type: "checkbox"
	}), e);
	n(t, "change", () => i("bio", "toggle", r.cmd));
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
export { c as n, f as t };

//# sourceMappingURL=compressBio-CxGVbJJm.js.map