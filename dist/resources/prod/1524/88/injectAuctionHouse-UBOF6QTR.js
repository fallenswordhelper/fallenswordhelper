import{b as B}from"./chunk-QESQN5OG.js";import{a as i}from"./chunk-ETAZ5XAD.js";import"./chunk-MP4UXHML.js";import{a as k}from"./chunk-3DYPIVHU.js";import"./chunk-SFQ4WIO7.js";import{a as P}from"./chunk-7BTPRGD4.js";import{a as A}from"./chunk-LGOCL6DR.js";import"./chunk-UNQTVYX4.js";import"./chunk-H3RVSNKD.js";import{a as y}from"./chunk-57T6XYZO.js";import"./chunk-YMCAJAIA.js";import{a as C}from"./chunk-FTPJYWK4.js";import{a as n}from"./chunk-IAMX7G4P.js";import"./chunk-IJJZ4KIO.js";import"./chunk-X7QKS5QT.js";import"./chunk-S5RSLOGD.js";import"./chunk-RBXG55G6.js";import"./chunk-5SHHX74D.js";import{a as s}from"./chunk-WFHVT5IA.js";import{a as p}from"./chunk-Q7QVPXGY.js";import"./chunk-QP2MBTPU.js";import"./chunk-RPUEVZVZ.js";import"./chunk-TSPN45E2.js";import"./chunk-TO3ZPNNL.js";import"./chunk-CR76QMJJ.js";import"./chunk-EPZ5F5RD.js";import"./chunk-UNI23447.js";import{b as f}from"./chunk-7GWH2CT6.js";import{a as r}from"./chunk-UKCKIFDS.js";import"./chunk-DNPXZIXP.js";import"./chunk-P7OVAOGG.js";import"./chunk-FORFMVOM.js";import"./chunk-PGEAU7BE.js";import"./chunk-RPQRAYS7.js";import{a as h}from"./chunk-4VG4DFKD.js";import"./chunk-EFYYJBIY.js";import"./chunk-DUL3ONJJ.js";import"./chunk-DXTBWQDH.js";import"./chunk-Y25KTRBX.js";import"./chunk-C5OL3C5E.js";import"./chunk-CEGFUXSK.js";import"./chunk-M3IY7CZ6.js";import"./chunk-IPM72WAR.js";import{a as d}from"./chunk-4QCWA2KR.js";import"./chunk-N3IQY6XI.js";import"./chunk-YDFKUGEP.js";import{a as u}from"./chunk-5FY3IDHS.js";import{a as g}from"./chunk-4QZL53LG.js";import"./chunk-OV3YZUE5.js";import"./chunk-RM642AP5.js";import"./chunk-DPQVBB2M.js";import"./chunk-YIUTYHR2.js";import"./chunk-PDKME2CZ.js";import"./chunk-S2QHLOQ6.js";import"./chunk-ZLYAP3OF.js";import"./chunk-W5N63RWR.js";import{b as m}from"./chunk-5P435J5Q.js";import"./chunk-PJBH3ZC7.js";import"./chunk-GHLTWNNP.js";import{Na as c,b as a}from"./chunk-JLE65JRD.js";import"./chunk-C3WFXZUW.js";import"./chunk-TM6O52J7.js";var N=()=>g(c,r("resultRows")).filter(e=>!e.href.endsWith("=null")),S=async e=>(await Promise.all(e.map(B))).filter(([,t])=>t),j={guild:"fshGreen",ally:"fshBlue",enemy:"fshRed"};async function x(){let e=N();if(!e.length)return;let t=await S(e);!t.length||t.forEach(([o,L])=>{o.classList.add(j[L])})}async function l(){await x(),$(document).ajaxSuccess((e,t,o)=>{o.url.endsWith("=ajaxsearch")&&x()})}function w(){n(r("refresh"))}function T(e){let[t]=e.parentNode.parentNode.children[0].children;return e.outerHTML=`<img src="${a}ui/misc/spinner.gif" width="14" height="14">`,h({cmd:"auctionhouse",subcmd:"cancel",auction_id:s(t.dataset.tipped,"inv_id")})}function E(){let e=p("auctionCancel",r("resultRows"));if(e.length===0)return;let t=e.map(T);P(t,w)}function H(){let e=A(r("fill"))?.nextElementSibling?.children?.[0];if(!e)return;let t=y({className:"smallLink",textContent:"Cancel All"});e.classList.add("fshCenter"),i(e,"]"),C(e,t),i(e,"["),u(t,E)}function R(){m("autoFillMinBidPrice")&&n(r("auto-fill"))}function _(){d()||!f()||(H(),R(),k(),l())}export{_ as default};
//# sourceMappingURL=injectAuctionHouse-UBOF6QTR.js.map
