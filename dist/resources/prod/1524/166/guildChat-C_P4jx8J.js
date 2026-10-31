import { t as e } from "./getValue-sxwJaOE3.js";
import { t } from "./querySelector-C6ReNysW.js";
import { t as n } from "./on-DfyX3AS4.js";
import { t as r } from "./getUrlParameter-DQUJPuXf.js";
import { t as i } from "./arrayFrom-CKk6qt2j.js";
import { t as a } from "./partial-Bo20zBni.js";
import { t as o } from "./layout-B2Q1UoM2.js";
import { t as s } from "./sendEvent-yx1DwCDA.js";
import { t as c } from "./cElement-BrpvG2bS.js";
import { t as l } from "./getArrayByClassName-RPqCUmVz.js";
import { t as u } from "./insertElement-6ZBKaryO.js";
import { t as d } from "./clickThis-UHuK6eKQ.js";
import { t as f } from "./contains-CziyX11O.js";
import { t as p } from "./closestTable-B73T3rIi.js";
import { t as m } from "./addLogColoring-DVQ45qyK.js";
// src/modules/common/cElement/createTextArea.js
function h(e) {
	return c("textarea", e);
}
// src/modules/logs/addChatTextArea.js
function g(e) {
	s("guildChat", "removeCrlf"), e.value = e.value.replace(/\r\n|\n|\r/g, " ").replace(/'/g, "’").replace(/(?<a>^|\s)(?<b>")/g, "$1“").replace(/"/g, "”").replace("<", "＜");
}
var _ = (e) => {
	e.setAttribute("form", "dochat");
};
function v(e) {
	e.id = "dochat", i(e.elements).forEach(_);
}
function y(e, t) {
	let n = p(e);
	n.rows[0].cells[0].remove(), u(n.insertRow(-1).insertCell(-1), t), n.rows[0].cells[0].rowSpan = 2;
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
	let e = document.forms[0], { msg: t, submit: r } = e.elements, [i, o] = r ?? [];
	if (!t || !i || !o) return;
	v(e), y(i, o);
	let s = x();
	n(s, "keypress", a(b, i)), t.replaceWith(s), n(e, "submit", a(g, s));
}
// src/modules/logs/guildChat.js
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
export { T as default };

//# sourceMappingURL=guildChat-C_P4jx8J.js.map