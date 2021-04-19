import{bh as e,bH as t,B as s,z as a,bJ as n,o as i,p as r,ba as c,aq as d}from"./calfSystem-26fbeaeb.js"
import{e as l}from"./eventHandler5-989b63e7.js"
import{i as o}from"./isArray-f324e0ac.js"
import{i as u}from"./isChecked-6d3ab351.js"
import{a as h,m as f}from"./makePageTemplate-98b04ddb.js"
import{s as m}from"./selfIdIs-58423b87.js"
let p
function g(e,t){return"checkbox"===p.tags[e]?`<input type="checkbox"${u(t)} disabled>`:function(e){return p.url&&""!==p.url[e]}(e)?`<a href="${p.url[e].replace("@replaceme@",t)}">${t}</a>`:t}function b(e,t){return`${e}<th>${t}</th>`}function k(e,t,s,a){let n="<tr>"
return function(e,t,s){return p.categoryField&&(0===t||s[t-1][p.categoryField]!==e[p.categoryField])}(t,s,a)&&(n+=`<td><span class="fshQs">${t[p.categoryField]}</span></td><td></td><td></td><td></td><td></td></tr><tr>`),n+=function(e){let t=""
for(let s=0;s<p.fields.length;s+=1)t+='<td class="fshCenter">',p.fields[s]!==p.categoryField&&(t+=`${g(s,e[p.fields[s]])}`),t+="</td>"
return t}(t),n+=`<td><span class="HelperTextLink" data-itemId="${s}" id="fshDel${s}">[Del]</span></td></tr>`,e+n}function y(){let e='<table cellspacing="2" cellpadding="2" class="fshLists" width="100%"><tr class="fshOr">'
e+=p.headers.reduce(b,""),e+="<th>Action</th></tr>",e+=p.currentItems.reduce(k,""),e+=function(){let e="<tr>"
for(let t=0;t<p.tags.length;t+=1)e+=`<td align=center><input type="${p.tags[t]}" class="custominput" id="fshIn${p.fields[t]}"></td>`
return e}(),e+=`<td><span class="HelperTextLink" id="fshAdd">[Add]</span></td></tr></table><table width="100%"><tr><td class="fshCenter"><textarea cols=70 rows=20 id="fshEd">${JSON.stringify(p.currentItems)}</textarea></td></tr><tr><td class="fshCenter"><input id="fshSave" type="button" value="Save" class="custombutton">&nbsp;<input id="fshReset" type="button" value="Reset" class="custombutton"></td></tr></tbody></table>`
a(p.id)&&(s(e,a(p.id)),n(p.gmname,p.currentItems))}function I(e){const t=e.getAttribute("data-itemId")
p.currentItems.splice(t,1),y()}function w(){let e={}
e=0===p.fields.length?a("fshIn0").value:function(){const e={}
for(let t=0;t<p.fields.length;t+=1)"checkbox"===p.tags[t]?e[p.fields[t]]=a(`fshIn${p.fields[t]}`).checked:e[p.fields[t]]=a(`fshIn${p.fields[t]}`).value
return e}(),p.currentItems.push(e),y()}function x(){const e=c(a("fshEd").value)
o(e)&&(p.currentItems=e,y())}function v(){"fshAso"===p.id?p.currentItems=c(d.quickSearchList):p.currentItems=[],y()}function A(e){i(e,l([[m("fshReset"),v],[m("fshSave"),x],[m("fshAdd"),w],[e=>e.id.startsWith("fshDel"),I]]))}function $(a){const n=a||r
s(h("Trade Hub Quick Search","","","")+'<div>This screen allows you to set up some quick search templates for the Auction House. The Display on AH column indicates if the quick search will show on the short list on the Auction House main screen. A maximum of 36 items can show on this list (It will not show more than 36 even if you have more than 36 flagged). To edit items, either use the large text area below, or add a new entry and delete the old one. You can always reset the list to the default values.</div><div class="fshSmall" id="fshAso"></div>',n),p={id:"fshAso",headers:["Category","Nickname","Quick Search Text","Display in AH?"],fields:["category","nickname","searchname","displayOnAH"],tags:["text","text","text","checkbox"],url:["","",`${e}@replaceme@`,""],currentItems:t("quickSearchList")||[],gmname:"quickSearchList",categoryField:"category"},y(),A(n)}function L(e){const a=e||r
s(f({title:"Quick Links",comment:"",spanId:"",button:"",divId:"qla"}),a),p={id:"qla",headers:["Name","URL",'New [<span class="fshLink tip-static" data-tipped="Open page in a new window">?</span>]'],fields:["name","url","newWindow"],tags:["text","text","checkbox"],currentItems:t("quickLinks")||[],gmname:"quickLinks"},y(),A(a)}export{$ as injectAuctionSearch,L as injectQuickLinkManager}
//# sourceMappingURL=lists-70f39d54.js.map
