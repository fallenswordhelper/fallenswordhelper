import{a as _}from"./chunk-ZTWA637Q.js";import"./chunk-GB3P3WYI.js";import{a as x}from"./chunk-HEJFBNDI.js";import{a as I}from"./chunk-VZWB6W7T.js";import{a as S}from"./chunk-C4MOMCZ3.js";import{a as E}from"./chunk-J4J5DDEB.js";import{a as k}from"./chunk-T73BSJKR.js";import{a as O}from"./chunk-M3MIY5WL.js";import"./chunk-V5OO5USD.js";import"./chunk-YP55UNC6.js";import"./chunk-G4Y2RVGL.js";import{a as C}from"./chunk-WJGEKWR5.js";import{a as c}from"./chunk-AWJUUHCF.js";import"./chunk-RS7F7ZXV.js";import"./chunk-BFPR54OB.js";import"./chunk-XBR44BTF.js";import{b as P}from"./chunk-QP4P5TRQ.js";import{a as g}from"./chunk-NGC57R36.js";import"./chunk-PPVAQIV6.js";import{a as i}from"./chunk-A3YVYOGN.js";import"./chunk-PT75VPRA.js";import{a as L,b as T}from"./chunk-XMDNAM5V.js";import"./chunk-362XMEGR.js";import"./chunk-VIHT6GSA.js";import{a as w}from"./chunk-DAEM3QKC.js";import{a as N}from"./chunk-WHT6NO7G.js";import"./chunk-34ME3L5F.js";import"./chunk-DXDG2FN7.js";import"./chunk-6DXFGRHV.js";import{a as h}from"./chunk-BX4K6PYV.js";import{b as u}from"./chunk-22MCRXZW.js";import"./chunk-NRWJMAHH.js";import"./chunk-K4B7GDYL.js";import"./chunk-KU6X3UZY.js";import"./chunk-HDOHD4T5.js";import"./chunk-WS7NDR34.js";import"./chunk-JOVTQVLX.js";import{b as r}from"./chunk-QC454MFH.js";import"./chunk-R6LOYYKU.js";import"./chunk-NNEMTXQK.js";import"./chunk-EEFLVRLB.js";import"./chunk-BCLTLFAS.js";import{a as y}from"./chunk-RV2XOX2R.js";import"./chunk-YCSGQRQ3.js";import"./chunk-BVHFLUJI.js";import"./chunk-TRTGTDIN.js";import{a as v}from"./chunk-46ONZIIB.js";import{b as d}from"./chunk-S6LVOURD.js";import{a as f}from"./chunk-LXKLJ4E3.js";import"./chunk-VNX4IMNY.js";import{Ma as m,j as p}from"./chunk-KWOXJEE6.js";import"./chunk-GBEPYIIX.js";var n,l;function B(){return n=d("highlightPlayersNearMyLvl"),n}function F(){return l=w(),l}var G=[()=>n||B(),e=>f(e)||e!==(l||F()),(e,t)=>t.last_login>=u-604800,(e,t)=>t.virtual_level>=L(),(e,t)=>t.virtual_level<=T()];function H(e){if(e.rows[0].cells[0].children[0])return Number(p.exec(e.rows[0].cells[0].children[0].href)[1])}function M(e,t){return G.every(o=>o(e,t))}function s(e,t){let o=H(e);c(e.rows[0],`<td>${P({last_login:t.last_login})}</td>`),M(o,t)&&e.parentNode.parentNode.classList.add("lvlHighlight")}var R=e=>[_(e),i(e)];function j(e){O(e);let t=E({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'});return e.parentNode.replaceChild(t,e),t}async function A([e,t]){let o=await I(t);s(e,o)}async function U(){let e=g(m,r).map(R);await N(e.map(A))}async function a(e){C("toprated","FindOnlinePlayers");let t=j(e.target);await U(),t.remove()}function b(){let e=h("td",r)[0];e.children[0].className="fshTopListWrap";let t=x({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}});k(e,t),v(t,a)}var Q=[()=>y(),()=>r,()=>r.children[0],()=>r.children[0].rows,()=>r.children[0].rows.length>2,()=>i(r.children[0].rows[1]).startsWith("Last Updated")];function W(){return Q.every(S)}function q(){W()&&b()}export{q as default};
//# sourceMappingURL=toprated-OMODSZCM.js.map