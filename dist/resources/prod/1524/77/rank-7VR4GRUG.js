import{a as T,b as P}from"./chunk-G7GEIAW2.js";import{a as A}from"./chunk-J2E7KN76.js";import{a as I}from"./chunk-O2PDVT7F.js";import{a as S}from"./chunk-P6MWTZCL.js";import{b as v}from"./chunk-WY5JIT56.js";import{a as D}from"./chunk-YJXQAREX.js";import"./chunk-75XX4JRH.js";import"./chunk-FC3SW3T5.js";import"./chunk-RDSCKWJA.js";import"./chunk-SLCWMNGK.js";import{a as E}from"./chunk-SZEXNAKU.js";import"./chunk-JWUVIYOZ.js";import{a as j}from"./chunk-7MY4ZH6V.js";import"./chunk-3IWRIV6F.js";import{a as p}from"./chunk-QGISXAKM.js";import{a as y}from"./chunk-CF6YUP27.js";import"./chunk-73C4CZQC.js";import"./chunk-KWSYP2L6.js";import{a as s}from"./chunk-DJURCDAC.js";import"./chunk-K4A73PNG.js";import{a as w}from"./chunk-U6JCSF56.js";import"./chunk-XAX5HKDY.js";import"./chunk-5MF2YXQB.js";import"./chunk-G4TQOXXG.js";import{a as N}from"./chunk-QOUVIVGT.js";import{a as C}from"./chunk-67CTFPBW.js";import"./chunk-ISHIO47H.js";import"./chunk-APHEMB2A.js";import"./chunk-PSHFCZCL.js";import"./chunk-ZXTXYIKP.js";import"./chunk-BDRC5WHN.js";import"./chunk-SJ34J5WR.js";import"./chunk-WSSW4LE4.js";import"./chunk-XAK3RXQ4.js";import"./chunk-JKCGPSLU.js";import{a as b}from"./chunk-KZMROKUM.js";import"./chunk-7ISBQY3F.js";import"./chunk-LJGQ6BIE.js";import"./chunk-RXZ343DN.js";import{a as x}from"./chunk-YYF4XEZN.js";import{a as f}from"./chunk-ODP3NXYP.js";import"./chunk-3FN7LFWY.js";import"./chunk-QB5S66YQ.js";import{a as R}from"./chunk-YXNNMQHM.js";import{a as B}from"./chunk-M5RWLFYI.js";import{b as m}from"./chunk-MXS6U56Z.js";import"./chunk-QJIXYOVR.js";import"./chunk-UHDN7CXZ.js";import"./chunk-PVJ32AKX.js";import"./chunk-QMUMVPKQ.js";import{a}from"./chunk-ANHXFVGQ.js";import"./chunk-CU6VQLH4.js";import"./chunk-2XSC56S6.js";import"./chunk-4D7SULLS.js";import"./chunk-RGJLWSH5.js";import"./chunk-IHC7UOJU.js";import{a as c}from"./chunk-D545QQO5.js";import{b as k}from"./chunk-PIEHJDPR.js";import"./chunk-Q3ZGTWEX.js";import"./chunk-Z5QM5T22.js";import"./chunk-N7OQJWUZ.js";import"./chunk-CAZ242LS.js";var H=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]],V=(t,[,o])=>t+o-1,_=t=>H.filter(([o])=>A(t,o)).reduce(V,0),L=t=>t>>>0,M=t=>L(t).toString(2),q=t=>M(t).split("").map(Number).reduce(I,0),F=t=>v(_(t)+q(t),1);function G(t,o){let[r]=o.children,i=f(r.firstChild),n=t.find(e=>e&&e.name===i);n&&D(r,`<span class="fshBlue">(${F(n.permissions)}) Tax:(${n.tax||0}%)</span> `)}function O(t,o){p("ranks","fetchRankData"),t.forEach(a(G,o))}function Q(t,o,r){let i=E({className:"custombutton",type:"button",value:"Get Rank Weightings"});c(i,a(O,t,o));let n=r.parentNode.parentNode;s(n,"&nbsp;"),w(n,i)}function u(t,o){let r=C('#pCC a[href*="=ranks&subcmd2=add"]');r&&Q(t,o,r)}function d(t,o){return b({cmd:"guild",subcmd:"ranks",subcmd2:t,rank_id:o}).then(()=>({s:!0}))}function l(t,o){return T({subcmd2:t,rank_id:o})}function h(t,o){return y(l,d,t,o)}var g,Z=t=>["Up","Down"].includes(t.target.value);function z(t,o){return g>=Math.min(t.rowIndex,o)||o<1||o>t.parentNode.rows.length}function J(t){return t==="Up"?-1:2}function K(t){return t==="Up"?-22:22}function X(t,o,r){let i=t.target.getAttribute("onclick").match(/rank_id=(\d+)/);h(B(t.target.value),i[1]);let n=o.parentNode.rows[r];j(o,n);let e=K(t.target.value);window.scrollBy(0,e),t.stopPropagation()}function Y(t){p("ranks","overrideUpDown");let o=t.target.parentNode.parentNode.parentNode,r=o.rowIndex+J(t.target.value);z(o,r)||X(t,o,r)}function tt(t){Z(t)&&Y(t)}function U(){g&&k("ajaxifyRankControls")&&c(m,tt,!0)}function W(t,o){o.includes(N())&&(g=t.rowIndex)}function ot(){let t=m.lastElementChild.previousElementSibling.rows?.[7]?.children[0]?.children[0]?.rows;if(t)return x(t)}function rt(t,o){let r=o.children[0],i=f(r),n=t.find(e=>e.name===i);if(n?.members.length){let e=n.members.map($=>$.name);W(o,e),s(r,` <span class="fshBlue">- ${e.join(", ")}</span>`)}}function nt(t){let o=ot();o&&(S([3,o,1,a(rt,t)]),u(o,t),U())}async function et(){if(R())return;let t=await P();t?.s&&nt(t.r)}export{et as default};
//# sourceMappingURL=rank-7VR4GRUG.js.map
