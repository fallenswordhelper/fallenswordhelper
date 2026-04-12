import { B as e, F as t, I as n, N as r, O as i, T as a, W as o, X as s, Y as c, bt as l, dt as u, gt as d, j as f, r as p, rt as m, ut as h } from "./disclose-version-Bvjv4_yw.js";
import { t as g } from "./entries-CiJ6YMwx.js";
import { t as _ } from "./LinkBtn-lhxAFeIb.js";
//#region src/modules/common/FolderButtons.svelte
var v = t("<!><!><!><!>", 1);
function y(t, y) {
	u(y, !0);
	let b = p(y, "folders", 19, () => ({})), x = p(y, "needsWorn", 3, 0);
	var S = v(), C = c(S);
	_(C, {
		onclick: () => y.doFilter("-2"),
		children: (e, t) => {
			d(), r(e, n("All"));
		},
		$$slots: { default: !0 }
	});
	var w = s(C), T = (e) => {
		_(e, {
			onclick: () => y.doFilter("-3"),
			children: (e, t) => {
				d(), r(e, n("Worn"));
			},
			$$slots: { default: !0 }
		});
	};
	i(w, (e) => {
		x() && e(T);
	});
	var E = s(w);
	_(E, {
		onclick: () => y.doFilter("-1"),
		children: (e, t) => {
			d(), r(e, n("Main"));
		},
		$$slots: { default: !0 }
	}), a(s(E), 17, () => g(b()), ([e, t]) => e, (t, i) => {
		var a = m(() => l(e(i), 2));
		let s = () => e(a)[0], c = () => e(a)[1];
		_(t, {
			onclick: () => y.doFilter(s()),
			children: (e, t) => {
				d();
				var i = n();
				o(() => f(i, c())), r(e, i);
			},
			$$slots: { default: !0 }
		});
	}), r(t, S), h();
}
//#endregion
export { y as t };

//# sourceMappingURL=FolderButtons-Lk0o0ejw.js.map