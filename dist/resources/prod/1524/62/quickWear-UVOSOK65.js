import{a as $}from"./chunk-YNIP63LS.js";import{a as G}from"./chunk-6JQJQXYZ.js";import{a as H}from"./chunk-7XHAXYC4.js";import{a as _}from"./chunk-6BR5AI4U.js";import{a as K}from"./chunk-2LA3HEU4.js";import"./chunk-EWN6QJ7N.js";import{a as Z,c as rt}from"./chunk-IQFNVJNI.js";import"./chunk-YKENGH6A.js";import"./chunk-Y4UDZE3F.js";import"./chunk-5RU2F3WM.js";import{a as d,c as u}from"./chunk-IKVU6C7R.js";import{a as Y}from"./chunk-DI54EZMH.js";import{a as z}from"./chunk-EGGRJEVI.js";import{a as tt}from"./chunk-5D4H3P6Q.js";import{a as X}from"./chunk-6HZYQ2M4.js";import"./chunk-P3PBGNPL.js";import{a as O}from"./chunk-AKZEGWGN.js";import{a as E}from"./chunk-XU5KP4C4.js";import"./chunk-LX6BJAAE.js";import"./chunk-HUVFJU6B.js";import"./chunk-L3KWCNKY.js";import{a as J}from"./chunk-WPPV5C7D.js";import"./chunk-5VTP3GQ6.js";import"./chunk-7N7KYOCQ.js";import{a as V}from"./chunk-EHOBQCEV.js";import{a as f}from"./chunk-6WXPRACV.js";import"./chunk-VML6VTTW.js";import"./chunk-73BUZD3L.js";import"./chunk-34NYN3UK.js";import{a as F}from"./chunk-75QA5EBI.js";import{a as W}from"./chunk-5RCOVVCV.js";import{a}from"./chunk-T3KU5OD5.js";import{a as s}from"./chunk-U6MH67WD.js";import"./chunk-67AICILL.js";import{a as N}from"./chunk-GWMYQJWD.js";import{a as M}from"./chunk-GR3YYUXL.js";import{a as x}from"./chunk-IPXXUBBR.js";import"./chunk-VF3UWJK5.js";import{a as q}from"./chunk-LO2RNLDP.js";import"./chunk-7UF2SMFT.js";import{f as j}from"./chunk-PQV7MLDM.js";import"./chunk-COCD6PSO.js";import"./chunk-7XTGUVW5.js";import"./chunk-CF4P6XS2.js";import"./chunk-G3R5NAPB.js";import"./chunk-CQ3PZTYF.js";import"./chunk-C5OE7PQU.js";import"./chunk-RY5JB5JV.js";import{a as R}from"./chunk-XDUXVHJP.js";import"./chunk-ZOPLLTNB.js";import"./chunk-HTCI2HHR.js";import{a as T}from"./chunk-VWMHLX6I.js";import"./chunk-SWDYJ63E.js";import{c as B}from"./chunk-CBUWKPHX.js";import"./chunk-456CPU7X.js";import"./chunk-4VL7TVGR.js";import{b as Q}from"./chunk-QOWOSZRG.js";import{a as c}from"./chunk-3WYOJJSD.js";import"./chunk-FM7OJ7NO.js";import"./chunk-HA7HK2NF.js";import"./chunk-YBC6MMGI.js";import"./chunk-U546IVLZ.js";import{a as y}from"./chunk-DXI2WUUD.js";import{a as o}from"./chunk-JQPK3YVC.js";import"./chunk-J2QMB37G.js";import{a as P}from"./chunk-HT7PAWAR.js";import"./chunk-T34QP7UC.js";import"./chunk-WHLURLGI.js";import"./chunk-M6FQTS4T.js";import{a as U}from"./chunk-VU3PZWN5.js";import{a as D}from"./chunk-2URZ55LX.js";import{b as C}from"./chunk-FTOV4GKD.js";import"./chunk-NY6FBFCL.js";import"./chunk-UWALNOSV.js";import"./chunk-27JTUOQX.js";import"./chunk-POXCGSYQ.js";import{D as L,b as v,t as A}from"./chunk-M72CYKCS.js";import{a as b}from"./chunk-ZP7KCDX3.js";function at(){b.sortBy="n",b.sortAsc=!0}function ct(t){return[10,12,15,16].indexOf(t.t)!==-1||t.n==="Zombie Coffin"?"smallLink":"notLink"}function mt(t){let r=v;return t.b===13699?r+=`composing/${t.x.d}_${t.x.c}.png`:r+=`items/${t.b}.gif`,r}function ft(t,r,e){let n=t.insertRow(-1);e.dom=n;let i="fshEq ",h="fshUse ";e.t<9?i+="smallLink":i+="notLink",h+=ct(e),c(`<td class="fshCenter"><span class="${i}" data-itemid="${e.a}">Wear</span>&nbsp;|&nbsp;<span class="${h}" data-itemid="${e.a}">Use/Ext</span></td><td><img src="${mt(e)}" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${e.b}&amp;inv_id=${e.a}&amp;t=1&amp;p=${r}&amp;currentPlayerId=${r}" width="30" height="30" border="0"></td><td width="90%">&nbsp;${e.n}</td>`,n)}function dt(t){return $(String(t.id),t.name)}function ut(t){return $("0","All")+t.r.inventories.map(dt).join("")}function lt(t,r,e){e.items.sort(B).forEach(o(ft,t,r))}function pt(t){let r=O({width:"100%",innerHTML:`<thead><tr><th class="fshCenter" colspan="3">${ut(t)}</th></tr><tr class="fshHeader"><th class="fshCenter" width="20%">Actions</th><th colspan="2">Items</th></tr></thead>`}),e=_();return s(r,e),at(),t.r.inventories.forEach(o(lt,e,J())),r}function w(t){let r=pt(t),e=a();return s(e,r),e}var l=(t,r)=>t+String(r);function ht(t,r,e){return z({checked:e===0,id:l(t,e),name:t,type:"radio"})}function kt(t,r,e,n){let i=X({className:"ui-state-default ui-corner-top"});return s(i,K({htmlFor:l(t,n),innerHTML:e})),n!==0&&E(i,"click",()=>{d(l(t,n),r[n])}),i}function bt(t,r,e){let n=Y({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"});return t.map(o(kt,r,e)).forEach(o(s,n)),n}var Lt=()=>a({className:"ui-tabs-panel ui-corner-bottom"});function I(t,r,e){let n=a({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),i=o(s,n);r.map(o(ht,e)).forEach(i);let k=r.map(Lt);d(l(e,0),k[0]);let g=bt(r,e,k);d(`${e}-header`,g),s(n,g),k.forEach(i),c("",t),s(t,n)}function yt(t,r){t[r]?t[r].count+=1:t[r]={count:1,nicknameList:[]}}function et(t,r){return`<a href="${A}${t}">${r}</a>`}function $t(t){return t[1].nicknameList.length>0}function Ht(t){return`<tr><td>${t[0]}</td><td>${t[1].nicknameList.map(o(et,t[0])).join(" ")}</td><td>${t[1].count}</td><td></td><td></td></tr>`}function wt(t){return y(t).filter($t).map(Ht).join("")}function It(t){return t.displayOnAH&&!t.found}function St(t){return et(t.searchname,t.nickname)}function gt(t){return t.filter(It).map(St).join(", ")}function Et(t){return t[1].nicknameList.length===0}function vt(t){return`<tr><td>${t[0]}</td><td></td><td>${t[1].count}</td><td></td><td></td></tr>`}function At(t){return y(t).filter(Et).map(vt).join("")}function Ct(t,r){return`<table width="100%" cellspacing="2" cellpadding="2"><thead><tr><th colspan="5" class="fshCenter">Items from <a href="${L}">AH Quick Search</a> found in your inventory</th></tr><tr><th>Name</th><th>Nick Name</th><th>Inv Count</th><th>AH Min Price</th><th>AH BuyNow Price</th></tr></thead><tbody>${wt(t)}<tr><td colspan="5"><hr></td></tr><tr><td>Did not find:</td><td colspan="4">${gt(r)}</td></tr><tr><td colspan="5"><hr></td></tr></tbody><thead><tr><th colspan="5" class="fshCenter">Items NOT from <a href="${L}">AH Quick Search</a> found in your inventory</td></thead><tbody>${At(t)}</tbody></table>`}function qt(t,r,e){r===e.searchname&&(e.found=!0,t[r].nicknameList.indexOf(e.nickname)<0&&t[r].nicknameList.push(e.nickname))}function xt(t,r,e){let n=e.n;yt(t,n),r.forEach(o(qt,t,n))}function Qt(t,r,e){e.items.forEach(o(xt,t,r))}function S(t){let r={},e=q("quickSearchList")||[];t.r.inventories.forEach(o(Qt,r,e));let n=a();return f(n,Ct(r,e)),n}var p="disableQuickWearPrompts",m,ot;function Tt(t,r,e){e.r===0&&c(`<span class="fastWorn">${r}</span>`,t.parentNode)}function nt(t,r,e){V("QuickWear",`doAction - ${e}`),W("",t),t.classList.remove("smallLink"),t.classList.add("fshSpinner","fshSpin12"),r(t.dataset.itemid).then(o(Tt,t,e))}function it(t){nt(t,rt,"Used")}function Ut(t){m?it(t):F("Use/Extract Item","Are you sure you want to use/extract the item?",o(it,t))}function Wt(t){nt(t,Z,"Worn")}function Ft(t,r,e){let n=e.dom;if(t==="0")n.classList.remove("fshHide");else{let i=t!==r.toString();tt(n,i)}}function Pt(t,r){let e=r.id;r.items.forEach(o(Ft,t,e))}function Dt(t){let r=t.dataset.folder;ot.r.inventories.forEach(o(Pt,r))}function Mt(){m=!m,R(p,m)}function Nt(){return[[o(H,["smallLink","fshEq"]),Wt],[o(H,["smallLink","fshUse"]),Ut],[o(T,"fshFolder"),Dt],[N(p),Mt]]}function Rt(t){return t&&t.s&&x(t.r?.inventories)}function jt(t){s(t,a({className:"qwPref",innerHTML:j(p)}))}function st(t,r,e){s(e,t(r))}function Bt(t,r){u("qwtab-header",jt),u("qwtab0",o(st,w,r)),u("qwtab1",o(st,S,r)),I(t,["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],"qwtab"),D(t,M(Nt()))}function Ot(t,r){Rt(r)&&(ot=r,Bt(t,r))}function Vt(t){let r=t||Q;!r||(f(r,"Getting item list from backpack..."),G().then(o(Ot,r)),m=C(p),U("ui-dialog-titlebar-close").forEach(e=>e.blur()))}function _t(t){P()&&Vt(t)}export{_t as default};
//# sourceMappingURL=quickWear-UVOSOK65.js.map
