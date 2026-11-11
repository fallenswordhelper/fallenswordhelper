import { t as e } from "./playerName-DbmV53SI.js";
import { t } from "./stdout-BBXc-13D.js";
// node_modules/posthog-js/dist/module.no-external.js
var n = {
	DEBUG: !1,
	LIB_VERSION: "1.447.12",
	LIB_NAME: "web",
	JS_SDK_VERSION: "0.10.8"
}, r = n, i = "$early_access_features", a = "$active_feature_flags", o = "$feature_flag_details", s = "$feature_flag_errors", c = "$feature_flag_evaluated_at", l = "$feature_flag_request_id", u = "$minimal_flag_called_events", d = "$enabled_feature_flags", f = "$stored_group_properties", p = "$stored_person_properties", m = "$flag_call_reported", h = "$flag_call_reported_session_id", g = "$feature_flag_payloads", _ = "$override_feature_flags", v = "$override_feature_flag_payloads", y = "visibilitychange", b = "$autocapture_disabled_server_side", x = "$surveys", S = "$surveys_loaded_at", C = "PostHog loadExternalDependency extension not found.", w = "$surveys_activated", ee = "$surveys_activated_session", T = "$surveys_activated_timestamps", te = "$people_distinct_id", E = "distinct_id", ne = "$device_id", re = "$device_model", ie = "__alias", ae = "__cmpns", oe = "$fbc", D = "$fbc_persistence", se = "$fbp", ce = "$fbp_persistence", le = "__timers", ue = "$heatmaps_enabled_server_side", de = "$exception_capture_enabled_server_side", fe = "$error_tracking_suppression_rules", pe = "$error_tracking_capture_extension_exceptions", me = "$web_vitals_enabled_server_side", he = "$dead_clicks_enabled_server_side", O = "$product_tours_enabled_server_side", ge = "$logs_capture_enabled_server_side", k = "$web_vitals_allowed_metrics", _e = "$session_recording_remote_config", ve = "$session_recording_enabled_server_side", ye = "$replay_sample_rate", be = "$replay_override_sampling", xe = "$replay_override_linked_flag", Se = "$replay_override_url_trigger", Ce = "$replay_override_event_trigger", we = "$sesid", Te = "$session_is_sampled", Ee = "$session_past_minimum_duration", De = "$session_recording_url_trigger_activated_session", Oe = "$session_recording_event_trigger_activated_session", ke = "$debug_first_full_snapshot_timestamp", Ae = "$sess_rec_flush_size", je = "$groups", Me = "ph_product_tours", Ne = "$product_tours_activated", Pe = "$product_tours_activated_session", Fe = "$conversations_widget_session_id", Ie = "$conversations_ticket_id", Le = "$conversations_widget_state", Re = "$conversations_user_traits", ze = "$user_state", Be = "$client_session_props", Ve = "$capture_rate_limit", He = "$initial_campaign_params", Ue = "$initial_referrer_info", We = "$initial_person_info", Ge = "$epp", Ke = "$posthog_cookieless", qe = "$cookieless_mode", Je = "$sdk_debug_extensions_init_method", Ye = "$sdk_debug_extensions_init_time_ms", Xe = "$sdk_debug_recording_script_not_loaded", Ze = "$sdk_debug_replay_stale_config", Qe = "$sdk_debug_replay_event_trigger_status", $e = "$sdk_debug_replay_linked_flag_trigger_status", et = "$sdk_debug_replay_matched_recording_trigger_groups", tt = "$sdk_debug_replay_pending_trigger_conditions", nt = "$sdk_debug_replay_remote_trigger_matching_config", rt = "$sdk_debug_replay_trigger_groups_count", it = "$sdk_debug_replay_url_trigger_status", at = "$session_recording_start_reason", ot = "anonymous", st = "identified", A = "identified_only", ct = "beforeunload", lt = "$pageview", ut = "$pageleave", dt = "$identify", ft = "$groupidentify", j = "u" > typeof window ? window : void 0, pt = "u" > typeof globalThis ? globalThis : j, mt = pt?.navigator, M = pt?.document, ht = pt?.location, gt = pt?.fetch, _t = pt?.XMLHttpRequest && "withCredentials" in new pt.XMLHttpRequest() ? pt.XMLHttpRequest : void 0, vt = pt?.AbortController, yt = pt?.CompressionStream, bt = mt?.userAgent, xt = typeof globalThis < "u" ? globalThis : j;
xt && typeof self > "u" && (xt.self = xt), xt && typeof File > "u" && (xt.File = function() {});
var N = j ?? {}, St = function(e) {
	return e.AnonymousId = "anonymous_id", e.DistinctId = "distinct_id", e.Props = "props", e.EnablePersonProcessing = "enable_person_processing", e.PersonMode = "person_mode", e.FeatureFlagDetails = "feature_flag_details", e.FeatureFlags = "feature_flags", e.FeatureFlagPayloads = "feature_flag_payloads", e.BootstrapFeatureFlagDetails = "bootstrap_feature_flag_details", e.BootstrapFeatureFlags = "bootstrap_feature_flags", e.BootstrapFeatureFlagPayloads = "bootstrap_feature_flag_payloads", e.OverrideFeatureFlags = "override_feature_flags", e.Queue = "queue", e.AiQueue = "ai_queue", e.AiCaptureQueue = "ai_capture_queue", e.LogsQueue = "logs_queue", e.OptedOut = "opted_out", e.SessionId = "session_id", e.SessionStartTimestamp = "session_start_timestamp", e.SessionLastTimestamp = "session_timestamp", e.PersonProperties = "person_properties", e.GroupProperties = "group_properties", e.InstalledAppBuild = "installed_app_build", e.InstalledAppVersion = "installed_app_version", e.SessionReplay = "session_replay", e.PushRegistered = "push_registered", e.SessionReplayEventTriggerActivatedSession = "session_replay_event_trigger_activated_session", e.SurveyLastSeenDate = "survey_last_seen_date", e.SurveysInProgress = "surveys_in_progress", e.SurveysSeen = "surveys_seen", e.Surveys = "surveys", e.RemoteConfig = "remote_config", e.FlagsEndpointWasHit = "flags_endpoint_was_hit", e.DeviceId = "device_id", e;
}({}), Ct = function(e) {
	return e.GZipJS = "gzip-js", e.Base64 = "base64", e;
}({}), wt = [
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
], Tt = ["token"];
function P(e, t) {
	return e.indexOf(t) !== -1;
}
var Et = function(e) {
	return e.trim();
}, Dt = function(e) {
	return e.replace(/^\$/, "");
};
function Ot(e) {
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
var kt = Object.prototype, At = kt.hasOwnProperty, jt = kt.toString, F = Array.isArray || function(e) {
	return jt.call(e) === "[object Array]";
}, Mt = (e) => typeof e == "function", I = (e) => e === Object(e) && !F(e), Nt = (e) => {
	if (I(e)) {
		for (let t in e) if (At.call(e, t)) return !1;
		return !0;
	}
	return !1;
}, L = (e) => e === void 0, R = (e) => jt.call(e) == "[object String]", Pt = (e) => R(e) && e.trim().length === 0, z = (e) => e === null, B = (e) => L(e) || z(e), Ft = (e) => jt.call(e) == "[object Number]" && e == e, It = (e) => Ft(e) && e > 0, Lt = (e) => jt.call(e) === "[object Boolean]", Rt = (e) => P(wt, e), zt = (e) => P(Tt, e);
function Bt(e) {
	return typeof e != "object" || !e;
}
function Vt(e, t) {
	return {}.toString.call(e) === `[object ${t}]`;
}
function Ht(e) {
	switch ({}.toString.call(e)) {
		case "[object Error]":
		case "[object Exception]":
		case "[object DOMException]":
		case "[object DOMError]":
		case "[object WebAssembly.Exception]": return !0;
		default: return Wt(e, Error);
	}
}
function Ut(e) {
	return "u" > typeof Event && Wt(e, Event);
}
function Wt(e, t) {
	try {
		return e instanceof t;
	} catch {
		return !1;
	}
}
var Gt = [
	!0,
	"true",
	1,
	"1",
	"yes"
], Kt = (e) => P(Gt, e), qt = [
	!1,
	"false",
	0,
	"0",
	"no"
];
function Jt(e, t, n, r, i, a, o) {
	try {
		var s = e[a](o), c = s.value;
	} catch (e) {
		n(e);
		return;
	}
	s.done ? t(c) : Promise.resolve(c).then(r, i);
}
function V(e) {
	return function() {
		var t = this, n = arguments;
		return new Promise(function(r, i) {
			var a = e.apply(t, n);
			function o(e) {
				Jt(a, r, i, o, s, "next", e);
			}
			function s(e) {
				Jt(a, r, i, o, s, "throw", e);
			}
			o(void 0);
		});
	};
}
var Yt = /* @__PURE__ */ "amazonbot,amazonproductbot,app.hypefactors.com,applebot,archive.org_bot,awariobot,backlinksextendedbot,baiduspider,bingbot,bingpreview,chrome-lighthouse,dataforseobot,deepscan,duckduckbot,facebookexternal,facebookcatalog,http://yandex.com/bots,hubspot,ia_archiver,leikibot,linkedinbot,meta-externalagent,mj12bot,msnbot,nessus,petalbot,pinterestbot,prerender,rogerbot,screaming frog,sebot-wa,sitebulb,slackbot,slurp,trendictionbot,turnitin,twitterbot,vercel-screenshot,vercelbot,yahoo! slurp,yandexbot,zoombot,bot.htm,bot.php,(bot;,bot/,crawler,ahrefsbot,ahrefssiteaudit,semrushbot,siteauditbot,splitsignalbot,gptbot,oai-searchbot,chatgpt-user,perplexitybot,better uptime bot,sentryuptimebot,uptimerobot,headlesschrome,lightpanda,cypress,google-hoteladsverifier,adsbot-google,apis-google,duplexweb-google,feedfetcher-google,google favicon,google web preview,google-read-aloud,googlebot,googleother,google-cloudvertexbot,googleweblight,mediapartners-google,storebot-google,google-inspectiontool,bytespider".split(","), Xt = /* @__PURE__ */ new Map(), Zt = function(e, t = []) {
	if (!e) return !1;
	let n = function(e, t) {
		let n = "";
		for (let e = 0; t.length > e; e++) {
			let r = t[e];
			n += r.length + ":" + r;
		}
		return e.length + ":" + e + "|" + t.length + ":" + n;
	}(e, t), r = Xt.get(n);
	if (r !== void 0) return r;
	let i = e.toLowerCase(), a = Yt.concat(t).some((e) => i.indexOf(e.toLowerCase()) !== -1);
	return 256 > Xt.size || Xt.clear(), Xt.set(n, a), a;
};
function Qt(e, t, n, r, i) {
	return t > n && (r.warn("min cannot be greater than max."), t = n), Ft(e) ? e > n ? (r.warn(" cannot be  greater than max: " + n + ". Using max value instead."), n) : t > e ? (r.warn(" cannot be less than min: " + t + ". Using min value instead."), t) : e : (r.warn(" must be a number. using max or fallback. max: " + n + ", fallback: " + i), Qt(i ?? n, t, n, r));
}
var $t = class {
	constructor(e) {
		this._buckets = {}, this._onBucketRateLimited = e._onBucketRateLimited, this._bucketSize = Qt(e.bucketSize, 0, 100, e._logger), this._refillRate = Qt(e.refillRate, 0, this._bucketSize, e._logger), this._refillInterval = Qt(e.refillInterval, 0, 864e5, e._logger);
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
}, en = "Mobile", tn = "Android", nn = "Tablet", rn = "Android Tablet", an = "iPad", on = "Apple Watch", sn = "Safari", cn = "BlackBerry", ln = "Samsung Internet", un = "Chrome", dn = "Chrome iOS", fn = "Internet Explorer", pn = "Internet Explorer Mobile", mn = "Opera", hn = "Microsoft Edge", gn = "Firefox", _n = "Firefox iOS", vn = "Nintendo", yn = "PlayStation", bn = "Xbox", xn = "Android Mobile", Sn = "Mobile Safari", Cn = "Windows", wn = "Windows Phone", Tn = "Nokia", En = "Ouya", Dn = "Generic tablet", On = "Konqueror", kn = "Oculus Browser", An = "Vivaldi", jn = "Yandex", Mn = "Whale", Nn = "DuckDuckGo", Pn = "Pale Moon", Fn = "Waterfox", In = "Brave", Ln = "Claude", Rn = "Codex", zn = "ChatGPT", Bn = "Google Search App", Vn = /* @__PURE__ */ RegExp("Version/(\\d+(\\.\\d+)?)"), Hn = /* @__PURE__ */ RegExp("(Claude|Codex|ChatGPT)\\/(\\d+(\\.\\d+)?)"), Un = new RegExp(bn, "i"), Wn = /* @__PURE__ */ RegExp("PlayStation \\w+", "i"), Gn = /* @__PURE__ */ RegExp("Nintendo \\w+", "i"), Kn = /* @__PURE__ */ RegExp("BlackBerry|PlayBook|BB10", "i"), qn = {
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
}, Jn = function(e, t, n, r) {
	return t ||= "", function(e) {
		return e?.brave ? In : null;
	}(n) || (r?.detectGoogleSearchApp && P(e, "GSA/") ? Bn : P(e, " OPR/") && P(e, "Mini") ? "Opera Mini" : P(e, " OPR/") ? mn : Kn.test(e) ? cn : P(e, "IEMobile") || P(e, "WPDesktop") ? pn : P(e, "OculusBrowser") ? kn : P(e, "SamsungBrowser") ? ln : P(e, "Edge") || P(e, "Edg/") ? hn : P(e, "Vivaldi/") ? An : P(e, "YaBrowser/") ? jn : P(e, "Whale/") ? Mn : P(e, "DuckDuckGo/") || P(e, "Ddg/") ? Nn : P(e, "Claude/") ? Ln : P(e, "Codex/") ? Rn : P(e, "ChatGPT/") ? zn : P(e, "FBIOS") ? "Facebook Mobile" : P(e, "UCWEB") || P(e, "UCBrowser") ? "UC Browser" : P(e, "CriOS") ? dn : P(e, "CrMo") || P(e, un) ? un : P(e, tn) && P(e, sn) ? xn : P(e, "FxiOS") ? _n : P(e.toLowerCase(), On.toLowerCase()) ? On : P(e, "Brave/") ? In : ((e, t) => t && P(t, "Apple") || function(e) {
		return P(e, sn) && !P(e, un) && !P(e, tn);
	}(e))(e, t) ? P(e, en) ? Sn : sn : P(e, "PaleMoon/") ? Pn : P(e, "Waterfox/") ? Fn : P(e, gn) ? gn : P(e, "MSIE") || P(e, "Trident/") ? fn : P(e, "Gecko") ? gn : "");
}, Yn = {
	[pn]: [/* @__PURE__ */ RegExp("rv:(\\d+(\\.\\d+)?)")],
	[hn]: [/* @__PURE__ */ RegExp("Edge?\\/(\\d+(\\.\\d+)?)")],
	[un]: [/* @__PURE__ */ RegExp("(Chrome|CrMo)\\/(\\d+(\\.\\d+)?)")],
	[dn]: [/* @__PURE__ */ RegExp("CriOS\\/(\\d+(\\.\\d+)?)")],
	"UC Browser": [/* @__PURE__ */ RegExp("(UCBrowser|UCWEB)\\/(\\d+(\\.\\d+)?)")],
	[sn]: [Vn],
	[Sn]: [Vn],
	[mn]: [/* @__PURE__ */ RegExp("(Opera|OPR)\\/(\\d+(\\.\\d+)?)")],
	[gn]: [/* @__PURE__ */ RegExp("Firefox\\/(\\d+(\\.\\d+)?)")],
	[_n]: [/* @__PURE__ */ RegExp("FxiOS\\/(\\d+(\\.\\d+)?)")],
	[On]: [/* @__PURE__ */ RegExp("Konqueror[:/]?(\\d+(\\.\\d+)?)", "i")],
	[cn]: [/* @__PURE__ */ RegExp("BlackBerry (\\d+(\\.\\d+)?)"), Vn],
	[xn]: [/* @__PURE__ */ RegExp("android\\s(\\d+(\\.\\d+)?)", "i")],
	[ln]: [/* @__PURE__ */ RegExp("SamsungBrowser\\/(\\d+(\\.\\d+)?)")],
	[kn]: [/* @__PURE__ */ RegExp("OculusBrowser\\/(\\d+(\\.\\d+)?)")],
	[An]: [/* @__PURE__ */ RegExp("Vivaldi\\/(\\d+(\\.\\d+)?)")],
	[jn]: [/* @__PURE__ */ RegExp("YaBrowser\\/(\\d+(\\.\\d+)?)")],
	[Mn]: [/* @__PURE__ */ RegExp("Whale\\/(\\d+(\\.\\d+)?)")],
	[In]: [/* @__PURE__ */ RegExp("Brave\\/(\\d+(\\.\\d+)?)")],
	[Ln]: [Hn],
	[Rn]: [Hn],
	[zn]: [Hn],
	[Nn]: [/* @__PURE__ */ RegExp("(DuckDuckGo|Ddg)\\/(\\d+(\\.\\d+)?)")],
	[Pn]: [/* @__PURE__ */ RegExp("PaleMoon\\/(\\d+(\\.\\d+)?)")],
	[Fn]: [/* @__PURE__ */ RegExp("Waterfox\\/(\\d+(\\.\\d+)?)")],
	[Bn]: [/* @__PURE__ */ RegExp("GSA\\/(\\d+(\\.\\d+)?)")],
	[fn]: [/* @__PURE__ */ RegExp("(rv:|MSIE )(\\d+(\\.\\d+)?)")],
	Mozilla: [/* @__PURE__ */ RegExp("rv:(\\d+(\\.\\d+)?)")]
}, Xn = function(e, t, n, r) {
	let i = Yn[Jn(e, t, n, r)];
	if (L(i)) return null;
	for (let t = 0; i.length > t; t++) {
		let n = e.match(i[t]);
		if (n) return parseFloat(n[n.length - 2]);
	}
	return null;
}, Zn = [
	[/* @__PURE__ */ RegExp("Xbox; Xbox (.*?)[);]", "i"), (e) => [bn, e && e[1] || ""]],
	[new RegExp(vn, "i"), [vn, ""]],
	[new RegExp(yn, "i"), [yn, ""]],
	[Kn, [cn, ""]],
	[new RegExp(Cn, "i"), (e, t) => {
		if (/Phone/.test(t) || /WPDesktop/.test(t)) return [wn, ""];
		if (new RegExp(en).test(t) && !/IEMobile\b/.test(t)) return ["Windows Mobile", ""];
		let n = /Windows NT ([0-9.]+)/i.exec(t);
		if (n && n[1]) {
			let e = qn[n[1]] || "";
			return /arm/i.test(t) && (e = "RT"), [Cn, e];
		}
		return [Cn, ""];
	}],
	[/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, (e) => e && e[3] ? ["iOS", [
		e[3],
		e[4],
		e[5] || "0"
	].join(".")] : ["iOS", ""]],
	[/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, (e) => {
		let t = "";
		return e && e.length >= 3 && (t = L(e[2]) ? e[3] : e[2]), ["watchOS", t];
	}],
	[/* @__PURE__ */ RegExp("(Android (\\d+)\\.(\\d+)\\.?(\\d+)?|Android)", "i"), (e) => e && e[2] ? [tn, [
		e[2],
		e[3],
		e[4] || "0"
	].join(".")] : [tn, ""]],
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
], Qn = function(e) {
	for (let t = 0; Zn.length > t; t++) {
		let [n, r] = Zn[t], i = n.exec(e), a = i && (Mt(r) ? r(i, e) : r);
		if (a) return a;
	}
	return ["", ""];
}, $n = function(e) {
	return Gn.test(e) ? vn : Wn.test(e) ? yn : Un.test(e) ? bn : new RegExp(En, "i").test(e) ? En : (/* @__PURE__ */ RegExp("(Windows Phone|WPDesktop)", "i")).test(e) ? wn : /iPad/.test(e) ? an : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e) ? on : Kn.test(e) ? cn : /(kobo)\s(ereader|touch)/i.test(e) ? "Kobo" : new RegExp(Tn, "i").test(e) ? Tn : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e) || /(kf[a-z]+)( bui|\)).+silk\//i.test(e) ? "Kindle Fire" : /(Android|ZTE)/i.test(e) ? new RegExp(en).test(e) && !/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e) || /pixel[\daxl ]{1,6}/i.test(e) && !/pixel c/i.test(e) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e) || /lmy47v/i.test(e) && !/QTAQZ3/i.test(e) ? tn : rn : (/* @__PURE__ */ RegExp("(pda|Mobile)", "i")).test(e) ? "Generic mobile" : new RegExp(nn, "i").test(e) && !(/* @__PURE__ */ RegExp("Tablet pc", "i")).test(e) ? Dn : "";
}, er = function(e, t) {
	let n = $n(e);
	return n === an || n === rn || n === "Kobo" || n === "Kindle Fire" || n === Dn ? nn : n === vn || n === bn || n === yn || n === En ? "Console" : n === on ? "Wearable" : n ? en : t?.userAgentDataPlatform === "Android" && (t?.maxTouchPoints ?? 0) > 0 ? 600 > Math.min((r = t?.screenWidth) ?? 0, (i = t?.screenHeight) ?? 0) / ((a = t?.devicePixelRatio) ?? 1) ? en : nn : "Desktop";
	var r, i, a;
}, tr = /\bFBAV\/(\d+(?:\.\d+)*)/i, nr = [
	[/\bInstagram(?:[ /](\d+(?:\.\d+)*))?\b/i, "Instagram"],
	[/\bBarcelona[ /](\d+(?:\.\d+)*)?/i, "Threads"],
	[
		/\b(?:MessengerForiOS|(?:FBAN|FB_IAB)\/Orca-Android)\b/i,
		"Messenger",
		tr
	],
	[
		/\bFBAN\/EMA\b/i,
		"Facebook Lite",
		tr
	],
	[
		/\b(?:FBIOS|(?:FBAN|FB_IAB)\/(?:FB4A|FBIOS))\b/i,
		"Facebook",
		tr
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
], rr = "[Truncated]", ir = "[Unserializable]";
function ar(e) {
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
function or(e, t) {
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
			n = ir;
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
var sr = 3e5, cr = class {
	record(e) {
		if (e.kind === "too-large") return;
		if (e.kind !== "retry-later") return void this.reset();
		if (!e.retryAfterMs) return;
		let t = this.isOpen(), n = Date.now(), r = Math.min(e.retryAfterMs, sr);
		if (!t) return this._installedAt = n, void (this._until = n + r);
		this._until = Math.max(this._until, Math.min(n + r, this._installedAt + sr));
	}
	remainingMs() {
		let e = Date.now();
		if (this._installedAt - 5e3 > e) return this.reset(), 0;
		let t = Math.min(sr, Math.max(0, this._until - e));
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
}, lr = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function ur(e, t) {
	return typeof (n = e) == "string" && lr.test(n) ? e : t();
	var n;
}
function dr(e, t) {
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
function fr(e) {
	return e && e.split("#")[0];
}
function pr(e) {
	try {
		return e();
	} catch {
		return;
	}
}
function mr(e, t) {
	let n = setTimeout(e, t);
	return n != null && n.unref && n?.unref(), n;
}
function hr(e, t, n) {
	return gr.apply(this, arguments);
}
function gr() {
	return (gr = V(function* (e, t, n) {
		let r;
		try {
			return yield Promise.race([e, new Promise((e, i) => {
				r = mr(() => {
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
function _r(e) {
	return _r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, _r(e);
}
function vr(e, t, n) {
	return (t = function(e) {
		var t = function(e) {
			if (_r(e) != "object" || !e) return e;
			var t = e[Symbol.toPrimitive];
			if (t !== void 0) {
				var n = t.call(e, "string");
				if (_r(n) != "object") return n;
				throw TypeError("@@toPrimitive must return a primitive value.");
			}
			return String(e);
		}(e);
		return _r(t) == "symbol" ? t : t + "";
	}(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function yr(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function H(e) {
	for (var t = 1; arguments.length > t; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? yr(Object(n), !0).forEach(function(t) {
			vr(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yr(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var br, xr, Sr, Cr;
function wr(e) {
	let t = globalThis._posthogChunkIds, n = globalThis._debugIds;
	if (!t && !n) return;
	let r = t ? Object.keys(t) : [], i = n ? Object.keys(n) : [];
	if (Cr && Tr(t, r, xr) && Tr(n, i, Sr)) return Cr;
	xr = t ? H({}, t) : void 0, Sr = n ? H({}, n) : void 0, Cr = {}, br ??= {};
	let a = (t, n) => {
		for (let r of t) {
			let t = n[r];
			if (!t) continue;
			let i = br?.[r];
			if (i) {
				Cr[i] = t;
				continue;
			}
			let a = e(r);
			for (let e = a.length - 1; e >= 0; e--) {
				let n = a[e]?.filename;
				if (n) {
					Cr[n] = t, br[r] = n;
					break;
				}
			}
		}
	};
	return n && a(i, n), t && a(r, t), Cr;
}
function Tr(e, t, n) {
	return e && n ? t.length === Object.keys(n).length && t.every((t) => e[t] === n[t]) : e === n;
}
var Er = class {
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
		return V(function* () {
			for (let n of e) n.stacktrace && n.stacktrace.frames && F(n.stacktrace.frames) && (n.stacktrace.frames = yield t.applyModifiers(n.stacktrace.frames));
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
		return H(H({}, e), {}, {
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
		return V(function* () {
			let n = e;
			for (let e of t.modifiers) n = yield e(n);
			return n;
		})();
	}
	convertToExceptionList(e, t) {
		let n = [], r = (e, i, a) => {
			let o = n.length, s = i === void 0 ? H(H({ type: typeof t.type == "string" && t.type.length > 0 ? t.type : "generic" }, typeof t.handled == "boolean" ? { handled: t.handled } : t.handled === void 0 ? { handled: !0 } : {}), {}, {
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
			chunkIdMap: wr(this.stackParser),
			skipFirstLines: e.skipFirstLines ?? 1
		};
	}
	getAggregateErrors(e) {
		try {
			if (Ht(e)) {
				let t = Object.getPrototypeOf(e);
				for (let n = 0; t && 100 > n; n++) {
					let n = Object.getOwnPropertyDescriptor(t, "constructor")?.value;
					if (typeof n == "function" && n.name === "AggregateError") {
						let t = e.errors;
						return F(t) ? t : void 0;
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
			return H(H({}, m), {}, { errors: g });
		}, u = (n, r = 0) => H(H({}, t), {}, {
			syntheticException: n == 0 ? t.syntheticException : void 0,
			mechanism: n == 0 ? e : {},
			apply(e) {
				let t = l(e, n, r + 1);
				if (!t) throw c;
				return t;
			},
			next: (e) => l(e, n + 1)
		}), d = u(n);
		return H(H({}, d), {}, { apply: (e) => l(e, n) ?? this.coerceFallback(d) });
	}
}, Dr = /^([a-z][a-z0-9.+-]+):/i, Or = [
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
function kr(e) {
	if (!e || e === "<anonymous>") return !1;
	let t = Dr.exec(e);
	return !t || Or.includes(t[1].toLowerCase());
}
function Ar(e, t, n, r, i) {
	let a = {
		platform: e,
		filename: t,
		function: n === "<anonymous>" ? "?" : n,
		in_app: kr(t)
	};
	return L(r) || (a.lineno = r), L(i) || (a.colno = i), a;
}
var jr = (e, t) => {
	let n = e.indexOf("safari-extension") !== -1, r = e.indexOf("safari-web-extension") !== -1;
	return n || r ? [e.indexOf("@") === -1 ? "?" : e.split("@")[0], n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t];
}, Mr = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i, Nr = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, Pr = /\((\S*)(?::(\d+))(?::(\d+))\)/, Fr = (e, t) => {
	let n = Mr.exec(e);
	if (n) {
		let [, e, r, i] = n;
		return Ar(t, e, "?", +r, +i);
	}
	let r = Nr.exec(e);
	if (r) {
		if (r[2] && r[2].indexOf("eval") === 0) {
			let e = Pr.exec(r[2]);
			e && (r[2] = e[1], r[3] = e[2], r[4] = e[3]);
		}
		let [e, n] = jr(r[1] || "?", r[2]);
		return Ar(t, n, e, r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0);
	}
}, Ir = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, Lr = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, Rr = (e, t) => {
	let n = Ir.exec(e);
	if (n) {
		if (n[3] && n[3].indexOf(" > eval") > -1) {
			let e = Lr.exec(n[3]);
			e && (n[1] = n[1] || "eval", n[3] = e[1], n[4] = e[2], n[5] = "");
		}
		let e = n[3], r = n[1] || "?";
		return [r, e] = jr(r, e), Ar(t, e, r, n[4] ? +n[4] : void 0, n[5] ? +n[5] : void 0);
	}
}, zr = /\(error: (.*)\)/;
function Br(e, t) {
	return e.filename === t.filename && e.function === t.function && e.module === t.module && e.lineno === t.lineno && e.colno === t.colno;
}
function Vr(e) {
	for (let t = 1; 10 >= t; t++) {
		let n = e.length - 2 * t;
		if (0 > n) break;
		let r = !0;
		for (let i = 0; t > i; i++) if (!Br(e[n + i], e[n + t + i])) {
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
function Hr(e, t) {
	let n = t.start + t.length, r = Wr(e, t);
	r && e.splice(n + r === e.length ? n : t.start, r);
}
function Ur(e, t) {
	let n = t.start;
	for (; n > 0 && Br(e[n - 1], e[n - 1 + t.length]);) n--;
	return t.start - n;
}
function Wr(e, t) {
	let n = t.start + t.length, r = n;
	for (; e.length > r && Br(e[r], e[r - t.length]);) r++;
	return r - n;
}
function Gr(e, t) {
	let n = t[0], r = e.length - (n ? Ur(e, n) : 0);
	for (let n of t) r -= Wr(e, n);
	return r;
}
function Kr(e, t, n) {
	for (let r = 0; e.length > r; r++) {
		let i = e[(t + r) % e.length], a = e[(n + r) % e.length];
		if (i !== a) return a > i;
	}
	return !1;
}
var qr = class {
	match(e) {
		return this.isDOMException(e) || this.isDOMError(e);
	}
	coerce(e, t) {
		let n = R(e.stack);
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
		return Vt(e, "DOMException");
	}
	isDOMError(e) {
		return Vt(e, "DOMError");
	}
}, Jr = class {
	match(e) {
		return Ht(e);
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
}, Yr = class {
	match(e) {
		return !!Vt(e, "ErrorEvent") && (e.error != null || this._hasUsableMessage(e));
	}
	coerce(e, t) {
		if (e.error != null) return t.apply(e.error);
		let n = t.apply(e.message);
		return H(H({}, n), {}, {
			stack: this._buildLocationStack(e) ?? n.stack,
			synthetic: !0
		});
	}
	_hasUsableMessage(e) {
		return R(e.message) && e.message.length > 0;
	}
	_buildLocationStack(e) {
		let t = e, n = t.lineno ?? 0, r = t.colno ?? 0;
		if (R(t.filename) && t.filename.length !== 0 && n !== 0) return `Error\n    at ${t.filename}:${n}:${r}`;
	}
}, Xr = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i, Zr = class {
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
		let t = "Error", n = e, r = e.match(Xr);
		return r && (t = r[1], n = r[2]), [t, n];
	}
}, Qr = [
	"fatal",
	"error",
	"warning",
	"log",
	"info",
	"debug"
];
function $r(e, t = 40) {
	let n = Object.keys(e);
	if (n.sort(), !n.length) return "[object has no keys]";
	for (let e = n.length; e > 0; e--) {
		let r = n.slice(0, e).join(", ");
		if (t >= r.length) return e === n.length ? r : r.length > t ? `${r.slice(0, t)}...` : r;
	}
	return "";
}
var ei = class {
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
		if (Ut(e)) return e.constructor.name;
		let t = "name" in e ? e.name : void 0;
		return R(t) && !Pt(t) ? t : "Error";
	}
	getValue(e) {
		if ("name" in e && typeof e.name == "string") {
			let t = `'${e.name}' captured as exception`;
			return "message" in e && typeof e.message == "string" && (t += ` with message: '${e.message}'`), t;
		}
		if ("message" in e && typeof e.message == "string") return e.message;
		let t = this.getObjectClassName(e);
		return `${t && t !== "Object" ? `'${t}'` : "Object"} captured as exception with keys: ${$r(e)}`;
	}
	isSeverityLevel(e) {
		return R(e) && !Pt(e) && Qr.indexOf(e) >= 0;
	}
	getStack(e) {
		try {
			return R(e.stacktrace) && e.stacktrace.length > 0 ? e.stacktrace : R(e.stack) && e.stack.length > 0 ? e.stack : void 0;
		} catch {
			return;
		}
	}
	getErrorPropertyFromObject(e) {
		for (let t in e) if ({}.hasOwnProperty.call(e, t)) {
			let n = e[t];
			if (Ht(n)) return n;
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
}, ti = class {
	match(e) {
		return Ut(e);
	}
	coerce(e, t) {
		let n = e.constructor.name;
		return {
			type: n,
			value: `${n} captured as exception with keys: ${$r(e)}`,
			stack: t.syntheticException?.stack,
			synthetic: !0
		};
	}
}, ni = class {
	match(e) {
		return Bt(e);
	}
	coerce(e, t) {
		return {
			type: "Error",
			value: `Primitive value captured as exception: ${String(e)}`,
			stack: t.syntheticException?.stack,
			synthetic: !0
		};
	}
}, ri = class {
	match(e) {
		return Vt(e, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(e);
	}
	isCustomEventWrappingRejection(e) {
		if (!Ut(e)) return !1;
		try {
			let t = e.detail;
			return typeof t == "object" && !!t && "reason" in t;
		} catch {
			return !1;
		}
	}
	coerce(e, t) {
		let n = this.getUnhandledRejectionReason(e);
		return Bt(n) ? {
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
}, ii = "$message", ai = "$timestamp", oi = /* @__PURE__ */ new Set([ii, ai]), si = {
	enabled: !0,
	max_bytes: 32768
};
function ci(e) {
	return e ? {
		enabled: e.enabled ?? si.enabled,
		max_bytes: ui(e.max_bytes, si.max_bytes)
	} : H({}, si);
}
var li = class {
	constructor(e) {
		this._entries = [], this._totalBytes = 0, this._config = ci(e);
	}
	setConfig(e) {
		this._config = ci(e), this._trimToMaxBytes();
	}
	add(e) {
		let t = function(e) {
			let t;
			try {
				t = Ot(e);
			} catch {
				return;
			}
			try {
				let e = JSON.parse(t);
				if (!I(e)) return;
				let n = e, r = n[ii], i = n[ai];
				return !R(r) || r.trim().length === 0 || !R(i) && !Ft(i) ? void 0 : {
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
function ui(e, t) {
	if (!Ft(e) || 1 / 0 === e || -1 / 0 === e) return t;
	let n = Math.floor(e);
	return 0 > n ? t : n;
}
var di = (e) => {
	if (typeof e != "string") return e;
	try {
		return JSON.parse(e);
	} catch {
		return e;
	}
};
function fi(e) {
	return typeof e == "string" || e;
}
function pi(e) {
	return typeof e == "string" ? e : void 0;
}
var mi = /* @__PURE__ */ "$feature_flag.$feature_flag_response.$feature_flag_has_experiment.$feature_flag_id.$feature_flag_version.$feature_flag_reason.$feature_flag_request_id.$feature_flag_evaluated_at.$feature_flag_error.locally_evaluated.$groups.$process_person_profile.$geoip_disable.$current_url.$pathname.$referring_domain.utm_source.utm_medium.utm_campaign.utm_content.utm_term.gad_source.mc_cid.gclid.gclsrc.dclid.gbraid.wbraid.fbclid.msclkid.twclid.li_fat_id.igshid.ttclid.rdt_cid.epik.qclid.sccid.oppref.bfcid.irclid._kx.$session_id.$window_id.$lib.$lib_version.$device_id.$is_server".split("."), hi = "NativeGzipValidationError", gi = (e) => e.length >= 2 && e[0] === 31 && e[1] === 139, _i = (e, t) => e === Ct.GZipJS || t === Ct.GZipJS || t === "gzip", vi = (e) => !(!e || typeof e != "object") && ("name" in e ? String(e.name) : "") === "NotReadableError", yi, bi = (e) => {
	throw dr(hi, `Native gzip produced invalid output: ${e}`);
}, xi = function() {
	var e = V(function* (e, t) {
		18 > e.size && bi("too-short");
		let n = new Uint8Array(yield e.slice(0, 10).arrayBuffer());
		gi(n) && n[2] === 8 || bi("invalid-header");
		let r = new DataView(yield e.slice(e.size - 8).arrayBuffer());
		r.getUint32(0, !0) !== ((e) => {
			let t = (() => {
				if (yi) return yi;
				yi = [];
				for (let e = 0; 256 > e; e++) {
					let t = e;
					for (let e = 0; 8 > e; e++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
					yi[e] = t >>> 0;
				}
				return yi;
			})(), n = 4294967295;
			for (let r = 0; e.length > r; r++) n = t[255 & (n ^ e[r])] ^ n >>> 8;
			return (4294967295 ^ n) >>> 0;
		})(t) && bi("invalid-crc");
		let i = t.length >>> 0;
		r.getUint32(4, !0) !== i && bi("invalid-size");
	});
	return function(t, n) {
		return e.apply(this, arguments);
	};
}();
function Si() {
	return Si = V(function* (e, t = !0, n) {
		try {
			let t = new TextEncoder().encode(e), n = new globalThis.CompressionStream("gzip"), i = n.writable.getWriter(), a = i.write(t).then(() => i.close()).catch((r = V(function* (e) {
				try {
					yield i.abort(e);
				} catch {}
				throw e;
			}), function(e) {
				return r.apply(this, arguments);
			})), o = new Response(n.readable).blob(), [s] = yield Promise.all([o, a]);
			return yield xi(s, t), s;
		} catch (e) {
			if (n?.rethrow) throw e;
			return t && console.error("Failed to gzip compress data", e), null;
		}
		var r;
	}), Si.apply(this, arguments);
}
function Ci(e, t) {
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
var wi = "[redacted]", Ti = /^[A-Za-z0-9+/\n\r]+=*$/, Ei = /^[A-Za-z0-9_-]+={0,2}$/, Di = /[-_]/, Oi = /^data:[^,\s]*;base64,/i, ki = /^[A-Za-z0-9+/_-]+={0,2}$/, Ai = /\bph[a-z]_[A-Za-z0-9_-]{20,}\b/g, ji = /^(authorization|cookie|set-cookie|x-api-key|api[-_]?key|api[-_]?token|access[-_]?token|refresh[-_]?token|token|password|secret|client[-_]?secret|private[-_]?key)$/i, Mi = /[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi, Ni = /[\s<>"]/, Pi = new RegExp(Mi.source, "i"), Fi = /[a-z][a-z0-9+.-]{0,63}:\/\//i, Ii = RegExp(`^${Fi.source}`, "i"), Li = new RegExp(Fi.source, "gi"), Ri = /(^|[-_./;])(auth|token|secret|password|passwd|pwd|credential|signature|sig|key|hmac|sas|bearer|jwt|session|sessionid)([-_./;]|$)/i, zi = /^(code|AWSAccessKeyId|GoogleAccessId|Policy)$/i, Bi = /[\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/g, Vi = /[A-Za-z0-9._%+-]{1,64}@[A-Za-z0-9.-]{1,255}\.[A-Za-z]{2,24}/g, Hi = /\b(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\b/g, Ui = /(^|[^\w:])((?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}|(?:[0-9A-Fa-f]{1,4}:){1,7}:|(?:[0-9A-Fa-f]{1,4}:){1,6}:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,5}|::(?:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,6})))(?=$|[^\w:])/g, Wi = /\b\d{3}[ .-]\d{2}[ .-]\d{4}\b/g, Gi = /\d+/g, Ki = /(^|[^\w+])((?:\+?1[ ./-]?)?(?:\(\d{3}\)[ ./-]?|\d{3}[ ./-])\d{3}[ ./-]\d{4})(?![\w])/g, qi = /(^|[^\w])(\+\d{1,3}(?:[ ./()-]{0,2}\d){7,13})(?![\w])/g;
function Ji(e) {
	return function(e) {
		return ji.test(e);
	}(e) || Ri.test(e) || zi.test(e);
}
function Yi(e) {
	return e.split("&", 129).length > 128;
}
function Xi(e, t, n) {
	return Ji(e) || t.includes(";") && function(e) {
		return e.split(";").some((e) => Ji(e.split("=", 1)[0]));
	}(t) ? wi : Pi.test(t) ? n ? na(t, {
		allowNestedUrls: !1,
		stripPunctuation: !0
	}) : wi : t;
}
function Zi(e, t) {
	let n = new URLSearchParams(), r = !1, i = !1;
	for (let [a, o] of new URLSearchParams(e)) {
		let e = ra(a), s = ra(o);
		r ||= e !== a || s !== o;
		let c = Xi(e, s, t);
		r ||= c !== s, i = Ji(e) || c !== s, n.append(e, c);
	}
	return {
		changed: r,
		lastFieldSensitive: i,
		serialized: n.toString()
	};
}
function Qi(e, t) {
	if (!e.includes("=")) return {
		value: $i(e, t),
		lastFieldSensitive: !1
	};
	let n = Zi(e, t);
	return {
		value: n.changed ? n.serialized : e,
		lastFieldSensitive: n.lastFieldSensitive
	};
}
function $i(e, t) {
	return t ? na(e, {
		allowNestedUrls: !1,
		stripPunctuation: !0
	}) : Pi.test(e) ? wi : e;
}
function ea(e, t, n) {
	return e === "#" ? !t.fragment && (t.fragment = !0) : e === "?" && (t.fragment ? n !== "=" && !t.fragmentQuery && (t.fragmentQuery = !0) : !t.query && (t.query = !0));
}
function ta(e, t) {
	if (e.length > 8192 && Ii.test(e)) return wi;
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
		return wi + r;
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
	if (Yi(a) || Yi(s.head) || Yi(s.tail ?? "")) return wi + r;
	let c = !1;
	(i.username || i.password) && (i.username = wi, i.password = "", c = !0);
	let l = Zi(a, t.allowNestedUrls);
	l.changed && (i.search = l.serialized, c = !0);
	let u = Qi(s.head, t.allowNestedUrls), d = s.tail === null ? null : (f = s.tail, u.lastFieldSensitive ? {
		value: f === "" ? "" : wi,
		lastFieldSensitive: !0
	} : Qi(f, t.allowNestedUrls));
	var f;
	let p = d === null ? u.value : `${u.value}?${d.value}`;
	p !== i.hash.slice(1) && (i.hash = p, c = !0);
	let m = o ? d ?? u : l;
	return (c ? ra(i.toString()) : n) + (m.lastFieldSensitive ? "" : r);
}
function na(e, t) {
	return e.replace(Mi, (n) => function(e, t) {
		let n = function(e) {
			if (!e.includes("://")) return [];
			let t = [...e.matchAll(Li)].map((e) => e.index), n = [], r = {
				query: !1,
				fragment: !1,
				fragmentQuery: !1
			}, i = 0, a = !1, o = "";
			for (let s = 0; e.length > s && t.length > i; s++) {
				t[i] === s && (s > 0 && o !== "=" && n.push(s), i++);
				let c = e[s];
				ea(c, r, o) ? (o = c, a = !0) : a && "=&".includes(c) && (o = c);
			}
			return n;
		}(e);
		if (n.length === 0) return ta(e, t);
		let r = "", i = 0;
		for (let a of n) r += ta(e.slice(i, a), H(H({}, t), {}, { stripPunctuation: !1 })), i = a;
		return r + ta(e.slice(i), t);
	}(n, H(H({}, t), {}, { stripPunctuation: t.stripPunctuation && n.length !== e.length })));
}
function ra(e) {
	return e.replace(Ai, wi);
}
function ia(e, t) {
	return function(e) {
		return e.length >= 10240 && (Ti.test(e) || function(e) {
			let t = Oi.exec(e);
			if (!t) return !1;
			let n;
			try {
				n = decodeURIComponent(e.slice(t[0].length));
			} catch {
				return !1;
			}
			return ki.test(n.replace(/[\r\n]/g, ""));
		}(e) || Di.test(e) && Ei.test(e));
	}(e) ? "[binary data redacted - not supported by PostHog MCP analytics]" : function(e, t, n) {
		let r = 4 * n.maxStringLength;
		if (e.length > r) {
			let i = t(e.slice(0, function(e, t) {
				let n = t;
				for (; n > 0 && !Ni.test(e[n - 1]);) n--;
				return n;
			}(e, r)));
			if (i.length >= 2 * n.maxStringLength) return i + n.truncationSuffix;
		}
		return t(e);
	}(e, (e) => function(e) {
		return na(e, {
			allowNestedUrls: !0,
			stripPunctuation: !0
		});
	}(function(e) {
		let t = e.replace(Bi, " ");
		return t = t.replace(Vi, wi), t = t.replace(Hi, wi), t = t.replace(Ui, `$1${wi}`), t = function(e) {
			let t = "", n = 0;
			for (let r = la(e, 0); r !== null; r = la(e, r[1])) t += e.slice(n, r[0]) + ua(e.slice(r[0], r[1])), n = r[1];
			return t + e.slice(n);
		}(t), t = t.replace(Wi, wi), t = t.replace(Ki, `$1${wi}`), t = t.replace(qi, `$1${wi}`), t;
	}(ra(e))), t);
}
function aa(e) {
	let t = 0, n = !1;
	for (let r = e.length - 1; r >= 0; r--) {
		let i = e.charCodeAt(r) - 48;
		if (0 > i || i > 9) return !1;
		n && (i *= 2, i > 9 && (i -= 9)), t += i, n = !n;
	}
	return t % 10 == 0;
}
function oa(e, t) {
	let n = e.charCodeAt(t);
	return n >= 48 && 57 >= n;
}
function sa(e, t) {
	let n = e.charCodeAt(t);
	return oa(e, t) || n === 95 || n >= 65 && 90 >= n || n >= 97 && 122 >= n;
}
function ca(e, t) {
	let n = t;
	for (; oa(e, n);) n++;
	return n;
}
function la(e, t) {
	for (let n = t; e.length > n; n++) {
		if (!oa(e, n) || sa(e, n - 1)) continue;
		let t = 0, r = -1, i = n;
		for (;;) {
			let n = ca(e, i);
			if (t += n - i, 13 > t || sa(e, n) || (r = n), i = n + 1, !" ./-".includes(e.charAt(n)) || !oa(e, i)) break;
		}
		if (r >= 0) return [n, r];
		n = i - 1;
	}
	return null;
}
function ua(e) {
	let t = [];
	for (let n = Gi.exec(e); n !== null; n = Gi.exec(e)) t.push({
		digits: n[0],
		start: n.index,
		end: n.index + n[0].length
	});
	let n = "", r = 0, i = 0;
	for (; t.length > i;) {
		let a = "", o = -1;
		for (let e = i; t.length > e && (a += t[e].digits, 19 >= a.length); e++) a.length >= 13 && aa(a) && (o = e);
		0 > o ? i++ : (n += e.slice(r, t[i].start) + wi, r = t[o].end, i = o + 1);
	}
	return n + e.slice(r);
}
var da = {}.propertyIsEnumerable;
function fa(e, t) {
	try {
		return ha(e, t, {
			ancestors: /* @__PURE__ */ new WeakSet(),
			remainingNodes: 1e4
		}, 0);
	} catch {
		return [];
	}
}
function pa(e, t, n, r) {
	if (0 >= n.remainingNodes) return { stringValue: rr };
	if (n.remainingNodes--, Lt(e)) return { boolValue: e };
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
	if (typeof e == "string") return { stringValue: ar(e) };
	if (typeof e == "function") return { stringValue: "[Function]" };
	if (typeof e == "symbol") return { stringValue: String(e) };
	if (typeof e == "object" && e) {
		if (n.ancestors.has(e)) return { stringValue: "[Circular]" };
		if (r >= 20) return { stringValue: rr };
		if (e instanceof Date) {
			let t = e.getTime(), n = Number.isFinite(t) ? e.toISOString() : String(e);
			return { stringValue: typeof n == "string" ? ar(n) : String(n) };
		}
		n.ancestors.add(e);
		try {
			try {
				let i = e.toJSON;
				if (typeof i == "function") return pa(i.call(e), t, n, r + 1);
			} catch {}
			return F(e) ? { arrayValue: { values: ma(e, t, n, r + 1) } } : { kvlistValue: { values: ha(e, t, n, r + 1) } };
		} finally {
			n.ancestors.delete(e);
		}
	}
	return { stringValue: ar(String(e)) };
}
function ma(e, t, n, r) {
	let i = [], a = Math.min(e.length, 1e3), o = 0;
	for (; a > o && n.remainingNodes > 0; o++) try {
		let a = o in e ? e[o] : void 0;
		if (B(a)) continue;
		i.push(pa(a, t, n, r));
	} catch {
		i.push({ stringValue: ir });
	}
	return e.length > o && i.push({ stringValue: rr }), i;
}
function ha(e, t, n, r) {
	let i = [];
	for (let a in e) if (da.call(e, a)) {
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
			if (z(o) || L(o)) continue;
			i.push({
				key: ar(a),
				value: pa(o, t, n, r)
			});
		} catch {
			i.push({
				key: ar(a),
				value: { stringValue: ir }
			});
		}
	}
	return i;
}
function ga(e, t, n) {
	return H(H(H(H({}, or({}, e.resourceAttributes)), {}, { "service.name": e.serviceName || "unknown_service" }, e.environment && { "deployment.environment": e.environment }), e.serviceVersion && { "service.version": e.serviceVersion }), {}, {
		"telemetry.sdk.name": t,
		"telemetry.sdk.version": n
	});
}
var _a = [
	"service.name",
	"deployment.environment",
	"service.version",
	"telemetry.sdk.name",
	"telemetry.sdk.version"
];
function va(e, t) {
	let n = or({}, e), r = {};
	for (let e of _a) ({}).hasOwnProperty.call(n, e) && (r[e] = n[e], delete n[e]);
	return [...fa(n, t), ...fa(r, t)];
}
var ya = {
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
}, ba = {
	text: "INFO",
	number: 9
}, xa = {
	trace: {
		text: "TRACE",
		number: 1
	},
	debug: {
		text: "DEBUG",
		number: 5
	},
	info: ba,
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
};
function Sa(e) {
	try {
		return ar(String(e));
	} catch {
		return ir;
	}
}
function Ca(e, t, n, r) {
	let { text: i, number: a } = xa[e.level || "info"] || ba, o = function(e = Date.now()) {
		return String(e) + "000000";
	}(Ft(r) ? r : void 0), s = {};
	t.distinctId && (s.posthogDistinctId = t.distinctId), t.sessionId && (s.sessionId = t.sessionId), t.windowId && (s["window.id"] = t.windowId), B(t.sessionStartTimestamp) || (s.sessionStartTimestamp = String(t.sessionStartTimestamp)), B(t.lastActivityTimestamp) || (s.lastActivityTimestamp = String(t.lastActivityTimestamp)), t.currentUrl && (s["url.full"] = t.currentUrl), t.screenName && (s["screen.name"] = t.screenName), t.appState && (s["app.state"] = t.appState), t.activeFeatureFlags && t.activeFeatureFlags.length > 0 && (s.feature_flags = t.activeFeatureFlags);
	let c = H({}, s), l = e.attributes;
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
				e = ir;
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
		body: { stringValue: Sa(e.body) },
		attributes: fa(c, n)
	};
	return e.trace_id && (u.traceId = e.trace_id), e.span_id && (u.spanId = e.span_id), L(e.trace_flags) || (u.flags = e.trace_flags), u;
}
function wa(e, t, n) {
	return ga(e, t, n);
}
function Ta(e, t, n, r) {
	return { resourceLogs: [{
		resource: { attributes: va(t) },
		scopeLogs: [{
			scope: {
				name: n,
				version: r
			},
			logRecords: e
		}]
	}] };
}
var Ea = class {
	constructor(e) {
		this._onFire = e, this._firesAt = 0;
	}
	get pending() {
		return !!this._timer;
	}
	arm(e) {
		this.clear(), this._firesAt = Date.now() + e, this._timer = mr(() => {
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
function Da() {
	return .75 + .5 * Math.random();
}
function Oa(e, t, n, r) {
	let i = e * 2 ** Math.min(Math.max(0, t - 1), 6);
	return Math.round((r === void 0 ? i : Math.min(i, Math.max(r, e))) * n);
}
var ka = class {
	constructor(e, t, n, r, i, a = () => Promise.resolve(), o, s = () => !1) {
		this._instance = e, this._config = t, this._logger = n, this._getContext = r, this._onReady = i, this._waitForStoragePersist = a, this._scopeName = o, this._isConsentWithdrawn = s, this._flushTimer = new Ea(() => this._flushInBackground()), this._flushPromise = null, this._evictedSinceAdvance = 0, this._queueGeneration = 0, this._backgroundFlushPromise = null, this._retryAfter = new cr(), this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._intervalWindowStart = 0, this._intervalLogCount = 0, this._droppedWarned = !1, this._maxBufferSize = t.maxBufferSize, this._maxQueueSize = Math.max(t.maxQueueSize ?? t.maxBufferSize, t.maxBufferSize), this._flushIntervalMs = t.flushIntervalMs, this._maxBatchRecordsPerPost = t.maxBatchRecordsPerPost, this._rateCapWindowMs = t.rateCapWindowMs, this._maxLogsPerInterval = t.maxLogsPerInterval;
	}
	clearQueue() {
		this._queueGeneration++, this._instance.setPersistedProperty(St.LogsQueue, []);
	}
	get throttled() {
		return this._retryAfter.isOpen();
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
		let r = { record: Ca(n, t?.context ?? this._getContext(), this._logger, t?.occurredAtMs) };
		this._onReady(() => this._enqueue(r));
	}
	_runBeforeSend(e) {
		let t = this._config.beforeSend;
		if (!t) return e;
		let n = F(t) ? t : [t], r = e;
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
		return V(function* () {
			if (!e._instance.isDisabled) return e._flushPromise ||= e._flushInner().finally(() => {
				e._flushPromise = null;
			}), e._flushPromise;
		})();
	}
	_flushInner() {
		var e = this;
		return V(function* () {
			if (e._flushTimer.clear(), e._discardQueueIfConsentWithdrawn()) return;
			let t = e._instance.getPersistedProperty(St.LogsQueue) ?? [];
			if (t.length === 0) return;
			let n = t.length, r = 0;
			for (; t.length > 0 && n > r;) {
				if (e._discardQueueIfConsentWithdrawn()) return;
				let n = e._queueGeneration;
				e._evictedSinceAdvance = 0;
				let i = Math.min(t.length, e._maxBatchRecordsPerPost), a = t.slice(0, i), o = Ta(a.map((e) => e.record), e._buildResourceAttributes(), e._scopeName ?? e._instance.getLibraryId(), e._instance.getLibraryVersion()), s = yield e._instance._sendLogsBatch(o);
				if (e._queueGeneration !== n) return;
				if (s.kind === "too-large" && a.length > 1) e._maxBatchRecordsPerPost = Math.max(1, Math.floor(a.length / 2)), e._logger.warn(`Logs batch of size ${a.length} was too large for the ingestion endpoint, reducing batch size to ${e._maxBatchRecordsPerPost}`);
				else if (e._retryAfter.record(s), e._flushTimer.pending && e._flushTimer.arm(Math.max(e._flushIntervalMs, e._retryAfter.remainingMs())), s.kind === "retry-later" || (s.kind === "too-large" ? e._logger.warn("Dropping a single log record with batch size 1 — the record is larger than the server cap and cannot be split further.") : s.kind === "ok" && e._config.maxBatchRecordsPerPost > e._maxBatchRecordsPerPost && (e._maxBatchRecordsPerPost = Math.min(e._config.maxBatchRecordsPerPost, e._maxBatchRecordsPerPost + 1)), yield e._persistQueueAdvance(a.length), t = e._instance.getPersistedProperty(St.LogsQueue) ?? [], r += a.length, s.kind === "fatal")) throw s.error;
			}
		})();
	}
	_discardQueueIfConsentWithdrawn() {
		return !!this._isConsentWithdrawn() && (this._hasQueuedRecords() && this.clearQueue(), !0);
	}
	_persistQueueAdvance(e) {
		var t = this;
		return V(function* () {
			let n = Math.max(0, e - t._evictedSinceAdvance), r = t._instance.getPersistedProperty(St.LogsQueue) ?? [];
			t._instance.setPersistedProperty(St.LogsQueue, r.slice(n)), yield t._waitForStoragePersist();
		})();
	}
	_buildResourceAttributes() {
		return wa(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion());
	}
	_enqueue(e) {
		if (this._instance.optedOut) return;
		let t = this._instance.getPersistedProperty(St.LogsQueue) ?? [];
		this._maxQueueSize > t.length || (t.shift(), this._evictedSinceAdvance++, this._logger.info("Logs queue is full, dropping oldest record.")), t.push(e), this._instance.setPersistedProperty(St.LogsQueue, t), this._maxBufferSize > t.length || this._retryAfter.isOpen() ? this._armFlushTimer() : this._flushInBackground();
	}
	_armFlushTimer() {
		this._flushTimer.pending || this._flushTimer.arm(Math.max(this._flushIntervalMs, this._retryAfter.remainingMs()));
	}
	_nextFlushDelay() {
		return Math.max(Oa(this._flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs());
	}
	_hasQueuedRecords() {
		let e = this._instance.getPersistedProperty(St.LogsQueue);
		return !!e && e.length > 0;
	}
	shutdown(e) {
		var t = this;
		return V(function* () {
			t._flushTimer.clear();
			let n = t.flush().catch(() => {});
			e === void 0 ? yield n : yield hr(n, e);
		})();
	}
	flushWithTimeout(e) {
		var t = this;
		return V(function* () {
			let n = t.flush();
			yield hr(n, e, () => {
				n.catch(() => {});
			});
		})();
	}
	flushInBackground() {
		if (this._backgroundFlushPromise) return this._backgroundFlushPromise;
		let e = this.flush().then(() => {
			this._consecutiveFlushFailures = 0, this._flushJitter = 1;
		}, (e) => {
			this._consecutiveFlushFailures++, this._flushJitter = Da(), this._logger.error("PostHog logs flush failed:", e);
		}).finally(() => {
			this._backgroundFlushPromise === e && (this._backgroundFlushPromise = null), !this._instance.isDisabled && this._hasQueuedRecords() && this._flushTimer.armNoEarlierThan(this._nextFlushDelay());
		});
		return this._backgroundFlushPromise = e, e;
	}
	_flushInBackground() {
		this.flushInBackground();
	}
}, Aa = /^[0-9a-f]+$/;
function ja(e, t, n) {
	return typeof e == "string" && e.length === t && e !== n && Aa.test(e);
}
var Ma = /^([0-9a-f]{2})-([0-9a-f]{32})-([0-9a-f]{16})-([0-9a-f]{2})(-.*)?$/, Na = "00", Pa = [
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
function Fa(e) {
	return String(e) + "000000";
}
function Ia(e, t, n, r) {
	let i = "";
	return r && (i = Object.keys(r).sort().map((e) => `${JSON.stringify(e)}:${JSON.stringify(r[e])}`).join(",")), `${e}\0${t}\0${n ?? ""}\0${i}`;
}
var La = class {
	constructor(e, t, n) {
		this._instance = e, this._config = t, this._logger = n, this._series = /* @__PURE__ */ new Map(), this._flushTimer = new Ea(() => this.flush().catch((e) => {
			this._logger.error("Metrics flush failed:", e);
		})), this._flushPromise = null, this._queuedFlush = null, this._seriesCapWarned = !1, this._typeByName = /* @__PURE__ */ new Map(), this._typeCollisionWarned = /* @__PURE__ */ new Set(), this._boundsByHistogram = /* @__PURE__ */ new Map(), this._boundsConflictWarned = /* @__PURE__ */ new Set(), this._boundsCapWarned = !1, this._retryAfter = new cr(), this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._generation = 0;
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
			attributes: n?.attributes,
			bounds: F(n?.bounds) ? n.bounds.slice() : n?.bounds
		});
	}
	flush() {
		var e = this;
		let t = this._flushPromise, n = function() {
			var n = V(function* () {
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
	flushCoalesced() {
		return this._isBackingOff() ? this._flushPromise ?? Promise.resolve() : (this._queuedFlush ||= (this._flushPromise ?? Promise.resolve()).catch(() => {}).then(() => (this._queuedFlush = null, this._isBackingOff() ? void 0 : this.flush())), this._queuedFlush);
	}
	_isBackingOff() {
		return this._consecutiveFlushFailures > 0 || this._retryAfter.remainingMs() > 0;
	}
	drainWindow() {
		if (this._series.size === 0) return null;
		let e = this._series;
		return this._startWindow(), this._buildPayload(e);
	}
	reset() {
		this._generation++, this._retryAfter.reset(), this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._flushTimer.clear(), this._flushPromise = null, this._queuedFlush = null, this._startWindow(), this._boundsByHistogram = /* @__PURE__ */ new Map(), this._boundsCapWarned = !1;
	}
	_startWindow() {
		this._series = /* @__PURE__ */ new Map(), this._seriesCapWarned = !1, this._typeByName = /* @__PURE__ */ new Map(), this._typeCollisionWarned = /* @__PURE__ */ new Set(), this._boundsConflictWarned = /* @__PURE__ */ new Set();
	}
	_capture(e) {
		if (this._instance.isDisabled || this._instance.optedOut) return;
		let t = this._runBeforeSend(e);
		if (t === null) return;
		if (!t.name || typeof t.name != "string") return void this._logger.warn("Dropping metric with empty name");
		if (typeof t.value != "number" || !Number.isFinite(t.value)) return void this._logger.warn(`Dropping metric '${t.name}': value must be a finite number`);
		if (t.type !== "count" && t.type !== "gauge" && t.type !== "histogram") return void this._logger.warn(`Dropping metric '${t.name}': unknown type '${String(t.type)}'`);
		if (t.type === "count" && 0 > t.value) return void this._logger.warn(`Dropping count '${t.name}': counters are monotonic, value must be >= 0`);
		let n, r;
		try {
			n = t.attributes ? H({}, t.attributes) : void 0, r = Ia(t.type, t.name, t.unit, n);
		} catch (e) {
			this._logger.warn(`Dropping metric '${t.name}': attributes could not be serialized`, e);
			return;
		}
		let i, a = this._series.get(r);
		if (!a && !this._admitNewSeries() || t.type === "histogram" && (i = this._histogramBounds(t.name, t.unit, t.bounds), !i)) return;
		a || (a = {
			name: t.name,
			type: t.type,
			unit: t.unit,
			attributes: n,
			windowStartMs: Date.now(),
			hist: i && za(i)
		}, this._series.set(r, a));
		let o = this._typeByName.get(t.name);
		o === void 0 ? this._typeByName.set(t.name, t.type) : o === t.type || this._typeCollisionWarned.has(t.name) || (this._typeCollisionWarned.add(t.name), this._logger.warn(`Metric name '${t.name}' is already used as a ${o}; recording it as a ${t.type} too will blend both series in charts. Use a distinct name.`)), this._fold(a, t.value);
		let s = this._activeTraceContext();
		s && (a.exemplar = H(H({}, s), {}, {
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
					let t = Ma.exec(e.trim());
					if (!t) return;
					let [, n, r, i, a, o] = t;
					return n === "ff" || n === "00" && o || !function(e) {
						return ja(e, 32, "00000000000000000000000000000000");
					}(r) || !function(e) {
						return ja(e, 16, "0000000000000000");
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
					flags: (n = t.flags, 1 & parseInt(n, 16) ? "01" : Na)
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
	_histogramBounds(e, t, n) {
		if (n !== void 0 && !function(e) {
			if (!F(e) || e.length === 0) return !1;
			for (let t = 0; e.length > t; t++) if (!Number.isFinite(e[t]) || t > 0 && e[t - 1] >= e[t]) return !1;
			return !0;
		}(n)) return void this._logger.warn(`Dropping histogram '${e}': bounds must be a non-empty array of finite, strictly increasing numbers`);
		let r = Ia("histogram", e, t, void 0), i = this._boundsByHistogram.get(r);
		if (i) return this._warnOnBoundsConflict(e, r, i, n), i;
		if (this._boundsByHistogram.size >= this._config.maxSeriesPerFlush) return this._boundsCapWarned || (this._boundsCapWarned = !0, this._logger.warn(`Histogram bounds limit reached (${this._config.maxSeriesPerFlush} distinct histograms); new histograms that pass custom bounds are dropped. Reduce histogram name cardinality.`)), n && !Ra(n, Pa) ? void 0 : Pa;
		let a = n ? n.slice() : Pa;
		return this._boundsByHistogram.set(r, a), a;
	}
	_warnOnBoundsConflict(e, t, n, r) {
		Ra(n, r ?? Pa) || this._boundsConflictWarned.has(t) || (this._boundsConflictWarned.add(t), this._logger.warn(`Histogram '${e}' already uses the bounds [${n.join(", ")}]; samples that pass different bounds are recorded in those buckets.`));
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
				let n = e.hist;
				n.count += 1, n.sum += t, n.min = Math.min(n.min, t), n.max = Math.max(n.max, t), n.bucketCounts[function(e, t) {
					for (let n = 0; t.length > n; n++) if (t[n] >= e) return n;
					return t.length;
				}(t, n.bounds)] += 1;
				break;
			}
		}
	}
	_runBeforeSend(e) {
		let t = this._config.beforeSend;
		if (!t) return e;
		let n = F(t) ? t : [t], r = e;
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
		return Math.max(Oa(this._config.flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs());
	}
	_doFlush() {
		var e = this;
		return V(function* () {
			if (e._flushTimer.clear(), e._series.size === 0) return;
			let t = e._series;
			e._startWindow();
			let n = e._generation, r = yield e._instance._sendMetricsBatch(e._buildPayload(t));
			if (n === e._generation) switch (e._retryAfter.record(r), r.kind === "retry-later" ? (e._consecutiveFlushFailures++, e._flushJitter = Da()) : (e._consecutiveFlushFailures = 0, e._flushJitter = 1), e._flushTimer.pending && e._flushTimer.arm(e._nextFlushDelay()), r.kind) {
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
			return ga(e, t, n);
		}(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion()), r = this._instance.getLibraryId(), i = this._instance.getLibraryVersion(), { resourceMetrics: [{
			resource: { attributes: va(n) },
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
		let t = Fa(Date.now()), n = /* @__PURE__ */ new Map();
		for (let r of e.values()) {
			let e = Ia(r.type, r.name, r.unit, void 0), i = n.get(e);
			i || (i = H({ name: r.name }, r.unit && { unit: r.unit }), r.type === "count" ? i.sum = {
				aggregationTemporality: 1,
				isMonotonic: !0,
				dataPoints: []
			} : r.type === "gauge" ? i.gauge = { dataPoints: [] } : i.histogram = {
				aggregationTemporality: 1,
				dataPoints: []
			}, n.set(e, i));
			let a = fa(r.attributes ?? {}, this._logger), o = Fa(r.windowStartMs), s = Ba(r.exemplar);
			if (r.type === "count") {
				let e = H({
					attributes: a,
					startTimeUnixNano: o,
					timeUnixNano: t,
					asDouble: r.total ?? 0
				}, s);
				i.sum.dataPoints.push(e);
			} else if (r.type === "gauge") {
				let e = H({
					attributes: a,
					timeUnixNano: t,
					asDouble: r.last ?? 0
				}, s);
				i.gauge.dataPoints.push(e);
			} else {
				let e = r.hist, n = H({
					attributes: a,
					startTimeUnixNano: o,
					timeUnixNano: t,
					count: e.count,
					sum: e.sum,
					min: e.min,
					max: e.max,
					bucketCounts: e.bucketCounts,
					explicitBounds: e.bounds
				}, s);
				i.histogram.dataPoints.push(n);
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
				case "histogram": {
					let t = e.hist, r = n.hist;
					t.count += r.count, t.sum += r.sum, t.min = Math.min(t.min, r.min), t.max = Math.max(t.max, r.max);
					for (let e = 0; t.bucketCounts.length > e; e++) t.bucketCounts[e] += r.bucketCounts[e];
					break;
				}
			}
			else this._admitNewSeries() && this._series.set(t, n);
		}
	}
};
function Ra(e, t) {
	if (e === t) return !0;
	if (e.length !== t.length) return !1;
	for (let n = 0; e.length > n; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function za(e) {
	return {
		bounds: e,
		count: 0,
		sum: 0,
		min: 1 / 0,
		max: -1 / 0,
		bucketCounts: Array(e.length + 1).fill(0)
	};
}
function Ba(e) {
	return e ? { exemplars: [{
		filteredAttributes: [],
		timeUnixNano: Fa(e.timeMs),
		asDouble: e.value,
		traceId: e.traceId,
		spanId: e.spanId
	}] } : {};
}
var Va = (e, { debugEnabled: t } = {}) => {
	let r = {
		_log(r, ...i) {
			let a;
			try {
				a = typeof window > "u" ? void 0 : window;
			} catch {
				return;
			}
			a && (n.DEBUG || a.POSTHOG_DEBUG || t) && !L(a.console) && a.console && ("__rrweb_original__" in a.console[r] ? a.console[r].__rrweb_original__ : a.console[r])(e, ...i);
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
		createLogger: (t, n) => Va(`${e} ${t}`, n)
	};
	return r;
}, U = Va("[PostHog.js]"), W = (e, t) => U.createLogger(e, t);
function Ha(e, t) {
	F(e) && e.forEach(t);
}
function G(e, t) {
	if (!B(e)) {
		if (F(e)) e.forEach(t);
		else if (((e) => e instanceof FormData)(e)) e.forEach((e, n) => t(e, n));
		else for (let n in e) At.call(e, n) && t(e[n], n);
	}
}
var K = function(e, ...t) {
	for (let n of t) for (let t in n) n[t] !== void 0 && (e[t] = n[t]);
	return e;
};
function Ua(e) {
	let t = Object.keys(e), n = t.length, r = Array(n);
	for (; n--;) r[n] = [t[n], e[t[n]]];
	return r;
}
var Wa = function(e) {
	return function(...t) {
		try {
			return e.apply(this, t);
		} catch (e) {
			U.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), U.critical(e);
		}
	};
}, Ga = function(e) {
	let t = {};
	return G(e, function(e, n) {
		(R(e) && e.length > 0 || Ft(e)) && (t[n] = e);
	}), t;
};
function Ka(e) {
	let t = H({}, e);
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
var qa = [
	"herokuapp.com",
	"vercel.app",
	"netlify.app"
];
function Ja(e) {
	let t = e?.hostname;
	if (!R(t)) return !1;
	let n = t.split(".").slice(-2).join(".");
	for (let e of qa) if (n === e) return !1;
	return !0;
}
function q(e, t, n, r) {
	let { capture: i = !1, passive: a = !0 } = r ?? {};
	e?.addEventListener(t, n, {
		capture: i,
		passive: a
	});
}
function Ya(e) {
	return e.name === "ph_toolbar_internal";
}
var Xa = (e) => {
	if (M) {
		try {
			let t = e + "=", n = M.cookie.split(";").filter((e) => e.length);
			for (let e = 0; n.length > e; e++) {
				let r = n[e];
				for (; r.charAt(0) == " ";) r = r.substring(1, r.length);
				if (r.indexOf(t) === 0) return decodeURIComponent(r.substring(t.length, r.length));
			}
		} catch {}
		return null;
	}
}, Za = class e {
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
}, Qa = class {
	generate() {
		let e = this.generateOrAbort();
		if (!L(e)) return e;
		{
			this._timestamp = 0;
			let e = this.generateOrAbort();
			if (L(e)) throw Error("Could not generate UUID after timestamp reset");
			return e;
		}
	}
	generateOrAbort() {
		let e = (() => {
			let e = Date.now();
			return Ft(e) && isFinite(e) ? Math.min(Math.max(Math.floor(e), 0), 0xffffffffffff) : 0;
		})();
		if (e > this._timestamp) this._timestamp = e, this._resetCounter();
		else {
			if (this._timestamp >= e + 1e4) return;
			this._counter++, this._counter > 4398046511103 && (this._timestamp++, this._resetCounter());
		}
		return Za.fromFieldsV7(this._timestamp, Math.trunc(this._counter / 2 ** 30), this._counter & 2 ** 30 - 1, this._random.nextUint32());
	}
	_resetCounter() {
		this._counter = 1024 * this._random.nextUint32() + (1023 & this._random.nextUint32());
	}
	constructor() {
		this._timestamp = 0, this._counter = 0, this._random = new to();
	}
}, $a = (e) => {
	if ("u" > typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw Error("no cryptographically strong RNG available");
	for (let t = 0; e.length > t; t++) e[t] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
	return e;
}, eo, to = class {
	nextUint32() {
		return this._buffer.length > this._cursor || ((eo ??= "u" > typeof window && !L(window.crypto) && crypto.getRandomValues ? (e) => {
			try {
				return crypto.getRandomValues(e);
			} catch {
				return $a(e);
			}
		} : $a)(this._buffer), this._cursor = 0), this._buffer[this._cursor++];
	}
	constructor() {
		this._buffer = /* @__PURE__ */ new Uint32Array(8), this._cursor = 1 / 0;
	}
}, no, ro = () => io().toString(), io = () => (no ||= new Qa()).generate(), ao = "", oo = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i, so = null, J = {
	_is_supported() {
		if (!z(so)) return so;
		if (so = !1, M) try {
			let e = `__ph_cookie_support_${ro()}`;
			J._set(e, "xyz"), so = Xa(e) === "\"xyz\"", J._remove(e);
		} catch {
			so = !1;
		}
		return so;
	},
	_error(e) {
		U.error("cookieStore error: " + e);
	},
	_get: Xa,
	_parse(e) {
		let t;
		try {
			t = JSON.parse(J._get(e)) || {};
		} catch {}
		return t;
	},
	_set(e, t, n, r, i) {
		if (!M) return !1;
		try {
			let a = "", o = "", s = function(e, t) {
				if (t) {
					let t = function(e, t = M) {
						if (ao) return ao;
						if (!t || ["localhost", "127.0.0.1"].includes(e)) return "";
						let n = e.split("."), r = Math.min(n.length, 8), i = "dmn_chk_" + ro();
						for (; !ao && r--;) {
							let e = n.slice(r).join("."), a = i + "=1;domain=." + e + ";path=/";
							t.cookie = a + ";max-age=3", t.cookie.includes(i) && (t.cookie = a + ";max-age=0", ao = e);
						}
						return ao;
					}(e);
					if (!t) {
						let n = ((e) => {
							let t = e.match(oo);
							return t ? t[0] : "";
						})(e);
						n !== t && U.info("Warning: cookie subdomain discovery mismatch", n, t), t = n;
					}
					return t ? "; domain=." + t : "";
				}
				return "";
			}(M.location.hostname, r);
			if (n) {
				let e = /* @__PURE__ */ new Date();
				e.setTime(e.getTime() + 864e5 * n), a = "; expires=" + e.toUTCString();
			}
			i && (o = "; secure");
			let c = e + "=" + encodeURIComponent(JSON.stringify(t)) + a + "; SameSite=Lax; path=/" + s + o;
			return c.length > 3686.4 && U.warn("cookieStore warning: large cookie, len=" + c.length), M.cookie = c, !0;
		} catch {
			return !1;
		}
	},
	_remove(e, t) {
		if (M?.cookie && (!t || !z(Xa(e)))) try {
			J._set(e, "", -1, t);
		} catch {
			return;
		}
	}
}, co = null, Y = {
	_is_supported() {
		if (!z(co)) return co;
		let e = !0;
		if (L(j)) e = !1;
		else try {
			let t = "__mplssupport__";
			Y._set(t, "xyz"), Y._get(t) !== "\"xyz\"" && (e = !1), Y._remove(t);
		} catch {
			e = !1;
		}
		return e || U.error("localStorage unsupported; falling back to cookie store"), co = e, e;
	},
	_error(e) {
		U.error("localStorage error: " + e);
	},
	_get(e) {
		try {
			return j?.localStorage.getItem(e);
		} catch (e) {
			Y._error(e);
		}
		return null;
	},
	_parse(e) {
		try {
			return JSON.parse(Y._get(e)) || {};
		} catch {}
		return null;
	},
	_set(e, t) {
		try {
			return j?.localStorage.setItem(e, JSON.stringify(t)), !0;
		} catch (e) {
			Y._error(e);
		}
		return !1;
	},
	_remove(e) {
		try {
			j?.localStorage.removeItem(e);
		} catch (e) {
			Y._error(e);
		}
	}
}, lo = [
	p,
	a,
	d,
	o,
	g,
	l,
	c,
	s,
	m
], uo = [
	ne,
	E,
	we,
	Te,
	Ge,
	We,
	D,
	ze
], fo = (e) => e + "_cpm", po = [
	"__proto__",
	"constructor",
	"prototype"
], mo = (e) => {
	if (!I(e)) return {};
	let t = {};
	return Object.keys(e).forEach((n) => {
		po.indexOf(n) === -1 && (t[n] = e[n]);
	}), t;
}, ho = (e, t = []) => {
	let n = {};
	return [...uo, ...t].forEach((t) => {
		let r = e[t];
		L(r) || z(r) || r === "" || (n[t] = r);
	}), n;
}, go = (e) => {
	let t = 5381, n = 2166136261;
	for (let r = 0; e.length > r; r++) {
		let i = e.charCodeAt(r);
		t = 33 * t ^ i, n = Math.imul(n ^ i, 16777619);
	}
	return e.length.toString(36) + "." + (t >>> 0).toString(36) + "." + (n >>> 0).toString(36);
}, _o = (e, t) => ({
	p: t,
	f: go(JSON.stringify(e))
}), vo = (e, t) => {
	if (!t) return {
		properties: [],
		isValid: !1
	};
	try {
		let n = J._parse(fo(e)), r = n?.f === go(t) && F(n.p);
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
}, yo = (e, t) => t + "|" + (J._get(fo(e)) || ""), bo = {}, xo = {
	_is_supported: () => !0,
	_error(e) {
		U.error("memoryStorage error: " + e);
	},
	_get: (e) => e in bo ? bo[e] : null,
	_parse: (e) => e in bo ? bo[e] : null,
	_set: (e, t) => (bo[e] = t, !0),
	_remove(e) {
		delete bo[e];
	}
}, So = null, X = {
	_is_supported() {
		if (!z(So)) return So;
		if (So = !0, L(j)) So = !1;
		else try {
			let e = "__support__";
			X._set(e, "xyz"), X._get(e) !== "\"xyz\"" && (So = !1), X._remove(e);
		} catch {
			So = !1;
		}
		return So;
	},
	_error(e) {
		U.error("sessionStorage error: ", e);
	},
	_get(e) {
		try {
			return j?.sessionStorage.getItem(e);
		} catch (e) {
			X._error(e);
		}
		return null;
	},
	_parse(e) {
		try {
			return JSON.parse(X._get(e)) || null;
		} catch {}
		return null;
	},
	_set(e, t) {
		try {
			return j?.sessionStorage.setItem(e, JSON.stringify(t)), !0;
		} catch (e) {
			X._error(e);
		}
		return !1;
	},
	_remove(e) {
		try {
			j?.sessionStorage.removeItem(e);
		} catch (e) {
			X._error(e);
		}
	}
}, Co = class {
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
		return Kt(e) ? 1 : P(qt, e) ? 0 : -1;
	}
	get _storage() {
		let e = this._config.opt_out_capturing_persistence_type, t = e === "localStorage" ? Y : J, n = t._is_supported() ? t : xo;
		if (!this._persistentStore || this._persistentStore !== n) {
			this._persistentStore = n;
			let t = e === "localStorage" ? J : Y;
			t._get(this._storageKey) && (this._persistentStore._get(this._storageKey) || this.optInOut(Kt(t._get(this._storageKey))), t._remove(this._storageKey, this._config.cross_subdomain_cookie));
		}
		return this._persistentStore;
	}
	_getDnt() {
		return !!this._config.respect_dnt && [
			mt?.doNotTrack,
			mt?.msDoNotTrack,
			N.doNotTrack,
			mt?.globalPrivacyControl
		].some((e) => Kt(e));
	}
};
function wo(e, t) {
	var n;
	let r = e == null || (n = e.config) == null ? void 0 : n.get_current_url;
	if (!Mt(r)) return t;
	try {
		let e = r(t);
		return R(e) && e ? e : t;
	} catch (e) {
		return U.error("Error in get_current_url, falling back to window.location.href", e), t;
	}
}
function To(e) {
	return e instanceof Element && (e.id === "__POSTHOG_TOOLBAR__" || !!e.closest?.call(e, ".toolbar-global-fade-container"));
}
function Eo(e) {
	return !!e && e.nodeType === 1;
}
function Do(e, t) {
	return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase();
}
function Oo(e) {
	return !!e && e.nodeType === 3;
}
function ko(e) {
	return !!e && e.nodeType === 11 && Eo(e.host);
}
function Ao(e) {
	return e ? Et(e).split(/\s+/) : [];
}
function jo(e, t) {
	let n = function(e) {
		var t;
		let n = typeof window > "u" ? void 0 : window, r = n == null || (t = n.location) == null ? void 0 : t.href;
		return L(r) ? void 0 : wo(e, r);
	}(t);
	return !!(n && e && e.some((e) => n.match(e)));
}
function Mo(e) {
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
	return Ao(t);
}
function No(e) {
	return B(e) ? null : Et(e).split(/(\s+)/).filter((e) => ls(e)).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255);
}
function Po(e) {
	let t = "";
	return es(e) && !ts(e) && e.childNodes && e.childNodes.length && G(e.childNodes, function(e) {
		Oo(e) && e.textContent && (t += No(e.textContent) ?? "");
	}), Et(t);
}
function Fo(e) {
	return L(e.target) ? e.srcElement || null : e.target?.shadowRoot ? e.composedPath()[0] || null : e.target || null;
}
var Io = [
	"a",
	"button",
	"form",
	"input",
	"select",
	"textarea",
	"label"
];
function Lo(e, t) {
	let n = e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector;
	try {
		return !!n && n.call(e, t);
	} catch {
		return !1;
	}
}
function Ro(e, t) {
	if (L(t)) return !0;
	for (let n of e) if (t.some((e) => Lo(n, e))) return !0;
	return !1;
}
function zo(e) {
	let t = e.parentNode;
	return !(!t || !Eo(t)) && t;
}
var Bo = [".ph-no-autocapture", "[data-ph-no-autocapture]"], Vo = [
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
], Ho = [
	...Vo,
	"+",
	"-",
	"−",
	"–"
], Uo = Ho.length + 10, Wo = [
	"button",
	"a",
	"input",
	"select",
	"textarea",
	"label"
], Go = [
	"button",
	"link",
	"tab",
	"menuitem",
	"option"
], Ko = (e, t) => /[a-z0-9]/i.test(t) ? P(Ho, t) ? RegExp(`\\b${t}\\b`).test(e) : e.includes(t) : e === t, qo = (e) => P(Wo, e.tagName.toLowerCase()) || P(Go, (e.getAttribute("role") || "").toLowerCase());
function Jo(e) {
	let t = "", n = "", r = (e) => {
		Eo(e) && es(e) && !ts(e) && (t += ` ${Po(e)}`, n = n || e.getAttribute("aria-label") || "", G(e.childNodes, r));
	};
	r(e), t = Et(t.replace(/\s+/g, " "));
	let i = (ls(t) ? t : "").toLowerCase();
	return {
		safeText: i,
		ariaLabel: Et(e.getAttribute("aria-label") || (i ? "" : n)).toLowerCase()
	};
}
var Yo = [".ph-no-rageclick", ".ph-no-capture"], Xo = [
	"",
	"text",
	"search",
	"email",
	"password",
	"url",
	"tel",
	"number"
];
function Zo(e, t) {
	if (!(typeof window < "u" && window) || Qo(e)) return !1;
	let n, r, i;
	var a;
	if (Lt(t) ? (n = !!t && Yo, r = void 0, i = !1) : (n = t?.css_selector_ignorelist ?? Yo, r = t?.content_ignorelist, i = (a = t?.ignore_text_selection) != null && a), !1 === n || i && function(e) {
		return !(!e || !Eo(e)) && (!!Do(e, "textarea") || (Do(e, "input") ? P(Xo, (e.getAttribute("type") || "").toLowerCase()) : function(e) {
			if (e.isContentEditable) return !0;
			let t = e.getAttribute?.call(e, "contenteditable");
			return t === "true" || t === "";
		}(e)));
	}(e)) return !1;
	let { targetElementList: o } = $o(e, !1);
	return !(r && function(e, { safeText: t, ariaLabel: n }) {
		let r;
		if (!0 === e) r = Vo;
		else {
			if (!F(e)) return !1;
			if (e.length > Uo) return U.error(`[PostHog] content_ignorelist array cannot exceed ${Uo} items. Use css_selector_ignorelist for more complex matching.`), !1;
			r = e.map((e) => e.toLowerCase());
		}
		return r.some((e) => Ko(t, e) || Ko(n, e));
	}(r, function(e, t) {
		for (let e of t) if (qo(e)) return Jo(e);
		for (let e of t) {
			try {
				if (window?.getComputedStyle(e).getPropertyValue("cursor") !== "pointer") break;
			} catch {
				break;
			}
			let t = Jo(e);
			if (t.safeText || t.ariaLabel) return t;
		}
		return Jo(e);
	}(e, o)) || Ro(o, n));
}
var Qo = (e) => !e || Do(e, "html") || !Eo(e), $o = (e, t) => {
	let n = typeof window > "u" ? void 0 : window;
	if (!n || Qo(e)) return {
		parentIsUsefulElement: !1,
		targetElementList: []
	};
	let r = !1, i = [e], a = e;
	for (; a.parentNode && !Do(a, "body");) {
		if (ko(a.parentNode)) {
			i.push(a.parentNode.host), a = a.parentNode.host;
			continue;
		}
		let e = zo(a);
		if (!e) break;
		if (t || Io.indexOf(e.tagName.toLowerCase()) > -1) r = !0;
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
function es(e) {
	let t = /* @__PURE__ */ new Set(), n = 0;
	for (let r = e; r.parentNode && !Do(r, "body"); r = r.parentNode) {
		if (n++ >= 1e3 || t.has(r)) return !1;
		t.add(r);
		let e = Mo(r);
		if (P(e, "ph-sensitive") || P(e, "ph-no-capture")) return !1;
	}
	if (P(Mo(e), "ph-include")) return !0;
	let r = e.type || "";
	if (R(r)) switch (r.toLowerCase()) {
		case "hidden":
		case "password": return !1;
	}
	let i = e.name || e.id || "";
	return !R(i) || !/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(i.replace(/[^a-zA-Z0-9]/g, ""));
}
function ts(e) {
	return !!(Do(e, "input") && ![
		"button",
		"checkbox",
		"submit",
		"reset"
	].includes(e.type) || Do(e, "select") || Do(e, "textarea") || e.getAttribute("contenteditable") === "true");
}
var ns = /* @__PURE__ */ RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$"), rs = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g, is = [
	16,
	15,
	14,
	13
], as = /* @__PURE__ */ RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$"), os = /* @__PURE__ */ RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g"), ss = /[0-9A-Za-z_]/;
function cs(e) {
	let t = 0, n = !1;
	for (let r = e.length - 1; r >= 0; r--) {
		let i = e.charCodeAt(r) - 48;
		n && (i *= 2, i > 9 && (i -= 9)), t += i, n = !n;
	}
	return t % 10 == 0;
}
function ls(e, t = !0) {
	return !(B(e) || R(e) && (e = Et(e), (t ? ns.test((e || "").replace(/[- ]/g, "")) : function(e) {
		let t;
		for (rs.lastIndex = 0; t = rs.exec(e);) {
			let e = t[2];
			if (!e) continue;
			let n = e.replace(/[- ]/g, "");
			for (let e = 0; n.length > e; e++) for (let t of is) {
				let r = e + t;
				if (n.length >= r) {
					let t = n.slice(e, r);
					if (ns.test(t) && cs(t)) return !0;
				}
			}
		}
		return !1;
	}(e)) || (t ? as.test(e) : function(e) {
		let t;
		for (os.lastIndex = 0; t = os.exec(e);) {
			let e = t[1], n = t[3];
			if (!(e && n && ss.test(e) && ss.test(n))) return !0;
		}
		return !1;
	}(e))));
}
function us(e) {
	let t = Po(e);
	return t = `${t} ${ds(e)}`.trim(), ls(t) ? t : "";
}
function ds(e) {
	let t = "";
	return e && e.childNodes && e.childNodes.length && G(e.childNodes, function(e) {
		if (e && e.tagName?.toLowerCase() === "span") try {
			let n = Po(e);
			t = `${t} ${n}`.trim(), e.childNodes && e.childNodes.length && (t = `${t} ${ds(e)}`.trim());
		} catch (e) {
			U.error("[AutoCapture]", e);
		}
	}), t;
}
function fs(e) {
	return e.replace(/"|\\"/g, "\\\"");
}
function ps(e) {
	let t = e.attr__class;
	if (t) return F(t) ? t : Ao(t);
}
var ms = W("[Dead Clicks]"), hs = () => !0, gs = (e) => {
	let t = !!e.instance.persistence?.get_property(he), n = e.instance.config.capture_dead_clicks;
	return Lt(n) ? n : !!I(n) || t;
}, _s = class {
	get lazyLoadedDeadClicksAutocapture() {
		return this._lazyLoadedDeadClicksAutocapture;
	}
	constructor(e, t, n) {
		this.instance = e, this.isEnabled = t, this.onCapture = n, this.startIfEnabledOrStop();
	}
	onRemoteConfig(e) {
		if (!e.ok) return;
		let t = e.config;
		"captureDeadClicks" in t && (this.instance.persistence && this.instance.persistence.register({ [he]: t.captureDeadClicks }), this.startIfEnabledOrStop());
	}
	startIfEnabledOrStop() {
		this.isEnabled(this) ? this._loadScript(() => {
			this._start();
		}) : this.stop();
	}
	_loadScript(e) {
		var t, n;
		N.__PosthogExtensions__?.initDeadClicksAutocapture ? e() : (t = N.__PosthogExtensions__) == null || (n = t.loadExternalDependency) == null || n.call(t, this.instance, "dead-clicks-autocapture", (t) => {
			t ? ms.error("failed to load script", t) : e();
		});
	}
	_start() {
		if (M) {
			if (!this._lazyLoadedDeadClicksAutocapture && N.__PosthogExtensions__?.initDeadClicksAutocapture) {
				let e = I(this.instance.config.capture_dead_clicks) ? H({}, this.instance.config.capture_dead_clicks) : {};
				e.__onCapture = this.onCapture, this.onCapture && (e.capture_dead_swipes = !1), this._lazyLoadedDeadClicksAutocapture = N.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, e), this._lazyLoadedDeadClicksAutocapture.start(M), ms.info("starting...");
			}
		} else ms.error("`document` not found. Cannot start.");
	}
	stop() {
		this._lazyLoadedDeadClicksAutocapture && (this._lazyLoadedDeadClicksAutocapture.stop(), this._lazyLoadedDeadClicksAutocapture = void 0, ms.info("stopping..."));
	}
}, vs = W("[SegmentIntegration]");
function ys(e, t, n = !0) {
	let r = e.config.segment;
	if (!r) return t();
	let { analytics: i, filterProperties: a } = ((e) => Mt(e.register))(o = r) ? { analytics: o } : o;
	var o;
	(function(e, t, n, r) {
		let i = (t) => {
			let i = () => t.anonymousId() || ro();
			e.config.get_device_id = i, r && t.id() && (e.register({
				distinct_id: t.id(),
				$device_id: i()
			}), e.persistence.set_property(ze, st)), n(r ? void 0 : t.anonymousId() || void 0);
		}, a = t.user();
		"then" in a && Mt(a.then) ? a.then(i) : i(a);
	})(e, i, (n) => {
		i.register(((e, t, { filterProperties: n } = {}) => {
			typeof Promise < "u" && Promise.resolve || vs.warn("This browser does not have Promise support, and can not use the segment integration");
			let r = (r, i) => {
				if (!i) return r;
				let a = !!t && r.event.anonymousId === t && !r.event.userId;
				a || r.event.userId || r.event.anonymousId === e.get_distinct_id() || (vs.info("No userId set, resetting PostHog"), e.reset()), a || (t = void 0), r.event.userId && r.event.userId !== e.get_distinct_id() && (vs.info("UserId set, identifying with PostHog"), e.identify(r.event.userId));
				let o = e.calculateEventProperties(i, r.event.properties);
				if (!B(n)) {
					let e = r.event.properties || {}, t = {};
					for (let n of Object.keys(o)) At.call(e, n) || (t[n] = o[n]);
					let i = ((e, t) => {
						let n = F(e) ? e : [e], r = H({}, t);
						for (let e of n) try {
							if (r = e(r), B(r)) return null;
						} catch (e) {
							return vs.error("Error in Segment filterProperties:", e), null;
						}
						return r;
					})(n, t);
					if (B(i)) return r;
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
					return r(e, lt);
				},
				identify(e) {
					return r(e, dt);
				},
				screen(e) {
					return r(e, "$screen");
				}
			};
		})(e, n, { filterProperties: a })).then(() => {
			t();
		}, (e) => {
			vs.error("Failed to register the Segment integration", e), t();
		});
	}, n);
}
var bs = "posthog-js";
function xs(e, { organization: t, projectId: n, prefix: r, severityAllowList: i = ["error"], sendExceptionsToPostHog: a = !0 } = {}) {
	return (o) => {
		if (i !== "*" && !i.includes(o.level) || !e.__loaded) return o;
		o.tags ||= {};
		let s = e.requestRouter.endpointFor("ui", `/project/${e.config.token}/person/${e.get_distinct_id()}`);
		o.tags["PostHog Person URL"] = s, e.sessionRecordingStarted() && (o.tags["PostHog Recording URL"] = e.get_session_replay_url({ withTimestamp: !0 }));
		let c = o.exception?.values || [], l = c.map((e) => H(H({}, e), {}, { stacktrace: e.stacktrace ? H(H({}, e.stacktrace), {}, {
			type: "raw",
			frames: (e.stacktrace.frames || []).map((e) => H(H({}, e), {}, { platform: "web:javascript" }))
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
var Ss = class {
	constructor(e, t, n, r, i, a) {
		this.name = bs, this.setupOnce = function(o) {
			o(xs(e, {
				organization: t,
				projectId: n,
				prefix: r,
				severityAllowList: i,
				sendExceptionsToPostHog: a == null || a
			}));
		};
	}
}, Cs = class {
	constructor(e) {
		this._onSessionIdChange = (e, t, n) => {
			n && (n.noSessionId || n.activityTimeout || n.sessionPastMaximumLength || n.crossTabAdoption) && (U.info("[PageViewManager] Session rotated, clearing pageview state", {
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
			pathname: j?.location.pathname ?? "",
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
			if (!(L(e) || L(t) || L(n) || L(a) || L(o) || L(s))) {
				e = Math.ceil(e), t = Math.ceil(t), n = Math.ceil(n), a = Math.ceil(a), o = Math.ceil(o), s = Math.ceil(s);
				let i = e > 1 ? Qt(t / e, 0, 1, U) : 1, c = e > 1 ? Qt(n / e, 0, 1, U) : 1, l = a > 1 ? Qt(o / a, 0, 1, U) : 1, u = a > 1 ? Qt(s / a, 0, 1, U) : 1;
				r = K(r, {
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
}, ws = ["flags", "surveys"], Ts = {
	[te]: { exposure: "hidden" },
	[ie]: { exposure: "hidden" },
	[ae]: { exposure: "hidden" },
	[le]: { exposure: "hidden" },
	[D]: { exposure: "hidden" },
	[ce]: { exposure: "hidden" },
	[b]: { exposure: "event" },
	[ue]: { exposure: "hidden" },
	[ge]: { exposure: "hidden" },
	[de]: { exposure: "event" },
	[fe]: { exposure: "hidden" },
	[pe]: { exposure: "event" },
	[me]: { exposure: "event" },
	[he]: { exposure: "event" },
	[O]: { exposure: "hidden" },
	[k]: { exposure: "event" },
	[_e]: { exposure: "hidden" },
	[ve]: { exposure: "hidden" },
	[we]: { exposure: "hidden" },
	[Te]: { exposure: "event" },
	[ye]: {
		exposure: "event",
		shouldSkipFromEventProperties: (e) => z(e)
	},
	[Ee]: { exposure: "event" },
	[De]: { exposure: "event" },
	[Oe]: { exposure: "event" },
	[ke]: { exposure: "event" },
	[Ae]: { exposure: "hidden" },
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
	[T]: { exposure: "hidden" },
	[Me]: { exposure: "hidden" },
	[Ne]: { exposure: "hidden" },
	[Pe]: { exposure: "hidden" },
	[Fe]: { exposure: "event" },
	[Ie]: { exposure: "event" },
	[Le]: { exposure: "event" },
	[Re]: { exposure: "event" },
	[m]: { exposure: "hidden" },
	[h]: { exposure: "hidden" },
	[je]: { exposure: "event" },
	[s]: { exposure: "hidden" },
	[c]: {
		exposure: "hidden",
		storageGroup: "flags",
		volatile: !0
	},
	[ze]: { exposure: "hidden" },
	[Be]: { exposure: "hidden" },
	[Ve]: { exposure: "hidden" },
	[He]: { exposure: "hidden" },
	[Ue]: { exposure: "hidden" },
	[We]: { exposure: "hidden" },
	[Ge]: { exposure: "hidden" },
	[be]: { exposure: "event" },
	[xe]: { exposure: "event" },
	[Se]: { exposure: "event" },
	[Ce]: { exposure: "event" },
	[Je]: { exposure: "event" },
	[Ye]: { exposure: "event" },
	[Xe]: { exposure: "hidden" },
	[Ze]: { exposure: "hidden" },
	[Qe]: { exposure: "hidden" },
	[$e]: { exposure: "hidden" },
	[et]: { exposure: "hidden" },
	[tt]: { exposure: "hidden" },
	[nt]: { exposure: "hidden" },
	[rt]: { exposure: "hidden" },
	[it]: { exposure: "hidden" },
	[at]: { exposure: "event" }
}, Es = [
	["$posthog_sr_group_event_trigger_", { exposure: "hidden" }],
	["$posthog_sr_group_url_trigger_", { exposure: "hidden" }],
	["$posthog_sr_group_sampling_", { exposure: "hidden" }]
], Ds = (e) => {
	let t = Ts[e];
	if (t) return t;
	for (let [t, n] of Es) if (e.indexOf(t) === 0) return n;
};
function Os() {
	try {
		return Intl.DateTimeFormat().resolvedOptions().timeZone;
	} catch {
		return;
	}
}
var ks = (e) => {
	let t = (typeof document > "u" ? void 0 : document)?.createElement("a");
	return L(t) ? null : (t.href = e, t);
}, As = () => {
	try {
		return "u" > typeof window && !1 !== window.navigator.onLine;
	} catch {
		return !1;
	}
}, js = (e, t) => e >= t && As(), Ms = (e, t, n, r) => {
	if (e === 0) {
		if (As()) {
			let e = t + 1;
			return e === n && r(), e;
		}
		return t;
	}
	return 0;
}, Ns = (e, t) => {
	try {
		let n;
		return JSON.stringify(e, (e, t) => Ht(t) ? (n ??= /* @__PURE__ */ new WeakMap(), n.has(t) || n.set(t, Ka(t)), n.get(t)) : typeof t == "bigint" ? t.toString() : t, t);
	} catch {
		return Ot(e);
	}
}, Ps = function(e, t) {
	let n = ((e.split("#")[0] || "").split(/\?(.*)/)[1] || "").replace(/^\?+/g, "").split("&"), r;
	for (let e = 0; n.length > e; e++) {
		let i = n[e].split(/=(.*)/);
		if (i[0] === t) {
			r = i;
			break;
		}
	}
	if (!F(r) || 2 > r.length) return "";
	{
		let e = r[1].replace(/\+/g, " ");
		try {
			e = decodeURIComponent(e);
		} catch {
			U.error("Skipping decoding for malformed query param: " + e);
		}
		return e;
	}
}, Fs = function(e, t, n) {
	if (!e || !t || !t.length) return e;
	let r = e.split(/#(.*)/), i = r[1], a = (r[0] || "").split(/\?(.*)/), o = a[1], s = a[0], c = (o || "").split("&"), l = [];
	for (let e = 0; c.length > e; e++) {
		let r = c[e].split("?"), i = 0;
		for (; r.length > i && !t.includes(r[i].split("=")[0]);) i++;
		l.push(r.length > i ? r.slice(0, i).concat(r[i].split("=")[0] + "=" + n).join("?") : c[e]);
	}
	let u = s;
	return o != null && (u += "?" + l.join("&")), i != null && (u += "#" + i), u;
}, Is = function(e, t) {
	let n = e.match(RegExp(t + "=([^&]*)"));
	return n ? n[1] : null;
}, Ls = [
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
], Rs = [
	"utm_source",
	"utm_medium",
	"utm_campaign",
	"utm_content",
	"utm_term",
	"gad_source",
	"mc_cid",
	...Ls
], zs = "<masked>", Bs = ["li_fat_id"];
function Vs(e, t, n) {
	if (!M) return {};
	let r = t ? [...Ls, ...n || []] : [], i = Hs(Fs(M.URL, r, zs), e);
	return K(function() {
		let e = {};
		return G(Bs, function(t) {
			let n = Xa(t);
			e[t] = n || null;
		}), e;
	}(), i);
}
function Hs(e, t) {
	let n = Rs.concat(t || []), r = {};
	return G(n, function(t) {
		let n = Ps(e, t);
		r[t] = n || null;
	}), r;
}
function Us(e) {
	let t = function(e) {
		return e ? e.search("https?://(.*)google.([^/?]*)") === 0 ? "google" : e.search("https?://(.*)bing.com") === 0 ? "bing" : e.search("https?://(.*)yahoo.com") === 0 ? "yahoo" : e.search("https?://(.*)duckduckgo.com") === 0 ? "duckduckgo" : null : null;
	}(e), n = t == "yahoo" ? "p" : "q", r = {};
	if (!z(t)) {
		r.$search_engine = t;
		let e = M ? Ps(M.referrer, n) : "";
		e.length && (r.ph_keyword = e);
	}
	return r;
}
function Ws() {
	return navigator.language || navigator.userLanguage;
}
function Gs() {
	let e = Ws();
	return typeof e == "string" ? e.split("-")[0] : void 0;
}
var Ks = "$direct";
function qs() {
	return M?.referrer || Ks;
}
function Js(e, t, n = !1) {
	let r = e ? [...Ls, ...t || []] : [], i = (n ? fr(ht?.href) : ht?.href)?.substring(0, 1e3);
	return {
		r: qs().substring(0, 1e3),
		u: i ? Fs(i, r, zs) : void 0
	};
}
function Ys(e, t = !1) {
	let { r: n, u: r } = e, i = t ? fr(r) : r, a = {
		$referrer: n,
		$referring_domain: n == null ? void 0 : n == Ks ? Ks : ks(n)?.host
	};
	if (i) {
		a.$current_url = i;
		let e = ks(i);
		a.$host = e?.host, a.$pathname = e?.pathname, K(a, Hs(i));
	}
	return n && K(a, Us(n)), a;
}
function Xs() {
	try {
		return (/* @__PURE__ */ new Date()).getTimezoneOffset();
	} catch {
		return;
	}
}
var Zs = {
	flags: c,
	surveys: S
}, Qs = [
	"cookie",
	"localstorage",
	"localstorage+cookie",
	"sessionstorage",
	"memory"
], $s = (e) => `${e}_cookie_identity_change_pending`, ec = (e) => {
	let t = "", n = 0;
	for (let r of e) {
		let e = encodeURIComponent(JSON.stringify(r).slice(1, -1)).length;
		if (n + e > 1e3) break;
		t += r, n += e;
	}
	return t;
}, tc = "main", nc = [
	d,
	a,
	o,
	g,
	l,
	c,
	u,
	p
], rc = (e) => nc.indexOf(e) !== -1, ic = [D, ce], ac = (e) => ic.indexOf(e) !== -1, oc = (e, t) => {
	try {
		return JSON.stringify(e) === JSON.stringify(t);
	} catch {
		return e === t;
	}
}, sc = (e) => {
	if (!e) return {};
	let t = JSON.parse(e);
	return I(t) ? t : {};
}, cc = (e, t) => {
	G(e, (n, r) => {
		let i = Ds(r);
		i && i.exposure !== "event" || {}.hasOwnProperty.call(t, r) || delete e[r];
	});
}, lc = class {
	constructor(e, t, n = !0, r = !e.cookieless_mode) {
		if (this._slotState = {}, this._splitStorageEligible = !1, this._storesIdentityInCookie = !1, this._splitStorage = !1, this._cookieIdentityChangePending = !1, this._cookieSyncSuppressed = !1, this._pendingCrossTabFeatureFlagChanges = /* @__PURE__ */ new Map(), this._storageMigrationInProgress = !1, this._localIdentityChangePending = !1, this._crossTabFeatureFlagIdentityMismatch = !1, this._metaIdentifierChangePending = /* @__PURE__ */ new Set(), this._crossTabFeatureFlagHandlers = /* @__PURE__ */ new Set(), this._config = e, this._ownsSplitStorage = n, this.props = {}, this._campaign_params_url = void 0, this._name = ((e) => {
			let t = "";
			return e.token && (t = e.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), e.persistence_name ? "ph_" + e.persistence_name : "ph_" + t + "_posthog";
		})(e), this._disabled = e.disable_persistence || !!t, this._storage = this._buildStorage(e), this._splitStorage = this._resolveSplitStorage(e), this.load(r), this._markLoadedCrossTabFeatureFlagChangesPending(), e.debug && U.info("Persistence loaded", e.persistence, H({}, this.props)), this.update_config(e, e, t), this.save(), j) {
			let e = () => this.flush();
			q(j, "beforeunload", e, { capture: !1 }), q(j, "pagehide", e, { capture: !1 }), this._onStorage = (e) => {
				if (this._splitStorageEligible && (!e.storageArea || e.storageArea === j?.localStorage) && e.key) {
					if (e.key !== this._name) {
						if (this._splitStorage) {
							let t = ws.find((t) => e.key === this._groupEntryName(t));
							t && this._syncCrossTabFeatureFlagProperties(e.key, t);
						}
					} else this._syncCrossTabFeatureFlagProperties(e.key, tc);
				}
			}, q(j, "storage", this._onStorage);
		}
	}
	markCrossTabFeatureFlagChanges(e) {
		Object.entries(e).forEach(([e, t]) => {
			let n = this._pendingCrossTabFeatureFlagChanges.get(e);
			if (!rc(e) || !0 === n) return;
			if (!0 === t) return void this._setCrossTabFeatureFlagChangesPending(e, !0);
			let r = new Set(n || []);
			t.forEach((e) => r.add(e)), r.size && this._setCrossTabFeatureFlagChangesPending(e, r);
		});
	}
	onCrossTabFeatureFlagChange(e) {
		return this._crossTabFeatureFlagHandlers.add(e), () => this._crossTabFeatureFlagHandlers.delete(e);
	}
	destroy() {
		this._onStorage && j && (j.removeEventListener("storage", this._onStorage), this._onStorage = void 0), this._crossTabFeatureFlagHandlers.clear();
	}
	_syncCrossTabFeatureFlagProperties(e, t, n = !0) {
		if (this._disabled) return !1;
		let r, i;
		try {
			if (i = Y._get(e), z(i)) {
				let e = this._slotWriteState(t);
				return e.storageValue = null, t === tc ? this._mergeMetaIdentifierProperties({}) : e.persisted = !1, !1;
			}
			r = sc(i);
		} catch {
			return !1;
		}
		t === tc && this._mergeMetaIdentifierProperties(r);
		let a = t === tc ? r : Y._parse(this._name);
		if (a && this._hasCrossTabFeatureFlagIdentityMismatch(a)) return !1;
		let o = this._mergeCrossTabFeatureFlagProperties(r, t, n);
		return t === tc && this._splitStorage && !oc(this._partitionProps().main, r) || this._rememberCrossTabStorageFingerprint(r, t, !0, i), o;
	}
	_hasCrossTabFeatureFlagIdentityMismatch(e) {
		let t = this.props[E], n = e[E];
		return !L(t) && !L(n) && t !== n;
	}
	_rememberCrossTabStorageFingerprint(e, t, n, r) {
		let i = this._slotWriteState(t);
		i.storageValue = r, t !== tc && (i.persisted = n);
		try {
			i.fingerprint = this._entryFingerprint(e, t);
		} catch {
			i.fingerprint = void 0;
		}
	}
	_mergeCrossTabFeatureFlagProperties(e, t, n) {
		let r = !1;
		return nc.forEach((n) => {
			let i = Ds(n)?.storageGroup;
			if (t === tc && this._splitStorage && i || t !== tc && i !== t) return;
			let a = n in e, o = this._mergePendingCrossTabFeatureFlagChanges(n, a ? e[n] : void 0), s = this._pendingCrossTabFeatureFlagChanges.has(n) ? n in this.props : a;
			s === n in this.props && oc(o, this.props[n]) || (s ? this._setProp(n, o, !1) : this._deleteProp(n, !1), r = !0);
		}), r && n && this._crossTabFeatureFlagHandlers.forEach((e) => e()), r;
	}
	_mergeMetaIdentifierProperties(e) {
		let t = this._storesIdentityInCookie && this._config.cookieWinsOnConflict ? [...uo, ...this._config.cookie_persisted_properties || []] : [];
		ic.forEach((n) => {
			this._metaIdentifierChangePending.has(n) || t.indexOf(n) !== -1 || (n in e ? oc(e[n], this.props[n]) || this._setProp(n, e[n], !1) : n in this.props && this._deleteProp(n, !1));
		});
	}
	_metaIdentifierCookieSyncEnabled() {
		return this._storesIdentityInCookie && this._splitStorageEligible && !this._config.cookieWinsOnConflict;
	}
	_adoptMetaIdentifiersFromCookie() {
		if (!this._metaIdentifierCookieSyncEnabled()) return;
		let e, t;
		try {
			e = J._get(this._name) || void 0;
		} catch {
			return;
		}
		if (e && e !== this._lastSeenMetaIdentifierCookieValue) {
			this._lastSeenMetaIdentifierCookieValue = e;
			try {
				t = mo(JSON.parse(e));
			} catch {
				return;
			}
			ic.forEach((e) => {
				!(e in t) || e in this.props || this._metaIdentifierChangePending.has(e) || this._setProp(e, t[e], !1);
			});
		}
	}
	_rememberMetaIdentifierCookieValue(e) {
		if (this._metaIdentifierCookieSyncEnabled()) try {
			let t = JSON.stringify(ho(e, this._config.cookie_persisted_properties || [])), n = J._get(this._name) || void 0;
			n === t && (this._lastSeenMetaIdentifierCookieValue = n);
		} catch {}
	}
	_reconcileCrossTabFeatureFlagPropertiesBeforeWrite() {
		if (!this._splitStorageEligible) return !1;
		try {
			this._crossTabFeatureFlagIdentityMismatch = !1;
			let e = Y._get(this._name), t = this._slotWriteState(tc), n, r = !1, i = !1;
			if (e !== t.storageValue) {
				if (z(e)) R(t.storageValue) && this._mergeMetaIdentifierProperties({}), t.storageValue = null;
				else {
					if (n = sc(e), this._mergeMetaIdentifierProperties(n), this._crossTabFeatureFlagIdentityMismatch = !this._localIdentityChangePending && this._hasCrossTabFeatureFlagIdentityMismatch(n), this._crossTabFeatureFlagIdentityMismatch) return !1;
					i = this._mergeCrossTabFeatureFlagProperties(n, tc, !1), !this._splitStorage || oc(this._partitionProps().main, n) ? this._rememberCrossTabStorageFingerprint(n, tc, !0, e) : t.storageValue = e, r = !0;
				}
			}
			return this._splitStorage && ws.forEach((e) => {
				let t = Y._get(this._groupEntryName(e)), a = this._slotWriteState(e), o = n || {}, s = r && nc.some((t) => Ds(t)?.storageGroup === e && t in o);
				if (t === a.storageValue && !s) return;
				if (z(t)) return a.storageValue = null, a.persisted = !1, void (s && (i = this._mergeCrossTabFeatureFlagProperties(o, e, !1) || i));
				let c = sc(t);
				i = this._mergeCrossTabFeatureFlagProperties(c, e, !1) || i, this._rememberCrossTabStorageFingerprint(c, e, !0, t);
			}), i;
		} catch {
			return !1;
		}
	}
	_setCrossTabFeatureFlagChangesPending(e, t) {
		this._pendingCrossTabFeatureFlagChanges.set(e, t);
		let n = Ds(e);
		n != null && n.volatile || (this._slotWriteState((this._splitStorage ? n?.storageGroup : void 0) || tc).fingerprint = void 0, this._markGroupDirty(e));
	}
	_markAllCrossTabFeatureFlagChangesPending() {
		nc.forEach((e) => this._pendingCrossTabFeatureFlagChanges.set(e, !0));
	}
	_markLoadedCrossTabFeatureFlagChangesPending() {
		if (this._splitStorageEligible) try {
			let e = Y._get(this._name), t = sc(e);
			this._slotWriteState(tc).storageValue = e, nc.forEach((e) => {
				let n = this._splitStorage ? Ds(e)?.storageGroup : void 0, r = n ? Y._get(this._groupEntryName(n)) : null;
				if (n) {
					let e = this._slotWriteState(n);
					e.storageValue = r, e.persisted = !z(r);
				}
				let i = n && !z(r) ? sc(r) : t;
				e in this.props ? this._markPendingCrossTabFeatureFlagChanges(e, i[e], this.props[e]) : e in i && this._setCrossTabFeatureFlagChangesPending(e, !0);
			});
		} catch {}
	}
	_mergePendingCrossTabFeatureFlagChanges(e, t) {
		let n = this._pendingCrossTabFeatureFlagChanges.get(e);
		if (!n) return t;
		if (!0 === n) return this.props[e];
		if (e === "$active_feature_flags") {
			let r = new Set(F(t) ? t : []), i = new Set(F(this.props[e]) ? this.props[e] : []);
			return n.forEach((e) => i.has(e) ? r.add(e) : r.delete(e)), Array.from(r);
		}
		let r = I(t) ? H({}, t) : {}, i = I(this.props[e]) ? this.props[e] : {};
		return n.forEach((e) => {
			e in i ? r[e] = i[e] : delete r[e];
		}), r;
	}
	_markPendingCrossTabFeatureFlagChanges(e, t, n) {
		if (!rc(e)) return;
		let r = this._pendingCrossTabFeatureFlagChanges.get(e);
		if (!0 === r) return;
		let i = t;
		if (this._splitStorageEligible) try {
			let t = this._splitStorage ? Ds(e)?.storageGroup : void 0, n = t ? this._groupEntryName(t) : this._name;
			i = sc(Y._get(n))[e];
		} catch {}
		let a = new Set(r || []);
		if (e === "$active_feature_flags") {
			if (!L(t) && !F(t) || !L(i) && !F(i) || !F(n)) return void this._setCrossTabFeatureFlagChangesPending(e, !0);
			let r = new Set(t || []), o = new Set(i || []), s = new Set(n);
			(/* @__PURE__ */ new Set([...r, ...s])).forEach((e) => {
				r.has(e) !== s.has(e) && a.add(e);
			}), a.forEach((e) => {
				o.has(e) === s.has(e) && a.delete(e);
			});
		} else {
			if (!I(n)) return void (oc(i, n) ? this._pendingCrossTabFeatureFlagChanges.delete(e) : this._setCrossTabFeatureFlagChangesPending(e, !0));
			{
				if (!L(t) && !I(t) || L(t) && Nt(n) && L(i)) return void this._setCrossTabFeatureFlagChangesPending(e, !0);
				let r = I(t) ? t : {}, o = I(i) ? i : {};
				(/* @__PURE__ */ new Set([...Object.keys(r), ...Object.keys(n)])).forEach((e) => {
					e in r == e in n && oc(r[e], n[e]) || a.add(e);
				}), a.forEach((e) => {
					e in o == e in n && oc(o[e], n[e]) && a.delete(e);
				});
			}
		}
		a.size ? this._setCrossTabFeatureFlagChangesPending(e, a) : this._pendingCrossTabFeatureFlagChanges.delete(e);
	}
	_saveDebounceMs() {
		let e = this._config?.persistence_save_debounce_ms;
		return Ft(e) && e > 0 ? e : 0;
	}
	_rememberCurrentCookieProperties(e) {
		if (this._config.cookieWinsOnConflict && this._config.persistence.toLowerCase() === "localstorage+cookie") {
			if (e) try {
				let t = ho(e, this._config.cookie_persisted_properties || []), n = _o(t, this._config.cookie_persisted_properties || []), r = JSON.stringify(t) + "|" + JSON.stringify(n), i = J._get(this._name) || void 0;
				i && yo(this._name, i) === r && (this._lastSeenCookiePropertiesFingerprint = r, this._lastSeenMainCookieValue = i);
			} catch {}
			else try {
				let e = J._get(this._name) || void 0;
				this._lastSeenCookiePropertiesFingerprint = e ? yo(this._name, e) : void 0, this._lastSeenMainCookieValue = e;
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
			n = J._get(this._name) || void 0;
		} catch {}
		if (!n || n === this._lastSeenMainCookieValue) return !1;
		let r = yo(this._name, n), i;
		try {
			i = mo(JSON.parse(n));
		} catch {
			return !1;
		}
		if ((J._get(this._name) || void 0) !== n) return !1;
		this._lastSeenCookiePropertiesFingerprint = r, this._lastSeenMainCookieValue = n;
		let u = vo(this._name, n), h = [...uo, ...u.properties], _ = {};
		if (Object.keys(i).forEach((e) => {
			let t = i[e];
			(L(t) || z(t) || t === "" || e === "$user_state" && t !== "anonymous" && t !== "identified") && (_[e] = !0, delete i[e]);
		}), Nt(i)) return !1;
		let v = "distinct_id" in i || i.$user_state === "anonymous" || i.$user_state === "identified", y = this.props, b = y[E], x = y[ze], S = K({}, y);
		[...uo, ...e.cookie_persisted_properties || []].forEach((e) => {
			if (h.indexOf(e) !== -1 && !(e in i) && !_[e] && (v || e !== "distinct_id" && e !== "$user_state")) {
				let t = S[e];
				(u.isValid || uo.indexOf(e) === -1 || !1 !== t && t !== 0) && delete S[e];
			}
		}), this.props = K(S, i), nc.forEach((e) => {
			let t = e in this.props;
			e in y === t && oc(y[e], this.props[e]) || (t ? this._markPendingCrossTabFeatureFlagChanges(e, y[e], this.props[e]) : this._setCrossTabFeatureFlagChangesPending(e, !0));
		}), !v || "$user_state" in i || "$user_state" in this.props || this._setProp(ze, ot);
		let C = this.props[E], w = this.props[ze];
		return !v || C === b && w === x || (this._localIdentityChangePending = !0, this._cookieIdentityChangePending = !0, X._set($s(this._name), !0), this._deleteProp(p), this._deleteProp(a), this._deleteProp(d), this._deleteProp(o), this._deleteProp(g), this._deleteProp(l), this._deleteProp(c), this._deleteProp(s), this._deleteProp(m), w !== "anonymous" || x !== "identified" && i.$user_state !== "anonymous" && (L(b) || C === b) || (cc(this.props, i), this._deleteProp(f)), w === "identified" ? this.props.$user_id = C : delete this.props.$user_id, this._deleteProp(ie)), !0;
	}
	consumeCookieIdentityChange() {
		let e = $s(this._name), t = this._cookieIdentityChangePending || !!X._get(e);
		return this._cookieIdentityChangePending = !1, t && X._remove(e), t;
	}
	_beginCookieSyncSuppression(e = !1) {
		return !(this._cookieSyncSuppressed || this._disabled && !e || !this._config.cookieWinsOnConflict || this._config.persistence.toLowerCase() !== "localstorage+cookie" || (this._cookieSyncSuppressed = !0, 0));
	}
	_publishSuppressedCookieSnapshot() {
		this._cookieSyncSuppressed && (L(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), delete this._slotState[tc], this._writeNow(!0));
	}
	_endCookieSyncSuppression(e = !0) {
		if (this._cookieSyncSuppressed) try {
			e ? this._publishSuppressedCookieSnapshot() : L(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0);
		} finally {
			this._cookieSyncSuppressed = !1;
		}
	}
	isDisabled() {
		return !!this._disabled;
	}
	_buildStorage(e) {
		Qs.indexOf(e.persistence.toLowerCase()) === -1 && (U.critical("Unknown persistence type " + e.persistence + "; falling back to localStorage+cookie"), e.persistence = "localStorage+cookie");
		let t = ((e = [], t = !1, n = () => !1) => {
			let r = [...uo, ...e];
			return H(H({}, Y), {}, {
				_parse(e) {
					try {
						let i, a = {};
						try {
							i = J._get(e) || void 0, a = i ? mo(JSON.parse(i)) : {};
						} catch {}
						let o = JSON.parse(Y._get(e) || "{}"), s;
						if (t) {
							let t = vo(e, i), n = [...uo, ...t.properties], c = {};
							Object.keys(a).forEach((e) => {
								let t = a[e];
								z(t) || t === "" || e === "$user_state" && t !== "anonymous" && t !== "identified" || (c[e] = t);
							});
							let l = "distinct_id" in c || c.$user_state === "anonymous" || c.$user_state === "identified";
							if (Object.keys(c).length > 0) {
								let e = o[E], i = o.$user_state ?? ot;
								r.forEach((e) => {
									if (n.indexOf(e) !== -1 && !(e in a) && (l || e !== "distinct_id" && e !== "$user_state")) {
										let n = o[e];
										(t.isValid || uo.indexOf(e) === -1 || !1 !== n && n !== 0) && delete o[e];
									}
								}), !l || "$user_state" in a || "$user_state" in o || (o[ze] = ot), !l || ("distinct_id" in c ? c[E] : o[E]) === e && ("$user_state" in c ? c[ze] : o[ze]) === i || (lo.forEach((e) => delete o[e]), c.$user_state === "identified" && "distinct_id" in c ? o.$user_id = c[E] : delete o.$user_id, c.$user_state !== "identified" && (delete o[je], delete o[f]), delete o.__alias);
							}
							s = K(o, c);
						} else s = K(a, o);
						return n() || Y._set(e, s), s;
					} catch {}
					return null;
				},
				_set(n, r, i, a, o, s) {
					let c = Y._set(n, r, void 0, void 0, s);
					try {
						let l = ho(r, e);
						if (Object.keys(l).length) {
							if (t) {
								let t = fo(n), u = _o(l, e);
								if (J._set(t, u, i, a, o, s), J._get(t) !== JSON.stringify(u)) {
									J._remove(t, a);
									let e = ho(r);
									return J._set(n, e, i, a, o, s), c;
								}
							}
							J._set(n, l, i, a, o, s);
						}
					} catch (e) {
						Y._error(e);
					}
					return c;
				},
				_remove(e, t) {
					try {
						j?.localStorage.removeItem(e), J._remove(e, t), J._remove(fo(e), t);
					} catch (e) {
						Y._error(e);
					}
				}
			});
		})(e.cookie_persisted_properties || [], e.cookieWinsOnConflict, () => !!this._disabled), n, r = !1, i = !1, a = e.persistence.toLowerCase();
		return a === "localstorage" && Y._is_supported() ? (n = Y, i = !0) : a === "localstorage+cookie" && t._is_supported() ? (n = t, i = !0, r = !0) : a === "sessionstorage" && X._is_supported() ? n = X : a === "memory" ? n = xo : a === "cookie" && J._is_supported() ? (n = J, r = !0) : t._is_supported() ? (n = t, i = !0, r = !0) : J._is_supported() ? (n = J, r = !0) : n = xo, this._splitStorageEligible = i, this._storesIdentityInCookie = r, n;
	}
	_groupEntryName(e) {
		return `${this._name}__${e}`;
	}
	_resolveSplitStorage(e) {
		return this._splitStorageEligible && !!e.split_storage;
	}
	properties() {
		let e = {};
		return G(this.props, (t, n) => {
			let r = Ds(n);
			if (!r || r.exposure === "event") {
				var i;
				if (r != null && (i = r.shouldSkipFromEventProperties) != null && i.call(r, t)) return;
				e[n] = t;
			}
		}), e;
	}
	load(e = !1) {
		if (this._disabled && !e) return;
		let t = this._config.cookieWinsOnConflict && this._config.persistence.toLowerCase() === "localstorage+cookie", n = t ? Y._parse(this._name) : null, r = {};
		if (t) try {
			r = mo(J._parse(this._name)), G(r, (e, t) => {
				(L(e) || z(e) || e === "") && delete r[t];
			});
		} catch {}
		let i = this._storage._parse(this._name);
		if (i && (this.props = K({}, i)), this._splitStorage && this._loadGroupEntries(), t && i) {
			let e = n?.[E], t = n?.$user_state ?? ot, a = i[E], o = i.$user_state ?? ot;
			if (a !== e || o !== t) {
				this._cookieIdentityChangePending = !0, this._disabled || X._set($s(this._name), !0);
				let n = K({}, this.props);
				lo.forEach((e) => delete n[e]), o !== "anonymous" || t !== "identified" && r.$user_state !== "anonymous" && (L(e) || a === e) || (cc(n, r), delete n[f]), this.props = n;
				let i = /* @__PURE__ */ new Set();
				lo.forEach((e) => {
					let t = Ds(e)?.storageGroup;
					t && i.add(t);
				}), i.forEach((e) => {
					if (this._disabled) return;
					let t = {};
					G(this.props, (n, r) => {
						Ds(r)?.storageGroup === e && (t[r] = n);
					}), Nt(t) ? (Y._remove(this._groupEntryName(e)), this._slotState[e] = {}) : Y._set(this._groupEntryName(e), t) && (this._slotState[e] = {
						persisted: !0,
						fingerprint: this._entryFingerprint(t, e)
					});
				});
			}
		}
		X._get($s(this._name)) && (this._cookieIdentityChangePending = !0);
	}
	_loadGroupEntries() {
		for (let e of ws) {
			let t = Y._parse(this._groupEntryName(e));
			if (t && !Nt(t)) {
				let n = this._slotWriteState(e);
				n.persisted = !0, this._mainCarriesGroupKey(e) || (n.fingerprint = this._entryFingerprint(t, e)), this._groupEntryIsStale(e, t) || K(this.props, t);
			}
		}
	}
	_mainCarriesGroupKey(e) {
		return Object.keys(this.props).some((t) => Ds(t)?.storageGroup === e);
	}
	_groupEntryIsStale(e, t) {
		let n = Zs[e];
		if (!n) return !1;
		let r = t[n], i = this.props[n];
		return Ft(r) && Ft(i) && i > r;
	}
	refreshKey(e) {
		this._refreshKeys([e]);
	}
	_refreshKeys(e) {
		if (this._disabled) return;
		let t, n = !1, r = () => (n ||= (t = this._storage._parse(this._name), !0), t);
		e.forEach((e) => {
			if (this._metaIdentifierChangePending.has(e)) return;
			let t = this._splitStorage ? Ds(e)?.storageGroup : void 0, n = t ? Y._parse(this._groupEntryName(t)) : r();
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
		this._disabled || (this._usesMetaIdentifierSnapshotRefresh() ? this._refreshMetaIdentifiersIfStorageChanged() : this._refreshKeys(ic));
	}
	_refreshMetaIdentifiersIfStorageChanged() {
		let e = this._storageSnapshot();
		(L(e) || e !== this._metaIdentifierStorageSnapshot) && (this._refreshKeys(ic), this._rememberMetaIdentifierStorageSnapshot(e));
	}
	_rememberMetaIdentifierStorageSnapshot(e = this._storageSnapshot()) {
		this._metaIdentifierStorageSnapshot = this._metaIdentifierChangePending.size === 0 ? e : void 0;
	}
	refreshMetaIdentifiersBeforeCapture() {
		this._disabled || this._cookieSyncSuppressed || (this._usesMetaIdentifierSnapshotRefresh() || this._adoptMetaIdentifiersFromCookie(), this._refreshMetaIdentifiersIfStorageChanged());
	}
	_usesMetaIdentifierSnapshotRefresh() {
		return this._storage === J || this._storage === X || this._storage === xo;
	}
	_storageSnapshot() {
		let e = this._storage._get(this._name);
		return R(e) ? e : void 0;
	}
	save() {
		if (this._disabled) return;
		let e = this._saveDebounceMs();
		e > 0 ? L(this._pendingSaveTimer) && (this._pendingSaveTimer = setTimeout(() => {
			this._pendingSaveTimer = void 0, this._writeNow();
		}, e)) : this._writeNow();
	}
	flush() {
		L(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0, this._writeNow());
	}
	_writeNow(e = !1) {
		if (this._disabled || this._cookieSyncSuppressed && !e) return;
		e || (this.syncCookieProperties(), this._usesMetaIdentifierSnapshotRefresh() && this.refreshMetaIdentifiers());
		let t = !e && !this._storageMigrationInProgress;
		t || (this._crossTabFeatureFlagIdentityMismatch = !1);
		let n = !!t && this._reconcileCrossTabFeatureFlagPropertiesBeforeWrite();
		if (this._crossTabFeatureFlagIdentityMismatch) return void (this._config.debug && U.warn("skipping persistence write because storage belongs to a different distinct ID"));
		if (e || this._adoptMetaIdentifiersFromCookie(), this._splitStorage) return this._writeNowSplit(), void (n && this._crossTabFeatureFlagHandlers.forEach((e) => e()));
		let r = this._writeEntry(this._storage, this._name, this.props, tc);
		r === "written" && (this._rememberCurrentCookieProperties(this.props), this._rememberMetaIdentifierCookieValue(this.props)), r !== "failed" && (this._pendingCrossTabFeatureFlagChanges.clear(), this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear()), r === "written" && this._rememberMetaIdentifierStorageSnapshot(), n && this._crossTabFeatureFlagHandlers.forEach((e) => e());
	}
	_writeNowSplit() {
		let { main: e, groups: t } = this._partitionProps(), n = this._writeEntry(this._storage, this._name, e, tc);
		n === "written" && (this._rememberCurrentCookieProperties(e), this._rememberMetaIdentifierCookieValue(e)), n !== "failed" && (this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear(), nc.forEach((e) => {
			var t;
			(t = Ds(e)) != null && t.storageGroup || this._pendingCrossTabFeatureFlagChanges.delete(e);
		})), n === "written" && this._rememberMetaIdentifierStorageSnapshot();
		for (let e of ws) {
			let n = t[e];
			if (Nt(n) && !this._slotState[e]?.persisted) {
				nc.forEach((t) => {
					Ds(t)?.storageGroup === e && this._pendingCrossTabFeatureFlagChanges.delete(t);
				});
				continue;
			}
			let r = this._writeEntry(Y, this._groupEntryName(e), n, e);
			r !== "failed" && nc.forEach((t) => {
				let n = Ds(t);
				n?.storageGroup !== e || r !== "written" && n.volatile || this._pendingCrossTabFeatureFlagChanges.delete(t);
			});
		}
	}
	_partitionProps() {
		let e = {}, t = {
			flags: {},
			surveys: {}
		};
		return G(this.props, (n, r) => {
			let i = Ds(r)?.storageGroup;
			i ? t[i][r] = n : e[r] = n;
		}), {
			main: e,
			groups: t
		};
	}
	_entryFingerprint(e, t) {
		if (t === tc) return JSON.stringify(e) + "|" + this._expire_days + "|" + this._cross_subdomain + "|" + this._secure;
		let n = {};
		return G(e, (e, t) => {
			n[t] = Ds(t)?.volatile ? "__volatile__" : e;
		}), JSON.stringify(n);
	}
	_writeEntry(e, t, n, r) {
		let i = this._slotWriteState(r);
		if (r !== tc && !i.dirty && !L(i.fingerprint)) return "skipped";
		let a;
		try {
			if (a = this._entryFingerprint(n, r), a === i.fingerprint) return i.dirty = !1, "skipped";
		} catch {
			a = void 0;
		}
		return e._set(t, n, this._expire_days, this._cross_subdomain, this._secure, this._config.debug) ? (i.dirty = !1, r !== tc && (i.persisted = !0), L(a) || (i.fingerprint = a), this._splitStorageEligible && (i.storageValue = Y._get(t)), "written") : (this._config.debug && U.warn(`failed to persist storage entry "${t}"; will retry on next save`), "failed");
	}
	remove({ keepGroupEntries: e = !1 } = {}) {
		if (this._markAllCrossTabFeatureFlagChangesPending(), L(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), this._storage._remove(this._name, !1), this._storage._remove(this._name, !0), !e && this._ownsSplitStorage) for (let e of ws) Y._remove(this._groupEntryName(e));
		e ? delete this._slotState[tc] : this._slotState = {}, this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0, this._lastSeenMetaIdentifierCookieValue = void 0;
	}
	clear() {
		this.remove(), this.props = {};
	}
	register_once(e, t, n) {
		if (I(e)) {
			this.syncCookieProperties(), L(t) && (t = "None"), this._expire_days = L(n) ? this._default_expiry : n;
			let r = !1;
			if (G(e, (e, n) => {
				this.props.hasOwnProperty(n) && this.props[n] !== t || (this._setProp(n, e), r = !0);
			}), r) return this.save(), !0;
		}
		return !1;
	}
	register(e, t) {
		if (I(e)) {
			this.syncCookieProperties(), this._expire_days = L(t) ? this._default_expiry : t;
			let n = !1;
			if (G(e, (t, r) => {
				e.hasOwnProperty(r) && (this.props[r] !== t || I(t) || F(t)) && (this._setProp(r, t), n = !0);
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
		let e = M?.URL;
		if (e === this._campaign_params_url) return;
		let t = Vs(this._config.custom_campaign_params, this._config.mask_personal_data_properties, this._config.custom_personal_data_properties), n = !Nt(Ga(t));
		return n && this.register(t), this._campaign_params_url = e, n ? t : void 0;
	}
	update_search_keyword() {
		this.register(function() {
			let e = M?.referrer;
			return e ? Us(e) : {};
		}());
	}
	update_referrer_info() {
		this.register_once({
			$referrer: qs(),
			$referring_domain: M?.referrer && ks(M.referrer)?.host || Ks
		}, void 0);
	}
	set_initial_person_info() {
		if (this.props.$initial_campaign_params || this.props.$initial_referrer_info) return;
		let e = Js(this._config.mask_personal_data_properties, this._config.custom_personal_data_properties, this._config.disable_capture_url_hashes);
		this.register_once({ [We]: this._storesIdentityInCookie ? {
			r: ec(e.r),
			u: e.u ? ec(e.u) : void 0
		} : e }, void 0);
	}
	get_initial_props() {
		let e = {};
		G([Ue, He], (t) => {
			let n = this.props[t];
			n && G(n, function(t, n) {
				e["$initial_" + Dt(n)] = t;
			});
		});
		let t = this.props[We];
		return t && K(e, function(e, t = !1) {
			let n = Ys(e, t), r = {};
			return G(n, function(e, t) {
				r[`$initial_${Dt(t)}`] = e;
			}), r;
		}(t, this._config.disable_capture_url_hashes)), e;
	}
	safe_merge(e) {
		return G(this.props, function(t, n) {
			n in e || (e[n] = t);
		}), e;
	}
	update_config(e, t, n) {
		let r = e.persistence !== t.persistence, i = !((e, t) => {
			if (e.length !== t.length) return !1;
			let n = [...e].sort(), r = [...t].sort();
			return n.every((e, t) => e === r[t]);
		})(e.cookie_persisted_properties || [], t.cookie_persisted_properties || []), a = r || i, o = e.cookieWinsOnConflict !== t.cookieWinsOnConflict, s = e.disable_persistence || !!n, c = !!this._disabled && !s;
		s || this._syncCookieProperties(t, c), this._config = e, !s && (r || i || o) && (this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0, this._lastSeenMetaIdentifierCookieValue = void 0, this._syncCookieProperties(H(H({}, e), {}, { cookie_persisted_properties: t.cookie_persisted_properties }), c));
		let l = a || o ? this._buildStorage(e) : this._storage;
		this._truncateExistingPersonInfoForCookie();
		let u = this._resolveSplitStorage(e), d = a || u !== this._splitStorage, f = !s && (d || e.cross_subdomain_cookie !== this._cross_subdomain || e.secure_cookie !== this._secure) && this._beginCookieSyncSuppression(c);
		this._storageMigrationInProgress = d;
		try {
			if (this._default_expiry = this._expire_days = e.cookie_expiration, this.set_disabled(s), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie), d) {
				let e = this.props;
				this.clear(), this._storage = l, this._splitStorage = u, this.props = e, this.save();
			} else o && (this._storage = l, s || (delete this._slotState[tc], this._writeNow()));
		} finally {
			this._storageMigrationInProgress = !1, f && this._endCookieSyncSuppression();
		}
	}
	_truncateExistingPersonInfoForCookie() {
		let e = this.props[We];
		if (!this._storesIdentityInCookie || !I(e) || typeof e.r != "string") return;
		let t = ec(e.r), n = typeof e.u == "string" ? ec(e.u) : e.u;
		t === e.r && n === e.u || this._setProp(We, H(H({}, e), {}, {
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
		n[e] = t, this._setProp(le, n), this.save();
	}
	remove_event_timer(e) {
		let t = this.props.__timers || {}, n = t[e];
		return L(n) || (delete t[e], this._setProp(le, t), this.save()), n;
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
		this.props[e] = t, n && (e !== "distinct_id" && e !== "$user_state" || i === t || (this._localIdentityChangePending = !0), ac(e) && !oc(i, t) && this._metaIdentifierChangePending.add(e), this._markPendingCrossTabFeatureFlagChanges(e, i, t), (r = Ds(e)) != null && r.volatile || this._markGroupDirty(e));
	}
	_deleteProp(e, t = !0) {
		delete this.props[e], t && (rc(e) && this._setCrossTabFeatureFlagChangesPending(e, !0), ac(e) && this._metaIdentifierChangePending.add(e), this._markGroupDirty(e));
	}
	_markGroupDirty(e) {
		let t = Ds(e)?.storageGroup;
		t && (this._slotWriteState(t).dirty = !0);
	}
	_slotWriteState(e) {
		return this._slotState[e] || (this._slotState[e] = {});
	}
}, uc = {
	GZipJS: "gzip-js",
	Base64: "base64"
}, dc = {
	Activation: "events",
	Cancellation: "cancelEvents"
}, fc = {
	Popover: "popover",
	API: "api",
	Widget: "widget",
	ExternalSurvey: "external_survey"
}, pc = {
	SHOWN: "survey shown",
	DISMISSED: "survey dismissed",
	SENT: "survey sent",
	ABANDONED: "survey abandoned"
}, mc = {
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
}, hc = {
	Popover: "popover",
	Inline: "inline"
};
function gc(e) {
	let t = !0;
	return { dispose() {
		if (t) {
			t = !1;
			let n = e();
			n && Mt(n.then) && n.then(void 0, () => {});
		}
	} };
}
var _c = {
	SHOWN: "product tour shown",
	DISMISSED: "product tour dismissed",
	COMPLETED: "product tour completed",
	STEP_SHOWN: "product tour step shown",
	STEP_COMPLETED: "product tour step completed",
	BUTTON_CLICKED: "product tour button clicked",
	STEP_SELECTOR_FAILED: "product tour step selector failed",
	BANNER_CONTAINER_SELECTOR_FAILED: "product tour banner container selector failed",
	BANNER_ACTION_CLICKED: "product tour banner action clicked"
}, vc = {
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
}, yc = W("[RateLimiter]"), bc = class {
	constructor(e) {
		this.serverLimits = {}, this.lastEventRateLimited = !1, this.checkForLimiting = (e) => {
			let t = e.text;
			if (t && t.length) try {
				(JSON.parse(t).quota_limited || []).forEach((e) => {
					yc.info(`${e || "events"} is quota limited.`), this.serverLimits[e] = (/* @__PURE__ */ new Date()).getTime() + 6e4;
				});
			} catch (e) {
				yc.warn(`could not rate limit - continuing. Error: "${e?.message}"`, { text: t });
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
	get isClientRateLimited() {
		return 1 > this._refilledBucket().tokens;
	}
	clientRateLimitContext(e = !1) {
		var t;
		let n = this._refilledBucket(), r = 1 > n.tokens;
		if (r || e || (n.tokens = Math.max(0, n.tokens - 1)), r && !e) {
			let e = (Ft(n.dropped) ? n.dropped : 0) + 1;
			n.dropped = e, !this.lastEventRateLimited && this._captureWarning(e) && (n.dropped = 0);
		}
		return this.lastEventRateLimited = r, (t = this.instance.persistence) == null || t.set_property("$capture_rate_limit", n), {
			isRateLimited: r,
			remainingTokens: n.tokens
		};
	}
	_refilledBucket() {
		let { captureEventsBurstLimit: e, captureEventsPerSecond: t } = this, n = (/* @__PURE__ */ new Date()).getTime(), r = this.instance.persistence?.get_property(Ve), i = r ? H({}, r) : {
			tokens: e,
			last: n
		};
		return i.tokens += Math.max(0, n - i.last) / 1e3 * t, i.last = Math.max(i.last, n), i.tokens > e && (i.tokens = e), i;
	}
	_isPropertyAllowed(e) {
		let t = this.instance.config.property_denylist;
		return !F(t) || !t.includes(e);
	}
	_triggeringPage() {
		if (this._isPropertyAllowed("$current_url") && this._isPropertyAllowed("$pathname") && ht?.pathname) return `${ht.origin ?? ""}${ht.pathname}`;
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
}, xc = W("[RemoteConfig]"), Sc = class {
	constructor(e) {
		this._instance = e;
	}
	get remoteConfig() {
		var e;
		return (e = N._POSTHOG_REMOTE_CONFIG) == null || (e = e[this._instance.config.token]) == null ? void 0 : e.config;
	}
	_loadRemoteConfigJs(e) {
		var t, n;
		N.__PosthogExtensions__?.loadExternalDependency ? (t = N.__PosthogExtensions__) == null || (n = t.loadExternalDependency) == null || n.call(t, this._instance, "remote-config", () => e(this.remoteConfig)) : e();
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
			if (this.remoteConfig) return xc.info("Using preloaded remote config", this.remoteConfig), void this._onRemoteConfig(this.remoteConfig);
			if (this._instance._shouldDisableFlags()) return void xc.warn("Remote config is disabled. Falling back to local config.");
			this._loadRemoteConfigJs((e) => {
				if (!e) return xc.info("No config found after loading remote JS config. Falling back to JSON."), void this._loadRemoteConfigJSON((e) => {
					this._onRemoteConfig(e.json, e);
				});
				this._onRemoteConfig(e);
			});
		} catch (e) {
			xc.error("Error loading remote config", e), this._onRemoteConfig();
		}
	}
	_onRemoteConfig(e, t) {
		!e && t && (t.statusCode === 0 ? t.error || xc.warn("Failed to fetch remote config from PostHog.") : xc.error("Failed to fetch remote config from PostHog."));
		try {
			this._instance._onRemoteConfig(e ? {
				ok: !0,
				config: e
			} : { ok: !1 });
		} catch (e) {
			xc.error("Error applying remote config", e);
		}
		if (!1 !== e?.hasFeatureFlags && !this._instance.config.advanced_disable_feature_flags_on_first_load) try {
			var n;
			(n = this._instance.featureFlags) == null || n.ensureFlagsLoaded();
		} catch (e) {
			xc.error("Error loading feature flags", e);
		}
	}
}, Cc = Uint8Array, wc = Uint16Array, Tc = Uint32Array, Ec = new Cc([
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
]), Dc = new Cc([
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
]), Oc = new Cc([
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
]), kc = function(e, t) {
	for (var n = new wc(31), r = 0; 31 > r; ++r) n[r] = t += 1 << e[r - 1];
	var i = new Tc(n[30]);
	for (r = 1; 30 > r; ++r) for (var a = n[r]; n[r + 1] > a; ++a) i[a] = a - n[r] << 5 | r;
	return [n, i];
}, Ac = kc(Ec, 2), jc = Ac[1];
Ac[0][28] = 258, jc[258] = 28;
for (var Mc = kc(Dc, 0)[1], Nc = new wc(32768), Z = 0; 32768 > Z; ++Z) {
	var Pc = (43690 & Z) >>> 1 | (21845 & Z) << 1;
	Nc[Z] = ((65280 & (Pc = (61680 & (Pc = (52428 & Pc) >>> 2 | (13107 & Pc) << 2)) >>> 4 | (3855 & Pc) << 4)) >>> 8 | (255 & Pc) << 8) >>> 1;
}
var Fc = function(e, t, n) {
	for (var r = e.length, i = 0, a = new wc(t); r > i; ++i) ++a[e[i] - 1];
	var o, s = new wc(t);
	for (i = 0; t > i; ++i) s[i] = s[i - 1] + a[i - 1] << 1;
	if (n) {
		o = new wc(1 << t);
		var c = 15 - t;
		for (i = 0; r > i; ++i) if (e[i]) for (var l = i << 4 | e[i], u = t - e[i], d = s[e[i] - 1]++ << u, f = d | (1 << u) - 1; f >= d; ++d) o[Nc[d] >>> c] = l;
	} else for (o = new wc(r), i = 0; r > i; ++i) o[i] = Nc[s[e[i] - 1]++] >>> 15 - e[i];
	return o;
}, Ic = new Cc(288);
for (Z = 0; 144 > Z; ++Z) Ic[Z] = 8;
for (Z = 144; 256 > Z; ++Z) Ic[Z] = 9;
for (Z = 256; 280 > Z; ++Z) Ic[Z] = 7;
for (Z = 280; 288 > Z; ++Z) Ic[Z] = 8;
var Lc = new Cc(32);
for (Z = 0; 32 > Z; ++Z) Lc[Z] = 5;
var Rc = Fc(Ic, 9, 0), zc = Fc(Lc, 5, 0), Bc = function(e) {
	return (e / 8 | 0) + (7 & e && 1);
}, Vc = function(e, t, n) {
	(t == null || 0 > t) && (t = 0), (n == null || n > e.length) && (n = e.length);
	var r = new (e instanceof wc ? wc : e instanceof Tc ? Tc : Cc)(n - t);
	return r.set(e.subarray(t, n)), r;
}, Hc = function(e, t, n) {
	var r = t / 8 | 0;
	e[r] |= n <<= 7 & t, e[r + 1] |= n >>> 8;
}, Uc = function(e, t, n) {
	var r = t / 8 | 0;
	e[r] |= n <<= 7 & t, e[r + 1] |= n >>> 8, e[r + 2] |= n >>> 16;
}, Wc = function(e, t) {
	for (var n = [], r = 0; e.length > r; ++r) e[r] && n.push({
		s: r,
		f: e[r]
	});
	var i = n.length, a = n.slice();
	if (!i) return [new Cc(0), 0];
	if (i == 1) {
		var o = new Cc(n[0].s + 1);
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
	var p = new wc(f + 1), m = Gc(n[u - 1], p, 0);
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
	return [new Cc(p), m];
}, Gc = function(e, t, n) {
	return e.s == -1 ? Math.max(Gc(e.l, t, n + 1), Gc(e.r, t, n + 1)) : t[e.s] = n;
}, Kc = function(e) {
	for (var t = e.length; t && !e[--t];);
	for (var n = new wc(++t), r = 0, i = e[0], a = 1, o = function(e) {
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
}, qc = function(e, t) {
	for (var n = 0, r = 0; t.length > r; ++r) n += e[r] * t[r];
	return n;
}, Jc = function(e, t, n) {
	var r = n.length, i = Bc(t + 2);
	e[i] = 255 & r, e[i + 1] = r >>> 8, e[i + 2] = 255 ^ e[i], e[i + 3] = 255 ^ e[i + 1];
	for (var a = 0; r > a; ++a) e[i + a + 4] = n[a];
	return 8 * (i + 4 + r);
}, Yc = function(e, t, n, r, i, a, o, s, c, l, u) {
	Hc(t, u++, n), ++i[256];
	for (var d = Wc(i, 15), f = d[0], p = d[1], m = Wc(a, 15), h = m[0], g = m[1], _ = Kc(f), v = _[0], y = _[1], b = Kc(h), x = b[0], S = b[1], C = new wc(19), w = 0; v.length > w; ++w) C[31 & v[w]]++;
	for (w = 0; x.length > w; ++w) C[31 & x[w]]++;
	for (var ee = Wc(C, 7), T = ee[0], te = ee[1], E = 19; E > 4 && !T[Oc[E - 1]]; --E);
	var ne, re, ie, ae, oe = l + 5 << 3, D = qc(i, Ic) + qc(a, Lc) + o, se = qc(i, f) + qc(a, h) + o + 14 + 3 * E + qc(C, T) + (2 * C[16] + 3 * C[17] + 7 * C[18]);
	if (D >= oe && se >= oe) return Jc(t, u, e.subarray(c, c + l));
	if (Hc(t, u, 1 + (D > se)), u += 2, D > se) {
		ne = Fc(f, p, 0), re = f, ie = Fc(h, g, 0), ae = h;
		var ce = Fc(T, te, 0);
		for (Hc(t, u, y - 257), Hc(t, u + 5, S - 1), Hc(t, u + 10, E - 4), u += 14, w = 0; E > w; ++w) Hc(t, u + 3 * w, T[Oc[w]]);
		u += 3 * E;
		for (var le = [v, x], ue = 0; 2 > ue; ++ue) {
			var de = le[ue];
			for (w = 0; de.length > w; ++w) Hc(t, u, ce[fe = 31 & de[w]]), u += T[fe], fe > 15 && (Hc(t, u, de[w] >>> 5 & 127), u += de[w] >>> 12);
		}
	} else ne = Rc, re = Ic, ie = zc, ae = Lc;
	for (w = 0; s > w; ++w) if (r[w] > 255) {
		var fe;
		Uc(t, u, ne[257 + (fe = r[w] >>> 18 & 31)]), u += re[fe + 257], fe > 7 && (Hc(t, u, r[w] >>> 23 & 31), u += Ec[fe]);
		var pe = 31 & r[w];
		Uc(t, u, ie[pe]), u += ae[pe], pe > 3 && (Uc(t, u, r[w] >>> 5 & 8191), u += Dc[pe]);
	} else Uc(t, u, ne[r[w]]), u += re[r[w]];
	return Uc(t, u, ne[256]), u + re[256];
}, Xc = new Tc([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]), Zc = new Cc(0), Qc = function() {
	for (var e = new Tc(256), t = 0; 256 > t; ++t) {
		for (var n = t, r = 9; --r;) n = (1 & n && 3988292384) ^ n >>> 1;
		e[t] = n;
	}
	return e;
}(), $c = function(e, t, n) {
	for (; n; ++t) e[t] = n, n >>>= 8;
};
function el(e, t) {
	t === void 0 && (t = {});
	var n = function() {
		var e = 4294967295;
		return {
			p(t) {
				for (var n = e, r = 0; t.length > r; ++r) n = Qc[255 & n ^ t[r]] ^ n >>> 8;
				e = n;
			},
			d() {
				return 4294967295 ^ e;
			}
		};
	}(), r = e.length;
	n.p(e);
	var i, a, o, s, c, l, u = (s = 10 + ((i = t).filename && i.filename.length + 1 || 0), c = 8, function(e, t, n, r, i, a) {
		var o = e.length, s = new Cc(r + o + 5 * (1 + Math.floor(o / 7e3)) + i), c = s.subarray(r, s.length - i), l = 0;
		if (!t || 8 > o) for (var u = 0; o >= u; u += 65535) {
			var d = u + 65535;
			o > d ? l = Jc(c, l, e.subarray(u, d)) : (c[u] = a, l = Jc(c, l, e.subarray(u, o)));
		}
		else {
			for (var f = Xc[t - 1], p = f >>> 13, m = 8191 & f, h = (1 << n) - 1, g = new wc(32768), _ = new wc(h + 1), v = Math.ceil(n / 3), y = 2 * v, b = function(t) {
				return (e[t] ^ e[t + 1] << v ^ e[t + 2] << y) & h;
			}, x = new Tc(25e3), S = new wc(288), C = new wc(32), w = 0, ee = 0, T = (u = 0, 0), te = 0, E = 0; o > u; ++u) {
				var ne = b(u), re = 32767 & u, ie = _[ne];
				if (g[re] = ie, _[ne] = re, u >= te) {
					var ae = o - u;
					if ((w > 7e3 || T > 24576) && ae > 423) {
						l = Yc(e, c, 0, x, S, C, ee, T, E, u - E, l), T = w = ee = 0, E = u;
						for (var oe = 0; 286 > oe; ++oe) S[oe] = 0;
						for (oe = 0; 30 > oe; ++oe) C[oe] = 0;
					}
					var D = 2, se = 0, ce = m, le = re - ie & 32767;
					if (ae > 2 && ne == b(u - le)) for (var ue = Math.min(p, ae) - 1, de = Math.min(32767, u), fe = Math.min(258, ae); de >= le && --ce && re != ie;) {
						if (e[u + D] == e[u + D - le]) {
							for (var pe = 0; fe > pe && e[u + pe] == e[u + pe - le]; ++pe);
							if (pe > D) {
								if (D = pe, se = le, pe > ue) break;
								var me = Math.min(le, pe - 2), he = 0;
								for (oe = 0; me > oe; ++oe) {
									var O = u - le + oe + 32768 & 32767, ge = O - g[O] + 32768 & 32767;
									ge > he && (he = ge, ie = O);
								}
							}
						}
						le += (re = ie) - (ie = g[re]) + 32768 & 32767;
					}
					if (se) {
						x[T++] = 268435456 | jc[D] << 18 | Mc[se];
						var k = 31 & jc[D], _e = 31 & Mc[se];
						ee += Ec[k] + Dc[_e], ++S[257 + k], ++C[_e], te = u + D, ++w;
					} else x[T++] = e[u], ++S[e[u]];
				}
			}
			l = Yc(e, c, a, x, S, C, ee, T, E, u - E, l), a || (l = Jc(c, l, Zc));
		}
		return Vc(s, 0, r + Bc(l) + i);
	}(a = e, (o = t).level == null ? 6 : o.level, o.mem == null ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(a.length)))) : 12 + o.mem, s, c, !l)), d = u.length;
	return function(e, t) {
		var n = t.filename;
		if (e[0] = 31, e[1] = 139, e[2] = 8, e[8] = 2 > t.level ? 4 : t.level == 9 ? 2 : 0, e[9] = 3, t.mtime != 0 && $c(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), n) {
			e[3] = 8;
			for (var r = 0; n.length >= r; ++r) e[r + 10] = n.charCodeAt(r);
		}
	}(u, t), $c(u, d - 8, n.d()), $c(u, d - 4, r), u;
}
var tl = !!_t || !!gt, nl = /* @__PURE__ */ new WeakMap(), rl = "text/plain", il = 0, al = !1, ol = (e, t) => {
	let [n, r] = e.split("#"), [i, a] = n.split("?");
	if (!a) return e;
	let o = a.split("&").filter((e) => e.split("=")[0] !== t).join("&");
	return `${i}${o ? `?${o}` : ""}${r ? `#${r}` : ""}`;
}, sl = (e, t, n = !0) => {
	let [r, i] = e.split("?"), a = H({}, t), o = i?.split("&").map((e) => {
		var t;
		let [r, i] = e.split("="), o = n && (t = a[r]) != null ? t : i;
		return delete a[r], `${r}=${o}`;
	}) ?? [], s = function(e, t = "&") {
		let n, r, i = [];
		return G(e, function(e, t) {
			L(e) || L(t) || t === "undefined" || (n = encodeURIComponent(((e) => e instanceof File)(e) ? e.name : e.toString()), r = encodeURIComponent(t), i[i.length] = r + "=" + n);
		}), i.join(t);
	}(a);
	return s && o.push(s), o.length > 0 ? `${r}?${o.join("&")}` : r;
}, cl = (e) => {
	if (e._encodedBody) return e._encodedBody;
	let { data: t, compression: n } = e;
	if (!t) return;
	if (n === uc.GZipJS) {
		let e = el(function(e) {
			var t = e.length;
			if (typeof TextEncoder < "u") return new TextEncoder().encode(e);
			for (var n = new Cc(e.length + (e.length >>> 1)), r = 0, i = function(e) {
				n[r++] = e;
			}, a = 0; t > a; ++a) {
				if (r + 5 > n.length) {
					var o = new Cc(r + 8 + (t - a << 1));
					o.set(n), n = o;
				}
				var s = e.charCodeAt(a);
				128 > s ? i(s) : 2048 > s ? (i(192 | s >>> 6), i(128 | 63 & s)) : s > 55295 && 57344 > s ? (i(240 | (s = 65536 + (1047552 & s) | 1023 & e.charCodeAt(++a)) >>> 18), i(128 | s >>> 12 & 63), i(128 | s >>> 6 & 63), i(128 | 63 & s)) : (i(224 | s >>> 12), i(128 | s >>> 6 & 63), i(128 | 63 & s));
			}
			return Vc(n, 0, r);
		}(Ns(t)), { mtime: 0 });
		return {
			contentType: rl,
			body: e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength),
			estimatedSize: e.byteLength
		};
	}
	if (n === uc.Base64) {
		let e = ((e) => "data=" + encodeURIComponent(typeof e == "string" ? e : Ns(e)))(function(e) {
			return e && btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, (e, t) => String.fromCharCode(parseInt(t, 16))));
		}(Ns(t)));
		return {
			contentType: "application/x-www-form-urlencoded",
			body: e,
			estimatedSize: new Blob([e]).size
		};
	}
	let r = Ns(t);
	return {
		contentType: "application/json",
		body: r,
		estimatedSize: new Blob([r]).size
	};
}, ll = (e) => {
	let t = () => e.transport === "sendBeacon" ? {
		url: sl(e.url, { compression: uc.Base64 }),
		encodedBody: cl(H(H({}, e), {}, {
			compression: uc.Base64,
			_encodedBody: void 0
		}))
	} : {
		url: ol(e.url, "compression"),
		encodedBody: cl(H(H({}, e), {}, {
			compression: void 0,
			_encodedBody: void 0
		}))
	}, n;
	try {
		n = cl(e);
	} catch (n) {
		if (_i(e.compression, Ps(e.url, "compression"))) return U.error("Failed to gzip request body, sending uncompressed payload", n), t();
		throw n;
	}
	return n && _i(e.compression, Ps(e.url, "compression")) && !((r = n.body) instanceof ArrayBuffer ? gi(new Uint8Array(r)) : ArrayBuffer.isView(r) && gi(new Uint8Array(r.buffer, r.byteOffset, r.byteLength))) ? (al = !0, t()) : {
		url: e.url,
		encodedBody: n
	};
	var r;
}, ul = (e) => {
	try {
		return ll(e);
	} catch (n) {
		var t;
		U.error(n), (t = e.callback) == null || t.call(e, {
			statusCode: 0,
			error: n
		});
		return;
	}
}, dl = function() {
	var e = V(function* (e) {
		let t = yield function(e) {
			return Si.apply(this, arguments);
		}(Ns(e.data), r.DEBUG, { rethrow: !0 });
		if (!t) return e;
		let n = yield t.arrayBuffer();
		return H(H({}, e), {}, { _encodedBody: {
			contentType: rl,
			body: n,
			estimatedSize: n.byteLength
		} });
	});
	return function(t) {
		return e.apply(this, arguments);
	};
}(), fl = (e) => dr("AbortError", "PostHog request timed out" + (e ? ` after ${e}ms` : "")), pl = /Failed to fetch|NetworkError|Load failed/i, ml = (e) => e?.name === "TypeError" && pl.test(e?.message || ""), hl = (e) => {
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
		return L(t) ? void 0 : Math.min(t, 3e4);
	} catch {
		return;
	}
}, gl = (e) => {
	let t = ul(e);
	if (!t) return;
	let n = new _t();
	nl.set(n, !0);
	let { url: r, encodedBody: i } = t;
	n.open(e.method || "GET", r, !0);
	let { contentType: a, body: o } = i ?? {};
	G(e.headers, function(e, t) {
		n.setRequestHeader(t, e);
	}), a && n.setRequestHeader("Content-Type", a), e.timeout && (n.timeout = e.timeout);
	let s = !1;
	n.ontimeout = () => {
		s = !0;
	}, n.onloadend = () => {
		var t;
		if (s) {
			var r;
			let t = fl(e.timeout);
			U.warn(t), (r = e.callback) == null || r.call(e, {
				statusCode: 0,
				error: t
			});
			return;
		}
		let i = {
			statusCode: n.status,
			text: n.responseText
		};
		if (n.status === 200) try {
			i.json = JSON.parse(n.responseText);
		} catch {}
		(t = e.callback) == null || t.call(e, i, hl(() => n.getResponseHeader("Retry-After")));
	}, n.send(o);
}, _l = (e) => {
	let t = ul(e);
	if (!t) return;
	let { url: n, encodedBody: r } = t, { contentType: i, body: a, estimatedSize: o } = r ?? {}, s = new Headers();
	G(e.headers, function(e, t) {
		s.append(t, e);
	}), i && s.append("Content-Type", i);
	let c = null, l = !1;
	if (vt) {
		let t = new vt();
		c = {
			signal: t.signal,
			timeout: setTimeout(() => {
				l = !0;
				try {
					t.abort(fl(e.timeout));
				} catch (e) {
					d(e);
				}
			}, e.timeout)
		};
	}
	let u = !1, d = (t) => {
		var n;
		u || (u = !0, l && t?.name === "AbortError" || ml(t) ? U.warn(t) : U.error(t), (n = e.callback) == null || n.call(e, {
			statusCode: 0,
			error: t
		}));
	}, f = 0, p = () => {
		il -= f, f = 0, c && clearTimeout(c.timeout);
	};
	try {
		let t = H({
			method: e?.method || "GET",
			headers: s,
			referrerPolicy: "strict-origin",
			body: a,
			signal: c?.signal
		}, e.fetchOptions), r = o ?? (L(a) ? 0 : void 0);
		t.keepalive = t.method === "POST" && !e._keepaliveDisabled && !1 !== t.keepalive && t.body === a && !L(r) && r >= 0 && 52428.8 > il + r, t.keepalive && (f = r, il += f), gt(n, t).then((t) => t.text().then((n) => {
			var r;
			if (u) return;
			let i = {
				statusCode: t.status,
				text: n
			};
			if (t.status === 200) try {
				i.json = JSON.parse(n);
			} catch (e) {
				U.error(e);
			}
			u = !0, p(), (r = e.callback) == null || r.call(e, i, hl(() => t.headers.get("Retry-After")));
		})).catch((e) => {
			p(), d(e);
		}).finally(p);
	} catch (e) {
		p(), d(e);
	}
}, vl = (e) => {
	try {
		let { url: t, encodedBody: n } = ll(e), { contentType: r, body: i, estimatedSize: a } = n ?? {};
		if (!i) return;
		let o = i instanceof Blob ? i : new Blob([i], { type: r });
		if (mt.sendBeacon(t, o)) return;
		let s = F(e.data) ? e.data : e.data?.batch;
		if (F(s) && s.length > 1 && (a ?? 0) > 16384) {
			let t = Math.ceil(s.length / 2), n = (t) => F(e.data) ? t : H(H({}, e.data), {}, { batch: t });
			vl(H(H({}, e), {}, { data: n(s.slice(0, t)) })), vl(H(H({}, e), {}, { data: n(s.slice(t)) }));
			return;
		}
		U.warn(`Beacon of ~${a ?? 0} bytes was rejected by the browser, falling back to ${gt ? "fetch" : "XHR"}`), gt ? _l(H(H({}, e), {}, { _keepaliveDisabled: !0 })) : gl(e);
	} catch (e) {
		U.warn("Beacon send failed", e);
	}
}, yl = (e, t, n, r) => {
	let i = r === "query" ? t === "POST" ? "sent_at" : "_" : void 0;
	return sl(n === uc.GZipJS ? ol(e, "compression") : e, H(H({}, i ? { [i]: Date.now().toString() } : {}), n === uc.GZipJS ? {} : { compression: n }));
}, bl = (() => {
	let e = [];
	return gt && e.push({
		transport: "fetch",
		method: _l
	}), _t && e.push({
		transport: "XHR",
		method: gl
	}), mt != null && mt.sendBeacon && e.push({
		transport: "sendBeacon",
		method: vl
	}), e;
})(), xl = !tl && bt?.indexOf("MSIE") === -1 && bt?.indexOf("Mozilla") === -1;
function Sl(e, t, n) {
	var r, i, a;
	n && (t = H(H({}, t), {}, { callback: (e) => n(e) })), e.__loaded ? xl ? e.__request_queue.push(t) : e.rateLimiter.isServerRateLimited(t.batchKey) ? t.fireCallbackOnDrop && ((i = t.callback) == null || i.call(t, { statusCode: 429 })) : (t.transport = t.transport || e.config.api_transport, t.headers = H(H({}, e.config.request_headers), t.headers), t.compression = t.compression === "best-available" ? e.compression ?? t.compressionFallback : t.compression, (L(e.config.disable_beacon) ? e.config.__preview_disable_beacon : e.config.disable_beacon) && (t.disableTransport = ["sendBeacon"]), t.fetchOptions = t.fetchOptions || e.config.fetch_options, (r = t.onDispatch) == null || r.call(t), ((e, t) => {
		let n = H(H({}, e), {}, { callback: t ?? ((t) => e.callback?.call(e, t)) });
		n.timeout = n.timeout || 6e4;
		let r = n.transport ?? "fetch";
		r === "sendBeacon" && L(n.compression) && n.data && (n.compression = uc.Base64), n.method === "POST" && n.data && (n.timestampMode === "capture-body" ? n.data = ((e) => {
			var t;
			let n = (F(e) ? e : [e]).map((e) => H(H({}, e), e.timestamp instanceof Date && !isNaN(e.timestamp.getTime()) ? { timestamp: e.timestamp.toISOString() } : {})), r = n[0];
			return {
				api_key: (r == null || (t = r.properties) == null ? void 0 : t.token) ?? r?.token,
				batch: n,
				sent_at: (/* @__PURE__ */ new Date()).toISOString()
			};
		})(n.data) : n.timestampMode === "body" && (n.data = ((e, t = (/* @__PURE__ */ new Date()).toISOString()) => F(e) ? e.map((e) => H(H({}, e), {}, { sent_at: t })) : H(H({}, e), {}, { sent_at: t }))(n.data))), n.url = yl(n.url, n.method, n.compression, n.timestampMode);
		let i = bl.filter((e) => !n.disableTransport || !e.transport || !n.disableTransport.includes(e.transport)), a = function(e, t) {
			for (let n = 0; e.length > n; n++) if (t(e[n])) return e[n];
		}(i, (e) => e.transport === r)?.method ?? i[0].method;
		if (!a) throw Error("No available transport method");
		let o = (e) => {
			try {
				a(e);
			} catch (e) {
				var t;
				ml(e) ? U.warn(e) : U.error(e), (t = n.callback) == null || t.call(n, {
					statusCode: 0,
					error: e
				});
			}
		};
		r !== "sendBeacon" && !n.preferSyncCompression && n.data && n.compression === uc.GZipJS && yt && typeof Promise < "u" && !al ? dl(n).then((e) => {
			o(e);
		}).catch((t) => {
			if (vi(t)) return al = !0, void o(H(H({}, n), {}, {
				compression: void 0,
				url: yl(e.url, e.method, void 0, e.timestampMode)
			}));
			((e) => {
				if (!e || typeof e != "object") return !1;
				let t = "name" in e ? String(e.name) : "";
				return vi(e) || t === hi;
			})(t) && (al = !0), o(n);
		}) : o(n);
	})(t, (r, i) => {
		var a, o, s;
		e.rateLimiter.checkForLimiting(r), 400 > r.statusCode || (a = (o = e.config).on_request_error) == null || a.call(o, r), n ? n(r, i) : (s = t.callback) == null || s.call(t, r);
	})) : t.fireCallbackOnDrop && ((a = t.callback) == null || a.call(t, { statusCode: 0 }));
}
var Cl = class {
	constructor(e, t) {
		this._isPaused = !0, this._queue = [], this._flushTimeoutMs = Qt(t?.flush_interval_ms || 3e3, 250, 5e3, U.createLogger("flush interval"), 3e3), this._sendRequest = e;
	}
	enqueue(e) {
		this._queue.push(e), this._flushTimeout || this._setFlushTimeout();
	}
	unload() {
		this._clearFlushTimeout();
		let e = this._queue.length > 0 ? this._formatQueue() : {}, t = Object.values(e);
		[...t.filter((e) => e.url.indexOf("/e") === 0), ...t.filter((e) => e.url.indexOf("/e") !== 0)].map((e) => {
			this._sendRequestSafely(H(H({}, e), {}, { callback: void 0 }), "sendBeacon");
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
			U.error(e);
		}
	}
	_clearFlushTimeout() {
		clearTimeout(this._flushTimeout), this._flushTimeout = void 0;
	}
	_formatQueue() {
		let e = {}, t = {};
		G(this._queue, (n) => {
			var r;
			let i = n, a = ((i ? i.batchKey : null) || i.url) + (i.batchGroup ? `:${i.batchGroup}` : "");
			L(e[a]) && (e[a] = H(H({}, i), {}, {
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
}, wl = ["retriesPerformedSoFar"], Tl = class {
	constructor(e) {
		this._instance = e, this._isPolling = !1, this._pollIntervalMs = 3e3, this._queue = [], this._queue = [], this._areWeOnline = !0, this.resume();
	}
	resume() {
		if (!L(j) && "onLine" in j.navigator) {
			if (this._areWeOnline = j.navigator.onLine, this._onlineListener) return;
			this._onlineListener = () => {
				this._areWeOnline = !0, this._flush();
			}, this._offlineListener = () => {
				this._areWeOnline = !1;
			}, q(j, "online", this._onlineListener), q(j, "offline", this._offlineListener);
		}
	}
	get length() {
		return this._queue.length;
	}
	retriableRequest(e, t) {
		let { retriesPerformedSoFar: n } = e, r = Ci(e, wl);
		It(n) && (r.url = sl(r.url, { retry_count: n })), Sl(this._instance, t ? H(H({}, r), {}, { transport: t }) : r, (e, t) => {
			var i;
			if (e.statusCode !== 200 && (400 > e.statusCode || e.statusCode >= 500)) {
				if ((e.statusCode === 0 ? 3 : 10) > (n ?? 0)) return void this._enqueue(H({ retriesPerformedSoFar: n }, r), t);
				e.statusCode === 0 && U.warn(`Request failed before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped retrying after ${n ?? 0} retries.`);
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
		navigator.onLine || (a += " (Browser is offline)"), U.warn(a), this._isPolling || (this._isPolling = !0, this._poll());
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
		this._poller &&= (clearTimeout(this._poller), void 0), this._isPolling = !1, L(j) || (this._onlineListener &&= (j.removeEventListener("online", this._onlineListener), void 0), this._offlineListener &&= (j.removeEventListener("offline", this._offlineListener), void 0));
		for (let { requestOptions: e } of this._queue) try {
			this._instance._send_request(H(H({}, e), {}, {
				callback: F(e.data) ? void 0 : e.callback,
				transport: "sendBeacon"
			}));
		} catch (e) {
			U.error(e);
		}
		this._queue = [];
	}
}, El = class {
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
		q(j, "scroll", this._updateScrollData, { capture: !0 }), q(j, "scrollend", this._updateScrollData, { capture: !0 }), q(j, "resize", this._updateScrollData);
	}
	scrollElement() {
		if (this._scrollRoot) {
			let t = F(this._scrollRoot) ? this._scrollRoot : [this._scrollRoot];
			for (let n of t) {
				var e;
				let t = j == null || (e = j.document) == null ? void 0 : e.querySelector(n);
				if (t) return t;
			}
		} else {
			var t;
			return j == null || (t = j.document) == null ? void 0 : t.documentElement;
		}
	}
	_scrollPosition(e) {
		var t, n;
		let r = e === "y" ? "scrollTop" : "scrollLeft";
		if (this._scrollRoot) {
			let e = this.scrollElement();
			return e && e[r] || 0;
		}
		return j ? e === "y" ? j.scrollY || j.pageYOffset || ((t = j.document) == null || (t = t.documentElement) == null ? void 0 : t.scrollTop) || 0 : j.scrollX || j.pageXOffset || ((n = j.document) == null || (n = n.documentElement) == null ? void 0 : n.scrollLeft) || 0 : 0;
	}
	scrollY() {
		return this._scrollPosition("y");
	}
	scrollX() {
		return this._scrollPosition("x");
	}
}, Dl = (e) => Js(e?.config.mask_personal_data_properties, e?.config.custom_personal_data_properties, e?.config.disable_capture_url_hashes), Ol = class {
	constructor(e, t, n, r) {
		this._onSessionIdCallback = (e) => {
			let t = this._getStored();
			if (t && t.sessionId === e) return;
			let n = {
				sessionId: e,
				props: this._sessionSourceParamGenerator(this._instance)
			};
			this._persistence.register({ [Be]: n });
		}, this._instance = e, this._sessionIdManager = t, this._persistence = n, this._sessionSourceParamGenerator = r || Dl, this._sessionIdManager.onSessionId(this._onSessionIdCallback);
	}
	_getStored() {
		return this._persistence.props[Be];
	}
	getSetOnceProps() {
		let e = this._getStored()?.props;
		return e ? "r" in e ? Ys(e, this._instance.config.disable_capture_url_hashes) : {
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
		return G(Ga(this.getSetOnceProps()), (t, n) => {
			n === "$current_url" && (n = "url"), e[`$session_entry_${Dt(n)}`] = t;
		}), e;
	}
}, kl = class {
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
}, Al = W("[SessionId]"), jl = 864e5, Ml = class {
	on(e, t) {
		return this._eventEmitter.on(e, t);
	}
	constructor(e, t, n) {
		var r;
		if (this._lastPersistedActivityTimestamp = null, this._lastCookieSyncTimestamp = null, this._sessionIdChangedHandlers = [], this._beforeUnloadListener = void 0, this._destroyed = !1, this._eventEmitter = new kl(), this._sessionHasBeenIdleTooLong = (e, t) => !(!It(e) || !It(t)) && Math.abs(e - t) > this.sessionTimeoutMs, !e.persistence) throw Error("SessionIdManager requires a PostHogPersistence instance");
		if (e.config.cookieless_mode === "always") throw Error("SessionIdManager cannot be used with cookieless_mode=\"always\"");
		this._config = e.config, this._persistence = e.persistence, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._pendingBootstrapSession = void 0, this._sessionActivityTimestamp = null, this._sessionIdGenerator = t || ro, this._windowIdGenerator = n || ro;
		let i = this._config.persistence_name || this._config.token;
		if (this._sessionTimeoutMs = 1e3 * Qt(this._config.session_idle_timeout_seconds || 1800, 60, 36e3, Al.createLogger("session_idle_timeout_seconds"), 1800), e.register({ $configured_session_timeout_ms: this._sessionTimeoutMs }), this._resetIdleTimer(), this._window_id_storage_key = "ph_" + i + "_window_id", this._primary_window_exists_storage_key = "ph_" + i + "_primary_window_exists", this._canUseSessionStorage()) {
			let e = X._parse(this._window_id_storage_key), t = X._parse(this._primary_window_exists_storage_key);
			e && !t ? this._windowId = e : X._remove(this._window_id_storage_key), X._set(this._primary_window_exists_storage_key, !0);
		}
		(r = this._config.bootstrap) != null && r.sessionID && this.setBootstrapSessionId(this._config.bootstrap.sessionID), this._listenToReloadWindow();
	}
	get sessionTimeoutMs() {
		return this._sessionTimeoutMs;
	}
	onSessionId(e) {
		return L(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), this._sessionIdChangedHandlers.push(e), this._sessionId && e(this._sessionId, this._windowId), () => {
			this._sessionIdChangedHandlers = this._sessionIdChangedHandlers.filter((t) => t !== e);
		};
	}
	_canUseSessionStorage() {
		return this._config.persistence !== "memory" && !this._persistence._disabled && X._is_supported();
	}
	_setWindowId(e) {
		e !== this._windowId && (this._windowId = e, this._canUseSessionStorage() && X._set(this._window_id_storage_key, e));
	}
	_getWindowId() {
		return this._windowId ? this._windowId : this._canUseSessionStorage() ? X._parse(this._window_id_storage_key) : null;
	}
	_isActivityChangeBelowGranularity(e) {
		let t = this._lastPersistedActivityTimestamp;
		return !z(t) && !z(e) && 5e3 > Math.abs(e - t);
	}
	_setSessionId(e, t, n) {
		let r = t !== this._sessionActivityTimestamp, i = e === this._sessionId && n === this._sessionStartTimestamp;
		this._sessionStartTimestamp = n, this._sessionActivityTimestamp = t, this._sessionId = e, i && !r || i && this._isActivityChangeBelowGranularity(t) || (this._lastPersistedActivityTimestamp = t, this._persistence.register({ [we]: [
			t,
			e,
			n
		] }));
	}
	_useCrossTabRefreshHardening() {
		let e = this._config?.persistence_save_debounce_ms;
		return It(e) && e > 0;
	}
	_refreshSessionIdFromStorage() {
		this._useCrossTabRefreshHardening() ? this._persistence.refreshKey(we) : (this._persistence.flush(), this._persistence.load());
	}
	_flushPendingActivityTimestamp() {
		if (z(this._sessionActivityTimestamp) || this._sessionActivityTimestamp === this._lastPersistedActivityTimestamp) return;
		this._refreshSessionIdFromStorage();
		let [, e, t] = this._getSessionId();
		e === this._sessionId && t === this._sessionStartTimestamp && (this._lastPersistedActivityTimestamp = this._sessionActivityTimestamp, this._persistence.register({ [we]: [
			this._sessionActivityTimestamp,
			this._sessionId ?? null,
			this._sessionStartTimestamp
		] }), this._persistence.flush());
	}
	_freshestActivityTimestamp() {
		let [e] = this._getSessionId(), t = It(e) ? e : 0, n = It(this._sessionActivityTimestamp) ? this._sessionActivityTimestamp : 0;
		return Math.max(t, n);
	}
	_isSessionIdleAfterCrossTabRefresh(e) {
		return this._refreshSessionIdFromStorage(), this._sessionHasBeenIdleTooLong(e, this._freshestActivityTimestamp());
	}
	_getSessionId() {
		let e = this._persistence.props[we];
		return F(e) && e.length === 2 && e.push(e[0]), e || [
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
				return n > t + 6e4 ? void Al.error("Bootstrap sessionID cannot be in the future") : n;
			} catch (e) {
				Al.error("Invalid sessionID in bootstrap", e);
				return;
			}
		})(e);
		return !L(n) && (t ? this._pendingBootstrapSession = {
			sessionId: e,
			sessionStartTimestamp: n
		} : this._setSessionId(e, (/* @__PURE__ */ new Date()).getTime(), n), !0);
	}
	destroy() {
		this._destroyed = !0, this._flushPendingActivityTimestamp(), clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = void 0, this._beforeUnloadListener && j && (j.removeEventListener(ct, this._beforeUnloadListener, { capture: !1 }), this._beforeUnloadListener = void 0), this._sessionIdChangedHandlers = [];
	}
	_listenToReloadWindow() {
		this._beforeUnloadListener = () => {
			this._flushPendingActivityTimestamp(), this._canUseSessionStorage() && X._remove(this._primary_window_exists_storage_key);
		}, q(j, ct, this._beforeUnloadListener, { capture: !1 });
	}
	checkAndGetSessionAndWindowId(e = !1, t = null, n = !1) {
		if (this._config.cookieless_mode === "always") throw Error("checkAndGetSessionAndWindowId should not be called with cookieless_mode=\"always\"");
		let r = t || (/* @__PURE__ */ new Date()).getTime(), i = this._sessionId;
		if (n) this._lastCookieSyncTimestamp = r;
		else if (z(this._lastCookieSyncTimestamp) || this._lastCookieSyncTimestamp > r || r - this._lastCookieSyncTimestamp >= 1e3) {
			var a, o;
			(a = (o = this._persistence).syncCookieProperties) == null || a.call(o), this._lastCookieSyncTimestamp = r;
		}
		let [, s, c] = this._getSessionId(), l = !L(i) && s !== i, u = this._freshestActivityTimestamp(), d = this._getWindowId(), f = this._pendingBootstrapSession, p = !!f && (f.sessionStartTimestamp > r + 6e4 || r - f.sessionStartTimestamp > jl), m = f ? p : It(c) && Math.abs(r - c) > jl, h = !1, g = l, _ = !s || !!f, v = s, y = !_ && !e && this._sessionHasBeenIdleTooLong(r, u);
		if (y && (y = this._isSessionIdleAfterCrossTabRefresh(r), y || Al.info("cross-tab refresh kept the session alive", { sessionId: s }), [, s, c] = this._getSessionId(), y || (_ = !s || !!f)), _ || y || m) {
			g = !1;
			let e = f && !p;
			s = e ? f.sessionId : this._sessionIdGenerator(), d = this._windowIdGenerator(), Al.info("new session ID assigned", {
				sessionId: s,
				windowId: d,
				bootstrapped: !!e,
				changeReason: {
					noSessionId: _,
					activityTimeout: y,
					sessionPastMaximumLength: m
				}
			}), c = e ? f.sessionStartTimestamp : r, this._pendingBootstrapSession = void 0, h = !0;
		} else d || (d = this._windowIdGenerator(), h = !0), g ||= s !== v, g && (Al.info("adopted cross-tab session id", {
			sessionId: s,
			windowId: d
		}), h = !0);
		let b = It(u) && e && !m ? u : r, x = It(c) ? c : (/* @__PURE__ */ new Date()).getTime();
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
}, Nl = Object.freeze([
	"2026-08-30",
	"2026-08-29",
	"2026-06-25",
	"2026-05-30",
	"2026-01-30",
	"2025-11-30",
	"2025-05-24"
]), Pl = function(e, t) {
	if (!e) return !1;
	let n = e.userAgent;
	if (n && Zt(n, t)) return !0;
	try {
		let n = e?.userAgentData;
		if (n?.brands && n.brands.some((e) => Zt(e?.brand, t))) return !0;
	} catch {}
	return !!e.webdriver;
};
function Fl() {
	return (Fl = V(function* () {
		let e = mt?.userAgentData;
		if (e?.getHighEntropyValues) try {
			let t = (yield e.getHighEntropyValues(["model"]))?.model;
			return R(t) && t.length > 0 ? t : void 0;
		} catch (e) {
			U.info("Unable to resolve $device_model from userAgentData.getHighEntropyValues", e);
			return;
		}
	})).apply(this, arguments);
}
function Il(e, t) {
	let n = `$survey_${t}/${e.id}`;
	return e.current_iteration && e.current_iteration > 0 && (n = `$survey_${t}/${e.id}/${e.current_iteration}`), n;
}
function Ll(e) {
	var t;
	return !!((t = e.conditions) != null && (t = t.events) != null && (t = t.values) != null && t.length);
}
var Rl = (e, t) => {
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
}, zl = (e) => e.toLowerCase(), Bl = {
	exact: (e, t) => t.some((t) => e.some((e) => t === e)),
	is_not: (e, t) => t.every((t) => e.every((e) => t !== e)),
	regex: (e, t) => t.some((t) => e.some((e) => Rl(t, e))),
	not_regex: (e, t) => t.every((t) => e.every((e) => !Rl(t, e))),
	icontains: (e, t) => t.map(zl).some((t) => e.map(zl).some((e) => t.includes(e))),
	not_icontains: (e, t) => t.map(zl).every((t) => e.map(zl).every((e) => !t.includes(e))),
	gt: (e, t) => t.some((t) => {
		let n = parseFloat(t);
		return !isNaN(n) && e.some((e) => n > parseFloat(e));
	}),
	lt: (e, t) => t.some((t) => {
		let n = parseFloat(t);
		return !isNaN(n) && e.some((e) => n < parseFloat(e));
	})
};
function Vl(e, t) {
	return !e || Object.entries(e).every(([e, n]) => {
		let r = t?.[e];
		if (r == null) return !1;
		let i = Bl[n.operator];
		return !!i && i(n.values.map(String), [String(r)]);
	});
}
function Hl(e, t, n) {
	return Ns({
		distinct_id: e,
		userPropertiesToSet: t,
		userPropertiesToSetOnce: n
	});
}
var Ul = "custom", Wl = "i.posthog.com", Gl = /^\/static\//, Kl = [
	"/s/",
	"/e/",
	"/i/"
], ql = class {
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
		return e ||= this.apiHost.replace(`.${Wl}`, ".posthog.com"), e === "https://app.posthog.com" ? "https://us.posthog.com" : e;
	}
	get region() {
		return this._regionCache[this.apiHost] || (this._regionCache[this.apiHost] = /https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "us" : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "eu" : Ul), this._regionCache[this.apiHost];
	}
	_staticAssetHostOverride(e) {
		if (!Gl.test(e)) return;
		let t = this.instance.config.asset_host;
		return typeof t == "string" && t.trim().replace(/\/$/, "") || void 0;
	}
	_urlKey(e) {
		let t = ks(e);
		return t ? t.protocol + "//" + t.host + t.pathname : void 0;
	}
	_prepareEndpoint(e, t, n) {
		if (e === "ui") return n;
		let r = n, i = this.instance.config.rewriteRequestPath;
		if (i) {
			let e = ks(n)?.href || n;
			r = i(new URL(e)).toString();
		}
		if (i && e === "api" && Kl.some((e) => t.indexOf(e) === 0)) {
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
		if (this.region === Ul) return this._prepareEndpoint(e, t, this.apiHost + t);
		let n = Wl + t;
		switch (e) {
			case "assets": return this._prepareEndpoint(e, t, `https://${this.region}-assets.${n}`);
			case "api": return this._prepareEndpoint(e, t, `https://${this.region}.${n}`);
		}
	}
}, Q = W("[Surveys]"), Jl = (e) => {
	try {
		let t = ((e) => ((e, t) => `seenSurvey_${function(e) {
			return e.current_iteration && e.current_iteration > 0 ? `${e.id}_${e.current_iteration}` : e.id;
		}(t)}`)(0, e))(e);
		if (localStorage.getItem(t)) return;
		localStorage.setItem(t, "true");
	} catch (e) {
		Q.error("Failed to persist survey seen state", e);
	}
}, Yl = [
	fc.Popover,
	fc.Widget,
	fc.API
], Xl = {
	ignoreConditions: !1,
	ignoreDelay: !1,
	displayType: hc.Popover
}, Zl = W("[PostHog ExternalIntegrations]"), Ql = {
	intercom: "intercom-integration",
	crispChat: "crisp-chat-integration"
}, $l = class {
	constructor(e) {
		this._instance = e;
	}
	_loadScript(e, t) {
		var n, r;
		(n = N.__PosthogExtensions__) == null || (r = n.loadExternalDependency) == null || r.call(n, this._instance, e, (e) => {
			if (e) return Zl.error("failed to load script", e);
			t();
		});
	}
	startIfEnabledOrStop() {
		for (let [r, i] of Object.entries(this._instance.config.integrations ?? {})) {
			var e, t, n;
			i && !((e = N.__PosthogExtensions__) != null && (e = e.integrations) != null && e[r]) && this._loadScript(Ql[r], () => {
				var e;
				(e = N.__PosthogExtensions__) == null || (e = e.integrations) == null || (e = e[r]) == null || e.start(this._instance);
			}), !i && (t = N.__PosthogExtensions__) != null && (t = t.integrations) != null && t[r] && ((n = N.__PosthogExtensions__) == null || (n = n.integrations) == null || (n = n[r]) == null || n.stop());
		}
	}
}, eu = class {
	constructor(e) {
		this.disabled = !1 === e;
		let t = I(e) ? e : {};
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
}, tu = () => typeof window > "u" ? void 0 : window, nu = () => typeof document > "u" ? void 0 : document, ru = "$copy_autocapture", iu = [
	"password",
	"hidden",
	"file",
	"checkbox",
	"button",
	"submit",
	"reset",
	"image"
], au = W("[AutoCapture]");
function ou(e, t) {
	return t.length > e ? t.slice(0, e) + "..." : t;
}
function su(e) {
	if (e.previousElementSibling) return e.previousElementSibling;
	let t = e;
	do
		t = t.previousSibling;
	while (t && !Eo(t));
	return t;
}
function cu(e, { e: t, maskAllElementAttributes: n, maskAllText: r, elementAttributeIgnoreList: i, elementsChainAsString: a, disableCaptureUrlHashes: o }) {
	if (!Eo(e)) return { props: {} };
	let s = [e], c = /* @__PURE__ */ new Set([e]), l = e;
	for (; l.parentNode && !Do(l, "body") && 1e3 > s.length;) if (ko(l.parentNode)) {
		let e = l.parentNode.host;
		if (c.has(e)) break;
		c.add(e), s.push(e), l = e;
	} else {
		if (!Eo(l.parentNode) || c.has(l.parentNode)) break;
		c.add(l.parentNode), s.push(l.parentNode), l = l.parentNode;
	}
	let u = t.type === "click" && e.namespaceURI === "http://www.w3.org/2000/svg" ? s.findIndex((e) => Do(e, "button") || Do(e, "a")) : -1;
	u > 0 && (r ||= s.slice(0, u + 1).some((e) => !es(e) || ts(e)));
	let d = [], f = {}, p, m = !1, h = !1;
	if (G(s, (e) => {
		let t = es(e);
		if (Do(e, "a") && !n && !i?.includes("href")) {
			let n = e.getAttribute("href");
			m = !!(t && n && ls(n)) && (o ? fr(n) : n);
		}
		P(Mo(e), "ph-no-capture") && (h = !0), d.push(function(e, t, n, r, i = !1) {
			let a = e.tagName.toLowerCase(), o = { tag_name: a };
			Io.indexOf(a) > -1 && !n && (o.$el_text = a.toLowerCase() === "a" || a.toLowerCase() === "button" ? ou(1024, us(e)) : ou(1024, Po(e)));
			let s = Mo(e);
			t || r != null && r.includes("class") || 0 >= s.length || (o.classes = s.filter(function(e) {
				return e !== "";
			})), G(e.attributes, function(n) {
				var a;
				if ((!ts(e) || [
					"name",
					"id",
					"class",
					"aria-label"
				].indexOf(n.name) !== -1) && !r?.includes(n.name) && !t && ls(n.value) && (!R(a = n.name) || a.substring(0, 10) !== "_ngcontent" && a.substring(0, 7) !== "_nghost")) {
					let e = n.value;
					n.name === "class" && (e = Ao(e).join(" ")), o["attr__" + n.name] = ou(1024, n.name === "href" && i ? fr(e) : e);
				}
			});
			let c = 1, l = 1, u = e;
			for (; u = su(u);) c++, u.tagName === e.tagName && l++;
			return o.nth_child = c, o.nth_of_type = l, o;
		}(e, n, r, i, o)), G(function(e) {
			if (!es(e)) return {};
			let t = {};
			return G(e.attributes, function(e) {
				if (e.name && e.name.indexOf("data-ph-capture-attribute") === 0) {
					let n = e.name.replace("data-ph-capture-attribute-", ""), r = e.value;
					n && r && ls(r) && (t[n] = r);
				}
			}), t;
		}(e), (e, t) => {
			({}).hasOwnProperty.call(f, t) || (f[t] = e);
		});
	}), h) return {
		props: {},
		explicitNoCapture: h
	};
	if (u > 0 && (e = s[u], d.splice(0, u)), r || (d[0].$el_text = Do(e, "a") || Do(e, "button") ? us(e) : Po(e)), m) {
		var g;
		d[0].attr__href = m;
		let e = ks(m)?.host, t = (g = tu()) == null || (g = g.location) == null ? void 0 : g.host;
		e && t && e !== t && (p = m);
	}
	return {
		props: K((v = t.type, {
			$event_type: v,
			$ce_version: 1
		}), a ? {} : { $elements: d }, { $elements_chain: (_ = d, F(_) ? function(e) {
			return e.map((e) => {
				let t = "";
				if (e.tag_name && (t += e.tag_name), e.attr_class) {
					e.attr_class.sort();
					for (let n of e.attr_class) t += `.${n.replace(/"/g, "")}`;
				}
				let n = H(H(H(H({}, e.text ? { text: e.text } : {}), {}, {
					"nth-child": e.nth_child ?? 0,
					"nth-of-type": e.nth_of_type ?? 0
				}, e.href ? { href: e.href } : {}), e.attr_id ? { attr_id: e.attr_id } : {}), e.attributes), r = {};
				return Ua(n).sort(([e], [t]) => function(e, t) {
					return t > e ? -1 : +(e > t);
				}(e, t)).forEach(([e, t]) => r[fs(e.toString())] = fs(t.toString())), t += ":", t += Ua(r).map(([e, t]) => `${e}="${t}"`).join(""), t;
			}).join(";");
		}(function(e) {
			return e.map((e) => {
				let t = {
					text: e.$el_text?.slice(0, 400),
					tag_name: e.tag_name,
					href: e.attr__href?.slice(0, 2048),
					attr_class: ps(e),
					attr_id: e.attr__id,
					nth_child: e.nth_child,
					nth_of_type: e.nth_of_type,
					attributes: {}
				};
				return Ua(e).filter(([e]) => e.indexOf("attr__") === 0).forEach(([e, n]) => t.attributes[e] = n), t;
			});
		}(_)) : "") }, d[0]?.$el_text ? { $el_text: d[0]?.$el_text } : {}, p && t.type === "click" ? { $external_click_url: p } : {}, f),
		target: e
	};
	var _, v;
}
var lu = "autocapture", uu = class {
	_clearPointer() {
		this._pointerDown = void 0, clearTimeout(this._pointerExpiry), this._pointerExpiry = void 0;
	}
	_isExcludedPointerTarget(e) {
		if (!es(e)) return !0;
		let t = this._refreshConfig().css_selector_ignorelist ?? Bo, n = /* @__PURE__ */ new Set(), r = e;
		for (; r;) {
			if (n.size >= 1e3 || n.has(r)) return !0;
			n.add(r);
			let e = r, i = Mo(e);
			if (P(i, "ph-no-capture") || P(i, "ph-sensitive") || ts(e) || t.some((t) => Lo(e, t))) return !0;
			let a = r.parentNode;
			r = ko(a) ? a.host : a && Eo(a) ? a : null;
		}
		return !1;
	}
	_trackPointer(e) {
		if (!this.isEnabled || e.type === "pointercancel") return void this._clearPointer();
		if (e.type === "pointerdown") {
			this._clearPointer();
			let t = Fo(e);
			e.isPrimary && e.button === 0 && !e.ctrlKey && t && Eo(t) && (this._pointerDown = {
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
		let n = Fo(e);
		if (t?.released && t.target.isConnected && t.distinctId === this._client?.distinctId && e.pointerId === t.id && (e.detail > 0 || e.pointerType === "touch" || e.pointerType === "pen") && e.button === 0 && 5 >= Math.abs(e.clientX - t.x) && 5 >= Math.abs(e.clientY - t.y) && n && (Do(n, "html") || Do(n, "body"))) {
			if (t.excluded) return null;
			let e = this._refreshConfig().css_selector_ignorelist ?? Bo;
			return [
				n,
				nu()?.documentElement,
				nu()?.body
			].some((t) => {
				if (!t) return !1;
				let n = Mo(t);
				return P(n, "ph-no-capture") || P(n, "ph-sensitive") || !es(t) || ts(t) || e.some((e) => Lo(t, e));
			}) ? null : t.target;
		}
	}
	constructor(e) {
		this._configSource = e, this.name = lu, this._initialized = !1, this._isDisabledServerSide = null, this._hasReceivedConfigResponse = !1, this._elementSelectorsByOwner = /* @__PURE__ */ new Map(), this._elementsChainAsString = !1, this._config = {
			enabled: !1,
			rageclick: !1,
			maskAllElementAttributes: !1,
			maskAllText: !1,
			disableCaptureUrlHashes: !1,
			remoteRequestsDisabled: !1
		}, this._disposed = !1, this._configSource.refresh(this._config), this.rageclicks = new eu(this._config.rageclick), this._elementSelectors = null;
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
		let e = tu(), t = nu();
		if (!this.isBrowserSupported()) return void au.info("Disabling Automatic Event Collection because this browser is not supported");
		if (!e || !t) return;
		this._listenerWindow = e, this._listenerDocument = t;
		let n = this._domEventHandler = (t) => {
			t ||= e?.event;
			try {
				if (t.type === "blur") return void this._clearPointer();
				if (t.type.indexOf("pointer") === 0) return void this._trackPointer(t);
				let e = t.type === "click" ? this._recoverClickTarget(t) : void 0;
				if (z(e)) return;
				this._captureEvent(t, "$autocapture", e);
			} catch (e) {
				au.error("Failed to capture event", e);
			}
		};
		if (q(e, "blur", n), q(t, "submit", n, { capture: !0 }), q(t, "change", n, { capture: !0 }), q(t, "click", n, { capture: !0 }), G([
			"pointerdown",
			"pointermove",
			"pointerup",
			"pointercancel"
		], (e) => {
			q(t, e, n, { capture: !0 });
		}), this._refreshConfig().capture_copied_text) {
			let n = this._copiedTextHandler = (t) => {
				t ||= e?.event;
				try {
					this._captureEvent(t, ru);
				} catch (e) {
					au.error("Failed to capture clipboard event", e);
				}
			};
			q(t, "copy", n, { capture: !0 }), q(t, "cut", n, { capture: !0 }), q(t, "paste", n, { capture: !0 });
		}
	}
	_removeDomEventHandlers() {
		let e = this._listenerWindow, t = this._listenerDocument;
		this._clearPointer(), this._domEventHandler &&= (e?.removeEventListener("blur", this._domEventHandler), G([
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
		Lt(n) && ((r = this._client) == null || r.kv.set("$autocapture_disabled_server_side", n), this._isDisabledServerSide = n), this.startIfEnabled();
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
			(nu()?.querySelectorAll(n))?.forEach((i) => {
				e !== i && t !== i || P(r, n) || r.push(n);
			});
		}), r;
	}
	get isEnabled() {
		if (this._disposed) return !1;
		let e = this._client?.kv.get(b), t = this._isDisabledServerSide, n = this._refreshConfig();
		if (!n.remoteRequestsDisabled && !this._hasReceivedConfigResponse) return !1;
		let r = n.remoteRequestsDisabled && !this._hasReceivedConfigResponse;
		if (z(t) && !Lt(e) && !r) return !1;
		let i = this._isDisabledServerSide ?? !!e;
		return !!n.enabled && !i;
	}
	_captureEvent(e, t = "$autocapture", n) {
		if (!this.isEnabled) return void this._clearPointer();
		let r = n || Fo(e);
		Oo(r) && (r = r.parentNode || null);
		let i = this._compileUrlPatterns();
		var a;
		t === "$autocapture" && e.type === "click" && e instanceof MouseEvent && i.rageclick && (a = this.rageclicks) != null && a.isRageClick(e.clientX, e.clientY, e.timeStamp || (/* @__PURE__ */ new Date()).getTime()) && Zo(r, i.rageclick) && this._captureEvent(e, "$rageclick", n);
		let o = t === ru, s = o ? H(H({}, i), {}, { dom_event_allowlist: void 0 }) : i;
		if (r && function(e, t, n, r, i, a) {
			let o = typeof window > "u" ? void 0 : window;
			if (!o || Qo(e) || n?.url_allowlist && !jo(n.url_allowlist, a) || n?.url_ignorelist && jo(n.url_ignorelist, a)) return !1;
			if (n?.dom_event_allowlist) {
				let e = n.dom_event_allowlist;
				if (e && !e.some((e) => t.type === e)) return !1;
			}
			let { parentIsUsefulElement: s, targetElementList: c } = $o(e, r);
			if (!function(e, t) {
				let n = t?.element_allowlist;
				if (L(n)) return !0;
				for (let t of e) if (n.some((e) => t.tagName.toLowerCase() === e)) return !0;
				return !1;
			}(c, n) || !Ro(c, n?.css_selector_allowlist) || Ro(c, n?.css_selector_ignorelist ?? Bo)) return !1;
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
				default: return s ? (i || ["click"]).indexOf(t.type) >= 0 : (i || ["click"]).indexOf(t.type) >= 0 && (Io.indexOf(l) > -1 || e.getAttribute("contenteditable") === "true");
			}
		}(r, e, s, o, o ? [
			"copy",
			"cut",
			"paste"
		] : void 0, { config: { get_current_url: i.getCurrentUrl } })) {
			var c;
			let { props: n, explicitNoCapture: a, target: o } = cu(r, {
				e,
				maskAllElementAttributes: i.maskAllElementAttributes,
				maskAllText: i.maskAllText,
				elementAttributeIgnoreList: i.element_attribute_ignorelist,
				elementsChainAsString: this._elementsChainAsString,
				disableCaptureUrlHashes: i.disableCaptureUrlHashes
			});
			if (a) return !1;
			let s = this.getElementSelectors(r, o);
			if (s && s.length > 0 && (n.$element_selectors = s), t === ru) {
				let t = e.type || "clipboard";
				if (t !== "paste") {
					var l;
					let e = (l = tu()) == null || (l = l.getSelection()) == null ? void 0 : l.toString(), t = No(e);
					if (!t) return !1;
					n.$selected_content = t, n.$clipboard_text_length = e?.length ?? 0;
				}
				n.$copy_type = t;
			}
			if (t === "$autocapture" && e.type === "change" && i.capture_value_css_selector_allowlist && !i.maskAllText && (Do(u = r, "input") ? !P(iu, u.type) : Do(u, "textarea") || Do(u, "select") && !u.multiple) && function(e, t) {
				if (!es(e)) return !1;
				let n = t.css_selector_ignorelist ?? Bo, r = /* @__PURE__ */ new Set(), i = e;
				for (Do(e, "select") && (i = e.options[e.selectedIndex] || e); i;) {
					let e = i, t = Mo(e);
					if (r.size >= 1e3 || r.has(i) || P(t, "ph-sensitive") || P(t, "ph-no-capture") || n.some((t) => Lo(e, t))) return !1;
					r.add(i);
					let a = i.assignedSlot || i.parentNode;
					i = ko(a) ? a.host : a && Eo(a) ? a : null;
				}
				return !0;
			}(r, i) && !r.querySelector(".ph-no-capture, .ph-sensitive")) {
				let e = i.capture_value_css_selector_allowlist, t = !1;
				try {
					t = Mt(e) ? !!e(r) : F(e) && e.some((e) => Lo(r, e));
				} catch (e) {
					au.error("capture_value_css_selector_allowlist threw", e);
				}
				t && (n.$input_value = r.value);
			}
			return (c = this._client) == null || c.capture(t, n), !0;
		}
		var u;
	}
	isBrowserSupported() {
		return Mt(nu()?.querySelectorAll);
	}
}, du = "featureFlags", fu = "logs", pu = () => {
	var e;
	return j != null && (e = j.performance) != null && e.now ? j.performance.now() : Date.now();
}, mu = [
	50,
	75,
	100,
	150,
	200,
	300,
	400,
	500,
	750,
	1e3,
	1500,
	2e3,
	3e3,
	5e3,
	1e4
], hu = class {
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
			L(e) || (n[r] = e);
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
}, gu = class {
	constructor(e) {
		this.instance = e, this._logger = U, this.kv = new hu(e), this.onSession = (e) => gc(this.instance.onSessionId((t) => {
			try {
				e(t);
			} catch (e) {
				this._logger.error("Browser extension session listener failed", e);
			}
		})), this.onEvent = (e) => gc(this.instance._addCaptureHook((t, n) => {
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
			return this.instance._lastRemoteConfig && t(this.instance._lastRemoteConfig), gc(n);
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
		let e = this.instance.get_property(ne);
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
		return Mt(this.instance.is_capturing) ? this.instance.is_capturing() : !this.isOptedOut;
	}
	get isRateLimited() {
		return !!this.instance.rateLimiter?.isClientRateLimited;
	}
	get projectToken() {
		return this.instance.config.token;
	}
	getExtension(e) {
		let t;
		switch (e) {
			case du:
			case "featureFlagsCommon":
				t = this.instance.featureFlags;
				break;
			case fu:
				t = this.instance.logs;
				break;
			case "surveys":
				t = this.instance.surveys;
				break;
			case lu: t = this.instance.autocapture;
		}
		return t;
	}
	capture(e, t, n) {
		if (!n) return this._notRateLimited(this.instance.capture(e, t));
		let r = H({
			timestamp: n.timestamp,
			uuid: n.uuid,
			$set: n.set,
			$set_once: n.setOnce
		}, n.delivery === "unload" ? {
			transport: "sendBeacon",
			send_instantly: !0
		} : {});
		return this._notRateLimited(this.instance.capture(e, t, r));
	}
	_notRateLimited(e) {
		return !L(e) || !this.instance.rateLimiter?.lastEventRateLimited;
	}
	registerDynamicEventProperties(e) {
		return gc(this.instance._registerExtensionEventProperties(e));
	}
	sendRequest(e) {
		var t = this;
		return V(function* (e, n = {}) {
			let r = n.target ?? "api", i = n.query ? sl(e, n.query) : e, a = t.instance.requestRouter.endpointFor(r, i), o = {
				method: n.method,
				url: a,
				data: n.body,
				headers: n.headers,
				timeout: n.timeoutMs,
				fireCallbackOnDrop: !0,
				transport: n.transport,
				compression: n.compression,
				compressionFallback: n.target === "flags" && n.compression === "best-available" ? Ct.Base64 : void 0,
				timestampMode: n.sentAt
			};
			return r === "api" && e === "/i/v1/logs" && (o.batchKey = "logs"), n.transport === "sendBeacon" ? (t.instance._send_request(o), { statusCode: 202 }) : new Promise((e) => {
				if (o.callback = e, r === "flags" && t.instance.config.metrics?.flags) {
					let n;
					o.onDispatch = () => {
						n = pu();
					}, o.callback = (r) => {
						L(n) || t._recordFlagsDuration(a, r, pu() - n), e(r);
					};
				}
				t.instance._send_request(o);
			});
		}).apply(this, arguments);
	}
	_recordFlagsDuration(e, t, n) {
		try {
			var r;
			let i = t.statusCode || void 0, a = { "server.address": (ks(e)?.hostname ?? e).replace(/^\[(.*)\]$/, "$1") };
			i && (a["http.response.status_code"] = i);
			let o = ((e, t) => e ? 400 > e ? void 0 : String(e) : t?.name === "AbortError" ? "timeout" : "_OTHER")(i, t.error);
			o && (a["error.type"] = o);
			let s = Os();
			s && (a["client.timezone"] = s), (r = this.instance.metrics) == null || r.histogram("posthog.flags.request.duration", n, {
				unit: "ms",
				attributes: a,
				bounds: mu
			});
		} catch (e) {
			U.error("Failed to record the /flags request duration", e);
		}
	}
}, _u = {}, vu = 0, yu = () => {}, bu = "Consent opt in/out is not valid with cookieless_mode=\"always\" and will be ignored", xu = "Surveys module not available", Su = "sanitize_properties is deprecated. Use before_send instead", Cu = "Invalid value for property_denylist config: ", wu = [
	"$recording_status",
	"$sdk_debug_recording_script_not_loaded",
	"$sdk_debug_replay_url_trigger_status",
	"$sdk_debug_replay_event_trigger_status",
	"$sdk_debug_replay_linked_flag_trigger_status",
	"$sdk_debug_replay_rrweb_error",
	"$sdk_debug_replay_internal_buffer_length",
	"$sdk_debug_replay_flushed_size"
], Tu = [
	"$feature_flag_called",
	"$$heatmap",
	"$snapshot"
], Eu = (e) => e.charAt(0) === "$" && !P(Tu, e), Du = /^[A-Za-z0-9_-]{1,400}$/, Ou = /^fb\.[0-9]+\.[0-9]+\.[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)?$/, ku = /^fb\.[0-9]+\.[0-9]+\.[0-9]+$/, Au = [
	"token",
	"distinct_id",
	qe
], ju = "posthog", Mu = [...Nl].sort()[Nl.length - 1], Nu = (e) => {
	let t = {};
	return e && e !== "unset" && ("2025-11-30" > e || (t.strictMinimumDuration = !0), "2026-05-30" > e || (t.canvasCapture = { resolutionScale: .6 }), "2026-06-25" > e || (t.streamNetworkBody = !0), "2026-08-30" > e || (t.captureJsonLd = !0)), t;
}, Pu = (e) => {
	var t;
	return H({
		api_host: "https://us.i.posthog.com",
		flags_api_host: null,
		ui_host: null,
		asset_host: null,
		token: "",
		autocapture: !0,
		cross_subdomain_cookie: Ja(M?.location),
		persistence: "localStorage+cookie",
		persistence_name: "",
		cookie_persisted_properties: [],
		loaded: yu,
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
		debug: ht && R(ht?.search) && ht.search.indexOf("__posthog_debug=true") !== -1 || !1,
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
		secure_cookie: (j == null || (t = j.location) == null ? void 0 : t.protocol) === "https:",
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
			U.error("Bad HTTP status: " + e.statusCode + " " + e.text);
		},
		get_device_id: (e) => e,
		capture_performance: void 0,
		name: "posthog",
		bootstrap: {},
		disable_compression: !1,
		session_idle_timeout_seconds: 1800,
		person_profiles: A,
		before_send: void 0,
		get_current_url: void 0,
		request_queue_config: { flush_interval_ms: 3e3 },
		error_tracking: {},
		_onCapture: yu
	}, ((e) => ({
		rageclick: e && e >= "2026-05-30" ? {
			content_ignorelist: Ho,
			ignore_text_selection: !0
		} : !e || "2025-11-30" > e || { content_ignorelist: !0 },
		capture_pageview: !e || "2025-05-24" > e || "history_change",
		session_recording: Nu(e),
		external_scripts_inject_target: e && e >= "2026-01-30" ? "head" : "body",
		internal_or_test_user_hostname: e && e >= "2026-01-30" ? /^(localhost|127\.0\.0\.1)$/ : void 0,
		persistence_save_debounce_ms: e && e >= "2026-05-30" ? 250 : 0,
		split_storage: !(!e || "2026-05-30" > e),
		detect_google_search_app: !(!e || "2026-05-30" > e),
		disable_capture_url_hashes: !(!e || "2026-06-25" > e),
		cookieWinsOnConflict: !(!e || e === "unset" || "2026-08-29" > e)
	}))(e));
}, Fu = [
	["process_person", "person_profiles"],
	["xhr_headers", "request_headers"],
	["cookie_name", "persistence_name"],
	["disable_cookie", "disable_persistence"],
	["__preview_disable_beacon", "disable_beacon"],
	["store_google", "save_campaign_params"],
	["verbose", "debug"],
	["__preview_cookie_wins_on_conflict", "cookieWinsOnConflict"]
], Iu = (e) => {
	let t = {};
	for (let [n, r] of Fu) L(e[n]) || (t[r] = e[n]);
	let n = K({}, t, e), r = e.__preview_external_dependency_versioned_paths;
	return L(r) || (L(e.strict_script_versioning) && (n.strict_script_versioning = !!r), R(r) && L(e.asset_host) && (n.asset_host = r)), F(e.property_blacklist) && (L(e.property_denylist) ? n.property_denylist = e.property_blacklist : F(e.property_denylist) ? n.property_denylist = [...e.property_blacklist, ...e.property_denylist] : U.error(Cu + e.property_denylist)), n;
}, Lu = class {
	constructor() {
		this.__forceAllowLocalhost = !1, this._botFilterWarned = !1;
	}
	get _forceAllowLocalhost() {
		return this.__forceAllowLocalhost;
	}
	set _forceAllowLocalhost(e) {
		U.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = e;
	}
}, Ru = class e {
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
	_warnIfHistoryAutocaptureMissing() {
		if (this._hasWarnedAboutMissingHistoryAutocapture || !this._originalUserConfig || !("capture_pageview" in this._originalUserConfig) || H(H({}, e.__defaultExtensionClasses), this.config.__extensionClasses).historyAutocapture) return;
		let t = this.config.capture_pageview;
		(t === "history_change" || I(t) && (t.path || t.search || t.hash && !this.config.disable_capture_url_hashes)) && (this._hasWarnedAboutMissingHistoryAutocapture = !0, U.warn("capture_pageview is set to capture history changes, but the history autocapture extension is not loaded, so only the first pageview of each page load is captured. With the slim bundle, pass __extensionClasses: { historyAutocapture: AnalyticsExtensions.historyAutocapture } from 'posthog-js/dist/extension-bundles', or set capture_pageview: true to capture page loads only."));
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
			let t = this.config.get_device_id(ro());
			this.register({
				distinct_id: t,
				$device_id: t
			}), e.set_property(ze, ot);
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
		this._botFilterWarned = !1, this._isPageUnloading = !1, this._isShutdown = !1, this.webPerformance = new Lu(), this._personProcessingSetOncePropertiesSent = !1, this.version = r.LIB_VERSION, this._sessionRegisteredPropKeys = /* @__PURE__ */ new Set(), this._sessionRegisteredPropertiesStorageKey = "", this._internalEventEmitter = new kl(), this._extensions = [], this._extensionEventPropertyProducers = [], this._replayDebugPropertiesPaused = !1, this._hasStableInitialDistinctId = !1, this._hasWarnedAboutVolatileIdentity = !1, this._hasWarnedAboutMissingHistoryAutocapture = !1, this._isConsentTransition = !1, this._calculate_event_properties = this.calculateEventProperties.bind(this), this.config = Pu(), this.SentryIntegration = Ss, this.sentryIntegration = (e) => function(e, t) {
			let n = xs(e, t);
			return {
				name: bs,
				processEvent: (e) => n(e)
			};
		}(this, e), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this._initialPageviewCaptured = !1, this._visibilityStateListener = null, this._initialPersonProfilesConfig = null, this._cachedPersonProperties = null, this.scrollManager = new El(this), this.pageViewManager = new Cs(this), this.rateLimiter = new bc(this), this.requestRouter = new ql(this), this.consent = new Co(this), this.externalIntegrations = new $l(this);
		let t = e.__defaultExtensionClasses ?? {};
		this.featureFlags = t.featureFlags && new t.featureFlags(this), this.toolbar = t.toolbar && new t.toolbar(this), this.surveys = t.surveys && new t.surveys(this), this.conversations = t.conversations && new t.conversations(this), this.logs = t.logs && new t.logs(this), this.metrics = t.metrics && new t.metrics(this), this.experiments = t.experiments && new t.experiments(this), this.exceptions = t.exceptions && new t.exceptions(this), this.people = {
			set: (e, t, n) => {
				let r = R(e) ? { [e]: t } : e;
				this.setPersonProperties(r), n?.({});
			},
			set_once: (e, t, n) => {
				let r = R(e) ? { [e]: t } : e;
				this.setPersonProperties(void 0, r), n?.({});
			}
		}, this.on("eventCaptured", (e) => U.info(`send "${e?.event}"`, e));
	}
	init(t, n, r) {
		if (r && r !== ju) {
			let i = _u[r] ?? new e();
			return i._init(t, n, r), _u[r] = i, _u[ju][r] = i, i;
		}
		return this._init(t, n, r);
	}
	_init(e, t = {}, n) {
		var i;
		let a = R(e) ? e.trim() : "";
		if (!a) return U.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
		if (this.__loaded) return a === this.config?.token ? console.warn("[PostHog.js]", "You have already initialized PostHog! Re-initializing is a no-op") : console.warn("[PostHog.js]", `You have already initialized PostHog with a different project token! Re-initializing is a no-op, so events will keep going to the project this instance was initialized with. To capture into a second project, load PostHog once, then initialize a named instance after the SDK has loaded, e.g. posthog.init('${a}', { ... }, 'project2')`), this;
		this.__loaded = !0, this.config = Pu(t.defaults), t.debug = this._checkLocalStorageForDebug(t.debug), this._originalUserConfig = t, this._triggered_notifs = [], t.person_profiles ? this._initialPersonProfilesConfig = t.person_profiles : t.process_person && (this._initialPersonProfilesConfig = t.process_person);
		let o = Pu(t.defaults), s = Iu(t), c = K({}, o, s, {
			name: n,
			token: a
		});
		I(o.rageclick) && I(s.rageclick) && (c.rageclick = K({}, o.rageclick, s.rageclick)), I(o.session_recording) && I(s.session_recording) && (c.session_recording = K({}, o.session_recording, s.session_recording)), this.set_config(c), this.config.on_xhr_error && U.error("on_xhr_error is deprecated. Use on_request_error instead"), this.compression = t.disable_compression ? void 0 : uc.GZipJS;
		let l = this._is_persistence_disabled(), u = !this._inCookielessMode();
		if (this.persistence = new lc(this.config, l, !0, u), this.sessionPersistence = this.config.persistence === "sessionStorage" || this.config.persistence === "memory" ? this.persistence : new lc(H(H({}, this.config), {}, { persistence: "sessionStorage" }), l, !1, u), this._sessionRegisteredPropertiesStorageKey = "ph_" + (this.config.persistence_name || this.config.token) + "_session_registered_properties", this.config.persistence !== "memory" && !l && X._is_supported()) {
			let e = X._parse(this._sessionRegisteredPropertiesStorageKey);
			F(e) && e.forEach((e) => {
				R(e) && this._sessionRegisteredPropKeys.add(e);
			});
		} else X._remove(this._sessionRegisteredPropertiesStorageKey);
		let d = H({}, this.persistence.props), f = H({}, this.sessionPersistence.props);
		this.register({ $initialization_time: (/* @__PURE__ */ new Date()).toISOString() }), this._requestQueue = new Cl((e, t) => this._send_retriable_request(e, t), this.config.request_queue_config), this._retryQueue = new Tl(this), this.__request_queue = [];
		let p = this._inCookielessMode();
		p || (this.sessionManager = new Ml(this), this.sessionPropsManager = new Ol(this, this.sessionManager, this.persistence), this.sessionManager.onSessionId((e, t, n) => {
			(n != null && n.activityTimeout || n != null && n.sessionPastMaximumLength || n != null && n.crossTabAdoption) && this._clearSessionRegisteredProps();
		})), this._enrollFeatureFlags(), this.config.__preview_deferred_init_extensions ? (U.info("Deferring extension initialization to improve startup performance"), this._extensionInitTimeout = setTimeout(() => {
			this._extensionInitTimeout = void 0, this._initExtensions(p);
		}, 0)) : (U.info("Initializing extensions synchronously"), this._initExtensions(p)), r.DEBUG = r.DEBUG || this.config.debug, r.DEBUG && U.info("Starting in debug mode", {
			this: this,
			config: t,
			thisC: H({}, this.config),
			p: d,
			s: f
		}), this.config.identity_distinct_id && !((i = t.bootstrap) != null && i.distinctID) && (t.bootstrap = H(H({}, t.bootstrap), {}, {
			distinctID: this.config.identity_distinct_id,
			isIdentifiedID: !0
		}));
		let m = t.bootstrap?.distinctID;
		if (this._hasStableInitialDistinctId = !!m && !Pt(m), t.bootstrap?.distinctID) {
			let e = t.bootstrap.distinctID, n = this.get_distinct_id(), r = this.persistence.get_property(ze);
			if (t.bootstrap.isIdentifiedID && n != null && n !== e && r === "anonymous") this.identify(e);
			else if (t.bootstrap.isIdentifiedID && n != null && n !== e && r === "identified") U.warn("Bootstrap distinctID differs from an already-identified user. The existing identity is preserved. Call reset() before reinitializing if you intend to switch users.");
			else {
				let n = this.config.get_device_id(ro()), r = t.bootstrap.isIdentifiedID ? n : e;
				this.persistence.set_property(ze, t.bootstrap.isIdentifiedID ? st : ot), this.register({
					distinct_id: e,
					$device_id: r
				});
			}
		}
		if (p) this.register_once({
			distinct_id: Ke,
			$device_id: null
		}, "");
		else if (!this.get_distinct_id()) {
			let e = this.config.get_device_id(ro());
			this.register_once({
				distinct_id: e,
				$device_id: e
			}, ""), this.persistence.set_property(ze, ot);
		}
		return q(j, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), { passive: !1 }), q(j, "pageshow", (e) => {
			if (this._isPageUnloading = !1, !this._isShutdown) {
				var t;
				if (e.persisted && this.persistence) {
					let e = this.persistence.get_property(E), t = this.persistence.get_property(ze);
					this.persistence.load(), this._processCookieIdentityChange() || e === this.persistence.get_property("distinct_id") && t === this.persistence.get_property("$user_state") || this._processIdentityChange();
				}
				(t = this._retryQueue) == null || t.resume();
			}
		}), t.segment ? ys(this, () => this._loaded()) : this._loaded(), Mt(this.config._onCapture) && this.config._onCapture !== yu && (U.warn("onCapture is deprecated. Please use `before_send` instead"), this.on("eventCaptured", (e) => this.config._onCapture(e.event, e))), this.config.ip && U.warn("The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or \"Discard IP data\" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information."), this.config.disableDeviceModel || function() {
			return Fl.apply(this, arguments);
		}().then((e) => {
			e && this.register({ [re]: e });
		}).catch(yu), this;
	}
	_isSharedExtension(e) {
		let t = e;
		return R(t.name) && Mt(t.setup);
	}
	_enrollExtension(e, t) {
		var n = this;
		this._isSharedExtension(e) ? t.push(V(function* () {
			try {
				yield e.setup(n._getBrowserClientAdapter());
			} catch (t) {
				U.error(`Failed to set up extension "${e.name}"`, t);
				try {
					yield e.dispose?.call(e);
				} catch (t) {
					U.error(`Failed to dispose extension "${e.name}"`, t);
				}
			}
		})) : this._extensions.push(e);
	}
	_enrollFeatureFlags() {
		var t = this;
		let n = this.config.__extensionClasses?.featureFlags ?? e.__defaultExtensionClasses?.featureFlags;
		var r, i, a;
		if (n) {
			if (this.featureFlags && this.featureFlags instanceof n || ((r = this._featureFlagsReloadingUnsubscribe) == null || r.call(this), this._featureFlagsReloadingUnsubscribe = void 0, this.featureFlags = new n(this)), Mt(this.featureFlags.onReloading) && Mt(this.featureFlags.setup)) {
				if (!this._featureFlagsReloadingUnsubscribe) {
					this._featureFlagsReloadingUnsubscribe = this.featureFlags.onReloading(() => {
						this._internalEventEmitter.emit("featureFlagsReloading", !0);
					});
					let e = this.featureFlags;
					V(function* () {
						try {
							yield e.setup(t._getBrowserClientAdapter());
						} catch (n) {
							U.error("Failed to set up feature flags", n);
							let r = t._featureFlagsReloadingUnsubscribe;
							t._featureFlagsReloadingUnsubscribe = void 0;
							try {
								r?.();
							} catch (e) {
								U.error("Failed to unsubscribe feature flag reloading", e);
							}
							try {
								yield e.dispose();
							} catch (e) {
								U.error("Failed to dispose feature flags", e);
							}
						}
					})();
				}
			} else (i = (a = this.featureFlags).initialize) == null || i.call(a);
		}
	}
	_initExtensions(t) {
		let n = performance.now(), r = H(H({}, e.__defaultExtensionClasses), this.config.__extensionClasses), i = [];
		r.exceptions && this._extensions.push(this.exceptions = this.exceptions ?? new r.exceptions(this)), r.historyAutocapture && this._extensions.push(this.historyAutocapture = new r.historyAutocapture(this)), this._warnIfHistoryAutocaptureMissing(), r.tracingHeaders && this._extensions.push(this.tracingHeaders = new r.tracingHeaders(this)), r.siteApps && this._extensions.push(this.siteApps = new r.siteApps(this)), r.sessionRecording && !t && this._extensions.push(this.sessionRecording = new r.sessionRecording(this)), this.config.disable_scroll_properties || i.push(() => {
			this.scrollManager.startMeasuringScrollPosition();
		}), r.autocapture && this._enrollExtension(this.autocapture = new r.autocapture(this), i), r.surveys && this._enrollExtension(this.surveys = this.surveys ?? new r.surveys(this), i), r.logs && this._enrollExtension(this.logs = this.logs ?? new r.logs(this), i), r.metrics && this._extensions.push(this.metrics = this.metrics ?? new r.metrics(this)), r.conversations && this._extensions.push(this.conversations = this.conversations ?? new r.conversations(this)), r.productTours && this._extensions.push(this.productTours = new r.productTours(this)), r.heatmaps && this._extensions.push(this.heatmaps = new r.heatmaps(this)), r.webVitalsAutocapture && this._extensions.push(this.webVitalsAutocapture = new r.webVitalsAutocapture(this)), r.exceptionObserver && this._extensions.push(this.exceptionObserver = new r.exceptionObserver(this)), r.deadClicksAutocapture && this._extensions.push(this.deadClicksAutocapture = new r.deadClicksAutocapture(this, gs)), r.toolbar && this._extensions.push(this.toolbar = this.toolbar ?? new r.toolbar(this)), r.experiments && this._extensions.push(this.experiments = this.experiments ?? new r.experiments(this)), r.webMCP && this._extensions.push(this.webMCP = this.webMCP ?? new r.webMCP(this)), this._extensions.forEach((e) => {
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
				U.error("Error initializing extension:", e);
			}
		}
		let n = Math.round(performance.now() - t);
		this.register_for_session({
			[Je]: this.config.__preview_deferred_init_extensions ? "deferred" : "synchronous",
			[Ye]: n
		}), this.config.__preview_deferred_init_extensions && U.info(`PostHog extensions initialized (${n}ms)`);
	}
	_onRemoteConfig(e) {
		if (!M || !M.body) return U.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout(() => {
			this._onRemoteConfig(e);
		}, 500);
		if (this.config.__preview_deferred_init_extensions && (this._pendingRemoteConfig = e), this._lastRemoteConfig = e, this.compression = void 0, e.ok) {
			var t;
			let n = e.config;
			n.supportedCompression && !this.config.disable_compression && (this.compression = P(n.supportedCompression, uc.GZipJS) ? uc.GZipJS : P(n.supportedCompression, uc.Base64) ? uc.Base64 : void 0), (t = n.analytics) != null && t.endpoint && (this.analyticsDefaultEndpoint = n.analytics.endpoint);
		}
		this.set_config({ person_profiles: this._initialPersonProfilesConfig ? this._initialPersonProfilesConfig : A }), this._internalEventEmitter.emit("extensionsRemoteConfig", e), this._extensions.forEach((t) => t.onRemoteConfig?.call(t, e));
	}
	_loaded() {
		try {
			this.config.loaded(this);
		} catch (e) {
			U.critical("`loaded` function failed", e);
		}
		if (this._start_queue_if_opted_in(), this.config.internal_or_test_user_hostname && ht?.hostname) {
			let e = ht.hostname, t = this.config.internal_or_test_user_hostname;
			(typeof t == "string" ? e === t : t.test(e)) && this.setInternalOrTestUser();
		}
		this.config.capture_pageview && setTimeout(() => {
			(this.consent.isOptedIn() || this._inCookielessMode()) && this._captureInitialPageview();
		}, 1), this._remoteConfigLoader = new Sc(this), this._remoteConfigLoader.load();
	}
	_start_queue_if_opted_in() {
		var e;
		this.is_capturing() && this.config.request_batching && ((e = this._requestQueue) == null || e.enable());
	}
	_dom_loaded() {
		this.is_capturing() && Ha(this.__request_queue, (e) => this._send_retriable_request(e)), this.__request_queue = [], this._start_queue_if_opted_in();
	}
	_handle_unload() {
		var e, t, n, r, i, a;
		this._isPageUnloading = !0, (e = this.surveys) == null || (t = e.handlePageUnload) == null || t.call(e), (n = this.metrics) == null || n.flush("sendBeacon"), this.config.request_batching ? (this._shouldCapturePageleave() && this.capture(ut), (r = this.logs) == null || r.flushLogs("sendBeacon"), (i = this._requestQueue) == null || i.unload(), (a = this._retryQueue) == null || a.unload()) : this._shouldCapturePageleave() && this.capture(ut, null, { transport: "sendBeacon" });
	}
	_send_request(e) {
		Sl(this, e);
	}
	_send_retriable_request(e, t) {
		this._retryQueue ? this._retryQueue.retriableRequest(e, t) : this._send_request(t ? H(H({}, e), {}, { transport: t }) : e);
	}
	_execute_array(e) {
		vu++;
		try {
			let t, n = [], r = [], i = [];
			Ha(e, (e) => {
				if (e) {
					if (t = e[0], F(t)) i.push(e);
					else if (Mt(e)) try {
						e.call(this);
					} catch (t) {
						U.error("Error executing queued PostHog call", e, t);
					}
					else F(e) && t === "alias" ? n.push(e) : F(e) && t.indexOf("capture") !== -1 && Mt(this[t]) ? i.push(e) : r.push(e);
				}
			});
			let a = function(e, t) {
				Ha(e, function(e) {
					try {
						if (F(e[0])) {
							let n = t;
							G(e, function(e) {
								n = n[e[0]].apply(n, e.slice(1));
							});
						} else t[e[0]].apply(t, e.slice(1));
					} catch (t) {
						U.error("Error executing queued PostHog call", e, t);
					}
				});
			};
			a(n, this), a(r, this), a(i, this);
		} finally {
			vu--;
		}
	}
	push(t) {
		if (vu > 0 && F(t) && R(t[0])) {
			let n = e.prototype[t[0]];
			Mt(n) && n.apply(this, t.slice(1));
		} else this._execute_array([t]);
	}
	get _facebookClickIdChannel() {
		return {
			property: oe,
			persistenceKey: D,
			cookieName: "_fbc",
			pattern: Ou,
			register: (e, t) => this.persistence?.register({ [D]: {
				value: e,
				delivered: t
			} }),
			unregister: () => this.persistence?.unregister(D)
		};
	}
	get _facebookBrowserIdChannel() {
		return {
			property: se,
			persistenceKey: ce,
			cookieName: "_fbp",
			pattern: ku,
			register: (e, t) => this.persistence?.register({ [ce]: {
				value: e,
				delivered: t
			} }),
			unregister: () => this.persistence?.unregister(ce)
		};
	}
	_getPersistedMetaIdentifier(e) {
		let t = this.persistence?.get_property(e.persistenceKey);
		return R(t) && e.pattern.test(t) ? {
			value: t,
			delivered: !1
		} : I(t) && R(t.value) && e.pattern.test(t.value) ? {
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
		let t = Xa(e.cookieName);
		return R(t) && e.pattern.test(t) ? t : void 0;
	}
	_updateFacebookClickId(e, t, n, r) {
		if (!this.persistence) return;
		let i = this._facebookClickIdChannel, a = this._getPersistedMetaIdentifier(i);
		if (r) return void i.unregister();
		if (n) return R(t) && Ou.test(t) ? this._storeMetaIdentifier(i, t, a) : void i.unregister();
		let o = R(e) && Du.test(e) ? e : void 0, s = this._readMetaCookie(i);
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
		let r = this._facebookBrowserIdChannel, i = this._getPersistedMetaIdentifier(r);
		if (n) return void r.unregister();
		if (t) return R(e) && ku.test(e) ? this._storeMetaIdentifier(r, e, i) : void r.unregister();
		let a = this._readMetaCookie(r);
		return a ? this._storeMetaIdentifier(r, a, i) : i ? {
			value: i.value,
			pending: !i.delivered
		} : void 0;
	}
	_markMetaIdentifiersDelivered(e) {
		if (!this.persistence) return;
		let t = ({ channel: e, value: t }) => {
			let n = this._getPersistedMetaIdentifier(e);
			return n?.value === t && !n.delivered;
		}, n = e.filter(t);
		n.length && (this.persistence.refreshMetaIdentifiers(), n.filter(t).forEach(({ channel: e, value: t }) => e.register(t, !0)));
	}
	capture(e, t, n) {
		var r;
		if (!(this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue)) return void U.uninitializedWarning("posthog.capture");
		if (!this.is_capturing()) return void U.info(`Event "${e}" was not captured because capturing is disabled (opted out or consent pending).`);
		if (L(e) || !R(e)) return void U.error("No event name provided to posthog.capture");
		if (this._syncCookielessIdentity(), e === "$snapshot" && this._inCookielessMode()) return;
		let i = !this.config.opt_out_useragent_filter && this._is_bot();
		if (i && !this.config.__preview_capture_bot_pageviews) return this._botFilterWarned || (this._botFilterWarned = !0, console.warn("[PostHog.js] Events are being dropped because the user agent looks like a bot (first dropped event: \"" + e + "\"). Set `opt_out_useragent_filter: true` to capture them, e.g. in end-to-end tests. Note that logs from `captureLog` are not subject to this filter.")), void U.info(`Event "${e}" was not captured because the user agent looks like a bot. Set \`opt_out_useragent_filter: true\` to capture it.`);
		let a = n?.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
		if (a?.isRateLimited) return void U.critical("This capture call is ignored due to client rate limiting.");
		let o;
		t != null && t.$current_url && !R(t?.$current_url) && (U.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."), t == null || delete t.$current_url), e !== "$exception" || n != null && n._originatedFromCaptureException || U.warn("Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically."), this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && (o = this.sessionPersistence.update_campaign_params()), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
		let s = /* @__PURE__ */ new Date(), c = n?.timestamp || s, l = ur(n?.uuid, ro), u = {
			uuid: l,
			event: e,
			properties: this.calculateEventProperties(e, t || {}, c, l)
		};
		e === "$pageview" && this.config.__preview_capture_bot_pageviews && i && (u.event = "$bot_pageview", u.properties.$browser_type = "bot"), a && (u.properties.$lib_rate_limit_remaining_tokens = a.remainingTokens);
		let d = e === "$feature_flag_called" && !1 === u.properties.$feature_flag_has_experiment && !0 === this.get_property("$minimal_flag_called_events");
		n != null && n.$set && !d && (u.$set = n?.$set);
		let f = I(t?.$set) ? t.$set : void 0, p = F(t?.$unset) ? t.$unset : [], m = n?.$unset || [], h = (e) => {
			var t;
			let r = !!n?.$set && e in n.$set;
			return {
				hasProvided: r || !!f && e in f,
				provided: r ? n == null || (t = n.$set) == null ? void 0 : t[e] : f?.[e],
				unset: p.indexOf(e) !== -1 || m.indexOf(e) !== -1
			};
		};
		this.persistence.refreshMetaIdentifiersBeforeCapture();
		let g = h(oe), _ = h(se), v = [{
			channel: this._facebookClickIdChannel,
			hasProvided: g.hasProvided,
			update: this._updateFacebookClickId(o?.fbclid, g.provided, g.hasProvided, g.unset)
		}, {
			channel: this._facebookBrowserIdChannel,
			hasProvided: _.hasProvided,
			update: this._updateFacebookBrowserId(_.provided, _.hasProvided, _.unset)
		}];
		for (let { channel: e, hasProvided: t, update: n } of v) n && !0 === u.properties.$process_person_profile && n.pending && !t && !d && (u.$set = H({ [e.property]: n.value }, u.$set));
		let y = n?.$unset;
		y && (u.$unset = y);
		let b = d ? void 0 : this._calculate_set_once_properties(n?.$set_once, e !== ft, e === dt);
		if (b && (u.$set_once = b), n != null && n._noTruncate || (x = this.config.properties_string_max_length, u = function(e, t) {
			let n = /* @__PURE__ */ new Set();
			return function e(r, i) {
				if (r !== Object(r)) return t ? t(r) : r;
				if (n.has(r)) return;
				let a;
				if (n.add(r), F(r)) a = [], Ha(r, (t) => {
					a.push(e(t));
				});
				else {
					let t = {};
					G(Ht(r) ? Ka(r) : r, (r, i) => {
						n.has(r) || (t[i] = e(r, i));
					}), a = t;
				}
				return a;
			}(e);
		}(u, (e) => R(e) ? e.slice(0, x) : e)), u.timestamp = c, L(n?.timestamp) || (u.properties.$event_time_override_provided = !0, u.properties.$event_time_override_system_time = s), d && (u.properties = ((e, t = []) => {
			let n = {}, r = (t) => {
				e[t] !== void 0 && (n[t] = e[t]);
			};
			return mi.forEach(r), t.forEach(r), n;
		})(u.properties, Au)), e === pc.DISMISSED || e === pc.SENT) {
			let n = t?.[mc.SURVEY_ID], r = t?.[mc.SURVEY_ITERATION];
			Jl({
				id: n,
				current_iteration: r
			}), u.$set = H(H({}, u.$set), {}, { [Il({
				id: n,
				current_iteration: r
			}, e === pc.SENT ? "responded" : "dismissed")]: !0 });
		} else e === pc.SHOWN && (u.$set = H(H({}, u.$set), {}, { [mc.SURVEY_LAST_SEEN_DATE]: (/* @__PURE__ */ new Date()).toISOString() }));
		var x;
		if (e === _c.SHOWN) {
			let e = t?.[vc.TOUR_TYPE];
			e && (u.$set = H(H({}, u.$set), {}, { [`${vc.TOUR_LAST_SEEN_DATE}/${e}`]: (/* @__PURE__ */ new Date()).toISOString() }));
		}
		let S = H(H({}, u.properties.$set), u.$set);
		if (Nt(S) || this.setPersonPropertiesForFlags(S), !B(this.config.before_send)) {
			let e = this._runBeforeSend(u);
			if (!e) return;
			u = e, u.uuid = ur(u.uuid, ro);
		}
		this.sessionRecording && !this._replayDebugPropertiesPaused && Eu(e) && (this._replayDebugPropertiesPaused = !0, setTimeout(() => this._replayDebugPropertiesPaused = !1, 3e4));
		let C = [];
		v.forEach(({ channel: e, update: t }) => {
			let n = u.$set?.[e.property] ?? (I(u.properties?.$set) ? u.properties.$set[e.property] : void 0);
			t != null && t.pending && n === t.value && C.push({
				channel: e,
				value: t.value
			});
		}), this._internalEventEmitter.emit("eventCaptured", u);
		let w = n?._url ?? this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint), ee = n?._batchKey === "recordings" || /\/s\/(?:\?|$)/.test(w), T = H(H(H({
			method: "POST",
			url: w,
			data: u,
			compression: "best-available",
			preferSyncCompression: n?.send_instantly,
			timestampMode: ee ? "body" : "capture-body",
			batchKey: n?._batchKey
		}, ee && u.properties?.$session_id ? { batchGroup: u.properties.$session_id + (u.properties.$window_id ? `-${u.properties.$window_id}` : "") } : {}), n?.transport ? { transport: n.transport } : {}), C.length ? {
			fireCallbackOnDrop: !0,
			callback: (e) => {
				e.statusCode >= 200 && 300 > e.statusCode && this._markMetaIdentifiersDelivered(C);
			}
		} : {});
		if (!this.config.request_batching || n && !n?._batchKey || n?.send_instantly) {
			let e;
			!T.transport && !T.callback && Nt(this.config.request_headers ?? {}) && this._isPageUnloading && (e = "sendBeacon"), this._send_retriable_request(T, e);
		} else this._requestQueue.enqueue(T);
		return (r = this.featureFlags) == null || r.sendFlagCallsPendingCapture(), u;
	}
	_addCaptureHook(e) {
		return this.on("eventCaptured", (t) => e(t.event, t));
	}
	getExtension(e) {
		return this._browserClientAdapter?.getExtension(e);
	}
	_getBrowserClientAdapter() {
		return this._browserClientAdapter ??= new gu(this);
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
		let o = a ? void 0 : this.persistence.remove_event_timer(e), s = H({}, t);
		if (s.token = this.config.token, s.$config_defaults = this.config.defaults === "latest" ? Mu : this.config.defaults, this._inCookielessMode() && (s[qe] = !0), e === "$snapshot") {
			let e = H(H({}, this.persistence.properties()), this.sessionPersistence.properties());
			return s.distinct_id = e.distinct_id, (!R(s.distinct_id) && !Ft(s.distinct_id) || Pt(s.distinct_id)) && U.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), s;
		}
		let c = function(e, t, r, i = !1) {
			var a, o, s;
			if (!bt) return {};
			let c = e ? [...Ls, ...t || []] : [], [l, u] = Qn(bt), [d, f] = function(e) {
				for (let t = 0; nr.length > t; t++) {
					let [n, r, i] = nr[t], a = e.match(n);
					if (a) return [r, (i && e.match(i) || a)?.[1] || ""];
				}
				return ["", ""];
			}(bt), p = function() {
				return ("u" > typeof navigator ? navigator : void 0)?.brave ? { brave: !0 } : {};
			}(), m = {};
			L(r) || (m.detectGoogleSearchApp = r);
			let h = {}, g = (a = navigator) == null || (a = a.userAgentData) == null ? void 0 : a.platform, _ = navigator?.maxTouchPoints, v = j == null || (o = j.screen) == null ? void 0 : o.width, y = j == null || (s = j.screen) == null ? void 0 : s.height, b = j?.devicePixelRatio;
			L(g) || (h.userAgentDataPlatform = g), L(_) || (h.maxTouchPoints = _), L(v) || (h.screenWidth = v), L(y) || (h.screenHeight = y), L(b) || (h.devicePixelRatio = b);
			let x = K(Ga({
				$os: l,
				$os_version: u,
				$browser: Jn(bt, navigator.vendor, p, m),
				$webview_app: d,
				$webview_app_version: f,
				$device: $n(bt),
				$device_type: er(bt, h),
				$timezone: Os(),
				$timezone_offset: Xs()
			}), {
				$current_url: Fs(i ? fr(ht?.href) : ht?.href, c, zs),
				$host: ht?.host,
				$pathname: ht?.pathname,
				$raw_user_agent: bt.length > 1e3 ? bt.substring(0, 997) + "..." : bt,
				$browser_version: Xn(bt, navigator.vendor, p, m),
				$browser_language: Ws(),
				$browser_language_prefix: Gs(),
				$screen_height: j?.screen.height,
				$screen_width: j?.screen.width,
				$viewport_height: j?.innerHeight,
				$viewport_width: j?.innerWidth,
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
		this.sessionPropsManager && K(s, this.sessionPropsManager.getSessionProps());
		try {
			if (this.sessionRecording) {
				let t = this.sessionRecording.sdkDebugProperties, n = !this._replayDebugPropertiesPaused && Eu(e);
				for (let e in t) (n || P(wu, e)) && (s[e] = t[e]);
			}
			s.$sdk_debug_retry_queue_size = this._retryQueue?.length;
		} catch (e) {
			s.$sdk_debug_error_capturing_properties = String(e);
		}
		let l;
		if (this.requestRouter.region === Ul && (s.$lib_custom_api_host = this.config.api_host), l = e !== "$pageview" || a ? e !== "$pageleave" || a ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(r) : this.pageViewManager.doPageView(r, i), s = K(s, l), e === "$pageview" && M && (s.title = M.title), !L(o)) {
			let e = r.getTime() - o;
			s.$duration = parseFloat((e / 1e3).toFixed(3));
		}
		bt && this.config.opt_out_useragent_filter && (s.$browser_type = this._is_bot() ? "bot" : "browser");
		let u = this.persistence.properties(), d = this.sessionPersistence.properties(), f = s.$groups, p = u.$groups;
		I(f) && !Nt(f) && (s.$groups = H(H({}, I(p) ? p : {}), f)), G(["$referrer", "$referring_domain"], (e) => {
			e in u && delete d[e];
		});
		let m = {};
		if (this._extensionEventPropertyProducers.length > 0) for (let e of this._extensionEventPropertyProducers.slice()) try {
			K(m, e());
		} catch (e) {
			U.error("Failed to produce browser extension event properties", e);
		}
		s = K({}, c, u, d, H(H({}, m), s)), s.$is_identified = this._isIdentified(), F(this.config.property_denylist) ? G(this.config.property_denylist, function(e) {
			delete s[e];
		}) : U.error(Cu + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
		let h = this.config.sanitize_properties;
		h && (U.error(Su), s = h(s, e));
		let g = this._hasPersonProcessing();
		return s.$process_person_profile = g, g && !a && this._requirePersonProcessing("_calculate_event_properties"), s;
	}
	_calculate_set_once_properties(e, t = !0, n = !1) {
		if (!this.persistence || !this._hasPersonProcessing() || this._personProcessingSetOncePropertiesSent && !n) return e;
		let r = this.persistence.get_initial_props(), i = this.sessionPropsManager?.getSetOnceProps(), a = K({}, r, i || {}, e || {}), o = this.config.sanitize_properties;
		return o && (U.error(Su), a = o(a, "$set_once")), t && (this._personProcessingSetOncePropertiesSent = !0), Nt(a) ? void 0 : a;
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
		if (this.config.persistence === "memory" || this.sessionPersistence?._disabled || !X._is_supported()) return void X._remove(this._sessionRegisteredPropertiesStorageKey);
		let e = [];
		this._sessionRegisteredPropKeys.forEach((t) => e.push(t)), e.length > 0 ? X._set(this._sessionRegisteredPropertiesStorageKey, e) : X._remove(this._sessionRegisteredPropertiesStorageKey);
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
			error: xu
		}), () => {});
	}
	onSessionId(e) {
		return this.sessionManager?.onSessionId(e) ?? (() => {});
	}
	getSurveys(e, t = !1) {
		this.surveys ? this.surveys.getSurveys(e, t) : e([], {
			isLoaded: !1,
			error: xu
		});
	}
	getActiveMatchingSurveys(e, t = !1) {
		this.surveys ? this.surveys.getActiveMatchingSurveys(e, t) : e([], {
			isLoaded: !1,
			error: xu
		});
	}
	onActiveMatchingSurveysChanged(e) {
		return this.surveys ? this.surveys.onActiveMatchingSurveysChanged(e) : (e([], {
			isLoaded: !1,
			error: xu
		}), () => {});
	}
	renderSurvey(e, t) {
		var n;
		(n = this.surveys) == null || n.renderSurvey(e, t);
	}
	displaySurvey(e, t = Xl) {
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
			disabledReason: xu
		};
	}
	canRenderSurveyAsync(e, t = !1) {
		return this.surveys?.canRenderSurveyAsync(e, t) ?? Promise.resolve({
			visible: !1,
			disabledReason: xu
		});
	}
	_validateIdentifyId(e) {
		return !e || Pt(e) ? (U.critical("Unique user id has not been set in posthog.identify"), !1) : e === "$posthog_cookieless" ? (U.critical(`The string "${e}" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.`), !1) : !["distinct_id", "distinctid"].includes(e.toLowerCase()) && !["undefined", "null"].includes(e.toLowerCase()) || (U.critical(`The string "${e}" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.`), !1);
	}
	identify(e, t, n) {
		if (!this.__loaded || !this.persistence) return U.uninitializedWarning("posthog.identify");
		if (Ft(e) && (e = e.toString(), U.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), !this._validateIdentifyId(e) || !this._requirePersonProcessing("posthog.identify")) return;
		this._syncCookielessIdentity();
		let r = this.get_distinct_id(), i = this.persistence.syncCookieProperties() && this.get_distinct_id() !== r, a = this._processCookieIdentityChange(!1), o = this.persistence._beginCookieSyncSuppression(), s = !1;
		try {
			let r = this.get_distinct_id();
			this.register({ $user_id: e }), this.get_property("$device_id") || this.register_once({
				$had_persisted_distinct_id: !0,
				$device_id: r
			}, ""), e !== r && e !== this.get_property("__alias") && (this.unregister(ie), this.register({ distinct_id: e }));
			let o = (this.persistence.get_property("$user_state") || "anonymous") === ot, l = e !== r, u = !l && o;
			if (l && o) {
				var c;
				let i = this.config.reuseAnonymousId ? { distinct_id: e } : {
					distinct_id: e,
					$anon_distinct_id: r
				};
				this.persistence.set_property(ze, st), this.setPersonPropertiesForFlags({
					$set: t || {},
					$set_once: n || {}
				}, !1), this.config.cookieWinsOnConflict && this.persistence._publishSuppressedCookieSnapshot(), this.capture("$identify", i, {
					$set: t || {},
					$set_once: n || {}
				}) && (this._cachedPersonProperties = Hl(e, t, n)), (c = this.featureFlags) == null || c.setAnonymousDistinctId(this.config.reuseAnonymousId ? void 0 : r);
			} else if (u) {
				this.persistence.set_property(ze, st);
				let r = t || {}, i = n || {};
				this.setPersonPropertiesForFlags({
					$set: r,
					$set_once: i
				}, !1), this.config.cookieWinsOnConflict && this.persistence._publishSuppressedCookieSnapshot(), this.capture("$set", {
					$set: r,
					$set_once: i
				}) && (this._cachedPersonProperties = Hl(e, t, n));
			} else (t || n) && this.setPersonProperties(t, n);
			l || i || a ? (this.reloadFeatureFlags(), this.featureFlags ? this.featureFlags.resetFlagCallReported() : this.unregister(m)) : u && (t || n) && this.reloadFeatureFlags(), s = !0;
		} finally {
			o && this.persistence._endCookieSyncSuppression(s);
		}
	}
	setPersonProperties(e, t) {
		if (!e && !t || !this._requirePersonProcessing("posthog.setPersonProperties")) return;
		let n = Hl(this.get_distinct_id(), e, t);
		this._cachedPersonProperties === n ? U.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.") : (this.setPersonPropertiesForFlags({
			$set: e || {},
			$set_once: t || {}
		}, !0), this.capture("$set", {
			$set: e || {},
			$set_once: t || {}
		}) && (this._cachedPersonProperties = n));
	}
	unsetPersonProperties(e) {
		var t;
		let n = (F(e) ? e : [e]).filter((e) => R(e) && e.length > 0);
		n.length !== 0 && this._requirePersonProcessing("posthog.unsetPersonProperties") && ((t = this.featureFlags) == null || t.unsetPersonPropertiesForFlags(n, !0), this.capture("$set", { $unset: n }), this._cachedPersonProperties = null);
	}
	group(e, t, n) {
		var r;
		if (!e || !t) return void U.error("posthog.group requires a group type and group key");
		(r = this.persistence) == null || r.syncCookieProperties(), this._processCookieIdentityChange();
		let i = this.getGroups(), a = i[e] !== t;
		if (a && this.resetGroupPropertiesForFlags(e), this.register({ $groups: H(H({}, i), {}, { [e]: t }) }), (a || n) && this._hasPersonProcessing()) {
			let r = {
				$group_type: e,
				$group_key: t
			};
			n && (r.$group_set = n), this.capture(ft, r);
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
		let t = Lt(e) ? e : e?.resetDeviceID, n = Lt(e) || e == null ? void 0 : e.bootstrap;
		this._reset(t, !1, n);
	}
	_reset(e, t = !1, n) {
		var r, i, a, o, s;
		if (U.info("reset"), !this.__loaded) return U.uninitializedWarning("posthog.reset");
		let c = n?.sessionID;
		this.config.bootstrap = n || this._originalUserConfig?.bootstrap || {}, (r = this.featureFlags) == null || (i = r.updateConfig) == null || i.call(r, this.config, this._shouldDisableFlags());
		let l = this.get_property(ne), u = this.get_property(re), d = this.get_property(_e);
		(a = this.sessionRecording) == null || a.flushBeforeIdentityReset();
		let f = this.is_capturing();
		t || this.consent.reset(), t || !f || this.is_capturing() || console.warn("[PostHog.js]", "reset() cleared the stored consent, and capturing is now off because of `opt_out_capturing_by_default`. Call opt_in_capturing() again, and prefer calling reset() before opting in rather than after.");
		let p = (o = this.persistence) == null || (s = o._beginCookieSyncSuppression) == null ? void 0 : s.call(o), m = this._isConsentTransition;
		this._isConsentTransition = m || t;
		let h = !1;
		try {
			var g, _, v, y, b, x, S, C, w, ee, T, te;
			if ((g = this.persistence) == null || g.clear(), (_ = this.sessionPersistence) == null || _.clear(), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys(), L(d) || (ee = this.persistence) == null || ee.register({ $session_recording_remote_config: d }), (v = this.surveys) == null || v.reset(), (y = this.featureFlags) == null || y.reset(), (b = this.conversations) == null || b.reset(), (x = this.logs) == null || x.reset(), (S = this.metrics) == null || S.reset(), (C = this.persistence) == null || C.set_property("$user_state", "anonymous"), (w = this.sessionManager) == null || w.resetSessionId(), this._cachedPersonProperties = null, this.config.cookieless_mode === "always") this.register_once({
				distinct_id: Ke,
				$device_id: null
			}, "");
			else {
				let t = this.config.get_device_id(ro());
				this.register_once({
					distinct_id: t,
					$device_id: e ? t : l
				}, ""), e || L(u) || this.register({ [re]: u });
			}
			if (this.register({ $last_posthog_reset: (/* @__PURE__ */ new Date()).toISOString() }, 1), n && (n.distinctID && !this._inCookielessMode() && ((te = this.persistence) == null || te.set_property("$user_state", n.isIdentifiedID ? "identified" : "anonymous"), this.register({ distinct_id: n.distinctID })), (T = this.featureFlags) == null || T.initialize(), !B(c) && !this.sessionManager?.setBootstrapSessionId(c, !0))) {
				let e = H({}, n);
				delete e.sessionID, this.config.bootstrap = e;
			}
			delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, h = !0;
		} finally {
			var E, ie;
			this._isConsentTransition = m, p && ((E = this.persistence) == null || (ie = E._endCookieSyncSuppression) == null || ie.call(E, h));
		}
		var ae;
		this._lastRemoteConfig && ((ae = this.conversations) == null || ae.onRemoteConfig(this._lastRemoteConfig)), this.reloadFeatureFlags();
	}
	shutdown(e) {
		var t = this;
		return V(function* () {
			if (!t.__loaded) return void U.uninitializedWarning("posthog.shutdown");
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
				e && Mt(e.then) && e.then(void 0, (e) => {
					U.error("Error during shutdown", e);
				});
			} catch (e) {
				U.error("Error during shutdown", e);
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
		return e === this.get_property("$people_distinct_id") ? (U.critical("Attempting to create alias for existing People user - aborting."), -2) : this._requirePersonProcessing("posthog.alias") ? (L(t) && (t = this.get_distinct_id()), e === t ? (U.warn("alias matches current distinct_id - skipping api call."), this.identify(e), -1) : (this._register_single(ie, e), this.capture("$create_alias", {
			alias: e,
			distinct_id: t
		}))) : void 0;
	}
	set_config(e) {
		let t = H({}, this.config);
		if (I(e)) {
			var n, i, a, o, s, c, l, u, d, f, p, m, h, g;
			K(this.config, Iu(e));
			let x = this._is_persistence_disabled();
			if (this.persistence) {
				let e = this.config.persistence === "sessionStorage" || this.config.persistence === "memory";
				var _, v;
				if (e && this.sessionPersistence !== this.persistence && ((_ = this.sessionPersistence) == null || _.remove(), (v = this.sessionPersistence) == null || v.destroy()), this.persistence.update_config(this.config, t, x), e) this.sessionPersistence = this.persistence;
				else if (this.sessionPersistence === this.persistence) this.sessionPersistence = new lc(H(H({}, this.config), {}, { persistence: "sessionStorage" }), x, !1);
				else {
					var y;
					(y = this.sessionPersistence) == null || y.update_config(H(H({}, this.config), {}, { persistence: "sessionStorage" }), H(H({}, t), {}, { persistence: "sessionStorage" }), x);
				}
			}
			let S = this._checkLocalStorageForDebug(this.config.debug);
			var b;
			Lt(S) && (this.config.debug = S), Lt(this.config.debug) && (this.config.debug ? (r.DEBUG = !0, Y._is_supported() && Y._set("ph_debug", !0), U.info("set_config", {
				config: e,
				oldConfig: t,
				newConfig: H({}, this.config)
			})) : (r.DEBUG = !1, Y._is_supported() && Y._remove("ph_debug"))), (n = this.featureFlags) == null || (i = n.updateConfig) == null || i.call(n, this.config, this._shouldDisableFlags()), (a = this.exceptionObserver) == null || a.onConfigChange(), (o = this.exceptions) == null || o.onConfigChange(), (s = this.metrics) == null || s.onConfigChange(), (c = this.webMCP) == null || c.startIfEnabled(), (l = this.sessionRecording) == null || l.startIfEnabledOrStop(), (u = this.tracingHeaders) == null || u.startIfEnabledOrStop(), (d = this.autocapture) == null || d.startIfEnabled(), (f = this.heatmaps) == null || f.startIfEnabled(), ("capture_pageview" in e || "disable_capture_url_hashes" in e) && ((b = this.historyAutocapture) == null || b.startIfEnabledOrStop()), (p = this.exceptionObserver) == null || p.startIfEnabledOrStop(), (m = this.deadClicksAutocapture) == null || m.startIfEnabledOrStop(), (h = this.surveys) == null || h.loadIfEnabled(), this._sync_opt_out_with_persistence(), (g = this.externalIntegrations) == null || g.startIfEnabledOrStop(), !t.segment && this.config.segment && this.persistence && ys(this, yu, !1);
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
			return this.exceptions.sendExceptionEvent(H(H({}, n), t));
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
		let e = this.config.name ?? ju;
		return e !== ju && (e = "posthog." + e), e;
	}
	_isIdentified() {
		return this.persistence?.get_property("$user_state") === "identified" || this.sessionPersistence?.get_property("$user_state") === "identified";
	}
	_hasPersonProcessing() {
		var e, t;
		return !(this.config.person_profiles === "never" || this.config.person_profiles === "identified_only" && !this._isIdentified() && Nt(this.getGroups()) && !((e = this.persistence) != null && (e = e.props) != null && e.__alias) && !((t = this.persistence) != null && (t = t.props) != null && t.$epp));
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
		return this.config.person_profiles === "never" ? (U.error(e + " was called, but process_person is set to \"never\". This call will be ignored."), !1) : (this._warnIfVolatileIdentityWithoutStableId(), this._register_single(Ge, !0), !0);
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
		var n, r, i;
		if (this.config.cookieless_mode === "always") return void U.warn(bu);
		if (this._inCookielessMode()) {
			var a, o, s;
			(a = this.sessionRecording) == null || a.dispose({ discardBufferedEvents: !0 }), this._reset(!0, !0), (o = this.sessionManager) == null || o.destroy(), (s = this.pageViewManager) == null || s.destroy(), this.sessionManager = new Ml(this), this.pageViewManager = new Cs(this), this.persistence && (this.sessionPropsManager = new Ol(this, this.sessionManager, this.persistence));
			let t = this.config.__extensionClasses?.sessionRecording ?? e.__defaultExtensionClasses?.sessionRecording;
			var c, l;
			t && (this.sessionRecording = this._replaceExtension(this.sessionRecording, new t(this)), this._lastRemoteConfig && ((c = this.sessionRecording) == null || (l = c.onRemoteConfig) == null || l.call(c, this._lastRemoteConfig)));
		}
		let u = this.consent.consent === 1;
		var d, f;
		u && this._syncCookielessIdentity(), this.consent.optInOut(!0), this._sync_opt_out_with_persistence(), this._start_queue_if_opted_in(), (n = this.sessionRecording) == null || n.startIfEnabledOrStop(), this.config.cookieless_mode == "on_reject" && ((d = this.surveys) == null || d.loadIfEnabled(), (f = this.conversations) == null || f.loadIfEnabled()), u || !L(t?.captureEventName) && !(t != null && t.captureEventName) || this.capture(t?.captureEventName ?? "$opt_in", t?.captureProperties, { send_instantly: !0 }), (r = this.persistence) == null || r.syncCookieProperties(), this._processCookieIdentityChange(), (i = this.featureFlags) == null || i.sendFlagCallsPendingCapture(), this.config.capture_pageview && this._captureInitialPageview();
	}
	opt_out_capturing() {
		this.config.cookieless_mode === "always" ? U.warn(bu) : (this.consent.optInOut(!1), this._sync_opt_out_with_persistence(), this.config.cookieless_mode === "on_reject" && this._enterCookielessMode());
	}
	_enterCookielessMode() {
		var e, t;
		let n = this.sessionRecording;
		n?.dispose({ discardBufferedEvents: !0 }), this.get_distinct_id() !== "$posthog_cookieless" && this._reset(!0, !0), this.register({
			distinct_id: Ke,
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
		return mt ? Pl(mt, this.config.custom_blocked_useragents) : void 0;
	}
	_captureInitialPageview() {
		M && (M.visibilityState === "visible" ? this._initialPageviewCaptured || (this._initialPageviewCaptured = !0, this.capture(lt, { title: M.title }, { send_instantly: !0 }), this._visibilityStateListener &&= (M.removeEventListener(y, this._visibilityStateListener), null)) : this._visibilityStateListener || (this._visibilityStateListener = this._captureInitialPageview.bind(this), q(M, y, this._visibilityStateListener)));
	}
	debug(e) {
		!1 === e ? (j?.console.log("You've disabled debug mode."), this.set_config({ debug: !1 })) : (j?.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), this.set_config({ debug: !0 }));
	}
	_shouldDisableFlags() {
		let e = this._originalUserConfig || {};
		return "advanced_disable_flags" in e ? !!e.advanced_disable_flags : !1 === this.config.advanced_disable_flags ? !0 === this.config.advanced_disable_decide ? (U.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."), !0) : function(e, t, n, r, i) {
			let a = t in e && !B(e[t]), o = n in e && !B(e[n]);
			return a ? e[t] : !!o && (i && i.warn(`Config field '${n}' is deprecated. Please use '${t}' instead. The old field will be removed in a future major version.`), e[n]);
		}(e, "advanced_disable_flags", "advanced_disable_decide", 0, U) : !!this.config.advanced_disable_flags;
	}
	_runBeforeSend(e) {
		if (B(this.config.before_send)) return e;
		let t = Object.keys(e.properties ?? {}).filter(zt), n = F(this.config.before_send) ? this.config.before_send : [this.config.before_send], r = e;
		for (let t of n) try {
			if (r = t(r), B(r)) {
				let t = `Event '${e.event}' was rejected in beforeSend function`;
				return Rt(e.event) ? U.warn(`${t}. This can cause unexpected behavior.`) : U.info(t), null;
			}
			r.properties && !Nt(r.properties) || U.warn(`Event '${e.event}' has no properties after beforeSend function, this is likely an error.`);
		} catch (t) {
			return U.error(`Error in beforeSend function for event '${e.event}':`, t), null;
		}
		for (let n of t) if (r.properties && B(r.properties[n])) return U.warn(`Event '${e.event}' had its '${n}' property removed in a beforeSend function. This property is required for ingestion, so the event will be dropped.`), null;
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
		let t = Lt(e) && !e, n = Y._is_supported() && Y._get("ph_debug") === "true";
		return !t && (!!n || e);
	}
};
Ru.__defaultExtensionClasses = {}, Ru._noopLogger = (() => {
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
	for (let n = 0; t.length > n; n++) e.prototype[t[n]] = Wa(e.prototype[t[n]]);
}(Ru, ["identify"]);
var zu = ["[data-ph-capture-value]"], Bu = class {
	constructor(e) {
		this._instance = e;
	}
	refresh(e) {
		let t = this._instance.config, n = I(t.autocapture) ? t.autocapture : void 0;
		e.enabled = !!t.autocapture, e.rageclick = t.rageclick, e.maskAllElementAttributes = t.mask_all_element_attributes, e.maskAllText = t.mask_all_text, e.disableCaptureUrlHashes = t.disable_capture_url_hashes, e.getCurrentUrl = t.get_current_url, e.remoteRequestsDisabled = this._instance._shouldDisableFlags(), e.url_allowlist = n?.url_allowlist, e.url_ignorelist = n?.url_ignorelist, e.dom_event_allowlist = n?.dom_event_allowlist, e.element_allowlist = n?.element_allowlist, e.css_selector_allowlist = n?.css_selector_allowlist, e.css_selector_ignorelist = n?.css_selector_ignorelist, e.element_attribute_ignorelist = n?.element_attribute_ignorelist, e.capture_copied_text = n?.capture_copied_text, e.capture_value_css_selector_allowlist = n?.capture_value_css_selector_allowlist ?? zu;
	}
}, Vu = W("[ExceptionAutocapture]"), Hu = () => {}, Uu = (e) => {
	if (Mt(e)) return e.__posthog_layer__ ?? e.__rrweb_layer__;
};
function Wu(e, t, n) {
	try {
		if (!(t in e)) return Hu;
		let r = { next: e[t] }, i = n(function(...e) {
			return r.next.apply(this, e);
		});
		return Mt(i) && (i.prototype = i.prototype || {}, Object.defineProperties(i, {
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
			let n = e[t], a = Uu(n);
			for (; a;) {
				if (a.next === i) return void (a.next = r.next);
				n = a.next, a = Uu(n);
			}
		};
	} catch {
		return Hu;
	}
}
var Gu = W("[TracingHeaders]"), Ku = W("[Web Vitals]"), qu = 9e5, Ju = [
	"CLS",
	"FCP",
	"INP",
	"LCP"
], Yu = ["INP", "LCP"], Xu = [
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
], Zu = "disabled", Qu = "lazy_loading", $u = W("[SessionRecording]"), ed = [
	Xe,
	Ze,
	Qe,
	$e,
	et,
	tt,
	nt,
	rt,
	it
], td = W("[Heatmaps]");
function nd(e) {
	return I(e) && "clientX" in e && "clientY" in e && Ft(e.clientX) && Ft(e.clientY);
}
var rd = W("[Product Tours]"), id = (e) => !e.config.disable_product_tours && !!e.persistence?.get_property(O), ad = ["$set_once", "$set"], od = W("[SiteApps]"), sd = "Error while initializing PostHog app with config id ";
function cd(e, t, n) {
	if (B(e)) return !1;
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
var ld = class {
	constructor(e) {
		this._host = e, this._actionRegistry = /* @__PURE__ */ new Set(), this._actionEvents = /* @__PURE__ */ new Set(), this._debugEventEmitter = new kl(), this._checkStep = (e, t) => this._checkStepEvent(e, t) && this._checkStepUrl(e, t) && this._checkStepElement(e, t) && this._checkStepProperties(e, t), this._checkStepEvent = (e, t) => !t?.event || e?.event === t?.event;
	}
	init() {
		L(this._host?.subscribeCapture) || (this._captureHookUnsubscribe = this._host?.subscribeCapture((e, t) => {
			this.on(e, t);
		}));
	}
	dispose() {
		var e, t, n;
		(e = this._captureHookUnsubscribe) == null || e.call(this), this._captureHookUnsubscribe = void 0, (t = this._host) == null || (n = t.setElementSelectors) == null || n.call(t, /* @__PURE__ */ new Set(), this), this._debugEventEmitter = new kl();
	}
	register(e) {
		if (!L(this._host?.subscribeCapture) && (e.forEach((e) => {
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
			if (!a || typeof a != "string" || !cd(a, t.url, t.url_matching || "contains")) return !1;
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
		if (r.length > 0) return r.some((e) => cd(e.href, t.href, t.href_matching || "exact"));
		let i = (e == null || (n = e.properties) == null ? void 0 : n.$elements_chain) || "";
		return !!i && cd(function(e) {
			let t = e.match(/(?::|")href="(.*?)"/);
			return t ? t[1] : "";
		}(i), t.href, t.href_matching || "exact");
	}
	_checkStepText(e, t) {
		var n;
		if (!t?.text) return !0;
		let r = this._getElementsList(e);
		if (r.length > 0) return r.some((e) => cd(e.text, t.text, t.text_matching || "exact") || cd(e.$el_text, t.text, t.text_matching || "exact"));
		let i = (e == null || (n = e.properties) == null ? void 0 : n.$elements_chain) || "";
		return !!i && (a = function(e) {
			let t = [], n = /(?::|")text="(.*?)"/g, r;
			for (; !B(r = n.exec(e));) t.includes(r[1]) || t.push(r[1]);
			return t;
		}(i), o = t.text, s = t.text_matching || "exact", a.some((e) => cd(e, o, s)));
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
		return !t?.properties || t.properties.length === 0 || Vl(t.properties.reduce((e, t) => {
			let n = F(t.value) ? t.value.map(String) : t.value == null ? [] : [String(t.value)];
			return e[t.key] = {
				values: n,
				operator: t.operator || "exact"
			}, e;
		}, {}), e?.properties);
	}
}, ud = class {
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
		return !!e && Vl(e.propertyFilters, t?.properties);
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
		let r = (n === dc.Activation ? this._eventToItems : this._cancelEventToItems).get(e), i = [];
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
		L(this._host.subscribeCapture) || (this._setupEventBasedItems(e, t), this._setupActionBasedItems(e, t));
	}
	_setupActionBasedItems(e, t) {
		let n = e.filter((e) => {
			var t;
			return (t = e.conditions) == null || (t = t.actions) == null || (t = t.values) == null ? void 0 : t.length;
		});
		var r;
		if (t && this._actionToItems.clear(), n.length === 0) return void (t && ((r = this._actionMatcher) == null || r.replace([])));
		this._actionMatcher || (this._actionMatcher = new ld(this._host), this._actionMatcher.init(), this._actionMatcher._addActionHook((e) => this.onAction(e)));
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
		}), a = this._buildEventToItemMap(e, dc.Activation), o = this._buildEventToItemMap(e, dc.Cancellation);
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
			let n = this._getMatchingItems(e, t, dc.Cancellation);
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
		let o = this._getMatchingItems(e, t, dc.Activation);
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
		this._writeActivationTimestamps(H(H({}, t), {}, { [e]: Date.now() }));
	}
	_clearActivationTimestamps(e) {
		if (!this._getActivationTimestampsKey()) return;
		let t = this._getRawActivationTimestamps(), n = {}, r = !1;
		for (let [i, a] of Object.entries(t)) e.includes(i) ? r = !0 : n[i] = a;
		r && (Nt(n) ? this._clearActivationTimestampsStore() : this._writeActivationTimestamps(n));
	}
	_clearAllActivationTimestamps() {
		this._getActivationTimestampsKey() && this._clearActivationTimestampsStore();
	}
	getActivationTimestamp(e) {
		if (!this._getPersistedActivatedIds().includes(e)) return;
		let t = this._getRawActivationTimestamps()[e];
		return Ft(t) ? t : void 0;
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
			e.length > 0 && (this._setActivatedItems([]), e.filter((e) => Ft(t[e])).forEach((e) => this._cancelPendingItem(e))), this._clearActivationSession(), this._clearAllActivationTimestamps(), e.length > 0 && this._notifyActivationChanged();
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
}, dd = class extends ud {
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
		return T;
	}
	_writeActivationTimestamps(e) {
		this._client.kv.set({ [T]: e });
	}
	_clearActivationTimestampsStore() {
		this._client.kv.remove(T);
	}
	_shouldPersistArmedActivation(e) {
		var t;
		let n;
		this._getItems((t) => {
			n = t.find((t) => t.id === e);
		});
		let r = n == null || (t = n.appearance) == null ? void 0 : t.surveyPopupDelaySeconds;
		return Ft(r) && r > 0;
	}
	_getShownEventName() {
		return pc.SHOWN;
	}
	_getItems(e) {
		this._surveys.getSurveys(e);
	}
	_cancelPendingItem(e) {
		this._surveys.cancelPendingSurvey(e);
	}
	_getLogger() {
		return Q;
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
		if (e === pc.SENT && !1 === (n == null || (r = n.properties) == null ? void 0 : r.$survey_completed)) return "ignore";
		let i;
		return this._getItems((e) => {
			i = e.find((e) => e.id === t);
		}), !i || function(e) {
			var t;
			return Ll(e) && !!((t = e.conditions) != null && (t = t.events) != null && t.repeatedActivation) || e.schedule === "always";
		}(i) ? e === pc.SHOWN ? "consume" : "ignore" : e === pc.SHOWN ? "persist" : e === pc.DISMISSED || e === pc.SENT ? "consume" : "ignore";
	}
	getSurveys() {
		return this.getActivatedIds();
	}
	getEventToSurveys() {
		return this.getEventToItemsMap();
	}
}, fd = (e, t) => e?.then ? e.then(t) : t(e), pd = "SDK is not enabled or survey functionality is not yet loaded", md = "Disabled. Not loading surveys.", hd = class {
	constructor(e) {
		this._configSource = e, this.name = "surveys", this._surveyEventReceiver = null, this._surveyManager = null, this._isInitializingSurveys = !1, this._surveyInitializationFailed = !1, this._surveyCallbacks = [], this._activeMatchingSurveyCallbacks = [], this._getSurveysInFlightPromise = null, this._lastSurveyRefreshFailedAt = null, this._disposed = !1, this._renderTimeouts = /* @__PURE__ */ new Set(), this.onRemoteConfig = (e) => {
			if (this._disposed || this._config.disableSurveys) return;
			if (!e.ok) return this._surveyInitializationFailed = !0, this._notifyActiveMatchingSurveyCallbacks({
				isLoaded: !1,
				error: "Remote config unavailable. Not loading surveys."
			}), Q.warn("Remote config unavailable. Not loading surveys.");
			let t = e.config.surveys;
			if (B(t)) return Q.warn("Flags not loaded yet. Not loading surveys.");
			this._isSurveysEnabled = Lt(t) ? t : t.length > 0, Q.info(`flags response received, isSurveysEnabled: ${this._isSurveysEnabled}`), this.loadIfEnabled();
		}, this._notifyActiveMatchingSurveyCallbacks = (e) => {
			this._activeMatchingSurveyCallbacks.slice().forEach((t) => this._notifyActiveMatchingSurveyCallback(t, e));
		};
	}
	setup(e) {
		if (!this._disposed) return this._initializingClient = e, fd(e.kv.initialize(), () => {
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
		if (this._isInitializingSurveys) return void Q.info("Already initializing surveys, skipping...");
		if (e.disableSurveys) return void Q.info(md);
		if (e.cookielessMode && this._client.isOptedOut) return void Q.info("Not loading surveys in cookieless mode without consent.");
		let t = this._configSource.getExtensions();
		if (!t) return void this._handleSurveyLoadError("PostHog Extensions not found.");
		if (L(this._isSurveysEnabled) && !e.advancedEnableSurveys) return;
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
		n && this._registerEventOrActionBasedSurveys(n), Q.info("Surveys loaded successfully"), this._startActiveMatchingSurveyConditions(), this._notifyActiveMatchingSurveyCallbacks(), this._notifySurveyCallbacks({ isLoaded: !0 });
	}
	_createEventReceiver(e, t) {
		return new dd(e, this, void 0, t);
	}
	_handleSurveyLoadError(e, t) {
		this._surveyInitializationFailed = !0, Q.error(e, t), this._notifyActiveMatchingSurveyCallbacks({
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
			error: pd
		});
		if (this._config.disableSurveys) return Q.info(md), e([]);
		let r = n.kv.get(x);
		if (r && !t) return e(r, { isLoaded: !0 }), void (this._shouldBackgroundRefreshSurveys() && this.getSurveys(() => {}, !0));
		if (this._getSurveysInFlightPromise) return void this._getSurveysInFlightPromise.then(({ surveys: t, context: n }) => {
			this._disposed || e(t, n);
		}).catch((e) => Q.error("Error in survey callback", e));
		let i = n.sendRequest("/api/surveys/", {
			method: "GET",
			query: { token: n.projectToken },
			sentAt: "query",
			timeoutMs: this._config.requestTimeoutMs
		}).then((e) => {
			try {
				return this._handleSurveyResponse(n, e);
			} catch (e) {
				return Q.error("Error processing surveys response", e), this._handleSurveyResponse(n, {
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
		}, a).catch((e) => Q.error("Error in survey callback", e));
	}
	_handleSurveyResponse(e, t) {
		if (this._disposed) return {
			surveys: [],
			context: {
				isLoaded: !1,
				error: pd
			}
		};
		let n = t.statusCode;
		if (n !== 200 || !t.json) {
			let e = `Surveys API could not be loaded, status: ${n}`;
			return n === 0 ? t.error || Q.warn(e) : Q.error(e), this._lastSurveyRefreshFailedAt = Date.now(), {
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
		}(e) && (Ll(e) || function(e) {
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
		return Ft(e) && Date.now() - e > 3e5;
	}
	_isSurveyRefreshBackingOff() {
		return Ft(this._lastSurveyRefreshFailedAt) && 3e5 > Date.now() - this._lastSurveyRefreshFailedAt;
	}
	markSurveyAsSeen(e, t) {
		Jl({
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
				Q.error("Error in survey callback", e);
			}
		}
	}
	getActiveMatchingSurveys(e, t = !1) {
		if (!B(this._surveyManager)) return this._surveyManager.getActiveMatchingSurveys(e, t);
		Q.warn("init was not called");
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
		return this._config.disableSurveys || !this._surveyManager && this._surveyInitializationFailed && !this._isInitializingSurveys || !n && !B(this._lastSurveyRefreshFailedAt) && !this._getSurveysInFlightPromise ? this._notifyActiveMatchingSurveyCallback(t, { isLoaded: !1 }) : this._surveyManager && this._notifyActiveMatchingSurveyCallback(t), () => {
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
				Q.error("Error in active matching surveys callback", e);
			}
		};
		try {
			t && !t.isLoaded ? r([]) : this.getActiveMatchingSurveys(r);
		} catch (e) {
			Q.error("Error in active matching surveys callback", e);
		}
	}
	_getSurveyById(e) {
		let t = null;
		return this.getSurveys((n) => {
			t = n.find((t) => t.id === e) ?? null;
		}), t;
	}
	_checkSurveyEligibility(e) {
		if (B(this._surveyManager)) return {
			eligible: !1,
			reason: pd
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
		if (B(this._surveyManager)) return {
			eligible: !1,
			reason: pd
		};
		let t = typeof e == "string" ? this._getSurveyById(e) : e;
		return t ? this._surveyManager.checkSurveyRenderability(t) : {
			eligible: !1,
			reason: "Survey not found"
		};
	}
	canRenderSurvey(e) {
		if (B(this._surveyManager)) return Q.warn("init was not called"), {
			visible: !1,
			disabledReason: pd
		};
		let t = this._checkSurveyRenderability(e);
		return {
			visible: t.eligible,
			disabledReason: t.reason
		};
	}
	canRenderSurveyAsync(e, t) {
		return B(this._surveyManager) ? (Q.warn("init was not called"), Promise.resolve({
			visible: !1,
			disabledReason: pd
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
		if (B(this._surveyManager)) return void Q.warn("init was not called");
		let r = typeof e == "string" ? this._getSurveyById(e) : e;
		if (!r?.id) return void Q.warn("Survey not found");
		if (!Yl.includes(r.type)) return void Q.warn(`Surveys of type ${r.type} cannot be rendered in the app`);
		let i = (typeof document > "u" ? void 0 : document)?.querySelector(t);
		if (i) {
			if (r.appearance?.surveyPopupDelaySeconds) {
				Q.info(`Rendering survey ${r.id} with delay of ${r.appearance.surveyPopupDelaySeconds} seconds`);
				let e = setTimeout(() => {
					var t, a;
					this._renderTimeouts.delete(e), !this._disposed && (t = this._client) != null && t.canCapture && (Q.info(`Rendering survey ${r.id} with delay of ${r.appearance?.surveyPopupDelaySeconds} seconds`), (a = this._surveyManager) == null || a.renderSurvey(r, i, n), Q.info(`Survey ${r.id} rendered`));
				}, 1e3 * r.appearance.surveyPopupDelaySeconds);
				this._renderTimeouts.add(e);
				return;
			}
			this._surveyManager.renderSurvey(r, i, n);
		} else Q.warn("Survey element not found");
	}
	displaySurvey(e, t) {
		var n;
		if (!this._client?.canCapture) return;
		if (B(this._surveyManager)) return void Q.warn("init was not called");
		let r = this._getSurveyById(e);
		if (!r) return void Q.warn("Survey not found");
		let i = r;
		if ((n = r.appearance) != null && n.surveyPopupDelaySeconds && t.ignoreDelay && (i = H(H({}, r), {}, { appearance: H(H({}, r.appearance), {}, { surveyPopupDelaySeconds: 0 }) })), t.displayType !== hc.Popover && t.initialResponses && Q.warn("initialResponses is only supported for popover surveys. prefill will not be applied."), !1 === t.ignoreConditions) {
			let e = this._checkSurveyEligibility(r);
			if (!e.eligible) return void Q.warn("Survey is not eligible to be displayed: ", e.reason);
		}
		t.displayType === hc.Inline ? this.renderSurvey(i, t.selector, t.properties) : this._surveyManager.handlePopoverSurvey(i, t);
	}
	cancelPendingSurvey(e) {
		B(this._surveyManager) ? Q.warn("init was not called") : this._surveyManager.cancelSurvey(e);
	}
	handlePageUnload() {
		var e, t;
		(e = this._surveyManager) == null || (t = e.handlePageUnload) == null || t.call(e);
	}
}, gd = class {
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
		let e = N?.__PosthogExtensions__;
		if (!e || !this._instance) return;
		let t = this._instance, { generateSurveys: n, loadExternalDependency: r } = e;
		return {
			generateSurveys: n ? (e) => n(t, e) : void 0,
			loadExternalDependency: r ? (e) => r(t, "surveys", e) : void 0
		};
	}
	onMatchingConditionsChanged(e) {
		let t = this._instance?._addCaptureHook((t) => {
			t !== "$pageview" && t !== pc.SHOWN && t !== pc.DISMISSED && t !== pc.SENT || e();
		}), n = () => e();
		q(j, "PHSurveyShown", n);
		let r = !1, i = this._instance?.onFeatureFlags(() => {
			r && e();
		});
		return r = !0, () => {
			r = !1, t?.(), i?.(), j?.removeEventListener("PHSurveyShown", n);
		};
	}
}, _d = j?.location ? Is(j.location.hash, "__posthog") || Is(location.hash, "state") : null, vd = "_postHogToolbarParams", yd = W("[Toolbar]"), bd = W("[FeatureFlags]"), xd = W("[FeatureFlags]", { debugEnabled: !0 }), Sd = "\" failed. Feature flags didn't load in time.", Cd = [502, 504], wd = [
	"click",
	"keydown",
	"wheel",
	"touchstart",
	"pointerdown"
], Td = "connection_error", Ed = (e) => {
	let t = {};
	for (let n = 0; e.length > n; n++) t[e[n]] = !0;
	return t;
}, Dd = (e) => {
	let t = {};
	for (let [n, r] of Ua(e || {})) r && (t[n] = r);
	return t;
}, Od = (e, t) => e.distinctId === t.distinctId && e.sessionId === t.sessionId && ((e, t) => {
	let n = Object.keys(e);
	return n.length === Object.keys(t).length && n.every((n) => e[n] === t[n]);
})(e.groups, t.groups), kd = class {
	constructor(e) {
		this.name = "featureFlags", this._override_warning = !1, this.featureFlagEventHandlers = [], this._logger = bd, this._baseEventProperties = {}, this._eventPropertiesWithFlagValues = {}, this._reloadingHandlers = [], this._pendingReloads = /* @__PURE__ */ new Set(), this._activeReloads = /* @__PURE__ */ new Set(), this._hasLoadedFlags = !1, this._requestInFlight = !1, this._requestGeneration = 0, this._reloadingDisabled = !1, this._additionalReloadRequested = !1, this._firingFeatureFlagsCallbacks = !1, this._flagCallsPendingCapture = /* @__PURE__ */ new Map(), this._sendingFlagCallsPendingCapture = !1, this._flagsLoadedFromRemote = !1, this._staleCacheRefreshTriggered = !1, this._consecutiveStatusZeroFailures = 0, this._hadUserInteraction = !1, this._onOnline = () => {
			let e = this._hasStatusZeroCircuitBreakerTripped();
			this._consecutiveStatusZeroFailures = 0, e && this.reloadFeatureFlags();
		}, this._refreshIfDue = () => {
			let e = this._refreshIntervalMs, t = this._dueRefreshIntervalMs ?? e;
			L(e) || L(t) || this._config.remoteRequestsDisabled || !this._document || this._document.visibilityState === "hidden" || Date.now() - (this._lastRefreshAt ?? 0) < t || (this._dueRefreshIntervalMs = this._hadUserInteraction || !this._config.idleRefreshBackoff ? e : Math.min(2 * t, 36e5), this._hadUserInteraction = !1, this.reloadFeatureFlags(), this._scheduleNextRefresh());
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
		return this._initializingClient = e, this._logger = e.logger.createLogger("[FeatureFlags]"), fd(e.kv.initialize(), () => {
			this._initializingClient === e && (this._initializingClient = void 0, this._client = e, this._finishSetup(e));
		});
	}
	_finishSetup(e) {
		if (this._client === e) return this._window && q(this._window, "online", this._onOnline), this._syncAutomaticRefresh(), this._dynamicProperties = e.registerDynamicEventProperties(() => this._isCacheStale() ? this._baseEventProperties : this._eventPropertiesWithFlagValues), this._crossTabPersistenceUnsubscribe = this._crossTabPersistence?.onCrossTabFeatureFlagChange(() => {
			this._clearBootstrapState(), this._rebuildEventProperties(), this._fireFeatureFlagsCallbacks();
		}), this._rebuildEventProperties(), this.initialize();
	}
	_resumeConfiguredInterval() {
		this._hadUserInteraction = !0, this._dueRefreshIntervalMs = this._refreshIntervalMs, this._refreshIfDue();
	}
	_syncAutomaticRefresh() {
		var e;
		let t = this._config.refreshIntervalMs, n = !this._config.remoteRequestsDisabled && this._document && !L(t) && t > 0 ? t : void 0;
		this._config.idleRefreshBackoff || (this._dueRefreshIntervalMs = n), n !== this._refreshIntervalMs && (this._stopAutomaticRefresh(), L(n) || (this._refreshIntervalMs = n, this._dueRefreshIntervalMs = n, this._scheduleNextRefresh(), (e = this._document) != null && e.addEventListener && (q(this._document, y, this._onVisibilityChange), Ha(wd, (e) => {
			q(this._document, e, this._onUserInteraction, { capture: !0 });
		}))));
	}
	_scheduleNextRefresh() {
		L(this._refreshIntervalMs) || (L(this._refreshInterval) || clearInterval(this._refreshInterval), this._lastRefreshAt = Date.now(), this._refreshInterval = setInterval(this._refreshIfDue, this._refreshIntervalMs));
	}
	_stopAutomaticRefresh() {
		var e, t;
		L(this._refreshInterval) || (clearInterval(this._refreshInterval), this._refreshInterval = void 0, (e = this._document) == null || (t = e.removeEventListener) == null || t.call(e, "visibilitychange", this._onVisibilityChange), Ha(wd, (e) => {
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
		return !L(this._client?.kv.get("$enabled_feature_flags")) && this._clearBootstrapState();
	}
	_set(e) {
		this._persist(() => this._client?.kv.set(e));
	}
	_markCrossTabFeatureFlagSnapshot(e, t, n) {
		if (!this._crossTabPersistence || !e.$enabled_feature_flags) return;
		let r = this._prop("$enabled_feature_flags") || {}, i = e.$enabled_feature_flags || {}, s = t.flags || t.featureFlags, f = t.flags ? Object.entries(t.flags).filter(([, e]) => !e?.failed).map(([e]) => e) : [], p = !!t.errorsWhileComputingFlags && !!t.flags, m = p ? f : n && !F(s) ? Object.keys(s || {}) : Array.from(/* @__PURE__ */ new Set([...Object.keys(r), ...Object.keys(i)])), h = this._prop("$feature_flag_payloads") || {}, _ = e.$feature_flag_payloads || {}, v = p || n ? m : Array.from(/* @__PURE__ */ new Set([...Object.keys(h), ...Object.keys(_)])), y = !p && !n, b = !!y || m, x = !!y || v, S = {
			[a]: b,
			[d]: b,
			[g]: x
		};
		e.$feature_flag_details && (S[o] = b);
		for (let t of [
			l,
			c,
			u
		]) L(e[t]) || (S[t] = !0);
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
			L(n) || (e[t] = n);
		}
		this._baseEventProperties = e;
		let t = H({}, e), n = this._prop(d);
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
		if (!L(e)) return e.filter((e) => {
			let t = e && typeof e == "string" && e.trim().length > 0;
			return t || this._logger.error("Invalid flag key found:", e, "Expected non-empty string"), t;
		});
	}
	initialize() {
		let e = this._config, t = e.bootstrap?.featureFlags ?? {};
		if (Object.keys(t).length) {
			let n = e.bootstrap?.featureFlagPayloads ?? {}, r = Object.keys(t).filter((e) => !L(t[e])).reduce((e, n) => (e[n] = t[n], e), {}), i = Object.keys(n).filter((e) => r[e]).reduce((e, t) => (e[t] = n[t], e), {});
			return this._receivedFeatureFlags({
				featureFlags: r,
				featureFlagPayloads: i
			}, void 0, { persist: !1 });
		}
	}
	updateFlags(e, t, n) {
		var r, i;
		let a = n?.merge && (r = this._prop("$enabled_feature_flags")) != null ? r : {}, o = n?.merge && (i = this._prop("$feature_flag_payloads")) != null ? i : {}, s = H(H({}, a), e), c = H(H({}, o), t), l = {};
		for (let [e, t] of Object.entries(s)) l[e] = {
			key: e,
			enabled: fi(t),
			variant: pi(t),
			reason: void 0,
			metadata: L(c?.[e]) ? void 0 : {
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
		let r = K({}, e || {}), i = [.../* @__PURE__ */ new Set([...Object.keys(n || {}), ...Object.keys(t || {})])];
		for (let e of i) {
			var a, s;
			let i = r[e], o = t?.[e], c = L(o) ? (a = i?.enabled) != null && a : !!o, l = L(o) ? i?.variant : typeof o == "string" ? o : void 0, u = n?.[e], d = H(H({}, i), {}, {
				enabled: c,
				variant: c ? l ?? i?.variant : void 0
			});
			c !== i?.enabled && (d.original_enabled = i?.enabled), l !== i?.variant && (d.original_variant = i?.variant), u && (d.metadata = H(H({}, i?.metadata), {}, {
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
				enabled: fi(r),
				variant: pi(r),
				payload: di(t[n])
			};
		});
	}
	getFlagVariants() {
		let e = this._prop(d), t = this._prop(_);
		if (!t) return e || {};
		let n = K({}, e || {}), r = Object.keys(t);
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
		let n = K({}, e || {}), r = Object.keys(t);
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
		this._remove(m), this._flagCallsPendingCapture = /* @__PURE__ */ new Map();
	}
	sendFlagCallsPendingCapture() {
		if (this._flagCallsPendingCapture.size !== 0 && !this._sendingFlagCallsPendingCapture && this._client?.canCapture && !this._client.isRateLimited) {
			this._sendingFlagCallsPendingCapture = !0;
			try {
				let e = this.getFlagVariants();
				for (let t of Array.from(this._flagCallsPendingCapture.keys())) {
					let n = this._flagCallsPendingCapture.get(t);
					if (n) {
						if (n.value !== String(e[t]) || !Od(n.context, this._flagCallContext())) {
							this._flagCallsPendingCapture.delete(t);
							continue;
						}
						if (this.getFeatureFlagResult(t), this._flagCallsPendingCapture.has(t)) break;
					}
				}
			} finally {
				this._sendingFlagCallsPendingCapture = !1;
			}
		}
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
			person_properties: H(H(H({}, t.initialPersonProperties), this._prop("$stored_person_properties") || {}), {}, {
				$lib: t.library.name,
				$lib_version: t.library.version
			}),
			group_properties: this._prop(f),
			timezone: Os()
		};
		L(t.deviceId) || (n.$device_id = t.deviceId), (e != null && e.disableFlags || this._config.featureFlagsDisabled) && (n.disable_flags = !0);
		let r = this._getValidEvaluationEnvironments();
		r.length && (n.evaluation_contexts = r);
		let i = this._getValidFlagKeys();
		L(i) || (n.flag_keys = i);
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
			e.error ? i.push(e.error instanceof Error && e.error.name === "AbortError" ? "timeout" : e.error instanceof Error ? Td : "unknown_error") : e.statusCode !== 200 && i.push(`api_error_${e.statusCode}`), t.errorsWhileComputingFlags && i.push("errors_while_computing_flags");
			let o = !!t.quotaLimited?.includes("feature_flags");
			o && i.push("quota_limited"), this._set({ [s]: i }), o ? this._logger.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.") : n.disable_flags || this._receivedFeatureFlags(t, r, { partialResponse: a }), this._settleReloads(l, n.disable_flags ? "skipped" : i.length || !t.flags && !t.featureFlags ? "error" : "loaded"), u();
		}, p = (e) => {
			this._requestInFlight = !1, c === this._requestGeneration && (this._set({ [s]: [Td] }), this._logger.error("Feature flag request failed", e), this._fallBackToPersistedFlags() && this._fireFeatureFlagsCallbacks(!0), this._settleReloads(l, "error")), u();
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
					if (((e) => Cd.includes(e.statusCode) || ((e) => e.statusCode === 0 && e.error instanceof Error && e.error.name === "AbortError")(e))(e) && h()) return m--, void setTimeout(g, 500);
					d(e);
				}).catch(p);
			} catch (e) {
				p(e);
			}
		};
		g();
	}
	_hasStatusZeroCircuitBreakerTripped() {
		return js(this._consecutiveStatusZeroFailures, 3);
	}
	_trackStatusZeroReachability(e) {
		this._consecutiveStatusZeroFailures = Ms(e, this._consecutiveStatusZeroFailures, 3, () => this._logger.warn("Feature flag requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped refreshing feature flags; will try again when connectivity changes."));
	}
	getFeatureFlag(e, t = {}) {
		if (t.fresh && !this._flagsLoadedFromRemote) return;
		if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return void this._logger.warn("getFeatureFlag for key \"" + e + Sd);
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
		if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return void this._logger.warn("getFeatureFlagResult for key \"" + e + Sd);
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
			let t = !this._client?.canCapture, n = !t && !this._client?.isRateLimited;
			var f;
			if (n ? this._flagCallsPendingCapture.delete(e) : (t && Object.keys(u).length > 0 && (u = {}, this._set({ [m]: u })), (f = u[e]) != null && f.includes(o) || this._holdFlagCall(e, o)), n && !u[e]?.includes(o)) {
				var p, g, _, v, y, b, x, S, C;
				F(u[e]) ? u[e].push(o) : u[e] = [o], this._set(H({ [m]: u }, l ? { [h]: l } : {}));
				let t = this.getFeatureFlagDetails(e), n = [...this._prop("$feature_flag_errors") ?? []];
				L(i) && n.push("flag_missing");
				let r = {
					$feature_flag: e,
					$feature_flag_response: i,
					$feature_flag_payload: a ?? null,
					$feature_flag_request_id: s,
					$feature_flag_evaluated_at: c,
					$feature_flag_bootstrapped_response: ((p = this._config.bootstrap) == null || (p = p.featureFlags) == null ? void 0 : p[e]) ?? null,
					$feature_flag_bootstrapped_payload: ((g = this._config.bootstrap) == null || (g = g.featureFlagPayloads) == null ? void 0 : g[e]) ?? null,
					$used_bootstrap_value: !this._flagsLoadedFromRemote
				};
				L(t == null || (_ = t.metadata) == null ? void 0 : _.has_experiment) || (r.$feature_flag_has_experiment = t.metadata.has_experiment), L(t == null || (v = t.metadata) == null ? void 0 : v.version) || (r.$feature_flag_version = t.metadata.version);
				let d = (t == null || (y = t.reason) == null ? void 0 : y.description) ?? (t == null || (b = t.reason) == null ? void 0 : b.code);
				d && (r.$feature_flag_reason = d), t != null && (x = t.metadata) != null && x.id && (r.$feature_flag_id = t.metadata.id), L(t?.original_variant) && L(t?.original_enabled) || (r.$feature_flag_original_response = L(t.original_variant) ? t.original_enabled : t.original_variant), t != null && (S = t.metadata) != null && S.original_payload && (r.$feature_flag_original_payload = t == null || (C = t.metadata) == null ? void 0 : C.original_payload), n.length && (r.$feature_flag_error = n.join(",")), this._captureFeatureFlagCalled(r) || (this._unmarkFlagCallReported(e, o), this._holdFlagCall(e, o));
			} else l && this._set({
				[m]: u,
				[h]: l
			});
		}
		return r ? {
			key: e,
			enabled: !!i,
			variant: typeof i == "string" ? i : void 0,
			payload: di(a)
		} : void 0;
	}
	_captureFeatureFlagCalled(e) {
		try {
			return !1 !== this._client?.capture("$feature_flag_called", e);
		} catch (e) {
			return this._logger.error("Failed to capture feature flag call", e), !0;
		}
	}
	_holdFlagCall(e, t) {
		this._flagCallsPendingCapture.set(e, {
			value: t,
			context: this._flagCallContext()
		});
	}
	_flagCallContext() {
		var e;
		return {
			distinctId: this._client?.distinctId,
			groups: H({}, this._client?.groups),
			sessionId: this._config.deduplicateCallsPerSession ? (e = this._client) == null || (e = e.session) == null ? void 0 : e.sessionId : void 0
		};
	}
	_unmarkFlagCallReported(e, t) {
		let n = this._prop("$flag_call_reported") || {}, r = n[e];
		F(r) && r.includes(t) && (n[e] = r.filter((e) => e !== t), this._set({ [m]: n }));
	}
	getRemoteConfigPayload(e, t) {
		this._getRemoteConfigPayload(e, t);
	}
	_getRemoteConfigPayload(e, t) {
		var n = this;
		return V(function* () {
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
			L(o) || (i.flag_keys = o);
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
		if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return this._logger.warn("isFeatureEnabled for key \"" + e + Sd), t.defaultValue;
		let n = this.getFeatureFlag(e, t);
		return L(n) ? t.defaultValue : !!n;
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
		let r = ((e, t = {}, n = {}, r = {}, i, s = bd) => {
			let f = ((e, t) => {
				let n = e.flags;
				if (n) {
					let t = Object.fromEntries(Object.keys(n).map((e) => [e, n[e].variant ?? n[e].enabled])), r = Object.fromEntries(Object.keys(n).filter((e) => n[e].enabled).filter((e) => !L(n[e].metadata?.payload)).map((e) => [e, n[e].metadata?.payload]));
					return H(H({}, e), {}, {
						featureFlags: t,
						featureFlagPayloads: r
					});
				}
				return e.featureFlags && t.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"), e;
			})(e, s), p = f.flags, m = f.featureFlags, h = f.featureFlagPayloads;
			if (!m) return;
			let _ = e.requestId, v = e.evaluatedAt;
			if (F(m)) {
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
				y = H(H({}, t), y), b = H(H({}, n), i), e.forEach((e) => {
					e in i || b == null || delete b[e];
				}), x = H(H({}, r), x);
			} else if (e.errorsWhileComputingFlags) {
				if (p) {
					let e = new Set(Object.keys(p).filter((e) => !p[e]?.failed));
					y = H(H({}, t), Object.fromEntries(Object.entries(y).filter(([t]) => e.has(t))));
					let i = Object.fromEntries(Object.entries(b || {}).filter(([t]) => e.has(t)));
					b = H(H({}, n), i), e.forEach((e) => {
						e in i || b == null || delete b[e];
					}), x = H(H({}, r), Object.fromEntries(Object.entries(x || {}).filter(([t]) => e.has(t))));
				} else y = H(H({}, t), y), b = H(H({}, n), b), x = H(H({}, r), x);
			}
			return H(H({
				[a]: Object.keys(Dd(y)),
				[d]: y || {},
				[g]: b || {},
				[o]: x || {},
				[u]: !0 === e.minimalFlagCalledEvents
			}, _ ? { [l]: _ } : {}), v ? { [c]: v } : {});
		})(e, this.getFlagVariants(), this.getFlagPayloads(), this.getFlagsWithDetails(), n, this._logger);
		if (r) {
			if (!1 === n?.persist) {
				let e = !L(this._client.kv.get(d));
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
			if (!1 === e) return this._remove([_, v]), this._fireFeatureFlagsCallbacks(), void xd.info("All overrides cleared");
			if (F(e)) return this._set({ [_]: Ed(e) }), this._fireFeatureFlagsCallbacks(), void xd.info("Flag overrides set", { flags: e });
			if (e && typeof e == "object" && ("flags" in e || "payloads" in e)) {
				var t;
				let n = e;
				this._override_warning = !!((t = n.suppressWarning) != null && t);
				let r = {}, i = n.flags, a = n.payloads;
				i && (r[_] = F(i) ? Ed(i) : i), a && (r[v] = a), Object.keys(r).length && this._set(r), !1 === i && !1 === a ? this._remove([_, v]) : !1 === i ? this._remove(_) : !1 === a && this._remove(v), this._fireFeatureFlagsCallbacks(), !1 === i ? xd.info("Flag overrides cleared") : i && xd.info("Flag overrides set", { flags: i }), !1 === a ? xd.info("Payload overrides cleared") : a && xd.info("Payload overrides set", { payloads: a });
				return;
			}
			if (e && typeof e == "object") return this._set({ [_]: e }), this._fireFeatureFlagsCallbacks(), void xd.info("Flag overrides set", { flags: e });
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
		let c = H(H({}, this.getFlagVariants()), {}, { [e]: t });
		(r = this._crossTabPersistence) == null || r.markCrossTabFeatureFlagChanges({
			$active_feature_flags: [e],
			$enabled_feature_flags: [e],
			$stored_person_properties: Object.keys(o)
		}), this._set({
			[a]: Object.keys(Dd(c)),
			[d]: c,
			[p]: H(H({}, this._prop("$stored_person_properties") || {}), o)
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
		return V(function* () {
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
		this._set({ [p]: H(H(H({}, n), a), r) }), t && this.reloadFeatureFlags();
	}
	unsetPersonPropertiesForFlags(e, t = !0) {
		let n = H({}, this._prop("$stored_person_properties") || {});
		e.forEach((e) => {
			delete n[e];
		}), this._set({ [p]: n }), t && this.reloadFeatureFlags();
	}
	resetPersonPropertiesForFlags(e = !0) {
		this._remove(p), e && this.reloadFeatureFlags();
	}
	setGroupPropertiesForFlags(e, t = !0) {
		let n = this._prop("$stored_group_properties") || {}, r = H({}, n);
		for (let t of Object.keys(e)) r[t] = H(H({}, n[t]), e[t]);
		this._set({ [f]: r }), t && this.reloadFeatureFlags();
	}
	resetGroupPropertiesForFlags(e) {
		if (e) {
			let t = this._prop("$stored_group_properties") || {};
			this._set({ [f]: H(H({}, t), {}, { [e]: {} }) });
		} else this._remove(f);
	}
	reset() {
		this._requestGeneration++, this._settleReloads(this._pendingReloads, "cancelled"), this._settleReloads(this._activeReloads, "cancelled"), this._additionalReloadRequested = !1, this._baseEventProperties = {}, this._eventPropertiesWithFlagValues = {}, this._bootstrapState = void 0, this._hasLoadedFlags = !1, this._reloadingDisabled = !1, this._flagsLoadedFromRemote = !1, this.$anon_distinct_id = void 0, this._clearDebouncer(), this._override_warning = !1, this._consecutiveStatusZeroFailures = 0, this._flagCallsPendingCapture = /* @__PURE__ */ new Map();
	}
}, Ad = W("[FeatureFlags]"), jd = class {
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
			idleRefreshBackoff: L(e.remote_config_refresh_interval_ms),
			requestTimeoutMs: e.feature_flag_request_timeout_ms,
			requestMaxRetries: Math.max(0, e.feature_flag_request_max_retries ?? 1),
			compression: e.disable_compression ? void 0 : "best-available",
			evaluationContexts: e.evaluation_contexts ?? e.evaluation_environments ?? [],
			flagKeys: F(e.flag_keys) ? e.flag_keys : void 0
		}))(e, t), !e.evaluation_environments || e.evaluation_contexts || this._loggedEvaluationEnvironmentsDeprecation || (Ad.warn("evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version."), this._loggedEvaluationEnvironmentsDeprecation = !0), L(e.flag_keys) || F(e.flag_keys) || Ad.error("Invalid flag_keys found:", e.flag_keys, "Expected array of non-empty strings");
	}
	get() {
		return this._snapshot;
	}
}, Md = (e) => Ht(e) && (e.name === "RangeError" && e.message.indexOf("Maximum call stack size exceeded") === 0 || e.name === "InternalError" && e.message === "too much recursion"), Nd = W("[Error tracking]"), Pd = "webkit-masked-url:", Fd = [{
	value: "isolatedAPI.contexts.topHostname",
	exact: !1
}, {
	value: "No response from target",
	exact: !0
}], Id = [
	"chrome-extension://",
	"moz-extension://",
	"safari-extension:",
	"safari-web-extension:",
	Pd
], Ld = ["__firefox__", "__gCrWeb"];
function Rd(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); t > n; n++) r[n] = e[n];
	return r;
}
function zd(e, t) {
	return function(e) {
		if (Array.isArray(e)) return e;
	}(e) || function(e, t) {
		var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
		if (n != null) {
			var r, i, a, o, s = [], c = !0, l = !1;
			try {
				if (a = (n = n.call(e)).next, t !== 0) for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
			} catch (e) {
				l = !0, i = e;
			} finally {
				try {
					if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
				} finally {
					if (l) throw i;
				}
			}
			return s;
		}
	}(e, t) || function(e, t) {
		if (e) {
			if (typeof e == "string") return Rd(e, t);
			var n = {}.toString.call(e).slice(8, -1);
			return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Rd(e, t) : void 0;
		}
	}(e, t) || function() {
		throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}();
}
var Bd = Object.entries, Vd = Object.setPrototypeOf, Hd = Object.isFrozen, Ud = Object.getPrototypeOf, Wd = Object.getOwnPropertyDescriptor, Gd = Object.freeze, Kd = Object.seal, qd = Object.create, Jd = typeof Reflect < "u" && Reflect, Yd = Jd.apply, Xd = Jd.construct;
Gd ||= function(e) {
	return e;
}, Kd ||= function(e) {
	return e;
}, Yd ||= function(e, t) {
	for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; n > i; i++) r[i - 2] = arguments[i];
	return e.apply(t, r);
}, Xd ||= function(e) {
	for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
	return new e(...n);
};
var Zd = yf([].forEach), Qd = yf([].lastIndexOf), $d = yf([].pop), ef = yf([].push), tf = yf([].splice), nf = Array.isArray, rf = yf("".toLowerCase), af = yf("".toString), of = yf("".match), sf = yf("".replace), cf = yf("".indexOf), lf = yf("".trim), uf = yf(0 .toString), df = yf(Boolean.prototype.toString), ff = typeof BigInt > "u" ? null : yf(BigInt.prototype.toString), pf = typeof Symbol > "u" ? null : yf(Symbol.prototype.toString), mf = yf({}.hasOwnProperty), hf = yf({}.toString), gf = yf(/t/.test), _f = (vf = TypeError, function() {
	for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
	return Xd(vf, t);
}), vf;
function yf(e) {
	return function(t) {
		t instanceof RegExp && (t.lastIndex = 0);
		for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; n > i; i++) r[i - 1] = arguments[i];
		return Yd(e, t, r);
	};
}
function $(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : rf;
	if (Vd && Vd(e, null), !nf(t)) return e;
	let r = t.length;
	for (; r--;) {
		let i = t[r];
		if (typeof i == "string") {
			let e = n(i);
			e !== i && (Hd(t) || (t[r] = e), i = e);
		}
		e[i] = !0;
	}
	return e;
}
function bf(e) {
	for (let t = 0; e.length > t; t++) mf(e, t) || (e[t] = null);
	return e;
}
function xf(e) {
	let t = qd(null);
	for (let r of Bd(e)) {
		var n = zd(r, 2);
		let i = n[0], a = n[1];
		mf(e, i) && (t[i] = nf(a) ? bf(a) : a && typeof a == "object" && a.constructor === Object ? xf(a) : a);
	}
	return t;
}
function Sf(e, t) {
	for (; e !== null;) {
		let n = Wd(e, t);
		if (n) {
			if (n.get) return yf(n.get);
			if (typeof n.value == "function") return yf(n.value);
		}
		e = Ud(e);
	}
	return function() {
		return null;
	};
}
var Cf = Gd(/* @__PURE__ */ "a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr".split(".")), wf = Gd(/* @__PURE__ */ "svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern".split(".")), Tf = Gd([
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence"
]), Ef = Gd([
	"animate",
	"color-profile",
	"cursor",
	"discard",
	"font-face",
	"font-face-format",
	"font-face-name",
	"font-face-src",
	"font-face-uri",
	"foreignobject",
	"hatch",
	"hatchpath",
	"mesh",
	"meshgradient",
	"meshpatch",
	"meshrow",
	"missing-glyph",
	"script",
	"set",
	"solidcolor",
	"unknown",
	"use"
]), Df = Gd(/* @__PURE__ */ "math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts".split(".")), Of = Gd([
	"maction",
	"maligngroup",
	"malignmark",
	"mlongdiv",
	"mscarries",
	"mscarry",
	"msgroup",
	"mstack",
	"msline",
	"msrow",
	"semantics",
	"annotation",
	"annotation-xml",
	"mprescripts",
	"none"
]), kf = Gd(["#text"]), Af = Gd(/* @__PURE__ */ "accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns".split(".")), jf = Gd(/* @__PURE__ */ "accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dominant-baseline.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-orientation.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan".split(".")), Mf = Gd(/* @__PURE__ */ "accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns".split(".")), Nf = Gd([
	"xlink:href",
	"xml:id",
	"xlink:title",
	"xml:space",
	"xmlns:xlink"
]), Pf = Kd(/{{[\w\W]*|^[\w\W]*}}/g), Ff = Kd(/<%[\w\W]*|^[\w\W]*%>/g), If = Kd(/\${[\w\W]*/g), Lf = Kd(/^data-[\-\w.\u00B7-\uFFFF]+$/), Rf = Kd(/^aria-[\-\w]+$/), zf = Kd(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), Bf = Kd(/^(?:\w+script|data):/i), Vf = Kd(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), Hf = Kd(/^html$/i), Uf = Kd(/^[a-z][.\w]*(-[.\w]+)+$/i), Wf = Kd(/<[/\w!]/g), Gf = Kd(/<[/\w]/g), Kf = Kd(/<\/no(script|embed|frames)/i), qf = Kd(/\/>/i), Jf = function() {
	return typeof window > "u" ? null : window;
}, Yf = function(e, t, n, r) {
	return mf(e, t) && nf(e[t]) ? $(r.base ? xf(r.base) : {}, e[t], r.transform) : n;
}, Xf = function e() {
	let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Jf(), n = (t) => e(t);
	if (n.version = "3.4.13", n.removed = [], !t || !t.document || t.document.nodeType !== 9 || !t.Element) return n.isSupported = !1, n;
	let r = t.document, i = r, a = i.currentScript, o = t.HTMLTemplateElement, s = t.Node, c = t.NodeFilter, l = t.DOMParser, u = t.trustedTypes, d = t.Element.prototype, f = Sf(d, "cloneNode"), p = Sf(d, "remove"), m = Sf(d, "nextSibling"), h = Sf(d, "childNodes"), g = Sf(d, "parentNode"), _ = Sf(d, "shadowRoot"), v = Sf(d, "attributes"), y = s && s.prototype ? Sf(s.prototype, "nodeType") : null, b = s && s.prototype ? Sf(s.prototype, "nodeName") : null, x = s && s.prototype ? Sf(s.prototype, "ownerDocument") : null;
	if (typeof o == "function") {
		let e = r.createElement("template");
		e.content && e.content.ownerDocument && (r = e.content.ownerDocument);
	}
	let S, C, w = "", ee = !1, T = 0, te = function() {
		if (T > 0) throw _f("A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the \"DOMPurify and Trusted Types\" section of the README.");
	}, E = function(e) {
		te(), T++;
		try {
			return S.createHTML(e);
		} finally {
			T--;
		}
	}, ne = r.implementation, re = r.createNodeIterator, ie = r.createDocumentFragment, ae = r.getElementsByTagName, oe = i.importNode, D = {
		afterSanitizeAttributes: [],
		afterSanitizeElements: [],
		afterSanitizeShadowDOM: [],
		beforeSanitizeAttributes: [],
		beforeSanitizeElements: [],
		beforeSanitizeShadowDOM: [],
		uponSanitizeAttribute: [],
		uponSanitizeElement: [],
		uponSanitizeShadowNode: []
	};
	n.isSupported = typeof Bd == "function" && typeof g == "function" && ne && ne.createHTMLDocument !== void 0;
	let se = Pf, ce = Ff, le = If, ue = Lf, de = Rf, fe = Bf, pe = Vf, me = Uf, he = zf, O = null, ge = $({}, [
		...Cf,
		...wf,
		...Tf,
		...Df,
		...kf
	]), k = null, _e = $({}, [
		...Af,
		...jf,
		...Mf,
		...Nf
	]), ve = Object.seal(qd(null, {
		tagNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		allowCustomizedBuiltInElements: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: !1
		}
	})), ye = null, be = null, xe = Object.seal(qd(null, {
		tagCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		}
	})), Se = !0, Ce = !0, we = !1, Te = !0, Ee = !1, De = !0, Oe = !1, ke = !1, Ae = null, je = null, Me = !1, Ne = !1, Pe = !1, Fe = !1, Ie = !0, Le = !1, Re = "user-content-", ze = !0, Be = !1, Ve = {}, He = null, Ue = $({}, /* @__PURE__ */ "annotation-xml.audio.colgroup.desc.foreignobject.head.iframe.math.mi.mn.mo.ms.mtext.noembed.noframes.noscript.plaintext.script.selectedcontent.style.svg.template.thead.title.video.xmp".split(".")), We = null, Ge = $({}, [
		"audio",
		"video",
		"img",
		"source",
		"image",
		"track"
	]), Ke = null, qe = $({}, [
		"alt",
		"class",
		"for",
		"id",
		"label",
		"name",
		"pattern",
		"placeholder",
		"role",
		"summary",
		"title",
		"value",
		"style",
		"xmlns"
	]), Je = "http://www.w3.org/1998/Math/MathML", Ye = "http://www.w3.org/2000/svg", Xe = "http://www.w3.org/1999/xhtml", Ze = Xe, Qe = !1, $e = null, et = $({}, [
		Je,
		Ye,
		Xe
	], af), tt = Gd([
		"mi",
		"mo",
		"mn",
		"ms",
		"mtext"
	]), nt = $({}, tt), rt = Gd(["annotation-xml"]), it = $({}, rt), at = $({}, [
		"title",
		"style",
		"font",
		"a",
		"script"
	]), ot = null, st = ["application/xhtml+xml", "text/html"], A = null, ct = null, lt = r.createElement("form"), ut = function(e) {
		return e instanceof RegExp || e instanceof Function;
	}, dt = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		if (ct && ct === e) return;
		e && typeof e == "object" || (e = {}), e = xf(e), ot = st.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? "text/html" : e.PARSER_MEDIA_TYPE, A = ot === "application/xhtml+xml" ? af : rf, O = Yf(e, "ALLOWED_TAGS", ge, { transform: A }), k = Yf(e, "ALLOWED_ATTR", _e, { transform: A }), $e = Yf(e, "ALLOWED_NAMESPACES", et, { transform: af }), Ke = Yf(e, "ADD_URI_SAFE_ATTR", qe, {
			transform: A,
			base: qe
		}), We = Yf(e, "ADD_DATA_URI_TAGS", Ge, {
			transform: A,
			base: Ge
		}), He = Yf(e, "FORBID_CONTENTS", Ue, { transform: A }), ye = Yf(e, "FORBID_TAGS", xf({}), { transform: A }), be = Yf(e, "FORBID_ATTR", xf({}), { transform: A }), Ve = !!mf(e, "USE_PROFILES") && (e.USE_PROFILES && typeof e.USE_PROFILES == "object" ? xf(e.USE_PROFILES) : e.USE_PROFILES), Se = !1 !== e.ALLOW_ARIA_ATTR, Ce = !1 !== e.ALLOW_DATA_ATTR, we = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Te = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR, Ee = e.SAFE_FOR_TEMPLATES || !1, De = !1 !== e.SAFE_FOR_XML, Oe = e.WHOLE_DOCUMENT || !1, Ne = e.RETURN_DOM || !1, Pe = e.RETURN_DOM_FRAGMENT || !1, Fe = e.RETURN_TRUSTED_TYPE || !1, Me = e.FORCE_BODY || !1, Ie = !1 !== e.SANITIZE_DOM, Le = e.SANITIZE_NAMED_PROPS || !1, ze = !1 !== e.KEEP_CONTENT, Be = e.IN_PLACE || !1, he = function(e) {
			try {
				return gf(e, ""), !0;
			} catch {
				return !1;
			}
		}(e.ALLOWED_URI_REGEXP) ? e.ALLOWED_URI_REGEXP : zf, Ze = typeof e.NAMESPACE == "string" ? e.NAMESPACE : Xe, nt = mf(e, "MATHML_TEXT_INTEGRATION_POINTS") && e.MATHML_TEXT_INTEGRATION_POINTS && typeof e.MATHML_TEXT_INTEGRATION_POINTS == "object" ? xf(e.MATHML_TEXT_INTEGRATION_POINTS) : $({}, tt), it = mf(e, "HTML_INTEGRATION_POINTS") && e.HTML_INTEGRATION_POINTS && typeof e.HTML_INTEGRATION_POINTS == "object" ? xf(e.HTML_INTEGRATION_POINTS) : $({}, rt);
		let t = mf(e, "CUSTOM_ELEMENT_HANDLING") && e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING == "object" ? xf(e.CUSTOM_ELEMENT_HANDLING) : qd(null);
		if (ve = qd(null), mf(t, "tagNameCheck") && ut(t.tagNameCheck) && (ve.tagNameCheck = t.tagNameCheck), mf(t, "attributeNameCheck") && ut(t.attributeNameCheck) && (ve.attributeNameCheck = t.attributeNameCheck), mf(t, "allowCustomizedBuiltInElements") && typeof t.allowCustomizedBuiltInElements == "boolean" && (ve.allowCustomizedBuiltInElements = t.allowCustomizedBuiltInElements), Kd(ve), Ee && (Ce = !1), Pe && (Ne = !0), Ve && (O = $({}, kf), k = qd(null), !0 === Ve.html && ($(O, Cf), $(k, Af)), !0 === Ve.svg && ($(O, wf), $(k, jf), $(k, Nf)), !0 === Ve.svgFilters && ($(O, Tf), $(k, jf), $(k, Nf)), !0 === Ve.mathMl && ($(O, Df), $(k, Mf), $(k, Nf))), xe.tagCheck = null, xe.attributeCheck = null, mf(e, "ADD_TAGS") && (typeof e.ADD_TAGS == "function" ? xe.tagCheck = e.ADD_TAGS : nf(e.ADD_TAGS) && (O === ge && (O = xf(O)), $(O, e.ADD_TAGS, A))), mf(e, "ADD_ATTR") && (typeof e.ADD_ATTR == "function" ? xe.attributeCheck = e.ADD_ATTR : nf(e.ADD_ATTR) && (k === _e && (k = xf(k)), $(k, e.ADD_ATTR, A))), mf(e, "ADD_URI_SAFE_ATTR") && nf(e.ADD_URI_SAFE_ATTR) && $(Ke, e.ADD_URI_SAFE_ATTR, A), mf(e, "FORBID_CONTENTS") && nf(e.FORBID_CONTENTS) && (He === Ue && (He = xf(He)), $(He, e.FORBID_CONTENTS, A)), mf(e, "ADD_FORBID_CONTENTS") && nf(e.ADD_FORBID_CONTENTS) && (He === Ue && (He = xf(He)), $(He, e.ADD_FORBID_CONTENTS, A)), ze && (O["#text"] = !0), Oe && $(O, [
			"html",
			"head",
			"body"
		]), O.table && ($(O, ["tbody"]), delete ye.tbody), e.TRUSTED_TYPES_POLICY) {
			if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function") throw _f("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
			if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw _f("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
			let t = S;
			S = e.TRUSTED_TYPES_POLICY;
			try {
				w = E("");
			} catch (e) {
				throw S = t, e;
			}
		} else e.TRUSTED_TYPES_POLICY === null ? (S = void 0, w = "") : (S === void 0 && (ee ||= (C = function(e, t) {
			if (typeof e != "object" || typeof e.createPolicy != "function") return null;
			let n = null, r = "data-tt-policy-suffix";
			t && t.hasAttribute(r) && (n = t.getAttribute(r));
			let i = "dompurify" + (n ? "#" + n : "");
			try {
				return e.createPolicy(i, {
					createHTML: (e) => e,
					createScriptURL: (e) => e
				});
			} catch {
				return console.warn("TrustedTypes policy " + i + " could not be created."), null;
			}
		}(u, a), !0), S = C), S && typeof w == "string" && (w = E("")));
		Gd && Gd(e), ct = e;
	}, ft = $({}, [
		...wf,
		...Tf,
		...Ef
	]), j = $({}, [...Df, ...Of]), pt = function(e) {
		ef(n.removed, { element: e });
		try {
			g(e).removeChild(e);
		} catch {
			if (p(e), !g(e)) throw _f("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
		}
	}, mt = function(e) {
		gt(e);
		let t = h(e);
		if (t) {
			let e = [];
			Zd(t, (t) => {
				ef(e, t);
			}), Zd(e, (e) => {
				try {
					p(e);
				} catch {}
			});
		}
		let n = v(e);
		if (n) for (let t = n.length - 1; t >= 0; --t) {
			let r = n[t], i = r && r.name;
			if (typeof i == "string") try {
				e.removeAttribute(i);
			} catch {}
		}
	}, M = function(e, t) {
		try {
			ef(n.removed, {
				attribute: t.getAttributeNode(e),
				from: t
			});
		} catch {
			ef(n.removed, {
				attribute: null,
				from: t
			});
		}
		if (t.removeAttribute(e), e === "is") {
			if (Ne || Pe) try {
				pt(t);
			} catch {}
			else try {
				t.setAttribute(e, "");
			} catch {}
		}
	}, ht = function(e) {
		let t = v(e);
		if (t) for (let n = t.length - 1; n >= 0; --n) {
			let r = t[n], i = r && r.name;
			if (typeof i == "string" && !k[A(i)]) try {
				e.removeAttribute(i);
			} catch {}
		}
	}, gt = function(e) {
		let t = [e];
		for (; t.length > 0;) {
			let e = t.pop();
			(y ? y(e) : e.nodeType) === 1 && ht(e);
			let n = h(e);
			if (n) for (let e = n.length - 1; e >= 0; --e) t.push(n[e]);
		}
	}, _t = function(e) {
		let t = null, n = null;
		if (Me) e = "<remove></remove>" + e;
		else {
			let t = of(e, /^[\r\n\t ]+/);
			n = t && t[0];
		}
		ot === "application/xhtml+xml" && Ze === Xe && (e = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + e + "</body></html>");
		let i = S ? E(e) : e;
		if (Ze === Xe) try {
			t = new l().parseFromString(i, ot);
		} catch {}
		if (!t || !t.documentElement) {
			t = ne.createDocument(Ze, "template", null);
			try {
				t.documentElement.innerHTML = Qe ? w : i;
			} catch {}
		}
		let a = t.body || t.documentElement;
		return e && n && a.insertBefore(r.createTextNode(n), a.childNodes[0] || null), Ze === Xe ? ae.call(t, Oe ? "html" : "body")[0] : Oe ? t.documentElement : a;
	}, vt = function(e) {
		let t = x ? x(e) : e.ownerDocument;
		return re.call(t || e, e, c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION, null);
	}, yt = function(e) {
		return e = sf(e, se, " "), e = sf(e, ce, " "), sf(e, le, " ");
	}, bt = function(e) {
		e.normalize();
		let t = x ? x(e) : e.ownerDocument, n = re.call(t || e, e, c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION, null), r = n.nextNode();
		for (; r;) r.data = yt(r.data), r = n.nextNode();
		let i = e.querySelectorAll?.call(e, "template");
		i && Zd(i, (e) => {
			N(e.content) && bt(e.content);
		});
	}, xt = function(e) {
		let t = b ? b(e) : null;
		return typeof t == "string" && A(t) === "form" && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || e.attributes !== v(e) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function" || e.nodeType !== y(e) || e.childNodes !== h(e));
	}, N = function(e) {
		if (!y || typeof e != "object" || !e) return !1;
		try {
			return y(e) === 11;
		} catch {
			return !1;
		}
	}, St = function(e) {
		if (!y || typeof e != "object" || !e) return !1;
		try {
			return typeof y(e) == "number";
		} catch {
			return !1;
		}
	};
	function Ct(e, t, r) {
		e.length !== 0 && Zd(e, (e) => {
			e.call(n, t, r, ct);
		});
	}
	let wt = function(e, t, n, r) {
		return e.length === 0 ? t : t === n || t === r ? xf(t) : t;
	}, Tt = function(e, t) {
		if (Ct(D.beforeSanitizeElements, e, null), e !== t && g(e) === null) return Be && gt(e), !0;
		if (xt(e)) return pt(e), !0;
		let r = A(b ? b(e) : e.nodeName);
		if (O = wt(D.uponSanitizeElement, O, ge, Ae), Ct(D.uponSanitizeElement, e, {
			tagName: r,
			allowedTags: O
		}), e !== t && g(e) === null) return Be && gt(e), !0;
		if (function(e, t) {
			return !!(De && e.hasChildNodes() && !St(e.firstElementChild) && gf(Wf, e.textContent) && gf(Wf, e.innerHTML)) || !(!De || e.namespaceURI !== Xe || t !== "style" || !St(e.firstElementChild)) || e.nodeType === 7 || !(!De || e.nodeType !== 8 || !gf(Gf, e.data));
		}(e, r)) return pt(e), !0;
		if (ye[r] || !(xe.tagCheck instanceof Function && xe.tagCheck(r)) && !O[r]) {
			let n = function(e, t, n) {
				if (!ye[t] && Dt(t) && (ve.tagNameCheck instanceof RegExp && gf(ve.tagNameCheck, t) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(t))) return !1;
				if (ze && !He[t]) {
					let t = g(e), r = h(e);
					if (r && t) for (let i = r.length - 1; i >= 0; --i) {
						let a = e === n ? f(r[i], !0) : r[i];
						t.insertBefore(a, m(e));
					}
				}
				return pt(e), !0;
			}(e, r, t);
			return !1 === n && Ct(D.afterSanitizeElements, e, null), n;
		}
		if ((y ? y(e) : e.nodeType) === 1 && !function(e) {
			let t = g(e);
			t && t.tagName || (t = {
				namespaceURI: Ze,
				tagName: "template"
			});
			let n = rf(e.tagName), r = rf(t.tagName);
			return !!$e[e.namespaceURI] && (e.namespaceURI === Ye ? function(e, t, n) {
				return t.namespaceURI === Xe ? e === "svg" : t.namespaceURI === Je ? e === "svg" && (n === "annotation-xml" || nt[n]) : !!ft[e];
			}(n, t, r) : e.namespaceURI === Je ? function(e, t, n) {
				return t.namespaceURI === Xe ? e === "math" : t.namespaceURI === Ye ? e === "math" && it[n] : !!j[e];
			}(n, t, r) : e.namespaceURI === Xe ? function(e, t, n) {
				return !(t.namespaceURI === Ye && !it[n]) && !(t.namespaceURI === Je && !nt[n]) && !j[e] && (at[e] || !ft[e]);
			}(n, t, r) : !(ot !== "application/xhtml+xml" || !$e[e.namespaceURI]));
		}(e) || (r === "noscript" || r === "noembed" || r === "noframes") && gf(Kf, e.innerHTML)) return pt(e), !0;
		if (Ee && e.nodeType === 3) {
			let t = yt(e.textContent);
			e.textContent !== t && (ef(n.removed, { element: e.cloneNode() }), e.textContent = t);
		}
		return Ct(D.afterSanitizeElements, e, null), !1;
	}, P = function(e, t, n) {
		if (be[t] || De && t === "patchsrc" || De && t === "for" && e !== "label" && e !== "output" || Ie && (t === "id" || t === "name") && (n in r || n in lt)) return !1;
		let i = k[t] || xe.attributeCheck instanceof Function && xe.attributeCheck(t, e);
		if (!(Ce && gf(ue, t)) && !(Se && gf(de, t))) {
			if (i) {
				if (!Ke[t] && !gf(he, sf(n, pe, "")) && (t !== "src" && t !== "xlink:href" && t !== "href" || e === "script" || cf(n, "data:") !== 0 || !We[e]) && (!we || gf(fe, sf(n, pe, ""))) && n) return !1;
			} else if (!(Dt(e) && (ve.tagNameCheck instanceof RegExp && gf(ve.tagNameCheck, e) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(e)) && (ve.attributeNameCheck instanceof RegExp && gf(ve.attributeNameCheck, t) || ve.attributeNameCheck instanceof Function && ve.attributeNameCheck(t, e)) || t === "is" && ve.allowCustomizedBuiltInElements && (ve.tagNameCheck instanceof RegExp && gf(ve.tagNameCheck, n) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(n)))) return !1;
		}
		return !0;
	}, Et = $({}, [
		"annotation-xml",
		"color-profile",
		"font-face",
		"font-face-format",
		"font-face-name",
		"font-face-src",
		"font-face-uri",
		"missing-glyph"
	]), Dt = function(e) {
		return !Et[rf(e)] && gf(me, e);
	}, Ot = function(e, t, n, r) {
		if (S && typeof u == "object" && typeof u.getAttributeType == "function" && !n) switch (u.getAttributeType(e, t)) {
			case "TrustedHTML": return E(r);
			case "TrustedScriptURL": return function(e) {
				te(), T++;
				try {
					return S.createScriptURL(e);
				} finally {
					T--;
				}
			}(r);
		}
		return r;
	}, kt = function(e, t, r, i) {
		try {
			r ? e.setAttributeNS(r, t, i) : e.setAttribute(t, i), xt(e) ? pt(e) : $d(n.removed);
		} catch {
			M(t, e);
		}
	}, At = function(e) {
		Ct(D.beforeSanitizeAttributes, e, null);
		let t = e.attributes;
		if (!t || xt(e)) return;
		k = wt(D.uponSanitizeAttribute, k, _e, je);
		let n = {
			attrName: "",
			attrValue: "",
			keepAttr: !0,
			allowedAttributes: k,
			forceKeepAttr: void 0
		}, r = t.length, i = A(e.nodeName);
		for (; r--;) {
			let a = t[r], o = a.name, s = a.namespaceURI, c = a.value, l = A(o), u = c, d = o === "value" ? u : lf(u);
			n.attrName = l, n.attrValue = d, n.keepAttr = !0, n.forceKeepAttr = void 0, Ct(D.uponSanitizeAttribute, e, n), d = n.attrValue, !Le || l !== "id" && l !== "name" || cf(d, Re) === 0 || (M(o, e), d = Re + d), De && gf(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, d) || l === "attributename" && of(d, "href") ? M(o, e) : n.forceKeepAttr || (!n.keepAttr || !Te && gf(qf, d) ? M(o, e) : (Ee && (d = yt(d)), P(i, l, d) ? (d = Ot(i, l, s, d), d !== u && kt(e, o, s, d)) : M(o, e)));
		}
		Ct(D.afterSanitizeAttributes, e, null);
	}, jt = function(e) {
		let t = null, n = vt(e);
		for (Ct(D.beforeSanitizeShadowDOM, e, null); t = n.nextNode();) if (Ct(D.uponSanitizeShadowNode, t, null), Tt(t, e), At(t), N(t.content) && jt(t.content), (y ? y(t) : t.nodeType) === 1) {
			let e = _(t);
			N(e) && (F(e), jt(e));
		}
		Ct(D.afterSanitizeShadowDOM, e, null);
	}, F = function(e) {
		let t = [{
			node: e,
			shadow: null
		}];
		for (; t.length > 0;) {
			let e = t.pop();
			if (e.shadow) {
				jt(e.shadow);
				continue;
			}
			let n = e.node, r = (y ? y(n) : n.nodeType) === 1, i = h(n);
			if (i) for (let e = i.length - 1; e >= 0; --e) t.push({
				node: i[e],
				shadow: null
			});
			if (r) {
				let e = b ? b(n) : null;
				if (typeof e == "string" && A(e) === "template") {
					let e = n.content;
					N(e) && t.push({
						node: e,
						shadow: null
					});
				}
			}
			if (r) {
				let e = _(n);
				N(e) && t.push({
					node: null,
					shadow: e
				}, {
					node: e,
					shadow: null
				});
			}
		}
	};
	return n.sanitize = function(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = null, a = null, o = null, s = null;
		if (Qe = !e, Qe && (e = "<!-->"), typeof e != "string" && !St(e) && typeof (e = function(e) {
			switch (typeof e) {
				case "string": return e;
				case "number": return uf(e);
				case "boolean": return df(e);
				case "bigint": return ff ? ff(e) : "0";
				case "symbol": return pf ? pf(e) : "Symbol()";
				case "undefined":
				default: return hf(e);
				case "function":
				case "object": {
					if (e === null) return hf(e);
					let t = e, n = Sf(t, "toString");
					if (typeof n == "function") {
						let e = n(t);
						return typeof e == "string" ? e : hf(e);
					}
					return hf(e);
				}
			}
		}(e)) != "string") throw _f("dirty is not a string, aborting");
		if (!n.isSupported) return e;
		ke ? (O = Ae, k = je) : dt(t), (D.uponSanitizeElement.length > 0 || D.uponSanitizeAttribute.length > 0) && (O = xf(O)), D.uponSanitizeAttribute.length > 0 && (k = xf(k)), n.removed = [];
		let c = Be && typeof e != "string" && St(e);
		if (c) {
			(function(e) {
				if (!De) return;
				let t = [e];
				for (; t.length > 0;) {
					let e = t.pop(), n = y ? y(e) : e.nodeType;
					if (n === 7 || n === 8 && gf(Gf, e.data)) {
						try {
							p(e);
						} catch {}
						continue;
					}
					if (n === 1) {
						let t = e, n = A(b ? b(e) : e.nodeName);
						try {
							t.hasAttribute && t.hasAttribute("patchsrc") && t.removeAttribute("patchsrc"), t.hasAttribute && t.hasAttribute("for") && n !== "label" && n !== "output" && t.removeAttribute("for");
						} catch {}
					}
					let r = h(e);
					if (r) for (let e = r.length - 1; e >= 0; --e) t.push(r[e]);
				}
			})(e);
			let t = b ? b(e) : e.nodeName;
			if (typeof t == "string") {
				let n = A(t);
				if (!O[n] || ye[n]) throw mt(e), _f("root node is forbidden and cannot be sanitized in-place");
			}
			if (xt(e)) throw mt(e), _f("root node is clobbered and cannot be sanitized in-place");
			try {
				F(e);
			} catch (t) {
				throw mt(e), t;
			}
		} else if (St(e)) r = _t("<!---->"), a = r.ownerDocument.importNode(e, !0), a.nodeType === 1 && a.nodeName === "BODY" || a.nodeName === "HTML" ? r = a : r.appendChild(a), F(a);
		else {
			if (!Ne && !Ee && !Oe && e.indexOf("<") === -1) return S && Fe ? E(e) : e;
			if (r = _t(e), !r) return Ne ? null : Fe ? w : "";
		}
		r && Me && pt(r.firstChild);
		let l = c ? e : r;
		try {
			let e = vt(l);
			for (; o = e.nextNode();) Tt(o, l), At(o), N(o.content) && jt(o.content);
		} catch (t) {
			throw c && (mt(e), Zd(n.removed, (e) => {
				e.element && gt(e.element);
			})), t;
		}
		if (c) return Zd(n.removed, (e) => {
			e.element && gt(e.element);
		}), Ee && bt(e), e;
		if (Ne) {
			if (Ee && bt(r), Pe) for (s = ie.call(r.ownerDocument); r.firstChild;) s.appendChild(r.firstChild);
			else s = r;
			return (k.shadowroot || k.shadowrootmode) && (s = oe.call(i, s, !0)), s;
		}
		let u = Oe ? r.outerHTML : r.innerHTML;
		return Oe && O["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && gf(Hf, r.ownerDocument.doctype.name) && (u = "<!DOCTYPE " + r.ownerDocument.doctype.name + ">\n" + u), Ee && (u = yt(u)), S && Fe ? E(u) : u;
	}, n.setConfig = function() {
		dt(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}), ke = !0, Ae = O, je = k;
	}, n.clearConfig = function() {
		ct = null, ke = !1, Ae = null, je = null, S = C, w = "";
	}, n.isValidAttribute = function(e, t, n) {
		ct || dt({});
		let r = A(e), i = A(t);
		return P(r, i, n);
	}, n.addHook = function(e, t) {
		typeof t == "function" && mf(D, e) && ef(D[e], t);
	}, n.removeHook = function(e, t) {
		if (mf(D, e)) {
			if (t !== void 0) {
				let n = Qd(D[e], t);
				return n === -1 ? void 0 : tf(D[e], n, 1)[0];
			}
			return $d(D[e]);
		}
	}, n.removeHooks = function(e) {
		mf(D, e) && (D[e] = []);
	}, n.removeAllHooks = function() {
		D = {
			afterSanitizeAttributes: [],
			afterSanitizeElements: [],
			afterSanitizeShadowDOM: [],
			beforeSanitizeAttributes: [],
			beforeSanitizeElements: [],
			beforeSanitizeShadowDOM: [],
			uponSanitizeAttribute: [],
			uponSanitizeElement: [],
			uponSanitizeShadowNode: []
		};
	}, n;
}(), Zf = "Refusing to render web experiment since the viewer is a likely bot", Qf = {
	ADD_ATTR: (e, t) => e === "target" && t === "a" || e === "form" && /^(button|fieldset|input|output|select|textarea)$/.test(t),
	ADD_URI_SAFE_ATTR: ["form"]
}, $f, ep = {
	icontains: (e, t) => t.toLowerCase().indexOf(e.toLowerCase()) > -1,
	not_icontains: (e, t) => t.toLowerCase().indexOf(e.toLowerCase()) === -1,
	regex: (e, t) => Rl(t, e),
	not_regex: (e, t) => !Rl(t, e),
	exact: (e, t) => t === e,
	is_not: (e, t) => t !== e
}, tp = W("[Conversations]"), np = "Conversations not available yet.";
function rp(e, t) {
	let n = e?.flushIntervalMs ?? 3e3, r = e?.maxBufferSize ?? 100, i = t?.consoleCapture ? void 0 : e?.maxLogsPerInterval ?? 1e3, a = L(i) ? Math.max(r, 2048) : Math.max(r, i), o = H(H({}, function() {
		let e = "", t = "";
		try {
			var n;
			let r = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : void 0, i = r == null || (n = r.navigator) == null ? void 0 : n.userAgent;
			i && ([e, t] = Qn(i));
		} catch {}
		return function(e, t) {
			let n = function(e) {
				if (e) return {}.hasOwnProperty.call(ya, e) ? ya[e] : e;
			}(e);
			return H(H({}, n ? { "os.name": n } : {}), t ? { "os.version": t } : {});
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
var ip = [
	"debug",
	"log",
	"warn",
	"error",
	"info"
], ap = (e) => {
	for (; e?.__rrweb_original__;) e = e.__rrweb_original__;
	return e;
}, op = "console", sp = "__posthogHandledLogsRequestError", cp = (e, t) => {
	let n = e instanceof Error ? e : Error(t);
	return n[sp] = !0, n;
}, lp = (e) => !!e && typeof e == "object" && !0 === e[sp], up = class {
	get _coreLogger() {
		return H(H({}, this._logger), {}, { error: (...e) => {
			e.some(lp) || this._logger.error(...e);
		} });
	}
	constructor(e, t) {
		this._configSource = e, this._getSdkContext = t, this.name = "logs", this._isLogsEnabled = !1, this._isLoaded = !1, this._isLoading = !1, this._logger = W("[logs]"), this._queue = [], this._consoleQueue = [], this._consecutiveStatusZeroFailures = 0, this._setupStarted = !1, this._disposed = !1, this._consoleBuffer = [], this._consoleRecorderUnpatchers = [], this._isRecordingConsole = !1, this._isRecordingConsoleEntry = !1, this._listeningForReconnect = !1, this._onReconnect = () => {
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
			this._window && (q(this._window, "online", this._onReconnect), this._listeningForReconnect = !0);
		}
	}
	_buildCore(e, t, n, r) {
		this._listenForReconnect();
		let i = rp(this._configSource.get(), n);
		return [new ka(this._createHost(e, t), i, this._coreLogger, () => this._getSdkContext(), (e) => e(), void 0, r), i];
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
		}, op)), this._consoleCore;
	}
	setup(e) {
		if (!this._disposed && !this._setupStarted) return this._setupStarted = !0, this._client = e, this._logger = e.logger.createLogger("[logs]"), fd(e.kv.initialize(), () => {
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
		B(n) ? this._stopRecorderStartedByPersistedHint() : ((t = this._client) == null || t.kv.set(this._configSource.captureHintKey, !!n), n ? (this._isLogsEnabled = !0, this._isLoaded || this._startConsoleRecorder(), this.loadIfEnabled()) : this._stopRecorderStartedByPersistedHint());
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
		let e = rp(this._configSource.get()).maxBufferSize, t = !0;
		this._consoleRecorderUnpatchers.push(() => {
			t = !1;
		});
		for (let n of ip) {
			let r;
			try {
				r = ap(this._window.console[n]);
			} catch {
				continue;
			}
			r && this._consoleRecorderUnpatchers.push(Wu(this._window.console, n, (i) => {
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
		return V(function* () {
			let t = e._core?.flush().catch((t) => e._logFlushError(t)), n = e._consoleCore?.flush().catch((t) => e._logFlushError(t));
			yield t, yield n;
		})();
	}
	_logFlushError(e) {
		lp(e) || this._logger.error("PostHog logs flush failed:", e);
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
			getPersistedProperty: (t) => t === St.LogsQueue ? e() : void 0,
			setPersistedProperty(e, n) {
				e === St.LogsQueue && t(n ?? []);
			},
			_sendLogsBatch: (e) => this._sendLogsBatch(e),
			getLibraryId: () => n.library.name,
			getLibraryVersion: () => n.library.version
		};
	}
	_sendLogsBatch(e) {
		return new Promise((t) => {
			if (js(this._consecutiveStatusZeroFailures, 3)) return void t({
				kind: "fatal",
				error: cp(void 0, "logs endpoint is unreachable, dropping batch")
			});
			let n = !1, r = (e) => {
				n || (n = !0, clearTimeout(i), t(e));
			}, i = setTimeout(() => {
				this._logger.warn("Logs request timed out before receiving a response"), r({
					kind: "retry-later",
					error: cp(void 0, "logs request timed out")
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
					error: cp(e.error, "logs request failed before receiving an HTTP response")
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
		(e !== 0 || t) && (this._consecutiveStatusZeroFailures = Ms(e, this._consecutiveStatusZeroFailures, 3, () => this._logger.warn("Log requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped sending logs; will try again when connectivity changes.")));
	}
	_flushViaTransport(e) {
		this._queue.length > 0 && this._drainQueueViaTransport(e, this._queue, this._resolvedConfig, this._client.library.name, (e) => {
			this._queue = e;
		}), this._consoleQueue.length > 0 && this._drainQueueViaTransport(e, this._consoleQueue, this._consoleResolvedConfig, op, (e) => {
			this._consoleQueue = e;
		});
	}
	_drainQueueViaTransport(e, t, n, r, i) {
		if (t.length === 0) return;
		let a = t.map((e) => e.record);
		i([]);
		let o = Ta(a, wa(n, this._client.library.name, this._client.library.version), r, this._client.library.version);
		this._client.sendRequest("/i/v1/logs", {
			method: "POST",
			query: { token: this._client.projectToken },
			body: o,
			compression: "best-available",
			transport: e,
			timeoutMs: 6e4
		}).catch((e) => this._logFlushError(e));
	}
}, dp = W("[NetworkMetrics]"), fp = {
	"http:": 80,
	"https:": 443
}, pp = /* @__PURE__ */ new Set([
	"CONNECT",
	"DELETE",
	"GET",
	"HEAD",
	"OPTIONS",
	"PATCH",
	"POST",
	"PUT",
	"TRACE"
]), mp = (e, t) => {
	let n = String(t);
	return {
		method: String(e).toUpperCase(),
		url: ks(n)?.href || n
	};
}, hp = (e, t, n, r, i, a, o = !1) => {
	try {
		var s;
		let c = i();
		if (!c) return;
		let l = n || void 0, u = pu() - r, d = ks(t.url);
		if (d && d.protocol !== "http:" && d.protocol !== "https:") return;
		let f = {
			url: d?.href || t.url,
			method: t.method
		}, p = Mt(c.name) ? c.name(f) : R(c.name) ? c.name : "http.client.request.duration";
		if (!p) return;
		let m = o && !l ? void 0 : ((e, t) => e ? 400 > e ? void 0 : String(e) : t?.name || "_OTHER")(l, a), h = H(H(H(H(H({}, ((e) => {
			let t = pp.has(e) ? e : "_OTHER";
			return H({ "http.request.method": t }, t === "_OTHER" && e !== t ? { "http.request.method_original": e } : {});
		})(f.method)), d ? ((e) => {
			return {
				"server.address": e.hostname.startsWith("[") && e.hostname.endsWith("]") ? e.hostname.slice(1, -1) : e.hostname,
				"server.port": Number(e.port) || fp[e.protocol],
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
		dp.error("Failed to record network metric", e);
	}
}, gp = () => {}, _p = (e, t) => Mt(j?.fetch) ? Wu(j, "fetch", (n) => function(...r) {
	let i = pu(), a = n.apply(this, r);
	if (!t()) return a;
	try {
		let [n, o] = r, s = mp(o?.method ?? n?.method ?? "GET", n?.url ?? n);
		return a.then((n) => (hp(e, s, n?.status, i, t, void 0, !0), n), (n) => {
			throw hp(e, s, void 0, i, t, n), n;
		});
	} catch (e) {
		return dp.error("Failed to observe fetch", e), a;
	}
}) : gp, vp = (e, t) => {
	var n;
	let r = j == null || (n = j.XMLHttpRequest) == null ? void 0 : n.prototype;
	if (!r) return gp;
	let i = /* @__PURE__ */ new WeakMap(), a = Wu(r, "open", (e) => function(...t) {
		try {
			nl.has(this) || i.set(this, mp(t[0], t[1]));
		} catch (e) {
			dp.error("Failed to observe XHR open", e);
		}
		return e.apply(this, t);
	}), o = Wu(r, "send", (n) => function(...r) {
		let a;
		try {
			let n = i.get(this);
			if (n && t()) {
				let r = pu();
				a = () => {
					this.removeEventListener("loadend", a), hp(e, n, this.status, r, t);
				}, q(this, "loadend", a);
			}
		} catch (e) {
			dp.error("Failed to observe XHR send", e);
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
}, yp = /* @__PURE__ */ new WeakMap(), bp = /* @__PURE__ */ new Set([
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
]), xp = {
	maxStringLength: 2048,
	truncationSuffix: "..."
}, Sp = {
	maxStringLength: 2048,
	truncationSuffix: "..."
};
function Cp(e) {
	if (e) return !0 === e ? {
		intent: !0,
		model: !0
	} : {
		intent: !1 !== e.intent,
		model: !1 !== e.model
	};
}
function wp(e, t) {
	return {}.hasOwnProperty.call(e, t);
}
function Tp(e, t) {
	let n = Object.create(e);
	return t && Object.defineProperty(n, "inputSchema", {
		configurable: !0,
		enumerable: !0,
		writable: !0,
		value: t
	}), n;
}
function Ep(e, t, n = !1) {
	if (!R(e)) return;
	let r = e.trim();
	return r ? (n ? ia(r, xp) : r).slice(0, t) : void 0;
}
function Dp(e) {
	try {
		return I(e) && !0 === e.isError;
	} catch {
		return !1;
	}
}
function Op(e) {
	return ia(e || "Unknown error", Sp).slice(0, 2048);
}
function kp(e, t) {
	try {
		return Op(t ? function(e) {
			try {
				return !I(e) || !F(e.content) ? void 0 : e.content.filter((e) => I(e) && e.type === "text" && R(e.text)).map((e) => e.text).join(" ").trim() || void 0;
			} catch {
				return;
			}
		}(e) : I(e) && R(e.message) ? e.message : R(e) ? e : String(e));
	} catch {
		return "Unknown error";
	}
}
function Ap(e, t, n) {
	return t.errorResult ? [{
		type: "Error",
		value: n,
		mechanism: {
			type: "generic",
			handled: !0,
			synthetic: !0,
			exception_id: 0
		}
	}] : e.buildProperties(t.error, { handled: !0 }).$exception_list.map((e) => H(H({}, e), {}, { value: Op(e.value) }));
}
function jp(e, t) {
	if (t) return "Error";
	try {
		if (!I(e)) return "Error";
		let t = R(e.name) ? e.name.trim() : "", n = e.constructor;
		return t && t !== "Error" || !Mt(n) || n.name === "Error" || (t = n.name), (t || "Error").slice(0, 256);
	} catch {
		return "Error";
	}
}
function Mp(e, t) {
	return {
		message: kp(e, t),
		type: jp(e, t)
	};
}
Ru.__defaultExtensionClasses = H({}, {
	featureFlags: class extends kd {
		constructor(e) {
			let t = new jd(e.config, e._shouldDisableFlags());
			super(t), this.name = du, this._instance = e, this._mutableConfigSource = t;
		}
		get _crossTabPersistence() {
			return this._instance.persistence;
		}
		updateConfig(e, t) {
			this._mutableConfigSource.update(e, t), this._onConfigUpdated();
		}
	},
	sessionRecording: class {
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
			if (this._instance = e, this._forceAllowLocalhostNetworkCapture = !1, this._recordingStatus = Zu, this._persistFlagsOnSessionListener = void 0, this._sessionRecordingDisposed = !1, this._documentWasEverVisible = (() => {
				var e, t;
				if (!M?.visibilityState || M.visibilityState === "visible") return !0;
				let n = j == null || (e = j.performance) == null || (t = e.getEntriesByType) == null ? void 0 : t.call(e, "visibility-state");
				return !n?.length || n.some((e) => e.name === "visible");
			})(), this._onVisibilityChange = () => {
				var e, t;
				M?.visibilityState === "visible" && (this._documentWasEverVisible = !0, (e = this._lazyLoadedSessionRecording) == null || (t = e.setDocumentWasEverVisible) == null || t.call(e, !0));
			}, !this._instance.sessionManager) throw $u.error("started without valid sessionManager"), /* @__PURE__ */ Error("[SessionRecording] started without valid sessionManager. This is a bug.");
			if (this._config.cookieless_mode === "always") throw Error("[SessionRecording] cannot be used with cookieless_mode=\"always\"");
			M != null && M.addEventListener && q(M, "visibilitychange", this._onVisibilityChange);
		}
		initialize() {
			this.startIfEnabledOrStop();
		}
		dispose({ discardBufferedEvents: e = !1 } = {}) {
			var t;
			this._sessionRecordingDisposed = !0, M == null || (t = M.removeEventListener) == null || t.call(M, "visibilitychange", this._onVisibilityChange), e ? this._discardRecording(!0) : this.stopRecording();
		}
		get _isRecordingEnabled() {
			let e = !!this._instance.get_property("$session_recording_remote_config")?.enabled, t = !this._config.disable_session_recording, n = this._config.disable_session_recording || this._instance.consent.isOptedOut();
			return j && e && t && !n;
		}
		startIfEnabledOrStop(e) {
			if (this._sessionRecordingDisposed || this._isRecordingEnabled && this._lazyLoadedSessionRecording?.isStarted) return;
			let t = !L(Object.assign) && !L(Array.from);
			this._isRecordingEnabled && t ? (this._lazyLoadAndStart(e), $u.info("starting")) : (this._recordingStatus = Zu, this.stopRecording());
		}
		_lazyLoadAndStart(e) {
			var t;
			if (this._isRecordingEnabled) {
				if (this._recordingStatus !== "awaiting_config" && this._recordingStatus !== "missing_config" && (this._recordingStatus = Qu), N != null && (t = N.__PosthogExtensions__) != null && (t = t.rrweb) != null && t.record && N.__PosthogExtensions__?.initSessionRecording) this._onScriptLoaded(e);
				else {
					var n, r;
					let t = this._instance.sessionManager;
					(n = N.__PosthogExtensions__) == null || (r = n.loadExternalDependency) == null || r.call(n, this._instance, this._scriptName, (n) => {
						if (!this._sessionRecordingDisposed && this._isRecordingEnabled && this._instance.sessionManager === t) return n ? (this._instance.register_for_session({ $sdk_debug_recording_script_not_loaded: !0 }), $u.error("could not load recorder", n)) : void this._onScriptLoaded(e);
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
			if (B(e)) return null;
			let n = Ft(e) ? e : parseFloat(e);
			return typeof (r = n) != "number" || !Number.isFinite(r) || 0 > r || r > 1 ? ($u.warn(`${t} must be between 0 and 1. Ignoring invalid value:`, e), null) : n;
			var r;
		}
		_persistRemoteConfig(e) {
			if (this._persistence) {
				var t;
				let n = this._persistence, r = () => {
					let t = !1 === e.sessionRecording ? void 0 : e.sessionRecording, r = this._validateSampleRate(this._config.session_recording?.sampleRate, "session_recording.sampleRate"), i = this._validateSampleRate(t?.sampleRate, "remote config sampleRate"), a = r ?? i;
					B(a) && this._resetSampling();
					let o = t?.minimumDurationMilliseconds;
					n.register({ [_e]: H(H({
						cache_timestamp: Date.now(),
						enabled: !!t
					}, t), {}, {
						networkPayloadCapture: H({ capturePerformance: e.capturePerformance }, t?.networkPayloadCapture),
						canvasRecording: {
							enabled: t?.recordCanvas,
							fps: t?.canvasFps,
							quality: t?.canvasQuality
						},
						sampleRate: a,
						minimumDurationMilliseconds: L(o) ? null : o,
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
			t && "sessionRecording" in t ? !1 === t.sessionRecording ? (this._persistRemoteConfig(t), this._discardRecording()) : (this._persistRemoteConfig(t), this.startIfEnabledOrStop()) : (this._recordingStatus === "awaiting_config" && (this._recordingStatus = "missing_config", this._instance.register_for_session({ [Ze]: !0 }), $u.warn("config refresh failed, recording will not start until page reload")), this.startIfEnabledOrStop());
		}
		log(e, t = "log") {
			this._lazyLoadedSessionRecording?.log ? this._lazyLoadedSessionRecording.log(e, t) : $u.warn("log called before recorder was ready");
		}
		get _scriptName() {
			var e, t;
			let n = (e = this._instance) == null || (e = e.persistence) == null ? void 0 : e.get_property(_e);
			return (n == null || (t = n.scriptConfig) == null ? void 0 : t.script) || "lazy-recorder";
		}
		_isRemoteConfigFresh() {
			let e = this._instance.get_property(_e);
			if (!e) return !1;
			let t;
			try {
				t = typeof e == "object" ? e : JSON.parse(e);
			} catch (e) {
				return $u.warn("persisted remote config for session recording is invalid and will be ignored", e), !1;
			}
			return !B(t.cache_timestamp) && 36e5 >= Date.now() - t.cache_timestamp;
		}
		_onScriptLoaded(e) {
			var t, n;
			if (!this._sessionRecordingDisposed && this._isRecordingEnabled && this._instance.sessionManager) {
				if (!N.__PosthogExtensions__?.initSessionRecording) return $u.warn("Called on script loaded before session recording is available. This can be caused by adblockers."), void this._instance.register_for_session({ [Xe]: !0 });
				if (this._lazyLoadedSessionRecording || (this._lazyLoadedSessionRecording = N.__PosthogExtensions__?.initSessionRecording(this._instance, this._documentWasEverVisible), this._lazyLoadedSessionRecording._forceAllowLocalhostNetworkCapture = this._forceAllowLocalhostNetworkCapture), !this._isRemoteConfigFresh()) {
					if (this._recordingStatus === "missing_config" || this._recordingStatus === "awaiting_config") return;
					this._recordingStatus = "awaiting_config", $u.info("persisted remote config is stale, requesting fresh config before starting"), new Sc(this._instance).load();
					return;
				}
				this._recordingStatus = Qu, (t = (n = this._lazyLoadedSessionRecording).setDocumentWasEverVisible) == null || t.call(n, this._documentWasEverVisible), this._lazyLoadedSessionRecording.start(e);
			} else this._recordingStatus = Zu;
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
			for (let t of ed) {
				let n = this._instance.sessionPersistence?.get_property(t);
				L(n) || (e[t] = n);
			}
			return H(H({}, e), this._lazyLoadedSessionRecording?.sdkDebugProperties || { $recording_status: this.status });
		}
		tryAddCustomEvent(e, t) {
			return !!this._lazyLoadedSessionRecording?.tryAddCustomEvent(e, t);
		}
		flushBeforeIdentityReset() {
			var e, t;
			(e = this._lazyLoadedSessionRecording) == null || (t = e.flushBeforeIdentityReset) == null || t.call(e);
		}
	},
	autocapture: class extends uu {
		constructor(e) {
			super(new Bu(e)), this.instance = e;
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
			this.isEnabled && (U.info("History API monitoring enabled, starting..."), this.monitorHistoryChanges());
		}
		startIfEnabledOrStop() {
			this.stop(), this._lastLocation = this._getCurrentLocation(), this.startIfEnabled();
		}
		stop() {
			this._popstateListener && this._popstateListener(), this._popstateListener = void 0, this._hashchangeListener && this._hashchangeListener(), this._hashchangeListener = void 0, U.info("History API monitoring stopped");
		}
		monitorHistoryChanges() {
			j && j.history && (this._patchHistoryMethod("pushState"), this._patchHistoryMethod("replaceState"), this._setupPopstateListener(), this._shouldCaptureHashChanges() && this._setupHashchangeListener());
		}
		_patchHistoryMethod(e) {
			if (!j || j.history[e]?.__posthog_wrapped__) return;
			let t = this;
			Wu(j.history, e, (n) => function(r, i, a) {
				var o;
				t._isUrlChanging(a) && t._flushPendingPageview(), n.call(this, r, i, a), t._capturePageview(e, !t._isFlushingPageview && (j == null || (o = j.event) == null ? void 0 : o.type) !== "popstate");
			});
		}
		_getCurrentLocation() {
			let e = j?.location;
			if (e?.pathname) return {
				pathname: e.pathname,
				search: e.search,
				hash: e.hash
			};
		}
		_getCaptureOptions() {
			let e = this._instance.config.capture_pageview;
			return e === "history_change" ? { path: !0 } : I(e) ? e : {};
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
					let n = () => this._instance.capture(lt, { navigation_type: e });
					t ? (this._pendingPageview = n, Promise.resolve().then(() => this._flushPendingPageview())) : n();
				}
				this._lastLocation = n;
			} catch (t) {
				U.error(`Error capturing ${e} pageview`, t);
			}
		}
		_isUrlChanging(e) {
			return !(B(e) || !j) && ks(String(e))?.href !== j.location?.href;
		}
		_flushPendingPageview() {
			let e = this._pendingPageview;
			if (e) {
				this._pendingPageview = void 0, this._isFlushingPageview = !0;
				try {
					e();
				} catch (e) {
					U.error("Error capturing deferred pageview", e);
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
			q(j, "popstate", e), this._popstateListener = () => {
				j && j.removeEventListener("popstate", e);
			};
		}
		_setupHashchangeListener() {
			if (this._hashchangeListener) return;
			let e = () => {
				this._capturePageview("hashchange");
			};
			q(j, "hashchange", e), this._hashchangeListener = () => {
				j && j.removeEventListener("hashchange", e);
			};
		}
	},
	heatmaps: class {
		get _config() {
			return this.instance.config;
		}
		constructor(e) {
			this._enabledServerSide = !1, this._initialized = !1, this._flushInterval = null, this.instance = e, this._enabledServerSide = !!this.instance.persistence?.props[ue], this.rageclicks = new eu(e.config.rageclick);
		}
		initialize() {
			this.startIfEnabled();
		}
		get flushIntervalMilliseconds() {
			let e = 5e3;
			return I(this._config.capture_heatmaps) && this._config.capture_heatmaps.flush_interval_milliseconds && (e = this._config.capture_heatmaps.flush_interval_milliseconds), e;
		}
		get isEnabled() {
			return B(this._config.capture_heatmaps) ? B(this._config.enable_heatmaps) ? this._enabledServerSide : this._config.enable_heatmaps : !1 !== this._config.capture_heatmaps;
		}
		startIfEnabled() {
			if (this.isEnabled) {
				if (this._initialized) return;
				td.info("starting..."), this._setupListeners(), this._onVisibilityChange();
			} else clearInterval(this._flushInterval ?? void 0), this._removeListeners(), this.getAndClearBuffer();
		}
		onRemoteConfig(e) {
			if (!e.ok) return;
			let t = e.config;
			if (!("heatmaps" in t)) return;
			let n = !!t.heatmaps;
			this.instance.persistence && this.instance.persistence.register({ [ue]: n }), this._enabledServerSide = n, this.startIfEnabled();
		}
		getAndClearBuffer() {
			let e = this._buffer;
			return this._buffer = void 0, e;
		}
		_onDeadClick(e) {
			nd(e.originalEvent) && this._onClick(e.originalEvent, "deadclick");
		}
		_onVisibilityChange() {
			this._flushInterval && clearInterval(this._flushInterval), this._flushInterval = M?.visibilityState === "visible" ? setInterval(this._flush.bind(this), this.flushIntervalMilliseconds) : null;
		}
		_setupListeners() {
			j && M && (this._flushHandler = this._flush.bind(this), q(j, ct, this._flushHandler), this._onClickHandler = (e) => this._onClick(e || j?.event), q(M, "click", this._onClickHandler, { capture: !0 }), this._onMouseMoveHandler = (e) => this._onMouseMove(e || j?.event), q(M, "mousemove", this._onMouseMoveHandler, { capture: !0 }), this._deadClicksCapture = new _s(this.instance, hs, this._onDeadClick.bind(this)), this._deadClicksCapture.startIfEnabledOrStop(), this._onVisibilityChange_handler = this._onVisibilityChange.bind(this), q(M, y, this._onVisibilityChange_handler), this._initialized = !0);
		}
		_removeListeners() {
			var e;
			j && M && (this._flushHandler && j.removeEventListener(ct, this._flushHandler), this._onClickHandler && M.removeEventListener("click", this._onClickHandler, { capture: !0 }), this._onMouseMoveHandler && M.removeEventListener("mousemove", this._onMouseMoveHandler, { capture: !0 }), this._onVisibilityChange_handler && M.removeEventListener(y, this._onVisibilityChange_handler), clearTimeout(this._mouseMoveTimeout), (e = this._deadClicksCapture) == null || e.stop(), this._initialized = !1);
		}
		_getProperties(e, t) {
			let n = this.instance.scrollManager.scrollY(), r = this.instance.scrollManager.scrollX(), i = this.instance.scrollManager.scrollElement(), a = function(e, t, n) {
				let r = e;
				for (; r && Eo(r) && !Do(r, "body");) {
					if (r === n) return !1;
					let e;
					try {
						e = (r.ownerDocument?.defaultView ?? j)?.getComputedStyle(r).position;
					} catch {
						return !1;
					}
					if (P(t, e)) return !0;
					r = zo(r);
				}
				return !1;
			}(Fo(e), ["fixed", "sticky"], i);
			return {
				x: e.clientX + (a ? 0 : r),
				y: e.clientY + (a ? 0 : n),
				target_fixed: a,
				type: t
			};
		}
		_onClick(e, t = "click") {
			var n;
			if (To(e.target) || !nd(e)) return;
			let r = this._getProperties(e, t);
			(n = this.rageclicks) != null && n.isRageClick(e.clientX, e.clientY, (/* @__PURE__ */ new Date()).getTime()) && Zo(Fo(e), this.instance.config.rageclick) && this._capture(H(H({}, r), {}, { type: "rageclick" })), this._capture(r);
		}
		_onMouseMove(e) {
			!To(e.target) && nd(e) && (clearTimeout(this._mouseMoveTimeout), this._mouseMoveTimeout = setTimeout(() => {
				this._capture(this._getProperties(e, "mousemove"));
			}, 500));
		}
		_capture(e) {
			if (!j) return;
			let t = this._config.disable_capture_url_hashes ? fr(j.location.href) : j.location.href, n = this._config.custom_personal_data_properties, r = Fs(t, this._config.mask_personal_data_properties ? [...Ls, ...n || []] : [], zs);
			this._buffer = this._buffer || {}, this._buffer[r] || (this._buffer[r] = []), this._buffer[r].push(e);
		}
		_flush() {
			this._buffer && !Nt(this._buffer) && this.instance.capture("$$heatmap", { $heatmap_data: this.getAndClearBuffer() });
		}
	},
	deadClicksAutocapture: _s,
	webVitalsAutocapture: class {
		constructor(e) {
			this._instance = e, this._enabledServerSide = !1, this._initialized = !1, this._buffer = {
				navigationKey: void 0,
				url: void 0,
				metrics: [],
				firstMetricTimestamp: void 0
			}, this._flushToCapture = (e = !1) => {
				clearTimeout(this._delayedFlushTimer), this._delayedFlushTimer = void 0, this._buffer.metrics.length !== 0 && (this._instance.capture("$web_vitals", H({ $current_url: this._buffer.url }, this._buffer.metrics.reduce((e, t) => H(H({}, e), {}, {
					[`$web_vitals_${t.name}_event`]: H({}, t),
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
				}, B(e?.name) || B(e?.value)) return void Ku.error("Invalid metric received", e);
				let t = typeof e.navigationURL == "string" ? e.navigationURL : void 0, n = this._maskedURL(t);
				if (L(n)) return;
				let r = Ft(e.navigationId) || typeof e.navigationId == "string" ? `navigation:${e.navigationId}` : `url:${n}`;
				if (this._maxAllowedValue && e.value >= this._maxAllowedValue) return void Ku.error("Ignoring metric with value >= " + this._maxAllowedValue, e);
				this._buffer.navigationKey !== r && (this._flushToCapture(), this._delayedFlushTimer = setTimeout(this._flushToCapture, this.flushToCaptureTimeoutMs)), L(this._buffer.navigationKey) && (this._buffer.navigationKey = r, this._buffer.url = n), this._buffer.firstMetricTimestamp = L(this._buffer.firstMetricTimestamp) ? Date.now() : this._buffer.firstMetricTimestamp;
				let i = this._instance.sessionManager?.checkAndGetSessionAndWindowId(!0), a = H(H(H({}, e), t ? { navigationURL: n } : {}), {}, {
					$current_url: n,
					timestamp: Date.now()
				});
				if (delete a.entries, I(e.attribution) && this.attributionMetrics.indexOf(e.name) > -1) {
					let t = {};
					for (let n of Xu) {
						let r = n === "url" && typeof e.attribution[n] == "string" ? this._maskedURL(e.attribution[n]) : e.attribution[n];
						L(r) || (t[n] = r);
					}
					a.attribution = t;
				} else delete a.attribution;
				L(i) || (a.$session_id = i.sessionId, a.$window_id = i.windowId), this._buffer.metrics.push(a), this._buffer.metrics.length === this.allowedMetrics.length && this._flushToCapture();
			}, this._startCapturing = () => {
				if (this._initialized) return;
				let e, t, n, r, i = !1, a = N.__PosthogExtensions__, o = a?.postHogWebVitalsCallbacksByFlavor, s = o?.[this._callbackFlavor] || (this._callbackFlavor === "web-vitals" && L(o) ? a?.postHogWebVitalsCallbacks : void 0);
				if (!L(s)) {
					let a = s.withoutAttribution, o = this.attributionMetrics;
					i = !L(a), e = o.indexOf("LCP") > -1 ? s.onLCP : a?.onLCP || s.onLCP, t = o.indexOf("CLS") > -1 ? s.onCLS : a?.onCLS || s.onCLS, n = o.indexOf("FCP") > -1 ? s.onFCP : a?.onFCP || s.onFCP, r = o.indexOf("INP") > -1 ? s.onINP : a?.onINP || s.onINP;
				}
				if (!(e && t && n && r)) return void Ku.error("web vitals callbacks not loaded - not starting");
				let c = { reportSoftNavs: this.useSoftNavs }, l = i && this.attributionMetrics.indexOf("INP") > -1 ? H(H({}, c), {}, { includeProcessedEventEntries: !1 }) : c;
				this.allowedMetrics.indexOf("LCP") > -1 && e(this._addToBuffer.bind(this), c), this.allowedMetrics.indexOf("CLS") > -1 && t(this._addToBuffer.bind(this), c), this.allowedMetrics.indexOf("FCP") > -1 && n(this._addToBuffer.bind(this), c), this.allowedMetrics.indexOf("INP") > -1 && r(this._addToBuffer.bind(this), l);
				let u = j?.document;
				q(u, y, () => {
					u?.visibilityState === "hidden" && this._flushToCapture(!0);
				}), q(j, "pagehide", () => this._flushToCapture(!0)), this._initialized = !0;
			}, this._enabledServerSide = !!this._instance.persistence?.props[me], this.startIfEnabled();
		}
		get _perfConfig() {
			return this._instance.config.capture_performance;
		}
		get allowedMetrics() {
			let e = I(this._perfConfig) ? this._perfConfig?.web_vitals_allowed_metrics : void 0;
			return B(e) ? this._instance.persistence?.props.$web_vitals_allowed_metrics || Ju : e;
		}
		get flushToCaptureTimeoutMs() {
			return (I(this._perfConfig) ? this._perfConfig.web_vitals_delayed_flush_ms : void 0) || 5e3;
		}
		get attributionMetrics() {
			let e = I(this._perfConfig) ? this._perfConfig.web_vitals_attribution : void 0;
			return Lt(e) ? e ? Ju : [] : F(e) ? e : Yu;
		}
		get useAttribution() {
			return this.attributionMetrics.length > 0;
		}
		get useSoftNavs() {
			let e = I(this._perfConfig) ? this._perfConfig.__preview_web_vitals_soft_navs : void 0;
			return e != null && e;
		}
		get _maxAllowedValue() {
			let e = I(this._perfConfig) && Ft(this._perfConfig.__web_vitals_max_value) ? this._perfConfig.__web_vitals_max_value : qu;
			return e > 0 && 6e4 >= e ? qu : e;
		}
		get isEnabled() {
			let e = ht?.protocol;
			if (e !== "http:" && e !== "https:") return Ku.info("Web Vitals are disabled on non-http/https protocols"), !1;
			let t = I(this._perfConfig) ? this._perfConfig.web_vitals : Lt(this._perfConfig) ? this._perfConfig : void 0;
			return Lt(t) ? t : this._enabledServerSide;
		}
		startIfEnabled() {
			this.isEnabled && !this._initialized && (Ku.info("enabled, starting..."), this._loadScript(this._startCapturing));
		}
		onRemoteConfig(e) {
			if (!e.ok) return;
			let t = e.config;
			if (!("capturePerformance" in t)) return;
			let n = I(t.capturePerformance) && !!t.capturePerformance.web_vitals, r = I(t.capturePerformance) ? t.capturePerformance.web_vitals_allowed_metrics : void 0;
			this._instance.persistence && (this._instance.persistence.register({ [me]: n }), this._instance.persistence.register({ [k]: r })), this._enabledServerSide = n, this.startIfEnabled();
		}
		get _callbackFlavor() {
			return this.useSoftNavs ? this.useAttribution ? "web-vitals-with-attribution-soft-navs" : "web-vitals-soft-navs" : this.useAttribution ? "web-vitals-with-attribution" : "web-vitals";
		}
		_loadScript(e) {
			var t;
			let n = N.__PosthogExtensions__, r = this._callbackFlavor, i = n?.postHogWebVitalsCallbacksByFlavor;
			i?.[r] || r === "web-vitals" && L(i) && n?.postHogWebVitalsCallbacks ? e() : n == null || (t = n.loadExternalDependency) == null || t.call(n, this._instance, r, (t) => {
				t ? Ku.error("failed to load script", t) : e();
			});
		}
		_maskedURL(e) {
			let t = e || j?.location.href;
			if (!t) return void Ku.error("Could not determine current URL");
			let n = this._instance.config.disable_capture_url_hashes ? fr(t) : t, r = this._instance.config.custom_personal_data_properties;
			return Fs(n, this._instance.config.mask_personal_data_properties ? [...Ls, ...r || []] : [], zs);
		}
	},
	exceptionObserver: class {
		constructor(e) {
			this._startCapturing = () => {
				if (!j || !this.isEnabled || !N.__PosthogExtensions__?.errorWrappingFunctions) return;
				let e = N.__PosthogExtensions__.errorWrappingFunctions.wrapOnError, t = N.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection, n = N.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
				try {
					!this._unwrapOnError && this._config.capture_unhandled_errors && (this._unwrapOnError = e(this.captureException.bind(this))), !this._unwrapUnhandledRejection && this._config.capture_unhandled_rejections && (this._unwrapUnhandledRejection = t(this.captureException.bind(this))), !this._unwrapConsoleError && this._config.capture_console_errors && (this._unwrapConsoleError = n(this.captureException.bind(this)));
				} catch (e) {
					Vu.error("failed to start", e), this._stopCapturing();
				}
			}, this._instance = e, this._remoteEnabled = !!this._instance.persistence?.props[de], this._rateLimiter = new $t(H(H({}, function(e = {}) {
				return {
					refillRate: e.exceptionRateLimiterRefillRate ?? e.__exceptionRateLimiterRefillRate ?? 1,
					bucketSize: e.exceptionRateLimiterBucketSize ?? e.__exceptionRateLimiterBucketSize ?? 10
				};
			}(this._instance.config.error_tracking)), {}, {
				refillInterval: 1e4,
				_logger: Vu
			})), this._config = this._requiredConfig(), this.startIfEnabledOrStop();
		}
		_requiredConfig() {
			let e = this._instance.config.capture_exceptions, t = {
				capture_unhandled_errors: !1,
				capture_unhandled_rejections: !1,
				capture_console_errors: !1
			};
			return I(e) ? t = H(H({}, t), e) : (L(e) ? this._remoteEnabled : e) && (t = H(H({}, t), {}, {
				capture_unhandled_errors: !0,
				capture_unhandled_rejections: !0
			})), t;
		}
		get isEnabled() {
			return this._config.capture_console_errors || this._config.capture_unhandled_errors || this._config.capture_unhandled_rejections;
		}
		startIfEnabledOrStop() {
			this.isEnabled ? (Vu.info("enabled"), this._stopCapturing(), this._loadScript(this._startCapturing)) : this._stopCapturing();
		}
		_loadScript(e) {
			var t, n;
			N.__PosthogExtensions__?.errorWrappingFunctions ? e() : (t = N.__PosthogExtensions__) == null || (n = t.loadExternalDependency) == null || n.call(t, this._instance, "exception-autocapture", (t) => {
				if (t) return Vu.error("failed to load script", t);
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
			"autocaptureExceptions" in t && (this._remoteEnabled = !!t.autocaptureExceptions || !1, this._instance.persistence && this._instance.persistence.register({ [de]: this._remoteEnabled }), this._config = this._requiredConfig(), this.startIfEnabledOrStop());
		}
		onConfigChange() {
			this._config = this._requiredConfig();
		}
		captureException(e) {
			try {
				var t, n;
				let r = (e == null || (t = e.$exception_list) == null || (t = t[0]) == null ? void 0 : t.type) ?? "Exception";
				if (this._rateLimiter.consumeRateLimit(r)) return void Vu.info("Skipping exception capture because of client rate limiting.", { exception: r });
				(n = this._instance.exceptions) == null || n.sendExceptionEvent(e);
			} catch {}
		}
	},
	exceptions: class {
		constructor(e) {
			this._suppressionRules = [], this._errorPropertiesBuilder = new Er([
				new qr(),
				new ri(),
				new Yr(),
				new Jr(),
				new ti(),
				new ei(),
				new Zr(),
				new ni()
			], function(e, ...t) {
				return (n, r = 0) => {
					let i = [], a = n.split("\n"), o = Math.min(a.length, r + 1e3), s = [];
					for (let n = r; o > n; n++) {
						let r = a[n];
						if (r.length > 1024) continue;
						let o = zr.test(r) ? r.replace(zr, "$1") : r;
						if (!o.match(/\S*Error: /)) {
							for (let n of t) {
								let t = n(o, e);
								if (t) {
									i.push(t);
									let e = Vr(i);
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
							if (Gr(i, s) >= 50) break;
						}
					}
					let c = [...s].sort((e, t) => t.start - e.start), l = c[c.length - 1];
					if (l) {
						let e = Ur(i, l);
						i.splice(l.start - e, e);
						for (let t of c) t.start -= e;
					}
					for (let e of c) Hr(i, e);
					return s.some((e) => e.start === 0 && i.length === e.length) && function(e) {
						let t = e.map((e) => `${e.function}|${e.filename}|${e.lineno}|${e.colno}|${e.module}`), n = 0;
						for (let e = 1; t.length > e; e++) Kr(t, e, n) && (n = e);
						e.push(...e.splice(0, n));
					}(i), function(e) {
						if (!e.length) return [];
						let t = Array.from(e);
						return t.reverse(), t.slice(0, 50).map((e) => {
							return H(H({}, e), {}, {
								filename: e.filename || (n = t, n[n.length - 1] || {}).filename,
								function: e.function || "?"
							});
							var n;
						});
					}(i);
				};
			}("web:javascript", Fr, Rr)), this._instance = e, this._suppressionRules = this._instance.persistence?.get_property("$error_tracking_suppression_rules") ?? [], this._exceptionStepsConfig = ci(this._getExceptionStepsConfig()), this._exceptionStepsBuffer = new li(this._exceptionStepsConfig);
		}
		onConfigChange() {
			this._exceptionStepsConfig = ci(this._getExceptionStepsConfig()), this._exceptionStepsBuffer.setConfig(this._exceptionStepsConfig);
		}
		onRemoteConfig(e) {
			if (!e.ok) return;
			let t = e.config;
			if (!("errorTracking" in t)) return;
			let n = t.errorTracking?.suppressionRules ?? [], r = t.errorTracking?.captureExtensionExceptions;
			this._suppressionRules = n, this._instance.persistence && this._instance.persistence.register({
				[fe]: this._suppressionRules,
				[pe]: r
			});
		}
		get _captureExtensionExceptions() {
			var e;
			let t = !!this._instance.get_property(pe);
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
				if (!R(e) || e.trim().length === 0) return void Nd.warn("Ignoring exception step because message must be a non-empty string");
				let { sanitizedProperties: n, droppedKeys: r } = function(e) {
					if (!e) return {
						sanitizedProperties: {},
						droppedKeys: []
					};
					let t = [];
					return {
						sanitizedProperties: Object.keys(e).reduce((n, r) => oi.has(r) ? (t.push(r), n) : (n[r] = e[r], n), {}),
						droppedKeys: t
					};
				}(this._coerceExceptionStepProperties(t));
				r.length > 0 && Nd.warn("Ignoring reserved exception step fields", { droppedKeys: r }), this._exceptionStepsBuffer.add(H({
					[ii]: e,
					[ai]: (/* @__PURE__ */ new Date()).toISOString()
				}, n));
			} catch (e) {
				Nd.error("Failed to add exception step. Ignoring breadcrumb.", e);
			}
		}
		sendExceptionEvent(e) {
			try {
				let t = e.$exception_list;
				if (this._isExceptionList(t)) {
					if (this._matchesSuppressionRule(t)) return this._addDroppedExceptionStep("Exception dropped: matched a suppression rule"), void Nd.info("Skipping exception capture because a suppression rule matched");
					if (!this._captureExtensionExceptions && this._isExtensionException(t)) return this._addDroppedExceptionStep("Exception dropped: thrown by a browser extension"), void Nd.info("Skipping exception capture because it was thrown by an extension");
					if (!this._captureExtensionExceptions && this._isInjectedBrowserScriptException(t)) return this._addDroppedExceptionStep("Exception dropped: thrown by an injected browser script"), void Nd.info("Skipping exception capture because it was thrown by an injected browser script");
					if (!this._instance.config.error_tracking.__capturePostHogExceptions && this._isPostHogException(t)) return this._addDroppedExceptionStep("Exception dropped: thrown by the PostHog SDK"), void Nd.info("Skipping exception capture because it was thrown by the PostHog SDK");
				}
				let n = this._exceptionStepsConfig.enabled && B(e.$exception_steps) ? this._addBufferedExceptionSteps(e) : e, r = function() {
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
					Md(e) || Nd.error("Failed to capture exception event. Dropping this exception.", e), this._exceptionStepsBuffer.clear();
					return;
				}
			} catch (e) {
				Md(e) || Nd.error("Failed to process exception event. Ignoring this exception.", e);
				return;
			}
		}
		_addBufferedExceptionSteps(e) {
			try {
				let t = this._exceptionStepsBuffer.getAttachable();
				return t.length === 0 ? e : H(H({}, e), {}, { $exception_steps: t });
			} catch (t) {
				return Nd.error("Failed to read buffered exception steps. Capturing exception without steps.", t), e;
			}
		}
		_addDroppedExceptionStep(e) {
			this._exceptionStepsConfig.enabled && this._exceptionStepsBuffer.add({
				[ii]: e,
				[ai]: (/* @__PURE__ */ new Date()).toISOString()
			});
		}
		_coerceExceptionStepProperties(e) {
			return I(e) ? H({}, e) : {};
		}
		_getExceptionStepsConfig() {
			return this._instance.config.error_tracking?.exception_steps ?? {};
		}
		_matchesSuppressionRule(e) {
			if (e.length === 0) return !1;
			try {
				let t = e.reduce((e, { type: t, value: n }) => (R(t) && t.length > 0 && e.$exception_types.push(t), R(n) && n.length > 0 && e.$exception_values.push(n), e), {
					$exception_types: [],
					$exception_values: []
				});
				return this._suppressionRules.some((e) => {
					let n = e.values.map((e) => {
						let n = Bl[e.operator], r = t[e.key];
						if (!n || !r) return !1;
						let i = F(e.value) ? e.value : [e.value];
						return i.length > 0 && n(i, r);
					});
					return e.type === "OR" ? n.some(Boolean) : n.every(Boolean);
				});
			} catch (e) {
				return Nd.warn("Failed to evaluate suppression rules. Capturing the exception.", e), !1;
			}
		}
		_isExtensionException(e) {
			let t = e.flatMap((e) => e.stacktrace?.frames ?? []), n = t.filter(({ filename: e }) => !!e && Id.some((t) => e.startsWith(t)));
			return n.length !== 0 && (!n.every(({ filename: e }) => !!e && e.startsWith(Pd)) || e.some(({ type: e, value: t }) => e === "NoResponse" || R(t) && Fd.some(({ value: e, exact: n }) => n ? t === e : t.includes(e))) && !t.some(({ in_app: e, filename: t }) => e && !t?.startsWith(Pd)));
		}
		_isInjectedBrowserScriptException(e) {
			return e.some(({ value: e }) => R(e) && Ld.some((t) => e.includes(t)));
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
			return !B(e) && F(e);
		}
	},
	productTours: class {
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
				if (this._persistence && this._persistence.register({ [O]: !!t.productTours }), !id(this._instance)) return !this._productTourManager && B(this._persistence?.props.ph_product_tours) || rd.info("product tours disabled; stopping and clearing cached tours"), (n = this._productTourManager) == null || n.stop(), this._productTourManager = null, void this.clearCache();
				this.loadIfEnabled();
			}
		}
		loadIfEnabled() {
			!this._productTourManager && id(this._instance) && this._loadScript(() => this._startProductTours());
		}
		_loadScript(e) {
			var t, n;
			N.__PosthogExtensions__?.generateProductTours ? e() : (t = N.__PosthogExtensions__) == null || (n = t.loadExternalDependency) == null || n.call(t, this._instance, "product-tours", (t) => {
				t ? rd.error("Could not load product tours script", t) : e();
			});
		}
		_startProductTours() {
			var e;
			!this._productTourManager && (e = N.__PosthogExtensions__) != null && e.generateProductTours && (this._productTourManager = N.__PosthogExtensions__.generateProductTours(this._instance, !0));
		}
		getProductTours(e, t = !1) {
			if (F(this._cachedTours) && !t) return void e(this._cachedTours, { isLoaded: !0 });
			let n = this._persistence;
			if (n) {
				let r = n.props[Me];
				if (F(r) && !t) return this._cachedTours = r, void e(r, { isLoaded: !0 });
			}
			this._instance._send_request({
				url: this._instance.requestRouter.endpointFor("api", `/api/product_tours/?token=${this._instance.config.token}`),
				method: "GET",
				timestampMode: "query",
				callback: (t) => {
					if (!id(this._instance)) return void e([], { isLoaded: !0 });
					let r = t.statusCode;
					if (r !== 200 || !t.json) {
						let n = `Product Tours API could not be loaded, status: ${r}`;
						r === 0 ? t.error || rd.warn(n) : rd.error(n), e([], {
							isLoaded: !1,
							error: n
						});
						return;
					}
					let i = F(t.json.product_tours) ? t.json.product_tours : [];
					this._cachedTours = i, n && n.register({ [Me]: i }), e(i, { isLoaded: !0 });
				}
			});
		}
		getActiveProductTours(e) {
			B(this._productTourManager) ? e([], {
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
	},
	siteApps: class {
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
			return (e = N._POSTHOG_REMOTE_CONFIG) == null || (e = e[this._instance.config.token]) == null ? void 0 : e.siteApps;
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
				event: H(H({}, Ci(e, ad)), {}, {
					properties: H(H(H({}, e.properties), a ? { $set: H(H({}, e.properties?.$set ?? {}), a) } : {}), i ? { $set_once: H(H({}, e.properties?.$set_once ?? {}), i) } : {}),
					elements_chain: e.properties?.$elements_chain ?? "",
					distinct_id: e.properties?.distinct_id
				}),
				person: { properties: this._instance.get_property("$stored_person_properties") },
				groups: t
			};
		}
		_prepareElementForSiteApp(e) {
			let t = e.tagName?.toLowerCase();
			return t === "style" && this._instance.config.prepare_external_dependency_stylesheet ? this._instance.config.prepare_external_dependency_stylesheet(e) || (od.error("prepare_external_dependency_stylesheet returned null"), null) : t === "script" && this._instance.config.prepare_external_dependency_script ? this._instance.config.prepare_external_dependency_script(e) || (od.error("prepare_external_dependency_script returned null"), null) : e;
		}
		_patchSiteAppElementInsertionMethods() {
			var e;
			if (!this._instance.config.prepare_external_dependency_stylesheet && !this._instance.config.prepare_external_dependency_script) return () => {};
			let t = M?.defaultView, n = t == null || (e = t.Node) == null ? void 0 : e.prototype;
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
			}, c = (e) => e.map((e) => typeof e == "string" ? e : s(e)).filter((e) => !z(e));
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
				!t.errored && this._bufferedInvocations.length && (od.info(`Processing ${this._bufferedInvocations.length} events for site app with id ${e.id}`), this._bufferedInvocations.forEach((e) => this._runWithPreparedSiteAppElements(() => t.processEvent?.call(t, e))), t.processedBuffer = !0), Object.values(this.apps).every((e) => e.processedBuffer || e.errored) && ((n = this._stopBuffering) == null || n.call(this));
			}, r = !1, i = (i) => {
				t.errored = !i, t.loaded = !0, od.info(`Site app with id ${e.id} ${i ? "loaded" : "errored"}`), r && n();
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
				od.error(sd + e.id, t), i(!1);
			}
			if (r && t.loaded) try {
				n();
			} catch (n) {
				od.error(`Error while processing buffered events PostHog app with config id ${e.id}`, n), t.errored = !0;
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
				od.error(`Error while processing event ${e.event} for site app ${n.id}`, t);
			}
		}
		onRemoteConfig(e) {
			var t;
			if (this.siteAppLoaders?.length) return this.isEnabled ? (this._setupSiteApps(), void this._instance.on("eventCaptured", (e) => this._onCapturedEvent(e))) : void od.error("PostHog site apps are disabled. Enable the \"opt_in_site_apps\" config to proceed.");
			if ((t = this._stopBuffering) == null || t.call(this), !e.ok) return;
			let n = e.config;
			if (n.siteApps?.length) {
				if (this.isEnabled) for (let { id: e, url: t } of n.siteApps) {
					var r, i;
					N[`__$$ph_site_app_${e}`] = this._instance, (r = N.__PosthogExtensions__) == null || (i = r.loadSiteApp) == null || i.call(r, this._instance, t, (t) => {
						if (t) return od.error(sd + e, t);
					});
				}
				else od.error("PostHog site apps are disabled. Enable the \"opt_in_site_apps\" config to proceed.");
			}
		}
	},
	surveys: class extends hd {
		constructor(e) {
			super(new gd(e));
		}
	},
	tracingHeaders: class {
		constructor(e) {
			this._instance = e, this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0, this._hostnamesForPatch = void 0, this._startCapturing = () => {
				let e = this._syncHostnamesForPatch();
				var t, n;
				e ? (L(this._restoreXHRPatch) && (this._restoreXHRPatch = (t = N.__PosthogExtensions__) == null || (t = t.tracingHeadersPatchFns) == null ? void 0 : t._patchXHR(e, () => this._instance.get_distinct_id(), this._instance.sessionManager)), L(this._restoreFetchPatch) && (this._restoreFetchPatch = (n = N.__PosthogExtensions__) == null || (n = n.tracingHeadersPatchFns) == null ? void 0 : n._patchFetch(e, () => this._instance.get_distinct_id(), this._instance.sessionManager))) : this._stopCapturing();
			};
		}
		initialize() {
			this.startIfEnabledOrStop();
		}
		_loadScript(e) {
			var t, n;
			N.__PosthogExtensions__?.tracingHeadersPatchFns ? e() : (t = N.__PosthogExtensions__) == null || (n = t.loadExternalDependency) == null || n.call(t, this._instance, "tracing-headers", (t) => {
				if (t) return Gu.error("failed to load script", t);
				e();
			});
		}
		_getConfiguredHostnames() {
			return this._instance.config.tracing_headers ?? this._instance.config.addTracingHeaders ?? this._instance.config.__add_tracing_headers;
		}
		_syncHostnamesForPatch() {
			let e = this._getConfiguredHostnames();
			return F(e) ? (F(this._hostnamesForPatch) ? this._hostnamesForPatch.splice(0, this._hostnamesForPatch.length, ...e) : this._hostnamesForPatch = [...e], e.length > 0 ? this._hostnamesForPatch : void 0) : (F(this._hostnamesForPatch) && this._hostnamesForPatch.splice(0), this._hostnamesForPatch = e || void 0, this._hostnamesForPatch);
		}
		_stopCapturing() {
			var e, t;
			(e = this._restoreXHRPatch) == null || e.call(this), (t = this._restoreFetchPatch) == null || t.call(this), this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0;
		}
		startIfEnabledOrStop() {
			this._syncHostnamesForPatch() ? this._loadScript(this._startCapturing) : this._stopCapturing();
		}
	},
	toolbar: class {
		constructor(e) {
			this.instance = e;
		}
		_setToolbarState(e) {
			N.ph_toolbar_state = e;
		}
		_getToolbarState() {
			return N.ph_toolbar_state ?? 0;
		}
		initialize() {
			return this.maybeLoadToolbar();
		}
		maybeLoadToolbar(e = void 0, t = void 0, n = void 0) {
			if (Ya(this.instance.config) || !j || !M) return !1;
			e ??= j.location, n ??= j.history;
			try {
				if (!t) {
					try {
						j.localStorage.setItem("test", "test"), j.localStorage.removeItem("test");
					} catch {
						return !1;
					}
					t = j?.localStorage;
				}
				let r = _d || Is(e.hash, "__posthog") || Is(e.hash, "state"), i, a = r ? pr(() => JSON.parse(atob(decodeURIComponent(r)))) || pr(() => JSON.parse(decodeURIComponent(r))) : null;
				return a && a.action === "ph_authorize" ? (i = a, i.source = "url", i && Object.keys(i).length > 0 && (a.desiredHash ? e.hash = a.desiredHash : n ? n.replaceState(n.state, "", e.pathname + e.search) : e.hash = "")) : (i = JSON.parse(t.getItem(vd) || "{}"), i.source = "localstorage", delete i.userIntent), !(!i.token || this.instance.config.token !== i.token || (this.loadToolbar(i), 0));
			} catch {
				return !1;
			}
		}
		_callLoadToolbar(e) {
			let t = N.ph_load_toolbar || N.ph_load_editor;
			!B(t) && Mt(t) ? t(e, this.instance) : yd.warn("No toolbar load function found");
		}
		loadToolbar(e) {
			let t = !!M?.getElementById("__POSTHOG_TOOLBAR__");
			if (!j || t) return !1;
			let n = this.instance.requestRouter.region === "custom" && this.instance.config.advanced_disable_toolbar_metrics, r = H(H({ token: this.instance.config.token }, e), {}, { apiURL: this.instance.requestRouter.endpointFor("ui") }, n ? { instrument: !1 } : {});
			if (j.localStorage.setItem(vd, JSON.stringify(H(H({}, r), {}, { source: void 0 }))), this._getToolbarState() === 2) this._callLoadToolbar(r);
			else if (this._getToolbarState() === 0) {
				var i, a;
				this._setToolbarState(1), (i = N.__PosthogExtensions__) == null || (a = i.loadExternalDependency) == null || a.call(i, this.instance, "toolbar", (e) => {
					if (e) return yd.error("[Toolbar] Failed to load", e), void this._setToolbarState(0);
					this._setToolbarState(2), this._callLoadToolbar(r);
				}), q(j, "turbolinks:load", () => {
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
	},
	experiments: class e {
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
							R(r) && t.variants[r] && this._applyVariantForFlag(t, r);
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
			if (this._is_bot()) e._logInfo(Zf);
			else if (!this._config.disable_web_experiments) {
				if (B(this._flagToExperiments)) return this._flagToExperiments = /* @__PURE__ */ new Map(), this.loadIfEnabled(), void this.previewWebExperiment();
				e._logInfo("applying feature flags", t), t.forEach((e) => {
					if (this._flagToExperiments && this._flagToExperiments?.has(e)) {
						let t = this._instance.getFeatureFlag(e), n = this._flagToExperiments?.get(e);
						t && n != null && n.variants[t] && this._applyVariantForFlag(n, t);
					}
				});
			}
		}
		previewWebExperiment() {
			let t = e.getWindowLocation();
			if (t?.search) {
				let n = Ps(t?.search, "__experiment_id"), r = Ps(t?.search, "__experiment_variant");
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
		_applyVariantForFlag(t, n) {
			let r = t.variants[n];
			e._matchUrlConditions(r, this._instance) ? this._applyTransforms(t.name, n, r.transforms) : e._logInfo(`skipping variant ${n} of experiment ${t.name} because this page does not match its url conditions`);
		}
		static _matchesTestVariant(t, n) {
			return !B(t.conditions) && e._matchUrlConditions(t, n) && e._matchUTMConditions(t);
		}
		static _matchUrlConditions(t, n) {
			if (B(t.conditions) || B(t.conditions?.url)) return !0;
			let r = e.getWindowLocation();
			if (r) {
				let e = wo(n, r.href);
				return !t.conditions?.url || ep[t.conditions?.urlMatchType ?? "icontains"](t.conditions.url, e);
			}
			return !1;
		}
		static getWindowLocation() {
			return j?.location;
		}
		static _matchUTMConditions(e) {
			if (B(e.conditions) || B(e.conditions?.utm)) return !0;
			let t = Vs();
			if (t.utm_source) {
				var n, r, i, a, o, s, c, l;
				let u = !((n = e.conditions) != null && (n = n.utm) != null && n.utm_campaign) || ((r = e.conditions) == null || (r = r.utm) == null ? void 0 : r.utm_campaign) == t.utm_campaign, d = !((i = e.conditions) != null && (i = i.utm) != null && i.utm_source) || ((a = e.conditions) == null || (a = a.utm) == null ? void 0 : a.utm_source) == t.utm_source, f = !((o = e.conditions) != null && (o = o.utm) != null && o.utm_medium) || ((s = e.conditions) == null || (s = s.utm) == null ? void 0 : s.utm_medium) == t.utm_medium, p = !((c = e.conditions) != null && (c = c.utm) != null && c.utm_term) || ((l = e.conditions) == null || (l = l.utm) == null ? void 0 : l.utm_term) == t.utm_term;
				return u && f && p && d;
			}
			return !1;
		}
		static _logInfo(e, ...t) {
			U.info(`[WebExperiments] ${e}`, t);
		}
		static _logWarn(e, ...t) {
			U.warn(`[WebExperiments] ${e}`, t);
		}
		static _sanitizeLinkTargets(t) {
			(t.namespaceURI === "http://www.w3.org/1999/xhtml" && t.localName === "template" ? t.content : t).querySelectorAll("a[target], template").forEach((t) => {
				if (t.localName === "template") return void (t.namespaceURI === "http://www.w3.org/1999/xhtml" && e._sanitizeLinkTargets(t));
				if (t.namespaceURI !== "http://www.w3.org/1999/xhtml" || t.getAttribute("target")?.toLowerCase() !== "_blank") return void t.removeAttribute("target");
				let n = (t.getAttribute("rel") || "").split(/\s+/).filter((e) => e && !/^(opener|noopener)$/i.test(e));
				n.push("noopener"), t.setAttribute("rel", n.join(" "));
			});
		}
		_applyTransforms(t, n, r) {
			this._is_bot() ? e._logInfo(Zf) : n === "control" ? e._logInfo("Control variants leave the page unmodified.") : r.forEach((r) => {
				if (r.selector) {
					e._logInfo(`applying transform of variant ${n} for experiment ${t} `, r);
					let i = document?.querySelectorAll(r.selector);
					if (!i?.length) return void e._logWarn(`no element on this page matches selector ${r.selector} of variant ${n} for experiment ${t}`);
					let a = /* @__PURE__ */ new Map();
					i?.forEach((t) => {
						if (t.localName.toLowerCase() === "script") return;
						let n = t;
						if (r.html) {
							let i = t.namespaceURI === "http://www.w3.org/1998/Math/MathML" && t.localName === "annotation-xml" && t.getAttribute("encoding")?.toLowerCase() || "", o = JSON.stringify([
								t.namespaceURI,
								t.localName,
								i
							]), s = a.get(o);
							if (B(s)) {
								let n = $f ??= Xf(), c = t.ownerDocument.implementation.createHTMLDocument(""), l = c.createElementNS(t.namespaceURI, t.localName);
								i && l.setAttribute("encoding", i);
								let u = c.createRange();
								u.selectNodeContents(l);
								let d = t.namespaceURI === "http://www.w3.org/2000/svg" && /^(foreignObject|desc|title)$/.test(t.localName) || /^(text\/html|application\/xhtml\+xml)$/.test(i) ? "http://www.w3.org/1999/xhtml" : t.namespaceURI, f = u.createContextualFragment(r.html);
								t.namespaceURI === "http://www.w3.org/1998/Math/MathML" && /^(mi|mo|mn|ms|mtext)$/.test(t.localName) ? (l.appendChild(f), n.sanitize(l, H(H({}, Qf), {}, {
									NAMESPACE: d || void 0,
									IN_PLACE: !0
								}))) : (l.namespaceURI === "http://www.w3.org/1999/xhtml" && l.localName === "template" ? l.content : l).appendChild(n.sanitize(f, H(H({}, Qf), {}, {
									NAMESPACE: d || void 0,
									RETURN_DOM_FRAGMENT: !0
								}))), e._sanitizeLinkTargets(l), s = l.innerHTML, a.set(o, s);
							}
							n.innerHTML = s;
						}
						r.css && n.setAttribute("style", r.css);
					});
				}
			});
		}
		_is_bot() {
			return mt && this._instance ? Pl(mt, this._config.custom_blocked_useragents) : void 0;
		}
	},
	conversations: class {
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
			B(t) ? this._pendingPanelAction = null : (Lt(t) ? this._isConversationsEnabled = t : (this._isConversationsEnabled = t.enabled, this._remoteConfig = t), this._isConversationsEnabled || (this._pendingPanelAction = null), this.loadIfEnabled());
		}
		reset() {
			var e;
			(e = this._conversationsManager) == null || e.reset(), this._conversationsManager = null, this._resetGeneration++, this._isConversationsEnabled = void 0, this._remoteConfig = null, this._remoteConfigSuccessful = void 0, this._loadFailed = !1, this._pendingPanelAction = null;
		}
		loadIfEnabled() {
			if (this._conversationsManager || this._isInitializing || this._instance.config.disable_conversations || Ya(this._instance.config) || this._instance.config.cookieless_mode && this._instance.consent.isOptedOut()) return;
			let e = N?.__PosthogExtensions__;
			if (e && !L(this._isConversationsEnabled) && this._isConversationsEnabled) {
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
				} else tp.error("Conversations enabled but missing token in remote config.");
			}
		}
		_completeInitialization(e) {
			if (this._remoteConfig) {
				try {
					this._conversationsManager = e(this._remoteConfig, this._instance), this._loadFailed = !1, tp.info("Conversations loaded successfully");
				} catch (e) {
					this._handleLoadError("Error completing conversations initialization", e);
					return;
				}
				this._theme && this._conversationsManager.setTheme(this._theme), this._applyPendingPanelAction();
			} else tp.error("Cannot complete initialization: remote config is null");
		}
		_applyPendingPanelAction() {
			let e = this._pendingPanelAction;
			this._pendingPanelAction = null, this._conversationsManager && e && (e === "open" ? this._conversationsManager.open() : this._conversationsManager.close());
		}
		_handleLoadError(e, t) {
			tp.error(e, t), this._conversationsManager = null, this._isInitializing = !1, this._loadFailed = !0;
		}
		show() {
			this._conversationsManager ? this._conversationsManager.show() : tp.warn("Conversations not loaded yet.");
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
			this._theme = H(H(H({}, this._theme), e), {}, { dark: H(H({}, this._theme?.dark), e?.dark) }), (t = this._conversationsManager) == null || t.setTheme(e);
		}
		isAvailable() {
			return !0 === this._isConversationsEnabled && !z(this._conversationsManager);
		}
		getUnavailableReason() {
			return this.isAvailable() ? null : this._instance.config.disable_conversations ? "disabled_by_config" : Ya(this._instance.config) ? "disabled_for_toolbar" : this._instance.config.cookieless_mode && this._instance.consent.isOptedOut() ? "consent_opted_out" : !1 === this._remoteConfigSuccessful ? "remote_config_failed" : L(this._isConversationsEnabled) ? this._remoteConfigSuccessful ? "disabled_in_project" : "remote_config_pending" : this._isConversationsEnabled ? B(this._remoteConfig) || !this._remoteConfig.token ? "missing_token" : N?.__PosthogExtensions__ ? this._isInitializing ? "initializing" : this._loadFailed ? "load_failed" : "not_loaded" : "extensions_unavailable" : "disabled_in_project";
		}
		isVisible() {
			var e;
			return (e = this._conversationsManager?.isVisible()) != null && e;
		}
		sendMessage(e, t, n) {
			var r = this;
			return V(function* () {
				return r._conversationsManager ? r._conversationsManager.sendMessage(e, t, n) : (tp.warn(np), null);
			})();
		}
		getMessages(e, t) {
			var n = this;
			return V(function* () {
				return n._conversationsManager ? n._conversationsManager.getMessages(e, t) : (tp.warn(np), null);
			})();
		}
		markAsRead(e) {
			var t = this;
			return V(function* () {
				return t._conversationsManager ? t._conversationsManager.markAsRead(e) : (tp.warn(np), null);
			})();
		}
		getTickets(e) {
			var t = this;
			return V(function* () {
				return t._conversationsManager ? t._conversationsManager.getTickets(e) : (tp.warn(np), null);
			})();
		}
		requestRestoreLink(e) {
			var t = this;
			return V(function* () {
				return t._conversationsManager ? t._conversationsManager.requestRestoreLink(e) : (tp.warn(np), null);
			})();
		}
		restoreFromToken(e) {
			var t = this;
			return V(function* () {
				return t._conversationsManager ? t._conversationsManager.restoreFromToken(e) : (tp.warn(np), null);
			})();
		}
		restoreFromUrlToken() {
			var e = this;
			return V(function* () {
				return e._conversationsManager ? e._conversationsManager.restoreFromUrlToken() : (tp.warn(np), null);
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
	},
	logs: class extends up {
		constructor(e) {
			super({
				get() {
					var t;
					return e == null || (t = e.config) == null ? void 0 : t.logs;
				},
				captureHintKey: ge,
				get remoteConfigWillArrive() {
					var t;
					return !e._shouldDisableFlags?.call(e) || !!((t = N._POSTHOG_REMOTE_CONFIG) != null && (t = t[e.config.token]) != null && t.config);
				}
			}, () => function(e) {
				var t;
				let n = {};
				if (n.distinctId = e.get_distinct_id(), e.sessionManager) {
					let { sessionId: t, windowId: r, sessionStartTimestamp: i, lastActivityTimestamp: a } = e.sessionManager.checkAndGetSessionAndWindowId(!0);
					n.sessionId = t, n.windowId = r, B(i) || (n.sessionStartTimestamp = i), B(a) || (n.lastActivityTimestamp = a);
				}
				if (N != null && (t = N.location) != null && t.href && (n.currentUrl = e.config.disable_capture_url_hashes ? fr(N.location.href) : N.location.href), e.featureFlags) {
					let t = e.featureFlags.getFlags();
					t && t.length > 0 && (n.activeFeatureFlags = t);
				}
				return n;
			}(e)), this._instance = e, this.name = fu, this._listenForReconnect();
		}
		get _isRequestReady() {
			return this._instance.__loaded;
		}
		_getConsoleLoader() {
			let e = W("[logs]"), t = N?.__PosthogExtensions__;
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
	},
	metrics: class {
		constructor(e) {
			this._instance = e, this._logger = W("[metrics]"), this._disposed = !1;
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
				})(e) : void 0, r = _p(e, n), i = vp(e, n);
				return () => {
					t = !1, r(), i();
				};
			})(this._instance) : !e && this._stopNetworkMetrics && (this._stopNetworkMetrics(), this._stopNetworkMetrics = void 0);
		}
		_getCore() {
			var e;
			if (this._disposed) return;
			let t = (e = this._instance) == null || (e = e.config) == null ? void 0 : e.metrics;
			var n;
			return this._core && this._resolvedFrom === t || ((n = this._core) == null || n.reset(), this._resolvedFrom = t, this._core = new La(this._createHost(), function(e) {
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
			var r;
			(r = this._getCore()) == null || r.count(e, t, n);
		}
		gauge(e, t, n) {
			var r;
			(r = this._getCore()) == null || r.gauge(e, t, n);
		}
		histogram(e, t, n) {
			var r;
			(r = this._getCore()) == null || r.histogram(e, t, n);
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
				this._instance._send_request(H(H({
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
	},
	webMCP: class {
		constructor(e) {
			this._instance = e, this._isPatched = !1;
		}
		initialize() {
			this.startIfEnabled();
		}
		startIfEnabled() {
			if (!this._instance.config.capture_webmcp || this._isPatched) return;
			let e = M?.modelContext;
			if (!e || !Mt(e.registerTool)) return;
			let t = yp.get(e);
			if (t) return t.instances.add(this._instance), void (this._isPatched = !0);
			let n = { instances: /* @__PURE__ */ new Set([this._instance]) }, r = e.registerTool, i = this;
			Wu(e, "registerTool", (e) => {
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
			}), e.registerTool !== r && (yp.set(e, n), this._isPatched = !0);
		}
		_wrapTool(e, t) {
			if (!e || !Mt(e.execute)) return e;
			let n = e.execute, r = this, { tool: i, injected: a } = function(e, t) {
				let n = {
					intent: !1,
					model: !1
				}, r = e.inputSchema;
				if (!function(e) {
					return !!L(e) || I(e) && Object.keys(e).every((e) => bp.has(e) || e.startsWith("x-")) && !0 !== e.additionalProperties && !I(e.additionalProperties) && (!e.type || e.type === "object") && (!e.properties || I(e.properties)) && (!e.required || F(e.required));
				}(r)) return {
					tool: Tp(e),
					injected: n
				};
				let i = r?.properties || {}, a = (e) => wp(i, e) || F(r?.required) && r.required.includes(e);
				if (n.intent = t.intent && !a("context"), n.model = t.model && !a("llm_model"), !n.intent && !n.model) return {
					tool: Tp(e),
					injected: n
				};
				let o = H({}, i), s = F(r?.required) ? [...r.required] : [];
				return n.intent && (o.context = {
					type: "string",
					description: "Explain why this tool is called and how it supports the user's goal. Describe the abstract purpose only. Do not include personal or identifying information. Generalize specific entities as roles such as \"a customer\"."
				}, s.includes("context") || s.push("context")), n.model && (o.llm_model = {
					type: "string",
					description: "The model identifier you are running as, for example \"claude-opus-4-8\" or \"gpt-5.2\". Pass \"unknown\" if you are not certain. Recorded for the site developer's analytics."
				}, s.includes("llm_model") || s.push("llm_model")), {
					tool: Tp(e, H(H({}, r), {}, {
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
					let e = Cp(n.config.capture_webmcp);
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
						if (!I(e)) return {};
						try {
							let n = t.intent ? Ep(e.context, 2048, !0) : void 0, r = t.model ? Ep(e.llm_model, 256) : void 0;
							return H(H({}, n && n !== "{}" ? { intent: n } : {}), r && r.toLowerCase() !== "unknown" ? { model: r } : {});
						} catch {
							return {};
						}
					}(o[0], a), l = function(e, t) {
						let n = e[0];
						if (!I(n)) return e;
						try {
							let r = t.intent && wp(n, "context"), i = t.model && wp(n, "llm_model");
							if (!r && !i) return e;
							let a = H({}, n);
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
						let n = Dp(e) ? {
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
					let f = Dp(u) ? {
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
				let e = Cp(s.config.capture_webmcp);
				if (e) {
					r && !o && (o = Mp(r.error, r.errorResult));
					try {
						s.capture("$mcp_tool_call", H(H(H({
							$mcp_source: "posthog_mcp_analytics",
							$mcp_interface: "webmcp",
							$mcp_tool_name: t.name,
							$mcp_resource_name: t.name,
							$mcp_tool_description: t.description,
							$mcp_server_name: ht?.hostname,
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
							$exception_list: Ap(s.exceptions, r, o.message),
							$exception_level: "error",
							$exception_source: "mcp.tool_call",
							$mcp_interface: "webmcp",
							$mcp_tool_name: t.name,
							$mcp_resource_name: t.name,
							$mcp_tool_description: t.description,
							$mcp_server_name: ht?.hostname
						};
						s.exceptionObserver.captureException(e);
					} catch {}
				}
			}
		}
	}
});
var Np = function() {
	r.SDK_DIST_CHANNEL = "npm";
	let e = _u[ju] = new Ru();
	return function() {
		function e() {
			e.done || (e.done = !0, xl = !1, G(_u, function(e) {
				e._dom_loaded();
			}));
		}
		M?.addEventListener ? M.readyState === "complete" ? e() : q(M, "DOMContentLoaded", e, { capture: !1 }) : j && U.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized");
	}(), e;
}();
// src/modules/analytics/posthog.js
function Pp(e, t) {
	Np.capture(e, t);
}
function Fp() {
	try {
		Np.init("phc_rlYc31x7Pvbc1XzLuePdrHh1JIFq4ClkniLjoqs0V1N", {
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
function Ip() {
	typeof window.self == "string" && (e(), window.self = window), Fp();
}
export { Ip as n, Pp as t };

//# sourceMappingURL=posthog-B9Po5VX8.js.map