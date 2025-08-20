import{al as t,de as e,p as s,d as a,ay as n,g as c,an as i,o as r,s as d,bl as l,cp as o,ac as u}from"./calfSystem-CT1aM4VG.js"
import{e as h,s as f}from"./selfIdIs-CyrWimrU.js"
import{i as m}from"./isChecked-D_0do7nT.js"
let p=0
function g(t,e){return"checkbox"===p.tags[t]?`<input type="checkbox"${m(e)} disabled>`:function(t){return p.url&&""!==p.url[t]}(t)?`<a href="${p.url[t].replace("@replaceme@",e)}">${e}</a>`:e}function b(t,e){return`${t}<th>${e}</th>`}function y(t,e,s,a){let n="<tr>"
return function(t,e,s){return p.categoryField&&(0===e||s[e-1][p.categoryField]!==t[p.categoryField])}(e,s,a)&&(n+=`<td><span class="fshQs">${e[p.categoryField]}</span></td><td></td><td></td><td></td><td></td></tr><tr>`),n+=function(t){let e=""
for(let s=0;s<p.fields.length;s+=1)e+='<td class="fshCenter">',p.fields[s]!==p.categoryField&&(e+=`${g(s,t[p.fields[s]])}`),e+="</td>"
return e}(e),n+=`<td><span class="HelperTextLink" data-itemId="${s}" id="fshDel${s}">[Del]</span></td></tr>`,t+n}const $='<table cellspacing="2" cellpadding="2" class="fshLists" width="100%"><tr class="fshOr">',k='<td><span class="HelperTextLink" id="fshAdd">[Add]</span></td></tr></table><table width="100%"><tr><td class="fshCenter"><textarea id="fshEd" class="fshEd">',I='</textarea></td></tr><tr><td class="fshCenter"><input id="fshSave" type="button" value="Save" class="custombutton">&nbsp;<input id="fshReset" type="button" value="Reset" class="custombutton"></td></tr></tbody></table>'
function A(){const t=`${$}${p.headers.reduce(b,"")}<th>Action</th></tr>${p.currentItems.reduce(y,"")}${function(){let t="<tr>"
for(let e=0;e<p.tags.length;e+=1)t+=`<td align=center><input type="${p.tags[e]}" class="custominput" id="fshIn${p.fields[e]}"></td>`
return t}()}${k}${n(p.currentItems)}${I}`
c(p.id)&&(a(t,c(p.id)),i(p.gmname,p.currentItems))}function x(t){d("injectAuctionSearch","deleteQuickItem")
const e=t.getAttribute("data-itemId")
p.currentItems.splice(e,1),A()}const v=t=>c(`fshIn${p.fields[t]}`)
function w(){d("injectAuctionSearch","addQuickItem")
const t=0===p.fields.length?c("fshIn0").value:function(){const t={}
for(let e=0;e<p.fields.length;e+=1)t[p.fields[e]]="checkbox"===p.tags[e]?v(e).checked:v(e).value
return t}()
p.currentItems.push(t),A()}function S(){d("injectAuctionSearch","saveRawEditor")
const t=l(c("fshEd").value)
u(t)&&(p.currentItems=t,A())}function H(){d("injectAuctionSearch","resetRawEditor"),"fshAso"===p.id?p.currentItems=l(o.quickSearchList):p.currentItems=[],A()}function j(t){r(t,h([[f("fshReset"),H],[f("fshSave"),S],[f("fshAdd"),w],[t=>t.id.startsWith("fshDel"),x]]))}function T(n){const c=n||s()
a(`<table width=100%><tbody><tr class="fshHeader"><td width="90%"><b>&nbsp;${"Trade Hub Quick Search"}</b><td width="10%" class="fshBtnBox"></td></tr><tbody></table><div>This screen allows you to set up some quick search templates for the Auction House. The Display on AH column indicates if the quick search will show on the short list on the Auction House main screen. A maximum of 36 items can show on this list (It will not show more than 36 even if you have more than 36 flagged). To edit items, either use the large text area below, or add a new entry and delete the old one. You can always reset the list to the default values.</div><div class="fshSmall" id="fshAso"></div>`,c),p={id:"fshAso",headers:["Category","Nickname","Quick Search Text","Display in AH?"],fields:["category","nickname","searchname","displayOnAH"],tags:["text","text","text","checkbox"],url:["","",`${e}@replaceme@`,""],currentItems:t("quickSearchList")||[],gmname:"quickSearchList",categoryField:"category"},A(),j(c)}export{T as default}
//# sourceMappingURL=injectAuctionSearch-CNhPvzZc.js.map
