import { t as e } from "./getText-rCJDurvG.js";
import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import { St as t } from "./constants-C54mky4_.js";
import { t as n } from "./getValue-CCThXEzy.js";
import "./setValue-Cb0PYC7t.js";
import { t as r } from "./arrayFrom-LpiPmbFE.js";
import { t as i } from "./getArrayByTagName-L2qWyNZV.js";
import { t as a } from "./layout-Bapa39KM.js";
import "./sendEvent-bwvhd4A-.js";
import { t as o } from "./createDiv-Bb3O54wx.js";
import { t as s } from "./insertElement-DtUB7uKq.js";
import "./indexAjax-BXHvJ2Y7.js";
import "./indexAjaxData-CqOTihOX.js";
import { t as c } from "./contains-D51Mjk5W.js";
import { t as l } from "./querySelectorArray-BZbNvND7.js";
import { t as u } from "./closestTr-C0LB9ALA.js";
import "./idb-sdcp-8vV.js";
import { t as d } from "./getPlayerId-CDGL5O5G.js";
import "./openQuickBuffById-DJAK7mhj.js";
import { t as f } from "./dataRows-DiOsmm8A.js";
import "./dateUtc-CzlnFLKV.js";
import "./parseDateAsTimestamp-BNkjD7hF.js";
import { t as p } from "./playerId-KKJEdV6P.js";
import { t as m } from "./getCombat-BWQPLBtT.js";
import { t as h } from "./playerLink-B6KUxd0X.js";
import { t as g } from "./closestTable-Dfg3mstY.js";
import { t as _ } from "./getId-CYwWkshr.js";
import "./doBuffLinkClick-9OBESglX.js";
import { t as v } from "./addLogColoring-BMbkCArG.js";
import { t as y } from "./getLogTime-BpSqqCu4.js";
//#region src/modules/logs/addGuildLogWidgets.js
var b = () => i("td", a()).find(c("Message")), x = (e) => d(e.href);
function S(e) {
	e.className = "";
}
function C(e) {
	let n = l(t, e).map(x).map(Number);
	return n.length && !n.some((e) => e === p());
}
function w(e) {
	C(e) && (r(e.cells).forEach(S), e.classList.add("fshGrey"), e.classList.add("fshXSmall"));
}
function T() {
	let e = b();
	if (!e) return;
	let t = g(e);
	e.innerHTML += "&nbsp;&nbsp;<span class=\"fshWhite\">(Guild Log messages not involving self are dimmed!)</span>", f(t, 3, 0).forEach(w);
}
function E() {
	n("hideNonPlayerGuildLogMessages") && T();
}
//#endregion
//#region src/modules/logs/guildGroupCombat.js
function D(e, t, n) {
	s(e.cells[2], o({ innerHTML: `${h(t.id, t.name)}'s group looted the item '<span class="fshGreen">${n}</span>'` }));
}
async function O(e) {
	let t = u(e), n = await m(y(t), _(e)), r = n?.r?.combat?.items?.[0]?.n;
	r && D(t, n.r.combat.attacker.group.players[0], r);
}
function k() {
	n("groupCombatItems") && l("a[href*=\"&combat_id=\"]").filter((t) => e(t.previousSibling).includes("victorious")).forEach(O);
}
//#endregion
//#region src/modules/logs/guildLog.js
function A() {
	v("GuildLog", 1, 3), E(), k();
}
//#endregion
export { A as default };

//# sourceMappingURL=guildLog-CO0Qt8jd.js.map