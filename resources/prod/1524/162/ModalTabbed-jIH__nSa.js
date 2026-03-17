import { B as e, E as t, F as n, J as r, L as i, N as a, O as o, P as s, R as c, S as l, T as u, W as d, Y as f, _t as p, dt as m, j as h, r as g, rt as _, ut as v, v as y } from "./disclose-version-CVZFuhb0.js";
import { t as b } from "./ModalTitled-DUBQ6MwC.js";
import { t as x } from "./sendEvent-bwvhd4A-.js";
//#region src/modules/modal/ModalTabbed.svelte
var S = n("<li><button type=\"button\" class=\"svelte-xj0602\"> </button></li>"), C = n("<ul class=\"svelte-xj0602\"></ul>");
function w(n, i) {
	m(i, !0);
	let w = g(i, "activeTabValue", 15, 0), T = g(i, "tabs", 19, () => []), E = g(i, "visible", 3, !0), D = (e, t) => () => {
		x("ModalTabbed", e), w(t);
	};
	b(n, {
		get close() {
			return i.close;
		},
		get visible() {
			return E();
		},
		title: (n) => {
			var i = C();
			u(i, 21, T, t, (t, n, i) => {
				let o = () => e(n).label;
				var s = S();
				let l;
				var u = r(s), f = _(() => D(o(), i)), m = r(u, !0);
				p(u), p(s), d(() => {
					l = y(s, 1, "svelte-xj0602", null, l, { active: w() === i }), h(m, o());
				}), c("click", u, function(...t) {
					e(f)?.apply(this, t);
				}), a(t, s);
			}), p(i), a(n, i);
		},
		children: (n, r) => {
			var i = s();
			u(f(i), 17, T, t, (t, n, r) => {
				let i = () => e(n).component;
				var c = s(), u = f(c), d = (t) => {
					let n = _(i);
					var r = s();
					l(f(r), () => e(n), (e, t) => {
						t(e, {});
					}), a(t, r);
				};
				o(u, (e) => {
					w() === r && e(d);
				}), a(t, c);
			}), a(n, i);
		},
		$$slots: {
			title: !0,
			default: !0
		}
	}), v();
}
i(["click"]);
//#endregion
export { w as t };

//# sourceMappingURL=ModalTabbed-jIH__nSa.js.map