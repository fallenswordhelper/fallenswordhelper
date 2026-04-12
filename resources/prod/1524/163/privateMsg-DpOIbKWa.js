import { t as e } from "./getText-BybFkJV6.js";
import { t } from "./regExpFirstCapture-Bi32xMqS.js";
import { At as n, Nt as r } from "./constants-CIKidKvt.js";
import { t as i } from "./getValue-j5JjE6f3.js";
import { t as a } from "./getUrlParameter-OG9FsMwx.js";
import { t as o } from "./getTextTrim-hYBF-bdh.js";
import { t as s } from "./sendEvent-DFQy5lFi.js";
import { t as c } from "./toLowerCase-8GoRkIKu.js";
import { t as l } from "./onclick-8ZwMJyqI.js";
import { t as u } from "./closestTr-DTXY0qkG.js";
import { t as d } from "./insertHtmlBeforeEnd-D5-rjWCh.js";
import { t as f } from "./csvSplit-COD2h4_n.js";
import { t as p } from "./classPair-ChlFQqxU.js";
import { t as m } from "./getPlayerId-DOaPZMl6.js";
import { t as h } from "./openQuickBuffById-B9fhtNQi.js";
import { t as g } from "./dataRows-BlMmmxmo.js";
import { t as _ } from "./buffObj-Bw3gqrZP.js";
import { n as v, t as y } from "./addLogColoring-B2rIOttn.js";
import { t as b } from "./addLogWidgets-BmbrXnAo.js";
//#region src/modules/logs/privateMsg/getMsg.js
function x(e) {
	return o(u(e).children[3].childNodes[0]);
}
//#endregion
//#region src/modules/logs/privateMsg/parseBuffs.js
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
//#endregion
//#region src/modules/logs/privateMsg/interceptLinks.js
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
//#endregion
//#region src/modules/logs/privateMsg/privateMsg.js
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
//#endregion
export { L as default };

//# sourceMappingURL=privateMsg-DpOIbKWa.js.map