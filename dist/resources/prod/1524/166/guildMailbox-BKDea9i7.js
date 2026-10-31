import { t as e } from "./querySelector-C6ReNysW.js";
import { t } from "./retryAjax-Cx5Fvrfg.js";
import { t as n } from "./getArrayByTagName-Dyx_AQto.js";
import { t as r } from "./layout-B2Q1UoM2.js";
import { t as i } from "./sendEvent-yx1DwCDA.js";
import { t as a } from "./setInnerHtml-f0MFRJnQ.js";
import { t as o } from "./clickThis-UHuK6eKQ.js";
import { t as s } from "./onclick-nv-Fl1th.js";
import { t as c } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as l } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as u } from "./InfoBoxFrom-D0WOlqZP.js";
import { t as d } from "./closestTable-B73T3rIi.js";
import { t as f } from "./dialog-CyQtsKCT.js";
// src/modules/mailbox/guildMailbox.js
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
	let n = p(await t(e));
	return f(n);
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
export { _ as default };

//# sourceMappingURL=guildMailbox-BKDea9i7.js.map