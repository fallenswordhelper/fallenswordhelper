import "./posthog-C2Vh_0Hn.js";
import { t as e } from "./jsonStringify-TOBgUNGU.js";
import { A as t, B as n, F as r, I as i, J as a, K as o, L as s, N as c, P as l, R as u, W as d, X as f, Y as p, Z as m, _t as h, dt as g, et as _, gt as v, h as y, k as b, nt as x, o as S, r as C, ut as w } from "./disclose-version-CVZFuhb0.js";
import { t as T } from "./ModalTitled-DUBQ6MwC.js";
import { t as E } from "./sendEvent-bwvhd4A-.js";
import "./idb-sdcp-8vV.js";
import "./Modal-QdM-bPCT.js";
import "./ModalConfirm-DbhWxcda.js";
import { t as D } from "./confirm.svelte-Bk-fgsnJ.js";
import { n as O, r as k } from "./idbLogger-BsBetfEx.js";
//#region src/modules/notepad/combatLog/CombatLog.svelte
var A = r("<div class=\"textContainer svelte-7y32zu\"><textarea readonly=\"\" class=\"svelte-7y32zu\"></textarea></div> <div class=\"bottom svelte-7y32zu\"><button type=\"button\">Select All</button> <button type=\"button\">Clear</button></div>", 1);
function j(t, r) {
	g(r, !0);
	let s = C(r, "visible", 15, !0), j = x(m([])), M = x(0);
	function N() {
		E("Combat Log", "close"), s(!1);
	}
	function P() {
		n(M).focus(), n(M).select();
	}
	async function F() {
		_(j, await k() ?? [], !0);
	}
	async function I() {
		E("Combat Log", "clear storage"), await D("Are you sure you want to clear your log?") && (_(j, [], !0), O());
	}
	T(t, {
		close: N,
		get visible() {
			return s();
		},
		title: (e) => {
			v(), c(e, i("Combat Log"));
		},
		children: (t, r) => {
			var i = l();
			b(p(i), F, null, (t) => {
				var r = A(), i = p(r), s = a(i);
				o(s), S(s, (e) => _(M, e), () => n(M)), h(i);
				var l = f(i, 2), m = a(l), g = f(m, 2);
				h(l), d((e) => y(s, e), [() => e(n(j))]), u("click", m, P), u("click", g, I), c(t, r);
			}), c(t, i);
		},
		$$slots: {
			title: !0,
			default: !0
		}
	}), w();
}
s(["click"]);
//#endregion
//#region src/modules/notepad/combatLog/mountCombatLog.svelte.js
var M = m({ visible: !0 }), N = 0;
function P() {
	N ? M.visible = !0 : N = t(j, {
		props: M,
		target: document.body
	});
}
//#endregion
export { P as default };

//# sourceMappingURL=mountCombatLog.svelte-COaVlCXM.js.map