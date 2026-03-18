import { t as e } from "./partial-goh6HOls.js";
import { t } from "./_dataAccess-tuhLVrPW.js";
import { t as n } from "./profile-DwNdicRm.js";
import { n as r, t as i } from "./backpackOk-D61pwOdg.js";
//#region src/modules/app/profile/loadInventory.js
function a() {
	return n({ subcmd: "loadinventory" });
}
//#endregion
//#region src/modules/_dataAccess/daLoadInventory.js
function o(e, t) {
	return {
		id: t.a,
		name: t.n,
		items: e.filter((e) => e.f === t.a)
	};
}
function s(t) {
	return {
		r: { inventories: t.folders.map(e(o, t.items)) },
		s: !0
	};
}
async function c() {
	let e = await r();
	return i(e) ? s(e) : {
		e: {
			code: 0,
			message: "Server Error"
		},
		s: !1
	};
}
function l() {
	return t(a, c);
}
//#endregion
export { l as t };

//# sourceMappingURL=daLoadInventory-CNPYoxt-.js.map