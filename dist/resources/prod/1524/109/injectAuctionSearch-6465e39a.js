import{e as t,s as e}from"./selfIdIs-5290eb66.js"
import{cv as s,a0 as a,p as n,s as r,ae as i,g as c,a4 as d,o as l,aO as o,E as u,bJ as h}from"./calfSystem-2f15e074.js"
import{i as f}from"./isChecked-3968d2ec.js"
let m=0
function p(t,e){return"checkbox"===m.tags[t]?`<input type="checkbox"${f(e)} disabled>`:function(t){return m.url&&""!==m.url[t]}(t)?`<a href="${m.url[t].replace("@replaceme@",e)}">${e}</a>`:e}function g(t,e){return`${t}<th>${e}</th>`}function b(t,e,s,a){let n="<tr>"
return function(t,e,s){return m.categoryField&&(0===e||s[e-1][m.categoryField]!==t[m.categoryField])}(e,s,a)&&(n+=`<td><span class="fshQs">${e[m.categoryField]}</span></td><td></td><td></td><td></td><td></td></tr><tr>`),n+=function(t){let e=""
for(let s=0;s<m.fields.length;s+=1)e+='<td class="fshCenter">',m.fields[s]!==m.categoryField&&(e+=`${p(s,t[m.fields[s]])}`),e+="</td>"
return e}(e),n+=`<td><span class="HelperTextLink" data-itemId="${s}" id="fshDel${s}">[Del]</span></td></tr>`,t+n}function y(){let t='<table cellspacing="2" cellpadding="2" class="fshLists" width="100%"><tr class="fshOr">'
t+=m.headers.reduce(g,""),t+="<th>Action</th></tr>",t+=m.currentItems.reduce(b,""),t+=function(){let t="<tr>"
for(let e=0;e<m.tags.length;e+=1)t+=`<td align=center><input type="${m.tags[e]}" class="custominput" id="fshIn${m.fields[e]}"></td>`
return t}(),t+=`<td><span class="HelperTextLink" id="fshAdd">[Add]</span></td></tr></table><table width="100%"><tr><td class="fshCenter"><textarea id="fshEd" class="fshEd">${i(m.currentItems)}</textarea></td></tr><tr><td class="fshCenter"><input id="fshSave" type="button" value="Save" class="custombutton">&nbsp;<input id="fshReset" type="button" value="Reset" class="custombutton"></td></tr></tbody></table>`
c(m.id)&&(r(t,c(m.id)),d(m.gmname,m.currentItems))}function $(t){const e=t.getAttribute("data-itemId")
m.currentItems.splice(e,1),y()}const k=t=>c(`fshIn${m.fields[t]}`)
function I(){const t=0===m.fields.length?c("fshIn0").value:function(){const t={}
for(let e=0;e<m.fields.length;e+=1)t[m.fields[e]]="checkbox"===m.tags[e]?k(e).checked:k(e).value
return t}()
m.currentItems.push(t),y()}function v(){const t=o(c("fshEd").value)
u(t)&&(m.currentItems=t,y())}function x(){"fshAso"===m.id?m.currentItems=o(h.quickSearchList):m.currentItems=[],y()}function w(s){l(s,t([[e("fshReset"),x],[e("fshSave"),v],[e("fshAdd"),I],[t=>t.id.startsWith("fshDel"),$]]))}function A(t){const e=t||n()
r(function(t,e,s,a){let n=""
""!==e&&(n=`&nbsp;(${e})`)
let r=""
return s&&(r=`[<span class="fshLink" id="${s}">${a}</span>]`),`<table width=100%><tbody><tr class="fshHeader"><td width="90%"><b>&nbsp;${t}</b>${n}<td width="10%" class="fshBtnBox">${r}</td></tr><tbody></table>`}("Trade Hub Quick Search","","","")+'<div>This screen allows you to set up some quick search templates for the Auction House. The Display on AH column indicates if the quick search will show on the short list on the Auction House main screen. A maximum of 36 items can show on this list (It will not show more than 36 even if you have more than 36 flagged). To edit items, either use the large text area below, or add a new entry and delete the old one. You can always reset the list to the default values.</div><div class="fshSmall" id="fshAso"></div>',e),m={id:"fshAso",headers:["Category","Nickname","Quick Search Text","Display in AH?"],fields:["category","nickname","searchname","displayOnAH"],tags:["text","text","text","checkbox"],url:["","",`${s}@replaceme@`,""],currentItems:a("quickSearchList")||[],gmname:"quickSearchList",categoryField:"category"},y(),w(e)}export{A as default}
//# sourceMappingURL=injectAuctionSearch-6465e39a.js.map
