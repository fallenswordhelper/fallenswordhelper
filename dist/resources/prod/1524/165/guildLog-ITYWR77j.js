import { t as e } from "./getText-BqjgTHLv.js";
import { St as t } from "./constants-CenxlFMY.js";
import { t as n } from "./getValue-Aap0zlcO.js";
import { t as r } from "./arrayFrom-CKk6qt2j.js";
import { t as i } from "./getArrayByTagName-Dyx_AQto.js";
import { t as a } from "./layout-B2Q1UoM2.js";
import { t as o } from "./createDiv-XU2XBEIv.js";
import { t as s } from "./insertElement-6ZBKaryO.js";
import { t as c } from "./contains-CziyX11O.js";
import { t as l } from "./querySelectorArray-C70U47NF.js";
import { t as u } from "./closestTr-BGwSv-6S.js";
import { t as d } from "./getPlayerId-DtAI89Cf.js";
import { t as f } from "./dataRows-De29j_4W.js";
import { t as p } from "./playerId-C1UyEKeb.js";
import { t as m } from "./getCombat-COIm9hnn.js";
import { t as h } from "./playerLink-CMLZT8Xs.js";
import { t as g } from "./closestTable-B73T3rIi.js";
import { t as _ } from "./getId-Ccs5W7A1.js";
import { t as v } from "./addLogColoring-SS6PBUTf.js";
import { t as y } from "./getLogTime-BXMKSMLX.js";
// src/modules/logs/addGuildLogWidgets.js
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
// src/modules/logs/guildGroupCombat.js
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
// src/modules/logs/guildLog.js
function A() {
	v("GuildLog", 1, 3), E(), k();
}
export { A as default };

//# sourceMappingURL=guildLog-ITYWR77j.js.map