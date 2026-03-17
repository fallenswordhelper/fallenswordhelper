import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import "./constants-C54mky4_.js";
import { t as e } from "./querySelector-qkBBhiGH.js";
import { t } from "./retryAjax-p9geDMSY.js";
import { t as n } from "./getArrayByTagName-L2qWyNZV.js";
import { t as r } from "./layout-Bapa39KM.js";
import { t as i } from "./sendEvent-bwvhd4A-.js";
import { t as a } from "./setInnerHtml-ClDKp0Zh.js";
import { t as o } from "./clickThis-CZdkFZtj.js";
import { t as s } from "./onclick-9iRduoOH.js";
import { t as c } from "./jQueryNotPresent-oTtW_9Ua.js";
import { t as l } from "./insertHtmlBeforeEnd-CRJWaYJw.js";
import { t as u } from "./InfoBoxFrom-D3pIE4NF.js";
import { t as d } from "./closestTable-Dfg3mstY.js";
import { t as f } from "./dialog-D1zrc02U.js";
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

//# sourceMappingURL=guildMailbox-svwB_V-x.js.map