import { t as e } from "./getText-rCJDurvG.js";
import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import { xt as t } from "./constants-C54mky4_.js";
import { t as n } from "./isString-pOrxe2i7.js";
import { t as r } from "./querySelector-qkBBhiGH.js";
import { t as i } from "./getCustomUrlParameter-CFd8fvHs.js";
import { A as a, B as o, E as s, F as c, I as l, J as u, L as d, N as f, P as p, R as m, T as h, W as g, X as _, Y as v, Z as y, _t as b, bt as x, dt as S, et as C, gt as w, j as T, k as E, nt as D, p as O, r as k, rt as A, ut as j } from "./disclose-version-CVZFuhb0.js";
import { t as M } from "./getTextTrim-Wj82yPPN.js";
import { t as N } from "./ModalTitled-DUBQ6MwC.js";
import { t as P } from "./sendEvent-bwvhd4A-.js";
import { t as F } from "./createDiv-Bb3O54wx.js";
import { n as I, r as L } from "./idb-sdcp-8vV.js";
import "./Modal-QdM-bPCT.js";
//#region src/modules/notepad/fsboxlog/FsBoxLog.svelte
var R = c("<br/> <span><a class=\"svelte-1o21bac\"> </a> says:</span> <q> </q>", 1), z = c("<div class=\"top svelte-1o21bac\"><button type=\"button\">Clear</button></div> <div class=\"textContainer svelte-1o21bac\"><!></div>", 1);
function B(a, c) {
	S(c, !0);
	let d = k(c, "visible", 15, !0), B = D(y([]));
	function V() {
		P("FS Box Log", "close"), d(!1);
	}
	function H(t) {
		let n = F({ innerHTML: t }), a = r("a", n);
		return [
			Number(i(a?.href, "player_id")),
			e(a),
			M(r("q", n))
		];
	}
	let U = ([e, t, r]) => e && n(t) && n(r);
	async function W() {
		C(B, (await I("fsh_fsboxcontent") ?? "").split("<br>").map(H).filter(U), !0);
	}
	function G() {
		L("fsh_fsboxcontent", ""), P("FS Box Log", "clear storage"), C(B, [], !0);
	}
	N(a, {
		close: V,
		get visible() {
			return d();
		},
		title: (e) => {
			w(), f(e, l("FS Box Log"));
		},
		children: (e, n) => {
			var r = z(), i = v(r), a = u(i);
			b(i);
			var c = _(i, 2);
			E(u(c), W, null, (e) => {
				var n = p();
				h(v(n), 17, () => o(B), s, (e, n) => {
					var r = A(() => x(o(n), 3));
					let i = () => o(r)[0], a = () => o(r)[1], s = () => o(r)[2];
					var c = R(), l = _(v(c), 2), d = u(l), p = u(d, !0);
					b(d), w(), b(l);
					var m = _(l, 2), h = u(m, !0);
					b(m), g(() => {
						O(d, "href", `${t ?? ""}${i() ?? ""}`), T(p, a()), T(h, s());
					}), f(e, c);
				}), f(e, n);
			}), b(c), m("click", a, G), f(e, r);
		},
		$$slots: {
			title: !0,
			default: !0
		}
	}), j();
}
d(["click"]);
//#endregion
//#region src/modules/notepad/fsboxlog/mountFsboxlog.svelte.js
var V = y({ visible: !0 }), H = 0;
function U() {
	H ? V.visible = !0 : H = a(B, {
		props: V,
		target: document.body
	});
}
//#endregion
export { U as default };

//# sourceMappingURL=mountFsboxlog.svelte-peaXZ0OZ.js.map