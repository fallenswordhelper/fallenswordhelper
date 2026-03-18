import { t as e } from "./getElementById-PlRCtyBA.js";
import { t } from "./createDiv-Bb3O54wx.js";
import { t as n } from "./getArrayByClassName-BzDfah40.js";
import { t as r } from "./insertElement-DtUB7uKq.js";
import { t as i } from "./setInnerHtml-ClDKp0Zh.js";
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
	(await import("./quickWear-CMY_UdiR.js")).default(e);
}
//#endregion
export { s as n, c as t };

//# sourceMappingURL=quickwear-CS_RvItM.js.map