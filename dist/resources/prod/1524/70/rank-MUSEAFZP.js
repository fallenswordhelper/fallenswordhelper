import{a as T,b as P}from"./chunk-5MQGWHJ5.js";import{a as A}from"./chunk-HZLTBIRN.js";import{a as I}from"./chunk-B75T52YW.js";import{a as S}from"./chunk-ZOZVY2WA.js";import{b as v}from"./chunk-C6EYJ6K4.js";import"./chunk-XUK6Q6CA.js";import"./chunk-L6X4RIJT.js";import"./chunk-RUR7QN4K.js";import"./chunk-B7X7TQBP.js";import{a as E}from"./chunk-5UGN6ZK6.js";import"./chunk-FWGO5OVV.js";import"./chunk-QW35WT2N.js";import{a as p}from"./chunk-TRNMZZEK.js";import{a as j}from"./chunk-7NVHE3YD.js";import{a as s}from"./chunk-5ECB7X7D.js";import{a as D}from"./chunk-ZLYKFOOV.js";import{a as y}from"./chunk-RNF4KCS5.js";import"./chunk-UM564T7I.js";import"./chunk-VT3FG2IA.js";import"./chunk-3UCDRIAV.js";import{a as w}from"./chunk-U3HUZOSO.js";import"./chunk-PMAGLG7V.js";import"./chunk-OVCHDAEB.js";import"./chunk-XVKQFOEX.js";import{a as N}from"./chunk-VDCKZBED.js";import{a as C}from"./chunk-RNIUOJRT.js";import"./chunk-REMGFCSI.js";import"./chunk-THMELYB7.js";import"./chunk-H26KFXOF.js";import"./chunk-PPK4OJWZ.js";import"./chunk-7TR27PES.js";import"./chunk-LGWPD6VS.js";import"./chunk-YJJXIHBA.js";import"./chunk-Y7SJWUHU.js";import"./chunk-PM4JYVPN.js";import{a as b}from"./chunk-FCN2SCZU.js";import"./chunk-S7ZKFSNJ.js";import"./chunk-FTOTZBEG.js";import"./chunk-2XSNLBB5.js";import{a as f}from"./chunk-LL7EZAKT.js";import"./chunk-HSLYILSV.js";import"./chunk-HI53DSDF.js";import{a as R}from"./chunk-OSFTM2FV.js";import{a as B}from"./chunk-DEJU4WFB.js";import{b as m}from"./chunk-HQTGHXRS.js";import"./chunk-5H66GZ4Q.js";import"./chunk-HIMX5VML.js";import"./chunk-FFFKYVLG.js";import"./chunk-PDSYNNV7.js";import{a}from"./chunk-FS5GA4BE.js";import"./chunk-7EBZL5GD.js";import"./chunk-UGFNEEAM.js";import"./chunk-KDLHHGCJ.js";import"./chunk-WBGREN3P.js";import"./chunk-SOCGTSZG.js";import{a as c}from"./chunk-G24MBLFU.js";import{b as k}from"./chunk-3HXRWLGC.js";import"./chunk-OZW2BU7Q.js";import"./chunk-CJWCCIGF.js";import{a as x}from"./chunk-YKB3MUO2.js";import"./chunk-E427CPYE.js";import"./chunk-7MAPWPFS.js";var H=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]],V=(t,[,o])=>t+o-1,_=t=>H.filter(([o])=>A(t,o)).reduce(V,0),L=t=>t>>>0,M=t=>L(t).toString(2),q=t=>M(t).split("").map(Number).reduce(I,0),F=t=>v(_(t)+q(t),1);function G(t,o){let[r]=o.children,i=f(r.firstChild),n=t.find(e=>e&&e.name===i);n&&D(r,`<span class="fshBlue">(${F(n.permissions)}) Tax:(${n.tax||0}%)</span> `)}function O(t,o){p("ranks","fetchRankData"),t.forEach(a(G,o))}function Q(t,o,r){let i=E({className:"custombutton",type:"button",value:"Get Rank Weightings"});c(i,a(O,t,o));let n=r.parentNode.parentNode;s(n,"&nbsp;"),w(n,i)}function u(t,o){let r=C('#pCC a[href*="=ranks&subcmd2=add"]');r&&Q(t,o,r)}function d(t,o){return b({cmd:"guild",subcmd:"ranks",subcmd2:t,rank_id:o}).then(()=>({s:!0}))}function l(t,o){return T({subcmd2:t,rank_id:o})}function h(t,o){return y(l,d,t,o)}var g,Z=t=>["Up","Down"].includes(t.target.value);function z(t,o){return g>=Math.min(t.rowIndex,o)||o<1||o>t.parentNode.rows.length}function J(t){return t==="Up"?-1:2}function K(t){return t==="Up"?-22:22}function X(t,o,r){let i=t.target.getAttribute("onclick").match(/rank_id=(\d+)/);h(B(t.target.value),i[1]);let n=o.parentNode.rows[r];j(o,n);let e=K(t.target.value);window.scrollBy(0,e),t.stopPropagation()}function Y(t){p("ranks","overrideUpDown");let o=t.target.parentNode.parentNode.parentNode,r=o.rowIndex+J(t.target.value);z(o,r)||X(t,o,r)}function tt(t){Z(t)&&Y(t)}function U(){g&&k("ajaxifyRankControls")&&c(m,tt,!0)}function W(t,o){o.includes(N())&&(g=t.rowIndex)}function ot(){let t=m.lastElementChild.previousElementSibling.rows?.[7]?.children[0]?.children[0]?.rows;if(t)return x(t)}function rt(t,o){let r=o.children[0],i=f(r),n=t.find(e=>e.name===i);if(n?.members.length){let e=n.members.map($=>$.name);W(o,e),s(r,` <span class="fshBlue">- ${e.join(", ")}</span>`)}}function nt(t){let o=ot();o&&(S([5,3,o,1,a(rt,t)]),u(o,t),U())}async function et(){if(R())return;let t=await P();t?.s&&nt(t.r)}export{et as default};
//# sourceMappingURL=rank-MUSEAFZP.js.map
