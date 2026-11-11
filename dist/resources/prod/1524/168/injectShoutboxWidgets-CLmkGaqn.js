import { t as e } from "./sendEvent-DdWrU3DL.js";
import { t } from "./getElementById-C08-3H-C.js";
import { t as n } from "./on-DfyX3AS4.js";
import { t as r } from "./partial-Bo20zBni.js";
import { t as i } from "./setInnerHtml-f0MFRJnQ.js";
// src/modules/news/injectShoutboxWidgets.js
var a = 0, o = 0;
function s(t) {
	e("Shoutbox Preview", t === 150 ? "shoutbox" : "fsbox");
	let n = a.value, r = n.length;
	r > t && (n = n.substring(0, t), a.value = n, r = t), o ||= a.parentNode.parentNode.parentNode.parentNode.insertRow().insertCell(), i(`<table class="sbpTbl"><tbody><tr><td class="sbpHdr">Preview (${r}/${t} characters)</td></tr><tr><td class="sbpMsg"><span>${n}</span></td></tr></tbody></table>`, o);
}
function c(e) {
	a = t("textInputBox"), n(a, "keyup", r(s, e));
}
export { c as t };

//# sourceMappingURL=injectShoutboxWidgets-CLmkGaqn.js.map