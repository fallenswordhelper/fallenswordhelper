import { r as e } from "./sendException-s1csWDQs.js";
import { t } from "./getElementById-PlRCtyBA.js";
import { t as n } from "./on-f-HmOL0n.js";
import { t as r } from "./calf-OM11NjAU.js";
import { t as i } from "./sendEvent-bwvhd4A-.js";
import { t as a } from "./insertElementBefore-B-ZBDHwR.js";
import { t as o } from "./createInput-B2lyiYPw.js";
import { t as s } from "./createLabel-CuDkB_vZ.js";
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

//# sourceMappingURL=compressBio-7Fexs66X.js.map