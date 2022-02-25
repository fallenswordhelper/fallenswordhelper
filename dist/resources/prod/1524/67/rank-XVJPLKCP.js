import{a as A}from"./chunk-7XC7H6RF.js";import{a as I}from"./chunk-D6RXBUDF.js";import{a as P}from"./chunk-CXSGHUR2.js";import{b as T}from"./chunk-WATSSAMP.js";import{a as v,b as S}from"./chunk-GGJ2O2KS.js";import"./chunk-VKLKLU7U.js";import"./chunk-CX6XSC6N.js";import"./chunk-Z4DKK5CW.js";import{a as E}from"./chunk-ADODKMOJ.js";import"./chunk-BGHYXCTD.js";import"./chunk-RKFUGC6E.js";import{a as p}from"./chunk-QPL4UDOG.js";import{a as j}from"./chunk-VLOJXVBO.js";import{a as s}from"./chunk-26JISGFW.js";import{a as D}from"./chunk-KQ5WOXHO.js";import{a as y}from"./chunk-P5WXMFOM.js";import"./chunk-N2VZWPJP.js";import"./chunk-QDHLPZKT.js";import"./chunk-INFCFROH.js";import{a as w}from"./chunk-OWY2Q2GJ.js";import"./chunk-3S466L2P.js";import"./chunk-HORLN2G6.js";import"./chunk-NAHCCLMO.js";import{a as N}from"./chunk-7QWFOD3X.js";import{a as C}from"./chunk-QWSDLB5G.js";import"./chunk-FJBSYG3T.js";import"./chunk-WZMCOCZ3.js";import"./chunk-PGXMNMPQ.js";import"./chunk-FV22T2G6.js";import"./chunk-IFFNUHS4.js";import"./chunk-YLOJQ3K3.js";import"./chunk-NTEMJNYZ.js";import"./chunk-N3YOZZB2.js";import"./chunk-4C3N6WGV.js";import{a as b}from"./chunk-MIOWB4UH.js";import"./chunk-LUOJJ6W7.js";import"./chunk-MCIAXMHF.js";import"./chunk-FDW632OT.js";import{a as f}from"./chunk-PUGPLE52.js";import"./chunk-4PSUCBRT.js";import"./chunk-O4HYZYL5.js";import{a as R}from"./chunk-HTRQRB5B.js";import{a as B}from"./chunk-4WRR2QCG.js";import{b as m}from"./chunk-RWFKIDH7.js";import"./chunk-THKPSV6M.js";import"./chunk-L4DDZPXD.js";import"./chunk-H4BEXNKD.js";import"./chunk-TBVC64JY.js";import{a}from"./chunk-PCBO3IJC.js";import"./chunk-JPOUNVF7.js";import"./chunk-V33I5Q6E.js";import"./chunk-UFBUSQTS.js";import"./chunk-M4ZGL2LG.js";import"./chunk-BH7UVVMX.js";import{a as c}from"./chunk-JDVPJYUH.js";import{b as k}from"./chunk-EGK63SHX.js";import"./chunk-6FME2ZRC.js";import"./chunk-7EGIQ5LI.js";import{a as x}from"./chunk-CHZ553KP.js";import"./chunk-ZBCNB5YM.js";import"./chunk-UMUEY5TB.js";var H=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]],V=(t,[,o])=>t+o-1,_=t=>H.filter(([o])=>A(t,o)).reduce(V,0),L=t=>t>>>0,M=t=>L(t).toString(2),q=t=>M(t).split("").map(Number).reduce(I,0),F=t=>T(_(t)+q(t),1);function G(t,o){let r=o.children[0],i=f(r.firstChild),n=t.find(e=>e&&e.name===i);n&&D(r,`<span class="fshBlue">(${F(n.permissions)}) Tax:(${n.tax}%)</span> `)}function O(t,o){p("ranks","fetchRankData"),t.forEach(a(G,o))}function Q(t,o,r){let i=E({className:"custombutton",type:"button",value:"Get Rank Weightings"});c(i,a(O,t,o));let n=r.parentNode.parentNode;s(n,"&nbsp;"),w(n,i)}function u(t,o){let r=C('#pCC a[href*="=ranks&subcmd2=add"]');r&&Q(t,o,r)}function d(t,o){return b({cmd:"guild",subcmd:"ranks",subcmd2:t,rank_id:o}).then(()=>({s:!0}))}function l(t,o){return v({subcmd2:t,rank_id:o})}function h(t,o){return y(l,d,t,o)}var g,Z=t=>["Up","Down"].includes(t.target.value);function z(t,o){return g>=Math.min(t.rowIndex,o)||o<1||o>t.parentNode.rows.length}function J(t){return t==="Up"?-1:2}function K(t){return t==="Up"?-22:22}function X(t,o,r){let i=t.target.getAttribute("onclick").match(/rank_id=(\d+)/);h(B(t.target.value),i[1]);let n=o.parentNode.rows[r];j(o,n);let e=K(t.target.value);window.scrollBy(0,e),t.stopPropagation()}function Y(t){p("ranks","overrideUpDown");let o=t.target.parentNode.parentNode.parentNode,r=o.rowIndex+J(t.target.value);z(o,r)||X(t,o,r)}function tt(t){Z(t)&&Y(t)}function U(){g&&k("ajaxifyRankControls")&&c(m,tt,!0)}function W(t,o){o.includes(N())&&(g=t.rowIndex)}function ot(){let t=m.lastElementChild.previousElementSibling.rows?.[7]?.children[0]?.children[0]?.rows;if(t)return x(t)}function rt(t,o){let r=o.children[0],i=f(r),n=t.find(e=>e.name===i);if(n?.members.length){let e=n.members.map($=>$.name);W(o,e),s(r,` <span class="fshBlue">- ${e.join(", ")}</span>`)}}function nt(t){let o=ot();o&&(P([5,3,o,1,a(rt,t)]),u(o,t),U())}async function et(){if(R())return;let t=await S();t?.s&&nt(t.r)}export{et as default};
//# sourceMappingURL=rank-XVJPLKCP.js.map
