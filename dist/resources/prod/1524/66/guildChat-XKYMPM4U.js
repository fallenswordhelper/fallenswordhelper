import{a as C}from"./chunk-IVHWVJRJ.js";import{b as n}from"./chunk-YLIJSU3I.js";import"./chunk-HQMUIIQH.js";import"./chunk-GG6RB267.js";import"./chunk-KZZT4JUL.js";import{a as g}from"./chunk-42ERUKKF.js";import"./chunk-3ZXPFF4S.js";import"./chunk-YJVBIGD3.js";import"./chunk-FQGBNMGN.js";import"./chunk-XG5WC37K.js";import"./chunk-AA5CKHCJ.js";import{a as s}from"./chunk-OQ2Y4DKM.js";import{a as d}from"./chunk-TPICCX2K.js";import"./chunk-XXE2FQRZ.js";import"./chunk-AMIV6VU6.js";import"./chunk-CAKCK4NI.js";import"./chunk-S4JGXK5I.js";import{a as u}from"./chunk-GMERTW32.js";import"./chunk-IPCPLARM.js";import{a as h}from"./chunk-H3CO5HSE.js";import{a as c}from"./chunk-JCOWS4EJ.js";import"./chunk-YEZQPUL7.js";import"./chunk-XFT6LK7P.js";import"./chunk-EVSMFORE.js";import"./chunk-4ATHPVF4.js";import"./chunk-RTMHI3L7.js";import"./chunk-TYMQPSI2.js";import"./chunk-ONCZ3D52.js";import"./chunk-ER7X2LNC.js";import"./chunk-TUVTX7TQ.js";import{b as m}from"./chunk-SBFBOIF5.js";import"./chunk-VWFYI5BK.js";import"./chunk-PYHGZC4L.js";import"./chunk-D76XH5RX.js";import{a}from"./chunk-MA3AC62H.js";import"./chunk-NCV3HP3S.js";import{a as p}from"./chunk-4V4U3XDY.js";import"./chunk-YG74QOJP.js";import{b as r}from"./chunk-STY5NEH4.js";import"./chunk-M7Q5FD7X.js";import{a as o}from"./chunk-K2U7JEMX.js";import"./chunk-VCDLAVQZ.js";import{a as f}from"./chunk-PUAVFQTB.js";import"./chunk-OHKPSLFK.js";import"./chunk-EJREXK3Y.js";function T(e){e.value=e.value.replace(/\r\n|\n|\r/g," ").replace(/'/g,"\u2019").replace(/(^|\s)(")/g,"$1\u201C").replace(/"/g,"\u201D").replace("<","\uFF1C")}var y=e=>{e.setAttribute("form","dochat")};function x(e){e.id="dochat",f(e.elements).forEach(y)}function b(e){let t=g(e[5]);t.rows[0].cells[0].remove(),u(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}function A(e,t){t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),d(e))}function k(){let e=C({className:"fshChatTextArea",maxLength:512,name:"msg",required:!0});return y(e),e}var w=()=>!m||p("header",m).filter(c("Posted\xA0By")).length!==1||!r("enhanceChatTextEntry");function i(){if(w())return;let e=document.forms[0];x(e),b(e.elements);let t=k();o(t,"keypress",a(A,e.elements[5])),e.elements[4].replaceWith(t),o(e,"submit",a(T,t))}function l(){if(!r("wrapGuildChat"))return;let e=h("#pCC table table table table");!e||e.classList.add("fshGc")}function E(){l(),i();let e=s("chat_type");e&&e==="1"?n("Leader",0,3):n("Chat",0,3)}export{E as default};
//# sourceMappingURL=guildChat-XKYMPM4U.js.map
