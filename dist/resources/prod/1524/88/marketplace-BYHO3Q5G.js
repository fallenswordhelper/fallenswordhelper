import{a as u}from"./chunk-VIAHY74Q.js";import"./chunk-IJJZ4KIO.js";import{b as s}from"./chunk-7GWH2CT6.js";import{a as o}from"./chunk-DA7MQ2AW.js";import{a as r}from"./chunk-UKCKIFDS.js";import{a}from"./chunk-L4B7A6OI.js";import{a as l}from"./chunk-GHLTWNNP.js";import"./chunk-JLE65JRD.js";var i=0,c=0,n=0;function m(){return i||(i=r("amount")),i}function p(){return c||(c=r("price")),c}function g(){return n||(n=u(m()).insertRow(2).insertCell(0),n.colSpan="2",n.className="fshCenter"),n}function b(e,t){let f=e*t;return f+Math.ceil(f/200)}function d(e){let t=m().value;o(`<span class="fshBlue">You are offering to buy <b>${t}</b> FSP for >> <b>${a(e)}</b> (Total: ${a(b(t,e))})</span>`,g())}function w(){n&&n.innerHTML!==""&&o("",n)}function T(){let e=p();if(e){let t=e.value;t.search(/^\d+$/)!==-1?d(t):w()}}function h(){l(s(),"keyup",T)}export{h as default};
//# sourceMappingURL=marketplace-BYHO3Q5G.js.map