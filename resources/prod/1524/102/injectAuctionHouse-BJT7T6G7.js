import{b as B}from"./chunk-UQCM4HSR.js";import{a as k}from"./chunk-IYNRHY2X.js";import"./chunk-OMZHILQQ.js";import{a as i}from"./chunk-5MHPLAI6.js";import{a as C}from"./chunk-SFOQF4NE.js";import"./chunk-ZDVW6BRT.js";import"./chunk-LUFMHZS7.js";import{a as A}from"./chunk-GIB7COBK.js";import"./chunk-F4CYJEVV.js";import"./chunk-R4CGZJCB.js";import{a as P}from"./chunk-KOEJBN3I.js";import{a as s}from"./chunk-QEARPC7F.js";import"./chunk-X6LLQZN7.js";import"./chunk-PX6NXDG4.js";import{a as p}from"./chunk-WIQ6XRGI.js";import"./chunk-5GSNCPTD.js";import{a as n}from"./chunk-RGCESRKS.js";import"./chunk-XVEYCRE7.js";import"./chunk-4LUQSMNM.js";import"./chunk-ROTCIKTR.js";import"./chunk-B2YROL26.js";import"./chunk-UHGSE7LB.js";import"./chunk-6BZX7ZN7.js";import"./chunk-6MJKEXGN.js";import"./chunk-YQXIMIAT.js";import{a as h}from"./chunk-4X57LHCN.js";import"./chunk-6QG6UGYA.js";import{b as f}from"./chunk-JMO45TBP.js";import{a as r}from"./chunk-JEN6RTKA.js";import{a as g}from"./chunk-SQCHG7QA.js";import"./chunk-3LGJ7KIX.js";import"./chunk-7TJHGKXN.js";import"./chunk-M4CFJGZO.js";import{a as y}from"./chunk-WJQ3A2NI.js";import"./chunk-EAEJ7O2I.js";import"./chunk-UPYTFADC.js";import"./chunk-UERPKMG4.js";import"./chunk-FUB7QZZI.js";import"./chunk-F6AV4QWO.js";import"./chunk-C54IMWL7.js";import"./chunk-7XNCVM7C.js";import"./chunk-S5YTVKJ4.js";import"./chunk-7PPLM4HV.js";import"./chunk-QLD5CDI7.js";import"./chunk-ZKTRQIGV.js";import"./chunk-F53JTC3Q.js";import"./chunk-I2K74DRD.js";import"./chunk-YI3QHXMF.js";import"./chunk-NR3OO2TM.js";import"./chunk-RGYUH6OH.js";import{a as d}from"./chunk-DPMNQ3O4.js";import"./chunk-J6FMYNIK.js";import"./chunk-YCWZIL7K.js";import"./chunk-CPJOSTWF.js";import{a as u}from"./chunk-A3WPUSVT.js";import{c as m}from"./chunk-O3NTOCCL.js";import{Na as c,b as l}from"./chunk-RBVLOJQS.js";import"./chunk-G4AQ6G7L.js";import"./chunk-IYSXGPFG.js";import"./chunk-B2AFMQVU.js";import"./chunk-7D7WYX4S.js";var L=()=>h(c,r("resultRows")).filter(e=>!e.href.endsWith("=null")),N=async e=>(await Promise.all(e.map(B))).filter(([,t])=>t),S={guild:"fshGreen",ally:"fshBlue",enemy:"fshRed"};async function w(){let e=L();if(!e.length)return;let t=await N(e);t.length&&t.forEach(([o,x])=>{o.classList.add(S[x])})}async function a(){await w(),$(document).ajaxSuccess((e,t,o)=>{o.url.endsWith("=ajaxsearch")&&w()})}function j(){n(r("refresh"))}function T(e){let[t]=e.parentNode.parentNode.children[0].children;return e.outerHTML=`<img src="${l}ui/misc/spinner.gif" width="14" height="14">`,y({cmd:"auctionhouse",subcmd:"cancel",auction_id:s(t.dataset.tipped,"inv_id")})}async function E(){let e=p("auctionCancel",r("resultRows"));e.length!==0&&(await g(e.map(T)),j())}function H(){let e=C(r("fill"))?.nextElementSibling?.children?.[0];if(!e)return;let t=A({className:"smallLink",textContent:"Cancel All"});e.classList.add("fshCenter"),i(e,"]"),P(e,t),i(e,"["),u(t,E)}function R(){m("autoFillMinBidPrice")&&n(r("auto-fill"))}function _(){d()||!f()||(H(),R(),k(),a())}export{_ as default};
//# sourceMappingURL=injectAuctionHouse-BJT7T6G7.js.map
