import "./sendException-s1csWDQs.js";
import { t as e } from "./getText-rCJDurvG.js";
import { t } from "./regExpFirstCapture-CdTmAP5x.js";
import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import { At as n, Nt as r } from "./constants-C54mky4_.js";
import { t as i } from "./getValue-CCThXEzy.js";
import "./setValue-Cb0PYC7t.js";
import { t as a } from "./getUrlParameter-qxOiipWG.js";
import { t as o } from "./getTextTrim-Wj82yPPN.js";
import { t as s } from "./sendEvent-bwvhd4A-.js";
import "./indexAjax-BXHvJ2Y7.js";
import "./indexAjaxData-CqOTihOX.js";
import { t as c } from "./toLowerCase-uMYD5EVv.js";
import { t as l } from "./onclick-9iRduoOH.js";
import { t as u } from "./closestTr-C0LB9ALA.js";
import "./idb-sdcp-8vV.js";
import "./indexAjaxJson-DuDMsKRC.js";
import "./cmdExport-C_7TLPs-.js";
import "./profile-BWfgrKDA.js";
import { t as d } from "./insertHtmlBeforeEnd-CRJWaYJw.js";
import { t as f } from "./csvSplit-Dg-U97MN.js";
import "./myStats-Basm1Ltz.js";
import { t as p } from "./classPair-C2pEaqbM.js";
import { t as m } from "./getPlayerId-CDGL5O5G.js";
import { t as h } from "./openQuickBuffById-DJAK7mhj.js";
import { t as g } from "./dataRows-DiOsmm8A.js";
import "./dateUtc-CzlnFLKV.js";
import "./parseDateAsTimestamp-BNkjD7hF.js";
import "./getCombat-BWQPLBtT.js";
import "./relatePlayer-C7y5izo3.js";
import "./guildMembers-CZU-uLr9.js";
import "./getMembrList-B5emVD6O.js";
import { t as _ } from "./buffObj-BcP2E5eH.js";
import "./doBuffLinkClick-9OBESglX.js";
import { n as v, t as y } from "./addLogColoring-BMbkCArG.js";
import "./getLogTime-BpSqqCu4.js";
import { t as b } from "./addLogWidgets-NIiY2ji-.js";
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

//# sourceMappingURL=privateMsg-BtbI1Tnq.js.map