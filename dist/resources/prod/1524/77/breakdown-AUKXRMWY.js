import{a as T}from"./chunk-A67PRXEA.js";import{a as I}from"./chunk-MSF6IU76.js";import"./chunk-6W36NTNM.js";import"./chunk-XWMEJVO2.js";import"./chunk-6N4AT5FK.js";import{a as P}from"./chunk-NCV4IZDE.js";import{a as v}from"./chunk-36GKXN3Q.js";import"./chunk-DCJXYOQS.js";import"./chunk-EW4KFSJU.js";import"./chunk-FGCHGAPB.js";import{a as m}from"./chunk-DJURCDAC.js";import"./chunk-K4A73PNG.js";import{a as E}from"./chunk-2RAEWUHY.js";import{a as x}from"./chunk-MPQTMPMU.js";import{a as y}from"./chunk-U6JCSF56.js";import"./chunk-XAX5HKDY.js";import{g as C}from"./chunk-GP52NI66.js";import"./chunk-WAXULKJZ.js";import"./chunk-ZL7L5RNG.js";import"./chunk-LJGQ6BIE.js";import"./chunk-RXZ343DN.js";import"./chunk-YYF4XEZN.js";import"./chunk-3FN7LFWY.js";import{a as B}from"./chunk-GGOZ3OO7.js";import"./chunk-MO44YMNC.js";import"./chunk-QB5S66YQ.js";import{a}from"./chunk-YXNNMQHM.js";import{a as w}from"./chunk-I6OWQH4S.js";import{b as s}from"./chunk-MXS6U56Z.js";import{a as o}from"./chunk-QJIXYOVR.js";import"./chunk-UHDN7CXZ.js";import"./chunk-PVJ32AKX.js";import"./chunk-QMUMVPKQ.js";import{a as f}from"./chunk-ANHXFVGQ.js";import"./chunk-2XSC56S6.js";import"./chunk-4D7SULLS.js";import"./chunk-RGJLWSH5.js";import"./chunk-IHC7UOJU.js";import{a as r}from"./chunk-D545QQO5.js";import{b as k}from"./chunk-PIEHJDPR.js";import"./chunk-Q3ZGTWEX.js";import"./chunk-Z5QM5T22.js";import{S as h,p as b}from"./chunk-N7OQJWUZ.js";import"./chunk-CAZ242LS.js";function p(e){return T({data:{cmd:"composing",subcmd:"dobreakdown",item_list:e},dataType:"json"})}var l,d;function N(e){let t=e.id.replace(`${d}-item-`,"");l[t]&&l[t].craft==="Perfect"&&P(e)}function j(){let e=E("selectable-item",o(`${d}-items`));e.length!==0&&e.forEach(N)}function A(e){l=e.items;let t=x({className:"fshAC"});m(t,'<button class="fshBl">Perfect</button>'),y(s,t),r(t,j)}function u(e){a()||(d=e,I().then(A))}var c="disableBreakdownPrompts",i,n=[];function D(e){e.hide()}function F(e,t){e.animate({height:0},500,t)}function H(){let e=$("#composingMessageContainer");e.animate({opacity:0},500,f(F,e,f(D,e)))}function O(e,t){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":t,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}function M(e,t){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(O(e,t))),setTimeout(H,5e3)}function Q(e){e.error!==0?M(`Error: ${e.msg}`,"rgb(164, 28, 28)"):v(`${h+b}breakdown&m=1`)}function V(){p(n).then(Q)}function L(e){if(e.stopPropagation(),n.length===0){M("Error: No items selected.","rgb(164, 28, 28)");return}V()}function R(e){i&&e.target.id==="breakdown-selected-items"&&L(e)}function S(e){if(!w("selectable-item",e.target))return;let t=e.target.id.replace("composing-item-",""),g=n.indexOf(t);g===-1?n.push(t):n.splice(g,1)}function U(){i=!i,B(c,i)}function _(){m(s,`<table class="fshTblCenter"><tbody>${C(c)}</tbody></table>`)}function q(){r(o("breakdown-selected-items").parentNode,R,!0),r(o("composing-items"),S),r(o(c),U)}function z(){a()||(u("composing"),i=k(c),_(),q())}export{z as default};
//# sourceMappingURL=breakdown-AUKXRMWY.js.map
