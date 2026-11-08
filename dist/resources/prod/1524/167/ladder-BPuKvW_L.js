import { t as e } from "./interceptSubmit-QT2t7a5u.js";
import { B as t, F as n, G as r, H as i, I as a, L as o, V as s, W as c, et as l, ft as u, h as d, lt as f, pt as p, q as m, rt as h, st as g, tt as ee, ut as _, v, yt as y } from "./disclose-version-Cj0Bwtvz.js";
import { t as b } from "./indexAjaxData-BAm_dTyc.js";
import { t as x } from "./indexAjaxDoc-MnAqiGyz.js";
import { t as S } from "./getApp-xCmcyAG-.js";
import { t as C } from "./all-D5SlTl7_.js";
import { t as w } from "./fromEntries-BytjDDMx.js";
import { t as T } from "./_dataAccess-BLVLQyDJ.js";
import { t as E } from "./settingsView-9Y-DYVUF.js";
import { t as D } from "./isArray-jaX-hZZq.js";
import { t as O } from "./querySelector-C6ReNysW.js";
import { t as k } from "./getValue-vrUqpo0a.js";
import { t as A } from "./sendEvent-Co2_qySS.js";
import { t as j } from "./isBoolean-CDs7KbAY.js";
import { t as M } from "./setInnerHtml-f0MFRJnQ.js";
import { t as N } from "./setText-CVjyFkRt.js";
import { T as P } from "./constants-CenxlFMY.js";
import { c as F, n as I } from "./now-B3pCBQja.js";
import { t as L } from "./outputFormat-aHxO-pG1.js";
// src/modules/app/settings/settings.js
function R(e) {
	return S({
		cmd: "settings",
		...e
	});
}
// src/modules/app/settings/flags.js
function z(e) {
	return R({
		subcmd: "flags",
		flags: e.map((e) => +!!e)
	});
}
// src/modules/_dataAccess/daSettingsFlags.js
var B = [
	"ui_preference_11",
	"ui_preference_15",
	"disable_wordcensor",
	"ui_preference_30",
	"ui_preference_21",
	"ui_preference_33",
	"ui_preference_23"
];
function V(e, t) {
	let n = new FormData(e);
	return n.append("pvp_ladder", t), w(n.entries());
}
function H(e, t) {
	let n = new FormData(e);
	return B.forEach((e, r) => n.set(e, t[r + 1])), w(n.entries());
}
async function U(e) {
	let t = await x({ cmd: "settings" });
	if (!t) return { s: !1 };
	let n = V(t.forms[0], e[0]), r = H(t.forms[2], e);
	return await C([n, r].map((e) => b(e))), { s: !0 };
}
function te(e) {
	return T(z, U, e);
}
// src/modules/app/settings/view.js
function W() {
	return R({ subcmd: "view" });
}
// src/modules/_dataAccess/daSettingsView.js
function G() {
	return T(W, E);
}
// src/modules/ladder/OptIn.svelte
var K = i("<input type=\"checkbox\"/>"), q = i("<div class=\"svelte-lv89p4\"><span class=\"fshSpinner fshSpinner12 svelte-lv89p4\"></span></div>"), J = i("<td class=\"svelte-lv89p4\"><!></td>"), Y = i("<td class=\"svelte-lv89p4\"><div class=\"svelte-lv89p4\"><span class=\"fshSpinner fshSpinner12 svelte-lv89p4\"></span></div></td>"), X = i("<tr><td class=\"svelte-lv89p4\"><span data-tooltip=\"Ticking this box opts you in to the PVP Ladder,\n        unticking it will remove you from the PVP Ladder.\" class=\"svelte-lv89p4\">PvP Ladder Opt-in:</span></td><!></tr>");
function Z(e, i) {
	p(i, !0);
	let o = f(void 0);
	async function c() {
		g(o, await i.isOnLadder(), !0);
	}
	let b = f(void 0);
	function x() {
		g(o, !m(o)), g(b, i.toggleLadder(m(o)), !0), A("ladder", "opt in/out");
	}
	var S = X(), C = h(l(S));
	a(C, c, (e) => {
		var n = Y();
		t(e, n);
	}, (e) => {
		var i = s(), c = ee(i), u = (e) => {
			var n = J(), i = l(n);
			a(i, () => m(b), (e) => {
				var n = q();
				t(e, n);
			}, (e) => {
				var n = K();
				v(n), r("click", n, x), d(n, () => m(o), (e) => g(o, e)), t(e, n);
			}), y(n), t(e, n);
		}, f = _(() => j(m(o)));
		n(c, (e) => {
			m(f) && e(u);
		}), t(e, i);
	}), y(S), t(e, S), u();
}
c(["click"]);
// src/modules/ladder/optInWidget.js
var Q = 0;
async function ne() {
	return Q = (await G())?.r?.flags, Q?.[0];
}
function re(e) {
	if (D(Q)) return Q[0] = e, te(Q);
}
function ie(e) {
	return o(Z, {
		props: {
			toggleLadder: re,
			isOnLadder: ne
		},
		target: e
	});
}
function ae() {
	if (!k("optInOnLadderPage")) return;
	let e = O("#pCC table tbody");
	e && ie(e);
}
// src/modules/ladder/trackLastReset.js
function oe(e) {
	let t = Math.floor((I() - e) / 6e4), n = Math.floor(t / 60);
	return t %= 60, `${L(n, " hours, ") + t} mins`;
}
function $() {
	let e = k(P);
	return e < F() ? "<span class=\"fshLink tip-static\" data-tipped=\"FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.\">???</span>" : oe(e);
}
function se(e) {
	let t = e.insertCell(-1);
	t.height = 25, N("Last Reset:", t);
}
function ce(e) {
	let t = e.insertCell(-1);
	t.align = "right", M($(), t);
}
function le() {
	let e = O("#pCC table");
	if (!e) return;
	let t = e.insertRow(-1);
	se(t), ce(t);
}
function ue() {
	k("trackLadderReset") && le();
}
// src/modules/ladder/ladder.js
function de() {
	e(), ue(), ae();
}
export { de as default };

//# sourceMappingURL=ladder-BPuKvW_L.js.map