import { t as e } from "./getText-BqjgTHLv.js";
import { t } from "./regExpFirstCapture-D_QeHFEY.js";
import { At as n, Nt as r } from "./constants-CenxlFMY.js";
import { t as i } from "./getValue-Aap0zlcO.js";
import { t as a } from "./getUrlParameter-DQUJPuXf.js";
import { t as o } from "./getTextTrim-CvXe85fp.js";
import { t as s } from "./sendEvent-DkxfZozg.js";
import { t as c } from "./toLowerCase-Cpm0Ikhj.js";
import { t as l } from "./onclick-nv-Fl1th.js";
import { t as u } from "./closestTr-BGwSv-6S.js";
import { t as d } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as f } from "./csvSplit-C5BboO-R.js";
import { t as p } from "./classPair-BWJYkZb4.js";
import { t as m } from "./getPlayerId-DtAI89Cf.js";
import { t as h } from "./openQuickBuffById-B66eBgWb.js";
import { t as g } from "./dataRows-De29j_4W.js";
import { t as _ } from "./buffObj-BqB_LPan.js";
import { n as v, t as y } from "./addLogColoring-vS8AaFG2.js";
import { t as b } from "./addLogWidgets-DjwK0F_A.js";
// src/modules/logs/privateMsg/getMsg.js
function x(e) {
	return o(u(e).children[3].childNodes[0]);
}
// src/modules/logs/privateMsg/parseBuffs.js
var S = (e, t) => f(t.nicks).includes(c(e));
function C(e) {
	let t = _.find((t) => S(e, t));
	if (t) return t.id;
}
var w = (e) => f(e).map(C).filter((e) => e).join(";");
function T(e) {
	let n = t(/`~(?<buffs>.*)~`/, x(e));
	return n ? w(n) : "";
}
var E = (e) => m(u(e).children[2].children[0].href);
function D(e) {
	let { target: t } = e;
	h(E(t), T(t)), s("privateMsg", "Buff");
}
// src/modules/logs/privateMsg/interceptLinks.js
var O = (t) => e(u(t).children[2].children[0]);
function k(e) {
	let t = x(e);
	return t.length > 140 ? `${t.substring(0, 140)}...` : t;
}
function A(e) {
	if (!i("enableChatParsing")) return;
	let { target: t } = e;
	window.openQuickMsgDialog(O(t), "", k(t)), e.preventDefault(), s("privateMsg", "parseReply");
}
var j = [
	["pmBuffBtn", D],
	["fa-reply", A],
	["pmTradeUrl", () => s("privateMsg", "Trade")],
	["pmSecureUrl", () => s("privateMsg", "ST")],
	["pmAttackUrl", () => s("privateMsg", "Attack")],
	["pmIgnoreUrl", () => s("privateMsg", "Ignore")]
];
function M(e) {
	let { target: t } = e, n = j.find((e) => p(t, e));
	n && n[1](e);
}
function N(e) {
	l(e, M);
}
// src/modules/logs/privateMsg/privateMsg.js
var P = (e) => [o(e.children[2]), e.children[3]];
function F(e) {
	i("privateMsgButtons") && g(e, 6, 0).map(P).forEach(([e, t]) => {
		d(t, `&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${r + e}">Send</a> | <a class="pmSecureUrl" href="${n + e}">Trade</a> ]`);
	});
}
function I() {
	let e = v();
	e && (F(e), b(1), N(e));
}
function L() {
	a("type") === "1" ? (y("PrivateMsg", 1, 6), I()) : y("OutBox", 1, 4);
}
export { L as default };

//# sourceMappingURL=privateMsg-x43Eo7wh.js.map