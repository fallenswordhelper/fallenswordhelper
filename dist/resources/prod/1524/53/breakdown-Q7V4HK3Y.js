import{a as y}from"./chunk-Y3FPQMIQ.js";import"./chunk-YB2R7N6U.js";import"./chunk-KNB5RKXL.js";import"./chunk-ANRQZDQO.js";import"./chunk-YMRQPMXV.js";import"./chunk-7CPCF3KM.js";import"./chunk-LKGTIIZH.js";import{g as x}from"./chunk-LSD44FRF.js";import"./chunk-ABHC4DJD.js";import{a as h}from"./chunk-KFUQAFNA.js";import"./chunk-ZUHJWTKY.js";import"./chunk-63EULCQA.js";import{a as b}from"./chunk-VLL6MMT3.js";import"./chunk-QRPHAINE.js";import{b as g}from"./chunk-TMMBKVUE.js";import{a as w}from"./chunk-WHCAESHL.js";import"./chunk-FBJQLDZK.js";import{a as f}from"./chunk-2BFYZNUH.js";import"./chunk-GRHMKKXW.js";import"./chunk-LAGOFWF3.js";import"./chunk-OAQ3GOTA.js";import"./chunk-M5ZN4Z2N.js";import{a as k}from"./chunk-4KMRATSZ.js";import{a as u}from"./chunk-BI6EF352.js";import"./chunk-BM4FUEFL.js";import"./chunk-JW2UKJSK.js";import"./chunk-PKECKIP5.js";import"./chunk-BSKCRAT3.js";import"./chunk-MDOXDTXF.js";import"./chunk-N3R6MXRE.js";import"./chunk-PX7MLT6T.js";import"./chunk-QPRB5F5E.js";import"./chunk-NOLCAT6N.js";import{a as i}from"./chunk-TO3QNLYY.js";import"./chunk-QHU4ICCH.js";import"./chunk-JROAODNJ.js";import{a as r}from"./chunk-SHVFOAM5.js";import"./chunk-N56IAE2U.js";import"./chunk-ISL3KEXS.js";import{b as l}from"./chunk-VMJ6DXBZ.js";import"./chunk-3PDILZ3R.js";import"./chunk-3WAX2TNR.js";import{Q as d,n as p}from"./chunk-4P4O4YGO.js";import"./chunk-KTAAKVTB.js";import{a as s}from"./chunk-RH5336H4.js";function a(e){return k({type:"POST",data:{cmd:"composing",subcmd:"dobreakdown",item_list:e},dataType:"json"})}var m="disableBreakdownPrompts",t,n=[];function C(e){e.hide()}function P(e,o){e.animate({height:0},500,o)}function E(){let e=$("#composingMessageContainer");e.animate({opacity:0},500,s(P,e,s(C,e)))}function T(e,o){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":o,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}function B(e,o){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(T(e,o))),setTimeout(E,5e3)}function j(e){e.error!==0?B(`Error: ${e.msg}`,"rgb(164, 28, 28)"):w(`${d+p}breakdown&m=1`)}function v(){a(n).then(j)}function M(e){if(e.stopPropagation(),n.length===0){B("Error: No items selected.","rgb(164, 28, 28)");return}v()}function I(e){t&&e.target.id==="breakdown-selected-items"&&M(e)}function N(e){if(!u("selectable-item",e.target))return;let o=e.target.id.replace("composing-item-",""),c=n.indexOf(o);c===-1?n.push(o):n.splice(c,1)}function V(){t=!t,b(m,t)}function A(){f(g,`<table class="fshTblCenter"><tbody>${x(m)}</tbody></table>`)}function H(){i(r("breakdown-selected-items").parentNode,I,!0),i(r("composing-items"),N),i(r(m),V)}function D(){h()||(y("composing"),t=l(m),A(),H())}export{D as default};
//# sourceMappingURL=breakdown-Q7V4HK3Y.js.map
