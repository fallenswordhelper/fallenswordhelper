import { B as e, F as t, G as n, H as r, I as i, L as a, M as o, N as s, R as c, St as l, U as u, V as d, W as f, Z as p, et as m, ft as h, it as g, lt as _, nt as v, pt as y, q as b, r as x, rt as S, st as C, tt as w, ut as T, vt as E, yt as D } from "./disclose-version-Cj0Bwtvz.js";
import { t as O } from "./sendEvent-DdWrU3DL.js";
import { t as k } from "./ModalTitled-Czm45j3-.js";
import { et as A } from "./constants-CenxlFMY.js";
import { n as j, r as M } from "./idb-D8xqEbs-.js";
// src/modules/notepad/buffLog/BuffLog.svelte
var N = r("<span class=\"fshRed\"> </span>"), P = r("<br/> <!>", 1), F = r("<div class=\"top svelte-ebl3om\"><button type=\"button\">Clear</button></div> <div class=\"textContainer svelte-ebl3om\"><!></div>", 1);
function I(r, a) {
	y(a, !0);
	let f = x(a, "visible", 15, !0), I = _(g([]));
	function L() {
		O("Buff Log", "close"), f(!1);
	}
	async function R() {
		let e = await j("fsh_buffLog") ?? "";
		C(I, e.split("<br>").map((e) => [e.slice(0, 19), e.slice(20)]), !0);
	}
	function z() {
		M(A, ""), O("Buff Log", "clear storage"), C(I, [], !0);
	}
	k(r, {
		close: L,
		get visible() {
			return f();
		},
		title: (t) => {
			E();
			var n = u("Buff Log");
			e(t, n);
		},
		children: (r, a) => {
			var f = F(), h = w(f), g = v(h), _ = S(h, 2), y = m(_);
			i(y, R, null, (n) => {
				var r = d(), i = w(r);
				o(i, 17, () => b(I), s, (n, r) => {
					var i = T(() => l(b(r), 2));
					let a = () => b(i)[0], o = () => b(i)[1];
					var s = P(), d = S(w(s)), f = S(d), m = (t) => {
						var n = N(), r = v(n, !0);
						p((e) => c(r, e), [() => o().slice(21, -7)]), e(t, n);
					}, h = T(() => o().startsWith("<")), g = (t) => {
						var n = u();
						p(() => c(n, o())), e(t, n);
					};
					t(f, (e) => {
						b(h) ? e(m) : e(g, -1);
					}), p(() => c(d, ` ${a() ?? ""} `)), e(n, s);
				}), e(n, r);
			}), D(_), n("click", g, z), e(r, f);
		},
		$$slots: {
			title: !0,
			default: !0
		}
	}), h();
}
f(["click"]);
// src/modules/notepad/buffLog/mountBuffLog.svelte.js
var L = g({ visible: !0 }), R = 0;
function z() {
	R ? L.visible = !0 : R = a(I, {
		props: L,
		target: document.body
	});
}
export { z as default };

//# sourceMappingURL=mountBuffLog.svelte-DEt9-iBp.js.map