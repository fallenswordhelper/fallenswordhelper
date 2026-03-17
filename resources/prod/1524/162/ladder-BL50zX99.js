import "./posthog-C2Vh_0Hn.js";
import { c as e, n as t } from "./now-DpYjGucP.js";
import "./system-De1jBRGa.js";
import { T as n } from "./constants-C54mky4_.js";
import { t as r } from "./getValue-CCThXEzy.js";
import { t as i } from "./isBoolean-ftrvSwoc.js";
import { t as a } from "./querySelector-qkBBhiGH.js";
import { t as o } from "./isArray-oWM-Qp9j.js";
import { A as s, B as c, F as l, J as u, L as d, N as f, O as p, P as m, R as h, X as g, Y as _, _t as v, dt as ee, et as y, f as b, k as x, l as S, nt as C, rt as w, ut as T } from "./disclose-version-CVZFuhb0.js";
import { t as E } from "./sendEvent-bwvhd4A-.js";
import { t as D } from "./setInnerHtml-ClDKp0Zh.js";
import { t as O } from "./getApp-B7uFgqYY.js";
import { t as k } from "./_dataAccess-tuhLVrPW.js";
import "./indexAjax-BXHvJ2Y7.js";
import { t as A } from "./indexAjaxData-CqOTihOX.js";
import { t as j } from "./indexAjaxDoc-DHqD1q8U.js";
import { t as M } from "./fromEntries-Bc4U4usg.js";
import { t as N } from "./outputFormat-Oy78OCSG.js";
import { t as P } from "./setText-C9n73usW.js";
import { t as F } from "./all-Dy4LjBGw.js";
import "./formToUrl-BROd6YBE.js";
import { t as I } from "./interceptSubmit-0losboil.js";
import { t as L } from "./settingsView-DH90lWmG.js";
//#region src/modules/app/settings/settings.js
function R(e) {
	return O({
		cmd: "settings",
		...e
	});
}
//#endregion
//#region src/modules/app/settings/flags.js
function te(e) {
	return R({
		subcmd: "flags",
		flags: e.map((e) => e ? 1 : 0)
	});
}
//#endregion
//#region src/modules/_dataAccess/daSettingsFlags.js
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
	return t ? (await F([B(t.forms[0], e[0]), V(t.forms[2], e)].map((e) => A(e))), { s: !0 }) : { s: !1 };
}
function U(e) {
	return k(te, H, e);
}
//#endregion
//#region src/modules/app/settings/view.js
function W() {
	return R({ subcmd: "view" });
}
//#endregion
//#region src/modules/_dataAccess/daSettingsView.js
function G() {
	return k(W, L);
}
//#endregion
//#region src/modules/ladder/OptIn.svelte
var K = l("<input type=\"checkbox\"/>"), q = l("<div class=\"svelte-lv89p4\"><span class=\"fshSpinner fshSpinner12 svelte-lv89p4\"></span></div>"), J = l("<td class=\"svelte-lv89p4\"><!></td>"), Y = l("<td class=\"svelte-lv89p4\"><div class=\"svelte-lv89p4\"><span class=\"fshSpinner fshSpinner12 svelte-lv89p4\"></span></div></td>"), X = l("<tr><td class=\"svelte-lv89p4\"><span data-tooltip=\"Ticking this box opts you in to the PVP Ladder,\n        unticking it will remove you from the PVP Ladder.\" class=\"svelte-lv89p4\">PvP Ladder Opt-in:</span></td><!></tr>");
function Z(e, t) {
	ee(t, !0);
	let n = C(void 0);
	async function r() {
		y(n, await t.isOnLadder(), !0);
	}
	let a = C(void 0);
	function o() {
		y(n, !c(n)), y(a, t.toggleLadder(c(n)), !0), E("ladder", "opt in/out");
	}
	var s = X();
	x(g(u(s)), r, (e) => {
		f(e, Y());
	}, (e) => {
		var t = m(), r = _(t), s = (e) => {
			var t = J();
			x(u(t), () => c(a), (e) => {
				f(e, q());
			}, (e) => {
				var t = K();
				b(t), h("click", t, o), S(t, () => c(n), (e) => y(n, e)), f(e, t);
			}), v(t), f(e, t);
		}, l = w(() => i(c(n)));
		p(r, (e) => {
			c(l) && e(s);
		}), f(e, t);
	}), v(s), f(e, s), T();
}
d(["click"]);
//#endregion
//#region src/modules/ladder/optInWidget.js
var Q = 0;
async function ne() {
	return Q = (await G())?.r?.flags, Q?.[0];
}
function re(e) {
	if (o(Q)) return Q[0] = e, U(Q);
}
function ie(e) {
	return s(Z, {
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
//#endregion
//#region src/modules/ladder/trackLastReset.js
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
//#endregion
//#region src/modules/ladder/ladder.js
function de() {
	I(), ue(), ae();
}
//#endregion
export { de as default };

//# sourceMappingURL=ladder-BL50zX99.js.map