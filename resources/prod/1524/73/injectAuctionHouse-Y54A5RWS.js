import{b as N}from"./chunk-JUC2RWWN.js";import{a as P}from"./chunk-DRCNX7WV.js";import"./chunk-QFKDP3XT.js";import{a as C}from"./chunk-LL6TX5BE.js";import"./chunk-T2HUWFAE.js";import"./chunk-7RIY6MDL.js";import{a as A}from"./chunk-CDYTFOPV.js";import"./chunk-QK7NEXUQ.js";import{a as n}from"./chunk-BHXVPDRX.js";import"./chunk-RS336C42.js";import{a as s}from"./chunk-N3ER3OGK.js";import"./chunk-AU6TCDDP.js";import"./chunk-IDZMHJ64.js";import{a as y}from"./chunk-EGO65LSK.js";import"./chunk-NH2OUR6Q.js";import{a as i}from"./chunk-KTHKGLIA.js";import"./chunk-JAXKMKJG.js";import"./chunk-7ZZM3PI5.js";import"./chunk-H32ZIF3T.js";import"./chunk-3EZQPKK2.js";import{a as u}from"./chunk-S4FS7DHJ.js";import"./chunk-EAI5CD5S.js";import"./chunk-SIQKD6OY.js";import"./chunk-N7SUA7LP.js";import"./chunk-JMJTPPQZ.js";import"./chunk-PTQVJCCE.js";import"./chunk-2SW32QWU.js";import"./chunk-25QBSENP.js";import{a as g}from"./chunk-TYF4VCHJ.js";import"./chunk-RFXG7YID.js";import"./chunk-S4QEGVCK.js";import"./chunk-NL2EDQDN.js";import"./chunk-UHIE2U7H.js";import"./chunk-SGTVLZZY.js";import"./chunk-W2KQHOA7.js";import{a as d}from"./chunk-JN32CCUR.js";import{b as f}from"./chunk-GUWFFNX3.js";import{a as o}from"./chunk-NHZZ7LZ4.js";import"./chunk-UHYEXGNQ.js";import"./chunk-7B7EL4RE.js";import"./chunk-DY5UVCP4.js";import"./chunk-GL5QHOTK.js";import"./chunk-C6NE64RN.js";import"./chunk-XUIDQDTX.js";import"./chunk-LJJ4O6SU.js";import"./chunk-AODVCOO3.js";import"./chunk-CPTULJAW.js";import{a as p}from"./chunk-ZDPOU2PI.js";import{a as h}from"./chunk-HUN5OHNR.js";import{b as m}from"./chunk-MWTT7SJH.js";import"./chunk-65ZLY3NC.js";import"./chunk-YLJQNWRW.js";import"./chunk-TNALXA7F.js";import"./chunk-E6R3MXCQ.js";import{Ma as c,b as a}from"./chunk-E2WYTXH7.js";import"./chunk-S7VLPIAI.js";var x=()=>u(c,o("resultRows")).filter(e=>!e.href.endsWith("=null")),L=async e=>(await Promise.all(e.map(N))).filter(([,t])=>t),S={guild:"fshGreen",ally:"fshBlue",enemy:"fshRed"};async function k(){let e=x();if(!e.length)return;let t=await L(e);!t.length||t.forEach(([r,B])=>{r.classList.add(S[B])})}async function l(){await k(),$(document).ajaxSuccess((e,t,r)=>{r.url.endsWith("=ajaxsearch")&&k()})}function j(){n(o("refresh"))}function w(e){let[t]=e.parentNode.parentNode.children[0].children;return e.outerHTML=`<img src="${a}ui/misc/spinner.gif" width="14" height="14">`,g({cmd:"auctionhouse",subcmd:"cancel",auction_id:s(t.dataset.tipped,"inv_id")})}function E(){let e=p("auctionCancel",o("resultRows"));if(e.length===0)return;let t=e.map(w);C(t,j)}function H(){let e=o("fill");if(!e)return;let t=A({className:"smallLink",textContent:"Cancel All"}),[r]=e.parentNode.parentNode.nextElementSibling.children;r.classList.add("fshCenter"),i(r,"]"),y(r,t),i(r,"["),h(t,E)}function R(){m("autoFillMinBidPrice")&&n(o("auto-fill"))}function T(){d()||!f||(H(),R(),P(),l())}export{T as default};
//# sourceMappingURL=injectAuctionHouse-Y54A5RWS.js.map
