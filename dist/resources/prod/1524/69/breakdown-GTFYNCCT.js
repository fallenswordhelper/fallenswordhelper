import{a as T}from"./chunk-M4JACCK3.js";import{a as I}from"./chunk-XXAGLKST.js";import"./chunk-SZIMGQW7.js";import"./chunk-VE5GT7GN.js";import"./chunk-GGR64MXX.js";import{a as E}from"./chunk-TGOUID7L.js";import"./chunk-XZAUBGUX.js";import{a as v}from"./chunk-OYYOAYMV.js";import"./chunk-AHEBITCH.js";import"./chunk-DT7VHJIG.js";import{a as m}from"./chunk-EC54LTKY.js";import"./chunk-QLTDWVXW.js";import{a as x}from"./chunk-OX54JKUE.js";import{a as B}from"./chunk-DIPZYR4B.js";import"./chunk-R5RY2C2T.js";import{g as P}from"./chunk-L2AFCFBJ.js";import"./chunk-T7NYCLKF.js";import"./chunk-B3OVUKAM.js";import"./chunk-P2FYCUOG.js";import"./chunk-VUJR46HY.js";import{a as C}from"./chunk-GZKSMROH.js";import"./chunk-2S53WZYG.js";import"./chunk-YFAGS6ZD.js";import{a}from"./chunk-VHX5BADE.js";import{a as w}from"./chunk-3RC57HRE.js";import{b as s}from"./chunk-CLZYOHU5.js";import{a as o}from"./chunk-QXMVYJN6.js";import"./chunk-C2PRBDAE.js";import"./chunk-C6PSWFF5.js";import"./chunk-KD4PPF2P.js";import{a as f}from"./chunk-L4MPHVE4.js";import"./chunk-C3DMTIKU.js";import"./chunk-REHXFZMP.js";import"./chunk-WYX2VQXF.js";import"./chunk-KYNUAHCU.js";import{a as y}from"./chunk-OMYF6YAB.js";import{a as r}from"./chunk-QLI6SQ7D.js";import{b as k}from"./chunk-X53ITBGR.js";import"./chunk-VB2T76EA.js";import"./chunk-B6YTNR7S.js";import"./chunk-HJTXNVMV.js";import"./chunk-2PDPTZUM.js";import{S as h,p as b}from"./chunk-RRAQGRWM.js";import"./chunk-UMFA3PXI.js";function p(e){return T({data:{cmd:"composing",subcmd:"dobreakdown",item_list:e},dataType:"json"})}var l,d;function N(e){let t=e.id.replace(`${d}-item-`,"");l[t]&&l[t].craft==="Perfect"&&E(e)}function j(){let e=y("selectable-item",o(`${d}-items`));e.length!==0&&e.forEach(N)}function A(e){l=e.items;let t=x({className:"fshAC"});m(t,'<button class="fshBl">Perfect</button>'),B(s,t),r(t,j)}function u(e){a()||(d=e,I().then(A))}var c="disableBreakdownPrompts",i,n=[];function D(e){e.hide()}function F(e,t){e.animate({height:0},500,t)}function H(){let e=$("#composingMessageContainer");e.animate({opacity:0},500,f(F,e,f(D,e)))}function O(e,t){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":t,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}function M(e,t){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(O(e,t))),setTimeout(H,5e3)}function Q(e){e.error!==0?M(`Error: ${e.msg}`,"rgb(164, 28, 28)"):v(`${h+b}breakdown&m=1`)}function V(){p(n).then(Q)}function L(e){if(e.stopPropagation(),n.length===0){M("Error: No items selected.","rgb(164, 28, 28)");return}V()}function R(e){i&&e.target.id==="breakdown-selected-items"&&L(e)}function S(e){if(!w("selectable-item",e.target))return;let t=e.target.id.replace("composing-item-",""),g=n.indexOf(t);g===-1?n.push(t):n.splice(g,1)}function U(){i=!i,C(c,i)}function _(){m(s,`<table class="fshTblCenter"><tbody>${P(c)}</tbody></table>`)}function q(){r(o("breakdown-selected-items").parentNode,R,!0),r(o("composing-items"),S),r(o(c),U)}function z(){a()||(u("composing"),i=k(c),_(),q())}export{z as default};
//# sourceMappingURL=breakdown-GTFYNCCT.js.map