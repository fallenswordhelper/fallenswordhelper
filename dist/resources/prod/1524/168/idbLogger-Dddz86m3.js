import { i as e, n as t, t as n } from "./idb-D8xqEbs-.js";
import { t as r } from "./devStdOut-D2qFWpUj.js";
// src/modules/system/idbLogger.js
var i, a = !1, o = !1;
async function s(e) {
	let r = await t("fsh_combatLog");
	if (r) {
		let t = e.transaction("combat-log", "readwrite");
		for (let e of r) t.store.add(e);
		await t.done, await n("fsh_combatLog");
	}
}
function c(e) {
	e.createObjectStore("combat-log", { autoIncrement: !0 }).createIndex("time", "time"), o = !0;
}
var l = { upgrade(e) {
	e.objectStoreNames.contains("combat-log") || c(e);
} };
async function u() {
	i = await e("fsh-db1", 1, l), a = !0, o && await s(i);
}
async function d() {
	return a || await u(), i;
}
async function f(e) {
	try {
		return (await d()).add("combat-log", e);
	} catch (e) {
		r(e);
	}
}
async function p() {
	try {
		return (await d()).getAllFromIndex("combat-log", "time");
	} catch (e) {
		r(e);
	}
}
async function m() {
	try {
		return (await d()).clear("combat-log");
	} catch (e) {
		r(e);
	}
}
export { m as n, p as r, f as t };

//# sourceMappingURL=idbLogger-Dddz86m3.js.map