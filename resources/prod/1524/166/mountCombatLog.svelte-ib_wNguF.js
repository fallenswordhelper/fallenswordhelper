import { t as e } from "./jsonStringify-DbCVtu3B.js";
import { B as t, G as n, H as r, I as i, L as a, U as o, V as s, W as c, Z as l, b as u, dt as d, et as f, f as p, ft as m, it as h, lt as g, pt as _, q as v, r as y, rt as b, st as x, tt as S, vt as C, yt as w } from "./disclose-version-gxrYovMN.js";
import { t as T } from "./ModalTitled-DHl8Exkm.js";
import { t as E } from "./sendEvent-yx1DwCDA.js";
import { t as D } from "./confirm.svelte-OuIdvYRA.js";
import { n as O, r as k } from "./idbLogger-B2LbUllY.js";
// src/modules/notepad/combatLog/CombatLog.svelte
var A = r("<div class=\"textContainer svelte-7y32zu\"><textarea readonly=\"\" class=\"svelte-7y32zu\"></textarea></div> <div class=\"bottom svelte-7y32zu\"><button type=\"button\">Select All</button> <button type=\"button\">Clear</button></div>", 1);
function j(r, a) {
	_(a, !0);
	let c = y(a, "visible", 15, !0), j = g(h([])), M = g(0);
	function N() {
		E("Combat Log", "close"), c(!1);
	}
	function P() {
		v(M).focus(), v(M).select();
	}
	async function F() {
		x(j, await k() ?? [], !0);
	}
	async function I() {
		E("Combat Log", "clear storage"), await D("Are you sure you want to clear your log?") && (x(j, [], !0), O());
	}
	T(r, {
		close: N,
		get visible() {
			return c();
		},
		title: (e) => {
			C();
			var n = o("Combat Log");
			t(e, n);
		},
		children: (r, a) => {
			var o = s(), c = S(o);
			i(c, F, null, (r) => {
				var i = A(), a = S(i), o = f(a);
				d(o), p(o, (e) => x(M, e), () => v(M)), w(a);
				var s = b(a, 2), c = f(s), m = b(c, 2);
				w(s), l((e) => u(o, e), [() => e(v(j))]), n("click", c, P), n("click", m, I), t(r, i);
			}), t(r, o);
		},
		$$slots: {
			title: !0,
			default: !0
		}
	}), m();
}
c(["click"]);
// src/modules/notepad/combatLog/mountCombatLog.svelte.js
var M = h({ visible: !0 }), N = 0;
function P() {
	N ? M.visible = !0 : N = a(j, {
		props: M,
		target: document.body
	});
}
export { P as default };

//# sourceMappingURL=mountCombatLog.svelte-ib_wNguF.js.map