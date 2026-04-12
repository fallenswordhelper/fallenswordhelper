import { t as e } from "./getText-BybFkJV6.js";
import { A as t } from "./disclose-version-Bvjv4_yw.js";
import { t as n } from "./dynamicAlert-DtHqMIea.js";
import { t as r } from "./layout-6CPY-bfq.js";
import { t as i } from "./cElement-BWLp9SZT.js";
import { t as a } from "./createDiv-CH3rNL4c.js";
import { t as o } from "./_dataAccess-Cm9xXxBc.js";
import { t as s } from "./aGenericFallback-hK73Fv-s.js";
import { t as c } from "./onclick-8ZwMJyqI.js";
import { t as l } from "./querySelectorArray-Bdj4peIm.js";
import { t as u } from "./closestTr-DTXY0qkG.js";
import { t as d } from "./jQueryNotPresent-UT8-ZycH.js";
import { t as f } from "./ModalConfirm-D-kuSlNB.js";
import { t as p } from "./setText-Ckr3aw9W.js";
import { t as m } from "./closestTd-B6S4IM7U.js";
import { t as h } from "./buffmarket-CK0i6obF.js";
//#region src/modules/app/buffmarket/feature.js
function g(e) {
	return h({
		subcmd: "feature",
		id: e
	});
}
//#endregion
//#region src/modules/_dataAccess/daFeatureBuffPackage.js
function _(e) {
	return s({
		cmd: "buffmarket",
		subcmd: "feature",
		id: e
	}, "Buff Package featured for 24 hours!");
}
function v(e) {
	return o(g, _, e);
}
//#endregion
//#region src/modules/app/buffmarket/deletePackage.js
function y(e) {
	return h({
		subcmd: "delete",
		id: e
	});
}
//#endregion
//#region src/modules/_dataAccess/daDeleteBuffPackage.js
function b(e) {
	return s({
		cmd: "buffmarket",
		subcmd: "delete",
		id: e
	}, "Buff Package deleted!");
}
function x(e) {
	return o(y, b, e);
}
//#endregion
//#region src/modules/app/buffmarket/toggle.js
function S(e) {
	return h({
		subcmd: "toggle",
		id: e
	});
}
//#endregion
//#region src/modules/_dataAccess/daToggleBuffPackage.js
function C(e) {
	return s({
		cmd: "buffmarket",
		subcmd: "toggle",
		id: e
	}, "Buff Package toggled!");
}
function w(e) {
	return o(S, C, e);
}
//#endregion
//#region src/modules/buffmarket/injectManage.js
var T = (e) => e.getAttribute("onclick").match(/id=(\d+)/)?.[1];
function E(e, t) {
	let n = T(e);
	n && (e.setAttribute("onclick", ""), e.setAttribute("data-packageId", n), c(e, t));
}
function D() {
	let e = i("td"), t = a({ className: "fshBuffmarketSpinner" });
	return e.append(t), e;
}
async function O(e, t) {
	let n = e.target.getAttribute("data-packageId"), r = D(), i = m(e.target);
	i.replaceWith(r);
	let a = await t(n);
	return r.replaceWith(i), a;
}
async function k(t) {
	let r = await O(t, w);
	if (r?.s === !0) {
		let r = u(t.target).children[3];
		p(e(r) === "Yes" ? "No" : "Yes", r), n("Buff Package toggled!");
	} else n(r?.e?.message ?? "Server Error");
}
function A(e) {
	t(f, {
		target: r(),
		props: {
			msg: "Are you sure you want to delete this package?",
			visible: !0,
			resolve: async (t) => {
				if (!t) return;
				let r = await O(e, x);
				if (r?.s === !0) {
					let t = u(e.target);
					t.nextElementSibling.remove(), t.remove(), n("Buff Package deleted!");
				} else n(r?.e?.message ?? "Server Error");
			}
		}
	});
}
async function j(e) {
	let t = await O(e, v);
	t?.s === !0 ? (p("Yes", u(e.target).children[4]), n("Buff Package featured for 24 hours!")) : n(t?.e?.message ?? "Server Error");
}
function M() {
	!r() || d() || (l("#pCC input[value=Toggle]").forEach((e) => E(e, k)), l("#pCC input[value=Delete]").forEach((e) => E(e, A)), l("#pCC input[value=Feature]").forEach((e) => E(e, j)));
}
//#endregion
export { M as default };

//# sourceMappingURL=injectManage-9xe-klzt.js.map