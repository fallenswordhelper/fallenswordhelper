import { t as e } from "./regExpFirstCapture-Bi32xMqS.js";
import { t } from "./devStdOut-BAVmsJfc.js";
import { m as n } from "./constants-CIKidKvt.js";
import { t as r } from "./sendEvent-DFQy5lFi.js";
import { t as i } from "./_dataAccess-Cm9xXxBc.js";
import { t as a } from "./indexAjaxDoc-BNgfSQTJ.js";
import { t as o } from "./infoBox-CqlNbC9M.js";
import { t as s } from "./profile-DolCHxvz.js";
//#region src/modules/app/profile/useitem.js
function c(e) {
	return s({
		subcmd: "useitem",
		inventory_id: e
	});
}
//#endregion
//#region src/modules/_dataAccess/daUseItem.js
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
//#endregion
export { v as t };

//# sourceMappingURL=daUseItem-CgmzU7AU.js.map