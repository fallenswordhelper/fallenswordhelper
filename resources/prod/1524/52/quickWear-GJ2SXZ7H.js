import{a as L}from"./chunk-LEUBG6ER.js";import{a as tt}from"./chunk-WKDUB5YR.js";import{a as I}from"./chunk-CISSZBW2.js";import"./chunk-QJKQB6MT.js";import{a as l,c as u}from"./chunk-FMNNSMDF.js";import{a as et}from"./chunk-EMG72XW6.js";import{a as X}from"./chunk-S7SMEPY4.js";import{a as Y}from"./chunk-U5B3SRJN.js";import{a as Z}from"./chunk-HZT465UH.js";import{c as z}from"./chunk-OB2PZNG6.js";import{a as K}from"./chunk-KSDULY6B.js";import{a as G}from"./chunk-NMCSNKGX.js";import{a as T}from"./chunk-QOBY52PG.js";import"./chunk-MLOBOIWO.js";import{a as J}from"./chunk-6OLNGI5Q.js";import{a as j}from"./chunk-DIZBX4UQ.js";import{f as N}from"./chunk-KFGNPQDV.js";import"./chunk-BEXBLZFZ.js";import{a as B}from"./chunk-WAW4DHQF.js";import{a as M}from"./chunk-5VQHDDXC.js";import{a as w}from"./chunk-ERNA6O2Z.js";import"./chunk-PEKO7VJA.js";import"./chunk-CQ4TDUT6.js";import{a as R}from"./chunk-WRWRVDAJ.js";import"./chunk-G5RZKOR2.js";import{a as F}from"./chunk-BP3EKJNE.js";import"./chunk-QBOLKUGJ.js";import"./chunk-LBVFY7UY.js";import{b as Q}from"./chunk-GEYLGSBT.js";import{a as P}from"./chunk-AYNHL3OP.js";import{a as U}from"./chunk-2UNPHM4E.js";import"./chunk-CJDJXL2F.js";import{a as f}from"./chunk-BLRY34YR.js";import"./chunk-CIFA6X4K.js";import{a as O,c as _}from"./chunk-5UAQOJMI.js";import"./chunk-OWCXLNAL.js";import"./chunk-IFMWDUBM.js";import"./chunk-24KPH7IM.js";import{a as V}from"./chunk-3J2YA6B7.js";import"./chunk-SDA4FQMK.js";import"./chunk-T6BAO7XX.js";import"./chunk-KCQPJD5H.js";import"./chunk-ZZZQT54L.js";import"./chunk-EZHOHKGC.js";import"./chunk-R23QVEJA.js";import"./chunk-VXC5XTE7.js";import{a as x}from"./chunk-ML7SUXNI.js";import"./chunk-XY4KZRCS.js";import"./chunk-5IIHJLHJ.js";import"./chunk-5M4Z4TNO.js";import{a as W}from"./chunk-C3UZY667.js";import{a as s}from"./chunk-UAOZMKLO.js";import{a as m}from"./chunk-OLMGIENV.js";import"./chunk-TICG7NTW.js";import"./chunk-7VZZ35FX.js";import{a as E}from"./chunk-EWDLMFWA.js";import"./chunk-6BZLLWOX.js";import"./chunk-M2ZMFQNM.js";import"./chunk-H7LEI34Q.js";import"./chunk-MZ7GLTZN.js";import"./chunk-GEUXEI3G.js";import"./chunk-NR4PY7IS.js";import"./chunk-WKK2D5SI.js";import"./chunk-CVQ7E5PW.js";import{a}from"./chunk-KN5ZC5BT.js";import{a as D}from"./chunk-DUQP22PP.js";import"./chunk-NDCVQHVH.js";import{a as q}from"./chunk-3Q2VMWIC.js";import"./chunk-ZOSMVBRJ.js";import"./chunk-ZJNDZYVS.js";import"./chunk-OUMBZBCQ.js";import"./chunk-DM72I4Z3.js";import"./chunk-Y2LZWOTV.js";import{b as A}from"./chunk-I7LLJIV6.js";import{a as k}from"./chunk-6SHDCONG.js";import"./chunk-BWOLSDKS.js";import{B as y,r as v}from"./chunk-RLOFFV7B.js";import{b as C}from"./chunk-XYKKLBWK.js";import{a as r}from"./chunk-BOMGPUDJ.js";function mt(){k.sortBy="n",k.sortAsc=!0}function at(t){return[10,12,15,16].indexOf(t.t)!==-1||t.n==="Zombie Coffin"?"smallLink":"notLink"}function ct(t){let e=C;return t.b===13699?e+=`composing/${t.x.d}_${t.x.c}.png`:e+=`items/${t.b}.gif`,e}function ft(t,e,o){let n=t.insertRow(-1);o.dom=n;let i="fshEq ",h="fshUse ";o.t<9?i+="smallLink":i+="notLink",h+=at(o),a(`<td class="fshCenter"><span class="${i}" data-itemid="${o.a}">Wear</span>&nbsp;|&nbsp;<span class="${h}" data-itemid="${o.a}">Use/Ext</span></td><td><img src="${ct(o)}" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${o.b}&amp;inv_id=${o.a}&amp;t=1&amp;p=${e}&amp;currentPlayerId=${e}" width="30" height="30" border="0"></td><td width="90%">&nbsp;${o.n}</td>`,n)}function lt(t){return L(String(t.id),t.name)}function ut(t){return L("0","All")+t.r.map(lt).join("")}function dt(t,e,o){o.items.sort(z).forEach(r(ft,t,e))}function pt(t){let e=M({width:"100%",innerHTML:`<thead><tr><th class="fshCenter" colspan="3">${ut(t)}</th></tr><tr class="fshHeader"><th class="fshCenter" width="20%">Actions</th><th colspan="2">Items</th></tr></thead>`}),o=B();return s(e,o),mt(),t.r.forEach(r(dt,o,J())),e}function H(t){let e=pt(t),o=m();return s(o,e),o}var d=(t,e)=>t+String(e);function ht(t,e,o){return U({checked:o===0,id:d(t,o),name:t,type:"radio"})}function bt(t,e,o,n){let i=et({className:"ui-state-default ui-corner-top"});return s(i,P({htmlFor:d(t,n),innerHTML:o})),n!==0&&w(i,"click",()=>{l(d(t,n),e[n])}),i}function kt(t,e,o){let n=j({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"});return t.map(r(bt,e,o)).forEach(r(s,n)),n}var yt=()=>m({className:"ui-tabs-panel ui-corner-bottom"});function g(t,e,o){let n=m({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),i=r(s,n);e.map(r(ht,o)).forEach(i);let b=e.map(yt);l(d(o,0),b[0]);let S=kt(e,o,b);l(`${o}-header`,S),s(n,S),b.forEach(i),a("",t),s(t,n)}function Et(t,e){t[e]?t[e].count+=1:t[e]={count:1,nicknameList:[]}}function ot(t,e){return`<a href="${v}${t}">${e}</a>`}function Lt(t){return t[1].nicknameList.length>0}function It(t){return`<tr><td>${t[0]}</td><td>${t[1].nicknameList.map(r(ot,t[0])).join(" ")}</td><td>${t[1].count}</td><td></td><td></td></tr>`}function Ht(t){return E(t).filter(Lt).map(It).join("")}function gt(t){return t.displayOnAH&&!t.found}function $t(t){return ot(t.searchname,t.nickname)}function St(t){return t.filter(gt).map($t).join(", ")}function wt(t){return t[1].nicknameList.length===0}function Ct(t){return`<tr><td>${t[0]}</td><td></td><td>${t[1].count}</td><td></td><td></td></tr>`}function vt(t){return E(t).filter(wt).map(Ct).join("")}function At(t,e){return`<table width="100%" cellspacing="2" cellpadding="2"><thead><tr><th colspan="5" class="fshCenter">Items from <a href="${y}">AH Quick Search</a> found in your inventory</th></tr><tr><th>Name</th><th>Nick Name</th><th>Inv Count</th><th>AH Min Price</th><th>AH BuyNow Price</th></tr></thead><tbody>${Ht(t)}<tr><td colspan="5"><hr></td></tr><tr><td>Did not find:</td><td colspan="4">${St(e)}</td></tr><tr><td colspan="5"><hr></td></tr></tbody><thead><tr><th colspan="5" class="fshCenter">Items NOT from <a href="${y}">AH Quick Search</a> found in your inventory</td></thead><tbody>${vt(t)}</tbody></table>`}function Tt(t,e,o){e===o.searchname&&(o.found=!0,t[e].nicknameList.indexOf(o.nickname)<0&&t[e].nicknameList.push(o.nickname))}function xt(t,e,o){let n=o.n;Et(t,n),e.forEach(r(Tt,t,n))}function Qt(t,e,o){o.items.forEach(r(xt,t,e))}function $(t){let e={},o=T("quickSearchList")||[];t.r.forEach(r(Qt,e,o));let n=m();return f(n,At(e,o)),n}var p="disableQuickWearPrompts",c,rt;function qt(t,e,o){o.r===0&&a(`<span class="fastWorn">${e}</span>`,t.parentNode)}function nt(t,e,o){q("QuickWear",`doAction - ${o}`),V("",t),t.classList.remove("smallLink"),t.classList.add("fshSpinner","fshSpin12"),e(t.dataset.itemid).then(r(qt,t,o))}function it(t){nt(t,_,"Used")}function Wt(t){c?it(t):K("Use/Extract Item","Are you sure you want to use/extract the item?",r(it,t))}function Ut(t){nt(t,O,"Worn")}function Dt(t,e,o){let n=o.dom;if(t==="0")n.classList.remove("fshHide");else{let i=t!==e.toString();Z(n,i)}}function Ft(t,e){let o=e.id;e.items.forEach(r(Dt,t,o))}function Pt(t){let e=t.dataset.folder;rt.r.forEach(r(Ft,e))}function jt(){c=!c,F(p,c)}function Nt(){return[[r(I,["smallLink","fshEq"]),Ut],[r(I,["smallLink","fshUse"]),Wt],[r(W,"fshFolder"),Pt],[Y(p),jt]]}function Bt(t){return t&&t.s&&x(t.r)}function Mt(t){s(t,m({className:"qwPref",innerHTML:N(p)}))}function st(t,e,o){s(o,t(e))}function Rt(t,e){u("qwtab-header",Mt),u("qwtab0",r(st,H,e)),u("qwtab1",r(st,$,e)),g(t,["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],"qwtab"),D(t,X(Nt()))}function Ot(t,e){Bt(e)&&(rt=e,Rt(t,e))}function Vt(t){let e=t||Q;!e||(f(e,"Getting item list from backpack..."),tt().then(r(Ot,e)),c=A(p),G("ui-dialog-titlebar-close").forEach(o=>o.blur()))}function _t(t){R()&&Vt(t)}export{_t as default};
//# sourceMappingURL=quickWear-GJ2SXZ7H.js.map
