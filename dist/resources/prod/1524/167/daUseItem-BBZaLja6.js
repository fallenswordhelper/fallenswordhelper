import { t as e } from "./indexAjaxDoc-MnAqiGyz.js";
import { t } from "./sendEvent-Co2_qySS.js";
import { t as n } from "./profile-By-S2hRI.js";
import { t as r } from "./infoBox-QJxiDGQb.js";
import { t as i } from "./regExpFirstCapture-D_QeHFEY.js";
import { m as a } from "./constants-CenxlFMY.js";
import { t as o } from "./devStdOut-D2qFWpUj.js";
import { t as s } from "./_dataAccess-BLVLQyDJ.js";
// src/modules/app/profile/useitem.js
function c(e) {
	return n({
		subcmd: "useitem",
		inventory_id: e
	});
}
// src/modules/_dataAccess/daUseItem.js
var l = (e, t) => ({
	r: { [t]: [{ n: i(/'(?<id>.*)'/, e) }] },
	s: !0
}), u = (e) => l(e, "components"), d = (e) => l(e, "mailbox_items");
function f(e) {
	let t = e.split(" x ");
	return {
		amount: t[0],
		type: a.indexOf(t[1])
	};
}
function p(e) {
	let n = i(/You gained {1,2}(?<fragList>.*) Fragment\(s\)/, e);
	if (n) return {
		r: { frags: n.split(", ").map(f) },
		s: !0
	};
	t("da/useItem", "Bad Msg", e), o("da/useItem", "Bad Msg", e);
}
var m = [
	["You successfully used", () => ({ s: !0 })],
	["You successfully extracted", u],
	["You failed to extract", () => ({
		r: {},
		s: !0
	})],
	["You gained", p],
	["You received", d]
];
function h() {
	o("da/useItem", "No Info");
}
function g(e) {
	let n = r(e);
	if (n) {
		let e = m.find((e) => n.startsWith(e[0]));
		if (e) return e[1](n);
	} else return t("da/useItem", "No Info"), h(), {
		e: { message: "No Info" },
		s: !1
	};
	return {
		e: { message: n },
		s: !1
	};
}
async function _(t) {
	let n = await e({
		cmd: "profile",
		subcmd: "useitem",
		inventory_id: t
	});
	return n ? g(n) : { s: !1 };
}
function v(e) {
	return s(_, c, e);
}
export { v as t };

//# sourceMappingURL=daUseItem-BBZaLja6.js.map