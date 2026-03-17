import { t as e } from "./getText-rCJDurvG.js";
import { Et as t, G as n, i as r, nt as i } from "./constants-C54mky4_.js";
import { t as a } from "./getValue-CCThXEzy.js";
import { t as o } from "./setValue-Cb0PYC7t.js";
import { t as s } from "./calf-OM11NjAU.js";
import { t as c } from "./task-jKbgFyYT.js";
import { A as l, B as u, D as d, F as f, I as p, J as m, L as h, N as g, O as ee, R as _, T as te, W as v, X as y, Y as b, _t as x, dt as S, et as ne, g as re, gt as C, j as w, nt as ie, r as T, ut as E } from "./disclose-version-CVZFuhb0.js";
import { t as ae } from "./getTextTrim-Wj82yPPN.js";
import { t as oe } from "./partial-goh6HOls.js";
import { t as D } from "./layout-Bapa39KM.js";
import { t as O } from "./sendEvent-bwvhd4A-.js";
import { t as se } from "./entries-BPLrbAVw.js";
import { t as k } from "./_dataAccess-tuhLVrPW.js";
import { t as A } from "./profile-DwNdicRm.js";
import { t as ce } from "./onclick-9iRduoOH.js";
import { t as le } from "./querySelectorArray-BZbNvND7.js";
import { t as j } from "./closestTr-C0LB9ALA.js";
import { t as M } from "./fromEntries-Bc4U4usg.js";
import { t as ue } from "./jQueryNotPresent-oTtW_9Ua.js";
import { t as N } from "./hasClass-OkTHxcQE.js";
import { t as P } from "./LinkBtnBracketed-Rc3cBj0A.js";
import { t as de } from "./inventory-DgY8Lj8t.js";
import { t as fe } from "./doStatTotal-ASjvWJGO.js";
import { t as pe } from "./batch-D9tKs5xx.js";
import { t as me } from "./errorDialog-B7xXYZmL.js";
import { t as he } from "./arrayFromRadioNodeList-BjZ_9GWr.js";
import { n as F, r as I, t as L } from "./dropItem-CF0rI2de.js";
//#region src/modules/guild/inventory/storeitems/getCheckboxes.js
var R = 0, z = 0;
function B() {
	if (!z) {
		let e = s.subcmd === "dropitems" ? "removeIndex[]" : "storeIndex[]";
		R = document.forms[0]?.elements[e], z = !0;
	}
	return R;
}
//#endregion
//#region src/modules/guild/inventory/storeitems/getCheckboxesArray.js
function V() {
	let e = B();
	return e ? he(e) : [];
}
//#endregion
//#region src/modules/app/profile/sendtofolder.js
function ge(e, t) {
	return A({
		subcmd: "sendtofolder",
		folder_id: e,
		folderItem: t
	});
}
//#endregion
//#region src/modules/_dataAccess/daSendToFolder.js
async function _e(e, t) {
	return await I(t, e), { r: t };
}
function ve(e, t) {
	return k(ge, _e, e, t);
}
//#endregion
//#region src/modules/profile/dropitems/MoveItems.svelte
var ye = f("<option> </option>"), be = f("<tr><td class=\"fshCenter\"><span>Move selected items to:</span> <select class=\"customselect\"></select> <span>&nbsp;</span> <button class=\"custombutton svelte-1r30ou6\" type=\"button\">Move</button></td></tr>");
function xe(e, t) {
	S(t, !0);
	let n = ie(void 0);
	function r() {
		t.moveItemsToFolder(u(n));
	}
	var i = be(), a = m(i), o = y(m(a), 2);
	te(o, 21, () => t.folders, (e) => e.id, (e, t) => {
		var n = ye(), r = m(n, !0);
		x(n);
		var i = {};
		v(() => {
			w(r, u(t).name), i !== (i = u(t).id) && (n.value = (n.__value = u(t).id) ?? "");
		}), g(e, n);
	}), x(o);
	var s = y(o, 4);
	x(a), x(i), re(o, () => u(n), (e) => ne(n, e)), _("click", s, r), g(e, i), E();
}
h(["click"]);
//#endregion
//#region src/modules/guild/inventory/storeitems/getCheckboxesVisible.js
function H() {
	return V().filter((e) => !N("fshHide", j(e)));
}
//#endregion
//#region src/modules/guild/inventory/storeitems/getInv.js
var U = null;
async function Se() {
	let e = await de();
	if (e?.items) return {
		folders: e.folders,
		items: M(e.items.map((e) => [e.inv_id, e]))
	};
}
function W() {
	return U ||= Se(), U;
}
//#endregion
//#region src/modules/app/profile/dodropitems.js
function Ce(e) {
	return A({
		subcmd: "dodropitems",
		items: e
	});
}
//#endregion
//#region src/modules/_dataAccess/daDropItems.js
async function we(e) {
	let t = await L(e), n = { s: t.r === 0 };
	return n.s ? n.r = {
		items: [],
		deleted_items: e
	} : n.e = { message: t.m }, n;
}
function G(e) {
	return k(Ce, we, e);
}
//#endregion
//#region src/modules/guild/inventory/storeitems/buttonPress.js
function K(e) {
	return j(e.target).cells[0].children[0].value;
}
async function Te(e) {
	let { items: t } = await W();
	O("storeitems", "Check All of Type"), H().filter((n) => t[n.value] && t[n.value].item_id === t[K(e)].item_id).forEach((e) => {
		e.checked = !e.disabled && !e.checked;
	});
}
function Ee(e) {
	let t = j(e);
	t.cells[0].children[0].disabled = !0, le(".actionButton", t).forEach((e) => {
		e.disabled = !0, e.textContent = "", e.removeAttribute("data-tooltip"), e.classList.add("inProgress");
	}), e.blur(), e.classList.add("fshSpinner", "fshSpinner12");
}
function De(e, t) {
	e.target.classList.remove("fshSpinner", "fshSpinner12"), e.target.classList.add("fshGreen"), e.target.textContent = t;
}
async function q(e, t, n) {
	Ee(e.target);
	let r = await t([K(e)]);
	r?.s ? De(e, n) : me(r);
}
var Oe = [
	["Check All", Te],
	["Quick Send", (e) => {
		O("storeitems", "Quick Send"), q(e, F, "Sent");
	}],
	["Quick Drop", (e) => {
		O("storeitems", "Quick Drop"), q(e, G, "Dropped");
	}]
];
function ke(t) {
	if (t.target.tagName === "A" && ["AH", "UFSG"].includes(t.target.textContent) && O("storeitems", t.target.textContent), t.target.tagName !== "BUTTON" || N("custombutton", t.target)) return;
	let n = Oe.find(([n]) => n === e(t.target));
	n && n[1](t);
}
//#endregion
//#region src/modules/guild/inventory/storeitems/constants.js
var Ae = [
	"showExtraLinks",
	"enableItemColoring",
	"checkAllOfType",
	"showQuickSendLinks",
	"showQuickDropLinks"
], je = f("<svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper>", 1), Me = f("<svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper>&nbsp; <svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper>&nbsp; <!>", 1);
function Ne(e, t) {
	S(t, !0);
	let n = (e) => e ? "Hide" : "Show", r = T(t, "showExtraLinks", 15, !1), i = T(t, "showQuickDropLinks", 15, !1);
	function a() {
		O("storeitems", "toggleShowExtraLinks"), r(!r()), o("showExtraLinks", r()), t.doExtraLinks(r());
	}
	function c() {
		O("storeitems", "toggleShowQuickDropLinks"), i(!i()), o("showQuickDropLinks", i()), t.doDropLinks(i());
	}
	function l() {
		O("storeitems", "selectLocked"), t.doSelectLocked();
	}
	var u = Me(), f = b(u);
	d(f, () => ({ "--button-width": "11.8em" })), P(f.lastChild, {
		onclick: a,
		children: (e, t) => {
			C();
			var i = p();
			v((e) => w(i, `${e ?? ""} AH and UFSG Links`), [() => n(r())]), g(e, i);
		},
		$$slots: { default: !0 }
	}), x(f);
	var m = y(f, 2);
	d(m, () => ({ "--button-width": "10.6em" })), P(m.lastChild, {
		onclick: c,
		children: (e, t) => {
			C();
			var r = p();
			v((e) => w(r, `${e ?? ""} Quick Drop links`), [() => n(i())]), g(e, r);
		},
		$$slots: { default: !0 }
	}), x(m);
	var h = y(m, 2), _ = (e) => {
		var t = je(), n = b(t);
		d(n, () => ({ "--button-width": "10.8em" })), P(n.lastChild, {
			onclick: l,
			children: (e, t) => {
				C(), g(e, p("Select All Guild Locked"));
			},
			$$slots: { default: !0 }
		}), x(n), g(e, t);
	};
	ee(h, (e) => {
		s.subcmd2 === "storeitems" && e(_);
	}), g(e, u), E();
}
//#endregion
//#region src/modules/guild/inventory/storeitems/getItems.js
var J = null;
function Pe(e, t) {
	if (t.item_id !== 13699) return t.item_name;
	let n = e.find((e) => e.value === String(t.inv_id));
	return n ? ae(n.parentNode.parentNode.children[2]) : t.item_name;
}
async function Fe(e) {
	let t = await W();
	return t?.items ? M(se(t.items).map(([t, n]) => [t, {
		...n,
		item_name: Pe(e, n)
	}])) : {};
}
function Ie(e) {
	return J ||= Fe(e), J;
}
async function Le() {
	let e = V();
	if (!e.length) return [];
	let t = await Ie(e);
	return e.map((e) => [j(e).cells[2], t[e.value]]).filter(([, e]) => e);
}
//#endregion
//#region src/modules/guild/inventory/storeitems/updateDomItems.js
function Re(e, t) {
	return e[t] = (e[t] || 0) + 1, e;
}
function ze(e) {
	return {
		...e.map(([, e]) => e.item_id).reduce(Re, {}),
		13699: 1
	};
}
var Be = (e) => ` data-tooltip="INSTANTLY ${e} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`, Y = (e, t, n) => ` [<button class="fshStoreItemsButton ${e}"${t}>${n}</button>]`, X = (e, t, n) => Y(`${e} actionButton tooltip-multiline fshNoWrap`, Be(t), `Quick ${n}`), Z = (e, t, n) => `[<a href="${e}"${t}>${n}</a>]`;
function Ve(e) {
	return e.bound ? "<span class=\"aHSpacer\"></span>" : Z(`${r}${encodeURIComponent(e.item_name)}`, "", "AH");
}
var He = (e) => Z(`${i}items${n}view&item_id=${e.item_id}`, " target=\"_blank\"", "UFSG"), Ue = (e, t, n) => e[2] && t[n.item_id] > 1, We = (e, t) => e[3] && (!t.bound || t.guild_tag !== -1), Ge = (e, t) => e[4] && t.guild_tag === -1;
function Q(e, t) {
	return t[0]() ? e + t[1]() : e;
}
function Ke(e, t, n) {
	return [
		[() => e[0], () => `${Ve(n)} ${He(n)}`],
		[() => !0, () => `&nbsp;${n.item_name}`],
		[() => Ue(e, t, n), () => Y("fshBlack", "", "Check All")],
		[() => We(e, n), () => X("fshBlue", "SENDS", "Send")],
		[() => Ge(e, n), () => X("fshRed", "DROP", "Drop")]
	];
}
function qe(e, n, [r, i]) {
	let a = r;
	e[1] && (a.className = t[i.rarity].clas);
	let o = Ke(e, n, i).reduce(Q, "");
	a.innerHTML !== o && (a.innerHTML = o);
}
async function $(e) {
	let t = await Le();
	c(3, pe, [[
		3,
		t,
		0,
		oe(qe, e, e[2] ? ze(t) : [])
	]]);
}
//#endregion
//#region src/modules/guild/inventory/storeitems/doToggleButtons.js
async function Je() {
	let e = H();
	if (!e.length) return;
	let t = await W();
	t.items && e.map((e) => [e, t.items[e.value]]).filter(([, e]) => e).forEach(([e, t]) => {
		e.checked = !e.disabled && t.guild_tag !== -1;
	});
}
function Ye(e) {
	return function(t) {
		e[0] = t, $(e);
	};
}
function Xe(e) {
	return function(t) {
		e[4] = t, $(e);
	};
}
function Ze(e) {
	let [t] = document.forms;
	l(Ne, {
		props: {
			doDropLinks: Xe(e),
			doExtraLinks: Ye(e),
			doSelectLocked: Je,
			showExtraLinks: e[0],
			showQuickDropLinks: e[4]
		},
		target: t.parentNode.children[5].children[0]
	});
}
//#endregion
//#region src/modules/guild/inventory/storeitems/injectStoreItems.js
function Qe() {
	if (ue() || !B()) return;
	let e = Ae.map((e) => a(e));
	fe(), Ze(e), e.some((e) => e) && $(e), ce(D(), ke);
}
//#endregion
export { xe as a, B as c, H as i, G as n, ve as o, W as r, V as s, Qe as t };

//# sourceMappingURL=injectStoreItems-B3xCpn9D.js.map