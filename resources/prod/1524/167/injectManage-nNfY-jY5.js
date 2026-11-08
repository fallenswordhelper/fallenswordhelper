import { L as e } from "./disclose-version-Cj0Bwtvz.js";
import { t } from "./buffmarket-CtSovNfq.js";
import { t as n } from "./_dataAccess-BLVLQyDJ.js";
import { t as r } from "./aGenericFallback-6foHv24I.js";
import { t as i } from "./dynamicAlert-xklxr5Wl.js";
import { t as a } from "./cElement-Dj5A9-NC.js";
import { t as o } from "./createDiv-B84RqGfo.js";
import { t as s } from "./closestTr-BGwSv-6S.js";
import { t as c } from "./closestTd-qGJKTnGX.js";
import { t as l } from "./getText-BqjgTHLv.js";
import { t as u } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as d } from "./onclick-nv-Fl1th.js";
import { t as f } from "./querySelectorArray-C70U47NF.js";
import { t as p } from "./setText-CVjyFkRt.js";
import { t as m } from "./ModalConfirm-Dd-SCpJZ.js";
import { t as h } from "./layout-B2Q1UoM2.js";
// src/modules/app/buffmarket/feature.js
function g(e) {
	return t({
		subcmd: "feature",
		id: e
	});
}
// src/modules/_dataAccess/daFeatureBuffPackage.js
function _(e) {
	return r({
		cmd: "buffmarket",
		subcmd: "feature",
		id: e
	}, "Buff Package featured for 24 hours!");
}
function v(e) {
	return n(g, _, e);
}
// src/modules/app/buffmarket/deletePackage.js
function y(e) {
	return t({
		subcmd: "delete",
		id: e
	});
}
// src/modules/_dataAccess/daDeleteBuffPackage.js
function b(e) {
	return r({
		cmd: "buffmarket",
		subcmd: "delete",
		id: e
	}, "Buff Package deleted!");
}
function x(e) {
	return n(y, b, e);
}
// src/modules/app/buffmarket/toggle.js
function S(e) {
	return t({
		subcmd: "toggle",
		id: e
	});
}
// src/modules/_dataAccess/daToggleBuffPackage.js
function C(e) {
	return r({
		cmd: "buffmarket",
		subcmd: "toggle",
		id: e
	}, "Buff Package toggled!");
}
function w(e) {
	return n(S, C, e);
}
// src/modules/buffmarket/injectManage.js
var T = (e) => e.getAttribute("onclick").match(/id=(\d+)/)?.[1];
function E(e, t) {
	let n = T(e);
	n && (e.setAttribute("onclick", ""), e.setAttribute("data-packageId", n), d(e, t));
}
function D() {
	let e = a("td"), t = o({ className: "fshBuffmarketSpinner" });
	return e.append(t), e;
}
async function O(e, t) {
	let n = e.target.getAttribute("data-packageId"), r = D(), i = c(e.target);
	i.replaceWith(r);
	let a = await t(n);
	return r.replaceWith(i), a;
}
async function k(e) {
	let t = await O(e, w);
	if (t?.s === !0) {
		let t = s(e.target).children[3];
		p(l(t) === "Yes" ? "No" : "Yes", t), i("Buff Package toggled!");
	} else i(t?.e?.message ?? "Server Error");
}
function A(t) {
	e(m, {
		target: h(),
		props: {
			msg: "Are you sure you want to delete this package?",
			visible: !0,
			resolve: async (e) => {
				if (!e) return;
				let n = await O(t, x);
				if (n?.s === !0) {
					let e = s(t.target);
					e.nextElementSibling.remove(), e.remove(), i("Buff Package deleted!");
				} else i(n?.e?.message ?? "Server Error");
			}
		}
	});
}
async function j(e) {
	let t = await O(e, v);
	t?.s === !0 ? (p("Yes", s(e.target).children[4]), i("Buff Package featured for 24 hours!")) : i(t?.e?.message ?? "Server Error");
}
function M() {
	h() && !u() && (f("#pCC input[value=Toggle]").forEach((e) => E(e, k)), f("#pCC input[value=Delete]").forEach((e) => E(e, A)), f("#pCC input[value=Feature]").forEach((e) => E(e, j)));
}
export { M as default };

//# sourceMappingURL=injectManage-nNfY-jY5.js.map