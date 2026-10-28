import { t as e } from "./getElementById-C08-3H-C.js";
import { n as t } from "./now-B3pCBQja.js";
import { t as n } from "./isUndefined-CH45qJXY.js";
import { Ct as r } from "./constants-CenxlFMY.js";
import { t as i } from "./getValue-Aap0zlcO.js";
import { t as a } from "./setValue-B1MbQwxn.js";
import { t as o } from "./querySelector-C6ReNysW.js";
import { t as s } from "./calf-SqS2SeU4.js";
import { t as c } from "./getTextTrim-CvXe85fp.js";
import { t as l } from "./sendEvent-DkxfZozg.js";
import { t as u } from "./insertElement-6ZBKaryO.js";
import { t as d } from "./getApp-ClZXM9Yf.js";
import { t as f } from "./_dataAccess-BLVLQyDJ.js";
import { t as p } from "./indexAjaxDoc-WR96kHce.js";
import { t as m } from "./onclick-nv-Fl1th.js";
import { t as h } from "./querySelectorAll-D_a7rcw0.js";
import { t as g } from "./jQueryPresent-DUWNBls9.js";
import { t as _ } from "./createAnchor-BMaWUfMc.js";
import { t as v } from "./createLi-BRGADhB9.js";
import { t as y } from "./dataRows-De29j_4W.js";
import { t as b } from "./numberIsNaN-DNn4rI1u.js";
// src/modules/chrome/notification/genericNotification.js
function x(t, n, r) {
	let i = v({ className: "notification" }), a = _({
		href: r,
		innerHTML: `<span class="notification-icon"></span><p class="notification-content">${n}</p>`
	});
	m(a, () => {
		l("notification", t);
	}), u(i, a), u(e("notifications"), i);
}
// src/modules/app/points/points.js
function S(e) {
	return d({
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
// src/modules/_dataAccess/daUpgradesGold.js
async function E() {
	return T(await p({
		cmd: "points",
		type: 1
	}));
}
function D() {
	return f(C, E);
}
// src/modules/chrome/notification/upgradeAlert.js
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
export { P as n, x as r, M as t };

//# sourceMappingURL=upgradeAlert-DWTo2J3B.js.map