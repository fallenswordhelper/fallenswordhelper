import { t as e } from "./getElementById-DgC-_E5u.js";
import { Z as t } from "./constants-CIKidKvt.js";
import { t as n } from "./querySelector-8FH1hhUv.js";
import { t as r } from "./sendEvent-DFQy5lFi.js";
import { t as i } from "./getElementsByClassName-Do7Dx9EW.js";
import { t as a } from "./insertElement-C_6uFPNr.js";
import { t as o } from "./clickThis-5GuZiKOQ.js";
import { t as s } from "./onclick-8ZwMJyqI.js";
import { t as c } from "./querySelectorArray-Bdj4peIm.js";
import { t as l } from "./createSpan-DCxGsyWX.js";
import { t as u } from "./insertHtmlBeforeEnd-D5-rjWCh.js";
import { t as d } from "./insertElementAfterBegin-BtRv1I55.js";
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

//# sourceMappingURL=selectAllLink-D1hU_Hf_.js.map