import { t as e } from "./dataRows-De29j_4W.js";
import { t } from "./getTextTrim-CvXe85fp.js";
import { t as n } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { At as r, Nt as i } from "./constants-CenxlFMY.js";
import { t as a } from "./getUrlParameter--C3_Eqez.js";
import { t as o } from "./getValue-DMlY7SSn.js";
import { n as s, t as c } from "./addLogColoring-rtKYuT0E.js";
import { t as l } from "./addLogWidgets-D56Wbjzl.js";
import { t as u } from "./sendEvent-DdWrU3DL.js";
import { t as d } from "./classPair-BWJYkZb4.js";
import { t as f } from "./closestTr-BGwSv-6S.js";
import { t as p } from "./getText-BqjgTHLv.js";
import { t as m } from "./onclick-nv-Fl1th.js";
import { t as h } from "./csvSplit-C5BboO-R.js";
import { t as g } from "./getPlayerId-DtQtocY2.js";
import { t as _ } from "./openQuickBuffById-C25RQjPG.js";
import { t as v } from "./regExpFirstCapture-D_QeHFEY.js";
import { t as y } from "./toLowerCase-Cpm0Ikhj.js";
import { t as b } from "./buffObj-BqB_LPan.js";
// src/modules/logs/privateMsg/getMsg.js
function x(e) {
	return t(f(e).children[3].childNodes[0]);
}
// src/modules/logs/privateMsg/parseBuffs.js
var S = (e, t) => h(t.nicks).includes(y(e));
function C(e) {
	let t = b.find((t) => S(e, t));
	if (t) return t.id;
}
var w = (e) => h(e).map(C).filter((e) => e).join(";");
function T(e) {
	let t = v(/`~(?<buffs>.*)~`/, x(e));
	return t ? w(t) : "";
}
var E = (e) => g(f(e).children[2].children[0].href);
function D(e) {
	let { target: t } = e;
	_(E(t), T(t)), u("privateMsg", "Buff");
}
// src/modules/logs/privateMsg/interceptLinks.js
var O = (e) => p(f(e).children[2].children[0]);
function k(e) {
	let t = x(e);
	return t.length > 140 ? `${t.substring(0, 140)}...` : t;
}
function A(e) {
	if (!o("enableChatParsing")) return;
	let { target: t } = e;
	window.openQuickMsgDialog(O(t), "", k(t)), e.preventDefault(), u("privateMsg", "parseReply");
}
var j = [
	["pmBuffBtn", D],
	["fa-reply", A],
	["pmTradeUrl", () => u("privateMsg", "Trade")],
	["pmSecureUrl", () => u("privateMsg", "ST")],
	["pmAttackUrl", () => u("privateMsg", "Attack")],
	["pmIgnoreUrl", () => u("privateMsg", "Ignore")]
];
function M(e) {
	let { target: t } = e, n = j.find((e) => d(t, e));
	n && n[1](e);
}
function N(e) {
	m(e, M);
}
// src/modules/logs/privateMsg/privateMsg.js
var P = (e) => [t(e.children[2]), e.children[3]];
function F(t) {
	o("privateMsgButtons") && e(t, 6, 0).map(P).forEach(([e, t]) => {
		n(t, `&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${i + e}">Send</a> | <a class="pmSecureUrl" href="${r + e}">Trade</a> ]`);
	});
}
function I() {
	let e = s();
	e && (F(e), l(1), N(e));
}
function L() {
	a("type") === "1" ? (c("PrivateMsg", 1, 6), I()) : c("OutBox", 1, 4);
}
export { L as default };

//# sourceMappingURL=privateMsg-BNmJ2asI.js.map