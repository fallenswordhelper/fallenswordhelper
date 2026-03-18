import { r as e } from "./sendException-s1csWDQs.js";
import { A as t, B as n, F as r, I as i, J as a, L as o, N as s, O as c, P as l, R as u, X as d, Y as f, Z as p, _t as m, dt as h, et as g, gt as _, k as v, nt as y, r as b, rt as x, ut as S } from "./disclose-version-CVZFuhb0.js";
import { t as C } from "./ModalTitled-DUBQ6MwC.js";
import { t as w } from "./sendEvent-bwvhd4A-.js";
import { t as T } from "./currentGuildId-Br10wzx3.js";
import { t as E } from "./getApp-B7uFgqYY.js";
import { t as D } from "./download-CPrODGU3.js";
import { t as O } from "./guildStore-CaRJOkhi.js";
//#region src/modules/notepad/gsExport/MoldDownload.svelte
var k = r("<button type=\"button\" class=\"mold-btn svelte-1hsd3o\">Download Item Groups JSON</button>"), A = r("<span class=\"error svelte-1hsd3o\">Error loading mold data</span>"), j = r("<span>Loading mold data...</span>"), M = r("<div class=\"mold-link svelte-1hsd3o\"><!></div>");
function N(e, t) {
	h(t, !0);
	let r = y(p(Promise.resolve(null)));
	function i(e) {
		let t = e.r.molds?.find((e) => e.filename === "item_groups.json");
		if (!t) throw Error("Failed to load mold data");
		let n = `${e.r.cdns[0]}${t.filename}`;
		return window.open(n, "_blank"), null;
	}
	async function o() {
		let e = await E({ cmd: "molds" });
		if (e?.s && e.r?.molds && e.r?.cdns?.length) return i(e);
		throw Error("Failed to load mold data");
	}
	function c() {
		w("GS Export", "Items Mold"), g(r, o(), !0);
	}
	var l = M();
	v(a(l), () => n(r), (e) => {
		s(e, j());
	}, (e) => {
		var t = k();
		u("click", t, c), s(e, t);
	}, (e) => {
		s(e, A());
	}), m(l), s(e, l), S();
}
o(["click"]);
//#endregion
//#region src/modules/notepad/gsExport/CsvExport.svelte
var P = r("<p class=\"error svelte-d95mlu\">You must be in a guild to use this feature.</p>"), F = r("<div class=\"export-ready svelte-d95mlu\"><p class=\"success svelte-d95mlu\">Export ready! Click the button below to download your file.</p> <button type=\"button\" class=\"svelte-d95mlu\">Download CSV</button> <button type=\"button\" class=\"svelte-d95mlu\">Download JSON</button></div>"), I = r("<button type=\"button\" class=\"svelte-d95mlu\">Generate Export</button>"), L = r("<p class=\"error svelte-d95mlu\">Failed to generate export.</p>"), R = r("<button type=\"button\" disabled=\"\" class=\"svelte-d95mlu\">Generating Export...</button> <div class=\"progress svelte-d95mlu\"><p class=\"svelte-d95mlu\">Loading guild store inventory...</p> <div class=\"spinner svelte-d95mlu\"></div></div>", 1);
function z(e, t) {
	h(t, !0);
	let r = y(p(Promise.resolve(null))), i = y(null), o = y(null), b = (e) => [
		e.item_id,
		e.inv_id,
		e.item_name,
		e.rarity,
		e.type,
		e.durability,
		e.max_durability,
		e.guild_tag,
		String(!!e.in_guide),
		e.player_id,
		e.equipped,
		e.craft,
		e.forge
	], C = (e) => [
		e?.attack ?? "",
		e?.defense ?? "",
		e?.armor ?? "",
		e?.hp ?? "",
		e?.damage ?? "",
		e?.stamina ?? "",
		e?.min_level ?? "",
		e?.set_name ?? ""
	], E = (e) => [...b(e), ...C(e.stats)].join(","), k = (e) => e.map(E).join("\n"), A = (e) => new Blob([e], { type: "text/csv" });
	async function j() {
		let e = await O();
		if (!e?.items?.length) throw Error("Invalid export data");
		let t = e.items;
		return g(o, e, !0), g(i, `item_id,inv_id,item_name,rarity,type,durability,max_durability,guild_tag,in_guide,player_id,equipped,craft,forge,attack,defense,armor,hp,damage,stamina,min_level,set_name
${k(t)}\n`), null;
	}
	function M() {
		T() && (w("GS Export", "Generate"), g(r, j(), !0));
	}
	function N() {
		if (!n(i)) return;
		w("GS Export", "Download");
		let e = `gs_export_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:.]/g, "-")}.csv`;
		D(A(n(i)), e);
	}
	function z() {
		if (!n(o)) return;
		w("GS Export", "Download JSON");
		let e = `gs_export_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:.]/g, "-")}.json`;
		D(new Blob([JSON.stringify(n(o), null, 2)], { type: "application/json" }), e);
	}
	var B = l(), V = f(B), H = (e) => {
		s(e, P());
	}, U = x(() => !T()), W = (e) => {
		var t = l();
		v(f(t), () => n(r), (e) => {
			var t = R();
			_(2), s(e, t);
		}, (e) => {
			var t = l(), r = f(t), o = (e) => {
				var t = F(), n = d(a(t), 2), r = d(n, 2);
				m(t), u("click", n, N), u("click", r, z), s(e, t);
			}, p = (e) => {
				var t = I();
				u("click", t, M), s(e, t);
			};
			c(r, (e) => {
				n(i) ? e(o) : e(p, -1);
			}), s(e, t);
		}, (e) => {
			s(e, L());
		}), s(e, t);
	};
	c(V, (e) => {
		n(U) ? e(H) : e(W, -1);
	}), s(e, B), S();
}
o(["click"]);
//#endregion
//#region src/modules/notepad/gsExport/GsExport.svelte
var B = r("<div class=\"gs-export svelte-6n2izk\"><p class=\"svelte-6n2izk\">Export your Guild Store inventory data to a CSV file for analysis.</p> <!> <!></div>");
function V(e) {
	var t = B(), n = d(a(t), 2);
	N(n, {}), z(d(n, 2), {}), m(t), s(e, t);
}
//#endregion
//#region src/modules/notepad/gsExport/GsExportModal.svelte
function H(e, t) {
	h(t, !0);
	let n = b(t, "visible", 15, !0);
	function r() {
		w("GS Export", "close"), n(!1);
	}
	C(e, {
		close: r,
		get visible() {
			return n();
		},
		title: (e) => {
			_(), s(e, i("Guild Store Export"));
		},
		children: (e, t) => {
			V(e, {});
		},
		$$slots: {
			title: !0,
			default: !0
		}
	}), S();
}
//#endregion
//#region src/modules/notepad/gsExport/mountGsExport.svelte.js
var U = /* @__PURE__ */ e({ default: () => K }), W = p({ visible: !0 }), G = 0;
function K() {
	G ? W.visible = !0 : G = t(H, {
		props: W,
		target: document.body
	});
}
//#endregion
export { U as t };

//# sourceMappingURL=mountGsExport.svelte-CpNdZgQA.js.map