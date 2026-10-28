import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./createDiv-XU2XBEIv.js";
import { t as n } from "./getArrayByClassName-RPqCUmVz.js";
import { t as r } from "./insertElement-6ZBKaryO.js";
import { t as i } from "./setInnerHtml-f0MFRJnQ.js";
// src/modules/chrome/jQueryDialog/jQueryDialog.js
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
// src/modules/chrome/pageSwitcher/loader/quickwear.js
async function c(e) {
	(await import("./quickWear-DRW2RmNM.js")).default(e);
}
export { s as n, c as t };

//# sourceMappingURL=quickwear-CI6aS9Jl.js.map