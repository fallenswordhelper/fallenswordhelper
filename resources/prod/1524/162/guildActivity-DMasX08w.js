import { t as e } from "./devStdOut-BnwcHKWA.js";
import { o as t } from "./now-DpYjGucP.js";
import { n, t as r } from "./constants-C54mky4_.js";
import { t as i } from "./getValue-CCThXEzy.js";
import { n as a } from "./retryAjax-p9geDMSY.js";
import { t as o } from "./runDefault-D8heasmq.js";
import { t as s } from "./ranksView-D82-PwGT.js";
import { t as c } from "./jQueryPresent-BHusVK29.js";
import { n as l, r as u } from "./idb-sdcp-8vV.js";
import { t as d } from "./indexConstants-BEiNArjz.js";
import { t as f } from "./profile-BWfgrKDA.js";
import { t as p } from "./lastActivityToDays-t5AmXw-L.js";
//#region src/modules/chrome/pageSwitcher/loader/guildTracker.js
function m() {
	o(import("./mountGuildTracker.svelte-_CCiPpu1.js"));
}
//#endregion
//#region src/modules/notepad/guildTracker/memberDataProcessor.js
function h(e, t, n, r) {
	if (e.length === 0) return !0;
	let i = e.at(-1), a = r <= 7;
	return i[1] !== n.current_stamina || i[2] !== t.level || a && i[3] !== n.stamina || i[5] !== t.vl || i[6] !== (t.guild_xp || 0);
}
function g(e, n, r) {
	let i = t(), a = [];
	return a[0] = r, a[1] = n.current_stamina, a[2] = e.level, a[3] = n.stamina, a[4] = i, a[5] = e.vl, a[6] = e.guild_xp || 0, a[7] = i, a;
}
async function _(e) {
	let t = await f(e, !0);
	return t?.current_stamina ? t : null;
}
function v(e, t) {
	return e.members[t] || (e.members[t] = []), e.members[t];
}
function y(e, n, r, i) {
	let a = e.at(-1);
	a[0] = i, a[1] = r.current_stamina, a[2] = n.level, a[3] = r.stamina, a[4] = t(), a[5] = n.vl, a[6] = n.guild_xp || 0;
}
function b(n, r, i) {
	let a = p(n.last_activity), o = i.length > 0 ? i.at(-1) : null;
	if (!h(i, n, r, a)) o[4] = t(), o[0] = a, e(`Guild Tracker: ${n.name} - no changes, updating check timestamp`);
	else {
		let s = o?.[7];
		if (!s || t() - s > 86400) {
			let t = g(n, r, a);
			i.push(t), e(`Guild Tracker: ${n.name} - significant changes + 24h elapsed, adding new record`);
		} else y(i, n, r, a), e(`Guild Tracker: ${n.name} - significant changes, updating existing record`);
	}
}
async function x(t, n) {
	for (let r of t) try {
		e(`Guild Tracker: Fetching profile for ${r.name}`);
		let t = await _(r.name);
		if (!t) {
			e(`Guild Tracker: No profile data for ${r.name}`);
			continue;
		}
		b(r, t, v(n, r.name));
	} catch (t) {
		e(`Guild Tracker: Failed to fetch ${r.name}: ${t.message}`);
	}
}
function S(e, n) {
	return e.filter((e) => {
		let i = n.members[e.name];
		if (!i || i.length === 0) return !0;
		let a = i.at(-1);
		return t() - a[4] > r;
	});
}
//#endregion
//#region src/modules/notepad/guildTracker/waitTimeCalculator.js
function C(e) {
	let t = Math.floor(e / 1e3), n = Math.floor(t / 3600), r = Math.floor(t % 3600 / 60), i = t % 60;
	return `${n.toString().padStart(2, "0")}:${r.toString().padStart(2, "0")}:${i.toString().padStart(2, "0")}`;
}
function w(e, t) {
	let n = null;
	if (e?.members) {
		for (let [r, i] of Object.entries(e.members)) if (t.has(r) && i.length > 0) {
			let e = i.at(-1)[4];
			(!n || e < n) && (n = e);
		}
	}
	return n;
}
function T(e) {
	if (!e) return r * n;
	let i = e + r;
	return Math.max(60, i - t()) * n;
}
function E(e, t) {
	let n = w(e, new Set(t.map((e) => e.name)));
	return {
		waitTime: T(n),
		oldestUpdateTime: n
	};
}
function D(r, i) {
	if (S(i, r).length > 0) {
		let i = t() - r.lastUpdate, a = Math.max(0, (30 - i) * n);
		return e(`Guild Tracker: Members need update, waiting ${C(a)} (min interval)`), a;
	}
	let { waitTime: a, oldestUpdateTime: o } = E(r, i);
	return e(`Guild Tracker: All members current, oldest update ${o ? ((t() - o) / 3600).toFixed(1) : "N/A"}h ago, next update in ${C(a)}`), a;
}
//#endregion
//#region src/modules/notepad/guildTracker/guildActivity.js
var O = { running: !1 };
async function k() {
	let e = await s();
	return e.s ? e.r.flatMap((e) => e.members) : null;
}
async function A(n, r) {
	let i = S(r, n), a = i.slice(0, 3);
	e(`Guild Tracker: ${i.length} members need update, processing batch of ${a.length}`), await x(a, n), n.lastUpdate = t(), await u(d, n);
	let o = i.length - a.length;
	return e(`Guild Tracker: Batch complete, ${o} members remaining`), { remaining: o };
}
async function j() {
	if (O.running) {
		e("Guild Tracker: Already running");
		return;
	}
	e("Guild Tracker: Starting background process"), O.running = !0;
	let n = await l("fsh_guildActivity") || {
		lastUpdate: t(),
		members: {}
	}, r = await k();
	if (!r) {
		e("Guild Tracker: Failed to get guild members, stopping"), O.running = !1;
		return;
	}
	for (e(`Guild Tracker: Monitoring ${r.length} guild members`); O.running;) try {
		let t = D(n, r), i = Date.now() + t, o = 300 * 1e3;
		for (; Date.now() < i && O.running;) {
			let t = i - Date.now();
			if (t <= 0) break;
			await a(Math.min(t, o));
			let n = i - Date.now();
			n > o && O.running && e(`Guild Tracker: Still waiting... ${Math.round(n / 1e3 / 60)} min remaining`);
		}
		O.running && await A(n, r);
	} catch (t) {
		e(`Guild Tracker: Error in main loop: ${t.message}`), await a(6e4);
	}
}
function M() {
	c() && j();
}
function N() {
	e("Guild Tracker: Stopping background process"), O.running = !1;
}
function P() {
	c() && i("enableGuildActivityTracker") && M();
}
//#endregion
export { m as i, M as n, N as r, P as t };

//# sourceMappingURL=guildActivity-DMasX08w.js.map