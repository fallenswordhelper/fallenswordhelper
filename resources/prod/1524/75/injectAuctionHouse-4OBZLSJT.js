import{b as N}from"./chunk-KMUFM4XM.js";import{a as P}from"./chunk-GAHGPNN6.js";import"./chunk-ZUSBLSDR.js";import{a as C}from"./chunk-RUI77AB4.js";import"./chunk-MGC66ZPG.js";import"./chunk-QBN6XFLF.js";import{a as A}from"./chunk-PDAHONUA.js";import"./chunk-TIQN3YKQ.js";import{a as n}from"./chunk-47RXHZIW.js";import"./chunk-X2TXN5H7.js";import{a as s}from"./chunk-I4LE4V5X.js";import"./chunk-GQULZ2HO.js";import"./chunk-5T5SVQRR.js";import{a as y}from"./chunk-RXVDCLJ6.js";import"./chunk-2GIEZTJU.js";import{a as i}from"./chunk-3C5ENJEY.js";import"./chunk-TANNOBPR.js";import"./chunk-MZYLPE6K.js";import"./chunk-QRYRLQTR.js";import"./chunk-33AL3TXI.js";import{a as u}from"./chunk-GHI2YFAT.js";import"./chunk-NHD5GMUM.js";import"./chunk-6FE7TFOW.js";import"./chunk-BQN7JNLT.js";import"./chunk-3ABW5FNN.js";import"./chunk-TKJWUQ6H.js";import"./chunk-3AY3EB3C.js";import"./chunk-46E7CLT6.js";import{a as g}from"./chunk-DGS2WOJV.js";import"./chunk-AXEF7ZPS.js";import"./chunk-GPIGDOJJ.js";import"./chunk-SGSSGBJU.js";import"./chunk-L2F37LJS.js";import"./chunk-RSW3SDQ5.js";import"./chunk-Q2OGYUCV.js";import{a as d}from"./chunk-SUTTQBC4.js";import{b as f}from"./chunk-46TQQDHW.js";import{a as o}from"./chunk-K4FZKNLQ.js";import"./chunk-CSUXSLMM.js";import"./chunk-OHRM7A4V.js";import"./chunk-TDFIT7OX.js";import"./chunk-I42VMRRO.js";import"./chunk-4OB64LT4.js";import"./chunk-UQIKKMNB.js";import"./chunk-UE3DRZE6.js";import"./chunk-JUEI6MIM.js";import"./chunk-REO2URTO.js";import{a as p}from"./chunk-NH6DTJ4R.js";import{a as h}from"./chunk-JFPNT65R.js";import{b as m}from"./chunk-ELGHA2UY.js";import"./chunk-G5IZBOBE.js";import"./chunk-QKN4UTNB.js";import"./chunk-VOOMRXTQ.js";import"./chunk-XAE2ZLZO.js";import{Ma as c,b as a}from"./chunk-L5JB47YP.js";import"./chunk-M4AU23DF.js";var x=()=>u(c,o("resultRows")).filter(e=>!e.href.endsWith("=null")),L=async e=>(await Promise.all(e.map(N))).filter(([,t])=>t),S={guild:"fshGreen",ally:"fshBlue",enemy:"fshRed"};async function k(){let e=x();if(!e.length)return;let t=await L(e);!t.length||t.forEach(([r,B])=>{r.classList.add(S[B])})}async function l(){await k(),$(document).ajaxSuccess((e,t,r)=>{r.url.endsWith("=ajaxsearch")&&k()})}function j(){n(o("refresh"))}function w(e){let[t]=e.parentNode.parentNode.children[0].children;return e.outerHTML=`<img src="${a}ui/misc/spinner.gif" width="14" height="14">`,g({cmd:"auctionhouse",subcmd:"cancel",auction_id:s(t.dataset.tipped,"inv_id")})}function E(){let e=p("auctionCancel",o("resultRows"));if(e.length===0)return;let t=e.map(w);C(t,j)}function H(){let e=o("fill");if(!e)return;let t=A({className:"smallLink",textContent:"Cancel All"}),[r]=e.parentNode.parentNode.nextElementSibling.children;r.classList.add("fshCenter"),i(r,"]"),y(r,t),i(r,"["),h(t,E)}function R(){m("autoFillMinBidPrice")&&n(o("auto-fill"))}function T(){d()||!f||(H(),R(),P(),l())}export{T as default};
//# sourceMappingURL=injectAuctionHouse-4OBZLSJT.js.map
