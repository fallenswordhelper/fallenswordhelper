import{b as n}from"./chunk-I7IXX55I.js";import"./chunk-WMXX5UIU.js";import"./chunk-QHW7R23D.js";import{a as C}from"./chunk-LB2YRBTO.js";import{a as g}from"./chunk-TLJ2WSV3.js";import"./chunk-YCWFPE5S.js";import"./chunk-E7YUAWIB.js";import"./chunk-CN4PL5PT.js";import"./chunk-3ERLEAXC.js";import"./chunk-524UOV7R.js";import"./chunk-5LSY3HP2.js";import{a as f}from"./chunk-FLZN5VOU.js";import{a as d}from"./chunk-OYR5PIJR.js";import"./chunk-RQFQSBXN.js";import"./chunk-FLBDELZS.js";import"./chunk-DZWD3IFB.js";import{a as u}from"./chunk-X6X25TQC.js";import"./chunk-3U2KFVE3.js";import"./chunk-FLANWCWH.js";import{a as p}from"./chunk-WEH2BEPF.js";import"./chunk-S4LJSUOM.js";import{a as h}from"./chunk-KRD4PNLK.js";import"./chunk-FQH3XCI6.js";import"./chunk-OZO3C2DW.js";import"./chunk-GMLTBP5U.js";import{b as m}from"./chunk-MVLZ5DIF.js";import"./chunk-RLMEWYFJ.js";import"./chunk-V6KZDOYH.js";import{a as s}from"./chunk-X6HXFDDM.js";import"./chunk-HDDSTVDW.js";import"./chunk-3M4JV256.js";import"./chunk-3VGCM7V6.js";import"./chunk-5AMVPEUS.js";import"./chunk-BSRRLYDA.js";import"./chunk-EEOI3QHS.js";import"./chunk-E5RHLETX.js";import"./chunk-KDMA4L6I.js";import{b as r}from"./chunk-5IFOIBKY.js";import"./chunk-LGYGKPKS.js";import"./chunk-5SYR2ZZN.js";import{a as c}from"./chunk-VX5V3MQE.js";import"./chunk-C4N36YS5.js";import{a}from"./chunk-DG6P646J.js";import"./chunk-K4LSLGQK.js";import"./chunk-MC4TDBQ5.js";import"./chunk-OXVY43H4.js";import{a as o}from"./chunk-HN4Q5DUC.js";import"./chunk-QDZWRTTK.js";import"./chunk-WWWWNWRL.js";function T(e){e.value=e.value.replace(/\r\n|\n|\r/g," ").replace(/'/g,"\u2019").replace(/(?<a>^|\s)(?<b>")/g,"$1\u201C").replace(/"/g,"\u201D").replace("<","\uFF1C")}var y=e=>{e.setAttribute("form","dochat")};function x(e){e.id="dochat",c(e.elements).forEach(y)}function b(e){let t=g(e[5]);t.rows[0].cells[0].remove(),p(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}function A(e,t){t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),d(e))}function k(){let e=C({className:"fshChatTextArea",maxLength:512,name:"msg",required:!0});return y(e),e}var w=()=>!m()||u("header",m()).filter(h("Posted\xA0By")).length!==1||!r("enhanceChatTextEntry");function i(){if(w())return;let e=document.forms[0];x(e),b(e.elements);let t=k();o(t,"keypress",a(A,e.elements[5])),e.elements[4].replaceWith(t),o(e,"submit",a(T,t))}function l(){if(!r("wrapGuildChat"))return;let e=s("#pCC table table table table");e&&e.classList.add("fshGc")}function E(){l(),i();let e=f("chat_type");e&&e==="1"?n("Leader",0,3):n("Chat",0,3)}export{E as default};
//# sourceMappingURL=guildChat-ACV6ZSY3.js.map
