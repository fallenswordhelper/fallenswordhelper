import { r as e } from "./sendException-ezSEAahU.js";
import { A as t, B as n, C as r, E as i, F as a, G as o, I as s, J as c, L as l, N as u, O as d, P as f, R as p, S as ee, T as m, W as h, X as g, Y as _, Z as v, _t as y, d as b, dt as x, et as S, f as te, g as ne, gt as C, i as re, j as w, k as T, nt as E, p as D, r as O, rt as k, ut as ie, v as A, w as j, y as M, yt as ae, z as N } from "./disclose-version-Bvjv4_yw.js";
import { t as P } from "./ModalTitled-Ksl_tZBv.js";
import { t as F } from "./sendEvent-DFQy5lFi.js";
import { t as I } from "./uniq-BIFd13I0.js";
import { t as L } from "./ranksView-B_unVfPp.js";
import { t as R } from "./lastActivityToDays-CQwyIP1H.js";
import { t as oe } from "./fromEntries-CXGCeH0k.js";
import { t as z } from "./all-Csir9X7x.js";
import { t as se } from "./numberIsNaN-Y6LDm3bY.js";
import { t as ce } from "./daGuildReport-Bdf7KcXs.js";
import { t as le } from "./playerLink-B8RkPCAH.js";
import { t as B } from "./addCommas-BgpPUQrd.js";
//#region src/modules/common/SvelteTable.svelte
var ue = a("<input/>"), de = a("<option> </option>"), fe = a("<select><option> </option><!></select>"), pe = a("<th><!></th>"), me = a("<th></th>"), he = a("<tr class=\"svelte-18zqsmu\"><!><!></tr>"), ge = a("<th tabindex=\"0\"> <!></th>"), _e = a("<th></th>"), ve = a("<tr><!><!></tr>"), ye = a("<td><!></td>"), be = a("<td><span class=\"isClickable svelte-18zqsmu\" tabindex=\"0\" role=\"button\"></span></td>"), xe = a("<tr><td><!></td></tr>"), Se = a("<tr><!><!></tr> <!>", 1), Ce = a("<table><thead><!><!></thead><tbody></tbody></table>");
function V(e, t) {
	x(t, !0);
	let a = O(t, "sortOrders", 19, () => [1, -1]), l = O(t, "sortBy", 15, ""), C = O(t, "sortOrder", 31, () => v(a()?.[0] || 1)), T = O(t, "filterSelections", 31, () => v({})), P = O(t, "expanded", 31, () => v([])), F = O(t, "selected", 31, () => v([])), I = O(t, "expandRowKey", 3, null), L = O(t, "rowKey", 19, I), R = O(t, "expandSingle", 3, !1), oe = O(t, "selectSingle", 3, !1), z = O(t, "selectOnClick", 3, !1), se = O(t, "iconAsc", 3, "▲"), ce = O(t, "iconDesc", 3, "▼"), le = O(t, "iconSortable", 3, ""), B = O(t, "iconExpand", 3, "▼"), V = O(t, "iconExpanded", 3, "▲"), H = O(t, "showExpandIcon", 3, !1), we = O(t, "classNameTable", 3, ""), Te = O(t, "classNameThead", 3, ""), U = O(t, "classNameTbody", 3, ""), W = O(t, "classNameSelect", 3, ""), Ee = O(t, "classNameInput", 3, ""), G = O(t, "classNameRow", 3, null), De = O(t, "classNameCell", 3, ""), Oe = O(t, "classNameRowSelected", 3, null), ke = O(t, "classNameRowExpanded", 3, null), Ae = O(t, "classNameExpandedContent", 3, ""), je = O(t, "classNameCellExpand", 3, ""), Me = O(t, "clickCol", 3, () => {}), Ne = O(t, "clickRow", 3, () => {}), Pe = O(t, "clickExpand", 3, () => {}), Fe = O(t, "clickCell", 3, () => {}), Ie = E(() => "");
	if (!Array.isArray(P())) throw "'expanded' needs to be an array";
	if (!Array.isArray(F())) throw "'selection' needs to be an array";
	I() !== null && console.warn("'expandRowKey' is deprecated in favour of 'rowKey'"), Oe() && !L() && console.error("'rowKey' is needed to use 'classNameRowSelected'");
	let Le = t.columns.some((e) => !e.hideFilterHeader && (e.filterOptions !== void 0 || e.searchValue !== void 0)), K = E(v({})), q = k(() => Object.fromEntries(t.columns.map((e) => [e.key, e]))), Re = k(() => +!!H() + t.columns.length), ze = k(() => t.rows.filter((e) => Object.keys(T()).every((t) => {
		let r = null;
		if (n(q)[t] === void 0) return !0;
		if (!n(q)[t]?.searchValue) r = !1;
		else if (T()[t] === "") return !0;
		else n(q)[t].searchValue.length === 1 ? r = (n(q)[t].searchValue(e) + "").toLocaleLowerCase().indexOf((T()[t] + "").toLocaleLowerCase()) >= 0 : n(q)[t].searchValue.length === 2 && (r = !!n(q)[t].searchValue(e, T()[t] + ""));
		return r || T()[t] === void 0 || T()[t] === (typeof n(q)[t].filterValue == "function" ? n(q)[t].filterValue(e) : n(q)[t].value(e));
	})).map((e) => Object.assign({}, e, {
		$sortOn: n(Ie)(e),
		$expanded: L() !== null && P().indexOf(e[L()]) >= 0,
		$selected: L() !== null && F().indexOf(e[L()]) >= 0
	})).sort((e, t) => l() ? e.$sortOn > t.$sortOn ? C() : e.$sortOn < t.$sortOn ? -C() : 0 : 0)), J = (e) => [].concat(e).filter((e) => e !== null && typeof e == "string" && e !== "").join(" "), Be = () => {
		S(K, {}, !0), t.columns.forEach((e) => {
			typeof e.filterOptions == "function" ? n(K)[e.key] = e.filterOptions(t.rows) : Array.isArray(e.filterOptions) && (n(K)[e.key] = e.filterOptions.map((e) => ({
				name: e,
				value: e
			})));
		});
	};
	o(() => {
		let e = n(q)[l()];
		e !== void 0 && e.sortable === !0 && typeof e.value == "function" && S(Ie, (t) => e.value(t));
	}), o(() => {
		Le && t.columns && t.rows && Be();
	});
	let Ve = (e) => e === l() ? a()[(a().findIndex((e) => e === C()) + 1) % a().length] : a()[0], He = (e, t) => {
		t.sortable && (C(Ve(t.key)), l(C() ? t.key : void 0)), Me()({
			event: e,
			col: t,
			key: t.key
		});
	}, Y = (e, t) => {
		z() && (oe() ? F().includes(t[L()]) ? F([]) : F([t[L()]]) : F().includes(t[L()]) ? F(F().filter((e) => e != t[L()])) : F([...F(), t[L()]].sort())), Ne()({
			event: e,
			row: t
		});
	}, Ue = (e, t) => {
		t.$expanded = !t.$expanded;
		let n = t[L()];
		R() && t.$expanded ? P([n]) : R() ? P([]) : t.$expanded ? P([...P(), n]) : P(P().filter((e) => e != n)), Pe()({
			event: e,
			row: t
		});
	}, We = (e, t, n) => {
		Fe()({
			event: e,
			row: t,
			key: n
		});
	};
	var X = Ce(), Z = c(X), Q = c(Z), Ge = (e) => {
		var r = he(), a = c(r);
		m(a, 17, () => t.columns, i, (e, t) => {
			var r = pe(), a = c(r), o = (e) => {
				var r = ue();
				te(r), h((e) => {
					A(r, 1, e, "svelte-18zqsmu"), D(r, "placeholder", n(t).filterPlaceholder);
				}, [() => M(J(Ee()))]), b(r, () => T()[n(t).key], (e) => T(T()[n(t).key] = e, !0)), u(e, r);
			}, s = (e) => {
				var r = fe(), a = c(r), o = c(a, !0);
				y(a), a.value = (a.__value = void 0, ""), m(g(a), 17, () => n(K)[n(t).key], i, (e, t) => {
					var r = de(), i = c(r, !0);
					y(r);
					var a = {};
					h(() => {
						w(i, n(t).name), a !== (a = n(t).value) && (r.value = (r.__value = n(t).value) ?? "");
					}), u(e, r);
				}), y(r), h((e) => {
					A(r, 1, e, "svelte-18zqsmu"), w(o, n(t).filterPlaceholder || "");
				}, [() => M(J(W()))]), ne(r, () => T()[n(t).key], (e) => T(T()[n(t).key] = e, !0)), u(e, r);
			};
			d(a, (e) => {
				!n(t).hideFilterHeader && n(t).searchValue !== void 0 ? e(o) : !n(t).hideFilterHeader && n(K)[n(t).key] !== void 0 && e(s, 1);
			}), y(r), h((e) => A(r, 1, e, "svelte-18zqsmu"), [() => M(J([n(t).headerFilterClass]))]), u(e, r);
		});
		var o = g(a), s = (e) => {
			u(e, me());
		};
		d(o, (e) => {
			H() && e(s);
		}), y(r), u(e, r);
	};
	d(Q, (e) => {
		Le && e(Ge);
	});
	var Ke = g(Q), qe = (e) => {
		var n = f();
		r(_(n), () => t.svelteTableHeader, () => ({
			sortOrder: C(),
			sortBy: l()
		})), u(e, n);
	}, Je = (e) => {
		var r = ve(), a = c(r);
		m(a, 17, () => t.columns, i, (e, t) => {
			var r = ge(), i = c(r), a = g(i), o = (e) => {
				var t = f();
				j(_(t), () => C() === 1 ? se() : ce()), u(e, t);
			}, s = (e) => {
				var t = f();
				j(_(t), le), u(e, t);
			};
			d(a, (e) => {
				l() === n(t).key ? e(o) : n(t).sortable && e(s, 1);
			}), y(r), h((e) => {
				A(r, 1, e, "svelte-18zqsmu"), w(i, `${n(t).title ?? ""} `);
			}, [() => M(J([n(t).sortable ? "isSortable" : "", n(t).headerClass]))]), p("click", r, (e) => He(e, n(t))), N("keypress", r, (e) => e.key === "Enter" && He(e, n(t))), u(e, r);
		});
		var o = g(a), s = (e) => {
			u(e, _e());
		};
		d(o, (e) => {
			H() && e(s);
		}), y(r), u(e, r);
	};
	d(Ke, (e) => {
		t.svelteTableHeader ? e(qe) : e(Je, -1);
	}), y(Z);
	var $ = g(Z);
	m($, 21, () => n(ze), i, (e, a, o) => {
		var l = f(), v = _(l), b = (e) => {
			var i = f();
			r(_(i), () => t.svelteTableRow, () => ({
				row: n(a),
				n: o
			})), u(e, i);
		}, x = (e) => {
			var l = Se(), v = _(l), b = c(v);
			m(b, 17, () => t.columns, i, (e, t, r) => {
				var i = ye(), l = c(i), m = (e) => {
					let r = k(() => n(t).renderComponent.component || n(t).renderComponent);
					var i = f();
					ee(_(i), () => n(r), (e, r) => {
						r(e, re(() => n(t).renderComponent.props || {}, {
							get row() {
								return n(a);
							},
							get col() {
								return n(t);
							}
						}));
					}), u(e, i);
				}, g = (e) => {
					var i = f();
					j(_(i), () => n(t).renderValue ? n(t).renderValue(n(a), o, r) : n(t).value(n(a), o, r)), u(e, i);
				}, v = (e) => {
					var i = s();
					h((e) => w(i, e), [() => n(t).renderValue ? n(t).renderValue(n(a), o, r) : n(t).value(n(a), o, r)]), u(e, i);
				};
				d(l, (e) => {
					n(t).renderComponent ? e(m) : n(t).parseHTML ? e(g, 1) : e(v, -1);
				}), y(i), h((e) => A(i, 1, e, "svelte-18zqsmu"), [() => M(J([
					typeof n(t).class == "string" ? n(t).class : null,
					typeof n(t).class == "function" ? n(t).class(n(a), o, r) : null,
					De()
				]))]), p("click", i, (e) => We(e, n(a), n(t).key)), N("keypress", i, (e) => e.key === "Enter" && We(e, n(a), n(t).key)), u(e, i);
			});
			var x = g(b), S = (e) => {
				var t = be(), r = c(t);
				j(r, () => n(a).$expanded ? B() : V(), !0), y(r), y(t), h((e) => A(t, 1, e, "svelte-18zqsmu"), [() => M(J(je()))]), p("click", r, (e) => Ue(e, n(a))), N("keypress", r, (e) => e.key === "Enter" && Ue(e, n(a))), u(e, t);
			};
			d(x, (e) => {
				H() && e(S);
			}), y(v);
			var te = g(v, 2), ne = (e) => {
				var i = xe(), s = c(i);
				r(c(s), () => t.svelteTableExpanded ?? ae, () => ({
					row: n(a),
					n: o
				})), y(s), y(i), h((e) => {
					A(i, 1, e, "svelte-18zqsmu"), D(s, "colspan", n(Re));
				}, [() => M(J(Ae()))]), u(e, i);
			};
			d(te, (e) => {
				n(a).$expanded && e(ne);
			}), h((e) => {
				A(v, 1, e, "svelte-18zqsmu"), D(v, "tabindex", z() ? "0" : null);
			}, [() => M(J([
				typeof G() == "string" ? G() : null,
				typeof G() == "function" ? G()(n(a), o) : null,
				n(a).$expanded && ke(),
				n(a).$selected && Oe()
			]))]), p("click", v, (e) => Y(e, n(a))), N("keypress", v, (e) => e.key === "Enter" && Y(e, n(a))), u(e, l);
		};
		d(v, (e) => {
			t.svelteTableRow ? e(b) : e(x, -1);
		}), u(e, l);
	}), y($), y(X), h((e, t, n) => {
		A(X, 1, e, "svelte-18zqsmu"), A(Z, 1, t, "svelte-18zqsmu"), A($, 1, n, "svelte-18zqsmu");
	}, [
		() => M(J(we())),
		() => M(J(Te())),
		() => M(J(U()))
	]), u(e, X), ie();
}
l(["click"]);
//#endregion
//#region src/modules/notepad/whosGotWhat/WhosGotWhat.svelte
var H = a("<div class=\"content svelte-1u8rhii\"><!></div>");
function we(e, t) {
	x(t, !0);
	let r = O(t, "visible", 15, !0), i = [
		{
			key: "slot",
			title: "Slot",
			value: (e) => e.slot,
			sortable: !0
		},
		{
			key: "name",
			title: "Name",
			value: (e) => e.name,
			sortable: !0,
			renderValue: (e) => le(e.id, e.name),
			parseHTML: !0
		},
		{
			key: "level",
			title: "Level",
			value: (e) => e.level,
			sortable: !0
		},
		{
			key: "rank",
			title: "Rank",
			value: (e) => e.rank,
			sortable: !0
		},
		{
			key: "guild_xp",
			title: "GXP",
			value: (e) => e.guild_xp,
			sortable: !0,
			renderValue: (e) => B(e.guild_xp)
		},
		{
			key: "activity",
			title: "Activity",
			value: (e) => e.activity,
			sortable: !0
		},
		{
			key: "pack",
			title: "Pack",
			value: (e) => e.pack,
			sortable: !0
		},
		{
			key: "max_stamina",
			title: "Stam",
			value: (e) => e.max_stamina,
			sortable: !0,
			renderValue: (e) => se(e.max_stamina) ? "" : B(e.max_stamina)
		}
	], a = E(v([])), o = ({ equipped: e }) => !e, l = ({ player: { id: e } }) => e, d = (e) => e.members, f = (e) => e.r.flatMap(d), p = (e) => (t, n) => ({
		...t,
		slot: n + 1,
		activity: R(t.last_activity),
		pack: e[t.id] ?? 0
	});
	function ee(e) {
		F("Whos Got What", e);
	}
	function m() {
		ee("close"), r(!1);
	}
	function g([e, t]) {
		let n = e.r.filter(o).map(l), r = oe(I(n).map((e) => [e, n.filter((t) => t === e).length]));
		return f(t).map(p(r));
	}
	async function _() {
		let [e, t] = await z([ce(), L()]);
		e?.s && t?.s && S(a, g([e, t]), !0);
	}
	let b = k(() => {
		if (r()) return _();
	});
	P(e, {
		close: m,
		get visible() {
			return r();
		},
		title: (e) => {
			C(), u(e, s("Who's Got What"));
		},
		children: (e, t) => {
			var r = H();
			T(c(r), () => n(b), (e) => {
				u(e, s("Loading..."));
			}, (e) => {
				V(e, {
					classNameTable: "whos-got-what",
					get columns() {
						return i;
					},
					get rows() {
						return n(a);
					}
				});
			}, (e, t) => {
				var r = s();
				h(() => w(r, n(t))), u(e, r);
			}), y(r), u(e, r);
		},
		$$slots: {
			title: !0,
			default: !0
		}
	}), ie();
}
//#endregion
//#region src/modules/notepad/whosGotWhat/mountWhosGotWhat.svelte.js
var Te = /* @__PURE__ */ e({ default: () => Ee }), U = v({ visible: !0 }), W = 0;
function Ee() {
	W ? U.visible = !0 : W = t(we, {
		props: U,
		target: document.body
	});
}
//#endregion
export { Te as t };

//# sourceMappingURL=mountWhosGotWhat.svelte-B2wdEPZW.js.map