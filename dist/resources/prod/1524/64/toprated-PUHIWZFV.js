import{a as _}from"./chunk-2JOD4GM5.js";import"./chunk-VFSEFN4G.js";import{a as x}from"./chunk-HGNKQF5Q.js";import{a as S}from"./chunk-FUH5X4VH.js";import{a as E}from"./chunk-MESE3PHU.js";import{a as O}from"./chunk-PZZGI3D7.js";import{a as k}from"./chunk-A6L4KIG4.js";import"./chunk-C7T6VCNC.js";import"./chunk-JXL4HPF6.js";import{a as C}from"./chunk-JEZXSBDP.js";import{a as I}from"./chunk-R2ABASBL.js";import"./chunk-BQTQOQGW.js";import{a as c}from"./chunk-6HFP56UB.js";import"./chunk-JMJ2BOMP.js";import"./chunk-3DWHDW4D.js";import"./chunk-RVEJ4C26.js";import{b as P}from"./chunk-JR7C2FJO.js";import{a as g}from"./chunk-S367ATRC.js";import"./chunk-CL6MB4ZE.js";import{a as i}from"./chunk-FRV7FQNH.js";import"./chunk-XPYPU624.js";import{a as L,b as T}from"./chunk-YRMD5FMD.js";import"./chunk-FEGUW2ZZ.js";import"./chunk-E4X35TKG.js";import{a as w}from"./chunk-V4O7SGPV.js";import{a as N}from"./chunk-THUVFGD2.js";import"./chunk-SOIZ76GQ.js";import"./chunk-QDYZC5DW.js";import{a as h}from"./chunk-6F7KGMTR.js";import{b as u}from"./chunk-FA37UARH.js";import"./chunk-JDBXWYYY.js";import"./chunk-5GNYWTGT.js";import"./chunk-E5PHBQC4.js";import"./chunk-XG256B2T.js";import"./chunk-EBLMPFV5.js";import"./chunk-QS7J5TMD.js";import{b as r}from"./chunk-P664PW54.js";import"./chunk-WM64FGHN.js";import"./chunk-GQGCY7E7.js";import"./chunk-LXVMDOGR.js";import"./chunk-GX4J242O.js";import"./chunk-X5N7OOVX.js";import{a as y}from"./chunk-MKQZLDMS.js";import"./chunk-55RTNKIA.js";import"./chunk-X73J5C7S.js";import"./chunk-5TFX5HF5.js";import{a as v}from"./chunk-KM25KKJO.js";import{b as d}from"./chunk-NG7LLWFJ.js";import{a as f}from"./chunk-45P77O4Z.js";import"./chunk-6FX7G55Z.js";import"./chunk-O24SBNSZ.js";import"./chunk-DW345X2O.js";import{Ma as m,j as p}from"./chunk-AWEYVB2J.js";import"./chunk-UUU5NSJN.js";var n,l;function B(){return n=d("highlightPlayersNearMyLvl"),n}function F(){return l=w(),l}var G=[()=>n||B(),e=>f(e)||e!==(l||F()),(e,t)=>t.last_login>=u-604800,(e,t)=>t.virtual_level>=L(),(e,t)=>t.virtual_level<=T()];function H(e){if(e.rows[0].cells[0].children[0])return Number(p.exec(e.rows[0].cells[0].children[0].href)[1])}function M(e,t){return G.every(o=>o(e,t))}function s(e,t){let o=H(e);c(e.rows[0],`<td>${P({last_login:t.last_login})}</td>`),M(o,t)&&e.parentNode.parentNode.classList.add("lvlHighlight")}var R=e=>[_(e),i(e)];function j(e){k(e);let t=O({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'});return e.parentNode.replaceChild(t,e),t}async function A([e,t]){let o=await S(t);s(e,o)}async function U(){let e=g(m,r).map(R);await N(e.map(A))}async function a(e){C("toprated","FindOnlinePlayers");let t=j(e.target);await U(),t.remove()}function b(){let e=h("td",r)[0];e.children[0].className="fshTopListWrap";let t=x({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}});I(e,t),v(t,a)}var Q=[()=>y(),()=>r,()=>r.children[0],()=>r.children[0].rows,()=>r.children[0].rows.length>2,()=>i(r.children[0].rows[1]).startsWith("Last Updated")];function W(){return Q.every(E)}function q(){W()&&b()}export{q as default};
//# sourceMappingURL=toprated-PUHIWZFV.js.map