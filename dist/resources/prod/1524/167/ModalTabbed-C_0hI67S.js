import { B as e, F as t, G as n, H as r, M as i, N as a, R as o, T as s, V as c, W as l, Z as u, et as d, ft as f, k as p, nt as m, pt as h, q as g, r as _, tt as v, ut as y, yt as b } from "./disclose-version-Cj0Bwtvz.js";
import { t as x } from "./sendEvent-Co2_qySS.js";
import { t as S } from "./ModalTitled-Czm45j3-.js";
// src/modules/modal/ModalTabbed.svelte
var C = r("<li><button type=\"button\" class=\"svelte-xj0602\"> </button></li>"), w = r("<ul class=\"svelte-xj0602\"></ul>");
function T(r, l) {
	h(l, !0);
	let T = _(l, "activeTabValue", 15, 0), E = _(l, "tabs", 19, () => []), D = _(l, "visible", 3, !0), O = (e, t) => () => {
		x("ModalTabbed", e), T(t);
	};
	S(r, {
		get close() {
			return l.close;
		},
		get visible() {
			return D();
		},
		title: (t) => {
			var r = w();
			i(r, 21, E, a, (t, r, i) => {
				let a = () => g(r).label;
				var c = C();
				let l;
				var f = d(c), p = y(() => O(a(), i)), h = m(f, !0);
				b(c), u(() => {
					l = s(c, 1, "svelte-xj0602", null, l, { active: T() === i }), o(h, a());
				}), n("click", f, function(...e) {
					g(p)?.apply(this, e);
				}), e(t, c);
			}), b(r), e(t, r);
		},
		children: (n, r) => {
			var o = c(), s = v(o);
			i(s, 17, E, a, (n, r, i) => {
				let a = () => g(r).component;
				var o = c(), s = v(o), l = (t) => {
					let n = y(a);
					var r = c(), i = v(r);
					p(i, () => g(n), (e, t) => {
						t(e, {});
					}), e(t, r);
				};
				t(s, (e) => {
					T() === i && e(l);
				}), e(n, o);
			}), e(n, o);
		},
		$$slots: {
			title: !0,
			default: !0
		}
	}), f();
}
l(["click"]);
export { T as t };

//# sourceMappingURL=ModalTabbed-C_0hI67S.js.map