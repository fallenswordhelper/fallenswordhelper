import { t as e } from "./getElementById-DgC-_E5u.js";
import { t } from "./createDiv-CH3rNL4c.js";
import { t as n } from "./getArrayByClassName-9tzft1UU.js";
import { t as r } from "./insertElement-C_6uFPNr.js";
import { t as i } from "./setInnerHtml-Dh9y9Se-.js";
//#region src/modules/chrome/jQueryDialog/jQueryDialog.js
var a = {
	id: "content",
	style: { display: "none" }
}, o = {
	width: 640,
	modal: !0,
	position: {
		my: "top",
		at: "top",
		offset: "0 60",
		collision: "none"
	},
	resizable: !1
};
function s(s) {
	let c = e("content");
	c ? i("", c) : (c = t(a), r(document.body, c)), $(c).dialog(o), n("ui-dialog-titlebar-close").forEach((e) => e.blur()), s(c);
}
//#endregion
//#region src/modules/chrome/pageSwitcher/loader/quickwear.js
async function c(e) {
	(await import("./quickWear-D4Iod5T4.js")).default(e);
}
//#endregion
export { s as n, c as t };

//# sourceMappingURL=quickwear-QDyrba2y.js.map