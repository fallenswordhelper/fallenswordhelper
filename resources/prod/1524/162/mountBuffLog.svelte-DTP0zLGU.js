import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import { et as e } from "./constants-C54mky4_.js";
import { A as t, B as n, E as r, F as i, I as a, J as o, L as s, N as c, O as l, P as u, R as d, T as f, W as p, X as m, Y as h, Z as g, _t as _, bt as v, dt as y, et as b, gt as x, j as S, k as C, nt as w, r as T, rt as E, ut as D } from "./disclose-version-CVZFuhb0.js";
import { t as O } from "./ModalTitled-DUBQ6MwC.js";
import { t as k } from "./sendEvent-bwvhd4A-.js";
import { n as A, r as j } from "./idb-sdcp-8vV.js";
import "./Modal-QdM-bPCT.js";
//#region src/modules/notepad/buffLog/BuffLog.svelte
var M = i("<span class=\"fshRed\"> </span>"), N = i("<br/> <!>", 1), P = i("<div class=\"top svelte-ebl3om\"><button type=\"button\">Clear</button></div> <div class=\"textContainer svelte-ebl3om\"><!></div>", 1);
function F(t, i) {
	y(i, !0);
	let s = T(i, "visible", 15, !0), F = w(g([]));
	function I() {
		k("Buff Log", "close"), s(!1);
	}
	async function L() {
		b(F, (await A("fsh_buffLog") ?? "").split("<br>").map((e) => [e.slice(0, 19), e.slice(20)]), !0);
	}
	function R() {
		j(e, ""), k("Buff Log", "clear storage"), b(F, [], !0);
	}
	O(t, {
		close: I,
		get visible() {
			return s();
		},
		title: (e) => {
			x(), c(e, a("Buff Log"));
		},
		children: (e, t) => {
			var i = P(), s = h(i), g = o(s);
			_(s);
			var y = m(s, 2);
			C(o(y), L, null, (e) => {
				var t = u();
				f(h(t), 17, () => n(F), r, (e, t) => {
					var r = E(() => v(n(t), 2));
					let i = () => n(r)[0], s = () => n(r)[1];
					var u = N(), d = m(h(u)), f = m(d), g = (e) => {
						var t = M(), n = o(t, !0);
						_(t), p((e) => S(n, e), [() => s().slice(21, -7)]), c(e, t);
					}, y = E(() => s().startsWith("<")), b = (e) => {
						var t = a();
						p(() => S(t, s())), c(e, t);
					};
					l(f, (e) => {
						n(y) ? e(g) : e(b, -1);
					}), p(() => S(d, ` ${i() ?? ""} `)), c(e, u);
				}), c(e, t);
			}), _(y), d("click", g, R), c(e, i);
		},
		$$slots: {
			title: !0,
			default: !0
		}
	}), D();
}
s(["click"]);
//#endregion
//#region src/modules/notepad/buffLog/mountBuffLog.svelte.js
var I = g({ visible: !0 }), L = 0;
function R() {
	L ? I.visible = !0 : L = t(F, {
		props: I,
		target: document.body
	});
}
//#endregion
export { R as default };

//# sourceMappingURL=mountBuffLog.svelte-DTP0zLGU.js.map