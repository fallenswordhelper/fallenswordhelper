import{a as T}from"./chunk-SVGQULJG.js";import{a as I}from"./chunk-LHSBWIX4.js";import"./chunk-KLOX6R3U.js";import"./chunk-SIHGQP4D.js";import"./chunk-BD6KAYWJ.js";import{a as E}from"./chunk-KUOLYR64.js";import{a as v}from"./chunk-EPRJCLG4.js";import"./chunk-P4K3QOJQ.js";import{a as x}from"./chunk-MPTLNWVC.js";import"./chunk-F65VVICY.js";import"./chunk-EB645W7R.js";import{a as B}from"./chunk-SRVOPMOR.js";import{a as m}from"./chunk-DU4LUWGY.js";import"./chunk-N4PCIVE3.js";import{a as w}from"./chunk-NBYXTQFH.js";import{a as y}from"./chunk-XVTH24AL.js";import"./chunk-5AWGL262.js";import{d as C}from"./chunk-6NEU6UCN.js";import"./chunk-F5O454QA.js";import"./chunk-HEK53YUZ.js";import{b as s}from"./chunk-FJXTYPNU.js";import{a as o}from"./chunk-RVP3BZF7.js";import"./chunk-X7GADBEU.js";import"./chunk-7UPTHGH3.js";import"./chunk-HNXEOKKJ.js";import"./chunk-WLWXTJVR.js";import"./chunk-YYW2XVVC.js";import"./chunk-LGXHSUMA.js";import{a as P}from"./chunk-N7DXDYBU.js";import"./chunk-DZSOBYW3.js";import{a}from"./chunk-LGQTZIMH.js";import"./chunk-J4Q2WCPP.js";import"./chunk-PIMWUW3S.js";import{a as r}from"./chunk-HCQKHTWX.js";import"./chunk-RGSHZW7Q.js";import"./chunk-232WRRJZ.js";import"./chunk-7VVRRHE4.js";import{a as f}from"./chunk-OQC4RYIZ.js";import"./chunk-WGISVX7D.js";import"./chunk-PC7TOLHT.js";import"./chunk-NVWIQHSW.js";import{b as k}from"./chunk-AVWEVNGS.js";import"./chunk-6C22U5JX.js";import"./chunk-VSTJBSW7.js";import{T as h,r as b}from"./chunk-3DLQUZR2.js";import"./chunk-BUBKPU26.js";import"./chunk-4P22QABU.js";function p(e){return T({data:{cmd:"composing",subcmd:"dobreakdown",item_list:e},dataType:"json"})}var l=0,d=0;function N(e){let t=e.id.replace(`${d}-item-`,"");l[t]&&l[t].craft==="Perfect"&&E(e)}function j(){let e=B("selectable-item",o(`${d}-items`));e.length!==0&&e.forEach(N)}function A(e){l=e.items;let t=w({className:"fshAC"});m(t,'<button class="fshBl">Perfect</button>'),y(s(),t),r(t,j)}function u(e){a()||(d=e,I().then(A))}var c="disableBreakdownPrompts",i=0,n=[];function D(e){e.hide()}function F(e,t){e.animate({height:0},500,t)}function H(){let e=$("#composingMessageContainer");e.animate({opacity:0},500,f(F,e,f(D,e)))}function O(e,t){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":t,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}function M(e,t){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(O(e,t))),setTimeout(H,5e3)}function Q(e){e.error!==0?M(`Error: ${e.msg}`,"rgb(164, 28, 28)"):v(`${h+b}breakdown&m=1`)}function V(){p(n).then(Q)}function L(e){if(e.stopPropagation(),n.length===0){M("Error: No items selected.","rgb(164, 28, 28)");return}V()}function R(e){i&&e.target.id==="breakdown-selected-items"&&L(e)}function S(e){if(!x("selectable-item",e.target))return;let t=e.target.id.replace("composing-item-",""),g=n.indexOf(t);g===-1?n.push(t):n.splice(g,1)}function U(){i=!i,P(c,i)}function _(){m(s(),`<table class="fshTblCenter"><tbody>${C(c)}</tbody></table>`)}function q(e){r(e.parentNode,R,!0),r(o("composing-items"),S),r(o(c),U)}function z(){if(a())return;let e=o("breakdown-selected-items");e&&(u("composing"),i=k(c),_(),q(e))}export{z as default};
//# sourceMappingURL=breakdown-WXET5MIN.js.map