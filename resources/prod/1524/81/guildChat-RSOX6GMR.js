import{b as n}from"./chunk-IEG7IP4B.js";import"./chunk-3ZC24RP2.js";import"./chunk-JWKKXSOQ.js";import{a as C}from"./chunk-E7R3TO27.js";import{a as g}from"./chunk-GKWFAMI7.js";import"./chunk-EYNT3Q7T.js";import"./chunk-XEBXHNMM.js";import"./chunk-E5QXYW6C.js";import"./chunk-VEEEKOCG.js";import"./chunk-TXAPGXL4.js";import"./chunk-VECRFCQP.js";import{a as f}from"./chunk-X3UAR57Z.js";import{a as d}from"./chunk-3QZFISQ7.js";import"./chunk-M34ZVTSL.js";import"./chunk-BDFQCMKF.js";import"./chunk-QL55SON4.js";import{a as u}from"./chunk-LVAJIHIF.js";import"./chunk-WMET5VJL.js";import"./chunk-EJAPIT2N.js";import"./chunk-X5DGSHWJ.js";import{a as p}from"./chunk-KHQZO2PT.js";import"./chunk-WMUUSPIG.js";import{a as h}from"./chunk-73ZGJX3S.js";import"./chunk-DKG6D46Z.js";import"./chunk-HOFZHHFM.js";import"./chunk-DHIC45XN.js";import{b as m}from"./chunk-U2LW7DMT.js";import"./chunk-CF6OUIZ5.js";import"./chunk-6MPENS2G.js";import{a as s}from"./chunk-LZHFM6TG.js";import"./chunk-RVROEHXL.js";import{a as c}from"./chunk-EPL4X55B.js";import"./chunk-C6CNCMW2.js";import"./chunk-RLPGZCX6.js";import"./chunk-6TE7Y3DR.js";import"./chunk-JNLLRLHL.js";import"./chunk-IPQXTCLP.js";import"./chunk-3FPE4KHJ.js";import{a}from"./chunk-SOFFOM3C.js";import"./chunk-YVFHCM2A.js";import"./chunk-3WYYB24O.js";import"./chunk-Q4WEZP4Z.js";import{b as r}from"./chunk-SYO7WFPA.js";import"./chunk-FNQX6KHV.js";import{a as o}from"./chunk-SARQWG4K.js";import"./chunk-7Q74Q23I.js";import"./chunk-B3OIOQDS.js";import"./chunk-7X7SMYZT.js";function T(e){e.value=e.value.replace(/\r\n|\n|\r/g," ").replace(/'/g,"\u2019").replace(/(?<a>^|\s)(?<b>")/g,"$1\u201C").replace(/"/g,"\u201D").replace("<","\uFF1C")}var y=e=>{e.setAttribute("form","dochat")};function x(e){e.id="dochat",c(e.elements).forEach(y)}function b(e){let t=g(e[5]);t.rows[0].cells[0].remove(),p(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}function A(e,t){t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),d(e))}function k(){let e=C({className:"fshChatTextArea",maxLength:512,name:"msg",required:!0});return y(e),e}var w=()=>!m()||u("header",m()).filter(h("Posted\xA0By")).length!==1||!r("enhanceChatTextEntry");function i(){if(w())return;let e=document.forms[0];x(e),b(e.elements);let t=k();o(t,"keypress",a(A,e.elements[5])),e.elements[4].replaceWith(t),o(e,"submit",a(T,t))}function l(){if(!r("wrapGuildChat"))return;let e=s("#pCC table table table table");!e||e.classList.add("fshGc")}function E(){l(),i();let e=f("chat_type");e&&e==="1"?n("Leader",0,3):n("Chat",0,3)}export{E as default};
//# sourceMappingURL=guildChat-RSOX6GMR.js.map
