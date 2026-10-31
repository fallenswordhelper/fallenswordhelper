import { t as e } from "./playerName-DbmV53SI.js";
import { t } from "./stdout-BBXc-13D.js";
// node_modules/posthog-js/dist/module.no-external.js
var n = {
	DEBUG: !1,
	LIB_VERSION: "1.444.0",
	LIB_NAME: "web",
	JS_SDK_VERSION: "0.10.2"
}, r = n, i = "$early_access_features", a = "$active_feature_flags", o = "$feature_flag_details", s = "$feature_flag_errors", c = "$feature_flag_evaluated_at", l = "$feature_flag_request_id", u = "$minimal_flag_called_events", d = "$enabled_feature_flags", f = "$stored_group_properties", p = "$stored_person_properties", m = "$flag_call_reported", h = "$flag_call_reported_session_id", g = "$feature_flag_payloads", _ = "$override_feature_flags", v = "$override_feature_flag_payloads", y = "visibilitychange", b = "$autocapture_disabled_server_side", x = "$surveys", S = "$surveys_loaded_at", C = "PostHog loadExternalDependency extension not found.", w = "$surveys_activated", ee = "$surveys_activated_session", te = "$surveys_activated_timestamps", ne = "$people_distinct_id", T = "distinct_id", re = "$device_id", ie = "$device_model", ae = "__alias", oe = "__cmpns", se = "$fbc", ce = "$fbc_persistence", le = "$fbp", ue = "$fbp_persistence", de = "__timers", fe = "$heatmaps_enabled_server_side", pe = "$exception_capture_enabled_server_side", me = "$error_tracking_suppression_rules", he = "$error_tracking_capture_extension_exceptions", ge = "$web_vitals_enabled_server_side", _e = "$dead_clicks_enabled_server_side", ve = "$product_tours_enabled_server_side", ye = "$logs_capture_enabled_server_side", be = "$web_vitals_allowed_metrics", xe = "$session_recording_remote_config", Se = "$session_recording_enabled_server_side", Ce = "$replay_sample_rate", we = "$replay_override_sampling", Te = "$replay_override_linked_flag", Ee = "$replay_override_url_trigger", De = "$replay_override_event_trigger", Oe = "$sesid", ke = "$session_is_sampled", Ae = "$session_past_minimum_duration", je = "$session_recording_url_trigger_activated_session", Me = "$session_recording_event_trigger_activated_session", Ne = "$debug_first_full_snapshot_timestamp", Pe = "$sess_rec_flush_size", Fe = "$groups", Ie = "ph_product_tours", Le = "$product_tours_activated", Re = "$product_tours_activated_session", ze = "$conversations_widget_session_id", Be = "$conversations_ticket_id", Ve = "$conversations_widget_state", He = "$conversations_user_traits", Ue = "$user_state", We = "$client_session_props", Ge = "$capture_rate_limit", Ke = "$initial_campaign_params", qe = "$initial_referrer_info", Je = "$initial_person_info", Ye = "$epp", Xe = "$posthog_cookieless", Ze = "$cookieless_mode", Qe = "$sdk_debug_extensions_init_method", $e = "$sdk_debug_extensions_init_time_ms", et = "$sdk_debug_recording_script_not_loaded", tt = "$sdk_debug_replay_stale_config", nt = "$sdk_debug_replay_event_trigger_status", rt = "$sdk_debug_replay_linked_flag_trigger_status", it = "$sdk_debug_replay_matched_recording_trigger_groups", at = "$sdk_debug_replay_pending_trigger_conditions", ot = "$sdk_debug_replay_remote_trigger_matching_config", st = "$sdk_debug_replay_trigger_groups_count", ct = "$sdk_debug_replay_url_trigger_status", lt = "$session_recording_start_reason", ut = "anonymous", dt = "identified", ft = "identified_only", pt = "beforeunload", mt = "$pageview", ht = "$pageleave", gt = "$identify", _t = "$groupidentify", E = "u" > typeof window ? window : void 0, vt = "u" > typeof globalThis ? globalThis : E, yt = vt?.navigator, D = vt?.document, O = vt?.location, bt = vt?.fetch, xt = vt?.XMLHttpRequest && "withCredentials" in new vt.XMLHttpRequest() ? vt.XMLHttpRequest : void 0, St = vt?.AbortController, Ct = vt?.CompressionStream, wt = yt?.userAgent, Tt = typeof globalThis < "u" ? globalThis : E;
Tt && typeof self > "u" && (Tt.self = Tt), Tt && typeof File > "u" && (Tt.File = function() {});
var k = E ?? {}, Et = function(e) {
	return e.AnonymousId = "anonymous_id", e.DistinctId = "distinct_id", e.Props = "props", e.EnablePersonProcessing = "enable_person_processing", e.PersonMode = "person_mode", e.FeatureFlagDetails = "feature_flag_details", e.FeatureFlags = "feature_flags", e.FeatureFlagPayloads = "feature_flag_payloads", e.BootstrapFeatureFlagDetails = "bootstrap_feature_flag_details", e.BootstrapFeatureFlags = "bootstrap_feature_flags", e.BootstrapFeatureFlagPayloads = "bootstrap_feature_flag_payloads", e.OverrideFeatureFlags = "override_feature_flags", e.Queue = "queue", e.AiQueue = "ai_queue", e.AiCaptureQueue = "ai_capture_queue", e.LogsQueue = "logs_queue", e.OptedOut = "opted_out", e.SessionId = "session_id", e.SessionStartTimestamp = "session_start_timestamp", e.SessionLastTimestamp = "session_timestamp", e.PersonProperties = "person_properties", e.GroupProperties = "group_properties", e.InstalledAppBuild = "installed_app_build", e.InstalledAppVersion = "installed_app_version", e.SessionReplay = "session_replay", e.PushRegistered = "push_registered", e.SessionReplayEventTriggerActivatedSession = "session_replay_event_trigger_activated_session", e.SurveyLastSeenDate = "survey_last_seen_date", e.SurveysInProgress = "surveys_in_progress", e.SurveysSeen = "surveys_seen", e.Surveys = "surveys", e.RemoteConfig = "remote_config", e.FlagsEndpointWasHit = "flags_endpoint_was_hit", e.DeviceId = "device_id", e;
}({}), Dt = function(e) {
	return e.GZipJS = "gzip-js", e.Base64 = "base64", e;
}({}), Ot = [
	"$snapshot",
	"$pageview",
	"$pageleave",
	"$set",
	"survey dismissed",
	"survey sent",
	"survey shown",
	"$identify",
	"$groupidentify",
	"$create_alias",
	"$$client_ingestion_warning",
	"$web_experiment_applied",
	"$feature_enrollment_update",
	"$feature_flag_called"
], kt = ["token"];
function A(e, t) {
	return e.indexOf(t) !== -1;
}
var At = function(e) {
	return e.trim();
}, jt = function(e) {
	return e.replace(/^\$/, "");
};
function Mt(e) {
	let t = [];
	return JSON.stringify(e, function(e, n) {
		if (typeof n == "bigint") return n.toString();
		if (typeof n != "function" && typeof n != "symbol") {
			if (n instanceof Error) return {
				name: n.name,
				message: n.message,
				stack: n.stack
			};
			if (n && typeof n == "object") {
				for (; t.length > 0 && t[t.length - 1] !== this;) t.pop();
				if (t.includes(n)) return "[Circular]";
				t.push(n);
			}
			return n;
		}
	}) ?? "null";
}
var Nt = Object.prototype, Pt = Nt.hasOwnProperty, Ft = Nt.toString, j = Array.isArray || function(e) {
	return Ft.call(e) === "[object Array]";
}, M = (e) => typeof e == "function", N = (e) => e === Object(e) && !j(e), It = (e) => {
	if (N(e)) {
		for (let t in e) if (Pt.call(e, t)) return !1;
		return !0;
	}
	return !1;
}, P = (e) => e === void 0, F = (e) => Ft.call(e) == "[object String]", Lt = (e) => F(e) && e.trim().length === 0, I = (e) => e === null, L = (e) => P(e) || I(e), R = (e) => Ft.call(e) == "[object Number]" && e == e, Rt = (e) => R(e) && e > 0, zt = (e) => Ft.call(e) === "[object Boolean]", Bt = (e) => A(Ot, e), Vt = (e) => A(kt, e);
function Ht(e) {
	return typeof e != "object" || !e;
}
function Ut(e, t) {
	return {}.toString.call(e) === `[object ${t}]`;
}
function Wt(e) {
	switch ({}.toString.call(e)) {
		case "[object Error]":
		case "[object Exception]":
		case "[object DOMException]":
		case "[object DOMError]":
		case "[object WebAssembly.Exception]": return !0;
		default: return Kt(e, Error);
	}
}
function Gt(e) {
	return "u" > typeof Event && Kt(e, Event);
}
function Kt(e, t) {
	try {
		return e instanceof t;
	} catch {
		return !1;
	}
}
var qt = [
	!0,
	"true",
	1,
	"1",
	"yes"
], Jt = (e) => A(qt, e), Yt = [
	!1,
	"false",
	0,
	"0",
	"no"
];
function Xt(e, t, n, r, i, a, o) {
	try {
		var s = e[a](o), c = s.value;
	} catch (e) {
		n(e);
		return;
	}
	s.done ? t(c) : Promise.resolve(c).then(r, i);
}
function z(e) {
	return function() {
		var t = this, n = arguments;
		return new Promise(function(r, i) {
			var a = e.apply(t, n);
			function o(e) {
				Xt(a, r, i, o, s, "next", e);
			}
			function s(e) {
				Xt(a, r, i, o, s, "throw", e);
			}
			o(void 0);
		});
	};
}
var Zt = /* @__PURE__ */ "amazonbot,amazonproductbot,app.hypefactors.com,applebot,archive.org_bot,awariobot,backlinksextendedbot,baiduspider,bingbot,bingpreview,chrome-lighthouse,dataforseobot,deepscan,duckduckbot,facebookexternal,facebookcatalog,http://yandex.com/bots,hubspot,ia_archiver,leikibot,linkedinbot,meta-externalagent,mj12bot,msnbot,nessus,petalbot,pinterestbot,prerender,rogerbot,screaming frog,sebot-wa,sitebulb,slackbot,slurp,trendictionbot,turnitin,twitterbot,vercel-screenshot,vercelbot,yahoo! slurp,yandexbot,zoombot,bot.htm,bot.php,(bot;,bot/,crawler,ahrefsbot,ahrefssiteaudit,semrushbot,siteauditbot,splitsignalbot,gptbot,oai-searchbot,chatgpt-user,perplexitybot,better uptime bot,sentryuptimebot,uptimerobot,headlesschrome,cypress,google-hoteladsverifier,adsbot-google,apis-google,duplexweb-google,feedfetcher-google,google favicon,google web preview,google-read-aloud,googlebot,googleother,google-cloudvertexbot,googleweblight,mediapartners-google,storebot-google,google-inspectiontool,bytespider".split(","), Qt = /* @__PURE__ */ new Map(), $t = function(e, t = []) {
	if (!e) return !1;
	let n = function(e, t) {
		let n = "";
		for (let e = 0; t.length > e; e++) {
			let r = t[e];
			n += r.length + ":" + r;
		}
		return e.length + ":" + e + "|" + t.length + ":" + n;
	}(e, t), r = Qt.get(n);
	if (r !== void 0) return r;
	let i = e.toLowerCase(), a = Zt.concat(t).some((e) => i.indexOf(e.toLowerCase()) !== -1);
	return 256 > Qt.size || Qt.clear(), Qt.set(n, a), a;
};
function en(e, t, n, r, i) {
	return t > n && (r.warn("min cannot be greater than max."), t = n), R(e) ? e > n ? (r.warn(" cannot be  greater than max: " + n + ". Using max value instead."), n) : t > e ? (r.warn(" cannot be less than min: " + t + ". Using min value instead."), t) : e : (r.warn(" must be a number. using max or fallback. max: " + n + ", fallback: " + i), en(i ?? n, t, n, r));
}
var tn = class {
	constructor(e) {
		this._buckets = {}, this._onBucketRateLimited = e._onBucketRateLimited, this._bucketSize = en(e.bucketSize, 0, 100, e._logger), this._refillRate = en(e.refillRate, 0, this._bucketSize, e._logger), this._refillInterval = en(e.refillInterval, 0, 864e5, e._logger);
	}
	_applyRefill(e, t) {
		let n = Math.floor((t - e.lastAccess) / this._refillInterval);
		n > 0 && (e.tokens = Math.min(e.tokens + n * this._refillRate, this._bucketSize), e.lastAccess += n * this._refillInterval);
	}
	consumeRateLimit(e) {
		var t;
		let n = Date.now(), r = String(e), i = this._buckets[r];
		return i ? this._applyRefill(i, n) : (i = {
			tokens: this._bucketSize,
			lastAccess: n
		}, this._buckets[r] = i), i.tokens === 0 || (i.tokens--, i.tokens === 0 && ((t = this._onBucketRateLimited) == null || t.call(this, e)), i.tokens === 0);
	}
	stop() {
		this._buckets = {};
	}
}, nn = "Mobile", rn = "Android", an = "Tablet", on = "Android Tablet", sn = "iPad", cn = "Apple Watch", ln = "Safari", un = "BlackBerry", dn = "Samsung Internet", fn = "Chrome", pn = "Chrome iOS", mn = "Internet Explorer", hn = "Internet Explorer Mobile", gn = "Opera", _n = "Microsoft Edge", vn = "Firefox", yn = "Firefox iOS", bn = "Nintendo", xn = "PlayStation", Sn = "Xbox", Cn = "Android Mobile", wn = "Mobile Safari", Tn = "Windows", En = "Windows Phone", Dn = "Nokia", On = "Ouya", kn = "Generic " + nn.toLowerCase(), An = "Generic " + an.toLowerCase(), jn = "Konqueror", Mn = "Oculus Browser", Nn = "Vivaldi", Pn = "Yandex", Fn = "Whale", In = "DuckDuckGo", Ln = "Pale Moon", Rn = "Waterfox", zn = "Brave", Bn = "Claude", Vn = "Codex", Hn = "ChatGPT", Un = "Google Search App", Wn = /* @__PURE__ */ RegExp("Version/(\\d+(\\.\\d+)?)"), Gn = /* @__PURE__ */ RegExp("(Claude|Codex|ChatGPT)\\/(\\d+(\\.\\d+)?)"), Kn = new RegExp(Sn, "i"), qn = /* @__PURE__ */ RegExp("PlayStation \\w+", "i"), Jn = /* @__PURE__ */ RegExp("Nintendo \\w+", "i"), Yn = /* @__PURE__ */ RegExp("BlackBerry|PlayBook|BB10", "i"), Xn = {
	"NT3.51": "NT 3.11",
	"NT4.0": "NT 4.0",
	"5.0": "2000",
	5.1: "XP",
	5.2: "XP",
	"6.0": "Vista",
	6.1: "7",
	6.2: "8",
	6.3: "8.1",
	6.4: "10",
	"10.0": "10"
}, Zn = function(e, t, n, r) {
	return t ||= "", function(e) {
		return e?.brave ? zn : null;
	}(n) || (r?.detectGoogleSearchApp && A(e, "GSA/") ? Un : A(e, " OPR/") && A(e, "Mini") ? "Opera Mini" : A(e, " OPR/") ? gn : Yn.test(e) ? un : A(e, "IEMobile") || A(e, "WPDesktop") ? hn : A(e, "OculusBrowser") ? Mn : A(e, "SamsungBrowser") ? dn : A(e, "Edge") || A(e, "Edg/") ? _n : A(e, "Vivaldi/") ? Nn : A(e, "YaBrowser/") ? Pn : A(e, "Whale/") ? Fn : A(e, "DuckDuckGo/") || A(e, "Ddg/") ? In : A(e, "Claude/") ? Bn : A(e, "Codex/") ? Vn : A(e, "ChatGPT/") ? Hn : A(e, "FBIOS") ? "Facebook Mobile" : A(e, "UCWEB") || A(e, "UCBrowser") ? "UC Browser" : A(e, "CriOS") ? pn : A(e, "CrMo") || A(e, fn) ? fn : A(e, rn) && A(e, ln) ? Cn : A(e, "FxiOS") ? yn : A(e.toLowerCase(), jn.toLowerCase()) ? jn : A(e, "Brave/") ? zn : ((e, t) => t && A(t, "Apple") || function(e) {
		return A(e, ln) && !A(e, fn) && !A(e, rn);
	}(e))(e, t) ? A(e, nn) ? wn : ln : A(e, "PaleMoon/") ? Ln : A(e, "Waterfox/") ? Rn : A(e, vn) ? vn : A(e, "MSIE") || A(e, "Trident/") ? mn : A(e, "Gecko") ? vn : "");
}, Qn = {
	[hn]: [/* @__PURE__ */ RegExp("rv:(\\d+(\\.\\d+)?)")],
	[_n]: [/* @__PURE__ */ RegExp("Edge?\\/(\\d+(\\.\\d+)?)")],
	[fn]: [/* @__PURE__ */ RegExp("(Chrome|CrMo)\\/(\\d+(\\.\\d+)?)")],
	[pn]: [/* @__PURE__ */ RegExp("CriOS\\/(\\d+(\\.\\d+)?)")],
	"UC Browser": [/* @__PURE__ */ RegExp("(UCBrowser|UCWEB)\\/(\\d+(\\.\\d+)?)")],
	[ln]: [Wn],
	[wn]: [Wn],
	[gn]: [/* @__PURE__ */ RegExp("(Opera|OPR)\\/(\\d+(\\.\\d+)?)")],
	[vn]: [/* @__PURE__ */ RegExp("Firefox\\/(\\d+(\\.\\d+)?)")],
	[yn]: [/* @__PURE__ */ RegExp("FxiOS\\/(\\d+(\\.\\d+)?)")],
	[jn]: [/* @__PURE__ */ RegExp("Konqueror[:/]?(\\d+(\\.\\d+)?)", "i")],
	[un]: [/* @__PURE__ */ RegExp("BlackBerry (\\d+(\\.\\d+)?)"), Wn],
	[Cn]: [/* @__PURE__ */ RegExp("android\\s(\\d+(\\.\\d+)?)", "i")],
	[dn]: [/* @__PURE__ */ RegExp("SamsungBrowser\\/(\\d+(\\.\\d+)?)")],
	[Mn]: [/* @__PURE__ */ RegExp("OculusBrowser\\/(\\d+(\\.\\d+)?)")],
	[Nn]: [/* @__PURE__ */ RegExp("Vivaldi\\/(\\d+(\\.\\d+)?)")],
	[Pn]: [/* @__PURE__ */ RegExp("YaBrowser\\/(\\d+(\\.\\d+)?)")],
	[Fn]: [/* @__PURE__ */ RegExp("Whale\\/(\\d+(\\.\\d+)?)")],
	[zn]: [/* @__PURE__ */ RegExp("Brave\\/(\\d+(\\.\\d+)?)")],
	[Bn]: [Gn],
	[Vn]: [Gn],
	[Hn]: [Gn],
	[In]: [/* @__PURE__ */ RegExp("(DuckDuckGo|Ddg)\\/(\\d+(\\.\\d+)?)")],
	[Ln]: [/* @__PURE__ */ RegExp("PaleMoon\\/(\\d+(\\.\\d+)?)")],
	[Rn]: [/* @__PURE__ */ RegExp("Waterfox\\/(\\d+(\\.\\d+)?)")],
	[Un]: [/* @__PURE__ */ RegExp("GSA\\/(\\d+(\\.\\d+)?)")],
	[mn]: [/* @__PURE__ */ RegExp("(rv:|MSIE )(\\d+(\\.\\d+)?)")],
	Mozilla: [/* @__PURE__ */ RegExp("rv:(\\d+(\\.\\d+)?)")]
}, $n = function(e, t, n, r) {
	let i = Qn[Zn(e, t, n, r)];
	if (P(i)) return null;
	for (let t = 0; i.length > t; t++) {
		let n = e.match(i[t]);
		if (n) return parseFloat(n[n.length - 2]);
	}
	return null;
}, er = [
	[/* @__PURE__ */ RegExp("Xbox; Xbox (.*?)[);]", "i"), (e) => [Sn, e && e[1] || ""]],
	[new RegExp(bn, "i"), [bn, ""]],
	[new RegExp(xn, "i"), [xn, ""]],
	[Yn, [un, ""]],
	[new RegExp(Tn, "i"), (e, t) => {
		if (/Phone/.test(t) || /WPDesktop/.test(t)) return [En, ""];
		if (new RegExp(nn).test(t) && !/IEMobile\b/.test(t)) return ["Windows Mobile", ""];
		let n = /Windows NT ([0-9.]+)/i.exec(t);
		if (n && n[1]) {
			let e = Xn[n[1]] || "";
			return /arm/i.test(t) && (e = "RT"), [Tn, e];
		}
		return [Tn, ""];
	}],
	[/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, (e) => e && e[3] ? ["iOS", [
		e[3],
		e[4],
		e[5] || "0"
	].join(".")] : ["iOS", ""]],
	[/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, (e) => {
		let t = "";
		return e && e.length >= 3 && (t = P(e[2]) ? e[3] : e[2]), ["watchOS", t];
	}],
	[/* @__PURE__ */ RegExp("(Android (\\d+)\\.(\\d+)\\.?(\\d+)?|Android)", "i"), (e) => e && e[2] ? [rn, [
		e[2],
		e[3],
		e[4] || "0"
	].join(".")] : [rn, ""]],
	[/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, (e) => {
		let t = ["Mac OS X", ""];
		return e && e[1] && (t[1] = [
			e[1],
			e[2],
			e[3] || "0"
		].join(".")), t;
	}],
	[/Mac/i, ["Mac OS X", ""]],
	[/CrOS/, ["Chrome OS", ""]],
	[/Linux|debian/i, ["Linux", ""]]
], tr = function(e) {
	for (let t = 0; er.length > t; t++) {
		let [n, r] = er[t], i = n.exec(e), a = i && (M(r) ? r(i, e) : r);
		if (a) return a;
	}
	return ["", ""];
}, nr = function(e) {
	return Jn.test(e) ? bn : qn.test(e) ? xn : Kn.test(e) ? Sn : new RegExp(On, "i").test(e) ? On : (/* @__PURE__ */ RegExp("(Windows Phone|WPDesktop)", "i")).test(e) ? En : /iPad/.test(e) ? sn : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e) ? cn : Yn.test(e) ? un : /(kobo)\s(ereader|touch)/i.test(e) ? "Kobo" : new RegExp(Dn, "i").test(e) ? Dn : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e) || /(kf[a-z]+)( bui|\)).+silk\//i.test(e) ? "Kindle Fire" : /(Android|ZTE)/i.test(e) ? new RegExp(nn).test(e) && !/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e) || /pixel[\daxl ]{1,6}/i.test(e) && !/pixel c/i.test(e) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e) || /lmy47v/i.test(e) && !/QTAQZ3/i.test(e) ? rn : on : (/* @__PURE__ */ RegExp("(pda|Mobile)", "i")).test(e) ? kn : new RegExp(an, "i").test(e) && !(/* @__PURE__ */ RegExp("Tablet pc", "i")).test(e) ? An : "";
}, rr = function(e, t) {
	let n = nr(e);
	return n === sn || n === on || n === "Kobo" || n === "Kindle Fire" || n === An ? an : n === bn || n === Sn || n === xn || n === On ? "Console" : n === cn ? "Wearable" : n ? nn : t?.userAgentDataPlatform === "Android" && (t?.maxTouchPoints ?? 0) > 0 ? 600 > Math.min((r = t?.screenWidth) ?? 0, (i = t?.screenHeight) ?? 0) / ((a = t?.devicePixelRatio) ?? 1) ? nn : an : "Desktop";
	var r, i, a;
}, ir = /\bFBAV\/(\d+(?:\.\d+)*)/i, ar = [
	[/\bInstagram(?:[ /](\d+(?:\.\d+)*))?\b/i, "Instagram"],
	[/\bBarcelona[ /](\d+(?:\.\d+)*)?/i, "Threads"],
	[
		/\b(?:MessengerForiOS|(?:FBAN|FB_IAB)\/Orca-Android)\b/i,
		"Messenger",
		ir
	],
	[
		/\bFBAN\/EMA\b/i,
		"Facebook Lite",
		ir
	],
	[
		/\b(?:FBIOS|(?:FBAN|FB_IAB)\/(?:FB4A|FBIOS))\b/i,
		"Facebook",
		ir
	],
	[/\bLinkedInApp(?:\]?\/(\d+(?:\.\d+)*))?\b/i, "LinkedIn"],
	[/\bTwitter(?:Android| for (?:iPhone|iPad|Android))(?:\/(\d+(?:\.\d+)*))?\b/i, "Twitter"],
	[
		/\b(?:musical_ly|trill)(?:[_/](\d+\.\d+(?:\.\d+)*))?(?=\b|_)/i,
		"TikTok",
		/\bapp_version\/(\d+(?:\.\d+)*)/i
	],
	[/\b(?:MicroMessenger|WeChat)\/(\d+(?:\.\d+)*)?/i, "WeChat"],
	[/\bLine\/(\d+(?:\.\d+)*)?/i, "Line"],
	[/\bGSA\/(\d+(?:\.\d+)*)?/i, "Google"],
	[/\[Pinterest\/(?:iOS|Android)\b|\bPinterest(?: for (?:Android(?: Tablet)?|iOS))?\/(\d+(?:\.\d+)*)/i, "Pinterest"],
	[/\b(?:WA4A|WAiOS)\/(\d+(?:\.\d+)*)?/i, "WhatsApp"],
	[/\bSnapchat[ /](\d+(?:\.\d+)*)?/i, "Snapchat"],
	[/\bBing(?:Web|Sapphire)\/(\d+(?:\.\d+)*)?/i, "Bing"],
	[
		/\bNAVER\(inapp; search;/i,
		"Naver",
		/\bNAVER\(inapp; search;[^;)]*; (\d+(?:\.\d+)*)/i
	],
	[/\bKAKAOTALK[ /](\d+\.\d+(?:\.\d+)*)?/i, "KakaoTalk"]
], or = "[Truncated]", sr = "[Unserializable]";
function cr(e) {
	let t = "";
	for (let n = 0; e.length > n; n++) {
		let r = e.charCodeAt(n);
		if (55296 > r || r > 56319) t += 56320 > r || r > 57343 ? e[n] : "�";
		else {
			let r = e.charCodeAt(n + 1);
			56320 > r || r > 57343 ? t += "�" : (t += e[n] + e[n + 1], n++);
		}
	}
	return t;
}
function lr(e, t) {
	if (!t) return e;
	let n = [];
	try {
		n = Object.keys(t);
	} catch {
		n = [];
	}
	for (let r of n) {
		let n;
		try {
			n = t[r];
		} catch {
			n = sr;
		}
		Object.defineProperty(e, r, {
			value: n,
			enumerable: !0,
			writable: !0,
			configurable: !0
		});
	}
	return e;
}
var ur = 3e5, dr = class {
	record(e) {
		if (e.kind === "too-large") return;
		if (e.kind !== "retry-later") return void this.reset();
		if (!e.retryAfterMs) return;
		let t = this.isOpen(), n = Date.now(), r = Math.min(e.retryAfterMs, ur);
		if (!t) return this._installedAt = n, void (this._until = n + r);
		this._until = Math.max(this._until, Math.min(n + r, this._installedAt + ur));
	}
	remainingMs() {
		let e = Date.now();
		if (this._installedAt - 5e3 > e) return this.reset(), 0;
		let t = Math.min(ur, Math.max(0, this._until - e));
		return t === 0 && this.reset(), t;
	}
	isOpen() {
		return this.remainingMs() > 0;
	}
	reset() {
		this._until = 0, this._installedAt = 0;
	}
	constructor() {
		this._until = 0, this._installedAt = 0;
	}
}, fr = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function pr(e, t) {
	return typeof (n = e) == "string" && fr.test(n) ? e : t();
	var n;
}
function mr(e, t) {
	let n = Error(t);
	try {
		Object.defineProperty(n, "name", {
			value: e,
			writable: !0,
			enumerable: !0,
			configurable: !0
		});
	} catch {}
	return n;
}
function hr(e) {
	return e && e.split("#")[0];
}
function gr(e) {
	try {
		return e();
	} catch {
		return;
	}
}
function _r(e, t) {
	let n = setTimeout(e, t);
	return n != null && n.unref && n?.unref(), n;
}
function vr(e, t, n) {
	return yr.apply(this, arguments);
}
function yr() {
	return (yr = z(function* (e, t, n) {
		let r;
		try {
			return yield Promise.race([e, new Promise((e, i) => {
				r = _r(() => {
					try {
						n?.(), e();
					} catch (e) {
						i(e);
					}
				}, t);
			})]);
		} finally {
			clearTimeout(r);
		}
	})).apply(this, arguments);
}
function br(e) {
	return br = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, br(e);
}
function xr(e, t, n) {
	return (t = function(e) {
		var t = function(e) {
			if (br(e) != "object" || !e) return e;
			var t = e[Symbol.toPrimitive];
			if (t !== void 0) {
				var n = t.call(e, "string");
				if (br(n) != "object") return n;
				throw TypeError("@@toPrimitive must return a primitive value.");
			}
			return String(e);
		}(e);
		return br(t) == "symbol" ? t : t + "";
	}(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Sr(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function B(e) {
	for (var t = 1; arguments.length > t; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Sr(Object(n), !0).forEach(function(t) {
			xr(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sr(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var Cr, wr, Tr, Er;
function Dr(e) {
	let t = globalThis._posthogChunkIds, n = globalThis._debugIds;
	if (!t && !n) return;
	let r = t ? Object.keys(t) : [], i = n ? Object.keys(n) : [];
	if (Er && Or(t, r, wr) && Or(n, i, Tr)) return Er;
	wr = t ? B({}, t) : void 0, Tr = n ? B({}, n) : void 0, Er = {}, Cr ??= {};
	let a = (t, n) => {
		for (let r of t) {
			let t = n[r];
			if (!t) continue;
			let i = Cr?.[r];
			if (i) {
				Er[i] = t;
				continue;
			}
			let a = e(r);
			for (let e = a.length - 1; e >= 0; e--) {
				let n = a[e]?.filename;
				if (n) {
					Er[n] = t, Cr[r] = n;
					break;
				}
			}
		}
	};
	return n && a(i, n), t && a(r, t), Er;
}
function Or(e, t, n) {
	return e && n ? t.length === Object.keys(n).length && t.every((t) => e[t] === n[t]) : e === n;
}
var kr = class {
	constructor(e, t, n = []) {
		this.coercers = e, this.stackParser = t, this.modifiers = n;
	}
	buildFromUnknown(e, t = {}) {
		let n = t && t.mechanism || {
			handled: !0,
			type: "generic"
		}, r = this.buildCoercingContext(n, t, 0).apply(e), i = this.buildParsingContext(t), a = this.parseStacktrace(r, i);
		return {
			$exception_list: this.convertToExceptionList(a, n),
			$exception_level: "error"
		};
	}
	modifyFrames(e) {
		var t = this;
		return z(function* () {
			for (let n of e) n.stacktrace && n.stacktrace.frames && j(n.stacktrace.frames) && (n.stacktrace.frames = yield t.applyModifiers(n.stacktrace.frames));
			return e;
		})();
	}
	coerceFallback(e) {
		return {
			type: "Error",
			value: "Unknown error",
			stack: e.syntheticException?.stack,
			synthetic: !0
		};
	}
	parseStacktrace(e, t) {
		let n, r;
		if (e.cause != null && (n = this.parseStacktrace(e.cause, t)), e.stack != "" && e.stack != null) try {
			r = this.applyChunkIds(this.stackParser(e.stack, e.synthetic ? t.skipFirstLines : 0), t.chunkIdMap);
		} catch {}
		return B(B({}, e), {}, {
			cause: n,
			stack: r,
			errors: e.errors?.map((e) => this.parseStacktrace(e, t))
		});
	}
	applyChunkIds(e, t) {
		return e.map((e) => (e.filename && t && (e.chunk_id = t[e.filename]), e));
	}
	applyCoercers(e, t) {
		for (let n of this.coercers) if (n.match(e)) return n.coerce(e, t);
		return this.coerceFallback(t);
	}
	applyModifiers(e) {
		var t = this;
		return z(function* () {
			let n = e;
			for (let e of t.modifiers) n = yield e(n);
			return n;
		})();
	}
	convertToExceptionList(e, t) {
		let n = [], r = (e, i, a) => {
			let o = n.length, s = i === void 0 ? B(B({ type: typeof t.type == "string" && t.type.length > 0 ? t.type : "generic" }, typeof t.handled == "boolean" ? { handled: t.handled } : t.handled === void 0 ? { handled: !0 } : {}), {}, {
				synthetic: typeof t.synthetic == "boolean" ? t.synthetic : e.synthetic,
				exception_id: o
			}) : {
				type: "chained",
				source: a,
				synthetic: e.synthetic,
				exception_id: o,
				parent_id: i
			}, c = {
				type: e.type,
				value: e.value,
				mechanism: s
			};
			e.stack && (c.stacktrace = {
				type: "raw",
				frames: e.stack
			}), n.push(c), e.cause && r(e.cause, o, "cause");
			for (let t of e.errors ?? []) r(t, o, "member");
		};
		return r(e), n;
	}
	buildParsingContext(e) {
		return {
			chunkIdMap: Dr(this.stackParser),
			skipFirstLines: e.skipFirstLines ?? 1
		};
	}
	getAggregateErrors(e) {
		try {
			if (Wt(e)) {
				let t = Object.getPrototypeOf(e);
				for (let n = 0; t && 100 > n; n++) {
					let n = Object.getOwnPropertyDescriptor(t, "constructor")?.value;
					if (typeof n == "function" && n.name === "AggregateError") {
						let t = e.errors;
						return j(t) ? t : void 0;
					}
					t = Object.getPrototypeOf(t);
				}
			}
		} catch {}
	}
	buildCoercingContext(e, t, n = 0) {
		let r = 0, i = 0, a = !1, o = /* @__PURE__ */ new Set(), s = [], c = {}, l = (e, t, n = 0) => {
			let l = u(t, n), d = l.apply;
			if (l.apply = (t) => {
				s.push(e);
				try {
					return d(t);
				} finally {
					s.pop();
				}
			}, n > 4 || n > 0 && s.indexOf(e) !== -1) return this.coerceFallback(l);
			let f = typeof e == "object" && !!e || typeof e == "function";
			if (n === 0 && r >= 50 || f && o.has(e)) return;
			f && o.add(e), n === 0 && r++;
			let p = this.getAggregateErrors(e), m, h;
			a ||= !!p;
			try {
				if (m = this.applyCoercers(e, l), !m) throw c;
			} catch (e) {
				if (e === c) return void (n === 0 && r--);
				if (!a) throw e;
				m = this.coerceFallback(l);
			}
			if (!p || r >= 50) return m;
			try {
				h = p.length;
			} catch {
				return m;
			}
			if (!Number.isInteger(h) || 0 > h || h > 4294967295) return m;
			let g = [];
			for (let e = 0; 50 > r && 1e3 > i && h > e; e++) {
				let n;
				i++;
				try {
					n = l.next(p[e]);
				} catch {
					r++, n = this.coerceFallback(u(t + 1));
				}
				n && g.push(n);
			}
			return B(B({}, m), {}, { errors: g });
		}, u = (n, r = 0) => B(B({}, t), {}, {
			syntheticException: n == 0 ? t.syntheticException : void 0,
			mechanism: n == 0 ? e : {},
			apply(e) {
				let t = l(e, n, r + 1);
				if (!t) throw c;
				return t;
			},
			next: (e) => l(e, n + 1)
		}), d = u(n);
		return B(B({}, d), {}, { apply: (e) => l(e, n) ?? this.coerceFallback(d) });
	}
}, Ar = /^([a-z][a-z0-9.+-]+):/i, jr = [
	"http",
	"https",
	"file",
	"blob",
	"app",
	"capacitor",
	"ionic",
	"webpack",
	"webpack-internal",
	"ng"
];
function Mr(e) {
	if (!e || e === "<anonymous>") return !1;
	let t = Ar.exec(e);
	return !t || jr.includes(t[1].toLowerCase());
}
function Nr(e, t, n, r, i) {
	let a = {
		platform: e,
		filename: t,
		function: n === "<anonymous>" ? "?" : n,
		in_app: Mr(t)
	};
	return P(r) || (a.lineno = r), P(i) || (a.colno = i), a;
}
var Pr = (e, t) => {
	let n = e.indexOf("safari-extension") !== -1, r = e.indexOf("safari-web-extension") !== -1;
	return n || r ? [e.indexOf("@") === -1 ? "?" : e.split("@")[0], n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t];
}, Fr = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i, Ir = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, Lr = /\((\S*)(?::(\d+))(?::(\d+))\)/, Rr = (e, t) => {
	let n = Fr.exec(e);
	if (n) {
		let [, e, r, i] = n;
		return Nr(t, e, "?", +r, +i);
	}
	let r = Ir.exec(e);
	if (r) {
		if (r[2] && r[2].indexOf("eval") === 0) {
			let e = Lr.exec(r[2]);
			e && (r[2] = e[1], r[3] = e[2], r[4] = e[3]);
		}
		let [e, n] = Pr(r[1] || "?", r[2]);
		return Nr(t, n, e, r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0);
	}
}, zr = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, Br = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, Vr = (e, t) => {
	let n = zr.exec(e);
	if (n) {
		if (n[3] && n[3].indexOf(" > eval") > -1) {
			let e = Br.exec(n[3]);
			e && (n[1] = n[1] || "eval", n[3] = e[1], n[4] = e[2], n[5] = "");
		}
		let e = n[3], r = n[1] || "?";
		return [r, e] = Pr(r, e), Nr(t, e, r, n[4] ? +n[4] : void 0, n[5] ? +n[5] : void 0);
	}
}, Hr = /\(error: (.*)\)/;
function Ur(e, t) {
	return e.filename === t.filename && e.function === t.function && e.module === t.module && e.lineno === t.lineno && e.colno === t.colno;
}
function Wr(e) {
	for (let t = 1; 10 >= t; t++) {
		let n = e.length - 2 * t;
		if (0 > n) break;
		let r = !0;
		for (let i = 0; t > i; i++) if (!Ur(e[n + i], e[n + t + i])) {
			r = !1;
			break;
		}
		if (r) {
			for (let r = 0; t > r; r++) e[n + r] = e[n + t + r];
			return e.length = n + t, {
				start: n,
				length: t
			};
		}
	}
}
function Gr(e, t) {
	let n = t.start + t.length, r = qr(e, t);
	r && e.splice(n + r === e.length ? n : t.start, r);
}
function Kr(e, t) {
	let n = t.start;
	for (; n > 0 && Ur(e[n - 1], e[n - 1 + t.length]);) n--;
	return t.start - n;
}
function qr(e, t) {
	let n = t.start + t.length, r = n;
	for (; e.length > r && Ur(e[r], e[r - t.length]);) r++;
	return r - n;
}
function Jr(e, t) {
	let n = t[0], r = e.length - (n ? Kr(e, n) : 0);
	for (let n of t) r -= qr(e, n);
	return r;
}
function Yr(e, t, n) {
	for (let r = 0; e.length > r; r++) {
		let i = e[(t + r) % e.length], a = e[(n + r) % e.length];
		if (i !== a) return a > i;
	}
	return !1;
}
var Xr = class {
	match(e) {
		return this.isDOMException(e) || this.isDOMError(e);
	}
	coerce(e, t) {
		let n = F(e.stack);
		return {
			type: this.getType(e),
			value: this.getValue(e),
			stack: n ? e.stack : void 0,
			cause: e.cause ? t.next(e.cause) : void 0,
			synthetic: !1
		};
	}
	getType(e) {
		return this.isDOMError(e) ? "DOMError" : "DOMException";
	}
	getValue(e) {
		let t = e.name || (this.isDOMError(e) ? "DOMError" : "DOMException");
		return e.message ? `${t}: ${e.message}` : t;
	}
	isDOMException(e) {
		return Ut(e, "DOMException");
	}
	isDOMError(e) {
		return Ut(e, "DOMError");
	}
}, Zr = class {
	match(e) {
		return Wt(e);
	}
	coerce(e, t) {
		let n = this.getStack(e), r = n === void 0 ? t.syntheticException?.stack : void 0, i = !!r;
		return {
			type: this.getType(e),
			value: this.getMessage(e, t),
			stack: n ?? r,
			cause: e.cause ? t.next(e.cause) : void 0,
			synthetic: i
		};
	}
	getType(e) {
		return e.name || e.constructor.name;
	}
	getMessage(e, t) {
		let n = e.message;
		return String(n.error && typeof n.error.message == "string" ? n.error.message : n);
	}
	getStack(e) {
		try {
			let t = e.stacktrace;
			if (typeof t == "string" && t.length > 0) return t;
			let n = e.stack;
			return typeof n == "string" && n.length > 0 ? n : void 0;
		} catch {
			return;
		}
	}
}, Qr = class {
	match(e) {
		return !!Ut(e, "ErrorEvent") && (e.error != null || this._hasUsableMessage(e));
	}
	coerce(e, t) {
		if (e.error != null) return t.apply(e.error);
		let n = t.apply(e.message);
		return B(B({}, n), {}, {
			stack: this._buildLocationStack(e) ?? n.stack,
			synthetic: !0
		});
	}
	_hasUsableMessage(e) {
		return F(e.message) && e.message.length > 0;
	}
	_buildLocationStack(e) {
		let t = e, n = t.lineno ?? 0, r = t.colno ?? 0;
		if (F(t.filename) && t.filename.length !== 0 && n !== 0) return `Error\n    at ${t.filename}:${n}:${r}`;
	}
}, $r = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i, ei = class {
	match(e) {
		return typeof e == "string";
	}
	coerce(e, t) {
		let [n, r] = this.getInfos(e);
		return {
			type: n ?? "Error",
			value: r ?? e,
			stack: t.syntheticException?.stack,
			synthetic: !0
		};
	}
	getInfos(e) {
		let t = "Error", n = e, r = e.match($r);
		return r && (t = r[1], n = r[2]), [t, n];
	}
}, ti = [
	"fatal",
	"error",
	"warning",
	"log",
	"info",
	"debug"
];
function ni(e, t = 40) {
	let n = Object.keys(e);
	if (n.sort(), !n.length) return "[object has no keys]";
	for (let e = n.length; e > 0; e--) {
		let r = n.slice(0, e).join(", ");
		if (t >= r.length) return e === n.length ? r : r.length > t ? `${r.slice(0, t)}...` : r;
	}
	return "";
}
var ri = class {
	match(e) {
		return typeof e == "object" && !!e;
	}
	coerce(e, t) {
		let n = this.getErrorPropertyFromObject(e);
		return n ? t.apply(n) : {
			type: this.getType(e),
			value: this.getValue(e),
			stack: this.getStack(e) ?? t.syntheticException?.stack,
			level: this.isSeverityLevel(e.level) ? e.level : "error",
			synthetic: !0
		};
	}
	getType(e) {
		if (Gt(e)) return e.constructor.name;
		let t = "name" in e ? e.name : void 0;
		return F(t) && !Lt(t) ? t : "Error";
	}
	getValue(e) {
		if ("name" in e && typeof e.name == "string") {
			let t = `'${e.name}' captured as exception`;
			return "message" in e && typeof e.message == "string" && (t += ` with message: '${e.message}'`), t;
		}
		if ("message" in e && typeof e.message == "string") return e.message;
		let t = this.getObjectClassName(e);
		return `${t && t !== "Object" ? `'${t}'` : "Object"} captured as exception with keys: ${ni(e)}`;
	}
	isSeverityLevel(e) {
		return F(e) && !Lt(e) && ti.indexOf(e) >= 0;
	}
	getStack(e) {
		try {
			return F(e.stacktrace) && e.stacktrace.length > 0 ? e.stacktrace : F(e.stack) && e.stack.length > 0 ? e.stack : void 0;
		} catch {
			return;
		}
	}
	getErrorPropertyFromObject(e) {
		for (let t in e) if ({}.hasOwnProperty.call(e, t)) {
			let n = e[t];
			if (Wt(n)) return n;
		}
	}
	getObjectClassName(e) {
		try {
			let t = Object.getPrototypeOf(e);
			return t ? t.constructor.name : void 0;
		} catch {
			return;
		}
	}
}, ii = class {
	match(e) {
		return Gt(e);
	}
	coerce(e, t) {
		let n = e.constructor.name;
		return {
			type: n,
			value: `${n} captured as exception with keys: ${ni(e)}`,
			stack: t.syntheticException?.stack,
			synthetic: !0
		};
	}
}, ai = class {
	match(e) {
		return Ht(e);
	}
	coerce(e, t) {
		return {
			type: "Error",
			value: `Primitive value captured as exception: ${String(e)}`,
			stack: t.syntheticException?.stack,
			synthetic: !0
		};
	}
}, oi = class {
	match(e) {
		return Ut(e, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(e);
	}
	isCustomEventWrappingRejection(e) {
		if (!Gt(e)) return !1;
		try {
			let t = e.detail;
			return typeof t == "object" && !!t && "reason" in t;
		} catch {
			return !1;
		}
	}
	coerce(e, t) {
		let n = this.getUnhandledRejectionReason(e);
		return Ht(n) ? {
			type: "UnhandledRejection",
			value: `Non-Error promise rejection captured with value: ${String(n)}`,
			stack: t.syntheticException?.stack,
			synthetic: !0
		} : t.apply(n);
	}
	getUnhandledRejectionReason(e) {
		try {
			if ("reason" in e) return e.reason;
			if ("detail" in e && e.detail != null && typeof e.detail == "object" && "reason" in e.detail) return e.detail.reason;
		} catch {}
		return e;
	}
}, si = "$message", ci = "$timestamp", li = /* @__PURE__ */ new Set([si, ci]), ui = {
	enabled: !0,
	max_bytes: 32768
};
function di(e) {
	return e ? {
		enabled: e.enabled ?? ui.enabled,
		max_bytes: pi(e.max_bytes, ui.max_bytes)
	} : B({}, ui);
}
var fi = class {
	constructor(e) {
		this._entries = [], this._totalBytes = 0, this._config = di(e);
	}
	setConfig(e) {
		this._config = di(e), this._trimToMaxBytes();
	}
	add(e) {
		let t = function(e) {
			let t;
			try {
				t = Mt(e);
			} catch {
				return;
			}
			try {
				let e = JSON.parse(t);
				if (!N(e)) return;
				let n = e, r = n[si], i = n[ci];
				return !F(r) || r.trim().length === 0 || !F(i) && !R(i) ? void 0 : {
					step: n,
					json: t
				};
			} catch {
				return;
			}
		}(e);
		if (!t) return;
		let n = function(e) {
			if ("u" > typeof TextEncoder) return new TextEncoder().encode(e).length;
			let t = encodeURIComponent(e), n = 0;
			for (let e = 0; t.length > e; e++) t[e] === "%" ? (n += 1, e += 2) : n += 1;
			return n;
		}(t.json);
		n > this._config.max_bytes || (this._entries.push({
			step: t.step,
			bytes: n
		}), this._totalBytes += n, this._trimToMaxBytes());
	}
	getAttachable() {
		return this._entries.map((e) => e.step);
	}
	clear() {
		this._entries = [], this._totalBytes = 0;
	}
	size() {
		return this._entries.length;
	}
	_trimToMaxBytes() {
		for (; this._totalBytes > this._config.max_bytes && this._entries.length > 0;) {
			let e = this._entries.shift();
			e && (this._totalBytes -= e.bytes);
		}
	}
};
function pi(e, t) {
	if (!R(e) || 1 / 0 === e || -1 / 0 === e) return t;
	let n = Math.floor(e);
	return 0 > n ? t : n;
}
var mi = (e) => {
	if (typeof e != "string") return e;
	try {
		return JSON.parse(e);
	} catch {
		return e;
	}
};
function hi(e) {
	return typeof e == "string" || e;
}
function gi(e) {
	return typeof e == "string" ? e : void 0;
}
var _i = /* @__PURE__ */ "$feature_flag.$feature_flag_response.$feature_flag_has_experiment.$feature_flag_id.$feature_flag_version.$feature_flag_reason.$feature_flag_request_id.$feature_flag_evaluated_at.$feature_flag_error.locally_evaluated.$groups.$process_person_profile.$geoip_disable.$current_url.$pathname.$referring_domain.utm_source.utm_medium.utm_campaign.utm_content.utm_term.gad_source.mc_cid.gclid.gclsrc.dclid.gbraid.wbraid.fbclid.msclkid.twclid.li_fat_id.igshid.ttclid.rdt_cid.epik.qclid.sccid.oppref.bfcid.irclid._kx.$session_id.$window_id.$lib.$lib_version.$device_id.$is_server".split("."), vi = "NativeGzipValidationError", yi = (e) => e.length >= 2 && e[0] === 31 && e[1] === 139, bi = (e, t) => e === Dt.GZipJS || t === Dt.GZipJS || t === "gzip", xi = (e) => !(!e || typeof e != "object") && ("name" in e ? String(e.name) : "") === "NotReadableError", Si, Ci = (e) => {
	throw mr(vi, `Native gzip produced invalid output: ${e}`);
}, wi = (Ti = z(function* (e, t) {
	18 > e.size && Ci("too-short");
	let n = new Uint8Array(yield e.slice(0, 10).arrayBuffer());
	yi(n) && n[2] === 8 || Ci("invalid-header");
	let r = new DataView(yield e.slice(e.size - 8).arrayBuffer());
	r.getUint32(0, !0) !== ((e) => {
		let t = (() => {
			if (Si) return Si;
			Si = [];
			for (let e = 0; 256 > e; e++) {
				let t = e;
				for (let e = 0; 8 > e; e++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
				Si[e] = t >>> 0;
			}
			return Si;
		})(), n = 4294967295;
		for (let r = 0; e.length > r; r++) n = t[255 & (n ^ e[r])] ^ n >>> 8;
		return (4294967295 ^ n) >>> 0;
	})(t) && Ci("invalid-crc");
	let i = t.length >>> 0;
	r.getUint32(4, !0) !== i && Ci("invalid-size");
}), function(e, t) {
	return Ti.apply(this, arguments);
}), Ti;
function Ei() {
	return Ei = z(function* (e, t = !0, n) {
		try {
			let t = new TextEncoder().encode(e), n = new globalThis.CompressionStream("gzip"), i = n.writable.getWriter(), a = i.write(t).then(() => i.close()).catch((r = z(function* (e) {
				try {
					yield i.abort(e);
				} catch {}
				throw e;
			}), function(e) {
				return r.apply(this, arguments);
			})), o = new Response(n.readable).blob(), [s] = yield Promise.all([o, a]);
			return yield wi(s, t), s;
		} catch (e) {
			if (n?.rethrow) throw e;
			return t && console.error("Failed to gzip compress data", e), null;
		}
		var r;
	}), Ei.apply(this, arguments);
}
function Di(e, t) {
	if (e == null) return {};
	var n, r, i = function(e, t) {
		if (e == null) return {};
		var n = {};
		for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
			if (t.includes(r)) continue;
			n[r] = e[r];
		}
		return n;
	}(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; a.length > r; r++) t.includes(n = a[r]) || {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
var Oi = "[redacted]", ki = /^[A-Za-z0-9+/\n\r]+=*$/, Ai = /^[A-Za-z0-9_-]+={0,2}$/, ji = /[-_]/, Mi = /^data:[^,\s]*;base64,/i, Ni = /^[A-Za-z0-9+/_-]+={0,2}$/, Pi = /\bph[a-z]_[A-Za-z0-9_-]{20,}\b/g, Fi = /^(authorization|cookie|set-cookie|x-api-key|api[-_]?key|api[-_]?token|access[-_]?token|refresh[-_]?token|token|password|secret|client[-_]?secret|private[-_]?key)$/i, Ii = /[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi, Li = /[\s<>"]/, Ri = new RegExp(Ii.source, "i"), zi = /[a-z][a-z0-9+.-]{0,63}:\/\//i, Bi = RegExp(`^${zi.source}`, "i"), Vi = new RegExp(zi.source, "gi"), Hi = /(^|[-_./;])(auth|token|secret|password|passwd|pwd|credential|signature|sig|key|hmac|sas|bearer|jwt|session|sessionid)([-_./;]|$)/i, Ui = /^(code|AWSAccessKeyId|GoogleAccessId|Policy)$/i, Wi = /[\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/g, Gi = /[A-Za-z0-9._%+-]{1,64}@[A-Za-z0-9.-]{1,255}\.[A-Za-z]{2,24}/g, Ki = /\b(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\b/g, qi = /(^|[^\w:])((?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}|(?:[0-9A-Fa-f]{1,4}:){1,7}:|(?:[0-9A-Fa-f]{1,4}:){1,6}:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,5}|::(?:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,6})))(?=$|[^\w:])/g, Ji = /\b\d{3}[ .-]\d{2}[ .-]\d{4}\b/g, Yi = /\b\d(?:[ ./-]?\d){12,}\b/g, Xi = /\d+/g, Zi = /(^|[^\w+])((?:\+?1[ ./-]?)?(?:\(\d{3}\)[ ./-]?|\d{3}[ ./-])\d{3}[ ./-]\d{4})(?![\w])/g, Qi = /(^|[^\w])(\+\d{1,3}(?:[ ./()-]{0,2}\d){7,13})(?![\w])/g;
function $i(e) {
	return function(e) {
		return Fi.test(e);
	}(e) || Hi.test(e) || Ui.test(e);
}
function ea(e) {
	return e.split("&", 129).length > 128;
}
function ta(e, t, n) {
	return $i(e) || t.includes(";") && function(e) {
		return e.split(";").some((e) => $i(e.split("=", 1)[0]));
	}(t) ? Oi : Ri.test(t) ? n ? sa(t, {
		allowNestedUrls: !1,
		stripPunctuation: !0
	}) : Oi : t;
}
function na(e, t) {
	let n = new URLSearchParams(), r = !1, i = !1;
	for (let [a, o] of new URLSearchParams(e)) {
		let e = ca(a), s = ca(o);
		r ||= e !== a || s !== o;
		let c = ta(e, s, t);
		r ||= c !== s, i = $i(e) || c !== s, n.append(e, c);
	}
	return {
		changed: r,
		lastFieldSensitive: i,
		serialized: n.toString()
	};
}
function ra(e, t) {
	if (!e.includes("=")) return {
		value: ia(e, t),
		lastFieldSensitive: !1
	};
	let n = na(e, t);
	return {
		value: n.changed ? n.serialized : e,
		lastFieldSensitive: n.lastFieldSensitive
	};
}
function ia(e, t) {
	return t ? sa(e, {
		allowNestedUrls: !1,
		stripPunctuation: !0
	}) : Ri.test(e) ? Oi : e;
}
function aa(e, t, n) {
	return e === "#" ? !t.fragment && (t.fragment = !0) : e === "?" && (t.fragment ? n !== "=" && !t.fragmentQuery && (t.fragmentQuery = !0) : !t.query && (t.query = !0));
}
function oa(e, t) {
	if (e.length > 8192 && Bi.test(e)) return Oi;
	let { address: n, suffix: r } = t.stripPunctuation ? function(e) {
		let t = e.length;
		for (; t > 0 && ".,;:!?)]}'".includes(e[t - 1]);) t--;
		return {
			address: e.slice(0, t),
			suffix: e.slice(t)
		};
	}(e) : {
		address: e,
		suffix: ""
	}, i;
	try {
		i = new URL(n);
	} catch {
		return Oi + r;
	}
	let a = i.search.slice(1), o = i.hash !== "", s = function(e) {
		let t = e.slice(1), n = t.indexOf("?");
		return 0 > n ? {
			head: t,
			tail: null
		} : {
			head: t.slice(0, n),
			tail: t.slice(n + 1)
		};
	}(i.hash);
	if (ea(a) || ea(s.head) || ea(s.tail ?? "")) return Oi + r;
	let c = !1;
	(i.username || i.password) && (i.username = Oi, i.password = "", c = !0);
	let l = na(a, t.allowNestedUrls);
	l.changed && (i.search = l.serialized, c = !0);
	let u = ra(s.head, t.allowNestedUrls), d = s.tail === null ? null : (f = s.tail, u.lastFieldSensitive ? {
		value: f === "" ? "" : Oi,
		lastFieldSensitive: !0
	} : ra(f, t.allowNestedUrls));
	var f;
	let p = d === null ? u.value : `${u.value}?${d.value}`;
	p !== i.hash.slice(1) && (i.hash = p, c = !0);
	let m = o ? d ?? u : l;
	return (c ? ca(i.toString()) : n) + (m.lastFieldSensitive ? "" : r);
}
function sa(e, t) {
	return e.replace(Ii, (n) => function(e, t) {
		let n = function(e) {
			if (!e.includes("://")) return [];
			let t = [...e.matchAll(Vi)].map((e) => e.index), n = [], r = {
				query: !1,
				fragment: !1,
				fragmentQuery: !1
			}, i = 0, a = !1, o = "";
			for (let s = 0; e.length > s && t.length > i; s++) {
				t[i] === s && (s > 0 && o !== "=" && n.push(s), i++);
				let c = e[s];
				aa(c, r, o) ? (o = c, a = !0) : a && "=&".includes(c) && (o = c);
			}
			return n;
		}(e);
		if (n.length === 0) return oa(e, t);
		let r = "", i = 0;
		for (let a of n) r += oa(e.slice(i, a), B(B({}, t), {}, { stripPunctuation: !1 })), i = a;
		return r + oa(e.slice(i), t);
	}(n, B(B({}, t), {}, { stripPunctuation: t.stripPunctuation && n.length !== e.length })));
}
function ca(e) {
	return e.replace(Pi, Oi);
}
function la(e, t) {
	return function(e) {
		return e.length >= 10240 && (ki.test(e) || function(e) {
			let t = Mi.exec(e);
			if (!t) return !1;
			let n;
			try {
				n = decodeURIComponent(e.slice(t[0].length));
			} catch {
				return !1;
			}
			return Ni.test(n.replace(/[\r\n]/g, ""));
		}(e) || ji.test(e) && Ai.test(e));
	}(e) ? "[binary data redacted - not supported by PostHog MCP analytics]" : function(e, t, n) {
		let r = 4 * n.maxStringLength;
		if (e.length > r) {
			let i = t(e.slice(0, function(e, t) {
				let n = t;
				for (; n > 0 && !Li.test(e[n - 1]);) n--;
				return n;
			}(e, r)));
			if (i.length >= 2 * n.maxStringLength) return i + n.truncationSuffix;
		}
		return t(e);
	}(e, (e) => function(e) {
		return sa(e, {
			allowNestedUrls: !0,
			stripPunctuation: !0
		});
	}(function(e) {
		let t = e.replace(Wi, " ");
		return t = t.replace(Gi, Oi), t = t.replace(Ki, Oi), t = t.replace(qi, `$1${Oi}`), t = t.replace(Yi, da), t = t.replace(Ji, Oi), t = t.replace(Zi, `$1${Oi}`), t = t.replace(Qi, `$1${Oi}`), t;
	}(ca(e))), t);
}
function ua(e) {
	let t = 0, n = !1;
	for (let r = e.length - 1; r >= 0; r--) {
		let i = e.charCodeAt(r) - 48;
		if (0 > i || i > 9) return !1;
		n && (i *= 2, i > 9 && (i -= 9)), t += i, n = !n;
	}
	return t % 10 == 0;
}
function da(e) {
	let t = [];
	for (let n = Xi.exec(e); n !== null; n = Xi.exec(e)) t.push({
		digits: n[0],
		start: n.index,
		end: n.index + n[0].length
	});
	let n = "", r = 0, i = 0;
	for (; t.length > i;) {
		let a = "", o = -1;
		for (let e = i; t.length > e && (a += t[e].digits, 19 >= a.length); e++) a.length >= 13 && ua(a) && (o = e);
		0 > o ? i++ : (n += e.slice(r, t[i].start) + Oi, r = t[o].end, i = o + 1);
	}
	return n + e.slice(r);
}
var fa = {}.propertyIsEnumerable;
function pa(e, t) {
	try {
		return ga(e, t, {
			ancestors: /* @__PURE__ */ new WeakSet(),
			remainingNodes: 1e4
		}, 0);
	} catch {
		return [];
	}
}
function ma(e, t, n, r) {
	if (0 >= n.remainingNodes) return { stringValue: or };
	if (n.remainingNodes--, zt(e)) return { boolValue: e };
	if (typeof e == "bigint") return function(e, t) {
		let n = e.toString(), r = BigInt("9223372036854775808");
		return e >= r || -r > e ? (t?.debug(`Attribute ${n} is outside the int64 range; encoding it as a string`), { stringValue: n }) : { intValue: n };
	}(e, t);
	if (typeof e == "number") {
		if (!Number.isFinite(e)) return { stringValue: String(e) };
		if (Number.isInteger(e)) {
			if (Number.isSafeInteger(e)) return { intValue: String(e) };
			if (typeof BigInt > "u") return { stringValue: String(e) };
			let n = BigInt(e).toString();
			return e >= 0x8000000000000000 || -0x8000000000000000 > e ? (t?.debug(`Attribute ${n} is outside the int64 range; encoding it as a string`), { stringValue: n }) : { intValue: n };
		}
		return { doubleValue: e };
	}
	if (typeof e == "string") return { stringValue: cr(e) };
	if (typeof e == "function") return { stringValue: "[Function]" };
	if (typeof e == "symbol") return { stringValue: String(e) };
	if (typeof e == "object" && e) {
		if (n.ancestors.has(e)) return { stringValue: "[Circular]" };
		if (r >= 20) return { stringValue: or };
		if (e instanceof Date) {
			let t = e.getTime(), n = Number.isFinite(t) ? e.toISOString() : String(e);
			return { stringValue: typeof n == "string" ? cr(n) : String(n) };
		}
		n.ancestors.add(e);
		try {
			try {
				let i = e.toJSON;
				if (typeof i == "function") return ma(i.call(e), t, n, r + 1);
			} catch {}
			return j(e) ? { arrayValue: { values: ha(e, t, n, r + 1) } } : { kvlistValue: { values: ga(e, t, n, r + 1) } };
		} finally {
			n.ancestors.delete(e);
		}
	}
	return { stringValue: cr(String(e)) };
}
function ha(e, t, n, r) {
	let i = [], a = Math.min(e.length, 1e3), o = 0;
	for (; a > o && n.remainingNodes > 0; o++) try {
		let a = o in e ? e[o] : void 0;
		if (L(a)) continue;
		i.push(ma(a, t, n, r));
	} catch {
		i.push({ stringValue: sr });
	}
	return e.length > o && i.push({ stringValue: or }), i;
}
function ga(e, t, n, r) {
	let i = [];
	for (let a in e) if (fa.call(e, a)) {
		if (!a) {
			t?.debug("Dropping an attribute with an empty key");
			continue;
		}
		if (i.length >= 1e3 || 0 >= n.remainingNodes) {
			t?.debug("Attributes truncated: the value exceeds the OTLP encoder budget");
			break;
		}
		try {
			let o = e[a];
			if (I(o) || P(o)) continue;
			i.push({
				key: cr(a),
				value: ma(o, t, n, r)
			});
		} catch {
			i.push({
				key: cr(a),
				value: { stringValue: sr }
			});
		}
	}
	return i;
}
function _a(e, t, n) {
	return B(B(B(B({}, lr({}, e.resourceAttributes)), {}, { "service.name": e.serviceName || "unknown_service" }, e.environment && { "deployment.environment": e.environment }), e.serviceVersion && { "service.version": e.serviceVersion }), {}, {
		"telemetry.sdk.name": t,
		"telemetry.sdk.version": n
	});
}
var va = [
	"service.name",
	"deployment.environment",
	"service.version",
	"telemetry.sdk.name",
	"telemetry.sdk.version"
];
function ya(e, t) {
	let n = lr({}, e), r = {};
	for (let e of va) ({}).hasOwnProperty.call(n, e) && (r[e] = n[e], delete n[e]);
	return [...pa(n, t), ...pa(r, t)];
}
var ba = {
	darwin: "macOS",
	win32: "Windows",
	cygwin: "Windows",
	linux: "Linux",
	android: "Android",
	freebsd: "FreeBSD",
	openbsd: "OpenBSD",
	netbsd: "NetBSD",
	sunos: "SunOS",
	aix: "AIX",
	haiku: "Haiku",
	"Mac OS X": "macOS"
}, xa = {
	trace: {
		text: "TRACE",
		number: 1
	},
	debug: {
		text: "DEBUG",
		number: 5
	},
	info: {
		text: "INFO",
		number: 9
	},
	warn: {
		text: "WARN",
		number: 13
	},
	error: {
		text: "ERROR",
		number: 17
	},
	fatal: {
		text: "FATAL",
		number: 21
	}
}, Sa = xa.info;
function Ca(e) {
	try {
		return cr(String(e));
	} catch {
		return sr;
	}
}
function wa(e, t, n, r) {
	let { text: i, number: a } = xa[e.level || "info"] || Sa, o = function(e = Date.now()) {
		return String(e) + "000000";
	}(R(r) ? r : void 0), s = {};
	t.distinctId && (s.posthogDistinctId = t.distinctId), t.sessionId && (s.sessionId = t.sessionId), t.windowId && (s["window.id"] = t.windowId), L(t.sessionStartTimestamp) || (s.sessionStartTimestamp = String(t.sessionStartTimestamp)), L(t.lastActivityTimestamp) || (s.lastActivityTimestamp = String(t.lastActivityTimestamp)), t.currentUrl && (s["url.full"] = t.currentUrl), t.screenName && (s["screen.name"] = t.screenName), t.appState && (s["app.state"] = t.appState), t.activeFeatureFlags && t.activeFeatureFlags.length > 0 && (s.feature_flags = t.activeFeatureFlags);
	let c = B({}, s), l = e.attributes;
	if (l) {
		let e = [];
		try {
			e = Object.keys(l);
		} catch {
			e = [];
		}
		for (let t of e) {
			let e;
			try {
				e = l[t];
			} catch {
				e = sr;
			}
			Object.defineProperty(c, t, {
				value: e,
				enumerable: !0,
				writable: !0,
				configurable: !0
			});
		}
	}
	let u = {
		timeUnixNano: o,
		observedTimeUnixNano: o,
		severityNumber: a,
		severityText: i,
		body: { stringValue: Ca(e.body) },
		attributes: pa(c, n)
	};
	return e.trace_id && (u.traceId = e.trace_id), e.span_id && (u.spanId = e.span_id), P(e.trace_flags) || (u.flags = e.trace_flags), u;
}
function Ta(e, t, n) {
	return _a(e, t, n);
}
function Ea(e, t, n, r) {
	return { resourceLogs: [{
		resource: { attributes: ya(t) },
		scopeLogs: [{
			scope: {
				name: n,
				version: r
			},
			logRecords: e
		}]
	}] };
}
var Da = class {
	constructor(e) {
		this._onFire = e, this._firesAt = 0;
	}
	get pending() {
		return !!this._timer;
	}
	arm(e) {
		this.clear(), this._firesAt = Date.now() + e, this._timer = _r(() => {
			this._timer = void 0, this._onFire();
		}, e);
	}
	armNoEarlierThan(e) {
		this._timer && Date.now() + e <= this._firesAt || this.arm(e);
	}
	clear() {
		this._timer &&= (clearTimeout(this._timer), void 0);
	}
};
function Oa() {
	return .75 + .5 * Math.random();
}
function ka(e, t, n, r) {
	let i = e * 2 ** Math.min(Math.max(0, t - 1), 6);
	return Math.round((r === void 0 ? i : Math.min(i, Math.max(r, e))) * n);
}
var Aa = class {
	constructor(e, t, n, r, i, a = () => Promise.resolve(), o) {
		this._instance = e, this._config = t, this._logger = n, this._getContext = r, this._onReady = i, this._waitForStoragePersist = a, this._scopeName = o, this._flushTimer = new Da(() => this._flushInBackground()), this._flushPromise = null, this._evictedSinceAdvance = 0, this._queueGeneration = 0, this._retryAfter = new dr(), this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._intervalWindowStart = 0, this._intervalLogCount = 0, this._droppedWarned = !1, this._maxBufferSize = t.maxBufferSize, this._maxQueueSize = Math.max(t.maxQueueSize ?? t.maxBufferSize, t.maxBufferSize), this._flushIntervalMs = t.flushIntervalMs, this._maxBatchRecordsPerPost = t.maxBatchRecordsPerPost, this._rateCapWindowMs = t.rateCapWindowMs, this._maxLogsPerInterval = t.maxLogsPerInterval;
	}
	clearQueue() {
		this._queueGeneration++, this._instance.setPersistedProperty(Et.LogsQueue, []);
	}
	reset() {
		this._flushTimer.clear(), this._intervalWindowStart = 0, this._intervalLogCount = 0, this._droppedWarned = !1, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.reset(), this._maxBatchRecordsPerPost = this._config.maxBatchRecordsPerPost;
	}
	onReconnect() {
		this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.isOpen() ? this._hasQueuedRecords() && this._armFlushTimer() : this._flushInBackground();
	}
	captureLog(e, t) {
		if (this._instance.isDisabled || this._instance.optedOut || !e?.body) return;
		let n = this._runBeforeSend(e);
		if (n === null) return;
		if (!n.body) return void this._logger.info("Log was rejected in beforeSend function");
		if (!this._checkRateLimit()) return;
		let r = { record: wa(n, t?.context ?? this._getContext(), this._logger, t?.occurredAtMs) };
		this._onReady(() => this._enqueue(r));
	}
	_runBeforeSend(e) {
		let t = this._config.beforeSend;
		if (!t) return e;
		let n = j(t) ? t : [t], r = e;
		for (let e of n) try {
			let t = e(r);
			if (!t) return this._logger.info("Log was rejected in beforeSend function"), null;
			r = t;
		} catch (e) {
			return this._logger.error("Error in beforeSend function for log:", e), null;
		}
		return r;
	}
	_checkRateLimit() {
		if (this._maxLogsPerInterval === void 0) return !0;
		let e = Date.now(), t = e - this._intervalWindowStart;
		return this._rateCapWindowMs > t && t >= 0 || (this._intervalWindowStart = e, this._intervalLogCount = 0, this._droppedWarned = !1), this._maxLogsPerInterval > this._intervalLogCount ? (this._intervalLogCount++, !0) : (this._droppedWarned ||= (this._logger.warn(`captureLog dropping logs: exceeded ${this._maxLogsPerInterval} logs per ${this._rateCapWindowMs}ms`), !0), !1);
	}
	flush() {
		var e = this;
		return z(function* () {
			if (!e._instance.isDisabled) return e._flushPromise ||= e._flushInner().finally(() => {
				e._flushPromise = null;
			}), e._flushPromise;
		})();
	}
	_flushInner() {
		var e = this;
		return z(function* () {
			e._flushTimer.clear();
			let t = e._instance.getPersistedProperty(Et.LogsQueue) ?? [];
			if (t.length === 0) return;
			let n = t.length, r = 0;
			for (; t.length > 0 && n > r;) {
				let n = e._queueGeneration;
				e._evictedSinceAdvance = 0;
				let i = Math.min(t.length, e._maxBatchRecordsPerPost), a = t.slice(0, i), o = Ea(a.map((e) => e.record), e._buildResourceAttributes(), e._scopeName ?? e._instance.getLibraryId(), e._instance.getLibraryVersion()), s = yield e._instance._sendLogsBatch(o);
				if (e._queueGeneration !== n) return;
				if (s.kind === "too-large" && a.length > 1) e._maxBatchRecordsPerPost = Math.max(1, Math.floor(a.length / 2)), e._logger.warn(`Logs batch of size ${a.length} was too large for the ingestion endpoint, reducing batch size to ${e._maxBatchRecordsPerPost}`);
				else if (e._retryAfter.record(s), e._flushTimer.pending && e._flushTimer.arm(Math.max(e._flushIntervalMs, e._retryAfter.remainingMs())), s.kind === "retry-later" || (s.kind === "too-large" ? e._logger.warn("Dropping a single log record with batch size 1 — the record is larger than the server cap and cannot be split further.") : s.kind === "ok" && e._config.maxBatchRecordsPerPost > e._maxBatchRecordsPerPost && (e._maxBatchRecordsPerPost = Math.min(e._config.maxBatchRecordsPerPost, e._maxBatchRecordsPerPost + 1)), yield e._persistQueueAdvance(a.length), t = e._instance.getPersistedProperty(Et.LogsQueue) ?? [], r += a.length, s.kind === "fatal")) throw s.error;
			}
		})();
	}
	_persistQueueAdvance(e) {
		var t = this;
		return z(function* () {
			let n = Math.max(0, e - t._evictedSinceAdvance), r = t._instance.getPersistedProperty(Et.LogsQueue) ?? [];
			t._instance.setPersistedProperty(Et.LogsQueue, r.slice(n)), yield t._waitForStoragePersist();
		})();
	}
	_buildResourceAttributes() {
		return Ta(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion());
	}
	_enqueue(e) {
		if (this._instance.optedOut) return;
		let t = this._instance.getPersistedProperty(Et.LogsQueue) ?? [];
		this._maxQueueSize > t.length || (t.shift(), this._evictedSinceAdvance++, this._logger.info("Logs queue is full, dropping oldest record.")), t.push(e), this._instance.setPersistedProperty(Et.LogsQueue, t), this._maxBufferSize > t.length || this._retryAfter.isOpen() ? this._armFlushTimer() : this._flushInBackground();
	}
	_armFlushTimer() {
		this._flushTimer.pending || this._flushTimer.arm(Math.max(this._flushIntervalMs, this._retryAfter.remainingMs()));
	}
	_nextFlushDelay() {
		return Math.max(ka(this._flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs());
	}
	_hasQueuedRecords() {
		let e = this._instance.getPersistedProperty(Et.LogsQueue);
		return !!e && e.length > 0;
	}
	shutdown(e) {
		var t = this;
		return z(function* () {
			t._flushTimer.clear();
			let n = t.flush().catch(() => {});
			e === void 0 ? yield n : yield vr(n, e);
		})();
	}
	flushWithTimeout(e) {
		var t = this;
		return z(function* () {
			let n = t.flush();
			yield vr(n, e, () => {
				n.catch(() => {});
			});
		})();
	}
	_flushInBackground() {
		this.flush().then(() => {
			this._consecutiveFlushFailures = 0, this._flushJitter = 1;
		}, (e) => {
			this._consecutiveFlushFailures++, this._flushJitter = Oa(), this._logger.error("PostHog logs flush failed:", e);
		}).finally(() => {
			!this._instance.isDisabled && this._hasQueuedRecords() && this._flushTimer.armNoEarlierThan(this._nextFlushDelay());
		});
	}
}, ja = /^[0-9a-f]+$/;
function Ma(e, t, n) {
	return typeof e == "string" && e.length === t && e !== n && ja.test(e);
}
var Na = /^([0-9a-f]{2})-([0-9a-f]{32})-([0-9a-f]{16})-([0-9a-f]{2})(-.*)?$/, Pa = "00", Fa = [
	0,
	5,
	10,
	25,
	50,
	75,
	100,
	250,
	500,
	750,
	1e3,
	2500,
	5e3,
	7500,
	1e4
];
function Ia(e) {
	return String(e) + "000000";
}
function La(e, t, n, r) {
	let i = "";
	return r && (i = Object.keys(r).sort().map((e) => `${JSON.stringify(e)}:${JSON.stringify(r[e])}`).join(",")), `${e}\0${t}\0${n ?? ""}\0${i}`;
}
var Ra = class {
	constructor(e, t, n) {
		this._instance = e, this._config = t, this._logger = n, this._series = /* @__PURE__ */ new Map(), this._flushTimer = new Da(() => this.flush().catch((e) => {
			this._logger.error("Metrics flush failed:", e);
		})), this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = /* @__PURE__ */ new Map(), this._typeCollisionWarned = /* @__PURE__ */ new Set(), this._retryAfter = new dr(), this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._generation = 0;
	}
	count(e, t = 1, n) {
		this._capture({
			name: e,
			type: "count",
			value: t,
			unit: n?.unit,
			attributes: n?.attributes
		});
	}
	gauge(e, t, n) {
		this._capture({
			name: e,
			type: "gauge",
			value: t,
			unit: n?.unit,
			attributes: n?.attributes
		});
	}
	histogram(e, t, n) {
		this._capture({
			name: e,
			type: "histogram",
			value: t,
			unit: n?.unit,
			attributes: n?.attributes
		});
	}
	flush() {
		var e = this;
		let t = this._flushPromise, n = function() {
			var n = z(function* () {
				t && (yield t.catch(() => {})), yield e._doFlush();
			});
			return function() {
				return n.apply(this, arguments);
			};
		}()().finally(() => {
			this._flushPromise === n && (this._flushPromise = null);
		});
		return this._flushPromise = n, n;
	}
	drainWindow() {
		if (this._series.size === 0) return null;
		let e = this._series;
		return this._series = /* @__PURE__ */ new Map(), this._seriesCapWarned = !1, this._typeByName = /* @__PURE__ */ new Map(), this._typeCollisionWarned = /* @__PURE__ */ new Set(), this._buildPayload(e);
	}
	reset() {
		this._generation++, this._retryAfter.reset(), this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._flushTimer.clear(), this._series = /* @__PURE__ */ new Map(), this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = /* @__PURE__ */ new Map(), this._typeCollisionWarned = /* @__PURE__ */ new Set();
	}
	_capture(e) {
		if (this._instance.isDisabled || this._instance.optedOut) return;
		let t = this._runBeforeSend(e);
		if (t === null) return;
		if (!t.name || typeof t.name != "string") return void this._logger.warn("Dropping metric with empty name");
		if (typeof t.value != "number" || !Number.isFinite(t.value)) return void this._logger.warn(`Dropping metric '${t.name}': value must be a finite number`);
		if (t.type === "count" && 0 > t.value) return void this._logger.warn(`Dropping count '${t.name}': counters are monotonic, value must be >= 0`);
		let n, r;
		try {
			n = t.attributes ? B({}, t.attributes) : void 0, r = La(t.type, t.name, t.unit, n);
		} catch (e) {
			this._logger.warn(`Dropping metric '${t.name}': attributes could not be serialized`, e);
			return;
		}
		let i = this._series.get(r);
		if (!i) {
			if (!this._admitNewSeries()) return;
			i = {
				name: t.name,
				type: t.type,
				unit: t.unit,
				attributes: n,
				windowStartMs: Date.now()
			}, this._series.set(r, i);
		}
		let a = this._typeByName.get(t.name);
		a === void 0 ? this._typeByName.set(t.name, t.type) : a === t.type || this._typeCollisionWarned.has(t.name) || (this._typeCollisionWarned.add(t.name), this._logger.warn(`Metric name '${t.name}' is already used as a ${a}; recording it as a ${t.type} too will blend both series in charts. Use a distinct name.`)), this._fold(i, t.value);
		let o = this._activeTraceContext();
		o && (i.exemplar = B(B({}, o), {}, {
			value: t.value,
			timeMs: Date.now()
		})), this._armFlushTimer();
	}
	_activeTraceContext() {
		try {
			var e, t;
			let n = function(e) {
				let t = function(e) {
					if (typeof e != "string") return;
					let t = Na.exec(e.trim());
					if (!t) return;
					let [, n, r, i, a, o] = t;
					return n === "ff" || n === "00" && o || !function(e) {
						return Ma(e, 32, "00000000000000000000000000000000");
					}(r) || !function(e) {
						return Ma(e, 16, "0000000000000000");
					}(i) ? void 0 : {
						version: n,
						traceId: r,
						spanId: i,
						flags: a
					};
				}(e);
				return t && {
					traceId: t.traceId,
					spanId: t.spanId,
					flags: (n = t.flags, 1 & parseInt(n, 16) ? "01" : Pa)
				};
				var n;
			}((e = (t = this._instance).getActiveSpan) == null || (e = e.call(t)) == null ? void 0 : e.traceparent());
			if (n && n.flags === "01") return {
				traceId: n.traceId,
				spanId: n.spanId
			};
		} catch {}
	}
	_admitNewSeries() {
		return this._config.maxSeriesPerFlush > this._series.size || (this._seriesCapWarned || (this._seriesCapWarned = !0, this._logger.warn(`Metric series cap reached (${this._config.maxSeriesPerFlush} per flush window); dropping new series until the next flush. Reduce attribute cardinality.`)), !1);
	}
	_fold(e, t) {
		switch (e.type) {
			case "count":
				e.total = (e.total ?? 0) + t;
				break;
			case "gauge":
				e.last = t;
				break;
			case "histogram": {
				e.hist ||= {
					count: 0,
					sum: 0,
					min: t,
					max: t,
					bucketCounts: Array(Fa.length + 1).fill(0)
				};
				let n = e.hist;
				n.count += 1, n.sum += t, n.min = Math.min(n.min, t), n.max = Math.max(n.max, t), n.bucketCounts[function(e, t) {
					for (let n = 0; t.length > n; n++) if (t[n] >= e) return n;
					return t.length;
				}(t, Fa)] += 1;
				break;
			}
		}
	}
	_runBeforeSend(e) {
		let t = this._config.beforeSend;
		if (!t) return e;
		let n = j(t) ? t : [t], r = e;
		for (let e of n) try {
			let t = e(r);
			if (!t) return this._logger.info("Metric was rejected in beforeSend function"), null;
			r = t;
		} catch (e) {
			return this._logger.error("Error in beforeSend function for metric:", e), null;
		}
		return r;
	}
	_armFlushTimer() {
		this._flushTimer.pending || this._flushTimer.arm(this._nextFlushDelay());
	}
	_nextFlushDelay() {
		return Math.max(ka(this._config.flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs());
	}
	_doFlush() {
		var e = this;
		return z(function* () {
			if (e._flushTimer.clear(), e._series.size === 0) return;
			let t = e._series;
			e._series = /* @__PURE__ */ new Map(), e._seriesCapWarned = !1, e._typeByName = /* @__PURE__ */ new Map(), e._typeCollisionWarned = /* @__PURE__ */ new Set();
			let n = e._generation, r = yield e._instance._sendMetricsBatch(e._buildPayload(t));
			if (n === e._generation) switch (e._retryAfter.record(r), r.kind === "retry-later" ? (e._consecutiveFlushFailures++, e._flushJitter = Oa()) : (e._consecutiveFlushFailures = 0, e._flushJitter = 1), e._flushTimer.pending && e._flushTimer.arm(e._nextFlushDelay()), r.kind) {
				case "ok": return;
				case "retry-later":
					e._mergeWindowBack(t), e._flushTimer.armNoEarlierThan(e._nextFlushDelay());
					return;
				case "too-large":
					e._logger.warn("Metrics batch exceeded the server size limit and was dropped");
					return;
				case "fatal":
					e._logger.error("Failed to send metrics batch:", r.error);
					return;
			}
		})();
	}
	_buildPayload(e) {
		return t = this._buildMetrics(e), n = function(e, t, n) {
			return _a(e, t, n);
		}(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion()), r = this._instance.getLibraryId(), i = this._instance.getLibraryVersion(), { resourceMetrics: [{
			resource: { attributes: ya(n) },
			scopeMetrics: [{
				scope: {
					name: r,
					version: i
				},
				metrics: t
			}]
		}] };
		var t, n, r, i;
	}
	_buildMetrics(e) {
		let t = Ia(Date.now()), n = /* @__PURE__ */ new Map();
		for (let r of e.values()) {
			let e = La(r.type, r.name, r.unit, void 0), i = n.get(e);
			i || (i = B({ name: r.name }, r.unit && { unit: r.unit }), r.type === "count" ? i.sum = {
				aggregationTemporality: 1,
				isMonotonic: !0,
				dataPoints: []
			} : r.type === "gauge" ? i.gauge = { dataPoints: [] } : i.histogram = {
				aggregationTemporality: 1,
				dataPoints: []
			}, n.set(e, i));
			let a = pa(r.attributes ?? {}, this._logger), o = Ia(r.windowStartMs), s = za(r.exemplar);
			if (r.type === "count") {
				let e = B({
					attributes: a,
					startTimeUnixNano: o,
					timeUnixNano: t,
					asDouble: r.total ?? 0
				}, s);
				i.sum.dataPoints.push(e);
			} else if (r.type === "gauge") {
				let e = B({
					attributes: a,
					timeUnixNano: t,
					asDouble: r.last ?? 0
				}, s);
				i.gauge.dataPoints.push(e);
			} else if (r.hist) {
				let e = B({
					attributes: a,
					startTimeUnixNano: o,
					timeUnixNano: t,
					count: r.hist.count,
					sum: r.hist.sum,
					min: r.hist.min,
					max: r.hist.max,
					bucketCounts: r.hist.bucketCounts,
					explicitBounds: Fa
				}, s);
				i.histogram.dataPoints.push(e);
			}
		}
		return Array.from(n.values());
	}
	_mergeWindowBack(e) {
		for (let [t, n] of e) {
			let e = this._series.get(t);
			if (e) switch (e.windowStartMs = Math.min(e.windowStartMs, n.windowStartMs), e.exemplar = e.exemplar ?? n.exemplar, e.type) {
				case "count":
					e.total = (e.total ?? 0) + (n.total ?? 0);
					break;
				case "gauge": break;
				case "histogram": if (n.hist) {
					if (e.hist) {
						e.hist.count += n.hist.count, e.hist.sum += n.hist.sum, e.hist.min = Math.min(e.hist.min, n.hist.min), e.hist.max = Math.max(e.hist.max, n.hist.max);
						for (let t = 0; e.hist.bucketCounts.length > t; t++) e.hist.bucketCounts[t] += n.hist.bucketCounts[t];
					} else e.hist = n.hist;
				}
			}
			else this._admitNewSeries() && this._series.set(t, n);
		}
	}
};
function za(e) {
	return e ? { exemplars: [{
		filteredAttributes: [],
		timeUnixNano: Ia(e.timeMs),
		asDouble: e.value,
		traceId: e.traceId,
		spanId: e.spanId
	}] } : {};
}
var Ba = (e, { debugEnabled: t } = {}) => {
	let r = {
		_log(r, ...i) {
			let a;
			try {
				a = typeof window > "u" ? void 0 : window;
			} catch {
				return;
			}
			a && (n.DEBUG || a.POSTHOG_DEBUG || t) && !P(a.console) && a.console && ("__rrweb_original__" in a.console[r] ? a.console[r].__rrweb_original__ : a.console[r])(e, ...i);
		},
		debug(...e) {
			r._log("debug", ...e);
		},
		info(...e) {
			r._log("log", ...e);
		},
		warn(...e) {
			r._log("warn", ...e);
		},
		error(...e) {
			r._log("error", ...e);
		},
		critical(...t) {
			console.error(e, ...t);
		},
		uninitializedWarning(e) {
			r.error(`You must initialize PostHog before calling ${e}`);
		},
		createLogger: (t, n) => Ba(`${e} ${t}`, n)
	};
	return r;
}, V = Ba("[PostHog.js]"), H = V.createLogger;
function Va(e, t) {
	j(e) && e.forEach(t);
}
function U(e, t) {
	if (!L(e)) {
		if (j(e)) e.forEach(t);
		else if (((e) => e instanceof FormData)(e)) e.forEach((e, n) => t(e, n));
		else for (let n in e) Pt.call(e, n) && t(e[n], n);
	}
}
var W = function(e, ...t) {
	for (let n of t) for (let t in n) n[t] !== void 0 && (e[t] = n[t]);
	return e;
};
function Ha(e) {
	let t = Object.keys(e), n = t.length, r = Array(n);
	for (; n--;) r[n] = [t[n], e[t[n]]];
	return r;
}
var Ua = function(e) {
	return function(...t) {
		try {
			return e.apply(this, t);
		} catch (e) {
			V.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), V.critical(e);
		}
	};
}, Wa = function(e) {
	let t = {};
	return U(e, function(e, n) {
		(F(e) && e.length > 0 || R(e)) && (t[n] = e);
	}), t;
};
function Ga(e) {
	let t = B({}, e);
	for (let n of [
		"name",
		"message",
		"stack",
		"cause",
		"errors"
	]) try {
		n in e && (t[n] = e[n]);
	} catch {}
	return t;
}
var Ka = [
	"herokuapp.com",
	"vercel.app",
	"netlify.app"
];
function qa(e) {
	let t = e?.hostname;
	if (!F(t)) return !1;
	let n = t.split(".").slice(-2).join(".");
	for (let e of Ka) if (n === e) return !1;
	return !0;
}
function G(e, t, n, r) {
	let { capture: i = !1, passive: a = !0 } = r ?? {};
	e?.addEventListener(t, n, {
		capture: i,
		passive: a
	});
}
function Ja(e) {
	return e.name === "ph_toolbar_internal";
}
var Ya = (e) => {
	if (D) {
		try {
			let t = e + "=", n = D.cookie.split(";").filter((e) => e.length);
			for (let e = 0; n.length > e; e++) {
				let r = n[e];
				for (; r.charAt(0) == " ";) r = r.substring(1, r.length);
				if (r.indexOf(t) === 0) return decodeURIComponent(r.substring(t.length, r.length));
			}
		} catch {}
		return null;
	}
}, Xa = class e {
	constructor(e) {
		if (this.bytes = e, e.length !== 16) throw TypeError("not 128-bit length");
	}
	static fromFieldsV7(t, n, r, i) {
		if (!Number.isInteger(t) || !Number.isInteger(n) || !Number.isInteger(r) || !Number.isInteger(i) || 0 > t || 0 > n || 0 > r || 0 > i || t > 0xffffffffffff || n > 4095 || r > 1073741823 || i > 4294967295) throw RangeError("invalid field value");
		let a = /* @__PURE__ */ new Uint8Array(16);
		return a[0] = t / 2 ** 40, a[1] = t / 2 ** 32, a[2] = t / 2 ** 24, a[3] = t / 2 ** 16, a[4] = t / 256, a[5] = t, a[6] = 112 | n >>> 8, a[7] = n, a[8] = 128 | r >>> 24, a[9] = r >>> 16, a[10] = r >>> 8, a[11] = r, a[12] = i >>> 24, a[13] = i >>> 16, a[14] = i >>> 8, a[15] = i, new e(a);
	}
	toString() {
		let e = "";
		for (let t = 0; this.bytes.length > t; t++) e = e + (this.bytes[t] >>> 4).toString(16) + (15 & this.bytes[t]).toString(16), t !== 3 && t !== 5 && t !== 7 && t !== 9 || (e += "-");
		if (e.length !== 36) throw Error("Invalid UUIDv7 was generated");
		return e;
	}
	clone() {
		return new e(this.bytes.slice(0));
	}
	equals(e) {
		return this.compareTo(e) === 0;
	}
	compareTo(e) {
		for (let t = 0; 16 > t; t++) {
			let n = this.bytes[t] - e.bytes[t];
			if (n !== 0) return Math.sign(n);
		}
		return 0;
	}
}, Za = class {
	generate() {
		let e = this.generateOrAbort();
		if (!P(e)) return e;
		{
			this._timestamp = 0;
			let e = this.generateOrAbort();
			if (P(e)) throw Error("Could not generate UUID after timestamp reset");
			return e;
		}
	}
	generateOrAbort() {
		let e = (() => {
			let e = Date.now();
			return R(e) && isFinite(e) ? Math.min(Math.max(Math.floor(e), 0), 0xffffffffffff) : 0;
		})();
		if (e > this._timestamp) this._timestamp = e, this._resetCounter();
		else {
			if (this._timestamp >= e + 1e4) return;
			this._counter++, this._counter > 4398046511103 && (this._timestamp++, this._resetCounter());
		}
		return Xa.fromFieldsV7(this._timestamp, Math.trunc(this._counter / 2 ** 30), this._counter & 2 ** 30 - 1, this._random.nextUint32());
	}
	_resetCounter() {
		this._counter = 1024 * this._random.nextUint32() + (1023 & this._random.nextUint32());
	}
	constructor() {
		this._timestamp = 0, this._counter = 0, this._random = new eo();
	}
}, Qa = (e) => {
	if ("u" > typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw Error("no cryptographically strong RNG available");
	for (let t = 0; e.length > t; t++) e[t] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
	return e;
}, $a, eo = class {
	nextUint32() {
		return this._buffer.length > this._cursor || (($a ??= "u" > typeof window && !P(window.crypto) && crypto.getRandomValues ? (e) => {
			try {
				return crypto.getRandomValues(e);
			} catch {
				return Qa(e);
			}
		} : Qa)(this._buffer), this._cursor = 0), this._buffer[this._cursor++];
	}
	constructor() {
		this._buffer = /* @__PURE__ */ new Uint32Array(8), this._cursor = 1 / 0;
	}
}, to, no = () => ro().toString(), ro = () => (to ||= new Za()).generate(), io = "", ao = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i, oo = null, K = {
	_is_supported() {
		if (!I(oo)) return oo;
		if (oo = !1, D) try {
			let e = `__ph_cookie_support_${no()}`;
			K._set(e, "xyz"), oo = Ya(e) === "\"xyz\"", K._remove(e);
		} catch {
			oo = !1;
		}
		return oo;
	},
	_error(e) {
		V.error("cookieStore error: " + e);
	},
	_get: Ya,
	_parse(e) {
		let t;
		try {
			t = JSON.parse(K._get(e)) || {};
		} catch {}
		return t;
	},
	_set(e, t, n, r, i) {
		if (!D) return !1;
		try {
			let a = "", o = "", s = function(e, t) {
				if (t) {
					let t = function(e, t = D) {
						if (io) return io;
						if (!t || ["localhost", "127.0.0.1"].includes(e)) return "";
						let n = e.split("."), r = Math.min(n.length, 8), i = "dmn_chk_" + no();
						for (; !io && r--;) {
							let e = n.slice(r).join("."), a = i + "=1;domain=." + e + ";path=/";
							t.cookie = a + ";max-age=3", t.cookie.includes(i) && (t.cookie = a + ";max-age=0", io = e);
						}
						return io;
					}(e);
					if (!t) {
						let n = ((e) => {
							let t = e.match(ao);
							return t ? t[0] : "";
						})(e);
						n !== t && V.info("Warning: cookie subdomain discovery mismatch", n, t), t = n;
					}
					return t ? "; domain=." + t : "";
				}
				return "";
			}(D.location.hostname, r);
			if (n) {
				let e = /* @__PURE__ */ new Date();
				e.setTime(e.getTime() + 864e5 * n), a = "; expires=" + e.toUTCString();
			}
			i && (o = "; secure");
			let c = e + "=" + encodeURIComponent(JSON.stringify(t)) + a + "; SameSite=Lax; path=/" + s + o;
			return c.length > 3686.4 && V.warn("cookieStore warning: large cookie, len=" + c.length), D.cookie = c, !0;
		} catch {
			return !1;
		}
	},
	_remove(e, t) {
		if (D?.cookie && (!t || !I(Ya(e)))) try {
			K._set(e, "", -1, t);
		} catch {
			return;
		}
	}
}, so = null, q = {
	_is_supported() {
		if (!I(so)) return so;
		let e = !0;
		if (P(E)) e = !1;
		else try {
			let t = "__mplssupport__";
			q._set(t, "xyz"), q._get(t) !== "\"xyz\"" && (e = !1), q._remove(t);
		} catch {
			e = !1;
		}
		return e || V.error("localStorage unsupported; falling back to cookie store"), so = e, e;
	},
	_error(e) {
		V.error("localStorage error: " + e);
	},
	_get(e) {
		try {
			return E?.localStorage.getItem(e);
		} catch (e) {
			q._error(e);
		}
		return null;
	},
	_parse(e) {
		try {
			return JSON.parse(q._get(e)) || {};
		} catch {}
		return null;
	},
	_set(e, t) {
		try {
			return E?.localStorage.setItem(e, JSON.stringify(t)), !0;
		} catch (e) {
			q._error(e);
		}
		return !1;
	},
	_remove(e) {
		try {
			E?.localStorage.removeItem(e);
		} catch (e) {
			q._error(e);
		}
	}
}, co = [
	p,
	a,
	d,
	o,
	g,
	l,
	c,
	s,
	m
], lo = [
	re,
	T,
	Oe,
	ke,
	Ye,
	Je,
	ce,
	Ue
], uo = (e) => e + "_cpm", fo = [
	"__proto__",
	"constructor",
	"prototype"
], po = (e) => {
	if (!N(e)) return {};
	let t = {};
	return Object.keys(e).forEach((n) => {
		fo.indexOf(n) === -1 && (t[n] = e[n]);
	}), t;
}, mo = (e, t = []) => {
	let n = {};
	return [...lo, ...t].forEach((t) => {
		let r = e[t];
		P(r) || I(r) || r === "" || (n[t] = r);
	}), n;
}, ho = (e) => {
	let t = 5381, n = 2166136261;
	for (let r = 0; e.length > r; r++) {
		let i = e.charCodeAt(r);
		t = 33 * t ^ i, n = Math.imul(n ^ i, 16777619);
	}
	return e.length.toString(36) + "." + (t >>> 0).toString(36) + "." + (n >>> 0).toString(36);
}, go = (e, t) => ({
	p: t,
	f: ho(JSON.stringify(e))
}), _o = (e, t) => {
	if (!t) return {
		properties: [],
		isValid: !1
	};
	try {
		let n = K._parse(uo(e)), r = n?.f === ho(t) && j(n.p);
		return {
			properties: r ? n.p : [],
			isValid: r
		};
	} catch {
		return {
			properties: [],
			isValid: !1
		};
	}
}, vo = (e, t) => t + "|" + (K._get(uo(e)) || ""), yo = {}, bo = {
	_is_supported: () => !0,
	_error(e) {
		V.error("memoryStorage error: " + e);
	},
	_get: (e) => e in yo ? yo[e] : null,
	_parse: (e) => e in yo ? yo[e] : null,
	_set: (e, t) => (yo[e] = t, !0),
	_remove(e) {
		delete yo[e];
	}
}, xo = null, J = {
	_is_supported() {
		if (!I(xo)) return xo;
		if (xo = !0, P(E)) xo = !1;
		else try {
			let e = "__support__";
			J._set(e, "xyz"), J._get(e) !== "\"xyz\"" && (xo = !1), J._remove(e);
		} catch {
			xo = !1;
		}
		return xo;
	},
	_error(e) {
		V.error("sessionStorage error: ", e);
	},
	_get(e) {
		try {
			return E?.sessionStorage.getItem(e);
		} catch (e) {
			J._error(e);
		}
		return null;
	},
	_parse(e) {
		try {
			return JSON.parse(J._get(e)) || null;
		} catch {}
		return null;
	},
	_set(e, t) {
		try {
			return E?.sessionStorage.setItem(e, JSON.stringify(t)), !0;
		} catch (e) {
			J._error(e);
		}
		return !1;
	},
	_remove(e) {
		try {
			E?.sessionStorage.removeItem(e);
		} catch (e) {
			J._error(e);
		}
	}
}, So = class {
	constructor(e) {
		this._instance = e;
	}
	get _config() {
		return this._instance.config;
	}
	get consent() {
		return this._getDnt() ? 0 : this._storedConsent;
	}
	isOptedOut() {
		return this._config.cookieless_mode === "always" || this.isRejected() || this.consent === -1 && this._config.cookieless_mode === "on_reject";
	}
	isOptedIn() {
		return !this.isOptedOut();
	}
	isExplicitlyOptedOut() {
		return this.consent === 0;
	}
	isRejected() {
		return this.consent === 0 || this.consent === -1 && this._config.opt_out_capturing_by_default;
	}
	optInOut(e) {
		this._storage._set(this._storageKey, +!!e, this._config.cookie_expiration, this._config.cross_subdomain_cookie, this._config.secure_cookie);
	}
	reset() {
		this._storage._remove(this._storageKey, this._config.cross_subdomain_cookie);
	}
	get _storageKey() {
		let { token: e, opt_out_capturing_cookie_prefix: t, consent_persistence_name: n } = this._instance.config;
		return n || (t ? t + e : "__ph_opt_in_out_" + e);
	}
	get _storedConsent() {
		let e = this._storage._get(this._storageKey);
		return Jt(e) ? 1 : A(Yt, e) ? 0 : -1;
	}
	get _storage() {
		let e = this._config.opt_out_capturing_persistence_type, t = e === "localStorage" ? q : K, n = t._is_supported() ? t : bo;
		if (!this._persistentStore || this._persistentStore !== n) {
			this._persistentStore = n;
			let t = e === "localStorage" ? K : q;
			t._get(this._storageKey) && (this._persistentStore._get(this._storageKey) || this.optInOut(Jt(t._get(this._storageKey))), t._remove(this._storageKey, this._config.cross_subdomain_cookie));
		}
		return this._persistentStore;
	}
	_getDnt() {
		return !!this._config.respect_dnt && [
			yt?.doNotTrack,
			yt?.msDoNotTrack,
			k.doNotTrack,
			yt?.globalPrivacyControl
		].some((e) => Jt(e));
	}
};
function Co(e, t) {
	var n;
	let r = e == null || (n = e.config) == null ? void 0 : n.get_current_url;
	if (!M(r)) return t;
	try {
		let e = r(t);
		return F(e) && e ? e : t;
	} catch (e) {
		return V.error("Error in get_current_url, falling back to window.location.href", e), t;
	}
}
function wo(e) {
	return e instanceof Element && (e.id === "__POSTHOG_TOOLBAR__" || !!e.closest?.call(e, ".toolbar-global-fade-container"));
}
function To(e) {
	return !!e && e.nodeType === 1;
}
function Y(e, t) {
	return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase();
}
function Eo(e) {
	return !!e && e.nodeType === 3;
}
function Do(e) {
	return !!e && e.nodeType === 11 && To(e.host);
}
function Oo(e) {
	return e ? At(e).split(/\s+/) : [];
}
function ko(e, t) {
	let n = function(e) {
		var t;
		let n = typeof window > "u" ? void 0 : window, r = n == null || (t = n.location) == null ? void 0 : t.href;
		return P(r) ? void 0 : Co(e, r);
	}(t);
	return !!(n && e && e.some((e) => n.match(e)));
}
function Ao(e) {
	let t = "";
	switch (typeof e.className) {
		case "string":
			t = e.className;
			break;
		case "object":
			t = (e.className && "baseVal" in e.className ? e.className.baseVal : null) || e.getAttribute("class") || "";
			break;
		default: t = "";
	}
	return Oo(t);
}
function jo(e) {
	return L(e) ? null : At(e).split(/(\s+)/).filter((e) => ss(e)).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255);
}
function Mo(e) {
	let t = "";
	return Qo(e) && !$o(e) && e.childNodes && e.childNodes.length && U(e.childNodes, function(e) {
		Eo(e) && e.textContent && (t += jo(e.textContent) ?? "");
	}), At(t);
}
function No(e) {
	return P(e.target) ? e.srcElement || null : e.target?.shadowRoot ? e.composedPath()[0] || null : e.target || null;
}
var Po = [
	"a",
	"button",
	"form",
	"input",
	"select",
	"textarea",
	"label"
];
function Fo(e, t) {
	let n = e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector;
	try {
		return !!n && n.call(e, t);
	} catch {
		return !1;
	}
}
function Io(e, t) {
	if (P(t)) return !0;
	for (let n of e) if (t.some((e) => Fo(n, e))) return !0;
	return !1;
}
function Lo(e) {
	let t = e.parentNode;
	return !(!t || !To(t)) && t;
}
var Ro = [".ph-no-autocapture", "[data-ph-no-autocapture]"], zo = [
	"next",
	"previous",
	"prev",
	">",
	"<",
	"→",
	"←",
	"›",
	"‹",
	"»",
	"«",
	"▶",
	"◀",
	"❯",
	"❮"
], Bo = [
	...zo,
	"+",
	"-",
	"−",
	"–"
], Vo = Bo.length + 10, Ho = [
	"button",
	"a",
	"input",
	"select",
	"textarea",
	"label"
], Uo = [
	"button",
	"link",
	"tab",
	"menuitem",
	"option"
], Wo = (e, t) => /[a-z0-9]/i.test(t) ? A(Bo, t) ? RegExp(`\\b${t}\\b`).test(e) : e.includes(t) : e === t, Go = (e) => A(Ho, e.tagName.toLowerCase()) || A(Uo, (e.getAttribute("role") || "").toLowerCase());
function Ko(e) {
	let t = "", n = "", r = (e) => {
		To(e) && Qo(e) && !$o(e) && (t += ` ${Mo(e)}`, n = n || e.getAttribute("aria-label") || "", U(e.childNodes, r));
	};
	r(e), t = At(t.replace(/\s+/g, " "));
	let i = (ss(t) ? t : "").toLowerCase();
	return {
		safeText: i,
		ariaLabel: At(e.getAttribute("aria-label") || (i ? "" : n)).toLowerCase()
	};
}
var qo = [".ph-no-rageclick", ".ph-no-capture"], Jo = [
	"",
	"text",
	"search",
	"email",
	"password",
	"url",
	"tel",
	"number"
];
function Yo(e, t) {
	if (!(typeof window < "u" && window) || Xo(e)) return !1;
	let n, r, i;
	var a;
	if (zt(t) ? (n = !!t && qo, r = void 0, i = !1) : (n = t?.css_selector_ignorelist ?? qo, r = t?.content_ignorelist, i = (a = t?.ignore_text_selection) != null && a), !1 === n || i && function(e) {
		return !(!e || !To(e)) && (!!Y(e, "textarea") || (Y(e, "input") ? A(Jo, (e.getAttribute("type") || "").toLowerCase()) : function(e) {
			if (e.isContentEditable) return !0;
			let t = e.getAttribute?.call(e, "contenteditable");
			return t === "true" || t === "";
		}(e)));
	}(e)) return !1;
	let { targetElementList: o } = Zo(e, !1);
	return !(r && function(e, { safeText: t, ariaLabel: n }) {
		let r;
		if (!0 === e) r = zo;
		else {
			if (!j(e)) return !1;
			if (e.length > Vo) return V.error(`[PostHog] content_ignorelist array cannot exceed ${Vo} items. Use css_selector_ignorelist for more complex matching.`), !1;
			r = e.map((e) => e.toLowerCase());
		}
		return r.some((e) => Wo(t, e) || Wo(n, e));
	}(r, function(e, t) {
		for (let e of t) if (Go(e)) return Ko(e);
		for (let e of t) {
			try {
				if (window?.getComputedStyle(e).getPropertyValue("cursor") !== "pointer") break;
			} catch {
				break;
			}
			let t = Ko(e);
			if (t.safeText || t.ariaLabel) return t;
		}
		return Ko(e);
	}(e, o)) || Io(o, n));
}
var Xo = (e) => !e || Y(e, "html") || !To(e), Zo = (e, t) => {
	let n = typeof window > "u" ? void 0 : window;
	if (!n || Xo(e)) return {
		parentIsUsefulElement: !1,
		targetElementList: []
	};
	let r = !1, i = [e], a = e;
	for (; a.parentNode && !Y(a, "body");) {
		if (Do(a.parentNode)) {
			i.push(a.parentNode.host), a = a.parentNode.host;
			continue;
		}
		let e = Lo(a);
		if (!e) break;
		if (t || Po.indexOf(e.tagName.toLowerCase()) > -1) r = !0;
		else try {
			let t = n.getComputedStyle(e);
			t && t.getPropertyValue("cursor") === "pointer" && (r = !0);
		} catch {}
		i.push(e), a = e;
	}
	return {
		parentIsUsefulElement: r,
		targetElementList: i
	};
};
function Qo(e) {
	let t = /* @__PURE__ */ new Set(), n = 0;
	for (let r = e; r.parentNode && !Y(r, "body"); r = r.parentNode) {
		if (n++ >= 1e3 || t.has(r)) return !1;
		t.add(r);
		let e = Ao(r);
		if (A(e, "ph-sensitive") || A(e, "ph-no-capture")) return !1;
	}
	if (A(Ao(e), "ph-include")) return !0;
	let r = e.type || "";
	if (F(r)) switch (r.toLowerCase()) {
		case "hidden":
		case "password": return !1;
	}
	let i = e.name || e.id || "";
	return !F(i) || !/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(i.replace(/[^a-zA-Z0-9]/g, ""));
}
function $o(e) {
	return !!(Y(e, "input") && ![
		"button",
		"checkbox",
		"submit",
		"reset"
	].includes(e.type) || Y(e, "select") || Y(e, "textarea") || e.getAttribute("contenteditable") === "true");
}
var es = /* @__PURE__ */ RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$"), ts = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g, ns = [
	16,
	15,
	14,
	13
], rs = /* @__PURE__ */ RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$"), is = /* @__PURE__ */ RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g"), as = /[0-9A-Za-z_]/;
function os(e) {
	let t = 0, n = !1;
	for (let r = e.length - 1; r >= 0; r--) {
		let i = e.charCodeAt(r) - 48;
		n && (i *= 2, i > 9 && (i -= 9)), t += i, n = !n;
	}
	return t % 10 == 0;
}
function ss(e, t = !0) {
	return !(L(e) || F(e) && (e = At(e), (t ? es.test((e || "").replace(/[- ]/g, "")) : function(e) {
		let t;
		for (ts.lastIndex = 0; t = ts.exec(e);) {
			let e = t[2];
			if (!e) continue;
			let n = e.replace(/[- ]/g, "");
			for (let e = 0; n.length > e; e++) for (let t of ns) {
				let r = e + t;
				if (n.length >= r) {
					let t = n.slice(e, r);
					if (es.test(t) && os(t)) return !0;
				}
			}
		}
		return !1;
	}(e)) || (t ? rs.test(e) : function(e) {
		let t;
		for (is.lastIndex = 0; t = is.exec(e);) {
			let e = t[1], n = t[3];
			if (!(e && n && as.test(e) && as.test(n))) return !0;
		}
		return !1;
	}(e))));
}
function cs(e) {
	let t = Mo(e);
	return t = `${t} ${ls(e)}`.trim(), ss(t) ? t : "";
}
function ls(e) {
	let t = "";
	return e && e.childNodes && e.childNodes.length && U(e.childNodes, function(e) {
		if (e && e.tagName?.toLowerCase() === "span") try {
			let n = Mo(e);
			t = `${t} ${n}`.trim(), e.childNodes && e.childNodes.length && (t = `${t} ${ls(e)}`.trim());
		} catch (e) {
			V.error("[AutoCapture]", e);
		}
	}), t;
}
function us(e) {
	return e.replace(/"|\\"/g, "\\\"");
}
function ds(e) {
	let t = e.attr__class;
	if (t) return j(t) ? t : Oo(t);
}
var fs = H("[Dead Clicks]"), ps = () => !0, ms = (e) => {
	let t = !!e.instance.persistence?.get_property(_e), n = e.instance.config.capture_dead_clicks;
	return zt(n) ? n : !!N(n) || t;
}, hs = class {
	get lazyLoadedDeadClicksAutocapture() {
		return this._lazyLoadedDeadClicksAutocapture;
	}
	constructor(e, t, n) {
		this.instance = e, this.isEnabled = t, this.onCapture = n, this.startIfEnabledOrStop();
	}
	onRemoteConfig(e) {
		if (!e.ok) return;
		let t = e.config;
		"captureDeadClicks" in t && (this.instance.persistence && this.instance.persistence.register({ [_e]: t.captureDeadClicks }), this.startIfEnabledOrStop());
	}
	startIfEnabledOrStop() {
		this.isEnabled(this) ? this._loadScript(() => {
			this._start();
		}) : this.stop();
	}
	_loadScript(e) {
		var t, n;
		k.__PosthogExtensions__?.initDeadClicksAutocapture ? e() : (t = k.__PosthogExtensions__) == null || (n = t.loadExternalDependency) == null || n.call(t, this.instance, "dead-clicks-autocapture", (t) => {
			t ? fs.error("failed to load script", t) : e();
		});
	}
	_start() {
		if (D) {
			if (!this._lazyLoadedDeadClicksAutocapture && k.__PosthogExtensions__?.initDeadClicksAutocapture) {
				let e = N(this.instance.config.capture_dead_clicks) ? B({}, this.instance.config.capture_dead_clicks) : {};
				e.__onCapture = this.onCapture, this.onCapture && (e.capture_dead_swipes = !1), this._lazyLoadedDeadClicksAutocapture = k.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, e), this._lazyLoadedDeadClicksAutocapture.start(D), fs.info("starting...");
			}
		} else fs.error("`document` not found. Cannot start.");
	}
	stop() {
		this._lazyLoadedDeadClicksAutocapture && (this._lazyLoadedDeadClicksAutocapture.stop(), this._lazyLoadedDeadClicksAutocapture = void 0, fs.info("stopping..."));
	}
}, gs = H("[SegmentIntegration]");
function _s(e, t, n = !0) {
	let r = e.config.segment;
	if (!r) return t();
	let { analytics: i, filterProperties: a } = ((e) => M(e.register))(o = r) ? { analytics: o } : o;
	var o;
	(function(e, t, n, r) {
		let i = (t) => {
			let i = () => t.anonymousId() || no();
			e.config.get_device_id = i, r && t.id() && (e.register({
				distinct_id: t.id(),
				$device_id: i()
			}), e.persistence.set_property(Ue, dt)), n(r ? void 0 : t.anonymousId() || void 0);
		}, a = t.user();
		"then" in a && M(a.then) ? a.then(i) : i(a);
	})(e, i, (n) => {
		i.register(((e, t, { filterProperties: n } = {}) => {
			typeof Promise < "u" && Promise.resolve || gs.warn("This browser does not have Promise support, and can not use the segment integration");
			let r = (r, i) => {
				if (!i) return r;
				let a = !!t && r.event.anonymousId === t && !r.event.userId;
				a || r.event.userId || r.event.anonymousId === e.get_distinct_id() || (gs.info("No userId set, resetting PostHog"), e.reset()), a || (t = void 0), r.event.userId && r.event.userId !== e.get_distinct_id() && (gs.info("UserId set, identifying with PostHog"), e.identify(r.event.userId));
				let o = e.calculateEventProperties(i, r.event.properties);
				if (!L(n)) {
					let e = r.event.properties || {}, t = {};
					for (let n of Object.keys(o)) Pt.call(e, n) || (t[n] = o[n]);
					let i = ((e, t) => {
						let n = j(e) ? e : [e], r = B({}, t);
						for (let e of n) try {
							if (r = e(r), L(r)) return null;
						} catch (e) {
							return gs.error("Error in Segment filterProperties:", e), null;
						}
						return r;
					})(n, t);
					if (L(i)) return r;
					o = i;
				}
				return r.event.properties = Object.assign({}, o, r.event.properties), r;
			};
			return {
				name: "PostHog JS",
				type: "enrichment",
				version: "1.0.0",
				isLoaded() {
					return !0;
				},
				load() {
					return Promise.resolve();
				},
				track(e) {
					return r(e, e.event.event);
				},
				page(e) {
					return r(e, mt);
				},
				identify(e) {
					return r(e, gt);
				},
				screen(e) {
					return r(e, "$screen");
				}
			};
		})(e, n, { filterProperties: a })).then(() => {
			t();
		}, (e) => {
			gs.error("Failed to register the Segment integration", e), t();
		});
	}, n);
}
var vs = "posthog-js";
function ys(e, { organization: t, projectId: n, prefix: r, severityAllowList: i = ["error"], sendExceptionsToPostHog: a = !0 } = {}) {
	return (o) => {
		if (i !== "*" && !i.includes(o.level) || !e.__loaded) return o;
		o.tags ||= {};
		let s = e.requestRouter.endpointFor("ui", `/project/${e.config.token}/person/${e.get_distinct_id()}`);
		o.tags["PostHog Person URL"] = s, e.sessionRecordingStarted() && (o.tags["PostHog Recording URL"] = e.get_session_replay_url({ withTimestamp: !0 }));
		let c = o.exception?.values || [], l = c.map((e) => B(B({}, e), {}, { stacktrace: e.stacktrace ? B(B({}, e.stacktrace), {}, {
			type: "raw",
			frames: (e.stacktrace.frames || []).map((e) => B(B({}, e), {}, { platform: "web:javascript" }))
		}) : void 0 })), u = {
			$exception_message: c[0]?.value || o.message,
			$exception_type: c[0]?.type,
			$exception_level: o.level,
			$exception_list: l,
			$sentry_event_id: o.event_id,
			$sentry_exception: o.exception,
			$sentry_exception_message: c[0]?.value || o.message,
			$sentry_exception_type: c[0]?.type,
			$sentry_tags: o.tags
		};
		var d;
		return t && n && (u.$sentry_url = (r || "https://sentry.io/organizations/") + t + "/issues/?project=" + n + "&query=" + o.event_id), a && ((d = e.exceptions) == null || d.sendExceptionEvent(u)), o;
	};
}
var bs = class {
	constructor(e, t, n, r, i, a) {
		this.name = vs, this.setupOnce = function(o) {
			o(ys(e, {
				organization: t,
				projectId: n,
				prefix: r,
				severityAllowList: i,
				sendExceptionsToPostHog: a == null || a
			}));
		};
	}
}, xs = class {
	constructor(e) {
		this._onSessionIdChange = (e, t, n) => {
			n && (n.noSessionId || n.activityTimeout || n.sessionPastMaximumLength || n.crossTabAdoption) && (V.info("[PageViewManager] Session rotated, clearing pageview state", {
				sessionId: e,
				changeReason: n
			}), this._currentPageview = void 0, this._instance.scrollManager.resetContext());
		}, this._instance = e, this._setupSessionRotationHandler();
	}
	_setupSessionRotationHandler() {
		this._unsubscribeSessionId = this._instance.sessionManager?.onSessionId(this._onSessionIdChange);
	}
	destroy() {
		var e;
		(e = this._unsubscribeSessionId) == null || e.call(this), this._unsubscribeSessionId = void 0;
	}
	doPageView(e, t) {
		let n = this._previousPageViewProperties(e, t);
		return this._currentPageview = {
			pathname: E?.location.pathname ?? "",
			pageViewId: t,
			timestamp: e
		}, this._instance.scrollManager.resetContext(), n;
	}
	doPageLeave(e) {
		return this._previousPageViewProperties(e, this._currentPageview?.pageViewId);
	}
	doEvent() {
		return { $pageview_id: this._currentPageview?.pageViewId };
	}
	_previousPageViewProperties(e, t) {
		let n = this._currentPageview;
		if (!n) return { $pageview_id: t };
		let r = {
			$pageview_id: t,
			$prev_pageview_id: n.pageViewId
		}, i = this._instance.scrollManager.getContext();
		if (i && !this._instance.config.disable_scroll_properties) {
			let { maxScrollHeight: e, lastScrollY: t, maxScrollY: n, maxContentHeight: a, lastContentY: o, maxContentY: s } = i;
			if (!(P(e) || P(t) || P(n) || P(a) || P(o) || P(s))) {
				e = Math.ceil(e), t = Math.ceil(t), n = Math.ceil(n), a = Math.ceil(a), o = Math.ceil(o), s = Math.ceil(s);
				let i = e > 1 ? en(t / e, 0, 1, V) : 1, c = e > 1 ? en(n / e, 0, 1, V) : 1, l = a > 1 ? en(o / a, 0, 1, V) : 1, u = a > 1 ? en(s / a, 0, 1, V) : 1;
				r = W(r, {
					$prev_pageview_last_scroll: t,
					$prev_pageview_last_scroll_percentage: i,
					$prev_pageview_max_scroll: n,
					$prev_pageview_max_scroll_percentage: c,
					$prev_pageview_last_content: o,
					$prev_pageview_last_content_percentage: l,
					$prev_pageview_max_content: s,
					$prev_pageview_max_content_percentage: u
				});
			}
		}
		return n.pathname && (r.$prev_pageview_pathname = n.pathname), n.timestamp && (r.$prev_pageview_duration = (e.getTime() - n.timestamp.getTime()) / 1e3), r;
	}
}, Ss = ["flags", "surveys"], Cs = {
	[ne]: { exposure: "hidden" },
	[ae]: { exposure: "hidden" },
	[oe]: { exposure: "hidden" },
	[de]: { exposure: "hidden" },
	[ce]: { exposure: "hidden" },
	[ue]: { exposure: "hidden" },
	[b]: { exposure: "event" },
	[fe]: { exposure: "hidden" },
	[ye]: { exposure: "hidden" },
	[pe]: { exposure: "event" },
	[me]: { exposure: "hidden" },
	[he]: { exposure: "event" },
	[ge]: { exposure: "event" },
	[_e]: { exposure: "event" },
	[ve]: { exposure: "hidden" },
	[be]: { exposure: "event" },
	[xe]: { exposure: "hidden" },
	[Se]: { exposure: "hidden" },
	[Oe]: { exposure: "hidden" },
	[ke]: { exposure: "event" },
	[Ce]: {
		exposure: "event",
		shouldSkipFromEventProperties: (e) => I(e)
	},
	[Ae]: { exposure: "event" },
	[je]: { exposure: "event" },
	[Me]: { exposure: "event" },
	[Ne]: { exposure: "event" },
	[Pe]: { exposure: "hidden" },
	[d]: {
		exposure: "hidden",
		storageGroup: "flags"
	},
	[a]: {
		exposure: "hidden",
		storageGroup: "flags"
	},
	[i]: { exposure: "hidden" },
	[o]: {
		exposure: "hidden",
		storageGroup: "flags"
	},
	[g]: {
		exposure: "hidden",
		storageGroup: "flags"
	},
	[l]: {
		exposure: "hidden",
		storageGroup: "flags",
		volatile: !0
	},
	[u]: {
		exposure: "hidden",
		storageGroup: "flags"
	},
	[_]: { exposure: "hidden" },
	[v]: { exposure: "hidden" },
	[p]: { exposure: "hidden" },
	[f]: { exposure: "hidden" },
	[x]: {
		exposure: "hidden",
		storageGroup: "surveys"
	},
	[S]: {
		exposure: "hidden",
		storageGroup: "surveys",
		volatile: !0
	},
	[w]: { exposure: "event" },
	[ee]: { exposure: "hidden" },
	[te]: { exposure: "hidden" },
	[Ie]: { exposure: "hidden" },
	[Le]: { exposure: "hidden" },
	[Re]: { exposure: "hidden" },
	[ze]: { exposure: "event" },
	[Be]: { exposure: "event" },
	[Ve]: { exposure: "event" },
	[He]: { exposure: "event" },
	[m]: { exposure: "hidden" },
	[h]: { exposure: "hidden" },
	[Fe]: { exposure: "event" },
	[s]: { exposure: "hidden" },
	[c]: {
		exposure: "hidden",
		storageGroup: "flags",
		volatile: !0
	},
	[Ue]: { exposure: "hidden" },
	[We]: { exposure: "hidden" },
	[Ge]: { exposure: "hidden" },
	[Ke]: { exposure: "hidden" },
	[qe]: { exposure: "hidden" },
	[Je]: { exposure: "hidden" },
	[Ye]: { exposure: "hidden" },
	[we]: { exposure: "event" },
	[Te]: { exposure: "event" },
	[Ee]: { exposure: "event" },
	[De]: { exposure: "event" },
	[Qe]: { exposure: "event" },
	[$e]: { exposure: "event" },
	[et]: { exposure: "hidden" },
	[tt]: { exposure: "hidden" },
	[nt]: { exposure: "hidden" },
	[rt]: { exposure: "hidden" },
	[it]: { exposure: "hidden" },
	[at]: { exposure: "hidden" },
	[ot]: { exposure: "hidden" },
	[st]: { exposure: "hidden" },
	[ct]: { exposure: "hidden" },
	[lt]: { exposure: "event" }
}, ws = [
	["$posthog_sr_group_event_trigger_", { exposure: "hidden" }],
	["$posthog_sr_group_url_trigger_", { exposure: "hidden" }],
	["$posthog_sr_group_sampling_", { exposure: "hidden" }]
], X = (e) => {
	let t = Cs[e];
	if (t) return t;
	for (let [t, n] of ws) if (e.indexOf(t) === 0) return n;
};
function Ts() {
	try {
		return Intl.DateTimeFormat().resolvedOptions().timeZone;
	} catch {
		return;
	}
}
var Es = (e) => {
	let t = (typeof document > "u" ? void 0 : document)?.createElement("a");
	return P(t) ? null : (t.href = e, t);
}, Ds = () => {
	try {
		return "u" > typeof window && !1 !== window.navigator.onLine;
	} catch {
		return !1;
	}
}, Os = (e, t) => e >= t && Ds(), ks = (e, t, n, r) => {
	if (e === 0) {
		if (Ds()) {
			let e = t + 1;
			return e === n && r(), e;
		}
		return t;
	}
	return 0;
}, As = (e, t) => {
	try {
		let n;
		return JSON.stringify(e, (e, t) => Wt(t) ? (n ??= /* @__PURE__ */ new WeakMap(), n.has(t) || n.set(t, Ga(t)), n.get(t)) : typeof t == "bigint" ? t.toString() : t, t);
	} catch {
		return Mt(e);
	}
}, js = function(e, t) {
	let n = ((e.split("#")[0] || "").split(/\?(.*)/)[1] || "").replace(/^\?+/g, "").split("&"), r;
	for (let e = 0; n.length > e; e++) {
		let i = n[e].split(/=(.*)/);
		if (i[0] === t) {
			r = i;
			break;
		}
	}
	if (!j(r) || 2 > r.length) return "";
	{
		let e = r[1].replace(/\+/g, " ");
		try {
			e = decodeURIComponent(e);
		} catch {
			V.error("Skipping decoding for malformed query param: " + e);
		}
		return e;
	}
}, Ms = function(e, t, n) {
	if (!e || !t || !t.length) return e;
	let r = e.split(/#(.*)/), i = r[1], a = (r[0] || "").split(/\?(.*)/), o = a[1], s = a[0], c = (o || "").split("&"), l = [];
	for (let e = 0; c.length > e; e++) {
		let r = c[e].split("?"), i = 0;
		for (; r.length > i && !t.includes(r[i].split("=")[0]);) i++;
		l.push(r.length > i ? r.slice(0, i).concat(r[i].split("=")[0] + "=" + n).join("?") : c[e]);
	}
	let u = s;
	return o != null && (u += "?" + l.join("&")), i != null && (u += "#" + i), u;
}, Ns = function(e, t) {
	let n = e.match(RegExp(t + "=([^&]*)"));
	return n ? n[1] : null;
}, Ps = [
	"gclid",
	"gclsrc",
	"dclid",
	"gbraid",
	"wbraid",
	"fbclid",
	"msclkid",
	"twclid",
	"li_fat_id",
	"igshid",
	"ttclid",
	"rdt_cid",
	"epik",
	"qclid",
	"sccid",
	"oppref",
	"bfcid",
	"irclid",
	"_kx"
], Fs = [
	"utm_source",
	"utm_medium",
	"utm_campaign",
	"utm_content",
	"utm_term",
	"gad_source",
	"mc_cid",
	...Ps
], Is = "<masked>", Ls = ["li_fat_id"];
function Rs(e, t, n) {
	if (!D) return {};
	let r = t ? [...Ps, ...n || []] : [], i = zs(Ms(D.URL, r, Is), e);
	return W(function() {
		let e = {};
		return U(Ls, function(t) {
			let n = Ya(t);
			e[t] = n || null;
		}), e;
	}(), i);
}
function zs(e, t) {
	let n = Fs.concat(t || []), r = {};
	return U(n, function(t) {
		let n = js(e, t);
		r[t] = n || null;
	}), r;
}
function Bs(e) {
	let t = function(e) {
		return e ? e.search("https?://(.*)google.([^/?]*)") === 0 ? "google" : e.search("https?://(.*)bing.com") === 0 ? "bing" : e.search("https?://(.*)yahoo.com") === 0 ? "yahoo" : e.search("https?://(.*)duckduckgo.com") === 0 ? "duckduckgo" : null : null;
	}(e), n = t == "yahoo" ? "p" : "q", r = {};
	if (!I(t)) {
		r.$search_engine = t;
		let e = D ? js(D.referrer, n) : "";
		e.length && (r.ph_keyword = e);
	}
	return r;
}
function Vs() {
	return navigator.language || navigator.userLanguage;
}
function Hs() {
	let e = Vs();
	return typeof e == "string" ? e.split("-")[0] : void 0;
}
var Us = "$direct";
function Ws() {
	return D?.referrer || Us;
}
function Gs(e, t, n = !1) {
	let r = e ? [...Ps, ...t || []] : [], i = (n ? hr(O?.href) : O?.href)?.substring(0, 1e3);
	return {
		r: Ws().substring(0, 1e3),
		u: i ? Ms(i, r, Is) : void 0
	};
}
function Ks(e, t = !1) {
	let { r: n, u: r } = e, i = t ? hr(r) : r, a = {
		$referrer: n,
		$referring_domain: n == null ? void 0 : n == Us ? Us : Es(n)?.host
	};
	if (i) {
		a.$current_url = i;
		let e = Es(i);
		a.$host = e?.host, a.$pathname = e?.pathname, W(a, zs(i));
	}
	return n && W(a, Bs(n)), a;
}
function qs() {
	try {
		return (/* @__PURE__ */ new Date()).getTimezoneOffset();
	} catch {
		return;
	}
}
var Js = {
	flags: c,
	surveys: S
}, Ys = [
	"cookie",
	"localstorage",
	"localstorage+cookie",
	"sessionstorage",
	"memory"
], Xs = (e) => `${e}_cookie_identity_change_pending`, Zs = (e) => {
	let t = "", n = 0;
	for (let r of e) {
		let e = encodeURIComponent(JSON.stringify(r).slice(1, -1)).length;
		if (n + e > 1e3) break;
		t += r, n += e;
	}
	return t;
}, Z = "main", Qs = [
	d,
	a,
	o,
	g,
	l,
	c,
	u,
	p
], $s = (e) => Qs.indexOf(e) !== -1, ec = [ce, ue], tc = (e) => ec.indexOf(e) !== -1, nc = (e, t) => {
	try {
		return JSON.stringify(e) === JSON.stringify(t);
	} catch {
		return e === t;
	}
}, rc = (e) => {
	if (!e) return {};
	let t = JSON.parse(e);
	return N(t) ? t : {};
}, ic = (e, t) => {
	U(e, (n, r) => {
		let i = X(r);
		i && i.exposure !== "event" || {}.hasOwnProperty.call(t, r) || delete e[r];
	});
}, ac = class {
	constructor(e, t, n = !0, r = !e.cookieless_mode) {
		if (this._slotState = {}, this._splitStorageEligible = !1, this._storesIdentityInCookie = !1, this._splitStorage = !1, this._cookieIdentityChangePending = !1, this._cookieSyncSuppressed = !1, this._pendingCrossTabFeatureFlagChanges = /* @__PURE__ */ new Map(), this._storageMigrationInProgress = !1, this._localIdentityChangePending = !1, this._crossTabFeatureFlagIdentityMismatch = !1, this._metaIdentifierChangePending = /* @__PURE__ */ new Set(), this._crossTabFeatureFlagHandlers = /* @__PURE__ */ new Set(), this._config = e, this._ownsSplitStorage = n, this.props = {}, this._campaign_params_url = void 0, this._name = ((e) => {
			let t = "";
			return e.token && (t = e.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), e.persistence_name ? "ph_" + e.persistence_name : "ph_" + t + "_posthog";
		})(e), this._disabled = e.disable_persistence || !!t, this._storage = this._buildStorage(e), this._splitStorage = this._resolveSplitStorage(e), this.load(r), this._markLoadedCrossTabFeatureFlagChangesPending(), e.debug && V.info("Persistence loaded", e.persistence, B({}, this.props)), this.update_config(e, e, t), this.save(), E) {
			let e = () => this.flush();
			G(E, "beforeunload", e, { capture: !1 }), G(E, "pagehide", e, { capture: !1 }), this._onStorage = (e) => {
				if (this._splitStorageEligible && (!e.storageArea || e.storageArea === E?.localStorage) && e.key) {
					if (e.key !== this._name) {
						if (this._splitStorage) {
							let t = Ss.find((t) => e.key === this._groupEntryName(t));
							t && this._syncCrossTabFeatureFlagProperties(e.key, t);
						}
					} else this._syncCrossTabFeatureFlagProperties(e.key, Z);
				}
			}, G(E, "storage", this._onStorage);
		}
	}
	markCrossTabFeatureFlagChanges(e) {
		Object.entries(e).forEach(([e, t]) => {
			let n = this._pendingCrossTabFeatureFlagChanges.get(e);
			if (!$s(e) || !0 === n) return;
			if (!0 === t) return void this._setCrossTabFeatureFlagChangesPending(e, !0);
			let r = new Set(n || []);
			t.forEach((e) => r.add(e)), r.size && this._setCrossTabFeatureFlagChangesPending(e, r);
		});
	}
	onCrossTabFeatureFlagChange(e) {
		return this._crossTabFeatureFlagHandlers.add(e), () => this._crossTabFeatureFlagHandlers.delete(e);
	}
	destroy() {
		this._onStorage && E && (E.removeEventListener("storage", this._onStorage), this._onStorage = void 0), this._crossTabFeatureFlagHandlers.clear();
	}
	_syncCrossTabFeatureFlagProperties(e, t, n = !0) {
		if (this._disabled) return !1;
		let r, i;
		try {
			if (i = q._get(e), I(i)) {
				let e = this._slotWriteState(t);
				return e.storageValue = null, t !== Z && (e.persisted = !1), !1;
			}
			r = rc(i);
		} catch {
			return !1;
		}
		let a = t === Z ? r : q._parse(this._name);
		if (a && this._hasCrossTabFeatureFlagIdentityMismatch(a)) return !1;
		let o = this._mergeCrossTabFeatureFlagProperties(r, t, n);
		return t === Z && this._splitStorage && !nc(this._partitionProps().main, r) || this._rememberCrossTabStorageFingerprint(r, t, !0, i), o;
	}
	_hasCrossTabFeatureFlagIdentityMismatch(e) {
		let t = this.props[T], n = e[T];
		return !P(t) && !P(n) && t !== n;
	}
	_rememberCrossTabStorageFingerprint(e, t, n, r) {
		let i = this._slotWriteState(t);
		i.storageValue = r, t !== Z && (i.persisted = n);
		try {
			i.fingerprint = this._entryFingerprint(e, t);
		} catch {
			i.fingerprint = void 0;
		}
	}
	_mergeCrossTabFeatureFlagProperties(e, t, n) {
		let r = !1;
		return Qs.forEach((n) => {
			let i = X(n)?.storageGroup;
			if (t === Z && this._splitStorage && i || t !== Z && i !== t) return;
			let a = n in e, o = this._mergePendingCrossTabFeatureFlagChanges(n, a ? e[n] : void 0), s = this._pendingCrossTabFeatureFlagChanges.has(n) ? n in this.props : a;
			s === n in this.props && nc(o, this.props[n]) || (s ? this._setProp(n, o, !1) : this._deleteProp(n, !1), r = !0);
		}), r && n && this._crossTabFeatureFlagHandlers.forEach((e) => e()), r;
	}
	_reconcileCrossTabFeatureFlagPropertiesBeforeWrite() {
		if (!this._splitStorageEligible) return !1;
		try {
			this._crossTabFeatureFlagIdentityMismatch = !1;
			let e = q._get(this._name), t = this._slotWriteState(Z), n, r = !1, i = !1;
			if (e !== t.storageValue) {
				if (I(e)) t.storageValue = null;
				else {
					if (n = rc(e), this._crossTabFeatureFlagIdentityMismatch = !this._localIdentityChangePending && this._hasCrossTabFeatureFlagIdentityMismatch(n), this._crossTabFeatureFlagIdentityMismatch) return !1;
					i = this._mergeCrossTabFeatureFlagProperties(n, Z, !1), !this._splitStorage || nc(this._partitionProps().main, n) ? this._rememberCrossTabStorageFingerprint(n, Z, !0, e) : t.storageValue = e, r = !0;
				}
			}
			return this._splitStorage && Ss.forEach((e) => {
				let t = q._get(this._groupEntryName(e)), a = this._slotWriteState(e), o = n || {}, s = r && Qs.some((t) => X(t)?.storageGroup === e && t in o);
				if (t === a.storageValue && !s) return;
				if (I(t)) return a.storageValue = null, a.persisted = !1, void (s && (i = this._mergeCrossTabFeatureFlagProperties(o, e, !1) || i));
				let c = rc(t);
				i = this._mergeCrossTabFeatureFlagProperties(c, e, !1) || i, this._rememberCrossTabStorageFingerprint(c, e, !0, t);
			}), i;
		} catch {
			return !1;
		}
	}
	_setCrossTabFeatureFlagChangesPending(e, t) {
		this._pendingCrossTabFeatureFlagChanges.set(e, t);
		let n = X(e);
		n != null && n.volatile || (this._slotWriteState((this._splitStorage ? n?.storageGroup : void 0) || Z).fingerprint = void 0, this._markGroupDirty(e));
	}
	_markAllCrossTabFeatureFlagChangesPending() {
		Qs.forEach((e) => this._pendingCrossTabFeatureFlagChanges.set(e, !0));
	}
	_markLoadedCrossTabFeatureFlagChangesPending() {
		if (this._splitStorageEligible) try {
			let e = q._get(this._name), t = rc(e);
			this._slotWriteState(Z).storageValue = e, Qs.forEach((e) => {
				let n = this._splitStorage ? X(e)?.storageGroup : void 0, r = n ? q._get(this._groupEntryName(n)) : null;
				if (n) {
					let e = this._slotWriteState(n);
					e.storageValue = r, e.persisted = !I(r);
				}
				let i = n && !I(r) ? rc(r) : t;
				e in this.props ? this._markPendingCrossTabFeatureFlagChanges(e, i[e], this.props[e]) : e in i && this._setCrossTabFeatureFlagChangesPending(e, !0);
			});
		} catch {}
	}
	_mergePendingCrossTabFeatureFlagChanges(e, t) {
		let n = this._pendingCrossTabFeatureFlagChanges.get(e);
		if (!n) return t;
		if (!0 === n) return this.props[e];
		if (e === "$active_feature_flags") {
			let r = new Set(j(t) ? t : []), i = new Set(j(this.props[e]) ? this.props[e] : []);
			return n.forEach((e) => i.has(e) ? r.add(e) : r.delete(e)), Array.from(r);
		}
		let r = N(t) ? B({}, t) : {}, i = N(this.props[e]) ? this.props[e] : {};
		return n.forEach((e) => {
			e in i ? r[e] = i[e] : delete r[e];
		}), r;
	}
	_markPendingCrossTabFeatureFlagChanges(e, t, n) {
		if (!$s(e)) return;
		let r = this._pendingCrossTabFeatureFlagChanges.get(e);
		if (!0 === r) return;
		let i = t;
		if (this._splitStorageEligible) try {
			let t = this._splitStorage ? X(e)?.storageGroup : void 0, n = t ? this._groupEntryName(t) : this._name;
			i = rc(q._get(n))[e];
		} catch {}
		let a = new Set(r || []);
		if (e === "$active_feature_flags") {
			if (!P(t) && !j(t) || !P(i) && !j(i) || !j(n)) return void this._setCrossTabFeatureFlagChangesPending(e, !0);
			let r = new Set(t || []), o = new Set(i || []), s = new Set(n);
			(/* @__PURE__ */ new Set([...r, ...s])).forEach((e) => {
				r.has(e) !== s.has(e) && a.add(e);
			}), a.forEach((e) => {
				o.has(e) === s.has(e) && a.delete(e);
			});
		} else {
			if (!N(n)) return void (nc(i, n) ? this._pendingCrossTabFeatureFlagChanges.delete(e) : this._setCrossTabFeatureFlagChangesPending(e, !0));
			{
				if (!P(t) && !N(t) || P(t) && It(n) && P(i)) return void this._setCrossTabFeatureFlagChangesPending(e, !0);
				let r = N(t) ? t : {}, o = N(i) ? i : {};
				(/* @__PURE__ */ new Set([...Object.keys(r), ...Object.keys(n)])).forEach((e) => {
					e in r == e in n && nc(r[e], n[e]) || a.add(e);
				}), a.forEach((e) => {
					e in o == e in n && nc(o[e], n[e]) && a.delete(e);
				});
			}
		}
		a.size ? this._setCrossTabFeatureFlagChangesPending(e, a) : this._pendingCrossTabFeatureFlagChanges.delete(e);
	}
	_saveDebounceMs() {
		let e = this._config?.persistence_save_debounce_ms;
		return R(e) && e > 0 ? e : 0;
	}
	_rememberCurrentCookieProperties(e) {
		if (this._config.cookieWinsOnConflict && this._config.persistence.toLowerCase() === "localstorage+cookie") {
			if (e) try {
				let t = mo(e, this._config.cookie_persisted_properties || []), n = go(t, this._config.cookie_persisted_properties || []), r = JSON.stringify(t) + "|" + JSON.stringify(n), i = K._get(this._name) || void 0;
				i && vo(this._name, i) === r && (this._lastSeenCookiePropertiesFingerprint = r, this._lastSeenMainCookieValue = i);
			} catch {}
			else try {
				let e = K._get(this._name) || void 0;
				this._lastSeenCookiePropertiesFingerprint = e ? vo(this._name, e) : void 0, this._lastSeenMainCookieValue = e;
			} catch {}
		}
	}
	syncCookieProperties() {
		return this._syncCookieProperties(this._config);
	}
	_syncCookieProperties(e, t = !1) {
		if (this._disabled && !t || this._cookieSyncSuppressed || !e.cookieWinsOnConflict || e.persistence.toLowerCase() !== "localstorage+cookie") return !1;
		let n;
		try {
			n = K._get(this._name) || void 0;
		} catch {}
		if (!n || n === this._lastSeenMainCookieValue) return !1;
		let r = vo(this._name, n), i;
		try {
			i = po(JSON.parse(n));
		} catch {
			return !1;
		}
		if ((K._get(this._name) || void 0) !== n) return !1;
		this._lastSeenCookiePropertiesFingerprint = r, this._lastSeenMainCookieValue = n;
		let u = _o(this._name, n), h = [...lo, ...u.properties], _ = {};
		if (Object.keys(i).forEach((e) => {
			let t = i[e];
			(P(t) || I(t) || t === "" || e === "$user_state" && t !== "anonymous" && t !== "identified") && (_[e] = !0, delete i[e]);
		}), It(i)) return !1;
		let v = "distinct_id" in i || i.$user_state === "anonymous" || i.$user_state === "identified", y = this.props, b = y[T], x = y[Ue], S = W({}, y);
		[...lo, ...e.cookie_persisted_properties || []].forEach((e) => {
			if (h.indexOf(e) !== -1 && !(e in i) && !_[e] && (v || e !== "distinct_id" && e !== "$user_state")) {
				let t = S[e];
				(u.isValid || lo.indexOf(e) === -1 || !1 !== t && t !== 0) && delete S[e];
			}
		}), this.props = W(S, i), Qs.forEach((e) => {
			let t = e in this.props;
			e in y === t && nc(y[e], this.props[e]) || (t ? this._markPendingCrossTabFeatureFlagChanges(e, y[e], this.props[e]) : this._setCrossTabFeatureFlagChangesPending(e, !0));
		}), !v || "$user_state" in i || "$user_state" in this.props || this._setProp(Ue, ut);
		let C = this.props[T], w = this.props[Ue];
		return !v || C === b && w === x || (this._localIdentityChangePending = !0, this._cookieIdentityChangePending = !0, J._set(Xs(this._name), !0), this._deleteProp(p), this._deleteProp(a), this._deleteProp(d), this._deleteProp(o), this._deleteProp(g), this._deleteProp(l), this._deleteProp(c), this._deleteProp(s), this._deleteProp(m), w !== "anonymous" || x !== "identified" && i.$user_state !== "anonymous" && (P(b) || C === b) || (ic(this.props, i), this._deleteProp(f)), w === "identified" ? this.props.$user_id = C : delete this.props.$user_id, this._deleteProp(ae)), !0;
	}
	consumeCookieIdentityChange() {
		let e = Xs(this._name), t = this._cookieIdentityChangePending || !!J._get(e);
		return this._cookieIdentityChangePending = !1, t && J._remove(e), t;
	}
	_beginCookieSyncSuppression(e = !1) {
		return !(this._cookieSyncSuppressed || this._disabled && !e || !this._config.cookieWinsOnConflict || this._config.persistence.toLowerCase() !== "localstorage+cookie" || (this._cookieSyncSuppressed = !0, 0));
	}
	_publishSuppressedCookieSnapshot() {
		this._cookieSyncSuppressed && (P(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), delete this._slotState[Z], this._writeNow(!0));
	}
	_endCookieSyncSuppression(e = !0) {
		if (this._cookieSyncSuppressed) try {
			e ? this._publishSuppressedCookieSnapshot() : P(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0);
		} finally {
			this._cookieSyncSuppressed = !1;
		}
	}
	isDisabled() {
		return !!this._disabled;
	}
	_buildStorage(e) {
		Ys.indexOf(e.persistence.toLowerCase()) === -1 && (V.critical("Unknown persistence type " + e.persistence + "; falling back to localStorage+cookie"), e.persistence = "localStorage+cookie");
		let t = ((e = [], t = !1, n = () => !1) => {
			let r = [...lo, ...e];
			return B(B({}, q), {}, {
				_rawText(e) {
					return [
						K._get(e),
						K._get(uo(e)),
						q._get(e)
					].join("\0");
				},
				_parse(e) {
					try {
						let i, a = {};
						try {
							i = K._get(e) || void 0, a = i ? po(JSON.parse(i)) : {};
						} catch {}
						let o = JSON.parse(q._get(e) || "{}"), s;
						if (t) {
							let t = _o(e, i), n = [...lo, ...t.properties], c = {};
							Object.keys(a).forEach((e) => {
								let t = a[e];
								I(t) || t === "" || e === "$user_state" && t !== "anonymous" && t !== "identified" || (c[e] = t);
							});
							let l = "distinct_id" in c || c.$user_state === "anonymous" || c.$user_state === "identified";
							if (Object.keys(c).length > 0) {
								let e = o[T], i = o.$user_state ?? ut;
								r.forEach((e) => {
									if (n.indexOf(e) !== -1 && !(e in a) && (l || e !== "distinct_id" && e !== "$user_state")) {
										let n = o[e];
										(t.isValid || lo.indexOf(e) === -1 || !1 !== n && n !== 0) && delete o[e];
									}
								}), !l || "$user_state" in a || "$user_state" in o || (o[Ue] = ut), !l || ("distinct_id" in c ? c[T] : o[T]) === e && ("$user_state" in c ? c[Ue] : o[Ue]) === i || (co.forEach((e) => delete o[e]), c.$user_state === "identified" && "distinct_id" in c ? o.$user_id = c[T] : delete o.$user_id, c.$user_state !== "identified" && (delete o[Fe], delete o[f]), delete o.__alias);
							}
							s = W(o, c);
						} else s = W(a, o);
						return n() || q._set(e, s), s;
					} catch {}
					return null;
				},
				_set(n, r, i, a, o, s) {
					let c = q._set(n, r, void 0, void 0, s);
					try {
						let l = mo(r, e);
						if (Object.keys(l).length) {
							if (t) {
								let t = uo(n), u = go(l, e);
								if (K._set(t, u, i, a, o, s), K._get(t) !== JSON.stringify(u)) {
									K._remove(t, a);
									let e = mo(r);
									return K._set(n, e, i, a, o, s), c;
								}
							}
							K._set(n, l, i, a, o, s);
						}
					} catch (e) {
						q._error(e);
					}
					return c;
				},
				_remove(e, t) {
					try {
						E?.localStorage.removeItem(e), K._remove(e, t), K._remove(uo(e), t);
					} catch (e) {
						q._error(e);
					}
				}
			});
		})(e.cookie_persisted_properties || [], e.cookieWinsOnConflict, () => !!this._disabled), n, r = !1, i = !1, a = e.persistence.toLowerCase();
		return a === "localstorage" && q._is_supported() ? (n = q, i = !0) : a === "localstorage+cookie" && t._is_supported() ? (n = t, i = !0, r = !0) : a === "sessionstorage" && J._is_supported() ? n = J : a === "memory" ? n = bo : a === "cookie" && K._is_supported() ? (n = K, r = !0) : t._is_supported() ? (n = t, i = !0, r = !0) : K._is_supported() ? (n = K, r = !0) : n = bo, this._splitStorageEligible = i, this._storesIdentityInCookie = r, n;
	}
	_groupEntryName(e) {
		return `${this._name}__${e}`;
	}
	_resolveSplitStorage(e) {
		return this._splitStorageEligible && !!e.split_storage;
	}
	properties() {
		let e = {};
		return U(this.props, (t, n) => {
			let r = X(n);
			if (!r || r.exposure === "event") {
				var i;
				if (r != null && (i = r.shouldSkipFromEventProperties) != null && i.call(r, t)) return;
				e[n] = t;
			}
		}), e;
	}
	load(e = !1) {
		if (this._disabled && !e) return;
		let t = this._config.cookieWinsOnConflict && this._config.persistence.toLowerCase() === "localstorage+cookie", n = t ? q._parse(this._name) : null, r = {};
		if (t) try {
			r = po(K._parse(this._name)), U(r, (e, t) => {
				(P(e) || I(e) || e === "") && delete r[t];
			});
		} catch {}
		let i = this._storage._parse(this._name);
		if (i && (this.props = W({}, i)), this._splitStorage && this._loadGroupEntries(), t && i) {
			let e = n?.[T], t = n?.$user_state ?? ut, a = i[T], o = i.$user_state ?? ut;
			if (a !== e || o !== t) {
				this._cookieIdentityChangePending = !0, this._disabled || J._set(Xs(this._name), !0);
				let n = W({}, this.props);
				co.forEach((e) => delete n[e]), o !== "anonymous" || t !== "identified" && r.$user_state !== "anonymous" && (P(e) || a === e) || (ic(n, r), delete n[f]), this.props = n;
				let i = /* @__PURE__ */ new Set();
				co.forEach((e) => {
					let t = X(e)?.storageGroup;
					t && i.add(t);
				}), i.forEach((e) => {
					if (this._disabled) return;
					let t = {};
					U(this.props, (n, r) => {
						X(r)?.storageGroup === e && (t[r] = n);
					}), It(t) ? (q._remove(this._groupEntryName(e)), this._slotState[e] = {}) : q._set(this._groupEntryName(e), t) && (this._slotState[e] = {
						persisted: !0,
						fingerprint: this._entryFingerprint(t, e)
					});
				});
			}
		}
		J._get(Xs(this._name)) && (this._cookieIdentityChangePending = !0);
	}
	_loadGroupEntries() {
		for (let e of Ss) {
			let t = q._parse(this._groupEntryName(e));
			if (t && !It(t)) {
				let n = this._slotWriteState(e);
				n.persisted = !0, this._mainCarriesGroupKey(e) || (n.fingerprint = this._entryFingerprint(t, e)), this._groupEntryIsStale(e, t) || W(this.props, t);
			}
		}
	}
	_mainCarriesGroupKey(e) {
		return Object.keys(this.props).some((t) => X(t)?.storageGroup === e);
	}
	_groupEntryIsStale(e, t) {
		let n = Js[e];
		if (!n) return !1;
		let r = t[n], i = this.props[n];
		return R(r) && R(i) && i > r;
	}
	refreshKey(e) {
		this._refreshKeys([e]);
	}
	_refreshKeys(e) {
		if (this._disabled) return;
		let t, n = !1, r = () => (n ||= (t = this._storage._parse(this._name), !0), t);
		e.forEach((e) => {
			if (this._metaIdentifierChangePending.has(e)) return;
			let t = this._splitStorage ? X(e)?.storageGroup : void 0, n = t ? q._parse(this._groupEntryName(t)) : r();
			if (n && e in n) this._setProp(e, n[e], !1);
			else {
				if (t) {
					let t = r();
					if (t && e in t) return void this._setProp(e, t[e], !1);
				}
				this._deleteProp(e, !1);
			}
		});
	}
	refreshMetaIdentifiers() {
		if (this._disabled) return;
		let e = this._storageSnapshot();
		(P(e) || e !== this._metaIdentifierStorageSnapshot) && (this._refreshKeys(ec), this._rememberMetaIdentifierStorageSnapshot(e));
	}
	_rememberMetaIdentifierStorageSnapshot(e = this._storageSnapshot()) {
		this._metaIdentifierStorageSnapshot = this._metaIdentifierChangePending.size === 0 ? e : void 0;
	}
	_storageSnapshot() {
		let e = this._storage._rawText ? this._storage._rawText(this._name) : this._storage._get(this._name);
		return F(e) ? e : void 0;
	}
	save() {
		if (this._disabled) return;
		let e = this._saveDebounceMs();
		e > 0 ? P(this._pendingSaveTimer) && (this._pendingSaveTimer = setTimeout(() => {
			this._pendingSaveTimer = void 0, this._writeNow();
		}, e)) : this._writeNow();
	}
	flush() {
		P(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0, this._writeNow());
	}
	_writeNow(e = !1) {
		if (this._disabled || this._cookieSyncSuppressed && !e) return;
		e || (this.syncCookieProperties(), this._config.cookieWinsOnConflict && this._config.persistence.toLowerCase() === "localstorage+cookie" || this.refreshMetaIdentifiers());
		let t = !e && !this._storageMigrationInProgress;
		t || (this._crossTabFeatureFlagIdentityMismatch = !1);
		let n = !!t && this._reconcileCrossTabFeatureFlagPropertiesBeforeWrite();
		if (this._crossTabFeatureFlagIdentityMismatch) return void (this._config.debug && V.warn("skipping persistence write because storage belongs to a different distinct ID"));
		if (this._splitStorage) return this._writeNowSplit(), void (n && this._crossTabFeatureFlagHandlers.forEach((e) => e()));
		let r = this._writeEntry(this._storage, this._name, this.props, Z);
		r === "written" && this._rememberCurrentCookieProperties(this.props), r !== "failed" && (this._pendingCrossTabFeatureFlagChanges.clear(), this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear()), r === "written" && this._rememberMetaIdentifierStorageSnapshot(), n && this._crossTabFeatureFlagHandlers.forEach((e) => e());
	}
	_writeNowSplit() {
		let { main: e, groups: t } = this._partitionProps(), n = this._writeEntry(this._storage, this._name, e, Z);
		n === "written" && this._rememberCurrentCookieProperties(e), n !== "failed" && (this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear(), Qs.forEach((e) => {
			var t;
			(t = X(e)) != null && t.storageGroup || this._pendingCrossTabFeatureFlagChanges.delete(e);
		})), n === "written" && this._rememberMetaIdentifierStorageSnapshot();
		for (let e of Ss) {
			let n = t[e];
			if (It(n) && !this._slotState[e]?.persisted) {
				Qs.forEach((t) => {
					X(t)?.storageGroup === e && this._pendingCrossTabFeatureFlagChanges.delete(t);
				});
				continue;
			}
			let r = this._writeEntry(q, this._groupEntryName(e), n, e);
			r !== "failed" && Qs.forEach((t) => {
				let n = X(t);
				n?.storageGroup !== e || r !== "written" && n.volatile || this._pendingCrossTabFeatureFlagChanges.delete(t);
			});
		}
	}
	_partitionProps() {
		let e = {}, t = {
			flags: {},
			surveys: {}
		};
		return U(this.props, (n, r) => {
			let i = X(r)?.storageGroup;
			i ? t[i][r] = n : e[r] = n;
		}), {
			main: e,
			groups: t
		};
	}
	_entryFingerprint(e, t) {
		if (t === Z) return JSON.stringify(e) + "|" + this._expire_days + "|" + this._cross_subdomain + "|" + this._secure;
		let n = {};
		return U(e, (e, t) => {
			n[t] = X(t)?.volatile ? "__volatile__" : e;
		}), JSON.stringify(n);
	}
	_writeEntry(e, t, n, r) {
		let i = this._slotWriteState(r);
		if (r !== Z && !i.dirty && !P(i.fingerprint)) return "skipped";
		let a;
		try {
			if (a = this._entryFingerprint(n, r), a === i.fingerprint) return i.dirty = !1, "skipped";
		} catch {
			a = void 0;
		}
		return e._set(t, n, this._expire_days, this._cross_subdomain, this._secure, this._config.debug) ? (i.dirty = !1, r !== Z && (i.persisted = !0), P(a) || (i.fingerprint = a), this._splitStorageEligible && (i.storageValue = q._get(t)), "written") : (this._config.debug && V.warn(`failed to persist storage entry "${t}"; will retry on next save`), "failed");
	}
	remove({ keepGroupEntries: e = !1 } = {}) {
		if (this._markAllCrossTabFeatureFlagChangesPending(), P(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), this._storage._remove(this._name, !1), this._storage._remove(this._name, !0), !e && this._ownsSplitStorage) for (let e of Ss) q._remove(this._groupEntryName(e));
		e ? delete this._slotState[Z] : this._slotState = {}, this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0;
	}
	clear() {
		this.remove(), this.props = {};
	}
	register_once(e, t, n) {
		if (N(e)) {
			this.syncCookieProperties(), P(t) && (t = "None"), this._expire_days = P(n) ? this._default_expiry : n;
			let r = !1;
			if (U(e, (e, n) => {
				this.props.hasOwnProperty(n) && this.props[n] !== t || (this._setProp(n, e), r = !0);
			}), r) return this.save(), !0;
		}
		return !1;
	}
	register(e, t) {
		if (N(e)) {
			this.syncCookieProperties(), this._expire_days = P(t) ? this._default_expiry : t;
			let n = !1;
			if (U(e, (t, r) => {
				e.hasOwnProperty(r) && (this.props[r] !== t || N(t) || j(t)) && (this._setProp(r, t), n = !0);
			}), n) return this.save(), !0;
		}
		return !1;
	}
	unregister(e) {
		this.syncCookieProperties();
		let t = typeof e == "string" ? [e] : e, n = !1;
		for (let e of t) e in this.props && (this._deleteProp(e), n = !0);
		n && this.save();
	}
	update_campaign_params() {
		let e = D?.URL;
		if (e === this._campaign_params_url) return;
		let t = Rs(this._config.custom_campaign_params, this._config.mask_personal_data_properties, this._config.custom_personal_data_properties), n = !It(Wa(t));
		return n && this.register(t), this._campaign_params_url = e, n ? t : void 0;
	}
	update_search_keyword() {
		this.register(function() {
			let e = D?.referrer;
			return e ? Bs(e) : {};
		}());
	}
	update_referrer_info() {
		this.register_once({
			$referrer: Ws(),
			$referring_domain: D?.referrer && Es(D.referrer)?.host || Us
		}, void 0);
	}
	set_initial_person_info() {
		if (this.props.$initial_campaign_params || this.props.$initial_referrer_info) return;
		let e = Gs(this._config.mask_personal_data_properties, this._config.custom_personal_data_properties, this._config.disable_capture_url_hashes);
		this.register_once({ [Je]: this._storesIdentityInCookie ? {
			r: Zs(e.r),
			u: e.u ? Zs(e.u) : void 0
		} : e }, void 0);
	}
	get_initial_props() {
		let e = {};
		U([qe, Ke], (t) => {
			let n = this.props[t];
			n && U(n, function(t, n) {
				e["$initial_" + jt(n)] = t;
			});
		});
		let t = this.props[Je];
		return t && W(e, function(e, t = !1) {
			let n = Ks(e, t), r = {};
			return U(n, function(e, t) {
				r[`$initial_${jt(t)}`] = e;
			}), r;
		}(t, this._config.disable_capture_url_hashes)), e;
	}
	safe_merge(e) {
		return U(this.props, function(t, n) {
			n in e || (e[n] = t);
		}), e;
	}
	update_config(e, t, n) {
		let r = e.persistence !== t.persistence, i = !((e, t) => {
			if (e.length !== t.length) return !1;
			let n = [...e].sort(), r = [...t].sort();
			return n.every((e, t) => e === r[t]);
		})(e.cookie_persisted_properties || [], t.cookie_persisted_properties || []), a = r || i, o = e.cookieWinsOnConflict !== t.cookieWinsOnConflict, s = e.disable_persistence || !!n, c = !!this._disabled && !s;
		s || this._syncCookieProperties(t, c), this._config = e, !s && (r || i || o) && (this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0, this._syncCookieProperties(B(B({}, e), {}, { cookie_persisted_properties: t.cookie_persisted_properties }), c));
		let l = a || o ? this._buildStorage(e) : this._storage;
		this._truncateExistingPersonInfoForCookie();
		let u = this._resolveSplitStorage(e), d = a || u !== this._splitStorage, f = !s && (d || e.cross_subdomain_cookie !== this._cross_subdomain || e.secure_cookie !== this._secure) && this._beginCookieSyncSuppression(c);
		this._storageMigrationInProgress = d;
		try {
			if (this._default_expiry = this._expire_days = e.cookie_expiration, this.set_disabled(s), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie), d) {
				let e = this.props;
				this.clear(), this._storage = l, this._splitStorage = u, this.props = e, this.save();
			} else o && (this._storage = l, s || (delete this._slotState[Z], this._writeNow()));
		} finally {
			this._storageMigrationInProgress = !1, f && this._endCookieSyncSuppression();
		}
	}
	_truncateExistingPersonInfoForCookie() {
		let e = this.props[Je];
		if (!this._storesIdentityInCookie || !N(e) || typeof e.r != "string") return;
		let t = Zs(e.r), n = typeof e.u == "string" ? Zs(e.u) : e.u;
		t === e.r && n === e.u || this._setProp(Je, B(B({}, e), {}, {
			r: t,
			u: n
		}));
	}
	set_disabled(e) {
		this._disabled = e, this._disabled ? this.remove() : this.save();
	}
	set_cross_subdomain(e) {
		e !== this._cross_subdomain && (this._cross_subdomain = e, this.remove({ keepGroupEntries: !0 }), this.save());
	}
	set_secure(e) {
		e !== this._secure && (this._secure = e, this.remove({ keepGroupEntries: !0 }), this.save());
	}
	set_event_timer(e, t) {
		let n = this.props.__timers || {};
		n[e] = t, this._setProp(de, n), this.save();
	}
	remove_event_timer(e) {
		let t = this.props.__timers || {}, n = t[e];
		return P(n) || (delete t[e], this._setProp(de, t), this.save()), n;
	}
	get_property(e) {
		return this.props[e];
	}
	set_property(e, t) {
		this._setProp(e, t), this.save();
	}
	_setProp(e, t, n = !0) {
		var r;
		let i = this.props[e];
		this.props[e] = t, n && (e !== "distinct_id" && e !== "$user_state" || i === t || (this._localIdentityChangePending = !0), tc(e) && !nc(i, t) && this._metaIdentifierChangePending.add(e), this._markPendingCrossTabFeatureFlagChanges(e, i, t), (r = X(e)) != null && r.volatile || this._markGroupDirty(e));
	}
	_deleteProp(e, t = !0) {
		delete this.props[e], t && ($s(e) && this._setCrossTabFeatureFlagChangesPending(e, !0), tc(e) && this._metaIdentifierChangePending.add(e), this._markGroupDirty(e));
	}
	_markGroupDirty(e) {
		let t = X(e)?.storageGroup;
		t && (this._slotWriteState(t).dirty = !0);
	}
	_slotWriteState(e) {
		return this._slotState[e] || (this._slotState[e] = {});
	}
}, oc = {
	GZipJS: "gzip-js",
	Base64: "base64"
}, sc = {
	Activation: "events",
	Cancellation: "cancelEvents"
}, cc = {
	Popover: "popover",
	API: "api",
	Widget: "widget",
	ExternalSurvey: "external_survey"
}, lc = {
	SHOWN: "survey shown",
	DISMISSED: "survey dismissed",
	SENT: "survey sent",
	ABANDONED: "survey abandoned"
}, uc = {
	SURVEY_ID: "$survey_id",
	SURVEY_NAME: "$survey_name",
	SURVEY_RESPONSE: "$survey_response",
	SURVEY_ITERATION: "$survey_iteration",
	SURVEY_ITERATION_START_DATE: "$survey_iteration_start_date",
	SURVEY_PARTIALLY_COMPLETED: "$survey_partially_completed",
	SURVEY_SUBMISSION_ID: "$survey_submission_id",
	SURVEY_QUESTIONS: "$survey_questions",
	SURVEY_COMPLETED: "$survey_completed",
	PRODUCT_TOUR_ID: "$product_tour_id",
	SURVEY_LAST_SEEN_DATE: "$survey_last_seen_date",
	SURVEY_LANGUAGE: "$survey_language"
}, dc = {
	Popover: "popover",
	Inline: "inline"
};
function fc(e) {
	let t = !0;
	return { dispose() {
		if (t) {
			t = !1;
			let n = e();
			n && M(n.then) && n.then(void 0, () => {});
		}
	} };
}
var pc = {
	SHOWN: "product tour shown",
	DISMISSED: "product tour dismissed",
	COMPLETED: "product tour completed",
	STEP_SHOWN: "product tour step shown",
	STEP_COMPLETED: "product tour step completed",
	BUTTON_CLICKED: "product tour button clicked",
	STEP_SELECTOR_FAILED: "product tour step selector failed",
	BANNER_CONTAINER_SELECTOR_FAILED: "product tour banner container selector failed",
	BANNER_ACTION_CLICKED: "product tour banner action clicked"
}, mc = {
	TOUR_ID: "$product_tour_id",
	TOUR_NAME: "$product_tour_name",
	TOUR_ITERATION: "$product_tour_iteration",
	TOUR_RENDER_REASON: "$product_tour_render_reason",
	TOUR_STEP_ID: "$product_tour_step_id",
	TOUR_STEP_ORDER: "$product_tour_step_order",
	TOUR_STEP_TYPE: "$product_tour_step_type",
	TOUR_DISMISS_REASON: "$product_tour_dismiss_reason",
	TOUR_BUTTON_TEXT: "$product_tour_button_text",
	TOUR_BUTTON_ACTION: "$product_tour_button_action",
	TOUR_BUTTON_LINK: "$product_tour_button_link",
	TOUR_BUTTON_TOUR_ID: "$product_tour_button_tour_id",
	TOUR_STEPS_COUNT: "$product_tour_steps_count",
	TOUR_STEP_SELECTOR: "$product_tour_step_selector",
	TOUR_STEP_SELECTOR_FOUND: "$product_tour_step_selector_found",
	TOUR_STEP_ELEMENT_TAG: "$product_tour_step_element_tag",
	TOUR_STEP_ELEMENT_ID: "$product_tour_step_element_id",
	TOUR_STEP_ELEMENT_CLASSES: "$product_tour_step_element_classes",
	TOUR_STEP_ELEMENT_TEXT: "$product_tour_step_element_text",
	TOUR_ERROR: "$product_tour_error",
	TOUR_MATCHES_COUNT: "$product_tour_matches_count",
	TOUR_FAILURE_PHASE: "$product_tour_failure_phase",
	TOUR_WAITED_FOR_ELEMENT: "$product_tour_waited_for_element",
	TOUR_WAIT_DURATION_MS: "$product_tour_wait_duration_ms",
	TOUR_BANNER_SELECTOR: "$product_tour_banner_selector",
	TOUR_LINKED_SURVEY_ID: "$product_tour_linked_survey_id",
	USE_MANUAL_SELECTOR: "$use_manual_selector",
	INFERENCE_DATA_PRESENT: "$inference_data_present",
	TOUR_LAST_SEEN_DATE: "$product_tour_last_seen_date",
	TOUR_TYPE: "$product_tour_type"
}, hc = H("[RateLimiter]"), gc = class {
	constructor(e) {
		this.serverLimits = {}, this.lastEventRateLimited = !1, this.checkForLimiting = (e) => {
			let t = e.text;
			if (t && t.length) try {
				(JSON.parse(t).quota_limited || []).forEach((e) => {
					hc.info(`${e || "events"} is quota limited.`), this.serverLimits[e] = (/* @__PURE__ */ new Date()).getTime() + 6e4;
				});
			} catch (e) {
				hc.warn(`could not rate limit - continuing. Error: "${e?.message}"`, { text: t });
				return;
			}
		}, this.instance = e, this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited;
	}
	get captureEventsPerSecond() {
		return this.instance.config.rate_limiting?.events_per_second || 10;
	}
	get captureEventsBurstLimit() {
		return Math.max(this.instance.config.rate_limiting?.events_burst_limit || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond);
	}
	clientRateLimitContext(e = !1) {
		var t;
		let { captureEventsBurstLimit: n, captureEventsPerSecond: r } = this, i = (/* @__PURE__ */ new Date()).getTime(), a = this.instance.persistence?.get_property("$capture_rate_limit") ?? {
			tokens: n,
			last: i
		};
		a.tokens += Math.max(0, i - a.last) / 1e3 * r, a.last = Math.max(a.last, i), a.tokens > n && (a.tokens = n);
		let o = 1 > a.tokens;
		if (o || e || (a.tokens = Math.max(0, a.tokens - 1)), o && !e) {
			let e = (R(a.dropped) ? a.dropped : 0) + 1;
			a.dropped = e, !this.lastEventRateLimited && this._captureWarning(e) && (a.dropped = 0);
		}
		return this.lastEventRateLimited = o, (t = this.instance.persistence) == null || t.set_property("$capture_rate_limit", a), {
			isRateLimited: o,
			remainingTokens: a.tokens
		};
	}
	_isPropertyAllowed(e) {
		let t = this.instance.config.property_denylist;
		return !j(t) || !t.includes(e);
	}
	_triggeringPage() {
		if (this._isPropertyAllowed("$current_url") && this._isPropertyAllowed("$pathname") && O?.pathname) return `${O.origin ?? ""}${O.pathname}`;
	}
	_captureWarning(e) {
		var t;
		let { captureEventsBurstLimit: n, captureEventsPerSecond: r } = this, i = this._triggeringPage(), a = this._isPropertyAllowed("$session_id") ? (t = this.instance).get_session_id?.call(t) : void 0, o = [
			`${e} event(s) dropped since the last warning`,
			i ? `triggered on ${i}` : void 0,
			a ? `session ${a}` : void 0
		].filter(Boolean).join(", ");
		return !!this.instance.capture("$$client_ingestion_warning", { $$client_ingestion_warning_message: `posthog-js client rate limited: ${o}. Config is set to ${r} events per second and ${n} events burst limit.` }, { skip_client_rate_limiting: !0 });
	}
	isServerRateLimited(e) {
		let t = this.serverLimits[e || "events"] || !1;
		return !1 !== t && (/* @__PURE__ */ new Date()).getTime() < t;
	}
}, _c = H("[RemoteConfig]"), vc = class {
	constructor(e) {
		this._instance = e;
	}
	get remoteConfig() {
		var e;
		return (e = k._POSTHOG_REMOTE_CONFIG) == null || (e = e[this._instance.config.token]) == null ? void 0 : e.config;
	}
	_loadRemoteConfigJs(e) {
		var t, n;
		k.__PosthogExtensions__?.loadExternalDependency ? (t = k.__PosthogExtensions__) == null || (n = t.loadExternalDependency) == null || n.call(t, this._instance, "remote-config", () => e(this.remoteConfig)) : e();
	}
	_loadRemoteConfigJSON(e) {
		this._instance._send_request({
			method: "GET",
			url: this._instance.requestRouter.endpointFor("assets", `/array/${this._instance.config.token}/config`),
			callback: e
		});
	}
	load() {
		try {
			if (this.remoteConfig) return _c.info("Using preloaded remote config", this.remoteConfig), void this._onRemoteConfig(this.remoteConfig);
			if (this._instance._shouldDisableFlags()) return void _c.warn("Remote config is disabled. Falling back to local config.");
			this._loadRemoteConfigJs((e) => {
				if (!e) return _c.info("No config found after loading remote JS config. Falling back to JSON."), void this._loadRemoteConfigJSON((e) => {
					this._onRemoteConfig(e.json, e);
				});
				this._onRemoteConfig(e);
			});
		} catch (e) {
			_c.error("Error loading remote config", e), this._onRemoteConfig();
		}
	}
	_onRemoteConfig(e, t) {
		!e && t && (t.statusCode === 0 ? t.error || _c.warn("Failed to fetch remote config from PostHog.") : _c.error("Failed to fetch remote config from PostHog."));
		try {
			this._instance._onRemoteConfig(e ? {
				ok: !0,
				config: e
			} : { ok: !1 });
		} catch (e) {
			_c.error("Error applying remote config", e);
		}
		if (!1 !== e?.hasFeatureFlags && !this._instance.config.advanced_disable_feature_flags_on_first_load) try {
			var n;
			(n = this._instance.featureFlags) == null || n.ensureFlagsLoaded();
		} catch (e) {
			_c.error("Error loading feature flags", e);
		}
	}
}, yc = Uint8Array, bc = Uint16Array, xc = Uint32Array, Sc = new yc([
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	2,
	2,
	2,
	2,
	3,
	3,
	3,
	3,
	4,
	4,
	4,
	4,
	5,
	5,
	5,
	5,
	0,
	0,
	0,
	0
]), Cc = new yc([
	0,
	0,
	0,
	0,
	1,
	1,
	2,
	2,
	3,
	3,
	4,
	4,
	5,
	5,
	6,
	6,
	7,
	7,
	8,
	8,
	9,
	9,
	10,
	10,
	11,
	11,
	12,
	12,
	13,
	13,
	0,
	0
]), wc = new yc([
	16,
	17,
	18,
	0,
	8,
	7,
	9,
	6,
	10,
	5,
	11,
	4,
	12,
	3,
	13,
	2,
	14,
	1,
	15
]), Tc = function(e, t) {
	for (var n = new bc(31), r = 0; 31 > r; ++r) n[r] = t += 1 << e[r - 1];
	var i = new xc(n[30]);
	for (r = 1; 30 > r; ++r) for (var a = n[r]; n[r + 1] > a; ++a) i[a] = a - n[r] << 5 | r;
	return [n, i];
}, Ec = Tc(Sc, 2), Dc = Ec[1];
Ec[0][28] = 258, Dc[258] = 28;
for (var Oc = Tc(Cc, 0)[1], kc = new bc(32768), Q = 0; 32768 > Q; ++Q) {
	var Ac = (43690 & Q) >>> 1 | (21845 & Q) << 1;
	kc[Q] = ((65280 & (Ac = (61680 & (Ac = (52428 & Ac) >>> 2 | (13107 & Ac) << 2)) >>> 4 | (3855 & Ac) << 4)) >>> 8 | (255 & Ac) << 8) >>> 1;
}
var jc = function(e, t, n) {
	for (var r = e.length, i = 0, a = new bc(t); r > i; ++i) ++a[e[i] - 1];
	var o, s = new bc(t);
	for (i = 0; t > i; ++i) s[i] = s[i - 1] + a[i - 1] << 1;
	if (n) {
		o = new bc(1 << t);
		var c = 15 - t;
		for (i = 0; r > i; ++i) if (e[i]) for (var l = i << 4 | e[i], u = t - e[i], d = s[e[i] - 1]++ << u, f = d | (1 << u) - 1; f >= d; ++d) o[kc[d] >>> c] = l;
	} else for (o = new bc(r), i = 0; r > i; ++i) o[i] = kc[s[e[i] - 1]++] >>> 15 - e[i];
	return o;
}, Mc = new yc(288);
for (Q = 0; 144 > Q; ++Q) Mc[Q] = 8;
for (Q = 144; 256 > Q; ++Q) Mc[Q] = 9;
for (Q = 256; 280 > Q; ++Q) Mc[Q] = 7;
for (Q = 280; 288 > Q; ++Q) Mc[Q] = 8;
var Nc = new yc(32);
for (Q = 0; 32 > Q; ++Q) Nc[Q] = 5;
var Pc = jc(Mc, 9, 0), Fc = jc(Nc, 5, 0), Ic = function(e) {
	return (e / 8 | 0) + (7 & e && 1);
}, Lc = function(e, t, n) {
	(t == null || 0 > t) && (t = 0), (n == null || n > e.length) && (n = e.length);
	var r = new (e instanceof bc ? bc : e instanceof xc ? xc : yc)(n - t);
	return r.set(e.subarray(t, n)), r;
}, Rc = function(e, t, n) {
	var r = t / 8 | 0;
	e[r] |= n <<= 7 & t, e[r + 1] |= n >>> 8;
}, zc = function(e, t, n) {
	var r = t / 8 | 0;
	e[r] |= n <<= 7 & t, e[r + 1] |= n >>> 8, e[r + 2] |= n >>> 16;
}, Bc = function(e, t) {
	for (var n = [], r = 0; e.length > r; ++r) e[r] && n.push({
		s: r,
		f: e[r]
	});
	var i = n.length, a = n.slice();
	if (!i) return [new yc(0), 0];
	if (i == 1) {
		var o = new yc(n[0].s + 1);
		return o[n[0].s] = 1, [o, 1];
	}
	n.sort(function(e, t) {
		return e.f - t.f;
	}), n.push({
		s: -1,
		f: 25001
	});
	var s = n[0], c = n[1], l = 0, u = 1, d = 2;
	for (n[0] = {
		s: -1,
		f: s.f + c.f,
		l: s,
		r: c
	}; u != i - 1;) s = n[n[d].f > n[l].f ? l++ : d++], c = n[l != u && n[d].f > n[l].f ? l++ : d++], n[u++] = {
		s: -1,
		f: s.f + c.f,
		l: s,
		r: c
	};
	var f = a[0].s;
	for (r = 1; i > r; ++r) a[r].s > f && (f = a[r].s);
	var p = new bc(f + 1), m = Vc(n[u - 1], p, 0);
	if (m > t) {
		r = 0;
		var h = 0, g = m - t, _ = 1 << g;
		for (a.sort(function(e, t) {
			return p[t.s] - p[e.s] || e.f - t.f;
		}); i > r; ++r) {
			var v = a[r].s;
			if (t >= p[v]) break;
			h += _ - (1 << m - p[v]), p[v] = t;
		}
		for (h >>>= g; h > 0;) {
			var y = a[r].s;
			t > p[y] ? h -= 1 << t - p[y]++ - 1 : ++r;
		}
		for (; r >= 0 && h; --r) {
			var b = a[r].s;
			p[b] == t && (--p[b], ++h);
		}
		m = t;
	}
	return [new yc(p), m];
}, Vc = function(e, t, n) {
	return e.s == -1 ? Math.max(Vc(e.l, t, n + 1), Vc(e.r, t, n + 1)) : t[e.s] = n;
}, Hc = function(e) {
	for (var t = e.length; t && !e[--t];);
	for (var n = new bc(++t), r = 0, i = e[0], a = 1, o = function(e) {
		n[r++] = e;
	}, s = 1; t >= s; ++s) if (e[s] == i && s != t) ++a;
	else {
		if (!i && a > 2) {
			for (; a > 138; a -= 138) o(32754);
			a > 2 && (o(a > 10 ? a - 11 << 5 | 28690 : a - 3 << 5 | 12305), a = 0);
		} else if (a > 3) {
			for (o(i), --a; a > 6; a -= 6) o(8304);
			a > 2 && (o(a - 3 << 5 | 8208), a = 0);
		}
		for (; a--;) o(i);
		a = 1, i = e[s];
	}
	return [n.subarray(0, r), t];
}, Uc = function(e, t) {
	for (var n = 0, r = 0; t.length > r; ++r) n += e[r] * t[r];
	return n;
}, Wc = function(e, t, n) {
	var r = n.length, i = Ic(t + 2);
	e[i] = 255 & r, e[i + 1] = r >>> 8, e[i + 2] = 255 ^ e[i], e[i + 3] = 255 ^ e[i + 1];
	for (var a = 0; r > a; ++a) e[i + a + 4] = n[a];
	return 8 * (i + 4 + r);
}, Gc = function(e, t, n, r, i, a, o, s, c, l, u) {
	Rc(t, u++, n), ++i[256];
	for (var d = Bc(i, 15), f = d[0], p = d[1], m = Bc(a, 15), h = m[0], g = m[1], _ = Hc(f), v = _[0], y = _[1], b = Hc(h), x = b[0], S = b[1], C = new bc(19), w = 0; v.length > w; ++w) C[31 & v[w]]++;
	for (w = 0; x.length > w; ++w) C[31 & x[w]]++;
	for (var ee = Bc(C, 7), te = ee[0], ne = ee[1], T = 19; T > 4 && !te[wc[T - 1]]; --T);
	var re, ie, ae, oe, se = l + 5 << 3, ce = Uc(i, Mc) + Uc(a, Nc) + o, le = Uc(i, f) + Uc(a, h) + o + 14 + 3 * T + Uc(C, te) + (2 * C[16] + 3 * C[17] + 7 * C[18]);
	if (ce >= se && le >= se) return Wc(t, u, e.subarray(c, c + l));
	if (Rc(t, u, 1 + (ce > le)), u += 2, ce > le) {
		re = jc(f, p, 0), ie = f, ae = jc(h, g, 0), oe = h;
		var ue = jc(te, ne, 0);
		for (Rc(t, u, y - 257), Rc(t, u + 5, S - 1), Rc(t, u + 10, T - 4), u += 14, w = 0; T > w; ++w) Rc(t, u + 3 * w, te[wc[w]]);
		u += 3 * T;
		for (var de = [v, x], fe = 0; 2 > fe; ++fe) {
			var pe = de[fe];
			for (w = 0; pe.length > w; ++w) Rc(t, u, ue[me = 31 & pe[w]]), u += te[me], me > 15 && (Rc(t, u, pe[w] >>> 5 & 127), u += pe[w] >>> 12);
		}
	} else re = Pc, ie = Mc, ae = Fc, oe = Nc;
	for (w = 0; s > w; ++w) if (r[w] > 255) {
		var me;
		zc(t, u, re[257 + (me = r[w] >>> 18 & 31)]), u += ie[me + 257], me > 7 && (Rc(t, u, r[w] >>> 23 & 31), u += Sc[me]);
		var he = 31 & r[w];
		zc(t, u, ae[he]), u += oe[he], he > 3 && (zc(t, u, r[w] >>> 5 & 8191), u += Cc[he]);
	} else zc(t, u, re[r[w]]), u += ie[r[w]];
	return zc(t, u, re[256]), u + ie[256];
}, Kc = new xc([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]), qc = new yc(0), Jc = function() {
	for (var e = new xc(256), t = 0; 256 > t; ++t) {
		for (var n = t, r = 9; --r;) n = (1 & n && 3988292384) ^ n >>> 1;
		e[t] = n;
	}
	return e;
}(), Yc = function(e, t, n) {
	for (; n; ++t) e[t] = n, n >>>= 8;
};
function Xc(e, t) {
	t === void 0 && (t = {});
	var n = function() {
		var e = 4294967295;
		return {
			p(t) {
				for (var n = e, r = 0; t.length > r; ++r) n = Jc[255 & n ^ t[r]] ^ n >>> 8;
				e = n;
			},
			d() {
				return 4294967295 ^ e;
			}
		};
	}(), r = e.length;
	n.p(e);
	var i, a, o, s, c, l, u = (s = 10 + ((i = t).filename && i.filename.length + 1 || 0), c = 8, function(e, t, n, r, i, a) {
		var o = e.length, s = new yc(r + o + 5 * (1 + Math.floor(o / 7e3)) + i), c = s.subarray(r, s.length - i), l = 0;
		if (!t || 8 > o) for (var u = 0; o >= u; u += 65535) {
			var d = u + 65535;
			o > d ? l = Wc(c, l, e.subarray(u, d)) : (c[u] = a, l = Wc(c, l, e.subarray(u, o)));
		}
		else {
			for (var f = Kc[t - 1], p = f >>> 13, m = 8191 & f, h = (1 << n) - 1, g = new bc(32768), _ = new bc(h + 1), v = Math.ceil(n / 3), y = 2 * v, b = function(t) {
				return (e[t] ^ e[t + 1] << v ^ e[t + 2] << y) & h;
			}, x = new xc(25e3), S = new bc(288), C = new bc(32), w = 0, ee = 0, te = (u = 0, 0), ne = 0, T = 0; o > u; ++u) {
				var re = b(u), ie = 32767 & u, ae = _[re];
				if (g[ie] = ae, _[re] = ie, u >= ne) {
					var oe = o - u;
					if ((w > 7e3 || te > 24576) && oe > 423) {
						l = Gc(e, c, 0, x, S, C, ee, te, T, u - T, l), te = w = ee = 0, T = u;
						for (var se = 0; 286 > se; ++se) S[se] = 0;
						for (se = 0; 30 > se; ++se) C[se] = 0;
					}
					var ce = 2, le = 0, ue = m, de = ie - ae & 32767;
					if (oe > 2 && re == b(u - de)) for (var fe = Math.min(p, oe) - 1, pe = Math.min(32767, u), me = Math.min(258, oe); pe >= de && --ue && ie != ae;) {
						if (e[u + ce] == e[u + ce - de]) {
							for (var he = 0; me > he && e[u + he] == e[u + he - de]; ++he);
							if (he > ce) {
								if (ce = he, le = de, he > fe) break;
								var ge = Math.min(de, he - 2), _e = 0;
								for (se = 0; ge > se; ++se) {
									var ve = u - de + se + 32768 & 32767, ye = ve - g[ve] + 32768 & 32767;
									ye > _e && (_e = ye, ae = ve);
								}
							}
						}
						de += (ie = ae) - (ae = g[ie]) + 32768 & 32767;
					}
					if (le) {
						x[te++] = 268435456 | Dc[ce] << 18 | Oc[le];
						var be = 31 & Dc[ce], xe = 31 & Oc[le];
						ee += Sc[be] + Cc[xe], ++S[257 + be], ++C[xe], ne = u + ce, ++w;
					} else x[te++] = e[u], ++S[e[u]];
				}
			}
			l = Gc(e, c, a, x, S, C, ee, te, T, u - T, l), a || (l = Wc(c, l, qc));
		}
		return Lc(s, 0, r + Ic(l) + i);
	}(a = e, (o = t).level == null ? 6 : o.level, o.mem == null ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(a.length)))) : 12 + o.mem, s, c, !l)), d = u.length;
	return function(e, t) {
		var n = t.filename;
		if (e[0] = 31, e[1] = 139, e[2] = 8, e[8] = 2 > t.level ? 4 : t.level == 9 ? 2 : 0, e[9] = 3, t.mtime != 0 && Yc(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), n) {
			e[3] = 8;
			for (var r = 0; n.length >= r; ++r) e[r + 10] = n.charCodeAt(r);
		}
	}(u, t), Yc(u, d - 8, n.d()), Yc(u, d - 4, r), u;
}
var Zc = !!xt || !!bt, Qc = /* @__PURE__ */ new WeakMap(), $c = "text/plain", el = 0, tl = !1, nl = (e, t) => {
	let [n, r] = e.split("#"), [i, a] = n.split("?");
	if (!a) return e;
	let o = a.split("&").filter((e) => e.split("=")[0] !== t).join("&");
	return `${i}${o ? `?${o}` : ""}${r ? `#${r}` : ""}`;
}, rl = (e, t, n = !0) => {
	let [r, i] = e.split("?"), a = B({}, t), o = i?.split("&").map((e) => {
		var t;
		let [r, i] = e.split("="), o = n && (t = a[r]) != null ? t : i;
		return delete a[r], `${r}=${o}`;
	}) ?? [], s = function(e, t = "&") {
		let n, r, i = [];
		return U(e, function(e, t) {
			P(e) || P(t) || t === "undefined" || (n = encodeURIComponent(((e) => e instanceof File)(e) ? e.name : e.toString()), r = encodeURIComponent(t), i[i.length] = r + "=" + n);
		}), i.join(t);
	}(a);
	return s && o.push(s), o.length > 0 ? `${r}?${o.join("&")}` : r;
}, il = (e) => {
	if (e._encodedBody) return e._encodedBody;
	let { data: t, compression: n } = e;
	if (!t) return;
	if (n === oc.GZipJS) {
		let e = Xc(function(e) {
			var t = e.length;
			if (typeof TextEncoder < "u") return new TextEncoder().encode(e);
			for (var n = new yc(e.length + (e.length >>> 1)), r = 0, i = function(e) {
				n[r++] = e;
			}, a = 0; t > a; ++a) {
				if (r + 5 > n.length) {
					var o = new yc(r + 8 + (t - a << 1));
					o.set(n), n = o;
				}
				var s = e.charCodeAt(a);
				128 > s ? i(s) : 2048 > s ? (i(192 | s >>> 6), i(128 | 63 & s)) : s > 55295 && 57344 > s ? (i(240 | (s = 65536 + (1047552 & s) | 1023 & e.charCodeAt(++a)) >>> 18), i(128 | s >>> 12 & 63), i(128 | s >>> 6 & 63), i(128 | 63 & s)) : (i(224 | s >>> 12), i(128 | s >>> 6 & 63), i(128 | 63 & s));
			}
			return Lc(n, 0, r);
		}(As(t)), { mtime: 0 });
		return {
			contentType: $c,
			body: e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength),
			estimatedSize: e.byteLength
		};
	}
	if (n === oc.Base64) {
		let e = ((e) => "data=" + encodeURIComponent(typeof e == "string" ? e : As(e)))(function(e) {
			return e && btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, (e, t) => String.fromCharCode(parseInt(t, 16))));
		}(As(t)));
		return {
			contentType: "application/x-www-form-urlencoded",
			body: e,
			estimatedSize: new Blob([e]).size
		};
	}
	let r = As(t);
	return {
		contentType: "application/json",
		body: r,
		estimatedSize: new Blob([r]).size
	};
}, al = (e) => {
	let t = () => e.transport === "sendBeacon" ? {
		url: rl(e.url, { compression: oc.Base64 }),
		encodedBody: il(B(B({}, e), {}, {
			compression: oc.Base64,
			_encodedBody: void 0
		}))
	} : {
		url: nl(e.url, "compression"),
		encodedBody: il(B(B({}, e), {}, {
			compression: void 0,
			_encodedBody: void 0
		}))
	}, n;
	try {
		n = il(e);
	} catch (n) {
		if (bi(e.compression, js(e.url, "compression"))) return V.error("Failed to gzip request body, sending uncompressed payload", n), t();
		throw n;
	}
	return n && bi(e.compression, js(e.url, "compression")) && !((r = n.body) instanceof ArrayBuffer ? yi(new Uint8Array(r)) : ArrayBuffer.isView(r) && yi(new Uint8Array(r.buffer, r.byteOffset, r.byteLength))) ? (tl = !0, t()) : {
		url: e.url,
		encodedBody: n
	};
	var r;
}, ol = (e) => {
	try {
		return al(e);
	} catch (n) {
		var t;
		V.error(n), (t = e.callback) == null || t.call(e, {
			statusCode: 0,
			error: n
		});
		return;
	}
}, sl = function() {
	var e = z(function* (e) {
		let t = yield function(e) {
			return Ei.apply(this, arguments);
		}(As(e.data), r.DEBUG, { rethrow: !0 });
		if (!t) return e;
		let n = yield t.arrayBuffer();
		return B(B({}, e), {}, { _encodedBody: {
			contentType: $c,
			body: n,
			estimatedSize: n.byteLength
		} });
	});
	return function(t) {
		return e.apply(this, arguments);
	};
}(), cl = /Failed to fetch|NetworkError|Load failed/i, ll = (e) => e?.name === "TypeError" && cl.test(e?.message || ""), ul = (e) => {
	try {
		let t = function(e, t = Date.now(), n = 3e5) {
			if (typeof e != "string" || !e) return;
			let r = e.trim(), i = /^\d+\s*,/.test(r) ? r.slice(0, r.indexOf(",")).trim() : r;
			if (/^\d+$/.test(i)) {
				let e = 1e3 * Math.min(Number(i), n / 1e3);
				return e > 0 ? e : void 0;
			}
			if (!/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)[a-z]*[ ,]/.test(i)) return;
			let a = /^\w{3} \w{3} /.test(i) ? i + " GMT" : i, o = Date.parse(a) - t;
			return Number.isFinite(o) && o > 0 ? Math.min(o, n) : void 0;
		}(e());
		return P(t) ? void 0 : Math.min(t, 3e4);
	} catch {
		return;
	}
}, dl = (e) => {
	let t = ol(e);
	if (!t) return;
	let n = new xt();
	Qc.set(n, !0);
	let { url: r, encodedBody: i } = t;
	n.open(e.method || "GET", r, !0);
	let { contentType: a, body: o } = i ?? {};
	U(e.headers, function(e, t) {
		n.setRequestHeader(t, e);
	}), a && n.setRequestHeader("Content-Type", a), e.timeout && (n.timeout = e.timeout), n.onreadystatechange = () => {
		if (n.readyState === 4) {
			var t;
			let r = {
				statusCode: n.status,
				text: n.responseText
			};
			if (n.status === 200) try {
				r.json = JSON.parse(n.responseText);
			} catch {}
			(t = e.callback) == null || t.call(e, r, ul(() => n.getResponseHeader("Retry-After")));
		}
	}, n.send(o);
}, fl = (e) => {
	let t = ol(e);
	if (!t) return;
	let { url: n, encodedBody: r } = t, { contentType: i, body: a, estimatedSize: o } = r ?? {}, s = new Headers();
	U(e.headers, function(e, t) {
		s.append(t, e);
	}), i && s.append("Content-Type", i);
	let c = null, l = !1;
	if (St) {
		let t = new St();
		c = {
			signal: t.signal,
			timeout: setTimeout(() => {
				l = !0;
				try {
					t.abort(mr("AbortError", "PostHog request timed out" + ((n = e.timeout) ? ` after ${n}ms` : "")));
				} catch (e) {
					d(e);
				}
				var n;
			}, e.timeout)
		};
	}
	let u = !1, d = (t) => {
		var n;
		u || (u = !0, l && t?.name === "AbortError" || ll(t) ? V.warn(t) : V.error(t), (n = e.callback) == null || n.call(e, {
			statusCode: 0,
			error: t
		}));
	}, f = 0, p = () => {
		el -= f, f = 0, c && clearTimeout(c.timeout);
	};
	try {
		let t = B({
			method: e?.method || "GET",
			headers: s,
			referrerPolicy: "strict-origin",
			body: a,
			signal: c?.signal
		}, e.fetchOptions), r = o ?? (P(a) ? 0 : void 0);
		t.keepalive = t.method === "POST" && !e._keepaliveDisabled && !1 !== t.keepalive && t.body === a && !P(r) && r >= 0 && 52428.8 > el + r, t.keepalive && (f = r, el += f), bt(n, t).then((t) => t.text().then((n) => {
			var r;
			if (u) return;
			let i = {
				statusCode: t.status,
				text: n
			};
			if (t.status === 200) try {
				i.json = JSON.parse(n);
			} catch (e) {
				V.error(e);
			}
			u = !0, p(), (r = e.callback) == null || r.call(e, i, ul(() => t.headers.get("Retry-After")));
		})).catch((e) => {
			p(), d(e);
		}).finally(p);
	} catch (e) {
		p(), d(e);
	}
}, pl = (e) => {
	try {
		let { url: t, encodedBody: n } = al(e), { contentType: r, body: i, estimatedSize: a } = n ?? {};
		if (!i) return;
		let o = i instanceof Blob ? i : new Blob([i], { type: r });
		if (yt.sendBeacon(t, o)) return;
		let s = j(e.data) ? e.data : e.data?.batch;
		if (j(s) && s.length > 1 && (a ?? 0) > 16384) {
			let t = Math.ceil(s.length / 2), n = (t) => j(e.data) ? t : B(B({}, e.data), {}, { batch: t });
			pl(B(B({}, e), {}, { data: n(s.slice(0, t)) })), pl(B(B({}, e), {}, { data: n(s.slice(t)) }));
			return;
		}
		V.warn(`Beacon of ~${a ?? 0} bytes was rejected by the browser, falling back to ${bt ? "fetch" : "XHR"}`), bt ? fl(B(B({}, e), {}, { _keepaliveDisabled: !0 })) : dl(e);
	} catch (e) {
		V.warn("Beacon send failed", e);
	}
}, ml = (e, t, n, r) => {
	let i = r === "query" ? t === "POST" ? "sent_at" : "_" : void 0;
	return rl(n === oc.GZipJS ? nl(e, "compression") : e, B(B({}, i ? { [i]: Date.now().toString() } : {}), n === oc.GZipJS ? {} : { compression: n }));
}, hl = (() => {
	let e = [];
	return bt && e.push({
		transport: "fetch",
		method: fl
	}), xt && e.push({
		transport: "XHR",
		method: dl
	}), yt != null && yt.sendBeacon && e.push({
		transport: "sendBeacon",
		method: pl
	}), e;
})(), gl = !Zc && wt?.indexOf("MSIE") === -1 && wt?.indexOf("Mozilla") === -1;
function _l(e, t, n) {
	var r, i;
	n && (t = B(B({}, t), {}, { callback: (e) => n(e) })), e.__loaded ? gl ? e.__request_queue.push(t) : e.rateLimiter.isServerRateLimited(t.batchKey) ? t.fireCallbackOnDrop && ((r = t.callback) == null || r.call(t, { statusCode: 429 })) : (t.transport = t.transport || e.config.api_transport, t.headers = B(B({}, e.config.request_headers), t.headers), t.compression = t.compression === "best-available" ? e.compression ?? t.compressionFallback : t.compression, (P(e.config.disable_beacon) ? e.config.__preview_disable_beacon : e.config.disable_beacon) && (t.disableTransport = ["sendBeacon"]), t.fetchOptions = t.fetchOptions || e.config.fetch_options, ((e, t) => {
		let n = B(B({}, e), {}, { callback: t ?? ((t) => e.callback?.call(e, t)) });
		n.timeout = n.timeout || 6e4;
		let r = n.transport ?? "fetch";
		r === "sendBeacon" && P(n.compression) && n.data && (n.compression = oc.Base64), n.method === "POST" && n.data && (n.timestampMode === "capture-body" ? n.data = ((e) => {
			var t;
			let n = (j(e) ? e : [e]).map((e) => B(B({}, e), e.timestamp instanceof Date && !isNaN(e.timestamp.getTime()) ? { timestamp: e.timestamp.toISOString() } : {})), r = n[0];
			return {
				api_key: (r == null || (t = r.properties) == null ? void 0 : t.token) ?? r?.token,
				batch: n,
				sent_at: (/* @__PURE__ */ new Date()).toISOString()
			};
		})(n.data) : n.timestampMode === "body" && (n.data = ((e, t = (/* @__PURE__ */ new Date()).toISOString()) => j(e) ? e.map((e) => B(B({}, e), {}, { sent_at: t })) : B(B({}, e), {}, { sent_at: t }))(n.data))), n.url = ml(n.url, n.method, n.compression, n.timestampMode);
		let i = hl.filter((e) => !n.disableTransport || !e.transport || !n.disableTransport.includes(e.transport)), a = function(e, t) {
			for (let n = 0; e.length > n; n++) if (t(e[n])) return e[n];
		}(i, (e) => e.transport === r)?.method ?? i[0].method;
		if (!a) throw Error("No available transport method");
		let o = (e) => {
			try {
				a(e);
			} catch (e) {
				var t;
				ll(e) ? V.warn(e) : V.error(e), (t = n.callback) == null || t.call(n, {
					statusCode: 0,
					error: e
				});
			}
		};
		r !== "sendBeacon" && !n.preferSyncCompression && n.data && n.compression === oc.GZipJS && Ct && typeof Promise < "u" && !tl ? sl(n).then((e) => {
			o(e);
		}).catch((t) => {
			if (xi(t)) return tl = !0, void o(B(B({}, n), {}, {
				compression: void 0,
				url: ml(e.url, e.method, void 0, e.timestampMode)
			}));
			((e) => {
				if (!e || typeof e != "object") return !1;
				let t = "name" in e ? String(e.name) : "";
				return xi(e) || t === vi;
			})(t) && (tl = !0), o(n);
		}) : o(n);
	})(t, (r, i) => {
		var a, o, s;
		e.rateLimiter.checkForLimiting(r), 400 > r.statusCode || (a = (o = e.config).on_request_error) == null || a.call(o, r), n ? n(r, i) : (s = t.callback) == null || s.call(t, r);
	})) : t.fireCallbackOnDrop && ((i = t.callback) == null || i.call(t, { statusCode: 0 }));
}
var vl = class {
	constructor(e, t) {
		this._isPaused = !0, this._queue = [], this._flushTimeoutMs = en(t?.flush_interval_ms || 3e3, 250, 5e3, V.createLogger("flush interval"), 3e3), this._sendRequest = e;
	}
	enqueue(e) {
		this._queue.push(e), this._flushTimeout || this._setFlushTimeout();
	}
	unload() {
		this._clearFlushTimeout();
		let e = this._queue.length > 0 ? this._formatQueue() : {}, t = Object.values(e);
		[...t.filter((e) => e.url.indexOf("/e") === 0), ...t.filter((e) => e.url.indexOf("/e") !== 0)].map((e) => {
			this._sendRequestSafely(B(B({}, e), {}, { callback: void 0 }), "sendBeacon");
		});
	}
	enable() {
		this._isPaused = !1, this._setFlushTimeout();
	}
	_setFlushTimeout() {
		this._isPaused || (this._flushTimeout = setTimeout(() => {
			this._clearFlushTimeout(), this._flush();
		}, this._flushTimeoutMs));
	}
	_flush() {
		if (this._queue.length > 0) {
			let e = this._formatQueue();
			for (let t in e) this._sendRequestSafely(e[t]);
		}
	}
	_sendRequestSafely(e, t) {
		try {
			this._sendRequest(e, t);
		} catch (e) {
			V.error(e);
		}
	}
	_clearFlushTimeout() {
		clearTimeout(this._flushTimeout), this._flushTimeout = void 0;
	}
	_formatQueue() {
		let e = {}, t = {};
		U(this._queue, (n) => {
			var r;
			let i = n, a = ((i ? i.batchKey : null) || i.url) + (i.batchGroup ? `:${i.batchGroup}` : "");
			P(e[a]) && (e[a] = B(B({}, i), {}, {
				data: [],
				callback: void 0,
				fireCallbackOnDrop: void 0
			}), t[a] = []), (r = e[a].data) == null || r.push(i.data), i.callback && t[a].push(i.callback);
		});
		for (let n in t) {
			let r = t[n];
			r.length && (e[n].callback = (e) => {
				for (let t of r) t(e);
			});
		}
		return this._queue = [], e;
	}
}, yl = ["retriesPerformedSoFar"], bl = class {
	constructor(e) {
		this._instance = e, this._isPolling = !1, this._pollIntervalMs = 3e3, this._queue = [], this._queue = [], this._areWeOnline = !0, this.resume();
	}
	resume() {
		if (!P(E) && "onLine" in E.navigator) {
			if (this._areWeOnline = E.navigator.onLine, this._onlineListener) return;
			this._onlineListener = () => {
				this._areWeOnline = !0, this._flush();
			}, this._offlineListener = () => {
				this._areWeOnline = !1;
			}, G(E, "online", this._onlineListener), G(E, "offline", this._offlineListener);
		}
	}
	get length() {
		return this._queue.length;
	}
	retriableRequest(e, t) {
		let { retriesPerformedSoFar: n } = e, r = Di(e, yl);
		Rt(n) && (r.url = rl(r.url, { retry_count: n })), _l(this._instance, t ? B(B({}, r), {}, { transport: t }) : r, (e, t) => {
			var i;
			if (e.statusCode !== 200 && (400 > e.statusCode || e.statusCode >= 500)) {
				if ((e.statusCode === 0 ? 3 : 10) > (n ?? 0)) return void this._enqueue(B({ retriesPerformedSoFar: n }, r), t);
				e.statusCode === 0 && V.warn(`Request failed before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped retrying after ${n ?? 0} retries.`);
			}
			(i = r.callback) == null || i.call(r, e);
		});
	}
	_enqueue(e, t) {
		let n = e.retriesPerformedSoFar || 0;
		e.retriesPerformedSoFar = n + 1;
		let r = Math.max(function(e) {
			let t = 3e3 * 2 ** e, n = t / 2, r = Math.min(18e5, t), i = (Math.random() - .5) * (r - n);
			return Math.ceil(r + i);
		}(n), t ?? 0), i = Date.now() + r;
		this._queue.push({
			retryAt: i,
			requestOptions: e
		});
		let a = `Enqueued failed request for retry in ${r}`;
		navigator.onLine || (a += " (Browser is offline)"), V.warn(a), this._isPolling || (this._isPolling = !0, this._poll());
	}
	_poll() {
		if (this._poller && clearTimeout(this._poller), this._queue.length === 0) return this._isPolling = !1, void (this._poller = void 0);
		this._poller = setTimeout(() => {
			this._areWeOnline && this._queue.length > 0 && this._flush(), this._poll();
		}, this._pollIntervalMs);
	}
	_flush() {
		let e = Date.now(), t = [], n = this._queue.filter((n) => e > n.retryAt || (t.push(n), !1));
		if (this._queue = t, n.length > 0) for (let { requestOptions: e } of n) this.retriableRequest(e);
	}
	unload() {
		this._poller &&= (clearTimeout(this._poller), void 0), this._isPolling = !1, P(E) || (this._onlineListener &&= (E.removeEventListener("online", this._onlineListener), void 0), this._offlineListener &&= (E.removeEventListener("offline", this._offlineListener), void 0));
		for (let { requestOptions: e } of this._queue) try {
			this._instance._send_request(B(B({}, e), {}, {
				callback: j(e.data) ? void 0 : e.callback,
				transport: "sendBeacon"
			}));
		} catch (e) {
			V.error(e);
		}
		this._queue = [];
	}
}, xl = class {
	constructor(e) {
		this._instance = e, this._updateScrollData = () => {
			this._context ||= {};
			let e = this.scrollElement(), t = this.scrollY(), n = e ? Math.max(0, e.scrollHeight - e.clientHeight) : 0, r = t + (e?.clientHeight || 0), i = e?.scrollHeight || 0;
			this._context.lastScrollY = Math.ceil(t), this._context.maxScrollY = Math.max(t, this._context.maxScrollY ?? 0), this._context.maxScrollHeight = Math.max(n, this._context.maxScrollHeight ?? 0), this._context.lastContentY = r, this._context.maxContentY = Math.max(r, this._context.maxContentY ?? 0), this._context.maxContentHeight = Math.max(i, this._context.maxContentHeight ?? 0);
		};
	}
	get _scrollRoot() {
		return this._instance.config.scroll_root_selector;
	}
	getContext() {
		return this._context;
	}
	resetContext() {
		let e = this._context;
		return this._context = void 0, setTimeout(this._updateScrollData, 0), e;
	}
	startMeasuringScrollPosition() {
		G(E, "scroll", this._updateScrollData, { capture: !0 }), G(E, "scrollend", this._updateScrollData, { capture: !0 }), G(E, "resize", this._updateScrollData);
	}
	scrollElement() {
		if (this._scrollRoot) {
			let t = j(this._scrollRoot) ? this._scrollRoot : [this._scrollRoot];
			for (let n of t) {
				var e;
				let t = E == null || (e = E.document) == null ? void 0 : e.querySelector(n);
				if (t) return t;
			}
		} else {
			var t;
			return E == null || (t = E.document) == null ? void 0 : t.documentElement;
		}
	}
	_scrollPosition(e) {
		var t, n;
		let r = e === "y" ? "scrollTop" : "scrollLeft";
		if (this._scrollRoot) {
			let e = this.scrollElement();
			return e && e[r] || 0;
		}
		return E ? e === "y" ? E.scrollY || E.pageYOffset || ((t = E.document) == null || (t = t.documentElement) == null ? void 0 : t.scrollTop) || 0 : E.scrollX || E.pageXOffset || ((n = E.document) == null || (n = n.documentElement) == null ? void 0 : n.scrollLeft) || 0 : 0;
	}
	scrollY() {
		return this._scrollPosition("y");
	}
	scrollX() {
		return this._scrollPosition("x");
	}
}, Sl = (e) => Gs(e?.config.mask_personal_data_properties, e?.config.custom_personal_data_properties, e?.config.disable_capture_url_hashes), Cl = class {
	constructor(e, t, n, r) {
		this._onSessionIdCallback = (e) => {
			let t = this._getStored();
			if (t && t.sessionId === e) return;
			let n = {
				sessionId: e,
				props: this._sessionSourceParamGenerator(this._instance)
			};
			this._persistence.register({ [We]: n });
		}, this._instance = e, this._sessionIdManager = t, this._persistence = n, this._sessionSourceParamGenerator = r || Sl, this._sessionIdManager.onSessionId(this._onSessionIdCallback);
	}
	_getStored() {
		return this._persistence.props[We];
	}
	getSetOnceProps() {
		let e = this._getStored()?.props;
		return e ? "r" in e ? Ks(e, this._instance.config.disable_capture_url_hashes) : {
			$referring_domain: e.referringDomain,
			$pathname: e.initialPathName,
			utm_source: e.utm_source,
			utm_campaign: e.utm_campaign,
			utm_medium: e.utm_medium,
			utm_content: e.utm_content,
			utm_term: e.utm_term
		} : {};
	}
	getSessionProps() {
		let e = {};
		return U(Wa(this.getSetOnceProps()), (t, n) => {
			n === "$current_url" && (n = "url"), e[`$session_entry_${jt(n)}`] = t;
		}), e;
	}
}, wl = class {
	on(e, t) {
		return this._events[e] || (this._events[e] = []), this._events[e].push(t), () => {
			this._events[e] = this._events[e].filter((e) => e !== t);
		};
	}
	emit(e, t) {
		for (let n of this._events[e] || []) n(t);
		for (let n of this._events["*"] || []) n(e, t);
	}
	constructor() {
		this._events = {};
	}
}, Tl = H("[SessionId]"), El = 864e5, Dl = class {
	on(e, t) {
		return this._eventEmitter.on(e, t);
	}
	constructor(e, t, n) {
		var r;
		if (this._lastPersistedActivityTimestamp = null, this._lastCookieSyncTimestamp = null, this._sessionIdChangedHandlers = [], this._beforeUnloadListener = void 0, this._destroyed = !1, this._eventEmitter = new wl(), this._sessionHasBeenIdleTooLong = (e, t) => !(!Rt(e) || !Rt(t)) && Math.abs(e - t) > this.sessionTimeoutMs, !e.persistence) throw Error("SessionIdManager requires a PostHogPersistence instance");
		if (e.config.cookieless_mode === "always") throw Error("SessionIdManager cannot be used with cookieless_mode=\"always\"");
		this._config = e.config, this._persistence = e.persistence, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._pendingBootstrapSession = void 0, this._sessionActivityTimestamp = null, this._sessionIdGenerator = t || no, this._windowIdGenerator = n || no;
		let i = this._config.persistence_name || this._config.token;
		if (this._sessionTimeoutMs = 1e3 * en(this._config.session_idle_timeout_seconds || 1800, 60, 36e3, Tl.createLogger("session_idle_timeout_seconds"), 1800), e.register({ $configured_session_timeout_ms: this._sessionTimeoutMs }), this._resetIdleTimer(), this._window_id_storage_key = "ph_" + i + "_window_id", this._primary_window_exists_storage_key = "ph_" + i + "_primary_window_exists", this._canUseSessionStorage()) {
			let e = J._parse(this._window_id_storage_key), t = J._parse(this._primary_window_exists_storage_key);
			e && !t ? this._windowId = e : J._remove(this._window_id_storage_key), J._set(this._primary_window_exists_storage_key, !0);
		}
		(r = this._config.bootstrap) != null && r.sessionID && this.setBootstrapSessionId(this._config.bootstrap.sessionID), this._listenToReloadWindow();
	}
	get sessionTimeoutMs() {
		return this._sessionTimeoutMs;
	}
	onSessionId(e) {
		return P(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), this._sessionIdChangedHandlers.push(e), this._sessionId && e(this._sessionId, this._windowId), () => {
			this._sessionIdChangedHandlers = this._sessionIdChangedHandlers.filter((t) => t !== e);
		};
	}
	_canUseSessionStorage() {
		return this._config.persistence !== "memory" && !this._persistence._disabled && J._is_supported();
	}
	_setWindowId(e) {
		e !== this._windowId && (this._windowId = e, this._canUseSessionStorage() && J._set(this._window_id_storage_key, e));
	}
	_getWindowId() {
		return this._windowId ? this._windowId : this._canUseSessionStorage() ? J._parse(this._window_id_storage_key) : null;
	}
	_isActivityChangeBelowGranularity(e) {
		let t = this._lastPersistedActivityTimestamp;
		return !I(t) && !I(e) && 5e3 > Math.abs(e - t);
	}
	_setSessionId(e, t, n) {
		let r = t !== this._sessionActivityTimestamp, i = e === this._sessionId && n === this._sessionStartTimestamp;
		this._sessionStartTimestamp = n, this._sessionActivityTimestamp = t, this._sessionId = e, i && !r || i && this._isActivityChangeBelowGranularity(t) || (this._lastPersistedActivityTimestamp = t, this._persistence.register({ [Oe]: [
			t,
			e,
			n
		] }));
	}
	_useCrossTabRefreshHardening() {
		let e = this._config?.persistence_save_debounce_ms;
		return Rt(e) && e > 0;
	}
	_refreshSessionIdFromStorage() {
		this._useCrossTabRefreshHardening() ? this._persistence.refreshKey(Oe) : (this._persistence.flush(), this._persistence.load());
	}
	_flushPendingActivityTimestamp() {
		if (I(this._sessionActivityTimestamp) || this._sessionActivityTimestamp === this._lastPersistedActivityTimestamp) return;
		this._refreshSessionIdFromStorage();
		let [, e, t] = this._getSessionId();
		e === this._sessionId && t === this._sessionStartTimestamp && (this._lastPersistedActivityTimestamp = this._sessionActivityTimestamp, this._persistence.register({ [Oe]: [
			this._sessionActivityTimestamp,
			this._sessionId ?? null,
			this._sessionStartTimestamp
		] }), this._persistence.flush());
	}
	_freshestActivityTimestamp() {
		let [e] = this._getSessionId(), t = Rt(e) ? e : 0, n = Rt(this._sessionActivityTimestamp) ? this._sessionActivityTimestamp : 0;
		return Math.max(t, n);
	}
	_isSessionIdleAfterCrossTabRefresh(e) {
		return this._refreshSessionIdFromStorage(), this._sessionHasBeenIdleTooLong(e, this._freshestActivityTimestamp());
	}
	_getSessionId() {
		let e = this._persistence.props[Oe];
		return j(e) && e.length === 2 && e.push(e[0]), e || [
			0,
			null,
			0
		];
	}
	resetSessionId() {
		this._lastPersistedActivityTimestamp = null, this._pendingBootstrapSession = void 0, clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = void 0, this._setSessionId(null, null, null);
	}
	setBootstrapSessionId(e, t = !1) {
		let n = ((e, t = (/* @__PURE__ */ new Date()).getTime()) => {
			try {
				let n = ((e) => {
					let t = e.replace(/-/g, "");
					if (t.length !== 32) throw Error("Not a valid UUID");
					if (t[12] !== "7") throw Error("Not a UUIDv7");
					return parseInt(t.substring(0, 12), 16);
				})(e);
				return n > t + 6e4 ? void Tl.error("Bootstrap sessionID cannot be in the future") : n;
			} catch (e) {
				Tl.error("Invalid sessionID in bootstrap", e);
				return;
			}
		})(e);
		return !P(n) && (t ? this._pendingBootstrapSession = {
			sessionId: e,
			sessionStartTimestamp: n
		} : this._setSessionId(e, (/* @__PURE__ */ new Date()).getTime(), n), !0);
	}
	destroy() {
		this._destroyed = !0, this._flushPendingActivityTimestamp(), clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = void 0, this._beforeUnloadListener && E && (E.removeEventListener(pt, this._beforeUnloadListener, { capture: !1 }), this._beforeUnloadListener = void 0), this._sessionIdChangedHandlers = [];
	}
	_listenToReloadWindow() {
		this._beforeUnloadListener = () => {
			this._flushPendingActivityTimestamp(), this._canUseSessionStorage() && J._remove(this._primary_window_exists_storage_key);
		}, G(E, pt, this._beforeUnloadListener, { capture: !1 });
	}
	checkAndGetSessionAndWindowId(e = !1, t = null, n = !1) {
		if (this._config.cookieless_mode === "always") throw Error("checkAndGetSessionAndWindowId should not be called with cookieless_mode=\"always\"");
		let r = t || (/* @__PURE__ */ new Date()).getTime(), i = this._sessionId;
		if (n) this._lastCookieSyncTimestamp = r;
		else if (I(this._lastCookieSyncTimestamp) || this._lastCookieSyncTimestamp > r || r - this._lastCookieSyncTimestamp >= 1e3) {
			var a, o;
			(a = (o = this._persistence).syncCookieProperties) == null || a.call(o), this._lastCookieSyncTimestamp = r;
		}
		let [, s, c] = this._getSessionId(), l = !P(i) && s !== i, u = this._freshestActivityTimestamp(), d = this._getWindowId(), f = this._pendingBootstrapSession, p = !!f && (f.sessionStartTimestamp > r + 6e4 || r - f.sessionStartTimestamp > El), m = f ? p : Rt(c) && Math.abs(r - c) > El, h = !1, g = l, _ = !s || !!f, v = s, y = !_ && !e && this._sessionHasBeenIdleTooLong(r, u);
		if (y && (y = this._isSessionIdleAfterCrossTabRefresh(r), y || Tl.info("cross-tab refresh kept the session alive", { sessionId: s }), [, s, c] = this._getSessionId(), y || (_ = !s || !!f)), _ || y || m) {
			g = !1;
			let e = f && !p;
			s = e ? f.sessionId : this._sessionIdGenerator(), d = this._windowIdGenerator(), Tl.info("new session ID assigned", {
				sessionId: s,
				windowId: d,
				bootstrapped: !!e,
				changeReason: {
					noSessionId: _,
					activityTimeout: y,
					sessionPastMaximumLength: m
				}
			}), c = e ? f.sessionStartTimestamp : r, this._pendingBootstrapSession = void 0, h = !0;
		} else d || (d = this._windowIdGenerator(), h = !0), g ||= s !== v, g && (Tl.info("adopted cross-tab session id", {
			sessionId: s,
			windowId: d
		}), h = !0);
		let b = Rt(u) && e && !m ? u : r, x = Rt(c) ? c : (/* @__PURE__ */ new Date()).getTime();
		this._setWindowId(d), this._setSessionId(s, b, x), e || this._resetIdleTimer();
		let S = {
			noSessionId: _,
			activityTimeout: y,
			sessionPastMaximumLength: m,
			crossTabAdoption: g
		};
		return h && this._sessionIdChangedHandlers.forEach((e) => e(s, d, S)), {
			sessionId: s,
			windowId: d,
			sessionStartTimestamp: x,
			changeReason: h ? S : void 0,
			lastActivityTimestamp: u
		};
	}
	_resetIdleTimer() {
		this._destroyed || (clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = setTimeout(() => {
			if (!this._destroyed) {
				if (this._isSessionIdleAfterCrossTabRefresh((/* @__PURE__ */ new Date()).getTime())) {
					let e = this._sessionId;
					this.resetSessionId(), this._eventEmitter.emit("forcedIdleReset", { idleSessionId: e });
				} else this._resetIdleTimer();
			}
		}, 1.1 * this.sessionTimeoutMs));
	}
}, Ol = Object.freeze([
	"2026-08-30",
	"2026-08-29",
	"2026-06-25",
	"2026-05-30",
	"2026-01-30",
	"2025-11-30",
	"2025-05-24"
]), kl = function(e, t) {
	if (!e) return !1;
	let n = e.userAgent;
	if (n && $t(n, t)) return !0;
	try {
		let n = e?.userAgentData;
		if (n?.brands && n.brands.some((e) => $t(e?.brand, t))) return !0;
	} catch {}
	return !!e.webdriver;
};
function Al() {
	return (Al = z(function* () {
		let e = yt?.userAgentData;
		if (e?.getHighEntropyValues) try {
			let t = (yield e.getHighEntropyValues(["model"]))?.model;
			return F(t) && t.length > 0 ? t : void 0;
		} catch (e) {
			V.info("Unable to resolve $device_model from userAgentData.getHighEntropyValues", e);
			return;
		}
	})).apply(this, arguments);
}
function jl(e, t) {
	let n = `$survey_${t}/${e.id}`;
	return e.current_iteration && e.current_iteration > 0 && (n = `$survey_${t}/${e.id}/${e.current_iteration}`), n;
}
function Ml(e) {
	var t;
	return !!((t = e.conditions) != null && (t = t.events) != null && (t = t.values) != null && t.length);
}
var Nl = (e, t) => {
	if (!((e) => {
		try {
			new RegExp(e);
		} catch {
			return !1;
		}
		return !0;
	})(t)) return !1;
	try {
		return new RegExp(t).test(e);
	} catch {
		return !1;
	}
}, Pl = (e) => e.toLowerCase(), Fl = {
	exact: (e, t) => t.some((t) => e.some((e) => t === e)),
	is_not: (e, t) => t.every((t) => e.every((e) => t !== e)),
	regex: (e, t) => t.some((t) => e.some((e) => Nl(t, e))),
	not_regex: (e, t) => t.every((t) => e.every((e) => !Nl(t, e))),
	icontains: (e, t) => t.map(Pl).some((t) => e.map(Pl).some((e) => t.includes(e))),
	not_icontains: (e, t) => t.map(Pl).every((t) => e.map(Pl).every((e) => !t.includes(e))),
	gt: (e, t) => t.some((t) => {
		let n = parseFloat(t);
		return !isNaN(n) && e.some((e) => n > parseFloat(e));
	}),
	lt: (e, t) => t.some((t) => {
		let n = parseFloat(t);
		return !isNaN(n) && e.some((e) => n < parseFloat(e));
	})
};
function Il(e, t) {
	return !e || Object.entries(e).every(([e, n]) => {
		let r = t?.[e];
		if (r == null) return !1;
		let i = Fl[n.operator];
		return !!i && i(n.values.map(String), [String(r)]);
	});
}
function Ll(e, t, n) {
	return As({
		distinct_id: e,
		userPropertiesToSet: t,
		userPropertiesToSetOnce: n
	});
}
var Rl = "custom", zl = "i.posthog.com", Bl = /^\/static\//, Vl = [
	"/s/",
	"/e/",
	"/i/"
], Hl = class {
	constructor(e) {
		this._regionCache = {}, this.instance = e;
	}
	get apiHost() {
		let e = this.instance.config.api_host.trim().replace(/\/$/, "");
		return e === "https://app.posthog.com" ? "https://us.i.posthog.com" : e;
	}
	get flagsApiHost() {
		let e = this.instance.config.flags_api_host;
		return e ? e.trim().replace(/\/$/, "") : this.apiHost;
	}
	get uiHost() {
		let e = this.instance.config.ui_host?.replace(/\/$/, "");
		return e ||= this.apiHost.replace(`.${zl}`, ".posthog.com"), e === "https://app.posthog.com" ? "https://us.posthog.com" : e;
	}
	get region() {
		return this._regionCache[this.apiHost] || (this._regionCache[this.apiHost] = /https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "us" : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "eu" : Rl), this._regionCache[this.apiHost];
	}
	_staticAssetHostOverride(e) {
		if (!Bl.test(e)) return;
		let t = this.instance.config.asset_host;
		return typeof t == "string" && t.trim().replace(/\/$/, "") || void 0;
	}
	_urlKey(e) {
		let t = Es(e);
		return t ? t.protocol + "//" + t.host + t.pathname : void 0;
	}
	_prepareEndpoint(e, t, n) {
		if (e === "ui") return n;
		let r = n, i = this.instance.config.rewriteRequestPath;
		if (i) {
			let e = Es(n)?.href || n;
			r = i(new URL(e)).toString();
		}
		if (i && e === "api" && Vl.some((e) => t.indexOf(e) === 0)) {
			let e = this._urlKey(r);
			if (e) {
				let t = this.apiHost, n = this._ingestionEndpoints;
				n?.apiHost === t && n.rewriteRequestPath === i || (n = {
					apiHost: t,
					rewriteRequestPath: i,
					urls: /* @__PURE__ */ new Set()
				}, this._ingestionEndpoints = n), n.urls.add(e);
			}
		}
		return r;
	}
	isIngestionEndpoint(e) {
		let t = this._ingestionEndpoints, n = this._urlKey(e);
		return t?.apiHost === this.apiHost && t.rewriteRequestPath === this.instance.config.rewriteRequestPath && !!n && t.urls.has(n);
	}
	endpointFor(e, t = "") {
		if (t &&= t[0] === "/" ? t : `/${t}`, e === "ui") return this._prepareEndpoint(e, t, this.uiHost + t);
		if (e === "flags") return this._prepareEndpoint(e, t, this.flagsApiHost + t);
		if (e === "assets") {
			let n = this._staticAssetHostOverride(t);
			if (n) return this._prepareEndpoint(e, t, `${n}${t}`);
		}
		if (this.region === Rl) return this._prepareEndpoint(e, t, this.apiHost + t);
		let n = zl + t;
		switch (e) {
			case "assets": return this._prepareEndpoint(e, t, `https://${this.region}-assets.${n}`);
			case "api": return this._prepareEndpoint(e, t, `https://${this.region}.${n}`);
		}
	}
}, $ = H("[Surveys]"), Ul = (e) => {
	try {
		let t = ((e) => ((e, t) => `seenSurvey_${function(e) {
			return e.current_iteration && e.current_iteration > 0 ? `${e.id}_${e.current_iteration}` : e.id;
		}(t)}`)(0, e))(e);
		if (localStorage.getItem(t)) return;
		localStorage.setItem(t, "true");
	} catch (e) {
		$.error("Failed to persist survey seen state", e);
	}
}, Wl = [
	cc.Popover,
	cc.Widget,
	cc.API
], Gl = {
	ignoreConditions: !1,
	ignoreDelay: !1,
	displayType: dc.Popover
}, Kl = H("[PostHog ExternalIntegrations]"), ql = {
	intercom: "intercom-integration",
	crispChat: "crisp-chat-integration"
}, Jl = class {
	constructor(e) {
		this._instance = e;
	}
	_loadScript(e, t) {
		var n, r;
		(n = k.__PosthogExtensions__) == null || (r = n.loadExternalDependency) == null || r.call(n, this._instance, e, (e) => {
			if (e) return Kl.error("failed to load script", e);
			t();
		});
	}
	startIfEnabledOrStop() {
		for (let [r, i] of Object.entries(this._instance.config.integrations ?? {})) {
			var e, t, n;
			i && !((e = k.__PosthogExtensions__) != null && (e = e.integrations) != null && e[r]) && this._loadScript(ql[r], () => {
				var e;
				(e = k.__PosthogExtensions__) == null || (e = e.integrations) == null || (e = e[r]) == null || e.start(this._instance);
			}), !i && (t = k.__PosthogExtensions__) != null && (t = t.integrations) != null && t[r] && ((n = k.__PosthogExtensions__) == null || (n = n.integrations) == null || (n = n[r]) == null || n.stop());
		}
	}
}, Yl = class {
	constructor(e) {
		this.disabled = !1 === e;
		let t = N(e) ? e : {};
		this.thresholdPx = t.threshold_px || 30, this.timeoutMs = t.timeout_ms || 1e3, this.clickCount = t.click_count || 3, this.clicks = [];
	}
	isRageClick(e, t, n) {
		if (this.disabled) return !1;
		let r = this.clicks[this.clicks.length - 1];
		if (r && Math.abs(e - r.x) + Math.abs(t - r.y) < this.thresholdPx && this.timeoutMs > n - r.timestamp) {
			if (this.clicks.push({
				x: e,
				y: t,
				timestamp: n
			}), this.clicks.length === this.clickCount) return !0;
		} else this.clicks = [{
			x: e,
			y: t,
			timestamp: n
		}];
		return !1;
	}
}, Xl = () => typeof window > "u" ? void 0 : window, Zl = () => typeof document > "u" ? void 0 : document, Ql = "$copy_autocapture", $l = [
	"password",
	"hidden",
	"file",
	"checkbox",
	"button",
	"submit",
	"reset",
	"image"
], eu = H("[AutoCapture]");
function tu(e, t) {
	return t.length > e ? t.slice(0, e) + "..." : t;
}
function nu(e) {
	if (e.previousElementSibling) return e.previousElementSibling;
	let t = e;
	do
		t = t.previousSibling;
	while (t && !To(t));
	return t;
}
function ru(e, { e: t, maskAllElementAttributes: n, maskAllText: r, elementAttributeIgnoreList: i, elementsChainAsString: a, disableCaptureUrlHashes: o }) {
	if (!To(e)) return { props: {} };
	let s = [e], c = /* @__PURE__ */ new Set([e]), l = e;
	for (; l.parentNode && !Y(l, "body") && 1e3 > s.length;) if (Do(l.parentNode)) {
		let e = l.parentNode.host;
		if (c.has(e)) break;
		c.add(e), s.push(e), l = e;
	} else {
		if (!To(l.parentNode) || c.has(l.parentNode)) break;
		c.add(l.parentNode), s.push(l.parentNode), l = l.parentNode;
	}
	let u = t.type === "click" && e.namespaceURI === "http://www.w3.org/2000/svg" ? s.findIndex((e) => Y(e, "button") || Y(e, "a")) : -1;
	u > 0 && (r ||= s.slice(0, u + 1).some((e) => !Qo(e) || $o(e)));
	let d = [], f = {}, p, m = !1, h = !1;
	if (U(s, (e) => {
		let t = Qo(e);
		if (Y(e, "a") && !n && !i?.includes("href")) {
			let n = e.getAttribute("href");
			m = !!(t && n && ss(n)) && (o ? hr(n) : n);
		}
		A(Ao(e), "ph-no-capture") && (h = !0), d.push(function(e, t, n, r, i = !1) {
			let a = e.tagName.toLowerCase(), o = { tag_name: a };
			Po.indexOf(a) > -1 && !n && (o.$el_text = a.toLowerCase() === "a" || a.toLowerCase() === "button" ? tu(1024, cs(e)) : tu(1024, Mo(e)));
			let s = Ao(e);
			t || r != null && r.includes("class") || 0 >= s.length || (o.classes = s.filter(function(e) {
				return e !== "";
			})), U(e.attributes, function(n) {
				var a;
				if ((!$o(e) || [
					"name",
					"id",
					"class",
					"aria-label"
				].indexOf(n.name) !== -1) && !r?.includes(n.name) && !t && ss(n.value) && (!F(a = n.name) || a.substring(0, 10) !== "_ngcontent" && a.substring(0, 7) !== "_nghost")) {
					let e = n.value;
					n.name === "class" && (e = Oo(e).join(" ")), o["attr__" + n.name] = tu(1024, n.name === "href" && i ? hr(e) : e);
				}
			});
			let c = 1, l = 1, u = e;
			for (; u = nu(u);) c++, u.tagName === e.tagName && l++;
			return o.nth_child = c, o.nth_of_type = l, o;
		}(e, n, r, i, o)), U(function(e) {
			if (!Qo(e)) return {};
			let t = {};
			return U(e.attributes, function(e) {
				if (e.name && e.name.indexOf("data-ph-capture-attribute") === 0) {
					let n = e.name.replace("data-ph-capture-attribute-", ""), r = e.value;
					n && r && ss(r) && (t[n] = r);
				}
			}), t;
		}(e), (e, t) => {
			({}).hasOwnProperty.call(f, t) || (f[t] = e);
		});
	}), h) return {
		props: {},
		explicitNoCapture: h
	};
	if (u > 0 && (e = s[u], d.splice(0, u)), r || (d[0].$el_text = Y(e, "a") || Y(e, "button") ? cs(e) : Mo(e)), m) {
		var g;
		d[0].attr__href = m;
		let e = Es(m)?.host, t = (g = Xl()) == null || (g = g.location) == null ? void 0 : g.host;
		e && t && e !== t && (p = m);
	}
	return {
		props: W((v = t.type, {
			$event_type: v,
			$ce_version: 1
		}), a ? {} : { $elements: d }, { $elements_chain: (_ = d, j(_) ? function(e) {
			return e.map((e) => {
				let t = "";
				if (e.tag_name && (t += e.tag_name), e.attr_class) {
					e.attr_class.sort();
					for (let n of e.attr_class) t += `.${n.replace(/"/g, "")}`;
				}
				let n = B(B(B(B({}, e.text ? { text: e.text } : {}), {}, {
					"nth-child": e.nth_child ?? 0,
					"nth-of-type": e.nth_of_type ?? 0
				}, e.href ? { href: e.href } : {}), e.attr_id ? { attr_id: e.attr_id } : {}), e.attributes), r = {};
				return Ha(n).sort(([e], [t]) => function(e, t) {
					return t > e ? -1 : +(e > t);
				}(e, t)).forEach(([e, t]) => r[us(e.toString())] = us(t.toString())), t += ":", t += Ha(r).map(([e, t]) => `${e}="${t}"`).join(""), t;
			}).join(";");
		}(function(e) {
			return e.map((e) => {
				let t = {
					text: e.$el_text?.slice(0, 400),
					tag_name: e.tag_name,
					href: e.attr__href?.slice(0, 2048),
					attr_class: ds(e),
					attr_id: e.attr__id,
					nth_child: e.nth_child,
					nth_of_type: e.nth_of_type,
					attributes: {}
				};
				return Ha(e).filter(([e]) => e.indexOf("attr__") === 0).forEach(([e, n]) => t.attributes[e] = n), t;
			});
		}(_)) : "") }, d[0]?.$el_text ? { $el_text: d[0]?.$el_text } : {}, p && t.type === "click" ? { $external_click_url: p } : {}, f),
		target: e
	};
	var _, v;
}
var iu = "autocapture", au = class {
	_clearPointer() {
		this._pointerDown = void 0, clearTimeout(this._pointerExpiry), this._pointerExpiry = void 0;
	}
	_isExcludedPointerTarget(e) {
		if (!Qo(e)) return !0;
		let t = this._refreshConfig().css_selector_ignorelist ?? Ro, n = /* @__PURE__ */ new Set(), r = e;
		for (; r;) {
			if (n.size >= 1e3 || n.has(r)) return !0;
			n.add(r);
			let e = r, i = Ao(e);
			if (A(i, "ph-no-capture") || A(i, "ph-sensitive") || $o(e) || t.some((t) => Fo(e, t))) return !0;
			let a = r.parentNode;
			r = Do(a) ? a.host : a && To(a) ? a : null;
		}
		return !1;
	}
	_trackPointer(e) {
		if (!this.isEnabled || e.type === "pointercancel") return void this._clearPointer();
		if (e.type === "pointerdown") {
			this._clearPointer();
			let t = No(e);
			e.isPrimary && e.button === 0 && !e.ctrlKey && t && To(t) && (this._pointerDown = {
				target: t,
				excluded: this._isExcludedPointerTarget(t),
				id: e.pointerId,
				x: e.clientX,
				y: e.clientY,
				released: !1,
				distinctId: this._client?.distinctId
			});
			return;
		}
		let t = this._pointerDown;
		t && (e.pointerId !== t.id || Math.abs(e.clientX - t.x) > 5 || Math.abs(e.clientY - t.y) > 5 ? this._clearPointer() : e.type === "pointerup" && (t.released = !0, this._pointerExpiry = setTimeout(() => this._clearPointer(), 0)));
	}
	_recoverClickTarget(e) {
		let t = this._pointerDown;
		this._clearPointer();
		let n = No(e);
		if (t?.released && t.target.isConnected && t.distinctId === this._client?.distinctId && e.pointerId === t.id && (e.detail > 0 || e.pointerType === "touch" || e.pointerType === "pen") && e.button === 0 && 5 >= Math.abs(e.clientX - t.x) && 5 >= Math.abs(e.clientY - t.y) && n && (Y(n, "html") || Y(n, "body"))) {
			if (t.excluded) return null;
			let e = this._refreshConfig().css_selector_ignorelist ?? Ro;
			return [
				n,
				Zl()?.documentElement,
				Zl()?.body
			].some((t) => {
				if (!t) return !1;
				let n = Ao(t);
				return A(n, "ph-no-capture") || A(n, "ph-sensitive") || !Qo(t) || $o(t) || e.some((e) => Fo(t, e));
			}) ? null : t.target;
		}
	}
	constructor(e) {
		this._configSource = e, this.name = iu, this._initialized = !1, this._isDisabledServerSide = null, this._hasReceivedConfigResponse = !1, this._elementSelectorsByOwner = /* @__PURE__ */ new Map(), this._elementsChainAsString = !1, this._config = {
			enabled: !1,
			rageclick: !1,
			maskAllElementAttributes: !1,
			maskAllText: !1,
			disableCaptureUrlHashes: !1,
			remoteRequestsDisabled: !1
		}, this._disposed = !1, this._configSource.refresh(this._config), this.rageclicks = new Yl(this._config.rageclick), this._elementSelectors = null;
	}
	setup(e) {
		this._compileUrlPatterns(), this._client = e;
		let t = e.onRemoteConfig(this.onRemoteConfig.bind(this));
		this._disposed ? t.dispose() : (this._remoteConfigSubscription = t, this.startIfEnabled());
	}
	dispose() {
		var e;
		this._disposed || (this._disposed = !0, this._client = void 0, (e = this._remoteConfigSubscription) == null || e.dispose(), this._remoteConfigSubscription = void 0, this._elementSelectorsByOwner.clear(), this._elementSelectors = null, this._removeDomEventHandlers());
	}
	_refreshConfig() {
		return this._configSource.refresh(this._config), this._config;
	}
	_compileUrlPatterns() {
		return this._refreshConfig(), this._config.url_allowlist = this._config.url_allowlist?.map((e) => new RegExp(e)), this._config.url_ignorelist = this._config.url_ignorelist?.map((e) => new RegExp(e)), this._config;
	}
	_addDomEventHandlers() {
		let e = Xl(), t = Zl();
		if (!this.isBrowserSupported()) return void eu.info("Disabling Automatic Event Collection because this browser is not supported");
		if (!e || !t) return;
		this._listenerWindow = e, this._listenerDocument = t;
		let n = this._domEventHandler = (t) => {
			t ||= e?.event;
			try {
				if (t.type === "blur") return void this._clearPointer();
				if (t.type.indexOf("pointer") === 0) return void this._trackPointer(t);
				let e = t.type === "click" ? this._recoverClickTarget(t) : void 0;
				if (I(e)) return;
				this._captureEvent(t, "$autocapture", e);
			} catch (e) {
				eu.error("Failed to capture event", e);
			}
		};
		if (G(e, "blur", n), G(t, "submit", n, { capture: !0 }), G(t, "change", n, { capture: !0 }), G(t, "click", n, { capture: !0 }), U([
			"pointerdown",
			"pointermove",
			"pointerup",
			"pointercancel"
		], (e) => {
			G(t, e, n, { capture: !0 });
		}), this._refreshConfig().capture_copied_text) {
			let n = this._copiedTextHandler = (t) => {
				t ||= e?.event;
				try {
					this._captureEvent(t, Ql);
				} catch (e) {
					eu.error("Failed to capture clipboard event", e);
				}
			};
			G(t, "copy", n, { capture: !0 }), G(t, "cut", n, { capture: !0 }), G(t, "paste", n, { capture: !0 });
		}
	}
	_removeDomEventHandlers() {
		let e = this._listenerWindow, t = this._listenerDocument;
		this._clearPointer(), this._domEventHandler &&= (e?.removeEventListener("blur", this._domEventHandler), U([
			"pointerdown",
			"pointermove",
			"pointerup",
			"pointercancel"
		], (e) => {
			t?.removeEventListener(e, this._domEventHandler, !0);
		}), t?.removeEventListener("submit", this._domEventHandler, !0), t?.removeEventListener("change", this._domEventHandler, !0), t?.removeEventListener("click", this._domEventHandler, !0), void 0), this._copiedTextHandler &&= (t?.removeEventListener("copy", this._copiedTextHandler, !0), t?.removeEventListener("cut", this._copiedTextHandler, !0), t?.removeEventListener("paste", this._copiedTextHandler, !0), void 0), this._listenerWindow = void 0, this._listenerDocument = void 0, this._initialized = !1;
	}
	startIfEnabled() {
		this.isEnabled || this._clearPointer(), !this._disposed && this._client && this.isEnabled && !this._initialized && (this._addDomEventHandlers(), this._initialized = !0);
	}
	onRemoteConfig(e) {
		if (this._disposed) return;
		if (this._hasReceivedConfigResponse = !0, !e.ok) return void this.startIfEnabled();
		let t = e.config;
		t.elementsChainAsString && (this._elementsChainAsString = t.elementsChainAsString);
		let n = t.autocapture_opt_out;
		var r;
		zt(n) && ((r = this._client) == null || r.kv.set("$autocapture_disabled_server_side", n), this._isDisabledServerSide = n), this.startIfEnabled();
	}
	setElementSelectors(e, t = this) {
		if (this._disposed) return;
		e.size ? this._elementSelectorsByOwner.set(t, new Set(e)) : this._elementSelectorsByOwner.delete(t);
		let n = /* @__PURE__ */ new Set();
		this._elementSelectorsByOwner.forEach((e) => {
			e.forEach((e) => n.add(e));
		}), this._elementSelectors = n;
	}
	getElementSelectors(e, t) {
		var n;
		let r = [];
		return (n = this._elementSelectors) == null || n.forEach((n) => {
			(Zl()?.querySelectorAll(n))?.forEach((i) => {
				e !== i && t !== i || A(r, n) || r.push(n);
			});
		}), r;
	}
	get isEnabled() {
		if (this._disposed) return !1;
		let e = this._client?.kv.get(b), t = this._isDisabledServerSide, n = this._refreshConfig();
		if (!n.remoteRequestsDisabled && !this._hasReceivedConfigResponse) return !1;
		let r = n.remoteRequestsDisabled && !this._hasReceivedConfigResponse;
		if (I(t) && !zt(e) && !r) return !1;
		let i = this._isDisabledServerSide ?? !!e;
		return !!n.enabled && !i;
	}
	_captureEvent(e, t = "$autocapture", n) {
		if (!this.isEnabled) return void this._clearPointer();
		let r = n || No(e);
		Eo(r) && (r = r.parentNode || null);
		let i = this._compileUrlPatterns();
		var a;
		t === "$autocapture" && e.type === "click" && e instanceof MouseEvent && i.rageclick && (a = this.rageclicks) != null && a.isRageClick(e.clientX, e.clientY, e.timeStamp || (/* @__PURE__ */ new Date()).getTime()) && Yo(r, i.rageclick) && this._captureEvent(e, "$rageclick", n);
		let o = t === Ql, s = o ? B(B({}, i), {}, { dom_event_allowlist: void 0 }) : i;
		if (r && function(e, t, n, r, i, a) {
			let o = typeof window > "u" ? void 0 : window;
			if (!o || Xo(e) || n?.url_allowlist && !ko(n.url_allowlist, a) || n?.url_ignorelist && ko(n.url_ignorelist, a)) return !1;
			if (n?.dom_event_allowlist) {
				let e = n.dom_event_allowlist;
				if (e && !e.some((e) => t.type === e)) return !1;
			}
			let { parentIsUsefulElement: s, targetElementList: c } = Zo(e, r);
			if (!function(e, t) {
				let n = t?.element_allowlist;
				if (P(n)) return !0;
				for (let t of e) if (n.some((e) => t.tagName.toLowerCase() === e)) return !0;
				return !1;
			}(c, n) || !Io(c, n?.css_selector_allowlist) || Io(c, n?.css_selector_ignorelist ?? Ro)) return !1;
			try {
				let n = o.getComputedStyle(e);
				if (n && n.getPropertyValue("cursor") === "pointer" && t.type === "click") return !0;
			} catch {}
			let l = e.tagName.toLowerCase();
			switch (l) {
				case "html": return !1;
				case "form": return (i || ["submit"]).indexOf(t.type) >= 0;
				case "input":
				case "select":
				case "textarea": return (i || ["change", "click"]).indexOf(t.type) >= 0;
				default: return s ? (i || ["click"]).indexOf(t.type) >= 0 : (i || ["click"]).indexOf(t.type) >= 0 && (Po.indexOf(l) > -1 || e.getAttribute("contenteditable") === "true");
			}
		}(r, e, s, o, o ? [
			"copy",
			"cut",
			"paste"
		] : void 0, { config: { get_current_url: i.getCurrentUrl } })) {
			var c;
			let { props: n, explicitNoCapture: a, target: o } = ru(r, {
				e,
				maskAllElementAttributes: i.maskAllElementAttributes,
				maskAllText: i.maskAllText,
				elementAttributeIgnoreList: i.element_attribute_ignorelist,
				elementsChainAsString: this._elementsChainAsString,
				disableCaptureUrlHashes: i.disableCaptureUrlHashes
			});
			if (a) return !1;
			let s = this.getElementSelectors(r, o);
			if (s && s.length > 0 && (n.$element_selectors = s), t === Ql) {
				let t = e.type || "clipboard";
				if (t !== "paste") {
					var l;
					let e = (l = Xl()) == null || (l = l.getSelection()) == null ? void 0 : l.toString(), t = jo(e);
					if (!t) return !1;
					n.$selected_content = t, n.$clipboard_text_length = e?.length ?? 0;
				}
				n.$copy_type = t;
			}
			if (t === "$autocapture" && e.type === "change" && i.capture_value_css_selector_allowlist && !i.maskAllText && (Y(u = r, "input") ? !A($l, u.type) : Y(u, "textarea") || Y(u, "select") && !u.multiple) && function(e, t) {
				if (!Qo(e)) return !1;
				let n = t.css_selector_ignorelist ?? Ro, r = /* @__PURE__ */ new Set(), i = e;
				for (Y(e, "select") && (i = e.options[e.selectedIndex] || e); i;) {
					let e = i, t = Ao(e);
					if (r.size >= 1e3 || r.has(i) || A(t, "ph-sensitive") || A(t, "ph-no-capture") || n.some((t) => Fo(e, t))) return !1;
					r.add(i);
					let a = i.assignedSlot || i.parentNode;
					i = Do(a) ? a.host : a && To(a) ? a : null;
				}
				return !0;
			}(r, i) && !r.querySelector(".ph-no-capture, .ph-sensitive")) {
				let e = i.capture_value_css_selector_allowlist, t = !1;
				try {
					t = M(e) ? !!e(r) : j(e) && e.some((e) => Fo(r, e));
				} catch (e) {
					eu.error("capture_value_css_selector_allowlist threw", e);
				}
				t && (n.$input_value = r.value);
			}
			return (c = this._client) == null || c.capture(t, n), !0;
		}
		var u;
	}
	isBrowserSupported() {
		return M(Zl()?.querySelectorAll);
	}
}, ou = "featureFlags", su = "logs", cu = class {
	constructor(e) {
		this._instance = e;
	}
	initialize() {}
	get(e) {
		let t = this._instance.persistence;
		if (typeof e == "string") return t?.get_property(e);
		let n = {};
		for (let r of e) {
			let e = t?.get_property(r);
			P(e) || (n[r] = e);
		}
		return n;
	}
	set(e, t) {
		var n;
		(n = this._instance.persistence) == null || n.register(typeof e == "string" ? { [e]: t } : e);
	}
	remove(e) {
		var t;
		(t = this._instance.persistence) == null || t.unregister(e);
	}
}, lu = class {
	constructor(e) {
		this.instance = e, this._logger = V, this.kv = new cu(e), this.onSession = (e) => fc(this.instance.onSessionId((t) => {
			try {
				e(t);
			} catch (e) {
				this._logger.error("Browser extension session listener failed", e);
			}
		})), this.onEvent = (e) => fc(this.instance._addCaptureHook((t, n) => {
			if (n) try {
				e({
					event: t,
					properties: n.properties
				});
			} catch (e) {
				this._logger.error("Browser extension event listener failed", e);
			}
		})), this.onRemoteConfig = (e) => {
			let t = (t) => {
				try {
					e(t);
				} catch (e) {
					this._logger.error("Browser extension remote config listener failed", e);
				}
			}, n = this.instance._internalEventEmitter.on("extensionsRemoteConfig", t);
			return this.instance._lastRemoteConfig && t(this.instance._lastRemoteConfig), fc(n);
		};
	}
	get logger() {
		return this._logger;
	}
	get distinctId() {
		return this.instance.get_distinct_id();
	}
	get anonymousId() {
		return this.instance.get_property("$device_id") ?? this.distinctId;
	}
	get deviceId() {
		let e = this.instance.get_property(re);
		return typeof e == "string" ? e : void 0;
	}
	get library() {
		return {
			name: r.LIB_NAME,
			version: r.LIB_VERSION
		};
	}
	get initialPersonProperties() {
		return this.instance.persistence?.get_initial_props() ?? {};
	}
	get groups() {
		return this.instance.getGroups();
	}
	get session() {
		try {
			let e = this.instance.sessionManager?.checkAndGetSessionAndWindowId(!0);
			return {
				sessionId: e?.sessionId ?? "",
				windowId: e?.windowId ?? "",
				sessionStartTimestamp: e?.sessionStartTimestamp ?? 0,
				lastActivityTimestamp: e?.lastActivityTimestamp ?? 0
			};
		} catch {
			return {
				sessionId: "",
				windowId: "",
				sessionStartTimestamp: 0,
				lastActivityTimestamp: 0
			};
		}
	}
	get isOptedOut() {
		return this.instance.has_opted_out_capturing();
	}
	get canCapture() {
		return M(this.instance.is_capturing) ? this.instance.is_capturing() : !this.isOptedOut;
	}
	get projectToken() {
		return this.instance.config.token;
	}
	getExtension(e) {
		let t;
		switch (e) {
			case ou:
			case "featureFlagsCommon":
				t = this.instance.featureFlags;
				break;
			case su:
				t = this.instance.logs;
				break;
			case "surveys":
				t = this.instance.surveys;
				break;
			case iu: t = this.instance.autocapture;
		}
		return t;
	}
	capture(e, t, n) {
		if (!n) return void this.instance.capture(e, t);
		let r = B({
			timestamp: n.timestamp,
			uuid: n.uuid,
			$set: n.set,
			$set_once: n.setOnce
		}, n.delivery === "unload" ? {
			transport: "sendBeacon",
			send_instantly: !0
		} : {});
		this.instance.capture(e, t, r);
	}
	registerDynamicEventProperties(e) {
		return fc(this.instance._registerExtensionEventProperties(e));
	}
	sendRequest(e) {
		var t = this;
		return z(function* (e, n = {}) {
			let r = n.target ?? "api", i = n.query ? rl(e, n.query) : e, a = t.instance.requestRouter.endpointFor(r, i), o = {
				method: n.method,
				url: a,
				data: n.body,
				headers: n.headers,
				timeout: n.timeoutMs,
				fireCallbackOnDrop: !0,
				transport: n.transport,
				compression: n.compression,
				compressionFallback: n.target === "flags" && n.compression === "best-available" ? Dt.Base64 : void 0,
				timestampMode: n.sentAt
			};
			return r === "api" && e === "/i/v1/logs" && (o.batchKey = "logs"), n.transport === "sendBeacon" ? (t.instance._send_request(o), { statusCode: 202 }) : new Promise((e) => {
				o.callback = e, t.instance._send_request(o);
			});
		}).apply(this, arguments);
	}
}, uu = {}, du = 0, fu = () => {}, pu = "Consent opt in/out is not valid with cookieless_mode=\"always\" and will be ignored", mu = "Surveys module not available", hu = "sanitize_properties is deprecated. Use before_send instead", gu = "Invalid value for property_denylist config: ", _u = [
	"$recording_status",
	"$sdk_debug_recording_script_not_loaded",
	"$sdk_debug_replay_url_trigger_status",
	"$sdk_debug_replay_event_trigger_status",
	"$sdk_debug_replay_linked_flag_trigger_status",
	"$sdk_debug_replay_rrweb_error",
	"$sdk_debug_replay_internal_buffer_length",
	"$sdk_debug_replay_flushed_size"
], vu = [
	"$feature_flag_called",
	"$$heatmap",
	"$snapshot"
], yu = (e) => e.charAt(0) === "$" && !A(vu, e), bu = /^[A-Za-z0-9_-]{1,400}$/, xu = /^fb\.[0-9]+\.[0-9]+\.[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)?$/, Su = /^fb\.[0-9]+\.[0-9]+\.[0-9]+$/, Cu = [
	"token",
	"distinct_id",
	Ze
], wu = "posthog", Tu = [...Ol].sort()[Ol.length - 1], Eu = (e) => {
	let t = {};
	return e && e !== "unset" && ("2025-11-30" > e || (t.strictMinimumDuration = !0), "2026-05-30" > e || (t.canvasCapture = { resolutionScale: .6 }), "2026-06-25" > e || (t.streamNetworkBody = !0), "2026-08-30" > e || (t.captureJsonLd = !0)), t;
}, Du = (e) => {
	var t;
	return B({
		api_host: "https://us.i.posthog.com",
		flags_api_host: null,
		ui_host: null,
		asset_host: null,
		token: "",
		autocapture: !0,
		cross_subdomain_cookie: qa(D?.location),
		persistence: "localStorage+cookie",
		persistence_name: "",
		cookie_persisted_properties: [],
		loaded: fu,
		save_campaign_params: !0,
		custom_campaign_params: [],
		custom_blocked_useragents: [],
		save_referrer: !0,
		capture_pageleave: "if_capture_pageview",
		defaults: e ?? "unset",
		__preview_deferred_init_extensions: !1,
		__preview_replay_sync_fetch: !0,
		__preview_external_dependency_versioned_paths: !1,
		__preview_cookie_wins_on_conflict: !1,
		debug: O && F(O?.search) && O.search.indexOf("__posthog_debug=true") !== -1 || !1,
		cookie_expiration: 365,
		upgrade: !1,
		disable_session_recording: !1,
		disable_persistence: !1,
		disable_web_experiments: !0,
		disable_surveys: !1,
		disable_surveys_automatic_display: !1,
		disable_conversations: !1,
		disable_product_tours: !1,
		disableDeviceModel: !1,
		reuseAnonymousId: !1,
		disable_external_dependency_loading: !1,
		strict_script_versioning: "fallback",
		enable_recording_console_log: void 0,
		secure_cookie: (E == null || (t = E.location) == null ? void 0 : t.protocol) === "https:",
		ip: !1,
		opt_out_capturing_by_default: !1,
		opt_out_persistence_by_default: !1,
		opt_out_useragent_filter: !1,
		opt_out_capturing_persistence_type: "localStorage",
		consent_persistence_name: null,
		opt_out_capturing_cookie_prefix: null,
		opt_in_site_apps: !1,
		property_denylist: [],
		respect_dnt: !1,
		sanitize_properties: null,
		request_headers: {},
		request_batching: !0,
		properties_string_max_length: 65535,
		mask_all_element_attributes: !1,
		mask_all_text: !1,
		mask_personal_data_properties: !1,
		custom_personal_data_properties: [],
		advanced_disable_flags: !1,
		advanced_disable_decide: !1,
		advanced_disable_feature_flags: !1,
		advanced_disable_feature_flags_on_first_load: !1,
		advanced_only_evaluate_survey_feature_flags: !1,
		advanced_feature_flags_dedup_per_session: !1,
		advanced_enable_surveys: !1,
		advanced_disable_toolbar_metrics: !1,
		feature_flag_request_timeout_ms: 3e3,
		feature_flag_request_max_retries: 1,
		surveys_request_timeout_ms: 1e4,
		on_request_error(e) {
			V.error("Bad HTTP status: " + e.statusCode + " " + e.text);
		},
		get_device_id: (e) => e,
		capture_performance: void 0,
		name: "posthog",
		bootstrap: {},
		disable_compression: !1,
		session_idle_timeout_seconds: 1800,
		person_profiles: ft,
		before_send: void 0,
		get_current_url: void 0,
		request_queue_config: { flush_interval_ms: 3e3 },
		error_tracking: {},
		_onCapture: fu
	}, ((e) => ({
		rageclick: e && e >= "2026-05-30" ? {
			content_ignorelist: Bo,
			ignore_text_selection: !0
		} : !e || "2025-11-30" > e || { content_ignorelist: !0 },
		capture_pageview: !e || "2025-05-24" > e || "history_change",
		session_recording: Eu(e),
		external_scripts_inject_target: e && e >= "2026-01-30" ? "head" : "body",
		internal_or_test_user_hostname: e && e >= "2026-01-30" ? /^(localhost|127\.0\.0\.1)$/ : void 0,
		persistence_save_debounce_ms: e && e >= "2026-05-30" ? 250 : 0,
		split_storage: !(!e || "2026-05-30" > e),
		detect_google_search_app: !(!e || "2026-05-30" > e),
		disable_capture_url_hashes: !(!e || "2026-06-25" > e),
		cookieWinsOnConflict: !(!e || e === "unset" || "2026-08-29" > e)
	}))(e));
}, Ou = [
	["process_person", "person_profiles"],
	["xhr_headers", "request_headers"],
	["cookie_name", "persistence_name"],
	["disable_cookie", "disable_persistence"],
	["__preview_disable_beacon", "disable_beacon"],
	["store_google", "save_campaign_params"],
	["verbose", "debug"],
	["__preview_cookie_wins_on_conflict", "cookieWinsOnConflict"]
], ku = (e) => {
	let t = {};
	for (let [n, r] of Ou) P(e[n]) || (t[r] = e[n]);
	let n = W({}, t, e), r = e.__preview_external_dependency_versioned_paths;
	return P(r) || (P(e.strict_script_versioning) && (n.strict_script_versioning = !!r), F(r) && P(e.asset_host) && (n.asset_host = r)), j(e.property_blacklist) && (P(e.property_denylist) ? n.property_denylist = e.property_blacklist : j(e.property_denylist) ? n.property_denylist = [...e.property_blacklist, ...e.property_denylist] : V.error(gu + e.property_denylist)), n;
}, Au = class {
	constructor() {
		this.__forceAllowLocalhost = !1;
	}
	get _forceAllowLocalhost() {
		return this.__forceAllowLocalhost;
	}
	set _forceAllowLocalhost(e) {
		V.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = e;
	}
}, ju = class e {
	_removeExtension(e) {
		if (!e) return;
		let t = this._extensions.indexOf(e);
		t !== -1 && this._extensions.splice(t, 1);
	}
	_replaceExtension(e, t) {
		var n;
		return this._removeExtension(e), this._extensions.push(t), (n = t.initialize) == null || n.call(t), t;
	}
	_inCookielessMode() {
		return this.config.cookieless_mode === "always" || this.config.cookieless_mode === "on_reject" && this.consent.isRejected();
	}
	_warnIfVolatileIdentityWithoutStableId() {
		if (this._hasWarnedAboutVolatileIdentity || this.config.reuseAnonymousId || this.config.segment || this._inCookielessMode()) return;
		let e = this.config.persistence === "memory" || this.config.persistence === "sessionStorage";
		if (!e && !this.config.disable_persistence || this._hasStableInitialDistinctId) return;
		let t, n, r;
		e ? (t = `persistence is set to '${this.config.persistence}'`, n = this.config.persistence === "memory" ? "on every page load" : "for every new browser tab or window", r = "Either set persistence to 'localStorage+cookie', keep this persistence and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId.") : (t = "persistence is disabled (disable_persistence is true)", n = "on every page load", r = "Either set disable_persistence to false, keep persistence disabled and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId."), this._hasWarnedAboutVolatileIdentity = !0, console.warn("[PostHog.js]", `${t} but no bootstrap.distinctID was provided. PostHog will mint a new distinct ID ${n}, so calling identify() merges a new ID onto the person each time. A person can then pass the distinct-ID limit and its events stop appearing on person pages and the session tab. ${r}`);
	}
	_syncCookielessIdentity() {
		let e = this.persistence;
		if (!e || this._isConsentTransition) return;
		if (this._inCookielessMode()) return void (this.config.cookieless_mode === "on_reject" && this.get_distinct_id() !== "$posthog_cookieless" && (this._sync_opt_out_with_persistence(), this._enterCookielessMode()));
		if (this.get_distinct_id() !== "$posthog_cookieless") return;
		this._is_persistence_disabled() || e.load(!0);
		let t = this.get_distinct_id();
		if (!t || t === "$posthog_cookieless") {
			let t = this.config.get_device_id(no());
			this.register({
				distinct_id: t,
				$device_id: t
			}), e.set_property(Ue, ut);
		}
		this._sync_opt_out_with_persistence();
	}
	get decideEndpointWasHit() {
		var e;
		return (e = this.featureFlags?.hasLoadedFlags) != null && e;
	}
	get flagsEndpointWasHit() {
		var e;
		return (e = this.featureFlags?.hasLoadedFlags) != null && e;
	}
	constructor() {
		this._isPageUnloading = !1, this._isShutdown = !1, this.webPerformance = new Au(), this._personProcessingSetOncePropertiesSent = !1, this.version = r.LIB_VERSION, this._sessionRegisteredPropKeys = /* @__PURE__ */ new Set(), this._sessionRegisteredPropertiesStorageKey = "", this._internalEventEmitter = new wl(), this._extensions = [], this._extensionEventPropertyProducers = [], this._replayDebugPropertiesPaused = !1, this._hasStableInitialDistinctId = !1, this._hasWarnedAboutVolatileIdentity = !1, this._isConsentTransition = !1, this._calculate_event_properties = this.calculateEventProperties.bind(this), this.config = Du(), this.SentryIntegration = bs, this.sentryIntegration = (e) => function(e, t) {
			let n = ys(e, t);
			return {
				name: vs,
				processEvent: (e) => n(e)
			};
		}(this, e), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this._initialPageviewCaptured = !1, this._visibilityStateListener = null, this._initialPersonProfilesConfig = null, this._cachedPersonProperties = null, this.scrollManager = new xl(this), this.pageViewManager = new xs(this), this.rateLimiter = new gc(this), this.requestRouter = new Hl(this), this.consent = new So(this), this.externalIntegrations = new Jl(this);
		let t = e.__defaultExtensionClasses ?? {};
		this.featureFlags = t.featureFlags && new t.featureFlags(this), this.toolbar = t.toolbar && new t.toolbar(this), this.surveys = t.surveys && new t.surveys(this), this.conversations = t.conversations && new t.conversations(this), this.logs = t.logs && new t.logs(this), this.metrics = t.metrics && new t.metrics(this), this.experiments = t.experiments && new t.experiments(this), this.exceptions = t.exceptions && new t.exceptions(this), this.people = {
			set: (e, t, n) => {
				let r = F(e) ? { [e]: t } : e;
				this.setPersonProperties(r), n?.({});
			},
			set_once: (e, t, n) => {
				let r = F(e) ? { [e]: t } : e;
				this.setPersonProperties(void 0, r), n?.({});
			}
		}, this.on("eventCaptured", (e) => V.info(`send "${e?.event}"`, e));
	}
	init(t, n, r) {
		if (r && r !== wu) {
			let i = uu[r] ?? new e();
			return i._init(t, n, r), uu[r] = i, uu[wu][r] = i, i;
		}
		return this._init(t, n, r);
	}
	_init(e, t = {}, n) {
		var i;
		let a = F(e) ? e.trim() : "";
		if (!a) return V.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
		if (this.__loaded) return a === this.config?.token ? console.warn("[PostHog.js]", "You have already initialized PostHog! Re-initializing is a no-op") : console.warn("[PostHog.js]", `You have already initialized PostHog with a different project token! Re-initializing is a no-op, so events will keep going to the project this instance was initialized with. To capture into a second project, load PostHog once, then initialize a named instance after the SDK has loaded, e.g. posthog.init('${a}', { ... }, 'project2')`), this;
		this.__loaded = !0, this.config = Du(t.defaults), t.debug = this._checkLocalStorageForDebug(t.debug), this._originalUserConfig = t, this._triggered_notifs = [], t.person_profiles ? this._initialPersonProfilesConfig = t.person_profiles : t.process_person && (this._initialPersonProfilesConfig = t.process_person);
		let o = Du(t.defaults), s = ku(t), c = W({}, o, s, {
			name: n,
			token: a
		});
		N(o.rageclick) && N(s.rageclick) && (c.rageclick = W({}, o.rageclick, s.rageclick)), N(o.session_recording) && N(s.session_recording) && (c.session_recording = W({}, o.session_recording, s.session_recording)), this.set_config(c), this.config.on_xhr_error && V.error("on_xhr_error is deprecated. Use on_request_error instead"), this.compression = t.disable_compression ? void 0 : oc.GZipJS;
		let l = this._is_persistence_disabled(), u = !this._inCookielessMode();
		if (this.persistence = new ac(this.config, l, !0, u), this.sessionPersistence = this.config.persistence === "sessionStorage" || this.config.persistence === "memory" ? this.persistence : new ac(B(B({}, this.config), {}, { persistence: "sessionStorage" }), l, !1, u), this._sessionRegisteredPropertiesStorageKey = "ph_" + (this.config.persistence_name || this.config.token) + "_session_registered_properties", this.config.persistence !== "memory" && !l && J._is_supported()) {
			let e = J._parse(this._sessionRegisteredPropertiesStorageKey);
			j(e) && e.forEach((e) => {
				F(e) && this._sessionRegisteredPropKeys.add(e);
			});
		} else J._remove(this._sessionRegisteredPropertiesStorageKey);
		let d = B({}, this.persistence.props), f = B({}, this.sessionPersistence.props);
		this.register({ $initialization_time: (/* @__PURE__ */ new Date()).toISOString() }), this._requestQueue = new vl((e, t) => this._send_retriable_request(e, t), this.config.request_queue_config), this._retryQueue = new bl(this), this.__request_queue = [];
		let p = this._inCookielessMode();
		p || (this.sessionManager = new Dl(this), this.sessionPropsManager = new Cl(this, this.sessionManager, this.persistence), this.sessionManager.onSessionId((e, t, n) => {
			(n != null && n.activityTimeout || n != null && n.sessionPastMaximumLength || n != null && n.crossTabAdoption) && this._clearSessionRegisteredProps();
		})), this._enrollFeatureFlags(), this.config.__preview_deferred_init_extensions ? (V.info("Deferring extension initialization to improve startup performance"), this._extensionInitTimeout = setTimeout(() => {
			this._extensionInitTimeout = void 0, this._initExtensions(p);
		}, 0)) : (V.info("Initializing extensions synchronously"), this._initExtensions(p)), r.DEBUG = r.DEBUG || this.config.debug, r.DEBUG && V.info("Starting in debug mode", {
			this: this,
			config: t,
			thisC: B({}, this.config),
			p: d,
			s: f
		}), this.config.identity_distinct_id && !((i = t.bootstrap) != null && i.distinctID) && (t.bootstrap = B(B({}, t.bootstrap), {}, {
			distinctID: this.config.identity_distinct_id,
			isIdentifiedID: !0
		}));
		let m = t.bootstrap?.distinctID;
		if (this._hasStableInitialDistinctId = !!m && !Lt(m), t.bootstrap?.distinctID) {
			let e = t.bootstrap.distinctID, n = this.get_distinct_id(), r = this.persistence.get_property(Ue);
			if (t.bootstrap.isIdentifiedID && n != null && n !== e && r === "anonymous") this.identify(e);
			else if (t.bootstrap.isIdentifiedID && n != null && n !== e && r === "identified") V.warn("Bootstrap distinctID differs from an already-identified user. The existing identity is preserved. Call reset() before reinitializing if you intend to switch users.");
			else {
				let n = this.config.get_device_id(no()), r = t.bootstrap.isIdentifiedID ? n : e;
				this.persistence.set_property(Ue, t.bootstrap.isIdentifiedID ? dt : ut), this.register({
					distinct_id: e,
					$device_id: r
				});
			}
		}
		if (p) this.register_once({
			distinct_id: Xe,
			$device_id: null
		}, "");
		else if (!this.get_distinct_id()) {
			let e = this.config.get_device_id(no());
			this.register_once({
				distinct_id: e,
				$device_id: e
			}, ""), this.persistence.set_property(Ue, ut);
		}
		return G(E, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), { passive: !1 }), G(E, "pageshow", (e) => {
			if (this._isPageUnloading = !1, !this._isShutdown) {
				var t;
				if (e.persisted && this.persistence) {
					let e = this.persistence.get_property(T), t = this.persistence.get_property(Ue);
					this.persistence.load(), this._processCookieIdentityChange() || e === this.persistence.get_property("distinct_id") && t === this.persistence.get_property("$user_state") || this._processIdentityChange();
				}
				(t = this._retryQueue) == null || t.resume();
			}
		}), t.segment ? _s(this, () => this._loaded()) : this._loaded(), M(this.config._onCapture) && this.config._onCapture !== fu && (V.warn("onCapture is deprecated. Please use `before_send` instead"), this.on("eventCaptured", (e) => this.config._onCapture(e.event, e))), this.config.ip && V.warn("The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or \"Discard IP data\" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information."), this.config.disableDeviceModel || function() {
			return Al.apply(this, arguments);
		}().then((e) => {
			e && this.register({ [ie]: e });
		}).catch(fu), this;
	}
	_isSharedExtension(e) {
		let t = e;
		return F(t.name) && M(t.setup);
	}
	_enrollExtension(e, t) {
		var n = this;
		this._isSharedExtension(e) ? t.push(z(function* () {
			try {
				yield e.setup(n._getBrowserClientAdapter());
			} catch (t) {
				V.error(`Failed to set up extension "${e.name}"`, t);
				try {
					yield e.dispose?.call(e);
				} catch (t) {
					V.error(`Failed to dispose extension "${e.name}"`, t);
				}
			}
		})) : this._extensions.push(e);
	}
	_enrollFeatureFlags() {
		var t = this;
		let n = this.config.__extensionClasses?.featureFlags ?? e.__defaultExtensionClasses?.featureFlags;
		var r, i, a;
		if (n) {
			if (this.featureFlags && this.featureFlags instanceof n || ((r = this._featureFlagsReloadingUnsubscribe) == null || r.call(this), this._featureFlagsReloadingUnsubscribe = void 0, this.featureFlags = new n(this)), M(this.featureFlags.onReloading) && M(this.featureFlags.setup)) {
				if (!this._featureFlagsReloadingUnsubscribe) {
					this._featureFlagsReloadingUnsubscribe = this.featureFlags.onReloading(() => {
						this._internalEventEmitter.emit("featureFlagsReloading", !0);
					});
					let e = this.featureFlags;
					z(function* () {
						try {
							yield e.setup(t._getBrowserClientAdapter());
						} catch (n) {
							V.error("Failed to set up feature flags", n);
							let r = t._featureFlagsReloadingUnsubscribe;
							t._featureFlagsReloadingUnsubscribe = void 0;
							try {
								r?.();
							} catch (e) {
								V.error("Failed to unsubscribe feature flag reloading", e);
							}
							try {
								yield e.dispose();
							} catch (e) {
								V.error("Failed to dispose feature flags", e);
							}
						}
					})();
				}
			} else (i = (a = this.featureFlags).initialize) == null || i.call(a);
		}
	}
	_initExtensions(t) {
		let n = performance.now(), r = B(B({}, e.__defaultExtensionClasses), this.config.__extensionClasses), i = [];
		r.exceptions && this._extensions.push(this.exceptions = this.exceptions ?? new r.exceptions(this)), r.historyAutocapture && this._extensions.push(this.historyAutocapture = new r.historyAutocapture(this)), r.tracingHeaders && this._extensions.push(this.tracingHeaders = new r.tracingHeaders(this)), r.siteApps && this._extensions.push(this.siteApps = new r.siteApps(this)), r.sessionRecording && !t && this._extensions.push(this.sessionRecording = new r.sessionRecording(this)), this.config.disable_scroll_properties || i.push(() => {
			this.scrollManager.startMeasuringScrollPosition();
		}), r.autocapture && this._enrollExtension(this.autocapture = new r.autocapture(this), i), r.surveys && this._enrollExtension(this.surveys = this.surveys ?? new r.surveys(this), i), r.logs && this._enrollExtension(this.logs = this.logs ?? new r.logs(this), i), r.metrics && this._extensions.push(this.metrics = this.metrics ?? new r.metrics(this)), r.conversations && this._extensions.push(this.conversations = this.conversations ?? new r.conversations(this)), r.productTours && this._extensions.push(this.productTours = new r.productTours(this)), r.heatmaps && this._extensions.push(this.heatmaps = new r.heatmaps(this)), r.webVitalsAutocapture && this._extensions.push(this.webVitalsAutocapture = new r.webVitalsAutocapture(this)), r.exceptionObserver && this._extensions.push(this.exceptionObserver = new r.exceptionObserver(this)), r.deadClicksAutocapture && this._extensions.push(this.deadClicksAutocapture = new r.deadClicksAutocapture(this, ms)), r.toolbar && this._extensions.push(this.toolbar = this.toolbar ?? new r.toolbar(this)), r.experiments && this._extensions.push(this.experiments = this.experiments ?? new r.experiments(this)), r.webMCP && this._extensions.push(this.webMCP = this.webMCP ?? new r.webMCP(this)), this._extensions.forEach((e) => {
			e.initialize && i.push(() => {
				var t;
				(t = e.initialize) == null || t.call(e);
			});
		}), i.push(() => {
			if (this._pendingRemoteConfig) {
				let e = this._pendingRemoteConfig;
				this._pendingRemoteConfig = void 0, this._extensions.forEach((t) => t.onRemoteConfig?.call(t, e));
			}
		}), this._processInitTaskQueue(i, n);
	}
	_processInitTaskQueue(e, t) {
		for (; e.length > 0;) {
			if (this.config.__preview_deferred_init_extensions && performance.now() - t >= 30 && e.length > 0) return void (this._extensionInitTimeout = setTimeout(() => {
				this._extensionInitTimeout = void 0, this._processInitTaskQueue(e, t);
			}, 0));
			let n = e.shift();
			if (n) try {
				n();
			} catch (e) {
				V.error("Error initializing extension:", e);
			}
		}
		let n = Math.round(performance.now() - t);
		this.register_for_session({
			[Qe]: this.config.__preview_deferred_init_extensions ? "deferred" : "synchronous",
			[$e]: n
		}), this.config.__preview_deferred_init_extensions && V.info(`PostHog extensions initialized (${n}ms)`);
	}
	_onRemoteConfig(e) {
		if (!D || !D.body) return V.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout(() => {
			this._onRemoteConfig(e);
		}, 500);
		if (this.config.__preview_deferred_init_extensions && (this._pendingRemoteConfig = e), this._lastRemoteConfig = e, this.compression = void 0, e.ok) {
			var t;
			let n = e.config;
			n.supportedCompression && !this.config.disable_compression && (this.compression = A(n.supportedCompression, oc.GZipJS) ? oc.GZipJS : A(n.supportedCompression, oc.Base64) ? oc.Base64 : void 0), (t = n.analytics) != null && t.endpoint && (this.analyticsDefaultEndpoint = n.analytics.endpoint);
		}
		this.set_config({ person_profiles: this._initialPersonProfilesConfig ? this._initialPersonProfilesConfig : ft }), this._internalEventEmitter.emit("extensionsRemoteConfig", e), this._extensions.forEach((t) => t.onRemoteConfig?.call(t, e));
	}
	_loaded() {
		try {
			this.config.loaded(this);
		} catch (e) {
			V.critical("`loaded` function failed", e);
		}
		if (this._start_queue_if_opted_in(), this.config.internal_or_test_user_hostname && O?.hostname) {
			let e = O.hostname, t = this.config.internal_or_test_user_hostname;
			(typeof t == "string" ? e === t : t.test(e)) && this.setInternalOrTestUser();
		}
		this.config.capture_pageview && setTimeout(() => {
			(this.consent.isOptedIn() || this._inCookielessMode()) && this._captureInitialPageview();
		}, 1), this._remoteConfigLoader = new vc(this), this._remoteConfigLoader.load();
	}
	_start_queue_if_opted_in() {
		var e;
		this.is_capturing() && this.config.request_batching && ((e = this._requestQueue) == null || e.enable());
	}
	_dom_loaded() {
		this.is_capturing() && Va(this.__request_queue, (e) => this._send_retriable_request(e)), this.__request_queue = [], this._start_queue_if_opted_in();
	}
	_handle_unload() {
		var e, t, n, r, i, a;
		this._isPageUnloading = !0, (e = this.surveys) == null || (t = e.handlePageUnload) == null || t.call(e), (n = this.metrics) == null || n.flush("sendBeacon"), this.config.request_batching ? (this._shouldCapturePageleave() && this.capture(ht), (r = this.logs) == null || r.flushLogs("sendBeacon"), (i = this._requestQueue) == null || i.unload(), (a = this._retryQueue) == null || a.unload()) : this._shouldCapturePageleave() && this.capture(ht, null, { transport: "sendBeacon" });
	}
	_send_request(e) {
		_l(this, e);
	}
	_send_retriable_request(e, t) {
		this._retryQueue ? this._retryQueue.retriableRequest(e, t) : this._send_request(t ? B(B({}, e), {}, { transport: t }) : e);
	}
	_execute_array(e) {
		du++;
		try {
			let t, n = [], r = [], i = [];
			Va(e, (e) => {
				if (e) {
					if (t = e[0], j(t)) i.push(e);
					else if (M(e)) try {
						e.call(this);
					} catch (t) {
						V.error("Error executing queued PostHog call", e, t);
					}
					else j(e) && t === "alias" ? n.push(e) : j(e) && t.indexOf("capture") !== -1 && M(this[t]) ? i.push(e) : r.push(e);
				}
			});
			let a = function(e, t) {
				Va(e, function(e) {
					try {
						if (j(e[0])) {
							let n = t;
							U(e, function(e) {
								n = n[e[0]].apply(n, e.slice(1));
							});
						} else t[e[0]].apply(t, e.slice(1));
					} catch (t) {
						V.error("Error executing queued PostHog call", e, t);
					}
				});
			};
			a(n, this), a(r, this), a(i, this);
		} finally {
			du--;
		}
	}
	push(t) {
		if (du > 0 && j(t) && F(t[0])) {
			let n = e.prototype[t[0]];
			M(n) && n.apply(this, t.slice(1));
		} else this._execute_array([t]);
	}
	get _facebookClickIdChannel() {
		return {
			property: se,
			persistenceKey: ce,
			cookieName: "_fbc",
			pattern: xu,
			register: (e, t) => this.persistence?.register({ [ce]: {
				value: e,
				delivered: t
			} }),
			unregister: () => this.persistence?.unregister(ce)
		};
	}
	get _facebookBrowserIdChannel() {
		return {
			property: le,
			persistenceKey: ue,
			cookieName: "_fbp",
			pattern: Su,
			register: (e, t) => this.persistence?.register({ [ue]: {
				value: e,
				delivered: t
			} }),
			unregister: () => this.persistence?.unregister(ue)
		};
	}
	_getPersistedMetaIdentifier(e) {
		let t = this.persistence?.get_property(e.persistenceKey);
		return F(t) && e.pattern.test(t) ? {
			value: t,
			delivered: !1
		} : N(t) && F(t.value) && e.pattern.test(t.value) ? {
			value: t.value,
			delivered: !0 === t.delivered
		} : void 0;
	}
	_storeMetaIdentifier(e, t, n) {
		return t === n?.value ? {
			value: t,
			pending: !n.delivered
		} : (e.register(t, !1), {
			value: t,
			pending: !0
		});
	}
	_readMetaCookie(e) {
		if (!this.config.save_campaign_params || this._inCookielessMode()) return;
		let t = Ya(e.cookieName);
		return F(t) && e.pattern.test(t) ? t : void 0;
	}
	_updateFacebookClickId(e, t, n, r) {
		if (!this.persistence) return;
		let i = this._facebookClickIdChannel;
		this.persistence.refreshMetaIdentifiers();
		let a = this._getPersistedMetaIdentifier(i);
		if (r) return void i.unregister();
		if (n) return F(t) && xu.test(t) ? this._storeMetaIdentifier(i, t, a) : void i.unregister();
		let o = F(e) && bu.test(e) ? e : void 0, s = this._readMetaCookie(i);
		return s && ((e, t, n) => {
			let r = e.split(".");
			if (t) return r[3] === t;
			if (!n) return !0;
			let i = n.value.split(".");
			return r[3] === i[3] || Number(r[2]) > Number(i[2]);
		})(s, o, a) ? this._storeMetaIdentifier(i, s, a) : o ? a?.value.split(".")[3] === o ? {
			value: a.value,
			pending: !a.delivered
		} : this._storeMetaIdentifier(i, `fb.1.${Date.now()}.${o}`, a) : a ? {
			value: a.value,
			pending: !a.delivered
		} : void 0;
	}
	_updateFacebookBrowserId(e, t, n) {
		if (!this.persistence) return;
		let r = this._facebookBrowserIdChannel;
		this.persistence.refreshMetaIdentifiers();
		let i = this._getPersistedMetaIdentifier(r);
		if (n) return void r.unregister();
		if (t) return F(e) && Su.test(e) ? this._storeMetaIdentifier(r, e, i) : void r.unregister();
		let a = this._readMetaCookie(r);
		return a ? this._storeMetaIdentifier(r, a, i) : i ? {
			value: i.value,
			pending: !i.delivered
		} : void 0;
	}
	_markMetaIdentifierDelivered(e, t) {
		if (!this.persistence) return;
		this.persistence.refreshMetaIdentifiers();
		let n = this._getPersistedMetaIdentifier(e);
		n?.value !== t || n.delivered || e.register(t, !0);
	}
	capture(e, t, n) {
		if (!(this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue)) return void V.uninitializedWarning("posthog.capture");
		if (!this.is_capturing()) return void V.info(`Event "${e}" was not captured because capturing is disabled (opted out or consent pending).`);
		if (P(e) || !F(e)) return void V.error("No event name provided to posthog.capture");
		if (this._syncCookielessIdentity(), e === "$snapshot" && this._inCookielessMode()) return;
		let r = !this.config.opt_out_useragent_filter && this._is_bot();
		if (r && !this.config.__preview_capture_bot_pageviews) return void V.info(`Event "${e}" was not captured because the user agent looks like a bot. Set \`opt_out_useragent_filter: true\` to capture it.`);
		let i = n?.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
		if (i?.isRateLimited) return void V.critical("This capture call is ignored due to client rate limiting.");
		let a;
		t != null && t.$current_url && !F(t?.$current_url) && (V.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."), t == null || delete t.$current_url), e !== "$exception" || n != null && n._originatedFromCaptureException || V.warn("Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically."), this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && (a = this.sessionPersistence.update_campaign_params()), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
		let o = /* @__PURE__ */ new Date(), s = n?.timestamp || o, c = pr(n?.uuid, no), l = {
			uuid: c,
			event: e,
			properties: this.calculateEventProperties(e, t || {}, s, c)
		};
		e === "$pageview" && this.config.__preview_capture_bot_pageviews && r && (l.event = "$bot_pageview", l.properties.$browser_type = "bot"), i && (l.properties.$lib_rate_limit_remaining_tokens = i.remainingTokens);
		let u = e === "$feature_flag_called" && !1 === l.properties.$feature_flag_has_experiment && !0 === this.get_property("$minimal_flag_called_events");
		n != null && n.$set && !u && (l.$set = n?.$set);
		let d = N(t?.$set) ? t.$set : void 0, f = j(t?.$unset) ? t.$unset : [], p = n?.$unset || [], m = (e) => {
			var t;
			let r = !!n?.$set && e in n.$set;
			return {
				hasProvided: r || !!d && e in d,
				provided: r ? n == null || (t = n.$set) == null ? void 0 : t[e] : d?.[e],
				unset: f.indexOf(e) !== -1 || p.indexOf(e) !== -1
			};
		}, h = m(se), g = m(le), _ = [{
			channel: this._facebookClickIdChannel,
			hasProvided: h.hasProvided,
			update: this._updateFacebookClickId(a?.fbclid, h.provided, h.hasProvided, h.unset)
		}, {
			channel: this._facebookBrowserIdChannel,
			hasProvided: g.hasProvided,
			update: this._updateFacebookBrowserId(g.provided, g.hasProvided, g.unset)
		}];
		for (let { channel: e, hasProvided: t, update: n } of _) n && !0 === l.properties.$process_person_profile && n.pending && !t && !u && (l.$set = B({ [e.property]: n.value }, l.$set));
		let v = n?.$unset;
		v && (l.$unset = v);
		let y = u ? void 0 : this._calculate_set_once_properties(n?.$set_once, e !== _t, e === gt);
		if (y && (l.$set_once = y), n != null && n._noTruncate || (b = this.config.properties_string_max_length, l = function(e, t) {
			let n = /* @__PURE__ */ new Set();
			return function e(r, i) {
				if (r !== Object(r)) return t ? t(r) : r;
				if (n.has(r)) return;
				let a;
				if (n.add(r), j(r)) a = [], Va(r, (t) => {
					a.push(e(t));
				});
				else {
					let t = {};
					U(Wt(r) ? Ga(r) : r, (r, i) => {
						n.has(r) || (t[i] = e(r, i));
					}), a = t;
				}
				return a;
			}(e);
		}(l, (e) => F(e) ? e.slice(0, b) : e)), l.timestamp = s, P(n?.timestamp) || (l.properties.$event_time_override_provided = !0, l.properties.$event_time_override_system_time = o), u && (l.properties = ((e, t = []) => {
			let n = {}, r = (t) => {
				e[t] !== void 0 && (n[t] = e[t]);
			};
			return _i.forEach(r), t.forEach(r), n;
		})(l.properties, Cu)), e === lc.DISMISSED || e === lc.SENT) {
			let n = t?.[uc.SURVEY_ID], r = t?.[uc.SURVEY_ITERATION];
			Ul({
				id: n,
				current_iteration: r
			}), l.$set = B(B({}, l.$set), {}, { [jl({
				id: n,
				current_iteration: r
			}, e === lc.SENT ? "responded" : "dismissed")]: !0 });
		} else e === lc.SHOWN && (l.$set = B(B({}, l.$set), {}, { [uc.SURVEY_LAST_SEEN_DATE]: (/* @__PURE__ */ new Date()).toISOString() }));
		var b;
		if (e === pc.SHOWN) {
			let e = t?.[mc.TOUR_TYPE];
			e && (l.$set = B(B({}, l.$set), {}, { [`${mc.TOUR_LAST_SEEN_DATE}/${e}`]: (/* @__PURE__ */ new Date()).toISOString() }));
		}
		let x = B(B({}, l.properties.$set), l.$set);
		if (It(x) || this.setPersonPropertiesForFlags(x), !L(this.config.before_send)) {
			let e = this._runBeforeSend(l);
			if (!e) return;
			l = e, l.uuid = pr(l.uuid, no);
		}
		this.sessionRecording && !this._replayDebugPropertiesPaused && yu(e) && (this._replayDebugPropertiesPaused = !0, setTimeout(() => this._replayDebugPropertiesPaused = !1, 3e4));
		let S = _.filter(({ channel: e, update: t }) => {
			let n = l.$set?.[e.property] ?? (N(l.properties?.$set) ? l.properties.$set[e.property] : void 0);
			return t?.pending && n === t.value;
		});
		this._internalEventEmitter.emit("eventCaptured", l);
		let C = n?._url ?? this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint), w = n?._batchKey === "recordings" || /\/s\/(?:\?|$)/.test(C), ee = B(B(B({
			method: "POST",
			url: C,
			data: l,
			compression: "best-available",
			preferSyncCompression: n?.send_instantly,
			timestampMode: w ? "body" : "capture-body",
			batchKey: n?._batchKey
		}, w && l.properties?.$session_id ? { batchGroup: l.properties.$session_id + (l.properties.$window_id ? `-${l.properties.$window_id}` : "") } : {}), n?.transport ? { transport: n.transport } : {}), S.length ? {
			fireCallbackOnDrop: !0,
			callback: (e) => {
				if (e.statusCode >= 200 && 300 > e.statusCode) for (let { channel: e, update: t } of S) this._markMetaIdentifierDelivered(e, t.value);
			}
		} : {});
		if (!this.config.request_batching || n && !n?._batchKey || n?.send_instantly) {
			let e;
			!ee.transport && !ee.callback && It(this.config.request_headers ?? {}) && this._isPageUnloading && (e = "sendBeacon"), this._send_retriable_request(ee, e);
		} else this._requestQueue.enqueue(ee);
		return l;
	}
	_addCaptureHook(e) {
		return this.on("eventCaptured", (t) => e(t.event, t));
	}
	getExtension(e) {
		return this._browserClientAdapter?.getExtension(e);
	}
	_getBrowserClientAdapter() {
		return this._browserClientAdapter ??= new lu(this);
	}
	_registerExtensionEventProperties(e) {
		this._extensionEventPropertyProducers.push(e);
		let t = !0;
		return () => {
			if (!t) return;
			t = !1;
			let n = this._extensionEventPropertyProducers.indexOf(e);
			n !== -1 && this._extensionEventPropertyProducers.splice(n, 1);
		};
	}
	_processCookieIdentityChange(e = !0) {
		return !!this.persistence?.consumeCookieIdentityChange() && (this._processIdentityChange(e), !0);
	}
	_processIdentityChange(e = !0) {
		var t, n;
		this._cachedPersonProperties = null, this.persistence?.get_property("$user_state") === "anonymous" && ((n = this.sessionPersistence) == null || n.clear(), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys()), (t = this.featureFlags) == null || t.reset(), e && this.reloadFeatureFlags();
	}
	calculateEventProperties(e, t, r, i, a) {
		if (r ||= /* @__PURE__ */ new Date(), !this.persistence || !this.sessionPersistence) return t;
		this._syncCookielessIdentity(), this.persistence.syncCookieProperties(), this._processCookieIdentityChange();
		let o = a ? void 0 : this.persistence.remove_event_timer(e), s = B({}, t);
		if (s.token = this.config.token, s.$config_defaults = this.config.defaults === "latest" ? Tu : this.config.defaults, this._inCookielessMode() && (s[Ze] = !0), e === "$snapshot") {
			let e = B(B({}, this.persistence.properties()), this.sessionPersistence.properties());
			return s.distinct_id = e.distinct_id, (!F(s.distinct_id) && !R(s.distinct_id) || Lt(s.distinct_id)) && V.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), s;
		}
		let c = function(e, t, r, i = !1) {
			var a, o, s;
			if (!wt) return {};
			let c = e ? [...Ps, ...t || []] : [], [l, u] = tr(wt), [d, f] = function(e) {
				for (let t = 0; ar.length > t; t++) {
					let [n, r, i] = ar[t], a = e.match(n);
					if (a) return [r, (i && e.match(i) || a)?.[1] || ""];
				}
				return ["", ""];
			}(wt), p = function() {
				return ("u" > typeof navigator ? navigator : void 0)?.brave ? { brave: !0 } : {};
			}(), m = {};
			P(r) || (m.detectGoogleSearchApp = r);
			let h = {}, g = (a = navigator) == null || (a = a.userAgentData) == null ? void 0 : a.platform, _ = navigator?.maxTouchPoints, v = E == null || (o = E.screen) == null ? void 0 : o.width, y = E == null || (s = E.screen) == null ? void 0 : s.height, b = E?.devicePixelRatio;
			P(g) || (h.userAgentDataPlatform = g), P(_) || (h.maxTouchPoints = _), P(v) || (h.screenWidth = v), P(y) || (h.screenHeight = y), P(b) || (h.devicePixelRatio = b);
			let x = W(Wa({
				$os: l,
				$os_version: u,
				$browser: Zn(wt, navigator.vendor, p, m),
				$webview_app: d,
				$webview_app_version: f,
				$device: nr(wt),
				$device_type: rr(wt, h),
				$timezone: Ts(),
				$timezone_offset: qs()
			}), {
				$current_url: Ms(i ? hr(O?.href) : O?.href, c, Is),
				$host: O?.host,
				$pathname: O?.pathname,
				$raw_user_agent: wt.length > 1e3 ? wt.substring(0, 997) + "..." : wt,
				$browser_version: $n(wt, navigator.vendor, p, m),
				$browser_language: Vs(),
				$browser_language_prefix: Hs(),
				$screen_height: E?.screen.height,
				$screen_width: E?.screen.width,
				$viewport_height: E?.innerHeight,
				$viewport_width: E?.innerWidth,
				$lib: n.LIB_NAME,
				$lib_version: n.LIB_VERSION,
				$insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
				$time: Date.now() / 1e3
			});
			return n.SDK_DIST_CHANNEL && (x.$sdk_dist_channel = n.SDK_DIST_CHANNEL), x;
		}(this.config.mask_personal_data_properties, this.config.custom_personal_data_properties, this.config.detect_google_search_app, this.config.disable_capture_url_hashes);
		if (this.sessionManager) {
			let { sessionId: e, windowId: t } = this.sessionManager.checkAndGetSessionAndWindowId(a, r.getTime(), !0);
			s.$session_id = e, s.$window_id = t;
		}
		this.sessionPropsManager && W(s, this.sessionPropsManager.getSessionProps());
		try {
			if (this.sessionRecording) {
				let t = this.sessionRecording.sdkDebugProperties, n = !this._replayDebugPropertiesPaused && yu(e);
				for (let e in t) (n || A(_u, e)) && (s[e] = t[e]);
			}
			s.$sdk_debug_retry_queue_size = this._retryQueue?.length;
		} catch (e) {
			s.$sdk_debug_error_capturing_properties = String(e);
		}
		let l;
		if (this.requestRouter.region === Rl && (s.$lib_custom_api_host = this.config.api_host), l = e !== "$pageview" || a ? e !== "$pageleave" || a ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(r) : this.pageViewManager.doPageView(r, i), s = W(s, l), e === "$pageview" && D && (s.title = D.title), !P(o)) {
			let e = r.getTime() - o;
			s.$duration = parseFloat((e / 1e3).toFixed(3));
		}
		wt && this.config.opt_out_useragent_filter && (s.$browser_type = this._is_bot() ? "bot" : "browser");
		let u = this.persistence.properties(), d = this.sessionPersistence.properties(), f = s.$groups, p = u.$groups;
		N(f) && !It(f) && (s.$groups = B(B({}, N(p) ? p : {}), f)), U(["$referrer", "$referring_domain"], (e) => {
			e in u && delete d[e];
		});
		let m = {};
		if (this._extensionEventPropertyProducers.length > 0) for (let e of this._extensionEventPropertyProducers.slice()) try {
			W(m, e());
		} catch (e) {
			V.error("Failed to produce browser extension event properties", e);
		}
		s = W({}, c, u, d, B(B({}, m), s)), s.$is_identified = this._isIdentified(), j(this.config.property_denylist) ? U(this.config.property_denylist, function(e) {
			delete s[e];
		}) : V.error(gu + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
		let h = this.config.sanitize_properties;
		h && (V.error(hu), s = h(s, e));
		let g = this._hasPersonProcessing();
		return s.$process_person_profile = g, g && !a && this._requirePersonProcessing("_calculate_event_properties"), s;
	}
	_calculate_set_once_properties(e, t = !0, n = !1) {
		if (!this.persistence || !this._hasPersonProcessing() || this._personProcessingSetOncePropertiesSent && !n) return e;
		let r = this.persistence.get_initial_props(), i = this.sessionPropsManager?.getSetOnceProps(), a = W({}, r, i || {}, e || {}), o = this.config.sanitize_properties;
		return o && (V.error(hu), a = o(a, "$set_once")), t && (this._personProcessingSetOncePropertiesSent = !0), It(a) ? void 0 : a;
	}
	register(e, t) {
		var n;
		(n = this.persistence) == null || n.register(e, t);
	}
	register_once(e, t, n) {
		var r;
		(r = this.persistence) == null || r.register_once(e, t, n);
	}
	register_for_session(e) {
		var t, n;
		(t = this.persistence) == null || t.syncCookieProperties(), this._processCookieIdentityChange(), (n = this.sessionPersistence) == null || n.register(e), Object.keys(e).forEach((e) => this._sessionRegisteredPropKeys.add(e)), this._persistSessionRegisteredPropKeys();
	}
	unregister(e) {
		var t;
		(t = this.persistence) == null || t.unregister(e);
	}
	unregister_for_session(e) {
		var t;
		(t = this.sessionPersistence) == null || t.unregister(e), this._sessionRegisteredPropKeys.delete(e), this._persistSessionRegisteredPropKeys();
	}
	_register_single(e, t) {
		this.register({ [e]: t });
	}
	_clearSessionRegisteredProps() {
		this._sessionRegisteredPropKeys.forEach((e) => {
			var t;
			(t = this.sessionPersistence) == null || t.unregister(e);
		}), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys();
	}
	_persistSessionRegisteredPropKeys() {
		if (!this._sessionRegisteredPropertiesStorageKey) return;
		if (this.config.persistence === "memory" || this.sessionPersistence?._disabled || !J._is_supported()) return void J._remove(this._sessionRegisteredPropertiesStorageKey);
		let e = [];
		this._sessionRegisteredPropKeys.forEach((t) => e.push(t)), e.length > 0 ? J._set(this._sessionRegisteredPropertiesStorageKey, e) : J._remove(this._sessionRegisteredPropertiesStorageKey);
	}
	getFeatureFlag(e, t) {
		return this.featureFlags?.getFeatureFlag(e, t);
	}
	getFeatureFlagPayload(e) {
		return this.featureFlags?.getFeatureFlagPayload(e);
	}
	getFeatureFlagResult(e, t) {
		return this.featureFlags?.getFeatureFlagResult(e, t);
	}
	getAllFeatureFlags() {
		return this.featureFlags?.getAllFeatureFlags() ?? [];
	}
	isFeatureEnabled(e, t) {
		return this.featureFlags?.isFeatureEnabled(e, t) ?? t?.defaultValue;
	}
	reloadFeatureFlags() {
		var e;
		(e = this.featureFlags) == null || e.reloadFeatureFlags();
	}
	updateFlags(e, t, n) {
		var r;
		(r = this.featureFlags) == null || r.updateFlags(e, t, n);
	}
	updateEarlyAccessFeatureEnrollment(e, t, n) {
		var r;
		(r = this.featureFlags) == null || r.updateEarlyAccessFeatureEnrollment(e, t, n);
	}
	getEarlyAccessFeatures(e, t = !1, n) {
		return this.featureFlags?.getEarlyAccessFeatures(e, t, n);
	}
	on(e, t) {
		return this._internalEventEmitter.on(e, t);
	}
	onFeatureFlags(e) {
		return this.featureFlags ? this.featureFlags.onFeatureFlags(e) : (e([], {}, { errorsLoading: !0 }), () => {});
	}
	onSurveysLoaded(e) {
		return this.surveys ? this.surveys.onSurveysLoaded(e) : (e([], {
			isLoaded: !1,
			error: mu
		}), () => {});
	}
	onSessionId(e) {
		return this.sessionManager?.onSessionId(e) ?? (() => {});
	}
	getSurveys(e, t = !1) {
		this.surveys ? this.surveys.getSurveys(e, t) : e([], {
			isLoaded: !1,
			error: mu
		});
	}
	getActiveMatchingSurveys(e, t = !1) {
		this.surveys ? this.surveys.getActiveMatchingSurveys(e, t) : e([], {
			isLoaded: !1,
			error: mu
		});
	}
	onActiveMatchingSurveysChanged(e) {
		return this.surveys ? this.surveys.onActiveMatchingSurveysChanged(e) : (e([], {
			isLoaded: !1,
			error: mu
		}), () => {});
	}
	renderSurvey(e, t) {
		var n;
		(n = this.surveys) == null || n.renderSurvey(e, t);
	}
	displaySurvey(e, t = Gl) {
		var n;
		(n = this.surveys) == null || n.displaySurvey(e, t);
	}
	cancelPendingSurvey(e) {
		var t;
		(t = this.surveys) == null || t.cancelPendingSurvey(e);
	}
	canRenderSurvey(e) {
		return this.surveys?.canRenderSurvey(e) ?? {
			visible: !1,
			disabledReason: mu
		};
	}
	canRenderSurveyAsync(e, t = !1) {
		return this.surveys?.canRenderSurveyAsync(e, t) ?? Promise.resolve({
			visible: !1,
			disabledReason: mu
		});
	}
	_validateIdentifyId(e) {
		return !e || Lt(e) ? (V.critical("Unique user id has not been set in posthog.identify"), !1) : e === "$posthog_cookieless" ? (V.critical(`The string "${e}" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.`), !1) : !["distinct_id", "distinctid"].includes(e.toLowerCase()) && !["undefined", "null"].includes(e.toLowerCase()) || (V.critical(`The string "${e}" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.`), !1);
	}
	identify(e, t, n) {
		if (!this.__loaded || !this.persistence) return V.uninitializedWarning("posthog.identify");
		if (R(e) && (e = e.toString(), V.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), !this._validateIdentifyId(e) || !this._requirePersonProcessing("posthog.identify")) return;
		this._syncCookielessIdentity();
		let r = this.get_distinct_id(), i = this.persistence.syncCookieProperties() && this.get_distinct_id() !== r, a = this._processCookieIdentityChange(!1), o = this.persistence._beginCookieSyncSuppression(), s = !1;
		try {
			let r = this.get_distinct_id();
			this.register({ $user_id: e }), this.get_property("$device_id") || this.register_once({
				$had_persisted_distinct_id: !0,
				$device_id: r
			}, ""), e !== r && e !== this.get_property("__alias") && (this.unregister(ae), this.register({ distinct_id: e }));
			let o = (this.persistence.get_property("$user_state") || "anonymous") === ut, l = e !== r, u = !l && o;
			if (l && o) {
				var c;
				let i = this.config.reuseAnonymousId ? { distinct_id: e } : {
					distinct_id: e,
					$anon_distinct_id: r
				};
				this.persistence.set_property(Ue, dt), this.setPersonPropertiesForFlags({
					$set: t || {},
					$set_once: n || {}
				}, !1), this.config.cookieWinsOnConflict && this.persistence._publishSuppressedCookieSnapshot(), this.capture("$identify", i, {
					$set: t || {},
					$set_once: n || {}
				}) && (this._cachedPersonProperties = Ll(e, t, n)), (c = this.featureFlags) == null || c.setAnonymousDistinctId(this.config.reuseAnonymousId ? void 0 : r);
			} else if (u) {
				this.persistence.set_property(Ue, dt);
				let r = t || {}, i = n || {};
				this.setPersonPropertiesForFlags({
					$set: r,
					$set_once: i
				}, !1), this.config.cookieWinsOnConflict && this.persistence._publishSuppressedCookieSnapshot(), this.capture("$set", {
					$set: r,
					$set_once: i
				}) && (this._cachedPersonProperties = Ll(e, t, n));
			} else (t || n) && this.setPersonProperties(t, n);
			l || i || a ? (this.reloadFeatureFlags(), this.featureFlags ? this.featureFlags.resetFlagCallReported() : this.unregister(m)) : u && (t || n) && this.reloadFeatureFlags(), s = !0;
		} finally {
			o && this.persistence._endCookieSyncSuppression(s);
		}
	}
	setPersonProperties(e, t) {
		if (!e && !t || !this._requirePersonProcessing("posthog.setPersonProperties")) return;
		let n = Ll(this.get_distinct_id(), e, t);
		this._cachedPersonProperties === n ? V.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.") : (this.setPersonPropertiesForFlags({
			$set: e || {},
			$set_once: t || {}
		}, !0), this.capture("$set", {
			$set: e || {},
			$set_once: t || {}
		}) && (this._cachedPersonProperties = n));
	}
	unsetPersonProperties(e) {
		var t;
		let n = (j(e) ? e : [e]).filter((e) => F(e) && e.length > 0);
		n.length !== 0 && this._requirePersonProcessing("posthog.unsetPersonProperties") && ((t = this.featureFlags) == null || t.unsetPersonPropertiesForFlags(n, !0), this.capture("$set", { $unset: n }), this._cachedPersonProperties = null);
	}
	group(e, t, n) {
		var r;
		if (!e || !t) return void V.error("posthog.group requires a group type and group key");
		(r = this.persistence) == null || r.syncCookieProperties(), this._processCookieIdentityChange();
		let i = this.getGroups(), a = i[e] !== t;
		if (a && this.resetGroupPropertiesForFlags(e), this.register({ $groups: B(B({}, i), {}, { [e]: t }) }), (a || n) && this._hasPersonProcessing()) {
			let r = {
				$group_type: e,
				$group_key: t
			};
			n && (r.$group_set = n), this.capture(_t, r);
		}
		n && this.setGroupPropertiesForFlags({ [e]: n }), a && !n && this.reloadFeatureFlags();
	}
	resetGroups() {
		this.register({ $groups: {} }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags();
	}
	setPersonPropertiesForFlags(e, t = !0) {
		var n;
		(n = this.featureFlags) == null || n.setPersonPropertiesForFlags(e, t);
	}
	resetPersonPropertiesForFlags(e = !0) {
		var t;
		(t = this.featureFlags) == null || t.resetPersonPropertiesForFlags(e);
	}
	setGroupPropertiesForFlags(e, t = !0) {
		var n;
		this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") && ((n = this.featureFlags) == null || n.setGroupPropertiesForFlags(e, t));
	}
	resetGroupPropertiesForFlags(e) {
		var t;
		(t = this.featureFlags) == null || t.resetGroupPropertiesForFlags(e);
	}
	reset(e) {
		let t = zt(e) ? e : e?.resetDeviceID, n = zt(e) || e == null ? void 0 : e.bootstrap;
		this._reset(t, !1, n);
	}
	_reset(e, t = !1, n) {
		var r, i, a, o, s;
		if (V.info("reset"), !this.__loaded) return V.uninitializedWarning("posthog.reset");
		let c = n?.sessionID;
		this.config.bootstrap = n || this._originalUserConfig?.bootstrap || {}, (r = this.featureFlags) == null || (i = r.updateConfig) == null || i.call(r, this.config, this._shouldDisableFlags());
		let l = this.get_property(re), u = this.get_property(ie), d = this.get_property(xe);
		(a = this.sessionRecording) == null || a.flushBeforeIdentityReset();
		let f = this.is_capturing();
		t || this.consent.reset(), t || !f || this.is_capturing() || console.warn("[PostHog.js]", "reset() cleared the stored consent, and capturing is now off because of `opt_out_capturing_by_default`. Call opt_in_capturing() again, and prefer calling reset() before opting in rather than after.");
		let p = (o = this.persistence) == null || (s = o._beginCookieSyncSuppression) == null ? void 0 : s.call(o), m = this._isConsentTransition;
		this._isConsentTransition = m || t;
		let h = !1;
		try {
			var g, _, v, y, b, x, S, C, w, ee, te, ne;
			if ((g = this.persistence) == null || g.clear(), (_ = this.sessionPersistence) == null || _.clear(), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys(), P(d) || (ee = this.persistence) == null || ee.register({ $session_recording_remote_config: d }), (v = this.surveys) == null || v.reset(), (y = this.featureFlags) == null || y.reset(), (b = this.conversations) == null || b.reset(), (x = this.logs) == null || x.reset(), (S = this.metrics) == null || S.reset(), (C = this.persistence) == null || C.set_property("$user_state", "anonymous"), (w = this.sessionManager) == null || w.resetSessionId(), this._cachedPersonProperties = null, this.config.cookieless_mode === "always") this.register_once({
				distinct_id: Xe,
				$device_id: null
			}, "");
			else {
				let t = this.config.get_device_id(no());
				this.register_once({
					distinct_id: t,
					$device_id: e ? t : l
				}, ""), e || P(u) || this.register({ [ie]: u });
			}
			if (this.register({ $last_posthog_reset: (/* @__PURE__ */ new Date()).toISOString() }, 1), n && (n.distinctID && !this._inCookielessMode() && ((ne = this.persistence) == null || ne.set_property("$user_state", n.isIdentifiedID ? "identified" : "anonymous"), this.register({ distinct_id: n.distinctID })), (te = this.featureFlags) == null || te.initialize(), !L(c) && !this.sessionManager?.setBootstrapSessionId(c, !0))) {
				let e = B({}, n);
				delete e.sessionID, this.config.bootstrap = e;
			}
			delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, h = !0;
		} finally {
			var T, ae;
			this._isConsentTransition = m, p && ((T = this.persistence) == null || (ae = T._endCookieSyncSuppression) == null || ae.call(T, h));
		}
		var oe;
		this._lastRemoteConfig && ((oe = this.conversations) == null || oe.onRemoteConfig(this._lastRemoteConfig)), this.reloadFeatureFlags();
	}
	shutdown(e) {
		var t = this;
		return z(function* () {
			if (!t.__loaded) return void V.uninitializedWarning("posthog.shutdown");
			t._isShutdown = !0, clearTimeout(t._extensionInitTimeout), t._extensionInitTimeout = void 0;
			let e = t._featureFlagsReloadingUnsubscribe;
			t._featureFlagsReloadingUnsubscribe = void 0;
			for (let n of [
				() => t.sessionRecording?.dispose(),
				() => t.logs?.flushLogs("sendBeacon"),
				() => t.metrics?.flush("sendBeacon"),
				() => t.metrics?.dispose(),
				() => t.logs?.dispose(),
				() => t.surveys?.dispose(),
				() => t.autocapture?.dispose(),
				() => e?.(),
				() => t._requestQueue?.unload(),
				() => t._retryQueue?.unload(),
				() => t.featureFlags?.destroy(),
				() => t.persistence?.destroy(),
				() => t.sessionPersistence?.destroy()
			]) try {
				let e = n();
				e && M(e.then) && e.then(void 0, (e) => {
					V.error("Error during shutdown", e);
				});
			} catch (e) {
				V.error("Error during shutdown", e);
			}
		})();
	}
	setIdentity(e, t) {
		var n;
		delete this.config.identity_claims, this.config.identity_distinct_id = e, this.config.identity_hash = t, this.alias(e), (n = this.conversations) == null || n._onIdentityChanged();
	}
	clearIdentity() {
		var e;
		delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, (e = this.conversations) == null || e._onIdentityCleared();
	}
	get_distinct_id() {
		return this.get_property("distinct_id");
	}
	getGroups() {
		return this.get_property("$groups") || {};
	}
	get_session_id() {
		return this.sessionManager?.checkAndGetSessionAndWindowId(!0).sessionId ?? "";
	}
	get_session_replay_url(e) {
		if (!this.sessionManager) return "";
		let { sessionId: t, sessionStartTimestamp: n } = this.sessionManager.checkAndGetSessionAndWindowId(!0), r = this.requestRouter.endpointFor("ui", `/project/${this.config.token}/replay/${t}`);
		if (e?.withTimestamp && n) {
			let t = e.timestampLookBack ?? 10;
			if (!n) return r;
			r += `?t=${Math.max(Math.floor(((/* @__PURE__ */ new Date()).getTime() - n) / 1e3) - t, 0)}`;
		}
		return r;
	}
	alias(e, t) {
		return e === this.get_property("$people_distinct_id") ? (V.critical("Attempting to create alias for existing People user - aborting."), -2) : this._requirePersonProcessing("posthog.alias") ? (P(t) && (t = this.get_distinct_id()), e === t ? (V.warn("alias matches current distinct_id - skipping api call."), this.identify(e), -1) : (this._register_single(ae, e), this.capture("$create_alias", {
			alias: e,
			distinct_id: t
		}))) : void 0;
	}
	set_config(e) {
		let t = B({}, this.config);
		if (N(e)) {
			var n, i, a, o, s, c, l, u, d, f, p, m, h, g;
			W(this.config, ku(e));
			let x = this._is_persistence_disabled();
			if (this.persistence) {
				let e = this.config.persistence === "sessionStorage" || this.config.persistence === "memory";
				var _, v;
				if (e && this.sessionPersistence !== this.persistence && ((_ = this.sessionPersistence) == null || _.remove(), (v = this.sessionPersistence) == null || v.destroy()), this.persistence.update_config(this.config, t, x), e) this.sessionPersistence = this.persistence;
				else if (this.sessionPersistence === this.persistence) this.sessionPersistence = new ac(B(B({}, this.config), {}, { persistence: "sessionStorage" }), x, !1);
				else {
					var y;
					(y = this.sessionPersistence) == null || y.update_config(B(B({}, this.config), {}, { persistence: "sessionStorage" }), B(B({}, t), {}, { persistence: "sessionStorage" }), x);
				}
			}
			let S = this._checkLocalStorageForDebug(this.config.debug);
			var b;
			zt(S) && (this.config.debug = S), zt(this.config.debug) && (this.config.debug ? (r.DEBUG = !0, q._is_supported() && q._set("ph_debug", !0), V.info("set_config", {
				config: e,
				oldConfig: t,
				newConfig: B({}, this.config)
			})) : (r.DEBUG = !1, q._is_supported() && q._remove("ph_debug"))), (n = this.featureFlags) == null || (i = n.updateConfig) == null || i.call(n, this.config, this._shouldDisableFlags()), (a = this.exceptionObserver) == null || a.onConfigChange(), (o = this.exceptions) == null || o.onConfigChange(), (s = this.metrics) == null || s.onConfigChange(), (c = this.webMCP) == null || c.startIfEnabled(), (l = this.sessionRecording) == null || l.startIfEnabledOrStop(), (u = this.tracingHeaders) == null || u.startIfEnabledOrStop(), (d = this.autocapture) == null || d.startIfEnabled(), (f = this.heatmaps) == null || f.startIfEnabled(), ("capture_pageview" in e || "disable_capture_url_hashes" in e) && ((b = this.historyAutocapture) == null || b.startIfEnabledOrStop()), (p = this.exceptionObserver) == null || p.startIfEnabledOrStop(), (m = this.deadClicksAutocapture) == null || m.startIfEnabledOrStop(), (h = this.surveys) == null || h.loadIfEnabled(), this._sync_opt_out_with_persistence(), (g = this.externalIntegrations) == null || g.startIfEnabledOrStop(), !t.segment && this.config.segment && this.persistence && _s(this, fu, !1);
		}
	}
	_overrideSDKInfo(e, t) {
		r.LIB_NAME = e, r.LIB_VERSION = t;
	}
	startSessionRecording(e) {
		let t = !0 === e, n = {
			sampling: t || !!e?.sampling,
			linked_flag: t || !!e?.linked_flag,
			url_trigger: t || !!e?.url_trigger,
			event_trigger: t || !!e?.event_trigger
		};
		var r, i, a, o, s;
		Object.values(n).some(Boolean) && ((r = this.sessionManager) == null || r.checkAndGetSessionAndWindowId(), n.sampling && ((i = this.sessionRecording) == null || i.overrideSampling()), n.linked_flag && ((a = this.sessionRecording) == null || a.overrideLinkedFlag()), n.url_trigger && ((o = this.sessionRecording) == null || o.overrideTrigger("url")), n.event_trigger && ((s = this.sessionRecording) == null || s.overrideTrigger("event"))), this.set_config({ disable_session_recording: !1 });
	}
	stopSessionRecording() {
		this.set_config({ disable_session_recording: !0 });
	}
	sessionRecordingStarted() {
		return !!this.sessionRecording?.started;
	}
	captureException(e, t) {
		try {
			if (!this.exceptions) return;
			let n = this.exceptions.buildProperties(e, {
				handled: !0,
				syntheticException: /* @__PURE__ */ Error("PostHog syntheticException")
			});
			return this.exceptions.sendExceptionEvent(B(B({}, n), t));
		} catch {
			return;
		}
	}
	addExceptionStep(e, t) {
		var n;
		(n = this.exceptions) == null || n.addExceptionStep(e, t);
	}
	captureLog(e) {
		var t;
		(t = this.logs) == null || t.captureLog(e);
	}
	get logger() {
		return this.logs?.logger ?? e._noopLogger;
	}
	startExceptionAutocapture(e) {
		this.set_config({ capture_exceptions: e == null || e });
	}
	stopExceptionAutocapture() {
		this.set_config({ capture_exceptions: !1 });
	}
	loadToolbar(e) {
		var t;
		return (t = this.toolbar?.loadToolbar(e)) != null && t;
	}
	get_property(e) {
		return this.persistence?.props[e];
	}
	getSessionProperty(e) {
		return this.sessionPersistence?.props[e];
	}
	toString() {
		let e = this.config.name ?? wu;
		return e !== wu && (e = "posthog." + e), e;
	}
	_isIdentified() {
		return this.persistence?.get_property("$user_state") === "identified" || this.sessionPersistence?.get_property("$user_state") === "identified";
	}
	_hasPersonProcessing() {
		var e, t;
		return !(this.config.person_profiles === "never" || this.config.person_profiles === "identified_only" && !this._isIdentified() && It(this.getGroups()) && !((e = this.persistence) != null && (e = e.props) != null && e.__alias) && !((t = this.persistence) != null && (t = t.props) != null && t.$epp));
	}
	_shouldCapturePageleave() {
		return !0 === this.config.capture_pageleave || this.config.capture_pageleave === "if_capture_pageview" && !!this.config.capture_pageview;
	}
	createPersonProfile() {
		this._hasPersonProcessing() || this._requirePersonProcessing("posthog.createPersonProfile") && this.setPersonProperties({}, {});
	}
	setInternalOrTestUser() {
		this._requirePersonProcessing("posthog.setInternalOrTestUser") && this.setPersonProperties({ $internal_or_test_user: !0 });
	}
	_requirePersonProcessing(e) {
		return this.config.person_profiles === "never" ? (V.error(e + " was called, but process_person is set to \"never\". This call will be ignored."), !1) : (this._warnIfVolatileIdentityWithoutStableId(), this._register_single(Ye, !0), !0);
	}
	_is_persistence_disabled() {
		if (this.config.cookieless_mode === "always") return !0;
		let e = this.consent.isOptedOut();
		return this.config.disable_persistence || e && !(!this.config.opt_out_persistence_by_default && this.config.cookieless_mode !== "on_reject");
	}
	_sync_opt_out_with_persistence() {
		let e = this._is_persistence_disabled();
		var t, n, r;
		return this.is_capturing() || (t = this.logs) == null || t._onOptOut(), this.persistence?._disabled !== e && ((n = this.persistence) == null || n.set_disabled(e)), this.sessionPersistence?._disabled !== e && ((r = this.sessionPersistence) == null || r.set_disabled(e)), this._persistSessionRegisteredPropKeys(), e;
	}
	opt_in_capturing(t) {
		var n;
		if (this.config.cookieless_mode !== "always") {
			if (this._inCookielessMode()) {
				var r, i, a;
				(r = this.sessionRecording) == null || r.dispose({ discardBufferedEvents: !0 }), this._reset(!0, !0), (i = this.sessionManager) == null || i.destroy(), (a = this.pageViewManager) == null || a.destroy(), this.sessionManager = new Dl(this), this.pageViewManager = new xs(this), this.persistence && (this.sessionPropsManager = new Cl(this, this.sessionManager, this.persistence));
				let t = this.config.__extensionClasses?.sessionRecording ?? e.__defaultExtensionClasses?.sessionRecording;
				var o, s;
				t && (this.sessionRecording = this._replaceExtension(this.sessionRecording, new t(this)), this._lastRemoteConfig && ((o = this.sessionRecording) == null || (s = o.onRemoteConfig) == null || s.call(o, this._lastRemoteConfig)));
			}
			var c, l;
			this.consent.optInOut(!0), this._sync_opt_out_with_persistence(), this._start_queue_if_opted_in(), (n = this.sessionRecording) == null || n.startIfEnabledOrStop(), this.config.cookieless_mode == "on_reject" && ((c = this.surveys) == null || c.loadIfEnabled(), (l = this.conversations) == null || l.loadIfEnabled()), (P(t?.captureEventName) || t != null && t.captureEventName) && this.capture(t?.captureEventName ?? "$opt_in", t?.captureProperties, { send_instantly: !0 }), this.config.capture_pageview && this._captureInitialPageview();
		} else V.warn(pu);
	}
	opt_out_capturing() {
		this.config.cookieless_mode === "always" ? V.warn(pu) : (this.consent.optInOut(!1), this._sync_opt_out_with_persistence(), this.config.cookieless_mode === "on_reject" && this._enterCookielessMode());
	}
	_enterCookielessMode() {
		var e, t;
		let n = this.sessionRecording;
		n?.dispose({ discardBufferedEvents: !0 }), this.get_distinct_id() !== "$posthog_cookieless" && this._reset(!0, !0), this.register({
			distinct_id: Xe,
			$device_id: null
		}), this._removeExtension(n), this.sessionRecording = void 0, (e = this.sessionManager) == null || e.destroy(), (t = this.pageViewManager) == null || t.destroy(), this.sessionManager = void 0, this.sessionPropsManager = void 0, this.config.capture_pageview && this._captureInitialPageview(), this._start_queue_if_opted_in();
	}
	has_opted_in_capturing() {
		return this.consent.isOptedIn();
	}
	has_opted_out_capturing() {
		return this.consent.isOptedOut();
	}
	get_explicit_consent_status() {
		let e = this.consent.consent;
		return e === 1 ? "granted" : e === 0 ? "denied" : "pending";
	}
	is_capturing() {
		return !this._isConsentTransition && (this.config.cookieless_mode === "always" || (this.config.cookieless_mode === "on_reject" ? this.consent.isRejected() || this.consent.isOptedIn() : !this.has_opted_out_capturing()));
	}
	clear_opt_in_out_capturing() {
		this.consent.reset(), this._sync_opt_out_with_persistence();
	}
	_is_bot() {
		return yt ? kl(yt, this.config.custom_blocked_useragents) : void 0;
	}
	_captureInitialPageview() {
		D && (D.visibilityState === "visible" ? this._initialPageviewCaptured || (this._initialPageviewCaptured = !0, this.capture(mt, { title: D.title }, { send_instantly: !0 }), this._visibilityStateListener &&= (D.removeEventListener(y, this._visibilityStateListener), null)) : this._visibilityStateListener || (this._visibilityStateListener = this._captureInitialPageview.bind(this), G(D, y, this._visibilityStateListener)));
	}
	debug(e) {
		!1 === e ? (E?.console.log("You've disabled debug mode."), this.set_config({ debug: !1 })) : (E?.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), this.set_config({ debug: !0 }));
	}
	_shouldDisableFlags() {
		let e = this._originalUserConfig || {};
		return "advanced_disable_flags" in e ? !!e.advanced_disable_flags : !1 === this.config.advanced_disable_flags ? !0 === this.config.advanced_disable_decide ? (V.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."), !0) : function(e, t, n, r, i) {
			let a = t in e && !L(e[t]), o = n in e && !L(e[n]);
			return a ? e[t] : !!o && (i && i.warn(`Config field '${n}' is deprecated. Please use '${t}' instead. The old field will be removed in a future major version.`), e[n]);
		}(e, "advanced_disable_flags", "advanced_disable_decide", 0, V) : !!this.config.advanced_disable_flags;
	}
	_runBeforeSend(e) {
		if (L(this.config.before_send)) return e;
		let t = Object.keys(e.properties ?? {}).filter(Vt), n = j(this.config.before_send) ? this.config.before_send : [this.config.before_send], r = e;
		for (let t of n) try {
			if (r = t(r), L(r)) {
				let t = `Event '${e.event}' was rejected in beforeSend function`;
				return Bt(e.event) ? V.warn(`${t}. This can cause unexpected behavior.`) : V.info(t), null;
			}
			r.properties && !It(r.properties) || V.warn(`Event '${e.event}' has no properties after beforeSend function, this is likely an error.`);
		} catch (t) {
			return V.error(`Error in beforeSend function for event '${e.event}':`, t), null;
		}
		for (let n of t) if (r.properties && L(r.properties[n])) return V.warn(`Event '${e.event}' had its '${n}' property removed in a beforeSend function. This property is required for ingestion, so the event will be dropped.`), null;
		return r;
	}
	getPageViewId() {
		return this.pageViewManager._currentPageview?.pageViewId;
	}
	captureTraceFeedback(e, t) {
		this.capture("$ai_feedback", {
			$ai_trace_id: String(e),
			$ai_feedback_text: t
		});
	}
	captureTraceMetric(e, t, n) {
		this.capture("$ai_metric", {
			$ai_trace_id: String(e),
			$ai_metric_name: t,
			$ai_metric_value: String(n)
		});
	}
	_checkLocalStorageForDebug(e) {
		let t = zt(e) && !e, n = q._is_supported() && q._get("ph_debug") === "true";
		return !t && (!!n || e);
	}
};
ju.__defaultExtensionClasses = {}, ju._noopLogger = (() => {
	let e = () => {};
	return {
		trace: e,
		debug: e,
		info: e,
		warn: e,
		error: e,
		fatal: e
	};
})(), function(e, t) {
	for (let n = 0; t.length > n; n++) e.prototype[t[n]] = Ua(e.prototype[t[n]]);
}(ju, ["identify"]);
var Mu = ["[data-ph-capture-value]"], Nu = class {
	constructor(e) {
		this._instance = e;
	}
	refresh(e) {
		let t = this._instance.config, n = N(t.autocapture) ? t.autocapture : void 0;
		e.enabled = !!t.autocapture, e.rageclick = t.rageclick, e.maskAllElementAttributes = t.mask_all_element_attributes, e.maskAllText = t.mask_all_text, e.disableCaptureUrlHashes = t.disable_capture_url_hashes, e.getCurrentUrl = t.get_current_url, e.remoteRequestsDisabled = this._instance._shouldDisableFlags(), e.url_allowlist = n?.url_allowlist, e.url_ignorelist = n?.url_ignorelist, e.dom_event_allowlist = n?.dom_event_allowlist, e.element_allowlist = n?.element_allowlist, e.css_selector_allowlist = n?.css_selector_allowlist, e.css_selector_ignorelist = n?.css_selector_ignorelist, e.element_attribute_ignorelist = n?.element_attribute_ignorelist, e.capture_copied_text = n?.capture_copied_text, e.capture_value_css_selector_allowlist = n?.capture_value_css_selector_allowlist ?? Mu;
	}
}, Pu = H("[ExceptionAutocapture]"), Fu = () => {}, Iu = (e) => {
	if (M(e)) return e.__posthog_layer__ ?? e.__rrweb_layer__;
};
function Lu(e, t, n) {
	try {
		if (!(t in e)) return Fu;
		let r = { next: e[t] }, i = n(function(...e) {
			return r.next.apply(this, e);
		});
		return M(i) && (i.prototype = i.prototype || {}, Object.defineProperties(i, {
			__posthog_wrapped__: {
				enumerable: !1,
				value: !0
			},
			__posthog_layer__: {
				enumerable: !1,
				value: r
			}
		})), e[t] = i, () => {
			if (e[t] === i) return void (e[t] = r.next);
			let n = e[t], a = Iu(n);
			for (; a;) {
				if (a.next === i) return void (a.next = r.next);
				n = a.next, a = Iu(n);
			}
		};
	} catch {
		return Fu;
	}
}
var Ru = H("[TracingHeaders]"), zu = H("[Web Vitals]"), Bu = 9e5, Vu = [
	"CLS",
	"FCP",
	"INP",
	"LCP"
], Hu = ["INP", "LCP"], Uu = [
	"interactionTarget",
	"interactionType",
	"inputDelay",
	"processingDuration",
	"presentationDelay",
	"loadState",
	"target",
	"url",
	"timeToFirstByte",
	"resourceLoadDelay",
	"resourceLoadDuration",
	"elementRenderDelay",
	"largestShiftTarget",
	"largestShiftTime",
	"largestShiftValue",
	"firstByteToFCP"
], Wu = "disabled", Gu = "lazy_loading", Ku = H("[SessionRecording]"), qu = [
	et,
	tt,
	nt,
	rt,
	it,
	at,
	ot,
	st,
	ct
], Ju = H("[Heatmaps]");
function Yu(e) {
	return N(e) && "clientX" in e && "clientY" in e && R(e.clientX) && R(e.clientY);
}
var Xu = H("[Product Tours]"), Zu = (e) => !e.config.disable_product_tours && !!e.persistence?.get_property(ve), Qu = ["$set_once", "$set"], $u = H("[SiteApps]"), ed = "Error while initializing PostHog app with config id ";
function td(e, t, n) {
	if (L(e)) return !1;
	switch (n) {
		case "exact": return e === t;
		case "contains": {
			let n = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/_/g, ".").replace(/%/g, ".*");
			return new RegExp(n, "i").test(e);
		}
		case "regex": try {
			return new RegExp(t).test(e);
		} catch {
			return !1;
		}
		default: return !1;
	}
}
var nd = class {
	constructor(e) {
		this._host = e, this._actionRegistry = /* @__PURE__ */ new Set(), this._actionEvents = /* @__PURE__ */ new Set(), this._debugEventEmitter = new wl(), this._checkStep = (e, t) => this._checkStepEvent(e, t) && this._checkStepUrl(e, t) && this._checkStepElement(e, t) && this._checkStepProperties(e, t), this._checkStepEvent = (e, t) => !t?.event || e?.event === t?.event;
	}
	init() {
		P(this._host?.subscribeCapture) || (this._captureHookUnsubscribe = this._host?.subscribeCapture((e, t) => {
			this.on(e, t);
		}));
	}
	dispose() {
		var e, t, n;
		(e = this._captureHookUnsubscribe) == null || e.call(this), this._captureHookUnsubscribe = void 0, (t = this._host) == null || (n = t.setElementSelectors) == null || n.call(t, /* @__PURE__ */ new Set(), this), this._debugEventEmitter = new wl();
	}
	register(e) {
		if (!P(this._host?.subscribeCapture) && (e.forEach((e) => {
			var t;
			this._actionRegistry.add(e), (t = e.steps) == null || t.forEach((e) => {
				this._actionEvents.add(e?.event || "");
			});
		}), this._host?.setElementSelectors)) {
			let e = /* @__PURE__ */ new Set();
			this._actionRegistry.forEach((t) => {
				var n;
				(n = t.steps) == null || n.forEach((t) => {
					t != null && t.selector && e.add(t.selector);
				});
			}), this._host.setElementSelectors(e, this);
		}
	}
	replace(e) {
		this._actionRegistry.clear(), this._actionEvents.clear(), this.register(e);
	}
	on(e, t) {
		t != null && e.length != 0 && (this._actionEvents.has(e) || this._actionEvents.has(t.event)) && this._actionRegistry.forEach((e) => {
			this._checkAction(t, e) && this._debugEventEmitter.emit("actionCaptured", e.name);
		});
	}
	_addActionHook(e) {
		this.onAction("actionCaptured", (t) => e(t));
	}
	_checkAction(e, t) {
		if (t?.steps == null) return !1;
		for (let n of t.steps) if (this._checkStep(e, n)) return !0;
		return !1;
	}
	onAction(e, t) {
		return this._debugEventEmitter.on(e, t);
	}
	_checkStepUrl(e, t) {
		if (t?.url) {
			var n;
			let a = e == null || (n = e.properties) == null ? void 0 : n.$current_url;
			if (!e?.properties || !("$current_url" in e.properties)) try {
				var r, i;
				a = (r = this._host) == null || (i = r.getActionUrl) == null ? void 0 : i.call(r);
			} catch {
				return !1;
			}
			if (!a || typeof a != "string" || !td(a, t.url, t.url_matching || "contains")) return !1;
		}
		return !0;
	}
	_checkStepElement(e, t) {
		return !!this._checkStepHref(e, t) && !!this._checkStepText(e, t) && !!this._checkStepSelector(e, t);
	}
	_checkStepHref(e, t) {
		var n;
		if (!t?.href) return !0;
		let r = this._getElementsList(e);
		if (r.length > 0) return r.some((e) => td(e.href, t.href, t.href_matching || "exact"));
		let i = (e == null || (n = e.properties) == null ? void 0 : n.$elements_chain) || "";
		return !!i && td(function(e) {
			let t = e.match(/(?::|")href="(.*?)"/);
			return t ? t[1] : "";
		}(i), t.href, t.href_matching || "exact");
	}
	_checkStepText(e, t) {
		var n;
		if (!t?.text) return !0;
		let r = this._getElementsList(e);
		if (r.length > 0) return r.some((e) => td(e.text, t.text, t.text_matching || "exact") || td(e.$el_text, t.text, t.text_matching || "exact"));
		let i = (e == null || (n = e.properties) == null ? void 0 : n.$elements_chain) || "";
		return !!i && (a = function(e) {
			let t = [], n = /(?::|")text="(.*?)"/g, r;
			for (; !L(r = n.exec(e));) t.includes(r[1]) || t.push(r[1]);
			return t;
		}(i), o = t.text, s = t.text_matching || "exact", a.some((e) => td(e, o, s)));
		var a, o, s;
	}
	_checkStepSelector(e, t) {
		var n, r;
		if (!t?.selector || (e == null || (n = e.properties) == null ? void 0 : n.$element_selectors)?.includes(t.selector)) return !0;
		let i = (e == null || (r = e.properties) == null ? void 0 : r.$elements_chain) || "";
		if (t.selector_regex && i) try {
			return new RegExp(t.selector_regex).test(i);
		} catch {}
		return !1;
	}
	_getElementsList(e) {
		var t;
		return (e == null || (t = e.properties) == null ? void 0 : t.$elements) == null ? [] : e?.properties.$elements;
	}
	_checkStepProperties(e, t) {
		return !t?.properties || t.properties.length === 0 || Il(t.properties.reduce((e, t) => {
			let n = j(t.value) ? t.value.map(String) : t.value == null ? [] : [String(t.value)];
			return e[t.key] = {
				values: n,
				operator: t.operator || "exact"
			}, e;
		}, {}), e?.properties);
	}
}, rd = class {
	constructor(e, t) {
		this._onActivationChanged = t, this._pendingActivatedItems = [], this._host = e, this._eventToItems = /* @__PURE__ */ new Map(), this._cancelEventToItems = /* @__PURE__ */ new Map(), this._actionToItems = /* @__PURE__ */ new Map();
	}
	_subscribeSession() {
		var e;
		this._sessionIdUnsubscribe = (e = this._host).subscribeSession?.call(e, (e) => this._onSessionIdChanged(e));
	}
	_shouldPersistArmedActivation(e) {
		return !1;
	}
	_getActivationTimestampsKey() {
		return null;
	}
	_writeActivationTimestamps(e) {}
	_clearActivationTimestampsStore() {}
	_doesEventMatchFilter(e, t) {
		return !!e && Il(e.propertyFilters, t?.properties);
	}
	_buildEventToItemMap(e, t) {
		let n = /* @__PURE__ */ new Map();
		return e.forEach((e) => {
			var r;
			(r = e.conditions) == null || (r = r[t]) == null || (r = r.values) == null || r.forEach((t) => {
				if (t?.name) {
					let r = n.get(t.name) || [];
					r.push(e.id), n.set(t.name, r);
				}
			});
		}), n;
	}
	_getMatchingItems(e, t, n) {
		let r = (n === sc.Activation ? this._eventToItems : this._cancelEventToItems).get(e), i = [];
		return this._getItems((e) => {
			i = e.filter((e) => r?.includes(e.id));
		}), i.filter((r) => {
			var i;
			let a = (i = r.conditions) == null || (i = i[n]) == null || (i = i.values) == null ? void 0 : i.find((t) => t.name === e);
			return this._doesEventMatchFilter(a, t);
		});
	}
	register(e) {
		this._register(e, !1);
	}
	replace(e) {
		this._register(e, !0);
	}
	_register(e, t) {
		P(this._host.subscribeCapture) || (this._setupEventBasedItems(e, t), this._setupActionBasedItems(e, t));
	}
	_setupActionBasedItems(e, t) {
		let n = e.filter((e) => {
			var t;
			return (t = e.conditions) == null || (t = t.actions) == null || (t = t.values) == null ? void 0 : t.length;
		});
		var r;
		if (t && this._actionToItems.clear(), n.length === 0) return void (t && ((r = this._actionMatcher) == null || r.replace([])));
		this._actionMatcher || (this._actionMatcher = new nd(this._host), this._actionMatcher.init(), this._actionMatcher._addActionHook((e) => this.onAction(e)));
		let i = [];
		n.forEach((e) => {
			var t;
			(t = e.conditions) == null || (t = t.actions) == null || t.values.forEach((t) => {
				if (i.push(t), t.name) {
					let n = this._actionToItems.get(t.name) ?? [];
					n.includes(e.id) || n.push(e.id), this._actionToItems.set(t.name, n);
				}
			});
		}), t ? this._actionMatcher.replace(i) : this._actionMatcher.register(i);
	}
	_mergeItemMaps(e, t) {
		t.forEach((t, n) => {
			let r = e.get(n) ?? [];
			t.forEach((e) => {
				r.includes(e) || r.push(e);
			}), e.set(n, r);
		});
	}
	_setupEventBasedItems(e, t) {
		var n;
		let r = e.filter((e) => {
			var t;
			return e.conditions?.events && ((t = e.conditions) == null || (t = t.events) == null || (t = t.values) == null ? void 0 : t.length) > 0;
		}), i = e.filter((e) => {
			var t;
			return e.conditions?.cancelEvents && ((t = e.conditions) == null || (t = t.cancelEvents) == null || (t = t.values) == null ? void 0 : t.length) > 0;
		}), a = this._buildEventToItemMap(e, sc.Activation), o = this._buildEventToItemMap(e, sc.Cancellation);
		t ? (this._eventToItems = a, this._cancelEventToItems = o) : (this._mergeItemMaps(this._eventToItems, a), this._mergeItemMaps(this._cancelEventToItems, o)), (r.length !== 0 || i.length !== 0 || e.some((e) => {
			var t;
			return (t = e.conditions) == null || (t = t.actions) == null || (t = t.values) == null ? void 0 : t.length;
		})) && (this._captureHookUnsubscribe ??= (n = this._host).subscribeCapture?.call(n, (e, t) => {
			this.onEvent(e, t);
		}));
	}
	onEvent(e, t) {
		var n, r;
		let i = this._getLogger(), a = (t == null || (n = t.properties) == null ? void 0 : n.$survey_id) || (t == null || (r = t.properties) == null ? void 0 : r.$product_tour_id);
		if (a && this.getActivatedIds().includes(a)) {
			let n = this._activationOutcome(e, a, t);
			if (n === "consume") return i.info("event consumed activated item, removing it", {
				event: e,
				itemId: a
			}), void this._deactivateItems([a]);
			if (n === "persist") return i.info("shown item promoted to persisted activation", {
				event: e,
				itemId: a
			}), this._persistActivation(a), void this._clearActivationTimestamps([a]);
		}
		if (this._cancelEventToItems.has(e)) {
			let n = this._getMatchingItems(e, t, sc.Cancellation);
			n.length > 0 && (i.info("cancel event matched, cancelling items", {
				event: e,
				itemsToCancel: n.map((e) => e.id)
			}), this._deactivateItems(n.map((e) => e.id)), n.forEach((e) => this._cancelPendingItem(e.id)));
		}
		if (!this._eventToItems.has(e)) return;
		i.info("event name matched", {
			event: e,
			eventPayload: t,
			items: this._eventToItems.get(e)
		});
		let o = this._getMatchingItems(e, t, sc.Activation);
		this._activateItems(o.map((e) => e.id));
	}
	onAction(e) {
		this._actionToItems.has(e) && this._activateItems(this._actionToItems.get(e) || []);
	}
	_activateItems(e) {
		if (e.length === 0) return;
		let t = !!this._host.getSessionId(), n = [];
		for (let r of e) t && this._shouldPersistArmedActivation(r) ? this._persistActivation(r) && this._recordActivationTimestamp(r) : n.push(r);
		n.length > 0 && (this._pendingActivatedItems = [.../* @__PURE__ */ new Set([...this._pendingActivatedItems, ...n])]), this._getLogger().info("updating activated items", { activatedItems: this.getActivatedIds() }), this._notifyActivationChanged();
	}
	_persistActivation(e) {
		this._pendingActivatedItems = this._pendingActivatedItems.filter((t) => t !== e);
		let t = this._getPersistedActivatedIds();
		return !t.includes(e) && (this._setActivatedItems([...t, e]), this._stampActivationSession(), !0);
	}
	_deactivateItems(e) {
		let t = new Set(e);
		this._pendingActivatedItems = this._pendingActivatedItems.filter((e) => !t.has(e));
		let n = this._getRawPersistedActivatedIds(), r = n.filter((e) => !t.has(e));
		r.length !== n.length && (this._setActivatedItems(r), r.length === 0 && this._clearActivationSession()), this._clearActivationTimestamps(e), this._notifyActivationChanged();
	}
	_notifyActivationChanged() {
		try {
			var e;
			(e = this._onActivationChanged) == null || e.call(this);
		} catch (e) {
			this._getLogger().error("Error while handling activated items change", e);
		}
	}
	_getRawActivationTimestamps() {
		let e = this._getActivationTimestampsKey();
		if (!e) return {};
		let t = this._host.getProperty(e);
		return t && typeof t == "object" ? t : {};
	}
	_recordActivationTimestamp(e) {
		if (!this._getActivationTimestampsKey()) return;
		let t = this._getRawActivationTimestamps();
		this._writeActivationTimestamps(B(B({}, t), {}, { [e]: Date.now() }));
	}
	_clearActivationTimestamps(e) {
		if (!this._getActivationTimestampsKey()) return;
		let t = this._getRawActivationTimestamps(), n = {}, r = !1;
		for (let [i, a] of Object.entries(t)) e.includes(i) ? r = !0 : n[i] = a;
		r && (It(n) ? this._clearActivationTimestampsStore() : this._writeActivationTimestamps(n));
	}
	_clearAllActivationTimestamps() {
		this._getActivationTimestampsKey() && this._clearActivationTimestampsStore();
	}
	getActivationTimestamp(e) {
		if (!this._getPersistedActivatedIds().includes(e)) return;
		let t = this._getRawActivationTimestamps()[e];
		return R(t) ? t : void 0;
	}
	_getRawPersistedActivatedIds() {
		let e = this._getActivatedKey();
		return this._host.getProperty(e) || [];
	}
	_getPersistedActivatedIds() {
		let e = this._getRawPersistedActivatedIds();
		if (e.length === 0) return [];
		let t = this._host.getProperty(this._getActivatedSessionKey()), n = this._host.getSessionId();
		return n && t === n ? e : [];
	}
	_stampActivationSession() {
		let e = this._host.getSessionId();
		e && this._setActivatedSession(e);
	}
	_clearActivationSession() {
		this._clearActivatedSession();
	}
	_onSessionIdChanged(e) {
		let t = this._host.getProperty(this._getActivatedSessionKey());
		if (t && t !== e) {
			let e = this._getRawPersistedActivatedIds(), t = this._getRawActivationTimestamps();
			e.length > 0 && (this._setActivatedItems([]), e.filter((e) => R(t[e])).forEach((e) => this._cancelPendingItem(e))), this._clearActivationSession(), this._clearAllActivationTimestamps(), e.length > 0 && this._notifyActivationChanged();
		}
	}
	getActivatedIds() {
		return [.../* @__PURE__ */ new Set([...this._getPersistedActivatedIds(), ...this._pendingActivatedItems])].filter((e) => !this._isItemPermanentlyIneligible(e));
	}
	dispose() {
		var e, t, n;
		(e = this._sessionIdUnsubscribe) == null || e.call(this), this._sessionIdUnsubscribe = void 0, (t = this._captureHookUnsubscribe) == null || t.call(this), this._captureHookUnsubscribe = void 0, (n = this._actionMatcher) == null || n.dispose(), this._actionMatcher = void 0;
	}
	reset() {
		this._pendingActivatedItems = [], this._getRawPersistedActivatedIds().length > 0 && this._setActivatedItems([]), this._clearActivationSession(), this._clearAllActivationTimestamps(), this._notifyActivationChanged();
	}
	getEventToItemsMap() {
		return this._eventToItems;
	}
	_getActionMatcher() {
		return this._actionMatcher;
	}
}, id = class extends rd {
	constructor(e, t, n, r) {
		super({
			subscribeCapture(t) {
				let n = e.onEvent((e) => t(e.event, e));
				return () => n.dispose();
			},
			subscribeSession(t) {
				let n = e.onSession(t);
				return () => n.dispose();
			},
			getSessionId() {
				return e.session?.sessionId;
			},
			getProperty: (t) => e.kv.get(t),
			getActionUrl: n?.getActionUrl,
			setElementSelectors: n?.setElementSelectors ?? ((t, n) => e.getExtension("autocapture")?.setElementSelectors(t, n))
		}, r), this._client = e, this._surveys = t, this._subscribeSession();
	}
	_getActivatedKey() {
		return w;
	}
	_getActivatedSessionKey() {
		return ee;
	}
	_getActivationTimestampsKey() {
		return te;
	}
	_writeActivationTimestamps(e) {
		this._client.kv.set({ [te]: e });
	}
	_clearActivationTimestampsStore() {
		this._client.kv.remove(te);
	}
	_shouldPersistArmedActivation(e) {
		var t;
		let n;
		this._getItems((t) => {
			n = t.find((t) => t.id === e);
		});
		let r = n == null || (t = n.appearance) == null ? void 0 : t.surveyPopupDelaySeconds;
		return R(r) && r > 0;
	}
	_getShownEventName() {
		return lc.SHOWN;
	}
	_getItems(e) {
		this._surveys.getSurveys(e);
	}
	_cancelPendingItem(e) {
		this._surveys.cancelPendingSurvey(e);
	}
	_getLogger() {
		return $;
	}
	_setActivatedItems(e) {
		this._client.kv.set({ [w]: e });
	}
	_setActivatedSession(e) {
		this._client.kv.set({ [ee]: e });
	}
	_clearActivatedSession() {
		this._client.kv.remove(ee);
	}
	_isItemPermanentlyIneligible() {
		return !1;
	}
	_activationOutcome(e, t, n) {
		var r;
		if (e === lc.SENT && !1 === (n == null || (r = n.properties) == null ? void 0 : r.$survey_completed)) return "ignore";
		let i;
		return this._getItems((e) => {
			i = e.find((e) => e.id === t);
		}), !i || function(e) {
			var t;
			return Ml(e) && !!((t = e.conditions) != null && (t = t.events) != null && t.repeatedActivation) || e.schedule === "always";
		}(i) ? e === lc.SHOWN ? "consume" : "ignore" : e === lc.SHOWN ? "persist" : e === lc.DISMISSED || e === lc.SENT ? "consume" : "ignore";
	}
	getSurveys() {
		return this.getActivatedIds();
	}
	getEventToSurveys() {
		return this.getEventToItemsMap();
	}
}, ad = (e, t) => e?.then ? e.then(t) : t(e), od = "SDK is not enabled or survey functionality is not yet loaded", sd = "Disabled. Not loading surveys.", cd = class {
	constructor(e) {
		this._configSource = e, this.name = "surveys", this._surveyEventReceiver = null, this._surveyManager = null, this._isInitializingSurveys = !1, this._surveyInitializationFailed = !1, this._surveyCallbacks = [], this._activeMatchingSurveyCallbacks = [], this._getSurveysInFlightPromise = null, this._lastSurveyRefreshFailedAt = null, this._disposed = !1, this._renderTimeouts = /* @__PURE__ */ new Set(), this.onRemoteConfig = (e) => {
			if (this._disposed || this._config.disableSurveys) return;
			if (!e.ok) return this._surveyInitializationFailed = !0, this._notifyActiveMatchingSurveyCallbacks({
				isLoaded: !1,
				error: "Remote config unavailable. Not loading surveys."
			}), $.warn("Remote config unavailable. Not loading surveys.");
			let t = e.config.surveys;
			if (L(t)) return $.warn("Flags not loaded yet. Not loading surveys.");
			this._isSurveysEnabled = zt(t) ? t : t.length > 0, $.info(`flags response received, isSurveysEnabled: ${this._isSurveysEnabled}`), this.loadIfEnabled();
		}, this._notifyActiveMatchingSurveyCallbacks = (e) => {
			this._activeMatchingSurveyCallbacks.slice().forEach((t) => this._notifyActiveMatchingSurveyCallback(t, e));
		};
	}
	setup(e) {
		if (!this._disposed) return this._initializingClient = e, ad(e.kv.initialize(), () => {
			if (this._initializingClient !== e || this._disposed) return;
			this._initializingClient = void 0, this._client = e;
			let t = e.onRemoteConfig(this.onRemoteConfig);
			this._disposed ? t.dispose() : (this._remoteConfigSubscription = t, this.loadIfEnabled());
		});
	}
	dispose() {
		var e, t, n, r, i;
		this._disposed || (this._disposed = !0, this._initializingClient = void 0, this._client = void 0, (e = this._remoteConfigSubscription) == null || e.dispose(), this._remoteConfigSubscription = void 0, (t = this._surveyEventReceiver) == null || t.dispose(), this._surveyEventReceiver = null, (n = this._surveyManager) == null || (r = n.dispose) == null || r.call(n), this._surveyManager = null, this._surveyCallbacks = [], this._activeMatchingSurveyCallbacks.forEach((e) => {
			e.active = !1;
		}), this._activeMatchingSurveyCallbacks = [], (i = this._activeMatchingSurveyConditionsUnsubscribe) == null || i.call(this), this._activeMatchingSurveyConditionsUnsubscribe = void 0, this._getSurveysInFlightPromise = null, this._renderTimeouts.forEach((e) => clearTimeout(e)), this._renderTimeouts.clear());
	}
	get _config() {
		return this._configSource.get();
	}
	getRenderContext() {
		if (!this._client) return;
		let e = this;
		return {
			client: this._client,
			get config() {
				return e._config;
			},
			surveys: e
		};
	}
	initialize() {
		this.loadIfEnabled();
	}
	reset() {
		var e, t;
		(e = this._surveyManager) == null || (t = e.clearInMemoryInProgressSurveyState) == null || t.call(e);
		try {
			var n;
			(n = this._surveyEventReceiver) == null || n.reset(), localStorage.removeItem("lastSeenSurveyDate");
			let e = [];
			for (let t = 0; t < localStorage.length; t++) {
				let n = localStorage.key(t);
				(n != null && n.startsWith("seenSurvey_") || n != null && n.startsWith("inProgressSurvey_")) && e.push(n);
			}
			e.forEach((e) => localStorage.removeItem(e));
		} catch {}
		this._notifyActiveMatchingSurveyCallbacks();
	}
	loadIfEnabled() {
		if (this._disposed || !this._client) return;
		let e = this._config;
		if (this._surveyManager) return;
		if (this._isInitializingSurveys) return void $.info("Already initializing surveys, skipping...");
		if (e.disableSurveys) return void $.info(sd);
		if (e.cookielessMode && this._client.isOptedOut) return void $.info("Not loading surveys in cookieless mode without consent.");
		let t = this._configSource.getExtensions();
		if (!t) return void this._handleSurveyLoadError("PostHog Extensions not found.");
		if (P(this._isSurveysEnabled) && !e.advancedEnableSurveys) return;
		let n = this._isSurveysEnabled || e.advancedEnableSurveys;
		this._isInitializingSurveys = !0, this._surveyInitializationFailed = !1;
		try {
			let e = t.generateSurveys;
			if (e) return this._completeSurveyInitialization(e, n), void (this._isInitializingSurveys = !1);
			let r = t.loadExternalDependency;
			if (!r) return this._handleSurveyLoadError(C), void (this._isInitializingSurveys = !1);
			r((e) => {
				try {
					if (this._disposed) return;
					let t = this._configSource.getExtensions();
					e || !t?.generateSurveys ? this._handleSurveyLoadError("Could not load surveys script", e) : this._completeSurveyInitialization(t.generateSurveys, n);
				} finally {
					this._isInitializingSurveys = !1;
				}
			});
		} catch (e) {
			throw this._isInitializingSurveys = !1, this._handleSurveyLoadError("Error initializing surveys", e), e;
		}
	}
	_completeSurveyInitialization(e, t) {
		if (this._disposed) return;
		this._surveyManager = e(t), this._surveyEventReceiver = this._createEventReceiver(this._client, this._notifyActiveMatchingSurveyCallbacks);
		let n = this._client?.kv.get(x);
		n && this._registerEventOrActionBasedSurveys(n), $.info("Surveys loaded successfully"), this._startActiveMatchingSurveyConditions(), this._notifyActiveMatchingSurveyCallbacks(), this._notifySurveyCallbacks({ isLoaded: !0 });
	}
	_createEventReceiver(e, t) {
		return new id(e, this, void 0, t);
	}
	_handleSurveyLoadError(e, t) {
		this._surveyInitializationFailed = !0, $.error(e, t), this._notifyActiveMatchingSurveyCallbacks({
			isLoaded: !1,
			error: e
		}), this._notifySurveyCallbacks({
			isLoaded: !1,
			error: e
		});
	}
	onSurveysLoaded(e) {
		return this._surveyCallbacks.push(e), this._surveyManager && this._notifySurveyCallbacks({ isLoaded: !0 }), () => {
			this._surveyCallbacks = this._surveyCallbacks.filter((t) => t !== e);
		};
	}
	getSurveys(e, t = !1) {
		if (this._disposed) return;
		let n = this._client;
		if (!n) return e([], {
			isLoaded: !1,
			error: od
		});
		if (this._config.disableSurveys) return $.info(sd), e([]);
		let r = n.kv.get(x);
		if (r && !t) return e(r, { isLoaded: !0 }), void (this._shouldBackgroundRefreshSurveys() && this.getSurveys(() => {}, !0));
		if (this._getSurveysInFlightPromise) return void this._getSurveysInFlightPromise.then(({ surveys: t, context: n }) => {
			this._disposed || e(t, n);
		}).catch((e) => $.error("Error in survey callback", e));
		let i = n.sendRequest("/api/surveys/", {
			method: "GET",
			query: { token: n.projectToken },
			sentAt: "query",
			timeoutMs: this._config.requestTimeoutMs
		}).then((e) => {
			try {
				return this._handleSurveyResponse(n, e);
			} catch (e) {
				return $.error("Error processing surveys response", e), this._handleSurveyResponse(n, {
					statusCode: 0,
					error: e
				});
			}
		}, (e) => this._handleSurveyResponse(n, {
			statusCode: 0,
			error: e
		}));
		this._getSurveysInFlightPromise = i;
		let a = () => {
			this._getSurveysInFlightPromise === i && (this._getSurveysInFlightPromise = null);
		};
		i.then((t) => {
			a(), this._disposed || (this._notifyActiveMatchingSurveyCallbacks(t.context), e(t.surveys, t.context));
		}, a).catch((e) => $.error("Error in survey callback", e));
	}
	_handleSurveyResponse(e, t) {
		if (this._disposed) return {
			surveys: [],
			context: {
				isLoaded: !1,
				error: od
			}
		};
		let n = t.statusCode;
		if (n !== 200 || !t.json) {
			let e = `Surveys API could not be loaded, status: ${n}`;
			return n === 0 ? t.error || $.warn(e) : $.error(e), this._lastSurveyRefreshFailedAt = Date.now(), {
				surveys: [],
				context: {
					isLoaded: !1,
					error: e
				}
			};
		}
		this._lastSurveyRefreshFailedAt = null;
		let r = t.json.surveys || [];
		return e.kv.set({
			[x]: r,
			[S]: Date.now()
		}), this._registerEventOrActionBasedSurveys(r), {
			surveys: r,
			context: { isLoaded: !0 }
		};
	}
	_registerEventOrActionBasedSurveys(e) {
		let t = e.filter((e) => function(e) {
			return !(!e.start_date || e.end_date);
		}(e) && (Ml(e) || function(e) {
			var t;
			return !!((t = e.conditions) != null && (t = t.actions) != null && (t = t.values) != null && t.length);
		}(e)));
		this._registerSurveyTriggers(t);
	}
	_registerSurveyTriggers(e) {
		var t;
		(t = this._surveyEventReceiver) == null || t.replace(e);
	}
	_shouldBackgroundRefreshSurveys() {
		return this._isSurveyCacheStale() && !this._getSurveysInFlightPromise && !this._isSurveyRefreshBackingOff();
	}
	_isSurveyCacheStale() {
		let e = this._client?.kv.get(S);
		return R(e) && Date.now() - e > 3e5;
	}
	_isSurveyRefreshBackingOff() {
		return R(this._lastSurveyRefreshFailedAt) && 3e5 > Date.now() - this._lastSurveyRefreshFailedAt;
	}
	markSurveyAsSeen(e, t) {
		Ul({
			id: e,
			current_iteration: t?.iteration ?? null
		});
		try {
			localStorage.setItem("lastSeenSurveyDate", (/* @__PURE__ */ new Date()).toISOString());
		} catch {}
		this._notifyActiveMatchingSurveyCallbacks();
	}
	_notifySurveyCallbacks(e) {
		for (let t of this._surveyCallbacks) {
			if (this._disposed) return;
			try {
				e.isLoaded ? this.getSurveys(t) : t([], e);
			} catch (e) {
				$.error("Error in survey callback", e);
			}
		}
	}
	getActiveMatchingSurveys(e, t = !1) {
		if (!L(this._surveyManager)) return this._surveyManager.getActiveMatchingSurveys(e, t);
		$.warn("init was not called");
	}
	onActiveMatchingSurveysChanged(e) {
		if (this._disposed) return () => {};
		let t = {
			callback: e,
			active: !0,
			revision: 0
		};
		this._activeMatchingSurveyCallbacks.push(t), this._startActiveMatchingSurveyConditions();
		let n = this._client?.kv.get(x);
		return this._config.disableSurveys || !this._surveyManager && this._surveyInitializationFailed && !this._isInitializingSurveys || !n && !L(this._lastSurveyRefreshFailedAt) && !this._getSurveysInFlightPromise ? this._notifyActiveMatchingSurveyCallback(t, { isLoaded: !1 }) : this._surveyManager && this._notifyActiveMatchingSurveyCallback(t), () => {
			var e;
			t.active = !1, this._activeMatchingSurveyCallbacks = this._activeMatchingSurveyCallbacks.filter((e) => e !== t), this._activeMatchingSurveyCallbacks.length === 0 && ((e = this._activeMatchingSurveyConditionsUnsubscribe) == null || e.call(this), this._activeMatchingSurveyConditionsUnsubscribe = void 0);
		};
	}
	_startActiveMatchingSurveyConditions() {
		var e;
		this._surveyManager && this._activeMatchingSurveyCallbacks.length > 0 && (this._activeMatchingSurveyConditionsUnsubscribe ??= (e = this._configSource).onMatchingConditionsChanged?.call(e, this._notifyActiveMatchingSurveyCallbacks));
	}
	_notifyActiveMatchingSurveyCallback(e, t) {
		if (this._disposed || !e.active) return;
		let n = ++e.revision, r = (r) => {
			if (!this._disposed && e.active && n === e.revision) try {
				let n = t ?? { isLoaded: !0 }, i = JSON.stringify([r, n]);
				if (i === e.lastResult) return;
				e.lastResult = i, e.callback(r, n);
			} catch (e) {
				$.error("Error in active matching surveys callback", e);
			}
		};
		try {
			t && !t.isLoaded ? r([]) : this.getActiveMatchingSurveys(r);
		} catch (e) {
			$.error("Error in active matching surveys callback", e);
		}
	}
	_getSurveyById(e) {
		let t = null;
		return this.getSurveys((n) => {
			t = n.find((t) => t.id === e) ?? null;
		}), t;
	}
	_checkSurveyEligibility(e) {
		if (L(this._surveyManager)) return {
			eligible: !1,
			reason: od
		};
		let t = typeof e == "string" ? this._getSurveyById(e) : e;
		return t ? this._surveyManager.checkSurveyEligibility(t) : {
			eligible: !1,
			reason: "Survey not found"
		};
	}
	_checkSurveyRenderability(e) {
		if (!this._client?.canCapture) return {
			eligible: !1,
			reason: "PostHog is not capturing, so a survey response cannot be recorded"
		};
		if (L(this._surveyManager)) return {
			eligible: !1,
			reason: od
		};
		let t = typeof e == "string" ? this._getSurveyById(e) : e;
		return t ? this._surveyManager.checkSurveyRenderability(t) : {
			eligible: !1,
			reason: "Survey not found"
		};
	}
	canRenderSurvey(e) {
		if (L(this._surveyManager)) return $.warn("init was not called"), {
			visible: !1,
			disabledReason: od
		};
		let t = this._checkSurveyRenderability(e);
		return {
			visible: t.eligible,
			disabledReason: t.reason
		};
	}
	canRenderSurveyAsync(e, t) {
		return L(this._surveyManager) ? ($.warn("init was not called"), Promise.resolve({
			visible: !1,
			disabledReason: od
		})) : new Promise((n) => {
			this.getSurveys((t) => {
				let r = t.find((t) => t.id === e) ?? null;
				if (r) {
					let e = this._checkSurveyRenderability(r);
					n({
						visible: e.eligible,
						disabledReason: e.reason
					});
				} else n({
					visible: !1,
					disabledReason: "Survey not found"
				});
			}, t);
		});
	}
	renderSurvey(e, t, n) {
		if (!this._client?.canCapture) return;
		if (L(this._surveyManager)) return void $.warn("init was not called");
		let r = typeof e == "string" ? this._getSurveyById(e) : e;
		if (!r?.id) return void $.warn("Survey not found");
		if (!Wl.includes(r.type)) return void $.warn(`Surveys of type ${r.type} cannot be rendered in the app`);
		let i = (typeof document > "u" ? void 0 : document)?.querySelector(t);
		if (i) {
			if (r.appearance?.surveyPopupDelaySeconds) {
				$.info(`Rendering survey ${r.id} with delay of ${r.appearance.surveyPopupDelaySeconds} seconds`);
				let e = setTimeout(() => {
					var t, a;
					this._renderTimeouts.delete(e), !this._disposed && (t = this._client) != null && t.canCapture && ($.info(`Rendering survey ${r.id} with delay of ${r.appearance?.surveyPopupDelaySeconds} seconds`), (a = this._surveyManager) == null || a.renderSurvey(r, i, n), $.info(`Survey ${r.id} rendered`));
				}, 1e3 * r.appearance.surveyPopupDelaySeconds);
				this._renderTimeouts.add(e);
				return;
			}
			this._surveyManager.renderSurvey(r, i, n);
		} else $.warn("Survey element not found");
	}
	displaySurvey(e, t) {
		var n;
		if (!this._client?.canCapture) return;
		if (L(this._surveyManager)) return void $.warn("init was not called");
		let r = this._getSurveyById(e);
		if (!r) return void $.warn("Survey not found");
		let i = r;
		if ((n = r.appearance) != null && n.surveyPopupDelaySeconds && t.ignoreDelay && (i = B(B({}, r), {}, { appearance: B(B({}, r.appearance), {}, { surveyPopupDelaySeconds: 0 }) })), t.displayType !== dc.Popover && t.initialResponses && $.warn("initialResponses is only supported for popover surveys. prefill will not be applied."), !1 === t.ignoreConditions) {
			let e = this._checkSurveyEligibility(r);
			if (!e.eligible) return void $.warn("Survey is not eligible to be displayed: ", e.reason);
		}
		t.displayType === dc.Inline ? this.renderSurvey(i, t.selector, t.properties) : this._surveyManager.handlePopoverSurvey(i, t);
	}
	cancelPendingSurvey(e) {
		L(this._surveyManager) ? $.warn("init was not called") : this._surveyManager.cancelSurvey(e);
	}
	handlePageUnload() {
		var e, t;
		(e = this._surveyManager) == null || (t = e.handlePageUnload) == null || t.call(e);
	}
}, ld = class {
	constructor(e) {
		this._instance = e;
	}
	get() {
		var e, t;
		let n = this._instance?.config;
		return {
			disableSurveys: !!n?.disable_surveys,
			cookielessMode: !!n?.cookieless_mode,
			advancedEnableSurveys: !!n?.advanced_enable_surveys,
			requestTimeoutMs: n?.surveys_request_timeout_ms ?? 1e4,
			prefillFromUrl: !!(n != null && (e = n.surveys) != null && e.prefillFromUrl),
			automaticDisplay: !n?.disable_surveys_automatic_display,
			featureFlagEvaluation: !n?.advanced_disable_feature_flags,
			overrideLanguage: n?.override_display_language,
			prepareStylesheet: n?.prepare_external_dependency_stylesheet,
			get_current_url: n?.get_current_url,
			uiHost: (t = this._instance) == null || (t = t.requestRouter) == null ? void 0 : t.endpointFor("ui", "")
		};
	}
	getExtensions() {
		let e = k?.__PosthogExtensions__;
		if (!e || !this._instance) return;
		let t = this._instance, { generateSurveys: n, loadExternalDependency: r } = e;
		return {
			generateSurveys: n ? (e) => n(t, e) : void 0,
			loadExternalDependency: r ? (e) => r(t, "surveys", e) : void 0
		};
	}
	onMatchingConditionsChanged(e) {
		let t = this._instance?._addCaptureHook((t) => {
			t !== "$pageview" && t !== lc.SHOWN && t !== lc.DISMISSED && t !== lc.SENT || e();
		}), n = () => e();
		G(E, "PHSurveyShown", n);
		let r = !1, i = this._instance?.onFeatureFlags(() => {
			r && e();
		});
		return r = !0, () => {
			r = !1, t?.(), i?.(), E?.removeEventListener("PHSurveyShown", n);
		};
	}
}, ud = E?.location ? Ns(E.location.hash, "__posthog") || Ns(location.hash, "state") : null, dd = "_postHogToolbarParams", fd = H("[Toolbar]"), pd = H("[FeatureFlags]"), md = H("[FeatureFlags]", { debugEnabled: !0 }), hd = "\" failed. Feature flags didn't load in time.", gd = [502, 504], _d = [
	"click",
	"keydown",
	"wheel",
	"touchstart",
	"pointerdown"
], vd = "connection_error", yd = (e) => {
	let t = {};
	for (let n = 0; e.length > n; n++) t[e[n]] = !0;
	return t;
}, bd = (e) => {
	let t = {};
	for (let [n, r] of Ha(e || {})) r && (t[n] = r);
	return t;
}, xd = class {
	constructor(e) {
		this.name = "featureFlags", this._override_warning = !1, this.featureFlagEventHandlers = [], this._logger = pd, this._baseEventProperties = {}, this._eventPropertiesWithFlagValues = {}, this._reloadingHandlers = [], this._pendingReloads = /* @__PURE__ */ new Set(), this._activeReloads = /* @__PURE__ */ new Set(), this._hasLoadedFlags = !1, this._requestInFlight = !1, this._requestGeneration = 0, this._reloadingDisabled = !1, this._additionalReloadRequested = !1, this._firingFeatureFlagsCallbacks = !1, this._flagsLoadedFromRemote = !1, this._staleCacheRefreshTriggered = !1, this._consecutiveStatusZeroFailures = 0, this._hadUserInteraction = !1, this._onOnline = () => {
			let e = this._hasStatusZeroCircuitBreakerTripped();
			this._consecutiveStatusZeroFailures = 0, e && this.reloadFeatureFlags();
		}, this._refreshIfDue = () => {
			let e = this._refreshIntervalMs, t = this._dueRefreshIntervalMs ?? e;
			P(e) || P(t) || this._config.remoteRequestsDisabled || !this._document || this._document.visibilityState === "hidden" || Date.now() - (this._lastRefreshAt ?? 0) < t || (this._dueRefreshIntervalMs = this._hadUserInteraction || !this._config.idleRefreshBackoff ? e : Math.min(2 * t, 36e5), this._hadUserInteraction = !1, this.reloadFeatureFlags(), this._scheduleNextRefresh());
		}, this._onUserInteraction = () => {
			this._hadUserInteraction && this._dueRefreshIntervalMs === this._refreshIntervalMs || this._resumeConfiguredInterval();
		}, this._onVisibilityChange = () => {
			this._document?.visibilityState === "visible" && this._resumeConfiguredInterval();
		}, this._configSource = e;
	}
	get _crossTabPersistence() {}
	_onConfigUpdated() {
		this._client && this._syncAutomaticRefresh();
	}
	setup(e) {
		try {
			this._window = typeof window > "u" ? void 0 : window, this._document = typeof document > "u" ? void 0 : document;
		} catch {
			this._window = void 0, this._document = void 0;
		}
		return this._initializingClient = e, this._logger = e.logger.createLogger("[FeatureFlags]"), ad(e.kv.initialize(), () => {
			this._initializingClient === e && (this._initializingClient = void 0, this._client = e, this._finishSetup(e));
		});
	}
	_finishSetup(e) {
		if (this._client === e) return this._window && G(this._window, "online", this._onOnline), this._syncAutomaticRefresh(), this._dynamicProperties = e.registerDynamicEventProperties(() => this._isCacheStale() ? this._baseEventProperties : this._eventPropertiesWithFlagValues), this._crossTabPersistenceUnsubscribe = this._crossTabPersistence?.onCrossTabFeatureFlagChange(() => {
			this._clearBootstrapState(), this._rebuildEventProperties(), this._fireFeatureFlagsCallbacks();
		}), this._rebuildEventProperties(), this.initialize();
	}
	_resumeConfiguredInterval() {
		this._hadUserInteraction = !0, this._dueRefreshIntervalMs = this._refreshIntervalMs, this._refreshIfDue();
	}
	_syncAutomaticRefresh() {
		var e;
		let t = this._config.refreshIntervalMs, n = !this._config.remoteRequestsDisabled && this._document && !P(t) && t > 0 ? t : void 0;
		this._config.idleRefreshBackoff || (this._dueRefreshIntervalMs = n), n !== this._refreshIntervalMs && (this._stopAutomaticRefresh(), P(n) || (this._refreshIntervalMs = n, this._dueRefreshIntervalMs = n, this._scheduleNextRefresh(), (e = this._document) != null && e.addEventListener && (G(this._document, y, this._onVisibilityChange), Va(_d, (e) => {
			G(this._document, e, this._onUserInteraction, { capture: !0 });
		}))));
	}
	_scheduleNextRefresh() {
		P(this._refreshIntervalMs) || (P(this._refreshInterval) || clearInterval(this._refreshInterval), this._lastRefreshAt = Date.now(), this._refreshInterval = setInterval(this._refreshIfDue, this._refreshIntervalMs));
	}
	_stopAutomaticRefresh() {
		var e, t;
		P(this._refreshInterval) || (clearInterval(this._refreshInterval), this._refreshInterval = void 0, (e = this._document) == null || (t = e.removeEventListener) == null || t.call(e, "visibilitychange", this._onVisibilityChange), Va(_d, (e) => {
			var t, n;
			(t = this._document) == null || (n = t.removeEventListener) == null || n.call(t, e, this._onUserInteraction, { capture: !0 });
		})), this._refreshIntervalMs = void 0, this._dueRefreshIntervalMs = void 0, this._hadUserInteraction = !1, this._lastRefreshAt = void 0;
	}
	destroy() {
		this._dispose();
	}
	dispose() {
		this._dispose();
	}
	_dispose() {
		var e, t, n;
		this._stopAutomaticRefresh(), this._requestGeneration++, this._additionalReloadRequested = !1, this._initializingClient = void 0, this._settleReloads(this._pendingReloads, "cancelled"), this._settleReloads(this._activeReloads, "cancelled"), this._client &&= (this._clearDebouncer(), (e = this._dynamicProperties) == null || e.dispose(), this._dynamicProperties = void 0, (t = this._crossTabPersistenceUnsubscribe) == null || t.call(this), this._crossTabPersistenceUnsubscribe = void 0, this._reloadingHandlers = [], (n = this._window) == null || n.removeEventListener("online", this._onOnline), void 0);
	}
	get _config() {
		return this._configSource.get();
	}
	_prop(e) {
		return this._bootstrapState && e in this._bootstrapState ? this._bootstrapState[e] : this._client?.kv.get(e);
	}
	_clearBootstrapState() {
		return !!this._bootstrapState && (this._bootstrapState = void 0, !0);
	}
	_fallBackToPersistedFlags() {
		return !P(this._client?.kv.get("$enabled_feature_flags")) && this._clearBootstrapState();
	}
	_set(e) {
		this._persist(() => this._client?.kv.set(e));
	}
	_markCrossTabFeatureFlagSnapshot(e, t, n) {
		if (!this._crossTabPersistence || !e.$enabled_feature_flags) return;
		let r = this._prop("$enabled_feature_flags") || {}, i = e.$enabled_feature_flags || {}, s = t.flags || t.featureFlags, f = t.flags ? Object.entries(t.flags).filter(([, e]) => !e?.failed).map(([e]) => e) : [], p = !!t.errorsWhileComputingFlags && !!t.flags, m = p ? f : n && !j(s) ? Object.keys(s || {}) : Array.from(/* @__PURE__ */ new Set([...Object.keys(r), ...Object.keys(i)])), h = this._prop("$feature_flag_payloads") || {}, _ = e.$feature_flag_payloads || {}, v = p || n ? m : Array.from(/* @__PURE__ */ new Set([...Object.keys(h), ...Object.keys(_)])), y = !p && !n, b = !!y || m, x = !!y || v, S = {
			[a]: b,
			[d]: b,
			[g]: x
		};
		e.$feature_flag_details && (S[o] = b);
		for (let t of [
			l,
			c,
			u
		]) P(e[t]) || (S[t] = !0);
		this._crossTabPersistence.markCrossTabFeatureFlagChanges(S);
	}
	_remove(e) {
		this._persist(() => this._client?.kv.remove(e));
	}
	_persist(e) {
		try {
			e();
		} catch (e) {
			this._logger.error("Failed to update feature flag persistence", e);
		}
	}
	_rebuildEventProperties() {
		let e = {};
		for (let t of [
			a,
			g,
			l,
			_
		]) {
			let n = this._prop(t);
			P(n) || (e[t] = n);
		}
		this._baseEventProperties = e;
		let t = B({}, e), n = this._prop(d);
		if (n) for (let [e, r] of Object.entries(n)) t[`$feature/${e}`] = r;
		this._eventPropertiesWithFlagValues = t;
	}
	_isCacheStale() {
		let e = this._config.cacheTtlMs;
		if (!e || 0 >= e) return !1;
		let t = this._prop(c);
		return typeof t != "number" || Date.now() - t > e;
	}
	_checkAndTriggerStaleRefresh() {
		return !!this._isCacheStale() && (this._staleCacheRefreshTriggered || this._requestInFlight || (this._staleCacheRefreshTriggered = !0, this._logger.warn("Feature flag cache is stale, triggering refresh..."), this.reloadFeatureFlags()), !0);
	}
	_getValidEvaluationEnvironments() {
		let e = this._config.evaluationContexts;
		return e?.length ? e.filter((e) => {
			let t = e && typeof e == "string" && e.trim().length > 0;
			return t || this._logger.error("Invalid evaluation context found:", e, "Expected non-empty string"), t;
		}) : [];
	}
	_getValidFlagKeys() {
		let e = this._config.flagKeys;
		if (!P(e)) return e.filter((e) => {
			let t = e && typeof e == "string" && e.trim().length > 0;
			return t || this._logger.error("Invalid flag key found:", e, "Expected non-empty string"), t;
		});
	}
	initialize() {
		let e = this._config, t = e.bootstrap?.featureFlags ?? {};
		if (Object.keys(t).length) {
			let n = e.bootstrap?.featureFlagPayloads ?? {}, r = Object.keys(t).filter((e) => !P(t[e])).reduce((e, n) => (e[n] = t[n], e), {}), i = Object.keys(n).filter((e) => r[e]).reduce((e, t) => (e[t] = n[t], e), {});
			return this._receivedFeatureFlags({
				featureFlags: r,
				featureFlagPayloads: i
			}, void 0, { persist: !1 });
		}
	}
	updateFlags(e, t, n) {
		var r, i;
		let a = n?.merge && (r = this._prop("$enabled_feature_flags")) != null ? r : {}, o = n?.merge && (i = this._prop("$feature_flag_payloads")) != null ? i : {}, s = B(B({}, a), e), c = B(B({}, o), t), l = {};
		for (let [e, t] of Object.entries(s)) l[e] = {
			key: e,
			enabled: hi(t),
			variant: gi(t),
			reason: void 0,
			metadata: P(c?.[e]) ? void 0 : {
				id: 0,
				version: void 0,
				description: void 0,
				payload: c[e]
			}
		};
		this._receivedFeatureFlags({ flags: l });
	}
	get hasLoadedFlags() {
		return this._hasLoadedFlags;
	}
	getFlags() {
		return Object.keys(this.getFlagVariants());
	}
	getFlagsWithDetails() {
		let e = this._prop(o), t = this._prop(_), n = this._prop(v);
		if (!n && !t) return e || {};
		let r = W({}, e || {}), i = [.../* @__PURE__ */ new Set([...Object.keys(n || {}), ...Object.keys(t || {})])];
		for (let e of i) {
			var a, s;
			let i = r[e], o = t?.[e], c = P(o) ? (a = i?.enabled) != null && a : !!o, l = P(o) ? i?.variant : typeof o == "string" ? o : void 0, u = n?.[e], d = B(B({}, i), {}, {
				enabled: c,
				variant: c ? l ?? i?.variant : void 0
			});
			c !== i?.enabled && (d.original_enabled = i?.enabled), l !== i?.variant && (d.original_variant = i?.variant), u && (d.metadata = B(B({}, i?.metadata), {}, {
				payload: u,
				original_payload: i == null || (s = i.metadata) == null ? void 0 : s.payload
			})), r[e] = d;
		}
		return this._override_warning ||= (this._logger.warn(" Overriding feature flag details!", {
			flagDetails: e,
			overriddenPayloads: n,
			finalDetails: r
		}), !0), r;
	}
	getAllFeatureFlags() {
		let e = this.getFlagVariants(), t = this.getFlagPayloads();
		return Object.keys(e).map((n) => {
			let r = e[n];
			return {
				key: n,
				enabled: hi(r),
				variant: gi(r),
				payload: mi(t[n])
			};
		});
	}
	getFlagVariants() {
		let e = this._prop(d), t = this._prop(_);
		if (!t) return e || {};
		let n = W({}, e || {}), r = Object.keys(t);
		for (let e = 0; r.length > e; e++) n[r[e]] = t[r[e]];
		return this._override_warning ||= (this._logger.warn(" Overriding feature flags!", {
			enabledFlags: e,
			overriddenFlags: t,
			finalFlags: n
		}), !0), n;
	}
	getFlagPayloads() {
		let e = this._prop(g), t = this._prop(v);
		if (!t) return e || {};
		let n = W({}, e || {}), r = Object.keys(t);
		for (let e = 0; r.length > e; e++) n[r[e]] = t[r[e]];
		return this._override_warning ||= (this._logger.warn(" Overriding feature flag payloads!", {
			flagPayloads: e,
			overriddenPayloads: t,
			finalPayloads: n
		}), !0), n;
	}
	reloadFeatureFlags() {
		this._reloadingDisabled || this._config.featureFlagsDisabled || this._hasStatusZeroCircuitBreakerTripped() || (this._firingFeatureFlagsCallbacks && this._logger.warn("reloadFeatureFlags() was called inside an onFeatureFlags callback. This callback also runs when flags change in other tabs, so this can cause a request loop."), this._requestInFlight && (this._additionalReloadRequested = !0), this._reloadDebouncer ||= (this._reloadingHandlers.slice().forEach((e) => {
			try {
				e();
			} catch (e) {
				this._logger.error("Error while running feature flags reloading callback", e);
			}
		}), setTimeout(() => {
			this._callFlagsEndpoint();
		}, 5)));
	}
	reloadFeatureFlagsAsync() {
		return !this._client || this._reloadingDisabled || this._config.featureFlagsDisabled || this._config.remoteRequestsDisabled || this._hasStatusZeroCircuitBreakerTripped() ? Promise.resolve({ status: "skipped" }) : new Promise((e) => {
			this._pendingReloads.add(e), this.reloadFeatureFlags();
		});
	}
	_settleReloads(e, t) {
		e.forEach((e) => e({ status: t })), e.clear();
	}
	_clearDebouncer() {
		clearTimeout(this._reloadDebouncer), this._reloadDebouncer = void 0;
	}
	onReloading(e) {
		return this._reloadingHandlers.push(e), () => {
			this._reloadingHandlers = this._reloadingHandlers.filter((t) => t !== e);
		};
	}
	ensureFlagsLoaded() {
		this._hasLoadedFlags || this._requestInFlight || this._reloadDebouncer || this.reloadFeatureFlags();
	}
	setAnonymousDistinctId(e) {
		this.$anon_distinct_id = e;
	}
	setReloadingPaused(e) {
		this._reloadingDisabled = e;
	}
	resetFlagCallReported() {
		this._remove(m);
	}
	_callFlagsEndpoint(e) {
		this._clearDebouncer();
		let t = this._client;
		if (!t || this._config.remoteRequestsDisabled || this._hasStatusZeroCircuitBreakerTripped()) return void this._settleReloads(this._pendingReloads, "skipped");
		if (this._requestInFlight) return void (this._additionalReloadRequested = !0);
		let n = {
			token: t.projectToken,
			distinct_id: t.distinctId,
			groups: t.groups,
			$anon_distinct_id: this.$anon_distinct_id,
			person_properties: B(B(B({}, t.initialPersonProperties), this._prop("$stored_person_properties") || {}), {}, {
				$lib: t.library.name,
				$lib_version: t.library.version
			}),
			group_properties: this._prop(f),
			timezone: Ts()
		};
		P(t.deviceId) || (n.$device_id = t.deviceId), (e != null && e.disableFlags || this._config.featureFlagsDisabled) && (n.disable_flags = !0);
		let r = this._getValidEvaluationEnvironments();
		r.length && (n.evaluation_contexts = r);
		let i = this._getValidFlagKeys();
		P(i) || (n.flag_keys = i);
		let a = this._config.onlyEvaluateSurveyFeatureFlags, o = "/flags/?v=2" + (a ? "&only_evaluate_survey_feature_flags=true" : ""), c = this._requestGeneration, l = this._pendingReloads;
		this._pendingReloads = /* @__PURE__ */ new Set(), this._activeReloads = l, this._requestInFlight = !0;
		let u = () => {
			this._additionalReloadRequested && (this._additionalReloadRequested = !1, this._callFlagsEndpoint());
		}, d = (e) => {
			let t = e.json ?? {}, r = e.statusCode !== 200;
			if (this._requestInFlight = !1, c !== this._requestGeneration) return void u();
			if (this._trackStatusZeroReachability(e.statusCode), r || this._additionalReloadRequested || (this.$anon_distinct_id = void 0), n.disable_flags && !this._additionalReloadRequested) return void this._settleReloads(l, "skipped");
			this._flagsLoadedFromRemote = !r;
			let i = [];
			e.error ? i.push(e.error instanceof Error && e.error.name === "AbortError" ? "timeout" : e.error instanceof Error ? vd : "unknown_error") : e.statusCode !== 200 && i.push(`api_error_${e.statusCode}`), t.errorsWhileComputingFlags && i.push("errors_while_computing_flags");
			let o = !!t.quotaLimited?.includes("feature_flags");
			o && i.push("quota_limited"), this._set({ [s]: i }), o ? this._logger.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.") : n.disable_flags || this._receivedFeatureFlags(t, r, { partialResponse: a }), this._settleReloads(l, n.disable_flags ? "skipped" : i.length || !t.flags && !t.featureFlags ? "error" : "loaded"), u();
		}, p = (e) => {
			this._requestInFlight = !1, c === this._requestGeneration && (this._set({ [s]: [vd] }), this._logger.error("Feature flag request failed", e), this._fallBackToPersistedFlags() && this._fireFeatureFlagsCallbacks(!0), this._settleReloads(l, "error")), u();
		}, m = this._config.requestMaxRetries ?? 1, h = () => m > 0 && c === this._requestGeneration, g = () => {
			if (c !== this._requestGeneration || !this._client || this._config.remoteRequestsDisabled) return this._requestInFlight = !1, this._settleReloads(l, "skipped"), void u();
			try {
				t.sendRequest(o, {
					target: "flags",
					method: "POST",
					body: n,
					compression: this._config.compression,
					sentAt: "body",
					timeoutMs: this._config.requestTimeoutMs
				}).then((e) => {
					if (((e) => gd.includes(e.statusCode) || ((e) => e.statusCode === 0 && e.error instanceof Error && e.error.name === "AbortError")(e))(e) && h()) return m--, void setTimeout(g, 500);
					d(e);
				}).catch(p);
			} catch (e) {
				p(e);
			}
		};
		g();
	}
	_hasStatusZeroCircuitBreakerTripped() {
		return Os(this._consecutiveStatusZeroFailures, 3);
	}
	_trackStatusZeroReachability(e) {
		this._consecutiveStatusZeroFailures = ks(e, this._consecutiveStatusZeroFailures, 3, () => this._logger.warn("Feature flag requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped refreshing feature flags; will try again when connectivity changes."));
	}
	getFeatureFlag(e, t = {}) {
		if (t.fresh && !this._flagsLoadedFromRemote) return;
		if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return void this._logger.warn("getFeatureFlag for key \"" + e + hd);
		if (this._checkAndTriggerStaleRefresh()) return;
		let n = this.getFeatureFlagResult(e, t);
		return n?.variant ?? n?.enabled;
	}
	getFeatureFlagDetails(e) {
		return this.getFlagsWithDetails()[e];
	}
	getFeatureFlagPayload(e) {
		return this.getFeatureFlagResult(e, { send_event: !1 })?.payload;
	}
	getFeatureFlagResult(e, t = {}) {
		if (t.fresh && !this._flagsLoadedFromRemote) return;
		if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return void this._logger.warn("getFeatureFlagResult for key \"" + e + hd);
		if (this._checkAndTriggerStaleRefresh()) return;
		let n = this.getFlagVariants(), r = e in n, i = n[e], a = this.getFlagPayloads()[e], o = String(i), s = this._prop("$feature_flag_request_id") || void 0, c = this._prop("$feature_flag_evaluated_at") || void 0, l, u = this._prop("$flag_call_reported") || {};
		if (this._config.deduplicateCallsPerSession) {
			var d;
			let e = (d = this._client) == null || (d = d.session) == null ? void 0 : d.sessionId, t = this._prop(h);
			e && e !== t && (u = {}, l = e);
		}
		if (!t.send_event && "send_event" in t) l && this._set({
			[m]: u,
			[h]: l
		});
		else {
			let t = this._client?.canCapture;
			if (!t && Object.keys(u).length > 0 && (u = {}, this._set({ [m]: u })), t && !u[e]?.includes(o)) {
				var f, p, g, _, v, y, b, x, S;
				j(u[e]) ? u[e].push(o) : u[e] = [o], this._set(B({ [m]: u }, l ? { [h]: l } : {}));
				let t = this.getFeatureFlagDetails(e), n = [...this._prop("$feature_flag_errors") ?? []];
				P(i) && n.push("flag_missing");
				let r = {
					$feature_flag: e,
					$feature_flag_response: i,
					$feature_flag_payload: a ?? null,
					$feature_flag_request_id: s,
					$feature_flag_evaluated_at: c,
					$feature_flag_bootstrapped_response: ((f = this._config.bootstrap) == null || (f = f.featureFlags) == null ? void 0 : f[e]) ?? null,
					$feature_flag_bootstrapped_payload: ((p = this._config.bootstrap) == null || (p = p.featureFlagPayloads) == null ? void 0 : p[e]) ?? null,
					$used_bootstrap_value: !this._flagsLoadedFromRemote
				};
				P(t == null || (g = t.metadata) == null ? void 0 : g.has_experiment) || (r.$feature_flag_has_experiment = t.metadata.has_experiment), P(t == null || (_ = t.metadata) == null ? void 0 : _.version) || (r.$feature_flag_version = t.metadata.version);
				let d = (t == null || (v = t.reason) == null ? void 0 : v.description) ?? (t == null || (y = t.reason) == null ? void 0 : y.code);
				d && (r.$feature_flag_reason = d), t != null && (b = t.metadata) != null && b.id && (r.$feature_flag_id = t.metadata.id), P(t?.original_variant) && P(t?.original_enabled) || (r.$feature_flag_original_response = P(t.original_variant) ? t.original_enabled : t.original_variant), t != null && (x = t.metadata) != null && x.original_payload && (r.$feature_flag_original_payload = t == null || (S = t.metadata) == null ? void 0 : S.original_payload), n.length && (r.$feature_flag_error = n.join(",")), this._captureFeatureFlagCalled(r);
			} else l && this._set({
				[m]: u,
				[h]: l
			});
		}
		return r ? {
			key: e,
			enabled: !!i,
			variant: typeof i == "string" ? i : void 0,
			payload: mi(a)
		} : void 0;
	}
	_captureFeatureFlagCalled(e) {
		try {
			var t;
			(t = this._client) == null || t.capture("$feature_flag_called", e);
		} catch (e) {
			this._logger.error("Failed to capture feature flag call", e);
		}
	}
	getRemoteConfigPayload(e, t) {
		this._getRemoteConfigPayload(e, t);
	}
	_getRemoteConfigPayload(e, t) {
		var n = this;
		return z(function* () {
			let r = n._client;
			if (!r) return;
			let i = {
				distinct_id: r.distinctId,
				token: r.projectToken,
				person_properties: {
					$lib: r.library.name,
					$lib_version: r.library.version
				}
			}, a = n._getValidEvaluationEnvironments();
			a.length && (i.evaluation_contexts = a);
			let o = n._getValidFlagKeys(), s;
			P(o) || (i.flag_keys = o);
			try {
				s = (yield r.sendRequest("/flags/?v=2", {
					target: "flags",
					method: "POST",
					body: i,
					compression: n._config.compression,
					sentAt: "body",
					timeoutMs: n._config.requestTimeoutMs
				})).json?.featureFlagPayloads?.[e] || void 0;
			} catch (e) {
				n._logger.error("Remote config feature flag request failed", e);
				return;
			}
			try {
				t(s);
			} catch (e) {
				n._logger.error("Remote config feature flag callback failed", e);
			}
		})();
	}
	isFeatureEnabled(e, t = {}) {
		if (t.fresh && !this._flagsLoadedFromRemote) return t.defaultValue;
		if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return this._logger.warn("isFeatureEnabled for key \"" + e + hd), t.defaultValue;
		let n = this.getFeatureFlag(e, t);
		return P(n) ? t.defaultValue : !!n;
	}
	addFeatureFlagsHandler(e) {
		this.featureFlagEventHandlers.push(e);
	}
	removeFeatureFlagsHandler(e) {
		this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((t) => t !== e);
	}
	receivedFeatureFlags(e, t, n) {
		this._receivedFeatureFlags(e, t, n);
	}
	_receivedFeatureFlags(e, t, n) {
		if (!this._client) return;
		this._hasLoadedFlags = !0;
		let r = ((e, t = {}, n = {}, r = {}, i, s = pd) => {
			let f = ((e, t) => {
				let n = e.flags;
				if (n) {
					let t = Object.fromEntries(Object.keys(n).map((e) => [e, n[e].variant ?? n[e].enabled])), r = Object.fromEntries(Object.keys(n).filter((e) => n[e].enabled).filter((e) => !P(n[e].metadata?.payload)).map((e) => [e, n[e].metadata?.payload]));
					return B(B({}, e), {}, {
						featureFlags: t,
						featureFlagPayloads: r
					});
				}
				return e.featureFlags && t.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"), e;
			})(e, s), p = f.flags, m = f.featureFlags, h = f.featureFlagPayloads;
			if (!m) return;
			let _ = e.requestId, v = e.evaluatedAt;
			if (j(m)) {
				s.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.");
				let e = {};
				if (m) for (let t = 0; m.length > t; t++) e[m[t]] = !0;
				return {
					[a]: m,
					[d]: e,
					[u]: !1
				};
			}
			let y = m, b = h, x = p;
			if (i?.partialResponse) {
				let e = Object.keys(y), i = b || {};
				y = B(B({}, t), y), b = B(B({}, n), i), e.forEach((e) => {
					e in i || b == null || delete b[e];
				}), x = B(B({}, r), x);
			} else if (e.errorsWhileComputingFlags) {
				if (p) {
					let e = new Set(Object.keys(p).filter((e) => !p[e]?.failed));
					y = B(B({}, t), Object.fromEntries(Object.entries(y).filter(([t]) => e.has(t))));
					let i = Object.fromEntries(Object.entries(b || {}).filter(([t]) => e.has(t)));
					b = B(B({}, n), i), e.forEach((e) => {
						e in i || b == null || delete b[e];
					}), x = B(B({}, r), Object.fromEntries(Object.entries(x || {}).filter(([t]) => e.has(t))));
				} else y = B(B({}, t), y), b = B(B({}, n), b), x = B(B({}, r), x);
			}
			return B(B({
				[a]: Object.keys(bd(y)),
				[d]: y || {},
				[g]: b || {},
				[o]: x || {},
				[u]: !0 === e.minimalFlagCalledEvents
			}, _ ? { [l]: _ } : {}), v ? { [c]: v } : {});
		})(e, this.getFlagVariants(), this.getFlagPayloads(), this.getFlagsWithDetails(), n, this._logger);
		if (r) {
			if (!1 === n?.persist) {
				let e = !P(this._client.kv.get(d));
				this._bootstrapState = r, e || this._set(r);
			} else this._clearBootstrapState(), this._markCrossTabFeatureFlagSnapshot(r, e, !!n?.partialResponse), this._set(r);
		} else t && this._fallBackToPersistedFlags();
		t || (this._staleCacheRefreshTriggered = !1), this._fireFeatureFlagsCallbacks(t);
	}
	override(e, t = !1) {
		this._logger.warn("override is deprecated. Please use overrideFeatureFlags instead."), this.overrideFeatureFlags({
			flags: e,
			suppressWarning: t
		});
	}
	overrideFeatureFlags(e) {
		this._overrideFeatureFlags(e);
	}
	_overrideFeatureFlags(e) {
		if (this._client) {
			if (!1 === e) return this._remove([_, v]), this._fireFeatureFlagsCallbacks(), void md.info("All overrides cleared");
			if (j(e)) return this._set({ [_]: yd(e) }), this._fireFeatureFlagsCallbacks(), void md.info("Flag overrides set", { flags: e });
			if (e && typeof e == "object" && ("flags" in e || "payloads" in e)) {
				var t;
				let n = e;
				this._override_warning = !!((t = n.suppressWarning) != null && t);
				let r = {}, i = n.flags, a = n.payloads;
				i && (r[_] = j(i) ? yd(i) : i), a && (r[v] = a), Object.keys(r).length && this._set(r), !1 === i && !1 === a ? this._remove([_, v]) : !1 === i ? this._remove(_) : !1 === a && this._remove(v), this._fireFeatureFlagsCallbacks(), !1 === i ? md.info("Flag overrides cleared") : i && md.info("Flag overrides set", { flags: i }), !1 === a ? md.info("Payload overrides cleared") : a && md.info("Payload overrides set", { payloads: a });
				return;
			}
			if (e && typeof e == "object") return this._set({ [_]: e }), this._fireFeatureFlagsCallbacks(), void md.info("Flag overrides set", { flags: e });
			this._logger.warn("Invalid overrideOptions provided to overrideFeatureFlags", { overrideOptions: e });
		} else this._logger.warn("posthog.featureFlags.overrideFeatureFlags called before feature flags were ready");
	}
	onFeatureFlags(e) {
		if (this.addFeatureFlagsHandler(e), this._hasLoadedFlags) {
			let { flags: t, flagVariants: n } = this._prepareFeatureFlagsForCallbacks();
			try {
				e(t, n);
			} catch (e) {
				this._logger.error("Error while running feature flags callback", e);
			}
		}
		return () => this.removeFeatureFlagsHandler(e);
	}
	updateEarlyAccessFeatureEnrollment(e, t, n) {
		var r;
		let i = (this._prop("$early_access_features") || []).find((t) => t.flagKey === e), o = { [`$feature_enrollment/${e}`]: t }, s = {
			$feature_flag: e,
			$feature_enrollment: t,
			$set: o
		};
		i && (s.$early_access_feature_name = i.name), n && (s.$feature_enrollment_stage = n);
		let c = B(B({}, this.getFlagVariants()), {}, { [e]: t });
		(r = this._crossTabPersistence) == null || r.markCrossTabFeatureFlagChanges({
			$active_feature_flags: [e],
			$enabled_feature_flags: [e],
			$stored_person_properties: Object.keys(o)
		}), this._set({
			[a]: Object.keys(bd(c)),
			[d]: c,
			[p]: B(B({}, this._prop("$stored_person_properties") || {}), o)
		}), this._fireFeatureFlagsCallbacks();
		try {
			var l;
			(l = this._client) == null || l.capture("$feature_enrollment_update", s);
		} catch (e) {
			this._logger.error("Failed to capture early access feature enrollment", e);
		}
	}
	getEarlyAccessFeatures(e, t = !1, n) {
		let r = this._prop(i);
		!r || t ? this._getEarlyAccessFeatures(e, n) : e(r);
	}
	_getEarlyAccessFeatures(e, t) {
		var n = this;
		return z(function* () {
			let r = n._client;
			if (!r) return;
			let a = t ? `&${t.map((e) => `stage=${e}`).join("&")}` : "", o;
			try {
				let e = yield r.sendRequest(`/api/early_access_features/?token=${r.projectToken}${a}`, {
					target: "api",
					method: "GET",
					sentAt: "query"
				});
				if (!e.json) return;
				o = e.json.earlyAccessFeatures, n._set({ [i]: o });
			} catch (e) {
				n._logger.error("Early access feature request failed", e);
				return;
			}
			try {
				e(o);
			} catch (e) {
				n._logger.error("Early access feature callback failed", e);
			}
		})();
	}
	_prepareFeatureFlagsForCallbacks() {
		let e = this.getFlags(), t = this.getFlagVariants();
		return {
			flags: e.filter((e) => t[e]),
			flagVariants: Object.keys(t).filter((e) => t[e]).reduce((e, n) => (e[n] = t[n], e), {})
		};
	}
	_fireFeatureFlagsCallbacks(e) {
		this._rebuildEventProperties();
		let { flags: t, flagVariants: n } = this._prepareFeatureFlagsForCallbacks(), r = this._firingFeatureFlagsCallbacks;
		this._firingFeatureFlagsCallbacks = !0, this.featureFlagEventHandlers.forEach((r) => {
			try {
				r(t, n, { errorsLoading: e });
			} catch (e) {
				this._logger.error("Error while running feature flags callback", e);
			}
		}), this._firingFeatureFlagsCallbacks = r;
	}
	setPersonPropertiesForFlags(e, t = !0) {
		this._setPersonPropertiesForFlags(e, t);
	}
	_setPersonPropertiesForFlags(e, t = !0) {
		let n = this._prop("$stored_person_properties") || {}, r = e?.$set || (e?.$set_once ? {} : e), i = e?.$set_once, a = {};
		if (i) for (let e in i) ({}).hasOwnProperty.call(i, e) && (e in n || (a[e] = i[e]));
		this._set({ [p]: B(B(B({}, n), a), r) }), t && this.reloadFeatureFlags();
	}
	unsetPersonPropertiesForFlags(e, t = !0) {
		let n = B({}, this._prop("$stored_person_properties") || {});
		e.forEach((e) => {
			delete n[e];
		}), this._set({ [p]: n }), t && this.reloadFeatureFlags();
	}
	resetPersonPropertiesForFlags(e = !0) {
		this._remove(p), e && this.reloadFeatureFlags();
	}
	setGroupPropertiesForFlags(e, t = !0) {
		let n = this._prop("$stored_group_properties") || {}, r = B({}, n);
		for (let t of Object.keys(e)) r[t] = B(B({}, n[t]), e[t]);
		this._set({ [f]: r }), t && this.reloadFeatureFlags();
	}
	resetGroupPropertiesForFlags(e) {
		if (e) {
			let t = this._prop("$stored_group_properties") || {};
			this._set({ [f]: B(B({}, t), {}, { [e]: {} }) });
		} else this._remove(f);
	}
	reset() {
		this._requestGeneration++, this._settleReloads(this._pendingReloads, "cancelled"), this._settleReloads(this._activeReloads, "cancelled"), this._additionalReloadRequested = !1, this._baseEventProperties = {}, this._eventPropertiesWithFlagValues = {}, this._bootstrapState = void 0, this._hasLoadedFlags = !1, this._reloadingDisabled = !1, this._flagsLoadedFromRemote = !1, this.$anon_distinct_id = void 0, this._clearDebouncer(), this._override_warning = !1, this._consecutiveStatusZeroFailures = 0;
	}
}, Sd = H("[FeatureFlags]"), Cd = class {
	constructor(e, t = !1) {
		this._loggedEvaluationEnvironmentsDeprecation = !1, this.update(e, t);
	}
	update(e, t) {
		this._snapshot = ((e, t) => ({
			bootstrap: {
				featureFlags: e.bootstrap?.featureFlags ?? void 0,
				featureFlagPayloads: e.bootstrap?.featureFlagPayloads ?? void 0
			},
			remoteRequestsDisabled: t,
			featureFlagsDisabled: !!e.advanced_disable_feature_flags,
			onlyEvaluateSurveyFeatureFlags: !!e.advanced_only_evaluate_survey_feature_flags,
			deduplicateCallsPerSession: !!e.advanced_feature_flags_dedup_per_session,
			cacheTtlMs: e.feature_flag_cache_ttl_ms,
			refreshIntervalMs: e.remote_config_refresh_interval_ms ?? 3e5,
			idleRefreshBackoff: P(e.remote_config_refresh_interval_ms),
			requestTimeoutMs: e.feature_flag_request_timeout_ms,
			requestMaxRetries: Math.max(0, e.feature_flag_request_max_retries ?? 1),
			compression: e.disable_compression ? void 0 : "best-available",
			evaluationContexts: e.evaluation_contexts ?? e.evaluation_environments ?? [],
			flagKeys: j(e.flag_keys) ? e.flag_keys : void 0
		}))(e, t), !e.evaluation_environments || e.evaluation_contexts || this._loggedEvaluationEnvironmentsDeprecation || (Sd.warn("evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version."), this._loggedEvaluationEnvironmentsDeprecation = !0), P(e.flag_keys) || j(e.flag_keys) || Sd.error("Invalid flag_keys found:", e.flag_keys, "Expected array of non-empty strings");
	}
	get() {
		return this._snapshot;
	}
}, wd = (e) => Wt(e) && (e.name === "RangeError" && e.message.indexOf("Maximum call stack size exceeded") === 0 || e.name === "InternalError" && e.message === "too much recursion"), Td = H("[Error tracking]"), Ed = "webkit-masked-url:", Dd = [{
	value: "isolatedAPI.contexts.topHostname",
	exact: !1
}, {
	value: "No response from target",
	exact: !0
}], Od = [
	"chrome-extension://",
	"moz-extension://",
	"safari-extension:",
	"safari-web-extension:",
	Ed
], kd = ["__firefox__", "__gCrWeb"], Ad = "Refusing to render web experiment since the viewer is a likely bot", jd = {
	icontains: (e, t) => t.toLowerCase().indexOf(e.toLowerCase()) > -1,
	not_icontains: (e, t) => t.toLowerCase().indexOf(e.toLowerCase()) === -1,
	regex: (e, t) => Nl(t, e),
	not_regex: (e, t) => !Nl(t, e),
	exact: (e, t) => t === e,
	is_not: (e, t) => t !== e
}, Md = H("[Conversations]"), Nd = "Conversations not available yet.";
function Pd(e, t) {
	let n = e?.flushIntervalMs ?? 3e3, r = e?.maxBufferSize ?? 100, i = t?.consoleCapture ? void 0 : e?.maxLogsPerInterval ?? 1e3, a = P(i) ? Math.max(r, 2048) : Math.max(r, i), o = B(B({}, function() {
		let e = "", t = "";
		try {
			var n;
			let r = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : void 0, i = r == null || (n = r.navigator) == null ? void 0 : n.userAgent;
			i && ([e, t] = tr(i));
		} catch {}
		return function(e, t) {
			let n = function(e) {
				if (e) return {}.hasOwnProperty.call(ba, e) ? ba[e] : e;
			}(e);
			return B(B({}, n ? { "os.name": n } : {}), t ? { "os.version": t } : {});
		}(e, t);
	}()), e?.resourceAttributes);
	return {
		serviceName: o?.["service.name"] ?? e?.serviceName ?? t?.serviceNameDefault,
		serviceVersion: o?.["service.version"] ?? e?.serviceVersion,
		environment: o?.["deployment.environment"] ?? e?.environment,
		resourceAttributes: o,
		beforeSend: e?.beforeSend,
		flushIntervalMs: n,
		maxBufferSize: r,
		maxQueueSize: a,
		maxBatchRecordsPerPost: 100,
		rateCapWindowMs: n,
		maxLogsPerInterval: i,
		backgroundFlushBudgetMs: 0,
		terminationFlushBudgetMs: 0
	};
}
var Fd = [
	"debug",
	"log",
	"warn",
	"error",
	"info"
], Id = (e) => {
	for (; e?.__rrweb_original__;) e = e.__rrweb_original__;
	return e;
}, Ld = "console", Rd = "__posthogHandledLogsRequestError", zd = (e, t) => {
	let n = e instanceof Error ? e : Error(t);
	return n[Rd] = !0, n;
}, Bd = (e) => !!e && typeof e == "object" && !0 === e[Rd], Vd = class {
	get _coreLogger() {
		return B(B({}, this._logger), {}, { error: (...e) => {
			e.some(Bd) || this._logger.error(...e);
		} });
	}
	constructor(e, t) {
		this._configSource = e, this._getSdkContext = t, this.name = "logs", this._isLogsEnabled = !1, this._isLoaded = !1, this._isLoading = !1, this._logger = H("[logs]"), this._queue = [], this._consoleQueue = [], this._consecutiveStatusZeroFailures = 0, this._setupStarted = !1, this._disposed = !1, this._consoleBuffer = [], this._consoleRecorderUnpatchers = [], this._isRecordingConsole = !1, this._isRecordingConsoleEntry = !1, this._listeningForReconnect = !1, this._onReconnect = () => {
			var e, t;
			this._disposed || (this._consecutiveStatusZeroFailures = 0, (e = this._core) == null || e.onReconnect(), (t = this._consoleCore) == null || t.onReconnect());
		}, this._isLogsEnabled = !!e.get()?.captureConsoleLogs;
	}
	get _isRequestReady() {
		return !0;
	}
	_getConsoleLoader() {}
	_listenForReconnect() {
		if (!this._listeningForReconnect) {
			try {
				this._window = typeof window > "u" ? void 0 : window;
			} catch {
				this._window = void 0;
			}
			this._window && (G(this._window, "online", this._onReconnect), this._listeningForReconnect = !0);
		}
	}
	_buildCore(e, t, n, r) {
		this._listenForReconnect();
		let i = Pd(this._configSource.get(), n);
		return [new Aa(this._createHost(e, t), i, this._coreLogger, () => this._getSdkContext(), (e) => e(), void 0, r), i];
	}
	_getCore() {
		let e = this._configSource.get();
		var t;
		return this._core && this._resolvedFrom === e || ((t = this._core) == null || t.reset(), this._resolvedFrom = e, [this._core, this._resolvedConfig] = this._buildCore(() => this._queue, (e) => {
			this._queue = e;
		})), this._core;
	}
	_getConsoleCore() {
		let e = this._configSource.get();
		var t;
		return this._consoleCore && this._consoleResolvedFrom === e || ((t = this._consoleCore) == null || t.reset(), this._consoleResolvedFrom = e, [this._consoleCore, this._consoleResolvedConfig] = this._buildCore(() => this._consoleQueue, (e) => {
			this._consoleQueue = e;
		}, {
			serviceNameDefault: "posthog-browser-logs",
			consoleCapture: !0
		}, Ld)), this._consoleCore;
	}
	setup(e) {
		if (!this._disposed && !this._setupStarted) return this._setupStarted = !0, this._client = e, this._logger = e.logger.createLogger("[logs]"), ad(e.kv.initialize(), () => {
			this._disposed || this._finishSetup(e);
		});
	}
	_finishSetup(e) {
		var t;
		this._listenForReconnect(), (t = this._configSource.get()) != null && t.captureConsoleLogs && (this._isLogsEnabled = !0), (this._isLogsEnabled || this._configSource.remoteConfigWillArrive && e.kv.get(this._configSource.captureHintKey)) && this._startConsoleRecorder();
		let n = !1, r = e.onRemoteConfig((e) => {
			n = e.ok && !0 === e.config.logs?.captureConsoleLogs, this.onRemoteConfig(e);
		});
		this._disposed ? r.dispose() : (this._remoteConfigSubscription = r, n || this.loadIfEnabled());
	}
	dispose() {
		var e, t, n, r, i, a, o;
		this._disposed || (this._disposed = !0, this._stopConsoleRecorder(), (e = this._remoteConfigSubscription) == null || e.dispose(), this._remoteConfigSubscription = void 0, this._client = void 0, this._isLoading = !1, (t = this._window) == null || t.removeEventListener("online", this._onReconnect), (n = this._consoleLogsDispose) == null || n.call(this), this._consoleLogsDispose = void 0, (r = this._core) == null || r.clearQueue(), (i = this._consoleCore) == null || i.clearQueue(), (a = this._core) == null || a.reset(), (o = this._consoleCore) == null || o.reset());
	}
	onRemoteConfig(e) {
		var t;
		if (this._disposed) return;
		let n = e.ok ? e.config.logs?.captureConsoleLogs : void 0;
		L(n) ? this._stopRecorderStartedByPersistedHint() : ((t = this._client) == null || t.kv.set(this._configSource.captureHintKey, !!n), n ? (this._isLogsEnabled = !0, this._isLoaded || this._startConsoleRecorder(), this.loadIfEnabled()) : this._stopRecorderStartedByPersistedHint());
	}
	reset() {
		var e, t, n, r;
		this._stopConsoleRecorder(), (e = this._core) == null || e.clearQueue(), this._queue = [], (t = this._core) == null || t.reset(), (n = this._consoleCore) == null || n.clearQueue(), this._consoleQueue = [], (r = this._consoleCore) == null || r.reset(), this._consecutiveStatusZeroFailures = 0;
	}
	captureLog(e) {
		!this._disposed && this._client && this._getCore().captureLog(e);
	}
	captureConsoleLog(e) {
		!this._disposed && this._client && this._getConsoleCore().captureLog(e);
	}
	captureBufferedConsoleLog(e, t, n) {
		!this._disposed && this._client && this._getConsoleCore().captureLog(e, {
			context: t,
			occurredAtMs: n
		});
	}
	_onOptOut() {
		var e;
		this._stopConsoleRecorder(), (e = this._consoleCore) == null || e.clearQueue(), this._consoleQueue = [];
	}
	_stopRecorderStartedByPersistedHint() {
		this._isLogsEnabled || this._stopConsoleRecorder();
	}
	_startConsoleRecorder() {
		if (this._isRecordingConsole || !this._window?.console) return;
		let e = Pd(this._configSource.get()).maxBufferSize, t = !0;
		this._consoleRecorderUnpatchers.push(() => {
			t = !1;
		});
		for (let n of Fd) {
			let r;
			try {
				r = Id(this._window.console[n]);
			} catch {
				continue;
			}
			r && this._consoleRecorderUnpatchers.push(Lu(this._window.console, n, (i) => {
				let a = (...r) => {
					try {
						t && this._recordConsoleEntry(n, r, e);
					} catch {}
					return i.apply(this._window.console, r);
				};
				return a.__rrweb_original__ = r, a;
			}));
		}
		this._isRecordingConsole = !0, this._consoleRecorderTimeout = setTimeout(() => {
			this._stopConsoleRecorder();
		}, 3e4);
	}
	_recordConsoleEntry(e, t, n) {
		if (this._isRecordingConsole && !this._isRecordingConsoleEntry && t.length !== 0) {
			if (this._client?.canCapture) {
				if (n > this._consoleBuffer.length) {
					this._isRecordingConsoleEntry = !0;
					try {
						this._consoleBuffer.push({
							level: e,
							args: t,
							occurredAtMs: Date.now(),
							context: this._getSdkContext()
						});
					} finally {
						this._isRecordingConsoleEntry = !1;
					}
				}
			} else this._stopConsoleRecorder();
		}
	}
	_stopConsoleRecorder() {
		if (this._consoleBuffer = [], this._isRecordingConsole) {
			this._isRecordingConsole = !1, this._consoleRecorderTimeout &&= (clearTimeout(this._consoleRecorderTimeout), void 0);
			for (let e of this._consoleRecorderUnpatchers) e();
			this._consoleRecorderUnpatchers = [];
		}
	}
	_takeConsoleBuffer() {
		let e = this._consoleBuffer;
		return this._stopConsoleRecorder(), e;
	}
	get logger() {
		return this._capture_logger ||= {
			trace: (e, t) => this.captureLog({
				body: e,
				level: "trace",
				attributes: t
			}),
			debug: (e, t) => this.captureLog({
				body: e,
				level: "debug",
				attributes: t
			}),
			info: (e, t) => this.captureLog({
				body: e,
				level: "info",
				attributes: t
			}),
			warn: (e, t) => this.captureLog({
				body: e,
				level: "warn",
				attributes: t
			}),
			error: (e, t) => this.captureLog({
				body: e,
				level: "error",
				attributes: t
			}),
			fatal: (e, t) => this.captureLog({
				body: e,
				level: "fatal",
				attributes: t
			})
		}, this._capture_logger;
	}
	flushLogs(e) {
		this._client && (e ? this._flushViaTransport(e) : (this._core && this._core.flush().catch((e) => this._logFlushError(e)), this._consoleCore && this._consoleCore.flush().catch((e) => this._logFlushError(e))));
	}
	flush() {
		var e = this;
		return z(function* () {
			let t = e._core?.flush().catch((t) => e._logFlushError(t)), n = e._consoleCore?.flush().catch((t) => e._logFlushError(t));
			yield t, yield n;
		})();
	}
	_logFlushError(e) {
		Bd(e) || this._logger.error("PostHog logs flush failed:", e);
	}
	loadIfEnabled() {
		if (this._disposed || !this._isLogsEnabled || this._isLoaded || this._isLoading) return;
		let e = this._getConsoleLoader();
		if (e) {
			this._isLoading = !0;
			try {
				e((e, t) => {
					if (this._isLoading = !1, !this._disposed && this._isLogsEnabled) {
						if (e || !t) this._logger.error("Could not load logs script", e), this._stopConsoleRecorder();
						else {
							let e = this._takeConsoleBuffer();
							this._consoleLogsDispose = t.initialize(this._client), this._isLoaded = !0, e.length > 0 && t.replay(this._client, e);
						}
					}
				});
			} catch (e) {
				throw this._isLoading = !1, e;
			}
		} else this._stopConsoleRecorder();
	}
	_createHost(e, t) {
		let n = this._client;
		return {
			get isDisabled() {
				return !1;
			},
			get optedOut() {
				return !n.canCapture;
			},
			getPersistedProperty: (t) => t === Et.LogsQueue ? e() : void 0,
			setPersistedProperty(e, n) {
				e === Et.LogsQueue && t(n ?? []);
			},
			_sendLogsBatch: (e) => this._sendLogsBatch(e),
			getLibraryId: () => n.library.name,
			getLibraryVersion: () => n.library.version
		};
	}
	_sendLogsBatch(e) {
		return new Promise((t) => {
			if (Os(this._consecutiveStatusZeroFailures, 3)) return void t({
				kind: "fatal",
				error: zd(void 0, "logs endpoint is unreachable, dropping batch")
			});
			let n = !1, r = (e) => {
				n || (n = !0, clearTimeout(i), t(e));
			}, i = setTimeout(() => {
				this._logger.warn("Logs request timed out before receiving a response"), r({
					kind: "retry-later",
					error: zd(void 0, "logs request timed out")
				});
			}, 9e4), a = this._isRequestReady;
			this._client.sendRequest("/i/v1/logs", {
				method: "POST",
				query: { token: this._client.projectToken },
				body: e,
				compression: "best-available",
				timeoutMs: 6e4
			}).then((e) => {
				let t = e.statusCode;
				this._trackEndpointReachability(t, a), t >= 200 && 300 > t ? r({ kind: "ok" }) : t === 413 ? r({ kind: "too-large" }) : t !== 0 && t !== 408 && t !== 429 && 500 > t ? r({
					kind: "fatal",
					error: /* @__PURE__ */ Error(`logs request failed with status ${t}`)
				}) : t === 0 ? (e.error || this._logger.warn("Logs request failed before receiving an HTTP response"), r({
					kind: "retry-later",
					error: zd(e.error, "logs request failed before receiving an HTTP response")
				})) : r({
					kind: "retry-later",
					error: e.error ?? /* @__PURE__ */ Error(`logs request failed with status ${t}`)
				});
			}, (e) => {
				r({
					kind: "retry-later",
					error: e
				});
			});
		});
	}
	_trackEndpointReachability(e, t) {
		(e !== 0 || t) && (this._consecutiveStatusZeroFailures = ks(e, this._consecutiveStatusZeroFailures, 3, () => this._logger.warn("Log requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped sending logs; will try again when connectivity changes.")));
	}
	_flushViaTransport(e) {
		this._queue.length > 0 && this._drainQueueViaTransport(e, this._queue, this._resolvedConfig, this._client.library.name, (e) => {
			this._queue = e;
		}), this._consoleQueue.length > 0 && this._drainQueueViaTransport(e, this._consoleQueue, this._consoleResolvedConfig, Ld, (e) => {
			this._consoleQueue = e;
		});
	}
	_drainQueueViaTransport(e, t, n, r, i) {
		if (t.length === 0) return;
		let a = t.map((e) => e.record);
		i([]);
		let o = Ea(a, Ta(n, this._client.library.name, this._client.library.version), r, this._client.library.version);
		this._client.sendRequest("/i/v1/logs", {
			method: "POST",
			query: { token: this._client.projectToken },
			body: o,
			compression: "best-available",
			transport: e,
			timeoutMs: 6e4
		}).catch((e) => this._logFlushError(e));
	}
}, Hd = H("[NetworkMetrics]"), Ud = () => {
	var e;
	return E != null && (e = E.performance) != null && e.now ? E.performance.now() : Date.now();
}, Wd = {
	"http:": 80,
	"https:": 443
}, Gd = /* @__PURE__ */ new Set([
	"CONNECT",
	"DELETE",
	"GET",
	"HEAD",
	"OPTIONS",
	"PATCH",
	"POST",
	"PUT",
	"TRACE"
]), Kd = (e, t) => {
	let n = String(t);
	return {
		method: String(e).toUpperCase(),
		url: Es(n)?.href || n
	};
}, qd = (e, t, n, r, i, a, o = !1) => {
	try {
		var s;
		let c = i();
		if (!c) return;
		let l = n || void 0, u = Ud() - r, d = Es(t.url);
		if (d && d.protocol !== "http:" && d.protocol !== "https:") return;
		let f = {
			url: d?.href || t.url,
			method: t.method
		}, p = M(c.name) ? c.name(f) : F(c.name) ? c.name : "http.client.request.duration";
		if (!p) return;
		let m = o && !l ? void 0 : ((e, t) => e ? 400 > e ? void 0 : String(e) : t?.name || "_OTHER")(l, a), h = B(B(B(B(B({}, ((e) => {
			let t = Gd.has(e) ? e : "_OTHER";
			return B({ "http.request.method": t }, t === "_OTHER" && e !== t ? { "http.request.method_original": e } : {});
		})(f.method)), d ? ((e) => {
			return {
				"server.address": e.hostname.startsWith("[") && e.hostname.endsWith("]") ? e.hostname.slice(1, -1) : e.hostname,
				"server.port": Number(e.port) || Wd[e.protocol],
				"url.scheme": e.protocol.slice(0, -1),
				"url.template": (t = e.pathname, t.split("/").map((e) => ((e) => /^\d+$/.test(e) || e.length >= 8 && /^[0-9a-f-]*\d[0-9a-f-]*$/i.test(e))(e) ? ":id" : e).join("/"))
			};
			var t;
		})(d) : {}), l ? { "http.response.status_code": l } : {}), m ? { "error.type": m } : {}), c.attributes?.call(c, f, {
			status: l,
			durationMs: u
		}));
		(s = e.metrics) == null || s.histogram(p, u, {
			unit: "ms",
			attributes: h
		});
	} catch (e) {
		Hd.error("Failed to record network metric", e);
	}
}, Jd = () => {}, Yd = (e, t) => M(E?.fetch) ? Lu(E, "fetch", (n) => function(...r) {
	let i = Ud(), a = n.apply(this, r);
	if (!t()) return a;
	try {
		let [n, o] = r, s = Kd(o?.method ?? n?.method ?? "GET", n?.url ?? n);
		return a.then((n) => (qd(e, s, n?.status, i, t, void 0, !0), n), (n) => {
			throw qd(e, s, void 0, i, t, n), n;
		});
	} catch (e) {
		return Hd.error("Failed to observe fetch", e), a;
	}
}) : Jd, Xd = (e, t) => {
	var n;
	let r = E == null || (n = E.XMLHttpRequest) == null ? void 0 : n.prototype;
	if (!r) return Jd;
	let i = /* @__PURE__ */ new WeakMap(), a = Lu(r, "open", (e) => function(...t) {
		try {
			Qc.has(this) || i.set(this, Kd(t[0], t[1]));
		} catch (e) {
			Hd.error("Failed to observe XHR open", e);
		}
		return e.apply(this, t);
	}), o = Lu(r, "send", (n) => function(...r) {
		let a;
		try {
			let n = i.get(this);
			if (n && t()) {
				let r = Ud();
				a = () => {
					this.removeEventListener("loadend", a), qd(e, n, this.status, r, t);
				}, G(this, "loadend", a);
			}
		} catch (e) {
			Hd.error("Failed to observe XHR send", e);
		}
		try {
			return n.apply(this, r);
		} catch (e) {
			throw a && this.removeEventListener("loadend", a), e;
		}
	});
	return () => {
		a(), o();
	};
}, Zd = /* @__PURE__ */ new WeakMap(), Qd = /* @__PURE__ */ new Set([
	"$comment",
	"$defs",
	"$id",
	"$schema",
	"additionalProperties",
	"default",
	"definitions",
	"deprecated",
	"description",
	"examples",
	"minProperties",
	"properties",
	"readOnly",
	"required",
	"title",
	"type",
	"writeOnly"
]), $d = {
	maxStringLength: 2048,
	truncationSuffix: "..."
}, ef = {
	maxStringLength: 2048,
	truncationSuffix: "..."
};
function tf(e) {
	if (e) return !0 === e ? {
		intent: !0,
		model: !0
	} : {
		intent: !1 !== e.intent,
		model: !1 !== e.model
	};
}
function nf(e, t) {
	return {}.hasOwnProperty.call(e, t);
}
function rf(e, t) {
	let n = Object.create(e);
	return t && Object.defineProperty(n, "inputSchema", {
		configurable: !0,
		enumerable: !0,
		writable: !0,
		value: t
	}), n;
}
function af(e, t, n = !1) {
	if (!F(e)) return;
	let r = e.trim();
	return r ? (n ? la(r, $d) : r).slice(0, t) : void 0;
}
function of(e) {
	try {
		return N(e) && !0 === e.isError;
	} catch {
		return !1;
	}
}
function sf(e) {
	return la(e || "Unknown error", ef).slice(0, 2048);
}
function cf(e, t) {
	try {
		return sf(t ? function(e) {
			try {
				return !N(e) || !j(e.content) ? void 0 : e.content.filter((e) => N(e) && e.type === "text" && F(e.text)).map((e) => e.text).join(" ").trim() || void 0;
			} catch {
				return;
			}
		}(e) : N(e) && F(e.message) ? e.message : F(e) ? e : String(e));
	} catch {
		return "Unknown error";
	}
}
function lf(e, t, n) {
	return t.errorResult ? [{
		type: "Error",
		value: n,
		mechanism: {
			type: "generic",
			handled: !0,
			synthetic: !0,
			exception_id: 0
		}
	}] : e.buildProperties(t.error, { handled: !0 }).$exception_list.map((e) => B(B({}, e), {}, { value: sf(e.value) }));
}
function uf(e, t) {
	if (t) return "Error";
	try {
		if (!N(e)) return "Error";
		let t = F(e.name) ? e.name.trim() : "", n = e.constructor;
		return t && t !== "Error" || !M(n) || n.name === "Error" || (t = n.name), (t || "Error").slice(0, 256);
	} catch {
		return "Error";
	}
}
function df(e, t) {
	return {
		message: cf(e, t),
		type: uf(e, t)
	};
}
var ff = { featureFlags: class extends xd {
	constructor(e) {
		let t = new Cd(e.config, e._shouldDisableFlags());
		super(t), this.name = ou, this._instance = e, this._mutableConfigSource = t;
	}
	get _crossTabPersistence() {
		return this._instance.persistence;
	}
	updateConfig(e, t) {
		this._mutableConfigSource.update(e, t), this._onConfigUpdated();
	}
} }, pf = { sessionRecording: class {
	get _config() {
		return this._instance.config;
	}
	get _persistence() {
		return this._instance.persistence;
	}
	get started() {
		return !!this._lazyLoadedSessionRecording?.isStarted;
	}
	get status() {
		return this._recordingStatus === "awaiting_config" || this._recordingStatus === "missing_config" ? this._recordingStatus : this._lazyLoadedSessionRecording?.status ?? this._recordingStatus;
	}
	constructor(e) {
		if (this._instance = e, this._forceAllowLocalhostNetworkCapture = !1, this._recordingStatus = Wu, this._persistFlagsOnSessionListener = void 0, this._sessionRecordingDisposed = !1, this._documentWasEverVisible = (() => {
			var e, t;
			if (!D?.visibilityState || D.visibilityState === "visible") return !0;
			let n = E == null || (e = E.performance) == null || (t = e.getEntriesByType) == null ? void 0 : t.call(e, "visibility-state");
			return !n?.length || n.some((e) => e.name === "visible");
		})(), this._onVisibilityChange = () => {
			var e, t;
			D?.visibilityState === "visible" && (this._documentWasEverVisible = !0, (e = this._lazyLoadedSessionRecording) == null || (t = e.setDocumentWasEverVisible) == null || t.call(e, !0));
		}, !this._instance.sessionManager) throw Ku.error("started without valid sessionManager"), /* @__PURE__ */ Error("[SessionRecording] started without valid sessionManager. This is a bug.");
		if (this._config.cookieless_mode === "always") throw Error("[SessionRecording] cannot be used with cookieless_mode=\"always\"");
		D != null && D.addEventListener && G(D, "visibilitychange", this._onVisibilityChange);
	}
	initialize() {
		this.startIfEnabledOrStop();
	}
	dispose({ discardBufferedEvents: e = !1 } = {}) {
		var t;
		this._sessionRecordingDisposed = !0, D == null || (t = D.removeEventListener) == null || t.call(D, "visibilitychange", this._onVisibilityChange), e ? this._discardRecording(!0) : this.stopRecording();
	}
	get _isRecordingEnabled() {
		let e = !!this._instance.get_property("$session_recording_remote_config")?.enabled, t = !this._config.disable_session_recording, n = this._config.disable_session_recording || this._instance.consent.isOptedOut();
		return E && e && t && !n;
	}
	startIfEnabledOrStop(e) {
		if (this._sessionRecordingDisposed || this._isRecordingEnabled && this._lazyLoadedSessionRecording?.isStarted) return;
		let t = !P(Object.assign) && !P(Array.from);
		this._isRecordingEnabled && t ? (this._lazyLoadAndStart(e), Ku.info("starting")) : (this._recordingStatus = Wu, this.stopRecording());
	}
	_lazyLoadAndStart(e) {
		var t;
		if (this._isRecordingEnabled) {
			if (this._recordingStatus !== "awaiting_config" && this._recordingStatus !== "missing_config" && (this._recordingStatus = Gu), k != null && (t = k.__PosthogExtensions__) != null && (t = t.rrweb) != null && t.record && k.__PosthogExtensions__?.initSessionRecording) this._onScriptLoaded(e);
			else {
				var n, r;
				let t = this._instance.sessionManager;
				(n = k.__PosthogExtensions__) == null || (r = n.loadExternalDependency) == null || r.call(n, this._instance, this._scriptName, (n) => {
					if (!this._sessionRecordingDisposed && this._isRecordingEnabled && this._instance.sessionManager === t) return n ? (this._instance.register_for_session({ $sdk_debug_recording_script_not_loaded: !0 }), Ku.error("could not load recorder", n)) : void this._onScriptLoaded(e);
					this._recordingStatus = "disabled";
				});
			}
		}
	}
	stopRecording() {
		var e, t;
		(e = this._persistFlagsOnSessionListener) == null || e.call(this), this._persistFlagsOnSessionListener = void 0, (t = this._lazyLoadedSessionRecording) == null || t.stop();
	}
	_discardRecording(e = !1) {
		var t, n;
		(t = this._persistFlagsOnSessionListener) == null || t.call(this), this._persistFlagsOnSessionListener = void 0, (n = this._lazyLoadedSessionRecording) == null || n.discard({ discardProducerEvents: e });
	}
	_resetSampling() {
		var e, t;
		(e = this._persistence) == null || e.unregister("$session_is_sampled"), (t = this._persistence) == null || t.unregister("$replay_sample_rate");
	}
	_validateSampleRate(e, t) {
		if (L(e)) return null;
		let n = R(e) ? e : parseFloat(e);
		return typeof (r = n) != "number" || !Number.isFinite(r) || 0 > r || r > 1 ? (Ku.warn(`${t} must be between 0 and 1. Ignoring invalid value:`, e), null) : n;
		var r;
	}
	_persistRemoteConfig(e) {
		if (this._persistence) {
			var t;
			let n = this._persistence, r = () => {
				let t = !1 === e.sessionRecording ? void 0 : e.sessionRecording, r = this._validateSampleRate(this._config.session_recording?.sampleRate, "session_recording.sampleRate"), i = this._validateSampleRate(t?.sampleRate, "remote config sampleRate"), a = r ?? i;
				L(a) && this._resetSampling();
				let o = t?.minimumDurationMilliseconds;
				n.register({ [xe]: B(B({
					cache_timestamp: Date.now(),
					enabled: !!t
				}, t), {}, {
					networkPayloadCapture: B({ capturePerformance: e.capturePerformance }, t?.networkPayloadCapture),
					canvasRecording: {
						enabled: t?.recordCanvas,
						fps: t?.canvasFps,
						quality: t?.canvasQuality
					},
					sampleRate: a,
					minimumDurationMilliseconds: P(o) ? null : o,
					endpoint: t?.endpoint,
					triggerMatchType: t?.triggerMatchType,
					masking: t?.masking,
					urlTriggers: t?.urlTriggers,
					version: t?.version,
					triggerGroups: t?.triggerGroups
				}) });
			};
			r(), (t = this._persistFlagsOnSessionListener) == null || t.call(this), this._persistFlagsOnSessionListener = this._instance.sessionManager?.onSessionId(r);
		}
	}
	onRemoteConfig(e) {
		let t = e.ok ? e.config : void 0;
		t && "sessionRecording" in t ? !1 === t.sessionRecording ? (this._persistRemoteConfig(t), this._discardRecording()) : (this._persistRemoteConfig(t), this.startIfEnabledOrStop()) : (this._recordingStatus === "awaiting_config" && (this._recordingStatus = "missing_config", this._instance.register_for_session({ [tt]: !0 }), Ku.warn("config refresh failed, recording will not start until page reload")), this.startIfEnabledOrStop());
	}
	log(e, t = "log") {
		this._lazyLoadedSessionRecording?.log ? this._lazyLoadedSessionRecording.log(e, t) : Ku.warn("log called before recorder was ready");
	}
	get _scriptName() {
		var e, t;
		let n = (e = this._instance) == null || (e = e.persistence) == null ? void 0 : e.get_property(xe);
		return (n == null || (t = n.scriptConfig) == null ? void 0 : t.script) || "lazy-recorder";
	}
	_isRemoteConfigFresh() {
		let e = this._instance.get_property(xe);
		if (!e) return !1;
		let t;
		try {
			t = typeof e == "object" ? e : JSON.parse(e);
		} catch (e) {
			return Ku.warn("persisted remote config for session recording is invalid and will be ignored", e), !1;
		}
		return !L(t.cache_timestamp) && 36e5 >= Date.now() - t.cache_timestamp;
	}
	_onScriptLoaded(e) {
		var t, n;
		if (!this._sessionRecordingDisposed && this._isRecordingEnabled && this._instance.sessionManager) {
			if (!k.__PosthogExtensions__?.initSessionRecording) return Ku.warn("Called on script loaded before session recording is available. This can be caused by adblockers."), void this._instance.register_for_session({ [et]: !0 });
			if (this._lazyLoadedSessionRecording || (this._lazyLoadedSessionRecording = k.__PosthogExtensions__?.initSessionRecording(this._instance, this._documentWasEverVisible), this._lazyLoadedSessionRecording._forceAllowLocalhostNetworkCapture = this._forceAllowLocalhostNetworkCapture), !this._isRemoteConfigFresh()) {
				if (this._recordingStatus === "missing_config" || this._recordingStatus === "awaiting_config") return;
				this._recordingStatus = "awaiting_config", Ku.info("persisted remote config is stale, requesting fresh config before starting"), new vc(this._instance).load();
				return;
			}
			this._recordingStatus = Gu, (t = (n = this._lazyLoadedSessionRecording).setDocumentWasEverVisible) == null || t.call(n, this._documentWasEverVisible), this._lazyLoadedSessionRecording.start(e);
		} else this._recordingStatus = Wu;
	}
	onRRwebEmit(e) {
		var t, n;
		(t = this._lazyLoadedSessionRecording) == null || (n = t.onRRwebEmit) == null || n.call(t, e);
	}
	overrideLinkedFlag() {
		var e, t;
		this._lazyLoadedSessionRecording || (t = this._persistence) == null || t.register({ $replay_override_linked_flag: !0 }), (e = this._lazyLoadedSessionRecording) == null || e.overrideLinkedFlag();
	}
	overrideSampling() {
		var e, t;
		this._lazyLoadedSessionRecording || (t = this._persistence) == null || t.register({ $replay_override_sampling: !0 }), (e = this._lazyLoadedSessionRecording) == null || e.overrideSampling();
	}
	overrideTrigger(e) {
		var t, n;
		this._lazyLoadedSessionRecording || (n = this._persistence) == null || n.register({ [e === "url" ? "$replay_override_url_trigger" : "$replay_override_event_trigger"]: !0 }), (t = this._lazyLoadedSessionRecording) == null || t.overrideTrigger(e);
	}
	get sdkDebugProperties() {
		let e = {};
		for (let t of qu) {
			let n = this._instance.sessionPersistence?.get_property(t);
			P(n) || (e[t] = n);
		}
		return B(B({}, e), this._lazyLoadedSessionRecording?.sdkDebugProperties || { $recording_status: this.status });
	}
	tryAddCustomEvent(e, t) {
		return !!this._lazyLoadedSessionRecording?.tryAddCustomEvent(e, t);
	}
	flushBeforeIdentityReset() {
		var e, t;
		(e = this._lazyLoadedSessionRecording) == null || (t = e.flushBeforeIdentityReset) == null || t.call(e);
	}
} }, mf = {
	autocapture: class extends au {
		constructor(e) {
			super(new Nu(e)), this.instance = e;
		}
	},
	historyAutocapture: class {
		constructor(e) {
			this._isFlushingPageview = !1, this._instance = e, this._lastLocation = this._getCurrentLocation();
		}
		initialize() {
			this.startIfEnabled();
		}
		get isEnabled() {
			let e = this._getCaptureOptions();
			return !!(e.path || e.search || this._shouldCaptureHashChanges(e));
		}
		startIfEnabled() {
			this.isEnabled && (V.info("History API monitoring enabled, starting..."), this.monitorHistoryChanges());
		}
		startIfEnabledOrStop() {
			this.stop(), this._lastLocation = this._getCurrentLocation(), this.startIfEnabled();
		}
		stop() {
			this._popstateListener && this._popstateListener(), this._popstateListener = void 0, this._hashchangeListener && this._hashchangeListener(), this._hashchangeListener = void 0, V.info("History API monitoring stopped");
		}
		monitorHistoryChanges() {
			E && E.history && (this._patchHistoryMethod("pushState"), this._patchHistoryMethod("replaceState"), this._setupPopstateListener(), this._shouldCaptureHashChanges() && this._setupHashchangeListener());
		}
		_patchHistoryMethod(e) {
			if (!E || E.history[e]?.__posthog_wrapped__) return;
			let t = this;
			Lu(E.history, e, (n) => function(r, i, a) {
				var o;
				t._isUrlChanging(a) && t._flushPendingPageview(), n.call(this, r, i, a), t._capturePageview(e, !t._isFlushingPageview && (E == null || (o = E.event) == null ? void 0 : o.type) !== "popstate");
			});
		}
		_getCurrentLocation() {
			let e = E?.location;
			if (e?.pathname) return {
				pathname: e.pathname,
				search: e.search,
				hash: e.hash
			};
		}
		_getCaptureOptions() {
			let e = this._instance.config.capture_pageview;
			return e === "history_change" ? { path: !0 } : N(e) ? e : {};
		}
		_shouldCaptureHashChanges(e = this._getCaptureOptions()) {
			return !!e.hash && !this._instance.config.disable_capture_url_hashes;
		}
		_hasLocationChanged(e) {
			let t = this._getCaptureOptions(), n = this._lastLocation;
			return !(!n || !(t.path && e.pathname !== n.pathname || t.search && e.search !== n.search || this._shouldCaptureHashChanges(t) && e.hash !== n.hash));
		}
		_capturePageview(e, t = !1) {
			try {
				t || this._flushPendingPageview();
				let n = this._getCurrentLocation();
				if (!n) return;
				if (this._hasLocationChanged(n)) {
					let n = () => this._instance.capture(mt, { navigation_type: e });
					t ? (this._pendingPageview = n, Promise.resolve().then(() => this._flushPendingPageview())) : n();
				}
				this._lastLocation = n;
			} catch (t) {
				V.error(`Error capturing ${e} pageview`, t);
			}
		}
		_isUrlChanging(e) {
			return !(L(e) || !E) && Es(String(e))?.href !== E.location?.href;
		}
		_flushPendingPageview() {
			let e = this._pendingPageview;
			if (e) {
				this._pendingPageview = void 0, this._isFlushingPageview = !0;
				try {
					e();
				} catch (e) {
					V.error("Error capturing deferred pageview", e);
				} finally {
					this._isFlushingPageview = !1;
				}
				this._lastLocation = this._getCurrentLocation();
			}
		}
		_setupPopstateListener() {
			if (this._popstateListener) return;
			let e = () => {
				this._capturePageview("popstate");
			};
			G(E, "popstate", e), this._popstateListener = () => {
				E && E.removeEventListener("popstate", e);
			};
		}
		_setupHashchangeListener() {
			if (this._hashchangeListener) return;
			let e = () => {
				this._capturePageview("hashchange");
			};
			G(E, "hashchange", e), this._hashchangeListener = () => {
				E && E.removeEventListener("hashchange", e);
			};
		}
	},
	heatmaps: class {
		get _config() {
			return this.instance.config;
		}
		constructor(e) {
			this._enabledServerSide = !1, this._initialized = !1, this._flushInterval = null, this.instance = e, this._enabledServerSide = !!this.instance.persistence?.props[fe], this.rageclicks = new Yl(e.config.rageclick);
		}
		initialize() {
			this.startIfEnabled();
		}
		get flushIntervalMilliseconds() {
			let e = 5e3;
			return N(this._config.capture_heatmaps) && this._config.capture_heatmaps.flush_interval_milliseconds && (e = this._config.capture_heatmaps.flush_interval_milliseconds), e;
		}
		get isEnabled() {
			return L(this._config.capture_heatmaps) ? L(this._config.enable_heatmaps) ? this._enabledServerSide : this._config.enable_heatmaps : !1 !== this._config.capture_heatmaps;
		}
		startIfEnabled() {
			if (this.isEnabled) {
				if (this._initialized) return;
				Ju.info("starting..."), this._setupListeners(), this._onVisibilityChange();
			} else clearInterval(this._flushInterval ?? void 0), this._removeListeners(), this.getAndClearBuffer();
		}
		onRemoteConfig(e) {
			if (!e.ok) return;
			let t = e.config;
			if (!("heatmaps" in t)) return;
			let n = !!t.heatmaps;
			this.instance.persistence && this.instance.persistence.register({ [fe]: n }), this._enabledServerSide = n, this.startIfEnabled();
		}
		getAndClearBuffer() {
			let e = this._buffer;
			return this._buffer = void 0, e;
		}
		_onDeadClick(e) {
			Yu(e.originalEvent) && this._onClick(e.originalEvent, "deadclick");
		}
		_onVisibilityChange() {
			this._flushInterval && clearInterval(this._flushInterval), this._flushInterval = D?.visibilityState === "visible" ? setInterval(this._flush.bind(this), this.flushIntervalMilliseconds) : null;
		}
		_setupListeners() {
			E && D && (this._flushHandler = this._flush.bind(this), G(E, pt, this._flushHandler), this._onClickHandler = (e) => this._onClick(e || E?.event), G(D, "click", this._onClickHandler, { capture: !0 }), this._onMouseMoveHandler = (e) => this._onMouseMove(e || E?.event), G(D, "mousemove", this._onMouseMoveHandler, { capture: !0 }), this._deadClicksCapture = new hs(this.instance, ps, this._onDeadClick.bind(this)), this._deadClicksCapture.startIfEnabledOrStop(), this._onVisibilityChange_handler = this._onVisibilityChange.bind(this), G(D, y, this._onVisibilityChange_handler), this._initialized = !0);
		}
		_removeListeners() {
			var e;
			E && D && (this._flushHandler && E.removeEventListener(pt, this._flushHandler), this._onClickHandler && D.removeEventListener("click", this._onClickHandler, { capture: !0 }), this._onMouseMoveHandler && D.removeEventListener("mousemove", this._onMouseMoveHandler, { capture: !0 }), this._onVisibilityChange_handler && D.removeEventListener(y, this._onVisibilityChange_handler), clearTimeout(this._mouseMoveTimeout), (e = this._deadClicksCapture) == null || e.stop(), this._initialized = !1);
		}
		_getProperties(e, t) {
			let n = this.instance.scrollManager.scrollY(), r = this.instance.scrollManager.scrollX(), i = this.instance.scrollManager.scrollElement(), a = function(e, t, n) {
				let r = e;
				for (; r && To(r) && !Y(r, "body");) {
					if (r === n) return !1;
					let e;
					try {
						e = (r.ownerDocument?.defaultView ?? E)?.getComputedStyle(r).position;
					} catch {
						return !1;
					}
					if (A(t, e)) return !0;
					r = Lo(r);
				}
				return !1;
			}(No(e), ["fixed", "sticky"], i);
			return {
				x: e.clientX + (a ? 0 : r),
				y: e.clientY + (a ? 0 : n),
				target_fixed: a,
				type: t
			};
		}
		_onClick(e, t = "click") {
			var n;
			if (wo(e.target) || !Yu(e)) return;
			let r = this._getProperties(e, t);
			(n = this.rageclicks) != null && n.isRageClick(e.clientX, e.clientY, (/* @__PURE__ */ new Date()).getTime()) && Yo(No(e), this.instance.config.rageclick) && this._capture(B(B({}, r), {}, { type: "rageclick" })), this._capture(r);
		}
		_onMouseMove(e) {
			!wo(e.target) && Yu(e) && (clearTimeout(this._mouseMoveTimeout), this._mouseMoveTimeout = setTimeout(() => {
				this._capture(this._getProperties(e, "mousemove"));
			}, 500));
		}
		_capture(e) {
			if (!E) return;
			let t = this._config.disable_capture_url_hashes ? hr(E.location.href) : E.location.href, n = this._config.custom_personal_data_properties, r = Ms(t, this._config.mask_personal_data_properties ? [...Ps, ...n || []] : [], Is);
			this._buffer = this._buffer || {}, this._buffer[r] || (this._buffer[r] = []), this._buffer[r].push(e);
		}
		_flush() {
			this._buffer && !It(this._buffer) && this.instance.capture("$$heatmap", { $heatmap_data: this.getAndClearBuffer() });
		}
	},
	deadClicksAutocapture: hs,
	webVitalsAutocapture: class {
		constructor(e) {
			this._instance = e, this._enabledServerSide = !1, this._initialized = !1, this._buffer = {
				navigationKey: void 0,
				url: void 0,
				metrics: [],
				firstMetricTimestamp: void 0
			}, this._flushToCapture = (e = !1) => {
				clearTimeout(this._delayedFlushTimer), this._delayedFlushTimer = void 0, this._buffer.metrics.length !== 0 && (this._instance.capture("$web_vitals", B({ $current_url: this._buffer.url }, this._buffer.metrics.reduce((e, t) => B(B({}, e), {}, {
					[`$web_vitals_${t.name}_event`]: B({}, t),
					[`$web_vitals_${t.name}_value`]: t.value
				}), {})), e ? {
					transport: "sendBeacon",
					send_instantly: !0
				} : void 0), this._buffer = {
					navigationKey: void 0,
					url: void 0,
					metrics: [],
					firstMetricTimestamp: void 0
				});
			}, this._addToBuffer = (e) => {
				if (this._buffer = this._buffer || {
					navigationKey: void 0,
					url: void 0,
					metrics: [],
					firstMetricTimestamp: void 0
				}, L(e?.name) || L(e?.value)) return void zu.error("Invalid metric received", e);
				let t = typeof e.navigationURL == "string" ? e.navigationURL : void 0, n = this._maskedURL(t);
				if (P(n)) return;
				let r = R(e.navigationId) || typeof e.navigationId == "string" ? `navigation:${e.navigationId}` : `url:${n}`;
				if (this._maxAllowedValue && e.value >= this._maxAllowedValue) return void zu.error("Ignoring metric with value >= " + this._maxAllowedValue, e);
				this._buffer.navigationKey !== r && (this._flushToCapture(), this._delayedFlushTimer = setTimeout(this._flushToCapture, this.flushToCaptureTimeoutMs)), P(this._buffer.navigationKey) && (this._buffer.navigationKey = r, this._buffer.url = n), this._buffer.firstMetricTimestamp = P(this._buffer.firstMetricTimestamp) ? Date.now() : this._buffer.firstMetricTimestamp;
				let i = this._instance.sessionManager?.checkAndGetSessionAndWindowId(!0), a = B(B(B({}, e), t ? { navigationURL: n } : {}), {}, {
					$current_url: n,
					timestamp: Date.now()
				});
				if (delete a.entries, N(e.attribution) && this.attributionMetrics.indexOf(e.name) > -1) {
					let t = {};
					for (let n of Uu) {
						let r = n === "url" && typeof e.attribution[n] == "string" ? this._maskedURL(e.attribution[n]) : e.attribution[n];
						P(r) || (t[n] = r);
					}
					a.attribution = t;
				} else delete a.attribution;
				P(i) || (a.$session_id = i.sessionId, a.$window_id = i.windowId), this._buffer.metrics.push(a), this._buffer.metrics.length === this.allowedMetrics.length && this._flushToCapture();
			}, this._startCapturing = () => {
				if (this._initialized) return;
				let e, t, n, r, i = !1, a = k.__PosthogExtensions__, o = a?.postHogWebVitalsCallbacksByFlavor, s = o?.[this._callbackFlavor] || (this._callbackFlavor === "web-vitals" && P(o) ? a?.postHogWebVitalsCallbacks : void 0);
				if (!P(s)) {
					let a = s.withoutAttribution, o = this.attributionMetrics;
					i = !P(a), e = o.indexOf("LCP") > -1 ? s.onLCP : a?.onLCP || s.onLCP, t = o.indexOf("CLS") > -1 ? s.onCLS : a?.onCLS || s.onCLS, n = o.indexOf("FCP") > -1 ? s.onFCP : a?.onFCP || s.onFCP, r = o.indexOf("INP") > -1 ? s.onINP : a?.onINP || s.onINP;
				}
				if (!(e && t && n && r)) return void zu.error("web vitals callbacks not loaded - not starting");
				let c = { reportSoftNavs: this.useSoftNavs }, l = i && this.attributionMetrics.indexOf("INP") > -1 ? B(B({}, c), {}, { includeProcessedEventEntries: !1 }) : c;
				this.allowedMetrics.indexOf("LCP") > -1 && e(this._addToBuffer.bind(this), c), this.allowedMetrics.indexOf("CLS") > -1 && t(this._addToBuffer.bind(this), c), this.allowedMetrics.indexOf("FCP") > -1 && n(this._addToBuffer.bind(this), c), this.allowedMetrics.indexOf("INP") > -1 && r(this._addToBuffer.bind(this), l);
				let u = E?.document;
				G(u, y, () => {
					u?.visibilityState === "hidden" && this._flushToCapture(!0);
				}), G(E, "pagehide", () => this._flushToCapture(!0)), this._initialized = !0;
			}, this._enabledServerSide = !!this._instance.persistence?.props[ge], this.startIfEnabled();
		}
		get _perfConfig() {
			return this._instance.config.capture_performance;
		}
		get allowedMetrics() {
			let e = N(this._perfConfig) ? this._perfConfig?.web_vitals_allowed_metrics : void 0;
			return L(e) ? this._instance.persistence?.props.$web_vitals_allowed_metrics || Vu : e;
		}
		get flushToCaptureTimeoutMs() {
			return (N(this._perfConfig) ? this._perfConfig.web_vitals_delayed_flush_ms : void 0) || 5e3;
		}
		get attributionMetrics() {
			let e = N(this._perfConfig) ? this._perfConfig.web_vitals_attribution : void 0;
			return zt(e) ? e ? Vu : [] : j(e) ? e : Hu;
		}
		get useAttribution() {
			return this.attributionMetrics.length > 0;
		}
		get useSoftNavs() {
			let e = N(this._perfConfig) ? this._perfConfig.__preview_web_vitals_soft_navs : void 0;
			return e != null && e;
		}
		get _maxAllowedValue() {
			let e = N(this._perfConfig) && R(this._perfConfig.__web_vitals_max_value) ? this._perfConfig.__web_vitals_max_value : Bu;
			return e > 0 && 6e4 >= e ? Bu : e;
		}
		get isEnabled() {
			let e = O?.protocol;
			if (e !== "http:" && e !== "https:") return zu.info("Web Vitals are disabled on non-http/https protocols"), !1;
			let t = N(this._perfConfig) ? this._perfConfig.web_vitals : zt(this._perfConfig) ? this._perfConfig : void 0;
			return zt(t) ? t : this._enabledServerSide;
		}
		startIfEnabled() {
			this.isEnabled && !this._initialized && (zu.info("enabled, starting..."), this._loadScript(this._startCapturing));
		}
		onRemoteConfig(e) {
			if (!e.ok) return;
			let t = e.config;
			if (!("capturePerformance" in t)) return;
			let n = N(t.capturePerformance) && !!t.capturePerformance.web_vitals, r = N(t.capturePerformance) ? t.capturePerformance.web_vitals_allowed_metrics : void 0;
			this._instance.persistence && (this._instance.persistence.register({ [ge]: n }), this._instance.persistence.register({ [be]: r })), this._enabledServerSide = n, this.startIfEnabled();
		}
		get _callbackFlavor() {
			return this.useSoftNavs ? this.useAttribution ? "web-vitals-with-attribution-soft-navs" : "web-vitals-soft-navs" : this.useAttribution ? "web-vitals-with-attribution" : "web-vitals";
		}
		_loadScript(e) {
			var t;
			let n = k.__PosthogExtensions__, r = this._callbackFlavor, i = n?.postHogWebVitalsCallbacksByFlavor;
			i?.[r] || r === "web-vitals" && P(i) && n?.postHogWebVitalsCallbacks ? e() : n == null || (t = n.loadExternalDependency) == null || t.call(n, this._instance, r, (t) => {
				t ? zu.error("failed to load script", t) : e();
			});
		}
		_maskedURL(e) {
			let t = e || E?.location.href;
			if (!t) return void zu.error("Could not determine current URL");
			let n = this._instance.config.disable_capture_url_hashes ? hr(t) : t, r = this._instance.config.custom_personal_data_properties;
			return Ms(n, this._instance.config.mask_personal_data_properties ? [...Ps, ...r || []] : [], Is);
		}
	}
}, hf = {
	exceptionObserver: class {
		constructor(e) {
			this._startCapturing = () => {
				if (!E || !this.isEnabled || !k.__PosthogExtensions__?.errorWrappingFunctions) return;
				let e = k.__PosthogExtensions__.errorWrappingFunctions.wrapOnError, t = k.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection, n = k.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
				try {
					!this._unwrapOnError && this._config.capture_unhandled_errors && (this._unwrapOnError = e(this.captureException.bind(this))), !this._unwrapUnhandledRejection && this._config.capture_unhandled_rejections && (this._unwrapUnhandledRejection = t(this.captureException.bind(this))), !this._unwrapConsoleError && this._config.capture_console_errors && (this._unwrapConsoleError = n(this.captureException.bind(this)));
				} catch (e) {
					Pu.error("failed to start", e), this._stopCapturing();
				}
			}, this._instance = e, this._remoteEnabled = !!this._instance.persistence?.props[pe], this._rateLimiter = new tn(B(B({}, function(e = {}) {
				return {
					refillRate: e.exceptionRateLimiterRefillRate ?? e.__exceptionRateLimiterRefillRate ?? 1,
					bucketSize: e.exceptionRateLimiterBucketSize ?? e.__exceptionRateLimiterBucketSize ?? 10
				};
			}(this._instance.config.error_tracking)), {}, {
				refillInterval: 1e4,
				_logger: Pu
			})), this._config = this._requiredConfig(), this.startIfEnabledOrStop();
		}
		_requiredConfig() {
			let e = this._instance.config.capture_exceptions, t = {
				capture_unhandled_errors: !1,
				capture_unhandled_rejections: !1,
				capture_console_errors: !1
			};
			return N(e) ? t = B(B({}, t), e) : (P(e) ? this._remoteEnabled : e) && (t = B(B({}, t), {}, {
				capture_unhandled_errors: !0,
				capture_unhandled_rejections: !0
			})), t;
		}
		get isEnabled() {
			return this._config.capture_console_errors || this._config.capture_unhandled_errors || this._config.capture_unhandled_rejections;
		}
		startIfEnabledOrStop() {
			this.isEnabled ? (Pu.info("enabled"), this._stopCapturing(), this._loadScript(this._startCapturing)) : this._stopCapturing();
		}
		_loadScript(e) {
			var t, n;
			k.__PosthogExtensions__?.errorWrappingFunctions ? e() : (t = k.__PosthogExtensions__) == null || (n = t.loadExternalDependency) == null || n.call(t, this._instance, "exception-autocapture", (t) => {
				if (t) return Pu.error("failed to load script", t);
				e();
			});
		}
		_stopCapturing() {
			var e, t, n;
			(e = this._unwrapOnError) == null || e.call(this), this._unwrapOnError = void 0, (t = this._unwrapUnhandledRejection) == null || t.call(this), this._unwrapUnhandledRejection = void 0, (n = this._unwrapConsoleError) == null || n.call(this), this._unwrapConsoleError = void 0;
		}
		onRemoteConfig(e) {
			if (!e.ok) return;
			let t = e.config;
			"autocaptureExceptions" in t && (this._remoteEnabled = !!t.autocaptureExceptions || !1, this._instance.persistence && this._instance.persistence.register({ [pe]: this._remoteEnabled }), this._config = this._requiredConfig(), this.startIfEnabledOrStop());
		}
		onConfigChange() {
			this._config = this._requiredConfig();
		}
		captureException(e) {
			try {
				var t, n;
				let r = (e == null || (t = e.$exception_list) == null || (t = t[0]) == null ? void 0 : t.type) ?? "Exception";
				if (this._rateLimiter.consumeRateLimit(r)) return void Pu.info("Skipping exception capture because of client rate limiting.", { exception: r });
				(n = this._instance.exceptions) == null || n.sendExceptionEvent(e);
			} catch {}
		}
	},
	exceptions: class {
		constructor(e) {
			this._suppressionRules = [], this._errorPropertiesBuilder = new kr([
				new Xr(),
				new oi(),
				new Qr(),
				new Zr(),
				new ii(),
				new ri(),
				new ei(),
				new ai()
			], function(e, ...t) {
				return (n, r = 0) => {
					let i = [], a = n.split("\n"), o = Math.min(a.length, r + 1e3), s = [];
					for (let n = r; o > n; n++) {
						let r = a[n];
						if (r.length > 1024) continue;
						let o = Hr.test(r) ? r.replace(Hr, "$1") : r;
						if (!o.match(/\S*Error: /)) {
							for (let n of t) {
								let t = n(o, e);
								if (t) {
									i.push(t);
									let e = Wr(i);
									if (e) {
										for (let t = s.length - 1; t >= 0; t--) {
											let n = s[t];
											if (e.start >= n.start + n.length) break;
											s.pop();
										}
										s.push(e);
									}
									break;
								}
							}
							if (Jr(i, s) >= 50) break;
						}
					}
					let c = [...s].sort((e, t) => t.start - e.start), l = c[c.length - 1];
					if (l) {
						let e = Kr(i, l);
						i.splice(l.start - e, e);
						for (let t of c) t.start -= e;
					}
					for (let e of c) Gr(i, e);
					return s.some((e) => e.start === 0 && i.length === e.length) && function(e) {
						let t = e.map((e) => `${e.function}|${e.filename}|${e.lineno}|${e.colno}|${e.module}`), n = 0;
						for (let e = 1; t.length > e; e++) Yr(t, e, n) && (n = e);
						e.push(...e.splice(0, n));
					}(i), function(e) {
						if (!e.length) return [];
						let t = Array.from(e);
						return t.reverse(), t.slice(0, 50).map((e) => {
							return B(B({}, e), {}, {
								filename: e.filename || (n = t, n[n.length - 1] || {}).filename,
								function: e.function || "?"
							});
							var n;
						});
					}(i);
				};
			}("web:javascript", Rr, Vr)), this._instance = e, this._suppressionRules = this._instance.persistence?.get_property("$error_tracking_suppression_rules") ?? [], this._exceptionStepsConfig = di(this._getExceptionStepsConfig()), this._exceptionStepsBuffer = new fi(this._exceptionStepsConfig);
		}
		onConfigChange() {
			this._exceptionStepsConfig = di(this._getExceptionStepsConfig()), this._exceptionStepsBuffer.setConfig(this._exceptionStepsConfig);
		}
		onRemoteConfig(e) {
			if (!e.ok) return;
			let t = e.config;
			if (!("errorTracking" in t)) return;
			let n = t.errorTracking?.suppressionRules ?? [], r = t.errorTracking?.captureExtensionExceptions;
			this._suppressionRules = n, this._instance.persistence && this._instance.persistence.register({
				[me]: this._suppressionRules,
				[he]: r
			});
		}
		get _captureExtensionExceptions() {
			var e;
			let t = !!this._instance.get_property(he);
			return (e = this._instance.config.error_tracking.captureExtensionExceptions ?? t) != null && e;
		}
		buildProperties(e, t) {
			return this._errorPropertiesBuilder.buildFromUnknown(e, {
				syntheticException: t?.syntheticException,
				mechanism: { handled: t?.handled }
			});
		}
		addExceptionStep(e, t) {
			if (this._exceptionStepsConfig.enabled) try {
				if (!F(e) || e.trim().length === 0) return void Td.warn("Ignoring exception step because message must be a non-empty string");
				let { sanitizedProperties: n, droppedKeys: r } = function(e) {
					if (!e) return {
						sanitizedProperties: {},
						droppedKeys: []
					};
					let t = [];
					return {
						sanitizedProperties: Object.keys(e).reduce((n, r) => li.has(r) ? (t.push(r), n) : (n[r] = e[r], n), {}),
						droppedKeys: t
					};
				}(this._coerceExceptionStepProperties(t));
				r.length > 0 && Td.warn("Ignoring reserved exception step fields", { droppedKeys: r }), this._exceptionStepsBuffer.add(B({
					[si]: e,
					[ci]: (/* @__PURE__ */ new Date()).toISOString()
				}, n));
			} catch (e) {
				Td.error("Failed to add exception step. Ignoring breadcrumb.", e);
			}
		}
		sendExceptionEvent(e) {
			try {
				let t = e.$exception_list;
				if (this._isExceptionList(t)) {
					if (this._matchesSuppressionRule(t)) return this._addDroppedExceptionStep("Exception dropped: matched a suppression rule"), void Td.info("Skipping exception capture because a suppression rule matched");
					if (!this._captureExtensionExceptions && this._isExtensionException(t)) return this._addDroppedExceptionStep("Exception dropped: thrown by a browser extension"), void Td.info("Skipping exception capture because it was thrown by an extension");
					if (!this._captureExtensionExceptions && this._isInjectedBrowserScriptException(t)) return this._addDroppedExceptionStep("Exception dropped: thrown by an injected browser script"), void Td.info("Skipping exception capture because it was thrown by an injected browser script");
					if (!this._instance.config.error_tracking.__capturePostHogExceptions && this._isPostHogException(t)) return this._addDroppedExceptionStep("Exception dropped: thrown by the PostHog SDK"), void Td.info("Skipping exception capture because it was thrown by the PostHog SDK");
				}
				let n = this._exceptionStepsConfig.enabled && L(e.$exception_steps) ? this._addBufferedExceptionSteps(e) : e, r = function() {
					if ("u" > typeof process) {
						let e = process.env.POSTHOG_RELEASE_ID?.trim();
						if (e) return e;
					}
					let e = globalThis._posthogReleaseId;
					return typeof e == "string" && e.length > 0 ? e : void 0;
				}();
				r && (n.$release_id = r);
				try {
					let e = this._instance.capture("$exception", n, {
						_noTruncate: !0,
						_batchKey: "exceptionEvent",
						_originatedFromCaptureException: !0
					});
					return e && this._exceptionStepsBuffer.clear(), e;
				} catch (e) {
					wd(e) || Td.error("Failed to capture exception event. Dropping this exception.", e), this._exceptionStepsBuffer.clear();
					return;
				}
			} catch (e) {
				wd(e) || Td.error("Failed to process exception event. Ignoring this exception.", e);
				return;
			}
		}
		_addBufferedExceptionSteps(e) {
			try {
				let t = this._exceptionStepsBuffer.getAttachable();
				return t.length === 0 ? e : B(B({}, e), {}, { $exception_steps: t });
			} catch (t) {
				return Td.error("Failed to read buffered exception steps. Capturing exception without steps.", t), e;
			}
		}
		_addDroppedExceptionStep(e) {
			this._exceptionStepsConfig.enabled && this._exceptionStepsBuffer.add({
				[si]: e,
				[ci]: (/* @__PURE__ */ new Date()).toISOString()
			});
		}
		_coerceExceptionStepProperties(e) {
			return N(e) ? B({}, e) : {};
		}
		_getExceptionStepsConfig() {
			return this._instance.config.error_tracking?.exception_steps ?? {};
		}
		_matchesSuppressionRule(e) {
			if (e.length === 0) return !1;
			try {
				let t = e.reduce((e, { type: t, value: n }) => (F(t) && t.length > 0 && e.$exception_types.push(t), F(n) && n.length > 0 && e.$exception_values.push(n), e), {
					$exception_types: [],
					$exception_values: []
				});
				return this._suppressionRules.some((e) => {
					let n = e.values.map((e) => {
						let n = Fl[e.operator], r = t[e.key];
						if (!n || !r) return !1;
						let i = j(e.value) ? e.value : [e.value];
						return i.length > 0 && n(i, r);
					});
					return e.type === "OR" ? n.some(Boolean) : n.every(Boolean);
				});
			} catch (e) {
				return Td.warn("Failed to evaluate suppression rules. Capturing the exception.", e), !1;
			}
		}
		_isExtensionException(e) {
			let t = e.flatMap((e) => e.stacktrace?.frames ?? []), n = t.filter(({ filename: e }) => !!e && Od.some((t) => e.startsWith(t)));
			return n.length !== 0 && (!n.every(({ filename: e }) => !!e && e.startsWith(Ed)) || e.some(({ type: e, value: t }) => e === "NoResponse" || F(t) && Dd.some(({ value: e, exact: n }) => n ? t === e : t.includes(e))) && !t.some(({ in_app: e, filename: t }) => e && !t?.startsWith(Ed)));
		}
		_isInjectedBrowserScriptException(e) {
			return e.some(({ value: e }) => F(e) && kd.some((t) => e.includes(t)));
		}
		_isPostHogException(e) {
			if (e.length > 0) {
				var t, n;
				let r = e[0].stacktrace?.frames ?? [], i = r[r.length - 1];
				return (t = i == null || (n = i.filename) == null ? void 0 : n.includes("posthog.com/static")) != null && t;
			}
			return !1;
		}
		_isExceptionList(e) {
			return !L(e) && j(e);
		}
	}
}, gf = B({ productTours: class {
	get _persistence() {
		return this._instance.persistence;
	}
	constructor(e) {
		this._productTourManager = null, this._cachedTours = null, this._instance = e;
	}
	initialize() {
		this.loadIfEnabled();
	}
	onRemoteConfig(e) {
		if (!e.ok) return;
		let t = e.config;
		if ("productTours" in t) {
			var n;
			if (this._persistence && this._persistence.register({ [ve]: !!t.productTours }), !Zu(this._instance)) return !this._productTourManager && L(this._persistence?.props.ph_product_tours) || Xu.info("product tours disabled; stopping and clearing cached tours"), (n = this._productTourManager) == null || n.stop(), this._productTourManager = null, void this.clearCache();
			this.loadIfEnabled();
		}
	}
	loadIfEnabled() {
		!this._productTourManager && Zu(this._instance) && this._loadScript(() => this._startProductTours());
	}
	_loadScript(e) {
		var t, n;
		k.__PosthogExtensions__?.generateProductTours ? e() : (t = k.__PosthogExtensions__) == null || (n = t.loadExternalDependency) == null || n.call(t, this._instance, "product-tours", (t) => {
			t ? Xu.error("Could not load product tours script", t) : e();
		});
	}
	_startProductTours() {
		var e;
		!this._productTourManager && (e = k.__PosthogExtensions__) != null && e.generateProductTours && (this._productTourManager = k.__PosthogExtensions__.generateProductTours(this._instance, !0));
	}
	getProductTours(e, t = !1) {
		if (j(this._cachedTours) && !t) return void e(this._cachedTours, { isLoaded: !0 });
		let n = this._persistence;
		if (n) {
			let r = n.props[Ie];
			if (j(r) && !t) return this._cachedTours = r, void e(r, { isLoaded: !0 });
		}
		this._instance._send_request({
			url: this._instance.requestRouter.endpointFor("api", `/api/product_tours/?token=${this._instance.config.token}`),
			method: "GET",
			timestampMode: "query",
			callback: (t) => {
				if (!Zu(this._instance)) return void e([], { isLoaded: !0 });
				let r = t.statusCode;
				if (r !== 200 || !t.json) {
					let n = `Product Tours API could not be loaded, status: ${r}`;
					r === 0 ? t.error || Xu.warn(n) : Xu.error(n), e([], {
						isLoaded: !1,
						error: n
					});
					return;
				}
				let i = j(t.json.product_tours) ? t.json.product_tours : [];
				this._cachedTours = i, n && n.register({ [Ie]: i }), e(i, { isLoaded: !0 });
			}
		});
	}
	getActiveProductTours(e) {
		L(this._productTourManager) ? e([], {
			isLoaded: !1,
			error: "Product tours not loaded"
		}) : this._productTourManager.getActiveProductTours(e);
	}
	showProductTour(e) {
		var t;
		(t = this._productTourManager) == null || t.showTourById(e);
	}
	previewTour(e) {
		this._productTourManager ? this._productTourManager.previewTour(e) : this._loadScript(() => {
			var t;
			this._startProductTours(), (t = this._productTourManager) == null || t.previewTour(e);
		});
	}
	dismissProductTour() {
		var e;
		(e = this._productTourManager) == null || e.dismissTour("user_clicked_skip");
	}
	nextStep() {
		var e;
		(e = this._productTourManager) == null || e.nextStep();
	}
	previousStep() {
		var e;
		(e = this._productTourManager) == null || e.previousStep();
	}
	clearCache() {
		var e;
		this._cachedTours = null, (e = this._persistence) == null || e.unregister("ph_product_tours");
	}
	resetTour(e) {
		var t;
		(t = this._productTourManager) == null || t.resetTour(e);
	}
	resetAllTours() {
		var e;
		(e = this._productTourManager) == null || e.resetAllTours();
	}
	cancelPendingTour(e) {
		var t;
		(t = this._productTourManager) == null || t.cancelPendingTour(e);
	}
} }, ff), _f = { siteApps: class {
	constructor(e) {
		this._instance = e, this._siteAppElementPatchCount = 0, this._bufferedInvocations = [], this.apps = {};
	}
	get isEnabled() {
		return !!this._instance.config.opt_in_site_apps;
	}
	_eventCollector(e, t) {
		if (!t) return;
		let n = this.globalsForEvent(t);
		this._bufferedInvocations.push(n), this._bufferedInvocations.length > 1e3 && (this._bufferedInvocations = this._bufferedInvocations.slice(10));
	}
	get siteAppLoaders() {
		var e;
		return (e = k._POSTHOG_REMOTE_CONFIG) == null || (e = e[this._instance.config.token]) == null ? void 0 : e.siteApps;
	}
	initialize() {
		if (this.isEnabled) {
			let e = this._instance._addCaptureHook(this._eventCollector.bind(this));
			this._stopBuffering = () => {
				e(), this._bufferedInvocations = [], this._stopBuffering = void 0;
			};
		}
	}
	globalsForEvent(e) {
		if (!e) throw Error("Event payload is required");
		let t = {}, n = this._instance.get_property("$groups") || [], r = this._instance.get_property("$stored_group_properties") || {};
		for (let [e, i] of Object.entries(r)) t[e] = {
			id: n[e],
			type: e,
			properties: i
		};
		let { $set_once: i, $set: a } = e;
		return {
			event: B(B({}, Di(e, Qu)), {}, {
				properties: B(B(B({}, e.properties), a ? { $set: B(B({}, e.properties?.$set ?? {}), a) } : {}), i ? { $set_once: B(B({}, e.properties?.$set_once ?? {}), i) } : {}),
				elements_chain: e.properties?.$elements_chain ?? "",
				distinct_id: e.properties?.distinct_id
			}),
			person: { properties: this._instance.get_property("$stored_person_properties") },
			groups: t
		};
	}
	_prepareElementForSiteApp(e) {
		let t = e.tagName?.toLowerCase();
		return t === "style" && this._instance.config.prepare_external_dependency_stylesheet ? this._instance.config.prepare_external_dependency_stylesheet(e) || ($u.error("prepare_external_dependency_stylesheet returned null"), null) : t === "script" && this._instance.config.prepare_external_dependency_script ? this._instance.config.prepare_external_dependency_script(e) || ($u.error("prepare_external_dependency_script returned null"), null) : e;
	}
	_patchSiteAppElementInsertionMethods() {
		var e;
		if (!this._instance.config.prepare_external_dependency_stylesheet && !this._instance.config.prepare_external_dependency_script) return () => {};
		let t = D?.defaultView, n = t == null || (e = t.Node) == null ? void 0 : e.prototype;
		if (!t || !n) return () => {};
		if (this._siteAppElementPatchCount++, this._restoreSiteAppElementPatches) return this._releaseSiteAppElementPatches();
		let r = [], i = this, a = /* @__PURE__ */ new WeakSet(), o = (e, t, n) => {
			if (!e?.[t]) return;
			let i = e[t];
			e[t] = n(i), r.push(() => {
				e[t] = i;
			});
		}, s = (e) => {
			if (a.has(e)) return e;
			let t = i._prepareElementForSiteApp(e);
			return t && a.add(t), t;
		}, c = (e) => e.map((e) => typeof e == "string" ? e : s(e)).filter((e) => !I(e));
		return o(n, "appendChild", (e) => function(t) {
			let n = s(t);
			return n ? e.call(this, n) : t;
		}), o(n, "insertBefore", (e) => function(t, n) {
			let r = s(t);
			return r ? e.call(this, r, n) : t;
		}), o(n, "replaceChild", (e) => function(t, n) {
			let r = s(t);
			return r ? e.call(this, r, n) : n;
		}), [
			t.Element?.prototype,
			t.Document?.prototype,
			t.DocumentFragment?.prototype
		].forEach((e) => {
			o(e, "append", (e) => function(...t) {
				return e.apply(this, c(t));
			}), o(e, "prepend", (e) => function(...t) {
				return e.apply(this, c(t));
			});
		}), [
			t.Element?.prototype,
			t.CharacterData?.prototype,
			t.DocumentType?.prototype
		].forEach((e) => {
			o(e, "before", (e) => function(...t) {
				return e.apply(this, c(t));
			}), o(e, "after", (e) => function(...t) {
				return e.apply(this, c(t));
			}), o(e, "replaceWith", (e) => function(...t) {
				let n = c(t);
				return t.length && !n.length ? void 0 : e.apply(this, n);
			});
		}), o(t.Element?.prototype, "insertAdjacentElement", (e) => function(t, n) {
			let r = s(n);
			return r ? e.call(this, t, r) : null;
		}), this._restoreSiteAppElementPatches = () => {
			r.forEach((e) => e()), this._restoreSiteAppElementPatches = void 0;
		}, this._releaseSiteAppElementPatches();
	}
	_releaseSiteAppElementPatches() {
		let e = !1;
		return () => {
			var t;
			e || (e = !0, this._siteAppElementPatchCount--, this._siteAppElementPatchCount === 0 && ((t = this._restoreSiteAppElementPatches) == null || t.call(this)));
		};
	}
	_runWithPreparedSiteAppElements(e, t = !0) {
		let n = this._patchSiteAppElementInsertionMethods();
		try {
			let r = e(n);
			return t && n(), r;
		} catch (e) {
			throw n(), e;
		}
	}
	setupSiteApp(e) {
		let t = this.apps[e.id], n = () => {
			var n;
			!t.errored && this._bufferedInvocations.length && ($u.info(`Processing ${this._bufferedInvocations.length} events for site app with id ${e.id}`), this._bufferedInvocations.forEach((e) => this._runWithPreparedSiteAppElements(() => t.processEvent?.call(t, e))), t.processedBuffer = !0), Object.values(this.apps).every((e) => e.processedBuffer || e.errored) && ((n = this._stopBuffering) == null || n.call(this));
		}, r = !1, i = (i) => {
			t.errored = !i, t.loaded = !0, $u.info(`Site app with id ${e.id} ${i ? "loaded" : "errored"}`), r && n();
		};
		try {
			let { processEvent: n } = this._runWithPreparedSiteAppElements((t) => e.init({
				posthog: this._instance,
				callback(e) {
					t(), i(e);
				}
			}), !1);
			n && (t.processEvent = n), r = !0;
		} catch (t) {
			$u.error(ed + e.id, t), i(!1);
		}
		if (r && t.loaded) try {
			n();
		} catch (n) {
			$u.error(`Error while processing buffered events PostHog app with config id ${e.id}`, n), t.errored = !0;
		}
	}
	_setupSiteApps() {
		let e = this.siteAppLoaders || [];
		for (let t of e) this.apps[t.id] = {
			id: t.id,
			loaded: !1,
			errored: !1,
			processedBuffer: !1
		};
		for (let t of e) this.setupSiteApp(t);
	}
	_onCapturedEvent(e) {
		if (Object.keys(this.apps).length === 0) return;
		let t = this.globalsForEvent(e);
		for (let n of Object.values(this.apps)) try {
			this._runWithPreparedSiteAppElements(() => n.processEvent?.call(n, t));
		} catch (t) {
			$u.error(`Error while processing event ${e.event} for site app ${n.id}`, t);
		}
	}
	onRemoteConfig(e) {
		var t;
		if (this.siteAppLoaders?.length) return this.isEnabled ? (this._setupSiteApps(), void this._instance.on("eventCaptured", (e) => this._onCapturedEvent(e))) : void $u.error("PostHog site apps are disabled. Enable the \"opt_in_site_apps\" config to proceed.");
		if ((t = this._stopBuffering) == null || t.call(this), !e.ok) return;
		let n = e.config;
		if (n.siteApps?.length) {
			if (this.isEnabled) for (let { id: e, url: t } of n.siteApps) {
				var r, i;
				k[`__$$ph_site_app_${e}`] = this._instance, (r = k.__PosthogExtensions__) == null || (i = r.loadSiteApp) == null || i.call(r, this._instance, t, (t) => {
					if (t) return $u.error(ed + e, t);
				});
			}
			else $u.error("PostHog site apps are disabled. Enable the \"opt_in_site_apps\" config to proceed.");
		}
	}
} }, vf = { tracingHeaders: class {
	constructor(e) {
		this._instance = e, this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0, this._hostnamesForPatch = void 0, this._startCapturing = () => {
			let e = this._syncHostnamesForPatch();
			var t, n;
			e ? (P(this._restoreXHRPatch) && (this._restoreXHRPatch = (t = k.__PosthogExtensions__) == null || (t = t.tracingHeadersPatchFns) == null ? void 0 : t._patchXHR(e, () => this._instance.get_distinct_id(), this._instance.sessionManager)), P(this._restoreFetchPatch) && (this._restoreFetchPatch = (n = k.__PosthogExtensions__) == null || (n = n.tracingHeadersPatchFns) == null ? void 0 : n._patchFetch(e, () => this._instance.get_distinct_id(), this._instance.sessionManager))) : this._stopCapturing();
		};
	}
	initialize() {
		this.startIfEnabledOrStop();
	}
	_loadScript(e) {
		var t, n;
		k.__PosthogExtensions__?.tracingHeadersPatchFns ? e() : (t = k.__PosthogExtensions__) == null || (n = t.loadExternalDependency) == null || n.call(t, this._instance, "tracing-headers", (t) => {
			if (t) return Ru.error("failed to load script", t);
			e();
		});
	}
	_getConfiguredHostnames() {
		return this._instance.config.tracing_headers ?? this._instance.config.addTracingHeaders ?? this._instance.config.__add_tracing_headers;
	}
	_syncHostnamesForPatch() {
		let e = this._getConfiguredHostnames();
		return j(e) ? (j(this._hostnamesForPatch) ? this._hostnamesForPatch.splice(0, this._hostnamesForPatch.length, ...e) : this._hostnamesForPatch = [...e], e.length > 0 ? this._hostnamesForPatch : void 0) : (j(this._hostnamesForPatch) && this._hostnamesForPatch.splice(0), this._hostnamesForPatch = e || void 0, this._hostnamesForPatch);
	}
	_stopCapturing() {
		var e, t;
		(e = this._restoreXHRPatch) == null || e.call(this), (t = this._restoreFetchPatch) == null || t.call(this), this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0;
	}
	startIfEnabledOrStop() {
		this._syncHostnamesForPatch() ? this._loadScript(this._startCapturing) : this._stopCapturing();
	}
} }, yf = B({ surveys: class extends cd {
	constructor(e) {
		super(new ld(e));
	}
} }, ff), bf = { toolbar: class {
	constructor(e) {
		this.instance = e;
	}
	_setToolbarState(e) {
		k.ph_toolbar_state = e;
	}
	_getToolbarState() {
		return k.ph_toolbar_state ?? 0;
	}
	initialize() {
		return this.maybeLoadToolbar();
	}
	maybeLoadToolbar(e = void 0, t = void 0, n = void 0) {
		if (Ja(this.instance.config) || !E || !D) return !1;
		e ??= E.location, n ??= E.history;
		try {
			if (!t) {
				try {
					E.localStorage.setItem("test", "test"), E.localStorage.removeItem("test");
				} catch {
					return !1;
				}
				t = E?.localStorage;
			}
			let r = ud || Ns(e.hash, "__posthog") || Ns(e.hash, "state"), i, a = r ? gr(() => JSON.parse(atob(decodeURIComponent(r)))) || gr(() => JSON.parse(decodeURIComponent(r))) : null;
			return a && a.action === "ph_authorize" ? (i = a, i.source = "url", i && Object.keys(i).length > 0 && (a.desiredHash ? e.hash = a.desiredHash : n ? n.replaceState(n.state, "", e.pathname + e.search) : e.hash = "")) : (i = JSON.parse(t.getItem(dd) || "{}"), i.source = "localstorage", delete i.userIntent), !(!i.token || this.instance.config.token !== i.token || (this.loadToolbar(i), 0));
		} catch {
			return !1;
		}
	}
	_callLoadToolbar(e) {
		let t = k.ph_load_toolbar || k.ph_load_editor;
		!L(t) && M(t) ? t(e, this.instance) : fd.warn("No toolbar load function found");
	}
	loadToolbar(e) {
		let t = !!D?.getElementById("__POSTHOG_TOOLBAR__");
		if (!E || t) return !1;
		let n = this.instance.requestRouter.region === "custom" && this.instance.config.advanced_disable_toolbar_metrics, r = B(B({ token: this.instance.config.token }, e), {}, { apiURL: this.instance.requestRouter.endpointFor("ui") }, n ? { instrument: !1 } : {});
		if (E.localStorage.setItem(dd, JSON.stringify(B(B({}, r), {}, { source: void 0 }))), this._getToolbarState() === 2) this._callLoadToolbar(r);
		else if (this._getToolbarState() === 0) {
			var i, a;
			this._setToolbarState(1), (i = k.__PosthogExtensions__) == null || (a = i.loadExternalDependency) == null || a.call(i, this.instance, "toolbar", (e) => {
				if (e) return fd.error("[Toolbar] Failed to load", e), void this._setToolbarState(0);
				this._setToolbarState(2), this._callLoadToolbar(r);
			}), G(E, "turbolinks:load", () => {
				this._setToolbarState(0), this.loadToolbar(r);
			});
		}
		return !0;
	}
	_loadEditor(e) {
		return this.loadToolbar(e);
	}
	maybeLoadEditor(e = void 0, t = void 0, n = void 0) {
		return this.maybeLoadToolbar(e, t, n);
	}
} }, xf = B({ experiments: class e {
	get _config() {
		return this._instance.config;
	}
	constructor(t) {
		this._instance = t, this.getWebExperimentsAndEvaluateDisplayLogic = (t = !1) => {
			this.getWebExperiments((t) => {
				e._logInfo("retrieved web experiments from the server"), this._flagToExperiments = /* @__PURE__ */ new Map(), t.forEach((t) => {
					if (t.feature_flag_key) {
						var n;
						this._flagToExperiments && (e._logInfo("setting flag key ", t.feature_flag_key, " to web experiment ", t), (n = this._flagToExperiments) == null || n.set(t.feature_flag_key, t));
						let r = this._instance.getFeatureFlag(t.feature_flag_key);
						F(r) && t.variants[r] && this._applyTransforms(t.name, r, t.variants[r].transforms);
					} else if (t.variants) for (let n in t.variants) {
						let r = t.variants[n];
						e._matchesTestVariant(r, this._instance) && this._applyTransforms(t.name, n, r.transforms);
					}
				});
			}, t);
		}, this._instance.onFeatureFlags((e) => {
			this.onFeatureFlags(e);
		});
	}
	initialize() {}
	onFeatureFlags(t) {
		if (this._is_bot()) e._logInfo(Ad);
		else if (!this._config.disable_web_experiments) {
			if (L(this._flagToExperiments)) return this._flagToExperiments = /* @__PURE__ */ new Map(), this.loadIfEnabled(), void this.previewWebExperiment();
			e._logInfo("applying feature flags", t), t.forEach((e) => {
				if (this._flagToExperiments && this._flagToExperiments?.has(e)) {
					let t = this._instance.getFeatureFlag(e), n = this._flagToExperiments?.get(e);
					t && n != null && n.variants[t] && this._applyTransforms(n.name, t, n.variants[t].transforms);
				}
			});
		}
	}
	previewWebExperiment() {
		let t = e.getWindowLocation();
		if (t?.search) {
			let n = js(t?.search, "__experiment_id"), r = js(t?.search, "__experiment_variant");
			n && r && (e._logInfo(`previewing web experiments ${n} && ${r}`), this.getWebExperiments((e) => {
				this._showPreviewWebExperiment(parseInt(n), r, e);
			}, !1, !0));
		}
	}
	loadIfEnabled() {
		this._config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic();
	}
	getWebExperiments(e, t, n) {
		if (this._config.disable_web_experiments && !n) return e([]);
		let r = this._instance.get_property("$web_experiments");
		if (r && !t) return e(r);
		this._instance._send_request({
			url: this._instance.requestRouter.endpointFor("api", `/api/web_experiments/?token=${this._config.token}`),
			method: "GET",
			timestampMode: "query",
			callback: (t) => e(t.statusCode === 200 && t.json && t.json.experiments || [])
		});
	}
	_showPreviewWebExperiment(t, n, r) {
		let i = r.filter((e) => e.id === t);
		i && i.length > 0 && (e._logInfo(`Previewing web experiment [${i[0].name}] with variant [${n}]`), this._applyTransforms(i[0].name, n, i[0].variants[n].transforms));
	}
	static _matchesTestVariant(t, n) {
		return !L(t.conditions) && e._matchUrlConditions(t, n) && e._matchUTMConditions(t);
	}
	static _matchUrlConditions(t, n) {
		if (L(t.conditions) || L(t.conditions?.url)) return !0;
		let r = e.getWindowLocation();
		if (r) {
			let e = Co(n, r.href);
			return !t.conditions?.url || jd[t.conditions?.urlMatchType ?? "icontains"](t.conditions.url, e);
		}
		return !1;
	}
	static getWindowLocation() {
		return E?.location;
	}
	static _matchUTMConditions(e) {
		if (L(e.conditions) || L(e.conditions?.utm)) return !0;
		let t = Rs();
		if (t.utm_source) {
			var n, r, i, a, o, s, c, l;
			let u = !((n = e.conditions) != null && (n = n.utm) != null && n.utm_campaign) || ((r = e.conditions) == null || (r = r.utm) == null ? void 0 : r.utm_campaign) == t.utm_campaign, d = !((i = e.conditions) != null && (i = i.utm) != null && i.utm_source) || ((a = e.conditions) == null || (a = a.utm) == null ? void 0 : a.utm_source) == t.utm_source, f = !((o = e.conditions) != null && (o = o.utm) != null && o.utm_medium) || ((s = e.conditions) == null || (s = s.utm) == null ? void 0 : s.utm_medium) == t.utm_medium, p = !((c = e.conditions) != null && (c = c.utm) != null && c.utm_term) || ((l = e.conditions) == null || (l = l.utm) == null ? void 0 : l.utm_term) == t.utm_term;
			return u && f && p && d;
		}
		return !1;
	}
	static _logInfo(e, ...t) {
		V.info(`[WebExperiments] ${e}`, t);
	}
	_applyTransforms(t, n, r) {
		this._is_bot() ? e._logInfo(Ad) : n === "control" ? e._logInfo("Control variants leave the page unmodified.") : r.forEach((r) => {
			r.selector && (e._logInfo(`applying transform of variant ${n} for experiment ${t} `, r), (document?.querySelectorAll(r.selector))?.forEach((e) => {
				let t = e;
				r.html && (t.innerHTML = r.html), r.css && t.setAttribute("style", r.css);
			}));
		});
	}
	_is_bot() {
		return yt && this._instance ? kl(yt, this._config.custom_blocked_useragents) : void 0;
	}
} }, ff), Sf = { conversations: class {
	constructor(e) {
		this._instance = e, this._isConversationsEnabled = void 0, this._conversationsManager = null, this._isInitializing = !1, this._remoteConfig = null, this._loadFailed = !1, this._resetGeneration = 0, this._pendingPanelAction = null, this._theme = null;
	}
	initialize() {
		this.loadIfEnabled();
	}
	onRemoteConfig(e) {
		if (this._instance.config.disable_conversations) return void (this._pendingPanelAction = null);
		if (this._remoteConfigSuccessful = e.ok, !e.ok) return;
		let t = e.config.conversations;
		L(t) ? this._pendingPanelAction = null : (zt(t) ? this._isConversationsEnabled = t : (this._isConversationsEnabled = t.enabled, this._remoteConfig = t), this._isConversationsEnabled || (this._pendingPanelAction = null), this.loadIfEnabled());
	}
	reset() {
		var e;
		(e = this._conversationsManager) == null || e.reset(), this._conversationsManager = null, this._resetGeneration++, this._isConversationsEnabled = void 0, this._remoteConfig = null, this._remoteConfigSuccessful = void 0, this._loadFailed = !1, this._pendingPanelAction = null;
	}
	loadIfEnabled() {
		if (this._conversationsManager || this._isInitializing || this._instance.config.disable_conversations || Ja(this._instance.config) || this._instance.config.cookieless_mode && this._instance.consent.isOptedOut()) return;
		let e = k?.__PosthogExtensions__;
		if (e && !P(this._isConversationsEnabled) && this._isConversationsEnabled) {
			if (this._remoteConfig && this._remoteConfig.token) {
				this._isInitializing = !0;
				try {
					let t = e.initConversations;
					if (t) return this._completeInitialization(t), void (this._isInitializing = !1);
					let n = e.loadExternalDependency;
					if (!n) return void this._handleLoadError(C);
					let r = this._resetGeneration;
					n(this._instance, "conversations", (t) => {
						if (r !== this._resetGeneration) return this._isInitializing = !1, void this.loadIfEnabled();
						t || !e.initConversations ? this._handleLoadError("Could not load conversations script", t) : this._completeInitialization(e.initConversations), this._isInitializing = !1;
					});
				} catch (e) {
					this._handleLoadError("Error initializing conversations", e), this._isInitializing = !1;
				}
			} else Md.error("Conversations enabled but missing token in remote config.");
		}
	}
	_completeInitialization(e) {
		if (this._remoteConfig) {
			try {
				this._conversationsManager = e(this._remoteConfig, this._instance), this._loadFailed = !1, Md.info("Conversations loaded successfully");
			} catch (e) {
				this._handleLoadError("Error completing conversations initialization", e);
				return;
			}
			this._theme && this._conversationsManager.setTheme(this._theme), this._applyPendingPanelAction();
		} else Md.error("Cannot complete initialization: remote config is null");
	}
	_applyPendingPanelAction() {
		let e = this._pendingPanelAction;
		this._pendingPanelAction = null, this._conversationsManager && e && (e === "open" ? this._conversationsManager.open() : this._conversationsManager.close());
	}
	_handleLoadError(e, t) {
		Md.error(e, t), this._conversationsManager = null, this._isInitializing = !1, this._loadFailed = !0;
	}
	show() {
		this._conversationsManager ? this._conversationsManager.show() : Md.warn("Conversations not loaded yet.");
	}
	hide() {
		this._pendingPanelAction === "open" && (this._pendingPanelAction = null), this._conversationsManager && this._conversationsManager.hide();
	}
	open() {
		this._conversationsManager ? (this._pendingPanelAction = null, this._conversationsManager.open()) : this._pendingPanelAction = "open";
	}
	close() {
		this._conversationsManager ? (this._pendingPanelAction = null, this._conversationsManager.close()) : this._pendingPanelAction = "close";
	}
	setTheme(e) {
		var t;
		this._theme = B(B(B({}, this._theme), e), {}, { dark: B(B({}, this._theme?.dark), e?.dark) }), (t = this._conversationsManager) == null || t.setTheme(e);
	}
	isAvailable() {
		return !0 === this._isConversationsEnabled && !I(this._conversationsManager);
	}
	getUnavailableReason() {
		return this.isAvailable() ? null : this._instance.config.disable_conversations ? "disabled_by_config" : Ja(this._instance.config) ? "disabled_for_toolbar" : this._instance.config.cookieless_mode && this._instance.consent.isOptedOut() ? "consent_opted_out" : !1 === this._remoteConfigSuccessful ? "remote_config_failed" : P(this._isConversationsEnabled) ? this._remoteConfigSuccessful ? "disabled_in_project" : "remote_config_pending" : this._isConversationsEnabled ? L(this._remoteConfig) || !this._remoteConfig.token ? "missing_token" : k?.__PosthogExtensions__ ? this._isInitializing ? "initializing" : this._loadFailed ? "load_failed" : "not_loaded" : "extensions_unavailable" : "disabled_in_project";
	}
	isVisible() {
		var e;
		return (e = this._conversationsManager?.isVisible()) != null && e;
	}
	sendMessage(e, t, n) {
		var r = this;
		return z(function* () {
			return r._conversationsManager ? r._conversationsManager.sendMessage(e, t, n) : (Md.warn(Nd), null);
		})();
	}
	getMessages(e, t) {
		var n = this;
		return z(function* () {
			return n._conversationsManager ? n._conversationsManager.getMessages(e, t) : (Md.warn(Nd), null);
		})();
	}
	markAsRead(e) {
		var t = this;
		return z(function* () {
			return t._conversationsManager ? t._conversationsManager.markAsRead(e) : (Md.warn(Nd), null);
		})();
	}
	getTickets(e) {
		var t = this;
		return z(function* () {
			return t._conversationsManager ? t._conversationsManager.getTickets(e) : (Md.warn(Nd), null);
		})();
	}
	requestRestoreLink(e) {
		var t = this;
		return z(function* () {
			return t._conversationsManager ? t._conversationsManager.requestRestoreLink(e) : (Md.warn(Nd), null);
		})();
	}
	restoreFromToken(e) {
		var t = this;
		return z(function* () {
			return t._conversationsManager ? t._conversationsManager.restoreFromToken(e) : (Md.warn(Nd), null);
		})();
	}
	restoreFromUrlToken() {
		var e = this;
		return z(function* () {
			return e._conversationsManager ? e._conversationsManager.restoreFromUrlToken() : (Md.warn(Nd), null);
		})();
	}
	getCurrentTicketId() {
		return this._conversationsManager?.getCurrentTicketId() ?? null;
	}
	getWidgetSessionId() {
		return this._conversationsManager?.getWidgetSessionId() ?? null;
	}
	_onIdentityChanged() {
		var e;
		(e = this._conversationsManager) == null || e.setIdentity();
	}
	_onIdentityCleared() {
		var e;
		(e = this._conversationsManager) == null || e.clearIdentity();
	}
} }, Cf = { logs: class extends Vd {
	constructor(e) {
		super({
			get() {
				var t;
				return e == null || (t = e.config) == null ? void 0 : t.logs;
			},
			captureHintKey: ye,
			get remoteConfigWillArrive() {
				var t;
				return !e._shouldDisableFlags?.call(e) || !!((t = k._POSTHOG_REMOTE_CONFIG) != null && (t = t[e.config.token]) != null && t.config);
			}
		}, () => function(e) {
			var t;
			let n = {};
			if (n.distinctId = e.get_distinct_id(), e.sessionManager) {
				let { sessionId: t, windowId: r, sessionStartTimestamp: i, lastActivityTimestamp: a } = e.sessionManager.checkAndGetSessionAndWindowId(!0);
				n.sessionId = t, n.windowId = r, L(i) || (n.sessionStartTimestamp = i), L(a) || (n.lastActivityTimestamp = a);
			}
			if (k != null && (t = k.location) != null && t.href && (n.currentUrl = e.config.disable_capture_url_hashes ? hr(k.location.href) : k.location.href), e.featureFlags) {
				let t = e.featureFlags.getFlags();
				t && t.length > 0 && (n.activeFeatureFlags = t);
			}
			return n;
		}(e)), this._instance = e, this.name = su, this._listenForReconnect();
	}
	get _isRequestReady() {
		return this._instance.__loaded;
	}
	_getConsoleLoader() {
		let e = H("[logs]"), t = k?.__PosthogExtensions__;
		if (!t) return void e.error("PostHog Extensions not found.");
		let n = t.loadExternalDependency;
		if (n) return (e) => {
			n(this._instance, "logs", (n) => {
				let r = t.logs;
				e(n, r?.initializeLogs ? {
					initialize: (e) => r.initializeLogs(e),
					replay(e, t) {
						return r.replayConsoleBuffer?.call(r, e, t);
					}
				} : void 0);
			});
		};
		e.error(C);
	}
} }, wf = { metrics: class {
	constructor(e) {
		this._instance = e, this._logger = H("[metrics]"), this._disposed = !1;
	}
	initialize() {
		this.onConfigChange();
	}
	onConfigChange() {
		if (this._disposed) return;
		let e = !!this._instance.config.metrics?.network;
		e && !this._stopNetworkMetrics ? this._stopNetworkMetrics = ((e) => {
			let t = !0, n = () => t ? ((e) => {
				let t = e.config.metrics?.network;
				return !0 === t ? {} : t || void 0;
			})(e) : void 0, r = Yd(e, n), i = Xd(e, n);
			return () => {
				t = !1, r(), i();
			};
		})(this._instance) : !e && this._stopNetworkMetrics && (this._stopNetworkMetrics(), this._stopNetworkMetrics = void 0);
	}
	_getCore() {
		var e;
		let t = (e = this._instance) == null || (e = e.config) == null ? void 0 : e.metrics;
		var n;
		return this._core && this._resolvedFrom === t || ((n = this._core) == null || n.reset(), this._resolvedFrom = t, this._core = new Ra(this._createHost(), function(e) {
			let t = e?.resourceAttributes;
			return {
				serviceName: t?.["service.name"] ?? e?.serviceName,
				serviceVersion: t?.["service.version"] ?? e?.serviceVersion,
				environment: t?.["deployment.environment"] ?? e?.environment,
				resourceAttributes: t,
				beforeSend: e?.beforeSend,
				flushIntervalMs: e?.flushIntervalMs ?? 1e4,
				maxSeriesPerFlush: e?.maxSeriesPerFlush ?? 1e3
			};
		}(t), this._logger)), this._core;
	}
	count(e, t = 1, n) {
		this._getCore().count(e, t, n);
	}
	gauge(e, t, n) {
		this._getCore().gauge(e, t, n);
	}
	histogram(e, t, n) {
		this._getCore().histogram(e, t, n);
	}
	flush(e) {
		if (!this._core) return Promise.resolve();
		if (e) {
			let t = this._core.drainWindow();
			return t && this._sendMetricsBatch(t, e), Promise.resolve();
		}
		return this._core.flush().catch((e) => this._logger.error("PostHog metrics flush failed:", e));
	}
	reset() {
		var e;
		(e = this._core) == null || e.reset();
	}
	dispose() {
		var e, t;
		this._disposed = !0, (e = this._stopNetworkMetrics) == null || e.call(this), this._stopNetworkMetrics = void 0, (t = this._core) == null || t.reset();
	}
	_createHost() {
		let e = this._instance, t = this;
		return {
			get isDisabled() {
				return !1;
			},
			get optedOut() {
				return !e.is_capturing();
			},
			_sendMetricsBatch: (e) => t._sendMetricsBatch(e),
			getLibraryId: () => r.LIB_NAME,
			getLibraryVersion: () => r.LIB_VERSION
		};
	}
	_sendMetricsBatch(e, t) {
		return new Promise((n) => {
			let r = !1, i = (e) => {
				r || (r = !0, clearTimeout(a), n(e));
			}, a = setTimeout(() => i({
				kind: "retry-later",
				error: /* @__PURE__ */ Error("metrics request timed out")
			}), 9e4);
			this._instance._send_request(B(B({
				method: "POST",
				url: this._metricsUrl(),
				data: e,
				compression: "best-available",
				batchKey: "metrics"
			}, t && { transport: t }), {}, {
				fireCallbackOnDrop: !0,
				callback(e) {
					let t = e.statusCode;
					i(t >= 200 && 300 > t ? { kind: "ok" } : t === 413 ? { kind: "too-large" } : t !== 0 && t !== 408 && t !== 429 && 500 > t ? {
						kind: "fatal",
						error: /* @__PURE__ */ Error(`metrics request failed with status ${t}`)
					} : {
						kind: "retry-later",
						error: e.error ?? /* @__PURE__ */ Error(`metrics request failed with status ${t}`)
					});
				}
			}));
		});
	}
	_metricsUrl() {
		return this._instance.requestRouter.endpointFor("api", "/i/v1/metrics") + "?token=" + encodeURIComponent(this._instance.config.token);
	}
} }, Tf = { webMCP: class {
	constructor(e) {
		this._instance = e, this._isPatched = !1;
	}
	initialize() {
		this.startIfEnabled();
	}
	startIfEnabled() {
		if (!this._instance.config.capture_webmcp || this._isPatched) return;
		let e = D?.modelContext;
		if (!e || !M(e.registerTool)) return;
		let t = Zd.get(e);
		if (t) return t.instances.add(this._instance), void (this._isPatched = !0);
		let n = { instances: /* @__PURE__ */ new Set([this._instance]) }, r = e.registerTool, i = this;
		Lu(e, "registerTool", (e) => {
			let t = e;
			return function(e, ...r) {
				let a = e;
				try {
					a = i._wrapTool(e, n);
				} catch {
					return t.call(this, e, ...r);
				}
				return t.call(this, a, ...r);
			};
		}), e.registerTool !== r && (Zd.set(e, n), this._isPatched = !0);
	}
	_wrapTool(e, t) {
		if (!e || !M(e.execute)) return e;
		let n = e.execute, r = this, { tool: i, injected: a } = function(e, t) {
			let n = {
				intent: !1,
				model: !1
			}, r = e.inputSchema;
			if (!function(e) {
				return !!P(e) || N(e) && Object.keys(e).every((e) => Qd.has(e) || e.startsWith("x-")) && !0 !== e.additionalProperties && !N(e.additionalProperties) && (!e.type || e.type === "object") && (!e.properties || N(e.properties)) && (!e.required || j(e.required));
			}(r)) return {
				tool: rf(e),
				injected: n
			};
			let i = r?.properties || {}, a = (e) => nf(i, e) || j(r?.required) && r.required.includes(e);
			if (n.intent = t.intent && !a("context"), n.model = t.model && !a("llm_model"), !n.intent && !n.model) return {
				tool: rf(e),
				injected: n
			};
			let o = B({}, i), s = j(r?.required) ? [...r.required] : [];
			return n.intent && (o.context = {
				type: "string",
				description: "Explain why this tool is called and how it supports the user's goal. Describe the abstract purpose only. Do not include personal or identifying information. Generalize specific entities as roles such as \"a customer\"."
			}, s.includes("context") || s.push("context")), n.model && (o.llm_model = {
				type: "string",
				description: "The exact model identifier you are running as, taken from your system prompt or environment. Pass \"unknown\" if you do not know it. Never guess."
			}, s.includes("llm_model") || s.push("llm_model")), {
				tool: rf(e, B(B({}, r), {}, {
					type: r?.type || "object",
					properties: o,
					required: s
				})),
				injected: n
			};
		}(e, function(e) {
			let t = {
				intent: !1,
				model: !1
			};
			for (let n of e.instances) {
				let e = tf(n.config.capture_webmcp);
				t.intent ||= !0 === e?.intent, t.model ||= !0 === e?.model;
			}
			return t;
		}(t));
		return Object.defineProperty(i, "execute", {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			value(...o) {
				let s = /* @__PURE__ */ new Date(), c = function(e, t) {
					if (!N(e)) return {};
					try {
						let n = t.intent ? af(e.context, 2048, !0) : void 0, r = t.model ? af(e.llm_model, 256) : void 0;
						return B(B({}, n && n !== "{}" ? { intent: n } : {}), r && r.toLowerCase() !== "unknown" ? { model: r } : {});
					} catch {
						return {};
					}
				}(o[0], a), l = function(e, t) {
					let n = e[0];
					if (!N(n)) return e;
					try {
						let r = t.intent && nf(n, "context"), i = t.model && nf(n, "llm_model");
						if (!r && !i) return e;
						let a = B({}, n);
						return r && delete a.context, i && delete a.llm_model, [a, ...e.slice(1)];
					} catch {
						return e;
					}
				}(o, a), u;
				try {
					u = n.apply(this === i ? e : this, l);
				} catch (e) {
					throw r._captureToolCall(t, i, s, {
						error: e,
						errorResult: !1
					}, c), e;
				}
				if ((d = u) && typeof d.then == "function") return Promise.resolve(u).then((e) => {
					let n = of(e) ? {
						error: e,
						errorResult: !0
					} : void 0;
					return r._captureToolCall(t, i, s, n, c), e;
				}, (e) => {
					throw r._captureToolCall(t, i, s, {
						error: e,
						errorResult: !1
					}, c), e;
				});
				var d;
				let f = of(u) ? {
					error: u,
					errorResult: !0
				} : void 0;
				return r._captureToolCall(t, i, s, f, c), u;
			}
		}), i;
	}
	_captureToolCall(e, t, n, r, i) {
		let a = Date.now() - n.getTime(), o;
		for (let s of e.instances) {
			let e = tf(s.config.capture_webmcp);
			if (e) {
				r && !o && (o = df(r.error, r.errorResult));
				try {
					s.capture("$mcp_tool_call", B(B(B({
						$mcp_source: "posthog_mcp_analytics",
						$mcp_interface: "webmcp",
						$mcp_tool_name: t.name,
						$mcp_resource_name: t.name,
						$mcp_tool_description: t.description,
						$mcp_server_name: O?.hostname,
						$mcp_duration_ms: a,
						$mcp_is_error: !!r
					}, o ? {
						$mcp_error_type: o.type,
						$mcp_error_message: o.message
					} : {}), e.intent && i.intent ? {
						$mcp_intent: i.intent,
						$mcp_intent_source: "context_parameter"
					} : {}), e.model && i.model ? {
						$mcp_llm_model: i.model,
						$mcp_llm_model_source: "self_reported"
					} : {}), { timestamp: n });
				} catch {
					continue;
				}
				if (r && o && s.exceptions && s.exceptionObserver?.isEnabled) try {
					let e = {
						$exception_list: lf(s.exceptions, r, o.message),
						$exception_level: "error",
						$exception_source: "mcp.tool_call",
						$mcp_interface: "webmcp",
						$mcp_tool_name: t.name,
						$mcp_resource_name: t.name,
						$mcp_tool_description: t.description,
						$mcp_server_name: O?.hostname
					};
					s.exceptionObserver.captureException(e);
				} catch {}
			}
		}
	}
} };
ju.__defaultExtensionClasses = B({}, B(B(B(B(B(B(B(B(B(B(B(B(B(B({}, ff), pf), mf), hf), gf), _f), yf), vf), bf), xf), Sf), Cf), wf), Tf));
var Ef = function() {
	r.SDK_DIST_CHANNEL = "npm";
	let e = uu[wu] = new ju();
	return function() {
		function e() {
			e.done || (e.done = !0, gl = !1, U(uu, function(e) {
				e._dom_loaded();
			}));
		}
		D?.addEventListener ? D.readyState === "complete" ? e() : G(D, "DOMContentLoaded", e, { capture: !1 }) : E && V.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized");
	}(), e;
}();
// src/modules/analytics/posthog.js
function Df(e, t) {
	Ef.capture(e, t);
}
function Of() {
	try {
		Ef.init("phc_rlYc31x7Pvbc1XzLuePdrHh1JIFq4ClkniLjoqs0V1N", {
			advanced_disable_decide: !0,
			advanced_disable_feature_flags: !0,
			advanced_disable_feature_flags_on_first_load: !0,
			advanced_disable_toolbar_metrics: !0,
			api_host: "https://us.i.posthog.com",
			autocapture: !1,
			capture_pageview: !1,
			disable_compression: !1,
			disable_persistence: !0,
			disable_session_recording: !0,
			disable_surveys: !0,
			person_profiles: "identified_only"
		});
	} catch (e) {
		t(e);
	}
}
function kf() {
	typeof window.self == "string" && (e(), window.self = window), Of();
}
export { kf as n, Df as t };

//# sourceMappingURL=posthog-DOfL555z.js.map