import{a as A,c as Ie}from"./chunk-AD3TUEKX.js";import{a as He}from"./chunk-BPBKFG7U.js";import"./chunk-CJSEYUUP.js";import{a as xe}from"./chunk-4LQP4WWY.js";import{a as Re}from"./chunk-XO2MZBIJ.js";import"./chunk-HSNA5MO6.js";import"./chunk-QJKQB6MT.js";import{a as ve}from"./chunk-S7SMEPY4.js";import{a as N}from"./chunk-U5B3SRJN.js";import"./chunk-PSLS3SHI.js";import"./chunk-J65VR5DR.js";import"./chunk-2ICPYDYS.js";import{a as Ee}from"./chunk-3AH4RSRQ.js";import{a as he}from"./chunk-5ECO4FLG.js";import"./chunk-MLOBOIWO.js";import{a as Me}from"./chunk-6OLNGI5Q.js";import{a as le}from"./chunk-KZNUAJBN.js";import{a as pe,b as u}from"./chunk-QB2MZ562.js";import{b as se}from"./chunk-J6JULGZM.js";import{a as H}from"./chunk-BEXBLZFZ.js";import{a as c}from"./chunk-IYM4T5IA.js";import{a as de}from"./chunk-5VQHDDXC.js";import{a as fe}from"./chunk-VR7FVJYV.js";import{a as x}from"./chunk-ERNA6O2Z.js";import{a as ue}from"./chunk-CQ4TDUT6.js";import"./chunk-ZMUSZ47M.js";import{a as be}from"./chunk-ZG7AZG2H.js";import"./chunk-WRWRVDAJ.js";import{a as te}from"./chunk-575OHPHR.js";import"./chunk-APVRIC2I.js";import"./chunk-XWTR3Y3Q.js";import"./chunk-QBOLKUGJ.js";import"./chunk-LBVFY7UY.js";import{b as g}from"./chunk-GEYLGSBT.js";import{a as ce}from"./chunk-2UNPHM4E.js";import"./chunk-77BSQLWR.js";import{a as ie}from"./chunk-756BBBV2.js";import{a as ne}from"./chunk-RJGNLEYE.js";import"./chunk-MHKH5FC5.js";import"./chunk-CJDJXL2F.js";import{a as O}from"./chunk-BLRY34YR.js";import"./chunk-CIFA6X4K.js";import{a as oe}from"./chunk-PSQKPSME.js";import{a as ye}from"./chunk-5UAQOJMI.js";import"./chunk-OWCXLNAL.js";import"./chunk-IFMWDUBM.js";import"./chunk-24KPH7IM.js";import{a as ge}from"./chunk-3J2YA6B7.js";import"./chunk-SDA4FQMK.js";import"./chunk-T6BAO7XX.js";import"./chunk-KCQPJD5H.js";import{a as f}from"./chunk-ZZZQT54L.js";import{a as ee}from"./chunk-EZHOHKGC.js";import"./chunk-R23QVEJA.js";import"./chunk-VXC5XTE7.js";import"./chunk-ML7SUXNI.js";import"./chunk-XY4KZRCS.js";import"./chunk-5IIHJLHJ.js";import"./chunk-5M4Z4TNO.js";import"./chunk-C3UZY667.js";import{a as i}from"./chunk-UAOZMKLO.js";import{a as m}from"./chunk-OLMGIENV.js";import{a as ae}from"./chunk-TICG7NTW.js";import"./chunk-7VZZ35FX.js";import{a as S}from"./chunk-EWDLMFWA.js";import"./chunk-6BZLLWOX.js";import"./chunk-M2ZMFQNM.js";import"./chunk-H7LEI34Q.js";import{a as L}from"./chunk-MZ7GLTZN.js";import"./chunk-GEUXEI3G.js";import"./chunk-NR4PY7IS.js";import"./chunk-WKK2D5SI.js";import{a as l}from"./chunk-CVQ7E5PW.js";import{a}from"./chunk-KN5ZC5BT.js";import{a as I}from"./chunk-DUQP22PP.js";import{a as y}from"./chunk-NDCVQHVH.js";import{a as s}from"./chunk-3Q2VMWIC.js";import"./chunk-ZOSMVBRJ.js";import"./chunk-ZJNDZYVS.js";import"./chunk-OUMBZBCQ.js";import{a as me}from"./chunk-RL27SC3C.js";import{a as p}from"./chunk-KCBAQFJY.js";import"./chunk-DM72I4Z3.js";import{a as re}from"./chunk-Y2LZWOTV.js";import"./chunk-I7LLJIV6.js";import{a as R}from"./chunk-6SHDCONG.js";import"./chunk-BWOLSDKS.js";import{f as X,v as Z}from"./chunk-RLOFFV7B.js";import{b as z}from"./chunk-XYKKLBWK.js";import{a as n}from"./chunk-BOMGPUDJ.js";var Fe=`<span class="guildReportSpinner" style="background-image: url('${z}ui/misc/spinner.gif');"></span>`;function Ge(e){a('<span class="fastWorn">You successfully recalled the item</span>',e)}function ke(e){a('<span class="fastWorn">Worn</span>',e)}function qe(e){window.openQuickMsgDialog(e.getAttribute("target_player"))}function we(e){return e.match(X)[1]}function We(e,t,o){o.r!==1&&(e==="recall"?Ge(t):ke(t))}function Te(e,t,o,r){Ie(A(t),we(t),o,r).then(n(We,r,e))}function Ce(e,t,o){Te(e,t,o,"recall")}function Ue(e,t){s("GuildReport","Fast BP"),Ce(e,t,0)}function Ke(e,t){s("GuildReport","Fast GS"),Ce(e,t,1)}function _e(e,t){s("GuildReport","Fast Wear"),Number(we(t))===Me()?ye(A(t)).then(n(ke,e)):Te(e,t,0,"wear")}var Qe=[["fast-bp",Ue],["fast-gs",Ke],["fast-wear",_e]];function Je(e){let t=e.parentNode.parentNode;if(!t)return;let{href:o}=t.children[0];!o||(Qe.find(n(he,e))[1](t,o),a(Fe,t))}var Ve=[["sendLink",Je],["a-reply",qe]];function $(){I(oe("table",g)[1],Ee(Ve))}var Se='<span class="sendLink fast-bp">Fast BP</span> | ',k='<span class="sendLink fast-gs">Fast GS</span>',Le=' | <span class="sendLink fast-wear">Fast Wear</span>',B,D,P,F,G;function Ye(){return B||(B=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),B}function je(){return P||(P=m({innerHTML:Se+k})),P.cloneNode(!0)}function ze(){return F||(F=m({innerHTML:Se+k+Le})),F.cloneNode(!0)}function Xe(){return D||(D=m({innerHTML:k})),D.cloneNode(!0)}function Ze(){return G||(G=m({innerHTML:k+Le})),G.cloneNode(!0)}var Oe=[[!0,!0,ze],[!0,!1,Ze],[!1,!0,je],[!1,!1,Xe]];function et(e,t,o){return o[0]===e&&o[1]===t}function q(e){let t=!Ye().test(e.previousElementSibling.innerHTML),o=e.children.length===2;return Oe.find(n(et,t,o))[2]()}function tt(e,t,o){return t[o]=e[o],t}function h(e){return l(e).sort(ue).reduce(n(tt,e),{})}var W;function ot(e,t,o,r){return e.myMap[r]!=="Ignore"&&(o[e.myMap[r]]?o[e.myMap[r]]+=t[r]:o[e.myMap[r]]=t[r]),o}function rt(e){let t=Math.max(Math.min(e,100),0),o,r,v=0;return t<50?(o=255,r=Math.round(5.1*t)):(r=255,o=Math.round(510-5.1*t)),`#${`000000${(o*65536+r*256+v).toString(16)}`.slice(-6)}`}function nt(e,t,o,r){return`${o}<tr><td>${r}</td><td style="background-color: ${rt((t[r]-e.minpoint)/(e.maxpoint-e.minpoint)*100)};">${t[r].toString()}</td></tr>`}function d(e,t){s("potReport","drawInventory");let o=h(l(t).reduce(n(ot,e,t),{}));a(`<table><tbody>${l(o).reduce(n(nt,e,o),"")}</tbody></table>`,W)}function Ne(e,t,o){W=m({id:"inventory"}),e.pottab1?d(e,t):x(o.parentNode.children[0],"change",n(d,e,t)),i(o,W)}function U(e){return ae("option",e)}var E,M;function Ae(){let e=He();return e.insertCell(-1),e.insertCell(-1),e}function K(e){let t=U();return t.value=e,t.text=e,t}function it(e,t){i(e,K(t[0]))}function mt(){return Re({style:{width:"130px"}})}function at(){if(!M){M=Ae();let e=mt();M.cells[1].dataset.tooltip='Set to "Ignore" to exclude from report',i(M.cells[1],e)}return M.cloneNode(!0)}function ct(e,t){let o=at();ge(t[0],o.cells[0]);let r=o.cells[1].children[0];i(r,K(t[1])),[r.name,r.value]=t,i(e.tBodies[0],o)}function $e(e,t,o){let r=ce({id:t,type:"button",value:o});i(e.cells[1],r)}function lt(e){let t=Ae();$e(t,"fshIgnoreAll","Ignore All"),O(t.cells[1],"&nbsp;"),$e(t,"fshReset","Reset"),i(e.tBodies[0],t)}function st(e,t){if(t.target.tagName==="SELECT"){let o=t.target,{value:r}=o;a("",o),i(o,K("Ignore")),S(e).forEach(n(it,o)),o.value=r}}function w(e){s("potReport","drawMapping");let t=de({innerHTML:"<tbody></tbody>"});E.replaceChild(t,E.children[0]),y(E,"mousedown",n(st,e.myMap)),f(3,c,[[5,3,S(e.myMap),0,n(ct,t),n(lt,t)]])}function Be(e,t){E=m({id:"mapping",innerHTML:"<p></p>"}),e.pottab2?w(e):x(t.parentNode.children[2],"change",n(w,e)),i(t,E)}var b="fsh_potMap",ft={pottab1:!1,pottab2:!1,pottab3:!1,myMap:{},minpoint:12,maxpoint:20};function pt(e,t){e.myMap[t]||(e.myMap[t]=t)}function ut(e,t){return l(t).forEach(n(pt,e)),h(e.myMap)}function dt(e){return m({id:"potReport",innerHTML:`<input id="pottab1" type="checkbox"${H(e.pottab1)}><label for="pottab1">Composed Potion Inventory</label><input id="pottab2" type="checkbox"${H(e.pottab2)}><label for="pottab2">Mapping</label><input id="pottab3" type="checkbox"${H(e.pottab3)}><label for="pottab3">Thresholds</label>`})}function bt(e,t){let o=m({id:"thresholds",innerHTML:`Min:<input id="minpoint" type="number" value="${e.minpoint}" min="0" max="999">Max:<input id="maxpoint" type="number" value="${e.maxpoint}" min="0" max="999">`});i(t,o)}function yt(e,t,o){o.target.tagName==="SELECT"&&(e.myMap[o.target.name]=o.target.value,u(b,e),d(e,t))}function gt(e,t,o){return e?t[o]="Ignore":t[o]=o,t}function ht(e,t,o){e.myMap=l(t).reduce(n(gt,o),{})}function De(e,t,o){ht(e,t,o),u(b,e),w(e),d(e,t)}function Et(e){return/^pottab\d$/.test(e.id)}function Mt(e,t){let o=t.id;e[o]=t.checked,u(b,e)}function vt(e,t){return[[N("fshIgnoreAll"),n(De,e,t,!0)],[N("fshReset"),n(De,e,t,null)],[Et,n(Mt,e)]]}function Rt(e,t,o){let r=o.target.id,v=le(o.target.value,0,999);v&&(e[r]=v,u(b,e),d(e,t))}function xt(e,t,o){y(o,"change",n(yt,e,t)),I(o,ve(vt(e,t))),y(o,"input",n(Rt,e,t))}function It(e,t){let o=g.lastElementChild.insertRow(2).insertCell(-1);return xt(e,t,o),o}function Ht(e,t){let o=dt(e),r=m({id:"panels"});i(o,r),Ne(e,t,r),Be(e,r),bt(e,r),i(It(e,t),o)}function kt(e,t){let o=L({},ft);L(o,ee(t,{})),o.myMap=ut(o,e),u(b,o),Ht(o,e)}function _(e){!g||pe(b).then(n(kt,e))}var Q,J,T;function wt(e,t){let o=J[t];i(o,e)}function Tt(e){if(e.endsWith(" (Potion)")){let t=e.slice(0,-9);T[t]=(T[t]||0)+1}}function Ct(e){Q.push(q(e)),Tt(e.previousElementSibling.innerHTML)}function St(){c([5,3,Q,0,wt,n(_,T)])}function V(){J=p("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),T={},Q=[],c([5,3,J,0,Ct,St])}function Lt(e){return`${se({last_login:R.membrList[e].last_login})}<a href="${Z}${R.membrList[e].id}">${e}</a> [ <span class="a-reply fshLink" target_player=${e}>m</span> ]`}function Nt(e){let t=re(e);R.membrList[t]&&a(Lt(t),e)}function Y(){let e=p('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b');c([5,3,e,0,Nt])}var C,Pe;function At(e){e.children[0].hasAttribute("bgcolor")&&(Pe=ne(C,e.children[0].children[0])),Pe||(e.className="fshHide")}function j(){if(C=te("user"),!C||!me('#pCC table table td[bgcolor="#DAA534"] b').some(ie(C)))return;let o=p("#pCC table table tr");c([5,2,o,0,At])}async function $t(){await xe(!1),f(3,Y)}function Bt(){be()||!fe()||($t(),f(2,j),f(3,V),$())}export{Bt as default};
//# sourceMappingURL=guildReport-VKPXA2A6.js.map
