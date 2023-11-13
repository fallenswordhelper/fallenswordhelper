import{cr as t,Z as e,p as s,d as a,ac as n,g as i,a2 as r,o as c,s as d,aK as l,bF as o}from"./calfSystem-rn9Rc_nF.js"
import{e as u,s as h}from"./selfIdIs-UTusKVQ8.js"
import{i as f}from"./isArray-bNviZzJA.js"
import{i as m}from"./isChecked-k2ijSL8v.js"
let p=0
function g(t,e){return"checkbox"===p.tags[t]?`<input type="checkbox"${m(e)} disabled>`:function(t){return p.url&&""!==p.url[t]}(t)?`<a href="${p.url[t].replace("@replaceme@",e)}">${e}</a>`:e}function b(t,e){return`${t}<th>${e}</th>`}function y(t,e,s,a){let n="<tr>"
return function(t,e,s){return p.categoryField&&(0===e||s[e-1][p.categoryField]!==t[p.categoryField])}(e,s,a)&&(n+=`<td><span class="fshQs">${e[p.categoryField]}</span></td><td></td><td></td><td></td><td></td></tr><tr>`),n+=function(t){let e=""
for(let s=0;s<p.fields.length;s+=1)e+='<td class="fshCenter">',p.fields[s]!==p.categoryField&&(e+=`${g(s,t[p.fields[s]])}`),e+="</td>"
return e}(e),n+=`<td><span class="HelperTextLink" data-itemId="${s}" id="fshDel${s}">[Del]</span></td></tr>`,t+n}function k(){let t='<table cellspacing="2" cellpadding="2" class="fshLists" width="100%"><tr class="fshOr">'
t+=p.headers.reduce(b,""),t+="<th>Action</th></tr>",t+=p.currentItems.reduce(y,""),t+=function(){let t="<tr>"
for(let e=0;e<p.tags.length;e+=1)t+=`<td align=center><input type="${p.tags[e]}" class="custominput" id="fshIn${p.fields[e]}"></td>`
return t}(),t+=`<td><span class="HelperTextLink" id="fshAdd">[Add]</span></td></tr></table><table width="100%"><tr><td class="fshCenter"><textarea id="fshEd" class="fshEd">${n(p.currentItems)}</textarea></td></tr><tr><td class="fshCenter"><input id="fshSave" type="button" value="Save" class="custombutton">&nbsp;<input id="fshReset" type="button" value="Reset" class="custombutton"></td></tr></tbody></table>`
i(p.id)&&(a(t,i(p.id)),r(p.gmname,p.currentItems))}function $(t){d("injectAuctionSearch","deleteQuickItem")
const e=t.getAttribute("data-itemId")
p.currentItems.splice(e,1),k()}const A=t=>i(`fshIn${p.fields[t]}`)
function I(){d("injectAuctionSearch","addQuickItem")
const t=0===p.fields.length?i("fshIn0").value:function(){const t={}
for(let e=0;e<p.fields.length;e+=1)t[p.fields[e]]="checkbox"===p.tags[e]?A(e).checked:A(e).value
return t}()
p.currentItems.push(t),k()}function v(){d("injectAuctionSearch","saveRawEditor")
const t=l(i("fshEd").value)
f(t)&&(p.currentItems=t,k())}function w(){d("injectAuctionSearch","resetRawEditor"),"fshAso"===p.id?p.currentItems=l(o.quickSearchList):p.currentItems=[],k()}function x(t){c(t,u([[h("fshReset"),w],[h("fshSave"),v],[h("fshAdd"),I],[t=>t.id.startsWith("fshDel"),$]]))}function S(n){const i=n||s()
a(function(t,e,s,a){let n=""
""!==e&&(n=`&nbsp;(${e})`)
let i=""
return s&&(i=`[<span class="fshLink" id="${s}">${a}</span>]`),`<table width=100%><tbody><tr class="fshHeader"><td width="90%"><b>&nbsp;${t}</b>${n}<td width="10%" class="fshBtnBox">${i}</td></tr><tbody></table>`}("Trade Hub Quick Search","","","")+'<div>This screen allows you to set up some quick search templates for the Auction House. The Display on AH column indicates if the quick search will show on the short list on the Auction House main screen. A maximum of 36 items can show on this list (It will not show more than 36 even if you have more than 36 flagged). To edit items, either use the large text area below, or add a new entry and delete the old one. You can always reset the list to the default values.</div><div class="fshSmall" id="fshAso"></div>',i),p={id:"fshAso",headers:["Category","Nickname","Quick Search Text","Display in AH?"],fields:["category","nickname","searchname","displayOnAH"],tags:["text","text","text","checkbox"],url:["","",`${t}@replaceme@`,""],currentItems:e("quickSearchList")||[],gmname:"quickSearchList",categoryField:"category"},k(),x(i)}export{S as default}
//# sourceMappingURL=injectAuctionSearch-n8bBXS8G.js.map
