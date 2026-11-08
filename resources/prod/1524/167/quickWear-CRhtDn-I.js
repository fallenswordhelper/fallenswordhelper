import { n as e, t } from "./backpackOk-CZXsd2lE.js";
import { t as n } from "./sendEvent-Co2_qySS.js";
import { t as r } from "./createDiv-B84RqGfo.js";
import { n as i, t as a } from "./selfIdIs-R0PGIjS5.js";
import { t as o } from "./insertElement-6ZBKaryO.js";
import { t as s } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as c } from "./jQueryPresent-DUWNBls9.js";
import { t as l } from "./onclick-nv-Fl1th.js";
import { r as u } from "./simpleCheckbox-BrCsqZ3Q.js";
import { t as d } from "./calf-SqS2SeU4.js";
import { t as f } from "./layout-B2Q1UoM2.js";
import { r as p, t as m } from "./pubsub-BYaMDwR_.js";
import { t as h } from "./getValue-vrUqpo0a.js";
import { t as g } from "./setValue-D-C74rTg.js";
import { A as ee, B as _, F as v, G as y, H as b, J as x, K as te, L as S, M as C, N as w, Q as ne, R as T, T as E, U as D, V as O, W as k, Z as A, et as j, f as M, ft as N, it as re, k as ie, lt as P, n as ae, nt as F, p as oe, pt as I, q as L, r as R, rt as z, st as B, tt as V, ut as H, vt as U, w as W, y as G, yt as K } from "./disclose-version-Cj0Bwtvz.js";
import { t as q } from "./alpha-BRx-EQ4u.js";
import { t as J } from "./uniq-DgWt7KlP.js";
import { t as se } from "./getValueJSON-B9u-UqpA.js";
import { c as ce } from "./constants-CenxlFMY.js";
import "./calfSystem-Bw3VlPbV.js";
import { t as le } from "./indexAjaxJson-DWeSX1ZL.js";
import { t as ue } from "./profile-By-S2hRI.js";
import { t as de } from "./_dataAccess-BLVLQyDJ.js";
import { t as fe } from "./daUseItem-BBZaLja6.js";
import { t as pe } from "./FolderButtons-JJgBqK9D.js";
import { t as me } from "./fromEntries-BytjDDMx.js";
import { t as he } from "./ItemImg-fagUY5Wo.js";
import { t as Y } from "./LinkBtn-DI1FRuvk.js";
import { t as ge } from "./confirm.svelte-BFUGCzDS.js";
import { t as _e } from "./createInput-x6h3QT7P.js";
import { t as ve } from "./createLabel-BRrb6QgO.js";
import { t as ye } from "./createLi-DyEJrNb_.js";
import { t as be } from "./createUl-C_0j3zUR.js";
import { t as xe } from "./once-D8BIpjVX.js";
import { t as X } from "./partial-Bo20zBni.js";
import { t as Se } from "./setInnerHtml-f0MFRJnQ.js";
// src/modules/common/VirtualList.svelte
var Ce = b("<svelte-virtual-list-row><!></svelte-virtual-list-row>", 2), we = b("<svelte-virtual-list-viewport><svelte-virtual-list-contents></svelte-virtual-list-contents></svelte-virtual-list-viewport>", 2);
function Te(e, t) {
	I(t, !0);
	let n = R(t, "height", 3, "100%"), r = R(t, "itemHeight", 3, void 0), i = R(t, "start", 15, 0), a = R(t, "end", 15, 0), o = [], s, c = P(void 0), l = P(void 0), u = P(0), d = H(() => t.items.slice(i(), a()).map((e, t) => ({
		index: t + i(),
		data: e
	}))), f = P(void 0), p = P(0), m = P(0), h, g = 0;
	async function y(e, t, n) {
		if (g) return;
		g = !0, e.length < i() && await S(e.length - 1, { behavior: "auto" });
		let { scrollTop: r } = L(c);
		await x();
		let l = L(p) - r, u = i();
		for (; l < t && u < e.length;) {
			let e = s[u - i()];
			if (e ||= (a(u + 1), await x(), s[u - i()]), e) {
				let t = o[u] = n || e.offsetHeight;
				l += t;
			}
			u += 1;
		}
		a(u);
		let d = e.length - a();
		h = (L(p) + l) / a(), B(m, d * h), o.length = e.length, g = !1;
	}
	async function b() {
		let { scrollTop: e } = L(c);
		for (let e = 0; e < s.length; e += 1) o[i() + e] = r() || s[e].offsetHeight;
		let n = 0, l = 0;
		for (; n < t.items.length;) {
			let t = o[n] || h;
			if (l + t > e) {
				i(n), B(p, l, !0);
				break;
			}
			l += t, n += 1;
		}
		for (; n < t.items.length && (l += o[n] || h, n += 1, !(l > e + L(u))););
		a(n);
		let d = t.items.length - a();
		for (h = l / a(); n < t.items.length;) o[n++] = h;
		B(m, d * h);
	}
	async function S(e, t) {
		let { scrollTop: n } = L(c);
		t = {
			left: 0,
			top: n + (e - i()) * (r() || h),
			behavior: "smooth",
			...t
		}, L(c).scrollTo(t);
	}
	ae(() => {
		s = L(l).getElementsByTagName("svelte-virtual-list-row"), B(f, !0);
	}), ne(() => {
		L(f) && y(t.items, L(u), r());
	});
	var w = we();
	E(w, 1, "svelte-wx5j6o");
	var T = j(w);
	E(T, 1, "svelte-wx5j6o"), C(T, 21, () => L(d), (e) => e.index, (e, n) => {
		var r = Ce();
		E(r, 1, "svelte-wx5j6o");
		var i = j(r), a = (e) => {
			var r = O(), i = V(r);
			ee(i, () => t.children, () => ({ item: L(n).data })), _(e, r);
		}, o = (e) => {
			var t = D("Missing template");
			_(e, t);
		};
		v(i, (e) => {
			t.children ? e(a) : e(o, -1);
		}), K(r), _(e, r);
	}), K(T), M(T, (e) => B(l, e), () => L(l)), K(w), M(w, (e) => B(c, e), () => L(c)), A(() => {
		W(w, `height: ${n() ?? ""};`), W(T, `padding-top: ${L(p) ?? ""}px; padding-bottom: ${L(m) ?? ""}px;`);
	}), te("scroll", w, b), oe(w, "offsetHeight", (e) => B(u, e)), _(e, w), N();
}
// src/modules/notepad/quickWear/AHInvManager/Caption.svelte
var Ee = b("<div class=\"svelte-1lmgu38\"> <a>AH Quick Search</a> found in your inventory</div>");
function De(e, t) {
	I(t, !0);
	let r = R(t, "data", 3, "");
	var i = Ee(), a = j(i), o = z(a);
	U(), K(i), A(() => {
		T(a, `Items ${r() ?? ""} from `), G(o, "href", ce);
	}), y("click", o, () => n("QuickWear", "AH Quick Search", r())), _(e, i), N();
}
k(["click"]);
// src/modules/notepad/quickWear/AHInvManager/Header.svelte
var Oe = b("<div class=\"th svelte-wltbzh\"><div>Name</div> <div>Nick Name</div> <div>Inv Count</div></div>");
function ke(e) {
	var t = Oe();
	_(e, t);
}
// src/modules/notepad/quickWear/AHInvManager/Hr.svelte
var Ae = b("<hr/>");
function je(e) {
	var t = Ae();
	_(e, t);
}
// src/modules/notepad/quickWear/AHInvManager/ListItem.svelte
var Me = b("<a> </a>"), Ne = b("<div><div> </div> <div><!></div> <div> </div></div>");
function Pe(e, t) {
	I(t, !0);
	let r = R(t, "data", 19, () => ({}));
	var i = Ne();
	let a;
	var o = j(i), s = F(o, !0), c = z(o, 2), l = j(c), u = (e) => {
		var t = Me(), i = F(t, !0);
		A(() => {
			G(t, "href", `index.php?cmd=auctionhouse&search=${r().searchname ?? ""}`), T(i, r().nickname);
		}), y("click", t, () => n("QuickWear", "Nick Name", r().searchname)), _(e, t);
	};
	v(l, (e) => {
		r().nickname && e(u);
	}), K(c);
	var d = z(c, 2), f = F(d, !0);
	K(i), A(() => {
		a = E(i, 1, "tr svelte-1p3cb9v", null, a, { odd: r().odd }), T(s, r().searchname), T(f, r().count);
	}), _(e, i), N();
}
k(["click"]);
// src/modules/notepad/quickWear/AHInvManager/NotFound.svelte
var Fe = b("<!> <a> </a>", 1), Ie = b("<div>Did not find: <!></div>");
function Le(e, t) {
	I(t, !0);
	let r = R(t, "data", 19, () => []);
	var i = Ie(), a = z(j(i));
	C(a, 17, r, w, (e, t, r) => {
		let i = () => L(t).nickname, a = () => L(t).searchname;
		var o = Fe(), s = V(o), c = (e) => {
			var t = D(",");
			_(e, t);
		};
		v(s, (e) => {
			r > 0 && e(c);
		});
		var l = z(s, 2), u = F(l, !0);
		A(() => {
			G(l, "href", `index.php?cmd=auctionhouse&search=${a() ?? ""}`), T(u, i());
		}), y("click", l, () => n("QuickWear", "Not Found", a())), _(e, o);
	}), K(i), _(e, i), N();
}
k(["click"]);
// src/modules/notepad/quickWear/AHInvManager/AHInvManager.svelte
var Re = b("<div class=\"vs svelte-10dd8v\"><!></div>");
function ze(e, t) {
	I(t, !0);
	let n = R(t, "itemList", 3, 0), r = J(n().items, "n").map(({ n: e }) => ({
		n: e,
		count: n().items.filter(({ n: t }) => t === e).length
	})), i = se("quickSearchList") || [], a = J(i, "searchname").sort((e, t) => q(e.searchname, t.searchname)), o = a.filter(({ searchname: e }) => r.some(({ n: t }) => t === e)).map(({ nickname: e, searchname: t }, n) => ({
		component: Pe,
		data: {
			count: r.find(({ n: e }) => e === t).count,
			nickname: e,
			odd: n % 2,
			searchname: t
		},
		id: n + 3
	})), s = ({ searchname: e }) => !r.some(({ n: t }) => t === e), c = r.filter(({ n: e }) => !o.some(({ data: { searchname: t } }) => t === e)).map(({ n: e, count: t }, n) => ({
		component: Pe,
		data: {
			count: t,
			odd: n % 2,
			searchname: e
		},
		id: n + o.length + 7
	})), l = [
		{
			component: De,
			id: 1
		},
		{
			component: ke,
			id: 2
		},
		...o,
		{
			component: je,
			id: o.length + 3
		},
		{
			component: Le,
			data: a.filter(s),
			id: o.length + 4
		},
		{
			component: je,
			id: o.length + 5
		},
		{
			component: De,
			data: "NOT",
			id: o.length + 6
		},
		...c
	];
	var u = Re();
	Te(j(u), {
		get items() {
			return l;
		},
		children: (e, t) => {
			let n = () => (t?.()).item;
			var r = O(), i = V(r);
			ie(i, () => n().component, (e, t) => {
				t(e, { get data() {
					return n().data;
				} });
			}), _(e, r);
		},
		$$slots: { default: !0 }
	}), K(u), _(e, u), N();
}
// src/modules/notepad/quickWear/AHInvManager/showAHInvManager.js
function Be(e, t) {
	return S(ze, {
		props: { itemList: e },
		target: t
	});
}
function Ve(e, t) {
	Be(e, t);
}
// src/modules/app/profile/equipitem.js
function He(e) {
	return ue({
		subcmd: "equipitem",
		inventory_id: e
	});
}
// src/modules/_dataAccess/daEquipItem.js
async function Ue(e) {
	return { s: (await le({
		cmd: "profile",
		subcmd: "equipitem",
		inventory_id: e,
		ajax: 1
	})).r === 0 };
}
function We(e) {
	return de(He, Ue, e);
}
// src/modules/notepad/quickWear/QuickWear.svelte
var Ge = b("<span class=\"itemUsed svelte-1kshqzm\"> </span>"), Ke = b("<span class=\"fshSpinner fshSpin12\"></span>"), qe = b("<span class=\"equippable svelte-1kshqzm\"><!></span> | <span class=\"usable svelte-1kshqzm\"><!></span>", 1), Je = b("<div class=\"grid svelte-1kshqzm\"><div class=\"actionButtons svelte-1kshqzm\"><!></div> <div><!></div> <div> </div></div>"), Ye = b("<div class=\"folderButtons svelte-1kshqzm\"><!></div> <div class=\"vs svelte-1kshqzm\"><div class=\"headGrid svelte-1kshqzm\"><div class=\"headOne svelte-1kshqzm\">Actions</div> <div>Items</div></div> <!></div>", 1);
function Xe(e, t) {
	I(t, !0);
	let r = R(t, "appInv", 3, 0), i = me(r().folders.filter(({ a: e }) => e !== -1).map(({ a: e, n: t }) => [e, t])), a = (e, t) => q(e.n, t.n), o = P(re(r().items.sort(a))), s = (e) => (t) => e === -2 || t.f === e;
	function c(e) {
		n("QuickWear", "doFilter");
		let t = Number(e);
		B(o, r().items.filter(s(t)).sort(a), !0);
	}
	async function l(e, t, r, i) {
		n("QuickWear", `doAction - ${i}`);
		let a = L(o).findIndex((t) => t.a === e);
		L(o)[a][t] = 1, (await r(e)).s && (L(o)[a].used = i);
	}
	function u(e) {
		l(e, "equip", We, "Worn");
	}
	async function f(e) {
		(d.disableQuickWearPrompts || await ge("Are you sure you want to use/extract the item?")) && l(e, "use", fe, "Used");
	}
	var p = Ye(), m = V(p), h = j(m);
	pe(h, {
		doFilter: c,
		get folders() {
			return i;
		}
	}), K(m);
	var g = z(m, 2);
	Te(z(j(g), 2), {
		get items() {
			return L(o);
		},
		children: (e, t) => {
			let n = () => (t?.()).item;
			var r = Je(), i = j(r), a = j(i), o = (e) => {
				var t = Ge(), r = F(t, !0);
				A(() => T(r, n().used)), _(e, t);
			}, s = (e) => {
				var t = qe(), r = V(t), i = j(r), a = (e) => {
					var t = Ke();
					_(e, t);
				}, o = (e) => {
					{
						let t = H(() => !n().eq);
						Y(e, {
							get disabled() {
								return L(t);
							},
							onclick: () => u(n().a),
							children: (e, t) => {
								U();
								var n = D("Wear");
								_(e, n);
							},
							$$slots: { default: !0 }
						});
					}
				};
				v(i, (e) => {
					n().equip ? e(a) : e(o, -1);
				}), K(r);
				var s = z(r, 2), c = j(s), l = (e) => {
					var t = Ke();
					_(e, t);
				}, d = (e) => {
					{
						let t = H(() => n().eq || !(n().u && !n().c));
						Y(e, {
							get disabled() {
								return L(t);
							},
							onclick: () => f(n().a),
							children: (e, t) => {
								U();
								var n = D("Use/Ext");
								_(e, n);
							},
							$$slots: { default: !0 }
						});
					}
				};
				v(c, (e) => {
					n().use ? e(l) : e(d, -1);
				}), K(s), _(e, t);
			};
			v(a, (e) => {
				n().used ? e(o) : e(s, -1);
			}), K(i);
			var c = z(i, 2), l = j(c);
			he(l, {
				get item() {
					return n();
				},
				small: "1",
				t: "0"
			}), K(c);
			var d = z(c, 2), p = F(d, !0);
			K(r), A(() => T(p, n().n)), _(e, r);
		},
		$$slots: { default: !0 }
	}), K(g), _(e, p), N();
}
// src/modules/notepad/quickWear/createQuickWear.js
function Ze(e, t) {
	return S(Xe, {
		props: { appInv: e },
		target: t
	});
}
function Qe(e, t) {
	Ze(e, t);
}
// src/modules/notepad/quickWear/fshTabSet.js
var Z = (e, t) => e + String(t);
function $e(e, t, n) {
	return _e({
		checked: n === 0,
		id: Z(e, n),
		name: e,
		type: "radio"
	});
}
function et(e, t, r, i) {
	let a = ye({ className: "ui-state-default ui-corner-top" });
	return o(a, ve({
		htmlFor: Z(e, i),
		innerHTML: r
	})), i !== 0 && xe(a, "click", () => m(Z(e, i), t[i])), l(a, () => n("QuickWear", Z(e, i))), a;
}
function tt(e, t, n) {
	let r = be({ className: "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" });
	return e.map(X(et, t, n)).forEach(X(o, r)), r;
}
var nt = () => r({ className: "ui-tabs-panel ui-corner-bottom" });
function rt(e, t, n) {
	e.map(X($e, t)).forEach(n);
}
function it(e, t, n, r) {
	let i = tt(e, t, r);
	m(`${t}-header`, i), o(n, i);
}
function at(e, t) {
	let n = r({ className: "fshTabSet ui-tabs ui-widget-content ui-corner-all" }), i = X(o, n);
	rt(e, t, i);
	let a = e.map(nt);
	return m(Z(t, 0), a[0]), it(e, t, n, a), a.forEach(i), n;
}
function ot(e, t, n) {
	Se("", e), o(e, at(t, n));
}
// src/modules/notepad/quickWear/quickWear.js
var Q = "disableQuickWearPrompts";
function st() {
	n("QuickWear", "Toggle Prompts"), d.disableQuickWearPrompts = !d.disableQuickWearPrompts, g(Q, d.disableQuickWearPrompts);
}
function ct() {
	return [[a(Q), st]];
}
function lt(e) {
	o(e, r({
		className: "qwPref",
		innerHTML: u(Q)
	}));
}
function ut(e, t) {
	p("qwtab-header", lt), p("qwtab0", (e) => Qe(t, e)), p("qwtab1", (e) => Ve(t, e)), ot(e, ["Quick Wear / Use / Extract<br>Manager", "Inventory Manager Counter<br>filtered by AH Quick Search"], "qwtab"), l(e, i(ct()));
}
function dt(e, n) {
	t(n) && ut(e, n);
}
async function ft(t) {
	t && $(t).on("dialogclose", () => n("QuickWear", "Close"));
	let r = t || f();
	r && (s(r, "Getting item list from backpack..."), d.disableQuickWearPrompts = h(Q), dt(r, await e()));
}
function pt(e) {
	c() && ft(e);
}
export { pt as default };

//# sourceMappingURL=quickWear-CRhtDn-I.js.map