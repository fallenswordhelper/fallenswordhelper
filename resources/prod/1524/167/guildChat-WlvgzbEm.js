import { t as e } from "./querySelector-C6ReNysW.js";
import { t } from "./getUrlParameter-DQUJPuXf.js";
import { t as n } from "./getValue-vrUqpo0a.js";
import { t as r } from "./sendEvent-Co2_qySS.js";
import { t as i } from "./arrayFrom-CKk6qt2j.js";
import { t as a } from "./cElement-Dj5A9-NC.js";
import { t as o } from "./clickThis-UHuK6eKQ.js";
import { t as s } from "./closestTable-B73T3rIi.js";
import { t as c } from "./contains-DU2fd_7n.js";
import { t as l } from "./getArrayByClassName-RPqCUmVz.js";
import { t as u } from "./insertElement-6ZBKaryO.js";
import { t as d } from "./on-DfyX3AS4.js";
import { t as f } from "./partial-Bo20zBni.js";
import { t as p } from "./layout-B2Q1UoM2.js";
import { t as m } from "./addLogColoring-BAZ8-8Tz.js";
// src/modules/common/cElement/createTextArea.js
function h(e) {
	return a("textarea", e);
}
// src/modules/logs/addChatTextArea.js
function g(e) {
	r("guildChat", "removeCrlf"), e.value = e.value.replace(/\r\n|\n|\r/g, " ").replace(/'/g, "’").replace(/(?<a>^|\s)(?<b>")/g, "$1“").replace(/"/g, "”").replace("<", "＜");
}
var _ = (e) => {
	e.setAttribute("form", "dochat");
};
function v(e) {
	e.id = "dochat", i(e.elements).forEach(_);
}
function y(e, t) {
	let n = s(e);
	n.rows[0].cells[0].remove(), u(n.insertRow(-1).insertCell(-1), t), n.rows[0].cells[0].rowSpan = 2;
}
function b(e, t) {
	t.key === "Enter" && !t.shiftKey && (t.preventDefault(), r("guildChat", "Enter sends message"), o(e));
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
var S = () => !p() || l("header", p()).filter(c("Posted\xA0By")).length !== 1 || !n("enhanceChatTextEntry");
function C() {
	if (S()) return;
	let e = document.forms[0], { msg: t } = e.elements, [n, r] = i(e.elements).filter(({ name: e }) => e === "submit");
	if (!t || !n) return;
	v(e), y(n, r);
	let a = x();
	d(a, "keypress", f(b, n)), t.replaceWith(a), d(e, "submit", f(g, a));
}
// src/modules/logs/guildChat.js
function w() {
	let r = e("#pCC table table table table");
	if (!r) return;
	let i = t("chat_type") === "1" ? "Leader" : "Chat", a = r.rows[0].cells.length;
	m(i, 0, a);
	let o = a === 3 ? "fsh-guild-chat" : "fsh-guild-chat-action";
	n("wrapGuildChat") && r.classList.add(o);
}
function T() {
	C(), w();
}
export { T as default };

//# sourceMappingURL=guildChat-WlvgzbEm.js.map