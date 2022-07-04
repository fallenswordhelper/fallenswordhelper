import{a as U}from"./chunk-NIH4FOW3.js";import{a as V}from"./chunk-GUCVUTHK.js";import{a as I}from"./chunk-PIMSHOES.js";import{b as P}from"./chunk-JNNJ7Z2K.js";import{a as A}from"./chunk-GSAO5JD5.js";import{a as v}from"./chunk-5LK2EVIS.js";import{a as T}from"./chunk-K3JRKDVW.js";import"./chunk-GAJ7W4PY.js";import{a as D}from"./chunk-IXFFOVO3.js";import"./chunk-MQIN2CMZ.js";import{a as S}from"./chunk-E63AY36L.js";import"./chunk-PXS4UF2I.js";import"./chunk-A5IY3XA5.js";import{a as d}from"./chunk-FNBCAVVI.js";import{a as u}from"./chunk-YNGMMT7C.js";import"./chunk-TNZ4IZQ7.js";import"./chunk-X25XOQCJ.js";import{a as m}from"./chunk-AH6ETHJX.js";import"./chunk-MOKJBRKZ.js";import{a as N}from"./chunk-P46IDWBX.js";import"./chunk-FZSLHGK7.js";import"./chunk-NCIHVVRD.js";import"./chunk-TWZ4BHMZ.js";import{a as E}from"./chunk-K4AQX6AZ.js";import"./chunk-74YO2Y7V.js";import"./chunk-OHJEVCKX.js";import"./chunk-D7DBYYVV.js";import"./chunk-UFDUIBPU.js";import"./chunk-FDOAGP6J.js";import"./chunk-N7MDWAJF.js";import"./chunk-UCL5WC26.js";import"./chunk-ZUUQECWA.js";import{a as C}from"./chunk-2ZEFTA6B.js";import"./chunk-47BUGNNO.js";import{a as y}from"./chunk-4XBIOIJL.js";import"./chunk-JSOCZFF7.js";import"./chunk-XCW5GYL4.js";import"./chunk-YSVAFZPB.js";import{a as b}from"./chunk-ULCOJYQQ.js";import{a as c}from"./chunk-5JKG2KXO.js";import"./chunk-TJDS7E3Q.js";import"./chunk-KYIDEWAX.js";import{a as B}from"./chunk-QC67ERFU.js";import{a as j}from"./chunk-NK53RUIC.js";import{b as f}from"./chunk-UAFWJMEF.js";import"./chunk-KUKFZGKL.js";import"./chunk-ZFTPD3JX.js";import"./chunk-JUUMQFPG.js";import"./chunk-OPXVQRDJ.js";import{a}from"./chunk-KQGQROK7.js";import"./chunk-RBDNRJUJ.js";import"./chunk-3JJXNX5O.js";import"./chunk-4G6P2W32.js";import"./chunk-HSKCJVE7.js";import"./chunk-WT2NGKU2.js";import{a as p}from"./chunk-CH6H745H.js";import{b as R}from"./chunk-ET6NKS7B.js";import"./chunk-QMAERS6H.js";import"./chunk-AJ22QQIT.js";import"./chunk-I6XFTTZH.js";import"./chunk-6IFYCYYR.js";function s(t){return T({subcmd:"ranks",...t})}function l(){return u(s,v)}var _=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]],L=(t,[,o])=>t+o-1,M=t=>_.filter(([o])=>U(t,o)).reduce(L,0),q=t=>t>>>0,F=t=>q(t).toString(2),G=t=>F(t).split("").map(Number).reduce(V,0),O=t=>P(M(t)+G(t),1);function Q(t,o){let[r]=o.children,i=c(r.firstChild),n=t.find(e=>e&&e.name===i);n&&A(r,`<span class="fshBlue">(${O(n.permissions)}) Tax:(${n.tax||0}%)</span> `)}function Z(t,o){d("ranks","fetchRankData"),t.forEach(a(Q,o))}function z(t,o,r){let i=D({className:"custombutton",type:"button",value:"Get Rank Weightings"});p(i,a(Z,t,o));let n=r.parentNode.parentNode;m(n,"&nbsp;"),N(n,i)}function h(t,o){let r=C('#pCC a[href*="=ranks&subcmd2=add"]');r&&z(t,o,r)}function k(t,o){return y({cmd:"guild",subcmd:"ranks",subcmd2:t,rank_id:o}).then(()=>({s:!0}))}function g(t,o){return s({subcmd2:t,rank_id:o})}function x(t,o){return u(g,k,t,o)}var w,J=t=>["Up","Down"].includes(t.target.value);function K(t,o){return w>=Math.min(t.rowIndex,o)||o<1||o>t.parentNode.rows.length}function X(t){return t==="Up"?-1:2}function Y(t){return t==="Up"?-22:22}function tt(t,o,r){let i=t.target.getAttribute("onclick").match(/rank_id=(\d+)/);x(j(t.target.value),i[1]);let n=o.parentNode.rows[r];S(o,n);let e=Y(t.target.value);window.scrollBy(0,e),t.stopPropagation()}function ot(t){d("ranks","overrideUpDown");let o=t.target.parentNode.parentNode.parentNode,r=o.rowIndex+X(t.target.value);K(o,r)||tt(t,o,r)}function rt(t){J(t)&&ot(t)}function W(){w&&R("ajaxifyRankControls")&&p(f,rt,!0)}function $(t,o){o.includes(E())&&(w=t.rowIndex)}function nt(){let t=f.lastElementChild.previousElementSibling.rows?.[7]?.children[0]?.children[0]?.rows;if(t)return b(t)}function et(t,o){let r=o.children[0],i=c(r),n=t.find(e=>e.name===i);if(n?.members.length){let e=n.members.map(H=>H.name);$(o,e),m(r,` <span class="fshBlue">- ${e.join(", ")}</span>`)}}function it(t){let o=nt();o&&(I([3,o,1,a(et,t)]),h(o,t),W())}async function at(){if(B())return;let t=await l();t?.s&&it(t.r)}export{at as default};
//# sourceMappingURL=rank-EENJZDJA.js.map
