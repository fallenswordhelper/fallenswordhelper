import{a as T}from"./chunk-L24CU7ZY.js";import{a as I}from"./chunk-F7TINGPZ.js";import"./chunk-RGOXOHIK.js";import"./chunk-5ZB34E2Y.js";import"./chunk-AFMS4WCU.js";import{a as E}from"./chunk-BG6J4KBY.js";import"./chunk-RSHL5TEX.js";import{a as v}from"./chunk-SNJY6WFE.js";import"./chunk-SZUEAQD6.js";import"./chunk-RWEKY74O.js";import{a as m}from"./chunk-VTXK2OMK.js";import"./chunk-B3CGSESQ.js";import{a as x}from"./chunk-SJ4JHGNU.js";import{a as B}from"./chunk-4KLZTRYV.js";import"./chunk-AHV2UEZ3.js";import{g as P}from"./chunk-K3PJF25C.js";import"./chunk-GYG5KOQA.js";import"./chunk-CWXW6BIP.js";import"./chunk-B4ELP4GT.js";import"./chunk-YWEOEFMO.js";import{a as C}from"./chunk-M3UVKNJS.js";import"./chunk-XSDEDFDV.js";import"./chunk-3T3NCQXQ.js";import{a}from"./chunk-S4QW6F63.js";import{a as w}from"./chunk-74DT6TXN.js";import{b as s}from"./chunk-JRL4EUGF.js";import{a as o}from"./chunk-EGI62KCW.js";import"./chunk-2CPSGTYM.js";import"./chunk-XFCSBA6U.js";import"./chunk-4L4BW6XC.js";import{a as f}from"./chunk-6OIRWEPN.js";import"./chunk-VQMOGQ7P.js";import"./chunk-WNDIM2XK.js";import"./chunk-DA7DPQEG.js";import"./chunk-26GFOSBF.js";import{a as y}from"./chunk-HLPYXISZ.js";import{a as r}from"./chunk-EQLDKUD6.js";import{b as k}from"./chunk-WAWYOTCQ.js";import"./chunk-LYEPPGHA.js";import"./chunk-EHGMFAOI.js";import"./chunk-LAQBU75H.js";import"./chunk-S7INW7PN.js";import{S as h,p as b}from"./chunk-J2ILMRN6.js";import"./chunk-ZDQ6OSIO.js";function p(e){return T({data:{cmd:"composing",subcmd:"dobreakdown",item_list:e},dataType:"json"})}var l,d;function N(e){let t=e.id.replace(`${d}-item-`,"");l[t]&&l[t].craft==="Perfect"&&E(e)}function j(){let e=y("selectable-item",o(`${d}-items`));e.length!==0&&e.forEach(N)}function A(e){l=e.items;let t=x({className:"fshAC"});m(t,'<button class="fshBl">Perfect</button>'),B(s,t),r(t,j)}function u(e){a()||(d=e,I().then(A))}var c="disableBreakdownPrompts",i,n=[];function D(e){e.hide()}function F(e,t){e.animate({height:0},500,t)}function H(){let e=$("#composingMessageContainer");e.animate({opacity:0},500,f(F,e,f(D,e)))}function O(e,t){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":t,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}function M(e,t){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(O(e,t))),setTimeout(H,5e3)}function Q(e){e.error!==0?M(`Error: ${e.msg}`,"rgb(164, 28, 28)"):v(`${h+b}breakdown&m=1`)}function V(){p(n).then(Q)}function L(e){if(e.stopPropagation(),n.length===0){M("Error: No items selected.","rgb(164, 28, 28)");return}V()}function R(e){i&&e.target.id==="breakdown-selected-items"&&L(e)}function S(e){if(!w("selectable-item",e.target))return;let t=e.target.id.replace("composing-item-",""),g=n.indexOf(t);g===-1?n.push(t):n.splice(g,1)}function U(){i=!i,C(c,i)}function _(){m(s,`<table class="fshTblCenter"><tbody>${P(c)}</tbody></table>`)}function q(){r(o("breakdown-selected-items").parentNode,R,!0),r(o("composing-items"),S),r(o(c),U)}function z(){a()||(u("composing"),i=k(c),_(),q())}export{z as default};
//# sourceMappingURL=breakdown-JCX5PDQH.js.map
