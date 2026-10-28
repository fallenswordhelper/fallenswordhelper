import { t as e } from "./regExpFirstCapture-D_QeHFEY.js";
import { t } from "./devStdOut-D2qFWpUj.js";
import { m as n } from "./constants-CenxlFMY.js";
import { t as r } from "./sendEvent-DkxfZozg.js";
import { t as i } from "./_dataAccess-BLVLQyDJ.js";
import { t as a } from "./indexAjaxDoc-WR96kHce.js";
import { t as o } from "./infoBox-QJxiDGQb.js";
import { t as s } from "./profile-BZrU9oa_.js";
// src/modules/app/profile/useitem.js
function c(e) {
	return s({
		subcmd: "useitem",
		inventory_id: e
	});
}
// src/modules/_dataAccess/daUseItem.js
var l = (t, n) => ({
	r: { [n]: [{ n: e(/'(?<id>.*)'/, t) }] },
	s: !0
}), u = (e) => l(e, "components"), d = (e) => l(e, "mailbox_items");
function f(e) {
	let t = e.split(" x ");
	return {
		amount: t[0],
		type: n.indexOf(t[1])
	};
}
function p(n) {
	let i = e(/You gained {1,2}(?<fragList>.*) Fragment\(s\)/, n);
	if (i) return {
		r: { frags: i.split(", ").map(f) },
		s: !0
	};
	r("da/useItem", "Bad Msg", n), t("da/useItem", "Bad Msg", n);
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
	t("da/useItem", "No Info");
}
function g(e) {
	let t = o(e);
	if (t) {
		let e = m.find((e) => t.startsWith(e[0]));
		if (e) return e[1](t);
	} else return r("da/useItem", "No Info"), h(), {
		e: { message: "No Info" },
		s: !1
	};
	return {
		e: { message: t },
		s: !1
	};
}
async function _(e) {
	let t = await a({
		cmd: "profile",
		subcmd: "useitem",
		inventory_id: e
	});
	return t ? g(t) : { s: !1 };
}
function v(e) {
	return i(_, c, e);
}
export { v as t };

//# sourceMappingURL=daUseItem-KKw1U1m5.js.map