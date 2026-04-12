import { c as e, i as t } from "./constants-CIKidKvt.js";
import { t as n } from "./getValue-j5JjE6f3.js";
import { t as r } from "./setValue-31jE_mRr.js";
import { t as i } from "./calf-DxCOTxVt.js";
import { A as a, B as o, C as s, E as c, F as l, G as u, I as d, J as f, L as p, N as m, O as h, P as g, R as _, S as v, T as y, V as b, W as x, X as S, Y as C, Z as w, _ as ee, _t as T, dt as E, et as D, gt as O, j as k, n as te, nt as A, o as j, p as M, r as N, rt as P, s as ne, ut as F, v as I, z as re } from "./disclose-version-Bvjv4_yw.js";
import { t as L } from "./partial-CYzPXpZP.js";
import { t as R } from "./layout-6CPY-bfq.js";
import { t as z } from "./once-CDCBWIEZ.js";
import { t as B } from "./sendEvent-DFQy5lFi.js";
import { t as V } from "./createDiv-CH3rNL4c.js";
import { t as H } from "./insertElement-C_6uFPNr.js";
import { t as ie } from "./setInnerHtml-Dh9y9Se-.js";
import { t as ae } from "./_dataAccess-Cm9xXxBc.js";
import { t as U } from "./alpha-Dzfd-64M.js";
import { t as oe } from "./profile-DolCHxvz.js";
import { t as W } from "./onclick-8ZwMJyqI.js";
import { t as G } from "./uniq-BIFd13I0.js";
import { t as se } from "./jQueryPresent-BeJtq5OB.js";
import { t as ce } from "./indexAjaxJson-DywREKHQ.js";
import { t as le } from "./fromEntries-CXGCeH0k.js";
import { t as ue } from "./createLi-D1Lt29de.js";
import { t as de } from "./insertHtmlBeforeEnd-D5-rjWCh.js";
import { t as fe } from "./getValueJSON-B96nfhpL.js";
import { t as pe } from "./confirm.svelte-D_ae9rxv.js";
import "./legacy-DUan0FaP.js";
import { r as K, t as q } from "./pubsub-DUFBkBqq.js";
import { t as J } from "./LinkBtn-lhxAFeIb.js";
import { t as me } from "./daUseItem-CgmzU7AU.js";
import { t as he } from "./createUl-BJYpVoAQ.js";
import { n as ge, t as _e } from "./backpackOk-DHpmNvG6.js";
import { t as ve } from "./ItemImg-xlAjVAd8.js";
import { t as ye } from "./createInput-dXzC1oHv.js";
import { i as be } from "./simpleCheckbox-BrfzFmVJ.js";
import { t as xe } from "./createLabel-BGknsCKB.js";
import { t as Se } from "./FolderButtons-Lk0o0ejw.js";
import { n as Ce, t as we } from "./selfIdIs-C95X7Yin.js";
//#region src/modules/common/VirtualList.svelte
var Te = l("<svelte-virtual-list-row><!></svelte-virtual-list-row>", 2), Ee = l("<svelte-virtual-list-viewport><svelte-virtual-list-contents></svelte-virtual-list-contents></svelte-virtual-list-viewport>", 2);
function Y(e, t) {
	E(t, !0);
	let n = N(t, "height", 3, "100%"), r = N(t, "itemHeight", 3, void 0), i = N(t, "start", 15, 0), a = N(t, "end", 15, 0), c = [], l, p = A(void 0), _ = A(void 0), v = A(0), S = P(() => t.items.slice(i(), a()).map((e, t) => ({
		index: t + i(),
		data: e
	}))), w = A(void 0), O = A(0), k = A(0), M, L = 0;
	async function R(e, t, n) {
		if (L) return;
		L = !0, e.length < i() && await B(e.length - 1, { behavior: "auto" });
		let { scrollTop: r } = o(p);
		await b();
		let s = o(O) - r, u = i();
		for (; s < t && u < e.length;) {
			let e = l[u - i()];
			if (e ||= (a(u + 1), await b(), l[u - i()]), e) {
				let t = c[u] = n || e.offsetHeight;
				s += t;
			}
			u += 1;
		}
		a(u);
		let d = e.length - a();
		M = (o(O) + s) / a(), D(k, d * M), c.length = e.length, L = !1;
	}
	async function z() {
		let { scrollTop: e } = o(p);
		for (let e = 0; e < l.length; e += 1) c[i() + e] = r() || l[e].offsetHeight;
		let n = 0, s = 0;
		for (; n < t.items.length;) {
			let t = c[n] || M;
			if (s + t > e) {
				i(n), D(O, s, !0);
				break;
			}
			s += t, n += 1;
		}
		for (; n < t.items.length && (s += c[n] || M, n += 1, !(s > e + o(v))););
		a(n);
		let u = t.items.length - a();
		for (M = s / a(); n < t.items.length;) c[n++] = M;
		D(k, u * M);
	}
	async function B(e, t) {
		let { scrollTop: n } = o(p);
		t = {
			left: 0,
			top: n + (e - i()) * (r() || M),
			behavior: "smooth",
			...t
		}, o(p).scrollTo(t);
	}
	te(() => {
		l = o(_).getElementsByTagName("svelte-virtual-list-row"), D(w, !0);
	}), u(() => {
		o(w) && R(t.items, o(v), r());
	});
	var V = Ee();
	I(V, 1, "svelte-wx5j6o");
	var H = f(V);
	I(H, 1, "svelte-wx5j6o"), y(H, 21, () => o(S), (e) => e.index, (e, n) => {
		var r = Te();
		I(r, 1, "svelte-wx5j6o");
		var i = f(r), a = (e) => {
			var r = g();
			s(C(r), () => t.children, () => ({ item: o(n).data })), m(e, r);
		}, c = (e) => {
			m(e, d("Missing template"));
		};
		h(i, (e) => {
			t.children ? e(a) : e(c, -1);
		}), T(r), m(e, r);
	}), T(H), j(H, (e) => D(_, e), () => o(_)), T(V), j(V, (e) => D(p, e), () => o(p)), x(() => {
		ee(V, `height: ${n() ?? ""};`), ee(H, `padding-top: ${o(O) ?? ""}px; padding-bottom: ${o(k) ?? ""}px;`);
	}), re("scroll", V, z), ne(V, "offsetHeight", (e) => D(v, e)), m(e, V), F();
}
//#endregion
//#region src/modules/notepad/quickWear/AHInvManager/Caption.svelte
var De = l("<div class=\"svelte-1lmgu38\"> <a>AH Quick Search</a> found in your inventory</div>");
function X(t, n) {
	E(n, !0);
	let r = N(n, "data", 3, "");
	var i = De(), a = f(i), o = S(a);
	O(), T(i), x(() => {
		k(a, `Items ${r() ?? ""} from `), M(o, "href", e);
	}), _("click", o, () => B("QuickWear", "AH Quick Search", r())), m(t, i), F();
}
p(["click"]);
//#endregion
//#region src/modules/notepad/quickWear/AHInvManager/Header.svelte
var Oe = l("<div class=\"th svelte-wltbzh\"><div>Name</div> <div>Nick Name</div> <div>Inv Count</div></div>");
function ke(e) {
	m(e, Oe());
}
//#endregion
//#region src/modules/notepad/quickWear/AHInvManager/Hr.svelte
var Ae = l("<hr/>");
function je(e) {
	m(e, Ae());
}
//#endregion
//#region src/modules/notepad/quickWear/AHInvManager/ListItem.svelte
var Me = l("<a> </a>"), Ne = l("<div><div> </div> <div><!></div> <div> </div></div>");
function Pe(e, n) {
	E(n, !0);
	let r = N(n, "data", 19, () => ({}));
	var i = Ne();
	let a;
	var o = f(i), s = f(o, !0);
	T(o);
	var c = S(o, 2), l = f(c), u = (e) => {
		var n = Me(), i = f(n, !0);
		T(n), x(() => {
			M(n, "href", `${t ?? ""}${r().searchname ?? ""}`), k(i, r().nickname);
		}), _("click", n, () => B("QuickWear", "Nick Name", r().searchname)), m(e, n);
	};
	h(l, (e) => {
		r().nickname && e(u);
	}), T(c);
	var d = S(c, 2), p = f(d, !0);
	T(d), T(i), x(() => {
		a = I(i, 1, "tr svelte-1p3cb9v", null, a, { odd: r().odd }), k(s, r().searchname), k(p, r().count);
	}), m(e, i), F();
}
p(["click"]);
//#endregion
//#region src/modules/notepad/quickWear/AHInvManager/NotFound.svelte
var Fe = l("<!> <a> </a>", 1), Ie = l("<div>Did not find: <!></div>");
function Le(e, n) {
	E(n, !0);
	let r = N(n, "data", 19, () => []);
	var i = Ie();
	y(S(f(i)), 17, r, c, (e, n, r) => {
		let i = () => o(n).nickname, a = () => o(n).searchname;
		var s = Fe(), c = C(s), l = (e) => {
			m(e, d(","));
		};
		h(c, (e) => {
			r > 0 && e(l);
		});
		var u = S(c, 2), p = f(u, !0);
		T(u), x(() => {
			M(u, "href", `${t ?? ""}${a() ?? ""}`), k(p, i());
		}), _("click", u, () => B("QuickWear", "Not Found", a())), m(e, s);
	}), T(i), m(e, i), F();
}
p(["click"]);
//#endregion
//#region src/modules/notepad/quickWear/AHInvManager/AHInvManager.svelte
var Re = l("<div class=\"vs svelte-10dd8v\"><!></div>");
function ze(e, t) {
	E(t, !0);
	let n = N(t, "itemList", 3, 0), r = G(n().items, "n").map(({ n: e }) => ({
		n: e,
		count: n().items.filter(({ n: t }) => t === e).length
	})), i = G(fe("quickSearchList") || [], "searchname").sort((e, t) => U(e.searchname, t.searchname)), a = i.filter(({ searchname: e }) => r.some(({ n: t }) => t === e)).map(({ nickname: e, searchname: t }, n) => ({
		component: Pe,
		data: {
			count: r.find(({ n: e }) => e === t).count,
			nickname: e,
			odd: n % 2,
			searchname: t
		},
		id: n + 3
	})), o = ({ searchname: e }) => !r.some(({ n: t }) => t === e), s = r.filter(({ n: e }) => !a.some(({ data: { searchname: t } }) => t === e)).map(({ n: e, count: t }, n) => ({
		component: Pe,
		data: {
			count: t,
			odd: n % 2,
			searchname: e
		},
		id: n + a.length + 7
	})), c = [
		{
			component: X,
			id: 1
		},
		{
			component: ke,
			id: 2
		},
		...a,
		{
			component: je,
			id: a.length + 3
		},
		{
			component: Le,
			data: i.filter(o),
			id: a.length + 4
		},
		{
			component: je,
			id: a.length + 5
		},
		{
			component: X,
			data: "NOT",
			id: a.length + 6
		},
		...s
	];
	var l = Re();
	Y(f(l), {
		get items() {
			return c;
		},
		children: (e, t) => {
			let n = () => t?.().item;
			var r = g();
			v(C(r), () => n().component, (e, t) => {
				t(e, { get data() {
					return n().data;
				} });
			}), m(e, r);
		},
		$$slots: { default: !0 }
	}), T(l), m(e, l), F();
}
//#endregion
//#region src/modules/notepad/quickWear/AHInvManager/showAHInvManager.js
function Be(e, t) {
	return a(ze, {
		props: { itemList: e },
		target: t
	});
}
function Ve(e, t) {
	Be(e, t);
}
//#endregion
//#region src/modules/app/profile/equipitem.js
function He(e) {
	return oe({
		subcmd: "equipitem",
		inventory_id: e
	});
}
//#endregion
//#region src/modules/_dataAccess/daEquipItem.js
async function Ue(e) {
	return { s: (await ce({
		cmd: "profile",
		subcmd: "equipitem",
		inventory_id: e,
		ajax: 1
	})).r === 0 };
}
function We(e) {
	return ae(He, Ue, e);
}
//#endregion
//#region src/modules/notepad/quickWear/QuickWear.svelte
var Ge = l("<span class=\"itemUsed svelte-1kshqzm\"> </span>"), Ke = l("<span class=\"fshSpinner fshSpin12\"></span>"), qe = l("<span class=\"fshSpinner fshSpin12\"></span>"), Je = l("<span class=\"equippable svelte-1kshqzm\"><!></span> | <span class=\"usable svelte-1kshqzm\"><!></span>", 1), Ye = l("<div class=\"grid svelte-1kshqzm\"><div class=\"actionButtons svelte-1kshqzm\"><!></div> <div><!></div> <div> </div></div>"), Xe = l("<div class=\"folderButtons svelte-1kshqzm\"><!></div> <div class=\"vs svelte-1kshqzm\"><div class=\"headGrid svelte-1kshqzm\"><div class=\"headOne svelte-1kshqzm\">Actions</div> <div>Items</div></div> <!></div>", 1);
function Ze(e, t) {
	E(t, !0);
	let n = N(t, "appInv", 3, 0), r = le(n().folders.filter(({ a: e }) => e !== -1).map(({ a: e, n: t }) => [e, t])), a = (e, t) => U(e.n, t.n), s = A(w(n().items.sort(a))), c = (e) => (t) => e === -2 || t.f === e;
	function l(e) {
		B("QuickWear", "doFilter");
		let t = Number(e);
		D(s, n().items.filter(c(t)).sort(a), !0);
	}
	async function u(e, t, n, r) {
		B("QuickWear", `doAction - ${r}`);
		let i = o(s).findIndex((t) => t.a === e);
		o(s)[i][t] = 1, (await n(e)).s && (o(s)[i].used = r);
	}
	function p(e) {
		u(e, "equip", We, "Worn");
	}
	async function g(e) {
		(i.disableQuickWearPrompts || await pe("Are you sure you want to use/extract the item?")) && u(e, "use", me, "Used");
	}
	var _ = Xe(), v = C(_);
	Se(f(v), {
		doFilter: l,
		get folders() {
			return r;
		}
	}), T(v);
	var y = S(v, 2);
	Y(S(f(y), 2), {
		get items() {
			return o(s);
		},
		children: (e, t) => {
			let n = () => t?.().item;
			var r = Ye(), i = f(r), a = f(i), s = (e) => {
				var t = Ge(), r = f(t, !0);
				T(t), x(() => k(r, n().used)), m(e, t);
			}, c = (e) => {
				var t = Je(), r = C(t), i = f(r), a = (e) => {
					m(e, Ke());
				}, s = (e) => {
					{
						let t = P(() => !n().eq);
						J(e, {
							get disabled() {
								return o(t);
							},
							onclick: () => p(n().a),
							children: (e, t) => {
								O(), m(e, d("Wear"));
							},
							$$slots: { default: !0 }
						});
					}
				};
				h(i, (e) => {
					n().equip ? e(a) : e(s, -1);
				}), T(r);
				var c = S(r, 2), l = f(c), u = (e) => {
					m(e, qe());
				}, _ = (e) => {
					{
						let t = P(() => n().eq || !(n().u && !n().c));
						J(e, {
							get disabled() {
								return o(t);
							},
							onclick: () => g(n().a),
							children: (e, t) => {
								O(), m(e, d("Use/Ext"));
							},
							$$slots: { default: !0 }
						});
					}
				};
				h(l, (e) => {
					n().use ? e(u) : e(_, -1);
				}), T(c), m(e, t);
			};
			h(a, (e) => {
				n().used ? e(s) : e(c, -1);
			}), T(i);
			var l = S(i, 2);
			ve(f(l), {
				get item() {
					return n();
				},
				small: "1",
				t: "0"
			}), T(l);
			var u = S(l, 2), _ = f(u, !0);
			T(u), T(r), x(() => k(_, n().n)), m(e, r);
		},
		$$slots: { default: !0 }
	}), T(y), m(e, _), F();
}
//#endregion
//#region src/modules/notepad/quickWear/createQuickWear.js
function Qe(e, t) {
	return a(Ze, {
		props: { appInv: e },
		target: t
	});
}
function $e(e, t) {
	Qe(e, t);
}
//#endregion
//#region src/modules/notepad/quickWear/fshTabSet.js
var Z = (e, t) => e + String(t);
function et(e, t, n) {
	return ye({
		checked: n === 0,
		id: Z(e, n),
		name: e,
		type: "radio"
	});
}
function tt(e, t, n, r) {
	let i = ue({ className: "ui-state-default ui-corner-top" });
	return H(i, xe({
		htmlFor: Z(e, r),
		innerHTML: n
	})), r !== 0 && z(i, "click", () => q(Z(e, r), t[r])), W(i, () => B("QuickWear", Z(e, r))), i;
}
function nt(e, t, n) {
	let r = he({ className: "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" });
	return e.map(L(tt, t, n)).forEach(L(H, r)), r;
}
var rt = () => V({ className: "ui-tabs-panel ui-corner-bottom" });
function it(e, t, n) {
	e.map(L(et, t)).forEach(n);
}
function at(e, t, n, r) {
	let i = nt(e, t, r);
	q(`${t}-header`, i), H(n, i);
}
function ot(e, t) {
	let n = V({ className: "fshTabSet ui-tabs ui-widget-content ui-corner-all" }), r = L(H, n);
	it(e, t, r);
	let i = e.map(rt);
	return q(Z(t, 0), i[0]), at(e, t, n, i), i.forEach(r), n;
}
function st(e, t, n) {
	ie("", e), H(e, ot(t, n));
}
//#endregion
//#region src/modules/notepad/quickWear/quickWear.js
var Q = "disableQuickWearPrompts";
function ct() {
	B("QuickWear", "Toggle Prompts"), i.disableQuickWearPrompts = !i.disableQuickWearPrompts, r(Q, i.disableQuickWearPrompts);
}
function lt() {
	return [[we(Q), ct]];
}
function ut(e) {
	H(e, V({
		className: "qwPref",
		innerHTML: be(Q)
	}));
}
function dt(e, t) {
	K("qwtab-header", ut), K("qwtab0", (e) => $e(t, e)), K("qwtab1", (e) => Ve(t, e)), st(e, ["Quick Wear / Use / Extract<br>Manager", "Inventory Manager Counter<br>filtered by AH Quick Search"], "qwtab"), W(e, Ce(lt()));
}
function ft(e, t) {
	_e(t) && dt(e, t);
}
async function pt(e) {
	e && $(e).on("dialogclose", () => B("QuickWear", "Close"));
	let t = e || R();
	t && (de(t, "Getting item list from backpack..."), i.disableQuickWearPrompts = n(Q), ft(t, await ge()));
}
function mt(e) {
	se() && pt(e);
}
//#endregion
export { mt as default };

//# sourceMappingURL=quickWear-D4Iod5T4.js.map