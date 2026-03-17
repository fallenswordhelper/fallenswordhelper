import { t as e } from "./devStdOut-BnwcHKWA.js";
import { i as t, n, t as r } from "./idb-sdcp-8vV.js";
//#region src/modules/system/idbLogger.js
var i, a = !1, o = !1;
async function s(e) {
	let t = await n("fsh_combatLog");
	if (t) {
		let n = e.transaction("combat-log", "readwrite");
		for (let e of t) n.store.add(e);
		await n.done, await r("fsh_combatLog");
	}
}
function c(e) {
	e.createObjectStore("combat-log", { autoIncrement: !0 }).createIndex("time", "time"), o = !0;
}
var l = { upgrade(e) {
	e.objectStoreNames.contains("combat-log") || c(e);
} };
async function u() {
	i = await t("fsh-db1", 1, l), a = !0, o && await s(i);
}
async function d() {
	return a || await u(), i;
}
async function f(t) {
	try {
		return (await d()).add("combat-log", t);
	} catch (t) {
		e(t);
	}
}
async function p() {
	try {
		return (await d()).getAllFromIndex("combat-log", "time");
	} catch (t) {
		e(t);
	}
}
async function m() {
	try {
		return (await d()).clear("combat-log");
	} catch (t) {
		e(t);
	}
}
//#endregion
export { m as n, p as r, f as t };

//# sourceMappingURL=idbLogger-BsBetfEx.js.map