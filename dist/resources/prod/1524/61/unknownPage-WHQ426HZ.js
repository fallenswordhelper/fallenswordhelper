import{a as k}from"./chunk-BINCK4Q3.js";import{a as B,b as S}from"./chunk-HQTY6WII.js";import{a as w}from"./chunk-MR4JXMO6.js";import"./chunk-ACEZZUU2.js";import"./chunk-DFDY7R4S.js";import{a as h,b as y,c as b,d as r}from"./chunk-V3G26CLF.js";import"./chunk-IHALPKBS.js";import"./chunk-YEYRDCHL.js";import{a as d}from"./chunk-AMBECJSA.js";import"./chunk-SVOLGRZA.js";import{a as c}from"./chunk-AMLNDKL6.js";import"./chunk-VSJWDJAE.js";import"./chunk-N35L4X3I.js";import"./chunk-M74LU33Y.js";import"./chunk-SRR4B7GE.js";import"./chunk-QCFSLNAO.js";import{a as p}from"./chunk-CDBYAPQM.js";import{a as s}from"./chunk-A5UFVDS4.js";import"./chunk-LWP4UM2N.js";import{a as i}from"./chunk-3XARJZUK.js";import{a as l,b as g}from"./chunk-CR4XFS65.js";import"./chunk-C4AGMBCS.js";import"./chunk-B5WSSBSP.js";import"./chunk-MWD4X6Z5.js";import"./chunk-RC6Y3VA2.js";import"./chunk-ILE2VADS.js";import{b as a}from"./chunk-KZTI7NFS.js";import"./chunk-L2KXS2FW.js";import"./chunk-A2JPUMZD.js";import{xa as m}from"./chunk-I67LU25W.js";import{a as n}from"./chunk-PH4INCXG.js";function f(t){let e=S(t);return e?e.stam.toString():"-"}var L=t=>` ${t[0]} (${f(t[1])} stamina)<br>`,v=t=>` <span class="fshRed">${t[0]}</span><br>`;function P(t,e){let o;return e[1]?o=L(e):o=v(e),t+o}function j(t){let e=w(new Date),o=B(document).map(i(P,e));g(m,o.reverse().join("")+t)}function u(){!a("keepBuffLog")||l(m).then(j)}var q=[[()=>d(".news_left_column"),()=>{r("unknown.news"),y()}],[()=>s("quickbuff-report"),()=>{r("unknown.buffLog.updateBuffLog"),u()}],[()=>k('//td[.="Quest Name"]'),()=>{r("unknown.questBook.injectQuestBookFull"),b()}],[()=>c('#pCC img[title="Inventing"]').length>0,()=>{r("unknown.recipes.inventing"),h()}],[()=>n.userIsDev,()=>{console.log("Fell through!")}]];function A(){if(p())return;n.userIsDev&&console.log("unknownPage");let t=q.find(e=>e[0]());t&&t[1]()}export{A as default};
//# sourceMappingURL=unknownPage-WHQ426HZ.js.map