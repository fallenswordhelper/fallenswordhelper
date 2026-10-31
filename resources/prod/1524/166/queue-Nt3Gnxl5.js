import { t as e } from "./_dataAccess-BLVLQyDJ.js";
import { t } from "./indexAjaxData-BcvK7Oaz.js";
import { t as n } from "./guildInventory-DYPTwtsS.js";
import { n as r, t as i } from "./backpackOk-fYRPjioo.js";
import { t as a } from "./htmlResult-ChzxOgJl.js";
import { t as o } from "./takeItem-Cqy0Pz8n.js";
import { n as s, r as c, t as l } from "./useItem-BLx5J27E.js";
import { t as u } from "./errorDialog-CK0T_lOR.js";
// src/modules/app/guild/inventory/recall.js
function d(e, t, r) {
	return n({
		subcmd2: "recall",
		id: e,
		player_id: t,
		mode: r
	});
}
// src/modules/_dataAccess/daGuildRecall.js
async function f(e, n, r) {
	let i = await t({
		cmd: "guild",
		subcmd: "inventory",
		subcmd2: "recall",
		id: e,
		player_id: n,
		mode: r
	});
	return a(i);
}
function p(t, n, r) {
	return e(d, f, t, n, r);
}
// src/modules/ajax/recallItem.js
async function m(e, t, n) {
	let r = await p(e, t, n);
	return s(r);
}
// src/modules/ajaxQueue/doAction.js
async function h(e, t, n) {
	return await e(t), n;
}
// src/modules/ajaxQueue/pipeRecallToQueue.js
function g(e, t, n) {
	if (!i(n)) return;
	let r = n.items[n.items.length - 1].a;
	if (e === "wear") return h(c, r, t);
	if (e === "use") return h(l, r, t);
}
async function _(e, t) {
	return t.r === 0 && e !== "recall" && g(e, t, await r()), t;
}
async function v([e, t, n, r, i]) {
	await i;
	let a = await m(e, t, n);
	if (u(a), a) return _(r, a);
}
// src/modules/ajaxQueue/pipeTakeToQueue.js
function y(e, t) {
	if (e === "wear") return h(c, t.b, t);
	if (e === "use") return h(l, t.b, t);
}
function b(e, t) {
	return t.r === 0 && e !== "take" ? y(e, t) : t;
}
async function x(e, t, n) {
	return await n, b(t, await o(e));
}
// src/modules/ajaxQueue/queue.js
var S = Promise.resolve();
function C() {
	return S ||= Promise.resolve(), S;
}
function w(e, t) {
	return S = x(e, t, C()), S;
}
function T(e, t, n, r) {
	return S = v([
		e,
		t,
		n,
		r,
		C()
	]), S;
}
export { w as n, T as t };

//# sourceMappingURL=queue-Nt3Gnxl5.js.map