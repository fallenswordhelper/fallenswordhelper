import{a as y}from"./chunk-6OTYFJKA.js";import{c as I}from"./chunk-B2ZIHU22.js";import"./chunk-4RDZXFR2.js";import{a as G,b as V}from"./chunk-ZWLPOFR3.js";import"./chunk-6NFNGU5M.js";import{a as q}from"./chunk-2GIEFQ3Z.js";import{a as S}from"./chunk-C56TQYL3.js";import{a as P}from"./chunk-F7TINGPZ.js";import"./chunk-RGOXOHIK.js";import{a as W}from"./chunk-CGP6PEOR.js";import"./chunk-TLN2JFU6.js";import{a as _}from"./chunk-Z2G7MA2G.js";import{a as j}from"./chunk-CCDGNSU4.js";import"./chunk-7K774P2L.js";import"./chunk-5ZB34E2Y.js";import"./chunk-67LC5BTJ.js";import{a as O}from"./chunk-WXZN5FUM.js";import{a as M}from"./chunk-XWYDVHON.js";import"./chunk-AFMS4WCU.js";import"./chunk-RSHL5TEX.js";import{b as D,c as R}from"./chunk-6XBHVXKT.js";import"./chunk-SGQ7A427.js";import"./chunk-66N7ZJ75.js";import{a as m}from"./chunk-KN743HJH.js";import"./chunk-SZUEAQD6.js";import"./chunk-RWEKY74O.js";import{a as l}from"./chunk-COVFZC6T.js";import{a as d}from"./chunk-D5NBLEHA.js";import"./chunk-VTXK2OMK.js";import{a as x}from"./chunk-TGDLGIAS.js";import"./chunk-V7YJKIIO.js";import"./chunk-PD6SZCQT.js";import"./chunk-B3CGSESQ.js";import{a as u}from"./chunk-SJ4JHGNU.js";import{a as w}from"./chunk-4KLZTRYV.js";import"./chunk-AHV2UEZ3.js";import"./chunk-3JDXB3EI.js";import"./chunk-TQVLXMST.js";import{a as k}from"./chunk-W5R4CDPA.js";import{a as h}from"./chunk-3F6JEXZ5.js";import"./chunk-X2CD2FQJ.js";import{a as $}from"./chunk-BBVGLVFU.js";import{a as g}from"./chunk-RJ63T2CH.js";import{a as H}from"./chunk-HGV77SOI.js";import"./chunk-WO4JQIFY.js";import"./chunk-N6BPKERE.js";import"./chunk-CWXW6BIP.js";import"./chunk-B4ELP4GT.js";import"./chunk-YWEOEFMO.js";import{a as F}from"./chunk-S4QW6F63.js";import{a as i}from"./chunk-74DT6TXN.js";import{a as n}from"./chunk-EGI62KCW.js";import{a as N}from"./chunk-2CPSGTYM.js";import"./chunk-XFCSBA6U.js";import{a as b}from"./chunk-4L4BW6XC.js";import{a as c}from"./chunk-6OIRWEPN.js";import"./chunk-GMG2NTG6.js";import"./chunk-VQMOGQ7P.js";import"./chunk-WNDIM2XK.js";import"./chunk-DA7DPQEG.js";import"./chunk-26GFOSBF.js";import{a}from"./chunk-EQLDKUD6.js";import{a as A,b as p}from"./chunk-WAWYOTCQ.js";import"./chunk-LYEPPGHA.js";import"./chunk-EHGMFAOI.js";import"./chunk-S7INW7PN.js";import{ua as f}from"./chunk-J2ILMRN6.js";import{a as E}from"./chunk-ZDQ6OSIO.js";var U=(e,t,s)=>e&&N(t,s),z=(e,t,s)=>!e&&!t&&!s,K=(e,t)=>{t.is_in_st&&e.classList.add("isInST")},L={};function X(){let e=n("item-div");if(!e){e=u({id:"item-div",className:"itemDiv"});let t=n("item-list"),s=H(f,t);for(;s.length;)s[0].classList.add("fshBlock"),w(e,s[0]);d(e,t)}return e}function Y(e,t){t.children[0].lastElementChild.children[0].children[0].checked=!1;let s=i("fshHide",t),o=e==="folderid0",r=i(e,t);U(s,o,r)&&(t.classList.remove("fshHide"),t.classList.add("fshBlock")),z(s,o,r)&&(t.classList.remove("fshBlock"),M(t))}function Z(e){l("trade","doHideFolder"),g(f,X()).forEach(c(Y,e.target.id))}function ee(e){e.target.nodeName==="SPAN"&&e.target.id.indexOf("folderid")!==-1&&Z(e)}function te(e){return` &ensp;<span id="folderid${e[0]}" class="fshLink fshNoWrap" fid=${e[0]}>${e[1]}</span> `}function se(e){let t=y({id:"fshFolderSelect",innerHTML:`<td colspan=6><span id="folderid0" class="fshLink" fid=0>All</span> &ensp;<span id="folderid-1" class="fshLink" fid="-1">Main</span>${b(e).map(te).join("")}`});a(t,ee);let s=n("item-list").parentNode.parentNode;j(s,'<tr id="fshShowSTs"><td align="center" colspan=6><label><input type="checkbox" id="itemsInSt" checked> Select items in ST</label></td></tr>'),d(t,s)}function ne(e,t,s){e.classList.add(`folderid${s.folder_id}`),L.fshHasST&&K(e,s),t.classList.add(`itemid${s.item_id}`),t.classList.add(`itemtype${s.type}`),s.guild_tag!==-1&&t.classList.add("isGuildTagged")}function ie(e){let t=e.children[0]?.lastElementChild.children[0]?.children[0];if(!t)return;let s=L[t.value];s&&ne(e,t,s)}function oe(e){let t=p("betaOptIn");t&&D("trade.processTrade"),L=e.items,g(f,n("item-list")).forEach(ie),se(e.folders),t&&R("trade.processTrade")}async function v(){if(F())return;let e=await P();m(3,oe,[e])}function B(e,t){return x(G,V,e,t)}var re=e=>W(e).previousElementSibling.children[0].children[0].children[0],me=e=>re(e).remove();function ae(e,t,s){s.s?(me(e),e.classList.remove("fshSpinner")):e.replaceWith(t)}async function le(e,t){let s=await e;if(s.s){let o=u({className:"fshSpinner fshSpinner12 fshRelative",style:{height:"16px"}}),[r]=t;r.replaceWith(o);let C=await B(t[1],t[2]);return ae(o,r,C),C}return s}function ce(e){e.s?I("Items sent successfully!"):I(e.e.message)}var de=()=>h('[name="sendItemList[]"]:checked'),fe=()=>k('form[name="sendItemForm"] [name="target_username"]').value,pe=e=>de().map(t=>[t,e,[t.value]]),he=e=>e.reduce(le,Promise.resolve({s:1}));async function ue(e,t){l("trade","oneByOne");let s=O({className:"fshSpinner fshRelative",style:{marginLeft:"40px"}}),o=e.target;o.replaceWith(s);let r=await he(t);ce(r),s.replaceWith(o)}function ye(e){let t=pe(fe());t.length&&ue(e,t)}function T(){let e=k('form[name="sendItemForm"] input[value="Send"]'),t=q({className:"fshBl",id:"oneByOneBtn",textContent:"OneByOne",type:"button"});_(t,e),a(t,ye)}var ge=[e=>e==="itemid-1",(e,t)=>e==="itemid-2"&&i("itemtype12",t),(e,t)=>e==="itemid-3"&&i("isGuildTagged",t),i],ke=(e,t)=>ge.some(s=>s(e,t)),Se=()=>n("itemsInSt")?.checked,Ie=(e,t)=>e||!i("isInST",t),J=e=>e.children[0].lastElementChild.children[0].children[0],Q=(e,t)=>{t.checked=e},Le=e=>{Q(!1,e)},ve=e=>{Q(!0,e)},Be=e=>` &ensp;<span id="itemid${e[1]}" class="fshCheckAll fshLink fshNoWrap">${e[0]}</span>`;function Te(e){let t=parseInt(n("fshSendHowMany").value,10);return $(t)?e.length:E.subcmd!=="-"?Math.min(100,t):t}function Ce(e,t){t.filter(c(Ie,Se())).map(J).filter(c(ke,e)).slice(0,Te(t)).forEach(ve)}function Ee(e){l("trade","doCheckAll");let t=n("item-div")||n("item-list"),s=h("table:not(.fshHide)",t);s.map(J).forEach(Le),Ce(e.target.id,s)}function Ae(e){i("fshCheckAll",e.target)&&Ee(e)}function Ne(){let e=p("sendClasses");return S(e)||S(A.sendClasses)}function He(e){let t=y({id:"fshSelectMultiple",innerHTML:`<td colspan=6>Select:&ensp;<span id="itemid-1" class="fshCheckAll fshLink fshNoWrap">All Items</span> &ensp;<span id="itemid-2" class="fshCheckAll fshLink fshNoWrap">All Resources</span> &ensp;<span id="itemid-3" class="fshCheckAll fshLink fshNoWrap">Guild Tagged</span>${Ne().map(Be).join("")} &ensp;How&nbsp;many:<input id="fshSendHowMany" type="text" class="custominput fshHowMany" value="all"></td>`});a(t,Ae),d(t,e.parentNode.parentNode)}function be(){let e=n("item-list");!e||(m(3,v),m(3,He,[e]),m(3,T))}export{be as default};
//# sourceMappingURL=trade-FJ2EUY52.js.map
