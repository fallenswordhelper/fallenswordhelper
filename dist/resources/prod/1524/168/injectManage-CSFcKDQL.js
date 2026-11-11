import { L as e } from "./disclose-version-Cj0Bwtvz.js";
import { t } from "./buffmarket-CtSovNfq.js";
import { t as n } from "./_dataAccess-BLVLQyDJ.js";
import { t as r } from "./aGenericFallback-6foHv24I.js";
import { t as i } from "./dynamicAlert-xklxr5Wl.js";
import { t as a } from "./cElement-Dj5A9-NC.js";
import { t as o } from "./createDiv-B84RqGfo.js";
import { t as s } from "./fsPostParam-DT4AaRdC.js";
import { t as c } from "./closestTr-BGwSv-6S.js";
import { t as l } from "./closestTd-qGJKTnGX.js";
import { t as u } from "./getText-BqjgTHLv.js";
import { t as d } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as f } from "./onclick-nv-Fl1th.js";
import { t as p } from "./querySelectorArray-C70U47NF.js";
import { t as m } from "./setText-CVjyFkRt.js";
import { t as h } from "./ModalConfirm-Dd-SCpJZ.js";
import { t as g } from "./layout-B2Q1UoM2.js";
// src/modules/app/buffmarket/feature.js
function _(e) {
	return t({
		subcmd: "feature",
		id: e
	});
}
// src/modules/_dataAccess/daFeatureBuffPackage.js
function v(e) {
	return r({
		cmd: "buffmarket",
		subcmd: "feature",
		id: e
	}, "Buff Package featured for 24 hours!");
}
function y(e) {
	return n(_, v, e);
}
// src/modules/app/buffmarket/deletePackage.js
function b(e) {
	return t({
		subcmd: "delete",
		id: e
	});
}
// src/modules/_dataAccess/daDeleteBuffPackage.js
function x(e) {
	return r({
		cmd: "buffmarket",
		subcmd: "delete",
		id: e
	}, "Buff Package deleted!");
}
function S(e) {
	return n(b, x, e);
}
// src/modules/app/buffmarket/toggle.js
function C(e) {
	return t({
		subcmd: "toggle",
		id: e
	});
}
// src/modules/_dataAccess/daToggleBuffPackage.js
function w(e) {
	return r({
		cmd: "buffmarket",
		subcmd: "toggle",
		id: e
	}, "Buff Package toggled!");
}
function T(e) {
	return n(C, w, e);
}
// src/modules/buffmarket/injectManage.js
function E(e, t) {
	let n = s(e, "id");
	n && (e.removeAttribute("onclick"), delete e.dataset.fsPost, delete e.dataset.fsConfirm, e.setAttribute("data-packageId", n), f(e, t));
}
function D() {
	let e = a("td"), t = o({ className: "fshBuffmarketSpinner" });
	return e.append(t), e;
}
async function O(e, t) {
	let n = e.target.getAttribute("data-packageId"), r = D(), i = l(e.target);
	i.replaceWith(r);
	let a = await t(n);
	return r.replaceWith(i), a;
}
async function k(e) {
	let t = await O(e, T);
	if (t?.s === !0) {
		let t = c(e.target).children[3];
		m(u(t) === "Yes" ? "No" : "Yes", t), i("Buff Package toggled!");
	} else i(t?.e?.message ?? "Server Error");
}
function A(t) {
	e(h, {
		target: g(),
		props: {
			msg: "Are you sure you want to delete this package?",
			visible: !0,
			resolve: async (e) => {
				if (!e) return;
				let n = await O(t, S);
				if (n?.s === !0) {
					let e = c(t.target);
					e.nextElementSibling.remove(), e.remove(), i("Buff Package deleted!");
				} else i(n?.e?.message ?? "Server Error");
			}
		}
	});
}
async function j(e) {
	let t = await O(e, y);
	t?.s === !0 ? (m("Yes", c(e.target).children[4]), i("Buff Package featured for 24 hours!")) : i(t?.e?.message ?? "Server Error");
}
function M() {
	g() && !d() && (p("#pCC input[value=Toggle]").forEach((e) => E(e, k)), p("#pCC input[value=Delete]").forEach((e) => E(e, A)), p("#pCC input[value=Feature]").forEach((e) => E(e, j)));
}
export { M as default };

//# sourceMappingURL=injectManage-CSFcKDQL.js.map