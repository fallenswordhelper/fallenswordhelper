import { t as e } from "./playerName-WE8p-OHq.js";
import { n as t } from "./devStdOut-BAVmsJfc.js";
//#region node_modules/posthog-js/dist/module.no-external.js
function n(e, t, n, r, i, a, o) {
	try {
		var s = e[a](o), c = s.value;
	} catch (e) {
		n(e);
		return;
	}
	s.done ? t(c) : Promise.resolve(c).then(r, i);
}
function r(e) {
	return function() {
		var t = this, r = arguments;
		return new Promise((function(i, a) {
			var o = e.apply(t, r);
			function s(e) {
				n(o, i, a, s, c, "next", e);
			}
			function c(e) {
				n(o, i, a, s, c, "throw", e);
			}
			s(void 0);
		}));
	};
}
function i() {
	return i = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; arguments.length > t; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, i.apply(null, arguments);
}
function a(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var o = "1.367.0", s = {
	DEBUG: !1,
	LIB_VERSION: o,
	LIB_NAME: "web",
	JS_SDK_VERSION: o
}, c = "$people_distinct_id", l = "$device_id", u = "__alias", d = "__timers", f = "$autocapture_disabled_server_side", p = "$heatmaps_enabled_server_side", m = "$exception_capture_enabled_server_side", h = "$error_tracking_suppression_rules", g = "$error_tracking_capture_extension_exceptions", _ = "$web_vitals_enabled_server_side", v = "$dead_clicks_enabled_server_side", y = "$product_tours_enabled_server_side", ee = "$web_vitals_allowed_metrics", b = "$session_recording_remote_config", te = "$sesid", x = "$session_is_sampled", S = "$enabled_feature_flags", C = "$early_access_features", w = "$feature_flag_details", ne = "$stored_person_properties", T = "$stored_group_properties", re = "$surveys", E = "$flag_call_reported", ie = "$flag_call_reported_session_id", ae = "$feature_flag_errors", D = "$feature_flag_evaluated_at", O = "$user_state", oe = "$client_session_props", se = "$capture_rate_limit", ce = "$initial_campaign_params", le = "$initial_referrer_info", ue = "$initial_person_info", de = "$epp", k = "__POSTHOG_TOOLBAR__", fe = "$posthog_cookieless", pe = [
	c,
	u,
	"__cmpns",
	d,
	"$session_recording_enabled_server_side",
	p,
	te,
	S,
	h,
	O,
	C,
	w,
	T,
	ne,
	re,
	E,
	ie,
	ae,
	D,
	oe,
	se,
	ce,
	le,
	de,
	ue
], me = "PostHog loadExternalDependency extension not found.", he = "on_reject", A = "always", ge = "anonymous", _e = "identified", ve = "identified_only", ye = "visibilitychange", be = "beforeunload", xe = "$pageview", Se = "$pageleave", Ce = "$identify", we = "$groupidentify", j = typeof window < "u" ? window : void 0, M = typeof globalThis < "u" ? globalThis : j;
typeof self > "u" && (M.self = M), typeof File > "u" && (M.File = function() {});
var Te = M?.navigator, N = M?.document, Ee = M?.location, De = M?.fetch, Oe = M != null && M.XMLHttpRequest && "withCredentials" in new M.XMLHttpRequest() ? M.XMLHttpRequest : void 0, ke = M?.AbortController, Ae = M?.CompressionStream, je = Te?.userAgent, P = j ?? {};
function Me() {
	return (Me = r((function* (e, t) {
		t === void 0 && (t = !0);
		try {
			var n = new Blob([e], { type: "text/plain" }).stream().pipeThrough(new CompressionStream("gzip"));
			return yield new Response(n).blob();
		} catch (e) {
			return t && console.error("Failed to gzip compress data", e), null;
		}
	}))).apply(this, arguments);
}
var Ne = [
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
], Pe = /* @__PURE__ */ "amazonbot,amazonproductbot,app.hypefactors.com,applebot,archive.org_bot,awariobot,backlinksextendedbot,baiduspider,bingbot,bingpreview,chrome-lighthouse,dataforseobot,deepscan,duckduckbot,facebookexternal,facebookcatalog,http://yandex.com/bots,hubspot,ia_archiver,leikibot,linkedinbot,meta-externalagent,mj12bot,msnbot,nessus,petalbot,pinterest,prerender,rogerbot,screaming frog,sebot-wa,sitebulb,slackbot,slurp,trendictionbot,turnitin,twitterbot,vercel-screenshot,vercelbot,yahoo! slurp,yandexbot,zoombot,bot.htm,bot.php,(bot;,bot/,crawler,ahrefsbot,ahrefssiteaudit,semrushbot,siteauditbot,splitsignalbot,gptbot,oai-searchbot,chatgpt-user,perplexitybot,better uptime bot,sentryuptimebot,uptimerobot,headlesschrome,cypress,google-hoteladsverifier,adsbot-google,apis-google,duplexweb-google,feedfetcher-google,google favicon,google web preview,google-read-aloud,googlebot,googleother,google-cloudvertexbot,googleweblight,mediapartners-google,storebot-google,google-inspectiontool,bytespider".split(","), Fe = function(e, t) {
	if (t === void 0 && (t = []), !e) return !1;
	var n = e.toLowerCase();
	return Pe.concat(t).some(((e) => {
		var t = e.toLowerCase();
		return n.indexOf(t) !== -1;
	}));
};
function F(e, t) {
	return e.indexOf(t) !== -1;
}
var Ie = function(e) {
	return e.trim();
}, Le = function(e) {
	return e.replace(/^\$/, "");
}, Re = Object.prototype, ze = Re.hasOwnProperty, Be = Re.toString, I = Array.isArray || function(e) {
	return Be.call(e) === "[object Array]";
}, Ve = (e) => typeof e == "function", L = (e) => e === Object(e) && !I(e), He = (e) => {
	if (L(e)) {
		for (var t in e) if (ze.call(e, t)) return !1;
		return !0;
	}
	return !1;
}, R = (e) => e === void 0, z = (e) => Be.call(e) == "[object String]", Ue = (e) => z(e) && e.trim().length === 0, We = (e) => e === null, B = (e) => R(e) || We(e), Ge = (e) => Be.call(e) == "[object Number]" && e == e, Ke = (e) => Ge(e) && e > 0, qe = (e) => Be.call(e) === "[object Boolean]", Je = (e) => e instanceof FormData, Ye = (e) => F(Ne, e);
function Xe(e) {
	return typeof e != "object" || !e;
}
function Ze(e, t) {
	return {}.toString.call(e) === "[object " + t + "]";
}
function Qe(e) {
	return typeof Event < "u" && function(e, t) {
		try {
			return e instanceof t;
		} catch {
			return !1;
		}
	}(e, Event);
}
var $e = [
	!0,
	"true",
	1,
	"1",
	"yes"
], et = (e) => F($e, e), tt = [
	!1,
	"false",
	0,
	"0",
	"no"
];
function nt(e, t, n, r, i) {
	return t > n && (r.warn("min cannot be greater than max."), t = n), Ge(e) ? e > n ? (r.warn(" cannot be  greater than max: " + n + ". Using max value instead."), n) : t > e ? (r.warn(" cannot be less than min: " + t + ". Using min value instead."), t) : e : (r.warn(" must be a number. using max or fallback. max: " + n + ", fallback: " + i), nt(i || n, t, n, r));
}
var rt = class {
	constructor(e) {
		this._buckets = {}, this._onBucketRateLimited = e._onBucketRateLimited, this._bucketSize = nt(e.bucketSize, 0, 100, e._logger), this._refillRate = nt(e.refillRate, 0, this._bucketSize, e._logger), this._refillInterval = nt(e.refillInterval, 0, 864e5, e._logger);
	}
	_applyRefill(e, t) {
		var n = Math.floor((t - e.lastAccess) / this._refillInterval);
		n > 0 && (e.tokens = Math.min(e.tokens + n * this._refillRate, this._bucketSize), e.lastAccess += n * this._refillInterval);
	}
	consumeRateLimit(e) {
		var t, n = Date.now(), r = String(e), i = this._buckets[r];
		return i ? this._applyRefill(i, n) : this._buckets[r] = i = {
			tokens: this._bucketSize,
			lastAccess: n
		}, i.tokens === 0 || (i.tokens--, i.tokens === 0 && ((t = this._onBucketRateLimited) == null || t.call(this, e)), i.tokens === 0);
	}
	stop() {
		this._buckets = {};
	}
}, it, at, ot, V = "Mobile", st = "iOS", ct = "Android", lt = "Tablet", ut = ct + " " + lt, dt = "iPad", ft = "Apple", pt = ft + " Watch", mt = "Safari", ht = "BlackBerry", gt = "Samsung", _t = gt + "Browser", vt = gt + " Internet", yt = "Chrome", bt = yt + " OS", xt = yt + " " + st, St = "Internet Explorer", Ct = St + " " + V, wt = "Opera", Tt = wt + " Mini", Et = "Edge", Dt = "Microsoft " + Et, Ot = "Firefox", kt = Ot + " " + st, At = "Nintendo", jt = "PlayStation", Mt = "Xbox", Nt = ct + " " + V, Pt = V + " " + mt, Ft = "Windows", It = Ft + " Phone", Lt = "Nokia", Rt = "Ouya", zt = "Generic", Bt = zt + " " + V.toLowerCase(), Vt = zt + " " + lt.toLowerCase(), Ht = "Konqueror", H = "(\\d+(\\.\\d+)?)", Ut = RegExp("Version/" + H), Wt = new RegExp(Mt, "i"), Gt = RegExp(jt + " \\w+", "i"), Kt = RegExp(At + " \\w+", "i"), qt = RegExp(ht + "|PlayBook|BB10", "i"), Jt = {
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
}, Yt = function(e, t) {
	return t ||= "", F(e, " OPR/") && F(e, "Mini") ? Tt : F(e, " OPR/") ? wt : qt.test(e) ? ht : F(e, "IE" + V) || F(e, "WPDesktop") ? Ct : F(e, _t) ? vt : F(e, Et) || F(e, "Edg/") ? Dt : F(e, "FBIOS") ? "Facebook " + V : F(e, "UCWEB") || F(e, "UCBrowser") ? "UC Browser" : F(e, "CriOS") ? xt : F(e, "CrMo") || F(e, yt) ? yt : F(e, ct) && F(e, mt) ? Nt : F(e, "FxiOS") ? kt : F(e.toLowerCase(), Ht.toLowerCase()) ? Ht : ((e, t) => t && F(t, ft) || function(e) {
		return F(e, mt) && !F(e, yt) && !F(e, ct);
	}(e))(e, t) ? F(e, V) ? Pt : mt : F(e, Ot) ? Ot : F(e, "MSIE") || F(e, "Trident/") ? St : F(e, "Gecko") ? Ot : "";
}, Xt = {
	[Ct]: [RegExp("rv:" + H)],
	[Dt]: [RegExp(Et + "?\\/" + H)],
	[yt]: [RegExp("(" + yt + "|CrMo)\\/" + H)],
	[xt]: [RegExp("CriOS\\/" + H)],
	"UC Browser": [RegExp("(UCBrowser|UCWEB)\\/" + H)],
	[mt]: [Ut],
	[Pt]: [Ut],
	[wt]: [RegExp("(Opera|OPR)\\/" + H)],
	[Ot]: [RegExp(Ot + "\\/" + H)],
	[kt]: [RegExp("FxiOS\\/" + H)],
	[Ht]: [RegExp("Konqueror[:/]?" + H, "i")],
	[ht]: [RegExp(ht + " " + H), Ut],
	[Nt]: [RegExp("android\\s" + H, "i")],
	[vt]: [RegExp(_t + "\\/" + H)],
	[St]: [RegExp("(rv:|MSIE )" + H)],
	Mozilla: [RegExp("rv:" + H)]
}, Zt = function(e, t) {
	var n = Xt[Yt(e, t)];
	if (R(n)) return null;
	for (var r = 0; n.length > r; r++) {
		var i = e.match(n[r]);
		if (i) return parseFloat(i[i.length - 2]);
	}
	return null;
}, Qt = [
	[RegExp(Mt + "; " + Mt + " (.*?)[);]", "i"), (e) => [Mt, e && e[1] || ""]],
	[new RegExp(At, "i"), [At, ""]],
	[new RegExp(jt, "i"), [jt, ""]],
	[qt, [ht, ""]],
	[new RegExp(Ft, "i"), (e, t) => {
		if (/Phone/.test(t) || /WPDesktop/.test(t)) return [It, ""];
		if (new RegExp(V).test(t) && !/IEMobile\b/.test(t)) return [Ft + " " + V, ""];
		var n = /Windows NT ([0-9.]+)/i.exec(t);
		if (n && n[1]) {
			var r = Jt[n[1]] || "";
			return /arm/i.test(t) && (r = "RT"), [Ft, r];
		}
		return [Ft, ""];
	}],
	[/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, (e) => e && e[3] ? [st, [
		e[3],
		e[4],
		e[5] || "0"
	].join(".")] : [st, ""]],
	[/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, (e) => {
		var t = "";
		return e && e.length >= 3 && (t = R(e[2]) ? e[3] : e[2]), ["watchOS", t];
	}],
	[RegExp("(" + ct + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + ct + ")", "i"), (e) => e && e[2] ? [ct, [
		e[2],
		e[3],
		e[4] || "0"
	].join(".")] : [ct, ""]],
	[/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, (e) => {
		var t = ["Mac OS X", ""];
		return e && e[1] && (t[1] = [
			e[1],
			e[2],
			e[3] || "0"
		].join(".")), t;
	}],
	[/Mac/i, ["Mac OS X", ""]],
	[/CrOS/, [bt, ""]],
	[/Linux|debian/i, ["Linux", ""]]
], $t = function(e) {
	return Kt.test(e) ? At : Gt.test(e) ? jt : Wt.test(e) ? Mt : new RegExp(Rt, "i").test(e) ? Rt : RegExp("(" + It + "|WPDesktop)", "i").test(e) ? It : /iPad/.test(e) ? dt : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e) ? pt : qt.test(e) ? ht : /(kobo)\s(ereader|touch)/i.test(e) ? "Kobo" : new RegExp(Lt, "i").test(e) ? Lt : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e) || /(kf[a-z]+)( bui|\)).+silk\//i.test(e) ? "Kindle Fire" : /(Android|ZTE)/i.test(e) ? new RegExp(V).test(e) && !/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e) || /pixel[\daxl ]{1,6}/i.test(e) && !/pixel c/i.test(e) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e) || /lmy47v/i.test(e) && !/QTAQZ3/i.test(e) ? ct : ut : RegExp("(pda|" + V + ")", "i").test(e) ? Bt : new RegExp(lt, "i").test(e) && !RegExp(lt + " pc", "i").test(e) ? Vt : "";
}, en = (e) => e instanceof Error;
function tn(e) {
	var t = globalThis._posthogChunkIds;
	if (t) {
		var n = Object.keys(t);
		return ot && n.length === at || (at = n.length, ot = n.reduce(((n, r) => {
			it ||= {};
			var i = it[r];
			if (i) n[i[0]] = i[1];
			else for (var a = e(r), o = a.length - 1; o >= 0; o--) {
				var s = a[o]?.filename, c = t[r];
				if (s && c) {
					n[s] = c, it[r] = [s, c];
					break;
				}
			}
			return n;
		}), {})), ot;
	}
}
var nn = class {
	constructor(e, t, n) {
		n === void 0 && (n = []), this.coercers = e, this.stackParser = t, this.modifiers = n;
	}
	buildFromUnknown(e, t) {
		t === void 0 && (t = {});
		var n = t && t.mechanism || {
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
		return r((function* () {
			for (var n of e) n.stacktrace && n.stacktrace.frames && I(n.stacktrace.frames) && (n.stacktrace.frames = yield t.applyModifiers(n.stacktrace.frames));
			return e;
		}))();
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
		var n, r;
		return e.cause != null && (n = this.parseStacktrace(e.cause, t)), e.stack != "" && e.stack != null && (r = this.applyChunkIds(this.stackParser(e.stack, e.synthetic ? t.skipFirstLines : 0), t.chunkIdMap)), i({}, e, {
			cause: n,
			stack: r
		});
	}
	applyChunkIds(e, t) {
		return e.map(((e) => (e.filename && t && (e.chunk_id = t[e.filename]), e)));
	}
	applyCoercers(e, t) {
		for (var n of this.coercers) if (n.match(e)) return n.coerce(e, t);
		return this.coerceFallback(t);
	}
	applyModifiers(e) {
		var t = this;
		return r((function* () {
			var n = e;
			for (var r of t.modifiers) n = yield r(n);
			return n;
		}))();
	}
	convertToExceptionList(e, t) {
		var n, r, a = {
			type: e.type,
			value: e.value,
			mechanism: {
				type: t.type ?? "generic",
				handled: (n = t.handled) == null || n,
				synthetic: (r = e.synthetic) != null && r
			}
		};
		e.stack && (a.stacktrace = {
			type: "raw",
			frames: e.stack
		});
		var o = [a];
		return e.cause != null && o.push(...this.convertToExceptionList(e.cause, i({}, t, { handled: !0 }))), o;
	}
	buildParsingContext(e) {
		return {
			chunkIdMap: tn(this.stackParser),
			skipFirstLines: e.skipFirstLines ?? 1
		};
	}
	buildCoercingContext(e, t, n) {
		n === void 0 && (n = 0);
		var r = (n, r) => {
			if (4 >= r) {
				var i = this.buildCoercingContext(e, t, r);
				return this.applyCoercers(n, i);
			}
		};
		return i({}, t, {
			syntheticException: n == 0 ? t.syntheticException : void 0,
			mechanism: e,
			apply: (e) => r(e, n),
			next: (e) => r(e, n + 1)
		});
	}
}, rn = "?";
function an(e, t, n, r, i) {
	var a = {
		platform: e,
		filename: t,
		function: n === "<anonymous>" ? rn : n,
		in_app: !0
	};
	return R(r) || (a.lineno = r), R(i) || (a.colno = i), a;
}
var on = (e, t) => {
	var n = e.indexOf("safari-extension") !== -1, r = e.indexOf("safari-web-extension") !== -1;
	return n || r ? [e.indexOf("@") === -1 ? rn : e.split("@")[0], n ? "safari-extension:" + t : "safari-web-extension:" + t] : [e, t];
}, sn = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i, cn = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, ln = /\((\S*)(?::(\d+))(?::(\d+))\)/, un = (e, t) => {
	var n = sn.exec(e);
	if (n) {
		var [, r, i, a] = n;
		return an(t, r, rn, +i, +a);
	}
	var o = cn.exec(e);
	if (o) {
		if (o[2] && o[2].indexOf("eval") === 0) {
			var s = ln.exec(o[2]);
			s && (o[2] = s[1], o[3] = s[2], o[4] = s[3]);
		}
		var [c, l] = on(o[1] || rn, o[2]);
		return an(t, l, c, o[3] ? +o[3] : void 0, o[4] ? +o[4] : void 0);
	}
}, dn = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, fn = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, pn = (e, t) => {
	var n = dn.exec(e);
	if (n) {
		if (n[3] && n[3].indexOf(" > eval") > -1) {
			var r = fn.exec(n[3]);
			r && (n[1] = n[1] || "eval", n[3] = r[1], n[4] = r[2], n[5] = "");
		}
		var i = n[3], a = n[1] || rn;
		return [a, i] = on(a, i), an(t, i, a, n[4] ? +n[4] : void 0, n[5] ? +n[5] : void 0);
	}
}, mn = /\(error: (.*)\)/, hn = class {
	match(e) {
		return this.isDOMException(e) || this.isDOMError(e);
	}
	coerce(e, t) {
		var n = z(e.stack);
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
		var t = e.name || (this.isDOMError(e) ? "DOMError" : "DOMException");
		return e.message ? t + ": " + e.message : t;
	}
	isDOMException(e) {
		return Ze(e, "DOMException");
	}
	isDOMError(e) {
		return Ze(e, "DOMError");
	}
}, gn = class {
	match(e) {
		return ((e) => e instanceof Error)(e);
	}
	coerce(e, t) {
		return {
			type: this.getType(e),
			value: this.getMessage(e, t),
			stack: this.getStack(e),
			cause: e.cause ? t.next(e.cause) : void 0,
			synthetic: !1
		};
	}
	getType(e) {
		return e.name || e.constructor.name;
	}
	getMessage(e, t) {
		var n = e.message;
		return String(n.error && typeof n.error.message == "string" ? n.error.message : n);
	}
	getStack(e) {
		return e.stacktrace || e.stack || void 0;
	}
}, _n = class {
	constructor() {}
	match(e) {
		return Ze(e, "ErrorEvent") && e.error != null;
	}
	coerce(e, t) {
		return t.apply(e.error) || {
			type: "ErrorEvent",
			value: e.message,
			stack: t.syntheticException?.stack,
			synthetic: !0
		};
	}
}, vn = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i, yn = class {
	match(e) {
		return typeof e == "string";
	}
	coerce(e, t) {
		var [n, r] = this.getInfos(e);
		return {
			type: n ?? "Error",
			value: r ?? e,
			stack: t.syntheticException?.stack,
			synthetic: !0
		};
	}
	getInfos(e) {
		var t = "Error", n = e, r = e.match(vn);
		return r && (t = r[1], n = r[2]), [t, n];
	}
}, bn = [
	"fatal",
	"error",
	"warning",
	"log",
	"info",
	"debug"
];
function xn(e, t) {
	t === void 0 && (t = 40);
	var n = Object.keys(e);
	if (n.sort(), !n.length) return "[object has no keys]";
	for (var r = n.length; r > 0; r--) {
		var i = n.slice(0, r).join(", ");
		if (t >= i.length) return r === n.length ? i : i.length > t ? i.slice(0, t) + "..." : i;
	}
	return "";
}
var Sn = class {
	match(e) {
		return typeof e == "object" && !!e;
	}
	coerce(e, t) {
		var n = this.getErrorPropertyFromObject(e);
		return n ? t.apply(n) : {
			type: this.getType(e),
			value: this.getValue(e),
			stack: t.syntheticException?.stack,
			level: this.isSeverityLevel(e.level) ? e.level : "error",
			synthetic: !0
		};
	}
	getType(e) {
		return Qe(e) ? e.constructor.name : "Error";
	}
	getValue(e) {
		if ("name" in e && typeof e.name == "string") {
			var t = "'" + e.name + "' captured as exception";
			return "message" in e && typeof e.message == "string" && (t += " with message: '" + e.message + "'"), t;
		}
		if ("message" in e && typeof e.message == "string") return e.message;
		var n = this.getObjectClassName(e);
		return (n && n !== "Object" ? "'" + n + "'" : "Object") + " captured as exception with keys: " + xn(e);
	}
	isSeverityLevel(e) {
		return z(e) && !Ue(e) && bn.indexOf(e) >= 0;
	}
	getErrorPropertyFromObject(e) {
		for (var t in e) if ({}.hasOwnProperty.call(e, t)) {
			var n = e[t];
			if (en(n)) return n;
		}
	}
	getObjectClassName(e) {
		try {
			var t = Object.getPrototypeOf(e);
			return t ? t.constructor.name : void 0;
		} catch {
			return;
		}
	}
}, Cn = class {
	match(e) {
		return Qe(e);
	}
	coerce(e, t) {
		var n = e.constructor.name;
		return {
			type: n,
			value: n + " captured as exception with keys: " + xn(e),
			stack: t.syntheticException?.stack,
			synthetic: !0
		};
	}
}, wn = class {
	match(e) {
		return Xe(e);
	}
	coerce(e, t) {
		return {
			type: "Error",
			value: "Primitive value captured as exception: " + String(e),
			stack: t.syntheticException?.stack,
			synthetic: !0
		};
	}
}, Tn = class {
	match(e) {
		return Ze(e, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(e);
	}
	isCustomEventWrappingRejection(e) {
		if (!Qe(e)) return !1;
		try {
			var t = e.detail;
			return typeof t == "object" && !!t && "reason" in t;
		} catch {
			return !1;
		}
	}
	coerce(e, t) {
		var n = this.getUnhandledRejectionReason(e);
		return Xe(n) ? {
			type: "UnhandledRejection",
			value: "Non-Error promise rejection captured with value: " + String(n),
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
}, En = function(e, t) {
	var { debugEnabled: n } = t === void 0 ? {} : t, r = {
		_log(t) {
			if (j && (s.DEBUG || P.POSTHOG_DEBUG || n) && !R(j.console) && j.console) {
				for (var r = ("__rrweb_original__" in j.console[t]) ? j.console[t].__rrweb_original__ : j.console[t], i = arguments.length, a = Array(i > 1 ? i - 1 : 0), o = 1; i > o; o++) a[o - 1] = arguments[o];
				r(e, ...a);
			}
		},
		info() {
			for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
			r._log("log", ...t);
		},
		warn() {
			for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
			r._log("warn", ...t);
		},
		error() {
			for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
			r._log("error", ...t);
		},
		critical() {
			for (var t = arguments.length, n = Array(t), r = 0; t > r; r++) n[r] = arguments[r];
			console.error(e, ...n);
		},
		uninitializedWarning(e) {
			r.error("You must initialize PostHog before calling " + e);
		},
		createLogger: (t, n) => En(e + " " + t, n)
	};
	return r;
}, U = En("[PostHog.js]"), W = U.createLogger;
function Dn(e, t) {
	I(e) && e.forEach(t);
}
function G(e, t) {
	if (!B(e)) if (I(e)) e.forEach(t);
	else if (Je(e)) e.forEach(((e, n) => t(e, n)));
	else for (var n in e) ze.call(e, n) && t(e[n], n);
}
var K = function(e) {
	for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
	for (var i of n) for (var a in i) i[a] !== void 0 && (e[a] = i[a]);
	return e;
};
function On(e) {
	for (var t = Object.keys(e), n = t.length, r = Array(n); n--;) r[n] = [t[n], e[t[n]]];
	return r;
}
var kn = function(e) {
	try {
		return e();
	} catch {
		return;
	}
}, An = function(e) {
	return function() {
		try {
			for (var t = arguments.length, n = Array(t), r = 0; t > r; r++) n[r] = arguments[r];
			return e.apply(this, n);
		} catch (e) {
			U.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), U.critical(e);
		}
	};
}, jn = function(e) {
	var t = {};
	return G(e, (function(e, n) {
		(z(e) && e.length > 0 || Ge(e)) && (t[n] = e);
	})), t;
}, Mn = [
	"herokuapp.com",
	"vercel.app",
	"netlify.app"
];
function Nn(e) {
	var t = e?.hostname;
	if (!z(t)) return !1;
	var n = t.split(".").slice(-2).join(".");
	for (var r of Mn) if (n === r) return !1;
	return !0;
}
function q(e, t, n, r) {
	var { capture: i = !1, passive: a = !0 } = r ?? {};
	e?.addEventListener(t, n, {
		capture: i,
		passive: a
	});
}
function Pn(e) {
	return e.name === "ph_toolbar_internal";
}
Math.trunc || (Math.trunc = function(e) {
	return 0 > e ? Math.ceil(e) : Math.floor(e);
}), Number.isInteger || (Number.isInteger = function(e) {
	return Ge(e) && isFinite(e) && Math.floor(e) === e;
});
var Fn = class e {
	constructor(e) {
		if (this.bytes = e, e.length !== 16) throw TypeError("not 128-bit length");
	}
	static fromFieldsV7(t, n, r, i) {
		if (!Number.isInteger(t) || !Number.isInteger(n) || !Number.isInteger(r) || !Number.isInteger(i) || 0 > t || 0 > n || 0 > r || 0 > i || t > 0xffffffffffff || n > 4095 || r > 1073741823 || i > 4294967295) throw RangeError("invalid field value");
		var a = new Uint8Array(16);
		return a[0] = t / 2 ** 40, a[1] = t / 2 ** 32, a[2] = t / 2 ** 24, a[3] = t / 2 ** 16, a[4] = t / 2 ** 8, a[5] = t, a[6] = 112 | n >>> 8, a[7] = n, a[8] = 128 | r >>> 24, a[9] = r >>> 16, a[10] = r >>> 8, a[11] = r, a[12] = i >>> 24, a[13] = i >>> 16, a[14] = i >>> 8, a[15] = i, new e(a);
	}
	toString() {
		for (var e = "", t = 0; this.bytes.length > t; t++) e = e + (this.bytes[t] >>> 4).toString(16) + (15 & this.bytes[t]).toString(16), t !== 3 && t !== 5 && t !== 7 && t !== 9 || (e += "-");
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
		for (var t = 0; 16 > t; t++) {
			var n = this.bytes[t] - e.bytes[t];
			if (n !== 0) return Math.sign(n);
		}
		return 0;
	}
}, In = class {
	constructor() {
		this._timestamp = 0, this._counter = 0, this._random = new zn();
	}
	generate() {
		var e = this.generateOrAbort();
		if (R(e)) {
			this._timestamp = 0;
			var t = this.generateOrAbort();
			if (R(t)) throw Error("Could not generate UUID after timestamp reset");
			return t;
		}
		return e;
	}
	generateOrAbort() {
		var e = Date.now();
		if (e > this._timestamp) this._timestamp = e, this._resetCounter();
		else {
			if (this._timestamp >= e + 1e4) return;
			this._counter++, this._counter > 4398046511103 && (this._timestamp++, this._resetCounter());
		}
		return Fn.fromFieldsV7(this._timestamp, Math.trunc(this._counter / 2 ** 30), this._counter & 2 ** 30 - 1, this._random.nextUint32());
	}
	_resetCounter() {
		this._counter = 1024 * this._random.nextUint32() + (1023 & this._random.nextUint32());
	}
}, Ln, Rn = (e) => {
	if (typeof UUIDV7_DENY_WEAK_RNG < "u" && UUIDV7_DENY_WEAK_RNG) throw Error("no cryptographically strong RNG available");
	for (var t = 0; e.length > t; t++) e[t] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
	return e;
};
j && !R(j.crypto) && crypto.getRandomValues && (Rn = (e) => crypto.getRandomValues(e));
var zn = class {
	constructor() {
		this._buffer = new Uint32Array(8), this._cursor = Infinity;
	}
	nextUint32() {
		return this._buffer.length > this._cursor || (Rn(this._buffer), this._cursor = 0), this._buffer[this._cursor++];
	}
}, Bn = () => Vn().toString(), Vn = () => (Ln ||= new In()).generate(), Hn = "", Un = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i, Wn = {
	_is_supported: () => !!N,
	_error(e) {
		U.error("cookieStore error: " + e);
	},
	_get(e) {
		if (N) {
			try {
				for (var t = e + "=", n = N.cookie.split(";").filter(((e) => e.length)), r = 0; n.length > r; r++) {
					for (var i = n[r]; i.charAt(0) == " ";) i = i.substring(1, i.length);
					if (i.indexOf(t) === 0) return decodeURIComponent(i.substring(t.length, i.length));
				}
			} catch {}
			return null;
		}
	},
	_parse(e) {
		var t;
		try {
			t = JSON.parse(Wn._get(e)) || {};
		} catch {}
		return t;
	},
	_set(e, t, n, r, i) {
		if (N) try {
			var a = "", o = "", s = function(e, t) {
				if (t) {
					var n = function(e, t) {
						if (t === void 0 && (t = N), Hn) return Hn;
						if (!t || ["localhost", "127.0.0.1"].includes(e)) return "";
						for (var n = e.split("."), r = Math.min(n.length, 8), i = "dmn_chk_" + Bn(); !Hn && r--;) {
							var a = n.slice(r).join("."), o = i + "=1;domain=." + a + ";path=/";
							t.cookie = o + ";max-age=3", t.cookie.includes(i) && (t.cookie = o + ";max-age=0", Hn = a);
						}
						return Hn;
					}(e);
					if (!n) {
						var r = ((e) => {
							var t = e.match(Un);
							return t ? t[0] : "";
						})(e);
						r !== n && U.info("Warning: cookie subdomain discovery mismatch", r, n), n = r;
					}
					return n ? "; domain=." + n : "";
				}
				return "";
			}(N.location.hostname, r);
			if (n) {
				var c = /* @__PURE__ */ new Date();
				c.setTime(c.getTime() + 864e5 * n), a = "; expires=" + c.toUTCString();
			}
			i && (o = "; secure");
			var l = e + "=" + encodeURIComponent(JSON.stringify(t)) + a + "; SameSite=Lax; path=/" + s + o;
			return l.length > 3686.4 && U.warn("cookieStore warning: large cookie, len=" + l.length), N.cookie = l, l;
		} catch {
			return;
		}
	},
	_remove(e, t) {
		if (N != null && N.cookie) try {
			Wn._set(e, "", -1, t);
		} catch {
			return;
		}
	}
}, Gn = null, J = {
	_is_supported() {
		if (!We(Gn)) return Gn;
		var e = !0;
		if (R(j)) e = !1;
		else try {
			var t = "__mplssupport__";
			J._set(t, "xyz"), J._get(t) !== "\"xyz\"" && (e = !1), J._remove(t);
		} catch {
			e = !1;
		}
		return e || U.error("localStorage unsupported; falling back to cookie store"), Gn = e, e;
	},
	_error(e) {
		U.error("localStorage error: " + e);
	},
	_get(e) {
		try {
			return j?.localStorage.getItem(e);
		} catch (e) {
			J._error(e);
		}
		return null;
	},
	_parse(e) {
		try {
			return JSON.parse(J._get(e)) || {};
		} catch {}
		return null;
	},
	_set(e, t) {
		try {
			j?.localStorage.setItem(e, JSON.stringify(t));
		} catch (e) {
			J._error(e);
		}
	},
	_remove(e) {
		try {
			j?.localStorage.removeItem(e);
		} catch (e) {
			J._error(e);
		}
	}
}, Kn = [
	l,
	"distinct_id",
	te,
	x,
	de,
	ue,
	O
], qn = {}, Jn = {
	_is_supported: () => !0,
	_error(e) {
		U.error("memoryStorage error: " + e);
	},
	_get: (e) => qn[e] || null,
	_parse: (e) => qn[e] || null,
	_set(e, t) {
		qn[e] = t;
	},
	_remove(e) {
		delete qn[e];
	}
}, Yn = null, Y = {
	_is_supported() {
		if (!We(Yn)) return Yn;
		if (Yn = !0, R(j)) Yn = !1;
		else try {
			var e = "__support__";
			Y._set(e, "xyz"), Y._get(e) !== "\"xyz\"" && (Yn = !1), Y._remove(e);
		} catch {
			Yn = !1;
		}
		return Yn;
	},
	_error(e) {
		U.error("sessionStorage error: ", e);
	},
	_get(e) {
		try {
			return j?.sessionStorage.getItem(e);
		} catch (e) {
			Y._error(e);
		}
		return null;
	},
	_parse(e) {
		try {
			return JSON.parse(Y._get(e)) || null;
		} catch {}
		return null;
	},
	_set(e, t) {
		try {
			j?.sessionStorage.setItem(e, JSON.stringify(t));
		} catch (e) {
			Y._error(e);
		}
	},
	_remove(e) {
		try {
			j?.sessionStorage.removeItem(e);
		} catch (e) {
			Y._error(e);
		}
	}
}, Xn = class {
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
		return this._config.cookieless_mode === A || this.consent === 0 || this.consent === -1 && (this._config.opt_out_capturing_by_default || this._config.cookieless_mode === he);
	}
	isOptedIn() {
		return !this.isOptedOut();
	}
	isExplicitlyOptedOut() {
		return this.consent === 0;
	}
	optInOut(e) {
		this._storage._set(this._storageKey, +!!e, this._config.cookie_expiration, this._config.cross_subdomain_cookie, this._config.secure_cookie);
	}
	reset() {
		this._storage._remove(this._storageKey, this._config.cross_subdomain_cookie);
	}
	get _storageKey() {
		var { token: e, opt_out_capturing_cookie_prefix: t, consent_persistence_name: n } = this._instance.config;
		return n || (t ? t + e : "__ph_opt_in_out_" + e);
	}
	get _storedConsent() {
		var e = this._storage._get(this._storageKey);
		return et(e) ? 1 : F(tt, e) ? 0 : -1;
	}
	get _storage() {
		var e = this._config.opt_out_capturing_persistence_type, t = e === "localStorage" ? J : Wn;
		if (!this._persistentStore || this._persistentStore !== t) {
			this._persistentStore = t;
			var n = e === "localStorage" ? Wn : J;
			n._get(this._storageKey) && (this._persistentStore._get(this._storageKey) || this.optInOut(et(n._get(this._storageKey))), n._remove(this._storageKey, this._config.cross_subdomain_cookie));
		}
		return this._persistentStore;
	}
	_getDnt() {
		return !!this._config.respect_dnt && [
			Te?.doNotTrack,
			Te?.msDoNotTrack,
			P.doNotTrack
		].some(((e) => et(e)));
	}
}, Zn = W("[Dead Clicks]"), Qn = () => !0, $n = (e) => {
	var t, n = !((t = e.instance.persistence) == null || !t.get_property(v)), r = e.instance.config.capture_dead_clicks;
	return qe(r) ? r : !!L(r) || n;
}, er = class {
	get lazyLoadedDeadClicksAutocapture() {
		return this._lazyLoadedDeadClicksAutocapture;
	}
	constructor(e, t, n) {
		this.instance = e, this.isEnabled = t, this.onCapture = n, this.startIfEnabledOrStop();
	}
	onRemoteConfig(e) {
		"captureDeadClicks" in e && (this.instance.persistence && this.instance.persistence.register({ [v]: e.captureDeadClicks }), this.startIfEnabledOrStop());
	}
	startIfEnabledOrStop() {
		this.isEnabled(this) ? this._loadScript((() => {
			this._start();
		})) : this.stop();
	}
	_loadScript(e) {
		var t, n;
		(t = P.__PosthogExtensions__) != null && t.initDeadClicksAutocapture && e(), (n = P.__PosthogExtensions__) == null || n.loadExternalDependency == null || n.loadExternalDependency(this.instance, "dead-clicks-autocapture", ((t) => {
			t ? Zn.error("failed to load script", t) : e();
		}));
	}
	_start() {
		var e;
		if (N) {
			if (!this._lazyLoadedDeadClicksAutocapture && (e = P.__PosthogExtensions__) != null && e.initDeadClicksAutocapture) {
				var t = L(this.instance.config.capture_dead_clicks) ? this.instance.config.capture_dead_clicks : {};
				t.__onCapture = this.onCapture, this._lazyLoadedDeadClicksAutocapture = P.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, t), this._lazyLoadedDeadClicksAutocapture.start(N), Zn.info("starting...");
			}
		} else Zn.error("`document` not found. Cannot start.");
	}
	stop() {
		this._lazyLoadedDeadClicksAutocapture && (this._lazyLoadedDeadClicksAutocapture.stop(), this._lazyLoadedDeadClicksAutocapture = void 0, Zn.info("stopping..."));
	}
}, tr = W("[SegmentIntegration]"), nr = "posthog-js";
function rr(e, t) {
	var { organization: n, projectId: r, prefix: a, severityAllowList: o = ["error"], sendExceptionsToPostHog: s = !0 } = t === void 0 ? {} : t;
	return (t) => {
		if (o !== "*" && !o.includes(t.level) || !e.__loaded) return t;
		t.tags ||= {};
		var c = e.requestRouter.endpointFor("ui", "/project/" + e.config.token + "/person/" + e.get_distinct_id());
		t.tags["PostHog Person URL"] = c, e.sessionRecordingStarted() && (t.tags["PostHog Recording URL"] = e.get_session_replay_url({ withTimestamp: !0 }));
		var l, u = t.exception?.values || [], d = u.map(((e) => i({}, e, { stacktrace: e.stacktrace ? i({}, e.stacktrace, {
			type: "raw",
			frames: (e.stacktrace.frames || []).map(((e) => i({}, e, { platform: "web:javascript" })))
		}) : void 0 }))), f = {
			$exception_message: u[0]?.value || t.message,
			$exception_type: u[0]?.type,
			$exception_level: t.level,
			$exception_list: d,
			$sentry_event_id: t.event_id,
			$sentry_exception: t.exception,
			$sentry_exception_message: u[0]?.value || t.message,
			$sentry_exception_type: u[0]?.type,
			$sentry_tags: t.tags
		};
		return n && r && (f.$sentry_url = (a || "https://sentry.io/organizations/") + n + "/issues/?project=" + r + "&query=" + t.event_id), s && ((l = e.exceptions) == null || l.sendExceptionEvent(f)), t;
	};
}
var ir = class {
	constructor(e, t, n, r, i, a) {
		this.name = nr, this.setupOnce = function(o) {
			o(rr(e, {
				organization: t,
				projectId: n,
				prefix: r,
				severityAllowList: i,
				sendExceptionsToPostHog: a == null || a
			}));
		};
	}
}, ar = class {
	constructor(e) {
		this._onSessionIdChange = (e, t, n) => {
			n && (n.noSessionId || n.activityTimeout || n.sessionPastMaximumLength) && (U.info("[PageViewManager] Session rotated, clearing pageview state", {
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
		var n = this._previousPageViewProperties(e, t);
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
		var n = this._currentPageview;
		if (!n) return { $pageview_id: t };
		var r = {
			$pageview_id: t,
			$prev_pageview_id: n.pageViewId
		}, i = this._instance.scrollManager.getContext();
		if (i && !this._instance.config.disable_scroll_properties) {
			var { maxScrollHeight: a, lastScrollY: o, maxScrollY: s, maxContentHeight: c, lastContentY: l, maxContentY: u } = i;
			if (!(R(a) || R(o) || R(s) || R(c) || R(l) || R(u))) {
				a = Math.ceil(a), o = Math.ceil(o), s = Math.ceil(s), c = Math.ceil(c), l = Math.ceil(l), u = Math.ceil(u);
				var d = a > 1 ? nt(o / a, 0, 1, U) : 1, f = a > 1 ? nt(s / a, 0, 1, U) : 1, p = c > 1 ? nt(l / c, 0, 1, U) : 1, m = c > 1 ? nt(u / c, 0, 1, U) : 1;
				r = K(r, {
					$prev_pageview_last_scroll: o,
					$prev_pageview_last_scroll_percentage: d,
					$prev_pageview_max_scroll: s,
					$prev_pageview_max_scroll_percentage: f,
					$prev_pageview_last_content: l,
					$prev_pageview_last_content_percentage: p,
					$prev_pageview_max_content: u,
					$prev_pageview_max_content_percentage: m
				});
			}
		}
		return n.pathname && (r.$prev_pageview_pathname = n.pathname), n.timestamp && (r.$prev_pageview_duration = (e.getTime() - n.timestamp.getTime()) / 1e3), r;
	}
}, or = (e) => {
	var t = N?.createElement("a");
	return R(t) ? null : (t.href = e, t);
}, sr = function(e, t) {
	for (var n, r = ((e.split("#")[0] || "").split(/\?(.*)/)[1] || "").replace(/^\?+/g, "").split("&"), i = 0; r.length > i; i++) {
		var a = r[i].split("=");
		if (a[0] === t) {
			n = a;
			break;
		}
	}
	if (!I(n) || 2 > n.length) return "";
	var o = n[1];
	try {
		o = decodeURIComponent(o);
	} catch {
		U.error("Skipping decoding for malformed query param: " + o);
	}
	return o.replace(/\+/g, " ");
}, cr = function(e, t, n) {
	if (!e || !t || !t.length) return e;
	for (var r = e.split("#"), i = r[1], a = (r[0] || "").split("?"), o = a[1], s = a[0], c = (o || "").split("&"), l = [], u = 0; c.length > u; u++) {
		var d = c[u].split("=");
		I(d) && (t.includes(d[0]) ? l.push(d[0] + "=" + n) : l.push(c[u]));
	}
	var f = s;
	return o != null && (f += "?" + l.join("&")), i != null && (f += "#" + i), f;
}, lr = function(e, t) {
	var n = e.match(RegExp(t + "=([^&]*)"));
	return n ? n[1] : null;
}, ur = "https?://(.*)", dr = [
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
	"irclid",
	"_kx"
], fr = [
	"utm_source",
	"utm_medium",
	"utm_campaign",
	"utm_content",
	"utm_term",
	"gad_source",
	"mc_cid",
	...dr
], pr = "<masked>", mr = ["li_fat_id"];
function hr(e, t, n) {
	if (!N) return {};
	var r, i = t ? [...dr, ...n || []] : [], a = gr(cr(N.URL, i, pr), e);
	return K((r = {}, G(mr, (function(e) {
		var t = Wn._get(e);
		r[e] = t || null;
	})), r), a);
}
function gr(e, t) {
	var n = fr.concat(t || []), r = {};
	return G(n, (function(t) {
		r[t] = sr(e, t) || null;
	})), r;
}
function _r(e) {
	var t = function(e) {
		return e ? e.search(ur + "google.([^/?]*)") === 0 ? "google" : e.search(ur + "bing.com") === 0 ? "bing" : e.search(ur + "yahoo.com") === 0 ? "yahoo" : e.search(ur + "duckduckgo.com") === 0 ? "duckduckgo" : null : null;
	}(e), n = t == "yahoo" ? "p" : "q", r = {};
	if (!We(t)) {
		r.$search_engine = t;
		var i = N ? sr(N.referrer, n) : "";
		i.length && (r.ph_keyword = i);
	}
	return r;
}
function vr() {
	return navigator.language || navigator.userLanguage;
}
var yr = "$direct";
function br() {
	return N?.referrer || yr;
}
function xr(e, t) {
	var n = e ? [...dr, ...t || []] : [], r = Ee?.href.substring(0, 1e3);
	return {
		r: br().substring(0, 1e3),
		u: r ? cr(r, n, pr) : void 0
	};
}
function Sr(e) {
	var { r: t, u: n } = e, r = {
		$referrer: t,
		$referring_domain: t == null ? void 0 : t == yr ? yr : or(t)?.host
	};
	if (n) {
		r.$current_url = n;
		var i = or(n);
		r.$host = i?.host, r.$pathname = i?.pathname, K(r, gr(n));
	}
	return t && K(r, _r(t)), r;
}
function Cr() {
	try {
		return Intl.DateTimeFormat().resolvedOptions().timeZone;
	} catch {
		return;
	}
}
function wr() {
	try {
		return (/* @__PURE__ */ new Date()).getTimezoneOffset();
	} catch {
		return;
	}
}
var Tr = [
	"cookie",
	"localstorage",
	"localstorage+cookie",
	"sessionstorage",
	"memory"
], Er = class {
	constructor(e, t) {
		this._config = e, this.props = {}, this._campaign_params_saved = !1, this._name = ((e) => {
			var t = "";
			return e.token && (t = e.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), e.persistence_name ? "ph_" + e.persistence_name : "ph_" + t + "_posthog";
		})(e), this._storage = this._buildStorage(e), this.load(), e.debug && U.info("Persistence loaded", e.persistence, i({}, this.props)), this.update_config(e, e, t), this.save();
	}
	isDisabled() {
		return !!this._disabled;
	}
	_buildStorage(e) {
		Tr.indexOf(e.persistence.toLowerCase()) === -1 && (U.critical("Unknown persistence type " + e.persistence + "; falling back to localStorage+cookie"), e.persistence = "localStorage+cookie");
		var t = function(e) {
			e === void 0 && (e = []);
			var t = [...Kn, ...e];
			return i({}, J, {
				_parse(e) {
					try {
						var t = {};
						try {
							t = Wn._parse(e) || {};
						} catch {}
						var n = K(t, JSON.parse(J._get(e) || "{}"));
						return J._set(e, n), n;
					} catch {}
					return null;
				},
				_set(e, n, r, i, a, o) {
					try {
						J._set(e, n, void 0, void 0, o);
						var s = {};
						t.forEach(((e) => {
							n[e] && (s[e] = n[e]);
						})), Object.keys(s).length && Wn._set(e, s, r, i, a, o);
					} catch (e) {
						J._error(e);
					}
				},
				_remove(e, t) {
					try {
						j?.localStorage.removeItem(e), Wn._remove(e, t);
					} catch (e) {
						J._error(e);
					}
				}
			});
		}(e.cookie_persisted_properties || []), n = e.persistence.toLowerCase();
		return n === "localstorage" && J._is_supported() ? J : n === "localstorage+cookie" && t._is_supported() ? t : n === "sessionstorage" && Y._is_supported() ? Y : n === "memory" ? Jn : n === "cookie" ? Wn : t._is_supported() ? t : Wn;
	}
	_isFeatureFlagCacheStale(e) {
		var t = e ?? this._config.feature_flag_cache_ttl_ms;
		if (!t || 0 >= t) return !1;
		var n = this.props[D];
		return !n || typeof n != "number" || Date.now() - n > t;
	}
	properties() {
		var e = {};
		return G(this.props, ((t, n) => {
			if (n === S && L(t)) {
				if (!this._isFeatureFlagCacheStale()) for (var r = Object.keys(t), i = 0; r.length > i; i++) e["$feature/" + r[i]] = t[r[i]];
			} else pe.indexOf(n) === -1 && (e[n] = t);
		})), e;
	}
	load() {
		if (!this._disabled) {
			var e = this._storage._parse(this._name);
			e && (this.props = K({}, e));
		}
	}
	save() {
		this._disabled || this._storage._set(this._name, this.props, this._expire_days, this._cross_subdomain, this._secure, this._config.debug);
	}
	remove() {
		this._storage._remove(this._name, !1), this._storage._remove(this._name, !0);
	}
	clear() {
		this.remove(), this.props = {};
	}
	register_once(e, t, n) {
		if (L(e)) {
			R(t) && (t = "None"), this._expire_days = R(n) ? this._default_expiry : n;
			var r = !1;
			if (G(e, ((e, n) => {
				this.props.hasOwnProperty(n) && this.props[n] !== t || (this.props[n] = e, r = !0);
			})), r) return this.save(), !0;
		}
		return !1;
	}
	register(e, t) {
		if (L(e)) {
			this._expire_days = R(t) ? this._default_expiry : t;
			var n = !1;
			if (G(e, ((t, r) => {
				e.hasOwnProperty(r) && this.props[r] !== t && (this.props[r] = t, n = !0);
			})), n) return this.save(), !0;
		}
		return !1;
	}
	unregister(e) {
		e in this.props && (delete this.props[e], this.save());
	}
	update_campaign_params() {
		if (!this._campaign_params_saved) {
			var e = hr(this._config.custom_campaign_params, this._config.mask_personal_data_properties, this._config.custom_personal_data_properties);
			He(jn(e)) || this.register(e), this._campaign_params_saved = !0;
		}
	}
	update_search_keyword() {
		var e;
		this.register((e = N?.referrer) ? _r(e) : {});
	}
	update_referrer_info() {
		this.register_once({
			$referrer: br(),
			$referring_domain: N != null && N.referrer && or(N.referrer)?.host || yr
		}, void 0);
	}
	set_initial_person_info() {
		this.props[ce] || this.props[le] || this.register_once({ [ue]: xr(this._config.mask_personal_data_properties, this._config.custom_personal_data_properties) }, void 0);
	}
	get_initial_props() {
		var e = {};
		G([le, ce], ((t) => {
			var n = this.props[t];
			n && G(n, (function(t, n) {
				e["$initial_" + Le(n)] = t;
			}));
		}));
		var t, n, r = this.props[ue];
		return r && K(e, (t = Sr(r), n = {}, G(t, (function(e, t) {
			n["$initial_" + Le(t)] = e;
		})), n)), e;
	}
	safe_merge(e) {
		return G(this.props, (function(t, n) {
			n in e || (e[n] = t);
		})), e;
	}
	update_config(e, t, n) {
		if (this._default_expiry = this._expire_days = e.cookie_expiration, this.set_disabled(e.disable_persistence || !!n), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie), e.persistence !== t.persistence || !((e, t) => {
			if (e.length !== t.length) return !1;
			var n = [...e].sort(), r = [...t].sort();
			return n.every(((e, t) => e === r[t]));
		})(e.cookie_persisted_properties || [], t.cookie_persisted_properties || [])) {
			var r = this._buildStorage(e), i = this.props;
			this.clear(), this._storage = r, this.props = i, this.save();
		}
	}
	set_disabled(e) {
		this._disabled = e, this._disabled ? this.remove() : this.save();
	}
	set_cross_subdomain(e) {
		e !== this._cross_subdomain && (this._cross_subdomain = e, this.remove(), this.save());
	}
	set_secure(e) {
		e !== this._secure && (this._secure = e, this.remove(), this.save());
	}
	set_event_timer(e, t) {
		var n = this.props[d] || {};
		n[e] = t, this.props[d] = n, this.save();
	}
	remove_event_timer(e) {
		var t = (this.props[d] || {})[e];
		return R(t) || (delete this.props[d][e], this.save()), t;
	}
	get_property(e) {
		return this.props[e];
	}
	set_property(e, t) {
		this.props[e] = t, this.save();
	}
}, Dr = {
	Activation: "events",
	Cancellation: "cancelEvents"
}, Or = {
	Popover: "popover",
	API: "api",
	Widget: "widget",
	ExternalSurvey: "external_survey"
}, kr = {
	SHOWN: "survey shown",
	DISMISSED: "survey dismissed",
	SENT: "survey sent",
	ABANDONED: "survey abandoned"
}, Ar = {
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
	SURVEY_LAST_SEEN_DATE: "$survey_last_seen_date"
}, jr = {
	Popover: "popover",
	Inline: "inline"
}, Mr = {
	SHOWN: "product tour shown",
	DISMISSED: "product tour dismissed",
	COMPLETED: "product tour completed",
	STEP_SHOWN: "product tour step shown",
	STEP_COMPLETED: "product tour step completed",
	BUTTON_CLICKED: "product tour button clicked",
	STEP_SELECTOR_FAILED: "product tour step selector failed",
	BANNER_CONTAINER_SELECTOR_FAILED: "product tour banner container selector failed",
	BANNER_ACTION_CLICKED: "product tour banner action clicked"
}, Nr = {
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
}, Pr = W("[RateLimiter]"), Fr = class {
	constructor(e) {
		this.serverLimits = {}, this.lastEventRateLimited = !1, this.checkForLimiting = (e) => {
			var t = e.text;
			if (t && t.length) try {
				(JSON.parse(t).quota_limited || []).forEach(((e) => {
					Pr.info((e || "events") + " is quota limited."), this.serverLimits[e] = (/* @__PURE__ */ new Date()).getTime() + 6e4;
				}));
			} catch (e) {
				Pr.warn("could not rate limit - continuing. Error: \"" + e?.message + "\"", { text: t });
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
	clientRateLimitContext(e) {
		var t;
		e === void 0 && (e = !1);
		var { captureEventsBurstLimit: n, captureEventsPerSecond: r } = this, i = (/* @__PURE__ */ new Date()).getTime(), a = this.instance.persistence?.get_property(se) ?? {
			tokens: n,
			last: i
		};
		a.tokens += (i - a.last) / 1e3 * r, a.last = i, a.tokens > n && (a.tokens = n);
		var o = 1 > a.tokens;
		return o || e || (a.tokens = Math.max(0, a.tokens - 1)), !o || this.lastEventRateLimited || e || this.instance.capture("$$client_ingestion_warning", { $$client_ingestion_warning_message: "posthog-js client rate limited. Config is set to " + r + " events per second and " + n + " events burst limit." }, { skip_client_rate_limiting: !0 }), this.lastEventRateLimited = o, (t = this.instance.persistence) == null || t.set_property(se, a), {
			isRateLimited: o,
			remainingTokens: a.tokens
		};
	}
	isServerRateLimited(e) {
		var t = this.serverLimits[e || "events"] || !1;
		return !1 !== t && (/* @__PURE__ */ new Date()).getTime() < t;
	}
}, Ir = W("[RemoteConfig]"), Lr = class {
	constructor(e) {
		this._instance = e;
	}
	get remoteConfig() {
		var e;
		return (e = P._POSTHOG_REMOTE_CONFIG) == null || (e = e[this._instance.config.token]) == null ? void 0 : e.config;
	}
	_loadRemoteConfigJs(e) {
		var t, n;
		(t = P.__PosthogExtensions__) != null && t.loadExternalDependency ? (n = P.__PosthogExtensions__) == null || n.loadExternalDependency == null || n.loadExternalDependency(this._instance, "remote-config", (() => e(this.remoteConfig))) : e();
	}
	_loadRemoteConfigJSON(e) {
		this._instance._send_request({
			method: "GET",
			url: this._instance.requestRouter.endpointFor("assets", "/array/" + this._instance.config.token + "/config"),
			callback(t) {
				e(t.json);
			}
		});
	}
	load() {
		try {
			if (this.remoteConfig) return Ir.info("Using preloaded remote config", this.remoteConfig), this._onRemoteConfig(this.remoteConfig), void this._startRefreshInterval();
			if (this._instance._shouldDisableFlags()) return void Ir.warn("Remote config is disabled. Falling back to local config.");
			this._loadRemoteConfigJs(((e) => {
				if (!e) return Ir.info("No config found after loading remote JS config. Falling back to JSON."), void this._loadRemoteConfigJSON(((e) => {
					this._onRemoteConfig(e), this._startRefreshInterval();
				}));
				this._onRemoteConfig(e), this._startRefreshInterval();
			}));
		} catch (e) {
			Ir.error("Error loading remote config", e);
		}
	}
	stop() {
		this._refreshInterval &&= (clearInterval(this._refreshInterval), void 0);
	}
	refresh() {
		this._instance._shouldDisableFlags() || N?.visibilityState === "hidden" || this._instance.reloadFeatureFlags();
	}
	_startRefreshInterval() {
		if (!this._refreshInterval) {
			var e = this._instance.config.remote_config_refresh_interval_ms ?? 3e5;
			e !== 0 && (this._refreshInterval = setInterval((() => {
				this.refresh();
			}), e));
		}
	}
	_onRemoteConfig(e) {
		var t;
		e || Ir.error("Failed to fetch remote config from PostHog."), this._instance._onRemoteConfig(e ?? {}), !1 !== e?.hasFeatureFlags && (this._instance.config.advanced_disable_feature_flags_on_first_load || (t = this._instance.featureFlags) == null || t.ensureFlagsLoaded());
	}
}, Rr = {
	GZipJS: "gzip-js",
	Base64: "base64"
}, zr = Uint8Array, X = Uint16Array, Br = Uint32Array, Vr = new zr([
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
]), Hr = new zr([
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
]), Ur = new zr([
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
]), Wr = function(e, t) {
	for (var n = new X(31), r = 0; 31 > r; ++r) n[r] = t += 1 << e[r - 1];
	var i = new Br(n[30]);
	for (r = 1; 30 > r; ++r) for (var a = n[r]; n[r + 1] > a; ++a) i[a] = a - n[r] << 5 | r;
	return [n, i];
}, Gr = Wr(Vr, 2), Kr = Gr[1];
Gr[0][28] = 258, Kr[258] = 28;
for (var qr = Wr(Hr, 0)[1], Jr = new X(32768), Z = 0; 32768 > Z; ++Z) {
	var Yr = (43690 & Z) >>> 1 | (21845 & Z) << 1;
	Jr[Z] = ((65280 & (Yr = (61680 & (Yr = (52428 & Yr) >>> 2 | (13107 & Yr) << 2)) >>> 4 | (3855 & Yr) << 4)) >>> 8 | (255 & Yr) << 8) >>> 1;
}
var Xr = function(e, t, n) {
	for (var r = e.length, i = 0, a = new X(t); r > i; ++i) ++a[e[i] - 1];
	var o, s = new X(t);
	for (i = 0; t > i; ++i) s[i] = s[i - 1] + a[i - 1] << 1;
	if (n) {
		o = new X(1 << t);
		var c = 15 - t;
		for (i = 0; r > i; ++i) if (e[i]) for (var l = i << 4 | e[i], u = t - e[i], d = s[e[i] - 1]++ << u, f = d | (1 << u) - 1; f >= d; ++d) o[Jr[d] >>> c] = l;
	} else for (o = new X(r), i = 0; r > i; ++i) o[i] = Jr[s[e[i] - 1]++] >>> 15 - e[i];
	return o;
}, Zr = new zr(288);
for (Z = 0; 144 > Z; ++Z) Zr[Z] = 8;
for (Z = 144; 256 > Z; ++Z) Zr[Z] = 9;
for (Z = 256; 280 > Z; ++Z) Zr[Z] = 7;
for (Z = 280; 288 > Z; ++Z) Zr[Z] = 8;
var Qr = new zr(32);
for (Z = 0; 32 > Z; ++Z) Qr[Z] = 5;
var $r = Xr(Zr, 9, 0), ei = Xr(Qr, 5, 0), ti = function(e) {
	return (e / 8 >> 0) + (7 & e && 1);
}, ni = function(e, t, n) {
	(n == null || n > e.length) && (n = e.length);
	var r = new (e instanceof X ? X : e instanceof Br ? Br : zr)(n - t);
	return r.set(e.subarray(t, n)), r;
}, ri = function(e, t, n) {
	var r = t / 8 >> 0;
	e[r] |= n <<= 7 & t, e[r + 1] |= n >>> 8;
}, ii = function(e, t, n) {
	var r = t / 8 >> 0;
	e[r] |= n <<= 7 & t, e[r + 1] |= n >>> 8, e[r + 2] |= n >>> 16;
}, ai = function(e, t) {
	for (var n = [], r = 0; e.length > r; ++r) e[r] && n.push({
		s: r,
		f: e[r]
	});
	var i = n.length, a = n.slice();
	if (!i) return [new zr(0), 0];
	if (i == 1) {
		var o = new zr(n[0].s + 1);
		return o[n[0].s] = 1, [o, 1];
	}
	n.sort((function(e, t) {
		return e.f - t.f;
	})), n.push({
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
	var p = new X(f + 1), m = oi(n[u - 1], p, 0);
	if (m > t) {
		r = 0;
		var h = 0, g = m - t, _ = 1 << g;
		for (a.sort((function(e, t) {
			return p[t.s] - p[e.s] || e.f - t.f;
		})); i > r; ++r) {
			var v = a[r].s;
			if (t >= p[v]) break;
			h += _ - (1 << m - p[v]), p[v] = t;
		}
		for (h >>>= g; h > 0;) {
			var y = a[r].s;
			t > p[y] ? h -= 1 << t - p[y]++ - 1 : ++r;
		}
		for (; r >= 0 && h; --r) {
			var ee = a[r].s;
			p[ee] == t && (--p[ee], ++h);
		}
		m = t;
	}
	return [new zr(p), m];
}, oi = function(e, t, n) {
	return e.s == -1 ? Math.max(oi(e.l, t, n + 1), oi(e.r, t, n + 1)) : t[e.s] = n;
}, si = function(e) {
	for (var t = e.length; t && !e[--t];);
	for (var n = new X(++t), r = 0, i = e[0], a = 1, o = function(e) {
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
}, ci = function(e, t) {
	for (var n = 0, r = 0; t.length > r; ++r) n += e[r] * t[r];
	return n;
}, li = function(e, t, n) {
	var r = n.length, i = ti(t + 2);
	e[i] = 255 & r, e[i + 1] = r >>> 8, e[i + 2] = 255 ^ e[i], e[i + 3] = 255 ^ e[i + 1];
	for (var a = 0; r > a; ++a) e[i + a + 4] = n[a];
	return 8 * (i + 4 + r);
}, ui = function(e, t, n, r, i, a, o, s, c, l, u) {
	ri(t, u++, n), ++i[256];
	for (var d = ai(i, 15), f = d[0], p = d[1], m = ai(a, 15), h = m[0], g = m[1], _ = si(f), v = _[0], y = _[1], ee = si(h), b = ee[0], te = ee[1], x = new X(19), S = 0; v.length > S; ++S) x[31 & v[S]]++;
	for (S = 0; b.length > S; ++S) x[31 & b[S]]++;
	for (var C = ai(x, 7), w = C[0], ne = C[1], T = 19; T > 4 && !w[Ur[T - 1]]; --T);
	var re, E, ie, ae, D = l + 5 << 3, O = ci(i, Zr) + ci(a, Qr) + o, oe = ci(i, f) + ci(a, h) + o + 14 + 3 * T + ci(x, w) + (2 * x[16] + 3 * x[17] + 7 * x[18]);
	if (O >= D && oe >= D) return li(t, u, e.subarray(c, c + l));
	if (ri(t, u, 1 + (O > oe)), u += 2, O > oe) {
		re = Xr(f, p, 0), E = f, ie = Xr(h, g, 0), ae = h;
		var se = Xr(w, ne, 0);
		for (ri(t, u, y - 257), ri(t, u + 5, te - 1), ri(t, u + 10, T - 4), u += 14, S = 0; T > S; ++S) ri(t, u + 3 * S, w[Ur[S]]);
		u += 3 * T;
		for (var ce = [v, b], le = 0; 2 > le; ++le) {
			var ue = ce[le];
			for (S = 0; ue.length > S; ++S) ri(t, u, se[de = 31 & ue[S]]), u += w[de], de > 15 && (ri(t, u, ue[S] >>> 5 & 127), u += ue[S] >>> 12);
		}
	} else re = $r, E = Zr, ie = ei, ae = Qr;
	for (S = 0; s > S; ++S) if (r[S] > 255) {
		var de;
		ii(t, u, re[257 + (de = r[S] >>> 18 & 31)]), u += E[de + 257], de > 7 && (ri(t, u, r[S] >>> 23 & 31), u += Vr[de]);
		var k = 31 & r[S];
		ii(t, u, ie[k]), u += ae[k], k > 3 && (ii(t, u, r[S] >>> 5 & 8191), u += Hr[k]);
	} else ii(t, u, re[r[S]]), u += E[r[S]];
	return ii(t, u, re[256]), u + E[256];
}, di = new Br([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]), fi = function() {
	for (var e = new Br(256), t = 0; 256 > t; ++t) {
		for (var n = t, r = 9; --r;) n = (1 & n && 3988292384) ^ n >>> 1;
		e[t] = n;
	}
	return e;
}(), pi = function(e, t, n) {
	for (; n; ++t) e[t] = n, n >>>= 8;
};
function mi(e, t) {
	t === void 0 && (t = {});
	var n = function() {
		var e = 4294967295;
		return {
			p(t) {
				for (var n = e, r = 0; t.length > r; ++r) n = fi[255 & n ^ t[r]] ^ n >>> 8;
				e = n;
			},
			d() {
				return 4294967295 ^ e;
			}
		};
	}(), r = e.length;
	n.p(e);
	var i, a, o, s, c, l = (s = 10 + ((i = t).filename && i.filename.length + 1 || 0), c = 8, function(e, t, n, r, i, a) {
		var o = e.length, s = new zr(r + o + 5 * (1 + Math.floor(o / 7e3)) + i), c = s.subarray(r, s.length - i), l = 0;
		if (!t || 8 > o) for (var u = 0; o >= u; u += 65535) {
			var d = u + 65535;
			o > d ? l = li(c, l, e.subarray(u, d)) : (c[u] = !0, l = li(c, l, e.subarray(u, o)));
		}
		else {
			for (var f = di[t - 1], p = f >>> 13, m = 8191 & f, h = (1 << n) - 1, g = new X(32768), _ = new X(h + 1), v = Math.ceil(n / 3), y = 2 * v, ee = function(t) {
				return (e[t] ^ e[t + 1] << v ^ e[t + 2] << y) & h;
			}, b = new Br(25e3), te = new X(288), x = new X(32), S = 0, C = 0, w = (u = 0, 0), ne = 0, T = 0; o > u; ++u) {
				var re = ee(u), E = 32767 & u, ie = _[re];
				if (g[E] = ie, _[re] = E, u >= ne) {
					var ae = o - u;
					if ((S > 7e3 || w > 24576) && ae > 423) {
						l = ui(e, c, 0, b, te, x, C, w, T, u - T, l), w = S = C = 0, T = u;
						for (var D = 0; 286 > D; ++D) te[D] = 0;
						for (D = 0; 30 > D; ++D) x[D] = 0;
					}
					var O = 2, oe = 0, se = m, ce = E - ie & 32767;
					if (ae > 2 && re == ee(u - ce)) for (var le = Math.min(p, ae) - 1, ue = Math.min(32767, u), de = Math.min(258, ae); ue >= ce && --se && E != ie;) {
						if (e[u + O] == e[u + O - ce]) {
							for (var k = 0; de > k && e[u + k] == e[u + k - ce]; ++k);
							if (k > O) {
								if (O = k, oe = ce, k > le) break;
								var fe = Math.min(ce, k - 2), pe = 0;
								for (D = 0; fe > D; ++D) {
									var me = u - ce + D + 32768 & 32767, he = me - g[me] + 32768 & 32767;
									he > pe && (pe = he, ie = me);
								}
							}
						}
						ce += (E = ie) - (ie = g[E]) + 32768 & 32767;
					}
					if (oe) {
						b[w++] = 268435456 | Kr[O] << 18 | qr[oe];
						var A = 31 & Kr[O], ge = 31 & qr[oe];
						C += Vr[A] + Hr[ge], ++te[257 + A], ++x[ge], ne = u + O, ++S;
					} else b[w++] = e[u], ++te[e[u]];
				}
			}
			l = ui(e, c, !0, b, te, x, C, w, T, u - T, l);
		}
		return ni(s, 0, r + ti(l) + i);
	}(a = e, (o = t).level == null ? 6 : o.level, o.mem == null ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(a.length)))) : 12 + o.mem, s, c)), u = l.length;
	return function(e, t) {
		var n = t.filename;
		if (e[0] = 31, e[1] = 139, e[2] = 8, e[8] = 2 > t.level ? 4 : t.level == 9 ? 2 : 0, e[9] = 3, t.mtime != 0 && pi(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), n) {
			e[3] = 8;
			for (var r = 0; n.length >= r; ++r) e[r + 10] = n.charCodeAt(r);
		}
	}(l, t), pi(l, u - 8, n.d()), pi(l, u - 4, r), l;
}
var hi = !!Oe || !!De, gi = "text/plain", _i = function(e, t, n) {
	n === void 0 && (n = !0);
	var [r, a] = e.split("?"), o = i({}, t), s = a?.split("&").map(((e) => {
		var t, [r, i] = e.split("="), a = n && (t = o[r]) != null ? t : i;
		return delete o[r], r + "=" + a;
	})) ?? [], c = function(e, t) {
		var n, r;
		t === void 0 && (t = "&");
		var i = [];
		return G(e, (function(e, t) {
			R(e) || R(t) || t === "undefined" || (n = encodeURIComponent(((e) => e instanceof File)(e) ? e.name : e.toString()), r = encodeURIComponent(t), i[i.length] = r + "=" + n);
		})), i.join(t);
	}(o);
	return c && s.push(c), r + "?" + s.join("&");
}, vi = (e, t) => JSON.stringify(e, ((e, t) => typeof t == "bigint" ? t.toString() : t), t), yi = (e) => {
	if (e._encodedBody) return e._encodedBody;
	var { data: t, compression: n } = e;
	if (t) {
		if (n === Rr.GZipJS) {
			var r = mi(function(e, t) {
				var n = e.length;
				if (typeof TextEncoder < "u") return new TextEncoder().encode(e);
				for (var r = new zr(e.length + (e.length >>> 1)), i = 0, a = function(e) {
					r[i++] = e;
				}, o = 0; n > o; ++o) {
					if (i + 5 > r.length) {
						var s = new zr(i + 8 + (n - o << 1));
						s.set(r), r = s;
					}
					var c = e.charCodeAt(o);
					128 > c ? a(c) : 2048 > c ? (a(192 | c >>> 6), a(128 | 63 & c)) : c > 55295 && 57344 > c ? (a(240 | (c = 65536 + (1047552 & c) | 1023 & e.charCodeAt(++o)) >>> 18), a(128 | c >>> 12 & 63), a(128 | c >>> 6 & 63), a(128 | 63 & c)) : (a(224 | c >>> 12), a(128 | c >>> 6 & 63), a(128 | 63 & c));
				}
				return ni(r, 0, i);
			}(vi(t)), { mtime: 0 });
			return {
				contentType: gi,
				body: r.buffer.slice(r.byteOffset, r.byteOffset + r.byteLength),
				estimatedSize: r.byteLength
			};
		}
		if (n === Rr.Base64) {
			var i = ((e) => "data=" + encodeURIComponent(typeof e == "string" ? e : vi(e)))(function(e) {
				return e && btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, ((e, t) => String.fromCharCode(parseInt(t, 16)))));
			}(vi(t)));
			return {
				contentType: "application/x-www-form-urlencoded",
				body: i,
				estimatedSize: new Blob([i]).size
			};
		}
		var a = vi(t);
		return {
			contentType: "application/json",
			body: a,
			estimatedSize: new Blob([a]).size
		};
	}
}, bi = function() {
	var e = r((function* (e) {
		var t = yield function(e, t) {
			return Me.apply(this, arguments);
		}(vi(e.data), s.DEBUG);
		if (!t) return e;
		var n = yield t.arrayBuffer();
		return i({}, e, { _encodedBody: {
			contentType: gi,
			body: n,
			estimatedSize: n.byteLength
		} });
	}));
	return function(t) {
		return e.apply(this, arguments);
	};
}(), xi = [];
De && xi.push({
	transport: "fetch",
	method(e) {
		var { contentType: t, body: n, estimatedSize: r } = yi(e) ?? {}, a = new Headers();
		G(e.headers, (function(e, t) {
			a.append(t, e);
		})), t && a.append("Content-Type", t);
		var o = e.url, s = null;
		if (ke) {
			var c = new ke();
			s = {
				signal: c.signal,
				timeout: setTimeout((() => c.abort()), e.timeout)
			};
		}
		De(o, i({
			method: e?.method || "GET",
			headers: a,
			keepalive: e.method === "POST" && 52428.8 > (r || 0),
			body: n,
			signal: s?.signal
		}, e.fetchOptions)).then(((t) => t.text().then(((n) => {
			var r = {
				statusCode: t.status,
				text: n
			};
			if (t.status === 200) try {
				r.json = JSON.parse(n);
			} catch (e) {
				U.error(e);
			}
			e.callback == null || e.callback(r);
		})))).catch(((t) => {
			U.error(t), e.callback == null || e.callback({
				statusCode: 0,
				error: t
			});
		})).finally((() => s ? clearTimeout(s.timeout) : null));
	}
}), Oe && xi.push({
	transport: "XHR",
	method(e) {
		var t = new Oe();
		t.open(e.method || "GET", e.url, !0);
		var { contentType: n, body: r } = yi(e) ?? {};
		G(e.headers, (function(e, n) {
			t.setRequestHeader(n, e);
		})), n && t.setRequestHeader("Content-Type", n), e.timeout && (t.timeout = e.timeout), e.disableXHRCredentials || (t.withCredentials = !0), t.onreadystatechange = () => {
			if (t.readyState === 4) {
				var n = {
					statusCode: t.status,
					text: t.responseText
				};
				if (t.status === 200) try {
					n.json = JSON.parse(t.responseText);
				} catch {}
				e.callback == null || e.callback(n);
			}
		}, t.send(r);
	}
}), Te != null && Te.sendBeacon && xi.push({
	transport: "sendBeacon",
	method(e) {
		var t = _i(e.url, { beacon: "1" });
		try {
			var { contentType: n, body: r } = yi(e) ?? {};
			if (!r) return;
			var i = r instanceof Blob ? r : new Blob([r], { type: n });
			Te.sendBeacon(t, i);
		} catch {}
	}
});
var Si = 3e3, Ci = class {
	constructor(e, t) {
		this._isPaused = !0, this._queue = [], this._flushTimeoutMs = nt(t?.flush_interval_ms || Si, 250, 5e3, U.createLogger("flush interval"), Si), this._sendRequest = e;
	}
	enqueue(e) {
		this._queue.push(e), this._flushTimeout || this._setFlushTimeout();
	}
	unload() {
		this._clearFlushTimeout();
		var e = this._queue.length > 0 ? this._formatQueue() : {}, t = Object.values(e);
		[...t.filter(((e) => e.url.indexOf("/e") === 0)), ...t.filter(((e) => e.url.indexOf("/e") !== 0))].map(((e) => {
			this._sendRequest(i({}, e, { transport: "sendBeacon" }));
		}));
	}
	enable() {
		this._isPaused = !1, this._setFlushTimeout();
	}
	_setFlushTimeout() {
		var e = this;
		this._isPaused || (this._flushTimeout = setTimeout((() => {
			if (this._clearFlushTimeout(), this._queue.length > 0) {
				var t = this._formatQueue(), n = function() {
					var n = t[r], i = (/* @__PURE__ */ new Date()).getTime();
					n.data && I(n.data) && G(n.data, ((e) => {
						e.offset = Math.abs(e.timestamp - i), delete e.timestamp;
					})), e._sendRequest(n);
				};
				for (var r in t) n();
			}
		}), this._flushTimeoutMs));
	}
	_clearFlushTimeout() {
		clearTimeout(this._flushTimeout), this._flushTimeout = void 0;
	}
	_formatQueue() {
		var e = {};
		return G(this._queue, ((t) => {
			var n, r = t, a = (r ? r.batchKey : null) || r.url;
			R(e[a]) && (e[a] = i({}, r, { data: [] })), (n = e[a].data) == null || n.push(r.data);
		})), this._queue = [], e;
	}
}, wi = ["retriesPerformedSoFar"], Ti = class {
	constructor(e) {
		this._isPolling = !1, this._pollIntervalMs = 3e3, this._queue = [], this._instance = e, this._queue = [], this._areWeOnline = !0, !R(j) && "onLine" in j.navigator && (this._areWeOnline = j.navigator.onLine, this._onlineListener = () => {
			this._areWeOnline = !0, this._flush();
		}, this._offlineListener = () => {
			this._areWeOnline = !1;
		}, q(j, "online", this._onlineListener), q(j, "offline", this._offlineListener));
	}
	get length() {
		return this._queue.length;
	}
	retriableRequest(e) {
		var { retriesPerformedSoFar: t } = e, n = a(e, wi);
		Ke(t) && (n.url = _i(n.url, { retry_count: t })), this._instance._send_request(i({}, n, { callback: (e) => {
			e.statusCode === 200 || e.statusCode >= 400 && 500 > e.statusCode || (t ?? 0) >= 10 ? n.callback == null || n.callback(e) : this._enqueue(i({ retriesPerformedSoFar: t }, n));
		} }));
	}
	_enqueue(e) {
		var t = e.retriesPerformedSoFar || 0;
		e.retriesPerformedSoFar = t + 1;
		var n = function(e) {
			var t = 3e3 * 2 ** e, n = t / 2, r = Math.min(18e5, t), i = Math.random() - .5;
			return Math.ceil(r + i * (r - n));
		}(t), r = Date.now() + n;
		this._queue.push({
			retryAt: r,
			requestOptions: e
		});
		var i = "Enqueued failed request for retry in " + n;
		navigator.onLine || (i += " (Browser is offline)"), U.warn(i), this._isPolling || (this._isPolling = !0, this._poll());
	}
	_poll() {
		if (this._poller && clearTimeout(this._poller), this._queue.length === 0) return this._isPolling = !1, void (this._poller = void 0);
		this._poller = setTimeout((() => {
			this._areWeOnline && this._queue.length > 0 && this._flush(), this._poll();
		}), this._pollIntervalMs);
	}
	_flush() {
		var e = Date.now(), t = [], n = this._queue.filter(((n) => e > n.retryAt || (t.push(n), !1)));
		if (this._queue = t, n.length > 0) for (var { requestOptions: r } of n) this.retriableRequest(r);
	}
	unload() {
		for (var { requestOptions: e } of (this._poller &&= (clearTimeout(this._poller), void 0), this._isPolling = !1, R(j) || (this._onlineListener &&= (j.removeEventListener("online", this._onlineListener), void 0), this._offlineListener &&= (j.removeEventListener("offline", this._offlineListener), void 0)), this._queue)) try {
			this._instance._send_request(i({}, e, { transport: "sendBeacon" }));
		} catch (e) {
			U.error(e);
		}
		this._queue = [];
	}
}, Ei = class {
	constructor(e) {
		this._updateScrollData = () => {
			this._context ||= {};
			var e = this.scrollElement(), t = this.scrollY(), n = e ? Math.max(0, e.scrollHeight - e.clientHeight) : 0, r = t + (e?.clientHeight || 0), i = e?.scrollHeight || 0;
			this._context.lastScrollY = Math.ceil(t), this._context.maxScrollY = Math.max(t, this._context.maxScrollY ?? 0), this._context.maxScrollHeight = Math.max(n, this._context.maxScrollHeight ?? 0), this._context.lastContentY = r, this._context.maxContentY = Math.max(r, this._context.maxContentY ?? 0), this._context.maxContentHeight = Math.max(i, this._context.maxContentHeight ?? 0);
		}, this._instance = e;
	}
	get _scrollRoot() {
		return this._instance.config.scroll_root_selector;
	}
	getContext() {
		return this._context;
	}
	resetContext() {
		var e = this._context;
		return setTimeout(this._updateScrollData, 0), e;
	}
	startMeasuringScrollPosition() {
		q(j, "scroll", this._updateScrollData, { capture: !0 }), q(j, "scrollend", this._updateScrollData, { capture: !0 }), q(j, "resize", this._updateScrollData);
	}
	scrollElement() {
		if (!this._scrollRoot) return j?.document.documentElement;
		for (var e of I(this._scrollRoot) ? this._scrollRoot : [this._scrollRoot]) {
			var t = j?.document.querySelector(e);
			if (t) return t;
		}
	}
	scrollY() {
		if (this._scrollRoot) {
			var e = this.scrollElement();
			return e && e.scrollTop || 0;
		}
		return j && (j.scrollY || j.pageYOffset || j.document.documentElement.scrollTop) || 0;
	}
	scrollX() {
		if (this._scrollRoot) {
			var e = this.scrollElement();
			return e && e.scrollLeft || 0;
		}
		return j && (j.scrollX || j.pageXOffset || j.document.documentElement.scrollLeft) || 0;
	}
}, Di = (e) => xr(e?.config.mask_personal_data_properties, e?.config.custom_personal_data_properties), Oi = class {
	constructor(e, t, n, r) {
		this._onSessionIdCallback = (e) => {
			var t = this._getStored();
			if (!t || t.sessionId !== e) {
				var n = {
					sessionId: e,
					props: this._sessionSourceParamGenerator(this._instance)
				};
				this._persistence.register({ [oe]: n });
			}
		}, this._instance = e, this._sessionIdManager = t, this._persistence = n, this._sessionSourceParamGenerator = r || Di, this._sessionIdManager.onSessionId(this._onSessionIdCallback);
	}
	_getStored() {
		return this._persistence.props[oe];
	}
	getSetOnceProps() {
		var e = this._getStored()?.props;
		return e ? "r" in e ? Sr(e) : {
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
		var e = {};
		return G(jn(this.getSetOnceProps()), ((t, n) => {
			n === "$current_url" && (n = "url"), e["$session_entry_" + Le(n)] = t;
		})), e;
	}
}, ki = class {
	constructor() {
		this._events = {};
	}
	on(e, t) {
		return this._events[e] || (this._events[e] = []), this._events[e].push(t), () => {
			this._events[e] = this._events[e].filter(((e) => e !== t));
		};
	}
	emit(e, t) {
		for (var n of this._events[e] || []) n(t);
		for (var r of this._events["*"] || []) r(e, t);
	}
}, Ai = W("[SessionId]"), ji = class {
	on(e, t) {
		return this._eventEmitter.on(e, t);
	}
	constructor(e, t, n) {
		var r;
		if (this._sessionIdChangedHandlers = [], this._beforeUnloadListener = void 0, this._eventEmitter = new ki(), this._sessionHasBeenIdleTooLong = (e, t) => !(!Ke(e) || !Ke(t)) && Math.abs(e - t) > this.sessionTimeoutMs, !e.persistence) throw Error("SessionIdManager requires a PostHogPersistence instance");
		if (e.config.cookieless_mode === A) throw Error("SessionIdManager cannot be used with cookieless_mode=\"always\"");
		this._config = e.config, this._persistence = e.persistence, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null, this._sessionIdGenerator = t || Bn, this._windowIdGenerator = n || Bn;
		var i = this._config.persistence_name || this._config.token;
		if (this._sessionTimeoutMs = 1e3 * nt(this._config.session_idle_timeout_seconds || 1800, 60, 36e3, Ai.createLogger("session_idle_timeout_seconds"), 1800), e.register({ $configured_session_timeout_ms: this._sessionTimeoutMs }), this._resetIdleTimer(), this._window_id_storage_key = "ph_" + i + "_window_id", this._primary_window_exists_storage_key = "ph_" + i + "_primary_window_exists", this._canUseSessionStorage()) {
			var a = Y._parse(this._window_id_storage_key), o = Y._parse(this._primary_window_exists_storage_key);
			a && !o ? this._windowId = a : Y._remove(this._window_id_storage_key), Y._set(this._primary_window_exists_storage_key, !0);
		}
		if ((r = this._config.bootstrap) != null && r.sessionID) try {
			var s = ((e) => {
				var t = this._config.bootstrap.sessionID.replace(/-/g, "");
				if (t.length !== 32) throw Error("Not a valid UUID");
				if (t[12] !== "7") throw Error("Not a UUIDv7");
				return parseInt(t.substring(0, 12), 16);
			})();
			this._setSessionId(this._config.bootstrap.sessionID, (/* @__PURE__ */ new Date()).getTime(), s);
		} catch (e) {
			Ai.error("Invalid sessionID in bootstrap", e);
		}
		this._listenToReloadWindow();
	}
	get sessionTimeoutMs() {
		return this._sessionTimeoutMs;
	}
	onSessionId(e) {
		return R(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), this._sessionIdChangedHandlers.push(e), this._sessionId && e(this._sessionId, this._windowId), () => {
			this._sessionIdChangedHandlers = this._sessionIdChangedHandlers.filter(((t) => t !== e));
		};
	}
	_canUseSessionStorage() {
		return this._config.persistence !== "memory" && !this._persistence._disabled && Y._is_supported();
	}
	_setWindowId(e) {
		e !== this._windowId && (this._windowId = e, this._canUseSessionStorage() && Y._set(this._window_id_storage_key, e));
	}
	_getWindowId() {
		return this._windowId ? this._windowId : this._canUseSessionStorage() ? Y._parse(this._window_id_storage_key) : null;
	}
	_setSessionId(e, t, n) {
		e === this._sessionId && t === this._sessionActivityTimestamp && n === this._sessionStartTimestamp || (this._sessionStartTimestamp = n, this._sessionActivityTimestamp = t, this._sessionId = e, this._persistence.register({ [te]: [
			t,
			e,
			n
		] }));
	}
	_getSessionId() {
		var e = this._persistence.props[te];
		return I(e) && e.length === 2 && e.push(e[0]), e || [
			0,
			null,
			0
		];
	}
	resetSessionId() {
		this._setSessionId(null, null, null);
	}
	destroy() {
		clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = void 0, this._beforeUnloadListener && j && (j.removeEventListener(be, this._beforeUnloadListener, { capture: !1 }), this._beforeUnloadListener = void 0), this._sessionIdChangedHandlers = [];
	}
	_listenToReloadWindow() {
		this._beforeUnloadListener = () => {
			this._canUseSessionStorage() && Y._remove(this._primary_window_exists_storage_key);
		}, q(j, be, this._beforeUnloadListener, { capture: !1 });
	}
	checkAndGetSessionAndWindowId(e, t) {
		if (e === void 0 && (e = !1), t === void 0 && (t = null), this._config.cookieless_mode === A) throw Error("checkAndGetSessionAndWindowId should not be called with cookieless_mode=\"always\"");
		var n = t || (/* @__PURE__ */ new Date()).getTime(), [r, i, a] = this._getSessionId(), o = this._getWindowId(), s = Ke(a) && Math.abs(n - a) > 864e5, c = !1, l = !i, u = !l && !e && this._sessionHasBeenIdleTooLong(n, r);
		l || u || s ? (i = this._sessionIdGenerator(), o = this._windowIdGenerator(), Ai.info("new session ID generated", {
			sessionId: i,
			windowId: o,
			changeReason: {
				noSessionId: l,
				activityTimeout: u,
				sessionPastMaximumLength: s
			}
		}), a = n, c = !0) : o || (o = this._windowIdGenerator(), c = !0);
		var d = Ke(r) && e && !s ? r : n, f = Ke(a) ? a : (/* @__PURE__ */ new Date()).getTime();
		return this._setWindowId(o), this._setSessionId(i, d, f), e || this._resetIdleTimer(), c && this._sessionIdChangedHandlers.forEach(((e) => e(i, o, c ? {
			noSessionId: l,
			activityTimeout: u,
			sessionPastMaximumLength: s
		} : void 0))), {
			sessionId: i,
			windowId: o,
			sessionStartTimestamp: f,
			changeReason: c ? {
				noSessionId: l,
				activityTimeout: u,
				sessionPastMaximumLength: s
			} : void 0,
			lastActivityTimestamp: r
		};
	}
	_resetIdleTimer() {
		clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = setTimeout((() => {
			var [e] = this._getSessionId();
			if (this._sessionHasBeenIdleTooLong((/* @__PURE__ */ new Date()).getTime(), e)) {
				var t = this._sessionId;
				this.resetSessionId(), this._eventEmitter.emit("forcedIdleReset", { idleSessionId: t });
			}
		}), 1.1 * this.sessionTimeoutMs);
	}
}, Mi = function(e, t) {
	if (!e) return !1;
	var n = e.userAgent;
	if (n && Fe(n, t)) return !0;
	try {
		var r = e?.userAgentData;
		if (r != null && r.brands && r.brands.some(((e) => Fe(e?.brand, t)))) return !0;
	} catch {}
	return !!e.webdriver;
}, Ni = function(e, t) {
	if (!function(e) {
		try {
			new RegExp(e);
		} catch {
			return !1;
		}
		return !0;
	}(t)) return !1;
	try {
		return new RegExp(t).test(e);
	} catch {
		return !1;
	}
};
function Pi(e, t, n) {
	return vi({
		distinct_id: e,
		userPropertiesToSet: t,
		userPropertiesToSetOnce: n
	});
}
var Fi = {
	exact: (e, t) => t.some(((t) => e.some(((e) => t === e)))),
	is_not: (e, t) => t.every(((t) => e.every(((e) => t !== e)))),
	regex: (e, t) => t.some(((t) => e.some(((e) => Ni(t, e))))),
	not_regex: (e, t) => t.every(((t) => e.every(((e) => !Ni(t, e))))),
	icontains: (e, t) => t.map(Ii).some(((t) => e.map(Ii).some(((e) => t.includes(e))))),
	not_icontains: (e, t) => t.map(Ii).every(((t) => e.map(Ii).every(((e) => !t.includes(e))))),
	gt: (e, t) => t.some(((t) => {
		var n = parseFloat(t);
		return !isNaN(n) && e.some(((e) => n > parseFloat(e)));
	})),
	lt: (e, t) => t.some(((t) => {
		var n = parseFloat(t);
		return !isNaN(n) && e.some(((e) => n < parseFloat(e)));
	}))
}, Ii = (e) => e.toLowerCase();
function Li(e, t) {
	return !e || Object.entries(e).every(((e) => {
		var [n, r] = e, i = t?.[n];
		if (R(i) || We(i)) return !1;
		var a = [String(i)], o = Fi[r.operator];
		return !!o && o(r.values, a);
	}));
}
var Ri = "custom", zi = "i.posthog.com", Bi = class {
	constructor(e) {
		this._regionCache = {}, this.instance = e;
	}
	get apiHost() {
		var e = this.instance.config.api_host.trim().replace(/\/$/, "");
		return e === "https://app.posthog.com" ? "https://us.i.posthog.com" : e;
	}
	get flagsApiHost() {
		var e = this.instance.config.flags_api_host;
		return e ? e.trim().replace(/\/$/, "") : this.apiHost;
	}
	get uiHost() {
		var e = this.instance.config.ui_host?.replace(/\/$/, "");
		return e ||= this.apiHost.replace("." + zi, ".posthog.com"), e === "https://app.posthog.com" ? "https://us.posthog.com" : e;
	}
	get region() {
		return this._regionCache[this.apiHost] || (this._regionCache[this.apiHost] = /https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "us" : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "eu" : Ri), this._regionCache[this.apiHost];
	}
	endpointFor(e, t) {
		if (t === void 0 && (t = ""), t &&= t[0] === "/" ? t : "/" + t, e === "ui") return this.uiHost + t;
		if (e === "flags") return this.flagsApiHost + t;
		if (this.region === Ri) return this.apiHost + t;
		var n = zi + t;
		switch (e) {
			case "assets": return "https://" + this.region + "-assets." + n;
			case "api": return "https://" + this.region + "." + n;
		}
	}
}, Q = W("[Surveys]"), Vi = "seenSurvey_", Hi = (e, t) => {
	var n = "$survey_" + t + "/" + e.id;
	return e.current_iteration && e.current_iteration > 0 && (n = "$survey_" + t + "/" + e.id + "/" + e.current_iteration), n;
}, Ui = (e) => ((e, t) => {
	var n = "" + Vi + t.id;
	return t.current_iteration && t.current_iteration > 0 && (n = "" + Vi + t.id + "_" + t.current_iteration), n;
})(0, e), Wi = [
	Or.Popover,
	Or.Widget,
	Or.API
], Gi = {
	ignoreConditions: !1,
	ignoreDelay: !1,
	displayType: jr.Popover
}, Ki = W("[PostHog ExternalIntegrations]"), qi = {
	intercom: "intercom-integration",
	crispChat: "crisp-chat-integration"
}, Ji = class {
	constructor(e) {
		this._instance = e;
	}
	_loadScript(e, t) {
		var n;
		(n = P.__PosthogExtensions__) == null || n.loadExternalDependency == null || n.loadExternalDependency(this._instance, e, ((e) => {
			if (e) return Ki.error("failed to load script", e);
			t();
		}));
	}
	startIfEnabledOrStop() {
		var e = this, t = function(t) {
			var n, i, a;
			!r || (n = P.__PosthogExtensions__) != null && (n = n.integrations) != null && n[t] || e._loadScript(qi[t], (() => {
				var n;
				(n = P.__PosthogExtensions__) == null || (n = n.integrations) == null || (n = n[t]) == null || n.start(e._instance);
			})), !r && (i = P.__PosthogExtensions__) != null && (i = i.integrations) != null && i[t] && ((a = P.__PosthogExtensions__) == null || (a = a.integrations) == null || (a = a[t]) == null || a.stop());
		};
		for (var [n, r] of Object.entries((i = this._instance.config.integrations) ?? {})) {
			var i;
			t(n);
		}
	}
}, Yi = {}, Xi = 0, Zi = () => {}, Qi = "Consent opt in/out is not valid with cookieless_mode=\"always\" and will be ignored", $i = "Surveys module not available", ea = "sanitize_properties is deprecated. Use before_send instead", ta = "Invalid value for property_denylist config: ", na = /^\d+\.\d+\.\d+(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/, ra = "posthog", ia = !hi && je?.indexOf("MSIE") === -1 && je?.indexOf("Mozilla") === -1, aa = (e) => {
	var t;
	return i({
		api_host: "https://us.i.posthog.com",
		flags_api_host: null,
		ui_host: null,
		token: "",
		autocapture: !0,
		cross_subdomain_cookie: Nn(N?.location),
		persistence: "localStorage+cookie",
		persistence_name: "",
		cookie_persisted_properties: [],
		loaded: Zi,
		save_campaign_params: !0,
		custom_campaign_params: [],
		custom_blocked_useragents: [],
		save_referrer: !0,
		capture_pageleave: "if_capture_pageview",
		defaults: e ?? "unset",
		__preview_deferred_init_extensions: !1,
		debug: Ee && z(Ee?.search) && Ee.search.indexOf("__posthog_debug=true") !== -1 || !1,
		cookie_expiration: 365,
		upgrade: !1,
		disable_session_recording: !1,
		disable_persistence: !1,
		disable_web_experiments: !0,
		disable_surveys: !1,
		disable_surveys_automatic_display: !1,
		disable_conversations: !1,
		disable_product_tours: !1,
		disable_external_dependency_loading: !1,
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
		person_profiles: ve,
		before_send: void 0,
		request_queue_config: { flush_interval_ms: Si },
		error_tracking: {},
		_onCapture: Zi,
		__preview_eager_load_replay: !1
	}, ((e) => ({
		rageclick: !e || "2025-11-30" > e || { content_ignorelist: !0 },
		capture_pageview: !e || "2025-05-24" > e || "history_change",
		session_recording: e && e >= "2025-11-30" ? { strictMinimumDuration: !0 } : {},
		external_scripts_inject_target: e && e >= "2026-01-30" ? "head" : "body",
		internal_or_test_user_hostname: e && e >= "2026-01-30" ? /^(localhost|127\.0\.0\.1)$/ : void 0
	}))(e));
}, oa = [
	["process_person", "person_profiles"],
	["xhr_headers", "request_headers"],
	["cookie_name", "persistence_name"],
	["disable_cookie", "disable_persistence"],
	["store_google", "save_campaign_params"],
	["verbose", "debug"]
], sa = (e) => {
	var t = {};
	for (var [n, r] of oa) R(e[n]) || (t[r] = e[n]);
	var i = K({}, t, e);
	return I(e.property_blacklist) && (R(e.property_denylist) ? i.property_denylist = e.property_blacklist : I(e.property_denylist) ? i.property_denylist = [...e.property_blacklist, ...e.property_denylist] : U.error(ta + e.property_denylist)), i;
}, ca = class {
	constructor() {
		this.__forceAllowLocalhost = !1;
	}
	get _forceAllowLocalhost() {
		return this.__forceAllowLocalhost;
	}
	set _forceAllowLocalhost(e) {
		U.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = e;
	}
}, la = class e {
	_replaceExtension(e, t) {
		if (e) {
			var n = this._extensions.indexOf(e);
			n !== -1 && this._extensions.splice(n, 1);
		}
		return this._extensions.push(t), t.initialize == null || t.initialize(), t;
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
		this.webPerformance = new ca(), this._personProcessingSetOncePropertiesSent = !1, this.version = s.LIB_VERSION, this._internalEventEmitter = new ki(), this._extensions = [], this._calculate_event_properties = this.calculateEventProperties.bind(this), this.config = aa(), this.SentryIntegration = ir, this.sentryIntegration = (e) => function(e, t) {
			var n = rr(e, t);
			return {
				name: nr,
				processEvent: (e) => n(e)
			};
		}(this, e), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this._initialPageviewCaptured = !1, this._visibilityStateListener = null, this._initialPersonProfilesConfig = null, this._cachedPersonProperties = null, this.scrollManager = new Ei(this), this.pageViewManager = new ar(this), this.rateLimiter = new Fr(this), this.requestRouter = new Bi(this), this.consent = new Xn(this), this.externalIntegrations = new Ji(this);
		var t = e.__defaultExtensionClasses ?? {};
		this.featureFlags = t.featureFlags && new t.featureFlags(this), this.toolbar = t.toolbar && new t.toolbar(this), this.surveys = t.surveys && new t.surveys(this), this.conversations = t.conversations && new t.conversations(this), this.logs = t.logs && new t.logs(this), this.experiments = t.experiments && new t.experiments(this), this.exceptions = t.exceptions && new t.exceptions(this), this.people = {
			set: (e, t, n) => {
				var r = z(e) ? { [e]: t } : e;
				this.setPersonProperties(r), n?.({});
			},
			set_once: (e, t, n) => {
				var r = z(e) ? { [e]: t } : e;
				this.setPersonProperties(void 0, r), n?.({});
			}
		}, this.on("eventCaptured", ((e) => U.info("send \"" + e?.event + "\"", e)));
	}
	init(t, n, r) {
		if (r && r !== ra) {
			var i = Yi[r] ?? new e();
			return i._init(t, n, r), Yi[r] = i, Yi[ra][r] = i, i;
		}
		return this._init(t, n, r);
	}
	_init(e, t, n) {
		var r, a, o;
		if (t === void 0 && (t = {}), R(e) || Ue(e)) return U.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
		if (this.__loaded) return console.warn("[PostHog.js]", "You have already initialized PostHog! Re-initializing is a no-op"), this;
		this.__loaded = !0, this.config = {}, t.debug = this._checkLocalStorageForDebug(t.debug), this._originalUserConfig = t, this._triggered_notifs = [], t.person_profiles ? this._initialPersonProfilesConfig = t.person_profiles : t.process_person && (this._initialPersonProfilesConfig = t.process_person), this.set_config(K({}, aa(t.defaults), sa(t), {
			name: n,
			token: e
		})), this.config.on_xhr_error && U.error("on_xhr_error is deprecated. Use on_request_error instead"), this.compression = t.disable_compression ? void 0 : Rr.GZipJS;
		var c = this._is_persistence_disabled();
		this.persistence = new Er(this.config, c), this.sessionPersistence = this.config.persistence === "sessionStorage" || this.config.persistence === "memory" ? this.persistence : new Er(i({}, this.config, { persistence: "sessionStorage" }), c);
		var l = i({}, this.persistence.props), u = i({}, this.sessionPersistence.props);
		this.register({ $initialization_time: (/* @__PURE__ */ new Date()).toISOString() }), this._requestQueue = new Ci(((e) => this._send_retriable_request(e)), this.config.request_queue_config), this._retryQueue = new Ti(this), this.__request_queue = [];
		var d = this.config.cookieless_mode === A || this.config.cookieless_mode === he && this.consent.isExplicitlyOptedOut();
		d || (this.sessionManager = new ji(this), this.sessionPropsManager = new Oi(this, this.sessionManager, this.persistence));
		var f = (r = P._POSTHOG_REMOTE_CONFIG) == null || (r = r[this.config.token]) == null ? void 0 : r.config, p = f == null || (a = f.sdkVersion) == null ? void 0 : a.resolved;
		if (p && (na.test(p) ? this._resolvedSdkVersion = p : U.warn("Ignoring invalid preloaded sdkVersion.resolved from remote config: " + p)), this.config.__preview_deferred_init_extensions ? (U.info("Deferring extension initialization to improve startup performance"), setTimeout((() => {
			this._initExtensions(d);
		}), 0)) : (U.info("Initializing extensions synchronously"), this._initExtensions(d)), s.DEBUG = s.DEBUG || this.config.debug, s.DEBUG && U.info("Starting in debug mode", {
			this: this,
			config: t,
			thisC: i({}, this.config),
			p: l,
			s: u
		}), !this.config.identity_distinct_id || (o = t.bootstrap) != null && o.distinctID || (t.bootstrap = i({}, t.bootstrap, {
			distinctID: this.config.identity_distinct_id,
			isIdentifiedID: !0
		})), t.bootstrap?.distinctID !== void 0) {
			var m = t.bootstrap.distinctID, h = this.get_distinct_id(), g = this.persistence.get_property(O);
			if (t.bootstrap.isIdentifiedID && h != null && h !== m && g === ge) this.identify(m);
			else if (t.bootstrap.isIdentifiedID && h != null && h !== m && g === _e) U.warn("Bootstrap distinctID differs from an already-identified user. The existing identity is preserved. Call reset() before reinitializing if you intend to switch users.");
			else {
				var _ = this.config.get_device_id(Bn()), v = t.bootstrap.isIdentifiedID ? _ : m;
				this.persistence.set_property(O, t.bootstrap.isIdentifiedID ? _e : ge), this.register({
					distinct_id: m,
					$device_id: v
				});
			}
		}
		if (d) this.register_once({
			distinct_id: fe,
			$device_id: null
		}, "");
		else if (!this.get_distinct_id()) {
			var y = this.config.get_device_id(Bn());
			this.register_once({
				distinct_id: y,
				$device_id: y
			}, ""), this.persistence.set_property(O, ge);
		}
		return q(j, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), { passive: !1 }), t.segment ? function(e, t) {
			var n = e.config.segment;
			if (!n) return t();
			(function(e, t) {
				var n = e.config.segment;
				if (!n) return t();
				var r = (n) => {
					var r = () => n.anonymousId() || Bn();
					e.config.get_device_id = r, n.id() && (e.register({
						distinct_id: n.id(),
						$device_id: r()
					}), e.persistence.set_property(O, _e)), t();
				}, i = n.user();
				"then" in i && Ve(i.then) ? i.then(r) : r(i);
			})(e, (() => {
				n.register(((e) => {
					Promise && Promise.resolve || tr.warn("This browser does not have Promise support, and can not use the segment integration");
					var t = (t, n) => {
						if (!n) return t;
						t.event.userId || t.event.anonymousId === e.get_distinct_id() || (tr.info("No userId set, resetting PostHog"), e.reset()), t.event.userId && t.event.userId !== e.get_distinct_id() && (tr.info("UserId set, identifying with PostHog"), e.identify(t.event.userId));
						var r = e.calculateEventProperties(n, t.event.properties);
						return t.event.properties = Object.assign({}, r, t.event.properties), t;
					};
					return {
						name: "PostHog JS",
						type: "enrichment",
						version: "1.0.0",
						isLoaded: () => !0,
						load: () => Promise.resolve(),
						track: (e) => t(e, e.event.event),
						page: (e) => t(e, xe),
						identify: (e) => t(e, Ce),
						screen: (e) => t(e, "$screen")
					};
				})(e)).then((() => {
					t();
				}));
			}));
		}(this, (() => this._loaded())) : this._loaded(), Ve(this.config._onCapture) && this.config._onCapture !== Zi && (U.warn("onCapture is deprecated. Please use `before_send` instead"), this.on("eventCaptured", ((e) => this.config._onCapture(e.event, e)))), this.config.ip && U.warn("The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or \"Discard IP data\" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information."), this;
	}
	_initExtensions(t) {
		var n = performance.now(), r = i({}, e.__defaultExtensionClasses, this.config.__extensionClasses), a = [];
		r.featureFlags && this._extensions.push(this.featureFlags = this.featureFlags ?? new r.featureFlags(this)), r.exceptions && this._extensions.push(this.exceptions = this.exceptions ?? new r.exceptions(this)), r.historyAutocapture && this._extensions.push(this.historyAutocapture = new r.historyAutocapture(this)), r.tracingHeaders && this._extensions.push(new r.tracingHeaders(this)), r.siteApps && this._extensions.push(this.siteApps = new r.siteApps(this)), r.sessionRecording && !t && this._extensions.push(this.sessionRecording = new r.sessionRecording(this)), this.config.disable_scroll_properties || a.push((() => {
			this.scrollManager.startMeasuringScrollPosition();
		})), r.autocapture && this._extensions.push(this.autocapture = new r.autocapture(this)), r.surveys && this._extensions.push(this.surveys = this.surveys ?? new r.surveys(this)), r.logs && this._extensions.push(this.logs = this.logs ?? new r.logs(this)), r.conversations && this._extensions.push(this.conversations = this.conversations ?? new r.conversations(this)), r.productTours && this._extensions.push(this.productTours = new r.productTours(this)), r.heatmaps && this._extensions.push(this.heatmaps = new r.heatmaps(this)), r.webVitalsAutocapture && this._extensions.push(this.webVitalsAutocapture = new r.webVitalsAutocapture(this)), r.exceptionObserver && this._extensions.push(this.exceptionObserver = new r.exceptionObserver(this)), r.deadClicksAutocapture && this._extensions.push(this.deadClicksAutocapture = new r.deadClicksAutocapture(this, $n)), r.toolbar && this._extensions.push(this.toolbar = this.toolbar ?? new r.toolbar(this)), r.experiments && this._extensions.push(this.experiments = this.experiments ?? new r.experiments(this)), this._extensions.forEach(((e) => {
			e.initialize && a.push((() => {
				e.initialize == null || e.initialize();
			}));
		})), a.push((() => {
			if (this._pendingRemoteConfig) {
				var e = this._pendingRemoteConfig;
				this._pendingRemoteConfig = void 0, this._onRemoteConfig(e);
			}
		})), this._processInitTaskQueue(a, n);
	}
	_processInitTaskQueue(e, t) {
		for (; e.length > 0;) {
			if (this.config.__preview_deferred_init_extensions && performance.now() - t >= 30 && e.length > 0) return void setTimeout((() => {
				this._processInitTaskQueue(e, t);
			}), 0);
			var n = e.shift();
			if (n) try {
				n();
			} catch (e) {
				U.error("Error initializing extension:", e);
			}
		}
		var r = Math.round(performance.now() - t);
		this.register_for_session({
			$sdk_debug_extensions_init_method: this.config.__preview_deferred_init_extensions ? "deferred" : "synchronous",
			$sdk_debug_extensions_init_time_ms: r
		}), this.config.__preview_deferred_init_extensions && U.info("PostHog extensions initialized (" + r + "ms)");
	}
	_onRemoteConfig(e) {
		var t;
		if (!N || !N.body) return U.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout((() => {
			this._onRemoteConfig(e);
		}), 500);
		this.config.__preview_deferred_init_extensions && (this._pendingRemoteConfig = e), this.compression = void 0, e.supportedCompression && !this.config.disable_compression && (this.compression = F(e.supportedCompression, Rr.GZipJS) ? Rr.GZipJS : F(e.supportedCompression, Rr.Base64) ? Rr.Base64 : void 0), (t = e.analytics) != null && t.endpoint && (this.analyticsDefaultEndpoint = e.analytics.endpoint), this.set_config({ person_profiles: this._initialPersonProfilesConfig ? this._initialPersonProfilesConfig : ve }), this._extensions.forEach(((t) => t.onRemoteConfig == null ? void 0 : t.onRemoteConfig(e)));
	}
	_loaded() {
		try {
			this.config.loaded(this);
		} catch (e) {
			U.critical("`loaded` function failed", e);
		}
		if (this._start_queue_if_opted_in(), this.config.internal_or_test_user_hostname && Ee != null && Ee.hostname) {
			var e = Ee.hostname, t = this.config.internal_or_test_user_hostname;
			(typeof t == "string" ? e === t : t.test(e)) && this.setInternalOrTestUser();
		}
		this.config.capture_pageview && setTimeout((() => {
			(this.consent.isOptedIn() || this.config.cookieless_mode === A) && this._captureInitialPageview();
		}), 1), this._remoteConfigLoader = new Lr(this), this._remoteConfigLoader.load();
	}
	_start_queue_if_opted_in() {
		var e;
		this.is_capturing() && this.config.request_batching && ((e = this._requestQueue) == null || e.enable());
	}
	_dom_loaded() {
		this.is_capturing() && Dn(this.__request_queue, ((e) => this._send_retriable_request(e))), this.__request_queue = [], this._start_queue_if_opted_in();
	}
	_handle_unload() {
		var e, t, n;
		(e = this.surveys) == null || e.handlePageUnload(), this.config.request_batching ? (this._shouldCapturePageleave() && this.capture(Se), (t = this._requestQueue) == null || t.unload(), (n = this._retryQueue) == null || n.unload()) : this._shouldCapturePageleave() && this.capture(Se, null, { transport: "sendBeacon" });
	}
	_send_request(e) {
		this.__loaded && (ia ? this.__request_queue.push(e) : this.rateLimiter.isServerRateLimited(e.batchKey) || (e.transport = e.transport || this.config.api_transport, e.url = _i(e.url, { ip: +!!this.config.ip }), e.headers = i({}, this.config.request_headers, e.headers), e.compression = e.compression === "best-available" ? this.compression : e.compression, e.disableXHRCredentials = this.config.__preview_disable_xhr_credentials, this.config.__preview_disable_beacon && (e.disableTransport = ["sendBeacon"]), e.fetchOptions = e.fetchOptions || this.config.fetch_options, ((e) => {
			var t = i({}, e);
			t.timeout = t.timeout || 6e4, t.url = _i(t.url, {
				_: (/* @__PURE__ */ new Date()).getTime().toString(),
				ver: s.JS_SDK_VERSION,
				compression: t.compression
			});
			var n = t.transport ?? "fetch", r = xi.filter(((e) => !t.disableTransport || !e.transport || !t.disableTransport.includes(e.transport))), a = function(e, t) {
				for (var r = 0; e.length > r; r++) if (e[r].transport === n) return e[r];
			}(r)?.method ?? r[0].method;
			if (!a) throw Error("No available transport method");
			n !== "sendBeacon" && t.data && t.compression === Rr.GZipJS && Ae ? bi(t).then(((e) => {
				a(e);
			})).catch((() => {
				a(t);
			})) : a(t);
		})(i({}, e, { callback: (t) => {
			var n, r;
			this.rateLimiter.checkForLimiting(t), 400 > t.statusCode || (n = (r = this.config).on_request_error) == null || n.call(r, t), e.callback == null || e.callback(t);
		} }))));
	}
	_send_retriable_request(e) {
		this._retryQueue ? this._retryQueue.retriableRequest(e) : this._send_request(e);
	}
	_execute_array(e) {
		Xi++;
		try {
			var t, n = [], r = [], i = [];
			Dn(e, ((e) => {
				e && (I(t = e[0]) ? i.push(e) : Ve(e) ? e.call(this) : I(e) && t === "alias" ? n.push(e) : I(e) && t.indexOf("capture") !== -1 && Ve(this[t]) ? i.push(e) : r.push(e));
			}));
			var a = function(e, t) {
				Dn(e, (function(e) {
					if (I(e[0])) {
						var n = t;
						G(e, (function(e) {
							n = n[e[0]].apply(n, e.slice(1));
						}));
					} else t[e[0]].apply(t, e.slice(1));
				}));
			};
			a(n, this), a(r, this), a(i, this);
		} finally {
			Xi--;
		}
	}
	push(t) {
		if (Xi > 0 && I(t) && z(t[0])) {
			var n = e.prototype[t[0]];
			Ve(n) && n.apply(this, t.slice(1));
		} else this._execute_array([t]);
	}
	capture(e, t, n) {
		var r, a, o, s;
		if (this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue) {
			if (this.is_capturing()) if (!R(e) && z(e)) {
				var c = !this.config.opt_out_useragent_filter && this._is_bot();
				if (!c || this.config.__preview_capture_bot_pageviews) {
					var l = n != null && n.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
					if (l == null || !l.isRateLimited) {
						t != null && t.$current_url && !z(t?.$current_url) && (U.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."), t == null || delete t.$current_url), e !== "$exception" || n != null && n._originatedFromCaptureException || U.warn("Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically."), this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && this.sessionPersistence.update_campaign_params(), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
						var u = /* @__PURE__ */ new Date(), d = n?.timestamp || u, f = Bn(), p = {
							uuid: f,
							event: e,
							properties: this.calculateEventProperties(e, t || {}, d, f)
						};
						e === xe && this.config.__preview_capture_bot_pageviews && c && (p.event = "$bot_pageview", p.properties.$browser_type = "bot"), l && (p.properties.$lib_rate_limit_remaining_tokens = l.remainingTokens), n != null && n.$set && (p.$set = n?.$set);
						var m, h = this._calculate_set_once_properties(n?.$set_once, e !== we, e === Ce);
						if (h && (p.$set_once = h), n != null && n._noTruncate || (r = this.config.properties_string_max_length, a = p, o = (e) => z(e) ? e.slice(0, r) : e, s = /* @__PURE__ */ new Set(), p = function e(t, n) {
							return t === Object(t) ? s.has(t) ? void 0 : (s.add(t), I(t) ? (r = [], Dn(t, ((t) => {
								r.push(e(t));
							}))) : (r = {}, G(t, ((t, n) => {
								s.has(t) || (r[n] = e(t, n));
							}))), r) : o ? o(t) : t;
							var r;
						}(a)), p.timestamp = d, R(n?.timestamp) || (p.properties.$event_time_override_provided = !0, p.properties.$event_time_override_system_time = u), e === kr.DISMISSED || e === kr.SENT) {
							var g = t?.[Ar.SURVEY_ID], _ = t?.[Ar.SURVEY_ITERATION];
							m = {
								id: g,
								current_iteration: _
							}, localStorage.getItem(Ui(m)) || localStorage.setItem(Ui(m), "true"), p.$set = i({}, p.$set, { [Hi({
								id: g,
								current_iteration: _
							}, e === kr.SENT ? "responded" : "dismissed")]: !0 });
						} else e === kr.SHOWN && (p.$set = i({}, p.$set, { [Ar.SURVEY_LAST_SEEN_DATE]: (/* @__PURE__ */ new Date()).toISOString() }));
						if (e === Mr.SHOWN) {
							var v = t?.[Nr.TOUR_TYPE];
							v && (p.$set = i({}, p.$set, { [Nr.TOUR_LAST_SEEN_DATE + "/" + v]: (/* @__PURE__ */ new Date()).toISOString() }));
						}
						var y = i({}, p.properties.$set, p.$set);
						if (He(y) || this.setPersonPropertiesForFlags(y), !B(this.config.before_send)) {
							var ee = this._runBeforeSend(p);
							if (!ee) return;
							p = ee;
						}
						this._internalEventEmitter.emit("eventCaptured", p);
						var b = {
							method: "POST",
							url: n?._url ?? this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
							data: p,
							compression: "best-available",
							batchKey: n?._batchKey
						};
						return !this.config.request_batching || n && (n == null || !n._batchKey) || n != null && n.send_instantly ? this._send_retriable_request(b) : this._requestQueue.enqueue(b), p;
					}
					U.critical("This capture call is ignored due to client rate limiting.");
				}
			} else U.error("No event name provided to posthog.capture");
		} else U.uninitializedWarning("posthog.capture");
	}
	_addCaptureHook(e) {
		return this.on("eventCaptured", ((t) => e(t.event, t)));
	}
	calculateEventProperties(e, t, n, r, a) {
		if (n ||= /* @__PURE__ */ new Date(), !this.persistence || !this.sessionPersistence) return t;
		var o = a ? void 0 : this.persistence.remove_event_timer(e), c = i({}, t);
		if (c.token = this.config.token, c.$config_defaults = this.config.defaults, (this.config.cookieless_mode == A || this.config.cookieless_mode == he && this.consent.isExplicitlyOptedOut()) && (c.$cookieless_mode = !0), e === "$snapshot") {
			var l = i({}, this.persistence.properties(), this.sessionPersistence.properties());
			return c.distinct_id = l.distinct_id, (!z(c.distinct_id) && !Ge(c.distinct_id) || Ue(c.distinct_id)) && U.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), c;
		}
		var u, d = function(e, t) {
			var n, r, i;
			if (!je) return {};
			var a, o, c, l, u = e ? [...dr, ...t || []] : [], [d, f] = function(e) {
				for (var t = 0; Qt.length > t; t++) {
					var [n, r] = Qt[t], i = n.exec(e), a = i && (Ve(r) ? r(i, e) : r);
					if (a) return a;
				}
				return ["", ""];
			}(je);
			return K(jn({
				$os: d,
				$os_version: f,
				$browser: Yt(je, navigator.vendor),
				$device: $t(je),
				$device_type: (o = je, c = {
					userAgentDataPlatform: (n = navigator) == null || (n = n.userAgentData) == null ? void 0 : n.platform,
					maxTouchPoints: navigator?.maxTouchPoints,
					screenWidth: j == null || (r = j.screen) == null ? void 0 : r.width,
					screenHeight: j == null || (i = j.screen) == null ? void 0 : i.height,
					devicePixelRatio: j?.devicePixelRatio
				}, l = $t(o), l === dt || l === ut || l === "Kobo" || l === "Kindle Fire" || l === Vt ? lt : l === At || l === Mt || l === jt || l === Rt ? "Console" : l === pt ? "Wearable" : l ? V : c?.userAgentDataPlatform === "Android" && (c?.maxTouchPoints ?? 0) > 0 ? 600 > Math.min(c?.screenWidth ?? 0, c?.screenHeight ?? 0) / (c?.devicePixelRatio ?? 1) ? V : lt : "Desktop"),
				$timezone: Cr(),
				$timezone_offset: wr()
			}), {
				$current_url: cr(Ee?.href, u, pr),
				$host: Ee?.host,
				$pathname: Ee?.pathname,
				$raw_user_agent: je.length > 1e3 ? je.substring(0, 997) + "..." : je,
				$browser_version: Zt(je, navigator.vendor),
				$browser_language: vr(),
				$browser_language_prefix: (a = vr(), typeof a == "string" ? a.split("-")[0] : void 0),
				$screen_height: j?.screen.height,
				$screen_width: j?.screen.width,
				$viewport_height: j?.innerHeight,
				$viewport_width: j?.innerWidth,
				$lib: s.LIB_NAME,
				$lib_version: s.LIB_VERSION,
				$insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
				$time: Date.now() / 1e3
			});
		}(this.config.mask_personal_data_properties, this.config.custom_personal_data_properties);
		if (this.sessionManager) {
			var { sessionId: f, windowId: p } = this.sessionManager.checkAndGetSessionAndWindowId(a, n.getTime());
			c.$session_id = f, c.$window_id = p;
		}
		this.sessionPropsManager && K(c, this.sessionPropsManager.getSessionProps());
		try {
			this.sessionRecording && K(c, this.sessionRecording.sdkDebugProperties), c.$sdk_debug_retry_queue_size = this._retryQueue?.length;
		} catch (e) {
			c.$sdk_debug_error_capturing_properties = String(e);
		}
		if (this.requestRouter.region === Ri && (c.$lib_custom_api_host = this.config.api_host), u = e !== xe || a ? e !== Se || a ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(n) : this.pageViewManager.doPageView(n, r), c = K(c, u), e === xe && N && (c.title = N.title), !R(o)) {
			var m = n.getTime() - o;
			c.$duration = parseFloat((m / 1e3).toFixed(3));
		}
		je && this.config.opt_out_useragent_filter && (c.$browser_type = this._is_bot() ? "bot" : "browser"), (c = K({}, d, this.persistence.properties(), this.sessionPersistence.properties(), c)).$is_identified = this._isIdentified(), I(this.config.property_denylist) ? G(this.config.property_denylist, (function(e) {
			delete c[e];
		})) : U.error(ta + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
		var h = this.config.sanitize_properties;
		h && (U.error(ea), c = h(c, e));
		var g = this._hasPersonProcessing();
		return c.$process_person_profile = g, g && !a && this._requirePersonProcessing("_calculate_event_properties"), c;
	}
	_calculate_set_once_properties(e, t, n) {
		if (t === void 0 && (t = !0), n === void 0 && (n = !1), !this.persistence || !this._hasPersonProcessing() || this._personProcessingSetOncePropertiesSent && !n) return e;
		var r = K({}, this.persistence.get_initial_props(), this.sessionPropsManager?.getSetOnceProps() || {}, e || {}), i = this.config.sanitize_properties;
		return i && (U.error(ea), r = i(r, "$set_once")), t && (this._personProcessingSetOncePropertiesSent = !0), He(r) ? void 0 : r;
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
		var t;
		(t = this.sessionPersistence) == null || t.register(e);
	}
	unregister(e) {
		var t;
		(t = this.persistence) == null || t.unregister(e);
	}
	unregister_for_session(e) {
		var t;
		(t = this.sessionPersistence) == null || t.unregister(e);
	}
	_register_single(e, t) {
		this.register({ [e]: t });
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
	isFeatureEnabled(e, t) {
		return this.featureFlags?.isFeatureEnabled(e, t);
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
	getEarlyAccessFeatures(e, t, n) {
		return t === void 0 && (t = !1), this.featureFlags?.getEarlyAccessFeatures(e, t, n);
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
			error: $i
		}), () => {});
	}
	onSessionId(e) {
		return this.sessionManager?.onSessionId(e) ?? (() => {});
	}
	getSurveys(e, t) {
		t === void 0 && (t = !1), this.surveys ? this.surveys.getSurveys(e, t) : e([], {
			isLoaded: !1,
			error: $i
		});
	}
	getActiveMatchingSurveys(e, t) {
		t === void 0 && (t = !1), this.surveys ? this.surveys.getActiveMatchingSurveys(e, t) : e([], {
			isLoaded: !1,
			error: $i
		});
	}
	renderSurvey(e, t) {
		var n;
		(n = this.surveys) == null || n.renderSurvey(e, t);
	}
	displaySurvey(e, t) {
		var n;
		t === void 0 && (t = Gi), (n = this.surveys) == null || n.displaySurvey(e, t);
	}
	cancelPendingSurvey(e) {
		var t;
		(t = this.surveys) == null || t.cancelPendingSurvey(e);
	}
	canRenderSurvey(e) {
		return this.surveys?.canRenderSurvey(e) ?? {
			visible: !1,
			disabledReason: $i
		};
	}
	canRenderSurveyAsync(e, t) {
		return t === void 0 && (t = !1), this.surveys?.canRenderSurveyAsync(e, t) ?? Promise.resolve({
			visible: !1,
			disabledReason: $i
		});
	}
	_validateIdentifyId(e) {
		return !e || Ue(e) ? (U.critical("Unique user id has not been set in posthog.identify"), !1) : e === fe ? (U.critical("The string \"" + e + "\" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value."), !1) : !["distinct_id", "distinctid"].includes(e.toLowerCase()) && !["undefined", "null"].includes(e.toLowerCase()) || (U.critical("The string \"" + e + "\" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string."), !1);
	}
	identify(e, t, n) {
		if (!this.__loaded || !this.persistence) return U.uninitializedWarning("posthog.identify");
		if (Ge(e) && (e = e.toString(), U.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), this._validateIdentifyId(e) && this._requirePersonProcessing("posthog.identify")) {
			var r = this.get_distinct_id();
			this.register({ $user_id: e }), this.get_property(l) || this.register_once({
				$had_persisted_distinct_id: !0,
				$device_id: r
			}, ""), e !== r && e !== this.get_property(u) && (this.unregister(u), this.register({ distinct_id: e }));
			var i, a = (this.persistence.get_property(O) || ge) === ge;
			e !== r && a ? (this.persistence.set_property(O, _e), this.setPersonPropertiesForFlags({
				$set: t || {},
				$set_once: n || {}
			}, !1), this.capture(Ce, {
				distinct_id: e,
				$anon_distinct_id: r
			}, {
				$set: t || {},
				$set_once: n || {}
			}), this._cachedPersonProperties = Pi(e, t, n), (i = this.featureFlags) == null || i.setAnonymousDistinctId(r)) : (t || n) && this.setPersonProperties(t, n), e !== r && (this.reloadFeatureFlags(), this.unregister(E));
		}
	}
	setPersonProperties(e, t) {
		if ((e || t) && this._requirePersonProcessing("posthog.setPersonProperties")) {
			var n = Pi(this.get_distinct_id(), e, t);
			this._cachedPersonProperties === n ? U.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.") : (this.setPersonPropertiesForFlags({
				$set: e || {},
				$set_once: t || {}
			}, !0), this.capture("$set", {
				$set: e || {},
				$set_once: t || {}
			}), this._cachedPersonProperties = n);
		}
	}
	group(e, t, n) {
		if (e && t) {
			var r = this.getGroups(), a = r[e] !== t;
			if (a && this.resetGroupPropertiesForFlags(e), this.register({ $groups: i({}, r, { [e]: t }) }), a || n) {
				var o = {
					$group_type: e,
					$group_key: t
				};
				n && (o.$group_set = n), this.capture(we, o);
			}
			n && this.setGroupPropertiesForFlags({ [e]: n }), a && !n && this.reloadFeatureFlags();
		} else U.error("posthog.group requires a group type and group key");
	}
	resetGroups() {
		this.register({ $groups: {} }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags();
	}
	setPersonPropertiesForFlags(e, t) {
		var n;
		t === void 0 && (t = !0), (n = this.featureFlags) == null || n.setPersonPropertiesForFlags(e, t);
	}
	resetPersonPropertiesForFlags() {
		var e;
		(e = this.featureFlags) == null || e.resetPersonPropertiesForFlags();
	}
	setGroupPropertiesForFlags(e, t) {
		var n;
		t === void 0 && (t = !0), this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") && ((n = this.featureFlags) == null || n.setGroupPropertiesForFlags(e, t));
	}
	resetGroupPropertiesForFlags(e) {
		var t;
		(t = this.featureFlags) == null || t.resetGroupPropertiesForFlags(e);
	}
	reset(e) {
		var t, n, r, i, a, o, s, c;
		if (U.info("reset"), !this.__loaded) return U.uninitializedWarning("posthog.reset");
		var u = this.get_property(l);
		if (this.consent.reset(), (t = this.persistence) == null || t.clear(), (n = this.sessionPersistence) == null || n.clear(), (r = this.surveys) == null || r.reset(), (i = this._remoteConfigLoader) == null || i.stop(), (a = this.featureFlags) == null || a.reset(), (o = this.conversations) == null || o.reset(), (s = this.persistence) == null || s.set_property(O, ge), (c = this.sessionManager) == null || c.resetSessionId(), this._cachedPersonProperties = null, this.config.cookieless_mode === A) this.register_once({
			distinct_id: fe,
			$device_id: null
		}, "");
		else {
			var d = this.config.get_device_id(Bn());
			this.register_once({
				distinct_id: d,
				$device_id: e ? d : u
			}, "");
		}
		this.register({ $last_posthog_reset: (/* @__PURE__ */ new Date()).toISOString() }, 1), delete this.config.identity_distinct_id, delete this.config.identity_hash, this.reloadFeatureFlags();
	}
	setIdentity(e, t) {
		var n;
		this.config.identity_distinct_id = e, this.config.identity_hash = t, this.alias(e), (n = this.conversations) == null || n._onIdentityChanged();
	}
	clearIdentity() {
		var e;
		delete this.config.identity_distinct_id, delete this.config.identity_hash, (e = this.conversations) == null || e._onIdentityCleared();
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
		var { sessionId: t, sessionStartTimestamp: n } = this.sessionManager.checkAndGetSessionAndWindowId(!0), r = this.requestRouter.endpointFor("ui", "/project/" + this.config.token + "/replay/" + t);
		if (e != null && e.withTimestamp && n) {
			var i = e.timestampLookBack ?? 10;
			if (!n) return r;
			r += "?t=" + Math.max(Math.floor(((/* @__PURE__ */ new Date()).getTime() - n) / 1e3) - i, 0);
		}
		return r;
	}
	alias(e, t) {
		return e === this.get_property(c) ? (U.critical("Attempting to create alias for existing People user - aborting."), -2) : this._requirePersonProcessing("posthog.alias") ? (R(t) && (t = this.get_distinct_id()), e === t ? (U.warn("alias matches current distinct_id - skipping api call."), this.identify(e), -1) : (this._register_single(u, e), this.capture("$create_alias", {
			alias: e,
			distinct_id: t
		}))) : void 0;
	}
	set_config(e) {
		var t = i({}, this.config);
		if (L(e)) {
			var n, r, a, o, c, l, u, d, f;
			K(this.config, sa(e));
			var p = this._is_persistence_disabled();
			(n = this.persistence) == null || n.update_config(this.config, t, p), this.sessionPersistence = this.config.persistence === "sessionStorage" || this.config.persistence === "memory" ? this.persistence : new Er(i({}, this.config, { persistence: "sessionStorage" }), p);
			var m = this._checkLocalStorageForDebug(this.config.debug);
			qe(m) && (this.config.debug = m), qe(this.config.debug) && (this.config.debug ? (s.DEBUG = !0, J._is_supported() && J._set("ph_debug", !0), U.info("set_config", {
				config: e,
				oldConfig: t,
				newConfig: i({}, this.config)
			})) : (s.DEBUG = !1, J._is_supported() && J._remove("ph_debug"))), (r = this.exceptionObserver) == null || r.onConfigChange(), (a = this.sessionRecording) == null || a.startIfEnabledOrStop(), (o = this.autocapture) == null || o.startIfEnabled(), (c = this.heatmaps) == null || c.startIfEnabled(), (l = this.exceptionObserver) == null || l.startIfEnabledOrStop(), (u = this.deadClicksAutocapture) == null || u.startIfEnabledOrStop(), (d = this.surveys) == null || d.loadIfEnabled(), this._sync_opt_out_with_persistence(), (f = this.externalIntegrations) == null || f.startIfEnabledOrStop();
		}
	}
	_overrideSDKInfo(e, t) {
		s.LIB_NAME = e, s.LIB_VERSION = t;
	}
	startSessionRecording(e) {
		var t, n, r, i, a, o = !0 === e, s = {
			sampling: o || !(e == null || !e.sampling),
			linked_flag: o || !(e == null || !e.linked_flag),
			url_trigger: o || !(e == null || !e.url_trigger),
			event_trigger: o || !(e == null || !e.event_trigger)
		};
		Object.values(s).some(Boolean) && ((t = this.sessionManager) == null || t.checkAndGetSessionAndWindowId(), s.sampling && ((n = this.sessionRecording) == null || n.overrideSampling()), s.linked_flag && ((r = this.sessionRecording) == null || r.overrideLinkedFlag()), s.url_trigger && ((i = this.sessionRecording) == null || i.overrideTrigger("url")), s.event_trigger && ((a = this.sessionRecording) == null || a.overrideTrigger("event"))), this.set_config({ disable_session_recording: !1 });
	}
	stopSessionRecording() {
		this.set_config({ disable_session_recording: !0 });
	}
	sessionRecordingStarted() {
		var e;
		return !((e = this.sessionRecording) == null || !e.started);
	}
	captureException(e, t) {
		if (this.exceptions) {
			var n = /* @__PURE__ */ Error("PostHog syntheticException"), r = this.exceptions.buildProperties(e, {
				handled: !0,
				syntheticException: n
			});
			return this.exceptions.sendExceptionEvent(i({}, r, t));
		}
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
		var e = this.config.name ?? ra;
		return e !== ra && (e = ra + "." + e), e;
	}
	_isIdentified() {
		return this.persistence?.get_property(O) === _e || this.sessionPersistence?.get_property(O) === _e;
	}
	_hasPersonProcessing() {
		var e, t;
		return !(this.config.person_profiles === "never" || this.config.person_profiles === ve && !this._isIdentified() && He(this.getGroups()) && ((e = this.persistence) == null || (e = e.props) == null || !e[u]) && ((t = this.persistence) == null || (t = t.props) == null || !t[de]));
	}
	_shouldCapturePageleave() {
		return !0 === this.config.capture_pageleave || this.config.capture_pageleave === "if_capture_pageview" && (!0 === this.config.capture_pageview || this.config.capture_pageview === "history_change");
	}
	createPersonProfile() {
		this._hasPersonProcessing() || this._requirePersonProcessing("posthog.createPersonProfile") && this.setPersonProperties({}, {});
	}
	setInternalOrTestUser() {
		this._requirePersonProcessing("posthog.setInternalOrTestUser") && this.setPersonProperties({ $internal_or_test_user: !0 });
	}
	_requirePersonProcessing(e) {
		return this.config.person_profiles === "never" ? (U.error(e + " was called, but process_person is set to \"never\". This call will be ignored."), !1) : (this._register_single(de, !0), !0);
	}
	_is_persistence_disabled() {
		if (this.config.cookieless_mode === "always") return !0;
		var e = this.consent.isOptedOut();
		return this.config.disable_persistence || e && !(!this.config.opt_out_persistence_by_default && this.config.cookieless_mode !== he);
	}
	_sync_opt_out_with_persistence() {
		var e, t, n = this._is_persistence_disabled();
		return this.persistence?._disabled !== n && ((e = this.persistence) == null || e.set_disabled(n)), this.sessionPersistence?._disabled !== n && ((t = this.sessionPersistence) == null || t.set_disabled(n)), n;
	}
	opt_in_capturing(t) {
		var n;
		if (this.config.cookieless_mode !== A) {
			if (this.config.cookieless_mode === he && this.consent.isExplicitlyOptedOut()) {
				var r, i;
				this.reset(!0), (r = this.sessionManager) == null || r.destroy(), (i = this.pageViewManager) == null || i.destroy(), this.sessionManager = new ji(this), this.pageViewManager = new ar(this), this.persistence && (this.sessionPropsManager = new Oi(this, this.sessionManager, this.persistence));
				var a = this.config.__extensionClasses?.sessionRecording ?? e.__defaultExtensionClasses?.sessionRecording;
				a && (this.sessionRecording = this._replaceExtension(this.sessionRecording, new a(this)));
			}
			var o;
			this.consent.optInOut(!0), this._sync_opt_out_with_persistence(), this._start_queue_if_opted_in(), (n = this.sessionRecording) == null || n.startIfEnabledOrStop(), this.config.cookieless_mode == he && ((o = this.surveys) == null || o.loadIfEnabled()), (R(t?.captureEventName) || t != null && t.captureEventName) && this.capture(t?.captureEventName ?? "$opt_in", t?.captureProperties, { send_instantly: !0 }), this.config.capture_pageview && this._captureInitialPageview();
		} else U.warn(Qi);
	}
	opt_out_capturing() {
		var e, t, n;
		this.config.cookieless_mode === A ? U.warn(Qi) : (this.config.cookieless_mode === he && this.consent.isOptedIn() && this.reset(!0), this.consent.optInOut(!1), this._sync_opt_out_with_persistence(), this.config.cookieless_mode === he && (this.register({
			distinct_id: fe,
			$device_id: null
		}), (e = this.sessionManager) == null || e.destroy(), (t = this.pageViewManager) == null || t.destroy(), this.sessionManager = void 0, this.sessionPropsManager = void 0, (n = this.sessionRecording) == null || n.stopRecording(), this.sessionRecording = void 0, this._captureInitialPageview()));
	}
	has_opted_in_capturing() {
		return this.consent.isOptedIn();
	}
	has_opted_out_capturing() {
		return this.consent.isOptedOut();
	}
	get_explicit_consent_status() {
		var e = this.consent.consent;
		return e === 1 ? "granted" : e === 0 ? "denied" : "pending";
	}
	is_capturing() {
		return this.config.cookieless_mode === A || (this.config.cookieless_mode === he ? this.consent.isExplicitlyOptedOut() || this.consent.isOptedIn() : !this.has_opted_out_capturing());
	}
	clear_opt_in_out_capturing() {
		this.consent.reset(), this._sync_opt_out_with_persistence();
	}
	_is_bot() {
		return Te ? Mi(Te, this.config.custom_blocked_useragents) : void 0;
	}
	_captureInitialPageview() {
		N && (N.visibilityState === "visible" ? this._initialPageviewCaptured || (this._initialPageviewCaptured = !0, this.capture(xe, { title: N.title }, { send_instantly: !0 }), this._visibilityStateListener &&= (N.removeEventListener(ye, this._visibilityStateListener), null)) : this._visibilityStateListener || (this._visibilityStateListener = this._captureInitialPageview.bind(this), q(N, ye, this._visibilityStateListener)));
	}
	debug(e) {
		!1 === e ? (j?.console.log("You've disabled debug mode."), this.set_config({ debug: !1 })) : (j?.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), this.set_config({ debug: !0 }));
	}
	_shouldDisableFlags() {
		var e, t, n, r, i, a, o = this._originalUserConfig || {};
		return "advanced_disable_flags" in o ? !!o.advanced_disable_flags : !1 === this.config.advanced_disable_flags ? !0 === this.config.advanced_disable_decide ? (U.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."), !0) : (n = "advanced_disable_decide", r = U, i = (t = "advanced_disable_flags") in (e = o) && !B(e[t]), a = n in e && !B(e[n]), i ? e[t] : !!a && (r && r.warn("Config field '" + n + "' is deprecated. Please use '" + t + "' instead. The old field will be removed in a future major version."), e[n])) : !!this.config.advanced_disable_flags;
	}
	_runBeforeSend(e) {
		if (B(this.config.before_send)) return e;
		var t = I(this.config.before_send) ? this.config.before_send : [this.config.before_send], n = e;
		for (var r of t) {
			if (n = r(n), B(n)) {
				var i = "Event '" + e.event + "' was rejected in beforeSend function";
				return Ye(e.event) ? U.warn(i + ". This can cause unexpected behavior.") : U.info(i), null;
			}
			n.properties && !He(n.properties) || U.warn("Event '" + e.event + "' has no properties after beforeSend function, this is likely an error.");
		}
		return n;
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
		var t = qe(e) && !e, n = J._is_supported() && J._get("ph_debug") === "true";
		return !t && (!!n || e);
	}
};
function ua(e) {
	return e instanceof Element && (e.id === k || !(e.closest == null || !e.closest(".toolbar-global-fade-container")));
}
function da(e) {
	return !!e && e.nodeType === 1;
}
function fa(e, t) {
	return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase();
}
function pa(e) {
	return !!e && e.nodeType === 3;
}
function ma(e) {
	return !!e && e.nodeType === 11;
}
function ha(e) {
	return e ? Ie(e).split(/\s+/) : [];
}
function ga(e) {
	var t = j?.location.href;
	return !!(t && e && e.some(((e) => t.match(e))));
}
function _a(e) {
	var t = "";
	switch (typeof e.className) {
		case "string":
			t = e.className;
			break;
		case "object":
			t = (e.className && "baseVal" in e.className ? e.className.baseVal : null) || e.getAttribute("class") || "";
			break;
		default: t = "";
	}
	return ha(t);
}
function va(e) {
	return B(e) ? null : Ie(e).split(/(\s+)/).filter(((e) => Ia(e))).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255);
}
function ya(e) {
	var t = "";
	return Oa(e) && !ka(e) && e.childNodes && e.childNodes.length && G(e.childNodes, (function(e) {
		pa(e) && e.textContent && (t += va(e.textContent) ?? "");
	})), Ie(t);
}
function ba(e) {
	return R(e.target) ? e.srcElement || null : (t = e.target) != null && t.shadowRoot ? e.composedPath()[0] || null : e.target || null;
	var t;
}
la.__defaultExtensionClasses = {}, function(e, t) {
	for (var n = 0; t.length > n; n++) e.prototype[t[n]] = An(e.prototype[t[n]]);
}(la, ["identify"]);
var xa = [
	"a",
	"button",
	"form",
	"input",
	"select",
	"textarea",
	"label"
];
function Sa(e, t) {
	if (R(t)) return !0;
	var n, r = function(e) {
		if (t.some(((t) => e.matches(t)))) return { v: !0 };
	};
	for (var i of e) if (n = r(i)) return n.v;
	return !1;
}
function Ca(e) {
	var t = e.parentNode;
	return !(!t || !da(t)) && t;
}
var wa = [
	"next",
	"previous",
	"prev",
	">",
	"<"
], Ta = [".ph-no-rageclick", ".ph-no-capture"], Ea = (e) => !e || fa(e, "html") || !da(e), Da = (e, t) => {
	if (!j || Ea(e)) return {
		parentIsUsefulElement: !1,
		targetElementList: []
	};
	for (var n = !1, r = [e], i = e; i.parentNode && !fa(i, "body");) if (ma(i.parentNode)) r.push(i.parentNode.host), i = i.parentNode.host;
	else {
		var a = Ca(i);
		if (!a) break;
		if (t || xa.indexOf(a.tagName.toLowerCase()) > -1) n = !0;
		else {
			var o = j.getComputedStyle(a);
			o && o.getPropertyValue("cursor") === "pointer" && (n = !0);
		}
		r.push(a), i = a;
	}
	return {
		parentIsUsefulElement: n,
		targetElementList: r
	};
};
function Oa(e) {
	for (var t = e; t.parentNode && !fa(t, "body"); t = t.parentNode) {
		var n = _a(t);
		if (F(n, "ph-sensitive") || F(n, "ph-no-capture")) return !1;
	}
	if (F(_a(e), "ph-include")) return !0;
	var r = e.type || "";
	if (z(r)) switch (r.toLowerCase()) {
		case "hidden":
		case "password": return !1;
	}
	var i = e.name || e.id || "";
	return !z(i) || !/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(i.replace(/[^a-zA-Z0-9]/g, ""));
}
function ka(e) {
	return !!(fa(e, "input") && ![
		"button",
		"checkbox",
		"submit",
		"reset"
	].includes(e.type) || fa(e, "select") || fa(e, "textarea") || e.getAttribute("contenteditable") === "true");
}
var Aa = "(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})", ja = RegExp("^(?:" + Aa + ")$"), Ma = new RegExp(Aa), Na = "\\d{3}-?\\d{2}-?\\d{4}", Pa = RegExp("^(" + Na + ")$"), Fa = RegExp("(" + Na + ")");
function Ia(e, t) {
	return t === void 0 && (t = !0), !(B(e) || z(e) && (e = Ie(e), (t ? ja : Ma).test((e || "").replace(/[- ]/g, "")) || (t ? Pa : Fa).test(e)));
}
function La(e) {
	var t = ya(e);
	return Ia(t = (t + " " + Ra(e)).trim()) ? t : "";
}
function Ra(e) {
	var t = "";
	return e && e.childNodes && e.childNodes.length && G(e.childNodes, (function(e) {
		if (e && e.tagName?.toLowerCase() === "span") try {
			var n = ya(e);
			t = (t + " " + n).trim(), e.childNodes && e.childNodes.length && (t = (t + " " + Ra(e)).trim());
		} catch (e) {
			U.error("[AutoCapture]", e);
		}
	})), t;
}
function za(e) {
	return e.replace(/"|\\"/g, "\\\"");
}
function Ba(e) {
	var t = e.attr__class;
	return t ? I(t) ? t : ha(t) : void 0;
}
var Va = class {
	constructor(e) {
		this.disabled = !1 === e;
		var t = L(e) ? e : {};
		this.thresholdPx = t.threshold_px || 30, this.timeoutMs = t.timeout_ms || 1e3, this.clickCount = t.click_count || 3, this.clicks = [];
	}
	isRageClick(e, t, n) {
		if (this.disabled) return !1;
		var r = this.clicks[this.clicks.length - 1];
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
}, Ha = "$copy_autocapture", Ua = W("[AutoCapture]");
function Wa(e, t) {
	return t.length > e ? t.slice(0, e) + "..." : t;
}
function Ga(e) {
	if (e.previousElementSibling) return e.previousElementSibling;
	var t = e;
	do
		t = t.previousSibling;
	while (t && !da(t));
	return t;
}
function Ka(e, t) {
	for (var n, { e: r, maskAllElementAttributes: a, maskAllText: o, elementAttributeIgnoreList: s, elementsChainAsString: c } = t, l = [e], u = e; u.parentNode && !fa(u, "body");) ma(u.parentNode) ? (l.push(u.parentNode.host), u = u.parentNode.host) : (l.push(u.parentNode), u = u.parentNode);
	var d, f, p = [], m = {}, h = !1, g = !1;
	if (G(l, ((e) => {
		var t = Oa(e);
		e.tagName.toLowerCase() === "a" && (h = e.getAttribute("href"), h = t && h && Ia(h) && h), F(_a(e), "ph-no-capture") && (g = !0), p.push(function(e, t, n, r) {
			var i = e.tagName.toLowerCase(), a = { tag_name: i };
			xa.indexOf(i) > -1 && !n && (a.$el_text = i.toLowerCase() === "a" || i.toLowerCase() === "button" ? Wa(1024, La(e)) : Wa(1024, ya(e)));
			var o = _a(e);
			o.length > 0 && (a.classes = o.filter((function(e) {
				return e !== "";
			}))), G(e.attributes, (function(n) {
				var i;
				if ((!ka(e) || [
					"name",
					"id",
					"class",
					"aria-label"
				].indexOf(n.name) !== -1) && (r == null || !r.includes(n.name)) && !t && Ia(n.value) && (!z(i = n.name) || i.substring(0, 10) !== "_ngcontent" && i.substring(0, 7) !== "_nghost")) {
					var o = n.value;
					n.name === "class" && (o = ha(o).join(" ")), a["attr__" + n.name] = Wa(1024, o);
				}
			}));
			for (var s = 1, c = 1, l = e; l = Ga(l);) s++, l.tagName === e.tagName && c++;
			return a.nth_child = s, a.nth_of_type = c, a;
		}(e, a, o, s)), K(m, function(e) {
			if (!Oa(e)) return {};
			var t = {};
			return G(e.attributes, (function(e) {
				if (e.name && e.name.indexOf("data-ph-capture-attribute") === 0) {
					var n = e.name.replace("data-ph-capture-attribute-", ""), r = e.value;
					n && r && Ia(r) && (t[n] = r);
				}
			})), t;
		}(e));
	})), g) return {
		props: {},
		explicitNoCapture: g
	};
	if (o || (p[0].$el_text = e.tagName.toLowerCase() === "a" || e.tagName.toLowerCase() === "button" ? La(e) : ya(e)), h) {
		var _;
		p[0].attr__href = h;
		var v = or(h)?.host, y = j == null || (_ = j.location) == null ? void 0 : _.host;
		v && y && v !== y && (d = h);
	}
	return { props: K({
		$event_type: r.type,
		$ce_version: 1
	}, c ? {} : { $elements: p }, { $elements_chain: (f = p, function(e) {
		return e.map(((e) => {
			var t = "";
			if (e.tag_name && (t += e.tag_name), e.attr_class) for (var n of (e.attr_class.sort(), e.attr_class)) t += "." + n.replace(/"/g, "");
			var r = i({}, e.text ? { text: e.text } : {}, {
				"nth-child": e.nth_child ?? 0,
				"nth-of-type": e.nth_of_type ?? 0
			}, e.href ? { href: e.href } : {}, e.attr_id ? { attr_id: e.attr_id } : {}, e.attributes), a = {};
			return On(r).sort(((e, t) => {
				var [n] = e, [r] = t;
				return n.localeCompare(r);
			})).forEach(((e) => {
				var [t, n] = e;
				return a[za(t.toString())] = za(n.toString());
			})), (t += ":") + On(a).map(((e) => {
				var [t, n] = e;
				return t + "=\"" + n + "\"";
			})).join("");
		})).join(";");
	}(function(e) {
		return e.map(((e) => {
			var t = {
				text: e.$el_text?.slice(0, 400),
				tag_name: e.tag_name,
				href: e.attr__href?.slice(0, 2048),
				attr_class: Ba(e),
				attr_id: e.attr__id,
				nth_child: e.nth_child,
				nth_of_type: e.nth_of_type,
				attributes: {}
			};
			return On(e).filter(((e) => {
				var [t] = e;
				return t.indexOf("attr__") === 0;
			})).forEach(((e) => {
				var [n, r] = e;
				return t.attributes[n] = r;
			})), t;
		}));
	}(f))) }, (n = p[0]) != null && n.$el_text ? { $el_text: p[0]?.$el_text } : {}, d && r.type === "click" ? { $external_click_url: d } : {}, m) };
}
var qa = W("[ExceptionAutocapture]");
function Ja(e, t, n) {
	try {
		if (!(t in e)) return () => {};
		var r = e[t], i = n(r);
		return Ve(i) && (i.prototype = i.prototype || {}, Object.defineProperties(i, { __posthog_wrapped__: {
			enumerable: !1,
			value: !0
		} })), e[t] = i, () => {
			e[t] = r;
		};
	} catch {
		return () => {};
	}
}
var Ya = W("[TracingHeaders]"), Xa = W("[Web Vitals]"), Za = 9e5, Qa = "disabled", $a = "lazy_loading", eo = "awaiting_config", to = "missing_config";
W("[SessionRecording]");
var no = "[SessionRecording]", ro = W(no), io = W("[Heatmaps]");
function ao(e) {
	return L(e) && "clientX" in e && "clientY" in e && Ge(e.clientX) && Ge(e.clientY);
}
var oo = W("[Product Tours]"), so = "ph_product_tours", co = ["$set_once", "$set"], lo = W("[SiteApps]"), uo = "Error while initializing PostHog app with config id ";
function fo(e, t, n) {
	if (B(e)) return !1;
	switch (n) {
		case "exact": return e === t;
		case "contains":
			var r = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/_/g, ".").replace(/%/g, ".*");
			return new RegExp(r, "i").test(e);
		case "regex": try {
			return new RegExp(t).test(e);
		} catch {
			return !1;
		}
		default: return !1;
	}
}
var po = class {
	constructor(e) {
		this._debugEventEmitter = new ki(), this._checkStep = (e, t) => this._checkStepEvent(e, t) && this._checkStepUrl(e, t) && this._checkStepElement(e, t) && this._checkStepProperties(e, t), this._checkStepEvent = (e, t) => t == null || !t.event || e?.event === t?.event, this._instance = e, this._actionEvents = /* @__PURE__ */ new Set(), this._actionRegistry = /* @__PURE__ */ new Set();
	}
	init() {
		var e;
		R(this._instance?._addCaptureHook) || (e = this._instance) == null || e._addCaptureHook(((e, t) => {
			this.on(e, t);
		}));
	}
	register(e) {
		var t;
		if (!R(this._instance?._addCaptureHook) && (e.forEach(((e) => {
			var t, n;
			(t = this._actionRegistry) == null || t.add(e), (n = e.steps) == null || n.forEach(((e) => {
				var t;
				(t = this._actionEvents) == null || t.add(e?.event || "");
			}));
		})), (t = this._instance) != null && t.autocapture)) {
			var n, r = /* @__PURE__ */ new Set();
			e.forEach(((e) => {
				var t;
				(t = e.steps) == null || t.forEach(((e) => {
					e != null && e.selector && r.add(e?.selector);
				}));
			})), (n = this._instance) == null || n.autocapture.setElementSelectors(r);
		}
	}
	on(e, t) {
		t != null && e.length != 0 && (this._actionEvents.has(e) || this._actionEvents.has(t?.event)) && this._actionRegistry && this._actionRegistry?.size > 0 && this._actionRegistry.forEach(((e) => {
			this._checkAction(t, e) && this._debugEventEmitter.emit("actionCaptured", e.name);
		}));
	}
	_addActionHook(e) {
		this.onAction("actionCaptured", ((t) => e(t)));
	}
	_checkAction(e, t) {
		if (t?.steps == null) return !1;
		for (var n of t.steps) if (this._checkStep(e, n)) return !0;
		return !1;
	}
	onAction(e, t) {
		return this._debugEventEmitter.on(e, t);
	}
	_checkStepUrl(e, t) {
		if (t != null && t.url) {
			var n, r = e == null || (n = e.properties) == null ? void 0 : n.$current_url;
			if (!r || typeof r != "string" || !fo(r, t.url, t.url_matching || "contains")) return !1;
		}
		return !0;
	}
	_checkStepElement(e, t) {
		return !!this._checkStepHref(e, t) && !!this._checkStepText(e, t) && !!this._checkStepSelector(e, t);
	}
	_checkStepHref(e, t) {
		var n;
		if (t == null || !t.href) return !0;
		var r = this._getElementsList(e);
		if (r.length > 0) return r.some(((e) => fo(e.href, t.href, t.href_matching || "exact")));
		var i, a = (e == null || (n = e.properties) == null ? void 0 : n.$elements_chain) || "";
		return !!a && fo((i = a.match(/(?::|")href="(.*?)"/)) ? i[1] : "", t.href, t.href_matching || "exact");
	}
	_checkStepText(e, t) {
		var n;
		if (t == null || !t.text) return !0;
		var r = this._getElementsList(e);
		if (r.length > 0) return r.some(((e) => fo(e.text, t.text, t.text_matching || "exact") || fo(e.$el_text, t.text, t.text_matching || "exact")));
		var i, a, o, s = (e == null || (n = e.properties) == null ? void 0 : n.$elements_chain) || "";
		return !!s && (i = function(e) {
			for (var t, n = [], r = /(?::|")text="(.*?)"/g; !B(t = r.exec(e));) n.includes(t[1]) || n.push(t[1]);
			return n;
		}(s), a = t.text, o = t.text_matching || "exact", i.some(((e) => fo(e, a, o))));
	}
	_checkStepSelector(e, t) {
		var n, r;
		if (t == null || !t.selector) return !0;
		var i = e == null || (n = e.properties) == null ? void 0 : n.$element_selectors;
		if (i != null && i.includes(t.selector)) return !0;
		var a = (e == null || (r = e.properties) == null ? void 0 : r.$elements_chain) || "";
		if (t.selector_regex && a) try {
			return new RegExp(t.selector_regex).test(a);
		} catch {
			return !1;
		}
		return !1;
	}
	_getElementsList(e) {
		var t;
		return (e == null || (t = e.properties) == null ? void 0 : t.$elements) == null ? [] : e?.properties.$elements;
	}
	_checkStepProperties(e, t) {
		return t == null || !t.properties || t.properties.length === 0 || Li(t.properties.reduce(((e, t) => {
			var n = I(t.value) ? t.value.map(String) : t.value == null ? [] : [String(t.value)];
			return e[t.key] = {
				values: n,
				operator: t.operator || "exact"
			}, e;
		}), {}), e?.properties);
	}
}, mo = class {
	constructor(e) {
		this._instance = e, this._eventToItems = /* @__PURE__ */ new Map(), this._cancelEventToItems = /* @__PURE__ */ new Map(), this._actionToItems = /* @__PURE__ */ new Map();
	}
	_doesEventMatchFilter(e, t) {
		return !!e && Li(e.propertyFilters, t?.properties);
	}
	_buildEventToItemMap(e, t) {
		var n = /* @__PURE__ */ new Map();
		return e.forEach(((e) => {
			var r;
			(r = e.conditions) == null || (r = r[t]) == null || (r = r.values) == null || r.forEach(((t) => {
				if (t != null && t.name) {
					var r = n.get(t.name) || [];
					r.push(e.id), n.set(t.name, r);
				}
			}));
		})), n;
	}
	_getMatchingItems(e, t, n) {
		var r = (n === Dr.Activation ? this._eventToItems : this._cancelEventToItems).get(e), i = [];
		return this._getItems(((e) => {
			i = e.filter(((e) => r?.includes(e.id)));
		})), i.filter(((r) => {
			var i, a = (i = r.conditions) == null || (i = i[n]) == null || (i = i.values) == null ? void 0 : i.find(((t) => t.name === e));
			return this._doesEventMatchFilter(a, t);
		}));
	}
	register(e) {
		R(this._instance?._addCaptureHook) || (this._setupEventBasedItems(e), this._setupActionBasedItems(e));
	}
	_setupActionBasedItems(e) {
		var t = e.filter(((e) => {
			var t;
			return e.conditions?.actions && ((t = e.conditions) == null || (t = t.actions) == null || (t = t.values) == null ? void 0 : t.length) > 0;
		}));
		t.length !== 0 && (this._actionMatcher ?? (this._actionMatcher = new po(this._instance), this._actionMatcher.init(), this._actionMatcher._addActionHook(((e) => {
			this.onAction(e);
		}))), t.forEach(((e) => {
			var t, n, r, i, a;
			e.conditions && (t = e.conditions) != null && t.actions && (n = e.conditions) != null && (n = n.actions) != null && n.values && ((r = e.conditions) == null || (r = r.actions) == null || (r = r.values) == null ? void 0 : r.length) > 0 && ((i = this._actionMatcher) == null || i.register(e.conditions.actions.values), (a = e.conditions) == null || (a = a.actions) == null || (a = a.values) == null || a.forEach(((t) => {
				if (t && t.name) {
					var n = this._actionToItems.get(t.name);
					n && n.push(e.id), this._actionToItems.set(t.name, n || [e.id]);
				}
			})));
		})));
	}
	_setupEventBasedItems(e) {
		var t, n = e.filter(((e) => {
			var t;
			return e.conditions?.events && ((t = e.conditions) == null || (t = t.events) == null || (t = t.values) == null ? void 0 : t.length) > 0;
		})), r = e.filter(((e) => {
			var t;
			return e.conditions?.cancelEvents && ((t = e.conditions) == null || (t = t.cancelEvents) == null || (t = t.values) == null ? void 0 : t.length) > 0;
		}));
		n.length === 0 && r.length === 0 || ((t = this._instance) == null || t._addCaptureHook(((e, t) => {
			this.onEvent(e, t);
		})), this._eventToItems = this._buildEventToItemMap(e, Dr.Activation), this._cancelEventToItems = this._buildEventToItemMap(e, Dr.Cancellation));
	}
	onEvent(e, t) {
		var n, r = this._getLogger(), i = this._getActivatedKey(), a = this._getShownEventName(), o = ((n = this._instance) == null || (n = n.persistence) == null ? void 0 : n.props[i]) || [];
		if (a === e && t && o.length > 0) {
			var s, c;
			r.info("event matched, removing item from activated items", {
				event: e,
				eventPayload: t,
				existingActivatedItems: o
			});
			var l = (t == null || (s = t.properties) == null ? void 0 : s.$survey_id) || (t == null || (c = t.properties) == null ? void 0 : c.$product_tour_id);
			if (l) {
				var u = o.indexOf(l);
				0 > u || (o.splice(u, 1), this._updateActivatedItems(o));
			}
		} else {
			if (this._cancelEventToItems.has(e)) {
				var d = this._getMatchingItems(e, t, Dr.Cancellation);
				d.length > 0 && (r.info("cancel event matched, cancelling items", {
					event: e,
					itemsToCancel: d.map(((e) => e.id))
				}), d.forEach(((e) => {
					var t = o.indexOf(e.id);
					0 > t || o.splice(t, 1), this._cancelPendingItem(e.id);
				})), this._updateActivatedItems(o));
			}
			if (this._eventToItems.has(e)) {
				r.info("event name matched", {
					event: e,
					eventPayload: t,
					items: this._eventToItems.get(e)
				});
				var f = this._getMatchingItems(e, t, Dr.Activation);
				this._updateActivatedItems(o.concat(f.map(((e) => e.id)) || []));
			}
		}
	}
	onAction(e) {
		var t, n = this._getActivatedKey(), r = ((t = this._instance) == null || (t = t.persistence) == null ? void 0 : t.props[n]) || [];
		this._actionToItems.has(e) && this._updateActivatedItems(r.concat(this._actionToItems.get(e) || []));
	}
	_updateActivatedItems(e) {
		var t, n = this._getLogger(), r = this._getActivatedKey(), i = [...new Set(e)].filter(((e) => !this._isItemPermanentlyIneligible(e)));
		n.info("updating activated items", { activatedItems: i }), (t = this._instance) == null || (t = t.persistence) == null || t.register({ [r]: i });
	}
	getActivatedIds() {
		var e, t = this._getActivatedKey();
		return ((e = this._instance) == null || (e = e.persistence) == null ? void 0 : e.props[t]) || [];
	}
	getEventToItemsMap() {
		return this._eventToItems;
	}
	_getActionMatcher() {
		return this._actionMatcher;
	}
}, ho = class extends mo {
	constructor(e) {
		super(e);
	}
	_getActivatedKey() {
		return "$surveys_activated";
	}
	_getShownEventName() {
		return kr.SHOWN;
	}
	_getItems(e) {
		var t;
		(t = this._instance) == null || t.getSurveys(e);
	}
	_cancelPendingItem(e) {
		var t;
		(t = this._instance) == null || t.cancelPendingSurvey(e);
	}
	_getLogger() {
		return Q;
	}
	_isItemPermanentlyIneligible() {
		return !1;
	}
	getSurveys() {
		return this.getActivatedIds();
	}
	getEventToSurveys() {
		return this.getEventToItemsMap();
	}
}, go = "SDK is not enabled or survey functionality is not yet loaded", _o = "Disabled. Not loading surveys.", vo = j != null && j.location ? lr(j.location.hash, "__posthog") || lr(location.hash, "state") : null, yo = "_postHogToolbarParams", bo = W("[Toolbar]"), $ = W("[FeatureFlags]"), xo = W("[FeatureFlags]", { debugEnabled: !0 }), So = "\" failed. Feature flags didn't load in time.", Co = "$active_feature_flags", wo = "$override_feature_flags", To = "$feature_flag_payloads", Eo = "$override_feature_flag_payloads", Do = "$feature_flag_request_id", Oo = (e) => {
	for (var t = {}, n = 0; e.length > n; n++) t[e[n]] = !0;
	return t;
}, ko = (e) => {
	var t = {};
	for (var [n, r] of On(e || {})) r && (t[n] = r);
	return t;
}, Ao = W("[Error tracking]"), jo = "Refusing to render web experiment since the viewer is a likely bot", Mo = {
	icontains: (e, t) => !!j && t.href.toLowerCase().indexOf(e.toLowerCase()) > -1,
	not_icontains: (e, t) => !!j && t.href.toLowerCase().indexOf(e.toLowerCase()) === -1,
	regex: (e, t) => !!j && Ni(t.href, e),
	not_regex: (e, t) => !!j && !Ni(t.href, e),
	exact: (e, t) => t.href === e,
	is_not: (e, t) => t.href !== e
}, No = class e {
	get _config() {
		return this._instance.config;
	}
	constructor(t) {
		var n = this;
		this.getWebExperimentsAndEvaluateDisplayLogic = function(t) {
			t === void 0 && (t = !1), n.getWebExperiments(((t) => {
				e._logInfo("retrieved web experiments from the server"), n._flagToExperiments = /* @__PURE__ */ new Map(), t.forEach(((t) => {
					if (t.feature_flag_key) {
						var r;
						n._flagToExperiments && (e._logInfo("setting flag key ", t.feature_flag_key, " to web experiment ", t), (r = n._flagToExperiments) == null || r.set(t.feature_flag_key, t));
						var i = n._instance.getFeatureFlag(t.feature_flag_key);
						z(i) && t.variants[i] && n._applyTransforms(t.name, i, t.variants[i].transforms);
					} else if (t.variants) for (var a in t.variants) {
						var o = t.variants[a];
						e._matchesTestVariant(o) && n._applyTransforms(t.name, a, o.transforms);
					}
				}));
			}), t);
		}, this._instance = t, this._instance.onFeatureFlags(((e) => {
			this.onFeatureFlags(e);
		}));
	}
	initialize() {}
	onFeatureFlags(t) {
		if (this._is_bot()) e._logInfo(jo);
		else if (!this._config.disable_web_experiments) {
			if (B(this._flagToExperiments)) return this._flagToExperiments = /* @__PURE__ */ new Map(), this.loadIfEnabled(), void this.previewWebExperiment();
			e._logInfo("applying feature flags", t), t.forEach(((e) => {
				var t;
				if (this._flagToExperiments && (t = this._flagToExperiments) != null && t.has(e)) {
					var n = this._instance.getFeatureFlag(e), r = this._flagToExperiments?.get(e);
					n && r != null && r.variants[n] && this._applyTransforms(r.name, n, r.variants[n].transforms);
				}
			}));
		}
	}
	previewWebExperiment() {
		var t = e.getWindowLocation();
		if (t != null && t.search) {
			var n = sr(t?.search, "__experiment_id"), r = sr(t?.search, "__experiment_variant");
			n && r && (e._logInfo("previewing web experiments " + n + " && " + r), this.getWebExperiments(((e) => {
				this._showPreviewWebExperiment(parseInt(n), r, e);
			}), !1, !0));
		}
	}
	loadIfEnabled() {
		this._config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic();
	}
	getWebExperiments(e, t, n) {
		if (this._config.disable_web_experiments && !n) return e([]);
		var r = this._instance.get_property("$web_experiments");
		if (r && !t) return e(r);
		this._instance._send_request({
			url: this._instance.requestRouter.endpointFor("api", "/api/web_experiments/?token=" + this._config.token),
			method: "GET",
			callback: (t) => e(t.statusCode === 200 && t.json && t.json.experiments || [])
		});
	}
	_showPreviewWebExperiment(t, n, r) {
		var i = r.filter(((e) => e.id === t));
		i && i.length > 0 && (e._logInfo("Previewing web experiment [" + i[0].name + "] with variant [" + n + "]"), this._applyTransforms(i[0].name, n, i[0].variants[n].transforms));
	}
	static _matchesTestVariant(t) {
		return !B(t.conditions) && e._matchUrlConditions(t) && e._matchUTMConditions(t);
	}
	static _matchUrlConditions(t) {
		if (B(t.conditions) || B(t.conditions?.url)) return !0;
		var n, r = e.getWindowLocation();
		return !!r && ((n = t.conditions) == null || !n.url || Mo[t.conditions?.urlMatchType ?? "icontains"](t.conditions.url, r));
	}
	static getWindowLocation() {
		return j?.location;
	}
	static _matchUTMConditions(e) {
		if (B(e.conditions) || B(e.conditions?.utm)) return !0;
		var t = hr();
		if (t.utm_source) {
			var n, r, i, a, o, s, c, l, u = (n = e.conditions) == null || (n = n.utm) == null || !n.utm_campaign || ((r = e.conditions) == null || (r = r.utm) == null ? void 0 : r.utm_campaign) == t.utm_campaign, d = (i = e.conditions) == null || (i = i.utm) == null || !i.utm_source || ((a = e.conditions) == null || (a = a.utm) == null ? void 0 : a.utm_source) == t.utm_source, f = (o = e.conditions) == null || (o = o.utm) == null || !o.utm_medium || ((s = e.conditions) == null || (s = s.utm) == null ? void 0 : s.utm_medium) == t.utm_medium, p = (c = e.conditions) == null || (c = c.utm) == null || !c.utm_term || ((l = e.conditions) == null || (l = l.utm) == null ? void 0 : l.utm_term) == t.utm_term;
			return u && f && p && d;
		}
		return !1;
	}
	static _logInfo(e) {
		for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
		U.info("[WebExperiments] " + e, n);
	}
	_applyTransforms(t, n, r) {
		this._is_bot() ? e._logInfo(jo) : n === "control" ? e._logInfo("Control variants leave the page unmodified.") : r.forEach(((r) => {
			r.selector && (e._logInfo("applying transform of variant " + n + " for experiment " + t + " ", r), (document?.querySelectorAll(r.selector))?.forEach(((e) => {
				var t = e;
				r.html && (t.innerHTML = r.html), r.css && t.setAttribute("style", r.css);
			})));
		}));
	}
	_is_bot() {
		return Te && this._instance ? Mi(Te, this._config.custom_blocked_useragents) : void 0;
	}
}, Po = W("[Conversations]"), Fo = "Conversations not available yet.", Io = { featureFlags: class {
	constructor(e) {
		this._override_warning = !1, this._hasLoadedFlags = !1, this._requestInFlight = !1, this._reloadingDisabled = !1, this._additionalReloadRequested = !1, this._flagsLoadedFromRemote = !1, this._hasLoggedDeprecationWarning = !1, this._staleCacheRefreshTriggered = !1, this._instance = e, this.featureFlagEventHandlers = [];
	}
	get _config() {
		return this._instance.config;
	}
	get _persistence() {
		return this._instance.persistence;
	}
	_prop(e) {
		return this._instance.get_property(e);
	}
	_isCacheStale() {
		var e;
		return (e = this._persistence?._isFeatureFlagCacheStale(this._config.feature_flag_cache_ttl_ms)) != null && e;
	}
	_checkAndTriggerStaleRefresh() {
		return !!this._isCacheStale() && (this._staleCacheRefreshTriggered || this._requestInFlight || (this._staleCacheRefreshTriggered = !0, $.warn("Feature flag cache is stale, triggering refresh..."), this.reloadFeatureFlags()), !0);
	}
	_getValidEvaluationEnvironments() {
		var e = this._config.evaluation_contexts ?? this._config.evaluation_environments;
		return !this._config.evaluation_environments || this._config.evaluation_contexts || this._hasLoggedDeprecationWarning || ($.warn("evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version."), this._hasLoggedDeprecationWarning = !0), e != null && e.length ? e.filter(((e) => {
			var t = e && typeof e == "string" && e.trim().length > 0;
			return t || $.error("Invalid evaluation context found:", e, "Expected non-empty string"), t;
		})) : [];
	}
	_shouldIncludeEvaluationEnvironments() {
		return this._getValidEvaluationEnvironments().length > 0;
	}
	initialize() {
		var { config: e } = this._instance, t = e.bootstrap?.featureFlags ?? {};
		if (Object.keys(t).length) {
			var n = e.bootstrap?.featureFlagPayloads ?? {}, r = Object.keys(t).filter(((e) => !!t[e])).reduce(((e, n) => (e[n] = t[n] || !1, e)), {}), i = Object.keys(n).filter(((e) => r[e])).reduce(((e, t) => (n[t] && (e[t] = n[t]), e)), {});
			this.receivedFeatureFlags({
				featureFlags: r,
				featureFlagPayloads: i
			});
		}
	}
	updateFlags(e, t, n) {
		var r = n != null && n.merge ? this.getFlagVariants() : {}, a = n != null && n.merge ? this.getFlagPayloads() : {}, o = i({}, r, e), s = i({}, a, t), c = {};
		for (var [l, u] of Object.entries(o)) {
			var d = typeof u == "string";
			c[l] = {
				key: l,
				enabled: !!d || !!u,
				variant: d ? u : void 0,
				reason: void 0,
				metadata: R(s?.[l]) ? void 0 : {
					id: 0,
					version: void 0,
					description: void 0,
					payload: s[l]
				}
			};
		}
		this.receivedFeatureFlags({ flags: c });
	}
	get hasLoadedFlags() {
		return this._hasLoadedFlags;
	}
	getFlags() {
		return Object.keys(this.getFlagVariants());
	}
	getFlagsWithDetails() {
		var e = this._prop(w), t = this._prop(wo), n = this._prop(Eo);
		if (!n && !t) return e || {};
		var r = K({}, e || {});
		for (var a of [...new Set([...Object.keys(n || {}), ...Object.keys(t || {})])]) {
			var o, s, c = r[a], l = t?.[a], u = R(l) ? (o = c?.enabled) != null && o : !!l, d = R(l) ? c.variant : typeof l == "string" ? l : void 0, f = n?.[a], p = i({}, c, {
				enabled: u,
				variant: u ? d ?? c?.variant : void 0
			});
			u !== c?.enabled && (p.original_enabled = c?.enabled), d !== c?.variant && (p.original_variant = c?.variant), f && (p.metadata = i({}, c?.metadata, {
				payload: f,
				original_payload: c == null || (s = c.metadata) == null ? void 0 : s.payload
			})), r[a] = p;
		}
		return this._override_warning ||= ($.warn(" Overriding feature flag details!", {
			flagDetails: e,
			overriddenPayloads: n,
			finalDetails: r
		}), !0), r;
	}
	getFlagVariants() {
		var e = this._prop(S), t = this._prop(wo);
		if (!t) return e || {};
		for (var n = K({}, e), r = Object.keys(t), i = 0; r.length > i; i++) n[r[i]] = t[r[i]];
		return this._override_warning ||= ($.warn(" Overriding feature flags!", {
			enabledFlags: e,
			overriddenFlags: t,
			finalFlags: n
		}), !0), n;
	}
	getFlagPayloads() {
		var e = this._prop(To), t = this._prop(Eo);
		if (!t) return e || {};
		for (var n = K({}, e || {}), r = Object.keys(t), i = 0; r.length > i; i++) n[r[i]] = t[r[i]];
		return this._override_warning ||= ($.warn(" Overriding feature flag payloads!", {
			flagPayloads: e,
			overriddenPayloads: t,
			finalPayloads: n
		}), !0), n;
	}
	reloadFeatureFlags() {
		this._reloadingDisabled || this._config.advanced_disable_feature_flags || this._reloadDebouncer || (this._instance._internalEventEmitter.emit("featureFlagsReloading", !0), this._reloadDebouncer = setTimeout((() => {
			this._callFlagsEndpoint();
		}), 5));
	}
	_clearDebouncer() {
		clearTimeout(this._reloadDebouncer), this._reloadDebouncer = void 0;
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
	_callFlagsEndpoint(e) {
		if (this._clearDebouncer(), !this._instance._shouldDisableFlags()) if (this._requestInFlight) this._additionalReloadRequested = !0;
		else {
			var t = this._config.token, n = this._prop(l), r = {
				token: t,
				distinct_id: this._instance.get_distinct_id(),
				groups: this._instance.getGroups(),
				$anon_distinct_id: this.$anon_distinct_id,
				person_properties: i({}, this._persistence?.get_initial_props() || {}, this._prop(ne) || {}),
				group_properties: this._prop(T),
				timezone: Cr()
			};
			We(n) || R(n) || (r.$device_id = n), (e != null && e.disableFlags || this._config.advanced_disable_feature_flags) && (r.disable_flags = !0), this._shouldIncludeEvaluationEnvironments() && (r.evaluation_contexts = this._getValidEvaluationEnvironments());
			var a = this._instance.requestRouter.endpointFor("flags", "/flags/?v=2" + (this._config.advanced_only_evaluate_survey_feature_flags ? "&only_evaluate_survey_feature_flags=true" : ""));
			this._requestInFlight = !0, this._instance._send_request({
				method: "POST",
				url: a,
				data: r,
				compression: this._config.disable_compression ? void 0 : Rr.Base64,
				timeout: this._config.feature_flag_request_timeout_ms,
				callback: (e) => {
					var t, n, i, a = !0;
					if (e.statusCode === 200 && (this._additionalReloadRequested || (this.$anon_distinct_id = void 0), a = !1), this._requestInFlight = !1, !r.disable_flags || this._additionalReloadRequested) {
						this._flagsLoadedFromRemote = !a;
						var o = [];
						e.error ? e.error instanceof Error ? o.push(e.error.name === "AbortError" ? "timeout" : "connection_error") : o.push("unknown_error") : e.statusCode !== 200 && o.push("api_error_" + e.statusCode), (t = e.json) != null && t.errorsWhileComputingFlags && o.push("errors_while_computing_flags");
						var s = !((n = e.json) == null || (n = n.quotaLimited) == null || !n.includes("feature_flags"));
						s && o.push("quota_limited"), (i = this._persistence) == null || i.register({ [ae]: o }), s ? $.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.") : (r.disable_flags || this.receivedFeatureFlags(e.json ?? {}, a), this._additionalReloadRequested && (this._additionalReloadRequested = !1, this._callFlagsEndpoint()));
					}
				}
			});
		}
	}
	getFeatureFlag(e, t) {
		if (t === void 0 && (t = {}), !t.fresh || this._flagsLoadedFromRemote) if (this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0) {
			if (!this._checkAndTriggerStaleRefresh()) {
				var n = this.getFeatureFlagResult(e, t);
				return n?.variant ?? n?.enabled;
			}
		} else $.warn("getFeatureFlag for key \"" + e + So);
	}
	getFeatureFlagDetails(e) {
		return this.getFlagsWithDetails()[e];
	}
	getFeatureFlagPayload(e) {
		return this.getFeatureFlagResult(e, { send_event: !1 })?.payload;
	}
	getFeatureFlagResult(e, t) {
		if (t === void 0 && (t = {}), !t.fresh || this._flagsLoadedFromRemote) if (this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0) {
			if (!this._checkAndTriggerStaleRefresh()) {
				var n = this.getFlagVariants(), r = e in n, i = n[e], a = this.getFlagPayloads()[e], o = String(i), s = this._prop(Do) || void 0, c = this._prop(D) || void 0, l = this._prop(E) || {};
				if (this._config.advanced_feature_flags_dedup_per_session) {
					var u, d = this._instance.get_session_id(), f = this._prop(ie);
					d && d !== f && (l = {}, (u = this._persistence) == null || u.register({
						[E]: l,
						[ie]: d
					}));
				}
				if ((t.send_event || !("send_event" in t)) && (!(e in l) || !l[e].includes(o))) {
					var p, m, h, g, _, v, y, ee;
					I(l[e]) ? l[e].push(o) : l[e] = [o], (p = this._persistence) == null || p.register({ [E]: l });
					var b = this.getFeatureFlagDetails(e), te = [...this._prop(ae) ?? []];
					R(i) && te.push("flag_missing");
					var x = {
						$feature_flag: e,
						$feature_flag_response: i,
						$feature_flag_payload: a || null,
						$feature_flag_request_id: s,
						$feature_flag_evaluated_at: c,
						$feature_flag_bootstrapped_response: ((m = this._config.bootstrap) == null || (m = m.featureFlags) == null ? void 0 : m[e]) || null,
						$feature_flag_bootstrapped_payload: ((h = this._config.bootstrap) == null || (h = h.featureFlagPayloads) == null ? void 0 : h[e]) || null,
						$used_bootstrap_value: !this._flagsLoadedFromRemote
					};
					R(b == null || (g = b.metadata) == null ? void 0 : g.version) || (x.$feature_flag_version = b.metadata.version);
					var S, C = (b == null || (_ = b.reason) == null ? void 0 : _.description) ?? (b == null || (v = b.reason) == null ? void 0 : v.code);
					C && (x.$feature_flag_reason = C), b != null && (y = b.metadata) != null && y.id && (x.$feature_flag_id = b.metadata.id), R(b?.original_variant) && R(b?.original_enabled) || (x.$feature_flag_original_response = R(b.original_variant) ? b.original_enabled : b.original_variant), b != null && (ee = b.metadata) != null && ee.original_payload && (x.$feature_flag_original_payload = b == null || (S = b.metadata) == null ? void 0 : S.original_payload), te.length && (x.$feature_flag_error = te.join(",")), this._instance.capture("$feature_flag_called", x);
				}
				if (r) {
					var w = a;
					if (!R(a)) try {
						w = JSON.parse(a);
					} catch {}
					return {
						key: e,
						enabled: !!i,
						variant: typeof i == "string" ? i : void 0,
						payload: w
					};
				}
			}
		} else $.warn("getFeatureFlagResult for key \"" + e + So);
	}
	getRemoteConfigPayload(e, t) {
		var n = this._config.token, r = {
			distinct_id: this._instance.get_distinct_id(),
			token: n
		};
		this._shouldIncludeEvaluationEnvironments() && (r.evaluation_contexts = this._getValidEvaluationEnvironments()), this._instance._send_request({
			method: "POST",
			url: this._instance.requestRouter.endpointFor("flags", "/flags/?v=2"),
			data: r,
			compression: this._config.disable_compression ? void 0 : Rr.Base64,
			timeout: this._config.feature_flag_request_timeout_ms,
			callback(n) {
				var r = n.json?.featureFlagPayloads;
				t(r?.[e] || void 0);
			}
		});
	}
	isFeatureEnabled(e, t) {
		if (t === void 0 && (t = {}), !t.fresh || this._flagsLoadedFromRemote) {
			if (this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0) {
				var n = this.getFeatureFlag(e, t);
				return R(n) ? void 0 : !!n;
			}
			$.warn("isFeatureEnabled for key \"" + e + So);
		}
	}
	addFeatureFlagsHandler(e) {
		this.featureFlagEventHandlers.push(e);
	}
	removeFeatureFlagsHandler(e) {
		this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter(((t) => t !== e));
	}
	receivedFeatureFlags(e, t) {
		if (this._persistence) {
			this._hasLoadedFlags = !0;
			var n = this.getFlagVariants(), r = this.getFlagPayloads(), a = this.getFlagsWithDetails();
			(function(e, t, n, r, a) {
				n === void 0 && (n = {}), r === void 0 && (r = {}), a === void 0 && (a = {});
				var o = ((e) => {
					var t = e.flags;
					return t ? (e.featureFlags = Object.fromEntries(Object.keys(t).map(((e) => [e, t[e].variant ?? t[e].enabled]))), e.featureFlagPayloads = Object.fromEntries(Object.keys(t).filter(((e) => t[e].enabled)).filter(((e) => t[e].metadata?.payload)).map(((e) => [e, t[e].metadata?.payload])))) : $.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"), e;
				})(e), s = o.flags, c = o.featureFlags, l = o.featureFlagPayloads;
				if (c) {
					var u = e.requestId, d = e.evaluatedAt;
					if (I(c)) {
						$.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.");
						var f = {};
						if (c) for (var p = 0; c.length > p; p++) f[c[p]] = !0;
						t && t.register({
							[Co]: c,
							[S]: f
						});
					} else {
						var m = c, h = l, g = s;
						if (e.errorsWhileComputingFlags) if (s) {
							var _ = new Set(Object.keys(s).filter(((e) => {
								var t;
								return !((t = s[e]) != null && t.failed);
							})));
							m = i({}, n, Object.fromEntries(Object.entries(m).filter(((e) => {
								var [t] = e;
								return _.has(t);
							})))), h = i({}, r, Object.fromEntries(Object.entries(h || {}).filter(((e) => {
								var [t] = e;
								return _.has(t);
							})))), g = i({}, a, Object.fromEntries(Object.entries(g || {}).filter(((e) => {
								var [t] = e;
								return _.has(t);
							}))));
						} else m = i({}, n, m), h = i({}, r, h), g = i({}, a, g);
						t && t.register(i({
							[Co]: Object.keys(ko(m)),
							[S]: m || {},
							[To]: h || {},
							[w]: g || {}
						}, u ? { [Do]: u } : {}, d ? { [D]: d } : {}));
					}
				}
			})(e, this._persistence, n, r, a), t || (this._staleCacheRefreshTriggered = !1), this._fireFeatureFlagsCallbacks(t);
		}
	}
	override(e, t) {
		t === void 0 && (t = !1), $.warn("override is deprecated. Please use overrideFeatureFlags instead."), this.overrideFeatureFlags({
			flags: e,
			suppressWarning: t
		});
	}
	overrideFeatureFlags(e) {
		if (!this._instance.__loaded || !this._persistence) return $.uninitializedWarning("posthog.featureFlags.overrideFeatureFlags");
		if (!1 === e) return this._persistence.unregister(wo), this._persistence.unregister(Eo), this._fireFeatureFlagsCallbacks(), xo.info("All overrides cleared");
		if (I(e)) {
			var t = Oo(e);
			return this._persistence.register({ [wo]: t }), this._fireFeatureFlagsCallbacks(), xo.info("Flag overrides set", { flags: e });
		}
		if (e && typeof e == "object" && ("flags" in e || "payloads" in e)) {
			var n, r = e;
			if (this._override_warning = !!((n = r.suppressWarning) != null && n), "flags" in r) {
				if (!1 === r.flags) this._persistence.unregister(wo), xo.info("Flag overrides cleared");
				else if (r.flags) {
					if (I(r.flags)) {
						var i = Oo(r.flags);
						this._persistence.register({ [wo]: i });
					} else this._persistence.register({ [wo]: r.flags });
					xo.info("Flag overrides set", { flags: r.flags });
				}
			}
			"payloads" in r && (!1 === r.payloads ? (this._persistence.unregister(Eo), xo.info("Payload overrides cleared")) : r.payloads && (this._persistence.register({ [Eo]: r.payloads }), xo.info("Payload overrides set", { payloads: r.payloads }))), this._fireFeatureFlagsCallbacks();
			return;
		}
		if (e && typeof e == "object") return this._persistence.register({ [wo]: e }), this._fireFeatureFlagsCallbacks(), xo.info("Flag overrides set", { flags: e });
		$.warn("Invalid overrideOptions provided to overrideFeatureFlags", { overrideOptions: e });
	}
	onFeatureFlags(e) {
		if (this.addFeatureFlagsHandler(e), this._hasLoadedFlags) {
			var { flags: t, flagVariants: n } = this._prepareFeatureFlagsForCallbacks();
			e(t, n);
		}
		return () => this.removeFeatureFlagsHandler(e);
	}
	updateEarlyAccessFeatureEnrollment(e, t, n) {
		var r, a = (this._prop(C) || []).find(((t) => t.flagKey === e)), o = { ["$feature_enrollment/" + e]: t }, s = {
			$feature_flag: e,
			$feature_enrollment: t,
			$set: o
		};
		a && (s.$early_access_feature_name = a.name), n && (s.$feature_enrollment_stage = n), this._instance.capture("$feature_enrollment_update", s), this.setPersonPropertiesForFlags(o, !1);
		var c = i({}, this.getFlagVariants(), { [e]: t });
		(r = this._persistence) == null || r.register({
			[Co]: Object.keys(ko(c)),
			[S]: c
		}), this._fireFeatureFlagsCallbacks();
	}
	getEarlyAccessFeatures(e, t, n) {
		t === void 0 && (t = !1);
		var r = this._prop(C), i = n ? "&" + n.map(((e) => "stage=" + e)).join("&") : "";
		if (r && !t) return e(r);
		this._instance._send_request({
			url: this._instance.requestRouter.endpointFor("api", "/api/early_access_features/?token=" + this._config.token + i),
			method: "GET",
			callback: (t) => {
				var n, r;
				if (t.json) {
					var i = t.json.earlyAccessFeatures;
					return (n = this._persistence) == null || n.unregister(C), (r = this._persistence) == null || r.register({ [C]: i }), e(i);
				}
			}
		});
	}
	_prepareFeatureFlagsForCallbacks() {
		var e = this.getFlags(), t = this.getFlagVariants();
		return {
			flags: e.filter(((e) => t[e])),
			flagVariants: Object.keys(t).filter(((e) => t[e])).reduce(((e, n) => (e[n] = t[n], e)), {})
		};
	}
	_fireFeatureFlagsCallbacks(e) {
		var { flags: t, flagVariants: n } = this._prepareFeatureFlagsForCallbacks();
		this.featureFlagEventHandlers.forEach(((r) => r(t, n, { errorsLoading: e })));
	}
	setPersonPropertiesForFlags(e, t) {
		t === void 0 && (t = !0);
		var n = this._prop(ne) || {}, r = e?.$set || (e != null && e.$set_once ? {} : e), a = e?.$set_once, o = {};
		if (a) for (var s in a) ({}).hasOwnProperty.call(a, s) && (s in n || (o[s] = a[s]));
		this._instance.register({ [ne]: i({}, n, o, r) }), t && this._instance.reloadFeatureFlags();
	}
	resetPersonPropertiesForFlags() {
		this._instance.unregister(ne);
	}
	setGroupPropertiesForFlags(e, t) {
		t === void 0 && (t = !0);
		var n = this._prop(T) || {};
		Object.keys(n).length !== 0 && Object.keys(n).forEach(((t) => {
			n[t] = i({}, n[t], e[t]), delete e[t];
		})), this._instance.register({ [T]: i({}, n, e) }), t && this._instance.reloadFeatureFlags();
	}
	resetGroupPropertiesForFlags(e) {
		if (e) {
			var t = this._prop(T) || {};
			this._instance.register({ [T]: i({}, t, { [e]: {} }) });
		} else this._instance.unregister(T);
	}
	reset() {
		this._hasLoadedFlags = !1, this._requestInFlight = !1, this._reloadingDisabled = !1, this._additionalReloadRequested = !1, this._flagsLoadedFromRemote = !1, this.$anon_distinct_id = void 0, this._clearDebouncer(), this._override_warning = !1;
	}
} }, Lo = { sessionRecording: class {
	get _config() {
		return this._instance.config;
	}
	get _persistence() {
		return this._instance.persistence;
	}
	get started() {
		var e;
		return !((e = this._lazyLoadedSessionRecording) == null || !e.isStarted);
	}
	get status() {
		return this._recordingStatus === eo || this._recordingStatus === to ? this._recordingStatus : this._lazyLoadedSessionRecording?.status ?? this._recordingStatus;
	}
	constructor(e) {
		if (this._forceAllowLocalhostNetworkCapture = !1, this._recordingStatus = Qa, this._persistFlagsOnSessionListener = void 0, this._instance = e, !this._instance.sessionManager) throw ro.error("started without valid sessionManager"), /* @__PURE__ */ Error(no + " started without valid sessionManager. This is a bug.");
		if (this._config.cookieless_mode === A) throw Error(no + " cannot be used with cookieless_mode=\"always\"");
	}
	initialize() {
		this.startIfEnabledOrStop();
	}
	get _isRecordingEnabled() {
		var e, t = !((e = this._instance.get_property(b)) == null || !e.enabled), n = !this._config.disable_session_recording, r = this._config.disable_session_recording || this._instance.consent.isOptedOut();
		return j && t && n && !r;
	}
	startIfEnabledOrStop(e) {
		var t;
		if (!this._isRecordingEnabled || (t = this._lazyLoadedSessionRecording) == null || !t.isStarted) {
			var n = !R(Object.assign) && !R(Array.from);
			this._isRecordingEnabled && n ? (this._lazyLoadAndStart(e), ro.info("starting")) : (this._recordingStatus = Qa, this.stopRecording());
		}
	}
	_lazyLoadAndStart(e) {
		var t, n, r;
		this._isRecordingEnabled && (this._recordingStatus !== eo && this._recordingStatus !== to && (this._recordingStatus = $a), P != null && (t = P.__PosthogExtensions__) != null && (t = t.rrweb) != null && t.record && (n = P.__PosthogExtensions__) != null && n.initSessionRecording ? this._onScriptLoaded(e) : (r = P.__PosthogExtensions__) == null || r.loadExternalDependency == null || r.loadExternalDependency(this._instance, this._scriptName, ((t) => {
			if (t) return ro.error("could not load recorder", t);
			this._onScriptLoaded(e);
		})));
	}
	stopRecording() {
		var e, t;
		(e = this._persistFlagsOnSessionListener) == null || e.call(this), this._persistFlagsOnSessionListener = void 0, (t = this._lazyLoadedSessionRecording) == null || t.stop();
	}
	_discardRecording() {
		var e, t;
		(e = this._persistFlagsOnSessionListener) == null || e.call(this), this._persistFlagsOnSessionListener = void 0, (t = this._lazyLoadedSessionRecording) == null || t.discard();
	}
	_resetSampling() {
		var e;
		(e = this._persistence) == null || e.unregister(x);
	}
	_validateSampleRate(e, t) {
		if (B(e)) return null;
		var n, r = Ge(e) ? e : parseFloat(e);
		return typeof (n = r) != "number" || !Number.isFinite(n) || 0 > n || n > 1 ? (ro.warn(t + " must be between 0 and 1. Ignoring invalid value:", e), null) : r;
	}
	_persistRemoteConfig(e) {
		if (this._persistence) {
			var t, n = this._persistence, r = () => {
				var t = !1 === e.sessionRecording ? void 0 : e.sessionRecording, r = this._validateSampleRate(this._config.session_recording?.sampleRate, "session_recording.sampleRate"), a = this._validateSampleRate(t?.sampleRate, "remote config sampleRate"), o = r ?? a;
				B(o) && this._resetSampling();
				var s = t?.minimumDurationMilliseconds;
				n.register({ [b]: i({
					cache_timestamp: Date.now(),
					enabled: !!t
				}, t, {
					networkPayloadCapture: i({ capturePerformance: e.capturePerformance }, t?.networkPayloadCapture),
					canvasRecording: {
						enabled: t?.recordCanvas,
						fps: t?.canvasFps,
						quality: t?.canvasQuality
					},
					sampleRate: o,
					minimumDurationMilliseconds: R(s) ? null : s,
					endpoint: t?.endpoint,
					triggerMatchType: t?.triggerMatchType,
					masking: t?.masking,
					urlTriggers: t?.urlTriggers
				}) });
			};
			r(), (t = this._persistFlagsOnSessionListener) == null || t.call(this), this._persistFlagsOnSessionListener = this._instance.sessionManager?.onSessionId(r);
		}
	}
	onRemoteConfig(e) {
		"sessionRecording" in e ? !1 === e.sessionRecording ? (this._persistRemoteConfig(e), this._discardRecording()) : (this._persistRemoteConfig(e), this.startIfEnabledOrStop()) : (this._recordingStatus === eo && (this._recordingStatus = to, ro.warn("config refresh failed, recording will not start until page reload")), this.startIfEnabledOrStop());
	}
	log(e, t) {
		var n;
		t === void 0 && (t = "log"), (n = this._lazyLoadedSessionRecording) != null && n.log ? this._lazyLoadedSessionRecording.log(e, t) : ro.warn("log called before recorder was ready");
	}
	get _scriptName() {
		var e, t, n = (e = this._instance) == null || (e = e.persistence) == null ? void 0 : e.get_property(b);
		return (n == null || (t = n.scriptConfig) == null ? void 0 : t.script) || "lazy-recorder";
	}
	_isRemoteConfigFresh() {
		var e = this._instance.get_property(b);
		if (!e) return !1;
		var t = (typeof e == "object" ? e : JSON.parse(e)).cache_timestamp ?? Date.now();
		return 36e5 >= Date.now() - t;
	}
	_onScriptLoaded(e) {
		var t;
		if ((t = P.__PosthogExtensions__) == null || !t.initSessionRecording) return ro.warn("Called on script loaded before session recording is available. This can be caused by adblockers."), void this._instance.register_for_session({ $sdk_debug_recording_script_not_loaded: !0 });
		if (this._lazyLoadedSessionRecording || (this._lazyLoadedSessionRecording = P.__PosthogExtensions__?.initSessionRecording(this._instance), this._lazyLoadedSessionRecording._forceAllowLocalhostNetworkCapture = this._forceAllowLocalhostNetworkCapture), !this._isRemoteConfigFresh()) {
			if (this._recordingStatus === to || this._recordingStatus === eo) return;
			this._recordingStatus = eo, ro.info("persisted remote config is stale, requesting fresh config before starting"), new Lr(this._instance).load();
			return;
		}
		this._recordingStatus = $a, this._lazyLoadedSessionRecording.start(e);
	}
	onRRwebEmit(e) {
		var t;
		(t = this._lazyLoadedSessionRecording) == null || t.onRRwebEmit == null || t.onRRwebEmit(e);
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
		return this._lazyLoadedSessionRecording?.sdkDebugProperties || { $recording_status: this.status };
	}
	tryAddCustomEvent(e, t) {
		var n;
		return !((n = this._lazyLoadedSessionRecording) == null || !n.tryAddCustomEvent(e, t));
	}
} }, Ro = {
	autocapture: class {
		constructor(e) {
			this._initialized = !1, this._isDisabledServerSide = null, this._elementsChainAsString = !1, this.instance = e, this.rageclicks = new Va(e.config.rageclick), this._elementSelectors = null;
		}
		initialize() {
			this.startIfEnabled();
		}
		get _config() {
			var e = L(this.instance.config.autocapture) ? this.instance.config.autocapture : {};
			return e.url_allowlist = e.url_allowlist?.map(((e) => new RegExp(e))), e.url_ignorelist = e.url_ignorelist?.map(((e) => new RegExp(e))), e;
		}
		_addDomEventHandlers() {
			if (this.isBrowserSupported()) {
				if (j && N) {
					var e = (e) => {
						e ||= j?.event;
						try {
							this._captureEvent(e);
						} catch (e) {
							Ua.error("Failed to capture event", e);
						}
					};
					if (q(N, "submit", e, { capture: !0 }), q(N, "change", e, { capture: !0 }), q(N, "click", e, { capture: !0 }), this._config.capture_copied_text) {
						var t = (e) => {
							this._captureEvent(e ||= j?.event, Ha);
						};
						q(N, "copy", t, { capture: !0 }), q(N, "cut", t, { capture: !0 });
					}
				}
			} else Ua.info("Disabling Automatic Event Collection because this browser is not supported");
		}
		startIfEnabled() {
			this.isEnabled && !this._initialized && (this._addDomEventHandlers(), this._initialized = !0);
		}
		onRemoteConfig(e) {
			e.elementsChainAsString && (this._elementsChainAsString = e.elementsChainAsString), this.instance.persistence && this.instance.persistence.register({ [f]: !!e.autocapture_opt_out }), this._isDisabledServerSide = !!e.autocapture_opt_out, this.startIfEnabled();
		}
		setElementSelectors(e) {
			this._elementSelectors = e;
		}
		getElementSelectors(e) {
			var t, n = [];
			return (t = this._elementSelectors) == null || t.forEach(((t) => {
				(N?.querySelectorAll(t))?.forEach(((r) => {
					e === r && n.push(t);
				}));
			})), n;
		}
		get isEnabled() {
			var e = this.instance.persistence?.props[f];
			if (We(this._isDisabledServerSide) && !qe(e) && !this.instance._shouldDisableFlags()) return !1;
			var t = this._isDisabledServerSide ?? !!e;
			return !!this.instance.config.autocapture && !t;
		}
		_captureEvent(e, t) {
			if (t === void 0 && (t = "$autocapture"), this.isEnabled) {
				var n, r = ba(e);
				pa(r) && (r = r.parentNode || null), t === "$autocapture" && e.type === "click" && e instanceof MouseEvent && this.instance.config.rageclick && (n = this.rageclicks) != null && n.isRageClick(e.clientX, e.clientY, e.timeStamp || (/* @__PURE__ */ new Date()).getTime()) && function(e, t) {
					if (!j || Ea(e)) return !1;
					var n, r;
					if (qe(t) ? (n = !!t && Ta, r = void 0) : (n = t?.css_selector_ignorelist ?? Ta, r = t?.content_ignorelist), !1 === n) return !1;
					var { targetElementList: i } = Da(e, !1);
					return !function(e, t) {
						if (!1 === e || R(e)) return !1;
						var n;
						if (!0 === e) n = wa;
						else {
							if (!I(e)) return !1;
							if (e.length > 10) return U.error("[PostHog] content_ignorelist array cannot exceed 10 items. Use css_selector_ignorelist for more complex matching."), !1;
							n = e.map(((e) => e.toLowerCase()));
						}
						return t.some(((e) => {
							var { safeText: t, ariaLabel: r } = e;
							return n.some(((e) => t.includes(e) || r.includes(e)));
						}));
					}(r, i.map(((e) => ({
						safeText: ya(e).toLowerCase(),
						ariaLabel: e.getAttribute("aria-label")?.toLowerCase().trim() || ""
					})))) && !Sa(i, n);
				}(r, this.instance.config.rageclick) && this._captureEvent(e, "$rageclick");
				var i = t === Ha;
				if (r && function(e, t, n, r, i) {
					var a, o, s;
					if (n === void 0 && (n = void 0), !j || Ea(e) || (a = n) != null && a.url_allowlist && !ga(n.url_allowlist) || (o = n) != null && o.url_ignorelist && ga(n.url_ignorelist)) return !1;
					if ((s = n) != null && s.dom_event_allowlist) {
						var c = n.dom_event_allowlist;
						if (c && !c.some(((e) => t.type === e))) return !1;
					}
					var { parentIsUsefulElement: l, targetElementList: u } = Da(e, r);
					if (!function(e, t) {
						var n = t?.element_allowlist;
						if (R(n)) return !0;
						var r, i = function(e) {
							if (n.some(((t) => e.tagName.toLowerCase() === t))) return { v: !0 };
						};
						for (var a of e) if (r = i(a)) return r.v;
						return !1;
					}(u, n) || !Sa(u, n?.css_selector_allowlist)) return !1;
					var d = j.getComputedStyle(e);
					if (d && d.getPropertyValue("cursor") === "pointer" && t.type === "click") return !0;
					var f = e.tagName.toLowerCase();
					switch (f) {
						case "html": return !1;
						case "form": return (i || ["submit"]).indexOf(t.type) >= 0;
						case "input":
						case "select":
						case "textarea": return (i || ["change", "click"]).indexOf(t.type) >= 0;
						default: return l ? (i || ["click"]).indexOf(t.type) >= 0 : (i || ["click"]).indexOf(t.type) >= 0 && (xa.indexOf(f) > -1 || e.getAttribute("contenteditable") === "true");
					}
				}(r, e, this._config, i, i ? ["copy", "cut"] : void 0)) {
					var { props: a, explicitNoCapture: o } = Ka(r, {
						e,
						maskAllElementAttributes: this.instance.config.mask_all_element_attributes,
						maskAllText: this.instance.config.mask_all_text,
						elementAttributeIgnoreList: this._config.element_attribute_ignorelist,
						elementsChainAsString: this._elementsChainAsString
					});
					if (o) return !1;
					var s = this.getElementSelectors(r);
					if (s && s.length > 0 && (a.$element_selectors = s), t === Ha) {
						var c, l = va(j == null || (c = j.getSelection()) == null ? void 0 : c.toString()), u = e.type || "clipboard";
						if (!l) return !1;
						a.$selected_content = l, a.$copy_type = u;
					}
					return this.instance.capture(t, a), !0;
				}
			}
		}
		isBrowserSupported() {
			return Ve(N?.querySelectorAll);
		}
	},
	historyAutocapture: class {
		constructor(e) {
			var t;
			this._instance = e, this._lastPathname = (j == null || (t = j.location) == null ? void 0 : t.pathname) || "";
		}
		initialize() {
			this.startIfEnabled();
		}
		get isEnabled() {
			return this._instance.config.capture_pageview === "history_change";
		}
		startIfEnabled() {
			this.isEnabled && (U.info("History API monitoring enabled, starting..."), this.monitorHistoryChanges());
		}
		stop() {
			this._popstateListener && this._popstateListener(), this._popstateListener = void 0, U.info("History API monitoring stopped");
		}
		monitorHistoryChanges() {
			var e, t;
			if (j && j.history) {
				var n = this;
				(e = j.history.pushState) != null && e.__posthog_wrapped__ || Ja(j.history, "pushState", ((e) => function(t, r, i) {
					e.call(this, t, r, i), n._capturePageview("pushState");
				})), (t = j.history.replaceState) != null && t.__posthog_wrapped__ || Ja(j.history, "replaceState", ((e) => function(t, r, i) {
					e.call(this, t, r, i), n._capturePageview("replaceState");
				})), this._setupPopstateListener();
			}
		}
		_capturePageview(e) {
			try {
				var t, n = j == null || (t = j.location) == null ? void 0 : t.pathname;
				if (!n) return;
				n !== this._lastPathname && this.isEnabled && this._instance.capture(xe, { navigation_type: e }), this._lastPathname = n;
			} catch (t) {
				U.error("Error capturing " + e + " pageview", t);
			}
		}
		_setupPopstateListener() {
			if (!this._popstateListener) {
				var e = () => {
					this._capturePageview("popstate");
				};
				q(j, "popstate", e), this._popstateListener = () => {
					j && j.removeEventListener("popstate", e);
				};
			}
		}
	},
	heatmaps: class {
		get _config() {
			return this.instance.config;
		}
		constructor(e) {
			var t;
			this._enabledServerSide = !1, this._initialized = !1, this._flushInterval = null, this.instance = e, this._enabledServerSide = !((t = this.instance.persistence) == null || !t.props[p]), this.rageclicks = new Va(e.config.rageclick);
		}
		initialize() {
			this.startIfEnabled();
		}
		get flushIntervalMilliseconds() {
			var e = 5e3;
			return L(this._config.capture_heatmaps) && this._config.capture_heatmaps.flush_interval_milliseconds && (e = this._config.capture_heatmaps.flush_interval_milliseconds), e;
		}
		get isEnabled() {
			return B(this._config.capture_heatmaps) ? B(this._config.enable_heatmaps) ? this._enabledServerSide : this._config.enable_heatmaps : !1 !== this._config.capture_heatmaps;
		}
		startIfEnabled() {
			if (this.isEnabled) {
				if (this._initialized) return;
				io.info("starting..."), this._setupListeners(), this._onVisibilityChange();
			} else clearInterval(this._flushInterval ?? void 0), this._removeListeners(), this.getAndClearBuffer();
		}
		onRemoteConfig(e) {
			if ("heatmaps" in e) {
				var t = !!e.heatmaps;
				this.instance.persistence && this.instance.persistence.register({ [p]: t }), this._enabledServerSide = t, this.startIfEnabled();
			}
		}
		getAndClearBuffer() {
			var e = this._buffer;
			return this._buffer = void 0, e;
		}
		_onDeadClick(e) {
			this._onClick(e.originalEvent, "deadclick");
		}
		_onVisibilityChange() {
			this._flushInterval && clearInterval(this._flushInterval), this._flushInterval = N?.visibilityState === "visible" ? setInterval(this._flush.bind(this), this.flushIntervalMilliseconds) : null;
		}
		_setupListeners() {
			j && N && (this._flushHandler = this._flush.bind(this), q(j, be, this._flushHandler), this._onClickHandler = (e) => this._onClick(e || j?.event), q(N, "click", this._onClickHandler, { capture: !0 }), this._onMouseMoveHandler = (e) => this._onMouseMove(e || j?.event), q(N, "mousemove", this._onMouseMoveHandler, { capture: !0 }), this._deadClicksCapture = new er(this.instance, Qn, this._onDeadClick.bind(this)), this._deadClicksCapture.startIfEnabledOrStop(), this._onVisibilityChange_handler = this._onVisibilityChange.bind(this), q(N, ye, this._onVisibilityChange_handler), this._initialized = !0);
		}
		_removeListeners() {
			var e;
			j && N && (this._flushHandler && j.removeEventListener(be, this._flushHandler), this._onClickHandler && N.removeEventListener("click", this._onClickHandler, { capture: !0 }), this._onMouseMoveHandler && N.removeEventListener("mousemove", this._onMouseMoveHandler, { capture: !0 }), this._onVisibilityChange_handler && N.removeEventListener(ye, this._onVisibilityChange_handler), clearTimeout(this._mouseMoveTimeout), (e = this._deadClicksCapture) == null || e.stop(), this._initialized = !1);
		}
		_getProperties(e, t) {
			var n = this.instance.scrollManager.scrollY(), r = this.instance.scrollManager.scrollX(), i = this.instance.scrollManager.scrollElement(), a = function(e, t, n) {
				for (var r = e; r && da(r) && !fa(r, "body");) {
					if (r === n) return !1;
					if (F(t, j?.getComputedStyle(r).position)) return !0;
					r = Ca(r);
				}
				return !1;
			}(ba(e), ["fixed", "sticky"], i);
			return {
				x: e.clientX + (a ? 0 : r),
				y: e.clientY + (a ? 0 : n),
				target_fixed: a,
				type: t
			};
		}
		_onClick(e, t) {
			var n;
			if (t === void 0 && (t = "click"), !ua(e.target) && ao(e)) {
				var r = this._getProperties(e, t);
				(n = this.rageclicks) != null && n.isRageClick(e.clientX, e.clientY, (/* @__PURE__ */ new Date()).getTime()) && this._capture(i({}, r, { type: "rageclick" })), this._capture(r);
			}
		}
		_onMouseMove(e) {
			!ua(e.target) && ao(e) && (clearTimeout(this._mouseMoveTimeout), this._mouseMoveTimeout = setTimeout((() => {
				this._capture(this._getProperties(e, "mousemove"));
			}), 500));
		}
		_capture(e) {
			if (j) {
				var t = j.location.href, n = this._config.custom_personal_data_properties, r = cr(t, this._config.mask_personal_data_properties ? [...dr, ...n || []] : [], pr);
				this._buffer = this._buffer || {}, this._buffer[r] || (this._buffer[r] = []), this._buffer[r].push(e);
			}
		}
		_flush() {
			this._buffer && !He(this._buffer) && this.instance.capture("$$heatmap", { $heatmap_data: this.getAndClearBuffer() });
		}
	},
	deadClicksAutocapture: er,
	webVitalsAutocapture: class {
		constructor(e) {
			var t;
			this._enabledServerSide = !1, this._initialized = !1, this._buffer = {
				url: void 0,
				metrics: [],
				firstMetricTimestamp: void 0
			}, this._flushToCapture = () => {
				clearTimeout(this._delayedFlushTimer), this._buffer.metrics.length !== 0 && (this._instance.capture("$web_vitals", this._buffer.metrics.reduce(((e, t) => i({}, e, {
					["$web_vitals_" + t.name + "_event"]: i({}, t),
					["$web_vitals_" + t.name + "_value"]: t.value
				})), {})), this._buffer = {
					url: void 0,
					metrics: [],
					firstMetricTimestamp: void 0
				});
			}, this._addToBuffer = (e) => {
				var t = this._instance.sessionManager?.checkAndGetSessionAndWindowId(!0);
				if (R(t)) Xa.error("Could not read session ID. Dropping metrics!");
				else {
					this._buffer = this._buffer || {
						url: void 0,
						metrics: [],
						firstMetricTimestamp: void 0
					};
					var n = this._currentURL();
					R(n) || (B(e?.name) || B(e?.value) ? Xa.error("Invalid metric received", e) : !this._maxAllowedValue || this._maxAllowedValue > e.value ? (this._buffer.url !== n && (this._flushToCapture(), this._delayedFlushTimer = setTimeout(this._flushToCapture, this.flushToCaptureTimeoutMs)), R(this._buffer.url) && (this._buffer.url = n), this._buffer.firstMetricTimestamp = R(this._buffer.firstMetricTimestamp) ? Date.now() : this._buffer.firstMetricTimestamp, e.attribution && e.attribution.interactionTargetElement && (e.attribution.interactionTargetElement = void 0), this._buffer.metrics.push(i({}, e, {
						$current_url: n,
						$session_id: t.sessionId,
						$window_id: t.windowId,
						timestamp: Date.now()
					})), this._buffer.metrics.length === this.allowedMetrics.length && this._flushToCapture()) : Xa.error("Ignoring metric with value >= " + this._maxAllowedValue, e));
				}
			}, this._startCapturing = () => {
				if (!this._initialized) {
					var e, t, n, r, i = P.__PosthogExtensions__;
					R(i) || R(i.postHogWebVitalsCallbacks) || ({onLCP: e, onCLS: t, onFCP: n, onINP: r} = i.postHogWebVitalsCallbacks), e && t && n && r ? (this.allowedMetrics.indexOf("LCP") > -1 && e(this._addToBuffer.bind(this)), this.allowedMetrics.indexOf("CLS") > -1 && t(this._addToBuffer.bind(this)), this.allowedMetrics.indexOf("FCP") > -1 && n(this._addToBuffer.bind(this)), this.allowedMetrics.indexOf("INP") > -1 && r(this._addToBuffer.bind(this)), this._initialized = !0) : Xa.error("web vitals callbacks not loaded - not starting");
				}
			}, this._instance = e, this._enabledServerSide = !((t = this._instance.persistence) == null || !t.props[_]), this.startIfEnabled();
		}
		get _perfConfig() {
			return this._instance.config.capture_performance;
		}
		get allowedMetrics() {
			var e = L(this._perfConfig) ? this._perfConfig?.web_vitals_allowed_metrics : void 0;
			return B(e) ? this._instance.persistence?.props[ee] || [
				"CLS",
				"FCP",
				"INP",
				"LCP"
			] : e;
		}
		get flushToCaptureTimeoutMs() {
			return (L(this._perfConfig) ? this._perfConfig.web_vitals_delayed_flush_ms : void 0) || 5e3;
		}
		get useAttribution() {
			var e = L(this._perfConfig) ? this._perfConfig.web_vitals_attribution : void 0;
			return e != null && e;
		}
		get _maxAllowedValue() {
			var e = L(this._perfConfig) && Ge(this._perfConfig.__web_vitals_max_value) ? this._perfConfig.__web_vitals_max_value : Za;
			return e > 0 && 6e4 >= e ? Za : e;
		}
		get isEnabled() {
			var e = Ee?.protocol;
			if (e !== "http:" && e !== "https:") return Xa.info("Web Vitals are disabled on non-http/https protocols"), !1;
			var t = L(this._perfConfig) ? this._perfConfig.web_vitals : qe(this._perfConfig) ? this._perfConfig : void 0;
			return qe(t) ? t : this._enabledServerSide;
		}
		startIfEnabled() {
			this.isEnabled && !this._initialized && (Xa.info("enabled, starting..."), this._loadScript(this._startCapturing));
		}
		onRemoteConfig(e) {
			if ("capturePerformance" in e) {
				var t = L(e.capturePerformance) && !!e.capturePerformance.web_vitals, n = L(e.capturePerformance) ? e.capturePerformance.web_vitals_allowed_metrics : void 0;
				this._instance.persistence && (this._instance.persistence.register({ [_]: t }), this._instance.persistence.register({ [ee]: n })), this._enabledServerSide = t, this.startIfEnabled();
			}
		}
		_loadScript(e) {
			var t, n;
			(t = P.__PosthogExtensions__) != null && t.postHogWebVitalsCallbacks ? e() : (n = P.__PosthogExtensions__) == null || n.loadExternalDependency == null || n.loadExternalDependency(this._instance, this.useAttribution ? "web-vitals-with-attribution" : "web-vitals", ((t) => {
				t ? Xa.error("failed to load script", t) : e();
			}));
		}
		_currentURL() {
			var e = j ? j.location.href : void 0;
			if (e) {
				var t = this._instance.config.custom_personal_data_properties;
				return cr(e, this._instance.config.mask_personal_data_properties ? [...dr, ...t || []] : [], pr);
			}
			Xa.error("Could not determine current URL");
		}
	}
}, zo = {
	exceptionObserver: class {
		constructor(e) {
			var t;
			this._startCapturing = () => {
				var e;
				if (j && this.isEnabled && (e = P.__PosthogExtensions__) != null && e.errorWrappingFunctions) {
					var t = P.__PosthogExtensions__.errorWrappingFunctions.wrapOnError, n = P.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection, r = P.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
					try {
						!this._unwrapOnError && this._config.capture_unhandled_errors && (this._unwrapOnError = t(this.captureException.bind(this))), !this._unwrapUnhandledRejection && this._config.capture_unhandled_rejections && (this._unwrapUnhandledRejection = n(this.captureException.bind(this))), !this._unwrapConsoleError && this._config.capture_console_errors && (this._unwrapConsoleError = r(this.captureException.bind(this)));
					} catch (e) {
						qa.error("failed to start", e), this._stopCapturing();
					}
				}
			}, this._instance = e, this._remoteEnabled = !((t = this._instance.persistence) == null || !t.props[m]), this._rateLimiter = new rt({
				refillRate: this._instance.config.error_tracking.__exceptionRateLimiterRefillRate ?? 1,
				bucketSize: this._instance.config.error_tracking.__exceptionRateLimiterBucketSize ?? 10,
				refillInterval: 1e4,
				_logger: qa
			}), this._config = this._requiredConfig(), this.startIfEnabledOrStop();
		}
		_requiredConfig() {
			var e = this._instance.config.capture_exceptions, t = {
				capture_unhandled_errors: !1,
				capture_unhandled_rejections: !1,
				capture_console_errors: !1
			};
			return L(e) ? t = i({}, t, e) : (R(e) ? this._remoteEnabled : e) && (t = i({}, t, {
				capture_unhandled_errors: !0,
				capture_unhandled_rejections: !0
			})), t;
		}
		get isEnabled() {
			return this._config.capture_console_errors || this._config.capture_unhandled_errors || this._config.capture_unhandled_rejections;
		}
		startIfEnabledOrStop() {
			this.isEnabled ? (qa.info("enabled"), this._stopCapturing(), this._loadScript(this._startCapturing)) : this._stopCapturing();
		}
		_loadScript(e) {
			var t, n;
			(t = P.__PosthogExtensions__) != null && t.errorWrappingFunctions && e(), (n = P.__PosthogExtensions__) == null || n.loadExternalDependency == null || n.loadExternalDependency(this._instance, "exception-autocapture", ((t) => {
				if (t) return qa.error("failed to load script", t);
				e();
			}));
		}
		_stopCapturing() {
			var e, t, n;
			(e = this._unwrapOnError) == null || e.call(this), this._unwrapOnError = void 0, (t = this._unwrapUnhandledRejection) == null || t.call(this), this._unwrapUnhandledRejection = void 0, (n = this._unwrapConsoleError) == null || n.call(this), this._unwrapConsoleError = void 0;
		}
		onRemoteConfig(e) {
			"autocaptureExceptions" in e && (this._remoteEnabled = !!e.autocaptureExceptions || !1, this._instance.persistence && this._instance.persistence.register({ [m]: this._remoteEnabled }), this._config = this._requiredConfig(), this.startIfEnabledOrStop());
		}
		onConfigChange() {
			this._config = this._requiredConfig();
		}
		captureException(e) {
			var t, n, r = (e == null || (t = e.$exception_list) == null || (t = t[0]) == null ? void 0 : t.type) ?? "Exception";
			this._rateLimiter.consumeRateLimit(r) ? qa.info("Skipping exception capture because of client rate limiting.", { exception: r }) : (n = this._instance.exceptions) == null || n.sendExceptionEvent(e);
		}
	},
	exceptions: class {
		constructor(e) {
			this._suppressionRules = [], this._errorPropertiesBuilder = new nn([
				new hn(),
				new Tn(),
				new _n(),
				new gn(),
				new Cn(),
				new Sn(),
				new yn(),
				new wn()
			], function(e) {
				for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
				return function(t, r) {
					r === void 0 && (r = 0);
					for (var a = [], o = t.split("\n"), s = r; o.length > s; s++) {
						var c = o[s];
						if (1024 >= c.length) {
							var l = mn.test(c) ? c.replace(mn, "$1") : c;
							if (!l.match(/\S*Error: /)) {
								for (var u of n) {
									var d = u(l, e);
									if (d) {
										a.push(d);
										break;
									}
								}
								if (a.length >= 50) break;
							}
						}
					}
					return function(e) {
						if (!e.length) return [];
						var t = Array.from(e);
						return t.reverse(), t.slice(0, 50).map(((e) => {
							return i({}, e, {
								filename: e.filename || (n = t, n[n.length - 1] || {}).filename,
								function: e.function || rn
							});
							var n;
						}));
					}(a);
				};
			}("web:javascript", un, pn)), this._instance = e, this._suppressionRules = this._instance.persistence?.get_property(h) ?? [];
		}
		onRemoteConfig(e) {
			if ("errorTracking" in e) {
				var t = e.errorTracking?.suppressionRules ?? [], n = e.errorTracking?.captureExtensionExceptions;
				this._suppressionRules = t, this._instance.persistence && this._instance.persistence.register({
					[h]: this._suppressionRules,
					[g]: n
				});
			}
		}
		get _captureExtensionExceptions() {
			var e, t = !!this._instance.get_property(g);
			return (e = this._instance.config.error_tracking.captureExtensionExceptions ?? t) != null && e;
		}
		buildProperties(e, t) {
			return this._errorPropertiesBuilder.buildFromUnknown(e, {
				syntheticException: t?.syntheticException,
				mechanism: { handled: t?.handled }
			});
		}
		sendExceptionEvent(e) {
			var t = e.$exception_list;
			if (this._isExceptionList(t)) {
				if (this._matchesSuppressionRule(t)) return void Ao.info("Skipping exception capture because a suppression rule matched");
				if (!this._captureExtensionExceptions && this._isExtensionException(t)) return void Ao.info("Skipping exception capture because it was thrown by an extension");
				if (!this._instance.config.error_tracking.__capturePostHogExceptions && this._isPostHogException(t)) return void Ao.info("Skipping exception capture because it was thrown by the PostHog SDK");
			}
			return this._instance.capture("$exception", e, {
				_noTruncate: !0,
				_batchKey: "exceptionEvent",
				_originatedFromCaptureException: !0
			});
		}
		_matchesSuppressionRule(e) {
			if (e.length === 0) return !1;
			var t = e.reduce(((e, t) => {
				var { type: n, value: r } = t;
				return z(n) && n.length > 0 && e.$exception_types.push(n), z(r) && r.length > 0 && e.$exception_values.push(r), e;
			}), {
				$exception_types: [],
				$exception_values: []
			});
			return this._suppressionRules.some(((e) => {
				var n = e.values.map(((e) => {
					var n = Fi[e.operator], r = I(e.value) ? e.value : [e.value], i = t[e.key] ?? [];
					return r.length > 0 && n(r, i);
				}));
				return e.type === "OR" ? n.some(Boolean) : n.every(Boolean);
			}));
		}
		_isExtensionException(e) {
			return e.flatMap(((e) => e.stacktrace?.frames ?? [])).some(((e) => e.filename && e.filename.startsWith("chrome-extension://")));
		}
		_isPostHogException(e) {
			if (e.length > 0) {
				var t, n, r = e[0].stacktrace?.frames ?? [], i = r[r.length - 1];
				return (t = i == null || (n = i.filename) == null ? void 0 : n.includes("posthog.com/static")) != null && t;
			}
			return !1;
		}
		_isExceptionList(e) {
			return !B(e) && I(e);
		}
	}
}, Bo = i({ productTours: class {
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
		"productTours" in e && (this._persistence && this._persistence.register({ [y]: !!e.productTours }), this.loadIfEnabled());
	}
	loadIfEnabled() {
		var e, t;
		this._productTourManager || (e = this._instance).config.disable_product_tours || (t = e.persistence) == null || !t.get_property(y) || this._loadScript((() => this._startProductTours()));
	}
	_loadScript(e) {
		var t, n;
		(t = P.__PosthogExtensions__) != null && t.generateProductTours ? e() : (n = P.__PosthogExtensions__) == null || n.loadExternalDependency == null || n.loadExternalDependency(this._instance, "product-tours", ((t) => {
			t ? oo.error("Could not load product tours script", t) : e();
		}));
	}
	_startProductTours() {
		var e;
		!this._productTourManager && (e = P.__PosthogExtensions__) != null && e.generateProductTours && (this._productTourManager = P.__PosthogExtensions__.generateProductTours(this._instance, !0));
	}
	getProductTours(e, t) {
		if (t === void 0 && (t = !1), !I(this._cachedTours) || t) {
			var n = this._persistence;
			if (n) {
				var r = n.props[so];
				if (I(r) && !t) return this._cachedTours = r, void e(r, { isLoaded: !0 });
			}
			this._instance._send_request({
				url: this._instance.requestRouter.endpointFor("api", "/api/product_tours/?token=" + this._instance.config.token),
				method: "GET",
				callback: (t) => {
					var r = t.statusCode;
					if (r !== 200 || !t.json) {
						var i = "Product Tours API could not be loaded, status: " + r;
						oo.error(i), e([], {
							isLoaded: !1,
							error: i
						});
						return;
					}
					var a = I(t.json.product_tours) ? t.json.product_tours : [];
					this._cachedTours = a, n && n.register({ [so]: a }), e(a, { isLoaded: !0 });
				}
			});
		} else e(this._cachedTours, { isLoaded: !0 });
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
		this._productTourManager ? this._productTourManager.previewTour(e) : this._loadScript((() => {
			var t;
			this._startProductTours(), (t = this._productTourManager) == null || t.previewTour(e);
		}));
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
		this._cachedTours = null, (e = this._persistence) == null || e.unregister(so);
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
} }, Io), Vo = { siteApps: class {
	constructor(e) {
		this._instance = e, this._bufferedInvocations = [], this.apps = {};
	}
	get isEnabled() {
		return !!this._instance.config.opt_in_site_apps;
	}
	_eventCollector(e, t) {
		if (t) {
			var n = this.globalsForEvent(t);
			this._bufferedInvocations.push(n), this._bufferedInvocations.length > 1e3 && (this._bufferedInvocations = this._bufferedInvocations.slice(10));
		}
	}
	get siteAppLoaders() {
		var e;
		return (e = P._POSTHOG_REMOTE_CONFIG) == null || (e = e[this._instance.config.token]) == null ? void 0 : e.siteApps;
	}
	initialize() {
		if (this.isEnabled) {
			var e = this._instance._addCaptureHook(this._eventCollector.bind(this));
			this._stopBuffering = () => {
				e(), this._bufferedInvocations = [], this._stopBuffering = void 0;
			};
		}
	}
	globalsForEvent(e) {
		if (!e) throw Error("Event payload is required");
		var t = {}, n = this._instance.get_property("$groups") || [], r = this._instance.get_property("$stored_group_properties") || {};
		for (var [o, s] of Object.entries(r)) t[o] = {
			id: n[o],
			type: o,
			properties: s
		};
		var { $set_once: c, $set: l } = e;
		return {
			event: i({}, a(e, co), {
				properties: i({}, e.properties, l ? { $set: i({}, e.properties?.$set ?? {}, l) } : {}, c ? { $set_once: i({}, e.properties?.$set_once ?? {}, c) } : {}),
				elements_chain: e.properties?.$elements_chain ?? "",
				distinct_id: e.properties?.distinct_id
			}),
			person: { properties: this._instance.get_property("$stored_person_properties") },
			groups: t
		};
	}
	setupSiteApp(e) {
		var t = this.apps[e.id], n = () => {
			var n;
			!t.errored && this._bufferedInvocations.length && (lo.info("Processing " + this._bufferedInvocations.length + " events for site app with id " + e.id), this._bufferedInvocations.forEach(((e) => t.processEvent == null ? void 0 : t.processEvent(e))), t.processedBuffer = !0), Object.values(this.apps).every(((e) => e.processedBuffer || e.errored)) && ((n = this._stopBuffering) == null || n.call(this));
		}, r = !1, i = (i) => {
			t.errored = !i, t.loaded = !0, lo.info("Site app with id " + e.id + " " + (i ? "loaded" : "errored")), r && n();
		};
		try {
			var { processEvent: a } = e.init({
				posthog: this._instance,
				callback(e) {
					i(e);
				}
			});
			a && (t.processEvent = a), r = !0;
		} catch (t) {
			lo.error(uo + e.id, t), i(!1);
		}
		if (r && t.loaded) try {
			n();
		} catch (n) {
			lo.error("Error while processing buffered events PostHog app with config id " + e.id, n), t.errored = !0;
		}
	}
	_setupSiteApps() {
		var e = this.siteAppLoaders || [];
		for (var t of e) this.apps[t.id] = {
			id: t.id,
			loaded: !1,
			errored: !1,
			processedBuffer: !1
		};
		for (var n of e) this.setupSiteApp(n);
	}
	_onCapturedEvent(e) {
		if (Object.keys(this.apps).length !== 0) {
			var t = this.globalsForEvent(e);
			for (var n of Object.values(this.apps)) try {
				n.processEvent == null || n.processEvent(t);
			} catch (t) {
				lo.error("Error while processing event " + e.event + " for site app " + n.id, t);
			}
		}
	}
	onRemoteConfig(e) {
		var t, n, r, i = this;
		if ((t = this.siteAppLoaders) != null && t.length) return this.isEnabled ? (this._setupSiteApps(), void this._instance.on("eventCaptured", ((e) => this._onCapturedEvent(e)))) : void lo.error("PostHog site apps are disabled. Enable the \"opt_in_site_apps\" config to proceed.");
		if ((n = this._stopBuffering) == null || n.call(this), (r = e.siteApps) != null && r.length) if (this.isEnabled) {
			var a = function(e) {
				var t;
				P["__$$ph_site_app_" + e] = i._instance, (t = P.__PosthogExtensions__) == null || t.loadSiteApp == null || t.loadSiteApp(i._instance, s, ((t) => {
					if (t) return lo.error(uo + e, t);
				}));
			};
			for (var { id: o, url: s } of e.siteApps) a(o);
		} else lo.error("PostHog site apps are disabled. Enable the \"opt_in_site_apps\" config to proceed.");
	}
} }, Ho = { tracingHeaders: class {
	constructor(e) {
		this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0, this._startCapturing = () => {
			var e, t;
			R(this._restoreXHRPatch) && ((e = P.__PosthogExtensions__) == null || (e = e.tracingHeadersPatchFns) == null || e._patchXHR(this._instance.config.__add_tracing_headers || [], this._instance.get_distinct_id(), this._instance.sessionManager)), R(this._restoreFetchPatch) && ((t = P.__PosthogExtensions__) == null || (t = t.tracingHeadersPatchFns) == null || t._patchFetch(this._instance.config.__add_tracing_headers || [], this._instance.get_distinct_id(), this._instance.sessionManager));
		}, this._instance = e;
	}
	initialize() {
		this.startIfEnabledOrStop();
	}
	_loadScript(e) {
		var t, n;
		(t = P.__PosthogExtensions__) != null && t.tracingHeadersPatchFns && e(), (n = P.__PosthogExtensions__) == null || n.loadExternalDependency == null || n.loadExternalDependency(this._instance, "tracing-headers", ((t) => {
			if (t) return Ya.error("failed to load script", t);
			e();
		}));
	}
	startIfEnabledOrStop() {
		var e, t;
		this._instance.config.__add_tracing_headers ? this._loadScript(this._startCapturing) : ((e = this._restoreXHRPatch) == null || e.call(this), (t = this._restoreFetchPatch) == null || t.call(this), this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0);
	}
} }, Uo = i({ surveys: class {
	get _config() {
		return this._instance.config;
	}
	constructor(e) {
		this._isSurveysEnabled = void 0, this._surveyManager = null, this._isInitializingSurveys = !1, this._surveyCallbacks = [], this._getSurveysInFlightPromise = null, this._instance = e, this._surveyEventReceiver = null;
	}
	initialize() {
		this.loadIfEnabled();
	}
	onRemoteConfig(e) {
		if (!this._config.disable_surveys) {
			var t = e.surveys;
			if (B(t)) return Q.warn("Flags not loaded yet. Not loading surveys.");
			this._isSurveysEnabled = I(t) ? t.length > 0 : t, Q.info("flags response received, isSurveysEnabled: " + this._isSurveysEnabled), this.loadIfEnabled();
		}
	}
	reset() {
		localStorage.removeItem("lastSeenSurveyDate");
		for (var e = [], t = 0; t < localStorage.length; t++) {
			var n = localStorage.key(t);
			(n != null && n.startsWith(Vi) || n != null && n.startsWith("inProgressSurvey_")) && e.push(n);
		}
		e.forEach(((e) => localStorage.removeItem(e)));
	}
	loadIfEnabled() {
		if (!this._surveyManager) if (this._isInitializingSurveys) Q.info("Already initializing surveys, skipping...");
		else if (this._config.disable_surveys) Q.info(_o);
		else if (this._config.cookieless_mode && this._instance.consent.isOptedOut()) Q.info("Not loading surveys in cookieless mode without consent.");
		else {
			var e = P?.__PosthogExtensions__;
			if (e) {
				if (!R(this._isSurveysEnabled) || this._config.advanced_enable_surveys) {
					var t = this._isSurveysEnabled || this._config.advanced_enable_surveys;
					this._isInitializingSurveys = !0;
					try {
						var n = e.generateSurveys;
						if (n) return void this._completeSurveyInitialization(n, t);
						var r = e.loadExternalDependency;
						if (!r) return void this._handleSurveyLoadError(me);
						r(this._instance, "surveys", ((n) => {
							n || !e.generateSurveys ? this._handleSurveyLoadError("Could not load surveys script", n) : this._completeSurveyInitialization(e.generateSurveys, t);
						}));
					} catch (e) {
						throw this._handleSurveyLoadError("Error initializing surveys", e), e;
					} finally {
						this._isInitializingSurveys = !1;
					}
				}
			} else Q.error("PostHog Extensions not found.");
		}
	}
	_completeSurveyInitialization(e, t) {
		this._surveyManager = e(this._instance, t), this._surveyEventReceiver = new ho(this._instance), Q.info("Surveys loaded successfully"), this._notifySurveyCallbacks({ isLoaded: !0 });
	}
	_handleSurveyLoadError(e, t) {
		Q.error(e, t), this._notifySurveyCallbacks({
			isLoaded: !1,
			error: e
		});
	}
	onSurveysLoaded(e) {
		return this._surveyCallbacks.push(e), this._surveyManager && this._notifySurveyCallbacks({ isLoaded: !0 }), () => {
			this._surveyCallbacks = this._surveyCallbacks.filter(((t) => t !== e));
		};
	}
	getSurveys(e, t) {
		if (t === void 0 && (t = !1), this._config.disable_surveys) return Q.info(_o), e([]);
		var n, r = this._instance.get_property(re);
		if (r && !t) return e(r, { isLoaded: !0 });
		typeof Promise < "u" && this._getSurveysInFlightPromise ? this._getSurveysInFlightPromise.then(((t) => {
			var { surveys: n, context: r } = t;
			return e(n, r);
		})) : (typeof Promise < "u" && (this._getSurveysInFlightPromise = new Promise(((e) => {
			n = e;
		}))), this._instance._send_request({
			url: this._instance.requestRouter.endpointFor("api", "/api/surveys/?token=" + this._config.token),
			method: "GET",
			timeout: this._config.surveys_request_timeout_ms,
			callback: (t) => {
				var r;
				this._getSurveysInFlightPromise = null;
				var i = t.statusCode;
				if (i !== 200 || !t.json) {
					var a = "Surveys API could not be loaded, status: " + i;
					Q.error(a);
					var o = {
						isLoaded: !1,
						error: a
					};
					e([], o), n?.({
						surveys: [],
						context: o
					});
					return;
				}
				var s, c = t.json.surveys || [], l = c.filter(((e) => function(e) {
					return !(!e.start_date || e.end_date);
				}(e) && (function(e) {
					var t;
					return !((t = e.conditions) == null || (t = t.events) == null || (t = t.values) == null || !t.length);
				}(e) || function(e) {
					var t;
					return !((t = e.conditions) == null || (t = t.actions) == null || (t = t.values) == null || !t.length);
				}(e))));
				l.length > 0 && ((s = this._surveyEventReceiver) == null || s.register(l)), (r = this._instance.persistence) == null || r.register({ [re]: c });
				var u = { isLoaded: !0 };
				e(c, u), n?.({
					surveys: c,
					context: u
				});
			}
		}));
	}
	_notifySurveyCallbacks(e) {
		for (var t of this._surveyCallbacks) try {
			if (!e.isLoaded) return t([], e);
			this.getSurveys(t);
		} catch (e) {
			Q.error("Error in survey callback", e);
		}
	}
	getActiveMatchingSurveys(e, t) {
		if (t === void 0 && (t = !1), !B(this._surveyManager)) return this._surveyManager.getActiveMatchingSurveys(e, t);
		Q.warn("init was not called");
	}
	_getSurveyById(e) {
		var t = null;
		return this.getSurveys(((n) => {
			t = n.find(((t) => t.id === e)) ?? null;
		})), t;
	}
	_checkSurveyEligibility(e) {
		if (B(this._surveyManager)) return {
			eligible: !1,
			reason: go
		};
		var t = typeof e == "string" ? this._getSurveyById(e) : e;
		return t ? this._surveyManager.checkSurveyEligibility(t) : {
			eligible: !1,
			reason: "Survey not found"
		};
	}
	canRenderSurvey(e) {
		if (B(this._surveyManager)) return Q.warn("init was not called"), {
			visible: !1,
			disabledReason: go
		};
		var t = this._checkSurveyEligibility(e);
		return {
			visible: t.eligible,
			disabledReason: t.reason
		};
	}
	canRenderSurveyAsync(e, t) {
		return B(this._surveyManager) ? (Q.warn("init was not called"), Promise.resolve({
			visible: !1,
			disabledReason: go
		})) : new Promise(((n) => {
			this.getSurveys(((t) => {
				var r = t.find(((t) => t.id === e)) ?? null;
				if (r) {
					var i = this._checkSurveyEligibility(r);
					n({
						visible: i.eligible,
						disabledReason: i.reason
					});
				} else n({
					visible: !1,
					disabledReason: "Survey not found"
				});
			}), t);
		}));
	}
	renderSurvey(e, t, n) {
		var r;
		if (B(this._surveyManager)) Q.warn("init was not called");
		else {
			var i = typeof e == "string" ? this._getSurveyById(e) : e;
			if (i != null && i.id) if (Wi.includes(i.type)) {
				var a = N?.querySelector(t);
				if (a) return (r = i.appearance) != null && r.surveyPopupDelaySeconds ? (Q.info("Rendering survey " + i.id + " with delay of " + i.appearance.surveyPopupDelaySeconds + " seconds"), void setTimeout((() => {
					var e;
					Q.info("Rendering survey " + i.id + " with delay of " + i.appearance?.surveyPopupDelaySeconds + " seconds"), (e = this._surveyManager) == null || e.renderSurvey(i, a, n), Q.info("Survey " + i.id + " rendered");
				}), 1e3 * i.appearance.surveyPopupDelaySeconds)) : void this._surveyManager.renderSurvey(i, a, n);
				Q.warn("Survey element not found");
			} else Q.warn("Surveys of type " + i.type + " cannot be rendered in the app");
			else Q.warn("Survey not found");
		}
	}
	displaySurvey(e, t) {
		var n;
		if (B(this._surveyManager)) Q.warn("init was not called");
		else {
			var r = this._getSurveyById(e);
			if (r) {
				var a = r;
				if ((n = r.appearance) != null && n.surveyPopupDelaySeconds && t.ignoreDelay && (a = i({}, r, { appearance: i({}, r.appearance, { surveyPopupDelaySeconds: 0 }) })), t.displayType !== jr.Popover && t.initialResponses && Q.warn("initialResponses is only supported for popover surveys. prefill will not be applied."), !1 === t.ignoreConditions) {
					var o = this.canRenderSurvey(r);
					if (!o.visible) return void Q.warn("Survey is not eligible to be displayed: ", o.disabledReason);
				}
				t.displayType === jr.Inline ? this.renderSurvey(a, t.selector, t.properties) : this._surveyManager.handlePopoverSurvey(a, t);
			} else Q.warn("Survey not found");
		}
	}
	cancelPendingSurvey(e) {
		B(this._surveyManager) ? Q.warn("init was not called") : this._surveyManager.cancelSurvey(e);
	}
	handlePageUnload() {
		var e;
		(e = this._surveyManager) == null || e.handlePageUnload();
	}
} }, Io), Wo = { toolbar: class {
	constructor(e) {
		this.instance = e;
	}
	_setToolbarState(e) {
		P.ph_toolbar_state = e;
	}
	_getToolbarState() {
		return P.ph_toolbar_state ?? 0;
	}
	initialize() {
		return this.maybeLoadToolbar();
	}
	maybeLoadToolbar(e, t, n) {
		if (e === void 0 && (e = void 0), t === void 0 && (t = void 0), n === void 0 && (n = void 0), Pn(this.instance.config) || !j || !N) return !1;
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
			var r, i = vo || lr(e.hash, "__posthog") || lr(e.hash, "state"), a = i ? kn((() => JSON.parse(atob(decodeURIComponent(i))))) || kn((() => JSON.parse(decodeURIComponent(i)))) : null;
			return a && a.action === "ph_authorize" ? ((r = a).source = "url", r && Object.keys(r).length > 0 && (a.desiredHash ? e.hash = a.desiredHash : n ? n.replaceState(n.state, "", e.pathname + e.search) : e.hash = "")) : ((r = JSON.parse(t.getItem(yo) || "{}")).source = "localstorage", delete r.userIntent), !(!r.token || this.instance.config.token !== r.token || (this.loadToolbar(r), 0));
		} catch {
			return !1;
		}
	}
	_callLoadToolbar(e) {
		var t = P.ph_load_toolbar || P.ph_load_editor;
		!B(t) && Ve(t) ? t(e, this.instance) : bo.warn("No toolbar load function found");
	}
	loadToolbar(e) {
		var t = !(N == null || !N.getElementById(k));
		if (!j || t) return !1;
		var n = this.instance.requestRouter.region === "custom" && this.instance.config.advanced_disable_toolbar_metrics, r = i({ token: this.instance.config.token }, e, { apiURL: this.instance.requestRouter.endpointFor("ui") }, n ? { instrument: !1 } : {});
		if (j.localStorage.setItem(yo, JSON.stringify(i({}, r, { source: void 0 }))), this._getToolbarState() === 2) this._callLoadToolbar(r);
		else if (this._getToolbarState() === 0) {
			var a;
			this._setToolbarState(1), (a = P.__PosthogExtensions__) == null || a.loadExternalDependency == null || a.loadExternalDependency(this.instance, "toolbar", ((e) => {
				if (e) return bo.error("[Toolbar] Failed to load", e), void this._setToolbarState(0);
				this._setToolbarState(2), this._callLoadToolbar(r);
			})), q(j, "turbolinks:load", (() => {
				this._setToolbarState(0), this.loadToolbar(r);
			}));
		}
		return !0;
	}
	_loadEditor(e) {
		return this.loadToolbar(e);
	}
	maybeLoadEditor(e, t, n) {
		return e === void 0 && (e = void 0), t === void 0 && (t = void 0), n === void 0 && (n = void 0), this.maybeLoadToolbar(e, t, n);
	}
} }, Go = i({ experiments: No }, Io), Ko = i({}, Io, Lo, Ro, zo, Bo, Vo, Uo, Ho, Wo, Go, { conversations: class {
	constructor(e) {
		this._isConversationsEnabled = void 0, this._conversationsManager = null, this._isInitializing = !1, this._remoteConfig = null, this._instance = e;
	}
	initialize() {
		this.loadIfEnabled();
	}
	onRemoteConfig(e) {
		if (!this._instance.config.disable_conversations) {
			var t = e.conversations;
			B(t) || (qe(t) ? this._isConversationsEnabled = t : (this._isConversationsEnabled = t.enabled, this._remoteConfig = t), this.loadIfEnabled());
		}
	}
	reset() {
		var e;
		(e = this._conversationsManager) == null || e.reset(), this._conversationsManager = null, this._isConversationsEnabled = void 0, this._remoteConfig = null;
	}
	loadIfEnabled() {
		if (!(this._conversationsManager || this._isInitializing || this._instance.config.disable_conversations || Pn(this._instance.config) || this._instance.config.cookieless_mode && this._instance.consent.isOptedOut())) {
			var e = P?.__PosthogExtensions__;
			if (e && !R(this._isConversationsEnabled) && this._isConversationsEnabled) if (this._remoteConfig && this._remoteConfig.token) {
				this._isInitializing = !0;
				try {
					var t = e.initConversations;
					if (t) return this._completeInitialization(t), void (this._isInitializing = !1);
					var n = e.loadExternalDependency;
					if (!n) return void this._handleLoadError(me);
					n(this._instance, "conversations", ((t) => {
						t || !e.initConversations ? this._handleLoadError("Could not load conversations script", t) : this._completeInitialization(e.initConversations), this._isInitializing = !1;
					}));
				} catch (e) {
					this._handleLoadError("Error initializing conversations", e), this._isInitializing = !1;
				}
			} else Po.error("Conversations enabled but missing token in remote config.");
		}
	}
	_completeInitialization(e) {
		if (this._remoteConfig) try {
			this._conversationsManager = e(this._remoteConfig, this._instance), Po.info("Conversations loaded successfully");
		} catch (e) {
			this._handleLoadError("Error completing conversations initialization", e);
		}
		else Po.error("Cannot complete initialization: remote config is null");
	}
	_handleLoadError(e, t) {
		Po.error(e, t), this._conversationsManager = null, this._isInitializing = !1;
	}
	show() {
		this._conversationsManager ? this._conversationsManager.show() : Po.warn("Conversations not loaded yet.");
	}
	hide() {
		this._conversationsManager && this._conversationsManager.hide();
	}
	isAvailable() {
		return !0 === this._isConversationsEnabled && !We(this._conversationsManager);
	}
	isVisible() {
		var e;
		return (e = this._conversationsManager?.isVisible()) != null && e;
	}
	sendMessage(e, t, n) {
		var i = this;
		return r((function* () {
			return i._conversationsManager ? i._conversationsManager.sendMessage(e, t, n) : (Po.warn(Fo), null);
		}))();
	}
	getMessages(e, t) {
		var n = this;
		return r((function* () {
			return n._conversationsManager ? n._conversationsManager.getMessages(e, t) : (Po.warn(Fo), null);
		}))();
	}
	markAsRead(e) {
		var t = this;
		return r((function* () {
			return t._conversationsManager ? t._conversationsManager.markAsRead(e) : (Po.warn(Fo), null);
		}))();
	}
	getTickets(e) {
		var t = this;
		return r((function* () {
			return t._conversationsManager ? t._conversationsManager.getTickets(e) : (Po.warn(Fo), null);
		}))();
	}
	requestRestoreLink(e) {
		var t = this;
		return r((function* () {
			return t._conversationsManager ? t._conversationsManager.requestRestoreLink(e) : (Po.warn(Fo), null);
		}))();
	}
	restoreFromToken(e) {
		var t = this;
		return r((function* () {
			return t._conversationsManager ? t._conversationsManager.restoreFromToken(e) : (Po.warn(Fo), null);
		}))();
	}
	restoreFromUrlToken() {
		var e = this;
		return r((function* () {
			return e._conversationsManager ? e._conversationsManager.restoreFromUrlToken() : (Po.warn(Fo), null);
		}))();
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
} }, { logs: class {
	constructor(e) {
		var t;
		this._isLogsEnabled = !1, this._isLoaded = !1, this._instance = e, this._instance && (t = this._instance.config.logs) != null && t.captureConsoleLogs && (this._isLogsEnabled = !0);
	}
	initialize() {
		this.loadIfEnabled();
	}
	onRemoteConfig(e) {
		var t = e.logs?.captureConsoleLogs;
		!B(t) && t && (this._isLogsEnabled = !0, this.loadIfEnabled());
	}
	reset() {}
	loadIfEnabled() {
		if (this._isLogsEnabled && !this._isLoaded) {
			var e = W("[logs]"), t = P?.__PosthogExtensions__;
			if (t) {
				var n = t.loadExternalDependency;
				n ? n(this._instance, "logs", ((n) => {
					var r;
					n || (r = t.logs) == null || !r.initializeLogs ? e.error("Could not load logs script", n) : (t.logs.initializeLogs(this._instance), this._isLoaded = !0);
				})) : e.error(me);
			} else e.error("PostHog Extensions not found.");
		}
	}
} });
la.__defaultExtensionClasses = i({}, Ko);
var qo, Jo = (qo = Yi[ra] = new la(), function() {
	function e() {
		e.done || (e.done = !0, ia = !1, G(Yi, (function(e) {
			e._dom_loaded();
		})));
	}
	N != null && N.addEventListener ? N.readyState === "complete" ? e() : q(N, "DOMContentLoaded", e, { capture: !1 }) : j && U.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized");
}(), qo);
//#endregion
//#region src/modules/analytics/posthog.js
function Yo(e, t) {
	Jo.capture(e, t);
}
function Xo() {
	try {
		Jo.init("phc_rlYc31x7Pvbc1XzLuePdrHh1JIFq4ClkniLjoqs0V1N", {
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
function Zo() {
	typeof window.self == "string" && (e(), window.self = window), Xo();
}
//#endregion
export { Zo as n, Yo as t };

//# sourceMappingURL=posthog-DuJgcWF0.js.map