import{bb as t,bG as e,A as s,y as a,bI as n,o as i,p as r,b5 as c,Q as d,af as l}from"./calfSystem-37f70deb.js"
import{e as o}from"./eventHandler5-fbb70c55.js"
import{i as u}from"./isChecked-622b73bf.js"
import{a as f,m as h}from"./makePageTemplate-4a253bba.js"
import{s as m}from"./selfIdIs-392f9b4d.js"
let p
function b(t,e){return"checkbox"===p.tags[t]?`<input type="checkbox"${u(e)} disabled>`:function(t){return p.url&&""!==p.url[t]}(t)?`<a href="${p.url[t].replace("@replaceme@",e)}">${e}</a>`:e}function g(t,e){return`${t}<th>${e}</th>`}function k(t,e,s,a){let n="<tr>"
return function(t,e,s){return p.categoryField&&(0===e||s[e-1][p.categoryField]!==t[p.categoryField])}(e,s,a)&&(n+=`<td><span class="fshQs">${e[p.categoryField]}</span></td><td></td><td></td><td></td><td></td></tr><tr>`),n+=function(t){let e=""
for(let s=0;s<p.fields.length;s+=1)e+='<td class="fshCenter">',p.fields[s]!==p.categoryField&&(e+=`${b(s,t[p.fields[s]])}`),e+="</td>"
return e}(e),n+=`<td><span class="HelperTextLink" data-itemId="${s}" id="fshDel${s}">[Del]</span></td></tr>`,t+n}function y(){let t='<table cellspacing="2" cellpadding="2" class="fshLists" width="100%"><tr class="fshOr">'
t+=p.headers.reduce(g,""),t+="<th>Action</th></tr>",t+=p.currentItems.reduce(k,""),t+=function(){let t="<tr>"
for(let e=0;e<p.tags.length;e+=1)t+=`<td align=center><input type="${p.tags[e]}" class="custominput" id="fshIn${p.fields[e]}"></td>`
return t}(),t+=`<td><span class="HelperTextLink" id="fshAdd">[Add]</span></td></tr></table><table width="100%"><tr><td class="fshCenter"><textarea cols=70 rows=20 id="fshEd">${JSON.stringify(p.currentItems)}</textarea></td></tr><tr><td class="fshCenter"><input id="fshSave" type="button" value="Save" class="custombutton">&nbsp;<input id="fshReset" type="button" value="Reset" class="custombutton"></td></tr></tbody></table>`
a(p.id)&&(s(t,a(p.id)),n(p.gmname,p.currentItems))}function I(t){const e=t.getAttribute("data-itemId")
p.currentItems.splice(e,1),y()}function w(){let t={}
t=0===p.fields.length?a("fshIn0").value:function(){const t={}
for(let e=0;e<p.fields.length;e+=1)"checkbox"===p.tags[e]?t[p.fields[e]]=a(`fshIn${p.fields[e]}`).checked:t[p.fields[e]]=a(`fshIn${p.fields[e]}`).value
return t}(),p.currentItems.push(t),y()}function x(){const t=c(a("fshEd").value)
d(t)&&(p.currentItems=t,y())}function v(){"fshAso"===p.id?p.currentItems=c(l.quickSearchList):p.currentItems=[],y()}function A(t){i(t,o([[m("fshReset"),v],[m("fshSave"),x],[m("fshAdd"),w],[t=>t.id.startsWith("fshDel"),I]]))}function $(a){const n=a||r
s(f("Trade Hub Quick Search","","","")+'<div>This screen allows you to set up some quick search templates for the Auction House. The Display on AH column indicates if the quick search will show on the short list on the Auction House main screen. A maximum of 36 items can show on this list (It will not show more than 36 even if you have more than 36 flagged). To edit items, either use the large text area below, or add a new entry and delete the old one. You can always reset the list to the default values.</div><div class="fshSmall" id="fshAso"></div>',n),p={id:"fshAso",headers:["Category","Nickname","Quick Search Text","Display in AH?"],fields:["category","nickname","searchname","displayOnAH"],tags:["text","text","text","checkbox"],url:["","",`${t}@replaceme@`,""],currentItems:e("quickSearchList")||[],gmname:"quickSearchList",categoryField:"category"},y(),A(n)}function L(t){const a=t||r
s(h({title:"Quick Links",comment:"",spanId:"",button:"",divId:"qla"}),a),p={id:"qla",headers:["Name","URL",'New [<span class="fshLink tip-static" data-tipped="Open page in a new window">?</span>]'],fields:["name","url","newWindow"],tags:["text","text","checkbox"],currentItems:e("quickLinks")||[],gmname:"quickLinks"},y(),A(a)}export{$ as injectAuctionSearch,L as injectQuickLinkManager}
//# sourceMappingURL=lists-0ee9d5fd.js.map
