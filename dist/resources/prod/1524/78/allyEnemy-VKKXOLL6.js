import{a as T}from"./chunk-KNEDPV73.js";import"./chunk-2UTN5H7T.js";import"./chunk-RIHJKO7V.js";import{a as p}from"./chunk-WXTVWMFB.js";import{a as h}from"./chunk-AT7GKTGB.js";import{a as y}from"./chunk-37R3PW6S.js";import"./chunk-VZWB6W7T.js";import"./chunk-RVDTL5XA.js";import{a as v}from"./chunk-ZULCQNSW.js";import"./chunk-HZAVY5E5.js";import{a as $}from"./chunk-6XCNSTQO.js";import"./chunk-VJYVM6KC.js";import"./chunk-YP55UNC6.js";import"./chunk-G4Y2RVGL.js";import{a as Q}from"./chunk-WJGEKWR5.js";import{a as u}from"./chunk-AWJUUHCF.js";import"./chunk-RS7F7ZXV.js";import{a as M}from"./chunk-LLAHQI4W.js";import{a as A}from"./chunk-BBGQNVSZ.js";import{a as O}from"./chunk-BFPR54OB.js";import"./chunk-XBR44BTF.js";import"./chunk-VQ5IF6FG.js";import"./chunk-N42GCCAH.js";import"./chunk-AYEWWXLO.js";import"./chunk-34ME3L5F.js";import{b as d}from"./chunk-22MCRXZW.js";import"./chunk-NRWJMAHH.js";import"./chunk-K4B7GDYL.js";import"./chunk-KU6X3UZY.js";import{a as x}from"./chunk-HDOHD4T5.js";import"./chunk-WS7NDR34.js";import{a as I}from"./chunk-EUYAGFNE.js";import"./chunk-YQUJCTUE.js";import{a as C}from"./chunk-QC454MFH.js";import{a as L}from"./chunk-AXRQ5WVZ.js";import{a as c}from"./chunk-R6LOYYKU.js";import{a as m}from"./chunk-ZH46UF77.js";import"./chunk-NNEMTXQK.js";import"./chunk-EEFLVRLB.js";import{a as o}from"./chunk-BCLTLFAS.js";import"./chunk-FOYCX26O.js";import"./chunk-NYUH27F5.js";import"./chunk-RV2XOX2R.js";import"./chunk-YCSGQRQ3.js";import"./chunk-BVHFLUJI.js";import"./chunk-TRTGTDIN.js";import{a as P}from"./chunk-46ONZIIB.js";import"./chunk-S6LVOURD.js";import"./chunk-LXKLJ4E3.js";import"./chunk-VNX4IMNY.js";import{A as S,x as k,z as E}from"./chunk-KWOXJEE6.js";import{a as i}from"./chunk-GBEPYIIX.js";var r="enemy-buff-check-on",g="enemy-buff-check-off",s="enemy-send-message",l="enemy-quickbuff",b="enemy-quick-buff";var D=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]];function G(e,t){return e?t[1]:t[2]}function R(e,t){return t[0](d-e)}function _(e,t){let n=D.find(o(R,e));return n?G(t,n):"fshWhite"}function j(e,t){return`<a class="player-name tip-static ${_(e.last_login,t)}" data-tipped="<b>${e.username}</b><br><table><tbody><tr><td>Level:</td><td>${e.level}</td></tr><tr><td>Last Activity:</td><td>${T(e.last_login)}</td></tr></tbody></table>" href="${k}${e.id}">${e.username}</a>`}function H(){return i.hideBuffSelected?"":`<span class="${r}"></span>`}function U(){return i.hideGuildInfoMessage?"":`<span class="${s} enemy-icon guild-minibox-action tip-static" data-tipped="Send Message"></span>`}function q(){return i.hideGuildInfoBuff?"":`<span class="${l} enemy-icon guild-minibox-action tip-static" data-tipped="Quick Buff"></span>`}function z(e){return i.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade enemy-icon guild-minibox-action tip-static" href="${S}${e.username}" data-tipped="Secure Trade"></a>`}function F(e){return i.hideGuildInfoTrade?"":`<a class="enemy-trade enemy-icon guild-minibox-action tip-static" href="${E}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}function W(e){return d-e.last_login<1800}function J(e,t){return`<li class="player"><div class="player-row">${H()}${j(t,e)}</div><div class="guild-minibox-actions">${U()}${q()}${z(t)}${F(t)}</div></li>`}function a(e,t){return e.filter(W).map(o(J,t)).join("")}var K=[(e,t)=>e.length+t.length,(e,t)=>{if(!i.enableAllyOnlineList)return t.length},e=>{if(!i.enableEnemyOnlineList)return e.length}];function f(e){Q("allyEnemy",e)}function V(e,t,n){return n(e,t)===0}function X(e,t){return K.every(o(V,e,t))}function Y(e,t){let n="";i.enableAllyOnlineList&&(n+=a(e,!0)),i.enableEnemyOnlineList&&(n+=a(t,!1));let B=c("fshContactList");L("",B),u(B,n)}function N(e){let t=m(e._allies,[]),n=m(e._enemies,[]);X(t,n)||Y(t,n)}function Z(){f("resetList"),y(!0).then(N)}function w(e){f("toggleBuffSelected"),e.classList.toggle(r),e.classList.toggle(g)}function ee(e){f("msgPlayer"),window.openQuickMsgDialog(x(e.parentNode.previousElementSibling.lastElementChild))}function te(e){f("buffPlayer"),h(p(e.parentNode.previousElementSibling.lastElementChild.href))}function ne(){f("selectedBuff");let t=M(r,c("fshContactList")).map(n=>p(n.nextElementSibling.href)).join(",");h(t)}var ie=[[r,w],[g,w],[s,ee],[l,te],[b,ne]];function re(e){let{target:t}=e;if(t.id==="fshResetEnemy"){Z();return}v(ie)(e)}function oe(e){let t=A({id:"fshAllyEnemy",className:"minibox"}),n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div class="minibox-enemy"><ul id="fshContactList"></ul>';i.hideBuffSelected||(n+=`<ul class="${b}">Quick Buff Selected</ul>`),n+="</div></div>",u(t,n),O(C,t),P(t,re),N(e)}function fe(e){e&&$(3,oe,[e])}function se(){I()||y(!1).then(fe)}export{se as default};
//# sourceMappingURL=allyEnemy-VKKXOLL6.js.map