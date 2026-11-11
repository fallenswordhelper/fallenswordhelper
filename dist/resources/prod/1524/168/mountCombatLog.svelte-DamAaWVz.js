import { B as e, G as t, H as n, I as r, L as i, U as a, V as o, W as s, Z as c, b as l, dt as u, et as d, f, ft as p, it as m, lt as h, pt as g, q as _, r as v, rt as y, st as b, tt as x, vt as S, yt as C } from "./disclose-version-Cj0Bwtvz.js";
import { t as w } from "./sendEvent-DdWrU3DL.js";
import { t as T } from "./jsonStringify-DbCVtu3B.js";
import { t as E } from "./confirm.svelte-BFUGCzDS.js";
import { t as D } from "./ModalTitled-Czm45j3-.js";
import { n as O, r as k } from "./idbLogger-Dddz86m3.js";
// src/modules/notepad/combatLog/CombatLog.svelte
var A = n("<div class=\"textContainer svelte-7y32zu\"><textarea readonly=\"\" class=\"svelte-7y32zu\"></textarea></div> <div class=\"bottom svelte-7y32zu\"><button type=\"button\">Select All</button> <button type=\"button\">Clear</button></div>", 1);
function j(n, i) {
	g(i, !0);
	let s = v(i, "visible", 15, !0), j = h(m([])), M = h(0);
	function N() {
		w("Combat Log", "close"), s(!1);
	}
	function P() {
		_(M).focus(), _(M).select();
	}
	async function F() {
		b(j, await k() ?? [], !0);
	}
	async function I() {
		w("Combat Log", "clear storage"), await E("Are you sure you want to clear your log?") && (b(j, [], !0), O());
	}
	D(n, {
		close: N,
		get visible() {
			return s();
		},
		title: (t) => {
			S();
			var n = a("Combat Log");
			e(t, n);
		},
		children: (n, i) => {
			var a = o(), s = x(a);
			r(s, F, null, (n) => {
				var r = A(), i = x(r), a = d(i);
				u(a), f(a, (e) => b(M, e), () => _(M)), C(i);
				var o = y(i, 2), s = d(o), p = y(s, 2);
				C(o), c((e) => l(a, e), [() => T(_(j))]), t("click", s, P), t("click", p, I), e(n, r);
			}), e(n, a);
		},
		$$slots: {
			title: !0,
			default: !0
		}
	}), p();
}
s(["click"]);
// src/modules/notepad/combatLog/mountCombatLog.svelte.js
var M = m({ visible: !0 }), N = 0;
function P() {
	N ? M.visible = !0 : N = i(j, {
		props: M,
		target: document.body
	});
}
export { P as default };

//# sourceMappingURL=mountCombatLog.svelte-DamAaWVz.js.map