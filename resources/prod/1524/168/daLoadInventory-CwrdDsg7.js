import { n as e, t } from "./backpackOk-CZXsd2lE.js";
import { t as n } from "./profile-By-S2hRI.js";
import { t as r } from "./partial-Bo20zBni.js";
import { t as i } from "./_dataAccess-BLVLQyDJ.js";
// src/modules/app/profile/loadInventory.js
function a() {
	return n({ subcmd: "loadinventory" });
}
// src/modules/_dataAccess/daLoadInventory.js
function o(e, t) {
	return {
		id: t.a,
		name: t.n,
		items: e.filter((e) => e.f === t.a)
	};
}
function s(e) {
	return {
		r: { inventories: e.folders.map(r(o, e.items)) },
		s: !0
	};
}
async function c() {
	let n = await e();
	return t(n) ? s(n) : {
		e: {
			code: 0,
			message: "Server Error"
		},
		s: !1
	};
}
function l() {
	return i(a, c);
}
export { l as t };

//# sourceMappingURL=daLoadInventory-CwrdDsg7.js.map