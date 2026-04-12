import { t as e } from "./_dataAccess-Cm9xXxBc.js";
import { t } from "./indexAjaxData-yJPb4vet.js";
import { t as n } from "./guildInventory-m5r-w2nc.js";
import { n as r, t as i } from "./backpackOk-DHpmNvG6.js";
import { t as a } from "./htmlResult-Dc_vf-tW.js";
import { t as o } from "./takeItem-CHf9WsLp.js";
import { n as s, r as c, t as l } from "./useItem-Bdgw70D6.js";
import { t as u } from "./errorDialog-CwxmqjPI.js";
//#region src/modules/app/guild/inventory/recall.js
function d(e, t, r) {
	return n({
		subcmd2: "recall",
		id: e,
		player_id: t,
		mode: r
	});
}
//#endregion
//#region src/modules/_dataAccess/daGuildRecall.js
async function f(e, n, r) {
	return a(await t({
		cmd: "guild",
		subcmd: "inventory",
		subcmd2: "recall",
		id: e,
		player_id: n,
		mode: r
	}));
}
function p(t, n, r) {
	return e(d, f, t, n, r);
}
//#endregion
//#region src/modules/ajax/recallItem.js
async function m(e, t, n) {
	return s(await p(e, t, n));
}
//#endregion
//#region src/modules/ajaxQueue/doAction.js
async function h(e, t, n) {
	return await e(t), n;
}
//#endregion
//#region src/modules/ajaxQueue/pipeRecallToQueue.js
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
//#endregion
//#region src/modules/ajaxQueue/pipeTakeToQueue.js
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
//#endregion
//#region src/modules/ajaxQueue/queue.js
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
//#endregion
export { w as n, T as t };

//# sourceMappingURL=queue-CHySld3G.js.map