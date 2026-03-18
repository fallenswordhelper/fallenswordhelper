import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import "./constants-C54mky4_.js";
import { t as e } from "./getValue-CCThXEzy.js";
import "./setValue-Cb0PYC7t.js";
import { t } from "./querySelector-qkBBhiGH.js";
import { t as n } from "./on-f-HmOL0n.js";
import { t as r } from "./getUrlParameter-qxOiipWG.js";
import { t as i } from "./arrayFrom-LpiPmbFE.js";
import { t as a } from "./partial-goh6HOls.js";
import { t as o } from "./layout-Bapa39KM.js";
import { t as s } from "./sendEvent-bwvhd4A-.js";
import { t as c } from "./cElement-d0yA6JNe.js";
import { t as l } from "./getArrayByClassName-BzDfah40.js";
import { t as u } from "./insertElement-DtUB7uKq.js";
import { t as d } from "./clickThis-CZdkFZtj.js";
import { t as f } from "./contains-D51Mjk5W.js";
import "./openQuickBuffById-DJAK7mhj.js";
import "./dateUtc-CzlnFLKV.js";
import "./parseDateAsTimestamp-BNkjD7hF.js";
import { t as p } from "./closestTable-Dfg3mstY.js";
import "./doBuffLinkClick-9OBESglX.js";
import { t as m } from "./addLogColoring-BMbkCArG.js";
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

//# sourceMappingURL=guildChat-tGY8QXyz.js.map