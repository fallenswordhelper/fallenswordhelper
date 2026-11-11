import { n as e, r as t, t as n } from "./useItem-BEEqYVxg.js";
import { t as r } from "./indexAjaxData-BAm_dTyc.js";
import { t as i } from "./guildInventory-Cb6J3fhR.js";
import { t as a } from "./_dataAccess-BLVLQyDJ.js";
import { t as o } from "./htmlResult-ChzxOgJl.js";
import { t as s } from "./errorDialog-CK0T_lOR.js";
import { n as c, t as l } from "./backpackOk-CZXsd2lE.js";
import { t as u } from "./takeItem-C4aGVWZk.js";
// src/modules/app/guild/inventory/recall.js
function d(e, t, n) {
	return i({
		subcmd2: "recall",
		id: e,
		player_id: t,
		mode: n
	});
}
// src/modules/_dataAccess/daGuildRecall.js
async function f(e, t, n) {
	let i = await r({
		cmd: "guild",
		subcmd: "inventory",
		subcmd2: "recall",
		id: e,
		player_id: t,
		mode: n
	});
	return o(i);
}
function p(e, t, n) {
	return a(d, f, e, t, n);
}
// src/modules/ajax/recallItem.js
async function m(t, n, r) {
	let i = await p(t, n, r);
	return e(i);
}
// src/modules/ajaxQueue/doAction.js
async function h(e, t, n) {
	return await e(t), n;
}
// src/modules/ajaxQueue/pipeRecallToQueue.js
function g(e, r, i) {
	if (!l(i)) return;
	let a = i.items[i.items.length - 1].a;
	if (e === "wear") return h(t, a, r);
	if (e === "use") return h(n, a, r);
}
async function _(e, t) {
	return t.r === 0 && e !== "recall" && g(e, t, await c()), t;
}
async function v([e, t, n, r, i]) {
	await i;
	let a = await m(e, t, n);
	if (s(a), a) return _(r, a);
}
// src/modules/ajaxQueue/pipeTakeToQueue.js
function y(e, r) {
	if (e === "wear") return h(t, r.b, r);
	if (e === "use") return h(n, r.b, r);
}
function b(e, t) {
	return t.r === 0 && e !== "take" ? y(e, t) : t;
}
async function x(e, t, n) {
	return await n, b(t, await u(e));
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

//# sourceMappingURL=queue-DGx9eqtb.js.map