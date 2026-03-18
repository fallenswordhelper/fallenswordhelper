import { t as e } from "./getElementById-PlRCtyBA.js";
import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import { Z as t } from "./constants-C54mky4_.js";
import { t as n } from "./querySelector-qkBBhiGH.js";
import { t as r } from "./sendEvent-bwvhd4A-.js";
import { t as i } from "./getElementsByClassName-CXrxjAkB.js";
import { t as a } from "./insertElement-DtUB7uKq.js";
import { t as o } from "./clickThis-CZdkFZtj.js";
import { t as s } from "./onclick-9iRduoOH.js";
import { t as c } from "./querySelectorArray-BZbNvND7.js";
import { t as l } from "./createSpan-DpSRnwEQ.js";
import { t as u } from "./insertHtmlBeforeEnd-CRJWaYJw.js";
import { t as d } from "./insertElementAfterBegin-D7gF3V2Y.js";
//#region src/modules/profile/ifSelf/selectAllLink.js
function f() {
	r("profile", "select all");
	let t = i("tab-selected", e("backpack_tabs"))[0]?.getAttribute("data-type"), n = c(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackItem`);
	if (!n.length) return;
	let a = c(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackCheckbox:not(:disabled)`);
	a.length > 0 && (n = a), n.forEach(o);
}
function p() {
	let e = n(`#profileRightColumn a[href="${t}"]`);
	if (!e) return;
	let r = l({
		className: "sendLink",
		textContent: "All"
	});
	s(r, f);
	let i = l({ innerHTML: "[&nbsp;" });
	a(i, r), u(i, "&nbsp;]&nbsp;"), d(e.parentNode, i);
}
//#endregion
export { p as default };

//# sourceMappingURL=selectAllLink-BgYruP9h.js.map