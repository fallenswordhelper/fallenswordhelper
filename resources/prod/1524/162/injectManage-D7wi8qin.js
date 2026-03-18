import { t as e } from "./getText-rCJDurvG.js";
import "./system-De1jBRGa.js";
import "./constants-C54mky4_.js";
import { A as t } from "./disclose-version-CVZFuhb0.js";
import "./index-client-BaeBki7R.js";
import { t as n } from "./dynamicAlert-dINSPEx3.js";
import { t as r } from "./layout-Bapa39KM.js";
import { t as i } from "./cElement-d0yA6JNe.js";
import { t as a } from "./createDiv-Bb3O54wx.js";
import { t as o } from "./_dataAccess-tuhLVrPW.js";
import "./indexAjax-BXHvJ2Y7.js";
import "./indexAjaxData-CqOTihOX.js";
import "./indexAjaxDoc-DHqD1q8U.js";
import { t as s } from "./aGenericFallback-uC2pHFMR.js";
import { t as c } from "./onclick-9iRduoOH.js";
import { t as l } from "./querySelectorArray-BZbNvND7.js";
import { t as u } from "./closestTr-C0LB9ALA.js";
import "./Modal-QdM-bPCT.js";
import { t as d } from "./ModalConfirm-DbhWxcda.js";
import { t as f } from "./setText-C9n73usW.js";
import { t as p } from "./closestTd-CSAfmoRl.js";
import { t as m } from "./buffmarket-Bjl5Z8Bj.js";
//#region src/modules/app/buffmarket/toggle.js
function h(e) {
	return m({
		subcmd: "toggle",
		id: e
	});
}
//#endregion
//#region src/modules/_dataAccess/daToggleBuffPackage.js
function g(e) {
	return s({
		cmd: "buffmarket",
		subcmd: "toggle",
		id: e
	}, "Buff Package toggled!");
}
function _(e) {
	return o(h, g, e);
}
//#endregion
//#region src/modules/app/buffmarket/feature.js
function v(e) {
	return m({
		subcmd: "feature",
		id: e
	});
}
//#endregion
//#region src/modules/_dataAccess/daFeatureBuffPackage.js
function y(e) {
	return s({
		cmd: "buffmarket",
		subcmd: "feature",
		id: e
	}, "Buff Package featured for 24 hours!");
}
function b(e) {
	return o(v, y, e);
}
//#endregion
//#region src/modules/app/buffmarket/deletePackage.js
function x(e) {
	return m({
		subcmd: "delete",
		id: e
	});
}
//#endregion
//#region src/modules/_dataAccess/daDeleteBuffPackage.js
function S(e) {
	return s({
		cmd: "buffmarket",
		subcmd: "delete",
		id: e
	}, "Buff Package deleted!");
}
function C(e) {
	return o(x, S, e);
}
//#endregion
//#region src/modules/buffmarket/injectManage.js
var w = (e) => e.getAttribute("onclick").match(/id=(\d+)/)[1];
function T(e, t) {
	let n = w(e);
	e.setAttribute("onclick", ""), e.setAttribute("data-packageId", n), c(e, t);
}
function E() {
	let e = i("td"), t = a({ className: "fshBuffmarketSpinner" });
	return e.append(t), e;
}
async function D(e, t) {
	let n = e.target.getAttribute("data-packageId"), r = E(), i = p(e.target);
	i.replaceWith(r);
	let a = await t(n);
	return r.replaceWith(i), a;
}
async function O(t) {
	let r = await D(t, _);
	if (r?.s === !0) {
		let r = u(t.target).children[3];
		f(e(r) === "Yes" ? "No" : "Yes", r), n("Buff Package toggled!");
	} else n(r?.e?.message ?? "Server Error");
}
function k(e) {
	t(d, {
		target: r(),
		props: {
			msg: "Are you sure you want to delete this package?",
			visible: !0,
			resolve: async (t) => {
				if (!t) return;
				let r = await D(e, C);
				if (r?.s === !0) {
					let t = u(e.target);
					t.nextElementSibling.remove(), t.remove(), n("Buff Package deleted!");
				} else n(r?.e?.message ?? "Server Error");
			}
		}
	});
}
async function A(e) {
	let t = await D(e, b);
	t?.s === !0 ? (f("Yes", u(e.target).children[4]), n("Buff Package featured for 24 hours!")) : n(t?.e?.message ?? "Server Error");
}
function j() {
	l("#pCC input[value=Toggle]").forEach((e) => T(e, O)), l("#pCC input[value=Delete]").forEach((e) => T(e, k)), l("#pCC input[value=Feature]").forEach((e) => T(e, A));
}
//#endregion
export { j as default };

//# sourceMappingURL=injectManage-D7wi8qin.js.map