import{b as n}from"./chunk-W2XB4XRK.js";import"./chunk-AV33EAZT.js";import"./chunk-2IIDEFZM.js";import{a as C}from"./chunk-D62JO4DO.js";import{a as g}from"./chunk-FIMBYO62.js";import"./chunk-QDV4PRAL.js";import"./chunk-SECQXTHT.js";import"./chunk-QINL52B7.js";import"./chunk-CFKGXEY7.js";import"./chunk-H5J4K67Q.js";import"./chunk-GU4CBJV2.js";import{a as f}from"./chunk-7A6P2WVT.js";import{a as d}from"./chunk-GPQHRIML.js";import"./chunk-FSSBYC3E.js";import"./chunk-TWEQZVC2.js";import"./chunk-TKJCL3KA.js";import{a as u}from"./chunk-MX5TZ7HK.js";import"./chunk-DEEYYK6E.js";import"./chunk-E6TZ5ETX.js";import{a as p}from"./chunk-G77K7S5L.js";import"./chunk-NEGYQUFU.js";import{a as h}from"./chunk-J6OWEIQO.js";import"./chunk-64W2OSE7.js";import"./chunk-ATELUZSH.js";import"./chunk-GOQRAVSB.js";import{b as m}from"./chunk-PWSQLISA.js";import"./chunk-5HI4ILOP.js";import"./chunk-7Z2VPPBD.js";import{a as s}from"./chunk-OX3SBSJB.js";import"./chunk-Z6KB7KN6.js";import"./chunk-DP37WUXB.js";import"./chunk-MT2H2XVD.js";import"./chunk-LGDJTMPN.js";import"./chunk-66FBRD7Z.js";import"./chunk-GKVMJ4PA.js";import"./chunk-CRWX7KCS.js";import"./chunk-VRYLUPGH.js";import{a as c}from"./chunk-5RFQSTDG.js";import"./chunk-5L4CLVOL.js";import{a}from"./chunk-HYLQEGZ4.js";import"./chunk-R2OFDU54.js";import"./chunk-CEGJSIVU.js";import{b as r}from"./chunk-G6TPLPCG.js";import"./chunk-IMGI5UI2.js";import{a as o}from"./chunk-E53ZSUER.js";import"./chunk-UYN3LUIY.js";import"./chunk-U6BMTRHL.js";import"./chunk-3WE6KSRQ.js";function T(e){e.value=e.value.replace(/\r\n|\n|\r/g," ").replace(/'/g,"\u2019").replace(/(?<a>^|\s)(?<b>")/g,"$1\u201C").replace(/"/g,"\u201D").replace("<","\uFF1C")}var y=e=>{e.setAttribute("form","dochat")};function x(e){e.id="dochat",c(e.elements).forEach(y)}function b(e){let t=g(e[5]);t.rows[0].cells[0].remove(),p(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}function A(e,t){t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),d(e))}function k(){let e=C({className:"fshChatTextArea",maxLength:512,name:"msg",required:!0});return y(e),e}var w=()=>!m()||u("header",m()).filter(h("Posted\xA0By")).length!==1||!r("enhanceChatTextEntry");function i(){if(w())return;let e=document.forms[0];x(e),b(e.elements);let t=k();o(t,"keypress",a(A,e.elements[5])),e.elements[4].replaceWith(t),o(e,"submit",a(T,t))}function l(){if(!r("wrapGuildChat"))return;let e=s("#pCC table table table table");e&&e.classList.add("fshGc")}function E(){l(),i();let e=f("chat_type");e&&e==="1"?n("Leader",0,3):n("Chat",0,3)}export{E as default};
//# sourceMappingURL=guildChat-53FO4JW6.js.map
