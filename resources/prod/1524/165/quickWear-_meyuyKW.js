import "./calfSystem-BrOFwh3f.js";
import { c as e } from "./constants-CenxlFMY.js";
import { t } from "./getValue-Aap0zlcO.js";
import { t as n } from "./setValue-B2O8DHLF.js";
import { t as r } from "./calf-SqS2SeU4.js";
import { A as i, B as a, F as o, G as s, H as c, J as l, K as u, L as d, M as f, N as p, Q as m, R as h, T as g, U as _, V as v, W as y, Z as b, et as x, f as ee, ft as S, it as C, k as w, lt as T, n as te, nt as E, p as ne, pt as D, q as O, r as k, rt as A, st as j, tt as M, ut as N, vt as P, w as F, y as I, yt as L } from "./disclose-version-gxrYovMN.js";
import { t as R } from "./partial-Bo20zBni.js";
import { t as z } from "./layout-B2Q1UoM2.js";
import { t as B } from "./once-D8BIpjVX.js";
import { t as V } from "./sendEvent-DkxfZozg.js";
import { t as H } from "./createDiv-XU2XBEIv.js";
import { t as U } from "./insertElement-6ZBKaryO.js";
import { t as re } from "./setInnerHtml-f0MFRJnQ.js";
import { t as ie } from "./_dataAccess-BLVLQyDJ.js";
import { t as W } from "./alpha-BRx-EQ4u.js";
import { t as ae } from "./profile-BZrU9oa_.js";
import { t as G } from "./onclick-nv-Fl1th.js";
import { t as K } from "./uniq-DgWt7KlP.js";
import { t as oe } from "./jQueryPresent-DUWNBls9.js";
import { t as se } from "./indexAjaxJson-DlbvYfbd.js";
import { t as ce } from "./fromEntries-BytjDDMx.js";
import { t as le } from "./createLi-BRGADhB9.js";
import { t as ue } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as de } from "./getValueJSON-KYouMySE.js";
import { t as fe } from "./confirm.svelte-OuIdvYRA.js";
import { r as q, t as J } from "./pubsub-DiSGm5KM.js";
import { t as Y } from "./LinkBtn-IEOqMqOr.js";
import { t as pe } from "./daUseItem-KKw1U1m5.js";
import { t as me } from "./createUl-DYP2v4cB.js";
import { n as he, t as ge } from "./backpackOk-fYRPjioo.js";
import { t as _e } from "./ItemImg-BDhCTFI1.js";
import { t as ve } from "./createInput-DPgk9mYC.js";
import { i as ye } from "./simpleCheckbox-DUFnKFg1.js";
import { t as be } from "./createLabel-DTCDsteI.js";
import { t as xe } from "./FolderButtons-LIoKEslm.js";
import { n as Se, t as Ce } from "./selfIdIs-R0PGIjS5.js";
// src/modules/common/VirtualList.svelte
var we = c("<svelte-virtual-list-row><!></svelte-virtual-list-row>", 2), Te = c("<svelte-virtual-list-viewport><svelte-virtual-list-contents></svelte-virtual-list-contents></svelte-virtual-list-viewport>", 2);
function X(e, t) {
	D(t, !0);
	let n = k(t, "height", 3, "100%"), r = k(t, "itemHeight", 3, void 0), s = k(t, "start", 15, 0), c = k(t, "end", 15, 0), d = [], p, h = T(void 0), y = T(void 0), C = T(0), w = N(() => t.items.slice(s(), c()).map((e, t) => ({
		index: t + s(),
		data: e
	}))), E = T(void 0), A = T(0), P = T(0), I, R = 0;
	async function z(e, t, n) {
		if (R) return;
		R = !0, e.length < s() && await V(e.length - 1, { behavior: "auto" });
		let { scrollTop: r } = O(h);
		await l();
		let i = O(A) - r, a = s();
		for (; i < t && a < e.length;) {
			let e = p[a - s()];
			if (e ||= (c(a + 1), await l(), p[a - s()]), e) {
				let t = d[a] = n || e.offsetHeight;
				i += t;
			}
			a += 1;
		}
		c(a);
		let o = e.length - c();
		I = (O(A) + i) / c(), j(P, o * I), d.length = e.length, R = !1;
	}
	async function B() {
		let { scrollTop: e } = O(h);
		for (let e = 0; e < p.length; e += 1) d[s() + e] = r() || p[e].offsetHeight;
		let n = 0, i = 0;
		for (; n < t.items.length;) {
			let t = d[n] || I;
			if (i + t > e) {
				s(n), j(A, i, !0);
				break;
			}
			i += t, n += 1;
		}
		for (; n < t.items.length && (i += d[n] || I, n += 1, !(i > e + O(C))););
		c(n);
		let a = t.items.length - c();
		for (I = i / c(); n < t.items.length;) d[n++] = I;
		j(P, a * I);
	}
	async function V(e, t) {
		let { scrollTop: n } = O(h);
		t = {
			left: 0,
			top: n + (e - s()) * (r() || I),
			behavior: "smooth",
			...t
		}, O(h).scrollTo(t);
	}
	te(() => {
		p = O(y).getElementsByTagName("svelte-virtual-list-row"), j(E, !0);
	}), m(() => {
		O(E) && z(t.items, O(C), r());
	});
	var H = Te();
	g(H, 1, "svelte-wx5j6o");
	var U = x(H);
	g(U, 1, "svelte-wx5j6o"), f(U, 21, () => O(w), (e) => e.index, (e, n) => {
		var r = we();
		g(r, 1, "svelte-wx5j6o");
		var s = x(r), c = (e) => {
			var r = v(), o = M(r);
			i(o, () => t.children, () => ({ item: O(n).data })), a(e, r);
		}, l = (e) => {
			var t = _("Missing template");
			a(e, t);
		};
		o(s, (e) => {
			t.children ? e(c) : e(l, -1);
		}), L(r), a(e, r);
	}), L(U), ee(U, (e) => j(y, e), () => O(y)), L(H), ee(H, (e) => j(h, e), () => O(h)), b(() => {
		F(H, `height: ${n() ?? ""};`), F(U, `padding-top: ${O(A) ?? ""}px; padding-bottom: ${O(P) ?? ""}px;`);
	}), u("scroll", H, B), ne(H, "offsetHeight", (e) => j(C, e)), a(e, H), S();
}
// src/modules/notepad/quickWear/AHInvManager/Caption.svelte
var Ee = c("<div class=\"svelte-1lmgu38\"> <a>AH Quick Search</a> found in your inventory</div>");
function De(t, n) {
	D(n, !0);
	let r = k(n, "data", 3, "");
	var i = Ee(), o = x(i), c = A(o);
	P(), L(i), b(() => {
		h(o, `Items ${r() ?? ""} from `), I(c, "href", e);
	}), s("click", c, () => V("QuickWear", "AH Quick Search", r())), a(t, i), S();
}
y(["click"]);
// src/modules/notepad/quickWear/AHInvManager/Header.svelte
var Oe = c("<div class=\"th svelte-wltbzh\"><div>Name</div> <div>Nick Name</div> <div>Inv Count</div></div>");
function ke(e) {
	var t = Oe();
	a(e, t);
}
// src/modules/notepad/quickWear/AHInvManager/Hr.svelte
var Ae = c("<hr/>");
function je(e) {
	var t = Ae();
	a(e, t);
}
// src/modules/notepad/quickWear/AHInvManager/ListItem.svelte
var Me = c("<a> </a>"), Ne = c("<div><div> </div> <div><!></div> <div> </div></div>");
function Pe(e, t) {
	D(t, !0);
	let n = k(t, "data", 19, () => ({}));
	var r = Ne();
	let i;
	var c = x(r), l = E(c, !0), u = A(c, 2), d = x(u), f = (e) => {
		var t = Me(), r = E(t, !0);
		b(() => {
			I(t, "href", `index.php?cmd=auctionhouse&search=${n().searchname ?? ""}`), h(r, n().nickname);
		}), s("click", t, () => V("QuickWear", "Nick Name", n().searchname)), a(e, t);
	};
	o(d, (e) => {
		n().nickname && e(f);
	}), L(u);
	var p = A(u, 2), m = E(p, !0);
	L(r), b(() => {
		i = g(r, 1, "tr svelte-1p3cb9v", null, i, { odd: n().odd }), h(l, n().searchname), h(m, n().count);
	}), a(e, r), S();
}
y(["click"]);
// src/modules/notepad/quickWear/AHInvManager/NotFound.svelte
var Fe = c("<!> <a> </a>", 1), Ie = c("<div>Did not find: <!></div>");
function Le(e, t) {
	D(t, !0);
	let n = k(t, "data", 19, () => []);
	var r = Ie(), i = A(x(r));
	f(i, 17, n, p, (e, t, n) => {
		let r = () => O(t).nickname, i = () => O(t).searchname;
		var c = Fe(), l = M(c), u = (e) => {
			var t = _(",");
			a(e, t);
		};
		o(l, (e) => {
			n > 0 && e(u);
		});
		var d = A(l, 2), f = E(d, !0);
		b(() => {
			I(d, "href", `index.php?cmd=auctionhouse&search=${i() ?? ""}`), h(f, r());
		}), s("click", d, () => V("QuickWear", "Not Found", i())), a(e, c);
	}), L(r), a(e, r), S();
}
y(["click"]);
// src/modules/notepad/quickWear/AHInvManager/AHInvManager.svelte
var Re = c("<div class=\"vs svelte-10dd8v\"><!></div>");
function ze(e, t) {
	D(t, !0);
	let n = k(t, "itemList", 3, 0), r = K(n().items, "n").map(({ n: e }) => ({
		n: e,
		count: n().items.filter(({ n: t }) => t === e).length
	})), i = de("quickSearchList") || [], o = K(i, "searchname").sort((e, t) => W(e.searchname, t.searchname)), s = o.filter(({ searchname: e }) => r.some(({ n: t }) => t === e)).map(({ nickname: e, searchname: t }, n) => ({
		component: Pe,
		data: {
			count: r.find(({ n: e }) => e === t).count,
			nickname: e,
			odd: n % 2,
			searchname: t
		},
		id: n + 3
	})), c = ({ searchname: e }) => !r.some(({ n: t }) => t === e), l = r.filter(({ n: e }) => !s.some(({ data: { searchname: t } }) => t === e)).map(({ n: e, count: t }, n) => ({
		component: Pe,
		data: {
			count: t,
			odd: n % 2,
			searchname: e
		},
		id: n + s.length + 7
	})), u = [
		{
			component: De,
			id: 1
		},
		{
			component: ke,
			id: 2
		},
		...s,
		{
			component: je,
			id: s.length + 3
		},
		{
			component: Le,
			data: o.filter(c),
			id: s.length + 4
		},
		{
			component: je,
			id: s.length + 5
		},
		{
			component: De,
			data: "NOT",
			id: s.length + 6
		},
		...l
	];
	var d = Re();
	X(x(d), {
		get items() {
			return u;
		},
		children: (e, t) => {
			let n = () => (t?.()).item;
			var r = v(), i = M(r);
			w(i, () => n().component, (e, t) => {
				t(e, { get data() {
					return n().data;
				} });
			}), a(e, r);
		},
		$$slots: { default: !0 }
	}), L(d), a(e, d), S();
}
// src/modules/notepad/quickWear/AHInvManager/showAHInvManager.js
function Be(e, t) {
	return d(ze, {
		props: { itemList: e },
		target: t
	});
}
function Ve(e, t) {
	Be(e, t);
}
// src/modules/app/profile/equipitem.js
function He(e) {
	return ae({
		subcmd: "equipitem",
		inventory_id: e
	});
}
// src/modules/_dataAccess/daEquipItem.js
async function Ue(e) {
	return { s: (await se({
		cmd: "profile",
		subcmd: "equipitem",
		inventory_id: e,
		ajax: 1
	})).r === 0 };
}
function We(e) {
	return ie(He, Ue, e);
}
// src/modules/notepad/quickWear/QuickWear.svelte
var Ge = c("<span class=\"itemUsed svelte-1kshqzm\"> </span>"), Ke = c("<span class=\"fshSpinner fshSpin12\"></span>"), qe = c("<span class=\"equippable svelte-1kshqzm\"><!></span> | <span class=\"usable svelte-1kshqzm\"><!></span>", 1), Je = c("<div class=\"grid svelte-1kshqzm\"><div class=\"actionButtons svelte-1kshqzm\"><!></div> <div><!></div> <div> </div></div>"), Ye = c("<div class=\"folderButtons svelte-1kshqzm\"><!></div> <div class=\"vs svelte-1kshqzm\"><div class=\"headGrid svelte-1kshqzm\"><div class=\"headOne svelte-1kshqzm\">Actions</div> <div>Items</div></div> <!></div>", 1);
function Xe(e, t) {
	D(t, !0);
	let n = k(t, "appInv", 3, 0), i = ce(n().folders.filter(({ a: e }) => e !== -1).map(({ a: e, n: t }) => [e, t])), s = (e, t) => W(e.n, t.n), c = T(C(n().items.sort(s))), l = (e) => (t) => e === -2 || t.f === e;
	function u(e) {
		V("QuickWear", "doFilter");
		let t = Number(e);
		j(c, n().items.filter(l(t)).sort(s), !0);
	}
	async function d(e, t, n, r) {
		V("QuickWear", `doAction - ${r}`);
		let i = O(c).findIndex((t) => t.a === e);
		O(c)[i][t] = 1, (await n(e)).s && (O(c)[i].used = r);
	}
	function f(e) {
		d(e, "equip", We, "Worn");
	}
	async function p(e) {
		(r.disableQuickWearPrompts || await fe("Are you sure you want to use/extract the item?")) && d(e, "use", pe, "Used");
	}
	var m = Ye(), g = M(m), v = x(g);
	xe(v, {
		doFilter: u,
		get folders() {
			return i;
		}
	}), L(g);
	var y = A(g, 2);
	X(A(x(y), 2), {
		get items() {
			return O(c);
		},
		children: (e, t) => {
			let n = () => (t?.()).item;
			var r = Je(), i = x(r), s = x(i), c = (e) => {
				var t = Ge(), r = E(t, !0);
				b(() => h(r, n().used)), a(e, t);
			}, l = (e) => {
				var t = qe(), r = M(t), i = x(r), s = (e) => {
					var t = Ke();
					a(e, t);
				}, c = (e) => {
					{
						let t = N(() => !n().eq);
						Y(e, {
							get disabled() {
								return O(t);
							},
							onclick: () => f(n().a),
							children: (e, t) => {
								P();
								var n = _("Wear");
								a(e, n);
							},
							$$slots: { default: !0 }
						});
					}
				};
				o(i, (e) => {
					n().equip ? e(s) : e(c, -1);
				}), L(r);
				var l = A(r, 2), u = x(l), d = (e) => {
					var t = Ke();
					a(e, t);
				}, m = (e) => {
					{
						let t = N(() => n().eq || !(n().u && !n().c));
						Y(e, {
							get disabled() {
								return O(t);
							},
							onclick: () => p(n().a),
							children: (e, t) => {
								P();
								var n = _("Use/Ext");
								a(e, n);
							},
							$$slots: { default: !0 }
						});
					}
				};
				o(u, (e) => {
					n().use ? e(d) : e(m, -1);
				}), L(l), a(e, t);
			};
			o(s, (e) => {
				n().used ? e(c) : e(l, -1);
			}), L(i);
			var u = A(i, 2), d = x(u);
			_e(d, {
				get item() {
					return n();
				},
				small: "1",
				t: "0"
			}), L(u);
			var m = A(u, 2), g = E(m, !0);
			L(r), b(() => h(g, n().n)), a(e, r);
		},
		$$slots: { default: !0 }
	}), L(y), a(e, m), S();
}
// src/modules/notepad/quickWear/createQuickWear.js
function Ze(e, t) {
	return d(Xe, {
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
	return ve({
		checked: n === 0,
		id: Z(e, n),
		name: e,
		type: "radio"
	});
}
function et(e, t, n, r) {
	let i = le({ className: "ui-state-default ui-corner-top" });
	return U(i, be({
		htmlFor: Z(e, r),
		innerHTML: n
	})), r !== 0 && B(i, "click", () => J(Z(e, r), t[r])), G(i, () => V("QuickWear", Z(e, r))), i;
}
function tt(e, t, n) {
	let r = me({ className: "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" });
	return e.map(R(et, t, n)).forEach(R(U, r)), r;
}
var nt = () => H({ className: "ui-tabs-panel ui-corner-bottom" });
function rt(e, t, n) {
	e.map(R($e, t)).forEach(n);
}
function it(e, t, n, r) {
	let i = tt(e, t, r);
	J(`${t}-header`, i), U(n, i);
}
function at(e, t) {
	let n = H({ className: "fshTabSet ui-tabs ui-widget-content ui-corner-all" }), r = R(U, n);
	rt(e, t, r);
	let i = e.map(nt);
	return J(Z(t, 0), i[0]), it(e, t, n, i), i.forEach(r), n;
}
function ot(e, t, n) {
	re("", e), U(e, at(t, n));
}
// src/modules/notepad/quickWear/quickWear.js
var Q = "disableQuickWearPrompts";
function st() {
	V("QuickWear", "Toggle Prompts"), r.disableQuickWearPrompts = !r.disableQuickWearPrompts, n(Q, r.disableQuickWearPrompts);
}
function ct() {
	return [[Ce(Q), st]];
}
function lt(e) {
	U(e, H({
		className: "qwPref",
		innerHTML: ye(Q)
	}));
}
function ut(e, t) {
	q("qwtab-header", lt), q("qwtab0", (e) => Qe(t, e)), q("qwtab1", (e) => Ve(t, e)), ot(e, ["Quick Wear / Use / Extract<br>Manager", "Inventory Manager Counter<br>filtered by AH Quick Search"], "qwtab"), G(e, Se(ct()));
}
function dt(e, t) {
	ge(t) && ut(e, t);
}
async function ft(e) {
	e && $(e).on("dialogclose", () => V("QuickWear", "Close"));
	let n = e || z();
	n && (ue(n, "Getting item list from backpack..."), r.disableQuickWearPrompts = t(Q), dt(n, await he()));
}
function pt(e) {
	oe() && ft(e);
}
export { pt as default };

//# sourceMappingURL=quickWear-_meyuyKW.js.map