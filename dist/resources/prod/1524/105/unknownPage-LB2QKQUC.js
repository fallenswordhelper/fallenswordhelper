import{a as B}from"./chunk-QQVPMOTJ.js";import{a as k}from"./chunk-PPNQ3UGQ.js";import{a as d}from"./chunk-JL3L5URW.js";import{a as w}from"./chunk-X2F3T7LA.js";import{a as e,b as v,c as b,d as L}from"./chunk-NM5XLKJ2.js";import"./chunk-6WIP4RNC.js";import"./chunk-3LHAMFDA.js";import"./chunk-JJ7LU6FF.js";import"./chunk-WTIVGVRL.js";import{a as c,b as l}from"./chunk-K2ALIVI4.js";import"./chunk-SNNJRQSX.js";import"./chunk-5YAX7RCO.js";import"./chunk-Z5JYB3FL.js";import"./chunk-DLFQE7QF.js";import"./chunk-W7PPIV33.js";import{a as g}from"./chunk-NT4BD23Z.js";import"./chunk-B7LKBV3M.js";import"./chunk-E3BH7XBT.js";import"./chunk-IUVEXKRJ.js";import"./chunk-JG7KZ32H.js";import{a as u}from"./chunk-FMA2QB7F.js";import"./chunk-35MRBVSX.js";import"./chunk-KOM3R443.js";import"./chunk-V45UJIF2.js";import"./chunk-64PLTPQD.js";import"./chunk-OHAOQZFW.js";import"./chunk-PJWDCLVE.js";import{a as s}from"./chunk-SY4ES3W2.js";import"./chunk-TFKKNJKY.js";import{c as p}from"./chunk-R7J7NY4A.js";import{za as f}from"./chunk-5ELKH2XV.js";import"./chunk-BRQN5OZB.js";import{a}from"./chunk-BZJZQFW2.js";import{a as r}from"./chunk-QCTVAEOV.js";import"./chunk-VQDTHLUC.js";function i(t){let o=d(t);return o?o.stam.toString():"-"}var S=t=>` ${t[0]} (${i(t[1])} stamina)<br>`,h=t=>` <span class="fshRed">${t[0]}</span><br>`;function j(t,o){let n=h(o);return o[1]&&(n=S(o)),t+n}function P(t){let o=w(new Date),n=k(document).map(a(j,o));l(f,n.reverse().join("")+t)}async function m(){if(!p("keepBuffLog"))return;let t=await c(f)??"";P(t)}var x=[[()=>u(".news_left_column"),()=>{e("unknown.news"),b()}],[()=>s("quickbuff-report"),()=>{e("unknown.buffLog.updateBuffLog"),m()}],[()=>B('//td[.="Quest Name"]'),()=>{e("unknown.questBook.injectQuestBookFull"),L()}],[()=>u('#pCC input[value="doinvent"]'),()=>{e("unknown.recipes.inventing"),v()}],[()=>r.userIsDev,()=>{console.log("Fell through!")}]];function y(){if(g())return;r.userIsDev&&console.log("unknownPage");let t=x.find(o=>o[0]());t&&t[1]()}export{y as default};
//# sourceMappingURL=unknownPage-LB2QKQUC.js.map