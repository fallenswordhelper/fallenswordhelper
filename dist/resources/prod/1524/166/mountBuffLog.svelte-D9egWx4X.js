import { et as e } from "./constants-CenxlFMY.js";
import { B as t, F as n, G as r, H as i, I as a, L as o, M as s, N as c, R as l, St as u, U as d, V as f, W as p, Z as m, et as h, ft as g, it as _, lt as v, nt as y, pt as b, q as x, r as S, rt as C, st as w, tt as T, ut as E, vt as D, yt as O } from "./disclose-version-gxrYovMN.js";
import { t as k } from "./ModalTitled-DHl8Exkm.js";
import { t as A } from "./sendEvent-yx1DwCDA.js";
import { n as j, r as M } from "./idb-D8xqEbs-.js";
// src/modules/notepad/buffLog/BuffLog.svelte
var N = i("<span class=\"fshRed\"> </span>"), P = i("<br/> <!>", 1), F = i("<div class=\"top svelte-ebl3om\"><button type=\"button\">Clear</button></div> <div class=\"textContainer svelte-ebl3om\"><!></div>", 1);
function I(i, o) {
	b(o, !0);
	let p = S(o, "visible", 15, !0), I = v(_([]));
	function L() {
		A("Buff Log", "close"), p(!1);
	}
	async function R() {
		let e = await j("fsh_buffLog") ?? "";
		w(I, e.split("<br>").map((e) => [e.slice(0, 19), e.slice(20)]), !0);
	}
	function z() {
		M(e, ""), A("Buff Log", "clear storage"), w(I, [], !0);
	}
	k(i, {
		close: L,
		get visible() {
			return p();
		},
		title: (e) => {
			D();
			var n = d("Buff Log");
			t(e, n);
		},
		children: (e, i) => {
			var o = F(), p = T(o), g = y(p), _ = C(p, 2), v = h(_);
			a(v, R, null, (e) => {
				var r = f(), i = T(r);
				s(i, 17, () => x(I), c, (e, r) => {
					var i = E(() => u(x(r), 2));
					let a = () => x(i)[0], o = () => x(i)[1];
					var s = P(), c = C(T(s)), f = C(c), p = (e) => {
						var n = N(), r = y(n, !0);
						m((e) => l(r, e), [() => o().slice(21, -7)]), t(e, n);
					}, h = E(() => o().startsWith("<")), g = (e) => {
						var n = d();
						m(() => l(n, o())), t(e, n);
					};
					n(f, (e) => {
						x(h) ? e(p) : e(g, -1);
					}), m(() => l(c, ` ${a() ?? ""} `)), t(e, s);
				}), t(e, r);
			}), O(_), r("click", g, z), t(e, o);
		},
		$$slots: {
			title: !0,
			default: !0
		}
	}), g();
}
p(["click"]);
// src/modules/notepad/buffLog/mountBuffLog.svelte.js
var L = _({ visible: !0 }), R = 0;
function z() {
	R ? L.visible = !0 : R = o(I, {
		props: L,
		target: document.body
	});
}
export { z as default };

//# sourceMappingURL=mountBuffLog.svelte-D9egWx4X.js.map