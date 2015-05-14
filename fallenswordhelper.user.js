// ==UserScript==
// @name           FallenSwordHelper
// @namespace      terrasoft.gr
// @description    Fallen Sword Helper
// @include        http://www.fallensword.com/*
// @include        http://guide.fallensword.com/*
// @include        http://fallensword.com/*
// @include        http://*.fallensword.com/*
// @include        http://local.huntedcow.com/fallensword/*
// @exclude        http://forum.fallensword.com/*
// @exclude        http://wiki.fallensword.com/*
// @version        1498
// @downloadURL    https://github.com/fallenswordhelper/fallenswordhelper/raw/master/fallenswordhelper.user.js
// @grant          none
// ==/UserScript==

// No warranty expressed or implied. Use at your own risk.

// EVERYTHING MUST BE IN main()
var main = function() {

var isBeta ="0";
var isNewUI = "0";

// jquery GM_get/set wrapper
function GM_JQ_wrapper() {
	if (typeof(GM_setValue) != 'undefined') {
		var oldGM_setValue = GM_setValue;
		GM_setValue = function(name, value){
			setTimeout(function() {oldGM_setValue(name, value);}, 0);
		};
		var oldGM_openInTab = GM_openInTab;
		GM_openInTab = function(url) {
			setTimeout(function() {oldGM_openInTab(url);}, 0);
		};
		var oldGM_xmlhttpRequest = GM_xmlhttpRequest;
		GM_xmlhttpRequest = function(details) {
			setTimeout(function() {oldGM_xmlhttpRequest(details);}, 0);
		};
		// don't know how to modify GM_getValue yet (how to return value from setTimeout) - TODO
		// other GM_functions are not needed.
	}
}
GM_JQ_wrapper();

// GM_ApiBrowserCheck
// @author        GIJoe
// @license       http://creativecommons.org/licenses/by-nc-sa/3.0/
var gvar = function(){}
// Global variables
function GM_ApiBrowserCheck(){
    const GMSTORAGE_PATH = 'GM_';
    // You can change it to avoid conflict with others scripts
    GM_addStyle = function(css){
        var style = document.createElement('style');
        style.textContent = css;
        document.getElementsByTagName('head')[0].appendChild(style);
    }
    if (typeof(unsafeWindow) == 'undefined'){
        unsafeWindow = window;
    }
    if (typeof(GM_log) == 'undefined'){
        GM_log = function(msg){
            try{
                unsafeWindow.console.log('GM_log: ' + msg);
            } catch(e){}
        };
    }
    GM_clog = function(msg){
        if (arguments.callee.counter){
            arguments.callee.counter++;
        } else{
            arguments.callee.counter = 1;
        }
        GM_log('(' + arguments.callee.counter + ') ' + msg);
    }
    GM_addGlobalStyle = function(css){
        // Redefine GM_addGlobalStyle with a better routine
        var sel = document.createElement('style');
        sel.setAttribute('type', 'text/css');
        sel.appendChild(document.createTextNode(css));
        var hel = document.documentElement.firstChild;
        while (hel && hel.nodeName != 'HEAD'){
            hel = hel.nextSibling;
        }
        if (hel && hel.nodeName == 'HEAD'){
            hel.appendChild(sel);
        } else{
            document.body.insertBefore(sel, document.body.firstChild);
        }
        return sel;
    }
    var needApiUpgrade = false;
    if (window.navigator.appName.match(/^opera/i) && typeof(window.opera) != 'undefined'){
        needApiUpgrade = true;
        gvar.isOpera = true;
        GM_log = window.opera.postError;
    }
    if (typeof(GM_setValue) != 'undefined'){
        var gsv; try { gsv=GM_setValue.toString(); } catch(e) { gsv='staticArgs'; }
        if (gsv.indexOf('staticArgs') > 0){
            gvar.isGreaseMonkey = true;
        }
        // test GM_hitch
        else if (gsv.match(/not\s+supported/)){
            needApiUpgrade = true;
            gvar.isBuggedChrome = true;
        }
    } else{
        needApiUpgrade = true;
    }

    if (needApiUpgrade){
        var ws = null;
        try{
			ws = typeof(unsafeWindow.localStorage);
			unsafeWindow.localStorage.length;
        } catch(e){
			ws = null;
        }
        // Catch Security error
        if (ws == 'object'){
            GM_getValue = function(name, defValue){
                var value = unsafeWindow.localStorage.getItem(GMSTORAGE_PATH + name);
                if (value == null){
                    return defValue;
                } else{
                    switch (value.substr(0, 2)){
                    case 'S]':
                        return value.substr(2);
                    case 'N]':
                        return parseInt(value.substr(2));
                    case 'B]':
                        return value.substr(2) == 'true';
                    }
                }
                return value;
            }
            GM_setValue = function(name, value){
                switch (typeof(value)){
                case 'string':
                    unsafeWindow.localStorage.setItem(GMSTORAGE_PATH + name, 'S]' + value);
                    break;
                case 'number':
                    if (value.toString().indexOf('.') < 0){
                        unsafeWindow.localStorage.setItem(GMSTORAGE_PATH + name, 'N]' + value);
                    }
                    break;
                case 'boolean':
                    unsafeWindow.localStorage.setItem(GMSTORAGE_PATH + name, 'B]' + value);
                    break;
                }
            }
            GM_deleteValue = function(name){
                unsafeWindow.localStorage.removeItem(GMSTORAGE_PATH + name);
            }
        } else if (!gvar.isOpera || typeof(GM_setValue) == 'undefined'){
            gvar.temporarilyStorage = new Array();
            GM_getValue = function(name, defValue){
                if (typeof(gvar.temporarilyStorage[GMSTORAGE_PATH + name]) == 'undefined'){
                    return defValue;
                } else{
                    return gvar.temporarilyStorage[GMSTORAGE_PATH + name];
                }
            }
            GM_setValue = function(name, value){
                switch (typeof(value)){
                case "string":
                case "boolean":
                case "number":
                    gvar.temporarilyStorage[GMSTORAGE_PATH + name] = value;
                }
            }
            GM_deleteValue = function(name){
                delete gvar.temporarilyStorage[GMSTORAGE_PATH + name];
            };
        }

		GM_listValues = function(){
			var list = [];
			var reKey = new RegExp("^" + GMSTORAGE_PATH);
			for (var i = 0, il = unsafeWindow.localStorage.length; i < il; i++) {
				var key = unsafeWindow.localStorage.key(i);
				if (key.match(reKey)) {
					list.push(key.replace(GMSTORAGE_PATH, ''));
				}
			}
			return list;
		}
        if (typeof(GM_openInTab) == 'undefined'){
            GM_openInTab = function(url){
                unsafeWindow.open(url, "");
            }
        }
        if (typeof(GM_registerMenuCommand) == 'undefined'){
            GM_registerMenuCommand = function(name, cmd){
                GM_log("Notice: GM_registerMenuCommand is not supported.");
            }
        }
        // Dummy
        if (!gvar.isOpera || typeof(GM_xmlhttpRequest) == 'undefined'){
            GM_xmlhttpRequest = function(obj){
                var request = new XMLHttpRequest();
                request.onreadystatechange = function(){
                    if (obj.onreadystatechange){
                        obj.onreadystatechange(request);
                    };
                    if (request.readyState == 4 && obj.onload){
                        obj.onload(request);
                    }
                }
                request.onerror = function(){
                    if (obj.onerror){
                        obj.onerror(request);
                    }
                }
                try{
                    request.open(obj.method, obj.url, true);
                } catch(e){
                    if (obj.onerror){
                        obj.onerror({
                            readyState: 4,
                            responseHeaders: '',
                            responseText: '',
                            responseXML: '',
                            status: 403,
                            statusText: 'Forbidden'
                        });
                    };
                    return;
                }
                if (obj.headers){
                    for (name in obj.headers){
                        request.setRequestHeader(name, obj.headers[name]);
                    }
                }
                request.send(obj.data);
                return request;
            }
        }
    }
}
GM_ApiBrowserCheck();

// System functions
var System = {
	init: function() {
		Date.prototype.toFormatString = System.formatDate;

		Number.prototype.padZero = System.padZero;
		String.prototype.repeat = System.repeatString;
		if (!String.trim) {
			String.prototype.trimLeft  = System.trimLeft;
			String.prototype.trimRight = System.trimRight;
			String.prototype.trim      = System.trim;
		}
		Array.prototype.filterBy = System.filterBy;

		System.server           = document.location.protocol + "//" + document.location.host + "/";
		var uAgent = navigator.userAgent.match(/(Firefox|Minefield|IceWeasel|Chrome)\/(\d+)/i);
		System.browserName = uAgent[1];
		System.browserVersion = parseInt(uAgent[2],10);

		var imgurls = System.findNode("//img[contains(@src, '/skin/')]");
		if (!imgurls) return; //login screen or error loading etc.
		var idindex             = imgurls.src.indexOf("/skin/");
		System.imageServer      = imgurls.src.substr(0,idindex);
		System.imageServerHTTPOld  = "http://72.29.91.222"; // keep the old one around for some old images
		System.imageServerHTTP  = "http://huntedcow.cachefly.net/fs";

		Array.prototype.removeDuplicates = System.removeDuplicates;
	},

	getValueJSON: function(name) {
		var resultJSON=GM_getValue(name);
		var result;
		if (resultJSON) {
			var reviver = function (key, value) {
				if (typeof value === 'string') {
					var a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
					if (a) {
						return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6]));
					}
				}
				return value;
			};
			result = JSON.parse(resultJSON, reviver);
		}
		return result;
	},

	setValueJSON: function(name, value) {
		GM_setValue(name, JSON.stringify(value));
	},

	findNode: function(xpath, doc) {
		var nodes=System.findNodes(xpath, doc);
		if (!nodes) return null;
		return (nodes[0]);
	},
	
	findNodes: function(xpath, doc) {
			if (!doc) {
				doc=document;
			}
			var nodes=[];
			if(xpath.indexOf('/') == 0)
				xpath = '.'+xpath; //this is a chrome fix - needs a .// for xpath where as firefox can fucntion without it.  firefox sitll works with .//

			var findQ = document.evaluate(xpath, doc, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
			if (findQ.snapshotLength===0) return null;
			for (var i=0; i<findQ.snapshotLength; i++) {
				nodes.push(findQ.snapshotItem(i));
			}
			return nodes;
	},

	findNodeText: function(xpath, doc) {
		var node=System.findNode(xpath, doc);
		if (!node) return null;
		return node.textContent;
	},

	findNodeInt: function(xpath, doc) {
		var node=System.findNode(xpath, doc);
		if (!node) return null;
		return System.intValue(node.textContent);
	},

	createDocumentWithImages: function(details) {
		var doc=document.createElement("HTML");
		doc.innerHTML=details;
		return doc;
	},

	createDocument: function(details) {
		var doc=document.createElement("HTML");
		doc.innerHTML=details;
		return doc;
/*		commenting out until we can do some more testing on which screens to use this on.
		var doc=document.createElement("HTML");
		// new -- strip images
		var reg=/(<img\s[^>]*?src=\\?["']http:)\/\/([a-zA-Z0-9\-.])*?\//g;
		var stripped=details.replace(reg,"$1//0.0.0.0/");
		doc.innerHTML=stripped;
		// doc.innerHTML=details;  // old
		return doc;*/
	},
	
	//~ createDocument: function(str) { // chrome extension must use this createDocument (which not work under Firefox :( )
		//~ if (document.documentElement.nodeName != 'HTML') {
		    //~ return new DOMParser().parseFromString(str, 'application/xhtml+xml');
		//~ }
		//~ // FIXME
		//~ var html = str.replace(/<script(?:[ \t\r\n][^>]*)?>[\S\s]*?<\/script[ \t\r\n]*>|<\/?(?:i?frame|html|script|object)(?:[ \t\r\n][^<>]*)?>/gi, ' ')
		//~ var htmlDoc = document.implementation.createHTMLDocument ?
			//~ document.implementation.createHTMLDocument('fsh') :
			//~ document.implementation.createDocument(null, 'html', null)
		//~ var range = document.createRange()
		//~ range.selectNodeContents(document.documentElement)
		//~ htmlDoc.documentElement.appendChild(range.createContextualFragment(html))
		//~ return htmlDoc
	//~ },

	formatDateTime: function(aDate) {
		//var result=aDate.toDateString();
		var yyyy = aDate.getFullYear();
		var mon = aDate.getMonth()+1;
		if (mon<10) mon = "0" + mon;
		var dd = aDate.getDate();
		if (dd<10) dd = "0" + dd;

		var hh=aDate.getHours();
		if (hh<10) hh = "0" + hh;
		var mm=aDate.getMinutes();
		if (mm<10) mm = "0" + mm;
		var ss=aDate.getSeconds();
		if (ss<10) ss = "0" + ss;

		result = yyyy + "-" + mon + "-" + dd + " " + hh + ":" + mm + ":" + ss;

		return result;
	},

	formatDate: function(dateFormat) {
	    if (!this.valueOf()) return;
		var months = ['January', 'February', 'March', 'April', 'May', 'June',
			'July', 'August', 'September', 'October', 'November', 'December'];
		var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

		var theDate=this;
		var h;

		return dateFormat.replace(/(yyyy|MMMM|MMM|MM|dddd|ddd|dd|hh|HH|mm|ss|a)/g,
			function($1) {
				switch ($1) {
					case 'yyyy': return theDate.getFullYear();
					case 'MMMM': return months[theDate.getMonth()];
					case 'MMM':  return months[theDate.getMonth()].substr(0, 3);
					case 'MM':   return (theDate.getMonth() + 1).padZero(2);
					case 'dddd': return days[theDate.getDay()];
					case 'ddd':  return days[theDate.getDay()].substr(0, 3);
					case 'dd':   return theDate.getDate().padZero(2);
					case 'HH':   return theDate.getHours().padZero(2);
					case 'hh':   return ((h = theDate.getHours() % 12) ? h : 12).padZero(2);
					case 'mm':   return theDate.getMinutes().padZero(2);
					case 'ss':   return theDate.getSeconds().padZero(2);
					case 'a':  return theDate.getHours() < 12 ? 'am' : 'pm';
				}
			}
		);
	},

	padZero: function(zeroes) {
		var s=this.toString();
		var result="0".repeat(zeroes-s.length) + s;
		return result;
	},

	filterBy: function(property, value) {
		return this.filter(function(element, index, array) {return element[property]==value;});
	},

	repeatString: function(times) {
		var s = '';
		for (var i=0; i<times; i++) {
			s += this;
		}
		return s;
	},

	saveValueForm: function(oForm, name) {
		var formElement = System.findNode("//input[@name='" + name + "']", oForm);
		if (formElement.getAttribute("type")=="checkbox") {
			GM_setValue(name, formElement.checked);
		} else if (formElement.getAttribute("type")=="radio") {
			var radioElements = System.findNodes("//input[@name='" + name + "']", 0, oForm);
			for (var i=0; i<radioElements.length; i++) {
				var radioElement = radioElements[i];
				if (radioElement.checked) {
					GM_setValue(name, radioElement.value);
				}
			}
		} else {
			GM_setValue(name, formElement.value);
		}
	},

	setDefault: function(name, value) {
		if (GM_getValue(name)==undefined) GM_setValue(name, value);
	},

	xmlhttp: function(theUrl, func, theCallback) {
		theUrl=theUrl.replace(System.server, "");
		if (theUrl.indexOf("http://")<0)
			theUrl = System.server + theUrl;
		GM_xmlhttpRequest({
			method: 'GET',
			url: theUrl,
			callback: theCallback,
			headers: {
			//	"User-Agent" : navigator.userAgent,
			//	"Referer": document.location,
			//	"Cookie" : document.cookie
				"Cache-Control" : "no-cache, no-store, max-age=0, must-revalidate",
				"Pragma" : "no-cache",
				"Expires" : "Fri, 01 Jan 1990 00:00:00 GMT"
			},
			onload: function(responseDetails) {
				if (func) {
					func.call(this, responseDetails.responseText, this.callback);
				}
			}
		});
	},

	intValue: function(theText) {
		if (!theText) return 0;
		return parseInt(theText.replace(/,/g,""),10);
	},

	getIntFromRegExp: function(theText, rxSearch) {
		var matches = theText.replace(/,/g,"").match(rxSearch);
		if (matches) {
			result = parseInt(matches[1],10);
		} else {
			result = 0;
		}
		return result;
	},

	addCommas: function(nStr) {
		var x, x1, x2;
		nStr += '';
		x = nStr.split('.');
		x1 = x[0];
		x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + ',' + '$2');
		}
		return x1 + x2;
	},

	trim: function() {
	    return this.trimLeft().trimRight();
	},

	trimLeft: function() {
	    return this.replace(/^\s+/,"");
	},

	trimRight: function() {
	    return this.replace(/\s+$/,"");
	},

	removeDuplicates: function (removeBy){
		var temp=new Array();
		if (removeBy) {
			Helper.sortBy = removeBy;
			this.sort();
			for(i=0;i<this.length;i++) {
				var first = this[i];
				var second = (this[i+1]?this[i+1]:"abc");
				if(i != this.length && first[removeBy]==second[removeBy]) {continue;}
				temp[temp.length]=this[i];
			}
		} else {
			this.sort();
			for(i=0;i<this.length;i++) {
				var first = this[i];
				var second = (this[i+1]?this[i+1]:"abc");
				if(i != this.length && first==second) {continue;}
				temp[temp.length]=this[i];
			}
		}
		return temp;
	},

	convertTextToHtml: function(inputText) {
		return inputText.
			replace(/</g,"&lt").
			replace(/>/g,"&gt").
			replace(/\n/g,"<br>").
			replace(/\[\/([a-z])]/g,"<\/\$1>").
			replace(/\[([a-z])\]/g,"<\$1>");
	},

	generateLiveTable: function(dataArray, outputElement, itemProperty) {
		throw new Exception("Not ready yet!");
		/*if (!dataArray) return;
		var result='<table id="Helper:LiveTableOutput"><tr>' +
			'<th align="left" sortkey="guildId" sortType="number">Guild</th>' +
			'<th sortkey="name">Name</th>' +
			'<th sortkey="level" sortType="number">Level</th></tr>';
		var item, color;
		for (var i=0; i<dataArray[itemProperty].length;i++) {
			item=dataArray[itemProperty][i];

			result+='<tr class="HelperTableRow' + (1 + i % 2) +'">' +
				'<td><a href="index.php?cmd=guild&amp;subcmd=view&amp;guild_id=' + player.guildId + '">'+
					'<img width="16" border="0" height="16" src="' + System.imageServerHTTP + '/guilds/' + player.guildId + '_mini.jpg"></a></td>'+
				'<td><a href="index.php?cmd=profile&player_id='+player.id+'">'+ player.name+'</a></td>' +
				'<td align="right">' + player.level + '</td>' +
				'</tr>';
		}
		result+='</table>';
		outputElement.innerHTML=result;

		var theTable=document.getElementById('Helper:OnlinePlayersTable');
		for (var i=0; i<theTable.rows[0].cells.length; i++) {
			var cell=theTable.rows[0].cells[i];
			cell.style.textDecoration="underline";
			cell.style.cursor="pointer";
			cell.addEventListener('click', Helper.sortOnlinePlayersTable, true);
		}*/
	},

	sortLiveTable: function(evt) {
		throw new Exception("Not ready yet!");
		/*Helper.onlinePlayers=System.getValueJSON("onlinePlayers");
		var headerClicked = evt.target.getAttribute("sortKey");
		var sortType = evt.target.getAttribute("sortType");
		if (!sortType) sortType="string";
		GM_log(headerClicked);
		// GM_log(Helper.sortBy);
		GM_log(sortType);
		// numberSort
		if (Helper.sortAsc==undefined) Helper.sortAsc=true;
		if (Helper.sortBy && Helper.sortBy==headerClicked) {
			Helper.sortAsc=!Helper.sortAsc;
		}
		Helper.sortBy=headerClicked;

		switch(sortType) {
			case "string":
				Helper.onlinePlayers.players.sort(Helper.stringSort);
				break;
			case "number":
				Helper.onlinePlayers.players.sort(Helper.numberSort);
				break;
		}
		System.generateOnlinePlayersTable();*/
	},

	parseDate: function(textDate) {
		textDateSplitSpace = textDate.split(" ");
		timeText = textDateSplitSpace[0];
		dateText = textDateSplitSpace[1];
		dayText = dateText.split("/")[0];
		monthText = dateText.split("/")[1];
		if (monthText == "Jan") fullMonthText = "January";
		if (monthText == "Feb") fullMonthText = "February";
		if (monthText == "Mar") fullMonthText = "March";
		if (monthText == "Apr") fullMonthText = "April";
		if (monthText == "May") fullMonthText = "May";
		if (monthText == "Jun") fullMonthText = "June";
		if (monthText == "Jul") fullMonthText = "July";
		if (monthText == "Aug") fullMonthText = "August";
		if (monthText == "Sep") fullMonthText = "September";
		if (monthText == "Oct") fullMonthText = "October";
		if (monthText == "Nov") fullMonthText = "November";
		if (monthText == "Dec") fullMonthText = "December";
		yearText = dateText.split("/")[2];
		dateAsDate = new Date(fullMonthText + " " + dayText + ", " + yearText + " " + timeText + ":00");
		return dateAsDate;
	},

	toggleVisibilty: function(evt) {
		var anItemId=evt.target.getAttribute("linkto");
		var anItem=document.getElementById(anItemId);
		var currentVisibility=anItem.style.visibility;
		anItem.style.visibility=(currentVisibility=="hidden")?"visible":"hidden";
		anItem.style.display=(currentVisibility=="hidden")?"block":"none";
		if (GM_getValue(anItemId)) {
			GM_setValue(anItemId, "");
		} else{
			GM_setValue(anItemId, "ON");
		}
	}
};
System.init();

var Data = {

	plantFromComponent: function(aComponent) {
		switch(aComponent) {
			case "Amber Essense":      return "Amber Plant"; break;
			case "Blood Bloom Flower": return "Blood Bloom Plant"; break;
			case "Dark Shade ":        return "Dark Shade Plant"; break;
			case "Snake Eye":          return "Elya Snake Head"; break;
			case "Snake Venom Fang":   return "Elya Snake Head"; break;
			case "Heffle Wart":        return "Heffle Wart Plant"; break;
			case "Jademare Blossom":   return "Jademare Plant"; break;
			case "Trinettle Leaf":     return "Trinettle Plant"; break;
			case "Purplet Flower":     return "Purplet Plant"; break;
			default:                   return aComponent;
		}
	},

	huntingOnImage: function () {
		return "data:image/gif;base64,R0lGODlhKAAoALMAAD+yQH3Kf7zjvxCfEMvpzur17qzcry+rMDCsMGLAY9vv3k64T5fUmh+lIPr7/gCZACH5BAAAAAAALAAAAAAoACgAAASsEL1Jq704T6m7/2AojmRpnmiqrtQSBA2rDYJjO4mMBfd9YICXcAEoFn+eQs8WAAoDDIFiSRVYGROqwxAaELTVyXSZCx0ESrBNMFlYpY7CwOQFF67PAABZqqvBBHN9X39aXHSEhUsofoo3KY2OgieRhQAqAy8JAAZ/lzo1amUyoWBNoH+nMmlghzKFbDqwOgOKOgC2MriFkyq7njIDRsPEvTrHyMnKy8zHHM0bEQA7";
	},

	huntingOffImage: function() {
		return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAABh0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjM2qefiJQAAAVhJREFUWEftl08OQTEQxrkq5xDHkDiDxAUkrEms7IiNFQtWNiTKJxmppm2mpp33IhXNC9qZX7/50+qaTuf1bvELgG0ekK8CSkSoCkrUexew1EDp9Y0ADpZDg8HZnCrg7DA3t/vja/QW/SioGiAUc+Hoc0zJDyDJbj85IeDOOV3PQcBYuIOAo83YICTbyz5o2KcI1tCADdpASD18P9lNg2FmhXh1XCdBEgxACTC20VgesgDhBM5iYQqpaaeArS4BwyYrB7m5RPM4qsK5He5f8pytoG8DHMhY7tm/wZbPhwgQBnNC+opFDJgb0lUxC2BOyGKAuSCLAuaALA4IB9ROqAEj+bnVrALoOvHdYkLA7qmSrUhijT4F0L04VEAom3KGu81aRUFugWCefQNS+9P0V4DYjF1wrQtxBfT1w5QcbETB1Nu6eg5WQIkC0rUqbUYCWQEl6qmdxRLIJyPitjwjlrDgAAAAAElFTkSuQmCC";
	},

	soundMuteImage: function() {
		return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHNSURBVHjaYvz//z8DJQAggJgYKAQAAUS0Ad3dnZFtbS1P0cUBAoiFkMaenm7m////Nfz9+7f4379/nO/9/XOAwpsEN258BJIHCCAMA/r7+6wYGCDh8u/ffwag5oXCwsIqQkJCDOw7doCE04B4GUw9QABhGADUcJSVlQ1EMzABPSgsLMbAxsbBIHnyNIPMqzcgJVeAtr+DqQcIIAwD/v37y2BoaMjw8+cvIPsfw5MnTxhEjx1gkHv9muEdCwsD19+/acjqAQIIw4A/f/4yPH78mOHhw0dgAwwePmTQAWr+xMHBMF+Yn6Fn8vQvyOoBAgiLAX8Yvn79wnDv3j0Gx0+fGHS+f2d4AUwri/l5GX79/YcRyAABhBGNP358ZwClLV+g7Xa/fjG8YWRgqP78meED0CCQ99ABQABhuODnz58MYsePMRh9+MjwnpmFYamUOAMXMDSZgBjkJXQAEEAYLkh68HiO9bsPH5j//b++ho/L5fOvH3dlZCQZxMSEGbAle4AAQjEAmEgMJH798gemnNvs//+bNcxduJeBgVH9+7fvbW/fvPuOLaEBBBDYVGT8zs/PHYh50MVTUxOjgfgZujhAADFSmhsBAoji3AgQYAAwuNxkuZyGCwAAAABJRU5ErkJggg==";
	},

	soundImage: function() {
		return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAI9SURBVHjaYvz//z8DJQAggJgYKAQAAYTTgO7uzsi2tpanhAwACCAWdIGenm7m////Nfz9+7f4379/nNg0PcoqTmH48XOb3LwpzwACiKW/v8+KgQESDv/+/WcAal4oLCysIiQkxHDhwnlMzRmF1dxMf1u+fvtxBsg1BQggFqCGo6ysbCCNDExADwkLizGwsXEwfP78heHnj5+omtMLUoE2b/z153cLD8s/k0duIdkAAcTy799fBkNDQ4afP38BXfCP4cmTJwwPHtxi4OPjY/j1C2HAo9T8FG7Gv7OANlf+/vEzn52dcSLDtx+5AAHE8ufPX4bHjx8zPHz4CGzAjx8/GL5+/Qp0DSPD7z+/wZpfBUbfYeDiTv/7/w8Dw7fv7XJbVzA+svaeCHSNOkAAAQ34A9TwheHevXtAG38xfPnyheHbt28MCgpyDLCwAQJBhu8/gNy/QAN+QERA9M+fDAABxPTjx3cGUFoSFhZiEBDgZwB5CWQACIPYICC2fqkwUIMay9/fII2Vjwwc83i4mRkYvv+8CRBALD+Bpty8eY0B5BKQF6SlJSEJBBiiID4MyO1YNf2RmTsj0NmHWBn/XWb4BbT1x8/JAAHE9PfPb+sf339aAw2C4u93ZWQkGcTEhBnQk7ncqZ3TgLaGsgNTz5dHb8/IPb80FSCAGNEVpaUlMf//978JyCxkYGTgnD17PiNGWhDTyWD49XuT3IebzwACCGwLNpyamhgNxM9wycMwQAAxUpobAQKI4twIEGAA+Mk8nL2QZm8AAAAASUVORK5CYII=";
	},

	greenDiamond: function() {
		return "data:image/gif;base64,R0lGODlhCQAJAJH/AMDAwAcADAD/RAAAACH5BAEAAAAALAAAAAAJAAkAQAIUhBGnqCEPRUJwGvfslS1yGmmOVQAAOw%3D%3D";
	},

	yellowDiamond: function() {
		return "data:image/gif;base64,R0lGODlhCQAJAJH/AMDAwP3/AAcADAAAACH5BAEAAAAALAAAAAAJAAkAQAIUhCGnqBIPQ0JwGvfslS1yGmmOVQAAOw%3D%3D";
	},

	orangeDiamond: function() {
		return "data:image/gif;base64,R0lGODlhCQAJAJH/AMDAwP+9AAcADAAAACH5BAEAAAAALAAAAAAJAAkAQAIUhCGnqBIPQ0JwGvfslS1yGmmOVQAAOw%3D%3D";
	},

	offlineDot: function() {
		return "data:image/gif;base64,R0lGODlhDgAOAMQAAP///1paWnNzc4SEhK2trbW1tZylpWNra3OEhDE5OWNzc73e3rXW1qXGxpy9vZS1tYSlpXucnHOUlFJra2OEhEpjYxghISk5OVJzczlSUkprayExMTFKShgpKRAhIQAAACH5BAEAAAAALAAAAAAOAA4AQAWGICAChCINxihm2WRKiKJl19YBiBY5zNI8CAztMCJsLJ2Ox7MhqAgViiQioUxoBREHQ3E0GD8rzSK6XDicDNqMdIoKGA1mMsuk3hoKxOuAUDQcGykVGBENC4gOEkJnABxREQ8PEBIKFYEeAAoJGRUTdJc1FgIiAx1mZhtHHQMqIgQCHAGtKiEAOw%3D%3D";
	},

	sevenDayDot: function() {
		return "data:image/gif;base64,R0lGODlhDgAOAMQAAP///0JCQoSEhK2trXNrazEpKZyUnDkpMa1rjJxae5RSc3s5WlopQnMxUmMhQjkIIaWUnGNSWiEQGFIhOSEAEL1zlLVrjIxSa3M5UlIYMUoQKSkAEBgACIRrc2tSWgAAACH5BAEAAAAALAAAAAAOAA4AQAV8ICACENZ1xihqj+YsGMZkxUZJgJc1ilUhicbksYmMBhKKksMpDFQQV2PRcLA2T8Bjl0D8FEIiR0TZPM5n2y0LGDA0cJYmJRpkXopEYmG1pTQTCwkVhHtDGwcAGy4LeQoLbw8UYxFmGRkTl0STBCICSqCgEgIqdQQBEaQqIQA7";
	},

	redDot: function() {
		return "data:image/gif;base64,R0lGODlhDgAOAMQAAP///62trYyEhL2trUIpKa2UnP9znDEQGP9rjL0hQqUYOXsIIXtSWlIpMf9Sc94xUpQYMa0QMaUIKSkACFIAEHsAGJxCUudSa85CWs45UoRSWnMIGGMAEKVrczkACAAAACH5BAEAAAAALAAAAAAOAA4AQAV7ICAChdV1xSguS5RgWKZAy0YdgBY9juE7sgWHMQocPJSJkhBQFSSJhzQTETYBLYwDYUBcghyPiLKpsFg2z+EKGCgicIk5JXJHHfhHIlKhpCA7PT8YCjUNABVQWg4XhDRJORsLEBAzNDYTHSICFGSeSQcCKiIBDA0MoiohADs%3D";
	},

	runIcon: function() {
		return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAPYQAAD2EBqD+naQAAAAd0SU1FB9gDBhMMFhZz9poAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAABv0lEQVQ4y6WTMWsbQRCFPwUVa5BhBS684MZwzRkVukJFBGkE+QEhpUuVTid1SulSKt3lmvwAl04nF4a4UJCb4GsOXSNYQQS7IIGnU4qzT5JlJ5DMMsXO7ns7O/Om5H5Z/sfKzwNW3GowirlPE2YiABwqxUkQ0mm0Mapa2rxf2syge9NfjdOEj++THLg8Yw+wCyHxGfdTy0kQ0n/XLUjebILtNOO0FgLQq0+YVS5wiwyFJdKa01qInWZ0b/qrLQIrbjVOE5pHBhDelr8UJN5cIYA8rlZgGKcJVtyqIBiMYoxWWHFk3m3VpFefIOaKzLvCm0eawSheZzBOEzTgloJbyk6le/UJJrwtzpXKs9iqgZ/J2sW/SPLpQ4if5Q/4xw6Vi83i4Y/9Hv4c0v06BEDPZVcHsi+vgi9/XPL52znsg1EGqbhtglYtIpsmqFfA8W3MsTbkFxR+LrRq0boGnUYbKwJKIcgWuH99gRMp4qqisOLpNNprAqOqpWYQ4UTQB4cF+Py6DzywpxX6QKMqGjv3NIOokPSOlL+ndxxrjaooqqoKgBOHLIXM5+BNKZeeT+PTMA3TO4rfKGgF0d+H6V/sN7ur7I3UK1cpAAAAAElFTkSuQmCC";
	},

	stopIcon: function() {
		return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAPYQAAD2EBqD+naQAAAAd0SU1FB9gDBhMtH+MwW90AAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAyUlEQVQoz52SLQ4CMRCFv00Qi+tKZCWSI3AE1hEUIWBwhKugCEEBDotEIjlC5dZ13FZRRMOGFQ0/k4yZvC/vZWayEAK/VgfAbHdBruePYjUs0fNZ1gGQy5HBdPkRuu83MJ9FJwA8yOmQdhlP2vGQGiOOwqddjDiQ+g1q3Pz3i3A19I3BO5cU9oxBWvEAxMdOlXhc/QYVAqg8dnITedS9IG8tldYUeTfJVFrjrW3FC1oVsErfSgEWsgZSo/JxW6xT+qwBR2Uc/PN7T+yzRewsE50wAAAAAElFTkSuQmCC";
	},

	buffList: function() {
		if (!Data.buffArray) {
			Data.buffArray = [
				{name: "Rage",               stamina: 10, "duration": 90,   minCastLevel: 1,   treeId: 0, skillId: 0,  buff: "+0.2% base attack per point.", nicks: "rage"},
				{name: "Stun",               stamina: 15, "duration": 90,   minCastLevel: 1,   treeId: 0, skillId: 1,  buff: "+0.1% chance per point to half opponents chance to hit.", nicks: "stun,st"},
				{name: "Fury",               stamina: 10, "duration": 90,   minCastLevel: 25,  treeId: 0, skillId: 2,  buff: "+0.1% base Attack and +0.1% base Damage per point.", nicks: "fury"},
				{name: "Berserk",            stamina: 15, "duration": 90,   minCastLevel: 75,  treeId: 0, skillId: 3,  buff: "+0.2% base Damage per point.", nicks: "berserk"},
				{name: "Bloodthirst",        stamina: 10, "duration": 45,   minCastLevel: 25,  treeId: 0, skillId: 4,  buff: "+0.2% chance per point to drain 5% of your opponents current HP per combat turn from your opponent.", nicks: "bloodthirst,bt"},
				{name: "Enchant Weapon",     stamina: 10, "duration": 90,   minCastLevel: 25,  treeId: 0, skillId: 5,  buff: "+0.1% per point stat bonus increase to your equipped weapon. (Excludes \\'Gain\\' bonuses).", nicks: "enchant weapon,ew"},
				{name: "Holy Flame",         stamina: 15, "duration": 90,   minCastLevel: 75,  treeId: 0, skillId: 6,  buff: "+0.2% extra damage vs. undead per point.", nicks: "holy flame,hf"},
				{name: "Dark Curse",         stamina: 20, "duration": 60,   minCastLevel: 150, treeId: 0, skillId: 7,  buff: "+0.2% reduction of opponents defence per point.", nicks: "dark curse,dc"},
				{name: "Shockwave",          stamina: 20, "duration": 90,   minCastLevel: 200, treeId: 0, skillId: 29, buff: "+0.1% per point chance per point that your opponent will forfeit their next combat turn.", nicks: "shockwave,sw,shock"},
				{name: "Ignite",             stamina: 10, "duration": 60,   minCastLevel: 200, treeId: 0, skillId: 30, buff: "+0.1% per point chance per point that your opponent will be set on fire. Each successful hit thereafter will inflict between 5% and 10% extra damage.", nicks: "ignite,ign"},
				{name: "Super Elite Slayer", stamina: 25, "duration": 15,   minCastLevel: 250, treeId: 0, skillId: 31, buff: "+0.2% per point reduction of damage, attack, defence and armor to super elite creatures.", nicks: "super elite slayer,ses,se slayer"},
				{name: "Wither",             stamina: 15, "duration": 60,   minCastLevel: 250, treeId: 0, skillId: 32, buff: "+0.2% per point chance of a 50% reduction of your opponents HP at the start of combat.", nicks: "wither,with"},
				{name: "Shatter Armor",      stamina: 20, "duration": 60,   minCastLevel: 300, treeId: 0, skillId: 33, buff: "+0.05% per point chance to reduce opponents armor by 75%.", nicks: "shatter armor,sa"},
				{name: "Death Wish",         stamina: 20, "duration": 45,   minCastLevel: 300, treeId: 0, skillId: 34, buff: "+0.03% per point chance to instantly kill vs. creatures. (Excludes Super Elites)", nicks: "deathwish,dw,deathw,death wish"},
				{name: "Spell Breaker",      stamina: 35, "duration": 45,   minCastLevel: 300, treeId: 0, skillId: 35, buff: "+0.1% per point chance to remove a random buff from PvP target upon a successful attack.", nicks:"spell breaker,sb"},
				{name: "Keen Edge",          stamina: 10, "duration": 60,   minCastLevel: 400, treeId: 0, skillId: 47, buff: "+0.1% per point to your attack for each complete set equipped.", nicks: "keen edge,ke"},
				{name: "Spectral Knight",    stamina: 15, "duration": 45,   minCastLevel: 400, treeId: 0, skillId: 48, buff: "+0.1% per point chance to reduce targets armor by 100%. (vs Creature only)", nicks: "spectral knight,sk,spec knight"},
				{name: "Arterial Strike",    stamina: 20, "duration": 60,   minCastLevel: 500, treeId: 0, skillId: 49, buff: "Gain additional 0.1% xp per point for every additional round of combat. (Note that this does not activate if conserve activated)", nicks: "arterial strike,as,art strike,art str"},
				{name: "Death Dealer",       stamina: 20, "duration": 60,   minCastLevel: 500, treeId: 0, skillId: 50, buff: "For every 5 kills in a row, without dying, you gain +0.01% extra damage per point (Max 20% and vs. creatures only).", nicks: "death dealer,dd"},
				{name: "Savagery",           stamina: 15, "duration": 45,   minCastLevel: 600, treeId: 0, skillId: 51, buff: "0.05% chance per point that your defense stat is added to your attack and your armor stat is added to your damage.", nicks: "savagery,savage"},
				{name: "Chi Strike",         stamina: 20, "duration": 90,   minCastLevel: 700, treeId: 0, skillId: 52, buff: "0.1% per point of your Health total is added to your damage", nicks:"chi strike,chi,chis,chi str"},
				{name: "Shield Strike",      stamina: 20, "duration": 45,   minCastLevel: 700, treeId: 0, skillId: 53, buff: "0.1% per point chance that your defense stat is reduced to zero and your damage is doubled.", nicks: "shield strike,ss,sh str"},
				{name: "Demoralize",         stamina: 25, "duration": 30,   minCastLevel: 800, treeId: 0, skillId: 73, buff: "+0.25% per point chance to half the opponents enchancement levels for the battle. Note this skill only takes effect if you initiated the combat.", nicks: "demoralize,dem"},
				{name: "Poison",             stamina: 25, "duration": 60,   minCastLevel: 800, treeId: 0, skillId: 70, buff: "+0.1% per point chance that your opponent will be poisoned. Each successful hit thereafter will inflict between 10% and 20% extra damage.", nicks: "poison,poi"},
				{name: "Iron Fist",          stamina: 25, "duration": 60,   minCastLevel: 900, treeId: 0, skillId: 74, buff: "+0.1% per point stat bonus increase to your equipped gloves. (Excludes \\'Gain\\' bonuses).", nicks: "iron fist,if"},
				{name: "Spell Leech",        stamina: 50, "duration": 60,   minCastLevel: 900, treeId: 0, skillId: 79, buff: "+0.1% per point chance when you defeat an opponent in PvP that you initiated, you will steal a random buff. Note the remaining duration of the buff is reduced by 50% and will not take effect until the next combat. Note also if you already have the buff active, it will replace the existing buff you have active.", nicks: "spell leech,sl"},
				{name: "Distraction",        stamina: 25, "duration": 60,   minCastLevel: 900, treeId: 0, skillId: 78, buff: "+0.2% per point chance to obtain no gold from a successful combat. +0.05% per point chance to inflict double damage in each round of combat. Note this skill has no effect in PvP.", nicks: "distraction,dis"},
				{name: "Coordinated Attack", stamina: 30, "duration": 90,   minCastLevel: 1000,treeId: 0, skillId: 118,buff: "+0.05% per point added to Attack and Damage if every piece of equipped gear is part of a set.", nicks: "coordinated attack,coorda"},
				{name: "Undermine",          stamina: 30, "duration": 90,   minCastLevel: 1000,treeId: 0, skillId: 108,buff: "Increases the maximum percentage (above 100%) of the Breaker enhancement by +0.2% per point.", nicks: "undermine,um"},
				{name: "Cursed Rune",        stamina: 30, "duration": 120,  minCastLevel: 1000,treeId: 0, skillId: 89, buff: "0.2% per point stat bonus to your equipped rune. Excludes \\'Gain\\' bonuses. Double chance of durability loss. Prevents Unbreakable from working while active.", nicks: "cursed rune,crune"},
				{name: "Anti Deflect",       stamina: 30, "duration": 60,   minCastLevel: 1000,treeId: 0, skillId: 105,buff: "+0.2% per point chance to prevent your opponent activating Deflect.", nicks: "anti deflect,ad"},
				{name: "Overkill",           stamina: 30, "duration": 60,   minCastLevel: 1200,treeId: 0, skillId: 109,buff: "When you inflict 2 times or more of the starting hit points in the first round of combat, you have a 0.25% per point chance to gain 0.025% per point extra XP. (PvE Only)", nicks: "overkill,ok"},
				{name: "Smashing Hammer",    stamina: 30, "duration": 90,   minCastLevel: 1200,treeId: 0, skillId: 111,buff: "+0.05% per point added to your damage for each complete set equipped.", nicks: "smashing hammer,sh"},
				{name: "Mighty Vigor",       stamina: 35, "duration": 60,   minCastLevel: 1200,treeId: 0, skillId: 113,buff: "For every 50 points of the skill, can equip items 1 level higher than your level.", nicks: "mighty vigor,mv"},
				{name: "Fist Fight",         stamina: 30, "duration": 90,   minCastLevel: 1200,treeId: 0, skillId: 115,buff: "+0.1% per point chance that both players will lose the benefit of ALL skills at the start of combat. This skill takes effect before Sealed. (PvP Only)", nicks: "fist fight,ff"},
				{name: "Cursed Ring",        stamina: 30, "duration": 120,  minCastLevel: 1400,treeId: 0, skillId: 88, buff: "0.2% per point stat bonus to your equipped ring. Excludes \\'Gain\\' bonuses. Double chance of durability loss. Prevents Unbreakable from working while active.", nicks: "cursed ring,cring"},
				{name: "Sharpen",            stamina: 30, "duration": 60,   minCastLevel: 1400,treeId: 0, skillId: 106,buff: "Increases the maximum percentage (above 100%) of the Piercing Strike enhancement by +0.1% per point.", nicks: "sharpen,sharp"},
				{name: "Balanced Attack",    stamina: 30, "duration": 90,   minCastLevel: 1400,treeId: 0, skillId: 116,buff: "+0.05% per point added to Attack and Damage if every piece of equipped gear is the same level.", nicks: "balanced attack,ba"},
				{name: "Heavy Weight",       stamina: 20, "duration": 120,  minCastLevel: 1600,treeId: 0, skillId: 146,buff: "Increases damage in combat by +0.025% per point providing you have at least 2,500 gold multiplied by your level in hand.", nicks: "heavy weight, hw"},
				{name: "Armored Strike",     stamina: 30, "duration": 60,   minCastLevel: 1600,treeId: 0, skillId: 130,buff: "+0.05% per point chance that your Armor stat is reduced to zero and your Damage is doubled. (PvE Only)", nicks: "armored strike, armstr"},
				{name: "Fortify",            stamina: 10, "duration": 120,  minCastLevel: 25,  treeId: 1, skillId: 8,  buff: "+0.1% base Armor per point.", nicks: "fortify"},
				{name: "Enchanted Armor",    stamina: 10, "duration": 90,   minCastLevel: 75,  treeId: 1, skillId: 9,  buff: "+0.1% per point stat bonus increase to your equipped armor. (Excludes \\'Gain\\' bonuses).", nicks: "enchanted armor,enchant armor,ea,ench arm,ench armor"},
				{name: "Evade",              stamina: 10, "duration": 90,   minCastLevel: 25,  treeId: 1, skillId: 10, buff: "+0.1% base Defence per point.", nicks: "evade"},
				{name: "Rock Skin",          stamina: 15, "duration": 90,   minCastLevel: 75,  treeId: 1, skillId: 11, buff: "+0.1% base Defence and +0.1 base Armor per point.", nicks: "rock skin,rs"},
				{name: "Great Vigor",        stamina: 10, "duration": 90,   minCastLevel: 1,   treeId: 1, skillId: 12, buff: "+0.2% base HP per point.", nicks: "great vigor,vigor,gv"},
				{name: "Absorb",             stamina: 20, "duration": 120,  minCastLevel: 25,  treeId: 1, skillId: 13, buff: "+0.1% chance per point that you will absorb 25% of the damage inflicted on you.", nicks: "absorb,abs"},
				{name: "Deflect",            stamina: 25, "duration": 300,  minCastLevel: 150, treeId: 1, skillId: 14, buff: "+0.25% chance per point that a player attacking you will automatically fail before combat starts.", nicks: "deflect,defl"},
				{name: "Aura of Protection", stamina: 20, "duration": 90,   minCastLevel: 150, treeId: 1, skillId: 15, buff: "+0.1% base Defence, +0.1% base Armor and +0.1% base HP per point.", nicks: "aura of protection,aop,aofp"},
				{name: "Force Shield",       stamina: 10, "duration": 60,   minCastLevel: 200, treeId: 1, skillId: 27, buff: "+0.1% per point chance to reduce damage done to you to 1.", nicks: "force shield,fs"},
				{name: "Unbreakable",        stamina: 20, "duration": 90,   minCastLevel: 200, treeId: 1, skillId: 28, buff: "+0.5% per point chance per point of equipment not taking durability loss during combat.", nicks: "unbreakable,ub,unb,unbr"},
				{name: "Assist",             stamina: 30, "duration": 120,  minCastLevel: 250, treeId: 1, skillId: 36, buff: "+0.05% per point chance of one of your allies assisting in combat vs. creatures. (Ally is randomly selected and adds 50% of their attack, defense, damage, armor and hp - note this also excludes allies whom are more than 25 levels above you.).", nicks: "assist,ass"},
				{name: "Constitution",       stamina: 25, "duration": 30,   minCastLevel: 300, treeId: 1, skillId: 37, buff: "+0.1% per point increase to your defense.", nicks: "constitution,const"},
				{name: "Counter Attack",     stamina: 20, "duration": 60,   minCastLevel: 400, treeId: 1, skillId: 54, buff: "Uses 0.25% extra stamina (per point) to add 0.25% to both attack and damage. (Both values are rounded up, vs. creature only)", nicks: "counter attack,ca"},
				{name: "Summon Shield Imp",  stamina: 50, "duration": 60,   minCastLevel: 400, treeId: 1, skillId: 55, buff: "Creates an Imp which can absorb 100% of damage. Each full absorb uses one of the Shield Imp\\'s hit points. The Shield Imp starts with 3 hit points and gains one for each 50 points placed in this skill. The Shield Imp auto-debuffs when it reaches zero hit points. (Note Super-Elites can crush the imp in a single turn regardless of hit points remaining and it only works in PvE.", nicks: "summon shield imp,ssi,imp"},
				{name: "Vision",             stamina: 20, "duration": 90,   minCastLevel: 500, treeId: 1, skillId: 56, buff: "Lights up dark realms. More skill points allow more vision on the \\'Map\\' screen. (Vision radius increases every 50 levels).", nicks: "vision,vis"},
				{name: "Fortitude",          stamina: 15, "duration": 90,   minCastLevel: 500, treeId: 1, skillId: 57, buff: "Defense stat is added to HP. (0.1% per point).", nicks: "fortitude,fort"},
				{name: "Flinch",             stamina: 20, "duration": 60,   minCastLevel: 600, treeId: 1, skillId: 58, buff: "0.1% per point decrease in enemies Attack stat", nicks: "flinch"},
				{name: "Terrorize",          stamina: 20, "duration": 60,   minCastLevel: 700, treeId: 1, skillId: 59, buff: "0.1% per point decrease in enemies Damage stat.", nicks: "terrorize,terror"},
				{name: "Nightmare Visage",   stamina: 40, "duration": 1000, minCastLevel: 700, treeId: 1, skillId: 60, buff: "0.25% per point of your Attack will be transferred into Defense. (Great for offline protection!)", nicks: "nightmare visage,nv,visage"},
				{name: "Honor",              stamina: 10, "duration": 180,  minCastLevel: 800, treeId: 1, skillId: 82, buff: "+0.2% per point decrease to the PvP Rating points transferred upon defeat.", nicks: "honor"},
				{name: "Sanctuary",          stamina: 25, "duration": 30,   minCastLevel: 800, treeId: 1, skillId: 44, buff: "+0.1% per point increase to your armor", nicks: "sanctuary,sanc"},
				{name: "Dull Edge",          stamina: 10, "duration": 60,   minCastLevel: 800, treeId: 1, skillId: 46, buff: "+0.4% per point reduction to creatures \\'Piercing Strike\\' enhancement.", nicks: "dull edge,de"},
				{name: "Erosion",            stamina: 25, "duration": 180,  minCastLevel: 900, treeId: 1, skillId: 80, buff: "+0.1% per point chance to reduce an attackers item durability to 1 if durability damage is inflicted. Note this skill only works in PvP and if you are defending.", nicks: "erosion,ero"},
				{name: "Avert Gaze",         stamina: 10, "duration": 180,  minCastLevel: 900, treeId: 1, skillId: 71, buff: "+0.5% per point chance of not being affected by Hypnotize.", nicks: "avert gaze,ag"},
				{name: "Enchant Shield",     stamina: 25, "duration": 60,   minCastLevel: 900, treeId: 1, skillId: 77, buff: "+0.1% per point stat bonus increase to your equipped shield. (Excludes \\'Gain\\' bonuses).", nicks: "enchant shield,es"},
				{name: "Smite",              stamina: 30, "duration": 60,   minCastLevel: 1000,treeId: 1, skillId: 97, buff: "0.1% per point reduction to attackers armor when defending a PvP attack. (PvP Only).", nicks: "smite,sm"},
				{name: "Balanced Defense",   stamina: 30, "duration": 90,   minCastLevel: 1000,treeId: 1, skillId: 117,buff: "+0.05% per point added to Defense and Armor if every piece of equipped gear is the same level.", nicks: "balanced defense,bd"},
				{name: "Bastion",            stamina: 30, "duration": 90,   minCastLevel: 1000,treeId: 1, skillId: 122,buff: "Increases the maximum percentage (above 100%) of the Protection enhancement by +0.2% per point.", nicks: "bastion,bast"},
				{name: "Side Step",          stamina: 30, "duration": 90,   minCastLevel: 1000,treeId: 1, skillId: 86, buff: "Increases the maximum percentage (above 100%) of the Dodge enhancement by +0.2% per point.", nicks: "side step,sstep"},
				{name: "High Guard",         stamina: 30, "duration": 60,   minCastLevel: 1200,treeId: 1, skillId: 96, buff: "0.05% chance per point that your attack stat is added to your defense and your damage stat is added to your armor.", nicks: "high guard,hg"},
				{name: "Barricade",          stamina: 30, "duration": 90,   minCastLevel: 1200,treeId: 1, skillId: 98, buff: "0.1% per point of Damage is transferred to Defense.", nicks: "barricade,bar"},
				{name: "Coordinated Defense",stamina: 30, "duration": 90,   minCastLevel: 1200,treeId: 1, skillId: 119,buff: "+0.05% per point added to Defense and Armor if every piece of equipped gear is part of a set.", nicks: "coordinated defense,cd"},
				{name: "Degrade",            stamina: 30, "duration": 90,   minCastLevel: 1200,treeId: 1, skillId: 121,buff: "Increases the maximum percentage (above 100%) of the Nullify enhancement by +0.2% per point.", nicks: "degrade,deg,dg"},
				{name: "Retaliate",          stamina: 30, "duration": 60,   minCastLevel: 1400,treeId: 1, skillId: 123,buff: "Increases the maximum percentage (above 100%) of the Disarm enhancement by +0.2% per point.", nicks: "retaliate,ret"},
				{name: "Shame",              stamina: 35, "duration": 60,   minCastLevel: 1400,treeId: 1, skillId: 110,buff: "If successfully defending an attack, remove a percentage of additional +0.25% per point xp from the attacker. (PvP Only)", nicks: "shame"},
				{name: "Dispel Curse",       stamina: 35, "duration": 60,   minCastLevel: 1400,treeId: 1, skillId: 114,buff: "0.2% chance per point that Dark Curse will not work against you. (PvP Only)", nicks: "dispel curse,dispel"},
				{name: "Anchored",           stamina: 30, "duration": 60,   minCastLevel: 1600,treeId: 1, skillId: 154,buff: "0.05% per point Damage is added to your health during combat.", nicks: "anchored, anch, anchor"},
				{name: "Hardened",           stamina: 30, "duration": 60,   minCastLevel: 1600,treeId: 1, skillId: 153,buff: "0.05% per point chance to prevent your opponent activating Shatter Armor.", nicks: "hardened, hard, harden"},
				{name: "Armor Boost",        stamina: 30, "duration": 60,   minCastLevel: 1600,treeId: 1, skillId: 136,buff: "+0.05% per point to your Armor for each complete set equipped.", nicks: "armor boost, armbst, arm bst, armb"},
				{name: "Shield Wall",        stamina: 30, "duration": 60,   minCastLevel: 1600,treeId: 1, skillId: 135,buff: "+0.05% per point to your Defense for each complete set equipped.", nicks: "shield wall, shldwll, sw"},
				{name: "Find Item",          stamina: 10, "duration": 60,   minCastLevel: 1,   treeId: 2, skillId: 16, buff: "+0.1% per point increase of creatures current drop rate.", nicks: "find item,fi"},
				{name: "Treasure Hunter",    stamina: 15, "duration": 120,  minCastLevel: 1,   treeId: 2, skillId: 17, buff: "+0.2% per point additional gold from creatures.", nicks: "treasure hunter,th,treas hunter"},
				{name: "Defiance",           stamina: 15, "duration": 120,  minCastLevel: 25,  treeId: 2, skillId: 18, buff: "+0.25% per point reduction in xp lost when defeated in combat vs creatures.", nicks: "defiance"},
				{name: "Adept Learner",      stamina: 10, "duration": 90,   minCastLevel: 25,  treeId: 2, skillId: 19, buff: "+0.2% per point increase in xp from creature kills.", nicks: "adept learner,al"},
				{name: "Librarian",          stamina: 10, "duration": 60,   minCastLevel: 75,  treeId: 2, skillId: 20, buff: "+0.1% per point chance to gain double xp from creatures.", nicks: "librarian,lib,libr"},
				{name: "Merchant",           stamina: 10, "duration": 60,   minCastLevel: 75,  treeId: 2, skillId: 21, buff: "+0.05% per point chance to gain double gold from creatures.", nicks: "merchant,merch,merc"},
				{name: "Deep Pockets",       stamina: 10, "duration": 90,   minCastLevel: 1,   treeId: 2, skillId: 22, buff: "+0.25% per point reduction in gold lost on failed combat vs creatures.", nicks: "deep pockets,dp"},
				{name: "Last Ditch",         stamina: 15, "duration": 120,  minCastLevel: 150, treeId: 2, skillId: 23, buff: "+0.2% per point chance to survive death in combat (once per combat).", nicks: "last ditch,ld"},
				{name: "Animal Magnetism",   stamina: 10, "duration": 60,   minCastLevel: 200, treeId: 2, skillId: 24, buff: "+0.2% per point chance to make certain creatures respawn at your location.", nicks: "animal magnetism,animag,ani mag,am"},
				{name: "Empower",            stamina: 20, "duration": 60,   minCastLevel: 200, treeId: 2, skillId: 25, buff: "+0.1% per point increase to all currently active enhancements.", nicks: "empower,emp"},
				{name: "Doubler",            stamina: 5,  "duration": 120,  minCastLevel: 200, treeId: 2, skillId: 26, buff: "At skill level 50+, 2x Stamina usage in combat in return for 2x gold/xp. At level 100+ 3x, and at level 150+ 4x. Note that stamina and xp loss are normal (not multiplied) if you lose a battle.", nicks: "doubler,doub,db"},
				{name: "Conserve",           stamina: 10, "duration": 45,   minCastLevel: 250, treeId: 2, skillId: 39, buff: "+0.05% per point chance that combat (vs. players and vs. creatures) will use no stamina. (Excludes group/relic combat)", nicks: "conserve,cons,consv,con"},
				{name: "Brewing Master",     stamina: 10, "duration": 30,   minCastLevel: 250, treeId: 2, skillId: 40, buff: "+0.5% per point to the duration of potions when consumed while active.", nicks: "brewing master,bm,brm,brewm"},
				{name: "Four Leaf",          stamina: 20, "duration": 60,   minCastLevel: 250, treeId: 2, skillId: 41, buff: "+0.1% per point chance that craftable items are discovered already \\'Perfect\\'.", nicks: "four leaf,4l,fl"},
				{name: "Extend",             stamina: 30, "duration": 30,   minCastLevel: 300, treeId: 2, skillId: 42, buff: "+0.25% per point increase to skills durations that are cast while this skill is active.", nicks: "extend,ext"},
				{name: "Quest Finder",       stamina: 5,  "duration": 90,   minCastLevel: 1,   treeId: 2, skillId: 61, buff: "Increases the chance a quest item will drop. (If you fail to obtain an item, an extra roll is given for Quest Finder at a fixed percentage based on the points allocated to the skill. If this second roll is successful, you will obtain one of the available quest items drops (if any)).", nicks: "quest finder,qf"},
				{name: "Inventor",           stamina: 15, "duration": 60,   minCastLevel: 400, treeId: 2, skillId: 62, buff: "Increases chance of success when attempting to Invent items/potions. (A fixed +0.05% chance per point extra chance of success)", nicks: "inventor,inv,invI,inv1,inventor1,inventor 1,inventor i,inv i,inv 1"},
				{name: "Extractor",          stamina: 15, "duration": 60,   minCastLevel: 400, treeId: 2, skillId: 63, buff: "Increases chance of success when attempting to extract Components from Resources. (A fixed +0.05% chance per point extra chance of success).", nicks: "extractor,extr"},
				{name: "Inventor II",        stamina: 20, "duration": 60,   minCastLevel: 500, treeId: 2, skillId: 64, buff: "Chance not to consume (or consume less) components when inventing items.", nicks: "inventor ii,inventorii,invii,inv2,inventor 2,inv ii,inv 2"},
				{name: "Buff Master",        stamina: 10, "duration": 60,   minCastLevel: 500, treeId: 2, skillId: 65, buff: "0.2% per point chance to half the stamina cost (rounding up) when casting skills on other players. (Does not work on self!)", nicks: "buff master,buffm,bum"},
				{name: "Reflection",         stamina: 10, "duration": 90,   minCastLevel: 600, treeId: 2, skillId: 66, buff: "0.1% per point of enemies damage inflicted is added to your next combat strike.", nicks: "reflection,ref,refl,reflect"},
				{name: "Guild Buffer",       stamina: 10, "duration": 90,   minCastLevel: 600, treeId: 2, skillId: 160,buff: "+0.25% per point chance to reduce stamina cost of casting buffs on guild members by 50% (rounding up).", nicks: "guild buffer, gldbfr, gb"},
				{name: "Light Foot",         stamina: 15, "duration": 120,  minCastLevel: 700, treeId: 2, skillId: 67, buff: "0.05% chance to use no stamina while moving on the world map.", nicks: "light foot,lf"},
				{name: "Mesmerize",          stamina: 20, "duration": 60,   minCastLevel: 700, treeId: 2, skillId: 68, buff: "0.1% per point chance to reduce a creatures armor and defense by 50% (vs. creature only).", nicks: "mesmerize,mesmer,mes,mez"},
				{name: "Resource Finder",    stamina: 25, "duration": 90,   minCastLevel: 800, treeId: 2, skillId: 76, buff: "Increases the chance a resource item will drop. (If you fail to obtain an item, an extra roll is given for Resource Finder at a fixed percentage based on the points allocated to the skill. If this second roll is successful, you will obtain one of the available resource items drops (if any)). Note if you have Quest Finder active as well, this roll takes place after Quest Finder and only if Quest Finder fails to obtain an item.", nicks: "resource finder,rf"},
				{name: "Gloat",              stamina: 10, "duration": 60,   minCastLevel: 900, treeId: 2, skillId: 81, buff: "+0.5% per point increase to the PvP Rating points transferred upon victory. Note if you lose to a player who has the Honor skill active, you will lose and additional 50% PvP Rating.", nicks: "gloat"},
				{name: "Sacrifice",          stamina: 25, "duration": 90,   minCastLevel: 900, treeId: 2, skillId: 75, buff: "+0.04% per point additional xp and -0.25% per point less gold for defeating creatures in combat.", nicks: "sacrifice,sac"},
				{name: "Reckoning",          stamina: 25, "duration": 60,   minCastLevel: 900, treeId: 2, skillId: 72, buff: "+0.2% per point chance of doubling a random skill level for the battle if you initiate the combat (Note that this skill does not work with Doubler, Summon Shield Imp or Counter Attack.).", nicks: "reckoning,rec,rek"},
				{name: "Reinforce",          stamina: 30, "duration": 90,   minCastLevel: 1000,treeId: 2, skillId: 126,buff: "Increases the maximum percentage (above 100%) of the Sustain enhancement by +0.2% per point.", nicks: "reinforce,rein"},
				{name: "Bodyguard",          stamina: 30, "duration": 120,  minCastLevel: 1000,treeId: 2, skillId: 120,buff: "0.4% per point of XP lost that would be lost to a non-bounty board PvP attack is lost as gold instead, as long as there is enough unbanked gold. Gold lost because of Bodyguard is sunk: it does not go to attacker. Gold taken by attacker (and gold sunk as a result) is unaffected.", nicks: "bodyguard,bg"},
				{name: "Riposte",            stamina: 30, "duration": 60,   minCastLevel: 1000,treeId: 2, skillId: 124,buff: "Increases the maximum percentage (above 100%) of the Duelist enhancement by +0.2% per point.", nicks: "riposte,rip"},
				{name: "Severe Condition",   stamina: 30, "duration": 90,   minCastLevel: 1000,treeId: 2, skillId: 101,buff: "+0.25% per point of your attack, defense, damage and armor stats are transferred to your health at the start of combat.", nicks: "severe condition,sc"},
				{name: "Sealed",             stamina: 35, "duration": 60,   minCastLevel: 1200,treeId: 2, skillId: 112,buff: "+0.1% per point chance at the start of combat that your opponents skills won't take effect in combat. (PvP Only)", nicks: "sealed,seal"},
				{name: "Righteous",          stamina: 30, "duration": 90,   minCastLevel: 1200,treeId: 2, skillId: 107,buff: "Increases the maximum percentage (above 100%) of the Holy enhancement by +0.2% per point.", nicks: "righteous,right"},
				{name: "Epic Forge",         stamina: 30, "duration": 90,   minCastLevel: 1200,treeId: 2, skillId: 102,buff: "+0.5% per point increase to Hell Forge stat bonuses. Excludes bonuses to enhancements.", nicks: "epic forge,ef"},
				{name: "Golden Shield",      stamina: 30, "duration": 60,   minCastLevel: 1200,treeId: 2, skillId: 103,buff: "+0.05% per point chance to double your armor and defense at the start of combat.", nicks: "golden shield,gs"},
				{name: "Stalker",            stamina: 35, "duration": 90,   minCastLevel: 1400,treeId: 2, skillId: 125,buff: "Increases the maximum percentage (above 100%) of the Elite Hunter enhancement by +0.1% per point.", nicks: "stalker,stalk"},
				{name: "Ageless",            stamina: 30, "duration": 90,   minCastLevel: 1400,treeId: 2, skillId: 100,buff: "+0.2% per point chance of doubling your HP at the start of combat.", nicks: "ageless,age"},
				{name: "Extractor II",       stamina: 30, "duration": 60,   minCastLevel: 1400,treeId: 2, skillId: 104,buff: "+0.05% per point chance to not destroy a resource when extracting components.", nicks: "extractor ii,extractorii,extii,ext2,extractor 2,ext ii,ext 2"},
				{name: "Epic Craft",         stamina: 30, "duration": 60,   minCastLevel: 1600,treeId: 2, skillId: 159,buff: "+0.5% per point increase to crafted stat bonuses.", nicks: "epic craft, epc crft, epccrft, ec"},
				{name: "Gold Foot",          stamina: 20, "duration": 60,   minCastLevel: 1600,treeId: 2, skillId: 137,buff: "0.05% per point chance to consume 2,500 gold from your hand instead of 1 stamina while moving.", nicks: "gold foot, goldfoot, gldft, gf"}
			];
		}
		return Data.buffArray;
	},
	guildRelationshipMessages: function(){
		if(!Data.guildMessages){
			Data.guildMessages= {};
				Data.guildMessages['guildSelfMessage']={'color':'green','message':'Member of your own guild!'};
				Data.guildMessages['guildFrndMessage']={'color':'OliveDrab','message':'Do not attack - Guild is friendly!'};
				Data.guildMessages['guildPastMessage']={'color':'DarkCyan','message':'Do not attack - You\'ve been in that guild once!'};
				Data.guildMessages['guildEnmyMessage']={'color':'red','message':'Enemy guild. Attack at will!'};
		}
		return Data.guildMessages;

	},
	quickSearchList: function() {
		if (!Data.quickSearchArray) {
			Data.quickSearchArray = [
				{"category":"Potions","searchname":"Potion of the Wise",             "nickname":"Lib 200", "displayOnAH":true},
				{"category":"Potions","searchname":"Potion of the Bookworm",         "nickname":"Lib 225", "displayOnAH":true},
				{"category":"Potions","searchname":"Potion of Shattering",           "nickname":"SA",      "displayOnAH":true},
				{"category":"Potions","searchname":"Dragons Blood Potion",           "nickname":"ZK 200",  "displayOnAH":true},
				{"category":"Potions","searchname":"Berserkers Potion",              "nickname":"ZK 300",  "displayOnAH":true},
				{"category":"Potions","searchname":"Potion of Fury",                 "nickname":"ZK 350",  "displayOnAH":true},
				{"category":"Potions","searchname":"Sludge Brew",                    "nickname":"DC 200",  "displayOnAH":true},
				{"category":"Potions","searchname":"Potion of Black Death",          "nickname":"DC 225",  "displayOnAH":true},
				{"category":"Potions","searchname":"Potion of Aid",                  "nickname":"Assist",  "displayOnAH":true},
				{"category":"Potions","searchname":"Potion of Supreme Doubling",     "nickname":"DB 450",  "displayOnAH":true},
				{"category":"Potions","searchname":"Potion of Acceleration",         "nickname":"DB 500",  "displayOnAH":true},
				{"category":"Potions","searchname":"Potion of Lesser Death Dealer",  "nickname":"DD",      "displayOnAH":true},
				{"category":"Potions","searchname":"Runic Potion",                   "nickname":"FI 250",  "displayOnAH":true},
				{"category":"Potions","searchname":"Potion of Supreme Luck",         "nickname":"FI 1k",   "displayOnAH":true},
				{"category":"Potions","searchname":"Potion of Truth",                "nickname":"EW 1k",   "displayOnAH":true},
				{"category":"Potions","searchname":"Dull Edge",                      "nickname":"DE 25",   "displayOnAH":true},
				{"category":"Potions","searchname":"Notched Blade",                  "nickname":"DE 80",   "displayOnAH":true},
				{"category":"Potions","searchname":"Potion of Death",                "nickname":"DW 125",  "displayOnAH":true},
				{"category":"Potions","searchname":"Potion of Decay",                "nickname":"WI 150",  "displayOnAH":true},
				{"category":"Potions","searchname":"Potion of Fatality",             "nickname":"WI 350",  "displayOnAH":true},
				{"category":"Potions","searchname":"Potion of Annihilation",         "nickname":"DW 150",  "displayOnAH":true},
				{"category":"Plants", "searchname":"Blood Bloom",                    "nickname":""},
				{"category":"Plants", "searchname":"Jademare",         	             "nickname":""},
				{"category":"Plants", "searchname":"Dark Shade",                     "nickname":""},
				{"category":"Plants", "searchname":"Trinettle",                      "nickname":""},
				{"category":"Plants", "searchname":"Heffle Wart",                    "nickname":""},
				{"category":"Plants", "searchname":"Amber",                          "nickname":""}
			];
		}
		return Data.quickSearchArray;
	}
};

var Layout = {

	injectMenu: function() {
		if (GM_getValue("lastActiveQuestPage").length > 0) { //JQuery ready
			$('a[href="index.php?cmd=questbook"]').attr('href', GM_getValue("lastActiveQuestPage"));
		}
		if (isNewUI == 1) {
			var pCL = $('div#pCL:first');
			if (pCL.length == 0) return;
			//character
			$(pCL).find('a#nav-character-log').parent('li')
				.after('<li class="nav-level-1"><a class="nav-link" id="nav-character-recipemanager" href="index.php?cmd=notepad&blank=1&subcmd=recipemanager">Recipe Manager</a></li>')
				.after('<li class="nav-level-1"><a class="nav-link" id="nav-character-invmanager" href="index.php?cmd=notepad&blank=1&subcmd=invmanager">Inventory Manager</a></li>')
				.after('<li class="nav-level-1"><a class="nav-link" id="nav-character-medalguide" href="index.php?cmd=profile&subcmd=medalguide">Medal Guide</a></li>');
			if (GM_getValue("keepBuffLog")) {
				$(pCL).find('a#nav-character-log').parent('li')
					.after('<li class="nav-level-1"><a class="nav-link" id="nav-character-bufflog" href="index.php?cmd=notepad&blank=1&subcmd=bufflogcontent">Buff Log</a></li>');
			}
			if (GM_getValue("keepLogs")) {
				$(pCL).find('a#nav-character-notepad').parent('li')
					.after('<li class="nav-level-1"><a class="nav-link" id="nav-character-showlogs" href="index.php?cmd=notepad&blank=1&subcmd=showlogs">Combat Logs</a></li>');
			}
			if (GM_getValue("showMonsterLog")) {
				$(pCL).find('a#nav-character-notepad').parent('li')
					.after('<li class="nav-level-1"><a class="nav-link" id="nav-character-monsterlog" href="index.php?cmd=notepad&blank=1&subcmd=monsterlog">Creature Logs</a></li>');
			}
			$(pCL).find('a#nav-character-notepad').parent('li')
				.after('<li class="nav-level-1"><a class="nav-link" id="nav-character-quicklinkmanager" href="index.php?cmd=notepad&blank=1&subcmd=quicklinkmanager">Quick Links</a></li>')
				.after('<li class="nav-level-1"><a class="nav-link" id="nav-character-createmap" href="index.php?cmd=notepad&blank=1&subcmd=createmap">Create Maps</a></li>');
			//guild
			$(pCL).find('a#nav-guild-storehouse-inventory').parent('li')
				.after('<li class="nav-level-2"><a class="nav-link" id="nav-guild-guildinvmanager" href="index.php?cmd=notepad&blank=1&subcmd=guildinvmanager">Guild Inventory</a></li>');
			if (!GM_getValue("useNewGuildLog")) {
				//if not using the new guild log, show it as a separate menu entry
				$(pCL).find('a#nav-guild-ledger-guildlog').parent('li')
					.after('<li class="nav-level-2"><a class="nav-link" id="nav-guild-newguildlog" href="index.php?cmd=notepad&blank=1&subcmd=newguildlog">New Guild Log</a></li>');
			}
			//top rated
			$(pCL).find('a#nav-toprated-players-level').parent('li')
				.after('<li class="nav-level-2"><a class="nav-link" id="nav-toprated-top250" href="index.php?cmd=toprated&subcmd=xp">Top 250 Players</a></li>');
			//actions
			$(pCL).find('a#nav-actions-trade-auctionhouse').parent('li')
				.after('<li class="nav-level-2"><a class="nav-link" id="nav-actions-ahquicksearch" href="index.php?cmd=notepad&blank=1&subcmd=auctionsearch">AH Quick Search</a></li>');
			$(pCL).find('a#nav-actions-interaction-findplayer').parent('li')
				.after('<li class="nav-level-2"><a class="nav-link" id="nav-actions-onlineplayers" href="index.php?cmd=notepad&blank=1&subcmd=onlineplayers">Online Players</a></li>')
				.after('<li class="nav-level-2"><a class="nav-link" id="nav-actions-findother" href="index.php?cmd=notepad&blank=1&subcmd=findother">Find Other</a></li>')
				.after('<li class="nav-level-2"><a class="nav-link" id="nav-actions-findbuffs" href="index.php?cmd=notepad&blank=1&subcmd=findbuffs">Find Buffs</a></li>');
			//adjust the menu length in chrome for the newly added items
			//first the open ones
			$('ul.nav-animated').each(function() {
				if ($(this).css('height') != '0px') {
					$(this).css('height',$(this).find('li').length*22);
				}
			});
			//and now the closed saved variables
			$('#nav').nav('calcHeights');
		} else {
			//"menuSource_0"
			var tableElement = $('div[id="menuSource_0"]').find('tbody:first');
			if (!tableElement) return;
			if (GM_getValue("keepBuffLog")) {
				Layout.injectItemIntoMenuTable(tableElement, "Buff Log", "index.php?cmd=notepad&blank=1&subcmd=bufflogcontent", 9);
			}
			Layout.injectItemIntoMenuTable(tableElement, "Medal Guide", "index.php?cmd=profile&subcmd=medalguide", 11);
			Layout.injectItemIntoMenuTable(tableElement, "Inventory Manager", "index.php?cmd=notepad&blank=1&subcmd=invmanager", 13);
			Layout.injectItemIntoMenuTable(tableElement, "Recipe Manager", "index.php?cmd=notepad&blank=1&subcmd=recipemanager", 15);
			if (GM_getValue("keepLogs")) {
				Layout.injectItemIntoMenuTable(tableElement, "Combat Logs", "index.php?cmd=notepad&blank=1&subcmd=showlogs", 17);
			}
			if (GM_getValue("showMonsterLog")) {
				Layout.injectItemIntoMenuTable(tableElement, "Creature Logs", "index.php?cmd=notepad&blank=1&subcmd=monsterlog", 19);
			}
			Layout.injectItemIntoMenuTable(tableElement, "Quick Links", "index.php?cmd=notepad&blank=1&subcmd=quicklinkmanager", 21, "menuSource_0");
			Layout.injectItemIntoMenuTable(tableElement, "Create Maps", "index.php?cmd=notepad&blank=1&subcmd=createmap", 23);
			//"menuSource_5"
			tableElement = $('div[id="menuSource_5"]').find('tbody:first');
			if (!tableElement) return;
			Layout.injectItemIntoMenuTable(tableElement, "Guild Inventory", "index.php?cmd=notepad&blank=1&subcmd=guildinvmanager", 3);
			if (!GM_getValue("useNewGuildLog")) {
				//if not using the new guild log, show it as a separate menu entry
				Layout.injectItemIntoMenuTable(tableElement, "New Guild Log", "index.php?cmd=notepad&blank=1&subcmd=newguildlog", 13);
			}
			//"menuSource_3"
			tableElement = $('div[id="menuSource_3"]').find('tbody:first');
			if (!tableElement) return;
			Layout.injectItemIntoMenuTable(tableElement, "Top 250 Players", "index.php?cmd=toprated&subcmd=xp", 3);
			//"menuSource_2"
			tableElement = $('div[id="menuSource_2"]').find('tbody:first');
			if (!tableElement) return;
			Layout.injectItemIntoMenuTable(tableElement, "AH Quick Search", "index.php?cmd=notepad&blank=1&subcmd=auctionsearch", 37);
			Layout.injectItemIntoMenuTable(tableElement, "Find Buffs", "index.php?cmd=notepad&blank=1&subcmd=findbuffs", 8);
			Layout.injectItemIntoMenuTable(tableElement, "Find Other", "index.php?cmd=notepad&blank=1&subcmd=findother", 10);
			Layout.injectItemIntoMenuTable(tableElement, "Online Players", "index.php?cmd=notepad&blank=1&subcmd=onlineplayers", 12);
		}
	},

	injectItemIntoMenuTable: function(tableElement, text, href, position) { //JQuery ready
		var newRow;
		if (position > tableElement.children().length) position = tableElement.children().length;
		$(tableElement).find('tr:eq('+position+')').before('<tr><td><font color="black">&nbsp;&nbsp;-&nbsp;<A href="' + href + '"><font color="black">' + text + '</font></A></font></td></tr><tr><td height="5"></td></tr>')
	},

	moveRHSBoxUpOnRHS: function(title) {
		if (isNewUI == 1) {
			$('div#pCR').prepend($('div#' + title));
		} else {
			var src=$('b:contains("'+title+'"):first').closest('table');//System.findNode("//b[.='FSBox']/../../../../..");
			if (src.length == 0) return;
			src.next('br').remove(); //remove next BR
			var tmp = document.createElement('div');
			tmp.appendChild(src[0]);
			var dest=$('#rightColumn').find('table:eq(1)').find('tr:first');
			dest.before('<tr><td align="center">'+tmp.innerHTML+'</td></tr><tr><td>&nbsp;</td></tr>');
			src.remove();
		}
	},

	moveRHSBoxToLHS: function(title) {
		if (isNewUI == 1) {
			var myDiv=$('div#' + title).wrap('<div class="pCR"></div>');

			myDiv=myDiv.parent();
			$('div#pCL').append(myDiv);
			$('div#pCL').append('<style>.pCR a { color: #F7EAC9; }</style>');
			//myDiv.before('<style>#Helper'+title+' { #pCR; }</style>');

		} else {
			//var src=$('b:contains("'+title+'"):first').closest('table');//System.findNode("//b[.='FSBox']/../../../../..");
			var src=$('font b').filter(function() {
				return $(this).text() === title;
			}).closest('table');
			if (src.length == 0) return;
			src.next('br').remove(); //remove next BR
			var tmp = document.createElement('div');
			tmp.appendChild(src[0]);
			var dest=$('img[src*="menu_logout.gif"]').closest('tr');
			dest.after('<tr><td>&nbsp;</td></tr><tr><td align="center">'+tmp.innerHTML+'</td></tr>');
			src.remove();
		}
	},

	notebookContent: function() {
		if (isNewUI == 0)
		{
			return System.findNode("//div[@class='innerContentMiddle']");
		} else {
			return System.findNode("//div[@id='pCC']"); //new interface logic
		}
	},

	playerId: function() {
		var playerIdRE = /fallensword.com\/\?ref=(\d+)/;
		var thePlayerId=parseInt(document.body.innerHTML.match(playerIdRE)[1],10);
		GM_setValue("playerID",thePlayerId);
		return thePlayerId;
	},

	infoBox: function(documentText) {
		//var infoRE = /<center><b>INFORMATION.*><center>([^<]+)<\/center>/i;
		//infoRE = /<center>INFORMATION<\/center><\/font><\/td><\/tr>\t*<tr><td><font size=2 color=\"\#000000\"><center>([^<]+)</i;
		//Fast Recall = <center>INFORMATION</center></font></td></tr>	<tr><td><font size=2 color="#000000"><center>You successfully recalled the item.</center>
		//Guild Take = <center>INFORMATION</center></font></td></tr>	<tr><td><font size=2 color="#000000"><center>You successfully took the item into your backpack.</center>
		var infoMatch = $(documentText).find('center[id="info-msg"]').html();
		var result="";
		if (infoMatch) {
			infoMatch = infoMatch.replace(/<br.*/,"");
			result=infoMatch;
		}
		return result;
	},

	networkIcon: function() {
		return '<img title="This function retrieves data from the network. Disable this to increase speed" '+
			' src="data:image/png;base64,' +
			'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA' +
			'B3RJTUUH1QgGDTMWk1twEwAAAAlwSFlzAAALEgAACxIB0t1+' +
			'/AAAAARnQU1BAACxjwv8YQUAAAC8SURBVHjahVPBEcQgCEQn' +
			'HdmTqUlr0qe16I8cufOiCGZnGCcIy4LEICJwmGgWJ3o0IOCQ' +
			'EqVg9Y4U3CoCHQhvxuPUZEiA3XYkxyI1/6S6R6rke8AlJbkV' +
			'7u95lleXq3yrdyUjLGxwnifmnHEXY3fJIQSIMcKOZCLgMltr' +
			'r+1ZWgxp8wi1VrEqxfeFWloYq4wKtOHeBNqeawqmeOnNvfdY' +
			'SvkbfaeUxP0w/G+k6WsT/xCBc25SuxDsnownEy4u5BHudpMF' +
			'egAAAABJRU5ErkJggg==" width="16" height="16" />';
	},

	quickBuffHref: function(playerId, buffList) {
		if (buffList) {
			return "href=\"javascript:window.openWindow('index.php?cmd=quickbuff&tid=" + playerId +
				"&blist=" + buffList + "', 'fsQuickBuff', 618, 1000, ',scrollbars')\"";
		} else {
			return "href=\"javascript:window.openWindow('index.php?cmd=quickbuff&tid=" + playerId +
			"', 'fsQuickBuff', 618, 1000, ',scrollbars')\"";
		}
	},


	formatWiki: function(aText, oldVersion, newVersion) {
		var lines=aText.replace("\r","").split("\n");
		var changes=[];
		var revRX = /^==Revision\s*(\d+)/i;
		var chgRX = /^\s*\#\s+(.*)$/i;
		var rev = null;
		var chg = null;
		var revNo = 0;
		var chgTxt = "";

		for (var i=0; i<lines.length; i++){
			var line = lines[i];
			rev=revRX.exec(line);
			chg=chgRX.exec(line);

			if (rev) revNo = parseInt(rev[1],10);
			chgTxt = "";
			if (chg) chgTxt = chg[1];
			if (chgTxt!=="") {
				if (!changes[revNo]) changes[revNo] = "";
				changes[revNo] += "<li>" + chgTxt + "</li>";
			}
		}
		var result='<ul>';
		for (i=newVersion; i>oldVersion; i--) {
			if (changes[i]) {
				result += '<li><ul type=square>Version '+ i + '. ' + changes[i] + '</ul></li>';
			}
		}
		result += "</ul>";
		return result;
	}

};

var Helper = {
	// System functions
	init: function (e) {
		Helper.initSettings();
		//Helper.beginAutoUpdate();
		Helper.readInfo();
		this.initialized = true;
	},

	initSettings: function () {
		System.setDefault("currentTile", "");
		System.setDefault("lastActiveQuestPage", "");
		System.setDefault("lastCompletedQuestPage", "");
		System.setDefault("lastNotStartedQuestPage", "");
		System.setDefault("questBeingTracked", "");
		System.setDefault("lastWorld", "");
		System.setDefault("questsNotStarted", false);
		System.setDefault("questsNotComplete", false);
		System.setDefault("checkForQuestsInWorld", false);
		System.setDefault("enableLogColoring", true);
		System.setDefault("enableChatParsing", true);
		System.setDefault("enableCreatureColoring", true);
		System.setDefault("showCombatLog", true);
		System.setDefault("showCreatureInfo", true);
		System.setDefault("keepLogs", false);

		System.setDefault("showExtraLinks", true);
		System.setDefault("huntingBuffs", "Doubler,Librarian,Adept Learner,Merchant,Treasure Hunter,Animal Magnetism,Conserve");
		System.setDefault("huntingBuffsName", "default");
		System.setDefault("huntingBuffs2", "Deflect");
		System.setDefault("huntingBuffs2Name", "PvP");
		System.setDefault("huntingBuffs3", "SE hunting");
		System.setDefault("huntingBuffs3Name", "Super Elite Slayer");
		System.setDefault("showHuntingBuffs", true);
		System.setDefault("moveFSBox", false);

		System.setDefault("guildSelf", "");
		System.setDefault("guildFrnd", "");
		System.setDefault("guildPast", "");
		System.setDefault("guildEnmy", "");
		System.setDefault("goldRecipient", "");
		System.setDefault("goldAmount", "");
		System.setDefault("sendGoldonWorld", false);
		System.setDefault("goldConfirm", "");

		System.setDefault("hideKrulPortal", false);
		System.setDefault("hideQuests", false);
		System.setDefault("hideQuestNames", "");
		System.setDefault("hideRecipes", false);
		System.setDefault("hideRecipeNames", "");
		System.setDefault("footprintsColor", "silver");
		System.setDefault("enableGuildInfoWidgets", true);
		System.setDefault("enableOnlineAlliesWidgets", true);
		System.setDefault("guildOnlineRefreshTime", 300);
		System.setDefault("hideGuildInfoSecureTrade", false);
		System.setDefault("hideGuildInfoTrade", false);
		System.setDefault("hideGuildInfoMessage", false);
		System.setDefault("hideGuildInfoBuff", false);

		System.setDefault("buyBuffsGreeting", "Hello {playername}, can I buy {buffs} for {cost} please?");
		System.setDefault("renderSelfBio", true);
		System.setDefault("bioEditLines", 10);
		System.setDefault("renderOtherBios", true);
		System.setDefault("playNewMessageSound", false);
		System.setDefault("showSpeakerOnWorld", true);
		System.setDefault("defaultMessageSound", "http://dl.getdropbox.com/u/2144065/chimes.wav");
		System.setDefault("highlightPlayersNearMyLvl", true);
		System.setDefault("highlightGvGPlayersNearMyLvl", true);
		System.setDefault("detailedConflictInfo", false);
		System.setDefault("gameHelpLink", true);
		System.setDefault("navigateToLogAfterMsg", true);

		System.setDefault("enableAllyOnlineList", false);
		System.setDefault("enableEnemyOnlineList", false);
		System.setDefault("allyEnemyOnlineRefreshTime", 60);
		System.setDefault("moveGuildList", false);
		System.setDefault("moveOnlineAlliesList", false);

		System.setDefault("hideMatchesForCompletedMoves", false);
		System.setDefault("quickKill", true);
		System.setDefault("doNotKillList", "");
		System.setDefault("enableBioCompressor", false);
		System.setDefault("maxCompressedCharacters", 1500);
		System.setDefault("maxCompressedLines", 25);
		System.setDefault("hideArenaPrizes", "");
		System.setDefault("autoSortArenaList", false);

		System.setDefault("currentGoldSentTotal", 0);
		System.setDefault("keepBuffLog", true);
		System.setDefault("buffLog", "");

		System.setDefault("enableActiveBountyList", false);
		System.setDefault("bountyListRefreshTime", 30);
		System.setDefault("enableWantedList", false);
		System.setDefault("wantedNames", "");
		System.setDefault("bwNeedsRefresh", true);

		System.setDefault("enableBulkSell", false);
		System.setDefault("bulkSellAllBags", false);

		System.setDefault("fsboxlog", true);
		System.setDefault("fsboxcontent", "");
		System.setDefault("itemRecipient", "");
		System.setDefault("quickMsg",JSON.stringify(["Thank you very much ^_^", "Happy hunting, {playername}"]));
		System.setDefault("quickLinks","[]");
		System.setDefault("enableAttackHelper", false);
		System.setDefault("minGroupLevel", 1);
		System.setDefault("combatEvaluatorBias", 0);
		System.setDefault("enabledHuntingMode", 1);
		System.setDefault("hideRelicOffline", false);

		System.setDefault("enterForSendMessage", false);
		System.setDefault("trackKillStreak", true);
		System.setDefault("storeLastQuestPage", true);
		System.setDefault("addAttackLinkToLog", false);
		System.setDefault("showStatBonusTotal", true);

		System.setDefault("newGuildLogHistoryPages", 3);
		System.setDefault("useNewGuildLog", true);
		System.setDefault("enhanceChatTextEntry", true);

		System.setDefault("ajaxifyRankControls", true);

		System.setDefault("enableMaxGroupSizeToJoin", true);
		System.setDefault("maxGroupSizeToJoin", 11);

		System.setDefault("enableTitanLog", false);
		System.setDefault("titanLogRefreshTime", 5);

		System.setDefault("enableTempleAlert", true);
		System.setDefault("showGoldOnFindPlayer", true);
		System.setDefault("titanLogLength", 15);
		System.setDefault("autoFillMinBidPrice", false);
		System.setDefault("showPvPSummaryInLog", true);
		System.setDefault("addUFSGWidgets", true);
		System.setDefault("enableQuickDrink", true);
		System.setDefault("enhanceOnlineDots", true);
		System.setDefault("hideBuffSelected", true);
		System.setDefault("enableFastWalk", true);
		System.setDefault("hideHelperMenu", false);
		System.setDefault("keepHelperMenuOnScreen", true);
		System.setDefault("quickLinksTopPx", 22);
		System.setDefault("quickLinksLeftPx", 0);
		System.setDefault("showNextQuestSteps", true);

		Helper.setItemFilterDefault();

		Helper.guildLogFilters = [
		{"id":"showRecallMessages", "type":"Store/Recall"},
		{"id":"showRelicMessages", "type":"Relic"},
		{"id":"showMercenaryMessages", "type":"Mercenary"},
		{"id":"showGroupCombatMessages", "type":"Group Combat"},
		{"id":"showDonationMessages", "type":"Donation"},
		{"id":"showRankingMessages", "type":"Ranking"},
		{"id":"showGvGMessages", "type":"GvG"},
		{"id":"showTaggingMessages", "type":"Tag/UnTag"}
		];

		for (var i=0; i<Helper.guildLogFilters.length; i++) {
			System.setDefault(Helper.guildLogFilters[i].id, true);
		}

		System.setDefault("showQuickDropLinks", false);
		System.setDefault("sendClasses","['Amber', '5611'], ['Amethyst Weed', '9145'], ['Blood Bloom', '5563'], ['Cerulean Rose', '9156'], ['Coleoptera Body', '9287'], ['Dark Shade', '5564'], ['Deathbloom', '9140'], ['Deathly Mold', '9153'], ['Greenskin\u00A0Fungus', '9148'], ['Heffle', '5565'], ['Jademare', '5566'], ['Ruby Thistle', '9143'], ['Toad Corpse','9288'], ['Trinettle', '5567'], ['Viridian\u00A0Vine', '9151'], ['Mortar & Pestle', '9157'], ['Beetle Juice', '9158']");

		try {
			var quickSearchList = System.getValueJSON("quickSearchList");
		}
		catch (err) {
			GM_log(err);
			quickSearchList = null;
		}

		if (!quickSearchList) {
			quickSearchList = Data.quickSearchList();
			Helper.sortAsc = true;
			Helper.sortBy = "category";
			quickSearchList.sort(Helper.stringSort);
			System.setValueJSON("quickSearchList", quickSearchList);
		}

		var memberList = System.getValueJSON("memberlist");
		if (!memberList || !memberList.lastUpdate) {GM_setValue("memberlist", "");}
	},

	setItemFilterDefault: function() {
/*		Helper.itemFilters = [
		{"id":"showGloveTypeItems", "type":"Gloves"},
			{"id":"showHelmetTypeItems", "type":"Helmet"},
		{"id":"showAmuletTypeItems", "type":"Amulet"},
		{"id":"showWeaponTypeItems", "type":"Weapon"},
		{"id":"showAmorTypeItems", "type":"Armor"},
		{"id":"showShieldTypeItems", "type":"Shield"},
		{"id":"showRingTypeItems", "type":"Ring"},
		{"id":"showBootTypeItems", "type":"Boots"},
		{"id":"showRuneTypeItems", "type":"Rune"}
		];
*/
		//re-arranged array to so that arrayid = type number for HCS: item.item_type = i
		Helper.itemFilters = [
			{"id":"showHelmetTypeItems", "type":"Helmet"},
			{"id":"showAmorTypeItems", "type":"Armor"},
			{"id":"showGloveTypeItems", "type":"Gloves"},
			{"id":"showBootTypeItems", "type":"Boots"},
			{"id":"showWeaponTypeItems", "type":"Weapon"},
			{"id":"showShieldTypeItems", "type":"Shield"},
			{"id":"showRingTypeItems", "type":"Ring"},
			{"id":"showAmuletTypeItems", "type":"Amulet"},
			{"id":"showRuneTypeItems", "type":"Rune"}
		];
		for (var i=0; i<Helper.itemFilters.length; i++) {
			System.setDefault(Helper.itemFilters[i].id, true);
		}
	},


	readInfo: function() {
		if (isNewUI == 1) {
			Helper.characterName = $('dt.stat-name:first').next().text().replace(/,/g,'');
			Helper.characterLevel = $('dt.stat-level:first').next().text().replace(/,/g,'')*1;
			Helper.characterAttack = $('dt.stat-attack:first').next().text().replace(/,/g,'')*1;
			Helper.characterDefense = $('dt.stat-defense:first').next().text().replace(/,/g,'')*1;
			Helper.characterHP = $('dt.stat-hp:first').next().text().replace(/,/g,'')*1;
			Helper.characterArmor = $('dt.stat-armor:first').next().text().replace(/,/g,'')*1;
			Helper.characterDamage = $('dt.stat-damage:first').next().text().replace(/,/g,'')*1;
			GM_setValue("CharacterName", Helper.characterName);

			Helper.savedItemData = [];
		} else {
			var charInfo = $('img[src*="skin/icon_player.gif"]').closest('td.help');
			if (charInfo.length == 0) { return; }
			$(charInfo).each(function() {
				var charInfoText = $(this).data('tipped');
				/**
				<div><center><b>Character Summary</b></center><br><table border=0 cellpadding=3 cellspacing=0 width='100%'><tr><td><font color='#999999'>Name: </td><td width='90%'>teekill</td></tr><tr><td><font color='#999999'>Level: </td><td width='90%' class='level'>959</td></tr><tr><td class='line'><font color='#999999'>Rank: </td><td width='90%' class='line'><table border=0 cellpadding='0' cellspacing='0'><tr><td>271st</td><td>  <font size=1><img src='http://fileserver.huntedcow.com/skin/arrow_down.gif'> -1</font></td></tr></table></td></tr><tr><td><font color='#999999'>Attack: </td><td width='90%'>7749</td></tr><tr><td><font color='#999999'>Defense: </td><td width='90%'>10515</td></tr><tr><td><font color='#999999'>HP: </td><td width='90%'>901</td></tr><tr><td><font color='#999999'>Armor: </td><td width='90%'>41</td></tr><tr><td class='line'><font color='#999999'>Damage: </td><td width='90%' class='line'>2422</td></tr></table><br>Complete character details (including your inventory can be viewed by clicking 'Character' followed by 'Profile'.</div>
				*/
				Helper.characterName = charInfoText.match(/Name:\s*<\/td><td width=\'90%\'>([0-9a-z]+)/i)[1];
				Helper.characterLevel = System.getIntFromRegExp(charInfoText, /Level:\s*<\/td><td width=\'90%\' class='level'>(\d+)/i);
				Helper.characterAttack = System.getIntFromRegExp(charInfoText, /Attack:\s*<\/td><td width=\'90%\'>(\d+)/i);
				Helper.characterDefense = System.getIntFromRegExp(charInfoText, /Defense:\s*<\/td><td width=\'90%\'>(\d+)/i);
				Helper.characterHP = charInfoText.match(/HP:\s*<\/td><td width=\'90%\'>(\d+)/i)[1];
				Helper.characterArmor = charInfoText.match(/Armor:\s*<\/td><td width=\'90%\'>(\d+)/i)[1];
				Helper.characterDamage = charInfoText.match(/Damage:\s*<\/td><td width=\'90%\' class=\'line\'>(\d+)/i)[1];
				GM_setValue("CharacterName", Helper.characterName);

				Helper.savedItemData = [];
			});
		}
	},

	// Autoupdate
	//beginAutoUpdate: function() {
	//	var lastCheck = GM_getValue("lastVersionCheck");
	//	var now = (new Date()).getTime();
	//	if (!lastCheck) {lastCheck = 0;}
	//	var haveToCheck = ((now - lastCheck) > 6 * 60 * 60 * 1000);
	//	if (haveToCheck) {
	//		Helper.checkForUpdate();
	//	}
	//},

	//checkForUpdate: function() {
	//	GM_log("Checking for new version...");
	//	var now = (new Date()).getTime();
	//	GM_setValue("lastVersionCheck", now.toString());
	//	GM_xmlhttpRequest({
	//		method: 'GET',
	//		url: "http://code.google.com/p/fallenswordhelper/source/browse/trunk",
	//		/*headers: {
	//			"User-Agent": navigator.userAgent,
	//			"Referer": document.location
	//		},*/
	//		onload: function(responseDetails) {
	//			Helper.autoUpdate(responseDetails);
	//		}
	//	});
	//},

	//autoUpdate: function(responseDetails) {
	//	var now = (new Date()).getTime();
	//	GM_setValue("lastVersionCheck", now.toString());
	//	var currentVersion = GM_getValue("currentVersion");
	//	if (!currentVersion) {currentVersion = 0;}
    //
	//	var doc = System.createDocument(responseDetails.responseText);
	//	var latestVersion = $(doc).find('td:contains("fallenswordhelper.user.js")').next().next().text();
    //
	//	GM_log("Current version: " + currentVersion);
	//	GM_log("Found version: " + latestVersion);
    //
	//	if (currentVersion != latestVersion) {
	//		GM_xmlhttpRequest({
	//			method: 'GET',
	//			url: "http://fallenswordhelper.googlecode.com/svn/wiki/ChangeLog.wiki?nonce=" + now,
	//			/*headers: {
	//				"User-Agent": navigator.userAgent,
	//				"Referer": document.location
	//			},*/
	//			onload: function(responseDetails) {
	//				Helper.autoUpdateConfirm(responseDetails, currentVersion, latestVersion);
	//			}
	//		});
	//	}
	//},

	//autoUpdateConfirm: function(responseDetails, oldVersion, newVersion) {
	//	var theChanges = Layout.formatWiki(responseDetails.responseText, oldVersion, newVersion);
    //
	//	var $dialog = $('<div></div>')
	//		.html(theChanges)
	//		.dialog({
	//			title: 'Fallen Sword Helper new version (' + newVersion + ') found. Update from version ' + oldVersion + '?',
	//			resizable: false,
	//			height:500,
	//			width:500,
	//			modal: true,
	//			buttons: {
	//				"OK": function() {
	//					$dialog.dialog( "close" );
	//					GM_setValue("currentVersion", newVersion);
	//					GM_openInTab("http://fallenswordhelper.googlecode.com/svn-history/r" + newVersion + "/trunk/fallenswordhelper.user.js");
	//				},
	//				Cancel: function() {
	//					$dialog.dialog( "close" );
	//				}
	//			}
	//	});
	//},

	// main event dispatcher
	onPageLoad: function(anEvent) {
		hcsData = $('html').data('hcs');
		if (hcsData) {
			if (hcsData['beta']) isBeta = 1;
			if (hcsData['new-ui']) isNewUI = 1;
		}
		//TODO: These are only meant to be a temporary fix for people using *nix based systems, remove when HCS fixes the slash issue
		if (System.imageServer != System.imageServerHTTP) {
			var changeCount = 0;
			var td = System.findNodes("//td[contains(@background, 'file://') and contains(@background, 'tiles')]");
			if (td) {
				for (var i = 0; i < td.length; i++) {
					var src = td[i].getAttribute("background");
					if (src) {
						if (src.indexOf("file://") != -1 && src.indexOf("\\") != -1) {
							td[i].setAttribute("background", src.replace(/\\/g, "/"));
							changeCount++;
						}
					}
				}
			}
			if (changeCount === 0 && td !== null) {
				GM_log("Time to remove the temporary HCS tile image slash fix.");
			} /*else {
				GM_log("Changed " + changeCount + " references.");
			}*/
		}
		if (GM_getValue("gameHelpLink")) {
			if (isNewUI == 1) var gameHelpNode = $('div.minibox h3:contains("Game Help")');
			//else var gameHelpNode = $('td font b:contains("Game Help")');
			$(gameHelpNode).each(function() {
				$(this).html("<a href='index.php?cmd=settings' style='color: #FFFFFF; text-decoration: underline'>" + $(this).text() + "</a>");
			});
		}

		if (GM_getValue("huntingMode")) {
			Helper.readInfo();
			Helper.replaceKeyHandler();
			Helper.fixOnlineGuildBuffLinks();
		} else {
			Helper.init();
			//move boxes in opposite order that you want them to appear.
			if (GM_getValue("moveGuildList")) {
				if (isNewUI == 1) Layout.moveRHSBoxUpOnRHS('minibox-guild');
				//else Layout.moveRHSBoxUpOnRHS('Guild Info');
			}
			if (GM_getValue("moveOnlineAlliesList")) {
				if (isNewUI == 1) Layout.moveRHSBoxUpOnRHS('minibox-allies');
				//else Layout.moveRHSBoxUpOnRHS('Online Allies');
			}
			if (GM_getValue("moveFSBox")) {
				if (isNewUI == 1) Layout.moveRHSBoxToLHS('minibox-fsbox');
				//else Layout.moveRHSBoxToLHS('FSBox');
			}

			Helper.prepareAllyEnemyList();
			Helper.prepareGuildList();
			Helper.prepareBountyData();
			Helper.injectStaminaCalculator();
			Helper.injectLevelupCalculator();
			Layout.injectMenu();
			Helper.replaceKeyHandler();
			Helper.injectFSBoxLog();
			Helper.fixOnlineGuildBuffLinks();
			Helper.addGuildInfoWidgets();
			Helper.addOnlineAlliesWidgets();
			Helper.injectJoinAllLink();
			Helper.changeGuildLogHREF();
			Helper.injectAHsearch();
			Helper.updateTitanLogs();
			Helper.injectHomePageTwoLink();
			Helper.injectTempleAlert();
			Helper.injectQuickMsgDialogJQ();
		}

		Helper.injectHelperMenu();
		var pageId, subPageId, subPage2Id, subsequentPageId, typePageId;

		if (document.location.search !== "") {
			var re=/cmd=([a-z]+)/;
			var pageIdRE = re.exec(document.location.search);
			pageId="-";
			if (pageIdRE) {pageId=pageIdRE[1];}

			re=/subcmd=([a-z]+)/;
			var subPageIdRE = re.exec(document.location.search);
			subPageId="-";
			if (subPageIdRE){subPageId=subPageIdRE[1];}
			re=/subcmd2=([a-z]+)/;
			var subPage2IdRE = re.exec(document.location.search);
			subPage2Id="-";
			if (subPage2IdRE) {subPage2Id=subPage2IdRE[1];}

			re=/page=([0-9]+)/;
			var subsequentPageIdRE = re.exec(document.location.search);
			subsequentPageId="-";
			if (subsequentPageIdRE) {subsequentPageId=subsequentPageIdRE[1];}

			re=/type=([0-9]+)/;
			var typePageIdRE = re.exec(document.location.search);
			typePageId="-";
			if (typePageIdRE) {typePageId=typePageIdRE[1];}
		} else {
			pageId=System.findNode("//input[@type='hidden' and @name='cmd']");
			pageId = pageId?pageId.getAttribute("value"):"-";

			subPageId=System.findNode("//input[@type='hidden' and @name='subcmd']");
			subPageId=subPageId?subPageId.getAttribute("value"):"-";
			if (subPageId=="dochat") {pageId="-"; subPageId="-";}

			subPage2Id=System.findNode("//input[@type='hidden' and @name='subcmd2']");
			subPage2Id=subPage2Id?subPage2Id.getAttribute("value"):"-";

			subsequentPageId=System.findNode("//input[@type='hidden' and @name='page']");
			subsequentPageId=subsequentPageId?subsequentPageId.getAttribute("value"):"-";
		}

		Helper.page = pageId + "/" + subPageId + "/" + subPage2Id + "(" + subsequentPageId + ")";

		switch (pageId) {
		case "settings":
			Helper.injectSettings();
			break;
		case "world":
			switch (subPageId) {
			case "viewcreature":
				Helper.injectCreature();
				break;
			case "map":
				Helper.injectWorldMap();
				break;
			default:
				Helper.injectWorld();
				break;
			}
			break;
		case "news":
			switch (subPageId) {
			case "fsbox":
				Helper.injectShoutboxWidgets('fsbox_input', 100);
				break;
			case "shoutbox":
				Helper.injectShoutboxWidgets('shoutbox_input', 150);
				break;
			default:
				break;
			}
			break;
		case "blacksmith":
			switch (subPageId) {
			case "repairall":
				Helper.injectWorld();
				break;
			default:
				break;
			}
			break;
		case "arena":
			switch (subPageId) {
			case "-":
				//Helper.injectArena();
				break;
			case "completed":
				Helper.storeCompletedArenas();
				break;
			case "pickmove":
				Helper.storeArenaMoves();
				break;
			case "results":
				//Helper.injectTournament();
				break;
			case "dojoin":
				//Helper.injectTournament();
				break;
			case "setup":
				Helper.injectArenaSetupMove();
				break;
			default:
				break;
			}
			break;
		case "questbook":
			switch (subPageId) {
			case "viewquest":
				Helper.injectQuestTracker();
				break;
			case "atoz":
				Helper.injectQuestBookFull();
				break;
			case "-":
				Helper.injectQuestBookFull();
				break;
			default:
				break;
			}
			break;
		case "profile":
			switch (subPageId) {
			case "dropitems":
				Helper.injectDropItems();
				Helper.injectMoveItems();
				break;
			case "changebio":
				Helper.injectBioWidgets();
				break;
			case "-":
				Helper.injectProfile();
				break;
			default:
				break;
			}
			break;
		case "auctionhouse":
			switch (subPageId) {
			case "create":
				//Helper.injectCreateAuctionTemplate();
				//Helper.injectCreateAuctionBulkSell();
				//Helper.injectAuctionSTCheck();
				break;
			case "preferences":
				break;
			default:
				//Helper.injectAuctionHouse();
				break;
			}
			break;
		case "guild":
			switch (subPageId) {
			case "inventory":
				switch (subPage2Id) {
					case "report":
						Helper.injectReportPaint();
						break;
					case "addtags":
						Helper.injectGuildAddTagsWidgets();
						break;
					case "removetags":
						Helper.injectGuildAddTagsWidgets();
						break;
					default:
						Helper.injectDropItems();
						break;
				}
				break;
			case "chat":
				Helper.addChatTextArea();
				Helper.addLogColoring("Chat", 0);
				break;
			case "log":
				Helper.addLogColoring("GuildLog", 1);
				Helper.addGuildLogWidgets();
				break;
			case "groups":
				switch (subPage2Id) {
					case "viewstats":
						Helper.injectGroupStats();
						break;
					default:
						Helper.injectGroups();
						break;
				}
				break;
			case "manage":
				Helper.parseGuildForWorld();
				Helper.injectGuild();
				break;
			case "advisor":
				Helper.injectAdvisor(subPage2Id);
				break;
			case "history":
				Helper.addHistoryWidgets();
				break;
			case "view":
				Helper.injectViewGuild();
				break;
			case "scouttower":
				Helper.injectScouttower();
				break;
			case "mailbox":
				Helper.injectMailbox();
				break;
			case "ranks":
				Helper.injectGuildRanks();
				break;
			case "conflicts":
				switch (subPage2Id) {
					case "rpupgrades":
						Helper.injectRPUpgrades();
						break;
					default:
						break;
				}
				break;
			default:
				break;
			}
			break;
		case "bank":
			Helper.injectBank();
			break;
		case "log":
			switch (subPageId) {
			case "outbox":
				Helper.addLogColoring("OutBox", 1);
				break;
			case "-":
				Helper.addLogColoring("PlayerLog", 1);
				Helper.addLogWidgets();
				break;
			default:
				break;
			}
			break;
		case "potionbazaar":
			Helper.injectBazaar();
			break;
		case "marketplace":
			switch (subPageId) {
			case "createreq":
				Helper.addMarketplaceWidgets();
				break;
			default:
				break;
			}
			break;
		case "quickbuff":
			//Helper.injectQuickBuff();
			break;
		case "notepad":
			switch (subPageId) {
			case "showlogs":
				Helper.injectNotepadShowLogs();
				break;
			case "invmanager":
				Helper.injectInventoryManager();
				break;
			case "guildinvmanager":
				Helper.injectInventoryManager();
				break;
			case "recipemanager":
				Helper.injectRecipeManager();
				break;
			case "auctionsearch":
				Helper.injectAuctionSearch();
				break;
			case "onlineplayers":
				Helper.injectOnlinePlayers();
				break;
			case "quicklinkmanager":
				Helper.injectQuickLinkManager();
				break;
			case "monsterlog":
				Helper.injectMonsterLog();
				break;
			case "quickextract":
				Helper.insertQuickExtract();
				break;
			case "quickwear":
				Helper.insertQuickWear();
				break;
			case "fsboxcontent":
				Helper.injectFsBoxContent();
				break;
			case "bufflogcontent":
				Helper.injectBuffLog();
				break;
			case "guildlog":
				Helper.injectGuildLogSummary();
				break;
			case "newguildlog":
				Helper.injectNewGuildLog();
				break;
			case "checkwear":
				Helper.injectCheckWearingItem();
				break;
			case "findbuffs":
				Helper.injectFindBuffs();
				break;
			case "findother":
				Helper.injectFindOther();
				break;
			case "createmap":
				Helper.injectCreateMap();
				break;
			case "savesettings":
				Helper.injectSaveSettings();
				break;
			default:
				Helper.injectNotepad();
				break;
			}
			break;
		case "points":
			switch (subPageId) {
			//case "shop":
				//Helper.storePlayerUpgrades();
				//Helper.injectPoints();
				//break;
			case "-":
				if (typePageId == "-" || typePageId == 0) Helper.storePlayerUpgrades();
				//Helper.injectPoints();
				break;
			default:
				break;
			}
			break;
		case "trade":
			Helper.retrieveTradeConfirm();
			switch (subPageId) {
			case "createsecure":
				Helper.injectTrade();
				break;
			case "-":
				Helper.injectTrade();
				break;
			default:
				break;
			}
			break;
		case "titan":
			Helper.injectTitan();
			break;
		case "toprated":
			switch (subPageId) {
			case "xp":
				Helper.injectTopRated();
				break;
			default:
				break;
			}
			break;
		case "inventing":
			switch (subPageId) {
			case "viewrecipe":
				Helper.injectViewRecipe();
				Helper.injectInvent();
				break;
			default:
				break;
			}
			//Helper.injectInvent();
			break;
		case "tempinv":
			Helper.injectMailbox();
			break;
		case "attackplayer":
			Helper.injectAttackPlayer();
			break;
		case "findplayer":
			Helper.injectFindPlayer();
			break;
		case "relic":
			Helper.injectRelic();
			break;
		case "creatures":
			switch (subPageId) {
			case "view":
				break;
			default:
				Helper.injectCreatures();
				break;
			}
			break;
		case "quests":
			switch (subPageId) {
			case "view":
				Helper.showAllQuestSteps();
				break;
			default:
				break;
			}
			break;
		case "scavenging":
			switch (subPageId) {
			case "process":
				Helper.injectScavenging();
				break;
			default:
				break;
			}
			break;
		case "temple":
			Helper.parseTemplePage();
			break;
		case "-":
			var isRelicPage = System.findNode("//td[contains(.,'Below is the current status for the relic')]/b");
			if (isRelicPage) {
				Helper.injectRelic(isRelicPage);
			}
			var isBuffResult = System.findNode("//td[contains(.,'Back to Quick Buff Menu')]");
			if (isBuffResult) {
				Helper.updateBuffLog();
			}
			var isAuctionPage = System.findNode("//img[contains(@title,'Auction House')]");
			if (isAuctionPage) {
				Helper.injectAuctionHouse();
			}
			var isShopPage =  $('#shop-info').length > 0;//System.findNode("//td[contains(.,'then click to purchase for the price listed below the item.')]");
			if (isShopPage) {
				Helper.injectShop();
			}
			var isQuestBookPage = System.findNode("//td[.='Quest Name']");
			if (isQuestBookPage) {
				Helper.injectQuestBookFull();
			}
			var isAdvisorPageClue1 = System.findNode("//font[@size=2 and .='Advisor']");
			var clue2 = "//a[@href='index.php?cmd=guild&amp;subcmd=manage' and .='Back to Guild Management']";
			var isAdvisorPageClue2 = System.findNode(clue2);
			if (isAdvisorPageClue1 && isAdvisorPageClue2) {
				Helper.injectAdvisor(subPage2Id);
			}
			var isArenaTournamentPage = System.findNode("//b[contains(.,'Tournament #')]");
			if (isArenaTournamentPage) {
				//Helper.injectTournament();
			}
			if (System.findNode("//a[.='Back to Scavenging']")) {
				Helper.injectScavenging();
			}
			if($('img[title="Inventing"]').length > 0){
				Helper.injectInvent();
			}
			break;
		case "skills":
			Helper.injectSkillsPage();
			break;
		default:
			break;
		}
		if (GM_getValue("playNewMessageSound")) {
			var soundLocation = GM_getValue("defaultMessageSound");
			 //new UI
			 $('a:contains("New log messages"):first').each(function(){$(this).after("<audio src='" + soundLocation + "' autoplay=true />");});
			 $('a:contains("New Guild chat message"):first').each(function(){$(this).after("<audio src='" + soundLocation + "' autoplay=true />");});
		}

		//This must be at the end in order not to screw up other System.findNode calls (Issue 351)
		if (GM_getValue("huntingMode") === false) {
			Helper.injectQuickLinks();
		}
	},

	injectQuickMsgDialogJQ: function() {
		var nodes = $('a[href*="javascript:openQuickMsgDialog("]');
		if (nodes.length == 0) return;
		for (var i=0; i<nodes.length; i++) {
			nodes[i].addEventListener("click", Helper.addTemplateButton, true);
		}
	},

	addTemplateButton: function() {
		setTimeout(function() {Helper.template = System.getValueJSON("quickMsg");}, 0);
		var buttons = $("#quickMessageDialog").dialog("option","buttons");
		buttons["Template"] = function() { Helper.showMsgTemplate() };
		$("#quickMessageDialog").dialog("option","buttons",buttons);
	},

	showMsgTemplate: function() {
		var targetPlayer=$("#quickMsgDialog_targetUsername").text();
		$("#msgTemplateDialog").remove();

		// template displayed
		var html="<div id=msgTemplateDialog title='Choose Msg Template' style='display:none'><style>#msgTemplate .ui-selecting { background: #FECA40; };</style><ol id=msgTemplate valign=center>";
		for (var i = 0; i < Helper.template.length; i++) {
			html += "<li class='ui-widget-content'>"+Helper.template[i].replace(/{playername}/g, targetPlayer) + "</li>";
		}
		html += "</ol></div>";
		$("body").append(html);

		// template manager
		$("#msgTemplate li").prepend("<input type=button class='del-button' value=Del style='display:none'>");
		$("#msgTemplate").append("<li class='add-button' style='display:none'><input type=button id=newTmplAdd value=Add><input id=newTmpl class=ui-widget-content></li>");
		$(":button","#msgTemplate").button();
		$(".del-button").click(function(evt) {
			Helper.template.splice($("#msgTemplate li").index(evt.target.parentNode), 1);
			System.setValueJSON("quickMsg", Helper.template);
			$("#msgTemplateDialog").dialog("close");
			Helper.showMsgTemplate();
		});
		$("#newTmplAdd").click(function() {
			if ($("#newTmpl").val()=="") return;
			Helper.template.push($("#newTmpl").val());
			System.setValueJSON("quickMsg", Helper.template);
			$("#msgTemplateDialog").dialog("close");
			Helper.showMsgTemplate();
		});

		// enable selectable template
		$( "#msgTemplate" ).selectable({
			filter: "li.ui-widget-content",
			stop: function() {
				if ($('.add-button.ui-selected').length>0) return; // click on add row
				if ($('.ui-selected').length==0) return; // nothing selected yet
				$("#quickMsgDialog_msg").val($("#quickMsgDialog_msg").val()+$('#msgTemplate .ui-selected').text()+'\n');
				$("#msgTemplateDialog").dialog("close");
			}
		});

		// show the template form
		$("#msgTemplateDialog").dialog({"buttons":{
			"Manage":function() {
				$(".del-button").toggle();
				$(".add-button").toggle();
			},
			"Cancel":function() {$("#msgTemplateDialog").dialog("close");$("#msgTemplateDialog").remove();}
		}});
	},

	injectSkillsPage: function() {
		var buffs = $('a[href*="index.php?cmd=skills&tree_id="][href*="&skill_id="] img[border*="0"]');
		for (var i = 0; i < buffs.length; i++) {
			var parNode = buffs[i].parentNode;
			//var mouseoverText = buffs[i].firstChild.getAttribute("onmouseover");
			var mouseoverText = $(buffs[i]).data('tipped');
			var buffIndex = parNode.getAttribute("href").match(/skill_id=(\d*)/)[1];
			var buffList = Data.buffList();
			for (var j = 0; j < buffList.length; j++) {
				if (buffList[j].skillId == buffIndex) {
					mouseoverText = mouseoverText.replace("Click for Details", buffList[j].buff);
					break;
				}
			}
			buffs[i].setAttribute("data-tipped", mouseoverText);

		}
	},

	injectViewGuild: function() {
		var avyImg;
		if (navigator.userAgent.indexOf("Firefox")>0)
			avyImg = System.findNode("//img[contains(@title, 's Logo')]");
		else //chrome
			avyImg = System.findNode("//img[contains(@oldtitle, 's Logo')]");
		if (!avyImg) {return;}
		avyImg.style.borderStyle="none";

		var highlightPlayersNearMyLvl = GM_getValue("highlightPlayersNearMyLvl");
		var highlightGvGPlayersNearMyLvl = GM_getValue("highlightGvGPlayersNearMyLvl");
		if (highlightPlayersNearMyLvl || highlightGvGPlayersNearMyLvl) {
			var memberList = System.findNode("//tr[td/b[.='Members']]/following-sibling::tr/td/table");
			var levelToTest = Helper.characterLevel;
			var characterVirtualLevel = GM_getValue('characterVirtualLevel');
			if (characterVirtualLevel) levelToTest = characterVirtualLevel;


			for (var i=2;i<memberList.rows.length;i++) {
				var iplus1 = i+1;
				if (memberList.rows[i].cells[1]) {
					//Firefox reads it as </td> and chrome reads it as \&lt;\/td\&gt;
					var vlevel = /VL:.+?(\d+)/.exec(memberList.rows[i].cells[1].innerHTML)[1];
					var level = memberList.rows[i].cells[2].innerHTML;
					var aRow = memberList.rows[i];
					if (highlightPlayersNearMyLvl && Math.abs(vlevel - levelToTest) <= ((levelToTest <= 205)?5:10)) {
						aRow.style.backgroundColor = "#4671C8"; //blue
					} else if (highlightGvGPlayersNearMyLvl && Math.abs(vlevel - levelToTest) <= ((levelToTest <= 300)?25:(levelToTest <= 700)?50:100)) {
						aRow.style.backgroundColor = "#FF9900"; //red
					}
				}
			}
		}
		Helper.changeGuildListOfflineBallColor();
	},

	updateBuffLog: function() {
		if (GM_getValue("keepBuffLog")) {
			var now=new Date();
			var timeStamp = System.formatDateTime(now);//now.toLocaleFormat("%Y-%m-%d %H:%M:%S") + " - ";
			var buffLog=GM_getValue("buffLog");
			var buffsAttempted = document.body.innerHTML.split('<li>');
			document.body.innerHTML+= "<span id='buff_Log' style='color:yellow'></span>";
			var buffsNotCastRE = /The skill ([\w ]*) of current or higher level is currently active on \'(\w*)\'/;
			var buffsCastRE = /Skill ([\w ]*) level (\d*) was activated on \'(\w*)\'/;
			var buffList = Data.buffList();
			//var buffsNotCast = buffsCastRE.exec(document.body.innerHTML);
			for (var i=0;i<buffsAttempted.length ;i++ )
			{
				var buffsCast = buffsCastRE.exec(buffsAttempted[i]);
				var buffsNotCast = buffsNotCastRE.exec(buffsAttempted[i]);
				var stamina = 0;
				if (buffsCast) {
					//document.getElementById('buff_Log').innerHTML+='<br>'+buffsCast[0];

				for (var j = 0; j < buffList.length; j++) {
					if (buffList[j].name == buffsCast[1]) {
						stamina = buffList[j].stamina;
						break;
					}
				}
					buffLog=timeStamp+buffsCast[0] + ' (' + stamina + ' stamina) <br>'+buffLog;
				}
				if (buffsNotCast) {

					buffLog=timeStamp+'<span style="color: red;">' + buffsNotCast[0] + '</span><br>' + buffLog;

				}

			}
			GM_setValue("buffLog",buffLog);
			//document.getElementById('buff_Log').innerHTML+='<br><br><br>'+buffLog;
		}

	},

	injectBuffLog: function(content) {
		if (!content) var content = Layout.notebookContent();
		content.innerHTML=Helper.makePageTemplate('Buff Log','','clearBuffs','Clear','bufflog');
		document.getElementById('clearBuffs').addEventListener('click',function() {GM_setValue("buffLog",'');window.location=window.location;},true);
		document.getElementById('bufflog').innerHTML=GM_getValue("buffLog");
	},

	injectFSBoxLog: function() {
		if (GM_getValue("fsboxlog")) {
			if (isNewUI != 1) var node=$('a[href="javascript:reportFSBox();"]').parents('font:first');
			else var node=$('div#minibox-fsbox');
			if (node.length > 0) {
				if (isNewUI != 1) var fsbox=node.html().replace('<br><br>',' ').replace(/<div(.*)report(.*)div>/ig,'');
				else var fsbox=node.find('p.message').html().replace('<br><br>',' ');
				var boxList=GM_getValue("fsboxcontent");
				if (boxList.indexOf(fsbox)<0) {boxList='<br>'+fsbox+boxList;}
				if (boxList.length>10000) {boxList=boxList.substring(0,10000);}
				GM_setValue("fsboxcontent",boxList);
				var nodediv = node.find('div');
				var playerName = node.find('a:first').text();
				nodediv.html(nodediv.html() + "&nbsp;" +
					"<nobr><a title='Add to Ignore List' href='index.php?cmd=log&subcmd=doaddignore&ignore_username=" + playerName +
					"' style='color:PaleVioletRed'>[ Ignore ]</a>&nbsp;" +
					"<a href='index.php?cmd=notepad&blank=1&subcmd=fsboxcontent' style='color:yellow'>[ Log ]</a></nobr>");
			}
		}
	},

	injectFsBoxContent: function(content) {
		if (!content) var content = Layout.notebookContent();
		content.innerHTML=Helper.makePageTemplate('FS Box Log','','fsboxclear','Clear','fsboxdetail');
		document.getElementById('fsboxclear').addEventListener('click',function() {GM_setValue("fsboxcontent",'');window.location=window.location;},true);
		document.getElementById('fsboxdetail').innerHTML=GM_getValue("fsboxcontent");
	},

	injectGuild: function() {
		var avyImg;
		if (navigator.userAgent.indexOf("Firefox")>0)
			avyImg = System.findNode("//img[contains(@title, 's Logo')]");
		else //chrome
			avyImg = System.findNode("//img[contains(@oldtitle, 's Logo')]");
		if (!avyImg) {return;}
		avyImg.style.borderStyle="none";

		var guildMiniSRC = System.findNode("//img[contains(@src,'_mini.jpg')]").getAttribute("src");
		var guildID = /guilds\/(\d+)_mini.jpg/.exec(guildMiniSRC)[1];
		GM_setValue("guildID",guildID);

		var xpLock = System.findNode("//a[contains(.,'Guild') and contains(.,'XP')]");
		if (xpLock) {
			//var xpLockmouseover = xpLock.getAttribute("onmouseover");
			var xpLockmouseover = $(xpLock).data('tipped');
			var xpLockXP = xpLockmouseover.replace(/,/g,"").match(/XP Lock: <b>(\d*)/);
			if (xpLockXP && xpLockXP.length == 2) {
				xpLockXP = xpLockXP[1];
				var actualXP = xpLockmouseover.replace(/,/g,"").match(/XP: <b>(\d*)/);
				if (actualXP && actualXP.length == 2) {
					actualXP = actualXP[1];
					if (actualXP < xpLockXP) {
						try {
						var xpNode = xpLock.parentNode.parentNode;
							xpNode.cells[1].innerHTML += ' (<b>' + System.addCommas(xpLockXP - actualXP) + '</b>)';
						} catch (err) {
							GM_log(err);
						}
					}
				}
			}
		}

		var leftHandSideColumnTable = System.findNode("//table[tbody/tr/td/font/a[contains(.,'Change Logo')]]");
		var changeLogoCell = leftHandSideColumnTable.rows[0].cells[1].firstChild;
		changeLogoCell.innerHTML += "[ <span style='cursor:pointer; text-decoration:underline;' " +
			"id='toggleGuildLogoControl' linkto='guildLogoControl' title='Toggle Section'>X</span> ]";
		var guildLogoElement = leftHandSideColumnTable.rows[2].cells[0].firstChild.nextSibling;
		guildLogoElement.id = "guildLogoControl";
		if (GM_getValue("guildLogoControl")) {
			guildLogoElement.style.display = "none";
			guildLogoElement.style.visibility = "hidden";
		}
		var leaveGuildCell = leftHandSideColumnTable.rows[4].cells[1].firstChild;
		leaveGuildCell.innerHTML += "[ <span style='cursor:pointer; text-decoration:underline;' " +
			"id='toggleStatisticsControl' linkto='statisticsControl' title='Toggle Section'>X</span> ]";
		statisticsControlElement = leftHandSideColumnTable.rows[6].cells[0].firstChild.nextSibling;
		statisticsControlElement.id = "statisticsControl";
		if (GM_getValue("statisticsControl")) {
			statisticsControlElement.style.display = "none";
			statisticsControlElement.style.visibility = "hidden";
		}
		var buildCell = leftHandSideColumnTable.rows[15].cells[1].firstChild;
		buildCell.innerHTML += "[ <span style='cursor:pointer; text-decoration:underline;' " +
			"id='toggleGuildStructureControl' linkto='guildStructureControl' title='Toggle Section'>X</span> ]";
		guildStructureControlElement = leftHandSideColumnTable.rows[17].cells[0].firstChild.nextSibling;
		guildStructureControlElement.id = "guildStructureControl";
		if (GM_getValue("guildStructureControl")) {
			guildStructureControlElement.style.display = "none";
			guildStructureControlElement.style.visibility = "hidden";
		}

		document.getElementById('toggleGuildLogoControl').addEventListener('click', System.toggleVisibilty, true);
		document.getElementById('toggleStatisticsControl').addEventListener('click', System.toggleVisibilty, true);
		document.getElementById('toggleGuildStructureControl').addEventListener('click', System.toggleVisibilty, true);

		//Update the guild online list, since we are already on the page.
		doc = document.firstChild.nextSibling;
		Helper.parseGuildForWorld(doc.innerHTML, true);
		$('td:contains("Username"):last').parents('table:first').find('a[href]').each(function(){
			$(this).after(" <a style='color:blue;font-size:10px;' href=\"javascript:window.openWindow('index.php?cmd=quickbuff&t="+$(this).text()+"', 'fsQuickBuff', 618, 1000, ',scrollbars')\">[b]</a>");
		});

		// self recall
		var selfRecall = leftHandSideColumnTable.rows[22].cells[0];
		selfRecall.innerHTML+=" [<a href='index.php?cmd=guild&subcmd=inventory&subcmd2=report&user="+Helper.characterName+"' title='Self Recall'>SR</a>]";

		//Detailed conflict information
		if (GM_getValue("detailedConflictInfo") === true) {
			var confNode = System.findNode("//table[contains(@id,'statisticsControl')]");
			System.xmlhttp("index.php?cmd=guild&subcmd=conflicts",
				Helper.getConflictInfo,	{"node": confNode});
		}
		Helper.changeGuildListOfflineBallColor();


	},

	changeGuildListOfflineBallColor: function() {
		//Code to change the colored balls based on last activity
		if (!GM_getValue("enhanceOnlineDots")) return;
		var memberTable = System.findNode("//table[tbody/tr/td[.='Rank']]");
		for (var i=2;i<memberTable.rows.length ;i++ ) {
			var aRow = memberTable.rows[i];
			if (aRow.cells[1]) {
				var contactLink   = aRow.cells[1].firstChild.nextSibling;
				//var lastActivity = /<td>Last Activity:<\/td><td>(\d+)d (\d+)h (\d+)m (\d+)s<\/td>/.exec(contactLink.getAttribute('onmouseover'));
				var lastActivity = /<td>Last Activity:<\/td><td>(\d+)d (\d+)h (\d+)m (\d+)s<\/td>/.exec($(contactLink).data('tipped'));
				var lastActivityDays = parseInt(lastActivity[1],10);
				var lastActivityHours = parseInt(lastActivity[2],10) + (lastActivityDays*24);
				var lastActivityMinutes = parseInt(lastActivity[3],10) + (lastActivityHours*60);
				if (lastActivityMinutes < 2) {
					aRow.cells[0].innerHTML = '<img width="10" height="10" title="Online" src="' + Data.greenDiamond() + '">';
				} else if (lastActivityMinutes < 5) {
					aRow.cells[0].innerHTML = '<img width="10" height="10" title="Offline" src="' + Data.yellowDiamond() + '">';
				} else if (lastActivityMinutes < 30) {
					aRow.cells[0].innerHTML = '<img width="10" height="10" title="Offline" src="' + Data.orangeDiamond() + '">';
				} else if (lastActivityMinutes > 10080) {
					aRow.cells[0].innerHTML = '<img width="10" height="10" title="Offline" src="' + Data.sevenDayDot() + '">';
				} else {
					aRow.cells[0].innerHTML = '<img width="10" height="10" title="Offline" src="' + Data.offlineDot() + '">';
				}
			}
		}
	},

	getConflictInfo: function(responseText, callback) {
		try {
			var insertHere = callback.node;
			var doc = System.createDocument(responseText);

			var page = System.findNode("//td[contains(.,'Page:')]", doc);
			var curPage = parseInt(System.findNode("//input[@name='page']", doc).value,10);
			var maxPage = page.innerHTML.match(/of&nbsp;(\d*)/);

			var conflictTable = System.findNode("//font[contains(.,'Participants')]/ancestor::table[1]", doc);
			if (conflictTable && conflictTable.rows.length > 3) {
				if (curPage == 1) {
					var newNode = insertHere.insertRow(insertHere.rows.length-2);
					newNode.insertCell(0);
					newNode.insertCell(0);
					newNode.cells[0].innerHTML = "<a href='index.php?cmd=guild&subcmd=conflicts'>Active Conflicts</a>";
					newNode.cells[1].innerHTML = "Score";
				}
				for (var i = 1; i <= conflictTable.rows.length - 4; i+=2) {
					var newRow = insertHere.insertRow(insertHere.rows.length-2);
					newRow.insertCell(0);
					newRow.insertCell(0);
					newRow.cells[0].innerHTML = conflictTable.rows[i].cells[0].innerHTML;
					newRow.cells[1].innerHTML = "<b>" + conflictTable.rows[i].cells[6].innerHTML + "</b>";
				}
			}
			if (maxPage && parseInt(maxPage[1],10) > curPage) {
				//http://www.fallensword.com/index.php?cmd=guild&subcmd=conflicts&subcmd2=&page=2&search_text=
				System.xmlhttp("index.php?cmd=guild&subcmd=conflicts&subcmd2=&page=" + (curPage + 1) + "&search_text=",
					Helper.getConflictInfo,
					{"node": callback.node});
			}
		} catch (err) {
			GM_log(err);
		}
	},

	recallGuildStoreItem: function(evt) {
		var guildStoreID=evt.target.getAttribute("itemID");
		var recallHref = "index.php?cmd=guild&subcmd=inventory&subcmd2=takeitem&guildstore_id=" + guildStoreID;
		System.xmlhttp(recallHref,
			Helper.recallGuildStoreItemReturnMessage,
			{"item": guildStoreID, "target": evt.target, "url": recallHref});
	},

	recallGuildStoreItemReturnMessage: function(responseText, callback) {
		var itemID = callback.item;
		var target = callback.target;
		var info = Layout.infoBox(responseText);
		var itemCellElement = target.parentNode; //System.findNode("//td[@title='" + itemID + "']");
		if (info.search("You successfully took the item into your backpack") != -1) {
			itemCellElement.innerHTML = "<span style='color:green; font-weight:bold;'>Taken</span>";
		} else if (info!=="") {
			itemCellElement.innerHTML = "<span style='color:red; font-weight:bold;'>Error:" + info + "</span>";
		} else {
			itemCellElement.innerHTML = "Weird Error: check the Tools>Error Console";
			GM_log("Post the previous HTML and the following message to the code.google.com site or to the forum to help us debug this error");
			GM_log(callback.url);
		}
	},

	injectStaminaCalculator: function() {
		if (isNewUI == 1) {
			var staminaMouseover = $('dl#statbar-stamina-tooltip-stamina:first');
			
			var stamina = $(staminaMouseover).find('dt.stat-name:first').next().text().replace(/,/g,'');
			var staminaRE = /([,0-9]+)\s\/\s([,0-9]+)/;
			var curStamina = System.intValue(staminaRE.exec(stamina)[1]);
			var maxStamina = System.intValue(staminaRE.exec(stamina)[2]);
			
			var gainPerHour = $(staminaMouseover).find('dt.stat-stamina-gainPerHour:first').next().text().replace(/,/g,'');
			var gainPerHourRE = /\+([,0-9]+)/;
			var gainPerHour = System.intValue(gainPerHourRE.exec(gainPerHour)[1]);
				
			
			var nextGain = $(staminaMouseover).find('dt.stat-stamina-nextGain:first').next().text().replace(/,/g,'');
			var nextGainRE = /([,0-9]+)m ([,0-9]+)s/;
			var nextGainMinutes = System.intValue(nextGainRE.exec(nextGain)[1]);
			var nextGainSeconds = System.intValue(nextGainRE.exec(nextGain)[2]);
			nextGainHours = nextGainMinutes/60;

			//get the max hours to still be inside stamina maximum
			var hoursToMaxStamina = Math.floor((maxStamina - curStamina)/gainPerHour);
			var millisecondsToMaxStamina = 1000*60*60*(hoursToMaxStamina + nextGainHours);
			var now = (new Date()).getTime();
			var nextHuntMilliseconds = (now + millisecondsToMaxStamina);

			var d = new Date(nextHuntMilliseconds);
			var nextHuntTimeText = d.toFormatString("HH:mm ddd dd/MMM/yyyy");
			$(staminaMouseover).append('<dt class="stat-stamina-nextHuntTime">Max Stam At</dt><dd>' + nextHuntTimeText + '</dd>');
			
			return;								
		} else {
			//Check for beta as beta is different

			if(isBeta){  //New Map Style
				var staminaImageElement = System.findNode("//img[contains(@src,'/skin/icon_stamina.gif')]/ancestor::td[2]");
				if (!staminaImageElement) {return;}

				var mouseoverText = $(staminaImageElement).data('tipped');

				var staminaRE = /Stamina:\s<\/td><td[^>]*>([,0-9]+)\s\/\s([,0-9]+)<\/td>/;
				var nextGainRE = /Next\sGain\s:\s<\/td><td[^>]*>([,0-9]+)m ([,0-9]+)s/;
				var gainPerHourRE = /Gain\sPer\sHour:\s<\/td><td[^>]*>\+([,0-9]+)<\/td>/;

				var curStamina = System.intValue(staminaRE.exec(mouseoverText)[1]);
				var maxStamina = System.intValue(staminaRE.exec(mouseoverText)[2]);
				var gainPerHour = System.intValue(gainPerHourRE.exec(mouseoverText)[1]);
				var nextGainMinutes = System.intValue(nextGainRE.exec(mouseoverText)[1]);
				var nextGainSeconds = System.intValue(nextGainRE.exec(mouseoverText)[2]);
				nextGainHours = nextGainMinutes/60;

				//get the max hours to still be inside stamina maximum
				var hoursToMaxStamina = Math.floor((maxStamina - curStamina)/gainPerHour);
				var millisecondsToMaxStamina = 1000*60*60*(hoursToMaxStamina + nextGainHours);
				var now = (new Date()).getTime();
				var nextHuntMilliseconds = (now + millisecondsToMaxStamina);

				var d = new Date(nextHuntMilliseconds);
				var nextHuntTimeText = d.toFormatString("HH:mm ddd dd/MMM/yyyy");
				var newPart = "<tr><td><font color=#999999>Max Stam At: </td><td width=90%><nobr>" +
					nextHuntTimeText + "</nobr></font></td></tr><tr>";
				var newMouseoverText = mouseoverText.replace("</table>", newPart + "</table>");
				//newMouseoverText = newMouseoverText.replace(/\s:/,":"); //this breaks the fallen sword addon, so removing this line.
				staminaImageElement.setAttribute("data-tipped", newMouseoverText);
				return;
			}

			//Old Map Style
			//var staminaImageElement = System.findNode("//img[contains(@src,'/skin/icon_stamina.gif')]/ancestor::td[2]");
			var staminaImageElement = $('td[id="topBar-Stamina"]');
			if (staminaImageElement.length < 1) {return;}

			var mouseoverText = $(staminaImageElement).data('tipped');
			var staminaRE = /Stamina:\s<\/td><td[^>]*>([,0-9]+)\s\/\s([,0-9]+)<\/td>/;
			var curStamina = System.intValue(staminaRE.exec(mouseoverText)[1]);
			var maxStamina = System.intValue(staminaRE.exec(mouseoverText)[2]);
			var gainPerHourRE = /Gain\sPer\sHour:\s<\/td><td[^>]*>\+([,0-9]+)<\/td>/;
			var gainPerHour = System.intValue(gainPerHourRE.exec(mouseoverText)[1]);

			var nextGainRE = /Next\sGain\s:\s<\/td><td[^>]*>([,0-9]+)m ([,0-9]+)s/;
			var nextGainMinutes = System.intValue(nextGainRE.exec(mouseoverText)[1]);
			var nextGainSeconds = System.intValue(nextGainRE.exec(mouseoverText)[2]);
			nextGainHours = nextGainMinutes/60;
			//get the max hours to still be inside stamina maximum
			var hoursToMaxStamina = Math.floor((maxStamina - curStamina)/gainPerHour);
			var millisecondsToMaxStamina = 1000*60*60*(hoursToMaxStamina + nextGainHours);
			var now = (new Date()).getTime();
			var nextHuntMilliseconds = (now + millisecondsToMaxStamina);

			var d = new Date(nextHuntMilliseconds);
			var nextHuntTimeText = d.toFormatString("HH:mm ddd dd/MMM/yyyy");
			var newPart = "<tr><td><font color=#999999>Max Stam At: </td><td width=90%><nobr>" +
				nextHuntTimeText + "</nobr></font></td></tr><tr>";
			var newMouseoverText = mouseoverText.replace("</table>", newPart + "</table>");
			//newMouseoverText = newMouseoverText.replace(/\s:/,":"); //this breaks the fallen sword addon, so removing this line.
			$(staminaImageElement).attr("data-tipped", newMouseoverText);
		}
	},

	injectLevelupCalculator: function() {
		//check for beta as beta has class= additions in the mouse over
		if(isNewUI==1){ //New Map Style
			
			var remainingXP =  parseInt($('dt[class="stat-xp-remaining"]').next('dd').html().replace(/,/g,""));
			var nextGainTime =  $('dt[class="stat-xp-nextGain"]').next('dd').html();
			var gain =  parseInt($('dt[class="stat-xp-gainPerHour"]').next('dd').html().replace(/,/g,""));

			var nextGainRE = /([0-9]*)m\s*([0-9]*)s/i;
			var nextGain = nextGainRE.exec(nextGainTime);
			var nextGainMin = parseInt(nextGain[1],10);
			var nextGainSec = parseInt(nextGain[2],10);
			var hoursToNextLevel = Math.ceil(remainingXP/gain);
			var millisecsToNextGain = (hoursToNextLevel*60*60+nextGainMin*60+nextGainSec)*1000;
			var nextGainTime  = new Date((new Date()).getTime() + millisecsToNextGain);
			$('dl[id="statbar-level-tooltip-general"]').append('<dt class="stat-xp-nextLevel">Next Level At</dt><dd>'+nextGainTime.toFormatString("HH:mm ddd dd/MMM/yyyy")+'</dd>');
			return;
		}
		
		//Old Map Style
		var levelupImageElement = $('td[id="topBar-XP"]');
		if (levelupImageElement.length < 1) {return;}
//		var levelupImageElement = System.findNode("//img[contains(@src,'/skin/icon_xp.gif')]/ancestor::td[2]");
//		if (!levelupImageElement) {return;}
		var mouseoverText = $(levelupImageElement).data('tipped');
		var remainingXPRE = /Remaining:\s<\/td><td[^>]*>([0-9,]+)/i;
		var gainRE = /Gain\sPer\sHour:\s<\/td><td[^>]*>\+([0-9,]+)/i;
		var nextGainRE = /Next\sGain\s*:\s*<\/td><td[^>]*>([0-9]*)m\s*([0-9]*)s/i;
		var remainingXP = parseInt(remainingXPRE.exec(mouseoverText)[1].replace(/,/g,""),10);
		var gain = parseInt(gainRE.exec(mouseoverText)[1].replace(/,/g,""),10);
		var nextGainMin = parseInt(nextGainRE.exec(mouseoverText)[1],10);
		var nextGainSec = parseInt(nextGainRE.exec(mouseoverText)[1],10);
		var hoursToNextLevel = Math.ceil(remainingXP/gain);
		var millisecsToNextGain = (hoursToNextLevel*60*60+nextGainMin*60+nextGainSec)*1000;

		var nextGainTime  = new Date((new Date()).getTime() + millisecsToNextGain);
		var mouseoverTextAddition = "<tr><td><font color=#999999>Next Level At: </td><td width=90%><nobr>" +
			nextGainTime.toFormatString("HH:mm ddd dd/MMM/yyyy") + "</nobr></font></td></tr><tr>";
		newMouseoverText = mouseoverText.replace("</table>", mouseoverTextAddition + "</table>");
		$(levelupImageElement).attr("data-tipped", newMouseoverText);
		return;
	},

	injectShop: function() {
		var injectHere=$('#shop-info');
		var itemNodes=$('td center a img[src*="/items/"]');

		var selector="<span style='font-size:xx-small'>Select an item to quick-buy:<br>Select how many to quick-buy <input style='font-size:xx-small' value=1 id='buy_amount' name='buy_amount' size=3 class='custominput'><table cellpadding=2><tr>";
		var itemId;
		for (var i=0;i<itemNodes.length;i++) {
			var item=itemNodes[i];
			var src=item.getAttribute("src");
			var text=item.parentNode.parentNode.textContent;
			var onmouseover=$(item).data("tipped").replace("Click to Buy","Click to Select");
			itemId=item.parentNode.getAttribute("href").match(/&item_id=(\d+)&/)[1];
			selector+="<td width=20 height=20 ><img width=20 height=20 id=select"+itemId+" itemId="+itemId+" src='"+src+
				"' class='tipped' data-tipped-options='skin: \"fsItem\", ajax: true' data-tipped=\""+onmouseover+"\">"+text+"</td>";
			if (i%25==24 && i!=itemNodes.length-1) {selector+="</tr><tr>";}
		}
		selector+="</table><table width='600px'></tr><tr><td align='right' width='50%'>Selected item:</td><td height=45 width='50%' id=selectedItem align='left'>&nbsp;</td></tr>"+
			"<tr><td id=warningMsg colspan='2' align='center'></td></tr><tr><td id=buy_result colspan='2' align='center'></td></tr>";
		injectHere.after("<table><tr><td>"+selector+"</td></tr></table>");
		for (i=0;i<itemNodes.length;i++) {
			itemId=itemNodes[i].parentNode.getAttribute("href").match(/&item_id=(\d+)&/)[1];
			document.getElementById("select"+itemId).addEventListener("click",Helper.selectShopItem,true);
		}
		Helper.shopId=itemNodes[0].parentNode.getAttribute("href").match(/&shop_id=(\d+)/)[1];
	},

	selectShopItem: function(evt) {
		Helper.shopItemId=evt.target.getAttribute("itemId");
		document.getElementById('warningMsg').innerHTML='<span style="color:red;font-size:small">Warning:<br> pressing "t" now will buy the '+document.getElementById('buy_amount').value+' item(s) WITHOUT confirmation!</span>';
		document.getElementById('selectedItem').innerHTML=
			document.getElementById("select"+Helper.shopItemId).parentNode.innerHTML.replace(/="20"/g,'=45');
	},

	quickBuyItem: function() {
		if($('img[alt="Potion Bazaar"]').length > 0){//bazaar
			if(!Helper.bazaarItemId){return;}
			document.getElementById('buy_result').innerHTML="Buying "+document.getElementById('buy_amount').value+" Items";
			for (var i=0;i<document.getElementById('buy_amount').value;i++) {
				//http://www.fallensword.com/index.php?cmd=potionbazaar&subcmd=buyitem&item_id=3683
				System.xmlhttp("index.php?cmd=potionbazaar&subcmd=buyitem&item_id="+Helper.bazaarItemId,
					Helper.quickDone);
			}
		}

		if (!Helper.shopId || !Helper.shopItemId) {return;}
		document.getElementById('buy_result').innerHTML="Buying "+document.getElementById('buy_amount').value+" Items";
		for (var i=0;i<document.getElementById('buy_amount').value;i++) {
			System.xmlhttp("index.php?cmd=shop&subcmd=buyitem&item_id="+Helper.shopItemId+"&shop_id="+Helper.shopId,
				Helper.quickDone);

		}
	},

	quickDone: function(responseText) {
		var infoMessage = Layout.infoBox(responseText);
		document.getElementById('buy_result').innerHTML+="<br />"+infoMessage;
	},
/*******************************************************************************************************************/
injectBazaar: function() {
		var injectHere=$('img[alt="Potion Bazaar"]').parents("center:first");
		var itemNodes=$('td center a img[src*="/items/"]');

		var selector="<span style='font-size:xx-small'>Select an item to quick-buy:<br>Select how many to quick-buy <input style='font-size:xx-small' value=1 id='buy_amount' name='buy_amount' size=1 class='custominput'><table cellpadding=2><tr>";
		var itemId;
		for (var i=0;i<itemNodes.length;i++) {
			var item=itemNodes[i];
			var src=item.getAttribute("src");
			var text=item.parentNode.parentNode.textContent;
			var onmouseover=$(item).data("tipped").replace("Click to Buy","Click to Select");
			itemId=item.parentNode.getAttribute("href").match(/&item_id=(\d+)/)[1];
			selector+="<td width=20 height=20 ><img width=20 height=20 id=select"+itemId+" itemId="+itemId+" src='"+src+
				"' class='tipped' data-tipped-options='skin: \"fsItem\", ajax: true' data-tipped=\""+onmouseover+"\">"+text+"</td>";
			if (i%6==5 && i!=itemNodes.length-1) {selector+="</tr><tr>";}
		}
		selector+="</tr><tr><td colspan=3>Selected item:</td><td colspan=3 align=center>"+
			"<table><tr><td width=45 height=45 id=selectedItem align=center></td></tr></table>"+
			"<td></tr><tr><td id=warningMsg colspan=6 align=center></td></tr><tr><td id=buy_result colspan=6 align=center></td></tr></table>";
		injectHere.html("<table><tr><td>"+injectHere.html()+"</td><td>"+selector+"</td></tr></table>");
		for (i=0;i<itemNodes.length;i++) {
			itemId=itemNodes[i].parentNode.getAttribute("href").match(/&item_id=(\d+)$/)[1];
			document.getElementById("select"+itemId).addEventListener("click",Helper.selectBazaarItem,true);
		}
	},

	selectBazaarItem: function(evt) {
		Helper.bazaarItemId=evt.target.getAttribute("itemId");
		document.getElementById('warningMsg').innerHTML='<span style="color:red;font-size:small">Warning:<br> pressing "t" now will buy the '+document.getElementById('buy_amount').value+' item(s) WITHOUT confirmation!</span>';
		document.getElementById('selectedItem').innerHTML=
			document.getElementById("select"+Helper.bazaarItemId).parentNode.innerHTML.replace(/="20"/g,'=45');
	},
/************************************************************************************************************************************************/
	injectRelic: function(isRelicPage) {
		var relicNameElement = $('td:contains("Below is the current status for the relic"):last');
		relicNameElement.css('font-size', 'x-small');

		var injectHere = $('td:contains("Defended"):last');
		if (injectHere.length > 0) {
			var defendingGuildMiniSRC = $('img[src*="_mini.jpg"]').attr('src');
			var defendingGuildID = /guilds\/(\d+)_mini.jpg/.exec(defendingGuildMiniSRC)[1];
			var myGuildID = GM_getValue("guildID");
			if (defendingGuildID == myGuildID) {
				var listOfDefenders = injectHere.next().text().split(","); // quick buff only supports 16
				//actually I think it might be text length on the address bar or something like that.
				var shortList = new Array();
				if (listOfDefenders) {
					var modifierWord;
					for (var i = 0; i < listOfDefenders.length; i++) {
						shortList.push(listOfDefenders[i]);
						if (((i + 1) % 16 === 0 && i !== 0) || (i == listOfDefenders.length - 1)) {
							modifierWord = Helper.getGroupBuffModifierWord(i);
							var htmlToAppend = "<br><nobr><a href='#' id='buffAll" + modifierWord + "'><span style='color:blue; font-size:x-small;' title='Quick buff functionality from HCS only does 16'>"+
							"Buff " + modifierWord + " 16</span></a></nobr>";
							injectHere.append(htmlToAppend);
							var buffAllLink = $('#buffAll'+modifierWord);
							buffAllLink.attr("href","javascript:openWindow('index.php?cmd=quickbuff&t=" + shortList + "', 'fsQuickBuff', 618, 1000, ',scrollbars')");
							shortList = new Array();
						}

					}

				}

			}
			injectHere.html(injectHere.html() + '<input id="calculatedefenderstats" type="button" value="Fetch Stats" title="Calculate the stats of the players defending the relic." ' +
				'class="custombutton">');
			document.getElementById('calculatedefenderstats').addEventListener('click', Helper.calculateRelicDefenderStats, true);
		}
		var empowerButton = $('input[value*="Attempt Empower"]');
		if (empowerButton.length > 0) {
			//window.location='index.php?cmd=relic&subcmd=empower&relic_id=12'
			var relicID = /relic_id=(\d+)/.exec(empowerButton.attr("onclick"))[1];
			var insertEmpowerRelicTenTimesSpan = $('<span></span>').attr({
					'style': 'cursor:pointer;text-decoration:underline;color:blue;font-size:x-small',
					'relicID': relicID
				}).appendTo(empowerButton.parent());
			insertEmpowerRelicTenTimesSpan.text("Empower to level: ")
				.click(Helper.empowerRelic);

			var targetEmpowerLevelInput = $('<input></input>');
			targetEmpowerLevelInput.val(10)
				.attr("size",1)
				.attr("name",'targetEmpowerLevel')
				.appendTo(empowerButton.parent());
		}
	},

	empowerRelic: function(evt) {
		var relicID = evt.target.getAttribute("relicID");
		var targetEmpowerLevel = $('input[name="targetEmpowerLevel"]').val();
		var currentLevel = parseInt($('td:contains("Empower"):contains("Level"):last').next('td').text(),10);
		if (targetEmpowerLevel <= currentLevel) return;
		evt.target.innerHTML = "Processing ... ";
		evt.target.removeEventListener('click', Helper.empowerRelic, true);
		evt.target.style.cursor = "default";
		evt.target.style.textDecoration = "none";
		Helper.empowerRelicMaxTries = 20;
		Helper.empowerRelicCurrentTries = 1;
		//index.php?cmd=relic&subcmd=empower&relic_id=12
		System.xmlhttp('index.php?cmd=relic&subcmd=empower&relic_id=' + relicID, Helper.empowerRelicToTarget, {"target":evt.target,"relicID":relicID,"targetEmpowerLevel":targetEmpowerLevel});
	},

	empowerRelicToTarget: function(responseText, callback) {
		//http://www.fallensword.com/index.php?cmd=relic&relic_id=87
		//<center>You failed to increase the empower level of the relic! The empower level has been reset back to zero.</center>
		//<center>You successfully increased the empower level of the relic!</center>
		target = callback.target;
		relicID = callback.relicID;
		targetEmpowerLevel = callback.targetEmpowerLevel;
		var info = Layout.infoBox(responseText);
		var doc = System.createDocument(responseText);
		var currentLevel = parseInt($(doc).find('td:contains("Empower"):contains("Level:"):last').next().text(),10);
		target.innerHTML += currentLevel + " -> ";
		var empowerRelicCurrentTries = Helper.empowerRelicCurrentTries
		var empowerRelicMaxTries = Helper.empowerRelicMaxTries
		if (currentLevel < targetEmpowerLevel && empowerRelicCurrentTries < empowerRelicMaxTries) {
			empowerRelicCurrentTries ++;
			System.xmlhttp('index.php?cmd=relic&subcmd=empower&relic_id=' + relicID, Helper.empowerRelicToTarget, {"target":target,"relicID":relicID,"targetEmpowerLevel":targetEmpowerLevel});
		} else {
			//http://www.fallensword.com/index.php?cmd=relic&relic_id=87
			window.location = "index.php?cmd=relic&relic_id=" + relicID
		}
	},

	calculateRelicDefenderStats: function(evt) {
		//hide the calc button
		$("input[id='calculatedefenderstats']").css("visibility","hidden");
		//make the text smaller
		$('td:contains("Below is the current status for the relic"):last').css("fontSize","x-small");
		//set the colspan of all other rows to 3
		$("table[width='600']>tbody>tr:not(:eq(9))>td").attr("colspan",3);

		var tableWithBorderElement = $("table[cellpadding='5']");
		tableWithBorderElement
			.attr("align","left")
			.attr("colSpan",2);
		var tableInsertPoint = tableWithBorderElement.parents('tr:first');
		tableInsertPoint.append("<td colspan='1'><table width='200' style='border:1px solid #A07720;'>" +
			"<tbody><tr><td id='InsertSpot'></td></tr></tbody></table></td>");
		var extraTextInsertPoint = System.findNode("//td[@id='InsertSpot']");
		var defendingGuildHref = $('a[href*="index.php?cmd=guild&subcmd=view&guild_id="]:first').attr("href");
		Helper.getRelicGuildData(extraTextInsertPoint,defendingGuildHref);

		var defendingGuildMiniSRC = $('img[src*="_mini.jpg"]').attr("src");
		var defendingGuildID = /guilds\/(\d+)_mini.jpg/.exec(defendingGuildMiniSRC)[1];
		var myGuildID = GM_getValue("guildID");

		var hideRelicOffline = GM_getValue("hideRelicOffline");
		if (defendingGuildID == myGuildID && !hideRelicOffline) {
			var validMemberString = "";
			var memberList = System.getValueJSON("memberlist");
			if (memberList) {
				for (i=0;i<memberList.members.length;i++) {
					var member=memberList.members[i];
					if (member.status == "Offline" &&
						(member.level < 400 || (member.level > 421 && member.level < 441 ) || member.level > 450)) {
						validMemberString += member.name + " ";
					}
				}
			}
		}

		var listOfDefenders = System.findNodes("//b/a[contains(@href,'index.php?cmd=profile&player_id=')]");
		var defenderCount = 0;
		var testList = "";
		for (i=0; i<listOfDefenders.length; i++) {
			var hrefpointer = listOfDefenders[i].getAttribute("href");
//if (i<3) { //I put this in to limit the number of calls this function makes.
					//I don't want to hammer the server too much.
				Helper.getRelicPlayerData(defenderCount,extraTextInsertPoint,hrefpointer);
//}
			testList += listOfDefenders[i].innerHTML + " ";
			if (defendingGuildID == myGuildID && !hideRelicOffline) validMemberString = validMemberString.replace(listOfDefenders[i].innerHTML + " ","");
			defenderCount++;
		}
		Helper.relicDefenderCount = defenderCount;
		//extraTextInsertPoint.innerHTML += "<tr><td style='font-size:x-small;'>" + testList + "<td><tr>";
		var textToInsert = "<tr><td><table style='font-size:small;'>" +
			"<tr><td colspan='2' style='border-top:2px black solid;'>Defending Guild Stats</td></tr>" +
			"<tr><td style='font-size:x-small; color:brown;' align='right'>Number of Defenders:</td><td style='font-size:x-small;' align='right'>" + Helper.relicDefenderCount + "</td></tr>" +
			"<tr><td style='font-size:x-small; color:brown;' align='right'>Relic Count:</td><td style='font-size:x-small;' align='right' title='relicCount'>0</td></tr>" +
			"<tr><td style='font-size:x-small; color:brown;' align='right'>Lead Defender Bonus:</td><td style='font-size:x-small;' align='right' title='LDPercentage'>0</td></tr>" +
			"<tr style='display:none; visibility:hidden;'><td>Relic Count Processed:</td><td title='relicProcessed'>0</td></tr>" +
			"<tr style='display:none; visibility:hidden;'><td colspan='2' style='border-top:2px black solid;'>Lead Defender Full Stats</td></tr>" +
			"<tr style='display:none; visibility:hidden;'><td align='right'>Attack:</td><td align='right' title='LDattackValue'>0</td></tr>" +
			"<tr style='display:none; visibility:hidden;'><td align='right'>Defense:</td><td align='right' title='LDdefenseValue'>0</td></tr>" +
			"<tr style='display:none; visibility:hidden;'><td align='right'>Armor:</td><td align='right' title='LDarmorValue'>0</td></tr>" +
			"<tr style='display:none; visibility:hidden;'><td align='right'>Damage:</td><td align='right' title='LDdamageValue'>0</td></tr>" +
			"<tr style='display:none; visibility:hidden;'><td align='right'>HP:</td><td align='right' title='LDhpValue'>0</td></tr>" +
			"<tr style='display:none; visibility:hidden;'><td align='right'>LDProcessed:</td><td align='right' title='LDProcessed'>0</td></tr>" +
			"<tr style='display:none; visibility:hidden;'><td align='right'>LDFlinchLevel:</td><td align='right' title='LDFlinchLevel'>0</td></tr>" +
			"<tr style='display:none; visibility:hidden;'><td align='right'>LDConstitutionLevel:</td><td align='right' title='LDConstitutionLevel'>0</td></tr>" +
			"<tr style='display:none; visibility:hidden;'><td align='right'>LDNightmareVisageLevel:</td><td align='right' title='LDNightmareVisageLevel'>0</td></tr>" +
			"<tr style='display:none; visibility:hidden;'><td align='right'>LDFortitudeLevel:</td><td align='right' title='LDFortitudeLevel'>0</td></tr>" +
			"<tr style='display:none; visibility:hidden;'><td align='right'>LDChiStrikeLevel:</td><td align='right' title='LDChiStrikeLevel'>0</td></tr>" +
			"<tr style='display:none; visibility:hidden;'><td align='right'>LDTerrorizeLevel:</td><td align='right' title='LDTerrorizeLevel'>0</td></tr>" +
			"<tr style='display:none; visibility:hidden;'><td align='right'>LDSanctuaryLevel:</td><td align='right' title='LDSanctuaryLevel'>0</td></tr>" +
			"<tr><td colspan='2' style='border-top:2px black solid;'>Other Defender Stats</td></tr>" +
			"<tr><td style='font-size:x-small; color:brown;' align='right'>Raw Attack:</td><td style='font-size:x-small; color:gray;' align='right' title='attackValue'>0</td></tr>" +
			"<tr><td style='font-size:x-small; color:brown;' align='right'>Attack w/ buffs:</td><td style='font-size:x-small;' align='right' title='attackValueBuffed'>0</td></tr>" +
			"<tr><td style='font-size:x-small; color:brown;' align='right'>Raw Defense:</td><td style='font-size:x-small; color:gray;' align='right' title='defenseValue'>0</td></tr>" +
			"<tr><td style='font-size:x-small; color:brown;' align='right'>Defense w/buffs:</td><td style='font-size:x-small;' align='right' title='defenseValueBuffed'>0</td></tr>" +
			"<tr><td style='font-size:x-small; color:brown;' align='right'>Raw Armor:</td><td style='font-size:x-small;' align='right' title='armorValue'>0</td></tr>" +
			"<tr><td style='font-size:x-small; color:brown;' align='right'>Armor w/ buffs:</td><td style='font-size:x-small;' align='right' title='armorValueBuffed'>0</td></tr>" +
			"<tr><td style='font-size:x-small; color:brown;' align='right'>Raw Damage:</td><td style='font-size:x-small; color:gray;' align='right' title='damageValue'>0</td></tr>" +
			"<tr><td style='font-size:x-small; color:brown;' align='right'>Damage w/ buffs:</td><td style='font-size:x-small;' align='right' title='damageValueBuffed'>0</td></tr>" +
			"<tr><td style='font-size:x-small; color:brown;' align='right'>Raw HP:</td><td style='font-size:x-small; color:gray;' align='right' title='hpValue'>0</td></tr>" +
			"<tr><td style='font-size:x-small; color:brown;' align='right'>HP w/ buffs:</td><td style='font-size:x-small;' align='right' title='hpValueBuffed'>0</td></tr>" +
			"<tr><td style='font-size:x-small; color:brown;' align='right'>Processed:</td><td style='font-size:x-small;' align='right' title='defendersProcessed'>0</td></tr>" +
			"<tr><td style='border-top:2px black solid;' colspan=2>Adjusted defense values:</td></tr>" +
			"<tr><td style='font-size:x-small; color:brown;' align='right'>DC225:</td><td style='font-size:x-small;' align='right' title='DC225'>0</td></tr>" +
			"<tr><td style='font-size:x-small; color:brown;' align='right'>DC175:</td><td style='font-size:x-small;' align='right' title='DC175'>0</td></tr>" +
			"<tr><td style='border-top:2px black solid;' colspan=2>Attacking Group Stats:</td></tr>" +
			"<tr><td style='font-size:x-small; color:brown;' align='right'>Raw Group Attack:</td><td style='font-size:x-small; color:gray;' align='right' title='GroupAttack'></td></tr>" +
			"<tr><td style='font-size:x-small; color:brown;' align='right'>Group Attack w/ buffs:</td><td style='font-size:x-small;' align='right' title='GroupAttackBuffed'></td></tr>" +
			"<tr><td style='font-size:x-small; color:brown;' align='right'>Raw Group Defense:</td><td style='font-size:x-small; color:gray;' align='right' title='GroupDefense'></td></tr>" +
			"<tr><td style='font-size:x-small; color:brown;' align='right'>Group Defense w/ buffs:</td><td style='font-size:x-small;' align='right' title='GroupDefenseBuffed'></td></tr>" +
			"<tr><td style='font-size:x-small; color:brown;' align='right'>Raw Group Armor:</td><td style='font-size:x-small;' align='right' title='GroupArmor'></td></tr>" +
			"<tr><td style='font-size:x-small; color:brown;' align='right'>Group Armor w/ buffs:</td><td style='font-size:x-small;' align='right' title='GroupArmorBuffed'></td></tr>" +
			"<tr><td style='font-size:x-small; color:brown;' align='right'>Raw Group Damage:</td><td style='font-size:x-small; color:gray;' align='right' title='GroupDamage'></td></tr>" +
			"<tr><td style='font-size:x-small; color:brown;' align='right'>Group Damage w/ buffs:</td><td style='font-size:x-small;' align='right' title='GroupDamageBuffed'></td></tr>" +
			"<tr><td style='font-size:x-small; color:brown;' align='right'>Raw Group HP:</td><td style='font-size:x-small; color:gray;' align='right' title='GroupHP'></td></tr>" +
			"<tr><td style='font-size:x-small; color:brown;' align='right'>Group HP w/ buffs:</td><td style='font-size:x-small;' align='right' title='GroupHPBuffed'></td></tr>" +
			"<tr><td style='border-top:2px black solid;' colspan=2>Processing:</td></tr>" +
			"<tr><td style='font-size:x-small; color:green;' colspan='2' title='ProcessingStatus'>Parsing defending guild stats ...</td></tr>" +
			"<tr><td style='border-top:2px black solid;' colspan=2>Assumptions:</td></tr>" +
			"<tr><td colspan='2' style='font-size:x-small; color:gray;'>Above calculations include Constitution, Fortitude, Nightmare Visage, Chi Strike, Terrorize and Flinch bonus calculations" +
				" (in that order) on both the defending group and attacking group.</td></tr>";
		if (defendingGuildID == myGuildID && !hideRelicOffline) {
			var validMemberArray = validMemberString.split(" ");
			memberList = System.getValueJSON("memberlist");
			for (i=0;i<validMemberArray.length-1;i++) {
				var guildMemberName = validMemberArray[i];
				for (var j=0; j<memberList.members.length; j++) {
					if (memberList.members[j].name == guildMemberName) {
						var memberId = memberList.members[j].id;
						break;
					}
				}
				href = System.server + "?cmd=profile&player_id=" + memberId;
				System.xmlhttp(href, Helper.checkPlayerActivity, {"playerName":guildMemberName,"playerId":memberId});
			}
			textToInsert += "<tr><td style='border-top:2px black solid;' colspan=2>Offline guild members not at relic:</td></tr>" +
				"<tr title='offlinePlayerListControl'><td colspan=2 style='font-size:x-small; color:red;' title='offlinePlayerList'>" + validMemberString + "</td></tr>" +
				"<tr style='display:none; visibility:hidden;'><td align='right' style='color:brown;'>OfflinePlayerCount:</td><td align='right' title='offlinePlayerCount'>" + validMemberArray.length + "</td></tr>" +
				"<tr style='display:none; visibility:hidden;'><td align='right' style='color:brown;'>OfflinePlayersProcessed:</td><td align='right' title='offlinePlayersProcessed'>0</td></tr>" +
				"<tr title='offlinePlayerListControlTemp' style='display:block;'><td style='font-size:x-small; color:green;' colspan=2>Checking offline status ...</td></tr>";
		}
		textToInsert += "</table><td><tr>";
		extraTextInsertPoint.innerHTML += textToInsert;
	},

	checkPlayerActivity: function(responseText, callback) {
		var doc = System.createDocument(responseText);
		//fix offline member check
		//$(doc).find("h2:contains('Last Activity:')"); TO $(doc).find("p:contains('Last Activity:')"); 
		var lastActivity = $(doc).find("p:contains('Last Activity:')");
		var playerName = callback.playerName;
		var playerId = callback.playerId;
		var offlinePlayerList = $("td[title='offlinePlayerList']");
		var offlinePlayerCount = System.intValue($("td[title='offlinePlayerCount']").html());
		var offlinePlayersProcessed = $("td[title='offlinePlayersProcessed']");
		offlinePlayersProcessed.html(System.intValue(offlinePlayersProcessed.html()) + 1);
		if (System.intValue(offlinePlayersProcessed.html()) == (offlinePlayerCount - 1)) {
			var offlinePlayerListControlTemp = $("tr[title='offlinePlayerListControlTemp']");
			offlinePlayerListControlTemp
				.css("display","none")
				.css("visibility","hidden");
		}
		if (lastActivity.length == 0 || lastActivity.html() == 'Last Activity: Inactive Account') {
			offlinePlayerList.html(offlinePlayerList.html().replace(playerName + " ",""));
		} else if (lastActivity.html().search("days") != -1 && /(\d+) days/.exec(lastActivity.html())[1] >= 7) {
			offlinePlayerList.html(offlinePlayerList.html().replace(playerName + " ",""));
		} else {
			offlinePlayerList.html(
				offlinePlayerList.html().replace(playerName + " ", "<a style='color:red;' href='index.php?cmd=profile&player_id=" + playerId + "'><span style='color:red;'>" + playerName + "</span></a> "));
		}
	},

	getRelicGuildData: function(extraTextInsertPoint,hrefpointer) {
		System.xmlhttp(hrefpointer, Helper.parseRelicGuildData, {"extraTextInsertPoint":extraTextInsertPoint});
	},

	parseRelicGuildData: function(responseText, callback) {
		var extraTextInsertPoint = callback.extraTextInsertPoint;
		var doc=System.createDocument(responseText);
		var allItems = doc.getElementsByTagName("IMG");
		var relicCount = 0;
		for (var i=0;i<allItems.length-1;i++) {
			var anItem=allItems[i];
			var mouseoverText = $(anItem).data("tipped");
			if (mouseoverText && mouseoverText.search("Relic Bonuses") != -1){
				relicCount++;
			}
		}
		var relicCountElement = $("td[title='relicCount']");
		relicCountElement.html(relicCount);
		var relicProcessedElement = $("td[title='relicProcessed']");
		relicProcessedElement.html(1);
		//if all defenders processed and relic processed, then finalize totals
		defendersProcessed = $("td[title='defendersProcessed']");
		defendersProcessedNumber = System.intValue(defendersProcessed.html());
		if (Helper.relicDefenderCount == defendersProcessedNumber + 1) {
			Helper.processRelicStats();
		}
	},

	getRelicPlayerData: function(defenderCount,extraTextInsertPoint,hrefpointer) {
		System.xmlhttp(hrefpointer, Helper.parseRelicPlayerData, {"defenderCount": defenderCount, "extraTextInsertPoint": extraTextInsertPoint});
	},

	parseRelicPlayerData: function(responseText, callback) {
		var defenderCount = callback.defenderCount;
		var extraTextInsertPoint = callback.extraTextInsertPoint;
		var doc = System.createDocument(responseText);
		var playerAttackValue = 0, playerDefenseValue = 0, playerArmorValue = 0, playerDamageValue = 0, playerHPValue = 0;

		//~ var playerName = $(doc).find('h1').text();
		$(doc).find('div').remove(".profile-stat-bonus");
		playerAttackValue = $(doc).find('#stat-attack').text();
		playerDefenseValue = $(doc).find('#stat-defense').text();
		playerArmorValue = $(doc).find('#stat-armor').text();
		playerDamageValue = $(doc).find('#stat-damage').text();
		playerHPValue = $(doc).find('#stat-hp').text();
		//~ console.log('Player : ' + playerName + '   ' + 
					//~ 'playerAttackValue = ' + playerAttackValue + '   ' + 
					//~ 'playerDefenseValue = ' + playerDefenseValue + '   ' + 
					//~ 'playerArmorValue = ' + playerArmorValue + '   ' + 
					//~ 'playerDamageValue = ' + playerDamageValue + '   ' + 
					//~ 'playerHPValue = ' + playerHPValue
					//~ );

		//~ var allItems = doc.getElementsByTagName("B");
		//~ for (var i=0;i<allItems.length;i++) {
			//~ var anItem=allItems[i];
			//~ if (anItem.innerHTML == "Attack:&nbsp;"){
				//~ var attackText = anItem;
				//~ var attackLocation = attackText.parentNode.nextSibling.firstChild.firstChild.firstChild.firstChild;
				//~ playerAttackValue = attackLocation.textContent;
				//~ console.log('Player : ' + playerName + '   attack = ' + playerAttackValue);
				//~ var defenseText = attackText.parentNode.nextSibling.nextSibling.nextSibling.firstChild;
				//~ var defenseLocation = defenseText.parentNode.nextSibling.firstChild.firstChild.firstChild.firstChild;
				//~ playerDefenseValue = defenseLocation.textContent;
				//~ var armorText = defenseText.parentNode.parentNode.nextSibling.nextSibling.firstChild.nextSibling.firstChild;
				//~ var armorLocation = armorText.parentNode.nextSibling.firstChild.firstChild.firstChild.firstChild;
				//~ playerArmorValue = armorLocation.textContent;
				//~ var damageText = armorText.parentNode.nextSibling.nextSibling.nextSibling.firstChild;
				//~ var damageLocation = damageText.parentNode.nextSibling.firstChild.firstChild.firstChild.firstChild;
				//~ playerDamageValue = damageLocation.textContent;
				//~ var hpText = damageText.parentNode.parentNode.nextSibling.nextSibling.firstChild.nextSibling.firstChild;
				//~ var hpLocation = hpText.parentNode.nextSibling.firstChild.firstChild.firstChild.firstChild;
				//~ playerHPValue = hpLocation.textContent;
			//~ }
		//~ }

		var levelElement = $(doc).find('b:contains("Level:")').parents('td:first').next();
		var levelValue = parseInt(levelElement.text().replace(/,/,""),10);
		if (playerAttackValue && playerAttackValue.indexOf("Hidden")>0) playerAttackValue = levelValue*10;
		if (playerDefenseValue && playerDefenseValue.indexOf("Hidden")>0) playerDefenseValue = levelValue*10;
		if (playerArmorValue && playerArmorValue.indexOf("Hidden")>0) playerArmorValue = levelValue*10;
		if (playerDamageValue && playerDamageValue.indexOf("Hidden")>0) playerDamageValue = levelValue*10;
		if (playerHPValue && playerHPValue.indexOf("Hidden")>0) playerHPValue = Math.ceil(levelValue*0.4);

		if (defenderCount !== 0) {
			var defenderMultiplier = 0.2;
			var attackValue = $("td[title='attackValue']");
			attackNumber = System.intValue(attackValue.html());
			attackValue.html(System.addCommas(attackNumber + Math.round(playerAttackValue*defenderMultiplier)));
			var defenseValue = $("td[title='defenseValue']");
			defenseNumber = System.intValue(defenseValue.html());
			var overallDefense = defenseNumber + Math.round(playerDefenseValue*defenderMultiplier);
			defenseValue.html(System.addCommas(overallDefense));
			var armorValue = $("td[title='armorValue']");
			armorNumber = System.intValue(armorValue.html());
			armorValue.html(System.addCommas(armorNumber + Math.round(playerArmorValue*defenderMultiplier)));
			var damageValue = $("td[title='damageValue']");
			damageNumber = System.intValue(damageValue.html());
			damageValue.html(System.addCommas(damageNumber + Math.round(playerDamageValue*defenderMultiplier)));
			var hpValue = $("td[title='hpValue']");
			hpNumber = System.intValue(hpValue.html());
			hpValue.html(System.addCommas(hpNumber + Math.round(playerHPValue*defenderMultiplier)));
			var defendersProcessed = $("td[title='defendersProcessed']");
			var defendersProcessedNumber = System.intValue(defendersProcessed.html());
			defendersProcessed.html(System.addCommas(defendersProcessedNumber + 1));
		}
		else {
			//get lead defender (LD) buffs here for use later ... 
			allItems = doc.getElementsByTagName("IMG");
			var constitutionLevel = 0, flinchLevel = 0, nightmareVisageLevel = 0, fortitudeLevel = 0;
			var chiStrikeLevel = 0, terrorizeLevel = 0, sanctuaryLevel = 0;
			for (i=0;i<allItems.length;i++) {
				anItem=allItems[i];
				if (anItem.getAttribute("src").search("/skills/") != -1) {
					var onmouseover = $(anItem).data("tipped");
					var constitutionRE = /<b>Constitution<\/b> \(Level: (\d+)\)/;
					var constitution =  constitutionRE.exec(onmouseover);
					if (constitution) {
						constitutionLevel = constitution[1];
						continue;
					}
					var flinchRE = /<b>Flinch<\/b> \(Level: (\d+)\)/;
					var flinch = flinchRE.exec(onmouseover);
					if (flinch) {
						flinchLevel = flinch[1];
						continue;
					}
					var nightmareVisageRE = /<b>Nightmare Visage<\/b> \(Level: (\d+)\)/;
					var nightmareVisage = nightmareVisageRE.exec(onmouseover);
					if (nightmareVisage) {
						nightmareVisageLevel = nightmareVisage[1];
						continue;
					}
					var fortitudeRE = /<b>Fortitude<\/b> \(Level: (\d+)\)/;
					var fortitude = fortitudeRE.exec(onmouseover);
					if (fortitude) {
						fortitudeLevel = fortitude[1];
						continue;
					}
					var chiStrikeRE = /<b>Chi Strike<\/b> \(Level: (\d+)\)/;
					var chiStrike = chiStrikeRE.exec(onmouseover);
					if (chiStrike) {
						chiStrikeLevel = chiStrike[1];
						continue;
					}
					var terrorizeRE = /<b>Terrorize<\/b> \(Level: (\d+)\)/;
					var terrorize = terrorizeRE.exec(onmouseover);
					if (terrorize) {
						terrorizeLevel = terrorize[1];
						continue;
					}
					var sanctuaryRE = /<b>Sanctuary<\/b> \(Level: (\d+)\)/;
					var sanctuary = sanctuaryRE.exec(onmouseover);
					if (sanctuary) {
						sanctuaryLevel = sanctuary[1];
						continue;
					}
				}
			}

			defenderMultiplier = 1;
			attackValue = $("td[title='LDattackValue']");
			attackNumber = System.intValue(attackValue.html());
			var playerAttackValue2 = playerAttackValue;
			var playerDefenseValue2 = playerDefenseValue;
			attackValue.html(System.addCommas(attackNumber + Math.round(playerAttackValue*defenderMultiplier)));
			defenseValue = $("td[title='LDdefenseValue']");
			defenseNumber = System.intValue(defenseValue.html());
			defenseValue.html(System.addCommas(defenseNumber + Math.round(playerDefenseValue*defenderMultiplier)));
			armorValue = $("td[title='LDarmorValue']");
			armorNumber=System.intValue(armorValue.html());
			armorValue.html(System.addCommas(armorNumber + Math.round(playerArmorValue*defenderMultiplier)));
			damageValue = $("td[title='LDdamageValue']");
			damageNumber=System.intValue(damageValue.html());
			damageValue.html(System.addCommas(damageNumber + Math.round(playerDamageValue*defenderMultiplier)));
			hpValue = $("td[title='LDhpValue']");
			hpNumber=System.intValue(hpValue.html());
			hpValue.html(System.addCommas(hpNumber + Math.round(playerHPValue*defenderMultiplier)));
			defendersProcessed = $("td[title='defendersProcessed']");
			defendersProcessedNumber = System.intValue(defendersProcessed.html());
			defendersProcessed.html(System.addCommas(defendersProcessedNumber + 1));
			LDProcessed = $("td[title='LDProcessed']");
			LDProcessedNumber=System.intValue(LDProcessed.html());
			LDProcessed.html(1);
			storedConstitutionLevel = $("td[title='LDConstitutionLevel']");
			storedConstitutionLevel.html(System.intValue(constitutionLevel));
			storedFlinchLevel = $("td[title='LDFlinchLevel']");
			storedFlinchLevel.html(System.intValue(flinchLevel));
			storedNightmareVisageLevel = $("td[title='LDNightmareVisageLevel']");
			storedNightmareVisageLevel.html(System.intValue(nightmareVisageLevel));
			storedFortitudeLevel = $("td[title='LDFortitudeLevel']");
			storedFortitudeLevel.html(System.intValue(fortitudeLevel));
			storedChiStrikeLevel = $("td[title='LDChiStrikeLevel']");
			storedChiStrikeLevel.html(System.intValue(chiStrikeLevel));
			storedTerrorizeLevel = $("td[title='LDTerrorizeLevel']");
			storedTerrorizeLevel.html(System.intValue(terrorizeLevel));
			storedSanctuaryLevel = $("td[title='LDSanctuaryLevel']");
			storedSanctuaryLevel.html(System.intValue(sanctuaryLevel));
		}
		var relicProcessedValue = $("td[title='relicProcessed']");
		if (Helper.relicDefenderCount == defendersProcessedNumber + 1 && relicProcessedValue.html() == "1") {
			Helper.processRelicStats();
		}
	},

	processRelicStats: function() {
		var processingStatus = $('td[title="ProcessingStatus"]');
		processingStatus.html('Processing defending guild stats ... ');
		var relicCountValue = $("td[title='relicCount']");
		var relicCount = System.intValue(relicCountValue.html());
		var relicMultiplier = 1;
		if (relicCount == 1) {
			relicMultiplier = 1.5;
		}
		else if (relicCount >= 2) {
			relicMultiplier = Math.round((1 - (relicCount/10))*100)/100;
		}

		var LDConstitutionLevel = System.intValue($("td[title='LDConstitutionLevel']").text());
		var LDNightmareVisageLevel = System.intValue($("td[title='LDNightmareVisageLevel']").text());
		var LDFortitudeLevel = System.intValue($("td[title='LDFortitudeLevel']").text());
		var LDChiStrikeLevel = System.intValue($("td[title='LDChiStrikeLevel']").text());
		var LDSanctuaryLevel = System.intValue($("td[title='LDSanctuaryLevel']").text());
		var attackValue = $("td[title='attackValue']");
		var attackValueBuffed = $("td[title='attackValueBuffed']");
		var LDattackValue = $("td[title='LDattackValue']");
		attackNumber = System.intValue(attackValue.html());
		LDattackNumber = System.intValue(LDattackValue.html());
		overallAttack = attackNumber + Math.round(LDattackNumber*relicMultiplier);
		attackValue.html(System.addCommas(overallAttack));
		var nightmareVisageEffect = Math.ceil(overallAttack*(LDNightmareVisageLevel * 0.0025));
		attackValueBuffed.html(System.addCommas(overallAttack - nightmareVisageEffect));
		var defenseValue = $("td[title='defenseValue']");
		var defenseValueBuffed = $("td[title='defenseValueBuffed']");
		var LDdefenseValue = $("td[title='LDdefenseValue']");
		defenseNumber = System.intValue(defenseValue.html());
		LDdefenseNumber = System.intValue(LDdefenseValue.html());
		var overallDefense = defenseNumber + Math.round(LDdefenseNumber*relicMultiplier);
		defenseValue.html(System.addCommas(overallDefense));
		var defenseWithConstitution = Math.ceil(overallDefense * (1 + LDConstitutionLevel * 0.001));
		var totalDefense = defenseWithConstitution + nightmareVisageEffect;
		defenseValueBuffed.html(System.addCommas(totalDefense));
		var dc225 = $("td[title='DC225']");
		var dc175 = $("td[title='DC175']");
		dc225.html(System.addCommas(Math.ceil(totalDefense * (1 - (225 * 0.002)))));
		dc175.html(System.addCommas(Math.ceil(totalDefense * (1 - (175 * 0.002)))));
		var armorValue = $("td[title='armorValue']");
		var armorValueBuffed = $("td[title='armorValueBuffed']");
		var LDarmorValue = $("td[title='LDarmorValue']");
		armorNumber = System.intValue(armorValue.html());
		LDarmorNumber = System.intValue(LDarmorValue.html());
		var totalArmor = armorNumber + Math.round(LDarmorNumber*relicMultiplier);
		armorValue.html(System.addCommas(totalArmor));
		armorValueBuffed.html(System.addCommas(totalArmor + Math.floor(totalArmor * LDSanctuaryLevel * 0.001)));
		var damageValue = $("td[title='damageValue']");
		var damageValueBuffed = $("td[title='damageValueBuffed']");
		var LDdamageValue = $("td[title='LDdamageValue']");
		damageNumber = System.intValue(damageValue.html());
		LDdamageNumber = System.intValue(LDdamageValue.html());
		var hpValue = $("td[title='hpValue']");
		var hpValueBuffed = $("td[title='hpValueBuffed']");
		var LDhpValue = $("td[title='LDhpValue']");
		hpNumber = System.intValue(hpValue.html());
		LDhpNumber = System.intValue(LDhpValue.html());
		var fortitudeBonusHP = Math.ceil(defenseWithConstitution * LDFortitudeLevel * 0.001);
		var chiStrikeBonusDamage = Math.ceil((hpNumber + Math.round(LDhpNumber*relicMultiplier) + fortitudeBonusHP) * LDChiStrikeLevel * 0.001);
		damageValue.html(System.addCommas(damageNumber + Math.round(LDdamageNumber*relicMultiplier)));
		damageValueBuffed.html(System.addCommas(damageNumber + Math.round(LDdamageNumber*relicMultiplier) + chiStrikeBonusDamage));
		hpValue.html(System.addCommas(hpNumber + Math.round(LDhpNumber*relicMultiplier)));
		hpValueBuffed.html(System.addCommas(hpNumber + Math.round(LDhpNumber*relicMultiplier) + fortitudeBonusHP));
		var LDpercentageValue = $("td[title='LDPercentage']");
		LDpercentageValue.html((relicMultiplier*100) + "%");

		System.xmlhttp("index.php?cmd=guild&subcmd=groups", Helper.relicCheckIfGroupExists);
	},

	relicCheckIfGroupExists: function(responseText) {
		var processingStatus = $('td[title="ProcessingStatus"]');
		processingStatus.html('Checking attacking group ... ');
		var doc=System.createDocument(responseText);
		var groupExistsIMG = $(doc).find('img[title="Disband Group (Cancel Attack)"]');
		if (groupExistsIMG.length > 0) {
			var groupHref = groupExistsIMG.parents('td:first').find('a:first').attr("href");
			System.xmlhttp(groupHref, Helper.getRelicGroupData);
		} else {
			processingStatus.html('Done.');
		}
	},

	getRelicGroupData: function(responseText) {
		var processingStatus = $('td[title="ProcessingStatus"]');
		processingStatus.html('Parsing attacking group stats ... ');
		var doc=System.createDocument(responseText);
		//~ Helper.relicGroupAttackValue = $(doc).find('td#centerColumn').find('td:contains("Attack:"):not(:contains(" Attack:"))').next().text().replace(/,/g,"")*1;
		//~ Helper.relicGroupDefenseValue = $(doc).find('td#centerColumn').find('td:contains("Defense:"):not(:contains(" Defense:"))').next().text().replace(/,/g,"")*1;
		//~ Helper.relicGroupArmorValue = $(doc).find('td#centerColumn').find('td:contains("Armor:"):not(:contains(" Armor:"))').next().text().replace(/,/g,"")*1;
		//~ Helper.relicGroupDamageValue = $(doc).find('td#centerColumn').find('td:contains("Damage:"):not(:contains(" Damage:"))').next().text().replace(/,/g,"")*1;
		//~ Helper.relicGroupHPValue = $(doc).find('td#centerColumn').find('td:contains("HP:"):not(:contains(" HP:"))').next().text().replace(/,/g,"")*1;
		Helper.relicGroupAttackValue = $(doc).find('#stat-attack').text().replace(/,/g,"")*1;
		Helper.relicGroupDefenseValue = $(doc).find('#stat-defense').text().replace(/,/g,"")*1;
		Helper.relicGroupArmorValue = $(doc).find('#stat-armor').text().replace(/,/g,"")*1;
		Helper.relicGroupDamageValue = $(doc).find('#stat-damage').text().replace(/,/g,"")*1;
		Helper.relicGroupHPValue = $(doc).find('#stat-hp').text().replace(/,/g,"")*1;
		System.xmlhttp("index.php?cmd=guild&subcmd=mercs", Helper.parseRelicMercStats);
	},

	parseRelicMercStats: function(responseText) {
		//merc stats do not count for group stats so subtract them here ...
		var processingStatus = $('td[title="ProcessingStatus"]');
		processingStatus.html('Subtracting group merc stats ... ');

		var mercPage=System.createDocument(responseText);
		var mercElements = mercPage.getElementsByTagName("IMG");
		var totalMercAttack = 0;
		var totalMercDefense = 0;
		var totalMercArmor = 0;
		var totalMercDamage = 0;
		var totalMercHP = 0;
		for (var i=0; i<mercElements.length; i++) {
			merc = mercElements[i];
			var mouseoverText = $(merc).data("tipped");
			var src = merc.getAttribute("src");
			if (mouseoverText && src.search("/merc/") != -1){
				//<td>Attack:</td><td>1919</td>
				var attackRE=/<td>Attack:<\/td><td>(\d+)<\/td>/;
				var mercAttackValue = attackRE.exec(mouseoverText)[1]*1;
				totalMercAttack += mercAttackValue;
				var defenseRE=/<td>Defense:<\/td><td>(\d+)<\/td>/;
				var mercDefenseValue = defenseRE.exec(mouseoverText)[1]*1;
				totalMercDefense += mercDefenseValue;
				var armorRE=/<td>Armor:<\/td><td>(\d+)<\/td>/;
				var mercArmorValue = armorRE.exec(mouseoverText)[1]*1;
				totalMercArmor += mercArmorValue;
				var damageRE=/<td>Damage:<\/td><td>(\d+)<\/td>/;
				var mercDamageValue = damageRE.exec(mouseoverText)[1]*1;
				totalMercDamage += mercDamageValue;
				var hpRE=/<td>HP:<\/td><td>(\d+)<\/td>/;
				var mercHPValue = hpRE.exec(mouseoverText)[1]*1;
				totalMercHP += mercHPValue;
			}
		}
		Helper.relicGroupAttackValue = Helper.relicGroupAttackValue - Math.round(totalMercAttack*0.2);
		Helper.relicGroupDefenseValue = Helper.relicGroupDefenseValue - Math.round(totalMercDefense*0.2);
		Helper.relicGroupArmorValue = Helper.relicGroupArmorValue - Math.round(totalMercArmor*0.2);
		Helper.relicGroupDamageValue = Helper.relicGroupDamageValue - Math.round(totalMercDamage*0.2);
		Helper.relicGroupHPValue = Helper.relicGroupHPValue - Math.round(totalMercHP*0.2);

		System.xmlhttp("index.php?cmd=profile", Helper.getRelicPlayerBuffs);
	},

	getRelicPlayerBuffs: function(responseText) {
		var processingStatus = $('td[title="ProcessingStatus"]');
		processingStatus.html('Processing attacking group stats ... ');

		var doc=System.createDocument(responseText);
		allItems = doc.getElementsByTagName("IMG");
		var constitutionLevel = 0, flinchLevel = 0, nightmareVisageLevel = 0, fortitudeLevel = 0;
		var chiStrikeLevel = 0, terrorizeLevel = 0, sanctuaryLevel = 0;
		for (i=0;i<allItems.length;i++) {
			anItem=allItems[i];
			if (anItem.getAttribute("src").search("/skills/") != -1) {
				var onmouseover = $(anItem).data("tipped");
				var constitutionRE = /<b>Constitution<\/b> \(Level: (\d+)\)/;
				var constitution =  constitutionRE.exec(onmouseover);
				if (constitution) {
					constitutionLevel = constitution[1];
					continue;
				}
				var flinchRE = /<b>Flinch<\/b> \(Level: (\d+)\)/;
				var flinch = flinchRE.exec(onmouseover);
				if (flinch) {
					flinchLevel = flinch[1];
					continue;
				}
				var nightmareVisageRE = /<b>Nightmare Visage<\/b> \(Level: (\d+)\)/;
				var nightmareVisage = nightmareVisageRE.exec(onmouseover);
				if (nightmareVisage) {
					nightmareVisageLevel = nightmareVisage[1];
					continue;
				}
				var fortitudeRE = /<b>Fortitude<\/b> \(Level: (\d+)\)/;
				var fortitude = fortitudeRE.exec(onmouseover);
				if (fortitude) {
					fortitudeLevel = fortitude[1];
					continue;
				}
				var chiStrikeRE = /<b>Chi Strike<\/b> \(Level: (\d+)\)/;
				var chiStrike = chiStrikeRE.exec(onmouseover);
				if (chiStrike) {
					chiStrikeLevel = chiStrike[1];
					continue;
				}
				var terrorizeRE = /<b>Terrorize<\/b> \(Level: (\d+)\)/;
				var terrorize = terrorizeRE.exec(onmouseover);
				if (terrorize) {
					terrorizeLevel = terrorize[1];
					continue;
				}
				var sanctuaryRE = /<b>Sanctuary<\/b> \(Level: (\d+)\)/;
				var sanctuary = sanctuaryRE.exec(onmouseover);
				if (sanctuary) {
					sanctuaryLevel = sanctuary[1];
					continue;
				}
			}
		}
		var groupAttackElement = $("td[title='GroupAttack']");
		var groupAttackBuffedElement = $("td[title='GroupAttackBuffed']");
		groupAttackElement.html(System.addCommas(Helper.relicGroupAttackValue));
		var nightmareVisageEffect = Math.ceil(Helper.relicGroupAttackValue*(nightmareVisageLevel * 0.0025));
		Helper.relicGroupAttackValue = Helper.relicGroupAttackValue - nightmareVisageEffect;
		var storedFlinchLevel = System.intValue($("td[title='LDFlinchLevel']").text());
		var storedFlinchEffectValue = Math.ceil(Helper.relicGroupAttackValue * storedFlinchLevel * 0.001);
		groupAttackBuffedElement.html(System.addCommas(Helper.relicGroupAttackValue - storedFlinchEffectValue));
		var defenseWithConstitution = Math.ceil(Helper.relicGroupDefenseValue * (1 + constitutionLevel * 0.001));
		var totalDefense = defenseWithConstitution + nightmareVisageEffect
		var groupDefenseElement = $("td[title='GroupDefense']");
		var groupDefenseBuffedElement = $("td[title='GroupDefenseBuffed']");
		groupDefenseElement.html(System.addCommas(Helper.relicGroupDefenseValue));
		groupDefenseBuffedElement.html(System.addCommas(totalDefense));
		var groupArmorElement = $("td[title='GroupArmor']");
		var groupArmorBuffedElement = $("td[title='GroupArmorBuffed']");
		groupArmorElement.html(System.addCommas(Helper.relicGroupArmorValue));
		groupArmorBuffedElement.html(System.addCommas(Helper.relicGroupArmorValue + Math.floor(Helper.relicGroupArmorValue * sanctuaryLevel * 0.001)));
		var groupDamageElement = $("td[title='GroupDamage']");
		var groupDamageBuffedElement = $("td[title='GroupDamageBuffed']");
		var groupHPElement = $("td[title='GroupHP']");
		var groupHPBuffedElement = $("td[title='GroupHPBuffed']");
		var fortitudeBonusHP = Math.ceil(defenseWithConstitution * fortitudeLevel * 0.001);
		var chiStrikeBonusDamage = Math.ceil((Helper.relicGroupHPValue + fortitudeBonusHP) * chiStrikeLevel * 0.001);
		var storedTerrorizeLevel = System.intValue($("td[title='LDTerrorizeLevel']").text());
		var storedTerrorizeEffectValue = Math.ceil(Helper.relicGroupDamageValue * storedTerrorizeLevel * 0.001);
		groupDamageElement.html(System.addCommas(Helper.relicGroupDamageValue));
		groupDamageBuffedElement.html(System.addCommas(Helper.relicGroupDamageValue + chiStrikeBonusDamage - storedTerrorizeEffectValue));
		groupHPElement.html(System.addCommas(Helper.relicGroupHPValue));
		groupHPBuffedElement.html(System.addCommas(Helper.relicGroupHPValue + fortitudeBonusHP));

		//Effect on defending group from Flinch on attacking group.
		var defGuildBuffedAttackElement = $("td[title='attackValueBuffed']");
		var defGuildBuffedAttackValue = System.intValue(defGuildBuffedAttackElement.text());
		var flinchEffectValue = Math.ceil(defGuildBuffedAttackValue * flinchLevel * 0.001);
		defGuildBuffedAttackElement.html(System.addCommas(defGuildBuffedAttackValue - flinchEffectValue));
		var defGuildBuffedDamageElement = $("td[title='damageValueBuffed']");
		var defGuildBuffedDamageValue = System.intValue(defGuildBuffedDamageElement.text());
		var terrorizeEffectValue = Math.ceil(defGuildBuffedDamageValue * terrorizeLevel * 0.001);
		defGuildBuffedDamageElement.html(System.addCommas(defGuildBuffedDamageValue - terrorizeEffectValue));

		processingStatus.html('Done.');
	},

	position: function() {
		var result = {};
		if (Helper.page=="world/map/-(-)") {
			var playerTile=System.findNode("//img/ancestor::td[@background]");
			result.X=playerTile.cellIndex;
			result.Y=playerTile.parentNode.rowIndex;
			result.type="worldmap";
		}
		else {
			if (isNewUI == 1) { // new UI
				var posit = System.findNode("//h3[@id='world-realm-name']");
			} else { // old UI
				var posit = System.findNode("//td[contains(@background,'/skin/realm_top_b4.jpg')]//center/nobr");
			}
			if (!posit) {return;}
			var thePosition=posit.innerHTML;
			var positionRE=/\((\d+),\s*(\d+)\)/;
			var positionX = parseInt(thePosition.match(positionRE)[1],10);
			var positionY = parseInt(thePosition.match(positionRE)[2],10);
			result.X=positionX;
			result.Y=positionY;
			result.type="normal";
		}
		return result;
	},

	mapThis: function() {
		if (!GM_getValue("footprints")) {return;}
		if (isNewUI == 1) {
			var realm = System.findNode('//h3[@id="world-realm-name"]');
			if ($('h3#world-realm-name').data('realm')) {
				var realmId = $('h3#world-realm-name').data('realm').id.trim();
				var levelName = $('h3#world-realm-name').data('realm').name.trim();
			}
		} else {
			var realm = System.findNode("//td[contains(@background,'/skin/realm_top_b2.jpg')]/center/nobr/b");
		}
		var posit = Helper.position();
		if ((realm) && (posit)) {
			if (!levelName) var levelName=realm.innerHTML;
			Helper.levelName = levelName;
			var theMap = System.getValueJSON("map");
			if (!theMap) {
				theMap = {};
				theMap["levels"] = {};
			}
			if (!theMap["levels"][levelName]) theMap["levels"][levelName] = {};
			if (!theMap["levels"][levelName][posit.X]) theMap["levels"][levelName][posit.X]={};
			theMap["levels"][levelName][posit.X][posit.Y]="!";
			System.setValueJSON("map", theMap);
		}
	},

	showMap: function(isLarge) {
		if (!GM_getValue("footprints")) {return;}
		if (isLarge) {
			var realm = System.findNode("//b");
			Helper.levelName = realm.textContent.replace(" Map Overview", "");
		}
		// GM_log(Helper.levelName);
		var theMap = System.getValueJSON("map");
		var displayedMap = System.findNode(isLarge ? "//table[@width]" : "//table[@width='200']");
		if (!displayedMap) {return;}
		var footprintsColor = GM_getValue("footprintsColor");
		var posit = Helper.position();

		for (var y = 0; y < displayedMap.rows.length; y++) {
			var aRow = displayedMap.rows[y];
			for (var x = 0; x < aRow.cells.length; x++) {
				var aCell = aRow.cells[x];
				var dx = isLarge ? x : posit.X + (x - 2);
				var dy = isLarge ? y : posit.Y + (y - 2);
				// GM_log(dx + ":" + dy)
				if (theMap["levels"][Helper.levelName] && theMap["levels"][Helper.levelName][dx] && theMap["levels"][Helper.levelName][dx][dy] && (theMap["levels"][Helper.levelName][dx][dy] == "!")) {
					// aCell.setAttribute("background", "http://66.7.192.165/tiles/9_50.gif");

					if (x != (isLarge ? posit.X : 2) || y != (isLarge ? posit.Y : 2)) {
						aCell.style.color = footprintsColor;
						if (aCell.innerHTML.indexOf("table") > 0)
							aCell.firstChild.firstChild.firstChild.firstChild.firstChild.innerHTML +="**";
						else
							aCell.innerHTML+="**";
					}

									}
				// GM_log(x + ":" + y + " >> " + aCell.getAttribute("background"));
			}
		}
	},

	injectAHsearch: function() {
		var items=System.findNodes("//img[contains(@data-tipped,'fetchitem') and contains(@src,'/items/')]");
		if (items)
			for (var i=0; i<items.length; i++) {
				if (items[i].parentNode.tagName!='A') {
					items[i].addEventListener('click', Helper.searchAHforItem, true);
					items[i].style.cursor='pointer';
					items[i].setAttribute("data-tipped-options",
						items[i].getAttribute("data-tipped-options")+
						", afterUpdate: function(content, element){element.setAttribute('data-tipped-html', content.innerHTML);}");
				}
			}
	},

	searchAHforItem: function(evt) {
		var responseText = evt.target.getAttribute('data-tipped-html');
		var name=responseText.match(/<b>([^<]*)<\/b>/)[1];
		//if (responseText.indexOf('Bound (Non-Tradable)') > 0)
			//if (!confirm(name + " is Bound (Non-Tradable), cannot be found in AH!\n"+
				//"Do you still want to try?")) return;
		if (responseText.indexOf('Container') > 0)
			if (!confirm(name + " is type Container.\n"+
				"Do you still want to search AH for this item (OK) or not (Cancel)?")) return;
		window.location='index.php?cmd=auctionhouse&type=-1&search_text='+name;
	},

	injectViewRecipe: function() {
		var components = System.findNodes("//b[.='Components Required']/../../following-sibling::tr[2]//img");
		if (components) {
			for (var i = 0; i < components.length; i++) {
				var mo = components[i].getAttribute("data-tipped");
				System.xmlhttp(Helper.linkFromMouseoverCustom(mo), Helper.injectViewRecipeLinks, components[i]);
				var componentCountElement = components[i].parentNode.parentNode.parentNode.nextSibling.firstChild;
				componentCountElement.innerHTML = '<nobr>' + componentCountElement.innerHTML + '</nobr>';
			}
		}
	},

	injectViewRecipeLinks: function(responseText, callback) {
		var itemRE = /<b>([^<]+)<\/b>/i;
		var itemName = itemRE.exec(responseText);
		if (itemName) itemName=itemName[1];
		var plantFromComponent = Data.plantFromComponent(itemName);
		if (itemName != plantFromComponent) {
			var itemLinks = document.createElement("td");
			itemLinks.innerHTML =
				'<a href="' + System.server + '?cmd=auctionhouse&type=-1&order_by=1&search_text='+
				escape(plantFromComponent)+
				'">AH</a>';
			var counter=System.findNode("../../../../tr[2]/td", callback);
			counter.setAttribute("colspan", "2");
			callback.parentNode.parentNode.parentNode.appendChild(itemLinks);
		}
	},

	injectAdvisor: function(subPage2Id) {
		var list=System.findNode("//tr[td/b='Member']/../..");
		if (!list) return;

		// insert weekly summary link
		var injectHere=System.findNode("//td/select/..");
		if (injectHere) {
			var elem=document.createElement("span");
			elem.innerHTML=" <a href='index.php?cmd=guild&subcmd=advisor&subcmd2=weekly'>7-Day Summary</a>";
			injectHere.appendChild(elem);
		}
		GM_addStyle(
			'.HelperAdvisorRow1 {background-color:#e7c473;font-size:x-small}\n' +
			'.HelperAdvisorRow1:hover {background-color:white}\n' +
			'.HelperAdvisorRow2 {background-color:#e2b960;font-size:x-small}\n' +
			'.HelperAdvisorRow2:hover {background-color:white}');

		var memberList = System.getValueJSON("memberlist");
		if (memberList) Helper.generateAdvisorRows(list);

		if (! Helper.advisorHeader) {
			Helper.advisorHeader = '<tr>';
			titleCells = ["Member", "Lvl", "Rank", "Gold From Deposits", "Gold From Tax", "Gold Total", "FSPs", "Skills Cast", "Groups Created", "Groups Joined", "Relics Captured", "XP Contrib"];
			for (var i=0; i<titleCells.length; i++) {
				Helper.advisorHeader += "<th bgcolor=#cd9e4b align=center width=8% style='text-decoration: underline; cursor: pointer; font-size:x-small;'>" + titleCells[i] + "</td>";
			}
			Helper.advisorHeader += '</tr>';
		}

		if (! Helper.advisorFooter) {
			Helper.advisorFooter = '<tr><td colspan=3 align=right>Total: </td>';
			for (i=1; i<list.rows[list.rows.length-1].cells.length; i++) {
				Helper.advisorFooter += "<td align=center>" + list.rows[list.rows.length-1].cells[i].innerHTML + '</td>';
			}
			Helper.advisorFooter +='</tr>';
		}
		if (subPage2Id!='-') {
			Helper.advisorFooter='';
		}

		Helper.sortAsc = true;
		if (subPage2Id == '-' && memberList) {
			Helper.generateAdvisorRows(list);
			Helper.sortAdvisor(list, "Member");
		} else if (memberList){
			list.innerHTML='Retrieving daily data ...';
			Helper.generateWeeklyAdvisorRows('',{'day':0,'inject':list});
		}
	},

	generateWeeklyAdvisorRows: function(responseText, callback) {
		var day=callback.day;
		if (day <= 7) {
			if (day > 0) {
				callback.inject.innerHTML+=' day '+day+',';
				var doc=System.createDocument(responseText);
				var list=System.findNode("//tr[td/b='Member']/../..",doc);
				Helper.generateAdvisorRows(list);
				if (day == 1) {
					Helper.weeklyAdvisorRows = Helper.advisorRows;
					Helper.advisorColumns = ['GoldFromDeposits','GoldFromTax',
						'GoldTotal','FSPs','SkillsCast','GroupsCreated',
						'GroupsJoined','RelicsCaptured','XPContrib'];
				}
				for (var i=1; i<list.rows.length-1; i++){
					for (var id=0; id<Helper.advisorColumns.length; id++){
						var columnName=Helper.advisorColumns[id];
						if (day==1)
							Helper.weeklyAdvisorRows[i-1][columnName]=
								System.intValue(Helper.weeklyAdvisorRows[i-1][columnName]);
						else
							Helper.weeklyAdvisorRows[i-1][columnName]+=
								System.intValue(Helper.advisorRows[i-1][columnName]);
					}
				}
			}
			System.xmlhttp("index.php?cmd=guild&subcmd=advisor&period="+(day+1),
				Helper.generateWeeklyAdvisorRows, {'day':(day+1),'inject':callback.inject});
		} else {
			Helper.advisorRows = Helper.weeklyAdvisorRows;
			for (i=1; i<=Helper.advisorRows.length; i++){
				for (id=0; id<Helper.advisorColumns.length; id++){
					columnName=Helper.advisorColumns[id];
					Helper.advisorRows[i-1][columnName]=
						System.addCommas(Helper.advisorRows[i-1][columnName]);
				}
			}
			Helper.sortAdvisor(callback.inject, "Member");
		}
	},

	generateAdvisorRows: function(list) {
		Helper.advisorRows = [];
		var memberList = System.getValueJSON("memberlist");
		for (var i=1; i<list.rows.length-1; i++){
			var theRow=list.rows[i];
			var name = theRow.cells[0].textContent.replace(/\s/, "");
			for (var j=0; j<memberList.members.length; j++) {
				if (memberList.members[j].name == name) {
					var member = memberList.members[j];
					break;
				}
			}
			Helper.advisorRows[i-1] = {
				'Id':(member != undefined ? member.id : -1),
				'Member': theRow.cells[0].textContent,
				'Lvl':(member != undefined ? member.level : -1),
				'Rank':(member != undefined ? member.rank : ""),
				'GoldFromDeposits': theRow.cells[1].textContent,
				'GoldFromTax': theRow.cells[2].textContent,
				'GoldTotal': theRow.cells[3].textContent,
				'FSPs': theRow.cells[4].textContent,
				'SkillsCast': theRow.cells[5].textContent,
				'GroupsCreated': theRow.cells[6].textContent,
				'GroupsJoined': theRow.cells[7].textContent,
				'RelicsCaptured': theRow.cells[8].textContent,
				'XPContrib': theRow.cells[9].textContent
			};
		}
	},

	advisorHeaderClicked: function(evt) {
		var headerClicked=evt.target.textContent;
		var list=evt.target.parentNode.parentNode;
		Helper.sortAdvisor(list, headerClicked.replace(/ /g, ""));
	},

	sortAdvisor: function(list, sortBy) {
		if (Helper.sortAsc==undefined) Helper.sortAsc=true;
		if (Helper.sortBy && Helper.sortBy==sortBy) {
			Helper.sortAsc=!Helper.sortAsc;
		}
		Helper.sortBy=sortBy;

		if (sortBy=="Member" || sortBy=="Rank") {
			Helper.advisorRows.sort(Helper.stringSort);
		}
		else {
			Helper.advisorRows.sort(Helper.numberSort);
		}

		var result = Helper.advisorHeader;

		for (var i=0; i<Helper.advisorRows.length; i++){
			var r = Helper.advisorRows[i];
			result += '<tr class="HelperAdvisorRow'+(1+i % 2)+'">'+
			'<td> <a href="index.php?cmd=profile&player_id=' + r.Id +'">' +r.Member+ '</a></td>'+
			'<td align="center"> '+r.Lvl+'</td>'+
			'<td align="center"> '+r.Rank.substr(0,9)+ (r.Rank.length>9 ? '...' : '') + '</td>'+
			'<td align="center">'+r.GoldFromDeposits+'</td>'+
			'<td align="center">'+r.GoldFromTax+'</td>'+
			'<td align="center">'+r.GoldTotal+'</td>'+
			'<td align="center">'+r.FSPs+'</td>'+
			'<td align="center">'+r.SkillsCast+'</td>'+
			'<td align="center">'+r.GroupsCreated+'</td>'+
			'<td align="center">'+r.GroupsJoined+'</td>'+
			'<td align="center">'+r.RelicsCaptured+'</td>'+
			'<td align="center">'+r.XPContrib+'</td></tr>';
		}
		if (Helper.advisorFooter!=='')
			result+=Helper.advisorFooter;
		else {
			Helper.advisorFooter='<tr><td align="right" colspan="3">Total: </td>';
			for (var id=0; id<Helper.advisorColumns.length; id++){
				var sum=0;
				var columnName=Helper.advisorColumns[id];
				for (i=0; i<Helper.advisorRows.length; i++)
					sum+=System.intValue(Helper.advisorRows[i][columnName]);
				Helper.advisorFooter+='<td align="center" style="text-decoration:underline;font-weight:bold;font-size:x-small">'+System.addCommas(sum)+'</td>';
			}
			Helper.advisorFooter+='</tr>';
			result+=Helper.advisorFooter;
		}

		list.innerHTML=result;

		for (i=0; i<list.rows[0].cells.length; i++) {
			var cell=list.rows[0].cells[i];
			cell.style.textDecoration="underline";
			cell.style.cursor="pointer";
			cell.addEventListener('click', Helper.advisorHeaderClicked, true);
		}

	},

	stringSort: function(a,b) {
		var result=0;
		a = eval("a."+Helper.sortBy);
		b = eval("b."+Helper.sortBy);

		if (a.toLowerCase()<b.toLowerCase()) result=-1;
		if (a.toLowerCase()>b.toLowerCase()) result=+1;
		if (!Helper.sortAsc) result=-result;
		return result;
	},

	numberSort: function(a,b) {
		var result=0;
		if(typeof a.type !== undefined){
			if(a.type > 8) return 1; //non equipment items
			if(b.type > 8) return -1;
		}
		var valueA=eval("a."+Helper.sortBy);
		var valueB=eval("b."+Helper.sortBy);
		if (typeof valueA=="string") valueA=parseInt(valueA.replace(/,/g,"").replace(/#/g,""),10);
		if (typeof valueB=="string") valueB=parseInt(valueB.replace(/,/g,"").replace(/#/g,""),10);
		result = valueA-valueB;
		if (!Helper.sortAsc) result=-result;
		return result;
	},

	questStatusSort: function(a,b) {
		var result=0;
		var valueA,valueB;
		var statuses = ["Incomplete", "Complete", ""];
		if (!a[Helper.sortBy]) {
			valueA=Helper.sortAsc?50:-50;
		}
		else {
			valueA=statuses.indexOf(a[Helper.sortBy]);
		}
		if (!b[Helper.sortBy]) {
			valueB=Helper.sortAsc?50:-50;
		}
		else {
			valueB=statuses.indexOf(b[Helper.sortBy]);
		}

		result = valueA-valueB;
		if (!Helper.sortAsc) result=-result;
		return result;
	},

	checkBuffs: function() {
		//code to remove buffs but stay on the same screen
		var currentBuffs = System.findNodes("//a[contains(@href,'index.php?cmd=profile&subcmd=removeskill&skill_id=')]");
		var buffHash={};
		if (currentBuffs) {
			for (var i=0;i<currentBuffs.length;i++) {
				var currentBuff = currentBuffs[i];
				var buffHref = currentBuff.getAttribute("href");
				var buffTest = /remove\sthe\s([ a-zA-Z]+)\sskill/.exec(currentBuff.getAttribute("onclick"));
				if (buffTest) {
					var buffName = buffTest[1];
				} else {
					buffTest = /remove\sthe\s([ a-zA-Z]+)<br>/.exec(currentBuff.getAttribute("onclick"));
					if (buffTest) buffName = buffTest[1]; else GM_log("Error getting buff");
				}
				buffHash[buffName]=true;
				var imageHTML = currentBuff.innerHTML;
				var buffCell = currentBuff.parentNode;
				var buffHTML = buffCell.innerHTML;
				var lastPart = buffHTML.substring(buffHTML.indexOf("</a>")+4, buffHTML.length);
				var newCellContents = '<span id="Helper:removeSkill' + i + '" style="cursor:pointer;" buffName="' + buffName + '" buffHref="' + buffHref + '">' + imageHTML +
					'</span>' + lastPart;
				buffCell.innerHTML = newCellContents;
				buffCell.firstChild.addEventListener('click', Helper.removeSkill, true);
			}
		}

		//extra world screen text
		var replacementText = "<td background='" + System.imageServer + "/skin/realm_right_bg.jpg'>";
		replacementText += "<table align='right' cellpadding='1' style='width:270px;margin-left:38px;margin-right:38px;" +
			"font-size:medium; border-spacing: 1px; border-collapse: collapse;'>";
		replacementText += "<tr><td colspan='2' height='10'></td></tr><tr>";
		var hasShieldImp = System.findNode("//img[contains(@src,'/55_sm.gif')]");
		var hasDeathDealer = System.findNode("//img[contains(@src,'/50_sm.gif')]");
		if (hasDeathDealer || hasShieldImp) {
			var re=/(\d+) HP remaining/;
			var impsRemaining = 0;
			if (hasShieldImp) {
				textToTest = $(hasShieldImp).data("tipped");
				impsRemainingRE = re.exec(textToTest);
				impsRemaining = impsRemainingRE[1];
			}
			var applyImpWarningColor = " style='color:green; font-size:medium;'";
			if (impsRemaining==2){
				applyImpWarningColor = " style='color:Orangered; font-size:medium; font-weight:bold;'";
			}
			if (impsRemaining==1){
				applyImpWarningColor = " style='color:Orangered; font-size:large; font-weight:bold'";
			}
			if (impsRemaining===0){
				applyImpWarningColor = " style='color:red; font-size:large; font-weight:bold'";
			}
			replacementText += "<tr><td" + applyImpWarningColor + ">Shield Imps Remaining: " +  impsRemaining +
				(impsRemaining === 0?"&nbsp;<span id='Helper:recastImpAndRefresh' style='color:blue;cursor:pointer;text-decoration:underline;font-size:xx-small;'>Recast</span>":"") + "</td></tr>";
			if (hasDeathDealer) {
				if (GM_getValue("lastDeathDealerPercentage")==undefined) GM_setValue("lastDeathDealerPercentage", 0);
				if (GM_getValue("lastKillStreak")==undefined) GM_setValue("lastKillStreak", 0);
				var lastDeathDealerPercentage = GM_getValue("lastDeathDealerPercentage");
				var lastKillStreak = GM_getValue("lastKillStreak");
				if (impsRemaining>0 && lastDeathDealerPercentage == 20) {
					replacementText += "<tr><td style='font-size:small; color:black'>Kill Streak: <span findme='killstreak'>&gt;" + System.addCommas(lastKillStreak) +
						"</span> Damage bonus: <span findme='damagebonus'>20</span>%</td></tr>";
				} else {
					if (!GM_getValue('trackKillStreak')) {
						replacementText += "<tr><td style='font-size:small; color:navy' nowrap>KillStreak tracker disabled. "+
							"<span style='font-size:xx-small'>Track: <span id=Helper:toggleKStracker style='color:navy;cursor:pointer;text-decoration:underline;' title='Click to toggle'>"+
							(GM_getValue('trackKillStreak')?"ON":"off")+
							"</span></span></td></tr>";
					} else {
						replacementText += "<tr><td style='font-size:small; color:navy' nowrap>KillStreak: <span findme='killstreak'>" + System.addCommas(lastKillStreak) +
							"</span> Damage bonus: <span findme='damagebonus'>" + Math.round(lastDeathDealerPercentage*100)/100 + "</span>%&nbsp;"+
							"<span style='font-size:xx-small'>Track: <span id=Helper:toggleKStracker style='color:navy;cursor:pointer;text-decoration:underline;' title='Click to toggle'>"+
							(GM_getValue('trackKillStreak')?"ON":"off")+
							"</span></span></td></tr>";
						System.xmlhttp("index.php?cmd=profile", Helper.getKillStreak);
					}
				}
			}
		}
		var hasCounterAttack = System.findNode("//img[contains(@src,'/54_sm.gif')]");
		if (hasCounterAttack) {
			if (hasCounterAttack.getAttribute("src").search("/skills/") != -1) {
				var onmouseover = $(hasCounterAttack).data("tipped");
				var counterAttackRE = /<b>Counter Attack<\/b> \(Level: (\d+)\)/;
				var counterAttack = counterAttackRE.exec(onmouseover);
				if (counterAttack) {
					counterAttackLevel = counterAttack[1];
				}
			}
			replacementText += "<tr><td style='font-size:small; color:blue'>CA" + counterAttackLevel + " active</td></tr>";
		}
		var hasDoubler = System.findNode("//img[contains(@src,'/26_sm.gif')]");
		if (hasDoubler) {
			if (hasDoubler.getAttribute("src").search("/skills/") != -1) {
				var onmouseover = $(hasDoubler).data("tipped");
				var doublerRE = /<b>Doubler<\/b> \(Level: (\d+)\)/;
				var doubler = doublerRE.exec(onmouseover);
				if (doubler) {
					doublerLevel = doubler[1];
				}
			}
			if (doublerLevel == 200) replacementText += "<tr><td style='font-size:small; color:red'>Doubler " + doublerLevel + " active</td></tr>";
		}
		var huntingMode = GM_getValue("huntingMode");
		replacementText += (huntingMode === true)?"<tr><td style='font-size:small; color:red'>Hunting mode enabled</td></tr>":""
		replacementText += "<tr><td colspan='2' height='10'></td></tr>";
		if (GM_getValue("showHuntingBuffs")) {
			var enabledHuntingMode=GM_getValue("enabledHuntingMode");
			var buffs=GM_getValue("huntingBuffs");
			var buffsName=GM_getValue("huntingBuffsName");
			if (enabledHuntingMode == 2) {buffs=GM_getValue("huntingBuffs2"); buffsName=GM_getValue("huntingBuffs2Name");}
			if (enabledHuntingMode == 3) {buffs=GM_getValue("huntingBuffs3"); buffsName=GM_getValue("huntingBuffs3Name");}
			var buffAry=buffs.split(",");
			var missingBuffs = new Array();
			for (i=0;i<buffAry.length;i++) {
				if (!buffHash[buffAry[i].trim()]) {
					missingBuffs.push(buffAry[i]);
				}
			}
			if (missingBuffs.length>0) {
				replacementText += "<tr><td colspan='2' align='center'><span style='font-size:x-small; color:navy;'>" +
					"You are missing some " + buffsName + " hunting buffs<br/>(";
				replacementText += missingBuffs.join(", ");
				replacementText += ")</span></td></tr>";
			}
			replacementText += "<tr><td colspan='2' height='10'></td></tr>";
			replacementText += "</table>";
		}
		replacementText += "</td>" ;

		var injectHere = System.findNode("//div[table[@class='centered' and @style='width: 270px;']]");
		if (!injectHere) {return;}
		//insert after kill all monsters image and text
		var newSpan = document.createElement("DIV");
		newSpan.innerHTML=replacementText;
		injectHere.appendChild(newSpan);

		if ((hasDeathDealer || hasShieldImp) && impsRemaining ===0) {
			var recastImpAndRefresh=document.getElementById('Helper:recastImpAndRefresh');
			var impHref = "index.php?cmd=quickbuff&subcmd=activate&targetPlayers=" + Helper.characterName + "&skills%5B%5D=55";
			recastImpAndRefresh.addEventListener('click', function() {
				System.xmlhttp(impHref, Helper.recastImpAndRefresh, true);
			},true);
		}

		var trackKS=document.getElementById('Helper:toggleKStracker');
		if (trackKS) trackKS.addEventListener('click', function() {
				GM_setValue('trackKillStreak', GM_getValue('trackKillStreak')?false:true);
				window.location=window.location;
			},true);
	},

	recastImpAndRefresh: function(responseText) {
		var doc=System.createDocument(responseText);
		if (doc) {
			window.location=window.location;
		}
	},

	removeSkill: function(evt) {
		var buffName = evt.target.parentNode.getAttribute("buffName");
		var buffHref = evt.target.parentNode.getAttribute("buffHref");
		if (confirm('Are you sure you wish to remove the ' + buffName + ' skill?')) {
			System.xmlhttp(buffHref, function() {window.location="index.php?cmd=world";});
		}
	},

	injectQuestBookFull: function() {

		var lastQBPage = location.search;
		//TODO: Make this configurable on/off
		if (lastQBPage.indexOf("&mode=0") != -1) {
			GM_setValue("lastActiveQuestPage", lastQBPage);
		} else if (lastQBPage.indexOf("&mode=1") != -1) {
			GM_setValue("lastCompletedQuestPage", lastQBPage);
		} else if (lastQBPage.indexOf("&mode=2") != -1) {
			GM_setValue("lastNotStartedQuestPage", lastQBPage);
		}
		if (GM_getValue("storeLastQuestPage")) {
			if (GM_getValue("lastActiveQuestPage").length > 0) {
				var activeLink = $('a[href*="index.php?cmd=questbook&mode=0"]');
				activeLink.attr("href", GM_getValue("lastActiveQuestPage"));
			}
			if (GM_getValue("lastCompletedQuestPage").length > 0) {
				var completedLink = $('a[href*="index.php?cmd=questbook&mode=1"]');
				completedLink.attr("href", GM_getValue("lastCompletedQuestPage"));
			}
			if (GM_getValue("lastNotStartedQuestPage").length > 0) {
				var notStartedLink = $('a[href*="index.php?cmd=questbook&mode=2"]');
				notStartedLink.attr("href", GM_getValue("lastNotStartedQuestPage"));
			}
		}

		var questTable = System.findNode("//table[tbody/tr/td[.='Guide']]");
		if (!questTable) {return;}
		var hideQuests=[];
		if (GM_getValue("hideQuests")) hideQuests=GM_getValue("hideQuestNames").split(",");
		for (var i=0;i<questTable.rows.length;i++) {
			var aRow = questTable.rows[i];
			if (i!==0) {
				if (aRow.cells[0].innerHTML) {
					var questName = aRow.cells[0].firstChild.innerHTML.replace(/  /g," ").trim();
					if (hideQuests.indexOf(questName)>=0) {
						aRow.parentNode.removeChild(aRow.nextSibling);
						aRow.parentNode.removeChild(aRow.nextSibling);
						aRow.parentNode.removeChild(aRow);
					}
					//<a href="http://guide.fallensword.com/index.php?cmd=quests&amp;subcmd=view&amp;quest_id=17&amp;search_name=&amp;search_level_min=&amp;search_level_max=&amp;sort_by=" target="_blank"><img src="http://fileserver.huntedcow.com/skin/fs_wiki.gif" title="Search for this quest on the Ultimate Fallen Sword Guide" border="0"></a>
					var questID = /quest_id=(\d+)/.exec(aRow.cells[4].innerHTML)[1];
					//~ aRow.cells[4].innerHTML = '<a href="http://wiki.fallensword.com/index.php?title=' + questName.replace(/ /g,'_') + '" target="_blank">' +
						//~ '<img src="http://fileserver.huntedcow.com/skin/fs_wiki.gif" title="Search for this quest on the Wiki" border="0"></a>';
					//~ aRow.cells[4].innerHTML += '&nbsp;<a href="http://guide.fallensword.com/index.php?cmd=quests&amp;subcmd=view&amp;quest_id=' + questID + '&amp;search_name=&amp;search_level_min=&amp;search_level_max=&amp;sort_by=" target="_blank">' +
						//~ '<img border=0 title="Search quest in Ultimate FSG" src="'+ System.imageServerHTTPOld + '/temple/1.gif"/></a>';
					aRow.cells[4].innerHTML = '<a href="http://guide.fallensword.com/index.php?cmd=quests&amp;subcmd=view&amp;quest_id=' + questID + '&amp;search_name=&amp;search_level_min=&amp;search_level_max=&amp;sort_by=" target="_blank">' +
						'<img border=0 style="float:left;" title="Search quest in Ultimate FSG" src="' + System.imageServer + '/temple/1.gif"/></a>';
					aRow.cells[4].innerHTML += '&nbsp;<a href="http://wiki.fallensword.com/index.php?title=' + questName.replace(/ /g,'_') + '" target="_blank">' +
						'<img border=0 style="float:left;" title="Search for this quest on the Wiki" src="' + System.imageServer + '/skin/fs_wiki.gif"/></a>';
				}
			}
		}
	},

	toggleSound: function() {
		if (GM_getValue("playNewMessageSound"))
		{
			GM_setValue("playNewMessageSound", false);
		} else {
			GM_setValue("playNewMessageSound", true);
		}
		window.location.reload();
	},

	isQuestBeingTracked: function (questHREF) {
		//quests are stored as their address after index.php: ?cmd=questbook....
		var questsBeingTracked = GM_getValue("questBeingTracked").split(";");
		for (var i = 0; i < questsBeingTracked.length; i++) {
			if (questsBeingTracked[i] == questHREF) {
				return true;
			}
		}
		return false;
	},

	checkForNotCompletedQuests: function(responseText, callback) {
		//gets the maximum page number and goes through the pages.
		var doc=System.createDocument(responseText);
		var page = System.findNode("//td[contains(.,'Page:')]", doc);
		var maxPage = page.innerHTML.match(/of&nbsp;(\d*)/);


		if (maxPage && maxPage.length >= 2) {
			GM_setValue("questsNotComplete", false);
			for (var i = 0; i < maxPage[1].replace(/of&nbsp;/g, ""); i++) {
				System.xmlhttp("index.php?cmd=questbook&subcmd=&subcmd2=&page=" + i + "&search_text=&mode=0&letter=*&sortby=min_level&sortbydir=0",
				Helper.checkForNotCompletedQuestRecurse,
				{"insertHere" : callback.insertHere});
			}
		}
	},

	checkForNotCompletedQuestRecurse: function(responseText, callback) {
		var doc=System.createDocument(responseText);
		var insertHere = callback.insertHere;

		var table = System.findNode("//table[@width='100%' and @cellspacing=0 and @cellpadding=0 and @border=0]", doc);
		if (table) {
			table = table.lastChild.getElementsByTagName("TABLE")[2];

			for (var i = 2; i < table.rows.length; i+=2) {
				if (table.rows[i].cells.length > 1) {
					var questHREF = table.rows[i].cells[0].getElementsByTagName("a")[0].getAttribute("href").match(/(\?.*)/)[1];
					if (table.rows[i].cells[2].innerHTML == GM_getValue("lastWorld") && !Helper.isQuestBeingTracked(questHREF)) {
						if (GM_getValue("questsNotComplete") === false) {
							insertHere.innerHTML += "<br><span style='color:red;font-size:12px;'>Quest(s) in zone not completed:</span><br>";
							GM_setValue("questsNotComplete", true);
						}
						insertHere.innerHTML += "<span style='font-size:12px;'>" +table.rows[i].cells[0].innerHTML + "</span><br>";
					}
				}
			}
		}
	},

	checkForNotStartedQuests: function(responseText, callback) {

		var doc=System.createDocument(responseText);
		var page = System.findNode("//td[contains(.,'Page:')]", doc);
		var maxPage = page.innerHTML.match(/of&nbsp;(\d*)/g);

		if (maxPage && maxPage.length >= 2) {
			GM_setValue("questsNotStarted", false);
			for (var i = 0; i < maxPage[1].replace(/of&nbsp;/g, ""); i++) {
				System.xmlhttp("index.php?cmd=questbook&subcmd=&subcmd2=&page=" + i + "&search_text=&mode=2&letter=*&sortby=min_level&sortbydir=0",
				Helper.checkForQuestRecurse,
				{"insertHere" : callback.insertHere});
			}
		}
	},

	checkForQuestRecurse: function(responseText, callback) {
		var doc=System.createDocument(responseText);
		var insertHere = callback.insertHere;

		var table = System.findNode("//table[@width='100%' and @cellspacing=0 and @cellpadding=0 and @border=0]", doc);
		if (table) {
			table = table.lastChild.getElementsByTagName("TABLE")[2];

			for (var i = 2; i < table.rows.length; i+=2) {
				if (table.rows[i].cells.length > 1) {
					if (table.rows[i].cells[2].innerHTML == GM_getValue("lastWorld")) {
						if (GM_getValue("questsNotStarted") === false) {
							insertHere.innerHTML += "<br><span style='color:red;font-size:12px;'>Quest(s) in zone not started:</span><br>";
							GM_setValue("questsNotStarted", true);
						}
						insertHere.innerHTML += "<span style='font-size:12px;'>" + Helper.removeHTML(table.rows[i].cells[0].innerHTML) + "</span><br>";
					}
				}
			}
		}
	},

	injectWorldNewMap: function(data){

			if(data.player){
				Helper.xLocation = data.player.location.x;
				Helper.yLocation = data.player.location.y;
				//<dd id="HelperSendTotal">' + GM_getValue("currentGoldSentTotal").toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '</dd>
				if(GM_getValue("sendGoldonWorld")){
					$('#HelperSendTotal').html(GM_getValue("currentGoldSentTotal").toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
					if(parseInt(data.player.gold) > GM_getValue("goldAmount")){
						$('#statbar-gold').css('background-color','red');
					}else{
						$('#statbar-gold').css('background-color','inherit');
					}
				}
				/*if (buttonRow && GM_getValue("sendGoldonWorld")){
					currentGoldSentTotal = System.addCommas(GM_getValue("currentGoldSentTotal"));
					var recipient_text = "Send " + GM_getValue("goldAmount") + " gold to " + GM_getValue("goldRecipient") +
						". Current gold sent total is " + currentGoldSentTotal;
					buttonRow.innerHTML += '<td valign="top" width="5"></td>' +
						'<td valign="top"><img style="cursor:pointer" id="Helper:SendGold" src="' + System.imageServer +
						'/skin/gold_button.gif" title= "' + recipient_text + '" border="1" />';
				}
				if (buttonRow && GM_getValue("sendGoldonWorld")){
					//document.getElementById('Helper:PortalToStart').addEventListener('click', Helper.portalToStartArea, true);
					document.getElementById('Helper:SendGold').addEventListener('click', Helper.sendGoldToPlayer, true);
				}*/
			}

			if (data.realm && data.realm.name) {
				var worldName = $('h1#worldName');
				worldName.html(data.realm.name); //HACK - incase of switchign between master realm and realm they dont replace teh realm name
				worldName.append(' <a href="http://guide.fallensword.com/index.php?cmd=realms&subcmd=view&realm_id=' + data.realm.id + '" target="_blank">' +
					'<img border=0 title="Search map in Ultimate FSG" width=10 height=10 src="'+ System.imageServer + '/temple/1.gif"/></a>');
				worldName.append(' <a href="http://wiki.fallensword.com/index.php/Special:Search?search=' + data.realm.name + '&go=Go" target="_blank">' +
					'<img border=0 title="Search map in Wiki" width=10 height=10 src="/favicon.ico"/></a>');

				if (GM_getValue("showSpeakerOnWorld")) {
					var simgOn='<img border=0 title="Turn Off Sound when you have a new log message" width=10 height=10 src="' + Data.soundMuteImage() + '"/>';
					var simgOff='<img border=0 title="Turn On Sound when you have a new log message" width=10 height=10 src="' + Data.soundImage() + '"/>';
					var img = GM_getValue("playNewMessageSound") === true ? simgOn : simgOff;
					worldName.append('<a href="#" id="toggleSoundLink">'+img+'</a>');
					document.getElementById('toggleSoundLink').addEventListener('click',
					function() {
					//alert($('a#HelperToggleHuntingMode').html());
						if(GM_getValue("playNewMessageSound") === false){
							$('a#toggleSoundLink').html(simgOn);
						}else{
							$('a#toggleSoundLink').html(simgOff);
						}
						GM_setValue("playNewMessageSound",!GM_getValue("playNewMessageSound")); //window.location.reload();

					},true);
				}
				var huntingMode = GM_getValue("huntingMode");

				var himgOn="<img title='Hunting mode is ON' src='" + Data.huntingOnImage() + "' border=0 width=10 height=10/>";
				var himgOff="<img title='Hunting mode is OFF' src='" + Data.huntingOffImage() + "' border=0 width=10 height=10/>";
				var img = huntingMode === true ? himgOn : himgOff;
				worldName.append(" <a href=# id='HelperToggleHuntingMode'>" + img + "</a>");
				
				document.getElementById('HelperToggleHuntingMode').addEventListener('click',
					function() {
					//alert($('a#HelperToggleHuntingMode').html());
						if(GM_getValue("huntingMode") === false){
							$('a#HelperToggleHuntingMode').html(himgOn);
						}else{
							$('a#HelperToggleHuntingMode').html(himgOff);
						}
						GM_setValue("huntingMode",!GM_getValue("huntingMode")); //window.location.reload();

					},true);

			}

	},

	injectWorld: function() {
		//-1 = world page
		//0 = quest responce
		//1 = view creature
		//2 = attack creature
		//3 = attack player
		//4 = move
		//5 = use stair
		//6 = use chest
		//7 = take portal
		//10 = problaby view relic
		//11 = take relic
		//12 = create group
		//13 = view shop
		//14 = purchase item
		//15 = repair
		//17 = login
		//18 = username not found
		if ($('#worldPage').length > 0) { // new map
			// subscribe to view creature events on the new map.
			//current send total
			//send to
			//send amount
			//deposit?
			if(GM_getValue("sendGoldonWorld")){
				$('#statbar-gold-tooltip-general').append(
						'<dt class="stat-gold-sendTo">Send To:</dt><dd id="HelperSendTo">' + GM_getValue("goldRecipient") + '</dd>' + 
						'<dt class="stat-gold-sendAmt">Amount:</dt><dd id="HelperSendAmt">' + GM_getValue("goldAmount").replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '</dd>' +
						'<dt class="stat-gold-sendTo">Send?</dt><dd><input id="HelperSendGold" value="Send!" class="custombutton" type="submit"><input type="hidden" id="xc" value="' + GM_getValue("goldConfirm") + '"</dd>' + 
						'<dt class="stat-gold-sendTotal">Total Sent:</dt><dd id="HelperSendTotal">' + GM_getValue("currentGoldSentTotal").toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '</dd>');
				$('input#HelperSendGold').click(function(){
					var sendTo = $('#HelperSendTo').html();
					var sendAmt = $('#HelperSendAmt').html().replace(/[^\d]/g,'');
					var xcNum = $('#xc').val();
					var sendHref = System.server + 'index.php?cmd=trade&subcmd=sendgold&xc=' + xcNum + '&target_username=' + sendTo +'&gold_amount='+ sendAmt;
					$.ajax({
						url: sendHref,
						success: function( data ) {
							//alert($(data).find();
							var info = Layout.infoBox(data);
							if(info == 'You successfully sent gold!' || info === ''){
								//currentGoldSentTotal += System.intValue(callback.amount);
								//info = 'You successfully sent ' + callback.amount + ' gold to ' + callback.recipient + '! Current total sent is '+currentGoldSentTotal+' gold.';
								GM_setValue("currentGoldSentTotal", parseInt(GM_getValue('currentGoldSentTotal'))+parseInt(GM_getValue("goldAmount")));
								unsafeWindow.GameData.fetch(387);
							}
						},
					});
					
				});
			}
			//Subscribes:
			Helper.doNotKillList = GM_getValue("doNotKillList");
			$.subscribe('ready.view-creature', function(e, data) {
				$('div#creatureEvaluator').html("");
				$('div#creatureEvaluatorGroup').html("");
				System.xmlhttp("index.php?cmd=profile", Helper.getCreaturePlayerData,
					{"groupExists": false, "groupAttackValue": 0, "groupDefenseValue": 0,
					"groupArmorValue": 0, "groupDamageValue": 0, "groupHPValue": 0});
				System.xmlhttp("index.php?cmd=guild&subcmd=groups", Helper.checkIfGroupExists);
				
				$('div#addRemoveCreatureToDoNotKillList').html("");
//GM_log($('#dialog-viewcreature').find('h2.name').text());
				if ($('div#addRemoveCreatureToDoNotKillList').length == 0) {
					var doNotKillElement = '<div id="addRemoveCreatureToDoNotKillList"' +
					'" class="description" style="cursor:pointer;text-decoration:underline;color:blue;"></div>';
					$(doNotKillElement).insertAfter($('#dialog-viewcreature').find('p.description'));
				}
				var creatureName = $('#dialog-viewcreature').find('h2.name').text();
				$('div#addRemoveCreatureToDoNotKillList').attr("creatureName",creatureName);
				var extraText = 'Add to the do not kill list';
				if (Helper.doNotKillList.indexOf(creatureName) != -1) extraText = 'Remove from do not kill list';
				$('div#addRemoveCreatureToDoNotKillList').html(extraText)
				document.getElementById('addRemoveCreatureToDoNotKillList').addEventListener('click', Helper.addRemoveCreatureToDoNotKillList, true);
			});

			// add do-not-kill list functionality
			$.subscribe('after-update.actionlist', function(e, data) {
				// color the critters in the do no kill list blue
				$('ul#actionList div.header').each(function() {
					if (Helper.doNotKillList.indexOf($(this).find('a.icon').data('name')) != -1) {
						$(this).css('color','blue')
					}
				});
				// then intercept the action call 
				var gameData = unsafeWindow.GameData;
				var hcs = unsafeWindow.HCS;
				var oldDoAction = gameData.doAction;
				gameData.doAction = function(actionCode, fetchFlags, data){
					if(actionCode === hcs.DEFINES.ACTION.CREATURE_COMBAT){
						// Do custom stuff e.g. do not kill list
						var creatureIcon = $('ul#actionList div.header').eq(data.passback).find('a.icon');
						if (Helper.doNotKillList.indexOf(creatureIcon.data('name')) != -1) {
							creatureIcon.removeClass('loading');
							return;
						}
					}
				   
					// Call standard action
					oldDoAction(actionCode, fetchFlags, data);
				}; 
			});

			$.subscribe(unsafeWindow.DATA_EVENTS.PLAYER_BUFFS.ANY, function(e, data)
			{
				// check shield imp is still active
				var shieldImpVal = 0;
				var ddVal=0;
				var l = data.b.length;
				for(var i=0; i<l; i++)
				{
					var buff = data.b[i];
					if(buff['id']==55)
					{
						shieldImpVal = buff['stack'];
					}else if(buff['id']==50)
					{
						ddVal = buff['level'];
					}
					if(ddVal > 0 && shieldImpVal > 0){
						break;
					}

				}
				if(ddVal>0){
					var imp = $('#actionlist-shield-imp');
					if(shieldImpVal==0){
						imp.css('background-color','red');
					}else if(shieldImpVal==2){
						imp.css('background-color','yellow');
					}else if(shieldImpVal==1){
						imp.css('background-color','orange');
					}else{
						imp.css('background-color','inherit');
					}
				}
				

			});
			$.subscribe('keydown.controls', function(e, key){
				switch(key)
				{
					case 'ACT_REPAIR': unsafeWindow.GameData.fetch(387); break;
				}
			});
			Helper.keepLogs = GM_getValue("keepLogs");
			$.subscribe('2-success.action-response', function(e, data){
				if (Helper.keepLogs) {
					if(data.response.response !== 0) // If bad response do nothing.
					{
						return;
					}
					var combatData = {};
					combatData.combat = $.extend(true, {}, data.response.data); //make a deep copy
					//delete some values that are not needed to trim down size of log.
					delete combatData.combat.attacker.img_url;
					delete combatData.combat.defender.img_url;
					delete combatData.combat.is_conflict;
					delete combatData.combat.is_bounty;
					delete combatData.combat.pvp_rating_change;
					delete combatData.combat.pvp_prestige_gain;
					if(combatData.combat.inventory_id){
						combatData.combat['drop']=combatData.combat.item.id;
					}
					delete combatData.combat.inventory_id;
					delete combatData.combat.item;

					combatData.player={};
					combatData.player.buffs={};
					combatData.player.enhancements={};
					var l = data.player.buffs.length;
					for(var i=0; i<l; i++) //loop through buffs, only need to keep CA and Doubler
					{//54 = ca, 26 = doubler
						var buff = data.player.buffs[i];
						if(buff['id']==54 || buff['id']==26)
						{
							combatData.player.buffs[buff['id']]= parseInt(buff['level']);
						}
					}
					var notSave = '|Breaker|Protection|Master Thief|Protect Gold|Disarm|Duelist|Thievery|Master Blacksmith|Master Crafter|Fury Caster|Master Inventor|Sustain|';//Taking the Not Save in case they add new enhancements.
					if (data.player.enhancements)
					{
						var l = data.player.enhancements.length;
						for(var i=0; i<l; i++) //loop through enhancements
						{//54 = ca, 26 = doubler
							var enh = data.player.enhancements[i];
							if (notSave.indexOf('|'+enh.name+'|')==-1){
								combatData.player.enhancements[enh.name]=enh.value;
							}
						}
					}
					//combatData.player.enhancements = data.player.enhancements;
					//combatData.player.buffs = data.player.buffs;
					var now=new Date();
					combatData.time=System.formatDateTime(now);
					Helper.appendSavedLog("," + JSON.stringify(combatData));
				}
			});
			//on world

			if(unsafeWindow.initialGameData){//HCS initial data
				setTimeout(function(){Helper.injectWorldNewMap(unsafeWindow.initialGameData);},400);
			}
			$.subscribe('-1-success.action-response 5-success.action-response', function(e, data){ //change of information
				setTimeout(function(){Helper.injectWorldNewMap(data);},400);
			});

			//somewhere near here will be multi buy on shop
			//$.subscribe('prompt.worldDialogShop', function(e, data){
				//self._createShop(self.shop.items);
			//	$('span[class="price"]').after('<span class="numTake">test</span>');
			//});

			//document.getElementById('Helper:SendGold').addEventListener('click', Helper.sendGoldToPlayer, true);

		}else{
			//not new map.

			try {
				var curTile = System.findNode("//img[contains(@title, 'You are here')]/ancestor::td[@width='40' and @height='40']").getAttribute("background");
				if (GM_getValue("currentTile") != curTile) {
					GM_setValue("currentTile", curTile);
				}
			} catch (err) {
				//just eat it and move on
			}
			if (isNewUI == 1) var currentLocation = $('h3#world-realm-name');
			//else var currentLocation = $('td[background*="/realm_top_b4.jpg"]');
			if (currentLocation.length > 0) {
				var locationRE = /\((\d+), (\d+)\)/.exec(currentLocation.text());
				Helper.xLocation = parseInt(locationRE[1],10);
				Helper.yLocation = parseInt(locationRE[2],10);
			}

			Helper.mapThis();
			Helper.showMap(false);

			var buttonRow = System.findNode("//tr[td/a/img[@title='Open Realm Map']]");

			if (buttonRow && GM_getValue("sendGoldonWorld")){
				currentGoldSentTotal = System.addCommas(GM_getValue("currentGoldSentTotal"));
				var recipient_text = "Send " + GM_getValue("goldAmount") + " gold to " + GM_getValue("goldRecipient") +
					". Current gold sent total is " + currentGoldSentTotal;
				buttonRow.innerHTML += '<td valign="top" width="5"></td>' +
					'<td valign="top"><img style="cursor:pointer" id="Helper:SendGold" src="' + System.imageServer +
					'/skin/gold_button.gif" title= "' + recipient_text + '" border="1" />';
			}

			if (buttonRow && !GM_getValue("hideKrulPortal")) {
				buttonRow.innerHTML += '<td valign="top" width="5"></td>' +
					'<td valign="top"><img style="cursor:pointer" id="Helper:PortalToStart" src="' + System.imageServer +
					'/temple/3.gif" title="Instant port to Krul Island" border="1" /></span></td>';
			}

			var footprints = GM_getValue("footprints");

			if (buttonRow) {
				buttonRow.innerHTML += '<td valign="top" width="5"></td>' +
					'<td valign="top"><img style="cursor:pointer" id="Helper:ToggleFootprints" src="' + System.imageServer +
					'/skin/' + (footprints?'quest_complete':'quest_incomplete') + '.gif" title="Toggle Footprints" border="0"></td>';
				document.getElementById('Helper:ToggleFootprints').addEventListener('click', Helper.toggleFootprints, true);
			}

			if (buttonRow && GM_getValue("sendGoldonWorld")){
				//document.getElementById('Helper:PortalToStart').addEventListener('click', Helper.portalToStartArea, true);
				document.getElementById('Helper:SendGold').addEventListener('click', Helper.sendGoldToPlayer, true);
			}
			if (buttonRow && !GM_getValue("hideKrulPortal")) {
				document.getElementById('Helper:PortalToStart').addEventListener('click', Helper.portalToStartArea, true);
			}

			// One may ask why the separation of creating the button and the event handling code.
			// Well, obviously (so obvious it took me 3 hours to figure out), when you change the HTML of
			// a region, all attached events are destroyed (because the original elements are also destroyed)
			
			// PH 20150110 Only in Chrome. FF is apparently different!
			// It's important because we lose the mouseover events of the built-in buttons.

			Helper.checkBuffs();
			Helper.prepareCheckMonster();
			Helper.prepareCombatLog();
			if (isNewUI == 1) {
				var mapName = System.findNode('//h3[@id="world-realm-name"]');
				if ($('h3#world-realm-name').data('realm')) {
					var realmId = $('h3#world-realm-name').data('realm').id.trim();
					var mapNameText = $('h3#world-realm-name').data('realm').name.trim();
				}
			} else {
				var mapName = System.findNode('//td[contains(@background,"/skin/realm_top_b2.jpg")]/center/nobr');
			}
			//Checking if there are quests on current map - Already done by HCS in new map
			if (GM_getValue("checkForQuestsInWorld") === true) {
				if (mapName && mapName.textContent !== null) {
					if (!mapNameText) mapNameText = mapName.textContent.trim();
					if (GM_getValue("lastWorld") != mapNameText ||
						GM_getValue("questsNotStarted") === true ||
						GM_getValue("questsNotComplete") === true) {
						GM_setValue("lastWorld", mapNameText);
						var insertToHere = System.findNode("//html/body/table/tbody/tr[3]/td[2]/table/tbody/tr[5]/td[2]/table/tbody/tr[3]/td/table/tbody/tr[4]/td");
						System.xmlhttp("index.php?cmd=questbook&mode=2&letter=*", Helper.checkForNotStartedQuests, {"insertHere" : insertToHere});
						System.xmlhttp("index.php?cmd=questbook&mode=0&letter=*", Helper.checkForNotCompletedQuests,{"insertHere" : insertToHere});
					}
				}
			}
			//quest tracker - will be added by HCS in new Map
			var questBeingTracked = GM_getValue("questBeingTracked").split(";");
			if (questBeingTracked.length > 0 & questBeingTracked[0].trim().length > 0) {
				var injectHere = System.findNode("//div[table[@class='centered' and @style='width: 270px;']]");
				if (!injectHere) {return;}
				var replacementText = "<td background='" + System.imageServer + "/skin/realm_right_bg.jpg'>";
				replacementText += "<table width='280' cellpadding='1' style='margin-left:28px; margin-right:28px; " +
					"font-size:medium; border-spacing: 1px; border-collapse: collapse;'>";
				replacementText += "<tr><td colspan='2' height='10'></td>";
				for (var i = 0; i < questBeingTracked.length; i++) {

					replacementText += "<tr><td style='font-size:small; color:black'><a id='qiLink" + i + "' href=" + questBeingTracked[i] + "></a>&nbsp;";
					replacementText += "<input id='dontTrackThisQuest" + i + "' data='" + questBeingTracked[i] + "' type='button' value='Stop Tracking' title='Stops tracking quest progress.' class='custombutton'><br>";
					replacementText += "<span findme='questinfo" + i + "'></span></td></tr>";
					if (i != questBeingTracked.length - 1) {
						replacementText += '<tr><td height="10" colspan="2"/></tr>' +
						'<tr><td height="10" colspan="2"/></tr>';
					}
				}

				replacementText += "</table>";
				replacementText += "</td>";

				var newSpan = document.createElement("SPAN");
				newSpan.innerHTML=replacementText;
				injectHere.appendChild(newSpan);

				for (i = 0; i < questBeingTracked.length; i++) {
					System.xmlhttp(questBeingTracked[i], Helper.getQuestInfo, {"data" : i});
				}
			}

			if (mapName && mapNameText) {
				mapName.innerHTML += ' <a href="http://guide.fallensword.com/index.php?cmd=realms&subcmd=view&realm_id=' + realmId + '" target="_blank">' +
					'<img border=0 title="Search map in Ultimate FSG" width=10 height=10 src="'+ System.imageServer + '/temple/1.gif"/></a>';
				mapName.innerHTML += ' <a href="http://wiki.fallensword.com/index.php/Special:Search?search=' + mapNameText + '&go=Go" target="_blank">' +
					'<img border=0 title="Search map in Wiki" width=10 height=10 src="/favicon.ico"/></a>';

				var huntingMode = GM_getValue("huntingMode");
				var imgSource = huntingMode === true ? Data.huntingOnImage() : Data.huntingOffImage();
				var altText = huntingMode === true ? "Hunting mode is ON" : "Hunting mode is OFF";
				mapName.innerHTML += " <a href=# id='Helper:ToggleHuntingMode'><img title='" + altText + "' src='" + imgSource + "' border=0 width=10 height=10/></a>";

				if (GM_getValue("showSpeakerOnWorld")) {
					if (GM_getValue("playNewMessageSound"))
					{
						mapName.innerHTML += '<a href="#" id="toggleSoundLink"><img border=0 title="Turn Off Sound when you have a new log message" width=10 height=10 src="' + Data.soundMuteImage() + '"/></a>';
					} else {
						mapName.innerHTML += '<a href="#" id="toggleSoundLink"><img border=0 title="Turn On Sound when you have a new log message" width=10 height=10 src="' + Data.soundImage() + '"/></a>';
					}
					document.getElementById("toggleSoundLink").addEventListener("click", Helper.toggleSound, true);

				}
				if (GM_getValue("showFastWalkIconOnWorld")) {
					var enableFastWalk = GM_getValue("enableFastWalk");
					var imgSource = enableFastWalk === true ? Data.runIcon() : Data.stopIcon();
					var altText = enableFastWalk === true ? "FastWalk mode is ON" : "FastWalk mode is OFF";
					mapName.innerHTML += " <a href=# id='Helper:ToggleFastWalkMode'><img title='" + altText + "' src='" + imgSource + "' border=0 width=10 height=10/></a>";
					document.getElementById('Helper:ToggleFastWalkMode').addEventListener('click',
						function() {
							GM_setValue("enableFastWalk",!GM_getValue("enableFastWalk")); window.location.reload();
						},true);
				}
				document.getElementById('Helper:ToggleHuntingMode').addEventListener('click',
					function() {
						GM_setValue("huntingMode",!GM_getValue("huntingMode")); window.location.reload();
					},true);

			}
			
			if (GM_getValue("quickKill")) {
				var doNotKillList = GM_getValue("doNotKillList");
				var doNotKillListAry = doNotKillList.split(",");
				if (doNotKillListAry.length > 0) {
					for (i=1; i<9; i++) {
						var monster = System.findNode("//a[@id='aLink" + i + "']");
						if (monster) {
							if (isNewUI == 1) var monsterName = monster.parentNode.parentNode.firstChild.textContent.trim();
							else var monsterName = monster.parentNode.parentNode.previousSibling.textContent.trim();
							for (var j=0; j<doNotKillListAry.length; j++) {
								var doNotKillName = doNotKillListAry[j].trim();
								if (monsterName == doNotKillName){
									if (isNewUI) var monsterNameCell = monster.parentNode.parentNode;
									else var monsterNameCell = monster.parentNode.parentNode.previousSibling;
									monsterNameCell.innerHTML = '<span style="color:blue;">' + monsterNameCell.innerHTML + '</span>';
									break;
								}
							}
						}
						else
							break;
					}
				}
			}
		}


	},

	fixOnlineGuildBuffLinks: function() {
		if (isNewUI == 1) {
			$('a[href*="index.php?cmd=quickbuff&t="]').each(function() {
				$(this).attr('href',$(this).attr('href').replace(/500/g,'1000'));
			});
		} else {
			var guildInfoOnlineMembersTable = System.findNodes("//tr[td/a[contains(@href,'index.php?cmd=quickbuff&t=')]/font[.='B']]");
			if (guildInfoOnlineMembersTable) {
				for (var i=0; i<guildInfoOnlineMembersTable.length; i++){
					var guildInfoOnlineMember = guildInfoOnlineMembersTable[i];
					var playerLink = System.findNode("./td/table/tbody/tr/td/a[contains(@href,'index.php?cmd=profile&player_id=')]", guildInfoOnlineMember);
					var playerID = /player_id=(\d+)/.exec(playerLink)[1];
					var buffLink = System.findNode("./td/a[contains(@href,'index.php?cmd=quickbuff&t=')]", guildInfoOnlineMember);
					var oldHref = buffLink.getAttribute('href');
					var playerName = /cmd=quickbuff\&t=([,a-zA-Z0-9]+)'/.exec(oldHref);
					buffLink.setAttribute('href', "javascript:openWindow('index.php?cmd=quickbuff&tid=" + playerID + "', 'fsQuickBuff', 618, 1000, ',scrollbars')");
				}
			}
		}
	},

	addGuildInfoWidgets: function() {
		if (!GM_getValue("enableGuildInfoWidgets")) {return;}
		var hideGuildInfoTrade = GM_getValue("hideGuildInfoTrade");
		var hideGuildInfoSecureTrade = GM_getValue("hideGuildInfoSecureTrade")
		var hideGuildInfoBuff = GM_getValue("hideGuildInfoBuff")
		var hideGuildInfoMessage = GM_getValue("hideGuildInfoMessage")
		var hideBuffSelected = GM_getValue("hideBuffSelected");
		if (isNewUI == 1) {
			var guildMemberList = $('ul#minibox-guild-members-list');
			if (guildMemberList.length > 0) { // list exists
				//hide guild info links
				if (hideGuildInfoTrade) $('a#guild-minibox-action-trade').hide();
				if (hideGuildInfoSecureTrade) $('a#guild-minibox-action-secure-trade').hide();
				if (hideGuildInfoBuff) $('a#guild-minibox-action-quickbuff').hide();
				if (hideGuildInfoMessage) $('a#guild-minibox-action-send-message').hide();
				//add coloring for offline time
				$(guildMemberList).find('li.player').each(function() {
					var playerA = $(this).find('div.player-row a.player-name');
					var playerName = playerA.text();
					var onMouseOver = playerA.data('tipped');
					var lastActivityMinutes = /Last Activity:<\/td><td>(\d+) mins/.exec(onMouseOver)[1];
						if (lastActivityMinutes < 2) playerA.css('color','green');
						else if (lastActivityMinutes < 5) playerA.css('color','white');
						else playerA.css('color','gray');
				});
				var chatH4 = $('h4:contains("Chat")');
				chatH4.html('<a href="index.php?cmd=guild&subcmd=chat"><span style="color:white;">' + chatH4.html() + '</span></a>');
			}
		} else {
			var onlineMembersTable = System.findNode("//table/tbody/tr/td[font/i/b[.='Online Members']]//table");
			if (onlineMembersTable) {
				for (var i=0; i<onlineMembersTable.rows.length; i++){
					var onlineMemberFirstCell = onlineMembersTable.rows[i].cells[0];
					var onlineMemberSecondCell = onlineMembersTable.rows[i].cells[1];
					if (onlineMemberSecondCell) {
						var playerTable = onlineMemberFirstCell.getElementsByTagName('TABLE')[0];
						var checkboxColumn = playerTable.rows[0].cells[0];
						if (hideBuffSelected) checkboxColumn.innerHTML = '';
						var playernameColumn = playerTable.rows[0].cells[1];
						var playerNameLinkElement = playernameColumn.firstChild;
						//var onMouseOver = playerNameLinkElement.getAttribute("onmouseover");
						var onMouseOver = $(playerNameLinkElement).data('tipped');
						var lastActivityMinutes = /Last Activity:<\/td><td>(\d+) mins/.exec(onMouseOver)[1];
						//Hide the Guild info Links
						if (hideGuildInfoTrade) {
							var messageLink = onlineMemberSecondCell.firstChild.nextSibling;
							var buffLink = messageLink.nextSibling.nextSibling;
							var secureTradeLink = buffLink.nextSibling.nextSibling;
							var tradeLink = secureTradeLink.nextSibling.nextSibling;
							tradeLink.style.display = 'none';
							tradeLink.style.visibility = 'hidden';
						}
						if (hideGuildInfoSecureTrade) {
							messageLink = onlineMemberSecondCell.firstChild.nextSibling;
							buffLink = messageLink.nextSibling.nextSibling;
							secureTradeLink = buffLink.nextSibling.nextSibling;
							secureTradeLink.style.display = 'none';
							secureTradeLink.style.visibility = 'hidden';
						}
						if (hideGuildInfoBuff) {
							messageLink = onlineMemberSecondCell.firstChild.nextSibling;
							buffLink = messageLink.nextSibling.nextSibling;
							buffLink.style.display = 'none';
							buffLink.style.visibility = 'hidden';
						}
						if (hideGuildInfoMessage) {
							messageLink = onlineMemberSecondCell.firstChild.nextSibling;
							if (messageLink.style) {
								messageLink.style.display = 'none';
								messageLink.style.visibility = 'hidden';
							}
						}

						// Set Color for Activity
						if (lastActivityMinutes < 2) {
							playerNameLinkElement.style.color = 'green';
							playerNameLinkElement.firstChild.style.color = 'green';
						} else if (lastActivityMinutes < 5) {
							playerNameLinkElement.style.color = 'white';
							playerNameLinkElement.firstChild.style.color = 'white';
						} else {
							playerNameLinkElement.style.color = 'gray';
							playerNameLinkElement.firstChild.style.color = 'gray';
						}
						onlineMemberSecondCell.innerHTML = '<nobr>' + onlineMemberSecondCell.innerHTML + '</nobr>';
					}
				}
				if (hideBuffSelected) {
					var lineBreak = onlineMembersTable.nextSibling.nextSibling;
					if (lineBreak) {
						lineBreak.style.display = 'none';
						var actionsFontItalic = lineBreak.nextSibling.nextSibling.firstChild;
						actionsFontItalic.style.display = 'none';
						var buffSelectedTable = actionsFontItalic.nextSibling.nextSibling;
						buffSelectedTable.style.display = 'none';
					}
				}
				// old UI
				var chatText = System.findNode("//b[contains(.,'Last 5')]");
				if (chatText) chatText.innerHTML = '<a href="index.php?cmd=guild&subcmd=chat"><span style="color:white;">' + chatText.innerHTML + '</span></a>';
			}
		}
	},

	addOnlineAlliesWidgets: function() {
		if (!GM_getValue("enableOnlineAlliesWidgets")) {return;}
		if (isNewUI == 1) {
			var onlineAlliesList = $('ul#minibox-allies-list');
			if (onlineAlliesList.length > 0) { // list exists
				//add coloring for offline time
				$(onlineAlliesList).find('li.player').each(function() {
					var playerA = $(this).find('a[class*="player-name"]');
					var playerName = playerA.text();
					var onMouseOver = playerA.data('tipped');
					var lastActivityMinutes = /Last Activity:<\/td><td>(\d+) mins/.exec(onMouseOver)[1];
						if (lastActivityMinutes < 2) playerA.css('color','DodgerBlue');
						else if (lastActivityMinutes < 5) playerA.css('color','LightSkyBlue');
						else playerA.css('color','PowderBlue');
				});
			}
		} else {
			var onlineAlliesTable = System.findNode("//table/tbody[tr/td/font/b[.='Online Allies']]//table");
			var hideBuffSelected = GM_getValue("hideBuffSelected");
			if (onlineAlliesTable) {
				for (var i=0; i<onlineAlliesTable.rows.length; i++){
					var onlineAlliesFirstCell = onlineAlliesTable.rows[i].cells[0];
					var onlineAlliesSecondCell = onlineAlliesTable.rows[i].cells[1];
					if (onlineAlliesSecondCell) {
						var playerTable = onlineAlliesFirstCell.getElementsByTagName('TABLE')[0];
						var checkboxColumn = playerTable.rows[0].cells[0];
						if (hideBuffSelected) checkboxColumn.innerHTML = '';
						var playernameColumn = playerTable.rows[0].cells[1];
						var playerNameLinkElement = playernameColumn.firstChild;
						//var onMouseOver = playerNameLinkElement.getAttribute("onmouseover");
						var onMouseOver = $(playerNameLinkElement).data('tipped');
						var lastActivityMinutes = /Last Activity:<\/td><td>(\d+) mins/.exec(onMouseOver)[1];
						// Set Color for Activity
						if (lastActivityMinutes < 2) {
							playerNameLinkElement.style.color = 'DodgerBlue';
							playerNameLinkElement.firstChild.style.color = 'DodgerBlue';
						} else if (lastActivityMinutes < 5) {
							playerNameLinkElement.style.color = 'LightSkyBlue';
							playerNameLinkElement.firstChild.style.color = 'LightSkyBlue';
						} else {
							playerNameLinkElement.style.color = 'PowderBlue';
							playerNameLinkElement.firstChild.style.color = 'PowderBlue';
						}
						onlineAlliesSecondCell.innerHTML = '<nobr>' + onlineAlliesSecondCell.innerHTML + '</nobr>';
					}
				}
				if (hideBuffSelected) {
					var lineBreak = onlineAlliesTable.nextSibling.nextSibling;
					if (lineBreak) {
						lineBreak.style.display = 'none';
						var actionsFont = lineBreak.nextSibling.nextSibling;
						actionsFont.style.display = 'none';
						var buffSelectedTable = actionsFont.nextSibling.nextSibling;
						buffSelectedTable.style.display = 'none';
					}
				}
			}
		}
	},

	injectWorldMap: function() {
		var playerTile=System.findNode("//img/ancestor::td[@background]");
		if (playerTile) {
			Helper.xLocation = playerTile.cellIndex;
			Helper.yLocation = playerTile.parentNode.rowIndex;
		}
		Helper.showMap(true);
	},

	retrieveTradeConfirm: function() {
		var xcNumber;
		xcNumber=System.findNode("//input[@type='hidden' and @name='xc']");
		xcNumber=xcNumber?xcNumber.getAttribute("value"):"-";
		GM_setValue("goldConfirm", xcNumber);
	},

	sendGoldToPlayer: function(){
//		var injectHere = System.findNode("//div[table[@class='centered' and @style='width: 270px;']]");
//		if (!injectHere) {return;}
		var recipient = GM_getValue("goldRecipient");
		var amount = GM_getValue("goldAmount");
		//System.xmlhttp('index.php?cmd=trade');
		var xcNum = GM_getValue("goldConfirm");
		if (xcNum === "") {
			window.alert("You have to visit the trade page once to use the send gold functionality");
			return;
		}
		var url = 'index.php?cmd=trade&subcmd=sendgold&xc=' + xcNum + '&target_username=' + recipient +'&gold_amount='+ amount;
		System.xmlhttp(url, Helper.goldToPlayerSent, {"amount": amount, "recipient": recipient} );
	},

	goldToPlayerSent: function(responseText, callback) {
		var info = Layout.infoBox(responseText);
		if (info==="" || info==="You successfully sent gold!") {
			var currentGoldSentTotal = GM_getValue("currentGoldSentTotal")*1;
			currentGoldSentTotal += System.intValue(callback.amount);
			info = 'You successfully sent ' + callback.amount + ' gold to ' + callback.recipient + '! Current total sent is '+currentGoldSentTotal+' gold.';
			GM_setValue("currentGoldSentTotal", currentGoldSentTotal);
		}
		var injectHere = System.findNode("//div[table[@class='centered' and @style='width: 270px;']]");
		if (!injectHere) {return;}
		var newSpan = document.createElement("SPAN");
		injectHere.appendChild(newSpan);
		newSpan.setAttribute("background", System.imageServer + "/skin/realm_right_bg.jpg");
		newSpan.innerHTML='<div style="margin-left:28px; margin-right:28px; color:navy; font-size:xx-small;">' + info + '</div>';
	},

	insertQuickWear: function(content) {
		Helper.itemList = {};
		if (!content) var content=Layout.notebookContent();
		content.innerHTML="Getting item list from: ";
		System.xmlhttp("/index.php?cmd=profile&subcmd=dropitems&folder_id=-1", Helper.getItemFromBackpack, {"inject":content,"id":0});
	},

	getItemFromBackpack: function(responseText, callback) {
		var layout=callback.inject;
		layout.innerHTML+="backpack folder "+(callback.id+1)+", ";
		var doc=System.createDocument(responseText);
		if (responseText.indexOf('Back to Profile') > 0){
			Helper.retrieveItemInfor(doc);
		}
		var folderNodes=System.findNodes("//a[contains(@href,'cmd=profile&subcmd=dropitems&folder_id=')]",doc);
		if (folderNodes && folderNodes.length > 0 && callback.id < folderNodes.length - 1)
			System.xmlhttp(folderNodes[callback.id+1].getAttribute("href"),
				Helper.getItemFromBackpack, {"inject":layout,"id":callback.id+1});
		else
			System.xmlhttp("/index.php?cmd=guild&subcmd=inventory&subcmd2=storeitems",
				Helper.getItemFromStoreItemPage, callback);
	},

	getItemFromStoreItemPage: function(responseText, callback) {
		var layout=callback.inject;
		layout.innerHTML+="store item page.";
		var doc=System.createDocument(responseText);
		if (responseText.indexOf('Store Items') > 0){
			Helper.retrieveItemInfor(doc);
		}
		Helper.showQuickWear(callback);
	},

	showQuickWear: function(callback) {
		var output='<div id="invTabs"><ul>'+
			'<li><a href="#invTabs-qw">Quick Wear / Use / Extract <br/>Manager</a></li>'+
			'<li><a href="#invTabs-ah">Inventory Manager Counter<br/>filtered by AH Quick Search</a></li></ul>'+
			'<div id="invTabs-qw"><table width=100%><tr style="background-color:#CD9E4B;"><td nobr><b>Quick Wear / Use / Extract Manager</b></td></tr></table>'+
			'<table width=100%><tr><th width=20%>Actions</th><th colspan=4>Items</th></tr>';
		for (var key in Helper.itemList) {
			var itemID=Helper.itemList[key].id;
			output+='<tr><td align=center>'+
				'<span style="cursor:pointer; text-decoration:underline; color:#blue; font-size:x-small;" '+
				'id="Helper:equipProfileInventoryItem' + itemID + '" ' +
				'itemID="' + itemID + '">Wear</span>&nbsp;|&nbsp;' +
				'<span style="cursor:pointer; text-decoration:underline; color:#blue; font-size:x-small;" '+
				'id="Helper:useProfileInventoryItem' + itemID + '" ' +
				'itemID="' + itemID + '">Use/Ext</span>'+
				'</td>'+Helper.itemList[key].html+'</tr>';
		}
		output+='</table></div><div id="invTabs-ah"></div></div>';
		callback.inject.innerHTML=output;
		for (key in Helper.itemList) {
			itemID=Helper.itemList[key].id;
			document.getElementById('Helper:equipProfileInventoryItem' + itemID).
				addEventListener('click', Helper.equipProfileInventoryItem, true);
			document.getElementById('Helper:useProfileInventoryItem' + itemID).
				addEventListener('click', Helper.useProfileInventoryItem, true);
		}
		$("#invTabs").tabs();
		$("#invTabs").tabs('select', 0);
		Helper.showAHInvManager("#invTabs-ah");
	},

	showAHInvManager: function(injectId) {
		var output = 'Note that clicking on Show AH Price might reset your AH Search Preference (min/max Lvl, min/max Forge)<br/>'+
			'<table width=100% cellspacing=2 cellpadding=2>'+
			'<tr><th colspan=5 align=right>[<span id=showAhPrice style="cursor:pointer; color:yellow">Show AH Price</span>]</td>'+
			'<tr><th colspan=5 align=center>Items from <a href="index.php?cmd=notepad&blank=1&subcmd=auctionsearch">AH Quick Search</a> found in your inventory</td>'+
			'<tr><th>Name</th><th>Nick Name<th>Inv Count</th><th>AH Min Price</th><th>AH BuyNow Price</th></tr>';
		var invCount = {}, name;
		var quickSL = System.getValueJSON("quickSearchList");
		// fill up the Inv Counter
		for (var key in Helper.itemList) {
			name = Helper.itemList[key].html.match(/<td width="90%">&nbsp;(.*)<\/td>/)[1];
			if (invCount[name])
				invCount[name].count++;
			else
				invCount[name]={'count':1,'nicknameList':''};
			for (var i = 0; i<quickSL.length; i++) {
				if (name.indexOf(quickSL[i].searchname)>=0 && invCount[name].nicknameList.indexOf(quickSL[i].nickname) < 0) {
					invCount[name].nicknameList += '<a href=\"index.php?cmd=auctionhouse&type=-1&search_text='+quickSL[i].searchname+'\">'+quickSL[i].nickname+'</a> ';
					quickSL[i].found = true;
				}
			}
		}
		// show inv & counter for item with nickname found
		for (var key in invCount) {
			if (invCount[key].nicknameList != '')
				output += '<tr><td>'+key+'</td><td>'+invCount[key].nicknameList+'</td><td>'+invCount[key].count+'</td><td></td><td></td><td></td></tr>';
		}
		// show item from quick AH search that are not in our inv
		output += '</td></tr><tr><td colspan=5><hr></td></tr>';
		output += '<tr><td>Did not find:</td><td colspan=4>';
		for (var i=0; i<quickSL.length; i++) {
			if (quickSL[i].displayOnAH && !quickSL[i].found)
				output += '<a href=\"index.php?cmd=auctionhouse&type=-1&search_text='+quickSL[i].searchname+'\">'+quickSL[i].nickname+'</a>, ';
		}
		output += '</td></tr><tr><td colspan=5><hr></td></tr>'+
			'<tr><th colspan=5 align=center>Items NOT from <a href="index.php?cmd=notepad&blank=1&subcmd=auctionsearch">AH Quick Search</a> found in your inventory</td>';
		// show inv & counter for item with nickname NOT found
		for (var key in invCount) {
			if (invCount[key].nicknameList == '')
				output += '<tr><td>'+key+'</td><td>'+invCount[key].nicknameList+'</td><td>'+invCount[key].count+'</td><td></td><td></td><td></td></tr>';
		}
		output += '</table>';
		$(injectId).html(output);
		$('#showAhPrice').click(Helper.showAHPrice);
	},

	showAHPrice: function() {
		//index.php?cmd=auctionhouse&order_by=1&search_text=Potion of Black Death&pref_save=1&pref_hidegold=1
		// inter-exchange pref_hidegold and pref_hidefsp to get the price
		// feel free to implement this :)
		alert('dkwizard is a bit busy, but completing this new feature is definitely high in his TODO list, stay tuned :)');
	},

	insertQuickExtract: function(content) {
		Helper.itemList = {};
		if (!content) var content=Layout.notebookContent();
		$.ajax({
			url: '?cmd=export&subcmd=inventory',
			success: function( data ) {
				Helper.inventory = data;
			},
			async: false, //wait for responce
			dataType: 'json'
		});
		//Helper.inventory.items = Helper.inventory.items.filter(function(e) {return e.type==12;});//type=plants
		content.innerHTML='<table width=100%><tr style="background-color:#CD9E4B;"><td nobr><b>Quick Extract</b></td></tr></table>'+
		'Select which type of plants you wish to extract all of.  Only select extractable resources.<br/>'+
		'<label id="Helper:useItemsInStCont"><input type="checkbox" id="Helper:useItemsInSt" checked /> Select items in ST</label>' +
		'<label id="Helper:useItemsInMainCont"><input type="checkbox" id="Helper:useItemsInMain" checked /> Only extract items in Main Folder</label>' +
		'<table width=100% id="Helper:ExtTable"></table>';

		$('label,input[id*="Helper:useItemsIn"]').click(Helper.showQuickExtract);
		Helper.showQuickExtract();
	},

	showQuickExtract: function() {

		var table = $('table[id="Helper:ExtTable"]');
		table.children().remove();//empty table for re-population.
		Helper.resourceList={}; //reset resourceList
		var selectST= $('input[id="Helper:useItemsInSt"]').is(':checked');
		var selectMain= $('input[id="Helper:useItemsInMain"]').is(':checked');

		table.append('<tr><th width=20%>Actions</th><th>Items</th></tr><tr><td id="buy_result" colspan=2></td></tr>');
		//for (var key in Helper.inventory.items) {
		for (var i=0; i<Helper.inventory.items.length;i++) {
			var item = Helper.inventory.items[i];
			if(selectMain && item.folder_id!=-1){ continue;}
			if(!selectST && item.is_in_st){ continue;}
			if (Helper.resourceList[item.item_id]){
				Helper.resourceList[item.item_id].invIDs+=","+item.inv_id;
				Helper.resourceList[item.item_id].count++;
			}
			else {
				Helper.resourceList[item.item_id]={'count':1,'invIDs':item.inv_id,'first_item':item};
			}
		}

		for (var id in Helper.resourceList) {
			var res=Helper.resourceList[id];
			var item=res.first_item;
			table.append('<tr><td align=center>'+
				'<span style="cursor:pointer; text-decoration:underline; color:#blue; font-size:x-small;" '+
				'id="Helper:extractAllSimilar' + id + '" invIDs="'+res.invIDs+'">Extract all '+res.count +'</span></td> ' +
				'<td><img src="'+System.imageServerHTTP+'/items/'+item.item_id+'.gif" class="tipped" data-tipped-options="skin: \'fsItem\'"' + 
				'data-tipped="fetchitem.php?item_id='+item.item_id+'&inv_id='+item.inv_id+'&t=1&p='+Helper.inventory.player_id+'" border=0>' + '</td><td>'+item.item_name+'</td></tr>');;
		}

		for (id in Helper.resourceList) {
			document.getElementById('Helper:extractAllSimilar' + id).
				addEventListener('click', Helper.extractAllSimilar, true);
			}
	},

	extractAllSimilar: function(evt) {
		if (!window.confirm("Are you sure you want to extract all similar items?")) {return;}
		var InventoryIDs=evt.target.getAttribute("invIDs").split(",");
		//evt.target.parentNode.innerHTML = InventoryIDs;
		var output= '';
		evt.target.parentNode.innerHTML = 'extracting all ' + InventoryIDs.length + ' resources';
		for (var i=0; i<InventoryIDs.length; i++){
			//output+='index.php?cmd=profile&subcmd=useitem&inventory_id='+InventoryIDs[i]+'<br>';
			System.xmlhttp('index.php?cmd=profile&subcmd=useitem&inventory_id='+InventoryIDs[i], Helper.quickDoneExtracted);
		}
		//evt.target.parentNode.innerHTML = output;
	},

	quickDoneExtracted: function(responseText) {
		var infoMessage = Layout.infoBox(responseText);
		document.getElementById('buy_result').innerHTML+="<br />"+infoMessage;
	},

	retrieveItemInfor: function(doc) {
		$(doc).find('div#pCC').find('input[name="removeIndex[]"]').each(function(index){
			var item={
				"id": $(this).attr('value'),
				"html": $(this).closest('tr').html().replace(/<input[^>]*>/g, '')
				};
			Helper.itemList["id"+item.id]=item;
		});
	},

	toggleFootprints: function() {
		var footprints = GM_getValue("footprints");
		if (footprints == undefined) footprints=false;
		footprints = !footprints;
		GM_setValue("footprints", footprints);

		if (!footprints) { // clear footprints
			var theMap = System.getValueJSON("map");
			if (isNewUI == 1) {
				var realm = System.findNode('//h3[@id="world-realm-name"]');
				if ($('h3#world-realm-name').data('realm')) {
					var realmId = $('h3#world-realm-name').data('realm').id.trim();
					var levelName = $('h3#world-realm-name').data('realm').name.trim();
				}
			} else {
				var realm = System.findNode("//td[contains(@background,'/skin/realm_top_b2.jpg')]/center/nobr/b");
			}
			if (!levelName) var levelName=realm.innerHTML;
			Helper.levelName = levelName;
			theMap["levels"][Helper.levelName]={};
			System.setValueJSON("map", theMap);
		}

		document.getElementById('Helper:ToggleFootprints').src =
			System.imageServer +
			'/skin/' + (footprints?'quest_complete':'quest_incomplete') + '.gif';
	},

	prepareCombatLog: function() {
		//if (!GM_getValue("showCombatLog")) {return;}
		var reportsTable=System.findNode("//div[table[@class='centered' and @style='width: 270px;']]");
		if (!reportsTable) {return;}
		var tempLog=document.createElement("div");
		tempLog.id="reportsLog";
		var injLog=reportsTable.appendChild(tempLog);
		var is=injLog.style;
		is.color = 'black';
		is.backgroundImage='url(' + System.imageServerHTTP + '/skin/realm_right_bg.jpg)';
		is.maxHeight = '240px';
		is.width = '277px';
		is.maxWidth = is.width;
		is.marginLeft = '0px';
		is.marginRight = '0px';
		is.paddingLeft = '26px';
		is.paddingRight = '24px';
		is.overflow = 'hidden';
		is.fontSize = 'xx-small';
		is.textAlign = 'justify';
	},

	getMonster: function(index) {
		return System.findNode("//a[@id='aLink" + index + "']");
	},

	killSingleMonster: function(monsterNumber) {
		if (!GM_getValue("quickKill")) {return;}
		var kills=0;
		var monster = Helper.getMonster(monsterNumber);

		var doNotKillList = GM_getValue("doNotKillList");
		var doNotKillListAry = doNotKillList.split(",");

		if (monster) {
			if (isNewUI == 1) var monsterName = monster.parentNode.parentNode.textContent.trim();
			else var monsterName = monster.parentNode.parentNode.previousSibling.textContent.trim();
			var injectHere = monster.parentNode.parentNode;
			var monsterFound = false;
			for (var j=0; j<doNotKillListAry.length; j++) {
				var doNotKillName = doNotKillListAry[j].trim();
				if (monsterName == doNotKillName){
					injectHere.innerHTML = '<nobr><span style="color:blue; font-size:x-small;">On do not kill list&nbsp;</span></nobr>';
					monsterFound = true;
					break;
				}
			}
			if (!monsterFound) {
				kills+=1;
				System.xmlhttp(monster.getAttribute("href"), Helper.killedMonster, {"node": monster, "index": monsterNumber});
			}
		}
	},

	prepareCheckMonster: function() {
		Helper.colorMonsters();
		Helper.getMonsterInfo();
	},

	colorMonsters: function() {
		if (!GM_getValue("enableCreatureColoring")) {return;}
		monsters = System.findNodes("//a[contains(@href,'cmd=combat') and not(contains(@href,'max_turns='))]");
		if (!monsters) {return;}
		for (var i=0; i<monsters.length; i++) {
			var monster = monsters[i];
			if (monster) {
				// add monster color based on elite types
				var monsterText = monster.parentNode.parentNode.parentNode.cells[1];
				if (monsterText.textContent.match(/\(Champion\)/i))
					monsterText.style.color = 'green';
				if (monsterText.textContent.match(/\(Elite\)/i))
					monsterText.style.color = 'yellow';
				if (monsterText.textContent.match(/\(Super Elite\)/i))
					monsterText.style.color = 'red';
			}
		}
	},

	getMonsterInfo: function() {
		if (!GM_getValue("showCreatureInfo")) {return;}
		var monsters = System.findNodes("//a[contains(@href,'cmd=world&subcmd=viewcreature&creature_id=')]");
		if (!monsters) {return;}
		for (var i=0; i<monsters.length; i++) {
			var monster = monsters[i];
			if (monster) {
				var href=monster.getAttribute("href");
				if (GM_getValue("showMonsterLog"))
					System.xmlhttp(monster.getAttribute("href"), Helper.checkedMonster, {'monster':monster,'showTip':false});
				else
					monster.addEventListener("mouseover", Helper.showTipCreatureInfo, true);
			}
		}
	},

	showTipCreatureInfo: function(evt) {
		var monster=evt.target.parentNode;
		if (monster.getAttribute("mouseovertext")!=undefined) {
			evt.target.removeEventListener("mouseover", Helper.showTipCreatureInfo, true);
			return;
		}
		System.xmlhttp(monster.getAttribute("href"), Helper.checkedMonster, {'monster':monster,'showTip':true});
	},

	checkedMonster: function(responseText, callback) {
		var creatureInfo=System.createDocumentWithImages(responseText);
		var statsNode = System.findNode("//table[@width='400']", creatureInfo);
		if (!statsNode) {return;} // FF2 error fix
		var showMonsterLog = GM_getValue("showMonsterLog");
		//store the stats
		var classNode = statsNode.rows[1].cells[1];
		var levelNode = statsNode.rows[1].cells[3];
		var attackNode = statsNode.rows[2].cells[1];
		var defenseNode = statsNode.rows[2].cells[3];
		var armorNode = statsNode.rows[3].cells[1];
		var damageNode = statsNode.rows[3].cells[3];
		var hitpointsNode = statsNode.rows[4].cells[1];
		var goldNode = statsNode.rows[4].cells[3];
		var hitpoints = parseInt(hitpointsNode.textContent.replace(/,/g,""),10);
		var armorNumber = parseInt(armorNode.textContent.replace(/,/g,""),10);
		var combatEvaluatorBias = GM_getValue("combatEvaluatorBias");
		var attackVariable = 1.1053, generalVariable = 1.1053, hpVariable = 1.1;
		if (combatEvaluatorBias == 1) {
			generalVariable = 1.1;
			hpVariable = 1.053;
		} else if (combatEvaluatorBias == 2) {
			generalVariable = 1.053;
			hpVariable = 1;
		} else if (combatEvaluatorBias == 3) {
			generalVariable = 1.1053;
			hpVariable = 1;
		}
		var oneHitNumber = Math.ceil((hitpoints*hpVariable)+(armorNumber*generalVariable));

		var hideRestOfRows = false;
		var collectEnchantments = true;
		var enchantmentsList = [];
		for (var i=0; i<statsNode.rows.length; i++) {
			var enchantment = {};
			var firstCell = statsNode.rows[i].cells[0];
			var thirdCell = statsNode.rows[i].cells[2];
			//color titles black
			if (firstCell.getAttribute("bgcolor") == "#cd9e4b") firstCell.style.color="black";
			//color text white so it can be read
			if (firstCell.firstChild && firstCell.firstChild.tagName) firstCell.firstChild.style.color="#cccccc";
			if (thirdCell && thirdCell.firstChild && thirdCell.firstChild.tagName) thirdCell.firstChild.style.color="#cccccc";
			//
			if (firstCell.textContent == 'Actions') {
				hideRestOfRows = true;
			}
			if (hideRestOfRows) {
				firstCell.style.display = 'none';
				firstCell.style.visibility = 'hidden';
			}

			//store the enchantment min and max values in the monster log (if enabled)
			if (showMonsterLog && i >= 7 && collectEnchantments) { //first enchantment row
				var ThisRowFirstCell = statsNode.rows[i].cells[0];
				if (ThisRowFirstCell.textContent != '[no enhancements]') {
					var SecondNextRowFirstCell = statsNode.rows[i+2].cells[0];
					if (SecondNextRowFirstCell.textContent == 'Description') collectEnchantments = false;
					enchantment.name = statsNode.rows[i].cells[0].textContent;
					enchantment.value = statsNode.rows[i].cells[1].textContent*1;
					enchantmentsList.push(enchantment);
				} else {
					collectEnchantments = false;
				}
			}
		}

		var imageTable = System.findNode("//table[tbody/tr/td/img[contains(@src, '/creatures/')]]", creatureInfo);
		var imageNode = imageTable.rows[0].cells[0].firstChild;
		var nameNode = imageTable.rows[1].cells[0].firstChild;
		var imageNodeSRC = imageNode.src.replace(/.jpg(.*)/,".jpg");

		if (showMonsterLog) {
			Helper.pushMonsterInfo({"key0":nameNode.textContent, "key1":imageNodeSRC, "key2":classNode.textContent, "key3":levelNode.textContent,
				"key4":attackNode.textContent, "key5":defenseNode.textContent, "key6":armorNode.textContent, "key7":damageNode.textContent,
				"key8":hitpointsNode.textContent, "key9":goldNode.textContent, "key10":enchantmentsList});
		}

		levelNode.innerHTML += " (your level:<span style='color:yellow'>" + Helper.characterLevel + "</span>)";
		attackNode.innerHTML += " (your defense:<span style='color:yellow'>" + Helper.characterDefense + "</span>) ";
		defenseNode.innerHTML += " (your attack:<span style='color:yellow'>" + Helper.characterAttack + "</span>)";
		armorNode.innerHTML += " (your damage:<span style='color:yellow'>" + Helper.characterDamage + "</span>)";
		damageNode.innerHTML += " (your armor:<span style='color:yellow'>" + Helper.characterArmor + "</span>)";
		hitpointsNode.innerHTML += " (your HP:<span style='color:yellow'>" + Helper.characterHP + "</span>)" +
			"(1H: <span style='color:red'>" + oneHitNumber + "</span>)";

		callback.monster.setAttribute("mouseOverText", "<table>" +
			"<tr><td valign=top>" + imageNode.parentNode.innerHTML + "</td>" +
			"<td rowspan=2>" + statsNode.parentNode.innerHTML + "</td></tr>" +
			"<tr><td align=center valign=top>" + nameNode.innerHTML + "</td></tr></table>");
		//fix me
		callback.monster.setAttribute("mouseOverWidth", "600");
		callback.monster.addEventListener("mouseover", Helper.clientTip, true);
		if (callback.showTip) Helper.clientTip({'target':callback.monster});
	},

	pushMonsterInfo: function(monster) {
		// name, img, cls, lvl, atk, def, arm, dmg, hp, gold
		var name = monster.key0;
		var monsterLog = System.getValueJSON("monsterLog");
		if (!monsterLog) monsterLog = {};
		if (!monsterLog[name]) {
			monsterLog[name] = {"min":{}, "max":{}};
			for (i = 1; i < 10; i++) {
				monsterLog[name]["min"]["key" + i] = 1e+100;
				monsterLog[name]["max"]["key" + i] = 0;
			}
			//monsterLog[name]["min"] = {"cls":1e+100, "lvl":1e+100, "atk":1e+100, "def":1e+100, "arm":1e+100, "dmg":1e+100, "hp":1e+100, "gold":1e+100};
			//monsterLog[name]["max"] = {"cls":0, "lvl":0, "atk":0, "def":0, "arm":0, "dmg":0, "hp":0, "gold":0};
			for (i = 10; i < 11; i++) {// enchantments
				if (monster["key" + i]) { //does this critter have enchantments, if so, then see min and max with the initial list
					monsterLog[name]["min"]["key" + i] = monster["key" + i];
					monsterLog[name]["max"]["key" + i] = monster["key" + i];
				}
			}
		}
		for (i = 1; i < 4; i++)
			monsterLog[name]["min"]["key" + i] = monster["key" + i];
		for (i = 4; i < 10; i++) {
			var value = System.intValue(monster["key" + i]);
			monsterLog[name]["min"]["key" + i] = monsterLog[name]["min"]["key" + i] < value?
				monsterLog[name]["min"]["key" + i] : value;
			monsterLog[name]["max"]["key" + i] = monsterLog[name]["max"]["key" + i] > value?
				monsterLog[name]["max"]["key" + i] : value;
		}
		for (i = 10; i < 11; i++) {// enchantments
			if (monster["key" + i]) { //does this critter have enchantments
				if (!monsterLog[name]["min"]["key" + i] || !monsterLog[name]["min"]["key" + i]) {
					monsterLog[name]["min"]["key" + i] = monster["key" + i];
					monsterLog[name]["max"]["key" + i] = monster["key" + i];
				}
				for (j = 0; j < monster["key" + i].length; j++) {
					var enchantName = monster["key" + i][j].name;
					var enchantValue = monster["key" + i][j].value*1;
					monsterLog[name]["min"]["key" + i][j].value = monsterLog[name]["min"]["key" + i][j].value*1 < enchantValue?
						monsterLog[name]["min"]["key" + i][j].value : enchantValue;
					monsterLog[name]["max"]["key" + i][j].value = monsterLog[name]["max"]["key" + i][j].value*1 > enchantValue?
						monsterLog[name]["max"]["key" + i][j].value : enchantValue;
				}
			}
		}
		System.setValueJSON("monsterLog", monsterLog);
	},

	injectMonsterLog: function() {
		var entityLog = System.getValueJSON("monsterLog");
		if (entityLog) {
			Helper.entityLogTable = {entity:[]};
			for (var name in entityLog) {
				var newEntity = {};
				newEntity["name"] = name;
				newEntity["key1"] = entityLog[name]["min"]["key1"];
				for (i = 2; i < 4; i++)
					newEntity["key" + i] = entityLog[name]["min"]["key" + i];
				for (i = 4; i < 10; i++)
					newEntity["key" + i] = System.addCommas(entityLog[name]["min"]["key"+i]) + ' - ' +
						System.addCommas(entityLog[name]["max"]["key"+i]);
				for (i = 10; i < 11; i++) {
					if (entityLog[name]["min"]["key" + i]) {
						newEntity["key" + i] = "";
						for (j = 0; j < entityLog[name]["min"]["key" + i].length; j++) {
							newEntity["key" + i] += '<nobr>' + entityLog[name]["min"]["key"+i][j].name + ' ' +
								entityLog[name]["min"]["key"+i][j].value + ' - ' + entityLog[name]["max"]["key"+i][j].value + '<nobr>' +
								(j != entityLog[name]["min"]["key" + i].length - 1? '<br/>':'');
						}
					}
				}
				Helper.entityLogTable.entity.push(newEntity);
			}
			Helper.sortBy = 'key3';
			Helper.sortAsc = true;
			Helper.entityLogTable.entity.sort(Helper.numberSort);
		}
		var content=Layout.notebookContent();
		content.innerHTML = '<span id=Helper.entityTableOutput>No monster information! Please enable entity log and travel a bit to see the world</span>';
		Helper.generateEntityTable();
	},

	generateEntityTable: function() {
		var content = document.getElementById("Helper.entityTableOutput");
		if (!Helper.entityLogTable || !content) {return;}
		GM_addStyle(
			'.HelperMonsterLogRow1 {background-color:#e7c473;font-size:small}\n' +
			'.HelperMonsterLogRow1:hover {background-color:white}\n' +
			'.HelperMonsterLogRow2 {background-color:#e2b960;font-size:small}\n' +
			'.HelperMonsterLogRow2:hover {background-color:white}');

		var result = '<table cellspacing="0" cellpadding="0" border="0" width="100%"><tr style="background-color:#110011; color:white;">'+
			'<td width="90%" nobr align=center><b>&nbsp;Entity Information</b></td>'+
			'<td width="10%" nobr>[<span id="Helper.clearEntityLog">Clear</span>]</td>'+
			'</tr>' +
			'</table>'+
			'<table id="Helper:EntityInfo" cellspacing="1" cellpadding="2" border="0" style="font-size:small;"><tr style="background-color:#e2b960;">' +
			'<th width="25%" align="left" sortkey="name" colspan="2">Entity</th>' +
			'<th align="center" sortkey="key2">Class</th>' +
			'<th align="center" sortkey="key3" sorttype="number">Lvl</th>' +
			'<th align="center">Attack</th>' +
			'<th align="center">Defence</th>' +
			'<th align="center">Armor</th>' +
			'<th align="center">Damage</th>' +
			'<th align="center">HP</th>' +
			//'<th align="center">Gold</th>' +
			'<th align="center">Enhancements</th>' +
			'</tr>';
		for (var k=0;k<Helper.entityLogTable.entity.length;k++) {
			result += '<tr class="HelperMonsterLogRow'+(1+k % 2)+'"><td align="center"><img width=40 height=40 ' +
					'data-tipped="' + Helper.entityLogTable.entity[k]["key1"] + '" ' +
					'src="' + Helper.entityLogTable.entity[k]["key1"] + '"/></td>';
			result += '<td align="left">' + Helper.entityLogTable.entity[k]["name"] + '</td>';
			for (i = 2; i < 4; i++)
				result += '<td align="center">' + System.addCommas(Helper.entityLogTable.entity[k]["key"+i]) + '</td>';
			for (i = 4; i < 9; i++) // 10 is gold, we don't need to show this
				result += '<td align="center">' + Helper.entityLogTable.entity[k]["key"+i] + '</td>';
			for (i = 10; i < 11; i++) {
				var entityInformationValue = Helper.entityLogTable.entity[k]["key"+i];
				if (!entityInformationValue) {
					result += '<td align="center" style="font-size:small; color:gray;">**Missing**</td>';
				} else {
					result += '<td align="center" style="font-size:xx-small;">' + entityInformationValue + '</td>';
				}
			}
		}
		result += "</table>";
		content.innerHTML = result;
		document.getElementById("Helper.clearEntityLog").addEventListener("click", Helper.clearEntityLog, true);

		var theTable=document.getElementById('Helper:EntityInfo');
		for (var i=0; i<theTable.rows[0].cells.length; i++) {
			var cell=theTable.rows[0].cells[i];
			if (cell.getAttribute("sortkey")) {
				cell.style.textDecoration="underline";
				cell.style.cursor="pointer";
				cell.addEventListener('click', Helper.sortEntityLogTable, true);
			}
		}
	},

	clearEntityLog: function() {
		GM_setValue("monsterLog", "");
		window.location="index.php?cmd=notepad&blank=1&subcmd=monsterlog";
	},

	sortEntityLogTable: function(evt) {
		var headerClicked = evt.target.getAttribute("sortKey");
		var sortType = evt.target.getAttribute("sortType");
		if (!sortType) sortType="string";
		if (Helper.sortAsc==undefined) Helper.sortAsc=true;
		if (Helper.sortBy && Helper.sortBy==headerClicked) {
			Helper.sortAsc=!Helper.sortAsc;
		}

		Helper.sortBy=headerClicked;
//GM_log(Helper.sortAsc + " " + Helper.sortBy + " " + sortType);

		switch(sortType) {
			case "string":
				Helper.entityLogTable.entity.sort(Helper.stringSort);
				break;
			case "number":
				Helper.entityLogTable.entity.sort(Helper.numberSort);
				break;
			default:
				break;
		}
		Helper.generateEntityTable();
	},

	backpackUpdater: function(count){
		var slots = System.findNode(".//font[contains(.,'/') and @size='1']");
		if (slots !== null){
			bpslots = slots.childNodes[0].nodeValue.split("/");
			//note the - 0 is to insure that math is used
			slots.childNodes[0].nodeValue = (bpslots[0] - 0 + count) + " /" + bpslots[1];
		}
	},

	killedMonster: function(responseText, callback) {
		var doc=System.createDocument(responseText);

		var reportRE=/var\s+report=new\s+Array;\n(report\[[0-9]+\]="[^"]+";\n)*/;
		var report=responseText.match(reportRE);
		if (report) report=report[0];

		// var specialsRE=/<div id="specialsDiv" style="position:relative; display:block;"><font color='#FF0000'><b>Azlorie Witch Doctor was withered.</b></font>/
		var specials=System.findNodes("//div[@id='specialsDiv']", doc);

		var playerId = Layout.playerId();

		var xpGain       = System.getIntFromRegExp(responseText, /var\s+xpGain=(-?[0-9]+);/i);
		var goldGain     = System.getIntFromRegExp(responseText, /var\s+goldGain=(-?[0-9]+);/i);
		var guildTaxGain = System.getIntFromRegExp(responseText, /var\s+guildTaxGain=(-?[0-9]+);/i);
		var levelUp      = System.getIntFromRegExp(responseText, /var\s+levelUp=(-?[0-9]+);/i);
		//You looted the item '<font color='#009900'>Amulet of Gazrif</font>'</b><br><br><img src="http://fileserver.huntedcow.com/items/4613.gif" class="tipped" data-tipped-options="skin: 'fsItem', ajax: true" data-tipped="fetchitem.php?item_id=4613&t=2&p=1478403&vcode=249a530a4a8790e924af351c49bcccda">
		var lootRE=/You looted the item \'<font color=\'\#[0-9A-F]+\'>([^<]+)<\/font>\'.+?(fetchitem\.php\?item_id=[0-9]*\&t=[0-9]*\&p=[0-9]*\&vcode=[0-9a-zA-Z]*)/;//(fetchitem\.php\?item_id=[0-9]*\&t=[0-9]*\&p=[0-9]*\&vcode=[0-9a-zA-Z]*)
		var info         = Layout.infoBox(responseText);
		var lootMatch=responseText.match(lootRE);
		var lootedItem = "";
		var lootedItemURL = "";
		if (lootMatch && lootMatch.length>0) {
			lootedItem=lootMatch[1];
			lootedItemURL=lootMatch[2];
		}
		var shieldImpDeathRE = /Shield Imp absorbed all damage/;
		var shieldImpDeath = responseText.match(shieldImpDeathRE);

		var monster = callback.node;
		var showCombatLog = false;
		if (monster) {
			var result=document.createElement("DIV");
			var resultHtml = "<small style='color:green;'>"+callback.index+". XP:" + xpGain + " Gold:" + goldGain + " (" + guildTaxGain + ")</small>";
			var resultText = "XP:" + xpGain + " Gold:" + goldGain + " (" + guildTaxGain + ")\n";
			if (info!=="") {
				resultHtml += "<br/><span style='font-size:x-small;width:120px;overflow:hidden;' title='" + info + "'>" + info + "</span>";
				resultText += info + "\n";
			}
			if (lootedItem!=="") {
				Helper.backpackUpdater(1);
				// I've temporarily disabled the ajax thingie, as it doesn't seem to work anyway.
				resultHtml += "<br/><small style='color:green;'>Looted item:<span class=\"tipped\" data-tipped-options=\"skin: 'fsItem', ajax: true\" data-tipped=\""+lootedItemURL+"\">" +
					lootedItem + "</span></small>";
				resultText += "Looted item:" + lootedItem + "\n";
			}
			if (shieldImpDeath) {
				resultHtml += "<br/><small><span style='color:red;'>Shield Imp Death</span></small>";
				resultText += "Shield Imp Death\n";
				showCombatLog = true;
			}
			if (levelUp=="1") {
				resultHtml += '<br/><br/><span style="color:#999900;font-weight:bold;>Your level has increased!</span>';
				resultText += "Your level has increased!\n";
				showCombatLog = true;
			}
			if (levelUp=="-1") {
				resultHtml += '<br/><br/><span style="color:#991100;font-weight:bold;">Your level has decreased!</span>';
				resultText += "Your level has decreased!\n";
				showCombatLog = true;
			}
			if (xpGain<0) {result.style.color='red'; showCombatLog = true;}
			result.innerHTML=resultHtml;
			var monsterParent = monster.parentNode;
			result.id = "result" + callback.index;
			if (report) {
				var reportLines=report.split("\n");
				var reportHtml="";
				var reportText="";
				if (specials) {
					reportHtml += "<span style='color:red'>";
					for (var i=0; i<specials.length; i++) {
						reportHtml += specials[i].textContent + "<br/>";
						reportText += specials[i].textContent + "\n";
					}
					reportHtml += "</span>";
				}
				for (i=0; i<reportLines.length; i++) {
					var reportMatch = reportLines[i].match(/\"(.*)\"/);
					if (reportMatch) {
						reportHtml += "<br/>" + reportMatch[1];
						reportText += reportMatch[1].replace(/<br>/g, "\n") + "\n";
					}
				}
				mouseOverText = "<span><span style='color:#FFF380;text-align:center;'>Combat Results</span>" + reportHtml + "</span>";
				Helper.appendCombatLog(reportHtml, showCombatLog);
				result.setAttribute("mouseOverText", mouseOverText);
				if (GM_getValue("keepLogs")) {
					var now=new Date();
					Helper.appendSavedLog("\n================================\n" + System.formatDateTime(now) + "\n" + resultText + "\n" + reportText);
				}
			}

			monsterParent.innerHTML = "";
			if (isNewUI == 1) {
				monsterParent.parentNode.appendChild(result);
				result.setAttribute("style", "float:right; text-align:right;");
				monsterParent.parentNode.setAttribute("style", ""); // removes the line height on the td
			} else { //old UI
				monsterParent.insertBefore(result, monsterParent.nextSibling);
			}
			if (report) {
				document.getElementById("result" + callback.index).addEventListener("mouseover", Helper.clientTip, true);
			}
		}
	},

	appendSavedLog: function(text) {
		setTimeout(function(){
			var theLog=GM_getValue("CombatLog");
			if (!theLog) theLog="";
			theLog+=text;
			GM_setValue("CombatLog", theLog);
		}, 0);
	},

	appendCombatLog: function(text, showCombatLog) {
		var reportLog = System.findNode("//div[@id='reportsLog']");
		if (!reportLog) {return;}
		if (GM_getValue("showCombatLog") || showCombatLog) reportLog.innerHTML += text + "<br/>";
	},

	scrollUpCombatLog: function() {
		var reportLog = System.findNode("//div[@id='reportsLog']");
		reportLog.scrollTop-=10;
	},

	scrollDownCombatLog: function() {
		var reportLog = System.findNode("//div[@id='reportsLog']");
		reportLog.scrollTop+=10;
	},

	clientTip: function(evt) {
		var target=evt.target;
		var value, width;
		do {
			if (target.getAttribute) {
				value=target.getAttribute("mouseovertext");
				width=target.getAttribute("mouseoverwidth");
			}
			target=target.parentNode;
		} while (!value && target);
		if (value) {
			target.setAttribute("data-tipped", value);
			target.setAttribute("data-tipped-options", "maxWidth:800");
			target.className += " tipped";
			$T.show($(target));
		}
	},

	prepareGuildList: function() {
		Helper.retrieveGuildData();
	},

	retrieveGuildData: function() {
		//don't need to run the retrieve guild data function when looking at these pages (causes issues or already done elsewhere
		if (location.search.search("quickbuff") != -1
			|| location.search.search("index.php?cmd=guild&subcmd=manage") != -1
			|| location.search.search("index.php?cmd=guild&subcmd=ranks") != -1) return;
		//only update every x minutes
		var memberList = System.getValueJSON("memberlist");
		var guildOnlineRefreshTime = GM_getValue("guildOnlineRefreshTime");
		if (guildOnlineRefreshTime != 300) GM_setValue("guildOnlineRefreshTime", 300); //set refresh to 300 if not equal to 300
		guildOnlineRefreshTime *= 1000;
		if (memberList) {
			if ((new Date()).getTime() - memberList.lastUpdate.getTime() > guildOnlineRefreshTime) memberList = null; // invalidate cache
		}
		if (!memberList) {
			System.xmlhttp("index.php?cmd=guild&subcmd=manage", Helper.parseGuildForWorld, true);
		}
	},

	parseGuildForWorld: function(details) {
		var doc=System.createDocument(details);
		if (location.search.search("index.php?cmd=guild&subcmd=manage") != -1) {
			//manage page so we don't need to parse the response we can just look at the current page.
			var memberRows = $('td:contains("Username"):last').parents('table:first').find('a[href]').parent('td').parent('tr');
		} else {
			var memberRows = $(doc).find('td:contains("Username"):last').parents('table:first').find('a[href]').parent('td').parent('tr');
		}
		//members found so reset the list
		var memberList = System.getValueJSON("memberlist");
		if (!memberList) {
			memberList = {};
			memberList.members = [];
		}
		//go through each member and store the data
		memberRows.each(function(index){
			var playerLink   = $(this).find('a');
			var memberId     = System.intValue((/[0-9]+$/).exec(playerLink.attr("href"))[0]);
			var memberName   = playerLink.text();
			var memberLevel  = System.intValue($(this).find('td:eq(2)').text());
			var memberRank   = $(this).find('td:eq(3)').text();
			var memberXP     = System.intValue($(this).find('td:eq(4)').text());
			var memberStatus = $(this).find('td:eq(0) img').attr('title');
			var lastActivity = /<td>Last Activity:<\/td><td>(\d+)d (\d+)h (\d+)m (\d+)s<\/td>/.exec($(playerLink).data('tipped'));
			var lastActivityDays = parseInt(lastActivity[1],10);
			var lastActivityHours = parseInt(lastActivity[2],10) + (lastActivityDays*24);
			var lastActivityMinutes = parseInt(lastActivity[3],10) + (lastActivityHours*60);
			var aMember;

			// find member in member list, to modify data instead of replacing it
			var findMembers = memberList.members.filter(function (e) {return e.id==memberId;});
			if (findMembers.length>0) {
				aMember = findMembers[0];
			}
			else { // member was not found, must be a new player
				aMember = {};
				// You can still modify an object, even if you have added it to something else
				memberList.members.push(aMember);
				aMember.firstSeen = new Date();
				aMember.status = "Offline"; // new players are supposed to be offline
			}
			Helper.getFullPlayerData(aMember);

			if (aMember.status == "Offline" && memberStatus=="Online") {
				aMember.loggedInAt = new Date();
			}

			if (!aMember.loggedInAt) {
				aMember.loggedInAt = new Date();
			}

			aMember.status = memberStatus;
			aMember.id     = memberId;
			aMember.name   = memberName;
			aMember.level  = memberLevel;
			aMember.rank   = memberRank;
			aMember.xp     = memberXP;
			aMember.lastActivityMinutes = lastActivityMinutes;
		});
		// remove not existing players
		memberList.members = memberList.members.filter(function(e) {return e.status!="Deleted";});
		// damn, I love javascript array functions :)

		memberList.lastUpdate = new Date();
		memberList.isRefreshed = true;
		System.setValueJSON("memberlist", memberList);
		if (location.search == "?cmd=guild&subcmd=ranks") {
			Helper.injectGuildRanksMembers(memberList);
		}
	},

	replaceKeyHandler: function() {
		setTimeout(function() { // FF3.6 was not working without the timeout in place
			if (isNewUI == 1 && $('#worldPage').length == 0) { //new UI and not new map
				//clear out the HCS keybinds so only helper ones fire
				$.each($(document).controls('option').keys, function(index, value) { 
					$(document).controls('option').keys[index] = [];
				});
			}
		}, 0);
		//~ if (System.browserVersion>=4 && navigator.userAgent.indexOf("Firefox")>0) {
			//~ window.document.wrappedJSObject.onkeypress = null;
			//~ window.document.wrappedJSObject.combatKeyHandler = null;
			//~ window.document.wrappedJSObject.realmKeyHandler = null;
			//~ window.document.wrappedJSObject.onkeypress = Helper.keyPress;
		//~ } else {
			unsafeWindow.document.onkeypress = null;
			unsafeWindow.document.combatKeyHandler = null;
			unsafeWindow.document.realmKeyHandler = null;
			unsafeWindow.document.onkeypress = Helper.keyPress;
		//~ }
	},

	moveMe: function(dx, dy) {
		var pos=Helper.position();
		var enableFastWalk = GM_getValue('enableFastWalk');
		if (pos) {
			if (pos.type=="normal") {
				//if fast walk is enabled then use the stored location, otherwise look it up
				var xCoord = (enableFastWalk?Helper.xLocation:pos.X);
				var yCoord = (enableFastWalk?Helper.yLocation:pos.Y);
				window.location = 'index.php?cmd=world&subcmd=move&x=' + (xCoord+dx) + '&y=' + (yCoord+dy);
				Helper.xLocation+=dx;
				Helper.yLocation+=dy;
			}
			if (pos.type=="worldmap") {
				//if fast walk is enabled then use the stored location, otherwise look it up
				var xCoord = (enableFastWalk?Helper.xLocation:pos.X);
				var yCoord = (enableFastWalk?Helper.yLocation:pos.Y);
				System.xmlhttp('index.php?cmd=world&subcmd=move&x=' + (xCoord+dx) + '&y=' + (yCoord+dy), function() {window.location = System.server + "index.php?cmd=world&subcmd=map";});
				Helper.xLocation+=dx;
				Helper.yLocation+=dy;

			}
		}
	},

	killMonsterAt: function(index) {
		var linkObj	= Helper.getMonster(index);
		if (linkObj!==null) {
			if (GM_getValue("quickKill")) {
				Helper.killSingleMonster(index);
			}
			else {
				window.location = linkObj.getAttribute("href");
			}
		}
	},

	keyPress: function (evt) {
		var r, s;
		if (evt.target.tagName!="HTML" && evt.target.tagName!="BODY") {return;}

		// ignore control, alt and meta keys (I think meta is the command key in Macintoshes)
		if (evt.ctrlKey) {return;}
		if (evt.metaKey) {return;}
		if (evt.altKey) {return;}

		r = evt.charCode;
		s = evt.keyCode;

		switch (r) {
		case 113: // nw
			Helper.moveMe(-1,-1);
			break;
		case 119: // n
			Helper.moveMe(0,-1);
			break;
		case 101: // ne
			Helper.moveMe(1,-1);
			break;
		case 97: // w
			Helper.moveMe(-1,0);
			break;
		case 100: // e
			Helper.moveMe(1,0);
			break;
		case 122: // sw
			Helper.moveMe(-1,1);
			break;
		case 120: // s
			Helper.moveMe(0,1);
			break;
		case 99: // se
			Helper.moveMe(1,1);
			break;
		case 114: // repair
			//do not use repair link for new map
			if ($('#worldPage').length == 0) window.location = 'index.php?cmd=blacksmith&subcmd=repairall&fromworld=1';
			break;
		case 71: // create group [G]
			window.location = 'index.php?cmd=guild&subcmd=groups&subcmd2=create&fromworld=1';
			break;
		case 76: // Log Page [L]
			window.location = 'index.php?cmd=log';
			break;
		case 103: // go to guild [g]
			window.location = 'index.php?cmd=guild&subcmd=manage';
			break;
		case 106: // join all group [j]
			if (!GM_getValue("enableMaxGroupSizeToJoin")) {
				window.location = 'index.php?cmd=guild&subcmd=groups&subcmd2=joinall';
			} else {
				window.location = 'index.php?cmd=guild&subcmd=groups&subcmd2=joinallgroupsundersize';
			}
			break;
		case 49:
		case 50:
		case 51:
		case 52:
		case 53:
		case 54:
		case 55:
		case 56: // keyed combat
			Helper.killMonsterAt(r-48);
			break;
		case 98: // backpack [b]
			window.location = 'index.php?cmd=profile&subcmd=dropitems&fromworld=1';
			break;
		case 115: // use stairs [s]
			Helper.useStairs();
			break;
		case 116: // quick buy [t]
			Helper.quickBuyItem();
			break;
		case 118: // fast wear manager [v]
			window.location = 'index.php?cmd=notepad&blank=1&subcmd=quickwear';
			break;
		case 121: // fast send gold [y]
			Helper.sendGoldToPlayer();
			break;
		case 19: // quick buffs
			// openWindow("", "fsQuickBuff", 618, 800, ",scrollbars");
			GM_openInTab(System.server + "index.php?cmd=quickbuff");
			break;
		case 48: // return to world
			//do not use if using new map
			if ($('#worldPage').length == 0) window.location = 'index.php?cmd=world';
			break;
		case 109: // map
			// window.open('index.php?cmd=world&subcmd=map', 'fsMap');
			// openWindow('index.php?cmd=world&subcmd=map', 'fsMap', 650, 650, ',scrollbars,resizable');
			GM_openInTab(System.server + "index.php?cmd=world&subcmd=map");
			break;
		case 112: // profile
			window.location = 'index.php?cmd=profile';
			break;
		case 110: // mini map [n]
			Helper.displayMiniMap();
			break;
		case 78: // auto move in mini map [N]
			Helper.autoMoveMiniMap();
			break;
		case 62: // move to next page [>]
		case 60: // move to prev page [<]
			Helper.movePage({62:'>', 60:'<'}[r]);
			break;
		case 33: // Shift+1
		case 64: // Shift+2
		case 34: // Shift+2 -- for UK keyboards, I think
		case 35: // Shift+3
		case 36: // Shift+4
		case 37: // Shift+5
		case 94: // Shift+6
		case 38: // Shift+7
		case 42: // Shift+8
		case 40: // Shift+9
			var keyMap = {"key33":1, "key64":2, "key34":2, "key35":3, "key36":4, "key37":5,
				"key94":6, "key38":7, "key42":8, "key40":9};
			// I'm using "key??" because I don't feel comfortable of naming properties with integers
			var itemIndex = keyMap["key" + r];
			System.xmlhttp("index.php?cmd=profile", Helper.changeCombatSet, itemIndex);
			break;
		case 41: // Shift+0
			// TODO: ask for a number, check isnumeric, then call changeCombatSet with that index.
			break;
		case 0: // special key
			switch (s) {
			case 37: // w
				Helper.moveMe(-1,0);
				evt.preventDefault();
				evt.stopPropagation();
				break;
			case 38: // n
				Helper.moveMe(0,-1);
				evt.preventDefault();
				evt.stopPropagation();
				break;
			case 39: // e
				Helper.moveMe(1,0);
				evt.preventDefault();
				evt.stopPropagation();
				break;
			case 40: // s
				Helper.moveMe(0,1);
				evt.preventDefault();
				evt.stopPropagation();
				break;
			case 33:
				if (System.findNode("//div[@id='reportsLog']")) {
					Helper.scrollUpCombatLog();
					evt.preventDefault();
					evt.stopPropagation();
				}
				break;
			case 34:
				if (System.findNode("//div[@id='reportsLog']")) {
					Helper.scrollDownCombatLog();
					evt.preventDefault();
					evt.stopPropagation();
				}
				break;
			default:
				// GM_log('special key: ' +s);
				break;
			}
			break;
		default:
			// GM_log('standard key: ' +r);
			break;
		}
		//return true;
	},

	addLogColoring: function(logScreen, dateColumn) {

		// fix for Chrome table width problem
        if (logScreen == 'Chat' && navigator.userAgent.indexOf("Chrome")>0)
			$("#pCC").find("table").find("table").find("table").find("table").css({"table-layout": "fixed", "word-wrap": "break-word"});

		if (!GM_getValue("enableLogColoring")) {return;}
		var lastCheckScreen = "last" + logScreen + "Check";
		var localLastCheckMilli=GM_getValue(lastCheckScreen);
		if (!localLastCheckMilli) localLastCheckMilli=(new Date()).getTime();
		var chatTable = System.findNode("//table[@class='width_full']");
		if (!chatTable) {chatTable = System.findNode("//table[tbody/tr/td[.='Message']]");}
		if (!chatTable) {chatTable = System.findNode("//table[tbody/tr/td/span[contains(.,'Currently showing:')]]");} //personal log
		if (!chatTable) {return;}

		var localDateMilli = (new Date()).getTime();
		var gmtOffsetMinutes = (new Date()).getTimezoneOffset();
		var gmtOffsetMilli = gmtOffsetMinutes*60*1000;

		var newRow = chatTable.insertRow(1);
		var newCell = newRow.insertCell(0);
		for (var i=2;i<chatTable.rows.length;i+=2) {
			var aRow = chatTable.rows[i];
			var addBuffTag = true;
			if (aRow.cells[0].innerHTML) {
				//GM_log(aRow.cells[dateColumn].innerHTML);
				var cellContents = aRow.cells[dateColumn].innerHTML;
				if (logScreen != 'Chat') cellContents = cellContents.substring(6,23); // fix for player log screen.
				postDateAsDate = System.parseDate(cellContents);
				postDateAsLocalMilli = postDateAsDate.getTime() - gmtOffsetMilli;
				postAge = (localDateMilli - postDateAsLocalMilli)/(1000*60);
				if (postDateAsLocalMilli > localLastCheckMilli) {
					aRow.style.backgroundColor = "#F5F298";
				}
				else if (postAge > 20 && postDateAsLocalMilli <= localLastCheckMilli) {
					aRow.style.backgroundColor = "#CD9E4B";
					addBuffTag = false;
				}
				if (logScreen == 'Chat' && addBuffTag) {
					var playerIDRE = /player_id=(\d+)/;
					var playerID = playerIDRE.exec(aRow.cells[1].innerHTML)[1];
					aRow.cells[1].innerHTML += " <a style='color:blue;font-size:10px;' " +
						Layout.quickBuffHref(playerID) + ">[b]</a>";
				}
			}
		}
		now=(new Date()).getTime();
		GM_setValue(lastCheckScreen, now.toString());
	},

	addLogWidgets: function() {
		var addAttackLinkToLog = GM_getValue('addAttackLinkToLog');
		var logTable = System.findNode("//table[tbody/tr/td/span[contains(.,'Currently showing:')]]");
		if (!logTable) {return;}
		var memberList = System.getValueJSON("memberlist");
		var memberNameString = " ";
		if (memberList) {
			for (var i=0;i<memberList.members.length;i++) {
				var member=memberList.members[i];
				memberNameString += member.name + " ";
			}
		}
		var listOfEnemies = GM_getValue("listOfEnemies");
		if (!listOfEnemies) listOfEnemies = "";
		var listOfAllies = GM_getValue("listOfAllies");
		if (!listOfAllies) listOfAllies = "";
		var buffList = Data.buffList();
		var showPvPSummaryInLog = GM_getValue("showPvPSummaryInLog");
		var messageType;
		for (i=0;i<logTable.rows.length;i++) {
			var aRow = logTable.rows[i];
			if (i !== 0) {
				if (aRow.cells[0].innerHTML) {
					firstCell = aRow.cells[0];
					//Valid Types: General, Chat, Guild
					if (navigator.userAgent.indexOf("Firefox")>0)
						messageType = firstCell.firstChild.getAttribute("title");
					else //chrome
						messageType = firstCell.firstChild.getAttribute("oldtitle");
					if (!messageType) {return;}
					//~ messageType = firstCell.firstChild.getAttribute("title");
					var colorPlayerName = false;
					var isGuildMate = false;
					if (messageType == "Chat") {
						var playerElement = aRow.cells[2].firstChild;
						var playerName = playerElement.innerHTML;
						colorPlayerName = true;
					}
					if (messageType == "General" || messageType == "Notification") {
						if (aRow.cells[2].firstChild.nextSibling && aRow.cells[2].firstChild.nextSibling.nodeName == 'A') {
							if (aRow.cells[2].firstChild.nextSibling.getAttribute("href").search("player_id") != -1) {
								playerElement = aRow.cells[2].firstChild.nextSibling;
								playerName = playerElement.innerHTML;
								colorPlayerName = true;
							}
						}
					}
					if (colorPlayerName) {
						if (memberNameString.search(" "+playerName+" ") !=-1) {
							playerElement.style.color="green";
							isGuildMate = true;
						}
						if (listOfEnemies.search(" "+playerName+" ") !=-1) {
							playerElement.style.color="red";
						}
						if (listOfAllies.search(" "+playerName+" ") !=-1) {
							playerElement.style.color="blue";
						}
					}
					if (messageType == "Chat") {
						var dateHTML = aRow.cells[1].innerHTML;
						var dateFirstPart = dateHTML.substring(0, dateHTML.indexOf(">Report") + 7);
						var dateLastPart = dateHTML.substring(dateHTML.indexOf("Message</a>") + 11, dateHTML.length);
						var extraPart = "";
						if (!isGuildMate) {
							extraPart = " | <a title='Add to Ignore List' href='index.php?cmd=log&subcmd=doaddignore&ignore_username=" + playerName +
							"'>Ignore</a>";
						}
						aRow.cells[1].innerHTML = dateFirstPart + '</a>' + extraPart + dateLastPart;

						var messageHTML = aRow.cells[2].innerHTML;
						var firstPart = messageHTML.substring(0, messageHTML.indexOf("<small>") + 7);
						var secondPart = messageHTML.substring(messageHTML.indexOf("<small>") + 7, messageHTML.indexOf(">Reply</a>") + 10);
						var thirdPart = messageHTML.substring(messageHTML.indexOf(">Reply</a>") + 10, messageHTML.indexOf(">Buff</a>") + 9);
						var targetPlayerID = /quickBuff\((\d+)\)/.exec(thirdPart)[1];
						thirdPart = " | <a " + Layout.quickBuffHref(targetPlayerID) + ">Buff</a></span>";
						var fourthPart = messageHTML.substring(messageHTML.indexOf(">Trade</a>") + 10, messageHTML.indexOf("</small>"));
						var lastPart = messageHTML.substring(messageHTML.indexOf("</small>"), messageHTML.length);
						extraPart = " | <a href='index.php?cmd=trade&target_player=" + playerName + "'>Trade</a> | " +
							"<a title='Secure Trade' href='index.php?cmd=trade&subcmd=createsecure&target_username=" + playerName +
							"'>ST</a>";

						var attackPart = "";
						if  (addAttackLinkToLog) {
							var attackPart = " | <a href='index.php?cmd=attackplayer&target_username=" + playerName +"'>Attack</a>";
						}

						var buffsSent = aRow.cells[2].innerHTML.match(/`~.*?~`/);
						var quickBuff = "";
						if (buffsSent) {

							buffsSent = new String(buffsSent).replace("`~","").replace("~`", "").split(",");
							var theBuffPack = System.getValueJSON("buffpack");
							for (var j = 0; j < buffsSent.length; j++) {
								var bBuffFound = false;
								for (var m = 0; m < buffList.length; m++) {
									var nicks = buffList[m].nicks.split(",");
									var exitOuter = false;

									for (var k = 0; k < nicks.length; k++) {
										if (buffsSent[j].toLowerCase().trim() == nicks[k].toLowerCase().trim()) {

											quickBuff += m + ";";
											exitOuter = true;
											bBuffFound = true;
											break;

										}
									}
									if (exitOuter) {
										break;
									}
								}
								if (!bBuffFound) {

									if (!theBuffPack) continue;

									if (!theBuffPack["nickname"]) { //avoid bugs if the new array is not populated yet
										theBuffPack["nickname"] = {};
									}
									if (!theBuffPack["staminaTotal"]) { //avoid bugs if the new array is not populated yet
										theBuffPack["staminaTotal"] = {};
									}

									for (var idx = 0; idx < theBuffPack["size"]; idx++) {
										var nickname = (theBuffPack["nickname"][idx]? theBuffPack["nickname"][idx]:"");
										if (nickname.toLowerCase().trim() == buffsSent[j].toLowerCase().trim()) {
											//126 is the number of buffs in the game currently. When they add new buffs, this will need to be updated, along with the fsData.buffList variable!
											quickBuff += (126+idx) + ";";
											break;
										}
									}
								}

							}
							thirdPart = " | <a " + Layout.quickBuffHref(targetPlayerID, quickBuff) + ">Buff</a></span>";
						}

						//var msgReplyTo = (GM_getValue("enableChatParsing") === true) ? secondPart.replace(/"([^"]*?)"/, secondPart.match(/"([^"]*?)"/)[1] + "&replyTo='" +
						//	Helper.removeHTML(firstPart.replace(/&nbsp;/g, "")).replace(/[\s*]/g, "_") + "'") : secondPart;
						var msgReplyTo =
							"[ <span style='cursor:pointer;text-decoration:underline'class='a-reply' target_player='"+playerName+"' replyTo='"+(GM_getValue("enableChatParsing") ? Helper.removeHTML(firstPart.replace(/&nbsp;/g, " ")).substr(0, 140) : "")+"...'>Reply</span>";
						aRow.cells[2].innerHTML = firstPart + "<nobr>" + msgReplyTo + extraPart + thirdPart + attackPart + fourthPart + "</nobr>" + lastPart;
					}
					if (aRow.cells[2].innerHTML.search("You have just been outbid at the auction house") != -1) {
						aRow.cells[2].innerHTML += ". Go to <a href='/index.php?cmd=auctionhouse&type=-50'>My Bids</a>.";
					}
					if (messageType == "Notification") {
						if (aRow.cells[2].firstChild.nextSibling && aRow.cells[2].firstChild.nextSibling.nodeName == 'A') {
							if (aRow.cells[2].firstChild.nextSibling.getAttribute("href").search("player_id") != -1) {
								if (!isGuildMate) {
									dateHTML = aRow.cells[1].innerHTML;
									var dateExtraText = "<nobr><span style='font-size:x-small;'>[ <a title='Add to Ignore List' href='index.php?cmd=log&subcmd=doaddignore&ignore_username=" + playerName +
									"'>Ignore</a> ]</span></nobr>";
									aRow.cells[1].innerHTML = aRow.cells[1].innerHTML + '<br>' + dateExtraText;
								}
								var buffingPlayerIDRE = /player_id=(\d+)/;
								var buffingPlayerID = buffingPlayerIDRE.exec(aRow.cells[2].innerHTML)[1];
								var buffingPlayerName = aRow.cells[2].firstChild.nextSibling.innerHTML;
								var extraText = " <span style='font-size:x-small;'><nobr>[ <span style='cursor:pointer;text-decoration:underline' class='a-reply' target_player='"+buffingPlayerName+
									"'>Reply</span> | <a href='index.php?cmd=trade&target_player=" + buffingPlayerName +
									"'>Trade</a> | <a title='Secure Trade' href='index.php?cmd=trade&subcmd=createsecure&target_username=" + buffingPlayerName +
									"'>ST</a>";
								extraText += " | <a " + Layout.quickBuffHref(buffingPlayerID) + ">Buff</a>";
								if (addAttackLinkToLog) {
									extraText += " | <a href='index.php?cmd=attackplayer&target_username=" + buffingPlayerName +"'>Attack</a>"
								}
								extraText += " ]</nobr></span>";

								aRow.cells[2].innerHTML += extraText;
							}
						}
					}
					//add PvP combat log summary
					if (messageType == "Notification" && aRow.cells[2] && showPvPSummaryInLog && aRow.cells[2].innerHTML.search("combat_id=") != -1) {
						var combatID = /combat_id=(\d+)/.exec(aRow.cells[2].innerHTML)[1];
						var combatSummarySpan = document.createElement("SPAN");
						combatSummarySpan.style.color = "gray";
						aRow.cells[2].appendChild(combatSummarySpan);
						System.xmlhttp('index.php?cmd=combat&subcmd=view&combat_id='+combatID, Helper.retrievePvPCombatSummary, {"target": combatSummarySpan});
					}
				}
			}
			else {
				var messageNameCell = aRow.cells[2];
				if (messageNameCell) messageNameCell.innerHTML += "&nbsp;&nbsp;<span style='color:white;'>(Guild mates show up in <span style='color:green;'>green</span>)</span>";
			}
		}
		//GM_wait(function() { // just want to be on the safe side
			$(".a-reply").click(function(evt) {
				Helper.openQuickMsgDialog(evt.target.getAttribute("target_player"),"", evt.target.getAttribute("replyTo"));
			});
		//});
	},

	retrievePvPCombatSummary: function(responseText, callback) {
		var doc = System.createDocument(responseText);
		var winner = System.getIntFromRegExp(responseText, /var\s+winner=(-?[0-9]+);/i);
		var xpGain = System.getIntFromRegExp(responseText, /var\s+xpGain=(-?[0-9]+);/i);
		var goldGain = System.getIntFromRegExp(responseText, /var\s+goldGain=(-?[0-9]+);/i);
		var prestigeGain = System.getIntFromRegExp(responseText, /var\s+prestigeGain=(-?[0-9]+);/i);
		var goldStolen = System.getIntFromRegExp(responseText, /var\s+goldStolen=(-?[0-9]+);/i);
		var pvpRatingChange = System.getIntFromRegExp(responseText, /var\s+pvpRatingChange=(-?[0-9]+);/i);
		var output = '<br> ';
		if (xpGain != 0) output += 'XP stolen:<span style="color:' + ((winner == 1)?'green':'red') + ';">' + System.addCommas(xpGain) + ' </span>';
		if (goldGain != 0) output += 'Gold lost:<span style="color:' + ((winner == 1)?'green':'red') + ';">' + System.addCommas(goldGain) + ' </span>';
		if (goldStolen != 0) output += 'Gold stolen:<span style="color:' + ((winner == 1)?'green':'red') + ';">' + System.addCommas(goldStolen) + ' </span>';
		if (prestigeGain != 0) output += 'Prestige gain:<span style="color:' + ((winner == 1)?'green':'red') + ';">' + prestigeGain + ' </span>';
		if (pvpRatingChange != 0) output += 'PvP change:<span style="color:' + ((winner == 1)?'green':'red') + ';">' + pvpRatingChange + ' </span>';
		callback.target.innerHTML = output;
	},

	addGuildLogWidgets: function() {
		var node=System.findNode("//font[@size=3]/b[contains(.,'s Log')]/..");
		if (node) node.innerHTML+=' [ <a href="index.php?cmd=notepad&blank=1&subcmd=guildlog">Guild Log Summary</a> ]';
		if (!GM_getValue("hideNonPlayerGuildLogMessages")) {return;}
		var playerId=Layout.playerId();
		var logTable = System.findNode("//table[tbody/tr/td[.='Message']]");
		var hideNextRows = 0;
		for (var i=0;i<logTable.rows.length;i++) {
			var aRow = logTable.rows[i];
			var firstPlayerID = 0;
			var secondPlayerID = 0;
			if (i !== 0) {
				if (hideNextRows>0) {
					//aRow.style.display = "none";
					hideNextRows --;
				}
				if (aRow.cells[0].innerHTML) {
					var messageHTML = aRow.cells[2].innerHTML;
					var doublerPlayerMessageRE = /member\s<a\shref="index.php\?cmd=profile\&amp;player_id=(\d+)/;
					secondPlayer = doublerPlayerMessageRE.exec(messageHTML);
					var singlePlayerMessageRE = /<a\shref="index.php\?cmd=profile\&amp;player_id=(\d+)/;
					firstPlayer = singlePlayerMessageRE.exec(messageHTML);
					if (secondPlayer) {
						firstPlayerID = firstPlayer[1]*1;
						secondPlayerID = secondPlayer[1]*1;
					}
					if (firstPlayer && !secondPlayer) {
						firstPlayerID = firstPlayer[1]*1;
					}
					if (firstPlayer && firstPlayerID != playerId && secondPlayerID != playerId) {
						//aRow.style.display = "none";
						aRow.style.fontSize = "x-small";
						aRow.style.color = "gray";
						hideNextRows = 3;
					}
					if (aRow.cells[2].textContent.charAt(0) == '\'' || aRow.cells[2].textContent.search("has invited the player") != -1) {
						message = aRow.cells[2].innerHTML;
						firstQuote = message.indexOf('\'');
						var firstPart = '';
						firstPart = message.substring(0,firstQuote);
						secondQuote = message.indexOf('\'',firstQuote+1);
						targetPlayerName = message.substring(firstQuote+1,secondQuote);
						aRow.cells[2].innerHTML = firstPart + '\'' +
							'<a href="index.php?cmd=findplayer&search_active=1&search_level_max=&search_level_min=&search_username=' + targetPlayerName + '&search_show_first=1">' + targetPlayerName + '</a>' +
							message.substring(secondQuote, message.length);
					}
				}
			}
			else {
				var messageNameCell = aRow.firstChild.nextSibling.nextSibling.nextSibling;
				if (messageNameCell) messageNameCell.innerHTML += "&nbsp;&nbsp;<font style='color:white;'>(Guild Log messages not involving self are dimmed!)</font>";
			}

		}
	},

	injectGuildLogSummary: function() {
		Layout.notebookContent().innerHTML=Helper.makePageTemplate('Guild Log Summary','','guillogrefresh','Refresh','guildlogdetail');

		var lastCheck=GM_getValue("lastGuildLogSumCheck");
		var now=(new Date()).getTime();
		if (!lastCheck) lastCheck=0;
		var haveToCheck=((now - lastCheck) > 60*60*1000);
		if (haveToCheck)
			document.getElementById('guillogrefresh').addEventListener('click',Helper.guildLogSummaryRefresh,true);
		else
			document.getElementById('guillogrefresh').innerHTML='[ Wait '+ Math.round(60 - ((now - lastCheck)/60000)) +'m ]';
		var logDetail=GM_getValue("guildlogdetail");
		if (logDetail)
			Helper.guildLogDisplay(logDetail);
		else
			Helper.guildLogSummaryRefresh();
	},

	guildLogSummaryRefresh: function() {
		var now=(new Date()).getTime();
		GM_setValue("lastGuildLogSumCheck", now.toString());
		GM_setValue("guildlogdetail",'');
		document.getElementById('guillogrefresh').innerHTML='';
		document.getElementById('guildlogdetail').innerHTML='Parsing page 1';
		System.xmlhttp('index.php?cmd=guild&subcmd=log&page=0',Helper.guidLogRetrieve,1);
	},

	guidLogRetrieve: function(responseText, callback) {
		var doc=System.createDocument(responseText);
		var logTable = System.findNode("//table[@border='0' and @cellpadding='2' and @width='100%']",doc);
		logTable.deleteRow(0);
		log=logTable.innerHTML.replace('<tbody>','').replace('</tbody>','');
		var logDetail=GM_getValue("guildlogdetail");
		if (!logDetail) logDetail='';
		logDetail+=log;
		GM_setValue("guildlogdetail", logDetail);
		var page=System.findNode("//select",doc);
		if (callback==15 || callback==page.length)
			Helper.guildLogDisplay(logDetail);
		else {
			document.getElementById('guildlogdetail').innerHTML+=', '+(callback+1);
			System.xmlhttp('index.php?cmd=guild&subcmd=log&page='+callback,Helper.guidLogRetrieve,callback+1);
		}
	},

	guildLogDisplay: function(logDetail) {
		document.getElementById('guildlogdetail').innerHTML='<table width=100% cellpadding=2 border=0 style="font-size:x-small">'+
			logDetail+'</table>';
	},

	getFullPlayerData: function(member) {
		return;
		//System.xmlhttp("index.php?cmd=profile&player_id=" + member.id, Helper.parsePlayerData, member.id);
	},

	parsePlayerData: function(responseText, memberId) {
		// return;
		var doc=System.createDocument(responseText);
		// var statistics = System.findNode("//table[contains(tr/td/b,'Level:')]",0,doc);
		var statistics = System.findNode("//table[contains(tbody/tr/td/b,'Level:')]",0,doc);
		var levelNode = System.findNode("//td[contains(b,'Level:')]",0,statistics);
		var levelValue = levelNode.nextSibling.innerHTML;
//GM_log(levelValue);
		// GM_log(statistics.innerHTML); //parentNode.parentNode.nextSibling.nextSibling.nextSibling.innerHTML);
	},

	injectBank: function() {
		var injectHere;
		var bank = System.findNode("//b[contains(.,'Bank')]");
		if (bank) {
			bank.innerHTML+="<br><a href='/index.php?cmd=guild&subcmd=bank'>Guild Bank</a>";
		}
	},

	injectAuctionHouse: function() {
		var isAuctionPage = System.findNode("//img[contains(@title,'Auction House')]");
		if (isAuctionPage) {
			var imageCell = isAuctionPage.parentNode;
			var imageHTML = imageCell.innerHTML; //hold on to this for later.

			var auctionTable = System.findNode("//img[contains(@title,'Auction House')]/../../../..");

			//Add functionality to hide the text block at the top.
			var textRow = auctionTable.rows[2];
			textRow.id = 'auctionTextControl';
			var myBidsButton = System.findNode("//input[@value='My Bids']/..");
			myBidsButton.innerHTML += " [ <span style='cursor:pointer; text-decoration:underline;' " +
				"id='toggleAuctionTextControl' linkto='auctionTextControl' title='Click on this to Show/Hide the AH text.'>X</span> ]";
			if (GM_getValue("auctionTextControl")) {
				textRow.style.display = "none";
				textRow.style.visibility = "hidden";
			}
			document.getElementById('toggleAuctionTextControl').addEventListener('click', System.toggleVisibilty, true);

			//fix button class and add go to first and last
			var prevButton = System.findNode("//input[@value='<']");
			var nextButton = System.findNode("//input[@value='>']");
			if (prevButton) {
				prevButton.setAttribute("class", "custombutton");
				var startButton = document.createElement("input");
				startButton.setAttribute("type", "button");
				startButton.setAttribute("onclick", prevButton.getAttribute("onclick").replace(/\&page=[0-9]*/, "&page=1"));
				startButton.setAttribute("class", "custombutton");
				startButton.setAttribute("value", "<<");
				prevButton.parentNode.insertBefore(startButton,prevButton);
			}
			if (nextButton) {
				nextButton.setAttribute("class", "custombutton");
				var lastPageNode=System.findNode("//input[@value='Go']/../preceding-sibling::td");
				lastPage = lastPageNode.textContent.replace(/\D/g,"");
				var finishButton = document.createElement("input");
				finishButton.setAttribute("type", "button");
				finishButton.setAttribute("onclick", nextButton.getAttribute("onclick").replace(/\&page=[0-9]*/, "&page=" + lastPage));
				finishButton.setAttribute("class", "custombutton");
				finishButton.setAttribute("value", ">>");
				nextButton.parentNode.insertBefore(finishButton, nextButton.nextSibling);
			}

			//insert another page change block at the top of the screen.
			if (isNewUI == 1) var insertPageChangeBlockHere = auctionTable.rows[3].cells[0]; // crude fix for new UI
			else var insertPageChangeBlockHere = auctionTable.rows[5].cells[0];
			var pageChangeBlock = System.findNode("//input[@name='page' and @class='custominput']/../../../../../..");
			var newPageChangeBlock = pageChangeBlock.innerHTML.replace('</form>','');
			newPageChangeBlock += "</form>";
			var insertPageChangeBlock=document.createElement("SPAN");
			insertPageChangeBlock.innerHTML = newPageChangeBlock;
			insertPageChangeBlockHere.align = "right";
			insertPageChangeBlockHere.appendChild(insertPageChangeBlock);

			var quickSearchList = System.getValueJSON("quickSearchList");

			var finalHTML = "<span style='font-size:x-small; color:blue;'><table style='table-layout:fixed; width:650px;'><tbody><tr><td rowspan='7'>" + imageHTML.replace("<img ","<img width=400 ") + "</td>" +
				"<td width='230' colspan='6' style='text-align:center;color:#7D2252;background-color:#CD9E4B'><a style='color:#7D2252' href='" +
							System.server +
							"index.php?cmd=notepad&blank=1&subcmd=auctionsearch'>" +
							"Configure Quick Search</a></td></tr>";
			var lp=0;
			var rowCount = 0;
			for (var p=0;p<quickSearchList.length;p++) {
				if (lp % 6==0 && rowCount == 6) break; //36 searches on the screen so don't display any more
				var quickSearch=quickSearchList[p];
				if (quickSearch.displayOnAH) {
					if (lp % 6==0) {
						finalHTML += "<tr>";
						rowCount++;
					}
					finalHTML += "<td nowrap style='overflow: hidden;'";
					finalHTML += "><a href='index.php?cmd=auctionhouse&type=-1&search_text=" +
						quickSearch.searchname + "&page=1&order_by=1'>" +
						quickSearch.nickname + "</a></td>";
					if (lp % 6==5) finalHTML += "</tr>";
					lp++;
				}
			}
			imageCell.innerHTML = finalHTML;
		}

		//add coloring for item craft and durability
		var auctionCellCraftElements = System.findNodes("//table/tbody/tr/td/span[2]");
		if (auctionCellCraftElements) {
			for (i=0; i<auctionCellCraftElements.length; i++) {
				var auctionCellCraftElement = auctionCellCraftElements[i];
				if (auctionCellCraftElement.textContent.length > 0){
					switch(auctionCellCraftElement.textContent) {
						case 'Perfect': craftColor = '#00b600'; break;
						case 'Excellent': craftColor = '#f6ed00'; break;
						case 'Very Good': craftColor = '#f67a00'; break;
						case 'Good': craftColor = '#f65d00'; break;
						case 'Average': craftColor = '#f64500'; break;
						case 'Poor': craftColor = '#f61d00'; break;
						case 'Very Poor': craftColor = '#b21500'; break;
						case 'Uncrafted': craftColor = '#666666'; break;
					}
					auctionCellCraftElement.style.color = craftColor;
				}
				var auctionCellDurabilityElement = auctionCellCraftElement.previousSibling;
				if (auctionCellDurabilityElement.nodeName == 'SPAN') {
					auctionCellDurabilityElement.innerHTML = '<nobr>' + auctionCellDurabilityElement.innerHTML + '</nobr>';
					auctionCellDurabilityElement.style.color = 'gray';
				}
			}
		}

		var minBidLink = System.findNode("//a[contains(@href,'&order_by=1&tid=')]");
		auctionTable = minBidLink.parentNode.parentNode.parentNode.parentNode;

		var playerId = Layout.playerId();

		var memberList = System.getValueJSON("memberlist");
		var memberNameString = "";
		if (memberList) {
			for (i=0;i<memberList.members.length;i++) {
				var member=memberList.members[i];
				memberNameString += member.name + " ";
			}
		}
		var listOfEnemies = GM_getValue("listOfEnemies");
		if (!listOfEnemies) listOfEnemies = "";
		var listOfAllies = GM_getValue("listOfAllies");
		if (!listOfAllies) listOfAllies = "";

		var newRow, newCell, winningBidBuyoutCell;
		var autoFillMinBidPrice = GM_getValue("autoFillMinBidPrice");
		for (i=0;i<auctionTable.rows.length;i++) {
			var aRow = auctionTable.rows[i];
			if (i>0 && // the title row - ignore this
				aRow.cells[1]) { // a separator row - ignore this
				if (aRow.cells[5].innerHTML == '<font size="1">[ended]</font>') { //time left column
					aRow.cells[6].innerHTML = ""; // text field and button column
				} else {
					var timeLeft = aRow.cells[5].firstChild.innerHTML;
					var secondsLeft = timeLeft.substring(timeLeft.indexOf('m')+1).trim();
					timeLeft = timeLeft.substring(0, timeLeft.indexOf('m'));
					if (timeLeft >= 60) {
						var hoursLeft = Math.floor(timeLeft / 60);
						if (hoursLeft < 24) {
							var minutesLeft = timeLeft - (hoursLeft * 60);
							aRow.cells[5].firstChild.innerHTML = hoursLeft + "h " + minutesLeft + "m " + secondsLeft;
						} else {
							var daysLeft = Math.floor(hoursLeft / 24);
							hoursLeft = hoursLeft - (daysLeft * 24);
							minutesLeft = timeLeft - (hoursLeft * 60) - (daysLeft * 1440);
							aRow.cells[5].firstChild.innerHTML = daysLeft + "d " + hoursLeft + "h " + minutesLeft + "m " + secondsLeft;
						}

					}

					winningBidValue = "-";
					var bidExistsOnItem = false;
					var playerListedItem = false;
					if (aRow.cells[1].innerHTML != '<font size="1">Auction House</font>') {
						var sellerElement = aRow.cells[1].firstChild.firstChild;
						sellerHref = sellerElement.getAttribute("href");
						var sellerIDRE = /player_id=(\d+)/;
						var sellerID = sellerIDRE.exec(sellerHref)[1];
						if (playerId == sellerID) {
							playerListedItem = true;
						}
					}
					if (aRow.cells[3].innerHTML != '<font size="1">-</font>') {
						var winningBidTable = aRow.cells[3].firstChild.firstChild;
						var winningBidCell = winningBidTable.rows[0].cells[0];
						var winningBidderCell = winningBidTable.rows[1].cells[0].firstChild.nextSibling;
						var winningBidder = winningBidderCell.innerHTML;
						if (memberNameString.search(" "+winningBidder+" ") !=-1) {
							winningBidderCell.style.color="green";
						}
						if (listOfEnemies.search(" "+winningBidder+" ") !=-1) {
							winningBidderCell.style.color="red";
						}
						if (listOfAllies.search(" "+winningBidder+" ") !=-1) {
							winningBidderCell.style.color="blue";
						}
						var isGold = winningBidTable.rows[0].cells[1].firstChild.getAttribute("title")=="Gold";
						var winningBidValue = System.intValue(winningBidCell.textContent);
						newRow = winningBidTable.insertRow(2);
						winningBidBuyoutCell = newRow.insertCell(0);
						winningBidBuyoutCell.colSpan = "2";
						winningBidBuyoutCell.align = "center";
						var winningBidderHTML = winningBidTable.rows[1].cells[0].innerHTML;
						var winningBidderIDRE = /player_id=(\d+)/;
						var winningBidderID = winningBidderIDRE.exec(winningBidderHTML)[1];
						if (playerId == winningBidderID) {
							playerListedItem = true;
						}
					}
					if (!bidExistsOnItem && !playerListedItem) {
						var bidValueButton = aRow.cells[6].getElementsByTagName("input");
						if (winningBidValue != "-") {
							var overBid = isGold?Math.ceil(winningBidValue * 1.05):(winningBidValue+1);
							var buyNow = System.intValue(aRow.cells[4].firstChild.firstChild.firstChild.firstChild.firstChild.nextSibling.nextSibling.nextSibling.textContent);
							if (!isNaN(buyNow)) overBid = Math.min(overBid,buyNow);
							winningBidBuyoutCell.innerHTML = '<span style="color:blue;" title="Overbid value">Overbid ' +
								System.addCommas(overBid) + '</span>&nbsp';
							if (autoFillMinBidPrice) bidValueButton[0].value = overBid;
							bidValueButton[0].size = 6;
						} else {
							var minBid = System.intValue(aRow.cells[4].firstChild.firstChild.firstChild.firstChild.firstChild.textContent);
							if (autoFillMinBidPrice) bidValueButton[0].value = minBid;
							bidValueButton[0].size = 6;
						}
					}
					var inputTableCell;
					if (!playerListedItem) {
						var inputTable = aRow.cells[6].firstChild.firstChild;
						var inputCell = inputTable.rows[0].cells[0];
						var textInput = inputCell.firstChild;
						textInput.id = 'auction' + i + 'text';
						var bidCell = inputTable.rows[0].cells[1];
						bidCell.align = "right";
						//spacer row
						newRow = inputTable.insertRow(1);
						inputTableCell = newRow.insertCell(0);
						inputTableCell.colSpan = "2";
						inputTableCell.height = "2";
						//get itemID for bid no refresh
						var itemIMG = aRow.cells[0].firstChild;
						//var itemStats = /ajaxLoadItem\((\d+), (\d+), (\d+), (\d+)/.exec($(itemIMG).data("tipped"));
						var itemStats = /fetchitem.php\?item_id=(\d+)\&inv_id=(\d+)\&t=(\d+)\&p=(\d+)/.exec($(itemIMG).data("tipped"));
						invID = itemStats[2];
						//new bid no refresh button
						newRow = inputTable.insertRow(2);
						inputTableCell = newRow.insertCell(0);
						inputTableCell.colSpan = "2";
						inputTableCell.align = "center";
						inputTableCell.innerHTML = '<span id="auction' + i + 'text">'+
							'<input id="bidNoRefresh" invID="'+ invID +
								'" linkto="auction' + i + 'text" value="Bid no Refresh" class="custombutton" type="submit"></span>';
					}
					var inputText = aRow.cells[6];
				}
			}
		}
		bidNoRefreshList = System.findNodes("//input[@id='bidNoRefresh']");
		if (bidNoRefreshList) {
			for (i=0; i<bidNoRefreshList.length; i++) {
				var bidNoRefreshItem = bidNoRefreshList[i];
				bidNoRefreshItem.addEventListener('click', Helper.bidNoRefresh, true);
			}
			//Add a bid no refresh on all
			$('input[value="My Bids"]').after('&nbsp;<input type="button" value="Bid on All" id="fshBidOnAll"  class="custombutton tipped" data-tipped="<b>Bid on each auction</b><br>Triggers the \"Bid no refresh\" for each btton on screen">');
			$("#fshBidOnAll").click(function()
			{
				if(confirm ("Are you sure you want to bid on all of them?")){
					$("input[id=bidNoRefresh]").each(function()
					{
						//this.checked = !this.checked;
						//alert("asdf");
						//alert(this.attr('id'));
						this.click();
					});
				}
			});
		}
		//show saved prefs if not default values
		var searchPrefsFirstCell = System.findNode("//tr[td/font/a[@id='showAdvSearchLink']]/td[1]");
		var pref_minlevel = System.findNode("//input[@name='pref_minlevel']").value;
		var pref_maxlevel = System.findNode("//input[@name='pref_maxlevel']").value
		var pref_hidegold = System.findNode("//input[@name='pref_hidegold']").checked;
		var pref_hidefsp = System.findNode("//input[@name='pref_hidefsp']").checked;
		var pref_minforge = System.findNode("//select[@name='pref_minforge']").selectedIndex;
		var pref_mincraft = System.findNode("//select[@name='pref_mincraft']").selectedIndex;
		var output = '';
		if (pref_minlevel > 1 || (pref_maxlevel > 0 && pref_maxlevel != 1000) || pref_hidegold || pref_hidefsp || pref_minforge != 0 || pref_mincraft != 0) {
			output = '<nobr><span style="color:blue; font-size:x-small;">Enabled filters (' +
				'<span id="Helper.resetAHprefs" style="cursor:pointer; text-decoration:underline; color:blue;">Reset</span>' +
				'):</span> <span style="color:orangered; font-size:x-small;">';
			if (pref_minlevel > 1) output += 'MinLevel('+pref_minlevel+') ';
			if (pref_maxlevel > 0 && pref_maxlevel != 1000) output += 'MaxLevel('+pref_maxlevel+') ';
			if (pref_hidegold) output += pref_hidefsp?'<span style="color:magenta; font-weight:900;">Gold</span> ':'Gold ';
			if (pref_hidefsp) output += pref_hidegold?'<span style="color:magenta; font-weight:900;">FSP</span> ':'FSP ';
			if (pref_minforge != 0) output += 'Forge('+pref_minforge+') ';
			if (pref_mincraft != 0) output += 'Craft('+pref_mincraft+') ';
			output += '</span></nobr>';
			searchPrefsFirstCell.innerHTML = output;
			document.getElementById("Helper.resetAHprefs").addEventListener('click', Helper.resetAHquickPrefsAndReload, true);
		}
		//litte something to default to sorting by min bid
		var hiddenOrderByInput = System.findNode("//input[@name='order_by']");
		hiddenOrderByInput.value = 1;

		Helper.injectAuctionQuickCancel();
	},

	resetAHquickPrefsAndReload: function(evt) {
		//POSTDATA=cmd=auctionhouse&order_by=1&search_text=hunter&pref_save=1&pref_minlevel=&pref_maxlevel=&pref_minforge=0&pref_mincraft=-1
		var searchText = System.findNode("//input[@name='search_text']").value;
		var destURL = 'index.php?cmd=auctionhouse&order_by=1&search_text=' + searchText +
			'&pref_save=1&pref_minlevel=&pref_maxlevel=&pref_minforge=0&pref_mincraft=-1';
		window.location = destURL;
	},

	generateManageTable: function() {
		GM_addStyle('.HelperTextLink {color:blue;font-size:x-small;cursor:pointer;}\n' +
			'.HelperTextLink:hover {text-decoration:underline;}\n');
		var i, j, result='<table cellspacing=2 cellpadding=2 width=100%><tr bgcolor=#CD9E4B>';
		var isArrayOnly=(Helper.param.fields.length===0);
		for (i=0;i<Helper.param.headers.length;i++)
			result+='<th>'+Helper.param.headers[i]+'</th>';
		result+='<th>Action</th></tr>';
		var currentCategory = "";
		for (i=0;i<Helper.param.currentItems.length;i++) {
			result+="<tr>";
			if (isArrayOnly) {
				result+='<td align=center>'+Helper.param.currentItems[i]+'</td>';
			} else {
				if (Helper.param.categoryField && currentCategory != Helper.param.currentItems[i][Helper.param.categoryField]) {
					currentCategory = Helper.param.currentItems[i][Helper.param.categoryField];
					result += "<td><span style='font-weight:bold; font-size:large;'>" + currentCategory + "</span></td></tr><tr>";
				}
				for (j=0;j<Helper.param.fields.length;j++) {
					result+='<td align=center class=content>';
					if (Helper.param.fields[j]!=Helper.param.categoryField){
						if (Helper.param.tags[j]=="checkbox"){
							result+="<input type=checkbox "+(Helper.param.currentItems[i][Helper.param.fields[j]]?'checked':'')+" disabled>";
						} else {
							if (Helper.param.url && Helper.param.url[j] !== ''){
								result+="<a href='"+Helper.param.url[j].replace("@replaceme@",Helper.param.currentItems[i][Helper.param.fields[j]])+"'>"+
									Helper.param.currentItems[i][Helper.param.fields[j]]+"</a>";
							} else {
								result+=Helper.param.currentItems[i][Helper.param.fields[j]];
							}
						}
					result+='</td>';
					}
				}
			}
			result+='<td><span class=HelperTextLink itemId="' + i + '" id="Helper:DeleteItem' + i + '">[Del]</span></td></tr>';
		}
		result+='<tr>';
		if (isArrayOnly){
			result+='<td align=center><input type='+Helper.param.tags[i]+' class=custominput id=Helper:input0></td>';
		}
		else {
			for (i=0;i<Helper.param.tags.length;i++){
				result+='<td align=center><input type='+Helper.param.tags[i]+' class=custominput id=Helper:input'+Helper.param.fields[i]+'></td>';
			}
		}
		result+='<td><span class=HelperTextLink id="Helper:AddItem">[Add]</span></td></tr></table>';

		if (Helper.param.showRawEditor) {
			result+="<table width=100%><tr><td align=center><textarea cols=70 rows=20 name='Helper:rawEditor'>" +
				JSON.stringify(Helper.param.currentItems) + "</textarea></td></tr>"+
				"<tr><td align=center><input id='Helper:saveRawEditor' type='button' value='Save' class='custombutton'>"+
				"&nbsp;<input id='Helper:resetRawEditor' type='button' value='Reset' class='custombutton'></td></tr>"+
				"</tbody></table>";
		}

		document.getElementById(Helper.param.id).innerHTML = result;
		for (i=0;i<Helper.param.currentItems.length;i++)
			document.getElementById("Helper:DeleteItem" + i).addEventListener('click', Helper.deleteQuickItem, true);
		document.getElementById("Helper:AddItem").addEventListener('click', Helper.addQuickItem, true);
		if (Helper.param.showRawEditor) {
			document.getElementById("Helper:saveRawEditor").addEventListener('click', Helper.saveRawEditor, true);
			document.getElementById("Helper:resetRawEditor").addEventListener('click', Helper.resetRawEditor, true);
		}

		System.setValueJSON(Helper.param.gmname, Helper.param.currentItems);
	},

	deleteQuickItem: function(evt) {
		// if (!window.confirm('Are you sure you want to delete this link?')) {return;}
		var itemId = evt.target.getAttribute("itemId");
		Helper.param.currentItems.splice(itemId, 1);
		Helper.generateManageTable();
	},

	addQuickItem: function(evt) {
		var isArrayOnly=(Helper.param.fields.length===0);
		var newItem={};
		if (isArrayOnly) {
			newItem=document.getElementById("Helper:input0").value;
		} else {
			for (var i=0;i<Helper.param.fields.length;i++){
				if (Helper.param.tags[i]=="checkbox")
					newItem[Helper.param.fields[i]]=document.getElementById("Helper:input"+Helper.param.fields[i]).checked;
				else
					newItem[Helper.param.fields[i]]=document.getElementById("Helper:input"+Helper.param.fields[i]).value;
			}
		}
		Helper.param.currentItems.push(newItem);
		if (Helper.param.sortField) {
			Helper.sortAsc=true;
			Helper.sortBy=Helper.param.sortField;
			Helper.param.currentItems.sort(Helper.stringSort);
		}
		Helper.generateManageTable();
	},

	saveRawEditor: function(evt) {
		Helper.param.currentItems = JSON.parse(System.findNode("//textarea[@name='Helper:rawEditor']").value);
		if (Helper.param.sortField) {
			Helper.sortAsc=true;
			Helper.sortBy=Helper.param.sortField;
			Helper.param.currentItems.sort(Helper.stringSort);
		}
		Helper.generateManageTable();
	},

	resetRawEditor: function(evt) {
		if (location.search == '?cmd=notepad&blank=1&subcmd=auctionsearch') {
			Helper.param.currentItems = Data.quickSearchList();
		}
		else Helper.param.currentItems=[];
		Helper.generateManageTable();
	},

	bidNoRefresh: function(evt) {
		var inputValue = System.findNode("//input[@id='" + evt.target.getAttribute("linkto") + "']");
		var invID = evt.target.getAttribute("invID");
		var postData = "cmd=auctionhouse&subcmd=placebid" +
				"&auction_id=" + invID +
				"&page=" +
				"&type=-1" +
				"&bid=" + inputValue.value;

		GM_xmlhttpRequest({
			method: 'POST',
			url: System.server + "index.php",
			headers: {
			//	"User-Agent" : navigator.userAgent,
			//	"Referer": System.server + "index.php?cmd=auctionhouse&subcmd=type=-1",
			//	"Cookie" : document.cookie,
				"Content-Type": "application/x-www-form-urlencoded"
			},
			data: postData,
			onload: function(responseDetails) {
				var info = Layout.infoBox(responseDetails.responseText);
				var infoElement = evt.target.parentNode;
				if (info.search("Bid placed successfully!") != -1) {
					infoElement.innerHTML = " <span style='color:green; font-weight:bold;'>" + info + "</span>";
				} else {
					infoElement.innerHTML = " <span style='color:red; font-weight:bold;'>" + info + "</span>";
				}
			}
		});
	},

	toggleShowExtraLinks: function(evt) {
		var showExtraLinksElement = System.findNode("//span[@id='Helper:showExtraLinks']");
		if (showExtraLinksElement.textContent == "Show AH and Sell links") {
			GM_setValue("showExtraLinks", true);
		} else {
			GM_setValue("showExtraLinks", false);
		}
		window.location = window.location;
	},

	toggleShowQuickDropLinks: function(evt) {
		var showQuickDropLinksElement = System.findNode("//span[@id='Helper:showQuickDropLinks']");
		if (showQuickDropLinksElement.textContent == "Show Quick Drop links") {
			if (window.confirm("Are you sure you want to show the quick drop links?")) GM_setValue("showQuickDropLinks", true);
		} else {
			GM_setValue("showQuickDropLinks", false);
		}
		window.location = window.location;
	},

	injectReportPaint: function() {
		//Get the list of online members
		var memberList = System.getValueJSON("memberlist");

		var injectHere, searchString;
		if (memberList) {
			for (i=0;i<memberList.members.length;i++) {
				var member=memberList.members[i];
				var lastActivityMinutes = 30;
				var lastActivityIMG = "";
				if (!isNaN(member.lastActivityMinutes)) var lastActivityMinutes = member.lastActivityMinutes;
				if (GM_getValue("enhanceOnlineDots")) {
					var lastActivityIMG = '<img width="10" height="10" title="Online" src="' + Data.offlineDot() + '">';
					if (lastActivityMinutes < 2) {
						lastActivityIMG = '<img width="10" height="10" title="Offline" src="' + Data.greenDiamond() + '">';
					} else if (lastActivityMinutes < 5) {
						lastActivityIMG = '<img width="10" height="10" title="Offline" src="' + Data.yellowDiamond() + '">';
					} else if (lastActivityMinutes < 30) {
						lastActivityIMG = '<img width="10" height="10" title="Offline" src="' + Data.orangeDiamond() + '">';
					} else if (lastActivityMinutes > 10080) {
						lastActivityIMG = '<img width="10" height="10" title="Offline" src="' + Data.sevenDayDot() + '">';
					}
				}

				var player=$("b:contains('" + member.name + "')");
				if (player.length > 0) {
					player.html(lastActivityIMG + "&nbsp;<a href='" +
						System.server + "index.php?cmd=profile&player_id=" + member.id + "'>" + player.html() + "</a>");
					player.append(" [ <span class=a-reply target_player=" + member.name + " style='cursor:pointer; text-decoration:underline;'>m</span> ]");
				}
			}
			$(".a-reply").click(function(evt) {
				Helper.openQuickMsgDialog(evt.target.getAttribute("target_player"));
			});
		}
		var searchItemRE = /&item=(.*)$/;
		var searchSetRE = /&set=(.*)$/;
		var searchUserRE = /&user=(.*)$/;
		var searchItem = searchItemRE.exec(location);
		var searchSet = searchSetRE.exec(location);
		var searchUser = searchUserRE.exec(location);
		if (searchItem) searchItem = unescape(searchItem[1]);
		if (searchSet) {
			searchItem = unescape(searchSet[1]);
			searchItem=(searchItem.indexOf(' of ')>0)?
				searchItem.replace(/^.* of /,''):(searchItem.replace(/ .*$/ig,'')+' ');
		}
		if (searchUser) searchUser = unescape(searchUser[1]);
		if (searchUser) {
			playerReport = $('table[width=600]').find('a:contains("' + searchUser + '")');
			if (playerReport.length > 0) {
				var playerID = /player_id=(\d+)/.exec(playerReport.attr("href"))[1];
				$('table[width=600] tr:has(a:not([href*="player_id=' + playerID + '"]))').hide()
			}
		}
		if (searchItem) var searchItemArr = searchItem.split('|');
		var mainTable = System.findNode("//table[@width='600']");
		for (i=mainTable.rows.length-1;i>=0;i--) {
			aRow = mainTable.rows[i];
			if (aRow.cells[2]) { // itemRow
				var itemCell = aRow.cells[1];
				if (searchItem) {
					for (j=0; j<searchItemArr.length; j++) {
						if (itemCell.textContent.indexOf(searchItemArr[j].trim())>=0) break;
					}
					if (j==searchItemArr.length) {
						mainTable.deleteRow(i);
						continue;
					}
				}
				var recallCell = aRow.cells[2];
				var recallToBackpack = "";
				if (recallCell.firstChild.nextSibling.innerHTML == 'Backpack') {
					recallToBackpack = recallCell.firstChild.nextSibling;
					var recallToBackpackHREF = recallToBackpack.getAttribute('href');
					var recallToGuildStore = recallToBackpack.nextSibling.nextSibling;
					var recallToGuildStoreHREF = recallToGuildStore.getAttribute('href');
				} else {
					recallToGuildStore = recallCell.firstChild.nextSibling;
					recallToGuildStoreHREF = recallToGuildStore.getAttribute('href');
					inventoryItemID = /&id=(\d+)/.exec(recallToGuildStoreHREF)[1];
				}
				var itemWorn = false;
				if (aRow.cells[1].firstChild.nodeName == 'B') {
					itemWorn = true;
				}
				if (recallToBackpack) {
					recallCell.innerHTML = '<nobr>' + recallCell.innerHTML + '|' +
						'&nbsp;<span style="cursor:pointer; text-decoration:underline; color:blue;" href="' + recallToBackpackHREF + '">Fast BP</span> |'+
						'&nbsp;<span style="cursor:pointer; text-decoration:underline; color:blue;" href="' + recallToGuildStoreHREF + '">Fast GS</span> |'+
						'&nbsp;<span style="cursor:pointer; text-decoration:underline; color:blue;" href="' + recallToBackpackHREF + '">Fast Wear</span></nobr>';
					var fastBPSpan = recallCell.firstChild.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
					fastBPSpan.addEventListener('click', Helper.recallItem, true);
					var fastGSSpan = fastBPSpan.nextSibling.nextSibling;
					fastGSSpan.addEventListener('click', Helper.recallItem, true);
					var fastWearSpan = fastGSSpan.nextSibling.nextSibling;
					fastWearSpan.addEventListener('click', Helper.recallItemNWear, true);
				} else {
					output = '<nobr>' + recallCell.innerHTML + '|' +
						'&nbsp;<span style="cursor:pointer; text-decoration:underline; color:blue;" href="' + recallToGuildStoreHREF + '">Fast GS</span>';
					if (!itemWorn) {
						output += ' |&nbsp;<span style="cursor:pointer; text-decoration:underline; color:blue;" id="Helper:equipProfileInventoryItem' + inventoryItemID +
							'" itemID="' + inventoryItemID + '">Fast Wear</span>';
					}
					output += '</nobr>';
					recallCell.innerHTML = output;
					fastGSSpan = recallCell.firstChild.firstChild.nextSibling.nextSibling.nextSibling;
					fastGSSpan.addEventListener('click', Helper.recallItem, true);
					if (!itemWorn) {
						fastWearSpan = fastGSSpan.nextSibling.nextSibling;
						fastWearSpan.addEventListener('click', Helper.equipProfileInventoryItem, true);
					}
				}
			}
		}
	},

	recallItem: function(evt) {
		var href=evt.target.getAttribute("href");
		System.xmlhttp(href, Helper.recallItemReturnMessage, {"target": evt.target, "url": href});
	},

	recallItemReturnMessage: function(responseText, callback) {
		var target = callback.target;
		var info = Layout.infoBox(responseText);
		var itemCellElement = target.parentNode;
		if (info.search("You successfully recalled the item") != -1) {
			itemCellElement.innerHTML = "<span style='color:green; font-weight:bold;'>" + info + "</span>";
		} else if (info!=="") {
			itemCellElement.innerHTML = "<span style='color:red; font-weight:bold;'>" + info + "</span>";
		} else {
			itemCellElement.innerHTML = "<span style='color:red; font-weight:bold;'>Weird Error: check the Tools>Error Console</span>";
			GM_log("Post the previous HTML and the following message to the code.google.com site or to the forum to help us debug this error");
			GM_log(callback.url);
		}
	},

	recallItemNWear: function(evt) {
		var href=evt.target.getAttribute("href");
		System.xmlhttp(href, Helper.recallItemNWearReturnMessage, {"target": evt.target, "url": href});
	},

	recallItemNWearReturnMessage: function(responseText, callback) {
		var target = callback.target;
		var info = Layout.infoBox(responseText);
		var itemCellElement = target.parentNode;
		if (info.search("You successfully") != -1) {
			itemCellElement.innerHTML = "<span style='color:green; font-weight:bold;'>Taken</span>";
			System.xmlhttp(System.server+'?cmd=trade', Helper.wearRecall, itemCellElement);
		} else if (info!=="") {
			itemCellElement.innerHTML = "<span style='color:red; font-weight:bold;'>Error</span>";
		}
	},

	wearRecall: function(responseText, callback) {
		var doc=System.createDocument(responseText);
		var items=System.findNodes('//input[@name="sendItemList[]"]',doc);
		if (items) {
			var itemId=items[items.length-1].getAttribute('value');
			System.xmlhttp(System.server+'?cmd=profile&subcmd=equipitem&inventory_id='+itemId+'&folder_id=0&backpack_page=0',
				function(responseText) {
					var info = Layout.infoBox(responseText);
					if (info==="")
						callback.innerHTML += "<br><span style='color:green; font-weight:bold;'>Worn</span>";
					else
						callback.innerHTML += "<br><span style='color:red; font-weight:bold;'>" + info + "</span>";
				});
		}
	},

	injectGuildAddTagsWidgets: function() {
		//<td><input type="checkbox" name="tagIndex[]" value="22302759" onclick="updateTagPrice(this, 100);"></td><td><center><img src="http://huntedcow.cachefly.net/fs/items/6317.gif" class="tipped" data-tipped-options="skin: 'fsItem'" data-tipped="fetchitem.php?item_id=6317&inv_id=22302759&t=4&p=46796&currentPlayerId=1599987" border=0 height=30></center>
		var itemTable = System.findNode("//img[contains(@src,'/items/')]/ancestor::table[1]");
		if (itemTable) {
			for (var i=1;i<itemTable.rows.length;i++) {
				var aRow = itemTable.rows[i];
				if (aRow.cells[2]) { // itemRow
					itemId = aRow.cells[0].firstChild.getAttribute("value");
					aRow.cells[2].innerHTML += '&nbsp;<span style="cursor:pointer; text-decoration:underline; color:blue;" itemID="' + itemId + '">Fast BP</span>';
					itemRecall = aRow.cells[2].firstChild.nextSibling;
					itemRecall.addEventListener('click', Helper.recallGuildStoreItem, true);
				}
			}
		}
		$('b:contains("100 x Item Level")').closest('tr').next().children('td:first').append('<input type="button" id="fshCheckAlTag" value="Check All">');
		$("#fshCheckAlTag").click(function()
		{
			$("input[name*=tagIndex]").each(function()
			{
				//this.checked = !this.checked;
				this.click();
			});
		});
	},

	changeCombatSet: function(responseText, itemIndex) {
		var doc=System.createDocument(responseText);

		var cbsSelect = System.findNode("//select[@name='combatSetId']", doc);

		// find the combat set id value
		var allItems = cbsSelect.getElementsByTagName("option");
		if (itemIndex >= allItems.length) {return;}
		var cbsIndex = allItems[itemIndex].value;

		GM_xmlhttpRequest({
			method: 'POST',
			url: System.server + "index.php",
			headers: {
			//	"User-Agent" : navigator.userAgent,
				"Content-Type": "application/x-www-form-urlencoded",
			//	"Referer": System.server + "index.php?cmd=profile",
			//	"Cookie" : document.cookie
			},
			data: "cmd=profile&subcmd=managecombatset&combatSetId="+cbsIndex+"&submit=Use",
			onload: function() {
				window.location="index.php?cmd=profile";
			}
		});
	},

	injectDropItems: function() {
		var subPage2Id=System.findNode("//input[@type='hidden' and @name='subcmd2']");
		subPage2Id=subPage2Id?subPage2Id.getAttribute("value"):"-";
		var mainTable = System.findNode("//table[tbody/tr/td/table/tbody/tr/td/input[@name='storeIndex[]']]");
		var showExtraLinks = GM_getValue("showExtraLinks");
		var showQuickDropLinks = GM_getValue("showQuickDropLinks");
		var showQuickSendLinks = GM_getValue("showQuickSendLinks");
		if (mainTable) {
			var insertHere = mainTable.rows[5].cells[0];
			insertHere.innerHTML += '[<span style="cursor:pointer; text-decoration:underline; color:blue;" id="Helper:showExtraLinks">' +
				(showExtraLinks?'Hide':'Show') + ' AH and Sell links</span>]&nbsp;';
			insertHere.innerHTML += '[<span style="cursor:pointer; text-decoration:underline; color:blue;" id="Helper:showQuickDropLinks">' +
				(showQuickDropLinks?'Hide':'Show') + ' Quick Drop links</span>]&nbsp;';

			if (subPage2Id && subPage2Id == "dostoreitems") {
				insertHere.innerHTML += '[<span style="cursor:pointer; text-decoration:underline; color:blue;" id="Helper:selectAllGuildLocked">' +
					' Select All Guild Locked</span>]&nbsp;';
				document.getElementById("Helper:selectAllGuildLocked").addEventListener('click', Helper.selectAllGuildLocked, true);
			}
			document.getElementById("Helper:showExtraLinks").addEventListener('click', Helper.toggleShowExtraLinks, true);
			document.getElementById("Helper:showQuickDropLinks").addEventListener('click', Helper.toggleShowQuickDropLinks, true);
		}

		//function to add links to all the items in the drop items list
		var itemName, itemInvId, theTextNode, newLink;
		var allItems=System.findNodes("//input[@type='checkbox'][@name='removeIndex[]' or @name='storeIndex[]']");
		if (allItems) {
			for (var i=0; i<allItems.length; i++) {
				anItem = allItems[i];
				itemInvId = anItem.value;
				theTextNode = System.findNode("../../td[3]", anItem);
				theImgElement = System.findNode("../../td[2]", anItem).firstChild.firstChild;
				itemStats = /fetchitem.php\?item_id=(\d+)\&inv_id=(\d+)\&t=(\d+)\&p=(\d+)/.exec($(theImgElement).data("tipped"));
				if (itemStats) {
					itemId = itemStats[1];
					invId = itemStats[2];
					type = itemStats[3];
					pid = itemStats[4];
				}
				itemName = theTextNode.textContent.trim().replace("\\","");
				theTextNode.textContent = itemName;
				var findItems = System.findNodes('//td[@width="90%" and contains(.,"'+itemName+'")]');
				var preText = "", postText1 = "", postText2 = "", postText3 = "";
				if (showExtraLinks) {
					preText = "<span findme='AH'>[<a href='" + System.server + "?cmd=auctionhouse&type=-1&order_by=1&search_text=" +
						escape(itemName) +
						"'>AH</a>]</span> " +
						"<span findme='Sell'>[<a href='" + System.server + "index.php?cmd=auctionhouse&subcmd=create2" +
						"&inv_id=" + itemInvId  +
						//"&item_id=" + itemId +
						//"&type=" + type +
						//"&pid=" + pid + 
						"'>Sell</a>]</span>" +
						"[<a href='http://guide.fallensword.com/index.php?cmd=items&subcmd=view" +
						"&item_id=" + itemId +
						"' target='_blank'>UFSG</a>] ";
				}
				postText1 = ((findItems.length>1)?' [<span findme="checkall" linkto="' +
					itemName +
					'" style="text-decoration:underline;cursor:pointer">Check all</span>]':'');
				if (showQuickDropLinks) {
					postText2 = "&nbsp;<span  title='INSTANTLY DROP THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk.' id='Helper:QuickDrop" +
						itemInvId +
						"' itemInvId=" +
						itemInvId +
						" findme='QuickDrop' style='color:red; cursor:pointer; text-decoration:underline;'>[Quick Drop]</span> ";
				}
				if (showQuickSendLinks) {
					postText3 = "&nbsp;<span  title='INSTANTLY SENDS THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk.' id='Helper:QuickSend" +
						itemInvId +
						"' itemInvId=" +
						itemInvId +
						" findme='QuickSend' style='color:blue; cursor:pointer; text-decoration:underline;'>[Quick Send]</span> ";
				}

				theTextNode.innerHTML = preText +
					theTextNode.innerHTML +
					postText1 +
					postText2 +
					postText3;
				if (showQuickDropLinks) {
					document.getElementById("Helper:QuickDrop"+itemInvId).addEventListener('click', Helper.quickDropItem, true);
				}
				if (showQuickSendLinks) {
					document.getElementById("Helper:QuickSend"+itemInvId).addEventListener('click', Helper.quickSendItem, true);
				}
			}
		}

		var checkAllElements = System.findNodes("//span[@findme='checkall']");
		if (checkAllElements) {
			for (i=0; i<checkAllElements.length; i++) {
				checkAllElement = checkAllElements[i];
				itemName = checkAllElement.linkto;
				checkAllElement.addEventListener('click', Helper.checkAll, true);
			}
		}

		allItems = System.findNodes("//input[@type='checkbox'][@name='removeIndex[]' or @name='storeIndex[]']");
		if (allItems) {
			for (i=0; i<allItems.length; i++) {
				anItem = allItems[i];
				theLocation=anItem.parentNode.nextSibling.nextSibling;
				theImage=anItem.parentNode.nextSibling.firstChild.firstChild;
				System.xmlhttp(Helper.linkFromMouseover($(theImage).data("tipped")), Helper.injectDropItemsPaint, theImage);
			}
		}

		Helper.addStatTotalToMouseover();
	},

	injectMoveItems: function() {
		var foldersEnabled = System.findNode("//img[contains(@src,'/folder_on.gif')]");
		if (! foldersEnabled) {return;}
		var otherFolders = System.findNodes("//td/center/a/img[contains(@src,'/folder.gif')]");
		if (! otherFolders) {return;}
		var cell=foldersEnabled.parentNode.parentNode.parentNode.parentNode.parentNode.insertRow(-1).insertCell(-1);
		cell.colSpan = otherFolders.length + 1;
		cell.align='center';
		cell.noWrap = true;
		var newHtml='Move selected items to: <select name=folder id=selectFolderId class=customselect>';
		for (var i=0; i<otherFolders.length; i++) {
			newHtml+='<option value='+otherFolders[i].parentNode.getAttribute("href").match(/cmd=profile&subcmd=dropitems&folder_id=(-*\d+)/i)[1]+'>'+
				otherFolders[i].parentNode.parentNode.textContent+'</option>';
		}
		newHtml+='</select> <input type=button class=custombutton id="Helper::moveItems" value=Move>';
		cell.innerHTML=newHtml;
		document.getElementById("Helper::moveItems").addEventListener('click', Helper.moveItemsToFolder, true);
	},

	moveItemsToFolder: function() {
		var itemsList = System.findNodes('//input[@name="removeIndex[]"]');
		var selectElem = document.getElementById('selectFolderId');
		var postData = 'cmd=profile&subcmd=sendtofolder&folder_id='+selectElem.options[selectElem.selectedIndex].value;
		var haveItems = false;
		var postItems = '';
		var countItems = 0;
		for (var i=0; i<itemsList.length; i++) {
			if (itemsList[i].checked) {
				countItems++;
				postItems+='&folderItem[]='+itemsList[i].value;
			}
			if (countItems == 12 || (countItems > 0 && i == itemsList.length - 1)) {
				// multiple posts since HCS only move the first 12 items to other folder
				GM_xmlhttpRequest({
					method: 'POST',
					url: System.server + "index.php",
					headers: {
					//	"User-Agent" : navigator.userAgent,
						"Content-Type": "application/x-www-form-urlencoded",
					//	"Referer": document.location,
					//	"Cookie" : document.cookie
					},
					data: postData+postItems
				});
				countItems = 0;
				postItems = '';
				haveItems = true;
			}
		}
		if (haveItems)
			setTimeout(function() {window.location=window.location;}, 100);
	},

	quickDropItem: function(evt){
		var itemInvId = evt.target.getAttribute("itemInvId");
		var dropItemHref = System.server + "index.php?cmd=profile&subcmd=dodropitems&removeIndex[]=" + itemInvId;
		System.xmlhttp(dropItemHref,
			Helper.quickDropItemReturnMessage,
			{"target": evt.target, "url": dropItemHref});
	},

	quickDropItemReturnMessage: function(responseText, callback) {
		var target = callback.target;
		var info = Layout.infoBox(responseText);
		target.style.cursor = 'default';
		target.style.textDecoration = 'none';
		if (info.search("Items dropped and destroyed.") != -1) {
			target.style.color = 'green';
			target.style.fontWeight = 'bold';
			target.style.fontSize = 'small';
			target.innerHTML = "Item Dropped";
		} else if (info!=="") {
			target.style.color = 'red';
			target.style.fontWeight = 'bold';
			target.style.fontSize = 'small';
			target.innerHTML = "Error: " + info;
		} else {
			target.style.color = 'red';
			target.style.fontSize = 'small';
			target.innerHTML = "Weird Error: check the Tools>Error Console";
			GM_log("Post the previous HTML and the following message to the code.google.com site or to the forum to help us debug this error");
			GM_log(callback.url);
		}
	},

	quickSendItem: function(evt){
		var itemInvId = evt.target.getAttribute("itemInvId");
		var xcNum = GM_getValue("goldConfirm");
		var itemRecipient = GM_getValue("itemRecipient");
		var sendItemHref = System.server + "index.php?cmd=trade&subcmd=senditems&xc=" + xcNum + "&target_username=" + itemRecipient + "&sendItemList[]=" + itemInvId;
		System.xmlhttp(sendItemHref,
			Helper.quickSendItemReturnMessage,
			{"target": evt.target, "url": sendItemHref});
	},

	quickSendItemReturnMessage: function(responseText, callback) {
		var target = callback.target;
		var info = Layout.infoBox(responseText);
		var itemRecipient = GM_getValue("itemRecipient");
		target.style.cursor = 'default';
		target.style.textDecoration = 'none';
		if (info==="Items sent successfully!") {
			target.style.color = 'green';
			target.style.fontWeight = 'bold';
			target.style.fontSize = 'small';
			target.innerHTML = "Item sent to " + itemRecipient + "!";
		} else if (info!=="") {
			target.style.color = 'red';
			target.style.fontWeight = 'bold';
			target.style.fontSize = 'small';
			target.innerHTML = "Error: " + info;
		} else {
			target.style.color = 'red';
			target.style.fontSize = 'small';
			target.innerHTML = "Weird Error: check the Tools>Error Console";
			GM_log("Post the previous HTML and the following message to the code.google.com site or to the forum to help us debug this error");
			GM_log(callback.url);
		}
	},

	selectAllGuildLocked: function(evt) {
		var allGuildLockedItems = System.findNodes("//span[@id='guildLocked']");
		if (allGuildLockedItems) {
		for (var i = 0; i < allGuildLockedItems.length; i++) {
			var cbNode = System.findNode("../../td/input[@type='checkbox'][@name='removeIndex[]' or @name='storeIndex[]']", allGuildLockedItems[i]);
			cbNode.checked = true;
		}
		}
	},

	checkAll: function(evt){
		var itemName = evt.target.getAttribute("linkto");
		var findItems = System.findNodes("//td[@width='90%' and contains(.,'] "+itemName+" [')]");
		for (var i=0; i<findItems.length; i++) {
			var item = findItems[i];
			var checkboxForItem = item.previousSibling.previousSibling.firstChild;
			if (checkboxForItem.checked) {
				checkboxForItem.checked = false;
			} else {
				checkboxForItem.checked = true;
			}

		}
	},

	injectDropItemsPaint: function(responseText, callback) {
		var textNode = System.findNode("../../../td[3]", callback);
		var auctionHouseLink=System.findNode("span[@findme='AH']", textNode);
		var sellLink=System.findNode("span[@findme='Sell']", textNode);
		var quickDropLink=System.findNode("span[@findme='QuickDrop']", textNode);
		var guildLockedRE = /<center>Guild Locked: <font color="#00FF00">/i;

		if (guildLockedRE.exec(responseText)) {
			if (auctionHouseLink) auctionHouseLink.style.visibility='hidden';
			if (sellLink) sellLink.style.visibility='hidden';
			if (quickDropLink) quickDropLink.style.visibility='hidden';
			textNode.innerHTML += '<span id="guildLocked" visibility="hidden"/>';
		}
		//<font color='cyan'>Bound (Non-Tradable)</font></b> <font color='orange'>Quest Item </font></center>
		var boundItemRE = /Bound \(Non-Tradable\)/i;
		if (boundItemRE.exec(responseText)) {
			if (auctionHouseLink) auctionHouseLink.style.visibility='hidden';
			if (sellLink) sellLink.style.visibility='hidden';
			//~ if (quickDropLink) quickDropLink.style.visibility='hidden';
		}
		if (GM_getValue("disableItemColoring")) {return;}
		var fontLineRE=/<nobr><font color='(#[0-9A-F]{6})' size=2>/i;
		var fontLineRX=fontLineRE.exec(responseText);
		var color=fontLineRX[1];
		if (color=="#FFFFFF") {
			var fontLineRE2=/<br>\s*<font color='([a-z]+)'>/i;
			var fontLineRX2=fontLineRE2.exec(responseText);
			if (fontLineRX2) {
				color=fontLineRX2[1];
			}
		}
		if (color=="#40FFFF") color="#00A0A0";
		if (color=="orange") color="#FF6000";
		if (color=="#00FF00") color="#00B000";
		textNode.style.color=color;
	},

	injectProfile: function() {
		var player = System.findNode("//textarea[@id='holdtext']");
		var avyImg;
		var playername;
		if (navigator.userAgent.indexOf("Firefox")>0) {
			avyImg = System.findNode("//img[contains(@title, 's Avatar')]");
			if (avyImg) playername = avyImg.getAttribute("title");
		} else { //chrome
			avyImg = System.findNode("//img[contains(@oldtitle, 's Avatar')]");
			if (avyImg) playername = avyImg.getAttribute("oldtitle");
		}
		if (!avyImg) {return;}
		if(document.URL.indexOf("player_id") != -1){
			var playeridRE = document.URL.match(/player_id=(\d+)/);
			if (playeridRE) var playerid=playeridRE[1];
		}
		var idindex;
//************** yuuzhan having fun
			$('img[title="yuuzhan\'s Avatar"]').click(function(){alert("Winner!");});
			$('img[title="yuuzhan\'s Avatar"]').attr('src','http://evolutions.yvong.com/images/tumbler.gif');
//**************
		Helper.profileInjectGuildRel();
		if (GM_getValue("enableBioCompressor")) Helper.compressBio();
		var isSelfRE=$('#backpack_tabs').length > 0;// /player_id=/.exec(document.location.search);//
		if (player) {
			if (!playerid) {
				playerid = player.innerHTML;
				idindex = playerid.indexOf("?ref=") + 5;
				playerid = playerid.substr(idindex);
			}

			avyImg.style.borderStyle="none";
			playername = playername.substr(0, playername.indexOf("'s Avatar"));

			var avyExtrasDiv = document.createElement("DIV");
			avyImg.parentNode.appendChild(avyExtrasDiv);
			avyExtrasDiv.align = 'center';
			Helper.profileInjectQuickButton(avyExtrasDiv, playerid, playername);
			Helper.profileRenderBio(playername);
			Helper.buffCost={'count':0,'buffs':{}};

			Helper.bioAddEventListener();

/*			if (isSelfRE) {
				alert(playerid);
				var quickBuffLink = System.findNode("//a[contains(@href,'index.php?cmd=quickbuff&t=')]");
				if (quickBuffLink) quickBuffLink.setAttribute('href', "javascript:openWindow('index.php?cmd=quickbuff&tid=" + playerid + "', 'fsQuickBuff', 618, 1000, ',scrollbars')");
			}
*/		}

		var invSectionToggle = System.findNode("//span/a[@href='index.php?cmd=profile&subcmd=togglesection&section_id=2']");
		if (invSectionToggle) {
			invSectionToggle.parentNode.innerHTML += "&nbsp;[<a href='index.php?cmd=notepad&blank=1&subcmd=checkwear&playerid="+playerid+"'><span style='color:blue;'>Check&nbsp;Items</span></a>]";
		}

		if (isSelfRE) { // self inventory

			Helper.profileParseAllyEnemy();
			Helper.profileInjectFastWear();
			Helper.profileComponents();

			// quick wear manager link
			var node=System.findNode("//span/a[@href='index.php?cmd=profile&subcmd=togglesection&section_id=2']");
			if (node) {
				node.parentNode.innerHTML+="&nbsp;[<a href='/index.php?cmd=notepad&blank=1&subcmd=quickwear'><span style='color:blue;'>Quick&nbsp;Wear</span></a>]";
			}
			//select all link
			var node=System.findNode("//span/a[contains(@href,'cmd=profile&subcmd=dropitems')]");
			if (node) {
				node.parentNode.innerHTML+="&nbsp;<span id='Helper:profileSelectAll' style='cursor:pointer; text-decoration:underline; font-size:x-small; color:blue;'>[All]</span>";
				document.getElementById('Helper:profileSelectAll').addEventListener('click', Helper.profileSelectAll, true);
			}

			//Update the ally/enemy online list, since we are already on the page.
			//doc = System.findNode("//html");
			//Helper.parseProfileForWorld(doc.innerHTML, true);
			// No point doing this twice!

			// store the VL of the player
			var virtualLevel = parseInt(System.findNode("//td[a/b[.='VL'] or b/a[.='VL']]/following-sibling::td[1]").textContent,10);
			if (Helper.characterLevel == virtualLevel) {
				GM_setValue('characterVirtualLevel',"");
			} else {
				GM_setValue('characterVirtualLevel',virtualLevel);
			}
		}
		Helper.addStatTotalToMouseover();

		//enhance colored dots
		var enhanceOnlineDots = GM_getValue("enhanceOnlineDots");
		if (enhanceOnlineDots) {
			var profileAlliesEnemies = System.findNodes("//div[@id='profileLeftColumn']//table/tbody/tr/td/a[contains(@data-tipped,'Last Activity')]");
			if (profileAlliesEnemies) {
				for (var i=0;i<profileAlliesEnemies.length ;i++ ) {
					var testProfile = profileAlliesEnemies[i];
					var contactLink = testProfile;
					var lastActivity = /<td>Last Activity:<\/td><td>(\d+)d (\d+)h (\d+)m (\d+)s<\/td>/.exec($(contactLink).data('tipped'));
					var lastActivityDays = parseInt(lastActivity[1],10);
					var lastActivityHours = parseInt(lastActivity[2],10) + (lastActivityDays*24);
					var lastActivityMinutes = parseInt(lastActivity[3],10) + (lastActivityHours*60);
					if (lastActivityMinutes < 2) {
						contactLink.parentNode.previousSibling.innerHTML = '<img width="10" height="10" title="Online" src="' + Data.greenDiamond() + '">';
					} else if (lastActivityMinutes < 5) {
						contactLink.parentNode.previousSibling.innerHTML = '<img width="10" height="10" title="Offline" src="' + Data.yellowDiamond() + '">';
					} else if (lastActivityMinutes < 30) {
						contactLink.parentNode.previousSibling.innerHTML = '<img width="10" height="10" title="Offline" src="' + Data.orangeDiamond() + '">';
					} else if (lastActivityMinutes > 10080) {
						contactLink.parentNode.previousSibling.innerHTML = '<img width="10" height="10" title="Offline" src="' + Data.sevenDayDot() + '">';
					} else {
						contactLink.parentNode.previousSibling.innerHTML = '<img width="10" height="10" title="Offline" src="' + Data.offlineDot() + '">';
					}
				}
			}
		}
	},

	addStatTotalToMouseover: function() {
		if (GM_getValue("showStatBonusTotal")) {
			$.subscribe('afterUpdate.Tipped', function(e, data){
				var $e = $(data.element);

				// already modified || not an item
				if(!data.skin == 'fsItem' || $e.is('.fsh'))
					return;
				$(data.content).find('font:contains("Bonuses")').closest('tr').each(function(index){
					var itemTable = $(this).closest('table');
					var attackStatElement = $(itemTable).find('td:contains("Attack:"):not(:contains(" Attack:"))');
					var attackStat = (attackStatElement.length > 0)? attackStatElement.next().text().replace(/\+/g,"")*1:0;
					var defenseStatElement = $(itemTable).find('td:contains("Defense:"):not(:contains(" Defense:"))');
					var defenseStat = (defenseStatElement.length > 0)? defenseStatElement.next().text().replace(/\+/g,"")*1:0;
					var armorStatElement = $(itemTable).find('td:contains("Armor:"):not(:contains(" Armor:"))');
					var armorStat = (armorStatElement.length > 0)? armorStatElement.next().text().replace(/\+/g,"")*1:0;
					var damageStatElement = $(itemTable).find('td:contains("Damage:"):not(:contains(" Damage:"))');
					var damageStat = (damageStatElement.length > 0)? damageStatElement.next().text().replace(/\+/g,"")*1:0;
					var hpStatElement = $(itemTable).find('td:contains("HP:"):not(:contains(" HP:"))');
					var hpStat = (hpStatElement.length > 0)? hpStatElement.next().text().replace(/\+/g,"")*1:0;
					var totalStats = attackStat + defenseStat + armorStat + damageStat + hpStat;
					$(this).nextAll('tr:contains("Enhance"):first').before("<tr style='color:DodgerBlue;'><td align='right'>Stat Total:</td><td align='right'>" + totalStats + "&nbsp;</td></tr>");
				});
			unsafeWindow.Tipped.refresh(data.element);
			});
		}
	},

	profileInjectFastWear: function() {
		// Fast Wear
		var profileInventory = System.findNode("//table[tbody/tr/td/center/a[contains(@href,'subcmd=equipitem') or contains(@onclick,'subcmd=useitem')]]");
		var enableQuickDrink = GM_getValue("enableQuickDrink")
		if (profileInventory) {
			var profileInventoryIDRE = /inventory_id=(\d+)/i;
			var foldersEnabled = System.findNode("//img[contains(@src,'folder_on.gif')]");

			var profileInventoryBox = [];
			var profileInventoryBoxItem = [];
			var profileInventoryBoxID = [];
			for (var i=0;i<12;i++) {
				if (foldersEnabled) {
					if (profileInventory.rows[2*(i >> 2)]) profileInventoryBox[i]=profileInventory.rows[2*(i >> 2)].cells[i % 4];
				} else {
					if (profileInventory.rows[i >> 2]) profileInventoryBox[i]=profileInventory.rows[i >> 2].cells[i % 4];
				}
				if (profileInventoryBox[i]) profileInventoryBoxItem[i] = profileInventoryBox[i].firstChild;
				if (profileInventoryBoxItem[i]) {
					var itemHREF = profileInventoryBoxItem[i].firstChild.getAttribute("href");
					if (itemHREF == '#') itemHREF = /window.location = \'(.*)\'/.exec(profileInventoryBoxItem[i].firstChild.getAttribute("onclick"))[1];
					if (itemHREF && profileInventoryIDRE.exec(itemHREF)) profileInventoryBoxID[i] = profileInventoryIDRE.exec(itemHREF)[1];
				}
			}

			var newRow;

			for (i=0;i<12;i++) {
				if ((i % 4===0) && profileInventoryBoxItem[i] && !foldersEnabled) newRow = profileInventory.insertRow(2*(i >> 2)+1);
				if ((i % 4===0) && profileInventoryBoxItem[i] && foldersEnabled) newRow = profileInventory.insertRow(3*(i >> 2)+1);
				if (profileInventoryBoxItem[i] && profileInventoryBoxID[i]) {
					var itemHREF = profileInventoryBoxItem[i].firstChild.getAttribute("href");
					var itemOnClick = profileInventoryBoxItem[i].firstChild.getAttribute("onclick");
					if (itemHREF.indexOf("subcmd=equipitem") != -1) { // check to see if item is equipable.
						var output = '<span style="cursor:pointer; text-decoration:underline; color:blue; font-size:x-small;" '+
								'id="Helper:equipProfileInventoryItem' + profileInventoryBoxID[i] + '" ' +
								'itemID="' + profileInventoryBoxID[i] + '">Wear</span>';
						var newCell = newRow.insertCell(i % 4);
						newCell.align = 'center';
						newCell.innerHTML = output;
						document.getElementById('Helper:equipProfileInventoryItem' + profileInventoryBoxID[i]).
							addEventListener('click', Helper.equipProfileInventoryItem, true);
					}
					else if (enableQuickDrink && itemOnClick && itemOnClick.indexOf("this potion") != -1) { // check to see if item is useable (potion).
						var output = '<span style="cursor:pointer; text-decoration:underline; color:blue; font-size:x-small;" '+
								'id="Helper:drinkProfileInventoryItem' + profileInventoryBoxID[i] + '" ' +
								'itemID="' + profileInventoryBoxID[i] + '">Drink</span>';
						var newCell = newRow.insertCell(i % 4);
						newCell.align = 'center';
						newCell.innerHTML = output;
						document.getElementById('Helper:drinkProfileInventoryItem' + profileInventoryBoxID[i]).
							addEventListener('click', Helper.drinkProfileInventoryItem, true);
					}
					else {
						newCell = newRow.insertCell(i % 4); // dummy cell if we don't put a wear link up.
					}
				} else if (profileInventoryBoxItem[i] && !profileInventoryBoxID[i]){
					newCell = newRow.insertCell(i % 4); // dummy cell if we don't put a wear link up.
				}
			}
		}
	},

	enableDelComponent: function() {
		var nodes=System.findNodes('//a[contains(@href,"cmd=profile&subcmd=destroycomponent&component_id=")]');
		if (nodes) {
			for (var i=0;i<nodes.length;i++) {
				nodes[i].parentNode.innerHTML+='<span id=compDelBtn'+i+' compid='+
					nodes[i].getAttribute('href').match(/destroycomponent&component_id=(\d+)/i)[0]+
					' style="text-decoration:underline;cursor:pointer;color:#A0CFEC">Del</span>';
				document.getElementById('compDelBtn'+i).addEventListener('click',Helper.delComponent,true);
			}
		}
		//~ document.getElementById('compDel').innerHTML='';
		$("#compDel").hide();
		$("#compDelAll").show();
	},

	delComponent: function(evt) {
		var id=evt.target.getAttribute('compid');
		System.xmlhttp('index.php?cmd=profile&subcmd=destroycomponent&component_id='+id,
			function(responseText) {
				if (Layout.infoBox(responseText)=='Component destroyed.')
					evt.target.parentNode.innerHTML='';
				else
					evt.target.innerHTML=Layout.infoBox(responseText);
			});
	},

	profileParseAllyEnemy: function() {
		// Allies/Enemies count/total function
		var alliesTotal = GM_getValue("alliestotal");
		var alliesTitle = System.findNode("//div[strong[.='Allies']]");
		var alliesTable = alliesTitle.nextSibling.nextSibling;
		if (alliesTable) {
			var numberOfAllies = 0;
			var startIndex = 0;
			while (alliesTable.innerHTML.indexOf("/avatars/", startIndex+1) != -1) {
				numberOfAllies ++;
				startIndex = alliesTable.innerHTML.indexOf("/avatars/",startIndex+1);
			}
			startIndex = 0;
			while (alliesTable.innerHTML.indexOf("/skin/player_default.jpg", startIndex+1) != -1) {
				numberOfAllies ++;
				startIndex = alliesTable.innerHTML.indexOf("/skin/player_default.jpg",startIndex+1);
			}
			alliesTitle.innerHTML += "&nbsp<span style='color:blue'>" + numberOfAllies + "</span>";
			if (alliesTotal && alliesTotal >= numberOfAllies) {
				alliesTitle.innerHTML += "/<span style='color:blue' findme='alliestotal'>" + alliesTotal + "</span>";
			}
		}
		var enemiesTotal = GM_getValue("enemiestotal");
		var enemiesTitle = System.findNode("//div[strong[.='Enemies']]");
		var enemiesTable = enemiesTitle.nextSibling.nextSibling;
		if (enemiesTable) {
			var numberOfEnemies = 0;
			startIndex = 0;
			while (enemiesTable.innerHTML.indexOf("/avatars/", startIndex+1) != -1) {
				numberOfEnemies ++;
				startIndex = enemiesTable.innerHTML.indexOf("/avatars/",startIndex+1);
			}
			startIndex = 0;
			while (enemiesTable.innerHTML.indexOf("/skin/player_default.jpg", startIndex+1) != -1) {
				numberOfEnemies ++;
				startIndex = enemiesTable.innerHTML.indexOf("/skin/player_default.jpg",startIndex+1);
			}
			enemiesTitle.innerHTML += "&nbsp;<span style='color:blue'>" + numberOfEnemies + "</span>";
			if (enemiesTotal && enemiesTotal >= numberOfEnemies) {
				enemiesTitle.innerHTML += "/<span style='color:blue' findme='enemiestotal'>" + enemiesTotal + "</span>";
			}
		}

		//store a list of allies and enemies for use in coloring
		listOfAllies = " ";
		if (alliesTable) {
			var alliesTableActual = alliesTable.firstChild.nextSibling.firstChild.nextSibling;
			for (var i=0;i<alliesTableActual.rows.length;i++) {
				var aRow = alliesTableActual.rows[i];
				for (var j=0;j<alliesTableActual.rows[i].cells.length;j++) {
					var aCell = aRow.cells[j];
					if (aCell.firstChild.firstChild.nextSibling) {
						var allyNameTable = aCell.firstChild.firstChild.nextSibling.nextSibling;
						var allyName = allyNameTable.rows[0].cells[1].firstChild.textContent;
						listOfAllies += allyName + " ";
					}
				}
			}
		}

		listOfEnemies = " ";
		if (enemiesTable) {
			var enemiesTableActual = enemiesTable.firstChild.nextSibling.firstChild.nextSibling;
			for (i=0;i<enemiesTableActual.rows.length;i++) {
				aRow = enemiesTableActual.rows[i];
				for (j=0;j<enemiesTableActual.rows[i].cells.length;j++) {
					aCell = aRow.cells[j];
					if (aCell.firstChild.firstChild.nextSibling) {
						var enemyNameTable = aCell.firstChild.firstChild.nextSibling.nextSibling;
						var enemyName = enemyNameTable.rows[0].cells[1].firstChild.textContent;
						listOfEnemies += enemyName + " ";
					}
				}
			}
		}
		GM_setValue("listOfAllies", listOfAllies);
		GM_setValue("listOfEnemies", listOfEnemies);
	},

	addClickListener: function(id, listener) {
		var node=document.getElementById(id);
		if (node) node.addEventListener('click', listener, true);
	},

	bioAddEventListener: function() {
		Helper.addClickListener("Helper:sendBuffMsg", Helper.getBuffsToBuy);
		var i=0;
		while (true) {
			var buff=document.getElementById('Helper:buff'+i);
			if (buff) {
				buff.addEventListener('click', Helper.toggleBuffsToBuy,true);
				i++;
			} else
				break;
		}
		Helper.addClickListener('Helper:bioExpander', Helper.expandBio);
	},

	profileRenderBio: function(playername) {
		var bioDiv = System.findNode("//div[strong[.='Biography']]");
		var bioCell = bioDiv.nextSibling.nextSibling;
		var renderBio=(bioCell && GM_getValue("renderSelfBio")) || (!bioCell && GM_getValue("renderOtherBios"));
		GM_setValue("buffsToBuy", "");
		if (!renderBio || !bioCell) {return;}

		var bioContents = bioCell.innerHTML;
		bioContents=bioContents.replace(/\{b\}/g,'`~').replace(/\{\/b\}/g,'~`');
		var buffs=bioContents.match(/`~([^~]|~(?!`))*~`/g);
		if (buffs) {
			for (var i=0;i<buffs.length;i++) {
				var fullName=buffs[i].replace(/(`~)|(~`)|(\{b\})|(\{\/b\})/g,'');
				var buffName = Helper.removeHTML(fullName);
				var cbString =
					'<span id="Helper:buff'+i+'" style="color:blue;cursor:pointer">'+
					fullName+'</span>';
				bioContents=bioContents.replace(buffs[i], cbString);
			}

			if (bioContents.indexOf("[cmd]") < 0) bioContents+="[cmd]";

			bioContents = bioContents.replace("[cmd]",'<input id="Helper:sendBuffMsg" subject="buffMe" target_player="' +
				playername +'" class="custombutton" type="submit" value="Ask For Buffs"/>'+
				'<span id=buffCost style="color:red"></span>');
		}
		bioCell.innerHTML = bioContents;
	},

	profileInjectQuickButton: function(avyrow, playerid, playername) {
		var auctiontext = "Go to " + playername + "'s auctions" ;
		var ranktext = "Rank " +playername + "" ;
		var securetradetext = "Create Secure Trade to " + playername;

		var newhtml = avyrow.innerHTML +
			"<a " + Layout.quickBuffHref(playerid) + ">" +
			"<img alt='Buff " + playername + "' title='Buff " + playername + "' src=" +
			System.imageServer + "/skin/realm/icon_action_quickbuff.gif></a>&nbsp;&nbsp;";
		if (!GM_getValue("enableMaxGroupSizeToJoin")) {
			newhtml += "<a href='" + System.server + "index.php?cmd=guild&subcmd=groups&subcmd2=joinall" +
				"');'><img alt='Join All Groups' title='Join All Groups' src=" +
				System.imageServer + "/skin/icon_action_join.gif></a>&nbsp;&nbsp;";
		} else {
			var maxGroupSizeToJoin = GM_getValue("maxGroupSizeToJoin");
			newhtml += "<a href='" + System.server + "index.php?cmd=guild&subcmd=groups&subcmd2=joinallgroupsundersize" +
				"');'><img alt='Join All Groups' title='Join All Groups < " + maxGroupSizeToJoin + " Members' src=" +
				System.imageServer + "/skin/icon_action_join.gif></a>&nbsp;&nbsp;";
		}
		newhtml += "<a href=" + System.server + "?cmd=auctionhouse&type=-3&tid=" +
			playerid + '><img alt="' + auctiontext + '" title="' + auctiontext + '" src="' +
			System.imageServer + '/skin/gold_button.gif"></a>&nbsp;&nbsp;' +
			"<a href=" + System.server + "index.php?cmd=trade&subcmd=createsecure&target_username=" +
			playername + '><img alt="' + securetradetext + '" title="' + securetradetext + '" src=' +
			System.imageServer + "/temple/2.gif></a>&nbsp;&nbsp;" +
			"<a href=" + System.server + "?cmd=guild&subcmd=inventory&subcmd2=report&user=" +
			playername + '>[SR]</a>&nbsp;&nbsp;';
		if (Helper.currentGuildRelationship == "self" && GM_getValue("showAdmin")) {
			newhtml +=
				"<a href='" + System.server + "index.php?cmd=guild&subcmd=members&subcmd2=changerank&member_id=" +
				playerid + '><img alt="' + ranktext + '" title="' + ranktext + '" src=' +
				System.imageServerHTTP + "/guilds/" + Helper.guildId + "_mini.jpg></a>";
		}
		avyrow.innerHTML = newhtml ;
	},

	profileInjectGuildRel: function() {
		var aLink = System.findNode("//a[contains(@href,'cmd=guild&subcmd=view')]");
		if (aLink) {
			var guildIdResult = /guild_id=([0-9]+)/i.exec(aLink.getAttribute("href"));
			if (guildIdResult) Helper.guildId = parseInt(guildIdResult[1], 10);
			var warning = document.createElement('span');
			var color = "";
			var changeAppearance = true;
			Helper.currentGuildRelationship = Helper.guildRelationship(aLink.text);
			var settings;
			switch (Helper.currentGuildRelationship) {
				case "self":
					settings="guildSelfMessage";
					break;
				case "friendly":
					settings="guildFrndMessage";
					break;
				case "old":
					settings="guildPastMessage";
					break;
				case "enemy":
					settings="guildEnmyMessage";
					break;
				default:
					changeAppearance = false;
					break;
			}
			if (changeAppearance) {
				var settingsAry=Data.guildRelationshipMessages();
				warning.innerHTML="<br/>" + settingsAry[settings].message;
				color = settingsAry[settings].color;
				aLink.parentNode.style.color=color;
				aLink.style.color=color;
				aLink.parentNode.insertBefore(warning, aLink.nextSibling);
			}
		}
	},

	profileComponents: function() {
		var injectHere = System.findNode("//strong[.='Components']/ancestor::div[1]/following-sibling::div[1]");
		if (injectHere) {
			var componentExtrasDiv = document.createElement("DIV");
			injectHere.appendChild(componentExtrasDiv);
			componentExtrasDiv.innerHTML+='<div id=compDel align=center>[<span style="text-decoration:underline;cursor:pointer;color:#0000FF">Enable Quick Del</span>]</div>'+
				'<div id=compSum align=center>[<span style="text-decoration:underline;cursor:pointer;color:#0000FF">Count Components</span>]</div>'+
				'<div align=center><a href="index.php?cmd=notepad&blank=1&subcmd=quickextract">[<span style="text-decoration:underline;cursor:pointer;color:#0000FF">Quick Extract Components</span>]</a></div>' +
				'<div id=compDelAll align=center>[<span style="text-decoration:underline;cursor:pointer;color:#0000FF">Delete All Visible</span>]</div>';
			document.getElementById('compDel').addEventListener('click', Helper.enableDelComponent, true);
			document.getElementById('compSum').addEventListener('click', Helper.countComponent, true);
			document.getElementById('compDelAll').addEventListener('click', Helper.delAllComponent, true);
			$("#compDelAll").hide();
		} else {
			GM_log("Components div not found! Please let Yuuzhan know.");
		}
	},

	delAllComponent: function() {
		$("span[id^=compDelBtn]").each(function(index) {$(this).click();});
	},

	countComponent: function() {
		var compPage=System.findNodes("//a[contains(@href,'index.php?cmd=profile&component_page=')]");
		if (compPage)
			Helper.compPage = compPage.length;
		else
			Helper.compPage = 0;
		document.getElementById('compSum').innerHTML='Retrieve page: ';
		Helper.componentList={};
		System.xmlhttp("index.php?cmd=profile&component_page=0", Helper.retriveComponent, 0);
	},

	retriveComponent: function(responseText, currentPage) {
		var nextPage=currentPage+1;
		document.getElementById('compSum').innerHTML+=nextPage+', ';
		var doc=System.createDocumentWithImages(responseText);
		var compList = System.findNodes("//a[contains(@href,'cmd=profile&subcmd=destroycomponent&component_id=')]/img",doc);
		$(responseText).find('a[href*="cmd\=profile\&subcmd\=destroycomponent\&component_id\="]').each(function(i) { 

					var img=$(this).children(':first');
					var mouseover=$(img).data('tipped');
					var id=mouseover.match(/fetchitem.php\?item_id=(\d+)/)[1];
					if (Helper.componentList[id])
						Helper.componentList[id].count++;
					else {
						Helper.componentList[id]={'count':1,'src':$(img).attr('src'),
													'onmouseover':mouseover};
					}
			});

		if (currentPage < Helper.compPage - 1) {
			System.xmlhttp("index.php?cmd=profile&component_page="+nextPage, Helper.retriveComponent, nextPage);
		} else {
			var totalCount = System.findNodes("//td[contains(@background,'inventory/1x1mini.gif')]",doc);
			if (totalCount) totalCount=totalCount.length; else totalCount=0;
			totalCount+=currentPage*50;
			var output='Component Summary<br/><table>';
			var usedCount=0;
			for (id in Helper.componentList) {
				var comp=Helper.componentList[id];
				output+="<tr><td align=center><img src="+comp.src+" class='tipped' data-tipped-options=\"skin: 'fsItem', ajax: true\" data-tipped=\""+comp.onmouseover+"\"></td><td>"+comp.count+"</td></tr>";
				usedCount+=comp.count;
			}
			output+="<tr><td align=center>Total:</td><td>"+usedCount+" / "+totalCount+"</td></tr></table>";
			document.getElementById('compSum').innerHTML=output;
		}
	},

	compressBio: function() {
		var bioCell;
		if (isNewUI == 0)
		{
			var bioDiv = System.findNode("//div[strong[.='Biography']]");
			bioCell = bioDiv.nextSibling.nextSibling;
		} else {
			bioCell = System.findNode("//div[@id='profile-bio']"); //new interface logic
		}
		if (bioCell) { //non-self profile
			var bioContents = bioCell.innerHTML;
			var maxCharactersToShow = GM_getValue("maxCompressedCharacters");
			var maxRowsToShow = GM_getValue("maxCompressedLines");
			var numberOfLines = bioContents.substr(0,maxCharactersToShow).split(/<br>\n/).length - 1;
			if (numberOfLines >= maxRowsToShow) {
				var startIndex = 0;
				while (maxRowsToShow >= 0) {
					maxRowsToShow --;
					startIndex = bioContents.indexOf("<br>\n",startIndex+1);
				}
				maxCharactersToShow = startIndex;
			}

			if (bioContents.length>maxCharactersToShow) {
				//find the end of next HTML tag after the max characters to show.
				var breakPoint = bioContents.indexOf("<br>",maxCharactersToShow) + 4;
				var lineBreak = ""
				if (breakPoint == 3) {
						breakPoint = bioContents.indexOf(" ",maxCharactersToShow) + 1;
						if (breakPoint == 0) {return;}
						lineBreak = "<br>"
					}
				var bioStart = bioContents.substring(0,breakPoint);
				var bioEnd = bioContents.substring(breakPoint,bioContents.length);
				var extraOpenHTML = "", extraCloseHTML = "";
				var tagList=['b','i','u','span'];
				for (var i=0;i<tagList.length;i++){
					var closeTagIndex = bioEnd.indexOf("</"+tagList[i]+">");
					var openTagIndex = bioEnd.indexOf("<"+tagList[i]+">");
					if (closeTagIndex != -1 && openTagIndex > closeTagIndex) {
						extraOpenHTML += "<"+tagList[i]+">";
						extraCloseHTML += "</"+tagList[i]+">";
					}
				}

				//~ bioCell.innerHTML = bioStart + extraCloseHTML + "<span id='Helper:bioExpander' style='cursor:pointer; text-decoration:underline; color:blue;'>More ...</span>" +
					//~ "<span id='Helper:bioHidden' style='display:none; visibility:hidden;'>" + extraOpenHTML + bioEnd + "</span>";
				bioCell.innerHTML = bioStart + extraCloseHTML + lineBreak + "<span id='Helper:bioExpander' style='cursor:pointer; text-decoration:underline; color:blue;'>More ...</span><br>" +
					"<span id='Helper:bioHidden'>" + extraOpenHTML + bioEnd + "</span>";
				$("#Helper\\:bioHidden").hide();

			}
		}
	},

	toggleBuffsToBuy: function(evt) {
		var buffNameNode=evt.target;
		while (buffNameNode.tagName.toLowerCase()!='span') buffNameNode=buffNameNode.parentNode;
		var node=buffNameNode;
		var selected = node.style.color=='blue';
		node.style.color=selected?'yellow':'blue';

		var buffName=node.textContent;
		if (selected) {
			var text='';
			// get the whole line from the buff name towards the end (even after the ',', in case of "AL, Lib, Mer: 10k each"
			while (node && node.nodeName.toLowerCase()!='br') {
				var newtext=node.textContent;
				node=node.nextSibling;
				text+=newtext;
			}

			var price=text.replace(/[^a-zA-Z0-9.,+\- ]/g, '').toLowerCase().match(/([+\-]{0,1}[\.\d]+ *k)|([+\-]{0,1}[\.\d]+ *fsp)|([+\-]{0,1}[\.\d]+ *stam)/);
			if (!price) { // some players have prices BEFORE the buff names
				node=buffNameNode;
				while (node && node.nodeName.toLowerCase()!='br') {
					newtext=node.textContent;
					node=node.previousSibling;
					text=newtext+text;
				}
				price=text.replace(/[^a-zA-Z0-9.,+\- ]/g, '').toLowerCase().match(/([+\-]{0,1}[\.\d]+ *k)|([+\-]{0,1}[\.\d]+ *fsp)|([+\-]{0,1}[\.\d]+ *stam)/);
			}
			var type, cost;
			if (price) {
				type=price[0].indexOf('k')>0 ? 'k' : price[0].indexOf('f')>0 ? 'fsp' : 'stam';
				cost=price[0].match(/([+\-]{0,1}[\.\d]+)/)[0];
			} else {
				type='unknown'; cost='1';
			}
			Helper.buffCost.buffs[buffName]=[parseFloat(cost),type];
			Helper.buffCost.count+=1;
		} else {
			Helper.buffCost.count-=1;
			delete(Helper.buffCost.buffs[buffName]);
		}
		Helper.updateBuffCost();
	},

	updateBuffCost: function() {
		if (Helper.buffCost.count>0) {
			var total={'k':0,'fsp':0,'stam':0,'unknown':0};
			var html='This is an estimated cost based on how the script finds the cost associated with buffs from viewing bio.'+
				'It can be incorrect, please use with discretion.<br/><hr/>'+
				'<table border=0>';
			for (buff in Helper.buffCost.buffs) {
				total[Helper.buffCost.buffs[buff][1]]+=Helper.buffCost.buffs[buff][0];
				html+='<tr><td>'+buff+'</td><td>: '+Helper.buffCost.buffs[buff][0]+Helper.buffCost.buffs[buff][1]+'</td></tr>';
			}
			var totalText=(total.fsp>0)?(Math.round(total.fsp*100)/100) +' FSP':'';
			if (total.fsp > 0 && total.k > 0) totalText+=' and ';
			totalText+=(total.k>0)?total.k+' k':'';
			if (total.fsp > 0 || total.k > 0) totalText+=' and ';
			totalText+=(total.stam>0)?total.stam+' Stam('+Math.round(total.stam/25*10)/10+'fsp)':'';
			if (total.unknown>0) totalText+=' ('+total.unknown+' buff(s) with unknown cost)';
			html+='</table><b>Total: '+totalText+'</b>';
			document.getElementById('buffCost').innerHTML='<br/><span class="tipped" data-tipped="'+html+'">Estimated Cost: <b>'+totalText+'</b></span>';
			GM_setValue("buffCostTotalText", totalText);
		} else {
			document.getElementById('buffCost').innerHTML='';
			GM_setValue("buffCostTotalText", '');
		}
	},

	getBuffsToBuy: function(evt) {
		var allSpans = System.findNodes("//span[contains(@id,'Helper:buff')]");

		var buffsToBuy = "";
		var buffCount = 0;
		for (var i=0; i<allSpans.length; i++) {
			var aSpan=allSpans[i];
			var spanInner = aSpan.innerHTML.replace(/<[a-zA-Z\/][^>]*>/g, "").replace(/[^a-zA-Z0-9 ]/g,'');

			if (aSpan.id && aSpan.id.match(/Helper:buff\d*/) != -1 && aSpan.style.color == "yellow") {
				buffsToBuy += spanInner.trim() + ", ";
				buffCount++;
			}
		}
		buffsToBuy = buffsToBuy.trim();
		if (buffsToBuy.lastIndexOf(",") == buffsToBuy.length - 1) {
			buffsToBuy = buffsToBuy.substring(0, buffsToBuy.length - 1);
		}

		if (buffCount > 0) {
				var targetPlayer = evt.target.getAttribute("target_player");
				var greetingText = GM_getValue("buyBuffsGreeting").trim();
				var hasBuffTag = greetingText.indexOf("{buffs}") != -1;
				var hasCostTag = greetingText.indexOf("{cost}") != -1;
				greetingText = greetingText.replace(/{playername}/g, targetPlayer);
				if (!hasBuffTag) {
					greetingText += " " + buffsToBuy;
				} else {
					if (!hasCostTag) {
						greetingText = greetingText.replace(/{buffs}/g, "`~" + buffsToBuy + "~`");
					} else {
						greetingText = greetingText.replace(/{buffs}/g, "`~" + buffsToBuy + "~`").replace(/{cost}/g, GM_getValue("buffCostTotalText"));
					}
				}

			Helper.openQuickMsgDialog(targetPlayer, greetingText, "");
		} else {
			alert("You have not selected any buffs!");
			return;
		}
	},

	openQuickMsgDialog: function(name, msg, tip) {
		$("#quickMsgDialog_targetUsername").html(name);
		$("#quickMsgDialog_targetPlayer").val(name);
		$("#quickMsgDialog_msg").val(msg);
		$("#quickMsgDialog_msg").removeAttr("disabled");
		if (!tip) tip="";
		$(".validateTips").text(tip);
		Helper.addTemplateButton();
		$("#quickMessageDialog").dialog("open");
	},

	removeHTML: function(buffName) {

		return buffName.replace(/<\/?[^>]+(>|$)/g, "").replace(/[^a-zA-Z 0-9]+/g,"");
	},

	expandBio: function(evt) {
		var bioExpander = $("#Helper\\:bioExpander");
		$(bioExpander).text($(bioExpander).text() == "More ..." ? "Less ..." : "More ...");
		$("#Helper\\:bioHidden").toggle();
	},

	profileSelectAll: function(evt) {
		var checkboxItems = System.findNodes("//input[@type='checkbox'][@name='folderItem[]']");
		checkboxItems.forEach(function(e) {e.checked = e.checked? false:true;});
	},

	equipProfileInventoryItem: function(evt) {
		var InventoryItemID=evt.target.getAttribute("itemID");
		System.xmlhttp("index.php?cmd=profile&subcmd=equipitem&inventory_id=" + InventoryItemID,
			Helper.equipProfileInventoryItemReturnMessage,
			{"item": InventoryItemID, "target": evt.target});
	},

	equipProfileInventoryItemReturnMessage: function(responseText, callback) {
		var itemID = callback.item;
		var target = callback.target;
		var info = Layout.infoBox(responseText);
		var itemCellElement = target.parentNode; //System.findNode("//td[@title='" + itemID + "']");
		if (!info) {
			itemCellElement.innerHTML = "<span style='color:green; font-weight:bold;'>Worn</span>";
		} else {
			itemCellElement.innerHTML = "<span style='color:red; font-weight:bold;'>Error:" + info + "</span>";
		}
	},

	drinkProfileInventoryItem: function(evt) {
		var InventoryItemID=evt.target.getAttribute("itemID");
		System.xmlhttp("index.php?cmd=profile&subcmd=useitem&inventory_id=" + InventoryItemID,
			Helper.drinkProfileInventoryItemReturnMessage,
			{"item": InventoryItemID, "target": evt.target});
	},

	drinkProfileInventoryItemReturnMessage: function(responseText, callback) {
		var itemID = callback.item;
		var target = callback.target;
		var info = Layout.infoBox(responseText);
		var itemCellElement = target.parentNode; //System.findNode("//td[@title='" + itemID + "']");
		if (info == 'You successfully used the item!') {
			itemCellElement.innerHTML = "<span style='color:green; font-weight:bold;'>Drunk</span>";
		} else {
			itemCellElement.innerHTML = "<span style='color:red; font-weight:bold;'>Error:" + info + "</span>";
		}
	},

	useProfileInventoryItem: function(evt) {
		if (!window.confirm("Are you sure you want to use/extract the item?")) {return;}
		var InventoryItemID=evt.target.getAttribute("itemID");
		System.xmlhttp("index.php?cmd=profile&subcmd=useitem&inventory_id=" + InventoryItemID,
			function(responseText) {
				var info = Layout.infoBox(responseText);
				if (!info) info = "<font color=red>Error</font>";
				evt.target.parentNode.innerHTML = info;
			});
	},

	injectAuctionSearch: function(content) {
		if (!content) var content = Layout.notebookContent();
		content.innerHTML=Helper.makePageHeader('Trade Hub Quick Search','','','')+
			'<div class=content>This screen allows you to set up some quick search templates for the Auction House. '+
				'The Display on AH column indicates if the quick search will show on the short list on the '+
				'Auction House main screen. A maximum of 36 items can show on this list '+
				'(It will not show more than 36 even if you have more than 36 flagged). '+
				'To edit items, either use the large text area below, '+
				'or add a new entry and delete the old one. You can always reset the list to the default values.</div>'+
			'<div style="font-size:small;" id="Helper:Auction Search Output">' +
			'</div>';
		// global parameters for the meta function generateManageTable
		Helper.param={};
		Helper.param={'id':'Helper:Auction Search Output',
			'headers':["Category","Nickname","Quick Search Text","Display in AH?"],
			'fields':["category","nickname","searchname","displayOnAH"],
			'tags':["textbox","textbox","textbox","checkbox"],
			'url':["","","index.php?cmd=auctionhouse&type=-1&search_text=@replaceme@",""],
			'currentItems':System.getValueJSON("quickSearchList"),
			'gmname':"quickSearchList",
			'sortField':"category",
			'categoryField':'category',
			'showRawEditor':true};
		Helper.generateManageTable();
	},

	linkFromMouseover: function(mouseOver) {
		//fetchitem.php?item_id=9206&inv_id=256710069&t=1&p=1346893&currentPlayerId=1346893&extra=5
		var reParams=/item_id=(\d+)\&inv_id=([-0-9]*)\&t=(\d+)\&p=(\d+)/;
		var reResult=reParams.exec(mouseOver);
		if (reResult === null) {
			return null;
		}
		var itemId=reResult[1];
		var invId=reResult[2];
		var type=reResult[3];
		var pid=reResult[4];
		var theUrl = "fetchitem.php?item_id=" + itemId + "&inv_id=" + invId + "&t="+type + "&p="+pid;
		theUrl = System.server + theUrl;
		return theUrl;
	},

	linkFromMouseoverCustom: function(mouseOver) {
		var reParams =/item_id=(\d+)\&inv_id=([-0-9]*)\&t=(\d+)\&p=(\d+)\&vcode=([a-z0-9]*)/i;
		var reResult =reParams.exec(mouseOver);
		if (reResult === null) {
			return null;
		}
		var itemId   = reResult[1];
		var invId    = reResult[2];
		var type     = reResult[3];
		var pid      = reResult[4];
		var vcode    = reResult[5];
		var theUrl   = "fetchitem.php?item_id=" + itemId + "&inv_id=" + invId + "&t="+type + "&p=" + pid + "&vcode=" + vcode;
		theUrl = System.server + theUrl;
		return theUrl;
	},

	injectInventoryManager: function(content) {
		if (!content) content=Layout.notebookContent();
		Helper.setItemFilterDefault();
		if(document.location.search.indexOf("subcmd=invmanager") != -1){
			$.ajax({
				url: '?cmd=export&subcmd=inventory',
				success: function( data ) {
					Helper.inventory = data;
					targetInventory=data;
					targetInventory.folders['-1']='Main';
					targetID='Helper:InventoryManagerOutput';
					reportType='self';
				},
				async: false, //wait for responce
				dataType: 'json'
		});
		}else if(document.location.search.indexOf("subcmd=guildinvmanager") != -1){
			$.ajax({
				url: '?cmd=export&subcmd=guild_store&inc_tagged=1',
				success: function( data ) {
					Helper.guildinventory = data;
					targetID='Helper:GuildInventoryManagerOutput';
					reportType='guild';
				},
				async: false, //wait for responce
				dataType: 'json'
			});
			$.ajax({
				url: '?cmd=export&subcmd=guild_members&guild_id='+Helper.guildinventory.guild_id,
				success: function( data ) {
					var buildJSON='{';
					for(x in data){
						//Helper.guildinventory.members[data[x].id]=data[x].username;
						buildJSON+='"'+data[x].id+'":"'+data[x].username+'",';
					}
					buildJSON=buildJSON.substring(0, buildJSON.length-1)+'}';
					Helper.guildinventory.members = JSON.parse(buildJSON);
				},
				async: false, //wait for responce
				dataType: 'json'
			});
			targetInventory=Helper.guildinventory;
		}else{
			return;
		}
		var minLvl = GM_getValue("inventoryMinLvl", 1);
		var maxLvl = GM_getValue("inventoryMaxLvl", 9999);
		if(reportType=='self'){
			reportTitle='<td width="90%" nobr><b>&nbsp;Inventory Manager</b> ' + targetInventory.items.length + ' items (green = worn, blue = backpack)</td>';
		}else{
			reportTitle='<td width="90%" nobr><b>&nbsp;Guild Inventory Manager</b> ' + targetInventory.items.length + ' items (maroon = in BP, blue=guild store)</td>';
		}
		var newhtml='<table cellspacing="0" cellpadding="0" border="0" width="100%"><tr style="background-color:#cd9e4b">'+
			reportTitle + '<tr><td colspan=2>' +
			'<table><tr><td><b>Show Items:</b></td>' +
				'<td><table><tr><td>' +
				'<div align=right><form id=Helper:inventoryFilterForm subject="inventory" href="index.php?cmd=notepad&blank=1&subcmd=invmanager" onSubmit="javascript:return false;">' +
				'Min lvl:<input value="' + minLvl + '" size=5 name="Helper.inventoryMinLvl" id="Helper.inventoryMinLvl" style=custominput/> ' +
				'Max lvl:<input value="' + maxLvl + '" size=5 name="Helper.inventoryMaxLvl" id="Helper.inventoryMaxLvl" style=custominput/> ' +
				'<input id="Helper:inventoryFilter" subject="inventory" href="index.php?cmd=notepad&blank=1&subcmd=invmanager" class="custombutton" type="submit" value="Filter"/><input id="reportType" type="hidden" value="'+reportType+'" />' +
				'<input id="Helper:inventoryFilterReset" subject="inventory" href="index.php?cmd=notepad&blank=1&subcmd=invmanager" class="custombutton" type="button" value="Reset"/></form></div>';
		for (var i=0; i<Helper.itemFilters.length; i++) {
			newhtml += (i % 5 ===0) ? '</td></tr><tr><td>' : '';
			newhtml+='&nbsp;' +Helper.itemFilters[i].type+ ':<input id="'+Helper.itemFilters[i].id+'" type="checkbox" linkto="'+Helper.itemFilters[i].id+'"' +
					(GM_getValue(Helper.itemFilters[i].id)?' checked':'') + '/>';
		}
		newhtml+=' Sets Only: <input id="Helper:SetFilter" type="checkbox" />';
		newhtml+='</td></tr><tr><td>&nbsp;<span id=SelectAllFilters>[Select All]</span>&nbsp;<span id=SelectNoFilters>[Select None]</span>' +
				'</td></tr></table></td></tr></table>' +
				'<div style="font-size:small;" id="'+targetID+'">' +
				'</div>';
		content.innerHTML=newhtml;

		document.getElementById("Helper:SetFilter").addEventListener('click', Helper.generateInventoryTable, true);

		Helper.generateInventoryTable();
		document.getElementById("Helper:inventoryFilterReset").addEventListener('click', function(){
				GM_setValue("inventoryMinLvl",1);
				GM_setValue("inventoryMaxLvl",9999);
				$('input[id="Helper.inventoryMinLvl"]').attr('value','1');
				$('input[id="Helper.inventoryMaxLvl"]').attr('value','2000')
				Helper.generateInventoryTable();
			}, true);
		document.getElementById("Helper:inventoryFilterForm").addEventListener('submit', function(){
				GM_setValue("inventoryMinLvl", $('input[id="Helper.inventoryMinLvl"]').attr('value'));
				GM_setValue("inventoryMaxLvl", $('input[id="Helper.inventoryMaxLvl"]').attr('value'));
				Helper.generateInventoryTable();
			}, true);

		for (i=0; i<Helper.itemFilters.length; i++) {
			document.getElementById(Helper.itemFilters[i].id).addEventListener('click', Helper.toggleCheckboxAndRefresh, true);
		}
		document.getElementById("SelectAllFilters").addEventListener('click', Helper.InventorySelectFilters, true);
		document.getElementById("SelectNoFilters").addEventListener('click', Helper.InventorySelectFilters, true);
	},


	generateInventoryTable: function() {
		reportType=$('input[id="reportType"]').attr('value');
		var wh = '<th align="left" sortkey="player_name" sortType="string">Where</th>';
		if (reportType == "guild") {
			targetId = 'Helper:GuildInventoryManagerOutput';
			targetInventory = Helper.guildinventory;
			inventoryShell = 'guildinventory';

		} else {
			targetId = 'Helper:InventoryManagerOutput';
			targetInventory = Helper.inventory;
			inventoryShell = 'inventory';
			wh='<th align="left" sortkey="folder_id" sortType="number">Where</th>';
		}
		if (!targetInventory) {return;}
		//targetInventory.items = targetInventory.items.filter(function (e) {return (e.name);});
		var output=document.getElementById(targetId);

		var result='<table id="Helper:InventoryTable"><tr>' +
			'<th width="180" align="left" sortkey="item_name" sortType="string" colspan="2">Name</th>' +
			'<th sortkey="stats.min_level" sortType="number">Level</th>' +
			wh +
			'<th align="left" sortkey="type" sortType="number">Type</th>' +
			'<th sortkey="stats.attack" sortType="number">Att</th>' +
			'<th sortkey="stats.defense" sortType="number">Def</th>' +
			'<th sortkey="stats.armor" sortType="number">Arm</th>' +
			'<th sortkey="stats.damage" sortType="number">Dam</th>' +
			'<th sortkey="stats.hp" sortType="number">HP</th>' +
			'<th colspan="2" sortkey="forge" sortType="number">Forge</th>' +
			'<th align="left" sortkey="craft" sortType="string">Craft</th>' +
			'<th align="right" sortkey="durabilityPer" sortType="number">Dur%</th>' +
			//dropLink +
			'<th width="10"></th>';
		var item, color;

		var allItems = targetInventory.items;

		var minLvl = parseInt($('input[id="Helper.inventoryMinLvl"]').attr('value'));
		var maxLvl = parseInt($('input[id="Helper.inventoryMaxLvl"]').attr('value'));
		var setsOnly = $('input[id="Helper:SetFilter"]').is(':checked');
		for (var i=0; i<allItems.length;i++) {
			item=allItems[i];
			if(item.equipped) {item.folder_id=99999999; } //for sorting purposes.
			//continue; if item is filtered.
			item.player_name='';
			if(item.type > 8){continue;}//not a wearable item
			if(!$('input[id="'+Helper.itemFilters[item.type].id+'"]').is(':checked')){continue;}
			if(minLvl > item.stats.min_level || maxLvl < item.stats.min_level){continue;}
			if(setsOnly && !item.stats.set_name) {continue;}

			var whereTitle='';
			var whereText='';
			var p=0;
			var xcNum = GM_getValue("goldConfirm");
			if (reportType == "guild") {
				if(item.player_id==-1){ //guild store
					item.player_name='GS';
					color = "navy";   whereText = "GS";   whereTitle="Guild Store"
				}else{
					item.player_name=targetInventory.members[item.player_id];
					color = "maroon"; whereText = item.player_name;  whereTitle="Guild Report"
				}
				if(item.player_id=='-1'){
					p=targetInventory.guild_id;
					t=4;
				}else{
					p=item.player_id;
					t=1;
				}
				p=p+'&currentPlayerId='+targetInventory.current_player_id;
			}else{
				xcNum=Helper.inventory.xc;
				GM_setValue("goldConfirm", xcNum);
				if(item.equipped){
					color = "green";  whereText = "Worn"; whereTitle="Wearing it";
				}else{
					color = "blue";   whereText = Helper.inventory.folders[item.folder_id];   whereTitle="In Backpack";
				}
				p=targetInventory.player_id;
				t=1;
			}


			var nm = item.item_name;
			if(item.equipped) { nm='<b>'+nm+'</b>';}
			result+='<tr style="color:'+ color +'">' +
				'<td>' + //'<img src="' + System.imageServerHTTP + '/temple/1.gif" onmouseover="' + item.onmouseover + '">' +
				'</td><td><a style="cursor:help" id="Helper:item'+i+'" arrayID="'+i+'" class="tipped" data-tipped-options="skin: \'fsItem\'" data-tipped="fetchitem.php?item_id='+item.item_id+'&inv_id='+item.inv_id+'&t='+t+'&p='+p+'">' + nm + '</a>';

			if (item.stats.set_name && reportType == "guild") {
				result+=' (<a href="/index.php?cmd=guild&subcmd=inventory&subcmd2=report&set=' +
					item.item_name.replace(/(amulet)|(armor)|(armored)|(axe)|(boots)|(fist)|(gauntlets)|(gloves)|(hammer)|(helm)|(helmet)|(mace)|(necklace)|(of)|(plate)|(ring)|(rune)|(shield)|(sword)|(the)|(weapon)|/gi,'').trim().replace(/  /g,' ').replace(/  /g,' ').replace(/ /g,'|') + '">set</a>)';
			}
			var craftColor = "";
			switch(item.craft) {
				case 'Perfect': craftColor = '#00b600'; break;
				case 'Excellent': craftColor = '#f6ed00'; break;
				case 'Very Good': craftColor = '#f67a00'; break;
				case 'Good': craftColor = '#f65d00'; break;
				case 'Average': craftColor = '#f64500'; break;
				case 'Poor': craftColor = '#f61d00'; break;
				case 'Very Poor': craftColor = '#b21500'; break;
				case 'Uncrafted': craftColor = '#666666'; break;
			}

			var durabilityPercent = "";
			if (item.durability) {
				var durabilityExec = /(.*)\/(.*)/.exec(item.durability);
				durabilityPercent = parseInt(100*item.durability/item.max_durability,10);
				item.durabilityPer=durabilityPercent;
				var durabilityColor = (durabilityPercent<20)?'red':'gray';
			}

			var itemTypes=new Array("Helmet","Armor","Gloves","Boots","Weapon","Shield","Ring","Amulet","Rune");

			result+='</td>' +
				'<td align="right">' + item.stats.min_level + '</td>' +
				'<td align="left" title="' + whereTitle + '">' + whereText + '</td>' +
				'<td align="left">' + itemTypes[item.type] + '</td>' +
				'<td align="right">' + item.stats.attack + '</td>' +
				'<td align="right">' + item.stats.defense + '</td>' +
				'<td align="right">' + item.stats.armor + '</td>' +
				'<td align="right">' + item.stats.damage + '</td>' +
				'<td align="right">' + item.stats.hp + '</td>' +
				'<td align="right">' + item.forge + '</td>' +
				'<td>' + ((item.forge>0)? "<img src='" + System.imageServer + "/hellforge/forgelevel.gif'>":"") + '</td>' +
				'<td align="left">' + '<span style="color:' + craftColor + ';">' + item.craft + '</span>' + '</td>' +
				'<td align="right">' + '<span style="color:' + durabilityColor + ';">' + durabilityPercent + '</span>' + '</td>';
/*				if (showQuickDropLinks && inventoryShell == 'inventory') {
					result+="<td><span  title='INSTANTLY DROP "+item.item_name+". NO REFUNDS OR DO-OVERS! Use at own risk.' id='FSHQuickDrop" +
							item.item_id +
							"' itemInvId=" + item.inv_id +
							" itemIndexId=" + item.index + " itemPageId=" + item.page +
							" findme='QuickDrop' style='color:red; cursor:pointer; text-decoration:underline;'>[Drop]</span> </td>";
				}
*/				result+='<td></td>' +
				'</tr>';
		}
		result+='</table>';
		result+='<input type="hidden" id="xcnum" value="'+xcNum+'" />';
		output.innerHTML=result;
		/*if (showQuickDropLinks && inventoryShell == 'inventory') {
			$('span[id*="FSHQuickDrop"]').each(function(){
				this.addEventListener('click', Helper.quickDropItem, true);
				this.addEventListener('click', Helper.removeInventoryItem, true);
			});
		}*/
		targetInventory.lastUpdate = new Date();
		System.setValueJSON(inventoryShell, targetInventory);

		var inventoryTable=document.getElementById('Helper:InventoryTable');
		for (i=0; i<inventoryTable.rows[0].cells.length; i++) {
			var cell=inventoryTable.rows[0].cells[i];
			cell.style.textDecoration="underline";
			cell.style.cursor="pointer";
			cell.addEventListener('click', Helper.sortInventoryTable, true);
		}



		$('a[id*="Helper:item"]').click(function(){
			i=$(this).attr('arrayID');
			var html = '';
			var t=1;
			var p=0;
			//http://www.fallensword.com/index.php?cmd=guild&subcmd=inventory&subcmd2=takeitem&guildstore_id=24096093&ajax=1
			if (reportType == "guild") {
				html+='<span id="Helper:Recall">';
				if(targetInventory.items[i].player_id=='-1'){
					p=targetInventory.guild_id;
					t=4;
					html+='&nbsp;<span id="Helper:RecallToBP" style="cursor:pointer; text-decoration:underline; color:blue;" href="'+System.server + 'index.php?cmd=guild&subcmd=inventory&subcmd2=takeitem&guildstore_id='+targetInventory.items[i].inv_id+'">Fast BP</span><br />';

				}else{
					p=targetInventory.items[i].player_id;
					t=1;
					html+='&nbsp;<span id="Helper:RecallToBP" style="cursor:pointer; text-decoration:underline; color:blue;" href="'+System.server + 'index.php?cmd=guild&subcmd=inventory&subcmd2=recall&id='+targetInventory.items[i].inv_id+'&player_id='+p+'&mode=0">Fast BP</span> |'+
					'&nbsp;<span id="Helper:RecallToStore" style="cursor:pointer; text-decoration:underline; color:blue;" href="'+System.server + 'index.php?cmd=guild&subcmd=inventory&subcmd2=recall&id='+targetInventory.items[i].inv_id+'&player_id='+p+'&mode=1">Fast GS</span><br />';

					if(targetInventory.items[i].equipped){
						//
						html+='<span id="Helper:isEquiped">This item is being worn!</span><br />';
					}

					html+='<span id="Helper:IsWornBy">Is being held by: '+targetInventory.items[i].player_name+'</span><br />';
				}
				html+='</span><br />';
				p=p+'&currentPlayerId='+targetInventory.current_player_id;
					
			}else{
				//'INSTANTLY DROP '+targetInventory.items[i].item_name+'. NO REFUNDS OR DO-OVERS! Use at own risk.'
				html+='<span id="Helper:FolderMove"><select id="Helper:ToFolder"><option value="0">Move to folder</option>';
				for(var key in targetInventory.folders){
					html+= '<option value="'+key+'">'+targetInventory.folders[key]+'</option>';
				}
				
				html+='</select><input id="Helper:InitiateMove" type="submit" class="custombutton" value="Move!" invid="'+targetInventory.items[i].inv_id+'" ></span><br />';

				html+='<span id="Helper:Drop"><input id="Helper:DropItem" class="custombutton" type="submit" invid="'+targetInventory.items[i].inv_id+'"  itemName="'+targetInventory.items[i].item_name+'" value="Drop Item!" /></span><br />' + 
				'<span id="Helper:Send" >send to <input type="text" id="Helper:sendTo" size=5 /><input id="Helper:SendSubmit" class="custombutton" type="submit" invid="'+targetInventory.items[i].inv_id+'" value="Send!"/></span><br />' +
				'<span id="Helper:Wear"><input class="custombutton" type="submit" id="Helper:equipProfileInventoryItem" ' +
								'itemID="' + targetInventory.items[i].inv_id + '" value="Put it on!"></span> <br />' +
				'<span id="Helper:Sell"><a href="http://www.fallensword.com/index.php?cmd=auctionhouse&subcmd=create2&inv_id='+targetInventory.items[i].inv_id+'">Post to AH</a></span><br />';
				t=1;
				p=targetInventory.player_id;
			}
				//http://www.fallensword.com/index.php?cmd=auctionhouse&type=-1&search_text=Bahmou%20Mask
			html+='<span id="Helper:SearchAH"><a href="http://www.fallensword.com/index.php?cmd=auctionhouse&type=-1&search_text='+escape(targetInventory.items[i].item_name)+'">Search AH</a></span><br /><br />';
			if(targetInventory.items[i].stats.set_name)
				html+='Set Name: ' + targetInventory.items[i].stats.set_name + '<br />';
			html+='<img src="'+System.imageServer+'/items/'+targetInventory.items[i].item_id+'.gif" class="tipped" data-tipped-options="skin: \'fsItem\'" data-tipped="fetchitem.php?item_id='+targetInventory.items[i].item_id+'&inv_id='+targetInventory.items[i].inv_id+'&t='+t+'&p='+p+'" border=0>';
			var $dialog = $('<div></div>')
				.html(html)
				.dialog({
					title: targetInventory.items[i].item_name,
					resizable: false,
					height:350,
					width:300,
					modal: true,
					buttons: {
						"Close" : function() {
							$dialog.dialog( "close" );
						}
					}
				});
			if (reportType == "self") {
				document.getElementById('Helper:equipProfileInventoryItem').addEventListener('click', Helper.equipProfileInventoryItem, true);
			}
			$('input[id="Helper:DropItem"]').click(function(){
				var answer = confirm("Are you sure you want to drop "+$(this).attr('itemName')+"?");
				if(answer){
					var itemInvId = $(this).attr('invid');
					var dropHref = System.server + "index.php?cmd=profile&subcmd=dodropitems&removeIndex[]=" + itemInvId;
					$.ajax({
						url: dropHref,
						success: function( data ) {
							var info = Layout.infoBox(data);
							var drop=$('span[id="Helper:Drop"]');
							if (info==="Items dropped and destroyed.") {
								drop.html("Item Dropped!");
								drop.css('color','green');
								drop.css('fontWeight','bold');
								drop.css('fontSize','small');
							} else if (info!=="") {
								drop.css('color','red');
								drop.css('fontWeight','bold');
								drop.css('fontSize','small');
								drop.html("Error: " + info);
							} else {
								drop.css('color','red');
								drop.css('fontSize','small');
								drop.html("Weird Error: check the Tools>Error Console");
								GM_log("Post the previous HTML and the following message to the code.google.com site or to the forum to help us debug this error");
								GM_log(callback.url);
							}
						},
						async: false //wait for responce
					});
				}
			});
			$('input[id="Helper:SendSubmit"]').click(function(){
				var itemInvId = $(this).attr('invid');
				var xcNum = $('input[id="xcnum"]').attr('value');
				var itemRecipient = $('input[id="Helper:sendTo"]').val();
				var sendItemHref = System.server + "index.php?cmd=trade&subcmd=senditems&xc=" + xcNum + "&target_username=" + itemRecipient + "&sendItemList[]=" + itemInvId;
				$.ajax({
					url: sendItemHref,
					success: function( data ) {
						var info = Layout.infoBox(data);
						var send=$('span[id="Helper:Send"]');
						if (info==="Items sent successfully!") {
							send.html("Item sent to " + itemRecipient + "!");
							send.css('color','green');
							send.css('fontWeight','bold');
							send.css('fontSize','small');
						} else if (info!=="") {
							send.css('color','red');
							send.css('fontWeight','bold');
							send.css('fontSize','small');
							send.html("Error: " + info);
						} else {
							send.css('color','red');
							send.css('fontSize','small');
							send.html("Weird Error: check the Tools>Error Console");
							GM_log("Post the previous HTML and the following message to the code.google.com site or to the forum to help us debug this error");
							GM_log(callback.url);
						}
					},
					async: false //wait for responce
				});

			});
			$('span[id*="Helper:RecallTo"]').click(function(){
				var href = $(this).attr('href');
				var id = $(this).attr('id');
				$.ajax({
					url: href,
					success: function( data ) {
						var info = Layout.infoBox(data);
						var recall=$('span[id="'+id+'"]');
						if ((info == "You successfully recalled the item.") || (info == "You successfully took the item into your backpack.")) {
							recall.html("Recalled!");
							recall.css('color','green');
							recall.css('fontWeight','bold');
							recall.css('fontSize','small');
						} else if (info!=="") {
							recall.css('color','red');
							recall.css('fontWeight','bold');
							recall.css('fontSize','small');
							recall.html("Error: " + info);
						} else {
							recall.css('color','red');
							recall.css('fontSize','small');
							recall.html("Weird Error: check the Tools>Error Console");
							GM_log("Post the previous HTML and the following message to the code.google.com site or to the forum to help us debug this error");
							GM_log(callback.url);
						}
					},
					async: false //wait for responce
				});
			});
			$('input[id="Helper:InitiateMove"]').click(function(){
				var itemInvId = $(this).attr('invid');
				var folderID = $('select[id="Helper:ToFolder"]').val();
				var moveHref = System.server + "index.php?cmd=profile&subcmd=sendtofolder&folderItem[]="+itemInvId+"&folder_id=" + folderID;
				$.ajax({
					url: moveHref,
					success: function( data ) {
						var info = Layout.infoBox(data);
						var move=$('span[id="Helper:FolderMove"]');
						if (info==="Items moved to folder successfully!") {
							move.html("Item Moved!");
							move.css('color','green');
							move.css('fontWeight','bold');
							move.css('fontSize','small');
						} else if (info!=="") {
							move.css('color','red');
							move.css('fontWeight','bold');
							move.css('fontSize','small');
							move.html("Error: " + info);
						} else {
							move.css('color','red');
							move.css('fontSize','small');
							move.html("Weird Error: check the Tools>Error Console");
							GM_log("Post the previous HTML and the following message to the code.google.com site or to the forum to help us debug this error");
							GM_log(callback.url);
						}
					},
					async: false //wait for responce
				});
			});
		});


	},

	InventorySelectFilters: function(evt) {
		Helper.setItemFilterDefault();
		var checkedValue = (evt.target.id=="SelectAllFilters");
		for (var i=0; i<Helper.itemFilters.length; i++) {
			GM_setValue(Helper.itemFilters[i].id, checkedValue);
		}
		for (i=0; i<Helper.itemFilters.length; i++) {
			document.getElementById(Helper.itemFilters[i].id).checked = checkedValue;
		}
		setTimeout(function() {
			Helper.generateInventoryTable();
		});
	},

	toggleCheckboxAndRefresh: function(evt) {
		GM_setValue(evt.target.id, evt.target.checked);
		setTimeout(function() {
			Helper.generateInventoryTable();
		});
		//window.location=window.location;
	},

	injectOnlinePlayers: function(content) {
		if (!content) var content=Layout.notebookContent();

		var lastCheck=GM_getValue("lastOnlineCheck");
		var now=(new Date()).getTime();
		if (!lastCheck) lastCheck=0;
		var haveToCheck=((now - lastCheck) > 5*60*1000);
		var refreshButton;
		if (haveToCheck) {
			refreshButton = '<td> (takes a while to refresh so only do it if you really need to) </td>'+
			'<td width="10%" nobr style="font-size:x-small;text-align:right"><span id="Helper:OnlinePlayersRefresh" style="text-decoration:underline;cursor:pointer">[Refresh]</span></td>';
		} else {
			refreshButton = '<td width="10%" nobr style="font-size:x-small;text-align:right">[ Wait '+ Math.round(300 - ((now - lastCheck)/1000)) +'s ]</td>';
		}

		content.innerHTML='<table cellspacing="0" cellpadding="0" border="0" width="100%"><tr style="background-color:#cd9e4b">'+
			'<td nobr><b>&nbsp;Online Players</b></td>' +
			refreshButton +
			'</tr>' +
			'</table>' +
			'<div style="font-size:small;" id="Helper:OnlinePlayersOutput">' +
			'' +
			'</div>';
		refreshButton = document.getElementById("Helper:OnlinePlayersRefresh");
		if (refreshButton)
			refreshButton.addEventListener('click', Helper.parseOnlinePlayersStart, true);

		GM_addStyle(
			'.HelperTableRow1 {background-color:#e7c473;font-size:small}\n' +
			'.HelperTableRow1:hover {background-color:white}\n' +
			'.HelperTableRow2 {background-color:#e2b960;font-size:small}\n' +
			'.HelperTableRow2:hover {background-color:white}');
		Helper.onlinePlayers = System.getValueJSON("onlinePlayers");
		Helper.sortOnlinePlayersTable();
		Helper.generateOnlinePlayersTable();
	},

	parseOnlinePlayersStart: function() {
		// set timer to redisplay the [refresh] button
		var now=(new Date()).getTime();
		GM_setValue("lastOnlineCheck", now.toString());

		var refreshButton = document.getElementById("Helper:OnlinePlayersRefresh");
		refreshButton.style.visibility = "hidden";

		Helper.onlinePlayers = {players:[]};
		var output=document.getElementById('Helper:OnlinePlayersOutput');
		output.innerHTML='<br/>Parsing online players ...';
		System.xmlhttp('index.php?cmd=onlineplayers&page=1', Helper.parseOnlinePlayersStorePage, {"page":1});
	},

	parseOnlinePlayersStorePage: function(responseText, callback) {
		var doc = System.createDocument(responseText);
		var output=document.getElementById('Helper:OnlinePlayersOutput');
		var playerRows = System.findNodes("//table/tbody/tr[count(td)=4 and td[2]/a]", doc);
		var maxPage = parseInt(System.findNode("//table//td[input[@name='page']]", doc).textContent.replace(/\D/g, ""),10);
		output.innerHTML+=callback.page + " ";
		if (playerRows){
			for (var i=0; i<playerRows.length; i++) {
				var guildId;
				if (playerRows[i].cells[0].innerHTML.search("href") == -1) guildId = -1;
				else guildId = parseInt(playerRows[i].cells[0].firstChild.getAttribute("href").replace(/\D/g,""),10);
				var newPlayer = {
					guildId: guildId,
					id: parseInt(playerRows[i].cells[1].firstChild.getAttribute("href").replace(/\D/g,""),10),
					name: playerRows[i].cells[1].textContent,
					level: parseInt(playerRows[i].cells[2].textContent.replace(/,/g,""),10)
				};
				Helper.onlinePlayers.players.push(newPlayer);
			}
		}
		if (callback.page<maxPage/*-maxPage+15*/) {
			var newPage = (callback.page == 1) ? Math.round(4 * maxPage / 5) : (callback.page+1);
			System.xmlhttp('index.php?cmd=onlineplayers&page=' + newPage, Helper.parseOnlinePlayersStorePage, {"page":newPage});
		}
		else {
			Helper.onlinePlayers.players = Helper.onlinePlayers.players.removeDuplicates('name'); //remove duplicate entries.
			System.setValueJSON("onlinePlayers", Helper.onlinePlayers);
			Helper.sortOnlinePlayersTable();
			Helper.generateOnlinePlayersTable();
		}
	},

	generateOnlinePlayersTable: function() {
		if (!Helper.onlinePlayers) {return;}
		Helper.onlinePlayers.players = Helper.onlinePlayers.players.removeDuplicates('name'); //remove duplicate entries.
		var minLvl = GM_getValue("onlinePlayerMinLvl", 1);
		var maxLvl = GM_getValue("onlinePlayerMaxLvl", 9999);
		var output=document.getElementById("Helper:OnlinePlayersOutput");
		var result=
			'<div align=right><form id=Helper:onlinePlayerFilterForm subject="onlinePlayer" href="index.php?cmd=notepad&blank=1&subcmd=onlineplayers" onSubmit="javascript:return false;">' +
			'Min lvl:<input value="' + minLvl + '" size=5 name="Helper.onlinePlayerMinLvl" id="Helper.onlinePlayerMinLvl" style=custominput/> ' +
			'Max lvl:<input value="' + maxLvl + '" size=5 name="Helper.onlinePlayerMaxLvl" id="Helper.onlinePlayerMaxLvl" style=custominput/> ' +
			'<input id="Helper:onlinePlayerFilter" subject="onlinePlayer" href="/index.php?cmd=notepad&blank=1&subcmd=onlineplayers" class="custombutton" type="submit" value="Filter"/>' +
			'<input id="Helper:onlinePlayerFilterReset" subject="onlinePlayer" href="index.php?cmd=notepad&blank=1&subcmd=onlineplayers" class="custombutton" type="button" value="Reset"/></form></div>' +
			'<table id="Helper:OnlinePlayersTable"><tr>' +
			'<th align="left" sortkey="guildId" sortType="number">Guild</th>' +
			'<th sortkey="name">Name</th>' +
			'<th sortkey="level" sortType="number">Level</th></tr>';
		var highlightPlayersNearMyLvl = GM_getValue("highlightPlayersNearMyLvl");
		var lvlDiffToHighlight = 10;
		var levelToTest = Helper.characterLevel;
		var characterVirtualLevel = GM_getValue('characterVirtualLevel');
		if (characterVirtualLevel) levelToTest = characterVirtualLevel;
		if (levelToTest <= 205) lvlDiffToHighlight = 5;

		var player;
		for (var i=0; i<Helper.onlinePlayers.players.length;i++) {
			player=Helper.onlinePlayers.players[i];
			if (player.level >= minLvl && player.level <= maxLvl)
				result+='<tr class="HelperTableRow' + (1 + i % 2) +'">' +
					'<td><a href="index.php?cmd=guild&amp;subcmd=view&amp;guild_id=' + player.guildId + '">'+
						'<img width="16" border="0" height="16" src="' + System.imageServer + '/guilds/' + player.guildId + '_mini.jpg"></a></td>'+
					'<td><a href="index.php?cmd=profile&player_id='+player.id+'">'+ player.name+'</a></td>' +
					'<td align="right"' + (highlightPlayersNearMyLvl?(Math.abs(player.level - levelToTest) <= lvlDiffToHighlight?' style="background-color:#4671C8"':''):'') +
						'>' + player.level + '</td>' +
					'</tr>';
		}
		result+='</table>';
		output.innerHTML=result;

		document.getElementById("Helper:onlinePlayerFilterReset").addEventListener('click', Helper.resetLevelFilter, true);
		document.getElementById("Helper:onlinePlayerFilterForm").addEventListener('submit', Helper.setLevelFilter, true);

		var theTable=document.getElementById('Helper:OnlinePlayersTable');
		for (i=0; i<theTable.rows[0].cells.length; i++) {
			var cell=theTable.rows[0].cells[i];
			cell.style.textDecoration="underline";
			cell.style.cursor="pointer";
			cell.addEventListener('click', Helper.sortOnlinePlayersTable, true);
		}
	},

	sortOnlinePlayersTable: function(evt) {
		Helper.onlinePlayers=System.getValueJSON("onlinePlayers");
		if (!evt) {
			var sortCriteria = System.getValueJSON("onlinePlayerSortBy");
			if (!sortCriteria) {return;}
			var sortType = sortCriteria["sortType"];
			Helper.sortBy = sortCriteria["sortBy"];
			Helper.sortAsc = sortCriteria["sortAsc"];
		} else {
			var headerClicked = evt.target.getAttribute("sortKey");
			sortType = evt.target.getAttribute("sortType");
			if (!sortType) sortType="string";
			GM_log(headerClicked);
			// GM_log(Helper.sortBy);
			GM_log(sortType);
			// numberSort
			Helper.sortBy=headerClicked;
			if (Helper.sortAsc==undefined) Helper.sortAsc=true;
			if (Helper.sortBy && Helper.sortBy==headerClicked) {
				Helper.sortAsc=!Helper.sortAsc;
			}
		}
		System.setValueJSON("onlinePlayerSortBy", {"sortBy": Helper.sortBy, "sortType": sortType, "sortAsc": Helper.sortAsc});
		switch(sortType) {
			case "string":
				Helper.onlinePlayers.players.sort(Helper.stringSort);
				break;
			case "number":
				Helper.onlinePlayers.players.sort(Helper.numberSort);
				break;
			default:
				break;
		}
		Helper.generateOnlinePlayersTable();
	},

//*************************** Note *********************
/* The following fuction is only used in the quick drop method in the inventory manager currently commented out, if that is deleted
	this function can be removed as well */
	removeInventoryItem: function(evt){
		var itemIndexId = evt.target.getAttribute("itemIndexId");
		var itemPageId = evt.target.getAttribute("itemPageId");
		var itemArrayId=-1;
		for (var i=0; i<Helper.inventory.items.length;i++) { //find item
			if(Helper.inventory.items[i].index==itemIndexId && Helper.inventory.items[i].page==itemPageId){
				itemArrayId=i;
				break;
			}
		}
		var remItem = Helper.inventory.items.splice(itemArrayId,1); //remove from array
		System.setValueJSON('inventory', Helper.inventory); //update var so it does not display again
	},
// ************************* /end note
	sortInventoryTable: function(evt) {
		var reportType=$('input[id="reportType"]').attr('value');
		if (reportType == "guild") {
			targetInventory = Helper.guildinventory;
		} else {
			targetInventory = Helper.inventory;
		}
		var headerClicked=evt.target.getAttribute("sortKey");
		var sortType=evt.target.getAttribute("sortType");
		if (Helper.sortAsc==undefined) Helper.sortAsc=true;
		if (Helper.sortBy && Helper.sortBy==headerClicked) {
			Helper.sortAsc=!Helper.sortAsc;
		}
		Helper.sortBy="item_name";
		targetInventory.items.sort(Helper.stringSort);

		Helper.sortBy=headerClicked;
		//GM_log(headerClicked)
		if (sortType == "number") {
			targetInventory.items.sort(Helper.numberSort);
		}
		else {
			targetInventory.items.sort(Helper.stringSort);
		}
		Helper.generateInventoryTable();
	},

	injectRecipeManager: function(content) {
		if (!content) var content=Layout.notebookContent();
		Helper.recipebook = System.getValueJSON("recipebook");
		content.innerHTML='<table cellspacing="0" cellpadding="0" border="0" width="100%"><tr style="background-color:#cd9e4b">'+
			'<td width="90%" nobr><b>&nbsp;Recipe Manager</b></td>'+
			'<td width="10%" nobr style="font-size:x-small;text-align:right">[<span id="Helper:RecipeManagerRefresh" style="text-decoration:underline;cursor:pointer">Refresh</span>]</td>'+
			'</tr>' +
			'</table>' +
			'<div style="font-size:small;" id="Helper:RecipeManagerOutput">' +
			'' +
			'</div>';
		if (!Helper.recipebook) Helper.parseInventingStart();
		document.getElementById("Helper:RecipeManagerRefresh").addEventListener('click', Helper.parseInventingStart, true);
		Helper.generateRecipeTable();
	},

	parseInventingStart: function(){
		Helper.recipebook = {};
		Helper.recipebook.recipe = [];
		var output=document.getElementById('Helper:RecipeManagerOutput');
		output.innerHTML='<br/>Parsing inventing screen ...<br/>';
		var currentFolder = 1;
		GM_setValue("currentFolder", currentFolder);

		System.xmlhttp('index.php?cmd=inventing&page=0', Helper.parseInventingPage, {"page": 0});

	},

	parseInventingPage: function(responseText, callback) {
		var doc=System.createDocumentWithImages(responseText);

		var	folderIDs = new Array();
		Helper.folderIDs = folderIDs; //clear out the array before starting.
		var currentFolder = GM_getValue("currentFolder");
		$(doc).find('a[href*="index.php?cmd=inventing&folder_id="]').each(function(index){
			var folderID = /folder_id=([-0-9]+)/.exec($(this).attr("href"))[1]*1;
			folderIDs.push(folderID);
			Helper.folderIDs = folderIDs;
		});
		
		folderCount = Helper.folderIDs.length;
		folderID = Helper.folderIDs[currentFolder-1];
		var folderTextElement = $(doc).find('a[href*="index.php?cmd=inventing&folder_id=' + folderID + '"]').closest('td').text();
		
		var folderText = "";
		if (folderTextElement.length > 0) {
			folderText = folderTextElement;
		}
		var output=document.getElementById('Helper:RecipeManagerOutput');
		var currentPage = callback.page;
		var pages = $(doc).find('select[name="page"]:first');
		if (folderText.search(/quest/i) == -1) {
			if (pages.length == 0) {return;}
			$(doc).find('a[href*="index.php?cmd=inventing&subcmd=viewrecipe&recipe_id="]').each(function(index){
				var recipeLink = $(this).attr("href");
				var recipeId = parseInt(recipeLink.match(/recipe_id=(\d+)/i)[1],10);
				var recipe={
					"img": $(this).closest('tr').find('img').attr("src"),
					"link": recipeLink,
					"name": $(this).text(),
					"id": recipeId};
				output.innerHTML+="Found blueprint: "+ recipe.name + "<br/>";
				Helper.recipebook.recipe.push(recipe);
			});
			
			var nextPage=currentPage+1;
			output.innerHTML += 'Parsing folder '+ currentFolder + ' ... Page ' + nextPage + '... <br/>';

		} else {
			output.innerHTML += 'Skipping folder '+ currentFolder + ' as it has the word "quest" in folder name.<br/>';
			nextPage = pages.find('option:last').text()*1;
		}
		if ((nextPage<=pages.find('option:last').text()*1 && currentFolder!=folderCount) || currentFolder<folderCount) {
			if (nextPage==pages.find('option:last').text()*1 && currentFolder<folderCount) {
				nextPage = 0;
				folderID = Helper.folderIDs[currentFolder];
				GM_setValue("currentFolder", currentFolder+1);
			}
			System.xmlhttp('index.php?cmd=inventing&page='+nextPage+'&folder_id='+(folderID), Helper.parseInventingPage, {"page": nextPage});
		}
		else {
			output.innerHTML+='Finished parsing ... Retrieving individual blueprints...<br/>';
			// Helper.generateRecipeTable();
			System.xmlhttp('index.php?cmd=inventing&subcmd=viewrecipe&recipe_id=' + Helper.recipebook.recipe[0].id, Helper.parseRecipePage, {"recipeIndex": 0});
		}
	},

	parseRecipePage: function(responseText, callback) {
		var doc=System.createDocumentWithImages(responseText);
		var output=document.getElementById('Helper:RecipeManagerOutput');
		var currentRecipeIndex = callback.recipeIndex;
		var recipe = Helper.recipebook.recipe[currentRecipeIndex];

		output.innerHTML+='Parsing blueprint ' + recipe.name +'...<br/>';

		//recipe.credits = System.findNodeInt("//tr[td/img/@title='Credits']/td[1]", doc);
		recipe.items = Helper.parseRecipeItemOrComponent('td[background*="/inventory/2x3.gif"]', doc);
		recipe.components  = Helper.parseRecipeItemOrComponent('td[background*="/inventory/1x1mini.gif"]', doc);
		recipe.target = Helper.parseRecipeItemOrComponent('td[background*="/hellforge/2x3.gif"]', doc)[0];

		var nextRecipeIndex = currentRecipeIndex+1;
		if (nextRecipeIndex<Helper.recipebook.recipe.length) {
			var nextRecipe = Helper.recipebook.recipe[nextRecipeIndex];
			System.xmlhttp('index.php?cmd=inventing&subcmd=viewrecipe&recipe_id=' + nextRecipe.id, Helper.parseRecipePage, {"recipeIndex": nextRecipeIndex});
		}
		else {
			output.innerHTML+='Finished parsing ... formatting ...';
			Helper.recipebook.lastUpdate = new Date();
			System.setValueJSON("recipebook", Helper.recipebook);
			Helper.generateRecipeTable();
		}
	},

	parseRecipeItemOrComponent: function(jqueryxpath, doc) {
		var results = [];
		$(doc).find(jqueryxpath).each(function(index){
			var mouseOver = $(this).find('img').data("tipped");
			var resultAmounts = $(this).parent().next().text();
			//fetchitem.php?item_id=10113&inv_id=-1&t=2&p=1346893&vcode=9d5dd9b780dbca8f4940642a11ee8d1a
			var mouseOverRX = mouseOver.match(/fetchitem.php\?item_id=(\d+)\&inv_id=-1\&t=2\&p=(\d+)\&vcode=([a-z0-9]+)/i);
			var result = {
				img: $(this).find('img').attr("src"),
				id: mouseOverRX[1],
				verify: mouseOverRX[3],
				amountPresent: parseInt(resultAmounts.split("/")[0],10),
				amountNeeded: parseInt(resultAmounts.split("/")[1],10)
			};
			results.push(result);
		});

		return results;
	},

	generateRecipeTable: function() {
		var output=document.getElementById('Helper:RecipeManagerOutput');
		var result='<table id="Helper:RecipeTable" width="100%"><tr>' +
			'<th align="left" colspan="2" sortkey="name">Name</th>' +
			'<th align="left">Items</th>' +
			'<th align="left">Components</th>' +
			'<th align="left">Target</th>' +
			'</tr>';
		if (!Helper.recipebook) {return;}

		var hideRecipes=[];
		if (GM_getValue("hideRecipes")) hideRecipes=GM_getValue("hideRecipeNames").split(",");

		var recipe;
		var c=0;
		for (var i=0; i<Helper.recipebook.recipe.length;i++) {
			recipe=Helper.recipebook.recipe[i];
			c++;

			if (hideRecipes.indexOf(recipe.name) == -1) {
				result+='<tr class="HelperTableRow'+(1+c % 2)+'" valign="middle">' +
					'<td style="border-bottom:1px solid #CD9E4B;"><a href="' + recipe.link + '"><img border="0" align="middle" src="' + recipe.img + '"/></a></td>' +
					'<td style="border-bottom:1px solid #CD9E4B;"><a href="' + recipe.link + '">' + recipe.name + '</a></td>';
				result += '<td style="border-bottom:1px solid #CD9E4B;">';
				if (recipe.items) {
					for (var j=0; j<recipe.items.length; j++) {
						result += recipe.items[j].amountPresent  + "/" + recipe.items[j].amountNeeded +
							' <img border="0" align="middle" class="tipped" data-tipped-options="skin:\'fsItem\', ajax:true" data-tipped="fetchitem.php?item_id=' +
							recipe.items[j].id + '&inv_id=-1&t=2&p=' + Layout.playerId() + '&vcode=' + recipe.items[j].verify + '" ' +
							'src="' + recipe.items[j].img + '"/><br/>';
					}
				}
				result += '</td>';
				result += '<td style="border-bottom:1px solid #CD9E4B;">';
				if (recipe.components) {
					for (j=0; j<recipe.components.length; j++) {
						result += recipe.components[j].amountPresent + "/" + recipe.components[j].amountNeeded +
							' <img border="0" align="middle" class="tipped" data-tipped-options="skin:\'fsItem\', ajax:true" data-tipped="fetchitem.php?item_id=' +
							recipe.components[j].id + '&inv_id=-1&t=2&p=' + Layout.playerId() + '&vcode=' + recipe.components[j].verify + '" ' +
							'src="' + recipe.components[j].img + '"/><br/>';
					}
				}
				result += '</td>';
				result += '<td style="border-bottom:1px solid #CD9E4B;">';
				if (recipe.target) {
					result +=' <img border="0" align="middle" class="tipped" data-tipped-options="skin:\'fsItem\', ajax:true" data-tipped="fetchitem.php?item_id=' +
							recipe.target.id + '&inv_id=-1&t=2&p=' + Layout.playerId() + '&vcode=' + recipe.target.verify + '" ' +
							'src="' + recipe.target.img + '"/><br/>';
				}
				result += '</td>';
				result += '</tr>';
			}
		}
		result+='</table>';
		output.innerHTML=result;

		Helper.recipebook.lastUpdate = new Date();
		System.setValueJSON("recipebook", Helper.recipebook);

		var recipeTable=document.getElementById('Helper:RecipeTable');
		for (i=0; i<recipeTable.rows[0].cells.length; i++) {
			var cell=recipeTable.rows[0].cells[i];
			if (cell.getAttribute("sortkey")) {
				cell.style.textDecoration="underline";
				cell.style.cursor="pointer";
				cell.addEventListener('click', Helper.sortRecipeTable, true);
			}
		}
	},

	sortRecipeTable: function(evt) {
		Helper.recipebook=System.getValueJSON("recipebook");
		var headerClicked = evt.target.getAttribute("sortKey");
		var sortType = evt.target.getAttribute("sorttype");
		if (!sortType) sortType="string";
		sortType = sortType.toLowerCase();
		if (Helper.sortAsc==undefined) Helper.sortAsc=true;
		if (Helper.sortBy && Helper.sortBy==headerClicked) {
			Helper.sortAsc=!Helper.sortAsc;
		}
		Helper.sortBy=headerClicked;
		//GM_log(headerClicked)
		switch (sortType) {
			case "number":
				Helper.recipebook.recipe.sort(Helper.numberSort);
				break;
			default:
				Helper.recipebook.recipe.sort(Helper.stringSort);
				break;
		}
		Helper.generateRecipeTable();
	},

	injectGroupStats: function() {
		var attackTitleElement = System.findNode("//table[@width='400']/tbody/tr/td[contains(.,'Attack:')]");
		attackValueElement = attackTitleElement.nextSibling;
		attackValueElement.innerHTML = "<table><tbody><tr><td style='color:blue;'>" + attackValueElement.innerHTML +
			"</td><td>(</td><td title='attackValue'>" + attackValueElement.innerHTML +
			"</td><td>)</td></tr></tbody></table>";
		var defenseTitleElement = System.findNode("//table[@width='400']/tbody/tr/td[contains(.,'Defense:')]");
		defenseValueElement = defenseTitleElement.nextSibling;
		defenseValueElement.innerHTML = "<table><tbody><tr><td style='color:blue;'>" + defenseValueElement.innerHTML +
			"</td><td>(</td><td title='defenseValue'>" + defenseValueElement.innerHTML +
			"</td><td>)</td></tr></tbody></table>";
		var armorTitleElement = System.findNode("//table[@width='400']/tbody/tr/td[contains(.,'Armor:')]");
		armorValueElement = armorTitleElement.nextSibling;
		armorValueElement.innerHTML = "<table><tbody><tr><td style='color:blue;'>" + armorValueElement.innerHTML +
			"</td><td>(</td><td title='armorValue'>" + armorValueElement.innerHTML +
			"</td><td>)</td></tr></tbody></table>";
		var damageTitleElement = System.findNode("//table[@width='400']/tbody/tr/td[contains(.,'Damage:')]");
		damageValueElement = damageTitleElement.nextSibling;
		damageValueElement.innerHTML = "<table><tbody><tr><td style='color:blue;'>" + damageValueElement.innerHTML +
			"</td><td>(</td><td title='damageValue'>" + damageValueElement.innerHTML +
			"</td><td>)</td></tr></tbody></table>";
		var hpTitleElement = System.findNode("//table[@width='400']/tbody/tr/td[contains(.,'HP:')]");
		hpValueElement = hpTitleElement.nextSibling;
		hpValueElement.innerHTML = "<table><tbody><tr><td style='color:blue;'>" + hpValueElement.innerHTML +
			"</td><td>(</td><td title='hpValue'>" + hpValueElement.innerHTML +
			"</td><td>)</td></tr></tbody></table>";
		System.xmlhttp("index.php?cmd=guild&subcmd=mercs", Helper.parseMercStats);
	},

	parseMercStats: function(responseText) {
		var mercPage=System.createDocumentWithImages(responseText);
		var mercElements = mercPage.getElementsByTagName("IMG");
		var totalMercAttack = 0;
		var totalMercDefense = 0;
		var totalMercArmor = 0;
		var totalMercDamage = 0;
		var totalMercHP = 0;
		for (var i=0; i<mercElements.length; i++) {
			merc = mercElements[i];
			var mouseoverText = $(merc).data("tipped");
			var src = merc.getAttribute("src");
			if (mouseoverText && src.search("/merc/") != -1){
				//<td>Attack:</td><td>1919</td>
				var attackRE=/<td>Attack:<\/td><td>(\d+)<\/td>/;
				var mercAttackValue = attackRE.exec(mouseoverText)[1]*1;
				totalMercAttack += mercAttackValue;
				var defenseRE=/<td>Defense:<\/td><td>(\d+)<\/td>/;
				var mercDefenseValue = defenseRE.exec(mouseoverText)[1]*1;
				totalMercDefense += mercDefenseValue;
				var armorRE=/<td>Armor:<\/td><td>(\d+)<\/td>/;
				var mercArmorValue = armorRE.exec(mouseoverText)[1]*1;
				totalMercArmor += mercArmorValue;
				var damageRE=/<td>Damage:<\/td><td>(\d+)<\/td>/;
				var mercDamageValue = damageRE.exec(mouseoverText)[1]*1;
				totalMercDamage += mercDamageValue;
				var hpRE=/<td>HP:<\/td><td>(\d+)<\/td>/;
				var mercHPValue = hpRE.exec(mouseoverText)[1]*1;
				totalMercHP += mercHPValue;
			}
		}
		var attackValue        = System.findNode("//td[@title='attackValue']");
		attackNumber           = System.intValue(attackValue.innerHTML);
		attackValue.innerHTML  = System.addCommas(attackNumber - Math.round(totalMercAttack*0.2));
		var defenseValue       = System.findNode("//td[@title='defenseValue']");
		defenseNumber          = System.intValue(defenseValue.innerHTML);
		defenseValue.innerHTML = System.addCommas(defenseNumber - Math.round(totalMercDefense*0.2));
		var armorValue         = System.findNode("//td[@title='armorValue']");
		armorNumber            = System.intValue(armorValue.innerHTML);
		armorValue.innerHTML   = System.addCommas(armorNumber - Math.round(totalMercArmor*0.2));
		var damageValue        = System.findNode("//td[@title='damageValue']");
		damageNumber           = System.intValue(damageValue.innerHTML);
		damageValue.innerHTML  = System.addCommas(damageNumber - Math.round(totalMercDamage*0.2));
		var hpValue            = System.findNode("//td[@title='hpValue']");
		hpNumber               = System.intValue(hpValue.innerHTML);
		hpValue.innerHTML      = System.addCommas(hpNumber - Math.round(totalMercHP*0.2));
	},

	injectGroups: function() {
		var subTable = System.findNode("//table[@width='650']/tbody/tr/td/table");
		if (!subTable) {return;}
		var minGroupLevel = GM_getValue("minGroupLevel");
		if (minGroupLevel) {
			var textArea = subTable.rows[0].cells[0];
			textArea.innerHTML += ' <span style="color:blue">Current Min Level Setting: '+ minGroupLevel +'</span>';
		}

		if (isNewUI != 1) allItems = System.findNodes("//tr[td/a/img/@title='View Group Stats']");
		else allItems = System.findNodes("//tr[td/div/a[contains(@href,'index.php?cmd=guild&subcmd=groups&subcmd2=viewstats&group_id=')]]");
		if (!allItems) return;
		var memberList=System.getValueJSON("memberlist");
		var onlineIMG = '<img src="' + System.imageServer + '/skin/online.gif" width=10 height="10" title="Online">';
		var offlineIMG = '<img src="' + System.imageServer + '/skin/offline.gif" width=10 height="10" title="Offline">';
		for (i=0; i<allItems.length; i++) {
			var theItem=allItems[i].cells[0];
			var foundName=theItem.textContent;
			if (memberList) {
				var listOfDefenders = "", listOfDefendersHTML = "";
				for (j=0; j<memberList.members.length; j++) {
					var aMember=memberList.members[j];
					// I hate doing two loops, but using a hashtable implementation I found crashed my browser...
					if (aMember.name==foundName) {
						listOfDefendersHTML = allItems[i].cells[1].innerHTML;
						if (listOfDefenders.indexOf("<font") != -1) {
						listOfDefenders = listOfDefendersHTML.substring(0, listOfDefendersHTML.indexOf("<font") - 2); //strip off mercs as they don't need buffs
						} else {
							listOfDefenders = listOfDefendersHTML;
						}
						listOfDefenders = listOfDefenders.split(","); // quick buff only supports 16
						if (listOfDefenders == "[none]") break;
						var lastActivityMinutes = 30;
						var lastActivityIMG = "";
						if (!isNaN(aMember.lastActivityMinutes)) var lastActivityMinutes = aMember.lastActivityMinutes;
						if (GM_getValue("enhanceOnlineDots")) {
							var lastActivityIMG = '<img width="10" height="10" title="Online" src="' + Data.offlineDot() + '">';
							if (lastActivityMinutes < 2) {
								lastActivityIMG = '<img width="10" height="10" title="Offline" src="' + Data.greenDiamond() + '">';
							} else if (lastActivityMinutes < 5) {
								lastActivityIMG = '<img width="10" height="10" title="Offline" src="' + Data.yellowDiamond() + '">';
							} else if (lastActivityMinutes < 30) {
								lastActivityIMG = '<img width="10" height="10" title="Offline" src="' + Data.orangeDiamond() + '">';
							} else if (lastActivityMinutes > 10080) {
								lastActivityIMG = '<img width="10" height="10" title="Offline" src="' + Data.sevenDayDot() + '">';
							}
						}
						theItem.innerHTML = lastActivityIMG +
							//direct call to player_id is faster link - server doesn't have to do a search.
							"&nbsp;<span style='font-size:small;'><a href='index.php?cmd=profile&player_id=" + aMember.id + "'>" +
							theItem.innerHTML + "</a></span> [" + aMember.level + "]";
						var shortList = new Array();
						var modifierWord;
						//fix buff 16 in group page
						for (var k = 0; k < listOfDefenders.length; k++) {
							shortList.push(listOfDefenders[k]);
							if (((k + 1) % 16 === 0 && k !== 0) || (k == listOfDefenders.length - 1)) { 
									modifierWord = Helper.getGroupBuffModifierWord(k);
								theItem.innerHTML += "<br><nobr><a href='#' id='buffAll" + aMember.id + modifierWord + "'><span style='color:blue; font-size:x-small;' title='Quick buff functionality from HCS only does 16'>"+
								"Buff " + modifierWord + " 16</span></a></nobr>";
								var buffAllLink = System.findNode("//a[@id='buffAll" + aMember.id + modifierWord + "']");
								buffAllLink.setAttribute("href","javascript:openWindow('index.php?cmd=quickbuff&t=" + shortList + "', 'fsQuickBuff', 618, 1000, ',scrollbars')");
								shortList = new Array();
							}
						}
						//

						break;
					}
				}
			}

			var theMembersCell=allItems[i].cells[1];
			if (theMembersCell.textContent != "[none]") {
				var theMembersArray=theMembersCell.innerHTML.split(",");
				var linkMembersArray = new Array();
				for (k=0; k<theMembersArray.length; k++) {
					var theMember = theMembersArray[k].trim();
					var linkMember;
					if (theMember.search("<font") == -1) {
						if (memberList) {
							for (j=0; j<memberList.members.length; j++) {
								aMember=memberList.members[j];
								// I hate doing two loops, but using a hashtable implementation I found crashed my browser...
								if (aMember.name==theMember) {
									//direct call to player_id is faster link - server doesn't have to do a search.
									linkMember = (k===0?"":" ") + "<a href='index.php?cmd=profile&player_id=" + aMember.id + "'>" + theMember + "</a>";
									break;
								}
							}
						}
					} else {
						linkMember = " " + theMember;
					}
					linkMembersArray.push(linkMember);
				}
				theMembersCell.innerHTML = linkMembersArray;
			}

			var theDateCell=allItems[i].cells[2];
			var theDate=theDateCell.firstChild;
			var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
			var xRE=/([a-zA-Z]+), (\d+) ([a-zA-Z]+) (\d+):(\d+):(\d+) UTC/;
			var x=xRE.exec(theDate.innerHTML);
			var month = months.indexOf(x[3]);
			var curYear = new Date().getFullYear();
			var groupDate = new Date();
			groupDate.setUTCDate(x[2]);
			groupDate.setUTCMonth(month);
			groupDate.setUTCFullYear(curYear);
			groupDate.setUTCHours(x[4]);
			groupDate.setUTCMinutes(x[5]);
			theDateCell.innerHTML += '<br><nobr><span style="color:blue; font-size:x-small">Local: '+
				groupDate.toString().substr(0,21)+'</span></nobr>';
		}
		var buttonElement = System.findNode("//td[input[@value='Join All Available Groups']]");
		var enableMaxGroupSizeToJoin = GM_getValue("enableMaxGroupSizeToJoin");
		if (enableMaxGroupSizeToJoin) {
			var maxGroupSizeToJoin = GM_getValue("maxGroupSizeToJoin");
			var joinAllInput = buttonElement.firstChild.nextSibling.nextSibling;
			joinAllInput.style.display = "none";
			joinAllInput.style.visibility = "hidden";
			buttonElement.innerHTML += '&nbsp;<input id="joinallgroupsundersize" type="button" value="Join All Groups < ' + maxGroupSizeToJoin +
				' Members" class="custombutton">&nbsp;<input id="fetchgroupstats" type="button" value="Fetch Group Stats" class="custombutton">';
			document.getElementById('joinallgroupsundersize').addEventListener('click', Helper.joinAllGroupsUnderSize, true);
		} else {
			buttonElement.innerHTML += '&nbsp;<input id="fetchgroupstats" type="button" value="Fetch Group Stats" class="custombutton">';
		}
		document.getElementById('fetchgroupstats').addEventListener('click', Helper.fetchGroupData, true);

		re=/subcmd2=([a-z]+)/;
		var subPage2IdRE = re.exec(document.location.search);
		if (subPage2IdRE && subPage2IdRE[1] == 'joinallgroupsundersize') {
			Helper.joinAllGroupsUnderSize();
		}
	},

	joinAllGroupsUnderSize: function(evt) {
		var joinButtons = System.findNodes("//img[contains(@src,'skin/icon_action_join.gif')]");
		for (var i=0; i<joinButtons.length; i++) {
			var joinButton = joinButtons[i];
			if (isNewUI != 1) var memberList = joinButton.parentNode.parentNode.previousSibling.previousSibling.previousSibling.previousSibling;
			else var memberList = joinButton.parentNode.parentNode.parentNode.previousSibling.previousSibling.previousSibling.previousSibling;
			var memberListArrayWithMercs = memberList.innerHTML.split(",");
			var memberListArrayWithoutMercs = memberListArrayWithMercs.filter(function(e,i,a) {return e.search('#000099') == -1;});
			if (memberListArrayWithoutMercs.length < GM_getValue("maxGroupSizeToJoin")){
				var groupID = /javascript:confirmJoin\((\d+)\)/.exec(joinButton.parentNode.getAttribute("href"))[1];
				var groupJoinURL = 'index.php?cmd=guild&subcmd=groups&subcmd2=join&group_id=' + groupID;
				GM_xmlhttpRequest({
					method: 'GET',
					url: System.server + groupJoinURL,
					/*headers: {
						"User-Agent": navigator.userAgent,
						"Referer": document.location
					},*/
					onload: function(responseDetails) {
						joinButton.style.display = "none";
						joinButton.style.visibility = "hidden";
										}
				});
			}
		}
		//refresh after a slight delay
		setTimeout("window.location = '" + System.server + "index.php?cmd=guild&subcmd=groups';",1250);
	},

	fetchGroupData: function(evt) {
		var calcButton = System.findNode("//input[@id='fetchgroupstats']");
		calcButton.style.display = "none";
		var allItems = System.findNodes("//a[contains(@href,'index.php?cmd=guild&subcmd=groups&subcmd2=viewstats&group_id=')]/img");
		for (var i=0; i<allItems.length; i++) {
			System.xmlhttp(allItems[i].parentNode.getAttribute("href"), Helper.parseGroupData, allItems[i].parentNode);
		}
	},

	parseGroupData: function(responseText, linkElement) {
		var doc=System.createDocument(responseText);
		var allItems = doc.getElementsByTagName("TD");
		//<td><font color="#333333">Attack:&nbsp;</font></td>

		for (var i=0;i<allItems.length;i++) {
			var anItem=allItems[i];
			if (anItem.innerHTML == '<font color="#333333">Attack:&nbsp;</font>'){
				var attackLocation = anItem.nextSibling;
				var attackValue = attackLocation.textContent;
			}
			if (anItem.innerHTML == '<font color="#333333">Defense:&nbsp;</font>'){
				var defenseLocation = anItem.nextSibling;
				var defenseValue = defenseLocation.textContent;
			}
			if (anItem.innerHTML == '<font color="#333333">Armor:&nbsp;</font>'){
				var armorLocation = anItem.nextSibling;
				var armorValue = armorLocation.textContent;
			}
			if (anItem.innerHTML == '<font color="#333333">Damage:&nbsp;</font>'){
				var damageLocation = anItem.nextSibling;
				var damageValue = damageLocation.textContent;
			}
			if (anItem.innerHTML == '<font color="#333333">HP:&nbsp;</font>'){
				var hpLocation = anItem.nextSibling;
				var hpValue = hpLocation.textContent;
			}
		}
		extraText = "<table cellpadding='1' style='font-size:x-small; border-top:2px black solid; border-spacing: 1px; border-collapse: collapse;'>";
		extraText += "<tr>";
		extraText += "<td style='color:brown;'>Attack</td><td align='right'>" + attackValue + "</td>";
		extraText += "<td style='color:brown;'>Defense</td><td align='right'>" + defenseValue + "</td></tr>";
		extraText += "<tr>";
		extraText += "<td style='color:brown;'>Armor</td><td align='right'>" + armorValue + "</td>";
		extraText += "<td style='color:brown;'>Damage</td><td align='right'>" + damageValue + "</td></tr>";
		extraText += "<tr>";
		extraText += "<td style='color:brown;'>HP</td><td align='right'>" + hpValue + "</td>";
		extraText += "<td colspan='2'></td></tr>";
		extraText += "</table>";
		if (isNewUI != 1) expiresLocation = linkElement.parentNode.previousSibling.previousSibling;
		else expiresLocation = linkElement.parentNode.parentNode.previousSibling.previousSibling;
		expiresLocation.innerHTML += extraText;
	},

	addMarketplaceWidgets: function() {
		var requestTable = System.findNode("//table[tbody/tr/td/input[@value='Confirm Request']]");
		var newRow = requestTable.insertRow(2);
		var newCell = newRow.insertCell(0);
		newCell.id = "warningfield";
		newCell.colSpan = "2";
		newCell.align = "center";

		document.getElementById('price').addEventListener('keyup', Helper.addMarketplaceWarning, true);
		document.getElementById('amount').addEventListener('keyup', Helper.addMarketplaceWarning, true);
	},

	addMarketplaceWarning: function(evt) {
		 var amount = System.findNode("//input[@id='amount']").value;
		 var goldPerPoint = System.findNode("//input[@id='price']");
		 var warningField = System.findNode("//td[@id='warningfield']");
		 var sellPrice = goldPerPoint.value;
		 if (sellPrice.search(/^[0-9]*$/) != -1) {
			var warningColor = "green";
			var warningText = "</b><br>This is probably an offer that will please someone.";
			if (sellPrice < 100000) {
				warningColor = "brown";
				warningText = "</b><br>This is too low ... it just ain't gonna sell.";
			} else if (sellPrice > 250000) {
				warningColor = "red";
				warningText = "</b><br>Hold up there ... this is way to high a price ... you should reconsider.";
			}

			warningField.innerHTML = "<span style='color:" + warningColor + ";'>You are offering to buy <b>" + amount + "</b> FSP for >> <b>" +
				System.addCommas(sellPrice) + warningText + " (Total: " + System.addCommas((amount * sellPrice) + Math.ceil(amount * sellPrice * 0.005)) +  ")</span>";
		}
	},

	injectQuickBuff: function() {
		GM_addStyle('.HelperTextLink {color:white;font-size:x-small;cursor:pointer;}\n' +
			'.HelperTextLink:hover {text-decoration:underline;}\n');
		//var playerInput = System.findNode("//input[@name='targetPlayers']");
		var playerInput = $('input[name="targetPlayers"]');
		if (playerInput.length == 0) return;
		var buffMe = document.createElement("SPAN");
		buffMe.innerHTML="[self]";
		buffMe.className='HelperTextLink';
		buffMe.addEventListener("click", Helper.quickBuffMe, true);
		//playerInput.parentNode.appendChild(buffMe);
		playerInput.parent().append(buffMe);

		Helper.injectBuffPackArea();

		var playerIDRE = /tid=(\d+)/;
		var playerID = playerIDRE.exec(location);
		if (playerID) {
			playerID = playerID[1];
			System.xmlhttp("index.php?cmd=profile&player_id=" + playerID, Helper.getPlayerBuffs, false);
		}
		var playerName = /quickbuff&t=([a-zA-Z0-9]+)/.exec(location);
		if (playerName) {
			playerName = playerName[1];
			if (playerName == GM_getValue("CharacterName")) System.xmlhttp("index.php?cmd=profile", Helper.getPlayerBuffs, false);
			else System.xmlhttp("index.php?cmd=findplayer&search_active=1&search_level_max=&search_level_min=&search_username=" + playerName + "&search_show_first=1", Helper.getPlayerBuffs, false);
		}
		System.xmlhttp("index.php?cmd=profile", Helper.getSustain);

		var buffList = Data.buffList();
		var skillNodes = System.findNodes("//input[@name='skills[]']");
		var buffIndex = new String(window.location).indexOf("&blist=");
		var addr;

		if (buffIndex != -1) {
			addr = new String(window.location).substring(buffIndex + 7);
			addr = addr.substring(0, addr.length - 1).split(";");
		}
		var buffPacksToUse = new Array();
		if (skillNodes) {
			var targetPlayers = playerInput;
			var targetPlayersCount = targetPlayers.val().split(",").length*1;
			var newStaminaTotal = 0;
			var theBuffPack = System.getValueJSON("buffpack"); // cache it now in case we have a buff pack to find.
			for (var i = 0; i < skillNodes.length; i++ ) {
				var skillName = skillNodes[i].parentNode.parentNode.textContent.match(/\t([A-Z].*) \[/)[1];
				skillNodes[i].setAttribute("skillName", skillName);
				for (var k = 0; k < buffList.length; k++) {
					if (buffList[k].name == skillName) {
						if (addr) {
							for (var p = 0; p < addr.length; p++) {

								if (addr[p] == k) {

									newStaminaTotal += buffList[k].stamina*1;
									skillNodes[i].checked = true;
								} else if (addr[p] >= 126) {
									if (theBuffPack) {

										var bpIndex = addr[p] - 126;
										var bpButton = document.getElementById("bpSelect" + bpIndex);

										if (bpButton) {
											var foundMe = false;
											for (var indx = 0; indx < buffPacksToUse.length; indx++) {
												if (buffPacksToUse[indx] == bpIndex) {
													foundMe = true;
													break;
												}
											}
											if (!foundMe) {
												buffPacksToUse.push(bpIndex);
											}
											continue;
										}
									}
								}
							}
						}
						skillNodes[i].setAttribute("staminaCost",buffList[k].stamina);
						break;
					}
				}
				skillNodes[i].addEventListener("click", Helper.toggleBuffStatus, true);
			}
		}
		//var activateButton = System.findNode("//input[@value='Activate Selected Skills']");
		var activateButton = $('input[value="Activate Selected Skills"]');
		activateButton.parent().append("<br><span style='color:white;'>Stamina to cast selected skills: <span>" +
			"<span id='staminaTotal' style='display:none; color:orange;'>" + newStaminaTotal +
			"</span>&nbsp;<span id='staminaTotalAll' style='color:orange;'>" + newStaminaTotal * targetPlayersCount + "</span>");
		if (buffPacksToUse.length > 0) {
			for (i = 0; i < buffPacksToUse.length; i++ ) {
				Helper.useBuffPack(buffPacksToUse[i]);
			}
		}
		//code to pre-size cell for data later. crude but it works.
		$('input[value="activate"]').next().find('tr:last td').html('&nbsp;</br>&nbsp;</br>&nbsp;');
	},

	toggleBuffStatus: function(evt) {
		var staminaTotal = System.findNode("//span[@id='staminaTotal']");
		var staminaTotalAll = System.findNode("//span[@id='staminaTotalAll']");
		var targetPlayers = System.findNode("//input[@name='targetPlayers']");
		var targetPlayersCount = targetPlayers.value.split(",").length*1;
		var newStaminaTotal = 0;
		if (evt.target.checked === false) {
			evt.target.checked = false;
			newStaminaTotal = ((staminaTotal.textContent*1) - (evt.target.getAttribute("staminaCost")*1));
			staminaTotal.innerHTML = newStaminaTotal;
			staminaTotalAll.innerHTML = newStaminaTotal * targetPlayersCount;
		}
		else if (evt.target.checked === true) {
			evt.target.checked = true;
			newStaminaTotal = ((staminaTotal.textContent*1) + (evt.target.getAttribute("staminaCost")*1));
			staminaTotal.innerHTML = newStaminaTotal;
			staminaTotalAll.innerHTML = newStaminaTotal * targetPlayersCount;
		}
	},

	injectBuffPackArea: function() {
		Helper.injectBuffPackList();
		Helper.injectBuffPackAddButton();
	},

	injectBuffPackList: function() {
		var injectHere = System.findNode("//input[@value='Activate Selected Skills']/parent::*/parent::*");
		var bpArea = document.createElement("SPAN");
		bpArea.innerHTML="<br><div align='center'><span style='color:lime; font-size:large;'>Buff Packs</span><table id='bpTable' width='600' style='border:1px solid #A07720;' rules=rows><tbody>" +
			"<tr><td style='color:gold; font-weight:bold;'>Nickname</td><td style='color:gold; font-weight:bold;'>Buffs included in the pack</td>" +
			"<td><span id=bpSelectAll class='HelperTextLink'>[All]</span>&nbsp;<span id=bpClear class='HelperTextLink'>[Clear]</span></td></tr>" +
			"</tbody></table></div>";
		bpArea.style.color="white";
		injectHere.appendChild(bpArea);

		document.getElementById("bpSelectAll").addEventListener("click", function() {Helper.setAllSkills(true);}, false);
		document.getElementById("bpClear").addEventListener("click", function() {Helper.setAllSkills(false);}, false);
		document.getElementById("selectAllButton").addEventListener("click", function() {setTimeout(function(){Helper.sumStamCostOfSelectedBuffs();},0);}, false);	
		
		var theBuffPack = System.getValueJSON("buffpack");
		if (!theBuffPack) {return;}

		if (!theBuffPack["nickname"]) { //avoid bugs if the new array is not populated yet
			theBuffPack["nickname"] = {};
		}
		if (!theBuffPack["staminaTotal"]) { //avoid bugs if the new array is not populated yet
			theBuffPack["staminaTotal"] = {};
		}

		var bpTable = document.getElementById("bpTable");
		for (var i = 0; i < theBuffPack["size"]; i++) {
			var myRow = bpTable.insertRow(-1);
			var nickname = (theBuffPack["nickname"][i]? theBuffPack["nickname"][i]:"");
			var listOfBuffs = theBuffPack["bp"][i];
			var staminaTotal = (theBuffPack["staminaTotal"][i]? theBuffPack["staminaTotal"][i]:"");
			myRow.innerHTML = "<td>" + nickname + "</td><td style='font-size:x-small;'>" + listOfBuffs + "&nbsp;" + staminaTotal + "&nbsp;" +
				"</td><td><span id=bpSelect" + i + " class='HelperTextLink' buffId=" + i + ">[Select]</span> " +
				"<span id=bpDelete" + i + " buffId=" + i + " class='HelperTextLink'>[X]</span></td>";
			document.getElementById("bpSelect" + i).addEventListener("click", Helper.useBuffPackHandler, true);
			document.getElementById("bpDelete" + i).addEventListener("click", Helper.deleteBuffPack, true);
		}
	},

	setAllSkills: function(value) {
		var skillNodes = System.findNodes("//input[@name='skills[]']");
		if (!skillNodes) {return;}

		for (var i = 0; i < skillNodes.length; i++ ) {
			skillNodes[i].checked = value;
		}
		Helper.sumStamCostOfSelectedBuffs();
	},

	sumStamCostOfSelectedBuffs: function() {
		var skillNodes = System.findNodes("//input[@name='skills[]']");
		if (!skillNodes) {return;}

		staminaRunningTotal = 0;
		for (var i = 0; i < skillNodes.length; i++ ) {
			if (skillNodes[i].checked) {
				staminaRunningTotal += (skillNodes[i].getAttribute("staminaCost")*1);
			}
		}

		var staminaTotal = System.findNode("//span[@id='staminaTotal']");
		staminaTotal.innerHTML = staminaRunningTotal;
		var staminaTotalAll = System.findNode("//span[@id='staminaTotalAll']");
		var targetPlayers = System.findNode("//input[@name='targetPlayers']");
		var targetPlayersCount = targetPlayers.value.split(",").length*1;
		staminaTotalAll.innerHTML = staminaRunningTotal * targetPlayersCount;
	},

	useBuffPackHandler: function(evt) {
		var bpIndex=evt.target.getAttribute("buffId");
		Helper.useBuffPack(bpIndex);
	},

	useBuffPack: function(bpIndex) {

		var theBuffPack = System.getValueJSON("buffpack");
		if (!theBuffPack) {return;}
		if (bpIndex >= theBuffPack["size"]) {return;}

		var buffList = theBuffPack["bp"][bpIndex];
		if (!buffList) {return;}

		var skillNodes = System.findNodes("//input[@name='skills[]']");
		if (!skillNodes) {return;}

		for (var i = 0; i < skillNodes.length; i++ ) {
			var skillName = skillNodes[i].parentNode.parentNode.textContent.match(/\t([A-Z].*) \[/)[1];
			if (buffList.indexOf(skillName) >= 0) {
				skillNodes[i].checked = true;
			}
		}
		Helper.sumStamCostOfSelectedBuffs();
	},

	deleteBuffPack: function(evt) {

		if (!window.confirm("Are you sure you want to delete the buff pack?")) {return;}

		var bpIndex=parseInt(evt.target.getAttribute("buffId"),10);
		var theBuffPack = System.getValueJSON("buffpack");
		if (!theBuffPack) {return;}
		if (!theBuffPack["size"]) {return;}

		theBuffPack["size"] --;
		if (theBuffPack["size"] === 0) { // avoid bugs :)
			delete theBuffPack["bp"];
			delete theBuffPack["nickname"];
			delete theBuffPack["staminaTotal"];
			theBuffPack["bp"] = {};
			theBuffPack["nickname"] = {};
			theBuffPack["staminaTotal"] = {};
		}
		if (!theBuffPack["nickname"]) { //avoid bugs
			theBuffPack["nickname"] = {};
		}
		if (!theBuffPack["staminaTotal"]) { //avoid bugs
			theBuffPack["staminaTotal"] = {};
		}
		for (var i = bpIndex; i < theBuffPack["size"]; i++) {
			theBuffPack["bp"][i] = theBuffPack["bp"][i + 1];
			//old buff packs won't have the next two values.
			theBuffPack["nickname"][i] = (theBuffPack["nickname"][i + 1]? theBuffPack["nickname"][i + 1]:"");
			theBuffPack["staminaTotal"][i] = (theBuffPack["staminaTotal"][i + 1]? theBuffPack["staminaTotal"][i + 1]:"");
		}

		delete theBuffPack["bp"][theBuffPack["size"]];
		if (theBuffPack["nickname"][theBuffPack["size"]]) delete theBuffPack["nickname"][theBuffPack["size"]];
		if (theBuffPack["staminaTotal"][theBuffPack["size"]]) delete theBuffPack["staminaTotal"][theBuffPack["size"]];

		System.setValueJSON("buffpack", theBuffPack);
		location.reload(true);
	},

	injectBuffPackAddButton: function() {
		var bpTable = document.getElementById("bpTable");
		var myRow = bpTable.insertRow(-1);
		myRow.innerHTML = "<td><input size=10 id='newBuffPackNickname' name='newBuffPackNickname' value='nickname'></td>"+
			"<td><input size=60 id='newBuffPack' name='newBuffPack' value='full buff names, separated by comma'></td>" +
			"<td><span id=bpSave class='HelperTextLink'>[Save]</span><span id=bpAdd class='HelperTextLink'>[add]</span></td>";

		// button handlers
		document.getElementById("bpAdd").addEventListener("click", Helper.displayAddBuffPack, true);
		document.getElementById("bpSave").addEventListener("click", Helper.saveBuffPack, true);

		// display [add] only
		document.getElementById("newBuffPack").style.visibility = "hidden";
		document.getElementById("newBuffPackNickname").style.visibility = "hidden";
		document.getElementById("bpAdd").style.visibility = "";
		document.getElementById("bpSave").style.visibility = "hidden";
	},

	displayAddBuffPack: function() {
		var skillNodes = System.findNodes("//input[@name='skills[]']");
		if (!skillNodes) {return;}
		var buffListBox = document.getElementById("newBuffPack");
		var buffListText = "";
		for (var i = 0; i < skillNodes.length; i++ ) {
			var skillName = skillNodes[i].parentNode.parentNode.textContent.match(/\t([A-Z].*) \[/)[1];
			if (skillNodes[i].checked === true) {
				buffListText += skillName + ",";
			}
		}
		if (buffListText.length > 0) {
			buffListText = buffListText.substring(0,buffListText.lastIndexOf(','));
			buffListBox.value = buffListText;
		}
		document.getElementById("newBuffPack").style.visibility = "";
		document.getElementById("newBuffPackNickname").style.visibility = "";
		document.getElementById("bpAdd").style.visibility = "hidden";
		document.getElementById("bpSave").style.visibility = "";
	},

	saveBuffPack: function() {
		if (!document.getElementById("newBuffPack").value) {return;}
		if (!document.getElementById("newBuffPackNickname").value) {return;}

		var theBuffPack = System.getValueJSON("buffpack");
		if (!theBuffPack) {
			theBuffPack = {};
			theBuffPack["size"] = 0;
			theBuffPack["bp"] = {};
			theBuffPack["nickname"] = {};
			theBuffPack["staminaTotal"] = {};
		}
		if (!theBuffPack["nickname"]) { //avoid bugs
			theBuffPack["nickname"] = {};
		}
		if (!theBuffPack["staminaTotal"]) { //avoid bugs
			theBuffPack["staminaTotal"] = {};
		}
		theBuffPack["bp"][theBuffPack["size"]] = document.getElementById("newBuffPack").value;
		theBuffPack["nickname"][theBuffPack["size"]] = document.getElementById("newBuffPackNickname").value;
		var listOfBuffs = theBuffPack["bp"][theBuffPack["size"]];
		var buffArray = listOfBuffs.split(",");
		var buffList = Data.buffList();
		var staminaTotal = 0;
		for (var j = 0; j < buffArray.length; j++) {
			for (var k = 0; k < buffList.length; k++) {
				if (buffArray[j].trim() == buffList[k].name) {
					staminaTotal += buffList[k].stamina;
					break;
				}
			}
		}
		theBuffPack["staminaTotal"][theBuffPack["size"]] = "<span style='color:orange;'>(" + staminaTotal + ")</span>";

		//increase the size of the array
		theBuffPack["size"] += 1;

		// save and reload
		System.setValueJSON("buffpack", theBuffPack);
		location.reload(true);
	},

	quickBuffMe: function() {
		var playerInput = System.findNode("//input[@name='targetPlayers']");
		playerInput.value=GM_getValue("CharacterName");
		if (Helper.tmpSelfProfile) {
			Helper.getPlayerBuffs(Helper.tmpSelfProfile, true);
		}
	},

	getPlayerBuffs: function(responseText, keepPlayerInput) {
		var injectHere = $('form:contains("Activate Selected Skills"):last');
		var resultText = "<center><table align='center'><tr><td colspan='4' style='color:lime;font-weight:bold'>Buffs already on player:</td></tr>";

		if (keepPlayerInput) {
			var playerInput = System.findNode("//input[@name='targetPlayers']");
			var playerName = playerInput.value;
		}

		//low level buffs used to get the buff above are not really worth casting.
		var buffs = Data.buffList();
		var myBuffs = System.findNodes("//font[@size='1']");
		for (var i=0;i<myBuffs.length;i++) {
			var myBuff=myBuffs[i];
			var myBuffName = /([ a-zA-Z]+)\s\[/.exec(myBuff.innerHTML)[1];
			var buffFound = false;
			for (var j=0;j<buffs.length;j++) {
				buffName = buffs[j].name;
				if (myBuffName == buffName) {
					//fix me - test again once mouseovers are tested in quick buff screen.
					var onmouseoverText = '<span style="font-weight:bold; color:#FFF380;">' + buffName + '</span><br /><br />Stamina: ' +
						buffs[j].stamina + '<br>Duration: ' +
						buffs[j].duration + '<br>Effect: ' +
						buffs[j].buff;
					myBuff.setAttribute("class", "tipped");
					myBuff.setAttribute("data-tipped", onmouseoverText);
					buffFound = true;
					break;
				}
			}
			if (!buffFound) GM_log("Buff typo in data file: '" + myBuffName + "'");
			var buffLevelRE = /\[(\d+)\]/;
			var buffLevel = buffLevelRE.exec(myBuff.innerHTML)[1]*1;
			if (buffLevel < 75 &&
				myBuff.innerHTML.search("Counter Attack") == -1 && myBuff.innerHTML.search("Quest Finder") == -1 &&
				myBuff.innerHTML.search("Death Dealer") == -1 && myBuff.innerHTML.search("Vision") == -1) {
				myBuff.style.color = "gray";
			}
		}

		//this could be formatted better ... it looks ugly but my quick attempts at putting it in a table didn't work.
		var doc=System.createDocumentWithImages(responseText);
		buffs = $(doc).find('img[src*="/skills/"]');
		var buffRE, buff, buffName;
		if (buffs.length == 0) resultText += "<tr><td colspan='4' style='text-align:center;color:white; font-size:x-small'>[no buffs]</td></tr>";
		else {
			buffs.each(function(index){
				//<center><b>Reckoning</b> (Level: 175)</b></center>
				//<center><b>Doubler<br><br>(Cannot be affected by Spell Breaker or Spell Leech.)<br><br></b> (Level: 1200)</b></center>
				var onmouseover = $(this).attr("data-tipped");
				onmouseover = onmouseover.replace("<br><br>(Cannot be affected by Spell Breaker or Spell Leech.)<br><br>","");
				if (onmouseover.search("Summon Shield Imp") != -1) {
					//<center><b>Summon Shield Imp<br>6 HP remaining<br></b> (Level: 150)</b></center>');
					//<center><b>Summon Shield Imp<br> HP remaining<br></b> (Level: 165)</b></center>');
					buffRE = /<b>([ a-zA-Z]+)<br>([0-9]+) HP remaining<br><\/b> \(Level: (\d+)\)/;
					buff = buffRE.exec(onmouseover);
					if (!buff) {
						buffRE = /<b>([ a-zA-Z]+)<br> HP remaining<br><\/b> \(Level: (\d+)\)/;
						buff = buffRE.exec(onmouseover);
					}
					if (!buff) GM_log(onmouseover);
					buffName = buff[1];
					buffLevel = buff[3];
				} else {
					buffRE = /<b>([ a-zA-Z]+)<\/b> \(Level: (\d+)\)/;
					buff = buffRE.exec(onmouseover);
					buffName = buff[1];
					buffLevel = buff[2];
				}
				if (!buffLevel) buffLevel = 0; //For when a shield imp runs out but the buff is still there (0HP)
				resultText += ((index % 4 === 0)? "<tr>":"");
				resultText += "<td style='color:white; font-size:x-small'>" + buffName + "</td><td style='color:silver; font-size:x-small'>[" + buffLevel + "]</td>";
				resultText += ((index % 4 == 3)? "</tr>":"");
				var hasThisBuff = $('font:contains("' + buffName + ' ["):not(:contains(" ' + buffName + '"))');
				if (hasThisBuff.length > 0) {
					buffLevelRE = /\[(\d+)\]/;
					var myBuffLevel = parseInt(buffLevelRE.exec(hasThisBuff.html())[1],10);
					if (myBuffLevel > 11 ||
						buffName == 'Quest Finder') {
						hasThisBuff.css('color','lime');
						hasThisBuff.append(" (<font color='#FFFF00'>" + buffLevel + "</font>)");
					}
				}
			});
			resultText += ((i % 4 == 3)? "<td></td></tr>":"");
		}
		resultText += "</table></center>";

		var activateButton = System.findNode("//input[@value='Activate Selected Skills']");
		var staminaCell = $(doc).find('td:contains("Stamina:"):last').next().find('td:first');
		var curStamina = System.intValue(staminaCell.text().split("/")[0]);
		var maxStamina = System.intValue(staminaCell.text().split("/")[1]);
		var percentageStaminaLeft = Math.round((100.0*curStamina)/(1.0*maxStamina));
		staminaCell.append("(" + percentageStaminaLeft + "%)");
		if (percentageStaminaLeft < 10) {
			activateButton.parentNode.style.backgroundColor = 'red';
		}

		var lastActivity = $(doc).find('h2:contains("Last Activity"):last');
		if (lastActivity.length > 0) {
			var newNode = document.createElement("SPAN");
			newNode.innerHTML = '<br/><center><span style="color:white;" align="center">' + lastActivity.html() + '</span></center><br/>';
			activateButton.parentNode.parentNode.appendChild(newNode);
		}

		var statistics = $(doc).find('td:contains("Stamina:"):last').parents('table:first');
		resultText += '<center><table class="innerContentMiddle">' + statistics.html() + '</table></center>';

		var newNode = document.createElement("SPAN");
		newNode.innerHTML = resultText;
		activateButton.parentNode.parentNode.appendChild(newNode);

		if (keepPlayerInput) {
			playerInput = System.findNode("//input[@name='targetPlayers']");
			playerInput.value = playerName;
		}
	},

	getSustain: function(responseText) {
		var doc=System.createDocumentWithImages(responseText);
		Helper.tmpSelfProfile=responseText;
		//sustain
		var sustainText = $(doc).find('td:has(a:contains("Sustain")):last').next().find('table.tip-static').data("tipped");
		if (sustainText !== undefined) {
			var sustainLevelRE = /Level<br>(\d+)%/;
			var sustainLevel = sustainLevelRE.exec(sustainText)[1];
		} else {
			sustainLevel = -1;
		}
		//extend
		var sustainColor = "lime";
		if (sustainLevel < 100) sustainColor = "red";
		var activateInput = System.findNode("//input[@value='activate']");
		var inputTable = activateInput.nextSibling.nextSibling;
		var injectHere = inputTable.rows[inputTable.rows.length-1].cells[0];
		injectHere.align = "center";
		injectHere.innerHTML = "&nbsp;<span style='color:orange;'>Sustain:</span> <span style='color:" + sustainColor + ";'>" + sustainLevel + "%</span>";
		var furyCasterTipped = $(doc).find('td:contains("Fury Caster"):last').next().find('table.tip-static');
		if (furyCasterTipped.length == 0) {return;}
		var furyCasterMouseover = furyCasterTipped.attr("data-tipped");
		var furyCasterLevelRE = /Level<br>(\d+)%/;
		var furyCasterLevel = furyCasterLevelRE.exec(furyCasterMouseover)[1];
		var furyCasterColor = "lime";
		if (furyCasterLevel < 100) furyCasterColor = "red";
		injectHere.innerHTML += "&nbsp;<span style='color:orange;'>Fury Caster:</span> <span style='color:" + furyCasterColor + ";'>" + furyCasterLevel + "%</span></br>";

		var hasBuffMasterBuff = $(doc).find('img.tip-static[data-tipped*="Buff Master"]');
		injectHere.innerHTML += " <span style='color:orange;'>Buff Master:</span> ";
		if (hasBuffMasterBuff.length > 0) {
			injectHere.innerHTML += "<span style='color:lime;'>On</span>";
			var buffMasterTimeToExpire = hasBuffMasterBuff.parents('td:first').find('nobr').html();
			injectHere.innerHTML += "&nbsp;<span style='color:white; font-size:x-small;'>(" + buffMasterTimeToExpire +")</span>";
		}
		else {
			var elem=$('input[skillname="Buff Master"]');
			if(elem.length>0){
				injectHere.innerHTML += "<span style='color:red;cursor:pointer;' buffID='"+elem.val()+"' id='HelperActivate"+elem.val()+"'>Activate</span>";
			}else{
				injectHere.innerHTML += "<span style='color:red;'>Off</span>";
			}
		}

		var hasExtendBuff = $(doc).find('img.tipped[data-tipped*="Extend"]');
		injectHere.innerHTML += "&nbsp;<span style='color:orange;'>Extend:</span>";
		if (hasExtendBuff.length > 0) {
			injectHere.innerHTML += "<span style='color:lime;'>On</span>";
			var ExtendTimeToExpire = hasExtendBuff.parents('td:first').find('nobr').html();
			injectHere.innerHTML += "&nbsp;<span style='color:white; font-size:x-small;'>(" + ExtendTimeToExpire +")</span>";
		}
		else {
			var elem=$('input[skillname="Extend"]');
			if(elem.length>0){
				injectHere.innerHTML += "<span style='color:red;cursor:pointer;' buffID='"+elem.val()+"' id='HelperActivate"+elem.val()+"'>Activate</span>";
			}else{
				injectHere.innerHTML += "<span style='color:red;'>Off</span>";
			}
		}

		var hasReinforceBuff = $(doc).find('img.tipped[data-tipped*="Reinforce"]');
		injectHere.innerHTML += "&nbsp;<span style='color:orange;'>Reinforce:</span> ";
		if (hasReinforceBuff.length > 0) {
			injectHere.innerHTML += "<span style='color:lime;'>On</span>";
			var ReinforceTimeToExpire = hasReinforceBuff.parents('td:first').find('nobr').html();
			injectHere.innerHTML += "&nbsp;<span style='color:white; font-size:x-small;'>(" + ReinforceTimeToExpire +")</span>";
		}
		else {
			var elem=$('input[skillname="Reinforce"]');
			if(elem.length>0){
				injectHere.innerHTML += "<span style='color:red;cursor:pointer;' buffID='"+elem.val()+"' id='HelperActivate"+elem.val()+"'>Activate</span>";
			}else{
				injectHere.innerHTML += "<span style='color:red;'>Off</span>";
			}
		}
		injectHere.innerHTML += "</br>&nbsp;";
		var canCastCounterAttack = System.findNode("//td/font[contains(.,'Counter Attack')]");

		$('span[id*="HelperActivate"]').click(function(){
			var user=$(doc).find('#statbar-character').html();
			var buffHref='?cmd=quickbuff&subcmd=activate&targetPlayers='+user+'&skills[]='+$(this).attr('buffID');
			var trigger = $(this);
			$.ajax({
				url: buffHref,
				success: function( data ) {
					if(	$(data).find('font:contains("current or higher level is currently active on")').length>0 ||
						$(data).find('font:contains("was activated on")')
						){
							trigger.css('color','lime');
							trigger.html('On');
					}
					
				}
			});
		});

		if (canCastCounterAttack) System.xmlhttp("index.php?cmd=settings", Helper.getCounterAttackSetting);
	},

	getCounterAttackSetting: function(responseText) {
		var doc=System.createDocument(responseText);
		var counterAttackTextElement = $(doc).find('input[name="ca_default"]');
		if (counterAttackTextElement.length == 0) {return;}
		var counterAttackValue = counterAttackTextElement.val();
		var severeConditionTextElement = $(doc).find('input[name="sc_default"]');
		if (severeConditionTextElement.length == 0) {return;}
		var severeConditionValue = severeConditionTextElement.val();
		var nightmareVisageTextElement = $(doc).find('input[name="nv_default"]');
		if (nightmareVisageTextElement.length == 0) {return;}
		var nightmareVisageValue = nightmareVisageTextElement.val();
		var activateInput = System.findNode("//input[@value='activate']");
		var inputTable = activateInput.nextSibling.nextSibling;
		var injectHere = inputTable.rows[inputTable.rows.length-1].cells[0];
		injectHere.innerHTML += "&nbsp;<span style='color:orange;'>Default CA level:</span> <span style='color:white;'>" + counterAttackValue + "</span>";
		injectHere.innerHTML += "&nbsp;<span style='color:orange;'>Default SC level:</span> <span style='color:white;'>" + severeConditionValue + "</span>";
		injectHere.innerHTML += "&nbsp;<span style='color:orange;'>Default NMV level:</span> <span style='color:white;'>" + nightmareVisageValue + "</span>";
	},

	getKillStreak: function(responseText) {
		var doc=System.createDocumentWithImages(responseText);
		//Kill&nbsp;Streak:&nbsp;
		var killStreakLocation = $(doc).find('td:contains("Streak:"):last').next();
		if (killStreakLocation.length > 0) {
			var playerKillStreakValue = System.intValue(killStreakLocation.text());
		}
		var killStreakElement = System.findNode("//span[@findme='killstreak']");
		killStreakElement.innerHTML = System.addCommas(playerKillStreakValue);
		GM_setValue("lastKillStreak", playerKillStreakValue);
		var deathDealerBuff = System.findNode("//img[contains(@data-tipped,'Death Dealer')]");
		var deathDealerRE = /<b>Death Dealer<\/b> \(Level: (\d+)\)/;
		var deathDealer = deathDealerRE.exec($(deathDealerBuff).data("tipped"));
		if (deathDealer) {
			var deathDealerLevel = deathDealer[1];
			var deathDealerPercentage = (Math.min(Math.round(Math.floor(playerKillStreakValue/5) * deathDealerLevel) * 0.01, 20));
		}
		var deathDealerPercentageElement = System.findNode("//span[@findme='damagebonus']");
		deathDealerPercentageElement.innerHTML = deathDealerPercentage;
		GM_setValue("lastDeathDealerPercentage", deathDealerPercentage);

		//refresh ally/enemy list while you are here.
		//Helper.parseProfileForWorld(doc.innerHTML, true); // Why are we doing it twice?
	},

	injectCreature: function() {
		System.xmlhttp("index.php?cmd=profile", Helper.getCreaturePlayerData,
			{"groupExists": false, "groupAttackValue": 0, "groupDefenseValue": 0,
				"groupArmorValue": 0, "groupDamageValue": 0, "groupHPValue": 0, "groupEvaluation": false});
		System.xmlhttp("index.php?cmd=guild&subcmd=groups", Helper.checkIfGroupExists);

		var creatureName = System.findNode('//td[@align="center"]/font[@size=3]/b');
		var doNotKillList=GM_getValue("doNotKillList");
		if (creatureName) {
			creatureName.innerHTML += ' <a href="http://guide.fallensword.com/index.php?cmd=creatures&search_name=' + creatureName.textContent + '&search_level_min=&search_level_max=&search_class=-1" target="_blank">' +
				'<img border=0 title="Search creature in Ultimate FSG" width=10 height=10 src="'+ System.imageServer + '/temple/1.gif"/></a>' +
				' <a href="http://wiki.fallensword.com/index.php/Special:Search?search=' + creatureName.textContent + '&go=Go" target="_blank">' +
				'<img border=0 title="Search creature in Wiki" width=10 height=10 src="/favicon.ico"/></a>';
			var extraText = 'Add to the do not kill list';
			if (doNotKillList.indexOf(creatureName.textContent.trim()) != -1) extraText = 'Remove from do not kill list';
			creatureName.innerHTML += '&nbsp;<span style="cursor:pointer;text-decoration:underline;color:blue;font-size:x-small;" ' +
				'id="addRemoveCreatureToDoNotKillList" creatureName="' + creatureName.textContent.trim() + '">' + extraText + '</span>';
			document.getElementById('addRemoveCreatureToDoNotKillList').addEventListener('click', Helper.addRemoveCreatureToDoNotKillList, true);
		}
	},

	addRemoveCreatureToDoNotKillList: function(evt) {
		creatureName = evt.target.getAttribute('creatureName');
		var doNotKillList = GM_getValue("doNotKillList");
		var newDoNotKillList = "";
		if (doNotKillList.indexOf(creatureName) != -1) {
			newDoNotKillList = doNotKillList.replace(creatureName, "");
			newDoNotKillList = newDoNotKillList.replace(",,", ",");
			if (newDoNotKillList.charAt(0) == ",") newDoNotKillList = newDoNotKillList.substring(1,newDoNotKillList.length);
			evt.target.innerHTML = 'Add to the do not kill list';
		} else {
			newDoNotKillList = doNotKillList + (doNotKillList.length !== 0?",":"") + creatureName;
			newDoNotKillList = newDoNotKillList.replace(",,", ",");
			evt.target.innerHTML = 'Remove from do not kill list';
		}
		GM_setValue("doNotKillList",newDoNotKillList);
		Helper.doNotKillList = newDoNotKillList;
		//refresh the action list
		//~ if (System.browserVersion>=4 && navigator.userAgent.indexOf("Firefox")>0) {
			//~ window.wrappedJSObject.GameData.doAction(-1);
		//~ } else {
			var gameData = unsafeWindow.GameData.doAction(-1);
		//~ }
	},

	checkIfGroupExists: function(responseText) {
		var doc=System.createDocumentWithImages(responseText);
		var groupExistsIMG = $(doc).find('img[title="Disband Group (Cancel Attack)"]');
		if (groupExistsIMG.length > 0) {
			var groupHref = groupExistsIMG.parents('td:first').find('a:first').attr("href");
			System.xmlhttp(groupHref, Helper.getCreatureGroupData);
		}
	},

	getCreatureGroupData: function(responseText) {
		var doc=System.createDocument(responseText);
		var groupAttackValue = System.findNode("//table[@width='400']/tbody/tr/td[contains(.,'Attack:')]",doc).nextSibling.textContent.replace(/,/,"")*1;
		var groupDefenseValue = System.findNode("//table[@width='400']/tbody/tr/td[contains(.,'Defense:')]",doc).nextSibling.textContent.replace(/,/,"")*1;
		var groupArmorValue = System.findNode("//table[@width='400']/tbody/tr/td[contains(.,'Armor:')]",doc).nextSibling.textContent.replace(/,/,"")*1;
		var groupDamageValue = System.findNode("//table[@width='400']/tbody/tr/td[contains(.,'Damage:')]",doc).nextSibling.textContent.replace(/,/,"")*1;
		var groupHPValue = System.findNode("//table[@width='400']/tbody/tr/td[contains(.,'HP:')]",doc).nextSibling.textContent.replace(/,/,"")*1;
		System.xmlhttp("index.php?cmd=profile", Helper.getCreaturePlayerData,
			{"groupExists": true, "groupAttackValue": groupAttackValue, "groupDefenseValue": groupDefenseValue,
				"groupArmorValue": groupArmorValue, "groupDamageValue": groupDamageValue, "groupHPValue": groupHPValue, "groupEvaluation": true});
	},

	getCreaturePlayerData: function(responseText, callback) {
		//playerdata
		var doc=System.createDocumentWithImages(responseText);
		if (isNewUI == 1) {
			var playerAttackValue = parseInt($(doc).find('td:contains("Attack:"):first').next().clone().children().remove().end().text().trim(),10);
			var playerDefenseValue = parseInt($(doc).find('td:contains("Defense:"):first').next().clone().children().remove().end().text().trim(),10);
			var playerArmorValue = parseInt($(doc).find('td:contains("Armor:"):first').next().clone().children().remove().end().text().trim(),10);
			var playerDamageValue = parseInt($(doc).find('td:contains("Damage:"):first').next().clone().children().remove().end().text().trim(),10);
			var playerHPValue = parseInt($(doc).find('td:contains("Health:"):first').next().clone().children().remove().end().text().trim(),10);
			var playerKillStreakValue = parseInt($(doc).find('td:contains("Kill"):contains("Streak:"):first').next().clone().children().remove().end().text().trim().replace(/,/g,''),10);
		} else {
			var allItems = doc.getElementsByTagName("B");
			for (var i=0;i<allItems.length;i++) {
				var anItem=allItems[i];
				if (anItem.innerHTML == "Attack:&nbsp;"){
					var attackText = anItem;
					var attackLocation = attackText.parentNode.nextSibling.firstChild.firstChild.firstChild.firstChild;
					var playerAttackValue = parseInt(attackLocation.textContent,10);
					var defenseText = attackText.parentNode.nextSibling.nextSibling.nextSibling.firstChild;
					var defenseLocation = defenseText.parentNode.nextSibling.firstChild.firstChild.firstChild.firstChild;
					var playerDefenseValue = parseInt(defenseLocation.textContent,10);
					var armorText = defenseText.parentNode.parentNode.nextSibling.nextSibling.firstChild.nextSibling.firstChild;
					var armorLocation = armorText.parentNode.nextSibling.firstChild.firstChild.firstChild.firstChild;
					var playerArmorValue = parseInt(armorLocation.textContent,10);
					var damageText = armorText.parentNode.nextSibling.nextSibling.nextSibling.firstChild;
					var damageLocation = damageText.parentNode.nextSibling.firstChild.firstChild.firstChild.firstChild;
					var playerDamageValue = parseInt(damageLocation.textContent,10);
					var hpText = damageText.parentNode.parentNode.nextSibling.nextSibling.firstChild.nextSibling.firstChild;
					var hpLocation = hpText.parentNode.nextSibling.firstChild.firstChild.firstChild.firstChild;
					var playerHPValue = parseInt(hpLocation.textContent,10);
				}
				if (anItem.innerHTML == "Kill&nbsp;Streak:&nbsp;"){
					var killStreakText = anItem;
					var killStreakLocation = killStreakText.parentNode.nextSibling;
					var playerKillStreakValue = System.intValue(killStreakLocation.textContent);
				}
			}
		}
		//get buffs here later ... DD, CA, DC, Constitution, etc
		allItems = doc.getElementsByTagName("IMG");
		var counterAttackLevel = 0, doublerLevel = 0, deathDealerLevel = 0, darkCurseLevel = 0, holyFlameLevel = 0;
		var constitutionLevel = 0, sanctuaryLevel = 0, flinchLevel = 0, nightmareVisageLevel = 0, superEliteSlayerLevel = 0;
		var fortitudeLevel = 0, chiStrikeLevel = 0, terrorizeLevel = 0;
		for (i=0;i<allItems.length;i++) {
			anItem=allItems[i];
			if (anItem.getAttribute("src").search("/skills/") != -1) {
				var onmouseover = $(anItem).data("tipped");
				var counterAttackRE = /<b>Counter Attack<\/b> \(Level: (\d+)\)/;
				var counterAttack = counterAttackRE.exec(onmouseover);
				if (counterAttack) {
					counterAttackLevel = counterAttack[1];
					continue;
				}
				var doublerRE = /<b>Doubler<\/b> \(Level: (\d+)\)/;
				var doubler = doublerRE.exec(onmouseover);
				if (doubler) {
					doublerLevel = doubler[1];
					continue;
				}
				var deathDealerRE = /<b>Death Dealer<\/b> \(Level: (\d+)\)/;
				var deathDealer = deathDealerRE.exec(onmouseover);
				if (deathDealer) {
					deathDealerLevel = deathDealer[1];
					continue;
				}
				var darkCurseRE = /<b>Dark Curse<\/b> \(Level: (\d+)\)/;
				var darkCurse = darkCurseRE.exec(onmouseover);
				if (darkCurse) {
					darkCurseLevel = darkCurse[1];
					continue;
				}
				var holyFlameRE = /<b>Holy Flame<\/b> \(Level: (\d+)\)/;
				var holyFlame = holyFlameRE.exec(onmouseover);
				if (holyFlame) {
					holyFlameLevel = holyFlame[1];
					continue;
				}
				var constitutionRE = /<b>Constitution<\/b> \(Level: (\d+)\)/;
				var constitution = constitutionRE.exec(onmouseover);
				if (constitution) {
					constitutionLevel = constitution[1];
					continue;
				}
				var sanctuaryRE = /<b>Sanctuary<\/b> \(Level: (\d+)\)/;
				var sanctuary = sanctuaryRE.exec(onmouseover);
				if (sanctuary) {
					sanctuaryLevel = sanctuary[1];
					continue;
				}
				var flinchRE = /<b>Flinch<\/b> \(Level: (\d+)\)/;
				var flinch = flinchRE.exec(onmouseover);
				if (flinch) {
					flinchLevel = flinch[1];
					continue;
				}
				var nightmareVisageRE = /<b>Nightmare Visage<\/b> \(Level: (\d+)\)/;
				var nightmareVisage = nightmareVisageRE.exec(onmouseover);
				if (nightmareVisage) {
					nightmareVisageLevel = nightmareVisage[1];
					continue;
				}
				var superEliteSlayerRE = /<b>Super Elite Slayer<\/b> \(Level: (\d+)\)/;
				var superEliteSlayer = superEliteSlayerRE.exec(onmouseover);
				if (superEliteSlayer) {
					superEliteSlayerLevel = superEliteSlayer[1];
					continue;
				}
				var fortitudeRE = /<b>Fortitude<\/b> \(Level: (\d+)\)/;
				var fortitude = fortitudeRE.exec(onmouseover);
				if (fortitude) {
					fortitudeLevel = fortitude[1];
					continue;
				}
				var chiStrikeRE = /<b>Chi Strike<\/b> \(Level: (\d+)\)/;
				var chiStrike = chiStrikeRE.exec(onmouseover);
				if (chiStrike) {
					chiStrikeLevel = chiStrike[1];
					continue;
				}
				var terrorizeRE = /<b>Terrorize<\/b> \(Level: (\d+)\)/;
				var terrorize = terrorizeRE.exec(onmouseover);
				if (terrorize) {
					terrorizeLevel = terrorize[1];
					continue;
				}
			}
		}
		//group data (if appropriate)
		var groupAttackValue = 0, groupDefenseValue = 0,  groupArmorValue = 0, groupDamageValue = 0, groupHPValue = 0;
		groupExists = callback.groupExists;
		groupEvaluation = callback.groupEvaluation;
		if (groupExists) {
			groupAttackValue = callback.groupAttackValue;
			groupDefenseValue = callback.groupDefenseValue;
			groupArmorValue = callback.groupArmorValue;
			groupDamageValue = callback.groupDamageValue;
			groupHPValue = callback.groupHPValue;
		}
		var combatEvaluatorBias = GM_getValue("combatEvaluatorBias");
		var attackVariable = 1.1053, generalVariable = 1.1053, hpVariable = 1.1;
		if (combatEvaluatorBias == 1) {
			generalVariable = 1.1;
			hpVariable = 1.053;
		} else if (combatEvaluatorBias == 2) {
			generalVariable = 1.053;
			hpVariable = 1;
		} else if (combatEvaluatorBias == 3) {
			generalVariable = 1.1053;
			hpVariable = 1;
		}
		//creaturedata
		if ($('#worldPage').length > 0) { // new map
			var creatureName    = $('#dialog-viewcreature').find('h2.name').text();
			var creatureClass   = $('#dialog-viewcreature').find('span.classification').text();
			var creatureLevel   = $('#dialog-viewcreature').find('span.level').text();
			var creatureAttack  = System.intValue($('#dialog-viewcreature').find('dd.attribute-atk').text());
			var creatureDefense = System.intValue($('#dialog-viewcreature').find('dd.attribute-def').text());
			var creatureArmor   = System.intValue($('#dialog-viewcreature').find('dd.attribute-arm').text());
			var creatureDamage  = System.intValue($('#dialog-viewcreature').find('dd.attribute-dmg').text());
			var creatureHP      = System.intValue($('#dialog-viewcreature').find('p.health-max').text());
		} else { //old UI
			var creatureStatTable = System.findNode("//table[tbody/tr/td[.='Statistics']]");
			if (!creatureStatTable) {return;}
			var creatureName    = System.findNode("//td/font[@size='3'][b]").textContent.trim();
			var creatureClass   = creatureStatTable.rows[1].cells[1].textContent;
			var creatureLevel   = creatureStatTable.rows[1].cells[3].textContent;
			var creatureAttack  = System.intValue(creatureStatTable.rows[2].cells[1].textContent);
			var creatureDefense = System.intValue(creatureStatTable.rows[2].cells[3].textContent);
			var creatureArmor   = System.intValue(creatureStatTable.rows[3].cells[1].textContent);
			var creatureDamage  = System.intValue(creatureStatTable.rows[3].cells[3].textContent);
			var creatureHP      = System.intValue(creatureStatTable.rows[4].cells[1].textContent);
		}
		var extraNotes = "", holyFlameBonusDamage = 0;
		//reduce stats if critter is a SE and player has SES cast on them.
		var superEliteSlayerMultiplier = 0;
		if (superEliteSlayerLevel > 0) {
			superEliteSlayerMultiplier = Math.round(0.002 * superEliteSlayerLevel*100)/100;
		}
		if (creatureName.search("Super Elite") != -1) {
			creatureAttack -= Math.ceil(creatureAttack * superEliteSlayerMultiplier);
			creatureDefense -= Math.ceil(creatureDefense * superEliteSlayerMultiplier);
			creatureArmor -= Math.ceil(creatureArmor * superEliteSlayerMultiplier);
			creatureDamage -= Math.ceil(creatureDamage * superEliteSlayerMultiplier);
			creatureHP -= Math.ceil(creatureHP * superEliteSlayerMultiplier);
			extraNotes += (superEliteSlayerLevel > 0? "SES Stat Reduction Multiplier = " + superEliteSlayerMultiplier + "<br>":"");
		}
		//math section ... analysis
		//Holy Flame adds its bonus after the armor of the creature has been taken off.
		if (creatureClass == "Undead") {
			holyFlameBonusDamage = Math.max(Math.floor((playerDamageValue - creatureArmor) * holyFlameLevel * 0.002),0);
			extraNotes += (holyFlameLevel > 0? "HF Bonus Damage = " + holyFlameBonusDamage + "<br>":"");
		}
		//Death Dealer and Counter Attack both applied at the same time
		var deathDealerBonusDamage = Math.floor(playerDamageValue * (Math.min(Math.floor(playerKillStreakValue/5) * 0.01 * deathDealerLevel, 20)/100));
		var counterAttackBonusAttack = Math.floor(playerAttackValue * 0.0025 * counterAttackLevel);
		var counterAttackBonusDamage = Math.floor(playerDamageValue * 0.0025 * counterAttackLevel);
		var extraStaminaPerHit = (counterAttackLevel > 0? Math.ceil((1+(doublerLevel/50))*0.0025*counterAttackLevel) :0);
		//playerAttackValue += counterAttackBonusAttack;
		//playerDamageValue += deathDealerBonusDamage + counterAttackBonusDamage;
		extraNotes += (deathDealerLevel > 0? "DD Bonus Damage = " + deathDealerBonusDamage + "<br>":"");
		if (counterAttackLevel > 0) {
			extraNotes += "CA Bonus Attack/Damage = " + counterAttackBonusAttack + " / " + counterAttackBonusDamage + "<br>";
			extraNotes += "CA Extra Stam Used = " + extraStaminaPerHit + "<br>";
		}
		//Attack:
		extraNotes += (darkCurseLevel > 0? "DC Bonus Attack = " + Math.floor(creatureDefense * darkCurseLevel * 0.002) + "<br>":"");
		var nightmareVisageAttackMovedToDefense = Math.floor(((groupExists?groupAttackValue:playerAttackValue) + counterAttackBonusAttack) * nightmareVisageLevel * 0.0025);
		extraNotes += (nightmareVisageLevel > 0? "NMV Attack moved to Defense = " + nightmareVisageAttackMovedToDefense + "<br>":"");
		var overallAttackValue = (groupExists?groupAttackValue:playerAttackValue) + counterAttackBonusAttack - nightmareVisageAttackMovedToDefense;
		var hitByHowMuch = (overallAttackValue - Math.ceil(attackVariable*(creatureDefense - (creatureDefense * darkCurseLevel * 0.002))));
		if (combatEvaluatorBias == 3)
			hitByHowMuch = (overallAttackValue - Math.ceil(creatureDefense - (creatureDefense * darkCurseLevel * 0.002)) - 50);
		//Damage:
		var fortitudeExtraHPs = Math.floor((groupExists?groupHPValue:playerHPValue) * fortitudeLevel * 0.001);
		extraNotes += (fortitudeLevel > 0? "Fortitude Bonus HP = " + fortitudeExtraHPs + "<br>":"");
		var overallHPValue = (groupExists?groupHPValue:playerHPValue) + fortitudeExtraHPs;
		var chiStrikeExtraDamage = Math.floor(overallHPValue * chiStrikeLevel * 0.001);
		extraNotes += (chiStrikeLevel > 0? "Chi Strike Bonus Damage = " + chiStrikeExtraDamage + "<br>":"");
		var overallDamageValue = (groupExists?groupDamageValue:playerDamageValue) + deathDealerBonusDamage + counterAttackBonusDamage + holyFlameBonusDamage + chiStrikeExtraDamage;
		var damageDone = Math.floor(overallDamageValue - ((generalVariable*creatureArmor) + (hpVariable*creatureHP)));
		var numberOfHitsRequired = (hitByHowMuch > 0? Math.ceil((hpVariable*creatureHP)/((overallDamageValue < (generalVariable*creatureArmor))? 1: overallDamageValue - (generalVariable*creatureArmor))):"-");
		//Defense:
		var overallDefenseValue = (groupExists?groupDefenseValue:playerDefenseValue) + Math.floor((groupExists?groupDefenseValue:playerDefenseValue) * constitutionLevel * 0.001) + nightmareVisageAttackMovedToDefense;
		extraNotes += (constitutionLevel > 0? "Constitution Bonus Defense = " + Math.floor((groupExists?groupDefenseValue:playerDefenseValue) * constitutionLevel * 0.001) + "<br>":"");
		extraNotes += (flinchLevel > 0? "Flinch Bonus Attack Reduction = " + Math.floor(creatureAttack * flinchLevel * 0.001) + "<br>":"");
		var creatureHitByHowMuch = Math.floor((attackVariable*creatureAttack - (creatureAttack * flinchLevel * 0.001)) - overallDefenseValue);
		if (combatEvaluatorBias == 3)
			creatureHitByHowMuch = Math.floor((creatureAttack - (creatureAttack * flinchLevel * 0.001)) - overallDefenseValue - 50);
		//Armor and HP:
		var overallArmorValue = (groupExists?groupArmorValue:playerArmorValue) + Math.floor(playerArmorValue * sanctuaryLevel * 0.001);
		extraNotes += (sanctuaryLevel > 0? "Sanc Bonus Armor = " + Math.floor(playerArmorValue * sanctuaryLevel * 0.001) + "<br>":"");
		var terrrorizeEffect = Math.floor(creatureDamage * terrorizeLevel * 0.001);
		extraNotes += (terrorizeLevel > 0? "Terrorize Creature Damage Effect = " + (terrrorizeEffect * -1) + "<br>":"");
		creatureDamage -= terrrorizeEffect;
		var creatureDamageDone = Math.ceil((generalVariable*creatureDamage) - (overallArmorValue + overallHPValue));
		var numberOfCreatureHitsTillDead = (creatureHitByHowMuch >= 0? Math.ceil(overallHPValue/(((generalVariable*creatureDamage) < (overallArmorValue))? 1: (generalVariable*creatureDamage) - (overallArmorValue))):"-");
		//Analysis:
		var playerHits = (numberOfCreatureHitsTillDead=="-"? numberOfHitsRequired:(numberOfHitsRequired=="-"?"-":(numberOfHitsRequired>numberOfCreatureHitsTillDead?"-":numberOfHitsRequired)));
		var creatureHits = (numberOfHitsRequired=="-"?numberOfCreatureHitsTillDead:(numberOfCreatureHitsTillDead=="-"?"-":(numberOfCreatureHitsTillDead>numberOfHitsRequired?"-":numberOfCreatureHitsTillDead)));
		var fightStatus = "Unknown";
		if (playerHits == "-" && creatureHits == "-") {
			fightStatus = "Unresolved";
		} else if (playerHits == "-") {
			fightStatus = "Player dies";
		} else if (playerHits == 1) {
			fightStatus = "Player 1 hits" + (numberOfCreatureHitsTillDead-numberOfHitsRequired<=1? ", dies on miss":", survives a miss");
		} else if (playerHits > 1) {
			fightStatus = "Player > 1 hits" + (numberOfCreatureHitsTillDead-numberOfHitsRequired<=1? ", dies on miss":", survives a miss");
		}
		if (counterAttackLevel > 0 && numberOfHitsRequired == "1") {
			var lowestCALevelToStillHit = Math.max(Math.ceil((counterAttackBonusAttack-hitByHowMuch + 1)/playerAttackValue/0.0025), 0);
			var lowestCALevelToStillKill = Math.max(Math.ceil((counterAttackBonusDamage-damageDone + 1)/playerDamageValue/0.0025), 0);
			var lowestFeasibleCALevel = Math.max(lowestCALevelToStillHit,lowestCALevelToStillKill);
			extraNotes += "Lowest CA to still 1-hit this creature = " + lowestFeasibleCALevel + "<br>";
			if (lowestFeasibleCALevel !== 0) {
				var extraAttackAtLowestFeasibleCALevel = Math.floor(playerAttackValue * 0.0025 * lowestFeasibleCALevel);
				var extraDamageAtLowestFeasibleCALevel = Math.floor(playerDamageValue * 0.0025 * lowestFeasibleCALevel);
				extraNotes += "Extra CA Att/Dam at this lowered CA level = " + extraAttackAtLowestFeasibleCALevel + " / " + extraDamageAtLowestFeasibleCALevel + "<br>";
			}
			var extraStaminaPerHitAtLowestFeasibleCALevel = (counterAttackLevel > 0? Math.ceil((1+(doublerLevel/50))*0.0025*lowestFeasibleCALevel) :0);
			if (extraStaminaPerHitAtLowestFeasibleCALevel < extraStaminaPerHit) {
				extraNotes += "Extra Stam Used at this lowered CA level = " + extraStaminaPerHitAtLowestFeasibleCALevel + "<br>";
			}
			else {
				extraNotes += "No reduction of stam used at the lower CA level<br>";
			}
		}
		if (numberOfHitsRequired == "-" || numberOfHitsRequired != "1") {
			lowestCALevelToStillHit = Math.max(Math.ceil((counterAttackBonusAttack-hitByHowMuch + 1)/playerAttackValue/0.0025), 0);
			lowestCALevelToStillKill = Math.max(Math.ceil((counterAttackBonusDamage-damageDone + 1)/playerDamageValue/0.0025), 0);
			if (lowestCALevelToStillHit >175) {
				extraNotes += "Even with CA175 you cannot hit this creature<br>";
			} else if (lowestCALevelToStillHit !== 0) {
				extraNotes += "You need a minimum of CA" + lowestCALevelToStillHit + " to hit this creature<br>";
			}
			if (lowestCALevelToStillKill >175) {
				extraNotes += "Even with CA175 you cannot 1-hit kill this creature<br>";
			} else if (lowestCALevelToStillKill !== 0) {
				extraNotes += "You need a minimum of CA" + lowestCALevelToStillKill + " to 1-hit kill this creature<br>";
			}
		}
		//display data
		var evaluatorHTML = "<table width='100%'><tbody><tr><td bgcolor='#CD9E4B' colspan='4' align='center'>" + (groupExists? "Group ":"") + "Combat Evaluation</td></tr>" +
			"<tr><td align='right'><span style='color:#333333'>Will I hit it? </td><td align='left'>" + (hitByHowMuch > 0? "Yes":"No") + "</td>" +
				"<td align='right'><span style='color:#333333'>Extra Attack: </td><td align='left'>( " + hitByHowMuch + " )</td></tr>" +
			"<tr><td align='right'><span style='color:#333333'># Hits to kill it? </td><td align='left'>" + numberOfHitsRequired + "</td>" +
				"<td align='right'><span style='color:#333333'>Extra Damage: </td><td align='left'>( " + damageDone + " )</td></tr>" +
			"<tr><td align='right'><span style='color:#333333'>Will I be hit? </td><td align='left'>" + (creatureHitByHowMuch >= 0? "Yes":"No") + "</td>" +
				"<td align='right'><span style='color:#333333'>Extra Defense: </td><td align='left'>( " + (-1 * creatureHitByHowMuch) + " )</td></tr>" +
			"<tr><td align='right'><span style='color:#333333'># Hits to kill me? </td><td align='left'>" + numberOfCreatureHitsTillDead + "</td>" +
				"<td align='right'><span style='color:#333333'>Extra Armor + HP: </td><td align='left'>( " + (-1 * creatureDamageDone) + " )</td></tr>" +
			"<tr><td align='right'><span style='color:#333333'># Player Hits? </td><td align='left'>" + playerHits + "</td>" +
				"<td align='right'><span style='color:#333333'># Creature Hits? </td><td align='left'>" + creatureHits + "</td></tr>" +
			"<tr><td align='right'><span style='color:#333333'>Fight Status: </span></td><td align='left' colspan='3'><span>" + fightStatus + "</span></td></tr>" +
			"<tr><td align='right'><span style='color:#333333'>Notes: </span></td><td align='left' colspan='3'><span style='font-size:x-small;'>" +
				extraNotes + "</span></td></tr>" +
			"<tr><td colspan='4'><span style='font-size:x-small; color:gray'>" +
				"*Does include CA, DD, HF, DC, Flinch, Super Elite Slayer, NMV, Sanctuary, Constitution, Fortitude, Chi Strike and Terrorize (if active) and allow for randomness (1.1053). " +
				"Constitution, NMV, Fortitude and Chi Strike apply to group stats.</span></td></tr>" +
			"</tbody></table>";
		if ($('#worldPage').length > 0) { // new map
			if (groupEvaluation) {
				if ($('div#creatureEvaluatorGroup').length == 0) $('#dialog-viewcreature').append('<div id="creatureEvaluatorGroup" style="clear:both;"></div>');
				var tempdata = evaluatorHTML.replace(/'/g,"\\'");
				$('div#creatureEvaluatorGroup').html(tempdata);
			} else {
				if ($('div#creatureEvaluator').length == 0) $('#dialog-viewcreature').append('<div id="creatureEvaluator" style="clear:both;"></div>');
				var tempdata = evaluatorHTML.replace(/'/g,"\\'");
				$('div#creatureEvaluator').html(tempdata);
			}
		} else {
			var newRow = creatureStatTable.insertRow(creatureStatTable.rows.length);
			var newCell = newRow.insertCell(0);
			newCell.colSpan = '4';
			newCell.innerHTML = evaluatorHTML;
		}
	},

	injectBioWidgets: function() {
		var textArea = System.findNode("//textarea[@id='textInputBox']");
		//textArea.cols=100;
		var textAreaDev = textArea.parentNode;
		var bioPreviewHTML = System.convertTextToHtml(textArea.value);

		var previewDiv = document.createElement("DIV")
		textAreaDev.appendChild(previewDiv);
		previewDiv.innerHTML = '<table align="center" width="325" border="1"><tbody>' +
			'<tr><td style="text-align:center;color:#7D2252;background-color:#CD9E4B">Preview</td></tr>' +
			'<tr><td align="left" width="325"><span style="font-size:small;" findme="biopreview">' + bioPreviewHTML +
			'</span></td></tr></tbody></table>';
		//Add description text for the new tags
		var advancedEditing = System.findNode("//div[h2[.='Advanced Editing:']]");
		/* TODO: Add a way to hide the advanced editing 'note' box dynamically.
		advancedEditing.addEventListener('mouseover', function(event) {
			event.target.style.backgroundColor = "#8EE5EE";
		}, false);
		advancedEditing.addEventListener('mouseout', function(event) {
			event.target.style.backgroundColor = "";
		}, false);*/
		var advancedEditingDiv = document.createElement("DIV")
		advancedEditing.appendChild(advancedEditingDiv);
		advancedEditingDiv.style.align = 'left';
		advancedEditingDiv.innerHTML += "`~This will allow FSH Script users to select buffs from your bio~`<br/>" +
			"You can use the [cmd] tag as well to determine where to put the 'Ask For Buffs' button<br/><br/>" +
			"&nbsp;&nbsp;&nbsp;- Note 1: The ` and ~ characters are on the same key on QWERTY keyboards. ` is <b>NOT</b> an apostrophe.<br/>" +
			"&nbsp;&nbsp;&nbsp;- Note 2: Inner text will not contain special characters (non-alphanumeric).<br/>" +
			"&nbsp;&nbsp;&nbsp;- P.S. Be creative with these! Wrap your buff pack names in them to make buffing even easier!";
		var bioEditLinesDiv = document.createElement("DIV")
		advancedEditing.appendChild(bioEditLinesDiv);
		textArea.rows = GM_getValue("bioEditLines");
		bioEditLinesDiv.innerHTML += " Display <input size=2 maxlength=2 id='Helper:linesToShow' type='text' value='" + GM_getValue("bioEditLines") + "'/> Lines"  +
		" <input type='button' style='display:none' id='Helper:saveLines' value='Update Rows To Show' class='custombutton'/>";
		document.getElementById("Helper:saveLines").addEventListener('click',
			function (event) {
				var theBox = document.getElementById("Helper:linesToShow");
				if (theBox.value.trim().length === 0) {
					return;
				}
				GM_setValue("bioEditLines", theBox.value);
				window.location.reload();
			}, true);

		unsafeWindow.document.getElementById("Helper:linesToShow").realmKeyHandler = function (event) {
			event = ( event ) ? event : window.event;
			var charkey = String.fromCharCode(( event.which ) ? event.which : event.keyCode);
			document.getElementById("Helper:saveLines").style.display = "";
			return ((("0123456789").indexOf(charkey) > -1));
		};
		document.getElementById('textInputBox').addEventListener('keyup', Helper.updateBioCharacters, true);
		//Force the preview area to render
		Helper.updateBioCharacters(null);
	},

	injectShoutboxWidgets: function(textboxname, maxcharacters) {
		var textArea = System.findNode("//textarea[@name='" + textboxname + "']");
		textArea.setAttribute("findme", "Helper:InputText");
		textArea.setAttribute("maxcharacters", maxcharacters);
		var textAreaTable = System.findNode("../../../..", textArea);
		textAreaTable.insertRow(-1).insertCell(0).setAttribute("id", "Helper:ShoutboxPreview");
		textArea.addEventListener('keyup', Helper.updateShoutboxPreview, true);
	},

	updateShoutboxPreview: function(evt) {
		var textArea = System.findNode("//textarea[@findme='Helper:InputText']");
		var textContent = textArea.value;
		var chars = textContent.length;
		var maxchars = parseInt(textArea.getAttribute("maxcharacters"),10);
		if (chars>maxchars) {
			textContent=textContent.substring(0,maxchars);
			textArea.value=textContent;
			chars=maxchars;
		}

		document.getElementById("Helper:ShoutboxPreview").innerHTML = '<table align="center" width="325" border="0"><tbody>' +
			'<tr><td style="text-align:center;color:#7D2252;background-color:#CD9E4B">Preview (' + chars + '/' + maxchars + ' characters)</td></tr>' +
			'<tr><td width="325"><span style="font-size:x-small;" findme="biopreview">' + textContent +
			'</span></td></tr></tbody></table>';

	},

	updateBioCharacters: function(evt) {
		Helper.buffCost={'count':0,'buffs':{}};
		var textArea = System.findNode("//textarea[@id='textInputBox']");
		var previewArea = System.findNode("//span[@findme='biopreview']");
		var bioContents = System.convertTextToHtml(textArea.value);

		bioContents=bioContents.replace(/\{b\}/g,'`~').replace(/\{\/b\}/g,'~`');
		var buffs=bioContents.match(/`~([^~]|~(?!`))*~`/g);
		if (buffs) {
			for (var i=0;i<buffs.length;i++) {
				var fullName=buffs[i].replace(/(`~)|(~`)|(\{b\})|(\{\/b\})/g,'');
				var buffName = Helper.removeHTML(fullName);
				var cbString =
					'<span id="Helper:buff'+i+'" style="color:blue;cursor:pointer">'+
					fullName+'</span>';
				bioContents=bioContents.replace(buffs[i], cbString);
			}

			if (bioContents.indexOf("[cmd]") < 0) bioContents+="[cmd]";

			bioContents = bioContents.replace("[cmd]",'<input id="Helper:sendBuffMsg" subject="buffMe" href="index.php?cmd=message&target_player=" class="custombutton" type="submit" value="Ask For Buffs"/>' +
			'<span id=buffCost style="color:red"></span>');
			previewArea.innerHTML = bioContents;

			for (i=0;i<buffs.length;i++) {
				var buff=document.getElementById('Helper:buff'+i);
				if (buff) buff.addEventListener('click', Helper.toggleBuffsToBuy,true);
			}
		}

	},

	addHistoryWidgets: function() {
		var textArea = System.findNode("//textarea[@name='history']");
		if (!textArea) {return;}
		textArea.value = textArea.value.replace(/<br \/>/ig,"");
		var textAreaDiv = textArea.parentNode;
		var bioPreviewHTML = System.convertTextToHtml(textArea.value);
		var newDiv = document.createElement("div")
		textAreaDiv.appendChild(newDiv);
		newDiv.innerHTML = '<table align="center" width="325" border="1"><tbody>' +
			'<tr><td style="text-align:center;color:#7D2252;background-color:#CD9E4B">Preview</td></tr>' +
			'<tr><td align="left" width="325"><span style="font-size:small;" findme="biopreview">' + bioPreviewHTML +
			'</span></td></tr></tbody></table>';

		document.getElementById('textInputBox').addEventListener('keyup', Helper.updateHistoryCharacters, true);
	},

	updateHistoryCharacters: function(evt) {
		var textArea = System.findNode("//textarea[@id='textInputBox']");
		var previewArea = System.findNode("//span[@findme='biopreview']");
		var bioPreviewHTML = System.convertTextToHtml(textArea.value);
		previewArea.innerHTML = bioPreviewHTML;
	},

	getTotalHistoryCharacters: function(responseText) {
		var doc=System.createDocument(responseText);
		var historyCharactersText = System.findNode("//td[.='+20 History Characters']",doc);
		var historyCharactersRatio = historyCharactersText.nextSibling.nextSibling.nextSibling.nextSibling;
		var historyCharactersValueRE = /(\d+) \/ 250/;
		var historyCharactersValue = historyCharactersValueRE.exec(historyCharactersRatio.innerHTML)[1]*1;
		var historyTotal = System.findNode("//span[@findme='historytotal']");
		historyTotal.innerHTML = (historyCharactersValue * 20) + 255;
	},

	portalToStartArea: function() {
		if (window.confirm('Are you sure you with to use a special portal back to Krul Island?')) {
			var krulXCV = GM_getValue("krulXCV");
			if (krulXCV) {
				System.xmlhttp("index.php?cmd=settings&subcmd=fix&xcv=" + krulXCV, function() {window.location="index.php?cmd=world";});
			} else {
				window.alert("Please visit the preferences page to cache your Krul Portal link");
			}
		}
	},

	storePlayerUpgrades: function() {
		var alliesText = System.findNode("//td[.='+1 Max Allies']");
		var alliesRatio = alliesText.nextSibling.nextSibling.nextSibling.nextSibling;
		if (alliesRatio) {
			var alliesValueRE = /(\d+) \/ 115/;
			var alliesValue = alliesValueRE.exec(alliesRatio.innerHTML)[1]*1;
			GM_setValue("alliestotal",alliesValue+5);
		}
		var enemiesText = System.findNode("//td[.='+1 Max Enemies']");
		var enemiesRatio = enemiesText.nextSibling.nextSibling.nextSibling.nextSibling;
		if (enemiesRatio) {
			var enemiesValueRE = /(\d+) \/ 115/;
			var enemiesValue = enemiesValueRE.exec(enemiesRatio.innerHTML)[1]*1;
			GM_setValue("enemiestotal",enemiesValue+5);
		}
		var maxAuctionsText = System.findNode("//td[.='+1 Max Auctions']");
		var maxAuctionsRatio = maxAuctionsText.nextSibling.nextSibling.nextSibling.nextSibling;
		if (maxAuctionsRatio) {
			var maxAuctionsValueRE = /(\d+) \/ 100/;
			var maxAuctionsValue = maxAuctionsValueRE.exec(maxAuctionsRatio.innerHTML)[1]*1;
			GM_setValue("maxAuctions",maxAuctionsValue+2);
		}
	},

	injectTopRated: function() {
		var mainTable = System.findNode("//table[tbody/tr/td/font/b[.='Top 250 Players']]");
		if (!mainTable) {return;}
		var mainTitle = mainTable.rows[0].cells[0];
		mainTitle.innerHTML += '&nbsp<input id="findOnlinePlayers" type="button" value="Find Online Players" ' +
			'title="Fetch the online status of the top 250 players (warning ... takes a few seconds)." class="custombutton">';

		document.getElementById('findOnlinePlayers').addEventListener('click', Helper.findOnlinePlayers, true);
	},

	findOnlinePlayers: function() {
		var findPlayersButton = System.findNode("//input[@id='findOnlinePlayers']");
		findPlayersButton.style.display = "none";
		var topPlayerTable = System.findNode("//table[@width='500']");
		var lowestLevel = topPlayerTable.rows[topPlayerTable.rows.length-4].cells[3].textContent*1;
		GM_setValue("lowestLevelInTop250",lowestLevel);
		var guildsChecked = "";
		for (var i=0; i<topPlayerTable.rows.length; i++) {
			var aRow = topPlayerTable.rows[i];
			if (aRow.cells[1] && i!==0) {
				var playerTable = topPlayerTable.rows[i].cells[1].firstChild;
				var playerElement = playerTable.rows[0].cells[0];
				var playerGuildHref = playerElement.firstChild.getAttribute("href");
				var playerGuildName = playerElement.firstChild.firstChild.getAttribute("title");
				//GM_log(guildsChecked.indexOf(playerGuildName));
				//if we haven't already checked this guild, then go ahead and check it
				if (guildsChecked.search(playerGuildName) == -1) {
					//GM_log(i+"::"+playerGuildName + "::" + playerGuildHref + "::" + aRow.innerHTML + "::" + guildsChecked);
					System.xmlhttp(playerGuildHref, Helper.parseGuildOnline);
					//log current guild as checked.
					guildsChecked += ' ' + playerGuildName;
				}
			}
		}
	},

	parseGuildOnline: function(responseText) {
		var topPlayerTable = System.findNode("//table[@width='500']");
		var lowestLevel = GM_getValue("lowestLevelInTop250");
		var doc=System.createDocument(responseText);
		memberTable = System.findNode("//table[tbody/tr/td[.='Rank']]", doc);
		for (var i=0; i<memberTable.rows.length; i++) {
			aRow = memberTable.rows[i];
			if (aRow.cells[1] && i!== 0) {
				onlineStatus = aRow.cells[0].innerHTML;
				playerName = aRow.cells[1].firstChild.nextSibling.innerHTML;
				playerLevel = aRow.cells[2].textContent*1;
				if (playerLevel >= lowestLevel) { // don't bother looking if they are a low level
					//var playerInTopPlayerList = System.findNode("//a[.='" + playerName +"']", topPlayerTable); // didn't work so had to comprimise.
					var playerInTopPlayerList = System.findNode("//a[.='" + playerName +"']");
					var inTopPlayerTable = System.findNode("//table[@width='500' and contains(.,'" + playerName +"')]");
					if (playerInTopPlayerList && inTopPlayerTable) {
						insertHere = playerInTopPlayerList.parentNode;
						insertHere.innerHTML += '&nbsp' + onlineStatus;
					}
				}
			}
		}
	},

injectArena: function() {
		var arenaTables = System.findNodes("//table[@width=620]/tbody/tr/td[contains(.,'Reward')]/../../..");
		var injectHere = System.findNode("//tr[td/input[@value='Setup Combat Moves...']]").previousSibling.previousSibling.firstChild;
		var hideMatchesForCompletedMoves = GM_getValue("hideMatchesForCompletedMoves");
		injectHere.innerHTML = '<input id="Helper:hideMatchesForCompletedMoves" type="checkbox"' +
				(hideMatchesForCompletedMoves?' checked':'') + '/>'+
				'<span style="color:blue;">&nbsp;Hide Matches for Completed Moves ' +
				'<div align=center><form id=Helper:arenaFilterForm subject="arena" onSubmit="javascript:return false;">' +
				'Min lvl:<input value="' + GM_getValue("arenaMinLvl", 1) + '" size=5 name="Helper.arenaMinLvl" id="Helper.arenaMinLvl" style=custominput/> ' +
				'Max lvl:<input value="' + GM_getValue("arenaMaxLvl", 9999) + '" size=5 name="Helper.arenaMaxLvl" id="Helper.arenaMaxLvl" style=custominput/> ' +
				'<input id="Helper:arenaFilter" subject="arena" class="custombutton" type="submit" value="Filter"/>' +
				'<input id="Helper:arenaFilterReset" subject="arena" class="custombutton" type="button" value="Reset"/></form></div>'+
				'</span>';
		document.getElementById("Helper:hideMatchesForCompletedMoves").addEventListener('click', Helper.hideMatchesForCompletedMoves, true);
		document.getElementById("Helper:arenaFilterReset").addEventListener('click', Helper.resetLevelFilter, true);
		document.getElementById("Helper:arenaFilterForm").addEventListener('submit', Helper.setLevelFilter, true);

		var arenaMoves = System.getValueJSON("arenaMoves");
		var hideArenaPrizes = GM_getValue("hideArenaPrizes");
		if (hideArenaPrizes) {
			var hideArenaPrizesArray = hideArenaPrizes.split(",");
		}
		var oldArenaMatches = System.getValueJSON("arenaMatches");
		if (!oldArenaMatches) {
			arenaMatches = new Array();
		} else {
			while (oldArenaMatches.length>1000)
			{
				oldArenaMatches.shift();
			}
			arenaMatches = oldArenaMatches;
		}
		var matchFound = false;
		var minLvl=GM_getValue('arenaMinLvl',1);
		var maxLvl=GM_getValue('arenaMaxLvl',9999);
		for( var ar = 0; ar < arenaTables.length;ar++)
		{
			var arenaTable = arenaTables[ar];
			for (var i=1; i<arenaTable.rows.length; i++){
				var row = arenaTable.rows[i];

				matchFound = false;
				aMatch = new Object();
				var arenaIDRE = /#\s(\d+)/;
				var arenaID = arenaIDRE.exec(row.cells[0].textContent)[1]*1;
				if (oldArenaMatches){
					for (var k=0; k<oldArenaMatches.length; k++){
						if (oldArenaMatches[k].arenaID == arenaID) {
							matchFound = true;
							break;
						}
					}
				}
				if (!matchFound) {
					aMatch.arenaID = arenaID;
					aMatch.arenaJoinCostHTML = row.cells[2].innerHTML;
					aMatch.arenaSpecialsHTML = row.cells[4].innerHTML;
					if (row.cells[4].innerHTML.search("/pvp/specials_1.gif") != -1) {
						aMatch.arenaSpecials = true;
					} else {
						aMatch.arenaSpecials = false;
					}
					aMatch.arenaHellForgeHTML = row.cells[5].innerHTML;
					aMatch.arenaEpicHTML = row.cells[6].innerHTML;
					aMatch.arenaMaxEquipHTML = row.cells[7].innerHTML;
					aMatch.arenaRewardHTML = row.cells[8].innerHTML;
					arenaMatches.push(aMatch);
				}

				var prizeSRC = row.cells[8].firstChild.getAttribute("src");
				var maxEquipLvL = row.cells[7].textContent.replace(',','');
				if (hideMatchesForCompletedMoves && arenaMoves && prizeSRC && prizeSRC.search("/pvp/") != -1) {
					for (var j=0; j<arenaMoves.length; j++){
						var prizeSRCShort = prizeSRC.substr(prizeSRC.indexOf("/pvp/"),prizeSRC.length);
						var searchText = "/pvp/" + arenaMoves[j].moveID+ ".gif";
						if (prizeSRCShort == searchText && arenaMoves[j].moveCount == 3){
							row.style.visibility = "hidden";
							row.style.display = "none";
							break;
						}
					}
				}
				if (prizeSRC && prizeSRC.search("/items/") != -1) {
					var prizeImgElement = row.cells[8].firstChild;
					var prizeOnmouseover = $(prizeImgElement).data("tipped");
					//var itemIdRE = /ajaxLoadCustom\((\d+)/;
					var itemIdRE = /fetchitem.php\?item_id=(\d+)/;
					var itemId = itemIdRE.exec(prizeOnmouseover)[1];
					prizeOnmouseover = prizeOnmouseover.replace(/""/,'"ItemId = '+itemId+'"');
					prizeImgElement.setAttribute("data-tipped", prizeOnmouseover);
					if (hideArenaPrizes) {
						for (k=0; k<hideArenaPrizesArray.length; k++){
							var prizeSRCShort = prizeSRC.substr(prizeSRC.indexOf("/items/"),prizeSRC.length);
							var compareStr = "/items/" + hideArenaPrizesArray[k] + ".gif";
							if (prizeSRCShort == compareStr) {
								row.style.visibility = "hidden";
								row.style.display = "none";
								break;
							}
						}
					}
				}
				if (!((maxEquipLvL >= minLvl) && (maxEquipLvL <= maxLvl))) {
					row.style.visibility = "hidden";
					row.style.display = "none";
				}

				if (!matchFound) {
					//color new matches since last visit
					row.style.backgroundColor = '#F5F298';
				}
			}
		}
		System.setValueJSON("arenaMatches", arenaMatches);

		Helper.getArenaTable();
		Helper.addEventSortArena();
		if (GM_getValue("autoSortArenaList")) {
			Helper.sortArenaByHeader("");
		}
	},

	setLevelFilter: function(evt) {
		var filterSubject = evt.target.getAttribute("subject");
		var href = evt.target.getAttribute("href");
		var minLvlSearchText = filterSubject + "MinLvl";
		var maxLvlSearchText = filterSubject + "MaxLvl";
		var playerMinLvl = document.getElementById("Helper." + minLvlSearchText);
		var playerMaxLvl = document.getElementById("Helper." + maxLvlSearchText);
		if (playerMinLvl.value === '') playerMinLvl.value = '0';
		if (playerMaxLvl.value === '') playerMaxLvl.value = '9999';
		if (!isNaN(playerMinLvl.value))
			GM_setValue(minLvlSearchText, parseInt(playerMinLvl.value,10));
		if (!isNaN(playerMaxLvl.value))
			GM_setValue(maxLvlSearchText, parseInt(playerMaxLvl.value,10));
		if (href) window.location = System.server + href;
		else window.location = window.location;
	},

	resetLevelFilter: function(evt) {
		var filterSubject = evt.target.getAttribute("subject");
		var href = evt.target.getAttribute("href");
		var minLvlSearchText = filterSubject + "MinLvl";
		var maxLvlSearchText = filterSubject + "MaxLvl";
		GM_setValue(minLvlSearchText, 1);
		document.getElementById("Helper." + minLvlSearchText).value=1;
		GM_setValue(maxLvlSearchText, 9999);
		document.getElementById("Helper." + maxLvlSearchText).value=9999;
		if (href) window.location = System.server + href;
		else window.location = window.location;
	},

	addEventSortArena: function() {
		var titleCells=System.findNodes("//td[.='Id']/../td");
		for (var i=0; i<titleCells.length; i++) {
			var cell=titleCells[i];
			cell.innerHTML = cell.innerHTML.replace(/ \[/,"<br>[");
			cell.innerHTML = cell.innerHTML.replace(/&nbsp;/," ");
			if (cell.innerHTML.search("LvL") != -1 ||
				cell.innerHTML.search("Join Cost") != -1 ||
				cell.innerHTML.search("State") != -1 ||
				cell.innerHTML.search("Specials") != -1 ||
				cell.innerHTML.search("Hell Forge") != -1 ||
				cell.innerHTML.search("Epic") != -1 ||
				cell.innerHTML.search("Id") != -1){
				cell.style.textDecoration="underline";
				cell.style.cursor="pointer";
				cell.innerHTML=cell.innerHTML.replace(/^&nbsp;/,"");
				cell.addEventListener('click', Helper.sortArena, true);
			}
		}
	},

	hideMatchesForCompletedMoves: function(evt) {
		GM_setValue("hideMatchesForCompletedMoves", evt.target.checked);
		window.location=window.location;
	},

	sortArena: function(evt) {
		Helper.sortArenaByHeader(evt.target.textContent.replace(/[ \s]/g,""));
	},

	getArenaTable: function() {
		var list=System.findNode("//td[.='Id']/../..");

		Helper.arenaRows = new Array();
		for (var i=1; i<list.rows.length; i++){
			var theRow=list.rows[i];
			Helper.arenaRows[i-1] = {
				'ArenaID': theRow.cells[0].textContent,
				'Players': theRow.cells[1].textContent,
				'JoinCost': theRow.cells[2].textContent.replace(/,/g,"")*1,
				'JoinCostHTML': theRow.cells[2].innerHTML,
				'State': theRow.cells[3].textContent,
				'Specials': (theRow.cells[4].firstChild.getAttribute("src").search("/specials_1.gif") == -1? 1:0),
				'SpecialsHTML': theRow.cells[4].innerHTML,
				'HellForge': (theRow.cells[5].firstChild.getAttribute("src").search("/specials_1.gif") == -1? 1:0),
				'HellForgeHTML': theRow.cells[5].innerHTML,
				'Epic': (theRow.cells[6].firstChild.getAttribute("src").search("/specials_1.gif") == -1? 1:0),
				'EpicHTML': theRow.cells[6].innerHTML,
				'MaxEquipLvL': theRow.cells[7].textContent.replace(/,/g,"")*1,
				'MaxEquipLvLHTML': theRow.cells[7].innerHTML,
				'Reward': theRow.cells[8].innerHTML,
				'Action': theRow.cells[9].innerHTML,
				'Visibility': theRow.style.visibility,
				'BackgroundColor': theRow.style.backgroundColor
			};
		}
	},

	sortArenaByHeader: function(headerClicked) {
		if (headerClicked==="") {
			headerClicked = GM_getValue("arenaSortBy");
			if (headerClicked == undefined) headerClicked="State";
		} else {
			GM_setValue("arenaSortBy", headerClicked);
		}
		if (headerClicked=="Id") headerClicked="ArenaID";

		if (Helper.sortAsc==undefined) {
			Helper.sortAsc=GM_getValue("arenaSortAsc");
			if (Helper.sortAsc==undefined) Helper.sortAsc=false;
		} else {
			if (Helper.sortBy && Helper.sortBy==headerClicked) {
				Helper.sortAsc=!Helper.sortAsc;
			}
		}
		GM_setValue("arenaSortAsc",Helper.sortAsc);
		Helper.sortBy=headerClicked;

		if (headerClicked=="Member" || headerClicked=="State") {
			Helper.arenaRows.sort(Helper.stringSort);
		}
		else {
			Helper.arenaRows.sort(Helper.numberSort);
		}

		var list=System.findNode("//td[.='Id']/../..");
		var result='<tr>' + list.rows[0].innerHTML + '</tr>';

		var minLvl=GM_getValue('arenaMinLvl',1);
		var maxLvl=GM_getValue('arenaMaxLvl',9999);
		for (var i=0; i<Helper.arenaRows.length; i++){
			var r = Helper.arenaRows[i];
			//var bgColor=((i % 2)==0)?'bgcolor="#e7c473"':'bgcolor="#e2b960"'
			var bgColor='bgcolor="'+r.BackgroundColor+'"';
			if (r.Action.search("View") != -1) {
				bgColor = 'bgcolor="#f5e2b3"';
			}
			if (r.Visibility!="hidden" && r.MaxEquipLvL >= minLvl && r.MaxEquipLvL <= maxLvl) {
				result += '<TR>'+
				'<TD '+bgColor+' style="border-bottom:1px solid #CD9E4B;">'+r.ArenaID+'</TD>'+
				'<TD '+bgColor+' align="center" style="border-bottom:1px solid #CD9E4B;">'+r.Players+'</TD>'+
				'<TD '+bgColor+' align="center" style="border-bottom:1px solid #CD9E4B;">'+r.JoinCostHTML+'</TD>'+
				'<TD '+bgColor+' align="center" style="border-bottom:1px solid #CD9E4B;">'+r.State+'</TD>'+
				'<TD '+bgColor+' align="center" style="border-bottom:1px solid #CD9E4B;">'+r.SpecialsHTML+'</TD>'+
				'<TD '+bgColor+' align="center" style="border-bottom:1px solid #CD9E4B;">'+r.HellForgeHTML+'</TD>'+
				'<TD '+bgColor+' align="center" style="border-bottom:1px solid #CD9E4B;">'+r.EpicHTML+'</TD>'+
				'<TD '+bgColor+' align="center" style="border-bottom:1px solid #CD9E4B;">'+r.MaxEquipLvLHTML+'</TD>'+
				'<TD '+bgColor+' align="center" style="border-bottom:1px solid #CD9E4B;">'+r.Reward+'</TD>'+
				'<TD '+bgColor+' align="center" style="border-bottom:1px solid #CD9E4B;"><form method="post" action="index.php">'+r.Action+'</form></TD></TR>';
			}
		}
		//result+='<tr>' + list.rows[list.rows.length-1].innerHTML + '</tr>'

		list.innerHTML=result;

		Helper.addEventSortArena();
	},

	storeArenaMoves: function(){
		var arenaMoves = System.findNodes("//img[@vspace='4']");
		var moves = new Array();
		for (var i=1; i<arenaMoves.length; i++) {
			arenaMove = arenaMoves[i];
			aMove = new Object();
			var moveGifNumberRE = /(\d+).gif/;
			var moveGifNumber = moveGifNumberRE.exec(arenaMove.getAttribute("src"))[1];
			var moveCountRE = /<\/a><br>(\d)\&nbsp;\/\&nbsp;(\d)/;
			var moveCount = moveCountRE.exec(arenaMove.parentNode.parentNode.innerHTML);
			aMove.moveID = moveGifNumber;
			aMove.moveCount = moveCount[2];
			aMove.moveHREF = arenaMove.getAttribute("src");
			moves.push(aMove);
		}
		System.setValueJSON("arenaMoves", moves);
	},

	/* CAN DELETE
	injectTournament: function() {
		var mainTable = System.findNode("//table[tbody/tr/td/a[.='Back to PvP Arena']]");
		var joinPage = System.findNode("//b[.='Your Tournament Stats']");
		var injectHere = mainTable.rows[4].cells[0];
		injectHere.align='center';

		var tournamentTitle = System.findNode("//b[contains(.,'Tournament #')]");
		var tournamentIDRE = /Tournament #(\d+)/;
		var tournamentID = tournamentIDRE.exec(tournamentTitle.innerHTML)[1]*1;
		var arenaMatches = System.getValueJSON("arenaMatches");
		if (!arenaMatches) {return;}
		for (var k=0; k<arenaMatches.length; k++){
			if (arenaMatches[k].arenaID == tournamentID && !arenaMatches[k].arenaHTML) {
				var tournamentHTML = '<table><tbody>'+
					'<tr bgcolor="#CD9E4B"><td>Join Cost</td><td>Specials</td><td>Hell Forge</td><td>Max Equip</td><td>Reward</td></tr>'+
					'<tr><td>'+arenaMatches[k].arenaJoinCostHTML+'</td><td>'+arenaMatches[k].arenaSpecialsHTML+
						'</td><td>'+arenaMatches[k].arenaHellForgeHTML+'</td><td>'+arenaMatches[k].arenaMaxEquipHTML+
						'</td><td>'+arenaMatches[k].arenaRewardHTML+'</td></tr>';
				if (arenaMatches[k].arenaSpecials && joinPage) {
					tournamentHTML+='<tr><td colspan=5><span id="Helper:combatMoves"></span></td></tr>';
					System.xmlhttp("index.php?cmd=arena&subcmd=setup", Helper.getCombatMoves);
				}
				tournamentHTML+='</tbody></table>';
				injectHere.innerHTML = tournamentHTML;
				break;
			}
		}
	},*/

	getCombatMoves: function(responseText, callback) {
		var doc=System.createDocument(responseText);
		var combatMovesTable = System.findNode("//td[table/tbody/tr/td/table/tbody/tr/td/a[@href='index.php?cmd=arena&subcmd=pickmove&slot_id=1']]", doc);
		var injectHere = System.findNode("//span[@id='Helper:combatMoves']");
		injectHere.innerHTML = combatMovesTable.innerHTML;
	},

	storeCompletedArenas: function() {
		//fix button class and add go to first and last
		var prevButton = System.findNode("//input[@value='<']");
		var nextButton = System.findNode("//input[@value='>']");
		if (prevButton) {
			prevButton.setAttribute("class", "custombutton");
			var startButton = document.createElement("input");
			startButton.setAttribute("type", "button");
			startButton.setAttribute("onclick", prevButton.getAttribute("onclick").replace(/\&page=[0-9]*/, "&page=1"));
			startButton.setAttribute("class", "custombutton");
			startButton.setAttribute("value", "<<");
			prevButton.parentNode.insertBefore(startButton,prevButton);
		}
		if (nextButton) {
			nextButton.setAttribute("class", "custombutton");
			var lastPageNode=System.findNode("//input[@value='Go']/../preceding-sibling::td");
			lastPage = lastPageNode.textContent.replace(/\D/g,"");
			var finishButton = document.createElement("input");
			finishButton.setAttribute("type", "button");
			finishButton.setAttribute("onclick", nextButton.getAttribute("onclick").replace(/\&page=[0-9]*/, "&page=" + lastPage));
			finishButton.setAttribute("class", "custombutton");
			finishButton.setAttribute("value", ">>");
			nextButton.parentNode.insertBefore(finishButton, nextButton.nextSibling);
		}

		arenaTable = System.findNode("//table[@width=620]/tbody/tr/td[contains(.,'Reward')]/table");

		var arenaMoves = System.getValueJSON("arenaMoves");
		var oldArenaMatches = System.getValueJSON("arenaMatches");
		if (!oldArenaMatches) {
			arenaMatches = new Array();
		} else {
			while (oldArenaMatches.length>1000)
			{
				oldArenaMatches.shift();
			}
			arenaMatches = oldArenaMatches;
		}
		var matchFound = false;

		for (var i=1; i<arenaTable.rows.length-1; i++){
			var row = arenaTable.rows[i];
			matchFound = false;
			aMatch = new Object();
			var arenaIDRE = /#\s(\d+)/;
			var arenaID = arenaIDRE.exec(row.cells[0].textContent)[1]*1;
			if (oldArenaMatches){
				for (var k=0; k<oldArenaMatches.length; k++){
					if (oldArenaMatches[k].arenaID == arenaID) {
						matchFound = true;
						break;
					}
				}
			}
			if (!matchFound) {
				aMatch.arenaID = arenaID;
				aMatch.arenaJoinCostHTML = row.cells[2].innerHTML;
				aMatch.arenaSpecialsHTML = row.cells[4].innerHTML;
				if (row.cells[4].innerHTML.search("/pvp/specials_1.gif") != -1) {
					aMatch.arenaSpecials = true;
				} else {
					aMatch.arenaSpecials = false;
				}
				aMatch.arenaHellForgeHTML = row.cells[5].innerHTML;
				aMatch.arenaMaxEquipHTML = row.cells[6].innerHTML;
				aMatch.arenaRewardHTML = row.cells[7].innerHTML;
				arenaMatches.push(aMatch);
			}
		}
		System.setValueJSON("arenaMatches", arenaMatches);
	},

	injectArenaSetupMove: function() {
		var node=System.findNode("//b[.='Setup Combat Moves']");
		if (!node) return;
		node.style.textDecoration = "underline";
		node.style.color = "green";
		node.style.cursor= "pointer";
		node.addEventListener("click", Helper.changeArenaMove, true);
	},

	changeArenaMove: function() {
		if (document.getElementById("updateMv")) return;
		var nodes = System.findNodes("//a[contains(@href,'index.php?cmd=arena&subcmd=pickmove&slot_id=')]");
		var table = nodes[0].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
		var imgs = System.findNodes("//img[contains(@src,'pvp/bar_spacer.jpg')]");

		// selection row
		var row=table.insertRow(-1);
		var html="<td></td>";
		var arr=["BL", "CA","CH","DD","DF","DG", "LG","PA","SA","PS","CR", "WK"], i, dict={};; // left out BA
		//		   0	1	 2	  3		4	5	  6		7	8	 9	  10	11
		var select = "<option value=x>BA</option>";
		for (i=0; i<arr.length; i++) {
			select += "<option value="+i+">"+arr[i]+"</option>";
		}
		for (i=0; i<nodes.length; i++) {
			var s=select;
			var m=nodes[i].firstChild.getAttribute("src");
			if (m.indexOf("bar_icon_holder.jpg")>0)
				m="x";
			else
				m=m.match(/pvp\/(\d+).gif$/)[1];
			html += "<td colspan=3><select id=mv"+i+">"+s.replace("value="+m+">","value="+m+" selected>")+"</select></td>";
		}
		row.innerHTML = html;

		// img row
		for (i=0; i<imgs.length; i++) {
			imgs[i].width=15;
			imgs[i].height=50;
		}

		// action row
		row=table.insertRow(-1);
		row.innerHTML="<td colspan=31 align=center><input id=updateMv type=button class=custombutton value=Update name=updateMoves></td>";
		document.getElementById("updateMv").addEventListener("click", Helper.updateMove, true);
	},

	updateMove: function(evt, moves) {
		var mv=[], oldmv=[];
		for (i=0; i<10; i++) {
			mv.push(document.getElementById("mv"+i).value);
		}
		if (moves) mv = moves;
		var nodes = System.findNodes("//a[contains(@href,'index.php?cmd=arena&subcmd=pickmove&slot_id=')]");
		for (i=0; i<nodes.length; i++) {
			var m=nodes[i].firstChild.getAttribute("src");
			if (m.indexOf("bar_icon_holder.jpg")>0)
				m="x";
			else
				m=m.match(/pvp\/(\d+).gif$/)[1];
			oldmv.push(m);
		}
		for (i=0; i<10; i++) {
			if (mv[i] != oldmv[i])
				System.xmlhttp("index.php?cmd=arena&subcmd=dopickmove&move_id=x&slot_id="+i);
		}
		setTimeout(function() {
			for (i=0; i<10; i++) {
			if (mv[i] != oldmv[i] && mv[i] != "x")
				System.xmlhttp("index.php?cmd=arena&subcmd=dopickmove&move_id="+mv[i]+"&slot_id="+i);
			}
			setTimeout(function() {window.location = window.location;}, 500);
			}, 500);
	},

	injectSettingsGuildData: function(guildType) {
		var result='';
		result += '<input name="guild' + guildType + '" size="60" value="' + GM_getValue("guild" + guildType) + '">';
		result += '<span style="cursor:pointer;text-decoration:none;" id="toggleShowGuild' + guildType + 'Message" linkto="showGuild' +
			guildType + 'Message"> &#x00bb;</span>';
		result += '<div id="showGuild' + guildType + 'Message" style="visibility:hidden;display:none">';
		result += '<input name="guild' + guildType + 'Message" size="60" value="' + GM_getValue("guild" + guildType + "Message") + '">';
		result += '</div>';
		return result;
	},

	saveImgLoc: function (evt) {
		try {
			var imgLocText = System.findNode("//input[@name='local_dir']");
			if (imgLocText && imgLocText.value.trim().length > 0) {
				GM_setValue("lastImgLoc", imgLocText.value.trim());
			}
		} catch (err) {
			GM_log(err);
		}
	},

	setImgLoc: function (evt) {
		try {
			var imgLocText = System.findNode("//input[@name='local_dir']");
			if (imgLocText) {
				imgLocText.value = GM_getValue("lastImgLoc");
			}
		} catch (err) {
			GM_log(err);
		}
	},
	toggleTickAllBuffs: function(){
		var allItems=System.findNodes("//input[@type='checkbox' and @name='blockedSkillList\[\]']");
		var tckTxt =document.getElementById("Helper:tickAllBuffs");
		if (allItems) {
			for (var i=0; i<allItems.length; i++) {
				var checkboxForItem = allItems[i];
				if (checkboxForItem.style.visibility == "hidden")
					checkboxForItem.checked = false;
				else {
					if(tckTxt.innerHTML=='Tick all buffs'){
						checkboxForItem.checked = true;
					}else{
						checkboxForItem.checked = false;
					}
				}
			}
			if(tckTxt.innerHTML=='Tick all buffs'){
				document.getElementById("Helper:tickAllBuffs").innerHTML='Untick all buffs';
			}else{
				document.getElementById("Helper:tickAllBuffs").innerHTML='Tick all buffs';
			}
		}
	},
	injectSettings: function() {
		try {
			var exNode = System.findNode("//font[contains(.,'Example:')]");
			var saveButton = System.findNode("//input[contains(@value, 'Save Settings')]");
			saveButton.addEventListener('click', Helper.saveImgLoc, true);
			if (GM_getValue("lastImgLoc")) {
				exNode.innerHTML = "Last Location Set:<br><a href='#' id='Helper.lastImgLocLink'>" + GM_getValue("lastImgLoc") + "</a>";
				document.getElementById('Helper.lastImgLocLink').addEventListener('click', Helper.setImgLoc, true);
			}

			var tickNode = System.findNode("//td[@height='10' and contains(.,'Tick which skills you do not want cast on you')]");
			//alert(tickNode.innerHTML);
			tickNode.innerHTML+='<br><span style="cursor:pointer; text-decoration:underline;" id="Helper:tickAllBuffs">' +
			'Tick all buffs</span>';
			document.getElementById("Helper:tickAllBuffs").addEventListener('click', Helper.toggleTickAllBuffs, true);

		} catch (err) {
			GM_log(err);
		}
		var lastCheck=new Date(parseInt(GM_getValue("lastVersionCheck"),10));
		var buffs=GM_getValue("huntingBuffs");
		var buffsName=GM_getValue("huntingBuffsName");
		var buffs2=GM_getValue("huntingBuffs2");
		var buffs2Name=GM_getValue("huntingBuffs2Name");
		var buffs3=GM_getValue("huntingBuffs3");
		var buffs3Name=GM_getValue("huntingBuffs3Name");
		var doNotKillList=GM_getValue("doNotKillList");
		var hideArenaPrizes=GM_getValue("hideArenaPrizes");

		var enableActiveBountyList = GM_getValue("enableActiveBountyList");
		var bountyListRefreshTime = GM_getValue("bountyListRefreshTime");
		var enableWantedList = GM_getValue("enableWantedList");
		var wantedNames = GM_getValue("wantedNames");
		var combatEvaluatorBias = GM_getValue("combatEvaluatorBias");
		var enabledHuntingMode = GM_getValue("enabledHuntingMode");
		var configData=
			'<form><table style="border-spacing: 10px;">' +
//			'<tr><td colspan="2" height="1" bgcolor="#333333"></td></tr>' +
			'<tr><th colspan="2"><b>Fallen Sword Helper configuration Settings</b></th></tr>' +
			//~ '<tr><td colspan="2" align=center><input type="button" class="custombutton" value="Check for updates" id="Helper:CheckUpdate"></td></tr>'+
			//~ '<tr><td colspan="2" align=center><span style="font-size:xx-small">(Current version: ' + GM_getValue("currentVersion") + ', Last check: ' + lastCheck.toFormatString("dd/MMM/yyyy HH:mm:ss") +
			//~ ')</span></td></tr>' +
			'<tr><td colspan="2" align=center>' +
			'<span style="font-weight:bold;">Visit the <a href="http://code.google.com/p/fallenswordhelper/">Fallen Sword Helper web site</a> ' +
			'for any suggestions, requests or bug reports</span></td></tr>' +
			//General Prefs
			'<tr><th colspan="2" align="left"><b>General preferences (apply to most screens)</b></th></tr>' +
			'<tr><td align="right">Enable Guild Info Widgets' + Helper.helpLink('Enable Guild Info Widgets', 'Enabling this option will enable the Guild Info Widgets (coloring on the Guild Info panel)') +
				':</td><td><input name="enableGuildInfoWidgets" type="checkbox" value="on"' + (GM_getValue("enableGuildInfoWidgets")?" checked":"") +
				'>  Hide Message&gt;<input name="hideGuildInfoMessage" type="checkbox" value="on"' + (GM_getValue("hideGuildInfoMessage")?" checked":"") +
				'>  Hide Buff&gt;<input name="hideGuildInfoBuff" type="checkbox" value="on"' + (GM_getValue("hideGuildInfoBuff")?" checked":"") +
				'>  Hide ST&gt;<input name="hideGuildInfoSecureTrade" type="checkbox" value="on"' + (GM_getValue("hideGuildInfoSecureTrade")?" checked":"") +
				'>  Hide Trade&gt;<input name="hideGuildInfoTrade" type="checkbox" value="on"' + (GM_getValue("hideGuildInfoTrade")?" checked":"") +
				'></td></tr>'  +
			'<tr><td align="right">Move Guild Info List' + Helper.helpLink('Move Guild Info List', 'This will Move the Guild Info List higher on the bar on the right') +
				':</td><td><input name="moveGuildList" type="checkbox" value="on"' + (GM_getValue("moveGuildList")?" checked":"") + '>' +
				'</td></tr>' +
			'<tr><td align="right">Move Online Allies List' + Helper.helpLink('Move Guild Info List', 'This will Move the Online Allies List higher on the bar on the right') +
				':</td><td><input name="moveOnlineAlliesList" type="checkbox" value="on"' + (GM_getValue("moveOnlineAlliesList")?" checked":"") + '>' +
				'</td></tr>' +
			'<tr><td align="right">'+Layout.networkIcon()+'Show Online Allies/Enemies' + Helper.helpLink('Show Online Allies/Enemies', 'This will show the allies/enemies online list on the right.') +
				':</td><td>Allies<input name="enableAllyOnlineList" type="checkbox" value="on"' + (GM_getValue("enableAllyOnlineList")?" checked":"") +
				'> Enemies<input name="enableEnemyOnlineList" type="checkbox" value="on"' + (GM_getValue("enableEnemyOnlineList")?" checked":"") +
				'> <input name="allyEnemyOnlineRefreshTime" size="3" value="'+ GM_getValue("allyEnemyOnlineRefreshTime") + '" /> seconds refresh</td></tr>' +
			'<tr><td align="right">Enable Online Allies Widgets' + Helper.helpLink('Enable Online Allies Widgets', 'Enabling this option will enable the Guild Info Widgets (coloring on the Guild Info panel)') +
				':</td><td><input name="enableOnlineAlliesWidgets" type="checkbox" value="on"' + (GM_getValue("enableOnlineAlliesWidgets")?" checked":"") + '></td></tr>' +
			'<tr><td align="right">Move FS box' + Helper.helpLink('Move FallenSword Box', 'This will move the FS box to the left, under the menu, for better visibility (unless it is already hidden.)') +
				':</td><td><input name="moveFSBox" type="checkbox" value="on"' + (GM_getValue("moveFSBox")?" checked":"") + '></td></tr>' +
			'<tr><td align="right">"Game Help" Settings Link' + Helper.helpLink('Game Help Settings Link', 'This turns the Game Help text in the lower right box into a link to this settings page. This can be helpful if you use the FS Image Pack.') +
				':</td><td><input name="gameHelpLink" type="checkbox" value="on"' + (GM_getValue("gameHelpLink")?" checked":"") + '></td></tr>' +
			'<tr><td align="right">Enable Temple Alert' + Helper.helpLink('Enable Temple Alert', 'Puts an alert on the LHS if you  have not prayed at the temple today. Checks once every 60 mins.') +
				':</td><td><input name="enableTempleAlert" type="checkbox" value="on"' + (GM_getValue("enableTempleAlert")?" checked":"") + '></td></tr>' +
			'<tr><td align="right">Enhance Online Dots' + Helper.helpLink('Enhance Online Dots', 'Enhances the green/grey dots by player names to show online/offline status.') +
				':</td><td><input name="enhanceOnlineDots" type="checkbox" value="on"' + (GM_getValue("enhanceOnlineDots")?" checked":"") + '></td></tr>' +
			'<tr><td align="right">Hide Buff Selected' + Helper.helpLink('Hide Buff Selected', 'Hides the buff selected functionality in the online allies and guild info section.') +
				':</td><td><input name="hideBuffSelected" type="checkbox" value="on"' + (GM_getValue("hideBuffSelected")?" checked":"") + '></td></tr>' +
			'<tr><td align="right">Hide Helper Menu' + Helper.helpLink('Hide Helper Menu', 'Hides the helper menu from top left.') +
				':</td><td><input name="hideHelperMenu" type="checkbox" value="on"' + (GM_getValue("hideHelperMenu")?" checked":"") + '></td></tr>' +
			'<tr><td align="right">Keep Helper Menu On Screen' + Helper.helpLink('Keep Helper Menu On Screen', 'Keeps helper menu on screen as you scroll (helper menu must be enabled to work). Also works with quick links.') +
				':</td><td><input name="keepHelperMenuOnScreen" type="checkbox" value="on"' + (GM_getValue("keepHelperMenuOnScreen")?" checked":"") + '></td></tr>' +
			'<tr><td align="right">Quick Links Screen Location' + Helper.helpLink('Quick Links Screen Location', 'Determines where the quick links dialog shows on the screen. Default is top 22, left 0.') +
				':</td><td>Top: <input name="quickLinksTopPx" size="3" value="'+ GM_getValue("quickLinksTopPx") + '" /> Left: <input name="quickLinksLeftPx" size="3" value="'+ GM_getValue("quickLinksLeftPx") + '" /></td></tr>' +
			//Guild Manage
			'<tr><th colspan="2" align="left"><b>Guild>Manage preferences</b></th></tr>' +
			'<tr><td colspan="2" align="left">Enter guild names, seperated by commas</td></tr>' +
			'<tr><td>Own Guild</td><td>'+ Helper.injectSettingsGuildData("Self") + '</td></tr>' +
			'<tr><td>Friendly Guilds</td><td>'+ Helper.injectSettingsGuildData("Frnd") + '</td></tr>' +
			'<tr><td>Old Guilds</td><td>'+ Helper.injectSettingsGuildData("Past") + '</td></tr>' +
			'<tr><td>Enemy Guilds</td><td>'+ Helper.injectSettingsGuildData("Enmy") + '</td></tr>' +
			'<tr><td align="right">Highlight Valid PvP Targets' + Helper.helpLink('Highlight Valid PvP Targets', 'Enabling this option will highlight targets in OTHER guilds that are within your level range to attack for PvP or GvG.') +
				':</td><td>PvP: <input name="highlightPlayersNearMyLvl" type="checkbox" value="on"' + (GM_getValue("highlightPlayersNearMyLvl")?" checked":"") +
				'> GvG: <input name="highlightGvGPlayersNearMyLvl" type="checkbox" value="on"' + (GM_getValue("highlightGvGPlayersNearMyLvl")?" checked":"") + '/></td></tr>'  +
			'<tr><td align="right">Show rank controls' + Helper.helpLink('Show rank controls', 'Show ranking controls for guild managemenet in member profile page - ' +
				'this works for guild founders only') +
				':</td><td><input name="showAdmin" type="checkbox" value="on"' + (GM_getValue("showAdmin")?" checked":"") + '></td></tr>' +
			'<tr><td align="right">AJAXify rank controls' + Helper.helpLink('AJAXify rank controls', 'Enables guild founders with ranking rights to change rank positions without a screen refresh.') +
				':</td><td><input name="ajaxifyRankControls" type="checkbox" value="on"' + (GM_getValue("ajaxifyRankControls")?" checked":"") + '></td></tr>' +
			'<tr><td align="right">Show Conflict Details' + Helper.helpLink('Show Conflict Details', 'Inserts detailed conflict information onto your guild\\\'s manage page. Currently displays the target guild as well as the current score.') +
				':</td><td><input name="detailedConflictInfo" type="checkbox" value="on"' + (GM_getValue("detailedConflictInfo")?" checked":"") + '></td></tr>' +
			//World Screen
			'<tr><th colspan="2" align="left"><b>World screen/Hunting preferences</b></th></tr>' +
			'<tr><td align="right">Quick Kill ' + Helper.helpLink('Quick Kill', 'This will kill monsters without opening a new page') +
				':</td><td><input name="quickKill" type="checkbox" value="on"' + (GM_getValue("quickKill")?" checked":"") + '>' +
				'</td></tr>' +
			'<tr><td align="right">Keep Combat Logs' + Helper.helpLink('Keep Combat Logs', 'Save combat logs to a temporary variable. '+
				'Press <u>Show logs</u> on the right to display and copy them') +
				':</td><td><input name="keepLogs" type="checkbox" value="on"' + (GM_getValue("keepLogs")?" checked":"") + '>' +
				'<input type="button" class="custombutton" value="Show Logs" id="Helper:ShowLogs"></td></tr>' +
			'<tr><td align="right">Show Combat Log' + Helper.helpLink('Show Combat Log', 'This will show the combat log for each automatic battle below the monster list.') +
				':</td><td><input name="showCombatLog" type="checkbox" value="on"' + (GM_getValue("showCombatLog")?" checked":"") + '></td></tr>' +
			'<tr><td align="right">Color Special Creatures' + Helper.helpLink('Color Special Creatures', 'Creatures will be colored according to their rarity. ' +
				'Champions will be colored green, Elites yellow and Super Elites red.') +
				':</td><td><input name="enableCreatureColoring" type="checkbox" value="on"' + (GM_getValue("enableCreatureColoring")?" checked":"") + '></td></td></tr>' +
			'<tr><td align="right">'+Layout.networkIcon()+'Show Creature Info' + Helper.helpLink('Show Creature Info', 'This will show the information from the view creature link when you mouseover the link.' +
				((System.browserVersion<3)?'<br>Does not work in Firefox 2 - suggest disabling or upgrading to Firefox 3.':'')) +
				':</td><td><input name="showCreatureInfo" type="checkbox" value="on"' + (GM_getValue("showCreatureInfo")?" checked":"") + '></td></tr>' +
			'<tr><td align="right">Combat Evaluator Bias' + Helper.helpLink('Combat Evaluator Bias', 'This changes the bias of the combat evaluator for the damage and HP evaluation. It will not change the attack bias (1.1053).'+
					'<br>Conservative = 1.1053 and 1.1 (Safest)'+
					'<br>Semi-Conservative = 1.1 and 1.053'+
					'<br>Adventurous = 1.053 and 1 (Bleeding Edge)'+
					'<br>Conservative+ = 1.1053 and 1 with the attack calculation changed to +-48 per RJEM') +
				':</td><td><select name="combatEvaluatorBias"><option value="0"' + (combatEvaluatorBias==0?" SELECTED":"") +
					'>Conservative</option><option value="1"' + (combatEvaluatorBias==1?" SELECTED":"") +
					'>Semi-Conservative</option><option value="2"' + (combatEvaluatorBias==2?" SELECTED":"") +
					'>Adventurous</option><option value="3"' + (combatEvaluatorBias==3?" SELECTED":"") +
					'>Conservative+</option></select></td></tr>' +
			'<tr><td align="right">Keep Creature Log' + Helper.helpLink('Keep Creature Log', 'This will show the creature log for each creature you see when you travel. This requires Show Creature Info enabled!') +
				':</td><td><input name="showMonsterLog" type="checkbox" value="on"' + (GM_getValue("showMonsterLog")?" checked":"") + '>'+
				'&nbsp;&nbsp;<input type="button" class="custombutton" value="Show" id="Helper:ShowMonsterLogs"></td></tr>' +
			'<tr><td align="right">Hide Krul Portal' + Helper.helpLink('Hide Krul Portal', 'This will hide the Krul portal on the world screen.') +
				':</td><td><input name="hideKrulPortal" type="checkbox" value="on"' + (GM_getValue("hideKrulPortal")?" checked":"") + '></td></tr>' +
			'<tr><td align="right">Footprints Color' + Helper.helpLink('Footprints Color', 'Changes the color of the footprints, useful if you can\\\'t see them in some maps') +
				':</td><td><input name="footprintsColor" size="12" value="'+ GM_getValue("footprintsColor") + '" /><input type="button" class="custombutton" value="Update Color" id="Helper:updateFpColor"><table width="40" height="40" cellspacing="0" cellpadding="0" border="0"><td width="40" height="40" background="' + GM_getValue("currentTile") + '" align="center" style="color:' + GM_getValue("footprintsColor") + ';"><center><table width="40" height="40" cellspacing="0" cellpadding="0" border="0"><tbody><tr><td align="center">**</td></tr></tbody></table></center></td></table></td></tr>' +
			'<tr><td align="right">Reset Footprints' + Helper.helpLink('Reset Footprints', 'Resets the footprints variable.') +
				':</td><td>Current Size: ' + (!GM_getValue("map") ? 'N/A' : GM_getValue("map").length + ' <input type="button" class="custombutton" value="Reset" id="Helper:ResetFootprints">') + '</td></tr></td></tr>' +
			'<tr><td align="right">Show Send Gold' + Helper.helpLink('Show Gold on World Screen', 'This will show an icon below the world map to allow you to quickly send gold to a Friend.') +
				':</td><td><input name="sendGoldonWorld" type="checkbox" value="on"' + (GM_getValue("sendGoldonWorld")?" checked":"") + '>'+
				'Send <input name="goldAmount" size="5" value="'+ GM_getValue("goldAmount") + '" /> '+
				'gold to <input name="goldRecipient" size="10" value="'+ GM_getValue("goldRecipient") + '" />' +
				' Current total: <input name="currentGoldSentTotal" size="5" value="'+ GM_getValue("currentGoldSentTotal") + '" />' +
				'</td></tr>' +
			'<tr><td align="right">Do Not Kill List' + Helper.helpLink('Do Not Kill List', 'List of creatures that will not be killed by quick kill. You must type the full name of each creature, ' +
				'separated by commas. Creature name will show up in red color on world screen and will not be killed by keyboard entry (but can still be killed by mouseclick). Quick kill must be '+
				'enabled for this function to work.') +
				':</td><td colspan="3"><input name="doNotKillList" size="60" value="'+ doNotKillList + '" /></td></tr>' +
			'<tr><td align="right">Hunting Buffs' + Helper.helpLink('Hunting Buffs', 'Customize which buffs are designated as hunting buffs. You must type the full name of each buff, ' +
				'separated by commas. Use the checkbox to enable/disable them.') +
				':</td><td colspan="3"><input name="showHuntingBuffs" type="checkbox" value="on"' + (GM_getValue("showHuntingBuffs")?" checked":"") + '> ' +
				'Enabled Hunting Mode' + Helper.helpLink('Enabled Hunting Mode', 'This will determine which list of buffs gets checked on the world screen.') +
				':<select name="enabledHuntingMode"><option value="1"' + (enabledHuntingMode==1?" SELECTED":"") +
					'>' + buffsName + '</option><option value="2"' + (enabledHuntingMode==2?" SELECTED":"") +
					'>' + buffs2Name + '</option><option value="3"' + (enabledHuntingMode==3?" SELECTED":"") +
					'>' + buffs3Name + '</option></select></td></tr>' +
			'<tr><td align="right">' + buffsName + ' Hunting Buff List' + Helper.helpLink(buffsName + ' Hunting Buff List', buffsName + ' list of hunting buffs.') +
				':</td><td colspan="3"><input name="huntingBuffsName" title="Hunting mode name" size="7" value="'+ buffsName + '" /><input name="huntingBuffs" size="49" value="'+ buffs + '" /></td></tr>' +
			'<tr><td align="right">' + buffs2Name + ' Hunting Buff List' + Helper.helpLink(buffs2Name + ' Hunting Buff List', 'List of ' + buffs2Name + ' hunting buffs.') +
				':</td><td colspan="3"><input name="huntingBuffs2Name" title="Hunting mode name" size="7" value="'+ buffs2Name + '" /><input name="huntingBuffs2" size="49" value="'+ buffs2 + '" /></td></tr>' +
			'<tr><td align="right">' + buffs3Name + ' Hunting Buff List' + Helper.helpLink(buffs3Name + ' Hunting Buff List', 'List of ' + buffs3Name + ' hunting buffs.') +
				':</td><td colspan="3"><input name="huntingBuffs3Name" title="Hunting mode name" size="7" value="'+ buffs3Name + '" /><input name="huntingBuffs3" size="49" value="'+ buffs3 + '" /></td></tr>' +
			'<tr><td align="right">Enable FS Box Log' + Helper.helpLink('Enable FS Box Log', 'This enables the functionality to keep a log of recent seen FS Box message.') +
				':</td><td><input name="fsboxlog" type="checkbox" value="on"' + (GM_getValue("fsboxlog")?" checked":"") + '></td></tr>' +
			'<tr><td align="right">Enable Buff Log' + Helper.helpLink('Enable Buff Log', 'This enables the functionality to keep a log of recently casted buffs') +
				':</td><td><input name="keepBuffLog" type="checkbox" value="on"' + (GM_getValue("keepBuffLog")?" checked":"") + '></td></tr>' +
			'<tr><td align="right">Enable Hunting Mode' + Helper.helpLink('Enable Hunting Mode', 'This disable menu and some visual features to speed up the Helper.') +
				':</td><td><input name="huntingMode" type="checkbox" value="on"' + (GM_getValue("huntingMode")?" checked":"") + '></td></tr>' +
			'<tr><td align="right">Enable Fast Walk' + Helper.helpLink('Enable Fast Walk', 'This functionality will allow the user to send multiple move commands, each subsequent one assuming that the previous one succeeded. ' +
				'It does not check for blocked squares, not does it check to make sure that the move commands arrived at the server in the right order. Depending on the lag you experience, the user may have to pause slightly ' +
				'between each move to make sure they reach the server in the right order.') +
				':</td><td><input name="enableFastWalk" type="checkbox" value="on"' + (GM_getValue("enableFastWalk")?" checked":"") + '>'+
				' Show FastWalk icon on world' + Helper.helpLink('Show FastWalk icon on world', 'Should the FastWalk toggle icon show on the world map') +
				':<input name="showFastWalkIconOnWorld" type="checkbox" value="on"' + (GM_getValue("showFastWalkIconOnWorld")?" checked":"") + '></td></tr>' +
			//Log screen prefs
			'<tr><th colspan="2" align="left"><b>Log screen preferences</b></th></tr>' +
			'<tr><td align="right">Cleanup Guild Log' + Helper.helpLink('Dim Non Player Guild Log Messages', 'Any log messages not related to the ' +
				'current player will be dimmed (e.g. recall messages from guild store)') +
				':</td><td><input name="hideNonPlayerGuildLogMessages" type="checkbox" value="on"' + (GM_getValue("hideNonPlayerGuildLogMessages")?" checked":"") + '></td></td></tr>' +
			'<tr><td align="right">Use New Guild Log' + Helper.helpLink('Use New Guild Log', 'This will replace the standard guild log with the helper version of the guild log.') +
				':</td><td><input name="useNewGuildLog" type="checkbox" value="on"' + (GM_getValue("useNewGuildLog")?" checked":"") + '></td></td></tr>' +
			'<tr><td align="right">New Guild Log History' + Helper.helpLink('New Guild Log History (pages)', 'This is the number of pages that the new guild log screen will go back in history.') +
				':</td><td><input name="newGuildLogHistoryPages" size="3" value="'+ GM_getValue("newGuildLogHistoryPages") + '" /></td></td></tr>' +
			'<tr><td align="right">Enable Log Coloring' + Helper.helpLink('Enable Log Coloring', 'Three logs will be colored if this is enabled, Guild Chat, Guild Log and Player Log. ' +
				'It will show any new messages in yellow and anything 20 minutes old ones in brown.') +
				':</td><td><input name="enableLogColoring" type="checkbox" value="on"' + (GM_getValue("enableLogColoring")?" checked":"") + '></td></td></tr>' +
			'<tr><td align="right">New Log Message Sound' + Helper.helpLink('New Log Message Sound', 'The .wav or .ogg file to play when you have unread log messages. This must be a .wav or .ogg file. This option can be turned on/off on the world page. Only works in Firefox 3.5+') +
				':</td><td colspan="3"><input name="defaultMessageSound" size="60" value="'+ GM_getValue("defaultMessageSound") + '" /></td></tr>' +
			'<tr><td align="right">Play sound on unread log' + Helper.helpLink('Play sound on unread log', 'Should the above sound play when you have unread log messages? (will work on Firefox 3.5+ only)') +
				':</td><td><input name="playNewMessageSound" type="checkbox" value="on"' + (GM_getValue("playNewMessageSound")?" checked":"") + '>' +
				' Show speaker on world' + Helper.helpLink('Show speaker on world', 'Should the toggle play sound speaker show on the world map? (This icon is next to the Fallensword wiki icon and will only display on Firefox 3.5+)') +
				':<input name="showSpeakerOnWorld" type="checkbox" value="on"' + (GM_getValue("showSpeakerOnWorld")?" checked":"") + '></tr></td>' +
			'<tr><td align="right">Enable Chat Parsing' + Helper.helpLink('Enable Chat Parsing', 'If this is checked, your character log will be parsed for chat messages and show the chat message on the screen if you reply to that message.') +
				':</td><td><input name="enableChatParsing" type="checkbox" value="on"' + (GM_getValue("enableChatParsing")?" checked":"") + '></td></td></tr>' +
			'<tr><td align="right">Add attack link to log' + Helper.helpLink('Add attack link to log', 'If checked, this will add an Attack link to each message in your log.') +
				':</td><td><input name="addAttackLinkToLog" type="checkbox" value="on"' + (GM_getValue("addAttackLinkToLog")?" checked":"") + '></td></td></tr>' +
			'<tr><td align="right">Enhance Chat Text Entry' + Helper.helpLink('Enhance Chat Text Entry', 'If checked, this will enhance the entry field for entering chat text on the guild chat page.') +
				':</td><td><input name="enhanceChatTextEntry" type="checkbox" value="on"' + (GM_getValue("enhanceChatTextEntry")?" checked":"") + '></td></td></tr>' +
			//Equipment screen prefs
			'<tr><th colspan="2" align="left"><b>Equipment screen preferences</b></th></tr>' +
			'<tr><td align="right">Disable Item Coloring' + Helper.helpLink('Disable Item Coloring', 'Disable the code that colors the item text based on the rarity of the item.') +
				':</td><td><input name="disableItemColoring" type="checkbox" value="on"' + (GM_getValue("disableItemColoring")?" checked":"") + '></td></tr>' +
			'<tr><td align="right">Show Quick Send Item' + Helper.helpLink('Show Quick Send on Manage Backpack', 'This will show a link beside each item which gives the option to quick send the item to this person') +
				':</td><td><input name="showQuickSendLinks" type="checkbox" value="on"' + (GM_getValue("showQuickSendLinks")?" checked":"") + '>'+
				'Send Items To <input name="itemRecipient" size="10" value="'+ GM_getValue("itemRecipient") + '" />' +
			'<tr><td align="right">Show Quick Drop Item' + Helper.helpLink('Show Quick Drop on Manage Backpack', 'This will show a link beside each item which gives the option to drop the item.  WARNING: NO REFUNDS ON ERROR') +
				':</td><td><input name="showQuickDropLinks" type="checkbox" value="on"' + (GM_getValue("showQuickDropLinks")?" checked":"") + '>'+			//Quest prefs
			
			'<tr><td align="right">Quick Select all of type<br> in Send Screen' + Helper.helpLink('Quick Select all of type in Send Screen', 'This allows you to customize what quick links you would like displayed in your send item screen.<br>Use the format [\'name\',\'itemid\'],[\'othername\',\'itemid2\'].<br>WARNING: NO REFUNDS ON ERROR') +
				':</td><td><input name="sendClasses" size="60" value="' + (GM_getValue("sendClasses")) + '">'+
			
			//Quest Preferences
			'<tr><th colspan="2" align="left"><b>Quest preferences</b></th></tr>' +
			'<tr><td align="right">Hide Specific Quests' + Helper.helpLink('Hide Specific Quests', 'If enabled, this hides quests whose name matches the list (separated by commas). ' +
				'This works on Quest Manager and Quest Book.') +
				':</td><td colspan="3"><input name="hideQuests" type="checkbox" value="on"' + (GM_getValue("hideQuests")?" checked":"") + '>' +
				'<input name="hideQuestNames" size="60" value="'+ GM_getValue("hideQuestNames") + '" /></td></tr>' +
			'<tr><td align="right">Show Incomplete/Not <br>Started Quests' + Helper.helpLink('Show Incomplete/Not Started Quests', 'If checked, the helper will check to see if you have quests that are not started, or are started, not complete and not being tracked.' +
				'<br>The helper will only check this when you change worlds, or if when it last checked, there were quests it detected for the current world.') +
				':</td><td colspan="3"><input name="checkForQuestsInWorld" type="checkbox" value="on"' + (GM_getValue("checkForQuestsInWorld")?" checked":"") + '>' +
				'</td></tr>' +
			'<tr><td align="right">Store Last Quest Page' + Helper.helpLink('Store Last Quest Page', 'This will store the page and sort order of each of the three quest selection pages for next time you visit. If you need to reset the links, turn this option off, '+
				'click on the link you wish to reset and then turn this option back on again.') +
				':</td><td><input name="storeLastQuestPage" type="checkbox" value="on"' + (GM_getValue("storeLastQuestPage")?" checked":"") + '></td></tr>' +
			'<tr><td align="right">Show All Quest Steps' + Helper.helpLink('Show All Quest Steps', 'Shows all quest steps in the UFSG.') +
				':</td><td><input name="showNextQuestSteps" type="checkbox" value="on"' + (GM_getValue("showNextQuestSteps")?" checked":"") + '></td></tr>' +
			//profile prefs
			'<tr><th colspan="2" align="left"><b>Profile preferences</b></th></tr>' +
			'<tr><td align="right">Render self bio' + Helper.helpLink('Render self bio', 'This determines if your own bio will render the FSH special bio tags.') +
				':</td><td><input name="renderSelfBio" type="checkbox" value="on"' + (GM_getValue("renderSelfBio")?" checked":"") + '></td></tr>' +
			'<tr><td align="right">Render other players\' bios' + Helper.helpLink('Render other players bios', 'This determines if other players bios will render the FSH special bio tags.') +
				':</td><td><input name="renderOtherBios" type="checkbox" value="on"' + (GM_getValue("renderOtherBios")?" checked":"") + '></td></tr>' +
			'<tr><td align="right">Enable Bio Compressor' + Helper.helpLink('Enable Bio Compressor', 'This will compress long bios according to settings and provide a link to expand the compressed section.') +
				':</td><td><input name="enableBioCompressor" type="checkbox" value="on"' + (GM_getValue("enableBioCompressor")?" checked":"") +
				'> Max Characters:<input name="maxCompressedCharacters" size="4" value="'+ GM_getValue("maxCompressedCharacters") + '" />'+
				' Max Lines:<input name="maxCompressedLines" size="3" value="'+ GM_getValue("maxCompressedLines") + '" /></td></tr>' +
			'<tr><td align="right">Buy Buffs Greeting' + Helper.helpLink('Buy Buffs Greeting', 'This is the default text to open a message with when asking to buy buffs. You can use {playername} to insert the target players name. You can also use' +
				' {buffs} to insert the list of buffs. You can use {cost} to insert the total cost of the buffs.') +
				':</td><td colspan="3"><input name="buyBuffsGreeting" size="60" value="'+ GM_getValue("buyBuffsGreeting") + '" /></td></tr>' +
			'<tr><td align="right">Show Stat Bonus Total' + Helper.helpLink('Show Stat Bonus Total', 'This will show a total of the item stats when you mouseover an item on the profile screen.') +
				':</td><td><input name="showStatBonusTotal" type="checkbox" value="on"' + (GM_getValue("showStatBonusTotal")?" checked":"") + '></td></tr>' +
			'<tr><td align="right">Enable Quick Drink' + Helper.helpLink('Enable Quick Drink On Profile', 'This enables the quick drink functionality on the profile page.') +
				':</td><td><input name="enableQuickDrink" type="checkbox" value="on"' + (GM_getValue("enableQuickDrink")?" checked":"") + '></td></tr>' +
			//Arena prefs
			'<tr><th colspan="2" align="left"><b>Arena preferences</b></th></tr>' +
			'<tr><td align="right">Auto Sort Arena List' + Helper.helpLink('Auto Sort Arena List', 'This will automatically sort the arena list based on your last preference for sort.') +
				':</td><td><input name="autoSortArenaList" type="checkbox" value="on"' + (GM_getValue("autoSortArenaList")?" checked":"") + '></td></tr>' +
			'<tr><td align="right">Hide Arena Prizes' + Helper.helpLink('Hide Arena Prizes', 'List of the itemIds of arena prizes that should not display on the arena screen ' +
				'separated by commas. To find the itemId you will have to view the source of the page or mouseover the item on the arena page.') +
				':</td><td colspan="3"><input name="hideArenaPrizes" size="60" value="'+ hideArenaPrizes + '" /></td></tr>' +
			//Bounty hunting prefs
			'<tr><th colspan="2" align="left"><b>Bounty hunting preferences</b></th></tr>' +
			'<tr><td align= "right">' + Layout.networkIcon() + 'Show Active Bounties' + Helper.helpLink('Show Active Bounties', 'This will show your active bounties ' +
				'on the right hand side') + ':</td><td colspan="3"><input name="enableActiveBountyList" type = "checkbox" value = "on"' + (enableActiveBountyList? " checked":"") + '/>' +
				'<input name="bountyListRefreshTime" size="3" value="'+ bountyListRefreshTime + '" /> seconds refresh</td></tr>' +
			'<tr><td align= "right">' + Layout.networkIcon() + 'Show Wanted Bounties' + Helper.helpLink('Show Wanted Bounties', 'This will show when someone you want is on the bounty board, the list is ' +
				'displayed on the right hand side') + ':</td><td colspan="3"><input name="enableWantedList" type = "checkbox" value = "on"' + (enableWantedList? " checked":"") + '/> Refresh time is same as Active Bounties' +
			'<tr><td align= "right">Wanted Names' + Helper.helpLink('Wanted Names', 'The names of the people you want to see on the bounty board separated by commas') + ':</td><td colspan="3">' +
				'<input name ="wantedNames" size ="60" value="' + wantedNames + '"/></td></tr>' +
			'<tr><td align= "right">' + Layout.networkIcon() + 'Show Attack Helper' + Helper.helpLink('Show Attack Helper', 'This will show extra information on the attack player screen ' +
				'about stats and buffs on you and your target') + ':</td><td colspan="3"><input name="enableAttackHelper" type = "checkbox" value = "on"' + (GM_getValue("enableAttackHelper")? " checked":"") + '/>' +
			'<tr><td align= "right">' + Layout.networkIcon() + 'Show PvP Summary in Log' + Helper.helpLink('Show PvP Summary in Log', 'This will show a summary of the PvP results in the log.') + ':</td><td colspan="3">' +
				'<input name="showPvPSummaryInLog" type = "checkbox" value = "on"' + (GM_getValue("showPvPSummaryInLog")? " checked":"") + '/>' +
			//Auction house prefs
			'<tr><th colspan="2" align="left"><b>Auction house preferences</b></th></tr>' +
			'<tr><td align="right">Enable Bulk Sell' + Helper.helpLink('Enable Bulk Sell', 'This enables the functionality for the user to bulk sell items.') +
				':</td><td><input name="enableBulkSell" type="checkbox" value="on"' + (GM_getValue("enableBulkSell")?" checked":"") + '></td></tr>' +
			'<tr><td align="right">Auto Fill Min Bid Price' + Helper.helpLink('Auto Fill Min Bid Price', 'This enables the functionality to automatically fill in the min bid price so you just have to hit bid and your bid will be placed.') +
				':</td><td><input name="autoFillMinBidPrice" type="checkbox" value="on"' + (GM_getValue("autoFillMinBidPrice")?" checked":"") + '></td></tr>' +
			//Other prefs
			'<tr><th colspan="2" align="left"><b>Other preferences</b></th></tr>' +
			'<tr><td align="right">Hide Specific Recipes' + Helper.helpLink('Hide Specific Recipes', 'If enabled, this hides recipes whose name matches the list (separated by commas). ' +
				'This works on Recipe Manager') +
				':</td><td colspan="3"><input name="hideRecipes" type="checkbox" value="on"' + (GM_getValue("hideRecipes")?" checked":"") + '>' +
				'<input name="hideRecipeNames" size="60" value="'+ GM_getValue("hideRecipeNames") + '" /></td></tr>' +
			'<tr><td align="right">Hide Relic Offline' + Helper.helpLink('Hide Relic Offline', 'This hides the relic offline defenders checker.') +
				':</td><td><input name="hideRelicOffline" type="checkbox" value="on"' + (GM_getValue("hideRelicOffline")?" checked":"") + '></td></tr>' +
			'<tr><td align="right">Enter Sends Message' + Helper.helpLink('Enter Sends Message', 'If enabled, will send a message from the Send Message screen if you press enter. You can still insert a new line by holding down shift' +
			' when you press enter.') +
				':</td><td><input name="enterForSendMessage" type="checkbox" value="on"' + (GM_getValue("enterForSendMessage")?" checked":"") + '></td></tr>' +
			'<tr><td align="right">Navigate After Message Sent' + Helper.helpLink('Navigate After Message Sent', 'If enabled, will navigate to the referring page after a successful message is sent. Example: ' +
				' if you are on the world screen and hit message on the guild info panel after you send the message, it will return you to the world screen.') +
				':</td><td><input name="navigateToLogAfterMsg" type="checkbox" value="on"' + (GM_getValue("navigateToLogAfterMsg")?" checked":"") + '></td></tr>' +
			'<tr><td align= "right">Max Group Size to Join' + Helper.helpLink('Max Group Size to Join', 'This will disable HCSs Join All functionality and will only join groups less than a set size. ') +
				':</td><td colspan="3"><input name="enableMaxGroupSizeToJoin" type = "checkbox" value = "on"' + (GM_getValue("enableMaxGroupSizeToJoin")? " checked":"") + '/>' +
				'Max Size: <input name="maxGroupSizeToJoin" size="3" value="' + GM_getValue("maxGroupSizeToJoin") + '" /></td></tr>' +
			'<tr><td align= "right">' + Layout.networkIcon() + 'Enable Titan Log' + Helper.helpLink('Enable Titan Log', 'This will keep a record of guild titan kills while you play. ' +
				'You can set the number of minutes to delay before checking again. Setting this to 0 will check every page load, setting it to any other number ' +
				'will mean that it will not refresh until the next page load after that many minutes have elapsed.') +
				':</td><td colspan="3"><input name="enableTitanLog" type = "checkbox" value = "on"' + (GM_getValue("enableTitanLog")? " checked":"") + '/>' +
				'<input name="titanLogRefreshTime" size="2" value="'+ GM_getValue("titanLogRefreshTime") + '" /> minutes refresh</td></tr>' +
			'<tr><td align="right">Show Gold On Find Player' + Helper.helpLink('Show Gold On Find Player', 'Shows gold on hand on the find player screen.') +
				':</td><td><input name="showGoldOnFindPlayer" type="checkbox" value="on"' + (GM_getValue("showGoldOnFindPlayer")?" checked":"") + '></td></tr>' +
			'<tr><td align="right">Titan Log Length' + Helper.helpLink('Titan Log Length', 'This is the number of titan logs that are stored on the scout tower page (including currently active titans).') +
				':</td><td><input name="titanLogLength" size="3" value="'+ GM_getValue("titanLogLength") + '" /></td></td></tr>' +
			'<tr><td align="right">Add UFSG Widgets' + Helper.helpLink('Add Ultimate Fallen Sword Guide Widgets', 'Shows extra links on the guide.fallensword.com page. First step is a link to pull back max critter data.') +
				':</td><td><input name="addUFSGWidgets" type="checkbox" value="on"' + (GM_getValue("addUFSGWidgets")?" checked":"") + '></td></tr>' +
			//save button
			//http://www.fallensword.com/index.php?cmd=notepad&blank=1&subcmd=savesettings
			'<tr><td colspan="2" align=center><input type="button" class="custombutton" value="Save" id="Helper:SaveOptions"></td></tr>' +
			'<tr><td colspan="2" align=center><a href="http://www.fallensword.com/index.php?cmd=notepad&blank=1&subcmd=savesettings">Export or Load Settings!</a></td></tr>' +
			'<tr><td colspan="2" align=center>' +
			'<span style="font-size:xx-small">Fallen Sword Helper was coded by <a href="' + System.server + 'index.php?cmd=profile&player_id=1393340">Coccinella</a>, ' +
			'<a href="' + System.server + 'index.php?cmd=profile&player_id=1599987">yuuzhan</a>, ' +
			'<a href="' + System.server + 'index.php?cmd=profile&player_id=1963510">PointyHair</a>, ' +
			'<a href="' + System.server + 'index.php?cmd=profile&player_id=1346893">Tangtop</a>, '+
			'<a href="' + System.server + 'index.php?cmd=profile&player_id=2536682">dkwizard</a>, ' +
			'<a href="' + System.server + 'index.php?cmd=profile&player_id=1570854">jesiegel</a>,  ' +
			'<a href="' + System.server + 'index.php?cmd=profile&player_id=2156859">ByteBoy</a>, and ' +
			'<a href="' + System.server + 'index.php?cmd=profile&player_id=2169401">McBush</a>, ' +
			'with valuable contributions by <a href="' + System.server + 'index.php?cmd=profile&player_id=524660">Nabalac</a>, ' +
			'<a href="' + System.server + 'index.php?cmd=profile&player_id=37905">Ananasii</a></td></tr>' +
			'</table></form>';
		//var insertHere = System.findNode("//table[@width='100%' and @cellspacing='0' and @cellpadding='5' and @border='0']");
		//var newRow=insertHere.insertRow(insertHere.rows.length);
		//var newCell=newRow.insertCell(0);
		//newCell.colSpan=3;
		//newCell.innerHTML=configData;
		// insertHere.insertBefore(configData, insertHere);
		maxID=parseInt($('div[id*="settingsTabs-"]:last').attr('id').split('-')[1]);
		$('div[id*="settingsTabs-"]:last').after('<div id="settingsTabs-'+(maxID+1)+'">'+configData+'</div>');
		if($("#settingsTabs").tabs('length')>0){
			//chrome, have to add it this way (due to loading order
			$("#settingsTabs").tabs('add','#settingsTabs-'+(maxID+1),'FSH Settings');
		}else{
			//firefox loads it later, so just print to page
			$('a[href*="settingsTabs-"]:last').parent().after('<li><a href="#settingsTabs-'+(maxID+1)+'">FSH Settings</a></li>');
		}

		document.getElementById('Helper:SaveOptions').addEventListener('click', Helper.saveConfig, true);
		//~ document.getElementById('Helper:CheckUpdate').addEventListener('click', Helper.checkForUpdate, true);
		document.getElementById('Helper:ShowLogs').addEventListener('click', Helper.showLogs, true);
		document.getElementById('Helper:ShowMonsterLogs').addEventListener('click', Helper.showMonsterLogs, true);
		if (GM_getValue("map")) {document.getElementById('Helper:ResetFootprints').addEventListener('click', Helper.resetFootprints, true);}
		document.getElementById('Helper:updateFpColor').addEventListener('click', Helper.updateFpColor, true);

		document.getElementById('toggleShowGuildSelfMessage').addEventListener('click', System.toggleVisibilty, true);
		document.getElementById('toggleShowGuildFrndMessage').addEventListener('click', System.toggleVisibilty, true);
		document.getElementById('toggleShowGuildPastMessage').addEventListener('click', System.toggleVisibilty, true);
		document.getElementById('toggleShowGuildEnmyMessage').addEventListener('click', System.toggleVisibilty, true);

		var krulButton = System.findNode('//input[@value="Instant Portal back to Krul Island"]');
		onClick = krulButton.getAttribute("onclick");
		//window.location='index.php?cmd=settings&subcmd=fix&xcv=3264968baaf287c67b0fab314280b163';
		krulXCVRE = /xcv=([a-z0-9]+)'/;
		krulXCV = krulXCVRE.exec(onClick);
		if (krulXCV) GM_setValue("krulXCV",krulXCV[1]);

		var minGroupLevelTextField = System.findNode('//input[@name="min_group_level"]');
		if (minGroupLevelTextField) {
			var minGroupLevel = minGroupLevelTextField.value;
			GM_setValue("minGroupLevel",minGroupLevel);
		}
	},

	resetFootprints: function(evt) {
		if (window.confirm("Are you sure you want to reset your footprints?")) {
			var theMap = System.getValueJSON("map");
			if (theMap) {
				theMap = {};
				theMap["levels"] = {};
				System.setValueJSON("map", theMap);
			}
			window.location.reload();
		}

	},

	updateFpColor: function(evt) {
		GM_setValue("footprintsColor", System.findNode("//input[@name='footprintsColor']").value);
		window.location.reload();
	},

	helpLink: function(title, text) {
		return ' [ ' +
			'<span style="text-decoration:underline;cursor:pointer;" class="tip-static" data-tipped="' +
			'<span style=\\\'font-weight:bold; color:#FFF380;\\\'>' + title + '</span><br /><br />' +
			text + '">?</span>' +
			' ]';
	},

	saveConfig: function(evt) {
		var oForm=evt.target.form;

		//bio compressor validation logic
		var maxCompressedCharacters = System.findNode("//input[@name='maxCompressedCharacters']", oForm);
		var maxCompressedCharactersValue = maxCompressedCharacters.value*1;
		if (isNaN(maxCompressedCharactersValue) || maxCompressedCharactersValue<=50) {
			maxCompressedCharacters.value=1500;
		}
		var maxCompressedLines = System.findNode("//input[@name='maxCompressedLines']", oForm);
		var maxCompressedLinesValue = maxCompressedLines.value*1;
		if (isNaN(maxCompressedLinesValue) || maxCompressedLinesValue<=1) {
			maxCompressedLines.value=25;
		}
		var newGuildLogHistoryPages = System.findNode("//input[@name='newGuildLogHistoryPages']", oForm);
		var newGuildLogHistoryPagesValue = newGuildLogHistoryPages.value*1;
		if (isNaN(newGuildLogHistoryPagesValue) || newGuildLogHistoryPagesValue<=1) {
			newGuildLogHistoryPages.value=25;
		}
		var maxGroupSizeToJoin = System.findNode("//input[@name='maxGroupSizeToJoin']", oForm);
		var maxGroupSizeToJoinValue = maxGroupSizeToJoin.value*1;
		if (isNaN(maxGroupSizeToJoinValue) || maxGroupSizeToJoinValue<=1) {
			maxGroupSizeToJoin.value=11;
		}
		var combatEvaluatorBiasElement = System.findNode("//select[@name='combatEvaluatorBias']", oForm);
		var combatEvaluatorBias = combatEvaluatorBiasElement.value;
		GM_setValue("combatEvaluatorBias", combatEvaluatorBias);
		var enabledHuntingModeElement = System.findNode("//select[@name='enabledHuntingMode']", oForm);
		var enabledHuntingMode = enabledHuntingModeElement.value;
		GM_setValue("enabledHuntingMode", enabledHuntingMode);
		System.saveValueForm(oForm, "navigateToLogAfterMsg");
		System.saveValueForm(oForm, "gameHelpLink");
		System.saveValueForm(oForm, "guildSelf");
		System.saveValueForm(oForm, "guildFrnd");
		System.saveValueForm(oForm, "guildPast");
		System.saveValueForm(oForm, "guildEnmy");

		System.saveValueForm(oForm, "showAdmin");
		System.saveValueForm(oForm, "ajaxifyRankControls");

		System.saveValueForm(oForm, "detailedConflictInfo");
		System.saveValueForm(oForm, "disableItemColoring");
		System.saveValueForm(oForm, "enableLogColoring");
		System.saveValueForm(oForm, "enableChatParsing");
		System.saveValueForm(oForm, "enableCreatureColoring");
		System.saveValueForm(oForm, "hideNonPlayerGuildLogMessages");
		System.saveValueForm(oForm, "buyBuffsGreeting");
		System.saveValueForm(oForm, "renderSelfBio");
		System.saveValueForm(oForm, "renderOtherBios");
		System.saveValueForm(oForm, "defaultMessageSound");
		System.saveValueForm(oForm, "showSpeakerOnWorld");
		System.saveValueForm(oForm, "playNewMessageSound");
		System.saveValueForm(oForm, "highlightPlayersNearMyLvl");
		System.saveValueForm(oForm, "highlightGvGPlayersNearMyLvl");
		System.saveValueForm(oForm, "showCombatLog");
		System.saveValueForm(oForm, "showMonsterLog");
		System.saveValueForm(oForm, "showCreatureInfo");
		System.saveValueForm(oForm, "keepLogs");
		System.saveValueForm(oForm, "enableGuildInfoWidgets");
		System.saveValueForm(oForm, "enableOnlineAlliesWidgets");
		System.saveValueForm(oForm, "hideGuildInfoMessage");
		System.saveValueForm(oForm, "hideGuildInfoBuff");
		System.saveValueForm(oForm, "hideGuildInfoSecureTrade");
		System.saveValueForm(oForm, "hideGuildInfoTrade");
		System.saveValueForm(oForm, "quickKill");
		System.saveValueForm(oForm, "huntingBuffs");
		System.saveValueForm(oForm, "huntingBuffsName");
		System.saveValueForm(oForm, "huntingBuffs2");
		System.saveValueForm(oForm, "huntingBuffs2Name");
		System.saveValueForm(oForm, "huntingBuffs3");
		System.saveValueForm(oForm, "huntingBuffs3Name");
		System.saveValueForm(oForm, "showHuntingBuffs");
		System.saveValueForm(oForm, "moveGuildList");
		System.saveValueForm(oForm, "moveOnlineAlliesList");
		System.saveValueForm(oForm, "moveFSBox");
		System.saveValueForm(oForm, "hideKrulPortal");
		System.saveValueForm(oForm, "hideQuests");
		System.saveValueForm(oForm, "hideQuestNames");
		System.saveValueForm(oForm, "checkForQuestsInWorld");
		System.saveValueForm(oForm, "hideRecipes");
		System.saveValueForm(oForm, "hideRecipeNames");
		System.saveValueForm(oForm, "footprintsColor");
		System.saveValueForm(oForm, "doNotKillList");
		System.saveValueForm(oForm, "enableBioCompressor");
		System.saveValueForm(oForm, "maxCompressedCharacters");
		System.saveValueForm(oForm, "maxCompressedLines");
		System.saveValueForm(oForm, "sendGoldonWorld");
		System.saveValueForm(oForm, "goldRecipient");
		System.saveValueForm(oForm, "goldAmount");
		System.saveValueForm(oForm, "keepBuffLog");
		System.saveValueForm(oForm, "showQuickSendLinks");
		System.saveValueForm(oForm, "showQuickDropLinks");
		System.saveValueForm(oForm, "sendClasses");
		System.saveValueForm(oForm, "itemRecipient");
		System.saveValueForm(oForm, "currentGoldSentTotal");
		System.saveValueForm(oForm, "hideArenaPrizes");
		System.saveValueForm(oForm, "autoSortArenaList");

		System.saveValueForm(oForm, "enableAllyOnlineList");
		System.saveValueForm(oForm, "enableEnemyOnlineList");
		System.saveValueForm(oForm, "allyEnemyOnlineRefreshTime");
		System.saveValueForm(oForm, "quickLinksTopPx");
		System.saveValueForm(oForm, "quickLinksLeftPx");

		System.saveValueForm(oForm, "enableActiveBountyList");
		System.saveValueForm(oForm, "bountyListRefreshTime");
		System.saveValueForm(oForm, "enableWantedList");
		System.saveValueForm(oForm, "wantedNames");
		System.saveValueForm(oForm, "enableBulkSell");
		System.saveValueForm(oForm, "fsboxlog");
		System.saveValueForm(oForm, "huntingMode");
		System.saveValueForm(oForm, "enableAttackHelper");
		System.saveValueForm(oForm, "hideRelicOffline");
		System.saveValueForm(oForm, "enterForSendMessage");
		System.saveValueForm(oForm, "storeLastQuestPage");
		System.saveValueForm(oForm, "addAttackLinkToLog");
		System.saveValueForm(oForm, "showStatBonusTotal");
		System.saveValueForm(oForm, "newGuildLogHistoryPages");
		System.saveValueForm(oForm, "useNewGuildLog");
		System.saveValueForm(oForm, "enhanceChatTextEntry");

		System.saveValueForm(oForm, "enableMaxGroupSizeToJoin");
		System.saveValueForm(oForm, "maxGroupSizeToJoin");

		System.saveValueForm(oForm, "enableTitanLog");
		System.saveValueForm(oForm, "titanLogRefreshTime");
		System.saveValueForm(oForm, "enableTempleAlert");
		System.saveValueForm(oForm, "showGoldOnFindPlayer");
		System.saveValueForm(oForm, "titanLogLength");
		System.saveValueForm(oForm, "autoFillMinBidPrice");
		System.saveValueForm(oForm, "showPvPSummaryInLog");
		System.saveValueForm(oForm, "addUFSGWidgets");
		System.saveValueForm(oForm, "enableQuickDrink");
		System.saveValueForm(oForm, "enhanceOnlineDots");
		System.saveValueForm(oForm, "hideBuffSelected");
		System.saveValueForm(oForm, "enableFastWalk");
		System.saveValueForm(oForm, "showFastWalkIconOnWorld");
		System.saveValueForm(oForm, "hideHelperMenu");
		System.saveValueForm(oForm, "keepHelperMenuOnScreen");
		System.saveValueForm(oForm, "showNextQuestSteps");

		window.alert("FS Helper Settings Saved");
		window.location.reload();
		return false;
	},

	showLogs: function(evt) {
		document.location=System.server + "index.php?cmd=notepad&blank=1&subcmd=showlogs";
	},

	showMonsterLogs: function(evt) {
		document.location=System.server + "index.php?cmd=notepad&blank=1&subcmd=monsterlog";
	},

	injectNotepadShowLogs: function() {
		var content = Layout.notebookContent();
		var combatLog = GM_getValue("CombatLog");
		//combatLog = JSON.stringify(combatLog);
		if (combatLog.indexOf(',')==0)
		{
			//combat logs start with a ,
			combatLog=combatLog.substr(1);
			GM_setValue("CombatLog", combatLog)
		}

		var playerName = $('dt[id="statbar-character"]').html();
		var yuuzParser = '<tr><td align="center" colspan="4"><b>Log Parser</b></td></tr>'+
			'<tr><td colspan="4" align="center">WARNING: this links to an external site not related to HCS.<br />' +
			'If you wish to visit site directly URL is: http://evolutions.yvong.com/fshlogparser.php<br />'+
			//'NOTE: Combat Log Parser will be updated soon to work with the new combat logs, if your combat loogs look different, the parser may not work.</td></tr>'+
			//'<tr><td colspan=1>Nick (This is used for parsing, it is not case sensitive):</td><td colspan=3><input type="text" name="nick" value="'+playerName+'"></td></tr>'+
			//'<tr><td colspan=1>Doubler Level: </td><td colspan=3><input type="text" name="dob" value=""></td></tr>'+
			//'<tr><td colspan=1>Counter Attack Level: </td><td colspan=3 align="left"><input type="text" name="ca" value=""></td></tr>'+
			'<tr><td colspan=4 align="center"><input type="hidden" value="true" name="submit"><input type="submit" value="Analyze!"></td></tr>';
		content.innerHTML = '<h1>Combat Logs</h1><br /><form action="http://evolutions.yvong.com/fshlogparser.php" method="post" target="_blank">' +
			'<div align="center"><textarea align="center" cols="80" rows="25" ' +
			'readonly style="background-color:white;font-family:Consolas,\"Lucida Console\",\"Courier New\",monospace;" id="Helper:CombatLog" name="logs">[' + combatLog + ']</textarea></div>' +
			'<br /><br /><table width="100%"><tr>'+
			'<td colspan="2" align=center>' +
			'<input type="button" class="custombutton" value="Select All" id="Helper:CopyLog"></td>' +
			'<td colspan="2" align=center>' +
			'<input type="button" class="custombutton" value="Clear" id="Helper:ClearLog"></td>' +
			'</tr>'+yuuzParser+'</table></div>'+
			'</form>';

		document.getElementById("Helper:CopyLog").addEventListener("click", Helper.notepadCopyLog, true);
		document.getElementById("Helper:ClearLog").addEventListener("click", Helper.notepadClearLog, true);
	},

	injectSaveSettings: function(){
		var content = Layout.notebookContent();
		var fshSettings = {};
		var list = GM_listValues();
		//alert(JSON.stringify(list));
		for(var i=0;i<list.length;i++) {
		  fshSettings[list[i]]=GM_getValue(list[i]);
		}
		content.innerHTML = '<h1>FSH Settings</h1><br /><center>The box below is your current settings. Copy it to save your current settings<br />' +
			'To load saved settings, simply replace the contents of the box with your saved copy and press the button below.'+
			'<textarea align="center" cols="80" rows="25" style="background-color:white;font-family:Consolas,\"Lucida Console\",\"Courier New\",monospace;" id="HelperfshSettings" name="fshSettings">' + JSON.stringify(fshSettings) + '</textarea>' +
			'<br /><input id="HelperLoadSettings" class="custombutton" type="submit" value="Load Settings!" /></center>';
		$('input#HelperLoadSettings').click(function(){
			var settings = JSON.parse($('textarea#HelperfshSettings').val());
			//alert(JSON.stringify(settings));
			for(var id in settings){
				GM_setValue(id,settings[id]);
			}
			alert('Settings loaded successfully!');
		});

	},

	notepadCopyLog: function() {
		var combatLog=document.getElementById("Helper:CombatLog");
		combatLog.focus();
		combatLog.select();
	},

	notepadClearLog: function() {
		if (window.confirm("Are you sure you want to clear your log?")) {
			var combatLog=document.getElementById("Helper:CombatLog");
			GM_setValue("CombatLog", "");
			window.location = window.location;
		}
	},

	guildRelationship: function(txt) {
		var guildSelf = GM_getValue("guildSelf");
		var guildFrnd = GM_getValue("guildFrnd");
		var guildPast = GM_getValue("guildPast");
		var guildEnmy = GM_getValue("guildEnmy");
		if (!guildSelf) {
			guildSelf = "";
			GM_setValue("guildSelf", guildSelf);
		}
		if (!guildFrnd) {
			guildFrnd = "";
			GM_setValue("guildFrnd", guildFrnd);
		}
		if (!guildPast) {
			guildPast = "";
			GM_setValue("guildPast", guildPast);
		}
		if (!guildEnmy) {
			guildEnmy = "";
			GM_setValue("guildEnmy", guildEnmy);
		}
		guildSelf = guildSelf.toLowerCase().replace(/\s*,\s*/, ",").replace(/\s\s*/g, " ").split(",");
		guildFrnd = guildFrnd.toLowerCase().replace(/\s*,\s*/, ",").replace(/\s\s*/g, " ").split(",");
		guildPast = guildPast.toLowerCase().replace(/\s*,\s*/, ",").replace(/\s\s*/g, " ").split(",");
		guildEnmy = guildEnmy.toLowerCase().replace(/\s*,\s*/, ",").replace(/\s\s*/g, " ").split(",");
		txt = txt.toLowerCase().replace(/\s\s*/g, " ");
		if (guildSelf.indexOf(txt) != -1) return "self";
		if (guildFrnd.indexOf(txt) != -1) return "friendly";
		if (guildPast.indexOf(txt) != -1) return "old";
		if (guildEnmy.indexOf(txt) != -1) return "enemy";
		return "";
	},

	displayMiniMap: function() {
		var miniMap = document.getElementById("miniMap");
		if (!miniMap) {
			miniMap = document.createElement("div");
			miniMap.style.position = "absolute";
			miniMap.style.left = 0;
			miniMap.style.top = 0;
			miniMap.style.display = 'none';
			miniMap.id = "miniMap";
			miniMap.style.zIndex = '90';
			miniMap.style.filter = "alpha";
			miniMap.style.opacity = "0.9";

			var objBody = document.getElementsByTagName("body").item(0);
			objBody.insertBefore(miniMap, objBody.firstChild);
		}
		var miniMapName = GM_getValue("miniMapName");
		var miniMapSource = GM_getValue("miniMapSource");
		if (miniMap.style.display !== "") {
			if (miniMapName && Helper.levelName == miniMapName) {
				miniMap.innerHTML = miniMapSource;
				Helper.addMiniMapExtras(miniMap);
			}
			else {
				System.xmlhttp("index.php?cmd=world&subcmd=map", Helper.loadMiniMap, true);
			}
		}
		else miniMap.style.display = "none";
	},

	loadMiniMap: function(responseText) {
		var size = 20;
		var miniMap = document.getElementById("miniMap");
		var docu = System.createDocument(responseText);
		//shrink the background down from 40 to 20 and prep it for the mini map POI logic.
		$(docu).find('td[background]').each(function(){
			var background = $(this).attr("background");
			$(this).append('<img width=' + size + ' height=' + size + ' src="' + background + '">')
				.attr("background", "");
		});
		var doc = '<table cellspacing="0" cellpadding="0" align="center" id=miniMapTable>' + $(docu).find('table:first').html() + '</table>';
		doc = doc.replace(/<[^>]*title="You are here"[^>]*>/g, '');
		doc = doc.replace(/<center><table [^>]*><tbody><tr><td[^>]*><\/td><\/tr><\/tbody><\/table><\/center>/g,'');
		doc = doc.replace(/width="40"/g, 'width="' + size + '"').replace(/height="40"/g, 'height="' + size + '"');
		miniMap.innerHTML = doc;
		Helper.addMiniMapExtras(miniMap);

		if (Helper.levelName) {GM_setValue("miniMapName", Helper.levelName);}
		GM_setValue("miniMapSource", doc);
	},

	addMiniMapExtras: function(miniMap) {
		Helper.markPlayerOnMiniMap();
		Helper.toogleMiniMapPOI();
		var last=document.getElementById("miniMapTable").insertRow(-1).insertCell(0);
		last.colSpan=document.getElementById("miniMapTable").rows[0].cells.length;
		last.innerHTML = "<span style='color:green;font-size:x-small;font-weight:bolder'>"+
			"<br/><h1 class=tipped data-tipped='Click on the player icon and left click drag the path you want to walk. If you walk into a wall or make an error, " +
				"close and reopen the mini map and start again. Push N (capital n) to activate the auto-walk and watch the mini map as you walk to your " +
				"new location. The screen will refresh when you get there.'>Auto-Walk</h1></span>";
		Helper.miniMapTableEvents();
		miniMap.style.display = "";
	},

	miniMapTableEvents: function(){
		Helper.mouse = 0;
		Helper.moveList=[Helper.position()];
		document.getElementById('miniMap').addEventListener("mouseup", function(e){Helper.mouse = 0},false);
		// collect table cells from the drawing_table div element
		var td = document.getElementById('miniMap').getElementsByTagName('td');
		// attach onMouseDown and onMouseOver event for collected table cells
		for (var i=0; i<td.length; i++){
			td[i].addEventListener("mousedown", Helper.mousedown, true);
			// colorize table cell if left mouse button is pressed
			//fix me?
			td[i].addEventListener("mouseover", function (e){if (Helper.mouse == 1) Helper.markPos(this);}, true);
		}
	},

	mousedown: function (evt){
		// needed for FF to disable dragging
		evt.preventDefault();
		// set pressed mouse button
		Helper.mouse = evt.which;
		// colorize pixel on mousedown event for TD element
		if (this.tagName == 'TD' && Helper.mouse == 1) Helper.markPos(this);
	},

	markPos: function(td) {
		var pos={'X':td.cellIndex,'Y':td.parentNode.rowIndex};
		if (!Helper.moveList[0]) return;
		var lastPos=Helper.moveList[Helper.moveList.length - 1];
		var dx=pos.X-lastPos.X, dy=pos.Y-lastPos.Y;
		if (dx>=-1 && dx <=1 && dy>=-1 && dy<=1 && (dx!=0 || dy!=0)) {
			Helper.moveList.push(pos);
			td.innerHTML='';
			td.style.backgroundColor = "red";
		}
	},

	autoMoveMiniMap: function() {
		if (Helper.moveList && Helper.moveList.length > 1)
			System.xmlhttp("index.php?cmd=world&subcmd=move&x="+Helper.moveList[1].X+"&y="+Helper.moveList[1].Y,
				Helper.autoMoveNext, 1);
	},

	autoMoveNext: function(responseText, id) {
		var currentPos = "("+Helper.moveList[id].X+", "+Helper.moveList[id].Y+")";
		if (responseText.indexOf(currentPos)<0) {
			alert("Cannot move via " + currentPos);
			window.location = window.location;
		} else {
			// update current pos
			Helper.markPosOnMiniMap(Helper.moveList[id]);
			// move next
			var nextId = id+1;
			if (nextId < Helper.moveList.length)
				System.xmlhttp("index.php?cmd=world&subcmd=move&x="+Helper.moveList[nextId].X+"&y="+Helper.moveList[nextId].Y,
					Helper.autoMoveNext, nextId);
			else
				window.location = window.location;
		}
	},

	toogleMiniMapPOI: function() {
		var miniMap = document.getElementById("miniMap");
		var miniMapTable = document.getElementById("miniMapTable");
		var miniMapCover = document.getElementById("miniMapCover");
		if (!miniMapCover) {
			miniMapCover = document.createElement("div");
			miniMapCover.style.position = "absolute";
			miniMapCover.style.left = 0;
			miniMapCover.style.top = 0;
			miniMapCover.id = "miniMapCover";
			miniMapCover.style.zIndex = '100';
			miniMapCover.style.filter = "alpha";
			miniMapCover.style.opacity = "0.4";
			miniMapCover.innerHTML = '<table cellspacing="0" cellpadding="0" align="center">'+
				miniMapTable.innerHTML+'</table>';
			miniMap.insertBefore(miniMapCover, miniMap.firstChild);
		} else {
			miniMap.removeChild(miniMapCover);
			return;
		}

		var nodes = System.findNodes("//div[@id='miniMapCover']//td[contains(@class,'tipped')]");
		if (!nodes) return;
		for (var i=0; i<nodes.length; i++) {
			var tip=$(nodes[i]).data("tipped");
			var color=tip.indexOf(': ') >= 0 ? 'red' :
				tip.indexOf("Stairway to ") >= 0 ? 'green' : 'blue';
			nodes[i].innerHTML = '';
			nodes[i].style.backgroundColor = color;
		}
	},

	markPlayerOnMiniMap: function() {
		var posit = Helper.position();
		if (!posit) {return;}
		Helper.markPosOnMiniMap(posit);
	},

	markPosOnMiniMap: function(posit) {
		var miniMapTable = document.getElementById("miniMapTable");
		if (!miniMapTable) return;
		var position = miniMapTable.rows[posit.Y].cells[posit.X];
		var background = position.firstChild.src;
		position.innerHTML = '<center><img width=16 height=16 src="' + System.imageServer + '/skin/player_tile.gif" title="You are here"></center>';
		position.style.backgroundImage = 'url("' + background + '")';
		position.style.backgroundPosition = "center";
		position.style.backgroundSize = "20px";
	},

	injectQuickLinkManager: function(content) {
		GM_addStyle('.HelperTextLink {color:black;font-size:x-small;cursor:pointer;}\n' +
			'.HelperTextLink:hover {text-decoration:underline;}\n');

		if (!content) var content = Layout.notebookContent();
		content.innerHTML=Helper.makePageTemplate('Quick Links','','','','quickLinkAreaId');

		// global parameters for the meta function generateManageTable
		Helper.param={};
		Helper.param={'id':'quickLinkAreaId',
			'headers':["Name","URL",'New [<span style="cursor:pointer; text-decoration:underline;" title="Open page in a new window">?</span>]'],
			'fields':["name","url","newWindow"],
			'tags':["textbox","textbox","checkbox"],
			'currentItems':System.getValueJSON("quickLinks"),
			'gmname':"quickLinks"};
		Helper.generateManageTable();
	},

	movePage: function(dir) {
		var dirButton = System.findNode("//input[@value='"+dir+"']");
		if (!dirButton) {return;}
		var url = dirButton.getAttribute("onClick");
		url = url.replace(/^[^']*'/m, "").replace(/\';$/m, "");
		window.location = url;
	},



	injectCreateAuctionTemplate: function() {
		if (window.location.search.search("inv_id") == -1) { return; }

		var auctionTable = System.findNode("//table[tbody/tr/td/a[@href='index.php?cmd=auctionhouse&subcmd=create']]");
		if (!auctionTable) {return;}



		var newRow = auctionTable.insertRow(10);
		newCell = newRow.insertCell(0);
		newCell.colSpan = 2;
		newCell.align = "center";
		var table = System.getValueJSON("auctionTemplate");
		if (!table) {
			table = [
				{auctionLength:6,auctionCurrency:1,auctionMinBid:1,		auctionBuyNow:1,	isDefault:true}
			];
			System.setValueJSON("auctionTemplate", table);
		}

		var textResult = "<table cellspacing='0' cellpadding='0' bordercolor='#000000'" +
				" border='0' align='center' width='550' style='border-style: solid; border-width: 1px;' id='Helper:AuctionTemplateTable'>" +
				"<tr><td bgcolor='#cd9e4b'><center>Auction Templates</center></td></tr>" +
				"<tr><td><table cellspacing='10' cellpadding='0' border='0' width='100%'>" +
				"<tr><th bgcolor='#cd9e4b'>Length</th><th bgcolor='#cd9e4b'>Currency</th>"+
				"<th bgcolor='#cd9e4b'>Min Bid</th><th bgcolor='#cd9e4b'>Buy Now</th>"+
				"<th></th></tr>";

		for (i = 0; i < table.length; i++) {
			textResult += "<tr align='right'><td>"+Helper.getAuctionLength(table[i].auctionLength)+"</td>"+
				"<td>"+(table[i].auctionCurrency==0?"Gold":"FSP")+"</td>"+
				"<td>"+System.addCommas(table[i].auctionMinBid)+"</td>"+
				"<td>"+System.addCommas(table[i].auctionBuyNow)+"</td>"+
				"<td>[<span style='cursor:pointer; text-decoration:underline; color:blue;' "+
					"id='Helper:useAuctionTemplate" + i + "' auctionTemplateId=" + i +
					" auctionLength=" + table[i].auctionLength +
					" auctionCurrency=" + table[i].auctionCurrency +
					" auctionMinBid=" + table[i].auctionMinBid +
					" auctionBuyNow=" + table[i].auctionBuyNow +
					">apply</span>]";
				textResult += " [<span style='cursor:pointer; text-decoration:underline; color:blue;' "+
					"id='Helper:delAuctionTemplate" + i + "' auctionTemplateId=" + i +">del</span>]";
			textResult += "</td></tr>";
		}
		if (table.length<=10) {
			textResult += "<tr align='right'>"+
				"<td><select id='Helper:auctionLength'><option value='0' selected>1 Hour</option><option value='1' >2 Hours</option>"+
					"<option value='2' >4 Hours</option><option value='3' >8 Hours</option><option value='4' >12 Hours</option>"+
					"<option value='5' >24 Hours</option><option value='6' >48 Hours</option></select></td>"+
				"<td><select id='Helper:auctionCurrency'><option value='0' >Gold</option><option value='1' selected>FSP</option></select></td>"+
				"<td><input type='text' class='custominput' size='6' id='Helper:minBid'/></td>"+
				"<td><input type='text' class='custominput' size='6' id='Helper:buyNow'/></td>"+
				"<td>[<span style='cursor:pointer; text-decoration:underline; color:blue;' "+
					"id='Helper:saveAuctionTemplate'>save new template</span>]</td></tr>";

		}
		textResult += "</table></td></tr></table>";

		newCell.innerHTML = textResult;

		if (table.length<=10) document.getElementById("Helper:saveAuctionTemplate").addEventListener("click", Helper.saveAuctionTemplate, true);
		for (i = 0; i < table.length; i++) {
			document.getElementById("Helper:useAuctionTemplate" + i).addEventListener("click", Helper.useAuctionTemplate, true);
			document.getElementById("Helper:delAuctionTemplate" + i).addEventListener("click", Helper.delAuctionTemplate, true);
		}
	},
	
	injectCreateAuctionBulkSell: function(){
////////////////////////////////// Post bulk sell //////////////////////////////////
		var enableBulkSell = GM_getValue("enableBulkSell");
		var sellFromAll = GM_getValue("bulkSellAllBags");
		if (!enableBulkSell) {return;}

		var auctionTable = System.findNode("//table[tbody/tr/td/a[@href='index.php?cmd=auctionhouse&subcmd=create']]");
		if (!auctionTable) {return;}

		var newRow = auctionTable.insertRow(11);
		var newCell = newRow.insertCell(0);
		newCell.innerHTML = "&nbsp;";
		newRow = auctionTable.insertRow(12);
		newCell = newRow.insertCell(0);
		newCell.colSpan = 2;
		newCell.align = "center";

		var textResult = "<table cellspacing='0' cellpadding='0' bordercolor='#000000'" +
				" border='0' align='center' width='550' style='border-style: solid; border-width: 1px;'>" +
				"<tr><td bgcolor='#cd9e4b'><center>Bulk Auction List</center></td></tr>" +
				"<tr><td align='center'><table cellspacing='10' cellpadding='0' border='0' width='100%' style='border-style: solid; border-width: 1px;'>" +
				"<tr><th bgcolor='#cd9e4b'>Length</th><th bgcolor='#cd9e4b'>Currency</th>"+
				"<th bgcolor='#cd9e4b'>Min Bid</th><th bgcolor='#cd9e4b'>Buy Now</th>"+
				"<th></th></tr>";

			textResult += "<tr align='right'>"+
				"<td><select id='Helper:bulkSellAuctionLength'><option value='0' selected>1 Hour</option><option value='1' >2 Hours</option>"+
					"<option value='2' >4 Hours</option><option value='3' >8 Hours</option><option value='4' >12 Hours</option>"+
					"<option value='5' >24 Hours</option><option value='6' >48 Hours</option></select></td>"+
				"<td><select id='Helper:bulkSellAuctionCurrency'><option value='0' >Gold</option><option value='1' selected>FSP</option></select></td>"+
				"<td><input type='text' class='custominput' size='6' id='Helper:bulkSellMinBid'/></td>"+
				"<td><input type='text' class='custominput' size='6' id='Helper:bulkSellBuyNow'/></td>"+
				"<td>[<span style='cursor:pointer; text-decoration:underline; color:blue;' "+
					"id='Helper:bulkListAll'>bulk list all</span>]</td></tr>";

		textResult += "</table></td></tr>";


/// had to move up here for call back purposes:

		$.ajax({
			url: '?cmd=export&subcmd=inventory',
			success: function( data ) {
				Helper.inventory = data;
			},
			async: false, //wait for responce
			dataType: 'json'
		});
		var inv_id = /inv_id=(\d+)$/.exec(window.location.search);
		inv_id = inv_id[1];
		var inv_id_index=-1;
		var item_id = -1;
		for(i=0;i<Helper.inventory.items.length;i++){
			if(Helper.inventory.items[i].inv_id == inv_id){
				inv_id_index=i;
				item_id=Helper.inventory.items[i].item_id;
			}
		}

		textResult += "<tr><td align='center'><label id='Helper:useItemsInStCont'><input type='checkbox' id='Helper:useItemsInSt' checked /> Select items in ST</label> - <label id='Helper:listDifferentItemsCont'><input type='checkbox' id='Helper:listDifferentItems' /> Post different types of items</label><input type='hidden' value='"+item_id+"' id='Helper:postingItemID' /></td><tr>";

		textResult += "<tr><td align='center'><table id='Helper:CreateAuctionBulkSellTable' cellspacing='10' cellpadding='0' border='0' width='100%'>";

		textResult += "</table></td></tr>";

		textResult += "</table>";

		newCell.innerHTML = textResult;

		document.getElementById('Helper:bulkListAll').addEventListener('click', Helper.bulkListAll, true);


		var bidEntryTable = System.findNode("//table[tbody/tr/td/a[@href='index.php?cmd=auctionhouse&subcmd=create']]/tbody/tr[10]/td[1]/table");
		if (inv_id_index > 0) {
			var newCell = bidEntryTable.rows[0].insertCell(2);
			newCell.rowSpan = 5;
			var style='';
			if (Helper.inventory.items[inv_id_index].is_in_st){
				style='style="border: 3px solid red"';
			}
			//.css('border','3px solid red')
			newCell.innerHTML = '<img src="' + System.imageServerHTTP + '/items/' + Helper.inventory.items[inv_id_index].item_id +
				//fetchitem.php\?item_id=(\d+)\&inv_id=(\d+)\&t=(\d+)\&p=(\d+)
				'.gif" class="tipped" data-tipped-options="skin:\'fsItem\', ajax:true" data-tipped="fetchitem.php?item_id=' + Helper.inventory.items[inv_id_index].item_id + '&inv_id=' + Helper.inventory.items[inv_id_index].inv_id  + '&t=1&p=' + Helper.inventory.player_id + '" border=0 '+style+'>';
		}

		var row = System.findNode("//tr[td/a[@href='index.php?cmd=auctionhouse&subcmd=create']]");
		if (row) {
			var toggleSellAllHTML = "<span id='Helper:bulkCheck' item_id='"+item_id+"' style='cursor: pointer; text-decoration: underline; color: blue;'>" +
			(sellFromAll === true ? "Selling from all bags" : "Selling only from main folder") + " </span>";
			row.innerHTML = row.innerHTML.replace("]", " | " + toggleSellAllHTML + " ]");
			var bulkCheck = document.getElementById("Helper:bulkCheck")
			if (bulkCheck) bulkCheck.addEventListener("click", Helper.toggleSellFromAllBags, true);
		}

		document.getElementById('Helper:useItemsInStCont').addEventListener('click', Helper.bulkSellInsertItems, true);
		document.getElementById('Helper:useItemsInSt').addEventListener('click', Helper.bulkSellInsertItems, true);
		document.getElementById('Helper:listDifferentItemsCont').addEventListener('click', Helper.bulkSellInsertItems, true);
		document.getElementById('Helper:listDifferentItems').addEventListener('click', Helper.bulkSellInsertItems, true);
		Helper.bulkSellInsertItems();
	},

	toggleSellFromAllBags: function(evt) {
		var newValue = !GM_getValue("bulkSellAllBags");
		GM_setValue('bulkSellAllBags', newValue);
		var theSpan = document.getElementById("Helper:bulkCheck");
		theSpan.innerHTML = (newValue === true ? "Selling from all bags" : "Selling only from main folder");
		setTimeout(function() { //need to do this to give time for the gm_getvalue to send
			Helper.bulkSellInsertItems();
		},0);
		
	},

	bulkSellInsertItems: function(){
		var item_id=$('input[id="Helper:postingItemID"]').attr('value');
		if(!item_id){return;}
		var bulkSellTable = $('table[id="Helper:CreateAuctionBulkSellTable"]');
		var selectST= $('input[id="Helper:useItemsInSt"]').is(':checked');
		var selectAll= $('input[id="Helper:listDifferentItems"]').is(':checked');
		bulkSellTable.children().remove();
		var maxAuctions = GM_getValue("maxAuctions");
		if (!maxAuctions) maxAuctions = 2;

		var sellFromAll = GM_getValue("bulkSellAllBags");
//alert("in post: " + sellFromAll);
var items=0;
		for(i=0;i<Helper.inventory.items.length;i++){
			//shouldPost=true;
			if(!sellFromAll && Helper.inventory.items[i].folder_id > 0){ continue;} //all bp or not?
			if(!selectST && Helper.inventory.items[i].is_in_st){ continue;} //items in ST or not
			if(!selectAll && Helper.inventory.items[i].item_id!=item_id) { continue;}
			if(Helper.inventory.items[i].equipped) { continue;}
			if(Helper.inventory.items[i].guild_tag != '-1') { continue;}
			if(Helper.inventory.items[i].bound) { continue;}

			if(Helper.inventory.items[i].guild_tag==-1){
				if (items % 3 === 0) bulkSellTable.append('<tr><td><td><td><td><td><td></td></td></td></td></td></td></tr>');
				bulkSellTable.find('tr:last').css("vAlign","middle");
				bulkSellTable.find('tr:last').find('td:eq('+(items%3)*2+')')
					.html('<img src="'+System.imageServerHTTP+'/items/'+Helper.inventory.items[i].item_id+'.gif" border=0 ' +
						'class="tipped" data-tipped-options="skin:\'fsItem\', ajax:true" data-tipped="fetchitem.php?item_id=' + Helper.inventory.items[i].item_id + '&inv_id=' + Helper.inventory.items[i].inv_id + '&t=1&p=' + Helper.inventory.player_id + '">')
					.next()
					.html('<span id="Helper:bulkListSingle'+Helper.inventory.items[i].inv_id+'" itemInvId="'+Helper.inventory.items[i].inv_id+'" style="cursor:pointer; text-decoration:underline; color:blue;">auction single</span>');
				if(Helper.inventory.items[i].is_in_st){
					bulkSellTable.find('tr:last').find('td:eq('+(items%3)*2+')').css('border','3px solid red');
				}
				document.getElementById('Helper:bulkListSingle'+Helper.inventory.items[i].inv_id).addEventListener('click', Helper.bulkListSingle, true);
				if (items > maxAuctions && (i+1) != Helper.inventory.items.length) {
					bulkSellTable.append('<tr><td></td></tr>');
					var newText = "You only have " + maxAuctions + " auction slots.";
					if (maxAuctions == 2) {
						newText += " Check the updates page to add more (or to fix this number if you think it is wrong)";
					}
					bulkSellTable.find('tr:last').find('td:first').html(newText).attr("colspan",6);
					return false;
				}
				items++;

			}
		}
	},
	getAuctionLength: function(auctionLength) {
		if (auctionLength == 1) return '2 Hours';
		else if (auctionLength == 2) return '4 Hours';
		else if (auctionLength == 3) return '8 Hours';
		else if (auctionLength == 4) return '12 Hours';
		else if (auctionLength == 5) return '24 Hours';
		else if (auctionLength == 6) return '48 Hours';
		else return '1 Hour';
	},

	useAuctionTemplate: function(evt) {
		var newAuctionLength = evt.target.getAttribute("auctionLength");
		var newAuctionCurrency = evt.target.getAttribute("auctionCurrency");
		var newAuctionMinBid = evt.target.getAttribute("auctionMinBid");
		var newAuctionBuyNow = evt.target.getAttribute("auctionBuyNow");

		var auctionLength = System.findNode("//select[@name='auction_length']");
		var auctionCurrency = System.findNode("//select[@name='currency']");
		var auctionMinBid = System.findNode("//input[@name='minbid']");
		var auctionBuyNow = System.findNode("//input[@name='buynow']");

		auctionLength.selectedIndex = newAuctionLength;
		auctionCurrency.selectedIndex = newAuctionCurrency;
		auctionMinBid.value = newAuctionMinBid;
		auctionBuyNow.value = newAuctionBuyNow;

		var enableBulkSell = GM_getValue("enableBulkSell");
		if (enableBulkSell) {
			var bulkSellAuctionLength = System.findNode("//select[@id='Helper:bulkSellAuctionLength']");
			var bulkSellAuctionCurrency = System.findNode("//select[@id='Helper:bulkSellAuctionCurrency']");
			var bulkSellAuctionMinBid = System.findNode("//input[@id='Helper:bulkSellMinBid']");
			var bulkSellAuctionBuyNow = System.findNode("//input[@id='Helper:bulkSellBuyNow']");

			bulkSellAuctionLength.selectedIndex = newAuctionLength;
			bulkSellAuctionCurrency.selectedIndex = newAuctionCurrency;
			bulkSellAuctionMinBid.value = newAuctionMinBid;
			bulkSellAuctionBuyNow.value = newAuctionBuyNow;
		}
	},

	saveAuctionTemplate: function(evt) {
		var auctionLength = document.getElementById("Helper:auctionLength").value;
		var auctionCurrency = document.getElementById("Helper:auctionCurrency").value;
		var auctionMinBid = document.getElementById("Helper:minBid").value;
		var auctionBuyNow = document.getElementById("Helper:buyNow").value;
		if (!auctionMinBid) {return;}
		var table = System.getValueJSON("auctionTemplate");
		var theTemplate = {
			auctionLength: auctionLength,
			auctionCurrency: auctionCurrency,
			auctionMinBid: auctionMinBid,
			auctionBuyNow: auctionBuyNow,
			isDefault: false
		};
		table.push(theTemplate);
		System.setValueJSON("auctionTemplate", table);
		$("table[id='Helper:AuctionTemplateTable']").remove();
		setTimeout(function(){
			Helper.injectCreateAuctionTemplate();
		},0);
	},

	delAuctionTemplate: function(evt) {
		var auctionTemplateId = evt.target.getAttribute("auctionTemplateId");
		var table = System.getValueJSON("auctionTemplate");
		table.splice(auctionTemplateId,1);
		System.setValueJSON("auctionTemplate", table);
		$("table[id='Helper:AuctionTemplateTable']").remove();
		setTimeout(function(){
			Helper.injectCreateAuctionTemplate();
		},0);
		//window.location = window.location;
	},

	injectInvent: function(){
		var selector="<tr><td align='center'>Select how many to quick invent<input value=1 id='invent_amount' name='invent_amount' size=3 class='custominput'></td></tr>"+
			"<tr><td align='center'><input id='quickInvent' value='Quick invent items' class='custombutton' type='submit'></td></tr>"+ //button to invennt
			//"<input type='hidden' id='recipe_id' value='"+ recipeID +"'>"+
			"<tr><td colspan=6 align='center'><span id='invet_Result_label'></span><ol id='invent_Result'></ol></td></tr>";
		//injectHere.parentNode.innerHTML+=selector;
		$('input[name="recipe_id"]').closest('tbody').append(selector);
		document.getElementById('quickInvent').addEventListener('click', Helper.quickInvent, true);

	},
	quickInvent: function() {
		var amountToInvent = $('#invent_amount').attr('value');
		var recipeID = $('input[name="recipe_id"]').attr('value');
		$('#invet_Result_label').html("Inventing "+amountToInvent+" Items");
		for (var i=0;i<amountToInvent;i++) {
			//Had to add &fsh=i to ensure that the call is sent out multiple times.
			System.xmlhttp("index.php?cmd=inventing&subcmd=doinvent&recipe_id="+recipeID+"&fsh="+i, Helper.quickInventDone);
		}
	},
	quickInventDone: function(responseText) {
		var infoMessage = Layout.infoBox(responseText);
		$('#invent_Result').append("<li style='list-style:decimal'>"+infoMessage+"</li>");
	},

	toggleQuickTake: function(){
		if($('#currentMBDisplay').attr('value')=='mailbox'){
			$('#mailboxSwitcher').html('Toggle Mailbox');
			$('#quickTake').css('display','block');
			$('#regularMailbox').css('display','none');
			$('#currentMBDisplay').attr('value','quicktake');
		}else{
			$('#mailboxSwitcher').html('Toggle Quick Take');
			$('#quickTake').css('display','none');
			$('#regularMailbox').css('display','block');
			$('#currentMBDisplay').attr('value','mailbox');
		}
	},

	takeAllSimilar: function(evt) {
		//if (!window.confirm("Are you sure you want to take all similar items?")) {return;}
		var InventoryIDs=evt.target.getAttribute("invIDs").split(",");
		//evt.target.parentNode.innerHTML = InventoryIDs;
		var output= '';
		evt.target.parentNode.innerHTML = 'taking all ' + Math.min(InventoryIDs.length,100) + ' items';
		for (var i=0; i<Math.min(InventoryIDs.length,100); i++){
			//index.php?cmd=tempinv&subcmd=takeitem&&temp_id=
			System.xmlhttp('index.php?cmd=tempinv&subcmd=takeitem&&temp_id='+InventoryIDs[i], Helper.quickDoneTaken);
		}
		//evt.target.parentNode.innerHTML = output;
	},
	quickDoneTaken: function(responseText) {
		var infoMessage = Layout.infoBox(responseText);
		//unsafeWindow.tt_setWidth(200);
		//unsafeWindow.Tip(infoMessage);
		$('#take_result').append("<br />"+infoMessage);
	},

	injectMailbox: function() {
		var items = System.findNodes("//a[contains(@href,'temp_id')]");
		if (items) {
			for (var i = 0; i < items.length; i++) {
				var item = items[i];
				var itemHref = item.getAttribute('href');
				var itemTable = item.parentNode.parentNode.parentNode.parentNode.parentNode;
				itemTable.innerHTML += '<br><span style="cursor:pointer; text-decoration:underline; color:blue; font-size:x-small;" '+
					'id="Helper:recallMailboxItem' + i + '" ' +
					'itemHref="' + itemHref + '">Fast Take</span>';
				document.getElementById('Helper:recallMailboxItem' + i).addEventListener('click', Helper.recallMailboxItem, true);
			}
			var titleTable = System.findNode("//table[tbody/tr/td/font/b[.='Item Mailbox']]");
			if (!titleTable){
				titleTable = System.findNode("//table[tbody/tr/td/font/b[.='Guild Mailbox']]");
			}else{
				titleTable.rows[4].cells[0].align = 'center';
				titleTable.rows[4].cells[0].innerHTML = '<a href="index.php?cmd=tempinv&subcmd=takeall">Take All Items</a>';
				
				//*************** Quick take ****************
				//$('#pCC').html('Getting information from mailbox');
				$('#pCC').wrapInner('<div id="regularMailbox" />');
				var quickTakeDiv='<div id="quickTake" style="display:none"><br /><br /><center><font size="3"><b>Quick Take</b></font>'+
					'<br />Select which item to take all similar items from your Mailbox.<br /></center>'+
					'<table id="quickTakeTable" align="left"><tr><th width=20%>Actions</th><th>Items</th></tr><tr><td id="take_result" colspan=2></td></tr></table>'+
					'</div>';

				$('#pCC').prepend('<span id="mailboxSwitcher" style="cursor:pointer; text-decoration:underline; color:blue;">Toggle Quick Take</span><input type="hidden" id="currentMBDisplay" value="mailbox" />'+quickTakeDiv);
			}
		} else { // Empty mailbox
			return
		}

		//fetchitem.php?item_id=9208&inv_id=91591259&t=5&p=1599987&currentPlayerId=1599987&extra=3
		Helper.itemList = {};
		$('img[data-tipped*="t=5"]').each(function () {
			//quickTakeDiv+='<br /><img src="'+$(this).attr('src')+'">';
			var	itemIDs = /fetchitem.php\?item_id=(\d+)\&inv_id=(\d+)\&t=(\d+)\&p=(\d+)/.exec($(this).attr('data-tipped'));
			if(itemIDs){
				var item={
					"item_id":itemIDs[1],
					"inv_id":itemIDs[2],
					"tipped":$(this).attr('data-tipped'),
					"src":$(this).attr('src')
					};
				Helper.itemList["id"+item.inv_id]=item;
			}
		});

//confirm(JSON.stringify(Helper.itemList));
		//<img src="http://huntedcow.cachefly.net/fs/items/9208.gif" class="t_hideOnClickOutside" border="0">
		Helper.mailboxList={};
		for (var key in Helper.itemList) {
			var item_id=Helper.itemList[key].item_id;
			var inv_id=Helper.itemList[key].inv_id;
			//var	itemType=Helper.itemList[key].itemid; //add this line
			if (Helper.mailboxList[item_id]){
				Helper.mailboxList[item_id].invIDs+=","+inv_id;
				Helper.mailboxList[item_id].count++;
			}
			else {
				Helper.mailboxList[item_id]={'count':1,'invIDs':inv_id,'src':Helper.itemList[key].src,'tipped':Helper.itemList[key].tipped};
			}
		}
//confirm(JSON.stringify(Helper.mailboxList));
		var quickTakeTable = $('#quickTakeTable');
		for (var id in Helper.mailboxList) {
			var titem=Helper.mailboxList[id];
			quickTakeTable.append('<tr><td align=center>'+
				'<span style="cursor:pointer; text-decoration:underline; color:blue; font-size:x-small;" '+
				'id="Helper:takeAllSimilar' + id + '" invIDs="'+titem.invIDs+'">Take All '+titem.count +'</span></td>'+
				'<td><img src="'+titem.src+'" class="t_hideOnClickOutside" border="0" data-tipped="'+titem.tipped+'"></td></tr>');
		}

		for (id in Helper.mailboxList) {
			document.getElementById('Helper:takeAllSimilar' + id).
				addEventListener('click', Helper.takeAllSimilar, true);
		}


		//Helper.mailboxList={};
		//System.xmlhttp("/index.php?cmd=tempinv", Helper.getItemsFromMailbox, {"inject":layout,"id":0});
		document.getElementById('mailboxSwitcher').addEventListener('click', Helper.toggleQuickTake, true);
	},
	
	recallMailboxItem: function(evt) {
		var mailboxItemHref = evt.target.getAttribute("itemHref");
		System.xmlhttp(mailboxItemHref,Helper.recallMailboxReturnMessage,{"target": evt.target, "url": mailboxItemHref});
	},

	recallMailboxReturnMessage: function(responseText, callback) {
		var target = callback.target;
		var info = Layout.infoBox(responseText);
		target.style.cursor = 'default';
		target.style.textDecoration = 'none';
		if (info.search("Item was transferred to your backpack") != -1) {
			target.style.color = 'green';
			target.style.fontWeight = 'bold';
			target.style.fontSize = 'small';
			target.innerHTML = "Taken";
		} else if (info.search("Item was transferred to the guild store!") != -1) {
			target.style.color = 'green';
			target.style.fontWeight = 'bold';
			target.style.fontSize = 'small';
			target.innerHTML = "Taken";
		} else if (info!=="") {
			target.style.color = 'red';
			target.style.fontWeight = 'bold';
			target.style.fontSize = 'small';
			target.innerHTML = "Error: " + info;
		} else {
			target.style.color = 'red';
			target.style.fontSize = 'small';
			target.innerHTML = "Weird Error: check the Tools>Error Console";
			GM_log("Post the previous HTML and the following message to the code.google.com site or to the forum to help us debug this error");
			GM_log(callback.url);
		}
	},

	injectAuctionQuickCancel: function() {
		if (location.search == '?cmd=auctionhouse' != -1 && location.search == '&type=-2' != -1) {
			var cancelButtons = System.findNodes("//img[@title='Cancel Auction']");
			if (cancelButtons) {
				for (var i = 0; i < cancelButtons.length; i++) {
					var cancelButton = cancelButtons[i];
					var cancelButtonHref = cancelButton.parentNode.getAttribute('href');
					var cancelButtonCellElement = cancelButton.parentNode.parentNode.parentNode;
					cancelButtonCellElement.style.textAlign = 'center';
					cancelButtonCellElement.innerHTML += '<br><br><span style="cursor:pointer; text-decoration:underline; color:blue; font-size:x-small;" '+
						'id="Helper:cancelAuctionItem' + i + '" ' +
						'cancelButtonHref="' + cancelButtonHref + '">Fast Cancel</span>';
					document.getElementById('Helper:cancelAuctionItem' + i).addEventListener('click', Helper.cancelAuctionItem, true);
				}
				var buttonCell = System.findNode("//input[contains(@value,'My Auctions')]/..");
				var insertCancelAllHere = buttonCell;
				var insertCancelAllBlock = document.createElement("SPAN");
				insertCancelAllBlock.innerHTML = "Cancel All";
				insertCancelAllBlock.style.cursor = "pointer";
				insertCancelAllBlock.style.textDecoration = "underline";
				insertCancelAllBlock.style.color = "blue";
				insertCancelAllBlock.style.fontSize = "x-small";
				insertCancelAllHere.innerHTML += "&nbsp;";
				insertCancelAllHere.appendChild(insertCancelAllBlock);
				insertCancelAllBlock.addEventListener('click', Helper.cancelAllAuction, true);
			}
		}
	},

	cancelAllAuction: function(evt) {
		var auctionItems = System.findNodes("//span[contains(@id,'Helper:cancelAuctionItem')]");
		for (var i = 0; i < auctionItems.length; i++) {
			var auctionItem = auctionItems[i];
			var cancelButtonHref = auctionItem.getAttribute("cancelButtonHref");
			System.xmlhttp(cancelButtonHref,
				Helper.cancelAuctionReturnMessage,
				{"target": auctionItem, "url": cancelButtonHref});
		}
	},

	cancelAuctionItem: function(evt) {
		var cancelButtonHref = evt.target.getAttribute("cancelButtonHref");
		System.xmlhttp(cancelButtonHref,
			Helper.cancelAuctionReturnMessage,
			{"target": evt.target, "url": cancelButtonHref});
	},

	cancelAuctionReturnMessage: function(responseText, callback) {
		var target = callback.target;
		var info = Layout.infoBox(responseText);
		target.style.cursor = 'default';
		target.style.textDecoration = 'none';
		if (info.search("You cancelled your auction") != -1) {
			target.style.color = 'green';
			target.style.fontWeight = 'bold';
			target.style.fontSize = 'small';
			target.innerHTML = "Cancelled";
		} else if (info!=="") {
			target.style.color = 'red';
			target.style.fontWeight = 'bold';
			target.style.fontSize = 'small';
			target.innerHTML = "Error: " + info;
		} else {
			target.style.color = 'red';
			target.style.fontSize = 'small';
			target.innerHTML = "Weird Error: check the Tools>Error Console";
			GM_log("Post the previous HTML and the following message to the code.google.com site or to the forum to help us debug this error");
			GM_log(callback.url);
		}
	},

	injectPoints: function() {
		Helper.currentFSP = System.findNode("//tr[td/a/img[contains(@src,'/skin/icon_points.gif')]]/td[4]").textContent.replace(/,/g,"")*1;

		var stamForFSPElement = System.findNode("//td[@width='60%' and contains(.,'+25 Current Stamina')]/../td[4]");
		var stamForFSPInjectHere = System.findNode("//td[@width='60%' and contains(.,'+25 Current Stamina')]");
		var stamFSPTextField = System.findNode("table/tbody/tr/td/input[@name='quantity']", stamForFSPElement);
		stamFSPTextField.type='current';
		stamFSPTextField.addEventListener('keyup', Helper.updateStamCount, true);
		stamForFSPInjectHere.innerHTML += ' <span style="color:blue" id="totalStam" type="current"><span>';

		stamForFSPElement = System.findNode("//td[@width='60%' and contains(.,'+10 Maximum Stamina')]/../td[4]");
		stamForFSPInjectHere = System.findNode("//td[@width='60%' and contains(.,'+10 Maximum Stamina')]");
		stamFSPTextField = System.findNode("table/tbody/tr/td/input[@name='quantity']", stamForFSPElement);
		stamFSPTextField.type='maximum';
		stamFSPTextField.addEventListener('keyup', Helper.updateStamCount, true);
		stamForFSPInjectHere.innerHTML += ' <span style="color:blue" id="totalStam" type="maximum"><span>';

		var goldForFSPElement = System.findNode("//td[@width='60%' and contains(.,'+50,000')]/../td[4]");
		goldForFSPElement.innerHTML = '<a href="' + System.server + '?cmd=marketplace">Sell at Marketplace</a>';
	},

	updateStamCount: function(evt) {
		var FSPvalue = evt.target.value*1;
		var type = evt.target.getAttribute("type");
		var injectHere = System.findNode("//span[@id='totalStam' and @type='"+type+"']");
		//cap the value if the user goes over his current FSP
		var color = 'red';
		var extraStam = Helper.currentFSP*(type=='current'?25:10);
		if (FSPvalue <= Helper.currentFSP) {
			extraStam = FSPvalue*(type=='current'?25:10);
			color = 'blue';
		}
		injectHere.style.color = color;
		injectHere.innerHTML = '(+' + extraStam + ' stamina)';
	},

	injectTitan: function() {
		System.xmlhttp("index.php?cmd=guild&subcmd=scouttower", Helper.getScoutTowerDetails);
	},

	getScoutTowerDetails: function(responseText) {
		var doc=System.createDocumentWithImages(responseText);
		if (isNewUI == 1) var scoutTowerTable = System.findNode("//table[tbody/tr/td/img[contains(@src,'/banners/scouttower.png')]]", doc);
		else var scoutTowerTable = System.findNode("//table[tbody/tr/td/img[contains(@src,'/skin/scouttower_header.jpg')]]", doc);
		if (scoutTowerTable) {
			if (isNewUI == 1) var titanTable = System.findNode("//table[tbody/tr/td/img[contains(@src,'/banners/titankilllog.png')]]");
			else var titanTable = System.findNode("//table[tbody/tr/td/img[contains(@src,'/skin/titankilllog_banner.jpg')]]");
			var newRow = titanTable.insertRow(0);
			var newCell = newRow.insertCell(0);
			newCell.align = "center";
			newCell.innerHTML = scoutTowerTable.rows[1].cells[0].innerHTML + "<br><br>" ;
			newRow = titanTable.insertRow(1);
			newCell = newRow.insertCell(0);
			newCell.innerHTML = scoutTowerTable.rows[8].cells[0].innerHTML;
		}
		Helper.injectScouttowerBuffLinks();
	},

	injectScouttower: function() {
		Helper.injectScouttowerBuffLinks();
		Helper.parseScoutTower();
		var titanTable = System.findNode("//table[@width='500']");
		for (var i = 1; i < titanTable.rows.length; i++) {
			var aRow = titanTable.rows[i];
			if (aRow.cells[2]) {
				var titanHP = aRow.cells[2].textContent;
				if (titanHP.search("-") != -1) break;
				var guildKills = aRow.cells[3].textContent;
				if (guildKills) {
					var titanHPArray = titanHP.split("/");
					var currentHP = parseInt(titanHPArray[0], 10);
					var totalHP = parseInt(titanHPArray[1], 10);
					var currentNumberOfKills = totalHP - currentHP;
					var numberOfKillsToSecure = Math.ceil(totalHP/2 + 1);

					var titanString = "<span style='color:red;'>" + (numberOfKillsToSecure - guildKills) + "</span> to secure";
					if (guildKills >= numberOfKillsToSecure) titanString = "Secured";
					else if ((numberOfKillsToSecure - guildKills) > currentHP) titanString = "<span style='color:red;'>Cannot Secure</span>";
					var killsPercent = (currentNumberOfKills == 0 ? 0 : guildKills * 100/currentNumberOfKills).toFixed(2);
					var killsTotPct = (guildKills * 100/totalHP).toFixed(2);
					aRow.cells[3].innerHTML += "<br><span style='color:blue;'> (" + killsPercent + "% Current <br>" +
					killsTotPct + "% Total<br>" + titanString + ")";
				}
			}
		}
	},

	injectScouttowerBuffLinks: function() {
		var titanTables = System.findNodes("//table[tbody/tr/td/font[.='Guild Member']]");
		if (titanTables) {
			for (var i = 0; i < titanTables.length; i++) {
				titanTable = titanTables[i];
				var shortList = new Array();
				if (titanTable.rows.length <= 1) continue;
				for (var j = 1; j < titanTable.rows.length; j++) {
					if (titanTable.rows[j].cells[1]) {
						var firstCell = titanTable.rows[j].cells[0];
						var playerID = /player_id=(\d+)/.exec(firstCell.innerHTML)[1];
						shortList.push(firstCell.textContent);
						firstCell.innerHTML += " <a style='color:blue;font-size:10px;' " +
							Layout.quickBuffHref(playerID) + ">[b]</a>";
					}
				}
				titanTable.rows[0].cells[0].innerHTML += " <a style='color:blue;font-size:10px;'>all</a>";
				var buffAllLink = titanTable.rows[0].cells[0].firstChild.nextSibling.nextSibling;
				buffAllLink.setAttribute("href","javascript:openWindow('index.php?cmd=quickbuff&t=" + shortList + "', 'fsQuickBuff', 618, 1000, ',scrollbars')");
			}
		}
	},

	injectQuestTracker: function() {
		var injectHere = System.findNode("//td[font/b[.='Quest Details']]");
		var tracking = false;
		tracking = Helper.isQuestBeingTracked(location.search);
		var questId = document.location.search.match(/quest_id=(\d+)/)[1];
		injectHere.innerHTML += '&nbsp;<a target="_blank" href="http://guide.fallensword.com/index.php?cmd=quests&subcmd=view&quest_id=' + questId +
			'"><img border=0 title="Search quest in Ultimate FSG" src="'+ System.imageServer + '/temple/1.gif"/></a>';
		
		var questName = System.findNode("//font[@size='2' and contains(.,'\"')]", injectHere);
		if (questName) {
			questName = questName.innerHTML;
			questName = questName.match(/"(.*)"/);
			if (questName && questName.length > 1) {
				questName = questName[1];
				injectHere.innerHTML += '&nbsp;<a href="http://wiki.fallensword.com/index.php?title=' + questName.replace(/ /g,'_') +
					'" target="_blank"><img border=0 title="Search for this quest on the Fallensword Wiki" src=' + System.imageServer + '/skin/fs_wiki.gif /></a>';
			}
		}

		if (tracking === true) {
			injectHere.innerHTML += '<br><input id="dontTrackThisQuest" data="' + location.search + '" type="button" value="Stop Tracking Quest" title="Tracks quest progress." class="custombutton">';
			document.getElementById("dontTrackThisQuest").addEventListener("click", Helper.dontTrackThisQuest, true);
		} else {
			injectHere.innerHTML += '<br><input id="trackThisQuest" type="button" value="Track Quest" title="Tracks quest progress." class="custombutton">';
			document.getElementById("trackThisQuest").addEventListener("click", Helper.trackThisQuest, true);
		}

		// insert next step
		//~ if (GM_getValue('showNextQuestSteps')) {
			//~ var table = System.findNode("//table[@width=500]");
			//~ if (!table.textContent.match(/\d+ xp/i)) {
				//~ System.xmlhttp('http://guide.fallensword.com/index.php?cmd=quests&subcmd=view&quest_id='+questId, Helper.showNextMissionStep);
			//~ }
		//~ }
	},

	showAllQuestSteps: function() {
		if (GM_getValue('showNextQuestSteps')) {
			$('div[id*="stage"]').show();
			document.getElementById("next_stage_button").style.display = "none";
		}
	},

	//~ showNextMissionStep: function(responseText) {
		//~ var doc=$(responseText.replace(/[\u0080-\uFFFF]+/g, ""));
		//~ //find the last row and so find out what stage they are currently on
		//~ var lastRow = $('td[bgcolor="#634A29"]:last').parent('tr');
		//~ var currentStage = lastRow.index()/2;
		//~ var parentTable = lastRow.parents('table:first')
		//~ var ufsgStageArray = $(doc).find('div[id*="stage_"]');
		//~ if (currentStage < ufsgStageArray.length || $('td:contains("You have not yet started this quest.")').length > 0) {
			//~ //parentTable.append("<tr><td height='1' bgcolor='#634A29'></td></tr>");
			//~ ufsgStageArray.each(function(index){
				//~ //for all the stages on the usfg for this quest, consider all the ones greater than the current stage
				//~ if ((currentStage-1) < index || $('td:contains("You have not yet started this quest.")').length > 0) {
					//~ parentTable.append($(this));
				//~ }
			//~ });
			//~ //fix the column widths of the hidden fields
			//~ $('div[id*="stage"]').find('table[width=600],table[width=800],td[width=600]').attr('width','');
			//~ //fix the links to ufsg
			//~ $('div[id*="stage"]').find('a').each(function(){
				//~ var ufsgHref = $(this).attr('href');
				//~ $(this).attr('href','http://guide.fallensword.com/' + ufsgHref);
				//~ $(this).attr('target','_blank');
			//~ });
			//~ //show hidden div's
			//~ $('div[id*="stage"]').show();
		//~ } else {
			//~ parentTable.append("<tr><td style='color:blue;'>No more steps</td></tr>");
		//~ }
	//~ },

	trackThisQuest: function(evt) {
		var currentTrackedQuest = GM_getValue("questBeingTracked").split(";");
		if (currentTrackedQuest.length > 0 && currentTrackedQuest[0].trim().length > 0) {
			GM_setValue("questBeingTracked", GM_getValue("questBeingTracked") + ";" + location.search);
		} else {
		GM_setValue("questBeingTracked", location.search);
		}
		window.location = window.location;
	},

	dontTrackThisQuest: function(evt) {
		var questNotToTrack = evt.target.getAttribute("data");
		var currentTrackedQuest = GM_getValue("questBeingTracked").split(";");
		if (currentTrackedQuest.length > 0) {
			var newTracked = "";
			for (var i = 0; i < currentTrackedQuest.length; i++) {
				if (currentTrackedQuest[i] != questNotToTrack) {
					if (newTracked.trim().length > 0) {
						newTracked += ";";
					}
					newTracked += currentTrackedQuest[i];

				}
			}
			GM_setValue("questBeingTracked", newTracked);
		} else {
		GM_setValue("questBeingTracked", "");
		}

		window.location = window.location;
	},

	getQuestInfo: function(responseText, callback) {
		var idx = callback.data;
		var doc=System.createDocument(responseText);
		var questInfoLink = System.findNode("//a[@id='qiLink" + idx + "']");
		var questNameNode = System.findNode("//font[b[.='Quest Details']]/following-sibling::font[1]", doc);
		if (questNameNode) {
			questInfoLink.innerHTML = questNameNode.innerHTML.replace (/"/g, "");
		} else {
			questInfoLink.innerHTML = "Unnamed Quest";
		}
		var questInfoElement = System.findNode("//span[@findme='questinfo" + idx + "']");
		var trackingHTMLElement = System.findNode("//font[@color='#003300']", doc);
		if (trackingHTMLElement) {
			questInfoElement.innerHTML = trackingHTMLElement.innerHTML;
		} else {
			questInfoElement.innerHTML = 'None';
		}
		document.getElementById("dontTrackThisQuest" + idx).addEventListener("click", Helper.dontTrackThisQuest, true);
	},

	prepareBountyData: function() {
		enableActiveBountyList = GM_getValue("enableActiveBountyList");
		enableWantedList = GM_getValue("enableWantedList");
		if (enableWantedList || enableActiveBountyList) {
			if (isNewUI == 1) {
				if (enableWantedList) {
					$('div#pCR').prepend("<div class='minibox'><span id='Helper:WantedListPlaceholder'></span></div>");
				}
				if (enableActiveBountyList) {
					$('div#pCR').prepend("<div class='minibox'><span id='Helper:BountyListPlaceholder'></span></div>");
				}
				Helper.retrieveBountyInfo(enableActiveBountyList, enableWantedList);
			} else {
				var rightColumnTable = System.findNode("//td[@id='rightColumn']/table");
				if (rightColumnTable) {
					if (enableWantedList) {
						if (!rightColumnTable)
							return;
						var info = rightColumnTable.insertRow(1);
						var cell = info.insertCell(0);
						cell.width = 120;
						cell.align = 'center';
						cell.innerHTML="<span id='Helper:WantedListPlaceholder'></span>";
					}
					if (enableActiveBountyList) {
						if (rightColumnTable) {
							info = rightColumnTable.insertRow(1);
							cell = info.insertCell(0);
							cell.width = 120;
							cell.align = 'center';
							cell.innerHTML="<span id='Helper:BountyListPlaceholder'></span>";
						}
					}
					Helper.retrieveBountyInfo(enableActiveBountyList, enableWantedList);
				}
			}
		}
	},

	retrieveBountyInfo: function(enableActiveBountyList, enableWantedList) {
		var bountyList = System.getValueJSON("bountylist");
		var wantedList = System.getValueJSON("wantedList");
		var bountyListRefreshTime = GM_getValue("bountyListRefreshTime");
		var bwNeedsRefresh = GM_getValue("bwNeedsRefresh");

		bountyListRefreshTime *= 1000;
		if (!bwNeedsRefresh) {
			if (bountyList) {
				if ((new Date()).getTime() - bountyList.lastUpdate.getTime() > bountyListRefreshTime) bwNeedsRefresh = true; // invalidate cache
			}
			if (wantedList && !bwNeedsRefresh) {
				if ((new Date()).getTime() - wantedList.lastUpdate.getTime() > bountyListRefreshTime) bwNeedsRefresh = true; // invalidate cache
			}
		}

		if (!bountyList || !wantedList || bwNeedsRefresh && (enableActiveBountyList || enableWantedList)) {
			var wantedList = {};
			wantedList.bounty = [];
			wantedList.isRefreshed = true;
			wantedList.lastUpdate = new Date();
			wantedList.wantedBounties = false;
			Helper.activeBountyListPosted = false;

			System.xmlhttp("index.php?cmd=bounty&page=1", Helper.parseBountyPageForWorld, {wantedList:wantedList});
		} else {
			if (enableWantedList) {
				wantedList.isRefreshed = false;
				Helper.injectWantedList(wantedList);
//alert("wantedList.isRefreshed = "+ wantedList.isRefreshed);
			}
			if (enableActiveBountyList) {
				bountyList.isRefreshed = false;
//alert("bountyList.isRefreshed = " + bountyList.isRefreshed);
				Helper.injectBountyList(bountyList);
			}
		}
	},

	parseBountyPageForWorld: function(details, callback) {
		var doc = System.createDocument(details);
		var page = System.findNode("//input[@name='page']", doc, $('body'));
		var curPage = parseInt(page.value,10);
		var maxPage = page.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1];

		var enableActiveBountyList = GM_getValue("enableActiveBountyList");
		var enableWantedList = GM_getValue("enableWantedList");
		GM_setValue("bwNeedsRefresh", false);
		if (enableWantedList) {

			var activeTable = System.findNode("//table[@width = '630' and contains(.,'Target')]", doc);
			var wantedNames = GM_getValue("wantedNames");
			var wantedArray = wantedNames.split(",");
			var wantedList = callback.wantedList;
			if (activeTable) {
				for (var i = 1; i < activeTable.rows.length - 2; i+=2) {
					for (var j = 0; j < wantedArray.length; j++) {
						var target = activeTable.rows[i].cells[0].firstChild.firstChild.firstChild.textContent;

						if (target == wantedArray[j].trim()) {
							wantedList.wantedBounties = true;
							bounty = {};
							bounty.target = target;
							bounty.link = activeTable.rows[i].cells[0].firstChild.firstChild.getAttribute("href");
							bounty.lvl = activeTable.rows[i].cells[0].firstChild.firstChild.nextSibling.textContent.replace(/\[/, "").replace(/\]/, "");

							bounty.offerer = activeTable.rows[i].cells[1].firstChild.firstChild.firstChild.textContent;

							bounty.reward = activeTable.rows[i].cells[2].textContent;
							bounty.rewardType = activeTable.rows[i].cells[2].firstChild.firstChild.firstChild.firstChild.nextSibling.firstChild.title;

							//bounty.rKills = activeTable.rows[i].cells[3].textContent;

							bounty.xpLoss = activeTable.rows[i].cells[3].textContent;

							bounty.posted = activeTable.rows[i].cells[4].textContent;

							bounty.tickets = activeTable.rows[i].cells[5].textContent;

							if (activeTable.rows[i].cells[6].textContent.trim() == "[active]") {
								bounty.active = true;
								bounty.accept = "";
							}
							else {
								bounty.active = false;
								bounty.accept = activeTable.rows[i].cells[6].firstChild.firstChild.getAttribute("onclick");
							}
							wantedList.bounty.push(bounty);
						}
					}
				}
			}
			if (curPage < maxPage) {
				System.xmlhttp("index.php?cmd=bounty&page=" + (curPage + 1), Helper.parseBountyPageForWorld, {wantedList:wantedList});
			} else {
				Helper.injectWantedList(wantedList);
			}
		}
		if (enableActiveBountyList && !Helper.activeBountyListPosted) {
			activeTable = System.findNode("//table[@width = 620]", doc);
			var bountyList = {};
			bountyList.bounty = [];
			bountyList.isRefreshed = true;
			bountyList.lastUpdate = new Date();

			if (activeTable) {
				if (!(/No bounties active/).test(activeTable.rows[1].cells[0].innerHTML)) {
					bountyList.activeBounties = true;
					for (i = 1; i < activeTable.rows.length - 2; i+=2) {
						bounty = {};
						bounty.target = activeTable.rows[i].cells[0].firstChild.firstChild.firstChild.textContent;
						bounty.link = activeTable.rows[i].cells[0].firstChild.firstChild.getAttribute("href");
						bounty.lvl = activeTable.rows[i].cells[0].firstChild.firstChild.nextSibling.textContent.replace(/\[/, "").replace(/\]/, "");
						bounty.reward = activeTable.rows[i].cells[2].textContent;
						bounty.rewardType = activeTable.rows[i].cells[2].firstChild.firstChild.firstChild.firstChild.nextSibling.firstChild.title;
						bounty.posted = activeTable.rows[i].cells[3].textContent;
						bounty.xpLoss = activeTable.rows[i].cells[4].textContent;
						bounty.progress = activeTable.rows[i].cells[5].textContent;

						bountyList.bounty.push(bounty);
					}
				}
				else {
					bountyList.activeBounties = false;
				}
			}
			Helper.injectBountyList(bountyList);
			Helper.activeBountyListPosted = true;
		}
	},

	injectBountyList: function(bountyList) {
		System.setValueJSON("bountylist", bountyList);
		var injectHere = document.getElementById("Helper:BountyListPlaceholder");
		var displayList = document.createElement("TABLE");
		//displayList.style.border = "1px solid #c5ad73";
		//displayList.style.backgroundColor = (bountyList.isRefreshed)?"#6a5938":"#4a3918";
		displayList.cellPadding = 1;
		displayList.width = 125;

		var aRow=displayList.insertRow(0); //bountyList.rows.length
		var aCell=aRow.insertCell(0);
		var output = "<h3>Active Bounties</h3><ol style='color:#FFF380;font-size:10px;list-style-type:decimal;margin-left:1px;margin-top:1px;margin-bottom:1px;padding-left:20px;'>"+
			"<nobr><span id='Helper:resetBountyList' style=' font-size:8px; cursor:pointer; text-decoration:underline;'>Reset</span><nobr><br>";

		if (bountyList.activeBounties === false) {
			output += "</ol> \f <ol style='color:orange;font-size:10px;list-style-type:decimal;margin-left:1px;margin-top:1px;margin-bottom:1px;padding-left:10px;'>" +
				"[No Active bounties]</ol>";
		}
		else {
			for (var i = 0; i < bountyList.bounty.length; i++) {
				var mouseOverText = "";
				mouseOverText += "<div>Level:  " + bountyList.bounty[i].lvl +
				"<br/>Reward: " + bountyList.bounty[i].reward + " " +bountyList.bounty[i].rewardType +
				"<br/>XP Loss Remaining: " + bountyList.bounty[i].xpLoss +
				"<br/>Progress:  " + bountyList.bounty[i].progress;
				mouseOverText += "</div>";

//				output += " href='" + bountyList.bounty[i].link + "'>" + bountyList.bounty[i].target +"</a></li>";
				output += "<li style='padding-bottom:0px;'>";
				output += "<a style='color:red;font-size:10px;'";
				output += "href='" + System.server + "index.php?cmd=attackplayer&target_username=" + bountyList.bounty[i].target + "'>[a]</a>&nbsp;";

				output += "<a style='color:#A0CFEC;font-size:10px;'";
				output += "href='" + System.server + "index.php?cmd=message&target_player=" + bountyList.bounty[i].target + "'>[m]";
				output += "</a> &nbsp;"
				output += "<a href='"+bountyList.bounty[i].link+"' class='tipped' data-tipped='"+mouseOverText+"' style='color:#FFF380;font-size:10px;'>" + bountyList.bounty[i].target +"</a></li>";
			}
		}

		aCell.innerHTML = output;
		var breaker=document.createElement("BR");
		injectHere.parentNode.insertBefore(breaker, injectHere.nextSibling);
		injectHere.parentNode.insertBefore(displayList, injectHere.nextSibling);
		var test = document.getElementById('Helper:resetBountyList').addEventListener('click', Helper.resetBountyList, true);
	},

	resetBountyList: function(event) {
		System.setValueJSON("bountylist", null);
		window.location = window.location;
	},

	injectWantedList: function(wantedList) {
		System.setValueJSON("wantedList", wantedList);
		var injectHere = document.getElementById("Helper:WantedListPlaceholder");
		var displayList = document.createElement("TABLE");
		//displayList.style.border = "1px solid #c5ad73";
		//displayList.style.backgroundColor = (wantedList.isRefreshed)?"#6a5938":"#4a3918";
		displayList.cellPadding = 3;
		displayList.width = 125;

		var aRow=displayList.insertRow(0);
		var aCell=aRow.insertCell(0);
		var output = "<h3>Wanted Bounties</h3><ol style='color:#FFF380;font-size:10px;list-style-type:decimal;margin-left:1px;margin-top:1px;margin-bottom:1px;padding-left:12px;'>"+
			"<nobr> <span id='Helper:resetWantedList' font-size:8px; cursor:pointer; text-decoration:underline;'>Reset</span></nobr><br>";

		if (wantedList.wantedBounties === false) {
			output += "</ol> \f <ol style='color:orange;font-size:10px;list-style-type:decimal;margin-left:1px;margin-top:1px;margin-bottom:1px;padding-left:7px;'>" +
				"[No wanted bounties]</ol>";
		}
		else {
			for (var i = 0; i < wantedList.bounty.length; i++) {
				var mouseOverText = "\"<div style=\\'text-align:center;width:205px;\\'>Target Level:  " + wantedList.bounty[i].lvl +
					"<br/>Offerer: "+ wantedList.bounty[i].offerer +
					"<br/>Reward: " + wantedList.bounty[i].reward + " " +wantedList.bounty[i].rewardType +
					"<br/>Req. Kills: " + wantedList.bounty[i].rKills +
					"<br/>XP Loss Remaining: " + wantedList.bounty[i].xpLoss +
					"<br/>Posted: " + wantedList.bounty[i].posted +
					"<br/>Tickets Req.:  " + wantedList.bounty[i].tickets;
				mouseOverText += "</div>\" ";

				output += "<li style='padding-bottom:0px;margin-left:5px;'>";
				output += "<a style= 'font-size:10px;";
				if (wantedList.bounty[i].accept)
					output += "color:rgb(0,255,0); cursor:pointer; text-decoration:underline blink;' title = 'Accept Bounty' 'onclick=\"" + wantedList.bounty[i].accept + "\"'>[a]</a>&nbsp;";
				else
					output += "color:red;' href='" + System.server + "index.php?cmd=attackplayer&target_username=" + wantedList.bounty[i].target + "'>[a]</a>&nbsp;";
				output += "<a style='color:#A0CFEC;font-size:10px;'";
				output += "href='" + System.server + "index.php?cmd=message&target_player=" + wantedList.bounty[i].target + "'>[m]";
				output += "</a> &nbsp;<a class=tipped data-tipped=" + mouseOverText;
				output += "style='color:";
				output += "#FFF380";
				output += ";font-size:10px;'";
				output += " href='" + wantedList.bounty[i].link + "'>" + wantedList.bounty[i].target +"</a></li>";
			}
		}

		aCell.innerHTML = output;
		var breaker=document.createElement("BR");
		injectHere.parentNode.insertBefore(breaker, injectHere.nextSibling);
		injectHere.parentNode.insertBefore(displayList, injectHere.nextSibling);
		document.getElementById('Helper:resetWantedList').addEventListener('click', Helper.resetWantedList, true);
	},

	resetWantedList: function(event) {
		System.setValueJSON("wantedList", null);
		window.location = window.location;
	},

	prepareAllyEnemyList: function() {
		if (GM_getValue("enableAllyOnlineList") || GM_getValue("enableEnemyOnlineList")) {
			if (isNewUI == 1) {
				$('div#pCR').prepend("<div class='minibox'><span id='Helper:AllyEnemyListPlaceholder'></span></div>");
			} else { //old UI
				var rightColumnTable = System.findNode("//td[@id='rightColumn']/table");
				if (rightColumnTable) {
					var info = rightColumnTable.insertRow(2);
					var cell = info.insertCell(0);
					cell.innerHTML="<span id='Helper:AllyEnemyListPlaceholder'></span>";
				}
			}
			Helper.retrieveAllyEnemyData(false);
		}
	},

	retrieveAllyEnemyData: function(refreshAllyEnemyDataOnly) {
		var contactList = System.getValueJSON("contactList");
		var allyEnemyOnlineRefreshTime = GM_getValue("allyEnemyOnlineRefreshTime");
		allyEnemyOnlineRefreshTime *= 1000;
		if (contactList) {
			if ((new Date()).getTime() - contactList.lastUpdate.getTime() > allyEnemyOnlineRefreshTime) contactList = null; // invalidate cache
		}

		if (!contactList || refreshAllyEnemyDataOnly) {
			System.xmlhttp("index.php?cmd=profile", Helper.parseProfileForWorld, refreshAllyEnemyDataOnly);
		} else {
			contactList = System.getValueJSON("contactList");
			contactList.isRefreshed = false;
			Helper.injectAllyEnemyList(contactList);
		}
	},

	parseProfileForWorld: function(details, refreshAllyEnemyDataOnly) {
		var doc=System.createDocument(details);
		var alliesTable = System.findNode("//div[strong[.='Allies']]/following-sibling::div[1]/table[1]",doc);
		var enemiesTable = System.findNode("//div[strong[.='Enemies']]/following-sibling::div[1]/table[1]",doc);
		var contactList = System.getValueJSON("contactList");
		if (!contactList) {
			contactList = {};
			contactList.contacts = [];
		}
		contactList.contacts.forEach(function(e) {e.status="Deleted";});
		if (alliesTable && enemiesTable) {
			var alliesDetails=alliesTable.getElementsByTagName("TABLE");

			for (i=0;i<alliesDetails.length;i++) {
				var aTable = alliesDetails[i];
				var contactLink   = aTable.rows[0].cells[1].firstChild;
				var contactId     = System.intValue((/[0-9]+$/).exec(contactLink.getAttribute("href"))[0]);
				var contactName   = contactLink.textContent;
				var contactStatus = aTable.rows[0].cells[0].firstChild.title;
				var lastActivity = /<td>Last Activity:<\/td><td>(\d+)d (\d+)h (\d+)m (\d+)s<\/td>/.exec($(contactLink).data('tipped'));
				var lastActivityDays = parseInt(lastActivity[1],10);
				var lastActivityHours = parseInt(lastActivity[2],10) + (lastActivityDays*24);
				var lastActivityMinutes = parseInt(lastActivity[3],10) + (lastActivityHours*60);

				var aContact;

				// find contact in contact list, to modify data instead of replacing it

				var findContacts = contactList.contacts.filter(function (e) {return e.id==contactId;});
				if (findContacts.length>0) {
					aContact = findContacts[0];
				}
				else { // contact was not found, must be new
					aContact = {};
					// You can still modify an object, even if you have added it to something else
					contactList.contacts.push(aContact);
					aContact.firstSeen = new Date();
					aContact.status = "Offline"; // new players are supposed to be offline
				}

				if (aContact.status == "Offline" && contactStatus=="Online") {
					aContact.loggedInAt = new Date();
				}

				if (!aContact.loggedInAt) {
					aContact.loggedInAt = new Date();
				}

				aContact.status = contactStatus;
				aContact.id     = contactId;
				aContact.name   = contactName;
				aContact.type   = "Ally";
				aContact.lastActivityMinutes = lastActivityMinutes;
			}
			var enemiesDetails=enemiesTable.getElementsByTagName("TABLE");

			for (i=0;i<enemiesDetails.length;i++) {
				aTable = enemiesDetails[i];
				contactLink   = aTable.rows[0].cells[1].firstChild;
				contactId     = System.intValue((/[0-9]+$/).exec(contactLink.getAttribute("href"))[0]);
				contactName   = contactLink.textContent;
				contactStatus = aTable.rows[0].cells[0].firstChild.title;
				var lastActivity = /<td>Last Activity:<\/td><td>(\d+)d (\d+)h (\d+)m (\d+)s<\/td>/.exec($(contactLink).data('tipped'));
				var lastActivityDays = parseInt(lastActivity[1],10);
				var lastActivityHours = parseInt(lastActivity[2],10) + (lastActivityDays*24);
				var lastActivityMinutes = parseInt(lastActivity[3],10) + (lastActivityHours*60);

				var aContact;

				// find contact in contact list, to modify data instead of replacing it

				findContacts = contactList.contacts.filter(function (e) {return e.id==contactId;});
				if (findContacts.length>0) {
					aContact = findContacts[0];
				}
				else { // contact was not found, must be new
					aContact = {};
					// You can still modify an object, even if you have added it to something else
					contactList.contacts.push(aContact);
					aContact.firstSeen = new Date();
					aContact.status = "Offline"; // new players are supposed to be offline
				}

				if (aContact.status == "Offline" && contactStatus=="Online") {
					aContact.loggedInAt = new Date();
				}

				if (!aContact.loggedInAt) {
					aContact.loggedInAt = new Date();
				}

				aContact.status = contactStatus;
				aContact.id     = contactId;
				aContact.name   = contactName;
				aContact.type   = "Enemy";
				aContact.lastActivityMinutes = lastActivityMinutes;
			}
			// remove not existing players
			contactList.contacts = contactList.contacts.filter(function(e) {return e.status!="Deleted";});
			// damn, I love javascript array functions :)

			contactList.lastUpdate = new Date();
			contactList.isRefreshed = true;
			System.setValueJSON("contactList", contactList);
			if (!refreshAllyEnemyDataOnly) Helper.injectAllyEnemyList(contactList);
		}
	},

	injectAllyEnemyList: function(contactList) {
		enableAllyOnlineList = GM_getValue("enableAllyOnlineList");
		enableEnemyOnlineList = GM_getValue("enableEnemyOnlineList");
		if (!enableAllyOnlineList && !enableEnemyOnlineList) {return;}
		var onlineAlliesEnemies = contactList.contacts.filter(function (e) {return (e.status=="Online");});
		if (!enableAllyOnlineList) onlineAlliesEnemies = onlineAlliesEnemies.filter(function (e) {return (e.type!="Ally");});
		if (!enableEnemyOnlineList) onlineAlliesEnemies = onlineAlliesEnemies.filter(function (e) {return (e.type!="Enemy");});
		if (onlineAlliesEnemies.length === 0) {return;}
		var playerId = Layout.playerId();
		var injectHere = document.getElementById("Helper:AllyEnemyListPlaceholder");
		var displayList = document.createElement("TABLE");
		//displayList.style.border = "1px solid #c5ad73";
		//displayList.style.backgroundColor = (contactList.isRefreshed)?"#6a5938":"#4a3918";
		displayList.cellPadding = 3;
		displayList.width = 125;

		var aRow=displayList.insertRow(displayList.rows.length);
		var aCell=aRow.insertCell(0);
		output = '<h3>Allies/Enemies</h3><center><font color="white" size=1><i><b>Online Contacts</b> <span id="Helper:resetAllyEnemyList" style="font-size:8px; cursor:pointer; text-decoration:underline;">Reset</span></i></font></center>'+
		'<table width="110" cellpadding="0" cellspacing="0"><tbody>'+
			'<tr><td colspan="2" height="5"></td></tr>';

		var hideBuffSelected = GM_getValue("hideBuffSelected");
		for (var i=0;i<onlineAlliesEnemies.length;i++) {
			var contact=onlineAlliesEnemies[i];
			var contactColor = "";
			if (((new Date()) - contact.loggedInAt) < 30000) { // just logged in
				contactColor = "orange";
			}
			else if (contact.type == "Ally") {
				if (contact.lastActivityMinutes < 2) contactColor = "DodgerBlue";
				else if (contact.lastActivityMinutes < 5) contactColor = "LightSkyBlue";
				else  contactColor = "PowderBlue";
			}
			else if (contact.type == "Enemy") {
				contactColor = "red";
				if (contact.lastActivityMinutes < 2) contactColor = "red";
				else if (contact.lastActivityMinutes < 5) contactColor = "PaleVioletRed";
				else contactColor = "Pink";
			}
			else {
				contactColor = "white";
			}
			output +=
				'<tr>'+
					'<td align="left">'+
						'<span style="color:' + contactColor + '; font-size:x-small; visibility:hidden;">' + (hideBuffSelected?'':'+') + '</span>'+
						'<a style="color:' + contactColor + '; font-size:x-small;" href="index.php?cmd=profile&player_id=' + contact.id + '">' + contact.name + '</a>'+
					'</td>'+
					'<td align="right"><span style="color:#FFFF00; font-size:x-small;">'+
						'<a href="index.php?cmd=message&target_player=' + contact.name + '" class="tipped" data-tipped="Send Message"><font color="#FFFF00">M</font></a>'+
						'&nbsp;<a href="javascript:openWindow(\'index.php?cmd=quickbuff&t=' + contact.name + '\', \'fsQuickBuff\', 618, 1000, \',scrollbars\');" class="tipped" data-tipped="Quick Buff"><font color="#FFFF00">B</font></a>'+
						'&nbsp;<a href="index.php?cmd=trade&subcmd=createsecure&target_username=' + contact.name + '" class="tipped" data-tipped="Secure Trade"><font color="#FFFF00">S</font></a>'+
						'&nbsp;<a href="index.php?cmd=trade&target_player=' + contact.name + '" class="tipped" data-tipped="Send to Player"><font color="#FFFF00">T</font></a>'+
					'</span></td>'+
				'</tr>';
		}
		output += '</tbody></table>';


		aCell.innerHTML = output;
		injectHere.parentNode.align = 'center';
		injectHere.parentNode.width = '120';

		var breaker=document.createElement("BR");
		injectHere.parentNode.insertBefore(breaker, injectHere.nextSibling);
		injectHere.parentNode.insertBefore(displayList, injectHere.nextSibling);
		document.getElementById('Helper:resetAllyEnemyList').addEventListener('click', Helper.resetAllyEnemyList, true);
	},

	resetAllyEnemyList: function(evt) {
		GM_setValue("contactList","");
		window.location = window.location;
	},


	injectAuctionSTCheck: function() {
		var injectCell = System.findNode("//table[@width='650']/tbody/tr/td[contains(.,'Use the form below')]");
		if (!injectCell) {
			var injectCell = System.findNode("//table[@width='650']/tbody/tr/td[contains(.,'Now select the minimum')]");
		}
		if (injectCell) {
			injectCell.innerHTML = "<span id='SecureTradeCheckMessage' style='color:blue;'>Existing ST check in progress ...</span>";
			System.xmlhttp("index.php?cmd=trade&subcmd=secure", Helper.checkExistingSecureTrades, true);
		}
	},


	bulkListAll: function() {
		var bulkSellAuctionLength = System.findNode("//select[@id='Helper:bulkSellAuctionLength']");
		var bulkSellAuctionCurrency = System.findNode("//select[@id='Helper:bulkSellAuctionCurrency']");
		var bulkSellAuctionMinBid = System.findNode("//input[@id='Helper:bulkSellMinBid']");
		var bulkSellAuctionBuyNow = System.findNode("//input[@id='Helper:bulkSellBuyNow']");

		var potentialAuctions = System.findNodes("//span[contains(@id,'Helper:bulkListSingle')]");
		for (var i=0;i<potentialAuctions.length;i++) {
			var potentialAuction = potentialAuctions[i];
			var invID = /Helper:bulkListSingle(\d+)/.exec(potentialAuction.getAttribute("id"))[1];
			var bulkSellHref = System.server + "index.php?cmd=auctionhouse&subcmd=docreate&inv_id=" + invID +
				"&auction_length=" + bulkSellAuctionLength.value + "&currency=" + bulkSellAuctionCurrency.value +
				"&minbid=" + bulkSellAuctionMinBid.value + "&buynow=" + bulkSellAuctionBuyNow.value;
			System.xmlhttp(bulkSellHref,
				Helper.bulkListSingleReturnMessage,
				{"target": potentialAuction});
		}
	},

	bulkListSingle: function(evt) {
		var itemInvId = evt.target.getAttribute("itemInvId");
		var bulkSellAuctionLength = System.findNode("//select[@id='Helper:bulkSellAuctionLength']");
		var bulkSellAuctionCurrency = System.findNode("//select[@id='Helper:bulkSellAuctionCurrency']");
		var bulkSellAuctionMinBid = System.findNode("//input[@id='Helper:bulkSellMinBid']");
		var bulkSellAuctionBuyNow = System.findNode("//input[@id='Helper:bulkSellBuyNow']");

		var bulkSellHref = System.server + "index.php?cmd=auctionhouse&subcmd=docreate&inv_id=" + itemInvId +
			"&auction_length=" + bulkSellAuctionLength.value + "&currency=" + bulkSellAuctionCurrency.value +
			"&minbid=" + bulkSellAuctionMinBid.value + "&buynow=" + bulkSellAuctionBuyNow.value;
		System.xmlhttp(bulkSellHref,
			Helper.bulkListSingleReturnMessage,
			{"target": evt.target, "url": bulkSellHref});
	},

	bulkListSingleReturnMessage: function(responseText, callback) {
		var target = callback.target;
		var info = Layout.infoBox(responseText);
		if (info.search("Auction placed successfully!") != -1) {
			target.style.color = 'green';
			target.style.fontWeight = 'bold';
			target.style.fontSize = 'small';
			target.innerHTML = "Auction Listed";
		} else if (info!=="") {
			target.style.color = 'red';
			target.style.fontWeight = 'bold';
			target.style.fontSize = 'small';
			target.innerHTML = "Error: " + info;
		} else {
			target.style.color = 'red';
			target.style.fontSize = 'small';
			target.innerHTML = "Weird Error: check the Tools>Error Console";
			GM_log("Post the previous HTML and the following message to the code.google.com site or to the forum to help us debug this error");
			GM_log(callback.url);
		}
	},

	toggleCheckAllPlants: function(evt) {
		var plantRE = new RegExp(evt.target.getAttribute("plantRE"));
		var tradeType = evt.target.getAttribute("tradetype");
		var allItems = System.findNodes("//input[@type='checkbox' and @name='sendItemList[]']");
		//var ignoreST = document.getElementById("Helper:ignoreSTitems").checked;
		var selectST= $('input[id="Helper:useItemsInSt"]').is(':checked');
		var limit = parseInt($('input[id="Helper:SendHowMany"]').attr('value').replace(/[^0-9]/g,''));
		
		if (allItems) {
			var itemsLen = allItems.length;
			if(tradeType=='secure') {itemsLen=Math.min(100,itemsLen);}
			if(limit>0){itemsLen=Math.min(limit,itemsLen);}
			for (var i = 0; i < allItems.length; i++){
				var theImgNode = allItems[i].parentNode.parentNode.previousSibling.firstChild.firstChild.firstChild;
				if(plantRE.exec(theImgNode.getAttribute("src"))) {
					if((/3px solid red/.exec(theImgNode.parentNode.parentNode.style.border))&&!selectST) //item in an ST, skip it
						continue;//alert("asdf");
					if (allItems[i].checked)
						allItems[i].checked = false;
					else
						allItems[i].checked = true;
					if(--itemsLen == 0)
						i=allItems.length+1;
				}
			}
		}
	},

	insertItemsToTrade: function(){
		//remove the HCS table... building it myself
		var itemTable=$('<table></table>');
		var items=0;
		var fromFolder=$('input[id="Helper:CurrentFolder"]').val();
		for(i=0;i<Helper.inventory.items.length;i++){
			shouldDisplay=true;
			if(!(fromFolder==0) && Helper.inventory.items[i].folder_id != fromFolder) { shouldDisplay=false;}
			if(Helper.inventory.items[i].equipped) { shouldDisplay=false;}
			//if(!selectST && Helper.inventory.items[i].is_in_st){ shouldDisplay=false;}
			if(shouldDisplay){
				if (items % 6 === 0) {
					insertAt = $('<tr></tr>');
					itemTable.append(insertAt);
					for(x=0;x<6;x++){
						insertAt.append('<td align="center" id="Helper:itemTD'+(items+x)+'"></td>');
					}
				}
				style='';
				if(Helper.inventory.items[i].is_in_st){
					style=' style="border: 3px solid red"';
				}

				itemTable.find("td[id='Helper:itemTD"+items+"']").append('<table border=0 cellpadding="0" cellspacing="0"><tr><td background="'+System.imageServer
				+'/inventory/2x3.gif" width="60" height="90" '+style+'><center><img src="'+System.imageServer+'/items/'+Helper.inventory.items[i].item_id
				+'.gif" class="tipped" data-tipped-options="skin: \'fsItem\'" data-tipped="fetchitem.php?item_id='+Helper.inventory.items[i].item_id+'&inv_id='
				+Helper.inventory.items[i].inv_id+'&t=1&p='+Helper.inventory.player_id+'&currentPlayerId='+Helper.inventory.player_id
				+'" border=0></center></td></tr><tr><td align="center"><input type="checkbox" value="'+Helper.inventory.items[i].inv_id
				+'" name="sendItemList[]" ></td></tr></table>');
				items++;
			}
		}
		$("table[id='item-list']").children().remove();
		$("table[id='item-list']").append(itemTable.html());

	},
	injectTrade: function() {
		
		$("table[id='item-list']").closest('tr').before('<tr id="Helper:selectMultiple"></tr>').before('<tr id="Helper:folderSelect"></tr>').before('<tr id="Helper:showSTs"></tr>');
		//$("tr[id='Helper:selectMultiple']").append('<td colspan=6>Multiple Select</td>');
		Helper.makeSelectAllInTrade();

		$.ajax({
			url: '?cmd=export&subcmd=inventory',
			success: function( data ) {
				Helper.inventory = data;
			},
			async: false, //wait for responce
			dataType: 'json'
		});
		for(i=0;i<Helper.inventory.items.length;i++){
				if(Helper.inventory.items[i].is_in_st){
					$('input[value="'+Helper.inventory.items[i].inv_id+'"]').closest('tr').prev().find('td[background="' + System.imageServer + '/inventory/2x3.gif"]').css('border','3px solid red');
				}
		}

//append main folder
		var folders='<input type="hidden" id="Helper:CurrentFolder" value=0 /><span id="FolderID0" fid=0 style="cursor:pointer; text-decoration:underline;">All</span> <span id="FolderID-1" fid="-1" style="cursor:pointer; text-decoration:underline;">Main</span> ';
		for (var key in Helper.inventory.folders){//Helper.inventory.folders[key]
			folders+='<span id="FolderID'+key+'" fid='+key+' style="cursor:pointer; text-decoration:underline;">'+Helper.inventory.folders[key]+'</span> ';
			//folders+='<label><input type="radio" name="all" value='+key+' /> '+Helper.inventory.folders[key]+'</label>, ';
		}
		$("tr[id='Helper:folderSelect']").append('<td colspan=6>'+folders+'</td>');//retrieving folder names...

		$('span[id*="FolderID"]').click(function(){
			//alert($(this).attr('fid'));
			$('input[id="Helper:CurrentFolder"]').attr('value',$(this).attr('fid'));
			//alert($('input[id="Helper:CurrentFolder"]').val());
			Helper.insertItemsToTrade();

		});


		$("tr[id='Helper:showSTs']").append("<td align='center' colspan=6><label id='Helper:useItemsInStCont'><input type='checkbox' id='Helper:useItemsInSt' checked /> Select items in ST</label></td>");
		//Helper.insertItemsToTrade(); //rebuilds item list - not required - takes a second to load and mostly not needed.
	},

	makeSelectAllInTrade: function(injectHere, type) {
		var space = new String(' &nbsp ');
		var sendClasses = GM_getValue("sendClasses");

		eval('var itemList=['+sendClasses+'];');
		var output = ''
		var allResRE='';
		for (var i=0;i<itemList.length;i++) {
			output += '<span plantRE="'+itemList[i][1]+'" style="cursor:pointer; text-decoration:underline;"' +
				'id="Helper:checkAll'+i+'" tradetype="'+type+'">'+itemList[i][0]+'</span> &ensp;';
			allResRE+=itemList[i][1]+'|';
		}
		output='Select: &ensp;<span style="cursor:pointer; text-decoration:underline;" plantRE=".*" id="Helper:checkAll'+(i++)+'" tradetype="'+type+'">' +
			'All Items</span> &ensp; ' +
			'<span plantRE="'+allResRE.substr(0,allResRE.length-1)+'" style="cursor:pointer; text-decoration:underline;"' +
				'id="Helper:checkAll'+i+'" tradetype="'+type+'">All Resources</span> &ensp;' + output;
		output += 'Select <input id="Helper:SendHowMany" type="text" class="custominput" value="all" size=3 />';
		$("tr[id='Helper:selectMultiple']").append('<td colspan=6>'+output+'</td>');
		for (var i=0;i<itemList.length+1;i++) {
			document.getElementById("Helper:checkAll"+i).addEventListener('click', Helper.toggleCheckAllPlants, true);
		}
	},

	makePageHeader: function(title, comment, spanId, button) {
		return '<table width=100%><tr style="background-color:#CD9E4B">'+
			'<td width="90%" nobr><b>&nbsp;'+title+'</b>'+
			(comment===''?'':'&nbsp;('+comment+')')+
			'<td width="10%" nobr style="font-size:x-small;text-align:right">'+
			(spanId?'[<span style="text-decoration:underline;cursor:pointer;" id="'+spanId+'">'+button+'</span>]':'')+
			'</td></tr></table>';
	},

	makePageHeaderTwo: function(title, comment, spanId, button, spanId2, button2) {
		return '<table width=100%><tr style="background-color:#CD9E4B">'+
			'<td width="90%" nobr><b>&nbsp;'+title+'</b>'+
			(comment===''?'':'&nbsp;('+comment+')')+
			'<td width="10%" nobr style="font-size:x-small;text-align:right">'+
			(spanId?'[<span style="text-decoration:underline;cursor:pointer;" id="'+spanId+'">'+button+'</span>]':'')+
			(spanId2?'[<span style="text-decoration:underline;cursor:pointer;" id="'+spanId2+'">'+button2+'</span>]':'')+
			'</td></tr></table>';
	},

	makePageTemplate: function(title, comment, spanId, button, divId) {
		return Helper.makePageHeader(title, comment, spanId, button)+
			'<div style="font-size:small;" id="'+divId+'"></div>';
	},

	injectAttackPlayer: function() {
		var b = System.findNode("//input[contains(@value, 'Activate!')]");
		if (b !== null) {
			var oldOnclick = b.getAttribute("onClick");
			b.setAttribute("onClick", "if (confirm('Are you sure you want to activate PvP Prestige?')) { " + oldOnclick + "}");
		}
		if (!GM_getValue("enableAttackHelper")) {return;}
		//inject current stats, buffs and equipment
		var attackPlayerTable = System.findNode("//table[tbody/tr/td/font/b[.='Attack Player (PvP)']]");
		if (!attackPlayerTable) {return;}
		var targetPlayer = /target_username=([a-zA-Z0-9]+)/.exec(location.search);
		if (targetPlayer) {
			var output = "<center><table width='625' cellspacing='0' cellpadding='0' bordercolor='#000000' border='0' style='border-style: solid; border-width: 1px;'><tbody>";
			output += "<tr style='text-align:center;' bgcolor='#cd9e4b'><td width='350' style='border-style: solid; border-width: 1px;'>Attacker</td><td width='275' style='border-style: solid; border-width: 1px;'>Defender</td></tr>";
			output += "<tr style='text-align:center;'><td style='border-style: solid; border-width: 1px;'><span id='Helper:attackPlayerSelfStatData'><font color='green'>Gathering your stats ...</font></span></td>"+
				"<td style='border-style: solid; border-width: 1px;'><span id='Helper:attackPlayerDefenderStatData'><font color='green'>Gathering defender stats ...</font></span></td></tr>";
			output += "<tr style='text-align:center;'><td style='border-style: solid; border-width: 1px;'><span id='Helper:attackPlayerSelfBuffData'><font color='green'>Gathering your buffs ...</font></span></td>" +
				"<td style='border-style: solid; border-width: 1px;'><span id='Helper:attackPlayerDefenderBuffData'><font color='green'>Gathering defender buffs ...</font></span></td></tr>";
			output += "</tbody></table><center>";

			attackPlayerTable.rows[4].cells[0].innerHTML = output;
			
			//System.xmlhttp("index.php?cmd=profile", Helper.getSelfProfileStatsAndBuffs);
			System.xmlhttp("index.php?cmd=profile", Helper.getProfileStatsAndBuffs, {"anchor1":"attackPlayerSelfStatData","anchor2":"attackPlayerSelfBuffData"});
			System.xmlhttp("index.php?cmd=findplayer&search_active=1&search_level_max=&search_level_min=&search_username="+targetPlayer[1]+"&search_show_first=1", Helper.getProfileStatsAndBuffs, {"anchor1":"attackPlayerDefenderStatData","anchor2":"attackPlayerDefenderBuffData"});
			//insert blank row
			var newRow = attackPlayerTable.insertRow(5);
			var newCell = newRow.insertCell(0);
			newCell.innerHTML = "&nbsp;";
		}
	},

	getProfileStatsAndBuffs: function(responseText, callback) {
		var doc = System.createDocument(responseText);
		//stats
		var vlTextElement = System.findNode("//td[a/b[.='VL'] or b/a[.='VL']]", doc);
		var vlValueElement = vlTextElement.nextSibling;
		var pvpTextElement = System.findNode("//td[b[contains(.,'PvP')]]", doc);
		var pvpValueElement = pvpTextElement.nextSibling;
		var attackTextElement = System.findNode("//td[b[contains(.,'Attack:')]]", doc);
		var attackValueElement = attackTextElement.nextSibling;
		var defenseTextElement = System.findNode("//td[b[contains(.,'Defense:')]]", doc);
		var defenseValueElement = defenseTextElement.nextSibling;
		var armorTextElement = System.findNode("//td[b[contains(.,'Armor:')]]", doc);
		var armorValueElement = armorTextElement.nextSibling;
		var damageTextElement = System.findNode("//td[b[contains(.,'Damage:')]]", doc);
		var damageValueElement = damageTextElement.nextSibling;
		var hpTextElement = System.findNode("//td[b[contains(.,'Health:')]]", doc);
		var hpValueElement = hpTextElement.nextSibling;
		var goldTextElement = System.findNode("//td[b[contains(.,'Gold:')]]", doc);
		var goldValueElement = goldTextElement.nextSibling;
		var pvpProtElement = System.findNode("//td[contains(.,'PvP') and contains(.,'Protection')]", doc);
		var lastActivityElement = System.findNode("//p[contains(.,'Last Activity:')]", doc);
		var output = "<table width='100%'><tbody>";
		if (lastActivityElement) output += "<tr><td colspan=4 style='text-align:center;'>" + lastActivityElement.innerHTML + "</td></tr>";
		output += "<tr><td width='15%' style='text-align:right;'>" + vlTextElement.innerHTML + "</td><td width='30%' style='text-align:left;'>" + vlValueElement.innerHTML + "</td>" +
			"<td width='25%' style='text-align:right;'>" + pvpTextElement.innerHTML + "</td><td width='30%' style='text-align:left;'>" + pvpValueElement.innerHTML + "</td></tr>";
		output += "<tr><td width='15%' style='text-align:right;'>" + attackTextElement.innerHTML + "</td><td width='30%' style='text-align:left;'>" + attackValueElement.innerHTML + "</td>" +
			"<td width='25%' style='text-align:right;'>" + defenseTextElement.innerHTML + "</td><td width='30%' style='text-align:left;'>" + defenseValueElement.innerHTML + "</td></tr>";
		output += "<tr><td width='15%' style='text-align:right;'>" + armorTextElement.innerHTML + "</td><td width='30%' style='text-align:left;'>" + armorValueElement.innerHTML + "</td>" +
			"<td width='25%' style='text-align:right;'>" + damageTextElement.innerHTML + "</td><td width='30%' style='text-align:left;'>" + damageValueElement.innerHTML + "</td></tr>";
		output += "<tr><td width='15%' style='text-align:right;'>" + hpTextElement.innerHTML + "</td><td width='30%' style='text-align:left;'>" + hpValueElement.innerHTML + "</td>" +
			"<td width='25%' style='text-align:right;'>" + goldTextElement.innerHTML + "</td><td width='30%' style='text-align:left;'>" + goldValueElement.innerHTML + "</td></tr>";
		output += "<tr><td colspan=4 style='text-align:center;'>" + pvpProtElement.innerHTML + "</td></tr>";
		output += "</tbody></table>";
		var anchor1 = callback.anchor1;
		var injectHere = System.findNode("//span[@id='Helper:"+anchor1+"']");
		injectHere.innerHTML = output;
		//buffs
		var activeBuffsTitleRow = System.findNode("//strong[.='Active Buffs']/ancestor::div[1]", doc);
		var activeBuffsElement = activeBuffsTitleRow.nextSibling.nextSibling;
		var anchor2 = callback.anchor2;
		injectHere = System.findNode("//span[@id='Helper:"+anchor2+"']");
		injectHere.innerHTML = activeBuffsElement.innerHTML;
	},

	injectScavenging: function() {
		var injectHere=System.findNode("//b[contains(.,'Multiple Scavenging Results')]/..");
		if (injectHere) { // multi scavenging
			var victories=System.findNodes("//td[contains(.,'victorious')]");
			if (victories) injectHere.innerHTML+="<br/>Victories: "+victories.length;
			var defeats=System.findNodes("//td[contains(.,'defeated')]");
			if (defeats) injectHere.innerHTML+=", Defeated: "+defeats.length;
			var gains=System.findNodes("//td[contains(.,'Item Gained')]/b");
			if (gains) {
				injectHere.innerHTML+="<br/>"+gains.length+" item(s): ";
				var gainHash={};
				for (var i=0;i<gains.length;i++) {
					if (gainHash[gains[i].textContent])
						gainHash[gains[i].textContent]++;
					else
						gainHash[gains[i].textContent]=1;
				}
				for (var item in gainHash) {
					injectHere.innerHTML+=gainHash[item]+" "+item+"(s), ";
				}
			}
		}
		System.xmlhttp("index.php?cmd=world", Helper.getBpCountFromWorld);
	},

	getBpCountFromWorld: function(responseText) {
		// backpack counter
		var doc=System.createDocumentWithImages(responseText);
		var bp=System.findNode("//td[a/img[contains(@src,'_manageitems.gif')]]",doc);
		var injectHere=document.getElementById("reportDiv");
		if (!injectHere) injectHere=System.findNode("//b[contains(.,'Multiple Scavenging Results')]/..");
		injectHere.appendChild(bp);
	},

	getGroupBuffModifierWord: function(defenderIdx) {
		var modifierWord = "";
		switch (Math.ceil(( defenderIdx+1) / 16)) {
			case 1:
				modifierWord = "first";
				break;
			case 2:
				modifierWord = "second";
				break;
			case 3:
				modifierWord = "third";
				break;
			case 4:
				modifierWord = "fourth";
				break;
			case 5:
				modifierWord = "fifth";
				break;
			case 6:
				modifierWord = "sixth";
				break;
			case 7:
				modifierWord = "seventh";
				break;
			case 8:
				modifierWord = "eighth";
				break;
			case 9:
				modifierWord = "ninth";
				break;
			case 10:
				modifierWord = "tenth";
				break;
			case 11:
				modifierWord = "eleventh";
				break;
			case 12:
				modifierWord = "twelfth";
				break;
			case 13:
				modifierWord = "thirteenth";
				break;
			case 14:
				modifierWord = "fourteenth";
				break;
			default:
				modifierWord = "";
				break;
		}
		return modifierWord;
	},

	injectJoinAllLink: function() {
		if (isNewUI != 1) {
			var attackGroupLink = System.findNode("//tr[td/a/img[@alt='A new guild attack group has been formed.']]");
			if (attackGroupLink) {
				var groupJoinHTML = '';
				if (!GM_getValue("enableMaxGroupSizeToJoin")) {
					groupJoinHTML = "<a href='index.php?cmd=guild&subcmd=groups&subcmd2=joinall'>"+
						"<span style='color:white; font-size:x-small;'>Join all attack groups.</span></a></nobr>";
				} else {
					var maxGroupSizeToJoin = GM_getValue("maxGroupSizeToJoin");
					groupJoinHTML = " <a href='index.php?cmd=guild&subcmd=groups&subcmd2=joinallgroupsundersize'>"+
						"<span style='color:white; font-size:x-small;'>Join all attack groups less than size " + maxGroupSizeToJoin + ".</span></a></nobr>";
				}
				var LHSSidebarTable = attackGroupLink.parentNode.parentNode;
				var newRow=LHSSidebarTable.insertRow(attackGroupLink.rowIndex+1);
				var newCell=newRow.insertCell(0);
				newCell.height = 10;
				newCell.align = 'center';
				newCell.innerHTML = '<table width="125" cellpadding="3" border="0" bgcolor="#4a3918" style="border: 1px solid rgb(198, 173, 115);"><tbody>' +
					'<tr><td align="center">' + groupJoinHTML + '</td></tr>' +
					'</tbody></table>';
				var newRow=LHSSidebarTable.insertRow(attackGroupLink.rowIndex+1);
				var newCell=newRow.insertCell(0);
				newCell.height = 10;

			}
		} else {
			var groupJoinHTML = '';
			if (!GM_getValue("enableMaxGroupSizeToJoin")) {
				groupJoinHTML = '<a href="index.php?cmd=guild&subcmd=groups&subcmd2=joinall"><span class="notification-icon"></span>'+
					'<p class="notification-content">Join all attack groups.</p></a>';
			} else {
				var maxGroupSizeToJoin = GM_getValue("maxGroupSizeToJoin");
				groupJoinHTML = ' <a href="index.php?cmd=guild&subcmd=groups&subcmd2=joinallgroupsundersize"><span class="notification-icon"></span>'+
					'<p class="notification-content">Join all attack groups less than size ' + maxGroupSizeToJoin + '.</p></a>';
			}
			$('li:contains("New attack group created.")').after('<li class="notification">' + groupJoinHTML + '</li>');
		}
	},

	changeGuildLogHREF: function() {
		if (!GM_getValue("useNewGuildLog")) return;
		var guildLogNodes = System.findNodes('//a[@href="index.php?cmd=guild&subcmd=log"]');
		if (guildLogNodes) {
			for (i=0;i<guildLogNodes.length;i++) {
				guildLogNode = guildLogNodes[i];
				guildLogNode.setAttribute("href", "index.php?cmd=notepad&blank=1&subcmd=newguildlog");
			}
			//hide the lhs box
			if (location.search == "?cmd=notepad&blank=1&subcmd=newguildlog") {
				if(guildLogNode.firstChild.nodeName == 'IMG' && guildLogNode.firstChild.getAttribute("alt") == "You have unread guild log messages.") { //old UI
					messageBox = guildLogNode.parentNode.parentNode;
					if (messageBox) {
						messageBox.style.display = "none";
						messageBox.style.visibility = "hidden";
						//hide the empty row before it too (can't do after in case there is no after row)
						messageBox.previousSibling.style.display = "none";
						messageBox.previousSibling.style.visibility = "hidden";
					}
				} else if (guildLogNode.innerHTML.search("Guild Log updated!") != -1) { // new UI
					messageBox = guildLogNode.parentNode;
					if (messageBox) {
						messageBox.style.display = "none";
						messageBox.style.visibility = "hidden";
					}
				}
			}
		}
	},

	injectGuildRanks: function() {
		//update the guild member list and insert a list of members next to each rank
		System.xmlhttp("index.php?cmd=guild&subcmd=manage", Helper.parseGuildForWorld, true);

		var rankNameTable = System.findNode("//table[tbody/tr/td[.='Rank Name']]");
		if (!rankNameTable) return;
		var memberList = System.getValueJSON("memberlist");
		if (memberList) {
			for (i=0;i<memberList.members.length;i++) {
				var member=memberList.members[i];
				if (member.name.trim() == Helper.characterName.trim()) {
					Helper.characterRank = member.rank;
					break;
				}
			}
			for (i=0;i<rankNameTable.rows.length;i++) {
				aRow = rankNameTable.rows[i];
				if (aRow.cells[1]) {
					rankName = aRow.cells[0].textContent;
					if (rankName.trim() == Helper.characterRank.trim()) {
						Helper.characterRow = i;
						break;
					}
				}
			}
		}

		//gather rank info
		var newRankElement = System.findNode("//td[a[@href='index.php?cmd=guild&subcmd=ranks&subcmd2=add']]");
		newRankElement.innerHTML += '&nbsp;<input id="getrankweightings" type="button" value="Get Rank Weightings" class="custombutton">';

		document.getElementById('getrankweightings').addEventListener('click', Helper.fetchRankData, true);

		if (GM_getValue("ajaxifyRankControls")) {
			//up buttons
			var upButtons = System.findNodes("//input[@value='Up']");
			for (i=0;i<upButtons.length;i++) {
				upButton = upButtons[i];
				onclickText = upButton.getAttribute("onclick");
				onclickHREF = /window.location=\'(.*)\';/.exec(onclickText)[1];
				upButton.setAttribute("onclickhref", onclickHREF);
				upButton.setAttribute("onclick", "");
				upButton.addEventListener('click', Helper.moveRankUpOneSlotOnScreen, true);
			}
			//down buttons
			var downButtons = System.findNodes("//input[@value='Down']");
			for (i=0;i<downButtons.length;i++) {
				downButton = downButtons[i];
				onclickText = downButton.getAttribute("onclick");
				onclickHREF = /window.location=\'(.*)\';/.exec(onclickText)[1];
				downButton.setAttribute("onclickhref", onclickHREF);
				downButton.setAttribute("onclick", "");
				downButton.addEventListener('click', Helper.moveRankDownOneSlotOnScreen, true);
			}
		}
	},

	moveRankUpOneSlotOnScreen: function(evt) {
		onclickHREF = evt.target.getAttribute("onclickhref");
		thisRankRow = evt.target.parentNode.parentNode.parentNode;
		parentTable = thisRankRow.parentNode;
		thisRankRowNum = thisRankRow.rowIndex;
		previousRankRowNum = parseInt(thisRankRowNum, 10);
		if (previousRankRowNum <= 1 || Helper.characterRow > thisRankRowNum) return;
		injectRow = parentTable.rows[previousRankRowNum - 1];
		parentTable.insertBefore(thisRankRow, injectRow);
		System.xmlhttp(onclickHREF);
		window.scrollBy(0,-24);
	},

	moveRankDownOneSlotOnScreen: function(evt) {
		onclickHREF = evt.target.getAttribute("onclickhref");
		thisRankRow = evt.target.parentNode.parentNode.parentNode;
		parentTable = thisRankRow.parentNode;
		thisRankRowNum = thisRankRow.rowIndex;
		previousRankRowNum = parseInt(thisRankRowNum + 3, 10);
		if (previousRankRowNum - 1 > parentTable.rows.length || Helper.characterRow > thisRankRowNum) return;
		injectRow = parentTable.rows[previousRankRowNum - 1];
		parentTable.insertBefore(thisRankRow, injectRow);
		System.xmlhttp(onclickHREF);
		window.scrollBy(0,24);
	},

	fetchRankData: function(evt) {
		var calcButton = System.findNode("//input[@id='getrankweightings']");
		calcButton.style.display = "none";
		var allItems = System.findNodes("//input[@value='Edit']");
		for (var i=0; i<allItems.length; i++) {
			anItem = allItems[i];
			var targetNode = anItem.parentNode.parentNode.previousSibling;
			var href = /window\.location='(.*)';/.exec(anItem.getAttribute("onclick"))[1];
			System.xmlhttp(href, Helper.parseRankData, targetNode);
		}
	},

	parseRankData: function(responseText, linkElement) {
		var doc=System.createDocument(responseText);
		var checkBoxes = System.findNodes("//input[@type='checkbox'][contains(@name,'permission')]",doc);
		var count = 0;
		for (var i=0;i<checkBoxes.length;i++) {
			var checkbox=checkBoxes[i];
			if (checkbox.checked) {
				//terrasoft.gr/FallenSwordHelper: Can Un-Tag Items
				var privName = checkbox.nextSibling.textContent.trim();
				if (privName == 'Bank Withdraw' ||
					privName == 'Build/Upgrade/Demolish Structures' ||
					privName == 'Can Un-Tag Items') {
					count += 5;
				} else if (privName == 'Can Mass Messages') {
					count += 0.5;
				} else if (privName == 'Take Items' ||
					privName == 'Can Tag Items' ||
					privName == 'Can Recall Tagged Items' ||
					privName == 'Can Tag Items') {
					count += 0.2;
				} else if (privName == 'Store Items' ||
					privName == 'Can View Advisor') {
					count += 0.1;
				} else {
					count++;
				}
			}
		}
		var taxRate = System.findNode("//input[@name='rank_tax']",doc);

		linkElement.innerHTML = "<span style='color:blue;'>(" + Math.round(10*count)/10 + ") Tax:(" + taxRate.value + "%)</span> " + linkElement.innerHTML;
	},

	injectGuildRanksMembers: function(memberList) {
		//first build up a relationship from rank to names
		Helper.sortAsc = true;
		Helper.sortBy = "rank".trim();
		memberList.members.sort(Helper.stringSort);
		var rankList = {};
		rankList.rank = [];
		var tempList = [];
		var prevRank = memberList.members[0].rank.replace(/Profile Unavailable/ig,"");
		var curRank = "";
		for (i=0;i<memberList.members.length;i++) {
			var member=memberList.members[i];
			curRank = member.rank.replace(/Profile Unavailable/ig,"");
			if (curRank != prevRank) {
				aRank = {};
				aRank.rank = prevRank;
				aRank.names = tempList;
				rankList.rank.push(aRank);
				tempList = [];
				//last name on the list, so add it to the list of names
				if (i == memberList.members.length-1) {
					aRank = {};
					aRank.rank = curRank;
					tempList.push(" " + member.name);
					aRank.names = tempList;
					rankList.rank.push(aRank);
					tempList = [];
				}
			} else if (curRank == prevRank && i == memberList.members.length-1) {
				aRank = {};
				aRank.rank = prevRank;
				tempList.push(" " + member.name);
				aRank.names = tempList;
				rankList.rank.push(aRank);
				tempList = [];
			}
			tempList.push(" " + member.name);
			prevRank = member.rank.replace(/Profile Unavailable/ig,"");
		}
		//then for each of the ranks, find the rank on screen and append the names next to it.
		var rankNameTable = System.findNode("//table[tbody/tr/td[.='Rank Name']]");
		for (i=0;i<rankNameTable.rows.length;i++) {
			aRow = rankNameTable.rows[i];
			if (aRow.cells[1]) {
				rankName = aRow.cells[0].textContent;
				for (j=0;j<rankList.rank.length;j++) {
					rankListName = rankList.rank[j].rank;
					if (rankName == rankListName) {
						aRow.cells[0].innerHTML += " <span style='color:blue;'>- " + rankList.rank[j].names + "</span>";
						break;
					}
				}
			}
		}
	},

	injectNewGuildLog: function(content){
		if (!content) var content=Layout.notebookContent();

		//store the time zone for use in processing date/times
		var gmtOffsetMinutes = (new Date()).getTimezoneOffset();
		Helper.gmtOffsetMilli = gmtOffsetMinutes*60*1000;

		//find the time the guild log was stored last
		Helper.storedGuildLog = System.getValueJSON("storedGuildLog");
		if (Helper.storedGuildLog) {
			var lastMessageIndex = Helper.storedGuildLog.logMessage.length;
			Helper.lastStoredGuildLogMessage = Helper.storedGuildLog.logMessage[0].logMessage;
			Helper.lastStoredGuildLogMessagePostTime = Helper.storedGuildLog.logMessage[0].postDateAsLocalMilli;
		}

		Helper.newStoredGuildLog = {logMessage:[]};

		var newhtml='<table cellspacing="0" cellpadding="0" border="0" width="100%">' +
			'<tr style="background-color:#cd9e4b"><td width="80%" nobr><b>&nbsp;Guild Log Version 3</b></td>' +
				'<td><span id="Helper:ResetNewGuildLog" style="text-decoration:underline;cursor:pointer;color:blue;">Reset</span>' +
				'&nbsp;<a href="index.php?cmd=guild&subcmd=log"><span style="color:blue;">Old Guild Log</span></a></td></tr>' +
			'<tr><td colspan=2>' +
				'<table><tbody><tr><td><b>Filters:</b></td>' +
				'<td><table><tbody><tr><td>';
		for (var i=0; i<Helper.guildLogFilters.length; i++) {
			var guildLogFilterID = Helper.guildLogFilters[i].id;
			Helper[guildLogFilterID] = GM_getValue(guildLogFilterID);
			newhtml += (i % 5 ===0) ? '</td></tr><tr><td>' : '';
			newhtml+='&nbsp;' +Helper.guildLogFilters[i].type+ 's:<input id="'+guildLogFilterID+'" type="checkbox" linkto="'+guildLogFilterID+'"' +
					(Helper[guildLogFilterID]?' checked':'') + '/>';
		}
		newhtml += '</td></tr><tr><td>&nbsp;<span id=GuildLogSelectAll>[Select All]</span>&nbsp;<span id=GuildLogSelectNone>[Select None]</span>' +
				'</td></tr></tbody></table></td></tr>'+
			'<tr><td colspan=2><span style="color:blue;" id="Helper:NewGuildLogLoadingMessage">Loading Page 1 ...</span></td></tr>' +
			'</tbody></table>';
		newhtml += '<table width="100%" cellspacing="0" cellpadding="2" border="0" id="Helper:GuildLogInjectTable"><tbody>' +
			'<tr><td width="16" bgcolor="#cd9e4b"></td><td width="20%" bgcolor="#cd9e4b">Date</td><td width="80%" bgcolor="#cd9e4b">Message</td></tr>' +
			'<tr><td class="divider" colspan="3"></td></tr>' +
			'</tbody></table>';
		content.innerHTML=newhtml;

		document.getElementById("Helper:ResetNewGuildLog").addEventListener('click', Helper.resetNewGuildLog, true);

		var guildLogInjectTable = document.getElementById("Helper:GuildLogInjectTable");
		var loadingMessageInjectHere = document.getElementById("Helper:NewGuildLogLoadingMessage");

		for (i=0; i<Helper.guildLogFilters.length; i++) {
			document.getElementById(Helper.guildLogFilters[i].id).addEventListener('click', Helper.toggleGuildLogFilterVisibility, true);
		}
		document.getElementById("GuildLogSelectAll").addEventListener('click', Helper.guildLogSelectFilters, true);
		document.getElementById("GuildLogSelectNone").addEventListener('click', Helper.guildLogSelectFilters, true);

		var oldMaxPagesToFetch = GM_getValue("oldNewGuildLogHistoryPages");
		oldMaxPagesToFetch? parseInt(oldMaxPagesToFetch,10):oldMaxPagesToFetch = 100;
		var maxPagesToFetch = parseInt(GM_getValue("newGuildLogHistoryPages") - 1,10);
		GM_setValue("oldNewGuildLogHistoryPages", maxPagesToFetch);
		var completeReload = false;
		if (maxPagesToFetch > oldMaxPagesToFetch) completeReload = true;
		//fetch guild log page and apply filters
		System.xmlhttp('index.php?cmd=guild&subcmd=log', Helper.parseGuildLogPage,
			{"guildLogInjectTable": guildLogInjectTable, "pageNumber": 1, "loadingMessageInjectHere": loadingMessageInjectHere, "maxPagesToFetch": maxPagesToFetch, "completeReload": completeReload});
	},

	resetNewGuildLog: function(evt) {
		System.setValueJSON("storedGuildLog", "");
		window.location = window.location;
	},

	toggleGuildLogFilterVisibility: function(evt) {
		var filterID = evt.target.id;
		var filterChecked = evt.target.checked;
		var logRows = System.findNodes("//tr[@id='GuildLogFilter:" + filterID + "']");
		if (logRows) {
			for (i=0;i<logRows.length;i++) {
				logRow = logRows[i];
				if (filterChecked) {
					logRow.style.display = "";
					logRow.style.visibility = "visible";
				} else {
					logRow.style.display = "none";
					logRow.style.visibility = "hidden";
				}
			}
		}
		GM_setValue(filterID,filterChecked);
		Helper[filterID] = filterChecked;
	},

	guildLogSelectFilters: function(evt) {
		var checkedValue = (evt.target.id=="GuildLogSelectAll");
		for (var i=0; i<Helper.guildLogFilters.length; i++) {
			GM_setValue(Helper.guildLogFilters[i].id, checkedValue);
			document.getElementById(Helper.guildLogFilters[i].id).checked = checkedValue;
		}
		var logRows = System.findNodes("//tr[contains(@id,'GuildLogFilter:')]");
		if (logRows) {
			for (i=0;i<logRows.length;i++) {
				logRow = logRows[i];
				rowID = logRow.getAttribute("id");
				if (checkedValue) {
					logRow.style.display = "";
					logRow.style.visibility = "visible";
				} else if (rowID != "GuildLogFilter:Unknown") {
					logRow.style.display = "none";
					logRow.style.visibility = "hidden";
				}
			}
		}
	},

	parseGuildLogPage: function(responseText, callback) {
		var pageNumber = callback.pageNumber;
		var maxPagesToFetch = callback.maxPagesToFetch;
		var completeReload = callback.completeReload;
		var guildLogInjectTable = callback.guildLogInjectTable;
		var loadingMessageInjectHere = callback.loadingMessageInjectHere;
		var doc=System.createDocument(responseText);

		var logTable = $(doc).find('table.width_full:first');

		//if the whole first page is new, then likely that the stored log needs to be refreshed, so go ahead and do so
		if (pageNumber == 1) {
			var lastRowInTable = logTable.find('tr>td:not(.divider)').parent(':last');
			var lastRowCellContents = lastRowInTable.find('td:eq(1)').text();
			lastRowPostDateAsDate = System.parseDate(lastRowCellContents);
			lastRowPostDateAsLocalMilli = lastRowPostDateAsDate.getTime() - Helper.gmtOffsetMilli;
			if (lastRowPostDateAsLocalMilli > Helper.lastStoredGuildLogMessagePostTime) completeReload = true;
		} else {
			completeReload = false;
		}

		var enableLogColoring = GM_getValue("enableLogColoring");
		if (enableLogColoring) {
			var lastCheckScreen = "lastGuildLogCheck";
			var localLastCheckMilli=GM_getValue(lastCheckScreen);
			if (!localLastCheckMilli) localLastCheckMilli=(new Date()).getTime();
			var localDateMilli = (new Date()).getTime();
		}

		logTable.find('tr:gt(0):has(td:not(.divider))').each(function(index){
			var cellContents = $(this).children('td:eq(1)').text();
			if (!cellContents || cellContents == 'Date' || cellContents.split(' ').length == 1) return;
			postDateAsDate = System.parseDate(cellContents);
			postDateAsLocalMilli = postDateAsDate.getTime() - Helper.gmtOffsetMilli;

			//if the post date is the same as last one in the stored list and the message is the same, then break out
			//and start appending the stored values instead of parsing.
			Helper.stopProcessingLogPages = false;
			if (postDateAsLocalMilli == Helper.lastStoredGuildLogMessagePostTime && $(this).html() == Helper.lastStoredGuildLogMessage && !completeReload) {
				Helper.stopProcessingLogPages = true;
				return false;
			}
			var displayRow = true;
			var rowTypeID = "GuildLogFilter:Unknown";
			var messageText = $(this).children('td:eq(2)').text();
			//if recall message, check to see if showRecallMessages is checked.
			if (messageText.search("recalled the item") != -1 ||
				messageText.search("took the item") != -1 ||
				messageText.search("stored the item") != -1) {
				if (!Helper.showRecallMessages) {
					displayRow = false;
				}
				rowTypeID = "GuildLogFilter:showRecallMessages";
			}
			//Tag/Untag (showTaggingMessages)
			else if (messageText.search("has added flags to some of guild's stored items costing a total of") != -1 ||
				messageText.search("has removed flags to the guild's stored items.") != -1) {
				if (!Helper.showTaggingMessages) {
					displayRow = false;
				}
				rowTypeID = "GuildLogFilter:showTaggingMessages";
			}
			//Relic messages (showRelicMessages)
			else if (messageText.search("relic. This relic now has an empower level of") != -1 ||
				messageText.search("relic. The relic empower level has been reset to zero.") != -1 ||
				messageText.search("captured the relic") != -1 ||
				messageText.search("captured your relic") != -1 ||
				messageText.search("has captured the undefended relic") != -1 ||
				messageText.search("attempted to capture your relic") != -1) {
				if (!Helper.showRelicMessages) {
					displayRow = false;
				}
				rowTypeID = "GuildLogFilter:showRelicMessages";
			}
			//Mercenary messages (showMercenaryMessages)
			else if (messageText.search("disbanded a mercenary.") != -1 ||
				messageText.search("hired the mercenary") != -1) {
				if (!Helper.showMercenaryMessages) {
					displayRow = false;
				}
				rowTypeID = "GuildLogFilter:showMercenaryMessages";
			}
			//Group Combat messages (showGroupCombatMessages)
			else if (messageText.search(/A group from your guild was (.*) in combat./) != -1) {
				if (!Helper.showGroupCombatMessages) {
					displayRow = false;
				}
				rowTypeID = "GuildLogFilter:showGroupCombatMessages";
			}
			//Donation messages (showDonationMessages)
			else if (messageText.search(/deposited ([,0-9]+) FallenSword Points into the guild./) != -1 ||
				messageText.search(/deposited ([,0-9]+) gold into the guild bank/) != -1) {
				if (!Helper.showDonationMessages) {
					displayRow = false;
				}
				rowTypeID = "GuildLogFilter:showDonationMessages";
			}
			//Ranking messages (showRankingMessages)
			else if (messageText.search("has added a new rank entitled") != -1 ||
				messageText.search("has been assigned the rank") != -1) {
				if (!Helper.showRankingMessages) {
					displayRow = false;
				}
				rowTypeID = "GuildLogFilter:showRankingMessages";
			}
			//GvG messages (showGvGMessages)
			else if (messageText.search("resulted in a draw. Your GvG rating and Guild RP was unaffected.") != -1 ||
				messageText.search(/resulted in (.*) with a final score of/) != -1 ||
				messageText.search("has just initiated a conflict with the guild") != -1 ||
				messageText.search("has initiated a conflict with your guild") != -1 ||
				messageText.search("is participating in the conflict against the guild") != -1) {
				if (!Helper.showGvGMessages) {
					displayRow = false;
				}
				rowTypeID = "GuildLogFilter:showGvGMessages";
			}

			//display the row or effectively hide it
			newRow = $(this).clone(true);
			if (!displayRow) {
				newRow.css("display","none")
					.css("visibility","hidden");
			}
			newRow.id = rowTypeID
			newRow.appendTo(guildLogInjectTable);
			postAge = (localDateMilli - postDateAsLocalMilli)/(1000*60);
			if (enableLogColoring && postDateAsLocalMilli > localLastCheckMilli) {
				newRow.css("backgroundColor","#F5F298");
			}
			else if (enableLogColoring && postAge > 20 && postDateAsLocalMilli <= localLastCheckMilli) {
				newRow.css("backgroundColor", "#CD9E4B");
			}
			var newLogMessage = {
				postDateAsLocalMilli: postDateAsLocalMilli,
				rowTypeID: rowTypeID,
				logMessage: newRow.html()
			};
			Helper.newStoredGuildLog.logMessage.push(newLogMessage);
			//create following spacer row
			var spacerRow = $('<tr></tr>');
			if (!displayRow) {
				spacerRow.css("display","none")
					.css("visibility","hidden");
			}
			spacerRow.id = rowTypeID
			spacerRow.appendTo(guildLogInjectTable);
			spacerRow.html('<td class="divider" colspan="3"></td>');
			newLogMessage = {
				postDateAsLocalMilli: postDateAsLocalMilli,
				rowTypeID: rowTypeID,
				logMessage: spacerRow.html()
			};
			Helper.newStoredGuildLog.logMessage.push(newLogMessage);
		});

		if (Helper.stopProcessingLogPages) {
			loadingMessageInjectHere.innerHTML = 'Processing stored logs ...';
			for (i=0;i<Helper.storedGuildLog.logMessage.length;i++) {
				var logMessageArrayItem = Helper.storedGuildLog.logMessage[i];
				var newRow = document.createElement("TR");
				var displayRow = true;
				for (var j=0; j<Helper.guildLogFilters.length; j++) {
					var guildLogFilterID = Helper.guildLogFilters[j].id;
					var rowTypeID = "GuildLogFilter:" + guildLogFilterID;
					if (logMessageArrayItem.rowTypeID == rowTypeID) {
						displayRow = Helper[guildLogFilterID];
						break;
					}
				}
				newRow.style.display = "";
				newRow.style.visibility = "";
				if (!displayRow) {
					newRow.style.display = "none";
					newRow.style.visibility = "hidden";
				}
				newRow.id = logMessageArrayItem.rowTypeID
				guildLogInjectTable.appendChild(newRow);
				newRow.innerHTML = logMessageArrayItem.logMessage;
				postAge = (localDateMilli - logMessageArrayItem.postDateAsLocalMilli)/(1000*60);
				if (enableLogColoring && newRow.cells[2] && logMessageArrayItem.postDateAsLocalMilli > localLastCheckMilli) {
					newRow.style.backgroundColor = "#F5F298";
				}
				else if (enableLogColoring && newRow.cells[2] && postAge > 20 && logMessageArrayItem.postDateAsLocalMilli <= localLastCheckMilli) {
					newRow.style.backgroundColor = "#CD9E4B";
				}
				var newLogMessage = {
					postDateAsLocalMilli: logMessageArrayItem.postDateAsLocalMilli,
					rowTypeID: logMessageArrayItem.rowTypeID,
					logMessage: logMessageArrayItem.logMessage
				};
				Helper.newStoredGuildLog.logMessage.push(newLogMessage);
			}
		}

		var page = $(doc).find('input[name="page"]');
		var curPage = parseInt(page.val(),10);
		var maxPage = page.parent().html().match(/of&nbsp;(\d*)/)[1];

		//fetch the next page (if necessary)
		if (pageNumber < maxPage && pageNumber < maxPagesToFetch && !Helper.stopProcessingLogPages) {
			var nextPage = parseInt(pageNumber+1,10);
			loadingMessageInjectHere.innerHTML = 'Loading Page ' + (nextPage + 1) + " of " + Math.floor(maxPagesToFetch+1,maxPage) + "...";
			System.xmlhttp('index.php?cmd=guild&subcmd=log&subcmd2=&page=' + nextPage + '&search_text=', Helper.parseGuildLogPage,
				{"guildLogInjectTable": guildLogInjectTable, "pageNumber": nextPage, "loadingMessageInjectHere": loadingMessageInjectHere, "maxPagesToFetch": maxPagesToFetch, "completeReload": completeReload});
		} else {
			loadingMessageInjectHere.innerHTML = 'Loading Complete.';
			//Helper.addLogColoring("GuildLog", 1);
			Helper.addGuildLogWidgets();
			System.setValueJSON("storedGuildLog", Helper.newStoredGuildLog);
			now=(new Date()).getTime();
			GM_setValue("lastGuildLogCheck", now.toString());
		}
	},

	injectCheckWearingItem: function(content) {
		if (!content) var content = Layout.notebookContent();
		content.innerHTML=Helper.makePageTemplate("Check Worn Items for Best Damage", "", "", "", "checkwear");

		document.getElementById("checkwear").innerHTML+="Getting profile ...<br/>";
		var playerid=/&playerid=(\d+)/.exec(window.location);
		if (playerid)
			playerid = playerid[1];
		else
			playerid = "";
		Helper.wearingItems={};
		Helper.wearingItems.playerid=playerid;
		System.xmlhttp("index.php?cmd=profile&player_id="+playerid, Helper.getWearingItems);
	},

	getWearingItems: function(responseText) {
		var doc=System.createDocumentWithImages(responseText);
		//fix me
		var items=System.findNodes("//img[contains(@data-tipped,'fetchitem') and contains(@src,'/items/')]",doc);
		for (var i=0; i<items.length; i++) {
			if (!(items[i].parentNode.getAttribute("href")) || items[i].parentNode.getAttribute("href").indexOf("subcmd=unequipitem&")>0) {
				var item=items[i], type, onmo=item.getAttribute("data-tipped");
				if (item.parentNode.getAttribute("href")) item=item.parentNode;
				if (item.parentNode.width != 60) item=item.parentNode.parentNode.parentNode.parentNode;
				type = item.parentNode.cellIndex + item.parentNode.parentNode.rowIndex*3;
				Helper.wearingItems[type]=onmo;
			}
		}
		Helper.wearingItems.name=System.findNode("//div[@class='innerContentMiddle']/div/h1",doc).textContent;
		Helper.wearingItems.lvl=System.findNode("//b[contains(.,'Level:')]",doc).parentNode.nextSibling.textContent;
		document.getElementById("checkwear").innerHTML+="Getting items from "+Helper.wearingItems.name+"'s profile ... <br/>";
		Helper.getEachWearingItem(0);
	},

	getEachWearingItem: function(type) {
		if (Helper.wearingItems[type]) {
			System.xmlhttp(Helper.linkFromMouseover(Helper.wearingItems[type]), function(responseText) {
					var name=responseText.match(/<b>([^<]*)<\/b>/)[1];
					var mo=Helper.wearingItems[type].replace("'<br><center><b>[Click to Unequip]</b></center>'","''");
					Helper.wearingItems[type]={"mo":mo};
					Helper.wearingItems[type].wear=name;
					Helper.wearingItems[type].fullSet=responseText.match(/>Set Details \((\d)\/\1\)</)!=null;
					document.getElementById("checkwear").innerHTML+=" comparing "+name+" ...<br/>";
					var stype=[2,0,7,4,1,5,6,3,8][type];
					var url="http://guide.fallensword.com/index.php?cmd=items&index=0&search_name=&search_level_min=&"+
						"search_level_max="+parseInt(Helper.wearingItems.lvl.replace(/,/g,""),10)+
						"&search_type="+stype+"&search_rarity=-1&sort_by=1&sort_by=5";
					GM_xmlhttpRequest({
						method: 'GET',
						url: url,
						/*headers: {
							"User-Agent": navigator.userAgent,
							"Referer": document.location
						},*/
						onload: function(responseDetails) {
							var doc=System.createDocument(responseDetails.responseText);
							var nodes = System.findNodes("//a[contains(@href,'index.php?cmd=items&subcmd=view')]",doc);
							Helper.wearingItems[type].suggest="";
							Helper.wearingItems[type].best=nodes[0].textContent;
							for (var i=0; i<5; i++) {
								Helper.wearingItems[type].suggest+=
									"<span class=\"tipped\" data-tipped='"+nodes[i].parentNode.parentNode.textContent+"'>"+
										nodes[i].textContent+"</span>"+
									" <span style='font-size:xx-small'>[<a href='/index.php?cmd=guild&subcmd=inventory&subcmd2=report&item="+nodes[i].textContent+"'>GS</a>] "+
									"[<a href='/index.php?cmd=auctionhouse&type=-1&search_text="+nodes[i].textContent+"'>AH</a>] "+
									"[<a href='http://guide.fallensword.com/index.php?cmd=items&index=0&search_name="+nodes[i].textContent+"'>UFG</a>]</span>, ";
							}
							Helper.getEachWearingItem(type+1);
						}
					});
				});
		} else {
			if (type < 8)
				Helper.getEachWearingItem(type+1);
			else
				Helper.showCheckWearingResult();
		}
	},

	showCheckWearingResult: function() {
		var content=document.getElementById("checkwear");
		var pos2type=["Glove", "Helm", "Amulet", "Weapon", "Armor", "Shield", "Ring", "Boot", "Rune"];
		var newHtml, color;
		newHtml='<h3><a href="/index.php?cmd=profile&player_id='+Helper.wearingItems.playerid+'">'+Helper.wearingItems.name+'</a>\'s Setup Analysis</h3>'+
			"Please note that:<br/>"+
			"<ul><li>Analysis based on availability of items in the Ultimate Fallensword Guide</li>"+
			"<li>Item sorted by damage stat in no-forge, no-craft condition</li>"+
			"<li>Set bonus, other stats are not considered</li></ul>"+
			"Please use at your own risk ^_^<p/>"+
			"Tooltip format: Name  	Level  	Type 	Rarity 	Attack  	Defense  	Armor  	Damage  	HP<p/>"+
			"<table width=100% cellspacing=2>";
		for (var type=0; type<9; type++) {
			newHtml+="<tr><th align=left>"+pos2type[type]+"</th>";
			if (Helper.wearingItems[type]) {
				if (Helper.wearingItems[type].wear == Helper.wearingItems[type].best ||  Helper.wearingItems[type].fullSet) {
					color="green";
				} else {
					color="yellow";
					//GM_log(Helper.wearingItems[type].suggest);
					Helper.wearingItems[type].suggest=Helper.wearingItems[type].suggest.replace(">"+Helper.wearingItems[type].wear+"<",
						"><font color=yellow>"+Helper.wearingItems[type].wear+"</font><");
					//GM_log(Helper.wearingItems[type].suggest);
				}
				newHtml+="<td><span style='color:"+color+"' class=tipped data-tipped-options='ajax:true' data-tipped=\""+Helper.wearingItems[type].mo+"\">"+Helper.wearingItems[type].wear+"</span>"+
					(Helper.wearingItems[type].fullSet?" (<span style='color:blue'>Full Set</span>)":"")+"</td></tr>"+
					"<tr><td align=right>Suggested</td><td>"+Helper.wearingItems[type].suggest+"</td></tr>";
			} else
				newHtml+="<td><span style='color:red'>NOTHING</span></td></tr>";
		}
		content.innerHTML=newHtml+"</table>";
	},

	addChatTextArea: function() {
		if (!GM_getValue("enhanceChatTextEntry")) return;
		var messageCell = System.findNode("//td[table/tbody/tr/td/input[@value='Send As Mass']]");
		if (!messageCell) {
			Helper.addChatTextAreaLeader();
			return;
				}
		Helper.addChatTextAreaNormal();
		},

	addChatTextAreaNormal: function () {
		if (!GM_getValue("enhanceChatTextEntry")) return;
		var messageCell = System.findNode("//td[table/tbody/tr/td/input[@value='Send As Mass']]");
		var chatConfirm=System.findNode("//input[@name='xc']");
		var chatType=System.findNode("//input[@name='chat_type']");
		result = '<form name="dochat" action="index.php" method="post">';
		result += '<table border="0"><tbody><tr><td rowspan="2">';
		result += '<input type="hidden" value="guild" name="cmd"/>';
		result += '<input type="hidden" value="dochat" name="subcmd"/>';
		result += '<input type="hidden" value="' + chatType.value + '" name="chat_type">';
		result += '<input type="hidden" value="' + chatConfirm.value + '" name="xc"/>';
		result += '<textarea align="center" cols="72" rows="2" name="msg" id="Helper:ChatTextArea"></textarea>';
		result += '</td><td>';
		result += '<input class="custominput" type="submit" value="Send" name="submit"/>';
		result += '</td><tr><td>';
		//if(!confirm('Are you sure you wish to send this a mass message to all guild members?')) return false;
		result += '<input class="custominput" type="submit" value="Send As Mass" name="submit" ' +
			'onClick="if(!confirm(\'Are you sure you wish to send this a mass message to all guild members?\')) return false;"/>';
		result += '</td></tr></tbody></table>';
		result += '</form>';
		messageCell.innerHTML = result;

		document.getElementById('Helper:ChatTextArea').addEventListener('keyup', function(evt) {if (evt.keyCode == 13) evt.target.form.submit()}, true);
	},

	addChatTextAreaLeader: function() {
		if (!GM_getValue("enhanceChatTextEntry")) return;
		var messageCell = System.findNode("//td[table/tbody/tr/td/input[@value='Send']]");
		var chatConfirm=System.findNode("//input[@name='xc']");
		var chatType=System.findNode("//input[@name='chat_type']");
		result = '<form name="dochat" action="index.php" method="post">';
		result += '<table border="0"><tbody><tr><td rowspan="2">';
		result += '<input type="hidden" value="guild" name="cmd"/>';
		result += '<input type="hidden" value="dochat" name="subcmd"/>';
		result += '<input type="hidden" value="' + chatType.value + '" name="chat_type">';
		result += '<input type="hidden" value="' + chatConfirm.value + '" name="xc"/>';
		result += '<textarea align="center" cols="72" rows="2" name="msg" id="Helper:ChatTextArea"></textarea>';
		result += '</td><td>';
		result += '<input class="custominput" type="submit" value="Send" name="submit"/>';
		result += '</td><tr><td>';
		result += '</td></tr></tbody></table>';
		result += '</form>';
		messageCell.innerHTML = result;

		document.getElementById('Helper:ChatTextArea').addEventListener('keyup', function(evt) {if (evt.keyCode == 13) evt.target.form.submit()}, true);
		;
},

	updateTitanLogs: function() {
		if (!GM_getValue("enableTitanLog")) return;
		//need timer function
		var titanLogRefreshTime = GM_getValue("titanLogRefreshTime");
		var titanLog = System.getValueJSON("titanLog");
		if (titanLog && titanLog.lastUpdate) {
			if ((new Date()).getTime() - titanLog.lastUpdate.getTime() > (titanLogRefreshTime * 60 * 1000)) {
				//bring up the scout tower page and parse it
				//index.php?cmd=guild&subcmd=scouttower
				System.xmlhttp("index.php?cmd=guild&subcmd=scouttower", Helper.parseScoutTower);
			}
		}
	},

	parseScoutTower: function(responseText) {
		if (responseText) {
			var doc = System.createDocument(responseText);
			var titanTable = System.findNode("//table[tbody/tr/td/font[.='Titan']]", doc);
		} else {
			var titanTable = System.findNode("//table[tbody/tr/td/font[.='Titan']]");
		}
		var titanLog = System.getValueJSON("titanLog");
		if (!titanLog) titanLog = {}, titanLog.titans = [];
		if (titanTable) {
			titanHP = "";
			for (var i=1; i<titanTable.rows.length; i++) { //ignore title row
				var titan = {};
				var aRow = titanTable.rows[i];
				if (aRow.cells[3]) { // titan row
					titan.name = aRow.cells[0].firstChild.getAttribute('title');
					titan.realm = aRow.cells[1].textContent;
					titanHP = /(\d+)\/(\d+)/.exec(aRow.cells[2].textContent);
					if (!titanHP) break;
					titan.currentHP = titanHP[1]*1;
					titan.maxHP = titanHP[2]*1;
					titan.firstRow = aRow.innerHTML;
					titan.nextRow = titanTable.rows[i+1].innerHTML;

					//if the titan is already in the array, then update the record
					var titanFoundInLog = false;
					for (var j=0; j<titanLog.titans.length; j++) {
						if (titan.name == titanLog.titans[j].name && titan.realm == titanLog.titans[j].realm && titan.maxHP == titanLog.titans[j].maxHP) {
							if (titan.currentHP < titanLog.titans[j].currentHP) titanLog.titans.splice(j,1,titan);
							titanFoundInLog = true;
							break;
						}
					}
					//if not already in the array, then add the titan to the array
					if (!titanFoundInLog && titan.realm != 'Land of the Elements') {
						titanLog.titans.push(titan);
					}
				}
			}

			//if there are more than x titans in the log, then purge the oldest ones
			var titanLogLength = GM_getValue("titanLogLength")
			if (titanLog.titans.length > titanLogLength) {
				titanLog.titans.splice(0, titanLog.titans.length - titanLogLength);
			}

			//save the titanLog
			titanLog.lastUpdate = new Date();
			System.setValueJSON("titanLog", titanLog);

			//if on the scout tower screen, show the log
			if (location.search == "?cmd=guild&subcmd=scouttower") {
				var newRow = titanTable.insertRow(-1);
				newRow.innerHTML = '<td bgcolor="#cd9e4b" style="height: 1px;" colspan="4">Killed Titan History</td>';
				for (var j=titanLog.titans.length-1; j>=0; j--) {
					var titanLogTitan = {};
					titanLogTitan.name = titanLog.titans[j].name;
					titanLogTitan.realm = titanLog.titans[j].realm;
					titanLogTitan.maxHP = titanLog.titans[j].maxHP;
					//if the titan is already on the screen, then don't display it again
					var displayTitan = true;
					for (var i=1; i<titanTable.rows.length; i++) {
						var aRow = titanTable.rows[i];
						if (aRow.cells[3]) { // titan row
							var scoutTowerTitan = {};
							scoutTowerTitan.name = aRow.cells[0].firstChild.getAttribute('title');
							scoutTowerTitan.realm = aRow.cells[1].textContent;
							titanHP = /(\d+)\/(\d+)/.exec(aRow.cells[2].textContent);
							if (!titanHP) break;
							scoutTowerTitan.maxHP = titanHP[2]*1;
							if (titanLogTitan.name == scoutTowerTitan.name && titanLogTitan.realm == scoutTowerTitan.realm
								&& titanLogTitan.maxHP == scoutTowerTitan.maxHP) {
								displayTitan = false;
								break;
							}
						}
					}
					if (displayTitan) {
						var newRow = titanTable.insertRow(-1);
						newRow.innerHTML = titanLog.titans[j].firstRow;
						newRow = titanTable.insertRow(-1);
						newRow.innerHTML = titanLog.titans[j].nextRow;
						newRow = titanTable.insertRow(-1);
						newRow.innerHTML = '<td height="2" colspan="3"></td>';
						newRow = titanTable.insertRow(-1);
						newRow.innerHTML = '<td bgcolor="#cd9e4b" style="height: 1px;" colspan="4"></td>';
						newRow = titanTable.insertRow(-1);
						newRow.innerHTML = '<td height="2" colspan="3"></td>';
					}
				}
			}
		}


	},

	injectHomePageTwoLink: function() {
		var viewNewsArchiveLink = System.findNode("//a[@href='index.php?cmd=&subcmd=viewarchive']");
		if (viewNewsArchiveLink) {
			viewNewsArchiveLink.parentNode.innerHTML += '&nbsp;<a href="index.php?cmd=&subcmd=viewarchive&subcmd2=&page=2&search_text=">View Archive Page 2</a>'
		}
	},

	injectNotepad: function() {
		var textAreaNode = System.findNode("//textarea[@name='notes']");
		textAreaNode.cols = 90;
		textAreaNode.rows = 30;
	},

	injectTempleAlert: function() {
		//Checks to see if the temple is open for business.
		if (!GM_getValue("enableTempleAlert")) return;
		//need timer function
		var templeAlertLastUpdate = System.getValueJSON("templeAlertLastUpdate");
		var needToPray = GM_getValue("needToPray");
		if (templeAlertLastUpdate) {
			if (((new Date()).getTime() - templeAlertLastUpdate.getTime() > (60 * 60 * 1000))) {
				//bring up the temple page and parse it
				System.xmlhttp("index.php?cmd=temple", Helper.parseTemplePage);
			} else if (needToPray && window.location.search.search("cmd=temple") == -1) {
				Helper.displayDisconnectedFromGodsMessage();
			}
		} else {
			System.xmlhttp("index.php?cmd=temple", Helper.parseTemplePage);
		}
	},

	parseTemplePage: function(responseText) {
		//Checks to see if the temple is open for business.
		if (!GM_getValue("enableTempleAlert")) return;
		if (window.location.search.search("cmd=temple") == -1) {
			var doc = System.createDocument(responseText);
			var checkNeedToPray = System.findNode("//input[@value='Pray to Osverin']", doc);
		} else {
			var checkNeedToPray = System.findNode("//input[@value='Pray to Osverin']");
		}
		//if need to pray is set then put an alert in the LHS sidebar
		var needToPray = false;
		if (checkNeedToPray) {
			Helper.displayDisconnectedFromGodsMessage();
			needToPray = true;
		}
		GM_setValue("needToPray",needToPray);
		System.setValueJSON("templeAlertLastUpdate", new Date());
	},

	displayDisconnectedFromGodsMessage: function() {
		if (isNewUI != 1) { // old UI
			var logoutRow = System.findNode("//tr[td/a[@href='javascript:confirmLogout();']]");
			if (!logoutRow) return;
			var LHSSidebarTable = logoutRow.parentNode.parentNode;
			var newRow=LHSSidebarTable.insertRow(logoutRow.rowIndex+1);
			var newCell=newRow.insertCell(0);
			newCell.height = 10;
			newCell.align = 'center';
			newCell.innerHTML = '<table width="125" cellpadding="3" border="0" bgcolor="#4a3918" style="border: 1px solid rgb(198, 173, 115);"><tbody>' +
				'<tr><td align="center"><a href="index.php?cmd=temple"><font size="x-small" color="#ffffff">You feel disconnected from the gods.</font></a></td></tr>' +
				'</tbody></table>';
			var newRow=LHSSidebarTable.insertRow(logoutRow.rowIndex+1);
			var newCell=newRow.insertCell(0);
			newCell.height = 10;
		} else {
			var notificationUl = $('ul#notifications');
			notificationUl.append('<li class="notification"><a href="index.php?cmd=temple">' +
				'<span class="notification-icon"></span>' +
				'<p class="notification-content">Bow down to the gods.</p>' +
				'</a></li>');
		}
	},

	injectFindPlayer: function() {
		var findPlayerButton = $('input[value="Find Player"]');
		var levelToTest = Helper.characterLevel;
		var characterVirtualLevel = GM_getValue('characterVirtualLevel');
		if (characterVirtualLevel) levelToTest = characterVirtualLevel;
		var pvpLowerLevelModifier = (levelToTest > 205)? 10:5;
		var pvpUpperLevelModifier = (levelToTest >= 200)? 10:5;
		findPlayerButton.parent().append("&nbsp;<a href='index.php?cmd=findplayer&search_active=1&search_username=&search_level_min=" +
			(levelToTest - pvpLowerLevelModifier) + "&search_level_max=" + (levelToTest + pvpUpperLevelModifier) +
			"&search_in_guild=0'><span style='color:blue;'>Get PvP targets</span></a>" +
			"&nbsp;<a href='index.php?cmd=findplayer&search_active=1&search_username=&search_level_min=" +
			(levelToTest - 25) + "&search_level_max=" + (levelToTest + 25) +
			"&search_in_guild=0'><span style='color:blue;'>Get GvG targets</span></a>");

		//<a href="index.php?cmd=profile&player_id=4145241">Boeffie13</a>
		$('table[class="width_full"]').find('a[href*="player_id"]').each(function () {
			//javascript:openWindow('index.php?cmd=quickbuff&tid=920497',%20'fsQuickBuff',%20618,%201000,%20',scrollbars')
			var id = /player_id=([0-9]*)/.exec($(this).attr('href'));
			$(this).after("<a style='color:blue;font-size:10px;' "+Layout.quickBuffHref(id[1])+">[b]</a>");
		});
		if (!GM_getValue("showGoldOnFindPlayer")) return;
		var findPlayerTable = $('table.width_full');
		//add header
		findPlayerTable.find('tr:first td:eq(3)')
			.after('<td class="header">Gold</td>');
		//fix divider lengths for table
		findPlayerTable.find('td.divider').each(function(){
			$(this).attr("colSpan",7);
		});
		//add gold column and then go fetch data
		findPlayerTable.find('tr:not(:first):has(td:not(.divider))').each(function(){
			var playerHREF = $(this).find('td:first a').attr("href");
			$(this).find('td:eq(3)')
				.after('<td class="row"><span style="color:blue;" id="Gold' + playerHREF + '">?</span></td>');
			System.xmlhttp(playerHREF, Helper.findPlayerParseProfile, {"href": playerHREF});
		});
	},

	findPlayerParseProfile: function(responseText, callback) {
		var doc = System.createDocument(responseText);
		var goldValue = $(doc).find('b:contains("Gold:")').parents('td:first').next();
		var goldSpan = $('span[id="Gold' + callback.href + '"]');
		goldSpan.html(goldValue.text());
		//add VL if not equal to current level
		var levelElement = $(doc).find('b:contains("Level:")').parents('td:first').next();
		var levelValue = parseInt(levelElement.text().replace(/,/,""),10);
		var virtualLevelElement = $(doc).find('a:contains("VL")').parents('td:first').next();;
		var virtualLevelValue = parseInt(virtualLevelElement.text(),10);
		if (levelValue != virtualLevelValue) {
			goldSpan.parents('tr:first').children('td:eq(1)').append('&nbsp;<span style="color:blue;">(' + virtualLevelValue + ')</span>');
		}
		var pvpProtection = $(doc).find('td:contains("[not activated]"):last');
		if (pvpProtection.length == 0) {
			goldSpan.parents('tr:first').children('td:eq(0)').append('&nbsp;<img width="10" height="10" title="Protected" src="' + Data.redDot() + '">')
		}
	},

	injectCreatures: function() {
		var addUFSGWidgets = GM_getValue("addUFSGWidgets");
		if (!addUFSGWidgets) return;
		var creatureForm = System.findNode("//form");
		var fetchCreatureDataDiv = document.createElement("DIV");
		fetchCreatureDataDiv.innerHTML = "Fetch All Creature Data";
		fetchCreatureDataDiv.style.cursor = "pointer";
		fetchCreatureDataDiv.style.textDecoration = "underline";
		fetchCreatureDataDiv.style.color = "blue";
		fetchCreatureDataDiv.style.fontSize = "x-small";
		fetchCreatureDataDiv.align = "center";
		creatureForm.appendChild(fetchCreatureDataDiv);
		fetchCreatureDataDiv.addEventListener('click', Helper.fetchCreatureData, true);
	},

	fetchCreatureData: function() {
		var creatureTable = System.findNode("//table[@width='800']");
		creatureTable.rows[0].cells[0].colSpan = '8';
		creatureTable.rows[creatureTable.rows.length-1].cells[0].colSpan = '8';
		//title row
		var newCell = creatureTable.rows[1].insertCell(1);
		newCell.innerHTML = 'Class';
		newCell.setAttribute('class','tHeader');
		var newCell = creatureTable.rows[1].insertCell(-1);
		newCell.innerHTML = 'Attack';
		newCell.setAttribute('class','tHeader');
		var newCell = creatureTable.rows[1].insertCell(-1);
		newCell.innerHTML = 'Defense';
		newCell.setAttribute('class','tHeader');
		var newCell = creatureTable.rows[1].insertCell(-1);
		newCell.innerHTML = 'Armor';
		newCell.setAttribute('class','tHeader');
		var newCell = creatureTable.rows[1].insertCell(-1);
		newCell.innerHTML = 'Damage';
		newCell.setAttribute('class','tHeader');
		var newCell = creatureTable.rows[1].insertCell(-1);
		newCell.innerHTML = 'HP';
		newCell.setAttribute('class','tHeader');
		for (var i=2; i<creatureTable.rows.length-1; i++) {
			var aRow = creatureTable.rows[i];
			if (aRow.cells[1]) {
				var newCell = aRow.insertCell(1);
				var newCell = aRow.insertCell(-1);
				var newCell = aRow.insertCell(-1);
				var newCell = aRow.insertCell(-1);
				var newCell = aRow.insertCell(-1);
				var newCell = aRow.insertCell(-1);
				var href = aRow.cells[0].firstChild.getAttribute("href");
				System.xmlhttp(href, Helper.parseCreatureData, {"row": aRow});
			} else {
				aRow.cells[0].colSpan = '8';
			}
		}
	},

	parseCreatureData: function(responseText, callback) {
		var target = callback.row;
		var doc = System.createDocument(responseText);
		var classText = System.findNode("//td[b[.='Class:']]/following-sibling::td[1]", doc).textContent;
		var attackText = System.findNode("//td[b[.='Attack:']]/following-sibling::td[3]", doc).textContent;
		var defenseText = System.findNode("//td[b[.='Defense:']]/following-sibling::td[3]", doc).textContent;
		var armorText = System.findNode("//td[b[.='Armor:']]/following-sibling::td[3]", doc).textContent;
		var damageText = System.findNode("//td[b[.='Damage:']]/following-sibling::td[3]", doc).textContent;
		var hpText = System.findNode("//td[b[.='HP:']]/following-sibling::td[3]", doc).textContent;
		target.cells[1].innerHTML = classText;
		target.cells[3].innerHTML = attackText;
		target.cells[4].innerHTML = defenseText;
		target.cells[5].innerHTML = armorText;
		target.cells[6].innerHTML = damageText;
		target.cells[7].innerHTML = hpText;
	},

	injectFindBuffs: function(content) {
		if (!content) var content=Layout.notebookContent();
		var buffList = Data.buffList();
		Helper.sortBy='name';
		Helper.sortAsc=true;
		buffList.sort(Helper.stringSort);//.sort(function(a,b) { return a.name.toLowerCase() > b.name.toLowerCase() } );
		var injectionText = '';
		var extraProfile = GM_getValue("extraProfile");
		injectionText += '<table width="620" cellspacing="0" cellpadding="2" border="0" align="center"><tbody>';
		injectionText += '<tr><td rowspan="2" colspan="2" width="50%"><h1>Find Buff</h1></td>' +
			'<td align="right" style="color:brown;">Select buff to search for:</td>';

		injectionText += '<td align="left"><select style="width:140px;" id="selectedBuff">';
		for (var j = 0; j < buffList.length; j++) {
			injectionText += '<option value="' + buffList[j].skillId + '">' + buffList[j].name + '</option>';
		}
		injectionText += '</select></td></tr>';

		injectionText += '<tr>' +
			'<td align="right" style="color:brown;">Level 175 buffers only:</td><td align="left"><input id="level175" type="checkbox"></td></tr>';
		injectionText += '<tr><td align="right" style="color:brown;" width="30%">Nicknames of buff searched:&nbsp;</td><td align="left" id="buffNicks">&nbsp;</td>' +
			'<td align="right" style="color:brown;">Search guild members:</td><td align="left"><input id="guildMembers" type="checkbox" checked></td></tr>';
		injectionText += '<tr>' +
			'<td align="right" style="color:brown;"># potential buffers to search:&nbsp;</td><td align="left" id="potentialBuffers"></td>' +
			'<td align="right" style="color:brown;">Search allies/enemies:' +
				Helper.helpLink('Search Allies/Enemies', 'The checkbox enables searching your own personal allies/enemies list for buffs.<br><br>' +
				'Additional profiles to search can be added in the text field to the right, separated by commas.') + '</td>' +
			'<td align="left"><input id="alliesEnemies" type="checkbox" checked>' +
				'<input style="width:118px;" class="custominput" id="extraProfile" type="text" title="Extra profiles to search" value="' + (extraProfile?extraProfile:'') + '"></td></tr>';
		injectionText += '<tr><td align="right" style="color:brown;"># Buffers processed:&nbsp;</td><td align="left" id="buffersProcessed">0</td>' +
			'<td align="right" style="color:brown;">Search online list:</td><td align="left"><select style="width:140px;" id="onlinePlayers">' +
				'<option value="0">Disabled</option>' +
				'<option value="49">Short (fastest)</option>' +
				'<option value="47">Medium (medium)</option>' +
				'<option value="45">Long (slowest)</option>' +
				'</select></td></tr>';
		injectionText += '<tr><td align="right" style="color:brown;">Find buffers progress:&nbsp;</td><td align="left" width="310" id="bufferProgress">Idle</td>'+
			'<td align="center"><input id="clearresultsbutton" class="custombutton" type="button" value="Clear Results"></td><td align="center"><input id="findbuffsbutton" class="custombutton" type="button" value="Find Buffers"></td></tr>';
		injectionText += '</tbody></table><br>';
		injectionText += '<h1>Potential Buffers and Bio Info</h1><br>';
		injectionText += '<table width="620" cellspacing="0" cellpadding="3" border="1" align="center" id="buffTable"><tbody>';
		injectionText += '<tr><th width="120">&nbsp;Name</th><th width="200">&nbsp;Player Info</th><th>&nbsp;Notable Bio Text</th></tr>';
		injectionText += '</tbody></table><br>';
		injectionText += '<div class=content style="font-size:xx-small; color:brown; margin-left:28px; margin-right:28px;">Disclaimer: This functionality does a simple text search for the terms above. '+
			'It is not as smart as you are, so please do not judge the results too harshly. It does not search all online players, just a subset of those that have been on recently. ' +
			'The aim is to be fast and still return a good set of results. This feature is a work in progress, so it may be tweaked and enhanced over time.</div>';
		content.innerHTML = injectionText;
		document.getElementById("findbuffsbutton").addEventListener("click", Helper.findBuffsStart, true);
		document.getElementById("clearresultsbutton").addEventListener("click", Helper.findBuffsClearResults, true);
	},

	findBuffsClearResults: function(evt) {
		var buffTable = document.getElementById("buffTable");
		for (var j = buffTable.rows.length; j > 1; j--) {
			buffTable.deleteRow(j-1);
		}
		document.getElementById("buffNicks").innerHTML = '';
		var bufferProgress = document.getElementById("bufferProgress");
		bufferProgress.innerHTML = 'Idle.';
		bufferProgress.style.color = 'black';
		document.getElementById("potentialBuffers").innerHTML = '';
		document.getElementById("buffersProcessed").innerHTML = 0;
	},

	findBuffsStart: function(evt) {
		var selectedBuff = $('#selectedBuff').val();
		//create array of buff nicknames ...
		var buffList = Data.buffList();
		for (var j = 0; j < buffList.length; j++) {
			if (selectedBuff == buffList[j].skillId) {
				Helper.findBuffNicks = buffList[j].nicks;
				Helper.findBuffMinCastLevel = buffList[j].minCastLevel;
				break;
			}
		}
		document.getElementById("buffNicks").innerHTML = Helper.findBuffNicks;
		var bufferProgress = document.getElementById("bufferProgress");
		bufferProgress.innerHTML = 'Gathering list of potential buffers ...';
		bufferProgress.style.color = 'green';
		Helper.findBuffsLevel175Only = document.getElementById("level175").checked;
		document.getElementById("buffersProcessed").innerHTML = 0;
		Helper.onlinePlayers = new Array();
		Helper.extraProfile = document.getElementById("extraProfile").value;
		GM_setValue("extraProfile", Helper.extraProfile);
		//get list of players to search, starting with guild>manage page
		System.xmlhttp("index.php?cmd=guild&subcmd=manage", Helper.findBuffsParseGuildManagePage);
	},

	injectFindOther: function(content) {
		if (!content) var content=Layout.notebookContent();
		var buffList = Data.buffList();
		var injectionText = '';
		var textToSearchFor = GM_getValue("textToSearchFor");
		var extraProfile = GM_getValue("extraProfile");
		injectionText += '<table width="620" cellspacing="0" cellpadding="2" border="0" align="center"><tbody>';
		injectionText += '<tr><td rowspan="2" colspan="2" width="50%"><h1>Find Other</h1></td>' +
			'<td align="right" style="color:brown;">Select text to search for:</td>';

		injectionText += '<td align="left"><input style="width:140px;" class="custominput" id="textToSearchFor" type="text" title="Text to search for" value="' + (textToSearchFor?textToSearchFor:'') + '"></td></tr>';

		injectionText += '<tr>' +
			'<td align="right" style="color:brown;">Level 500+ players only:</td><td align="left"><input id="level175" type="checkbox"></td></tr>';
		injectionText += '<tr><td align="right" style="color:brown;" width="30%">Text searched for:&nbsp;</td><td align="left" id="buffNicks">&nbsp;</td>' +
			'<td align="right" style="color:brown;">Search guild members:</td><td align="left"><input id="guildMembers" type="checkbox" checked></td></tr>';
		injectionText += '<tr>' +
			'<td align="right" style="color:brown;"># potential players to search:&nbsp;</td><td align="left" id="potentialBuffers"></td>' +
			'<td align="right" style="color:brown;">Search allies/enemies:' +
				Helper.helpLink('Search Allies/Enemies', 'The checkbox enables searching your own personal allies/enemies list for buffs.<br><br>' +
				'Additional profiles to search can be added in the text field to the right, separated by commas.') + '</td>' +
			'<td align="left"><input id="alliesEnemies" type="checkbox" checked>' +
				'<input style="width:118px;" class="custominput" id="extraProfile" type="text" title="Extra profiles to search" value="' + (extraProfile?extraProfile:'') + '"></td></tr>';
		injectionText += '<tr><td align="right" style="color:brown;"># Players processed:&nbsp;</td><td align="left" id="buffersProcessed">0</td>' +
			'<td align="right" style="color:brown;">Search online list:</td><td align="left"><select style="width:140px;" id="onlinePlayers">' +
				'<option value="0">Disabled</option>' +
				'<option value="49">Short (fastest)</option>' +
				'<option value="47">Medium (medium)</option>' +
				'<option value="45">Long (slowest)</option>' +
				'</select></td></tr>';
		injectionText += '<tr><td align="right" style="color:brown;">Find Other progress:&nbsp;</td><td align="left" width="310" id="bufferProgress">Idle</td>'+
			'<td align="center"><input id="clearresultsbutton" class="custombutton" type="button" value="Clear Results"></td><td align="center"><input id="findbuffsbutton" class="custombutton" type="button" value="Find Buffers"></td></tr>';
		injectionText += '</tbody></table><br>';
		injectionText += '<h1>Potential Players and Bio Info</h1><br>';
		injectionText += '<table width="620" cellspacing="0" cellpadding="3" border="1" align="center" id="buffTable"><tbody>';
		injectionText += '<tr><th width="120">&nbsp;Name</th><th width="200">&nbsp;Player Info</th><th>&nbsp;Notable Bio Text</th></tr>';
		injectionText += '</tbody></table><br>';
		injectionText += '<div class=content style="font-size:xx-small; color:brown; margin-left:28px; margin-right:28px;">Disclaimer: This functionality does a simple text search for the terms above. '+
			'It is not as smart as you are, so please do not judge the results too harshly. It does not search all online players, just a subset of those that have been on recently. ' +
			'The aim is to be fast and still return a good set of results. This feature is a work in progress, so it may be tweaked and enhanced over time.</div>';
		content.innerHTML = injectionText;
		document.getElementById("findbuffsbutton").addEventListener("click", Helper.findOtherStart, true);
		document.getElementById("clearresultsbutton").addEventListener("click", Helper.findBuffsClearResults, true);
	},

	findOtherStart: function(evt) {
		var textToSearchFor = $('#textToSearchFor').val();
		//use existing array structure to save search text ...
		var textArray=textToSearchFor.split(",");
		var tempArray = new Array();
		for (i=0;i<textArray.length;i++) {
			tempArray.push(textArray[i].trim());
		}
		textToSearchFor = tempArray.join(",");
		Helper.findBuffNicks = textToSearchFor;
		Helper.findBuffMinCastLevel = 1;

		document.getElementById("buffNicks").innerHTML = Helper.findBuffNicks;
		var bufferProgress = document.getElementById("bufferProgress");
		bufferProgress.innerHTML = 'Gathering list of profiles to search ...';
		bufferProgress.style.color = 'green';
		Helper.findBuffsLevel175Only = document.getElementById("level175").checked;
		document.getElementById("buffersProcessed").innerHTML = 0;
		Helper.onlinePlayers = new Array();
		GM_setValue("textToSearchFor", textToSearchFor);
		Helper.extraProfile = document.getElementById("extraProfile").value;
		GM_setValue("extraProfile", Helper.extraProfile);
		//get list of players to search, starting with guild>manage page
		System.xmlhttp("index.php?cmd=guild&subcmd=manage", Helper.findBuffsParseGuildManagePage);
	},

	findBuffsParseGuildManagePage: function(responseText) {
		var doc = System.createDocument(responseText);
		var memberTableRows = $(doc).find('table:has(td:contains("Rank")[bgcolor="#C18B35"]):last').find('tr:gt(1):not(:has(td[colspan="5"]))');
		if (document.getElementById("guildMembers").checked) {
			memberTableRows.each(function(){
				var contactLink = $(this).find('a');
				var onMouseOver = $(contactLink).data('tipped');
				var lastActivity = /<td>Last Activity:<\/td><td>(\d+)d (\d+)h (\d+)m (\d+)s<\/td>/.exec(onMouseOver);
				var lastActivityDays = parseInt(lastActivity[1],10);
				var lastActivityHours = parseInt(lastActivity[2],10) + (lastActivityDays*24);
				var lastActivityMinutes = parseInt(lastActivity[3],10) + (lastActivityHours*60);
				//check if they are high enough level to cast the buff
				var virtualLevel = /<td>VL:<\/td><td>([,0-9]+)<\/td>/.exec(onMouseOver);
				var virtualLevel = parseInt(virtualLevel[1].replace(/,/g,""),10);
				var minPlayerVirtualLevel = 1;
				if (Helper.findBuffsLevel175Only) minPlayerVirtualLevel = 500;
				if (lastActivityMinutes < 5 && virtualLevel >= Helper.findBuffMinCastLevel && virtualLevel >= minPlayerVirtualLevel) {
					//add online player to search list (all but self)
					var onlinePlayer = contactLink.attr('href');
					if (Helper.characterName != $(this).find('td:eq(1)').text().trim()) Helper.onlinePlayers.push(onlinePlayer);
				}
			});
		}
		//continue with profile pages
		Helper.findBuffsParseProfilePageStart();
	},

	findBuffsParseProfilePageStart: function() {
		//if option enabled then parse profiles
		Helper.profilePagesToSearch = new Array();
		Helper.profilePagesToSearch.push("index.php?cmd=profile");
		var extraProfileArray = Helper.extraProfile.split(",");
		for (var i=0;i<extraProfileArray.length ;i++ ) {
			Helper.profilePagesToSearch.push("index.php?cmd=findplayer&search_active=1&search_level_max=&search_level_min=&search_username="+extraProfileArray[i]+"&search_show_first=1");
		}
		Helper.profilePagesToSearchProcessed = 0;
		if (document.getElementById("alliesEnemies").checked) {
			for (var i=0;i<Helper.profilePagesToSearch.length ;i++ ) {
				System.xmlhttp(Helper.profilePagesToSearch[i], Helper.findBuffsParseProfilePage);
			}
		} else {
			Helper.findBuffsParseOnlinePlayersStart();
		}
	},

	findBuffsParseProfilePage: function(responseText) {
		var doc = System.createDocument(responseText);
		var profileAlliesEnemies = $(doc).find('#profileLeftColumn').find('a[data-tipped*="Last Activity"]');
		profileAlliesEnemies.each(function(){
			var onMouseOver = $(this).data('tipped');
			var lastActivity = /<td>Last Activity:<\/td><td>(\d+)d (\d+)h (\d+)m (\d+)s<\/td>/.exec(onMouseOver);
			var lastActivityDays = parseInt(lastActivity[1],10);
			var lastActivityHours = parseInt(lastActivity[2],10) + (lastActivityDays*24);
			var lastActivityMinutes = parseInt(lastActivity[3],10) + (lastActivityHours*60);
			//check if they are high enough level to cast the buff
			var virtualLevel = /<td>VL:<\/td><td>([,0-9]+)<\/td>/.exec(onMouseOver);
			var virtualLevel = parseInt(virtualLevel[1].replace(/,/g,""),10);
			var minPlayerVirtualLevel = 1;
			if (Helper.findBuffsLevel175Only) minPlayerVirtualLevel = 500;
			if (lastActivityMinutes < 5 && virtualLevel >= Helper.findBuffMinCastLevel && virtualLevel >= minPlayerVirtualLevel) {
				//add online player to search list (all but self)
				var onlinePlayer = $(this).attr('href');
				if (Helper.characterName != $(this).text().trim()) Helper.onlinePlayers.push(onlinePlayer);
			}
		});
		//continue with online players
		Helper.profilePagesToSearchProcessed ++;
		if (Helper.profilePagesToSearchProcessed == Helper.profilePagesToSearch.length) {
			Helper.findBuffsParseOnlinePlayersStart();
		}
	},

	findBuffsParseOnlinePlayersStart: function() {
		//if option enabled then parse online players
		Helper.onlinePlayersSetting = document.getElementById("onlinePlayers").value;
		if (Helper.onlinePlayersSetting != 0) {
			System.xmlhttp('index.php?cmd=onlineplayers&page=1', Helper.findBuffsParseOnlinePlayers, {"page":1});
		} else {
			Helper.findBuffsParsePlayersForBuffs();
		}
	},

	findBuffsParseOnlinePlayers: function(responseText, callback) {
		var doc = System.createDocument(responseText);
		var playerRows = $(doc).find('table:contains("Username")>tbody>tr:has(td>a[href*="cmd=profile&player_id="])');
		var maxPage = parseInt($(doc).find('td:has(input[name="page"]):last').text().replace(/\D/g, ""),10);
		var curPage = parseInt($(doc).find('input[name="page"]:last').val().replace(/\D/g, ""),10);
		if (curPage != 1){
			playerRows.each(function(){
				var onlinePlayer = $(this).find('td:eq(1) a').attr("href");
				var onlinePlayerLevel = parseInt($(this).find('td:eq(2)').text().replace(/,/g,""),10);
				var onlinePlayerName = $(this).find('td:eq(1) a').text();
				var minPlayerVirtualLevel = 1;
				if (Helper.findBuffsLevel175Only) minPlayerVirtualLevel = 500;
				if (onlinePlayerLevel >= Helper.findBuffMinCastLevel && onlinePlayerLevel >= minPlayerVirtualLevel) {
					//add online player to search list (all but self)
					if (Helper.characterName != onlinePlayerName.trim()) Helper.onlinePlayers.push(onlinePlayer);
				}
			});
		}
		if (curPage < maxPage/*-maxPage+15*/) {
			var newPage = (curPage == 1) ? Math.round(Helper.onlinePlayersSetting * maxPage / 50) : (curPage+1);
			var bufferProgress = document.getElementById("bufferProgress");
			bufferProgress.innerHTML = 'Parsing online page ' + curPage + ' ...';
			System.xmlhttp('index.php?cmd=onlineplayers&page=' + newPage, Helper.findBuffsParseOnlinePlayers, {"page":newPage});
		}
		else {
			//all done so moving on
			Helper.findBuffsParsePlayersForBuffs();
		}
	},

	findBuffsParsePlayersForBuffs: function() {
		//remove duplicates
		Helper.onlinePlayers = Helper.onlinePlayers.removeDuplicates();
		var bufferProgress = document.getElementById("bufferProgress");
		//now need to parse player pages for buff ...
		document.getElementById("potentialBuffers").innerHTML = Helper.onlinePlayers.length;
		if (Helper.onlinePlayers.length <= 0) {
			bufferProgress.innerHTML = 'Done.';
			bufferProgress.style.color = 'blue';
			return
		}
		bufferProgress.innerHTML = 'Parsing player data ...';
		bufferProgress.style.color = 'green';

		for (var j = 0; j < Helper.onlinePlayers.length; j++) {
			System.xmlhttp(Helper.onlinePlayers[j], Helper.findBuffsParseProfileAndDisplay, {"href": Helper.onlinePlayers[j]});
		}
	},

	findBuffsParseProfileAndDisplay: function(responseText, callback) {
		var doc = System.createDocumentWithImages(responseText);
		//name and level
		if (isNewUI == 1) var playerName = $(doc).find('div#pCC h1:first').text();
		else var playerName = $(doc).find('h1:first').text();
		var levelElement = $(doc).find('td:contains("Level:"):last').next();
		var levelValue = parseInt(levelElement.text().replace(/,/g,""),10);
		var virtualLevelElement = $(doc).find('td:contains("VL:"):last').next();
		var virtualLevelValue = parseInt(virtualLevelElement.text().replace(/,/g,""),10);
		//last activity
		if (isNewUI == 1) var lastActivityElement = $(doc).find('div#pCC p:first');
		else var lastActivityElement = $(doc).find('h2[class="centered tiny"]');
		var lastActivity = /(\d+) mins, (\d+) secs/.exec(lastActivityElement.text());
		var lastActivityMinutes = parseInt(lastActivity[1],10);
		var lastActivityIMG = '<img width="10" height="10" title="Offline" src="' + Data.yellowDiamond() + '">';
		if (lastActivityMinutes < 2) {
			lastActivityIMG = '<img width="10" height="10" title="Offline" src="' + Data.greenDiamond() + '">';
		}
		//buffs
		var bioDiv = $(doc).find('div.innerColumnHeader:contains("Biography"):last');
		var bioCell = bioDiv.next();
		var buffNickArray = Helper.findBuffNicks.split(",");
		var buffTable = document.getElementById("buffTable")
		var textLineArray = new Array();
		var buffPosition = 0, startingPosition = 0, runningTotalPosition = 0;
		var bioTextToSearch = " "+bioCell.html()+" ";
		var buffRE = new RegExp("[^a-zA-Z](("+Helper.findBuffNicks.replace(/,/g,")|(")+"))[^a-zA-Z]", 'i');
		while (buffPosition != -1) {
			bioTextToSearch = bioTextToSearch.substr(startingPosition, bioTextToSearch.length);
			buffPosition = bioTextToSearch.search(buffRE);
			if (buffPosition != -1) {
				startingPosition = buffPosition + 1;
				runningTotalPosition += buffPosition;
				var prevBR = bioCell.html().lastIndexOf("<br>",runningTotalPosition-1);
				if (prevBR==-1) prevBR=0;
				var nextBR = bioCell.html().indexOf("<br>",runningTotalPosition);
				if (nextBR==-1 && bioCell.html().indexOf("<br>") != -1) nextBr=bioCell.html().length-5;
				var textLine = bioCell.html().substr(prevBR + 4, (nextBR - prevBR));
				textLine = textLine.replace(/(`~)|(~`)|(\{b\})|(\{\/b\})/g,'');
				textLineArray.push(textLine);
			}
		}
		textLineArray = textLineArray.removeDuplicates();
		//sustain
		var sustainText = $(doc).find('td:has(a:contains("Sustain")):last').next().find('table.tipped').data("tipped");
		if (sustainText !== undefined) {
			var sustainLevelRE = /Level<br>(\d+)%/;
			var sustainLevel = sustainLevelRE.exec(sustainText)[1];
		} else {
			sustainLevel = -1;
		}
		//extend
		var hasExtendBuff = $(doc).find('img.tipped[data-tipped*="Extend"]');

		//add row to table
		if (textLineArray.length > 0) {
			var newRow = buffTable.insertRow(-1);
			//name cell
			var newCell = newRow.insertCell(0);
			newCell.style.verticalAlign = 'top';
			var lastActivityIMG = '<img width="10" height="10" title="Recently Online" src="' + Data.yellowDiamond() + '">';
			if (lastActivityMinutes < 2) {
				lastActivityIMG = '<img width="10" height="10" title="Online" src="' + Data.greenDiamond() + '">';
			}
			playerHREF = callback.href;
			var bioTip = bioCell.html().replace(/'|"|\n/g,"");
			newCell.innerHTML = '<nobr>' + lastActivityIMG + '&nbsp;<a href="' + playerHREF + '" target="new" ' +
				//fix me - It kind works now, but not guaranteed?
				'class="tipped" data-tipped-options="hook: \'leftmiddle\'" ' + 
				'data-tipped="'+bioTip+'">' + playerName + '</a>' +
				'&nbsp;<span style="color:blue;">[<span class="a-reply" target_player="' + playerName +'" style="cursor:pointer; text-decoration:underline;">m</span>]</span>' + '</nobr><br>' +
				'<span style="color:gray;">Level:&nbsp;</span>' + levelValue + '&nbsp;(' + virtualLevelValue + ')';
			$(".a-reply").click(function(evt) {
				Helper.openQuickMsgDialog(evt.target.getAttribute("target_player"));
			});

			//player info cell
			var newCell = newRow.insertCell(1);
			var playerInfo = '<table><tbody><tr><td colspan="2" style="color:gray;" align="right" width="50%">Last Activity:</td><td colspan="2"><nobr>' + lastActivity[0] + '</nobr></td></tr>';
			playerInfo += '<tr><td style="color:gray;" align="right" width="25%">Sustain:</td><td width="25%" style="color:' + (sustainLevel>=100?'green':'red') + ';">' + sustainLevel + '%</td>' +
				'<td width="25%" style="color:gray;" align="right">Extend:</td><td width="25%">' + (hasExtendBuff.length > 0?'<span style="color:green;">Yes</span>':'<span style="color:red;">No</span>') + '</td></tr>';
			newCell.innerHTML = playerInfo;
			newCell.style.verticalAlign = 'top';
			//buff cell
			var newCell = newRow.insertCell(2);
			for (var i = 0; i < textLineArray.length; i++) {
				newCell.innerHTML += textLineArray[i] + '<br>';
			}
		}
		var processedBuffers = document.getElementById("buffersProcessed");
		var potentialBuffers = parseInt(document.getElementById("potentialBuffers").textContent,10);
		var processedBuffersCount = parseInt(processedBuffers.textContent,10);
		processedBuffers.innerHTML = (processedBuffersCount + 1);
		if (potentialBuffers == (processedBuffersCount + 1)) {
			var bufferProgress = document.getElementById("bufferProgress");
			bufferProgress.innerHTML = 'Done.';
			bufferProgress.style.color = 'blue';
		}
	},

	injectRPUpgrades: function() {  //jquery ready, minus xmlhttp
		var injectHere = $('b:contains("Guild Reputation")').closest('table').find('tr:eq(10) > td:first');
		injectHere.attr('align','center');
		injectHere.html('<span id="warningMessage" style="color:green;">Gathering active buffs ... please wait ... </span>');
		System.xmlhttp("index.php?cmd=profile", Helper.parseProfileAndPostWarnings);
	},

	parseProfileAndPostWarnings: function(responseText, callback) {//jquery ready, minus xmlhttp
		var doc = System.createDocumentWithImages(responseText);
		$(doc).find('img[src*="/skills/"]').each(function(){
				var onmouseover = $(this).data("tipped");
				var buffRE = /<center><b>([ a-zA-Z]+)<\/b>\s\(Level: (\d+)\)/.exec(onmouseover);

				if (!buffRE) { return true; } // same as continue in a for loop
				var buffName = buffRE[1];
				var buffLevel = buffRE[2];
				$('a[data-tipped*="'+buffName+' Level '+buffLevel+'"]').each(function(){
						$(this).parent().append("<br><nobr><span style='color:red;'>" + buffName + " " + buffLevel + " active</span></nobr>");
					});
			});
		var warningMessage = $("#warningMessage");
		warningMessage.html('Done');
		warningMessage.attr('style','color:blue');
	},

	useStairs: function() { //jquery ready
		//cmd=world&subcmd=usestairs&stairway_id=1645&x=6&y=11
		$('input[name="stairway_id"]:first').each(function(){window.location="index.php?cmd=world&subcmd=usestairs&stairway_id="+$(this).val();});
	},

	injectHelperMenu: function() { //jquery ready
		// don't put all the menu code here (but call if clicked) to minimize lag
		if (GM_getValue("hideHelperMenu")) return;
		if (isNewUI == 1) {
			var node=$('#statbar-container');
		} else {
			var node=$('div.top_banner');
		}
		if (node.length==0) return;
		node.before("<div align='center' style='position:absolute; top:0px; left:0px; color:yellow;font-weight:bold;cursor:pointer; text-decoration:underline; z-index:100' id=helperMenu nowrap>Helper Menu</div>");
		$('#helperMenu').bind("mouseover", Helper.showHelperMenu);
		$('#helperMenu').draggable();
		if (GM_getValue("keepHelperMenuOnScreen")) {
			$(document).ready(function(){  
				$(window).scroll(function () {  
					var offset = $(document).scrollTop() + "px";  
					$('#helperMenu').animate({top:offset},{duration:0,queue:false});  
				});  
			}); 
		}
	},

	showHelperMenu: function(evt) { //jqeury ready
		$('#helperMenu').unbind("mouseover", Helper.showHelperMenu);

		var actionMenu = {
			"Character" : [
				["BL", "Buff Log", "injectBuffLog"], ["COL", "Combat Log", "injectNotepadShowLogs"],
				["IM", "Inventory Manager", "injectInventoryManager"], ["RM", "Recipe Manager", "injectRecipeManager"],
				["QLM", "Quick Links", "injectQuickLinkManager"], ["CRM", "Create Maps", "injectCreateMap"]
			],
			"Actions" : [
				["FB", "Find Buffs", "injectFindBuffs"], ["FO", "Find Other", "injectFindOther"],
				["OP", "Online Players", "injectOnlinePlayers"], ["QS", "AH Quick Search", "injectAuctionSearch"]
			],
			"Guild" : [
				["GI", "Guild Inventory", "injectGuildInventoryManager"], ["GL", "Guild Log", "injectNewGuildLog"]
			],
			"Extra" : [
				["BD", "Best Damage Items", "injectCheckWearingItem"], ["QE", "Quick Extract", "insertQuickExtract"],
				["QW", "Quick Wear", "insertQuickWear"], ["BoxL", "FS Box Log", "injectFsBoxContent"],
				["CRL", "Creature Log", "injectMonsterLog"] //still needs work
			]
			};
		var html = "<div style='cursor:default; text-decoration:none; display:none; text-align:center; position:absolute; color:black; background-image:url(\"" + System.imageServer + "/skin/inner_bg.jpg\"); font-size:12px; -moz-border-radius:5px; -webkit-border-radius:5px; border:3px solid #cb7; z-index: 1' id=helperMenuDiv><style>.column{float: left;width: 180px;margin-right: 5px;} .column h3{background: #e0e0e0;font: bold 13px Arial;margin: 0 0 5px 0;}.column ul{margin: 0;padding: 0;list-style-type: none;}</style>";
		html += "<div class=column>";
			for (var key in actionMenu) {
				html += "<h3>"+key+"</h3><ul>";
				for (var i=0; i< actionMenu[key].length; i++) {
					html += "<li><span style='cursor:pointer; text-decoration:underline;' id=hm"+actionMenu[key][i][0]+" fn="+actionMenu[key][i][2]+">"+actionMenu[key][i][1]+"</span></li>";
				}
				html += "</ul>";
			}
		html += "<h3>FSH developer quick links</h3>";
		html += "<span class=a-reply target_player=TangTop style='cursor:pointer; text-decoration:underline;'>PM</span> <a href=index.php?cmd=profile&player_id=1346893>TangTop</a></br>";
		html += "<span class=a-reply target_player=jesiegel style='cursor:pointer; text-decoration:underline;'>PM</span> <a href=index.php?cmd=profile&player_id=1570854>Jesiegel</a></br>";
		html += "<span class=a-reply target_player=yuuzhan style='cursor:pointer; text-decoration:underline;'>PM</span> <a href=index.php?cmd=profile&player_id=1599987>yuuzhan</a></br>";
		html += "</div>";
		html += "</div>";
		$("#helperMenu").append(html);
		$("#helperMenu").click(function() {$("#helperMenuDiv").toggle("fast");});

		for (var key in actionMenu) {
			for (var i=0; i< actionMenu[key].length; i++) {
				document.getElementById("hm"+actionMenu[key][i][0]).addEventListener("click", Helper.callHelperFunction, true);
			}
		}
		$(".a-reply").click(function(evt) {
			Helper.openQuickMsgDialog(evt.target.getAttribute("target_player"));
		});
	},

	callHelperFunction: function(evt) { //jquery ready
		setTimeout(function() {
			$("#content").remove();
			$("body").append($("<style>.content {max-width:600px}</style><div id=content/>").hide());
			Helper[evt.target.getAttribute("fn")].call(Helper, document.getElementById("content"));
			$("#content").dialog({ width: 'auto', modal: true });
		}, 0);
	},

	injectQuickLinks: function() { //jquery ready
		// don't put all the menu code here (but call if clicked) to minimize lag
		var quickLinks = System.getValueJSON("quickLinks");
		if (!quickLinks) quickLinks=[];
		Helper.quickLinks = quickLinks;
		if (quickLinks.length<=0) return;
		if (isNewUI == 1) {
			var node=$('#statbar-container');
		} else {
			var node=$('div.top_banner');
		}
		if (node.length==0) return;
		var html = "<div style='cursor:pointer; text-decoration:underline; text-align:left; position:absolute; color:black; top:" + GM_getValue("quickLinksTopPx") + "px; left:" + GM_getValue("quickLinksLeftPx") + "px; " +
			"background-image:url(\"" + System.imageServer + "/skin/inner_bg.jpg\"); font-size:12px; " +
			"-moz-border-radius:5px; -webkit-border-radius:5px; border:3px solid #cb7; z-index: 1; width: 100px;' id=fshQuickLinks nowrap>";
		for (var i=0; i<quickLinks.length; i++) {
				html += '<li><span style="cursor:pointer; text-decoration:underline;"><a href="' + quickLinks[i].url + '"' +
					(quickLinks[i].newWindow?' target=new':"") +
					'>' + quickLinks[i].name + '</a></span></li>';
			
		}
		html += "</div>";
		node.before(html);
		$('#fshQuickLinks').draggable();
		if (GM_getValue("keepHelperMenuOnScreen")) {
			var quickLinksTopPx = parseInt(GM_getValue("quickLinksTopPx"));
			$(document).ready(function(){  
				$(window).scroll(function () {  
					var offset = quickLinksTopPx + $(document).scrollTop() + "px";  
					$('#fshQuickLinks').animate({top:offset},{duration:0,queue:false});  
				});  
			}); 
		}
	},

	injectCreateMap: function(content) {
		if (!content) content=Layout.notebookContent();
		System.setDefault("prevAreaMaps", "[]");
		content=$(content).html(Helper.makePageHeader('Create Maps','','','')+
			'<table width="620" cellspacing="0" cellpadding="2" border="0" align="center"><tbody>'+
			'<tr><td colspan=2 align=right>Min Level: <input id=minlvl class=custominput name=minlvl></td>'+
			'<td colspan=2 align=center>Max Level: <input id=maxlvl class=custominput name=maxlvl></td><td>'+
			'<input type=button id=createmap value="Create Map" class=custombutton></td></tr>'+
			'<tr><td colspan=5 id=maparea0 align=center></td><tr><td colspan=5><b>Previous Created Maps</b></td><tr id=prevmaps>'+
			'<td id=maparea1></td><td id=maparea2></td><td id=maparea3></td><td id=maparea4></td><td id=maparea5></td></tr></tbody></table>'+
			'<hr>Click on map to see full-size image<br/>If you do not see the image, try to lower the level difference.');
		$('#minlvl').val(Helper.characterLevel - 2);
		$('#maxlvl').val(Helper.characterLevel + 5);
		Helper.prevAreaMaps = System.getValueJSON('prevAreaMaps');
		$('#createmap').click(function() {
			System.xmlhttp("http://guide.fallensword.com/index.php?cmd=realms&index=0&search_name=&search_level_min="+
				$('#minlvl').val()+"&search_level_max="+$('#maxlvl').val()+"&sort_by=",
				Helper.makeAreaMap);
			});
		Helper.showPreviousMaps();
	},

	makeAreaMap: function(responseText) {
		Helper.areaMap = {};
		Helper.mapCount = 0;
		var doc=$(responseText);
		var maps=$("//a[href*='index.php?cmd=realms&subcmd=view&realm_id='][text!='']", doc);
		if (maps.length==0) {
			$('#maparea0').html("Cannot find maps.");
			return;
		}
		$('#maparea0').html("<br/>...loading area map image...<br/>");
		maps.each(function(){
			var el=$(this), url= "http://guide.fallensword.com/"+el.attr('href');
			if (!Helper.areaMap[el.text()]) {
				Helper.areaMap[el.text()] = {"url":url, "nb":[], "id":("m"+Helper.mapCount++), "lvl":el.closest('tr').children()[1].textContent};
			}
			});
		Helper.mapCountMax = Helper.mapCount;
		for (var map in Helper.areaMap) {
			System.xmlhttp(Helper.areaMap[map].url, Helper.getConnectedMaps, map);
		}
	},

	getConnectedMaps: function(responseText, map) {
		var doc=$(responseText);
		var maps = $("img[onmouseover*='Stairway to']", doc);
		maps.each(function(){
			var title=this.getAttribute("onmouseover").replace(/^.*Stairway to /,'').replace(/'\);/,'').replace(/\\/g,'');
			if (title.indexOf("Master Realm")>=0) Helper.areaMap[title]={"url":null, "nb":[], "id":("m"+Helper.mapCountMax++), "lvl":0};
			Helper.areaMap[map].nb.push(title);
			});
		$('#maparea0').html($('#maparea0').html()+map+", ");
		Helper.mapCount --;
		if (Helper.mapCount==0) {
			Helper.drawAreaMap(Helper.areaMap, 0, $('#minlvl').val(), $('#maxlvl').val());

			// store the map
			if (Helper.prevAreaMaps.length >= 5) Helper.prevAreaMaps.shift();
			Helper.prevAreaMaps.push({'map':Helper.areaMap,'minlvl':$('#minlvl').val(),'maxlvl':$('#maxlvl').val()});
			System.setValueJSON('prevAreaMaps', Helper.prevAreaMaps);
		}
	},

	drawAreaMap: function(areaMap, id, minlvl, maxlvl) {

		var src="http://chart.googleapis.com/chart?cht=gv&chl=graph{node[shape=box];label=\"\\n\\nFS Area Map\\nDrawn by dkwizard\";";
		var map, mapbg, nbbg, i;
		for (map in areaMap) {src+=areaMap[map].id+"[label=\""+map+
			(areaMap[map].lvl>0 ? ("\\n"+areaMap[map].lvl+"\"") : "\",fontcolor=brown")+
			(areaMap[map].lvl==Helper.characterLevel ? ",fontcolor=blue" : "")+
			"];";}
		for (map in areaMap) {
			for (i=0; i<areaMap[map].nb.length; i++) {
				if (map < areaMap[map].nb[i] || areaMap[map].nb[i].indexOf("Master Realm")>=0) {
					src += areaMap[map].id+"--"+(areaMap[areaMap[map].nb[i]] ? areaMap[areaMap[map].nb[i]].id : ('"'+areaMap[map].nb[i]+'"'))+";";
				}
			}
		}
		src = src.replace(/'/g,'`')+"}";
		previewsrc = src+"&chs="+(id==0?"540x240":"100x100");
		$('#maparea'+id).html("<div align=center><img id=imgarea"+id+" style='cursor:pointer' src='"+previewsrc+"' alt='If you still see this msg after 10 seconds, try to lower the lvl range!'><br/>"+
			"Lvl: "+minlvl+" - "+maxlvl+"</div>")
			.click(function(){
				Helper.lightBox("<div align=center><img src='"+src+"'><br/>Min lvl: "+minlvl+" - Max lvl: "+maxlvl+"</div>");
			});

	},

	lightBox: function(content) {

		if(!content){
			$('#ntz_modal').remove();
			$('#ntz_overlay').fadeOut(function(){$(this).remove();});
			return false;
		}
		$('body').append('<div id="ntz_overlay"><\/div>');
		$('#ntz_overlay').css({
			width     :   '100%',
			height    :   $(document).height(),
			position  :   'absolute',
			left      :   0,
			top       :   0,
			backgroundColor : '#000',
			zIndex    : 9990,
			opacity   :   0
		}).fadeTo(200, 0.5).click(function(){Helper.lightBox()});

		$('body').append('<div id="ntz_modal"><\/div>');
		$('#ntz_modal').css({
			position  : 'absolute',
			border    : '1px solid #ccc',
			backgroundColor:'#ffffff',
			top       : $(document).scrollTop()+20,
			zIndex    : 9995,
			marginLeft: 20,
			cursor    : "pointer"
		}).html(content).click(function(){Helper.lightBox()});;

		$('#ntz_modal a:eq(0), #ntz_modal input, #ntz_modal textarea').focus();

	},

	showPreviousMaps: function() {
		var i = 0, aMap;
		for (i=0; i < Helper.prevAreaMaps.length; i++) {
			aMap = Helper.prevAreaMaps[i];
			Helper.drawAreaMap(aMap.map, Helper.prevAreaMaps.length-i, aMap.minlvl, aMap.maxlvl);
		}
	}
}; // end of var helper

// Anonymous "self-invoking" function
(function() {
	if (typeof unsafeWindow.jQuery == 'undefined') {
			// Load the script
			var script = document.createElement("script");
			script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
			script.type = 'text/javascript';
			document.getElementsByTagName("head")[0].appendChild(script);

			// Poll for jQuery to come into existance
			var checkReady = function(callback) {
				if (window.jQuery) {
					callback(jQuery);
				}
				else {
					window.setTimeout(function() { checkReady(callback); }, 20);
				}
			};

			// Start polling...
			checkReady(function($) {
				$(function() {
					Helper.onPageLoad(null);
				});
			});
	} else {
		Helper.onPageLoad(null);
	}
})();

}; // end of var main

if (navigator.userAgent.indexOf("Firefox")>0) {
	main();
} else {
	if (navigator.userAgent.indexOf("Chrome")>0) {
		var script = document.createElement("script");
		script.textContent = "(" + main.toString() + ")();";
		document.body.appendChild(script);
	}
}
