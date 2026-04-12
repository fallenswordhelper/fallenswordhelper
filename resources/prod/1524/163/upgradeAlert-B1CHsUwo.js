import { t as e } from "./getElementById-DgC-_E5u.js";
import { n as t } from "./now-CA_NVGr7.js";
import { t as n } from "./isUndefined-Dfbc1KRP.js";
import { Ct as r } from "./constants-CIKidKvt.js";
import { t as i } from "./getValue-j5JjE6f3.js";
import { t as a } from "./setValue-31jE_mRr.js";
import { t as o } from "./querySelector-8FH1hhUv.js";
import { t as s } from "./calf-DxCOTxVt.js";
import { t as c } from "./getTextTrim-hYBF-bdh.js";
import { t as l } from "./sendEvent-DFQy5lFi.js";
import { t as u } from "./insertElement-C_6uFPNr.js";
import { t as d } from "./getApp-CqGRjnvO.js";
import { t as f } from "./_dataAccess-Cm9xXxBc.js";
import { t as p } from "./indexAjaxDoc-BNgfSQTJ.js";
import { t as m } from "./onclick-8ZwMJyqI.js";
import { t as h } from "./querySelectorAll-Bwhb2XCF.js";
import { t as g } from "./jQueryPresent-BeJtq5OB.js";
import { t as _ } from "./createAnchor-DIf1F0uc.js";
import { t as v } from "./createLi-D1Lt29de.js";
import { t as y } from "./dataRows-BlMmmxmo.js";
import { t as b } from "./numberIsNaN-Y6LDm3bY.js";
//#region src/modules/chrome/notification/genericNotification.js
function x(t, n, r) {
	let i = v({ className: "notification" }), a = _({
		href: r,
		innerHTML: `<span class="notification-icon"></span><p class="notification-content">${n}</p>`
	});
	m(a, () => {
		l("notification", t);
	}), u(i, a), u(e("notifications"), i);
}
//#endregion
//#region src/modules/app/points/points.js
function S(e) {
	return d({
		cmd: "points",
		...e
	});
}
//#endregion
//#region src/modules/app/points/goldupgrades.js
function C() {
	return S({ subcmd: "goldupgrades" });
}
//#endregion
//#region src/modules/common/parseGoldUpgrades.js
function w(e, t) {
	let n = Number(c(e.cells[2]).split(" / ")[0]), r = c(e.cells[3]);
	return {
		id: t,
		...!["-", "n/a"].includes(r) && { reset_time: Date.parse(`${r} GMT`) / 1e3 },
		current: b(n) ? 0 : n
	};
}
function T(e) {
	if (!e) return { s: !1 };
	let t = o("#pCC > table", e);
	return t ? {
		s: !0,
		r: y(t, 5, 0).map(w)
	} : { s: !1 };
}
//#endregion
//#region src/modules/_dataAccess/daUpgradesGold.js
async function E() {
	return T(await p({
		cmd: "points",
		type: 1
	}));
}
function D() {
	return f(C, E);
}
//#endregion
//#region src/modules/chrome/notification/upgradeAlert.js
function O() {
	return window.location.search.indexOf("cmd=points&type=1") !== -1;
}
function k() {
	O() || x("stamina", "Upgrade stamina with gold", `${r}&type=1`);
}
function A(e) {
	e.current === 10 ? (a("needToDoUpgrade", !1), a("lastUpgradeCheck", e.reset_time * 1e3)) : (k(), a("needToDoUpgrade", !0));
}
function j() {
	let e = h("#pCC input[name=\"quantity\"]");
	e?.length < 2 || (e[0].value = "100", e[1].value = "10");
}
async function M() {
	if (O() && j(), !s.enableUpgradeAlert) return;
	let e = O() ? T(document) : await D();
	n(e?.r?.[1]?.current) || A(e.r[1]);
}
function N() {
	if (i("needToDoUpgrade")) {
		k();
		return;
	}
	let e = i("lastUpgradeCheck");
	(!e || t() > e) && M();
}
function P() {
	s.enableUpgradeAlert && g() && !O() && N();
}
//#endregion
export { P as n, x as r, M as t };

//# sourceMappingURL=upgradeAlert-B1CHsUwo.js.map