import{b as B}from"./chunk-XWVVOEJB.js";import{a as i}from"./chunk-MWJ4WBJQ.js";import"./chunk-ZAO6I6N3.js";import{a as k}from"./chunk-76YT7OU5.js";import"./chunk-IY2KCRBR.js";import{a as P}from"./chunk-H56IVI6N.js";import{a as C}from"./chunk-OFVL4Q2L.js";import"./chunk-JENXJXWC.js";import"./chunk-S6F63XUX.js";import{a as A}from"./chunk-EZL2MAAX.js";import"./chunk-NVCWQ4W7.js";import{a as u}from"./chunk-LMV2NPIZ.js";import{a as n}from"./chunk-GPQHRIML.js";import"./chunk-FSSBYC3E.js";import"./chunk-D6NHBHDF.js";import"./chunk-LJ3W7KBO.js";import"./chunk-NUXR4MVG.js";import"./chunk-3TMTTFLY.js";import{a as s}from"./chunk-TKJCL3KA.js";import{a as d}from"./chunk-MX5TZ7HK.js";import"./chunk-E6TZ5ETX.js";import"./chunk-G77K7S5L.js";import"./chunk-NEGYQUFU.js";import"./chunk-POVOVHEU.js";import"./chunk-ATELUZSH.js";import"./chunk-GOQRAVSB.js";import{b as f}from"./chunk-PWSQLISA.js";import{a as r}from"./chunk-5HI4ILOP.js";import"./chunk-QCQENXXV.js";import"./chunk-4463IFOY.js";import"./chunk-7Z2VPPBD.js";import"./chunk-SDYIYOUC.js";import"./chunk-D2RKZAOL.js";import{a as g}from"./chunk-R5QRYD7G.js";import"./chunk-RDAHQVBW.js";import"./chunk-Z6KB7KN6.js";import"./chunk-DP37WUXB.js";import"./chunk-MT2H2XVD.js";import"./chunk-LGDJTMPN.js";import"./chunk-GKVMJ4PA.js";import"./chunk-KCGDJ5EJ.js";import"./chunk-6ME2NWD5.js";import"./chunk-IFV2NFCC.js";import{a as h}from"./chunk-A45QJTDQ.js";import"./chunk-6YW6FXRF.js";import"./chunk-GDLA3KMJ.js";import{a as p}from"./chunk-CRWX7KCS.js";import{a as y}from"./chunk-NH6FAU6Q.js";import"./chunk-LEOH7BX4.js";import"./chunk-WFI3HTBS.js";import"./chunk-5RFQSTDG.js";import"./chunk-4MID3VOD.js";import"./chunk-HYLQEGZ4.js";import"./chunk-7I6ASYKS.js";import"./chunk-R2OFDU54.js";import"./chunk-CEGJSIVU.js";import{b as m}from"./chunk-G6TPLPCG.js";import"./chunk-IMGI5UI2.js";import"./chunk-E53ZSUER.js";import{Na as c,b as a}from"./chunk-UYN3LUIY.js";import"./chunk-U6BMTRHL.js";import"./chunk-3WE6KSRQ.js";var N=()=>y(c,r("resultRows")).filter(e=>!e.href.endsWith("=null")),S=async e=>(await Promise.all(e.map(B))).filter(([,t])=>t),j={guild:"fshGreen",ally:"fshBlue",enemy:"fshRed"};async function x(){let e=N();if(!e.length)return;let t=await S(e);t.length&&t.forEach(([o,L])=>{o.classList.add(j[L])})}async function l(){await x(),$(document).ajaxSuccess((e,t,o)=>{o.url.endsWith("=ajaxsearch")&&x()})}function w(){n(r("refresh"))}function T(e){let[t]=e.parentNode.parentNode.children[0].children;return e.outerHTML=`<img src="${a}ui/misc/spinner.gif" width="14" height="14">`,g({cmd:"auctionhouse",subcmd:"cancel",auction_id:s(t.dataset.tipped,"inv_id")})}function E(){let e=d("auctionCancel",r("resultRows"));if(e.length===0)return;let t=e.map(T);P(t,w)}function H(){let e=C(r("fill"))?.nextElementSibling?.children?.[0];if(!e)return;let t=A({className:"smallLink",textContent:"Cancel All"});e.classList.add("fshCenter"),i(e,"]"),u(e,t),i(e,"["),p(t,E)}function R(){m("autoFillMinBidPrice")&&n(r("auto-fill"))}function _(){h()||!f()||(H(),R(),k(),l())}export{_ as default};
//# sourceMappingURL=injectAuctionHouse-DJM6DCKJ.js.map
