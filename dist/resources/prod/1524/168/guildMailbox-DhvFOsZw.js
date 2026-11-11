import { t as e } from "./dialog-CyQtsKCT.js";
import { t } from "./retryAjax-Cx5Fvrfg.js";
import { t as n } from "./sendEvent-DdWrU3DL.js";
import { t as r } from "./clickThis-UHuK6eKQ.js";
import { t as i } from "./closestTable-B73T3rIi.js";
import { t as a } from "./getArrayByTagName-Dyx_AQto.js";
import { t as o } from "./InfoBoxFrom-D0WOlqZP.js";
import { t as s } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as c } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as l } from "./onclick-nv-Fl1th.js";
import { t as u } from "./querySelector-C6ReNysW.js";
import { t as d } from "./setInnerHtml-f0MFRJnQ.js";
import { t as f } from "./layout-B2Q1UoM2.js";
// src/modules/mailbox/guildMailbox.js
function p(e) {
	let t = o(e), n = {
		r: 1,
		m: t
	};
	return t === "Item was transferred to the guild store!" && (n = {
		r: 0,
		m: ""
	}), n;
}
async function m(n) {
	let r = p(await t(n));
	return e(r);
}
function h(e, t) {
	t.r === 0 && d("<span class=\"fshGreen\">Taken</span>", i(e).nextElementSibling.rows[0].cells[0]);
}
async function g(e) {
	let { target: t } = e;
	if (t.tagName === "IMG") {
		e.preventDefault(), n("guildMailbox", "Take Item");
		let r = t.parentNode.href;
		h(t, await m(r));
	}
	t.className === "sendLink" && a("img", f()).forEach(r);
}
function _() {
	c() || (l(f(), g), s(u("#pCC td[height=\"25\"]"), "<span class=\"sendLink\">Take All</span>"));
}
export { _ as default };

//# sourceMappingURL=guildMailbox-DhvFOsZw.js.map