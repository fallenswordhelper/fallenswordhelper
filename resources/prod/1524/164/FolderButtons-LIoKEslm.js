import { B as e, F as t, H as n, M as r, R as i, St as a, U as o, Z as s, ft as c, pt as l, q as u, r as d, rt as f, tt as p, ut as m, vt as h } from "./disclose-version-gxrYovMN.js";
import { t as g } from "./entries-PXiXtjwA.js";
import { t as _ } from "./LinkBtn-IEOqMqOr.js";
// src/modules/common/FolderButtons.svelte
var v = n("<!><!><!><!>", 1);
function y(n, y) {
	l(y, !0);
	let b = d(y, "folders", 19, () => ({})), x = d(y, "needsWorn", 3, 0);
	var S = v(), C = p(S);
	_(C, {
		onclick: () => y.doFilter("-2"),
		children: (t, n) => {
			h();
			var r = o("All");
			e(t, r);
		},
		$$slots: { default: !0 }
	});
	var w = f(C), T = (t) => {
		_(t, {
			onclick: () => y.doFilter("-3"),
			children: (t, n) => {
				h();
				var r = o("Worn");
				e(t, r);
			},
			$$slots: { default: !0 }
		});
	};
	t(w, (e) => {
		x() && e(T);
	});
	var E = f(w);
	_(E, {
		onclick: () => y.doFilter("-1"),
		children: (t, n) => {
			h();
			var r = o("Main");
			e(t, r);
		},
		$$slots: { default: !0 }
	});
	var D = f(E);
	r(D, 17, () => g(b()), ([e, t]) => e, (t, n) => {
		var r = m(() => a(u(n), 2));
		let c = () => u(r)[0], l = () => u(r)[1];
		_(t, {
			onclick: () => y.doFilter(c()),
			children: (t, n) => {
				h();
				var r = o();
				s(() => i(r, l())), e(t, r);
			},
			$$slots: { default: !0 }
		});
	}), e(n, S), c();
}
export { y as t };

//# sourceMappingURL=FolderButtons-LIoKEslm.js.map