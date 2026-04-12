import { t as e } from "./getValue-j5JjE6f3.js";
import { t } from "./querySelector-8FH1hhUv.js";
import { t as n } from "./on-afIPYx-0.js";
import { t as r } from "./getUrlParameter-OG9FsMwx.js";
import { t as i } from "./arrayFrom-B0aMFj4F.js";
import { t as a } from "./partial-CYzPXpZP.js";
import { t as o } from "./layout-6CPY-bfq.js";
import { t as s } from "./sendEvent-DFQy5lFi.js";
import { t as c } from "./cElement-BWLp9SZT.js";
import { t as l } from "./getArrayByClassName-9tzft1UU.js";
import { t as u } from "./insertElement-C_6uFPNr.js";
import { t as d } from "./clickThis-5GuZiKOQ.js";
import { t as f } from "./contains-wh2Zi4Dq.js";
import { t as p } from "./closestTable-B_Km1mKH.js";
import { t as m } from "./addLogColoring-B2rIOttn.js";
//#region src/modules/common/cElement/createTextArea.js
function h(e) {
	return c("textarea", e);
}
//#endregion
//#region src/modules/logs/addChatTextArea.js
function g(e) {
	s("guildChat", "removeCrlf"), e.value = e.value.replace(/\r\n|\n|\r/g, " ").replace(/'/g, "’").replace(/(?<a>^|\s)(?<b>")/g, "$1“").replace(/"/g, "”").replace("<", "＜");
}
var _ = (e) => {
	e.setAttribute("form", "dochat");
};
function v(e) {
	e.id = "dochat", i(e.elements).forEach(_);
}
function y(e) {
	let t = p(e[5]);
	t.rows[0].cells[0].remove(), u(t.insertRow(-1).insertCell(-1), e[6]), t.rows[0].cells[0].rowSpan = 2;
}
function b(e, t) {
	t.key === "Enter" && !t.shiftKey && (t.preventDefault(), s("guildChat", "Enter sends message"), d(e));
}
function x() {
	let e = h({
		className: "fshChatTextArea",
		maxLength: 512,
		name: "msg",
		required: !0
	});
	return _(e), e;
}
var S = () => !o() || l("header", o()).filter(f("Posted\xA0By")).length !== 1 || !e("enhanceChatTextEntry");
function C() {
	if (S()) return;
	let e = document.forms[0];
	v(e), y(e.elements);
	let t = x();
	n(t, "keypress", a(b, e.elements[5])), e.elements[4].replaceWith(t), n(e, "submit", a(g, t));
}
//#endregion
//#region src/modules/logs/guildChat.js
function w() {
	let n = t("#pCC table table table table");
	if (!n) return;
	let i = r("chat_type") === "1" ? "Leader" : "Chat", a = n.rows[0].cells.length;
	m(i, 0, a);
	let o = a === 3 ? "fsh-guild-chat" : "fsh-guild-chat-action";
	e("wrapGuildChat") && n.classList.add(o);
}
function T() {
	C(), w();
}
//#endregion
export { T as default };

//# sourceMappingURL=guildChat-Bl0bYzq3.js.map