import { t as e } from "./arrayFrom-CKk6qt2j.js";
import { t } from "./closestTable-B73T3rIi.js";
import { t as n } from "./contains-DU2fd_7n.js";
import { t as r } from "./dataRows-De29j_4W.js";
import { t as i } from "./getArrayByTagName-Dyx_AQto.js";
import { t as a } from "./getPlayerId-DtQtocY2.js";
import { t as o } from "./playerId-C1UyEKeb.js";
import { t as s } from "./querySelectorArray-C70U47NF.js";
import { St as c } from "./constants-CenxlFMY.js";
import { t as l } from "./layout-B2Q1UoM2.js";
import { t as u } from "./getValue-DMlY7SSn.js";
import { t as d } from "./addLogColoring-rtKYuT0E.js";
import { t as f } from "./createDiv-B84RqGfo.js";
import { t as p } from "./closestTr-BGwSv-6S.js";
import { t as m } from "./getText-BqjgTHLv.js";
import { t as h } from "./insertElement-6ZBKaryO.js";
import { t as g } from "./playerLink-CMLZT8Xs.js";
import { t as _ } from "./getCustomUrlParameter-OUJUdwqs.js";
import { t as v } from "./getCombat-xWyb9OfF.js";
import { t as y } from "./getLogTime-BXMKSMLX.js";
// src/modules/logs/addGuildLogWidgets.js
var b = () => i("td", l()).find(n("Message")), x = (e) => a(e.href);
function S(e) {
	e.className = "";
}
function C(e) {
	let t = s(c, e).map(x).map(Number);
	return t.length && !t.some((e) => e === o());
}
function w(t) {
	C(t) && (e(t.cells).forEach(S), t.classList.add("fshGrey"), t.classList.add("fshXSmall"));
}
function T() {
	let e = b();
	if (!e) return;
	let n = t(e);
	e.innerHTML += "&nbsp;&nbsp;<span class=\"fshWhite\">(Guild Log messages not involving self are dimmed!)</span>", r(n, 3, 0).forEach(w);
}
function E() {
	u("hideNonPlayerGuildLogMessages") && T();
}
// src/modules/logs/guildGroupCombat.js
function D(e, t, n) {
	h(e.cells[2], f({ innerHTML: `${g(t.id, t.name)}'s group looted the item '<span class="fshGreen">${n}</span>'` }));
}
async function O(e) {
	let t = p(e), n = await v(y(t), _(e.href, "combat_id")), r = n?.r?.combat?.items?.[0]?.n;
	r && D(t, n.r.combat.attacker.group.players[0], r);
}
function k() {
	u("groupCombatItems") && s("a[href*=\"&combat_id=\"]").filter((e) => m(e.previousSibling).includes("victorious")).forEach(O);
}
// src/modules/logs/guildLog.js
function A() {
	d("GuildLog", 1, 3), E(), k();
}
export { A as default };

//# sourceMappingURL=guildLog-CeyKMOBq.js.map