import { t as e } from "./querySelector-8FH1hhUv.js";
import { t } from "./retryAjax-oA4ZKObL.js";
import { t as n } from "./getArrayByTagName-QRr9ypcm.js";
import { t as r } from "./layout-6CPY-bfq.js";
import { t as i } from "./sendEvent-DFQy5lFi.js";
import { t as a } from "./setInnerHtml-Dh9y9Se-.js";
import { t as o } from "./clickThis-5GuZiKOQ.js";
import { t as s } from "./onclick-8ZwMJyqI.js";
import { t as c } from "./jQueryNotPresent-UT8-ZycH.js";
import { t as l } from "./insertHtmlBeforeEnd-D5-rjWCh.js";
import { t as u } from "./InfoBoxFrom-Dm8fMSko.js";
import { t as d } from "./closestTable-B_Km1mKH.js";
import { t as f } from "./dialog-BEalBxf7.js";
//#region src/modules/mailbox/guildMailbox.js
function p(e) {
	let t = u(e), n = {
		r: 1,
		m: t
	};
	return t === "Item was transferred to the guild store!" && (n = {
		r: 0,
		m: ""
	}), n;
}
async function m(e) {
	return f(p(await t(e)));
}
function h(e, t) {
	t.r === 0 && a("<span class=\"fshGreen\">Taken</span>", d(e).nextElementSibling.rows[0].cells[0]);
}
async function g(e) {
	let { target: t } = e;
	if (t.tagName === "IMG") {
		e.preventDefault(), i("guildMailbox", "Take Item");
		let n = t.parentNode.href;
		h(t, await m(n));
	}
	t.className === "sendLink" && n("img", r()).forEach(o);
}
function _() {
	c() || (s(r(), g), l(e("#pCC td[height=\"25\"]"), "<span class=\"sendLink\">Take All</span>"));
}
//#endregion
export { _ as default };

//# sourceMappingURL=guildMailbox-y1ZWssxw.js.map