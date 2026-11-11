import { n as e } from "./rolldown-runtime-QGRDbDUS.js";
import { t } from "./sendEvent-DdWrU3DL.js";
import { t as n } from "./createInput-x6h3QT7P.js";
import { t as r } from "./createLabel-BRrb6QgO.js";
import { t as i } from "./getElementById-C08-3H-C.js";
import { t as a } from "./insertElementBefore-CaihVZse.js";
import { t as o } from "./on-DfyX3AS4.js";
import { t as s } from "./calf-SqS2SeU4.js";
// src/modules/profile/bio/compressBio.js
var c = /* @__PURE__ */ e({ default: () => f });
function l(e) {
	let r = a(n({
		id: "fshCompressToggle",
		type: "checkbox"
	}), e);
	o(r, "change", () => t("bio", "toggle", s.cmd));
}
function u(e) {
	e.parentNode.classList.add("fshCompressor"), l(e), a(r({
		className: "sendLink",
		htmlFor: "fshCompressToggle"
	}), e);
}
function d(e) {
	let t = getComputedStyle(e);
	return parseInt(t.getPropertyValue("font-size"), 10);
}
function f() {
	let e = i("profile-bio");
	if (!e) return;
	let t = e.parentNode, { style: { display: n } } = t;
	t.style.display = "block", e.clientHeight / d(e) > 10 && u(e), t.style.display = n;
}
export { c as n, f as t };

//# sourceMappingURL=compressBio-sTiFGOCQ.js.map