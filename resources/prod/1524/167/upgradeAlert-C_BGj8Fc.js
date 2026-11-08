import { t as e } from "./indexAjaxDoc-MnAqiGyz.js";
import { t } from "./getApp-xCmcyAG-.js";
import { t as n } from "./dataRows-De29j_4W.js";
import { t as r } from "./getTextTrim-CvXe85fp.js";
import { t as i } from "./numberIsNaN-DNn4rI1u.js";
import { t as a } from "./querySelector-C6ReNysW.js";
import { t as o } from "./_dataAccess-BLVLQyDJ.js";
import { t as s } from "./isUndefined-CH45qJXY.js";
import { t as c } from "./jQueryPresent-DUWNBls9.js";
import { t as l } from "./querySelectorAll-D_a7rcw0.js";
import { t as u } from "./calf-SqS2SeU4.js";
import { Ct as d } from "./constants-CenxlFMY.js";
import { n as f } from "./now-B3pCBQja.js";
import { t as p } from "./getValue-vrUqpo0a.js";
import { t as m } from "./setValue-D-C74rTg.js";
import { t as h } from "./sendEvent-Co2_qySS.js";
import { t as g } from "./createAnchor-HiREQnLZ.js";
import { t as _ } from "./createLi-DyEJrNb_.js";
import { t as v } from "./getElementById-C08-3H-C.js";
import { t as y } from "./insertElement-6ZBKaryO.js";
import { t as b } from "./onclick-nv-Fl1th.js";
// src/modules/chrome/notification/genericNotification.js
function x(e, t, n) {
	let r = _({ className: "notification" }), i = g({
		href: n,
		innerHTML: `<span class="notification-icon"></span><p class="notification-content">${t}</p>`
	});
	b(i, () => {
		h("notification", e);
	}), y(r, i), y(v("notifications"), r);
}
// src/modules/app/points/points.js
function S(e) {
	return t({
		cmd: "points",
		...e
	});
}
// src/modules/app/points/goldupgrades.js
function C() {
	return S({ subcmd: "goldupgrades" });
}
// src/modules/common/parseGoldUpgrades.js
function w(e, t) {
	let n = Number(r(e.cells[2]).split(" / ")[0]), a = r(e.cells[3]);
	return {
		id: t,
		...!["-", "n/a"].includes(a) && { reset_time: Date.parse(`${a} GMT`) / 1e3 },
		current: i(n) ? 0 : n
	};
}
function T(e) {
	if (!e) return { s: !1 };
	let t = a("#pCC > table", e);
	return t ? {
		s: !0,
		r: n(t, 5, 0).map(w)
	} : { s: !1 };
}
// src/modules/_dataAccess/daUpgradesGold.js
async function E() {
	return T(await e({
		cmd: "points",
		type: 1
	}));
}
function D() {
	return o(C, E);
}
// src/modules/chrome/notification/upgradeAlert.js
function O() {
	return window.location.search.indexOf("cmd=points&type=1") !== -1;
}
function k() {
	O() || x("stamina", "Upgrade stamina with gold", `${d}&type=1`);
}
function A(e) {
	e.current === 10 ? (m("needToDoUpgrade", !1), m("lastUpgradeCheck", e.reset_time * 1e3)) : (k(), m("needToDoUpgrade", !0));
}
function j() {
	let e = l("#pCC input[name=\"quantity\"]");
	e?.length < 2 || (e[0].value = "100", e[1].value = "10");
}
async function M() {
	if (O() && j(), !u.enableUpgradeAlert) return;
	let e = O() ? T(document) : await D();
	s(e?.r?.[1]?.current) || A(e.r[1]);
}
function N() {
	if (p("needToDoUpgrade")) {
		k();
		return;
	}
	let e = p("lastUpgradeCheck");
	(!e || f() > e) && M();
}
function P() {
	u.enableUpgradeAlert && c() && !O() && N();
}
export { P as n, x as r, M as t };

//# sourceMappingURL=upgradeAlert-C_BGj8Fc.js.map