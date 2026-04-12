import { t as e } from "./getText-BybFkJV6.js";
import { St as t } from "./constants-CIKidKvt.js";
import { t as n } from "./getValue-j5JjE6f3.js";
import { t as r } from "./arrayFrom-B0aMFj4F.js";
import { t as i } from "./getArrayByTagName-QRr9ypcm.js";
import { t as a } from "./layout-6CPY-bfq.js";
import { t as o } from "./createDiv-CH3rNL4c.js";
import { t as s } from "./insertElement-C_6uFPNr.js";
import { t as c } from "./contains-wh2Zi4Dq.js";
import { t as l } from "./querySelectorArray-Bdj4peIm.js";
import { t as u } from "./closestTr-DTXY0qkG.js";
import { t as d } from "./getPlayerId-DOaPZMl6.js";
import { t as f } from "./dataRows-BlMmmxmo.js";
import { t as p } from "./playerId-CffVNjD0.js";
import { t as m } from "./getCombat-DaYOWYjq.js";
import { t as h } from "./playerLink-B8RkPCAH.js";
import { t as g } from "./closestTable-B_Km1mKH.js";
import { t as _ } from "./getId-ChfM7x7M.js";
import { t as v } from "./addLogColoring-B2rIOttn.js";
import { t as y } from "./getLogTime--M9mIoGb.js";
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

//# sourceMappingURL=guildLog-B9K6wuVy.js.map