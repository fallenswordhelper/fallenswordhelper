import{a as l}from"./chunk-6GL7CINS.js";import{a as I}from"./chunk-FKH4345H.js";import"./chunk-KWDLOCMB.js";import{a as p}from"./chunk-4INAK7SH.js";import{a as x}from"./chunk-NNE5H73N.js";import{a as o}from"./chunk-PU2PRHDJ.js";import{a as u}from"./chunk-YEJMMTQF.js";import{a as g}from"./chunk-TMVFWEKY.js";import{a as b}from"./chunk-4TLLI7G7.js";import{a as y,b as w}from"./chunk-J4TEPLA3.js";import"./chunk-J7YYTDVE.js";import"./chunk-4WC2EWBK.js";import"./chunk-4MZMNEIX.js";import{b as d}from"./chunk-4JW3DRCH.js";import{a as c}from"./chunk-D3KONKYS.js";import{a as n}from"./chunk-RC2D6Q5A.js";import"./chunk-UG5BYLND.js";import{a as f}from"./chunk-SPYLQF32.js";import{a as k}from"./chunk-E3DVO4DM.js";import{a as h}from"./chunk-QNTIOO4O.js";import"./chunk-KI4LHW6W.js";import"./chunk-47PUSJEZ.js";import"./chunk-NNH77V6F.js";import"./chunk-MWERZPAU.js";import{t as m}from"./chunk-3GR2FESE.js";import"./chunk-DKU5TE64.js";var v='<div>This screen allows you to set up some quick search templates for the Auction House. The Display on AH column indicates if the quick search will show on the short list on the Auction House main screen. A maximum of 36 items can show on this list (It will not show more than 36 even if you have more than 36 flagged). To edit items, either use the large text area below, or add a new entry and delete the old one. You can always reset the list to the default values.</div><div class="fshSmall" id="fshAso"></div>';function S(){return{id:"fshAso",headers:["Category","Nickname","Quick Search Text","Display in AH?"],fields:["category","nickname","searchname","displayOnAH"],tags:["text","text","text","checkbox"],url:["","",`${m}@replaceme@`,""],currentItems:o("quickSearchList")||[],gmname:"quickSearchList",categoryField:"category"}}var r;function H(e){return r.url&&r.url[e]!==""}function L(e,t){return r.tags[e]==="checkbox"?`<input type="checkbox"${b(t)} disabled>`:H(e)?`<a href="${r.url[e].replace("@replaceme@",t)}">${t}</a>`:t}function E(e){let t="";for(let s=0;s<r.fields.length;s+=1)t+='<td class="fshCenter">',r.fields[s]!==r.categoryField&&(t+=`${L(s,e[r.fields[s]])}`),t+="</td>";return t}function T(e,t){return`${e}<th>${t}</th>`}function q(e,t,s){return r.categoryField&&(t===0||s[t-1][r.categoryField]!==e[r.categoryField])}function C(e,t,s,$){let i="<tr>";return q(t,s,$)&&(i+=`<td><span class="fshQs">${t[r.categoryField]}</span></td><td></td><td></td><td></td><td></td></tr><tr>`),i+=E(t),i+=`<td><span class="HelperTextLink" data-itemId="${s}" id="fshDel${s}">[Del]</span></td></tr>`,e+i}function R(){let e="<tr>";for(let t=0;t<r.tags.length;t+=1)e+=`<td align=center><input type="${r.tags[t]}" class="custominput" id="fshIn${r.fields[t]}"></td>`;return e}function a(){let e='<table cellspacing="2" cellpadding="2" class="fshLists" width="100%"><tr class="fshOr">';e+=r.headers.reduce(T,""),e+="<th>Action</th></tr>",e+=r.currentItems.reduce(C,""),e+=R(),e+=`<td><span class="HelperTextLink" id="fshAdd">[Add]</span></td></tr></table><table width="100%"><tr><td class="fshCenter"><textarea id="fshEd" class="fshEd">${g(r.currentItems)}</textarea></td></tr><tr><td class="fshCenter"><input id="fshSave" type="button" value="Save" class="custombutton">&nbsp;<input id="fshReset" type="button" value="Reset" class="custombutton"></td></tr></tbody></table>`,n(r.id)&&(c(e,n(r.id)),x(r.gmname,r.currentItems))}function N(e){let t=e.getAttribute("data-itemId");r.currentItems.splice(t,1),a()}function O(){let e={};for(let t=0;t<r.fields.length;t+=1)r.tags[t]==="checkbox"?e[r.fields[t]]=n(`fshIn${r.fields[t]}`).checked:e[r.fields[t]]=n(`fshIn${r.fields[t]}`).value;return e}function Q(){let e=r.fields.length===0,t={};e?t=n("fshIn0").value:t=O(),r.currentItems.push(t),a()}function D(){let e=u(n("fshEd").value);p(e)&&(r.currentItems=e,a())}function P(){r.id==="fshAso"?r.currentItems=u(h.quickSearchList):r.currentItems=[],a()}function B(){return[[l("fshReset"),P],[l("fshSave"),D],[l("fshAdd"),Q],[e=>e.id.startsWith("fshDel"),N]]}function A(e){k(e,I(B()))}function lt(e){let t=e||d;c(y("Trade Hub Quick Search","","","")+v,t),r=S(),a(),A(t),f("ui-dialog-titlebar-close").forEach(s=>s.blur())}function ut(e){let t=e||d;c(w({title:"Quick Links",comment:"",spanId:"",button:"",divId:"qla"}),t),r={id:"qla",headers:["Name","URL",'New [<span class="fshLink" data-tooltip="Open page in a new window">?</span>]'],fields:["name","url","newWindow"],tags:["text","text","checkbox"],currentItems:o("quickLinks")||[],gmname:"quickLinks"},a(),A(t),f("ui-dialog-titlebar-close").forEach(s=>s.blur())}export{lt as injectAuctionSearch,ut as injectQuickLinkManager};
//# sourceMappingURL=lists-GDCANQ4U.js.map
