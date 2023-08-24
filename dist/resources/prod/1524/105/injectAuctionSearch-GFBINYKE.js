import{a as w,b as o}from"./chunk-AO7WAFDB.js";import{a as k}from"./chunk-4O5GFJ5F.js";import{a as x}from"./chunk-E5MEP6I5.js";import"./chunk-JFV47WCR.js";import{a as g}from"./chunk-SY2OGTK4.js";import{a as l}from"./chunk-MHWHHESW.js";import{a as p}from"./chunk-DLFQE7QF.js";import{a as I}from"./chunk-4KWKR7LL.js";import{b}from"./chunk-Q3ULPWYK.js";import{a as d}from"./chunk-SSAI4GAC.js";import{a as y}from"./chunk-JCK66TTB.js";import{a as n}from"./chunk-SY4ES3W2.js";import"./chunk-S7AF3SZF.js";import"./chunk-TFKKNJKY.js";import"./chunk-ZFTJPJLX.js";import{b as m}from"./chunk-R7J7NY4A.js";import{u as h}from"./chunk-5ELKH2XV.js";import"./chunk-5ORZS6IQ.js";import"./chunk-BRQN5OZB.js";import"./chunk-BZJZQFW2.js";import"./chunk-QCTVAEOV.js";import"./chunk-VQDTHLUC.js";var v='<div>This screen allows you to set up some quick search templates for the Auction House. The Display on AH column indicates if the quick search will show on the short list on the Auction House main screen. A maximum of 36 items can show on this list (It will not show more than 36 even if you have more than 36 flagged). To edit items, either use the large text area below, or add a new entry and delete the old one. You can always reset the list to the default values.</div><div class="fshSmall" id="fshAso"></div>';function $(){return{id:"fshAso",headers:["Category","Nickname","Quick Search Text","Display in AH?"],fields:["category","nickname","searchname","displayOnAH"],tags:["text","text","text","checkbox"],url:["","",`${h}@replaceme@`,""],currentItems:x("quickSearchList")||[],gmname:"quickSearchList",categoryField:"category"}}function u(t,e,s,c){let a="";e!==""&&(a=`&nbsp;(${e})`);let f="";return s&&(f=`[<span class="fshLink" id="${s}">${c}</span>]`),`<table width=100%><tbody><tr class="fshHeader"><td width="90%"><b>&nbsp;${t}</b>${a}<td width="10%" class="fshBtnBox">${f}</td></tr><tbody></table>`}var r=0;function S(t){return r.url&&r.url[t]!==""}function H(t,e){return r.tags[t]==="checkbox"?`<input type="checkbox"${I(e)} disabled>`:S(t)?`<a href="${r.url[t].replace("@replaceme@",e)}">${e}</a>`:e}function E(t){let e="";for(let s=0;s<r.fields.length;s+=1)e+='<td class="fshCenter">',r.fields[s]!==r.categoryField&&(e+=`${H(s,t[r.fields[s]])}`),e+="</td>";return e}function L(t,e){return`${t}<th>${e}</th>`}function T(t,e,s){return r.categoryField&&(e===0||s[e-1][r.categoryField]!==t[r.categoryField])}function R(t,e,s,c){let a="<tr>";return T(e,s,c)&&(a+=`<td><span class="fshQs">${e[r.categoryField]}</span></td><td></td><td></td><td></td><td></td></tr><tr>`),a+=E(e),a+=`<td><span class="HelperTextLink" data-itemId="${s}" id="fshDel${s}">[Del]</span></td></tr>`,t+a}function C(){let t="<tr>";for(let e=0;e<r.tags.length;e+=1)t+=`<td align=center><input type="${r.tags[e]}" class="custominput" id="fshIn${r.fields[e]}"></td>`;return t}function i(){let t='<table cellspacing="2" cellpadding="2" class="fshLists" width="100%"><tr class="fshOr">';t+=r.headers.reduce(L,""),t+="<th>Action</th></tr>",t+=r.currentItems.reduce(R,""),t+=C(),t+=`<td><span class="HelperTextLink" id="fshAdd">[Add]</span></td></tr></table><table width="100%"><tr><td class="fshCenter"><textarea id="fshEd" class="fshEd">${p(r.currentItems)}</textarea></td></tr><tr><td class="fshCenter"><input id="fshSave" type="button" value="Save" class="custombutton">&nbsp;<input id="fshReset" type="button" value="Reset" class="custombutton"></td></tr></tbody></table>`,n(r.id)&&(d(t,n(r.id)),k(r.gmname,r.currentItems))}function O(t){let e=t.getAttribute("data-itemId");r.currentItems.splice(e,1),i()}var A=t=>n(`fshIn${r.fields[t]}`);function q(){let t={};for(let e=0;e<r.fields.length;e+=1)t[r.fields[e]]=r.tags[e]==="checkbox"?A(e).checked:A(e).value;return t}function B(){let e=r.fields.length===0?n("fshIn0").value:q();r.currentItems.push(e),i()}function D(){let t=l(n("fshEd").value);g(t)&&(r.currentItems=t,i())}function P(){r.id==="fshAso"?r.currentItems=l(m.quickSearchList):r.currentItems=[],i()}function Q(){return[[o("fshReset"),P],[o("fshSave"),D],[o("fshAdd"),B],[t=>t.id.startsWith("fshDel"),O]]}function N(t){y(t,w(Q()))}function F(t){let e=t||b();d(u("Trade Hub Quick Search","","","")+v,e),r=$(),i(),N(e)}export{F as default};
//# sourceMappingURL=injectAuctionSearch-GFBINYKE.js.map