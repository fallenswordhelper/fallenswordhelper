import{a as d}from"./chunk-3VYQ5OVV.js";import{a as g}from"./chunk-KC3JUT6W.js";import"./chunk-YW6SRUBN.js";import{a as h}from"./chunk-NHXMBUTR.js";import{a as i}from"./chunk-YPRXL3QQ.js";import"./chunk-5ITL5FDM.js";import{a as r}from"./chunk-EDGUKKB5.js";import{a as f}from"./chunk-Y2JX5GQ6.js";import{a as u}from"./chunk-X5ZSXFJV.js";import{a as p}from"./chunk-WHAZT5VY.js";import"./chunk-UWKUUDVQ.js";import"./chunk-WDK5KJW5.js";import{b as l}from"./chunk-MHANGBVH.js";import"./chunk-LVNLH6ER.js";import"./chunk-EUBCJC2U.js";import"./chunk-ND3XCMOS.js";import{a as s}from"./chunk-PJ32ASZ7.js";import"./chunk-F5QOVYT2.js";import"./chunk-R5ZZQ5HH.js";import"./chunk-PO34EML4.js";import"./chunk-QFSH2B2J.js";import"./chunk-2PFHY365.js";import"./chunk-GGKSIQST.js";import"./chunk-JSWEJZHY.js";import{a}from"./chunk-G3O526VI.js";import"./chunk-GHQYBWLT.js";import"./chunk-PKDG64MH.js";import{a as o}from"./chunk-2B42SRXB.js";import"./chunk-3IGXKFMQ.js";import"./chunk-TDNJGM62.js";import{b as c}from"./chunk-HAINOYE5.js";import"./chunk-AN5TC666.js";import"./chunk-B7PLPUHK.js";import"./chunk-YNXRNCRL.js";import{b as m}from"./chunk-7DPOBF7C.js";import"./chunk-DEDCEYVR.js";function A(){r(o("refresh"))}function y(e){let t=e.parentNode.parentNode.children[0].children[0];return e.outerHTML=`<img src="${m}ui/misc/spinner.gif" width="14" height="14">`,s({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(t.dataset.tipped)[1]})}function C(){let e=h("auctionCancel",o("resultRows"));if(e.length===0)return;let t=e.map(y);g(t,A)}function x(){let e=o("fill");if(!e)return;let t=u({className:"smallLink",textContent:"Cancel All"}),n=e.parentNode.parentNode.nextElementSibling.children[0];n.classList.add("fshCenter"),i(n,"]"),f(n,t),i(n,"["),a(t,C)}function N(){c("autoFillMinBidPrice")&&r(o("auto-fill"))}function B(){p()||!l||(x(),N(),d())}export{B as default};
//# sourceMappingURL=injectAuctionHouse-EE5HR5HO.js.map
