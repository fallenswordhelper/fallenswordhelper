import { c as e, n as t } from "./now-B3pCBQja.js";
import { T as n } from "./constants-CenxlFMY.js";
import { t as r } from "./getValue-Aap0zlcO.js";
import { t as i } from "./isBoolean-CDs7KbAY.js";
import { t as a } from "./querySelector-C6ReNysW.js";
import { t as o } from "./isArray-jaX-hZZq.js";
import { B as s, F as c, G as l, H as u, I as d, L as f, V as p, W as m, et as h, ft as g, h as _, lt as v, pt as ee, q as y, rt as b, st as x, tt as S, ut as C, v as w, yt as T } from "./disclose-version-gxrYovMN.js";
import { t as E } from "./sendEvent-DkxfZozg.js";
import { t as D } from "./setInnerHtml-f0MFRJnQ.js";
import { t as O } from "./getApp-ClZXM9Yf.js";
import { t as k } from "./_dataAccess-BLVLQyDJ.js";
import { t as A } from "./indexAjaxData-BcvK7Oaz.js";
import { t as j } from "./indexAjaxDoc-WR96kHce.js";
import { t as M } from "./fromEntries-BytjDDMx.js";
import { t as N } from "./outputFormat-aHxO-pG1.js";
import { t as P } from "./setText-CVjyFkRt.js";
import { t as F } from "./all-D5SlTl7_.js";
import { t as I } from "./interceptSubmit-vIdFdaaM.js";
import { t as L } from "./settingsView-QenOP-i6.js";
// src/modules/app/settings/settings.js
function R(e) {
	return O({
		cmd: "settings",
		...e
	});
}
// src/modules/app/settings/flags.js
function te(e) {
	return R({
		subcmd: "flags",
		flags: e.map((e) => +!!e)
	});
}
// src/modules/_dataAccess/daSettingsFlags.js
var z = [
	"ui_preference_11",
	"ui_preference_15",
	"disable_wordcensor",
	"ui_preference_30",
	"ui_preference_21",
	"ui_preference_33",
	"ui_preference_23"
];
function B(e, t) {
	let n = new FormData(e);
	return n.append("pvp_ladder", t), M(n.entries());
}
function V(e, t) {
	let n = new FormData(e);
	return z.forEach((e, r) => n.set(e, t[r + 1])), M(n.entries());
}
async function H(e) {
	let t = await j({ cmd: "settings" });
	if (!t) return { s: !1 };
	let n = B(t.forms[0], e[0]), r = V(t.forms[2], e);
	return await F([n, r].map((e) => A(e))), { s: !0 };
}
function U(e) {
	return k(te, H, e);
}
// src/modules/app/settings/view.js
function W() {
	return R({ subcmd: "view" });
}
// src/modules/_dataAccess/daSettingsView.js
function G() {
	return k(W, L);
}
// src/modules/ladder/OptIn.svelte
var K = u("<input type=\"checkbox\"/>"), q = u("<div class=\"svelte-lv89p4\"><span class=\"fshSpinner fshSpinner12 svelte-lv89p4\"></span></div>"), J = u("<td class=\"svelte-lv89p4\"><!></td>"), Y = u("<td class=\"svelte-lv89p4\"><div class=\"svelte-lv89p4\"><span class=\"fshSpinner fshSpinner12 svelte-lv89p4\"></span></div></td>"), X = u("<tr><td class=\"svelte-lv89p4\"><span data-tooltip=\"Ticking this box opts you in to the PVP Ladder,\n        unticking it will remove you from the PVP Ladder.\" class=\"svelte-lv89p4\">PvP Ladder Opt-in:</span></td><!></tr>");
function Z(e, t) {
	ee(t, !0);
	let n = v(void 0);
	async function r() {
		x(n, await t.isOnLadder(), !0);
	}
	let a = v(void 0);
	function o() {
		x(n, !y(n)), x(a, t.toggleLadder(y(n)), !0), E("ladder", "opt in/out");
	}
	var u = X(), f = b(h(u));
	d(f, r, (e) => {
		var t = Y();
		s(e, t);
	}, (e) => {
		var t = p(), r = S(t), u = (e) => {
			var t = J(), r = h(t);
			d(r, () => y(a), (e) => {
				var t = q();
				s(e, t);
			}, (e) => {
				var t = K();
				w(t), l("click", t, o), _(t, () => y(n), (e) => x(n, e)), s(e, t);
			}), T(t), s(e, t);
		}, f = C(() => i(y(n)));
		c(r, (e) => {
			y(f) && e(u);
		}), s(e, t);
	}), T(u), s(e, u), g();
}
m(["click"]);
// src/modules/ladder/optInWidget.js
var Q = 0;
async function ne() {
	return Q = (await G())?.r?.flags, Q?.[0];
}
function re(e) {
	if (o(Q)) return Q[0] = e, U(Q);
}
function ie(e) {
	return f(Z, {
		props: {
			toggleLadder: re,
			isOnLadder: ne
		},
		target: e
	});
}
function ae() {
	if (!r("optInOnLadderPage")) return;
	let e = a("#pCC table tbody");
	e && ie(e);
}
// src/modules/ladder/trackLastReset.js
function oe(e) {
	let n = Math.floor((t() - e) / 6e4), r = Math.floor(n / 60);
	return n %= 60, `${N(r, " hours, ") + n} mins`;
}
function $() {
	let t = r(n);
	return t < e() ? "<span class=\"fshLink tip-static\" data-tipped=\"FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.\">???</span>" : oe(t);
}
function se(e) {
	let t = e.insertCell(-1);
	t.height = 25, P("Last Reset:", t);
}
function ce(e) {
	let t = e.insertCell(-1);
	t.align = "right", D($(), t);
}
function le() {
	let e = a("#pCC table");
	if (!e) return;
	let t = e.insertRow(-1);
	se(t), ce(t);
}
function ue() {
	r("trackLadderReset") && le();
}
// src/modules/ladder/ladder.js
function de() {
	I(), ue(), ae();
}
export { de as default };

//# sourceMappingURL=ladder-CKCOnxTD.js.map