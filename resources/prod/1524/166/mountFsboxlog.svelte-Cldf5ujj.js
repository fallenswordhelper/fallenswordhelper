import { t as e } from "./getText-BqjgTHLv.js";
import "./constants-CenxlFMY.js";
import { t } from "./isString-QeVlO9l8.js";
import { t as n } from "./querySelector-C6ReNysW.js";
import { t as r } from "./getCustomUrlParameter-C5vi2hsN.js";
import { B as i, G as a, H as o, I as s, L as c, M as l, N as u, R as d, St as f, U as p, V as m, W as h, Z as g, et as _, ft as v, it as y, lt as b, nt as x, pt as S, q as C, r as w, rt as T, st as E, tt as D, ut as O, vt as k, y as A, yt as j } from "./disclose-version-gxrYovMN.js";
import { t as M } from "./getTextTrim-CvXe85fp.js";
import { t as N } from "./ModalTitled-DHl8Exkm.js";
import { t as P } from "./sendEvent-yx1DwCDA.js";
import { t as F } from "./createDiv-XU2XBEIv.js";
import { n as I, r as L } from "./idb-D8xqEbs-.js";
// src/modules/notepad/fsboxlog/FsBoxLog.svelte
var R = o("<br/> <span><a class=\"svelte-1o21bac\"> </a> says:</span> <q> </q>", 1), z = o("<div class=\"top svelte-1o21bac\"><button type=\"button\">Clear</button></div> <div class=\"textContainer svelte-1o21bac\"><!></div>", 1);
function B(o, c) {
	S(c, !0);
	let h = w(c, "visible", 15, !0), B = b(y([]));
	function V() {
		P("FS Box Log", "close"), h(!1);
	}
	function H(t) {
		let i = F({ innerHTML: t }), a = n("a", i);
		return [
			Number(r(a?.href, "player_id")),
			e(a),
			M(n("q", i))
		];
	}
	let U = ([e, n, r]) => e && t(n) && t(r);
	async function W() {
		let e = await I("fsh_fsboxcontent") ?? "";
		E(B, e.split("<br>").map(H).filter(U), !0);
	}
	function G() {
		L("fsh_fsboxcontent", ""), P("FS Box Log", "clear storage"), E(B, [], !0);
	}
	N(o, {
		close: V,
		get visible() {
			return h();
		},
		title: (e) => {
			k();
			var t = p("FS Box Log");
			i(e, t);
		},
		children: (e, t) => {
			var n = z(), r = D(n), o = x(r), c = T(r, 2), p = _(c);
			s(p, W, null, (e) => {
				var t = m(), n = D(t);
				l(n, 17, () => C(B), u, (e, t) => {
					var n = O(() => f(C(t), 3));
					let r = () => C(n)[0], a = () => C(n)[1], o = () => C(n)[2];
					var s = R(), c = T(D(s), 2), l = _(c), u = x(l, !0);
					k(), j(c);
					var p = T(c, 2), m = x(p, !0);
					g(() => {
						A(l, "href", `index.php?cmd=profile&player_id=${r() ?? ""}`), d(u, a()), d(m, o());
					}), i(e, s);
				}), i(e, t);
			}), j(c), a("click", o, G), i(e, n);
		},
		$$slots: {
			title: !0,
			default: !0
		}
	}), v();
}
h(["click"]);
// src/modules/notepad/fsboxlog/mountFsboxlog.svelte.js
var V = y({ visible: !0 }), H = 0;
function U() {
	H ? V.visible = !0 : H = c(B, {
		props: V,
		target: document.body
	});
}
export { U as default };

//# sourceMappingURL=mountFsboxlog.svelte-Cldf5ujj.js.map