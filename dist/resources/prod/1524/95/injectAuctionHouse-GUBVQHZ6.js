import{b as B}from"./chunk-UXRT3EO2.js";import{a as i}from"./chunk-ARV2YJRA.js";import"./chunk-TKVLVU4Q.js";import{a as k}from"./chunk-PISIQHLG.js";import"./chunk-W5ZIP5LM.js";import{a as P}from"./chunk-PC4INM7R.js";import{a as C}from"./chunk-RQBBVJME.js";import"./chunk-L7S4ZCSX.js";import"./chunk-OKVHWST5.js";import{a as A}from"./chunk-ZZFUN4A2.js";import"./chunk-FRAHKESU.js";import{a as u}from"./chunk-3BCYJ2VD.js";import{a as n}from"./chunk-KUOLYR64.js";import"./chunk-KXOD4Y3N.js";import"./chunk-P4K3QOJQ.js";import"./chunk-IXDXLPIY.js";import"./chunk-F65VVICY.js";import"./chunk-EB645W7R.js";import{a as s}from"./chunk-G4H5NRBH.js";import{a as d}from"./chunk-SRVOPMOR.js";import"./chunk-N4PCIVE3.js";import"./chunk-XVTH24AL.js";import"./chunk-5AWGL262.js";import"./chunk-4WXQAPIC.js";import"./chunk-D4AVXNRB.js";import"./chunk-W5AN4HHX.js";import{b as f}from"./chunk-FJXTYPNU.js";import{a as r}from"./chunk-RVP3BZF7.js";import"./chunk-ECR74T2A.js";import"./chunk-MOG3AHAF.js";import"./chunk-X7GADBEU.js";import"./chunk-NLWOAVHY.js";import"./chunk-F5Q5KOPJ.js";import{a as g}from"./chunk-XNL3JTED.js";import"./chunk-HNXEOKKJ.js";import"./chunk-PJX66I2Y.js";import"./chunk-WLWXTJVR.js";import"./chunk-YYW2XVVC.js";import"./chunk-LGXHSUMA.js";import"./chunk-DZSOBYW3.js";import"./chunk-2UTU3226.js";import"./chunk-OHH2RJOZ.js";import"./chunk-QLE5SOQY.js";import{a as h}from"./chunk-LGQTZIMH.js";import"./chunk-J4Q2WCPP.js";import"./chunk-PIMWUW3S.js";import{a as p}from"./chunk-HCQKHTWX.js";import{a as y}from"./chunk-DARUUDAY.js";import"./chunk-2T7366JB.js";import"./chunk-O2JBL2UU.js";import"./chunk-RGSHZW7Q.js";import"./chunk-232WRRJZ.js";import"./chunk-OQC4RYIZ.js";import"./chunk-WGISVX7D.js";import"./chunk-PC7TOLHT.js";import"./chunk-NVWIQHSW.js";import{b as m}from"./chunk-AVWEVNGS.js";import"./chunk-6C22U5JX.js";import"./chunk-VSTJBSW7.js";import{Na as c,b as a}from"./chunk-3DLQUZR2.js";import"./chunk-BUBKPU26.js";import"./chunk-4P22QABU.js";var N=()=>y(c,r("resultRows")).filter(e=>!e.href.endsWith("=null")),S=async e=>(await Promise.all(e.map(B))).filter(([,t])=>t),j={guild:"fshGreen",ally:"fshBlue",enemy:"fshRed"};async function x(){let e=N();if(!e.length)return;let t=await S(e);t.length&&t.forEach(([o,L])=>{o.classList.add(j[L])})}async function l(){await x(),$(document).ajaxSuccess((e,t,o)=>{o.url.endsWith("=ajaxsearch")&&x()})}function w(){n(r("refresh"))}function T(e){let[t]=e.parentNode.parentNode.children[0].children;return e.outerHTML=`<img src="${a}ui/misc/spinner.gif" width="14" height="14">`,g({cmd:"auctionhouse",subcmd:"cancel",auction_id:s(t.dataset.tipped,"inv_id")})}function E(){let e=d("auctionCancel",r("resultRows"));if(e.length===0)return;let t=e.map(T);P(t,w)}function H(){let e=C(r("fill"))?.nextElementSibling?.children?.[0];if(!e)return;let t=A({className:"smallLink",textContent:"Cancel All"});e.classList.add("fshCenter"),i(e,"]"),u(e,t),i(e,"["),p(t,E)}function R(){m("autoFillMinBidPrice")&&n(r("auto-fill"))}function _(){h()||!f()||(H(),R(),k(),l())}export{_ as default};
//# sourceMappingURL=injectAuctionHouse-GUBVQHZ6.js.map