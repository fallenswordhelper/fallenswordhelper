import{a as p}from"./chunk-LCJTGZAQ.js";import{a as S,b as T,c as M,d as F,f as H,g as $}from"./chunk-XWUK2VW6.js";import"./chunk-WEBTAK6Y.js";import"./chunk-42UNA5BF.js";import"./chunk-EJHNNIDG.js";import{a as N}from"./chunk-4NGAHIMW.js";import"./chunk-PIMSHOES.js";import"./chunk-NOPVPDOV.js";import"./chunk-DCH2L5OP.js";import{a as f}from"./chunk-VNDMTVML.js";import{a as A}from"./chunk-V477BLM5.js";import"./chunk-4CJ6SF37.js";import"./chunk-ZKJFQGRN.js";import"./chunk-R6SJX6K4.js";import"./chunk-K7AP5DL5.js";import"./chunk-PTOLDNWP.js";import{a as E}from"./chunk-GAJ7W4PY.js";import"./chunk-2FQOSQ4C.js";import"./chunk-OWTSH67E.js";import"./chunk-2YLPSAXD.js";import"./chunk-YF6SQT3W.js";import"./chunk-5S4DWFCV.js";import{a as w}from"./chunk-TQDPGVYK.js";import"./chunk-Q33UWUZE.js";import"./chunk-JJ44IGCT.js";import"./chunk-PXS4UF2I.js";import"./chunk-IZN4VWOX.js";import"./chunk-QED4CBOJ.js";import"./chunk-J66V4X6B.js";import"./chunk-ZEJYZ536.js";import"./chunk-A5IY3XA5.js";import{a as I}from"./chunk-PEQUAGB2.js";import"./chunk-7B3WSLHR.js";import"./chunk-BFKPTBSY.js";import{a as r}from"./chunk-FNBCAVVI.js";import"./chunk-YNGMMT7C.js";import"./chunk-TNZ4IZQ7.js";import"./chunk-X25XOQCJ.js";import{a as x}from"./chunk-AH6ETHJX.js";import"./chunk-MOKJBRKZ.js";import{a as P,b as l}from"./chunk-V5HCWELB.js";import"./chunk-HHF5U3LU.js";import"./chunk-NCIHVVRD.js";import"./chunk-6OKZLJ6F.js";import{f as h}from"./chunk-BPI67VB6.js";import{a as s}from"./chunk-74YO2Y7V.js";import"./chunk-OHJEVCKX.js";import"./chunk-D7DBYYVV.js";import"./chunk-UFDUIBPU.js";import"./chunk-IAFMJLWP.js";import{a as k}from"./chunk-2ZEFTA6B.js";import"./chunk-47BUGNNO.js";import"./chunk-4XBIOIJL.js";import"./chunk-XCW5GYL4.js";import"./chunk-YSVAFZPB.js";import"./chunk-ULCOJYQQ.js";import{a as j}from"./chunk-5JKG2KXO.js";import"./chunk-TJDS7E3Q.js";import{a as y}from"./chunk-JBCK4LKH.js";import"./chunk-YMYO7RVQ.js";import"./chunk-KYIDEWAX.js";import{a as C}from"./chunk-QC67ERFU.js";import"./chunk-5VVCHQJF.js";import"./chunk-UAFWJMEF.js";import"./chunk-KUKFZGKL.js";import"./chunk-ZFTPD3JX.js";import"./chunk-JUUMQFPG.js";import"./chunk-OPXVQRDJ.js";import{a as v}from"./chunk-KQGQROK7.js";import"./chunk-RBDNRJUJ.js";import"./chunk-3JJXNX5O.js";import"./chunk-4G6P2W32.js";import"./chunk-HSKCJVE7.js";import"./chunk-WT2NGKU2.js";import"./chunk-CH6H745H.js";import{b as d}from"./chunk-ET6NKS7B.js";import"./chunk-QMAERS6H.js";import{a as u}from"./chunk-AJ22QQIT.js";import"./chunk-I6XFTTZH.js";import"./chunk-6IFYCYYR.js";function t(){return s('[name="removeIndex[]"]:checked')}var V=o=>({id:I(o.parentNode.href,"folder_id"),name:j(o.parentNode.parentNode)});function R(o,e){return new M({anchor:e.nextElementSibling,props:{folders:o},target:e.parentNode})}async function J(o,e){(await F(o,e.map(g=>g.value))).s&&e.forEach(p)}function L(o){r("dropitems","Move to Folder"),f(30,t()).forEach(v(J,o.detail))}function D(){let o=s('#pCC img[src$="/folder.png"]');if(o.length===0)return;let e=E(A(o[0])),i=o.map(V);R(i,e).$on("move",L)}function Q(o){T().forEach(e=>{e.checked=Boolean(o)})}var c="ajaxifyDestroy",a="disableDestroyPrompts",n,m,q;async function U(o){let e=await H(o.map(i=>i.value));N(e),e.s&&o.forEach(p)}function X(o){!o.returnValue||!n||(o.preventDefault(),f(30,t()).forEach(U),r("dropitems","Destroy by AJAX"))}function _(){return r("dropitems","Destroy without prompts"),!0}function B(){window.confirmDestroy=m?_:q}function z(){m=d(a),q=window.confirmDestroy,B()}function G(){n=!n,y(c,n)}function K(){m=!m,y(a,m),B()}var O=()=>P([[l(c),G],[l(a),K]]);function W(){let o=k('input[type="submit"]');x(o.parentNode,`&nbsp;&nbsp;${h(c)}&nbsp;&nbsp;${h(a)}`),u(o.parentNode,"change",O())}function b(){W(),z(),n=d(c),u(document.forms[0],"submit",X),window.check=Q}var Y=[D,$,b];function Z(){C()||!S()||w(Y)}export{Z as default};
//# sourceMappingURL=injectProfileDropItems-HWIPA7LB.js.map
