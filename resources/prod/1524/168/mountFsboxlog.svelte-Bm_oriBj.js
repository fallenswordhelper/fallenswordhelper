import { B as e, G as t, H as n, I as r, L as i, M as a, N as o, R as s, St as c, U as l, V as u, W as d, Z as f, et as p, ft as m, it as h, lt as g, nt as _, pt as v, q as y, r as b, rt as x, st as S, tt as C, ut as w, vt as T, y as E, yt as D } from "./disclose-version-Cj0Bwtvz.js";
import { t as O } from "./sendEvent-DdWrU3DL.js";
import { t as k } from "./createDiv-B84RqGfo.js";
import { t as A } from "./getText-BqjgTHLv.js";
import { t as j } from "./getTextTrim-CvXe85fp.js";
import { t as M } from "./isString-QeVlO9l8.js";
import { t as N } from "./querySelector-C6ReNysW.js";
import { t as P } from "./ModalTitled-Czm45j3-.js";
import "./constants-CenxlFMY.js";
import { t as F } from "./getCustomUrlParameter-OUJUdwqs.js";
import { n as I, r as L } from "./idb-D8xqEbs-.js";
// src/modules/notepad/fsboxlog/FsBoxLog.svelte
var R = n("<br/> <span><a class=\"svelte-1o21bac\"> </a> says:</span> <q> </q>", 1), z = n("<div class=\"top svelte-1o21bac\"><button type=\"button\">Clear</button></div> <div class=\"textContainer svelte-1o21bac\"><!></div>", 1);
function B(n, i) {
	v(i, !0);
	let d = b(i, "visible", 15, !0), B = g(h([]));
	function V() {
		O("FS Box Log", "close"), d(!1);
	}
	function H(e) {
		let t = k({ innerHTML: e }), n = N("a", t);
		return [
			Number(F(n?.href, "player_id")),
			A(n),
			j(N("q", t))
		];
	}
	let U = ([e, t, n]) => e && M(t) && M(n);
	async function W() {
		let e = await I("fsh_fsboxcontent") ?? "";
		S(B, e.split("<br>").map(H).filter(U), !0);
	}
	function G() {
		L("fsh_fsboxcontent", ""), O("FS Box Log", "clear storage"), S(B, [], !0);
	}
	P(n, {
		close: V,
		get visible() {
			return d();
		},
		title: (t) => {
			T();
			var n = l("FS Box Log");
			e(t, n);
		},
		children: (n, i) => {
			var l = z(), d = C(l), m = _(d), h = x(d, 2), g = p(h);
			r(g, W, null, (t) => {
				var n = u(), r = C(n);
				a(r, 17, () => y(B), o, (t, n) => {
					var r = w(() => c(y(n), 3));
					let i = () => y(r)[0], a = () => y(r)[1], o = () => y(r)[2];
					var l = R(), u = x(C(l), 2), d = p(u), m = _(d, !0);
					T(), D(u);
					var h = x(u, 2), g = _(h, !0);
					f(() => {
						E(d, "href", `index.php?cmd=profile&player_id=${i() ?? ""}`), s(m, a()), s(g, o());
					}), e(t, l);
				}), e(t, n);
			}), D(h), t("click", m, G), e(n, l);
		},
		$$slots: {
			title: !0,
			default: !0
		}
	}), m();
}
d(["click"]);
// src/modules/notepad/fsboxlog/mountFsboxlog.svelte.js
var V = h({ visible: !0 }), H = 0;
function U() {
	H ? V.visible = !0 : H = i(B, {
		props: V,
		target: document.body
	});
}
export { U as default };

//# sourceMappingURL=mountFsboxlog.svelte-Bm_oriBj.js.map