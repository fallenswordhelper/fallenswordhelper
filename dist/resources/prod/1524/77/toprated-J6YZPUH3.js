import{a as _}from"./chunk-WZKPWMOS.js";import"./chunk-SLCWMNGK.js";import{a as x}from"./chunk-SZEXNAKU.js";import{a as I}from"./chunk-5IVXNVBM.js";import{a as S}from"./chunk-XR2DZFPS.js";import{a as E}from"./chunk-DPFMLBRO.js";import{a as k}from"./chunk-AXNCRIFU.js";import{a as O}from"./chunk-MIINMRYG.js";import"./chunk-7MY4ZH6V.js";import"./chunk-EW4KFSJU.js";import"./chunk-FGCHGAPB.js";import{a as C}from"./chunk-QGISXAKM.js";import{a as c}from"./chunk-DJURCDAC.js";import"./chunk-K4A73PNG.js";import"./chunk-U6JCSF56.js";import"./chunk-XAX5HKDY.js";import{b as P}from"./chunk-EGI5TAWB.js";import{a as g}from"./chunk-ISHIO47H.js";import"./chunk-APHEMB2A.js";import{a as i}from"./chunk-PSHFCZCL.js";import"./chunk-ZXTXYIKP.js";import{a as L,b as T}from"./chunk-LX5L4B3T.js";import"./chunk-TMHWAQJN.js";import"./chunk-XWANSCMS.js";import{a as w}from"./chunk-SJ34J5WR.js";import{a as N}from"./chunk-4ULUKIZ4.js";import"./chunk-ZL7L5RNG.js";import"./chunk-6JEBQQXB.js";import"./chunk-WSSW4LE4.js";import{a as h}from"./chunk-XAK3RXQ4.js";import{b as u}from"./chunk-7ISBQY3F.js";import"./chunk-LJGQ6BIE.js";import"./chunk-RXZ343DN.js";import"./chunk-YYF4XEZN.js";import"./chunk-ODP3NXYP.js";import"./chunk-3FN7LFWY.js";import"./chunk-QB5S66YQ.js";import{b as r}from"./chunk-MXS6U56Z.js";import"./chunk-QJIXYOVR.js";import"./chunk-PVJ32AKX.js";import"./chunk-QMUMVPKQ.js";import"./chunk-ANHXFVGQ.js";import{a as y}from"./chunk-2XSC56S6.js";import"./chunk-4D7SULLS.js";import"./chunk-RGJLWSH5.js";import"./chunk-IHC7UOJU.js";import{a as v}from"./chunk-D545QQO5.js";import{b as d}from"./chunk-PIEHJDPR.js";import{a as f}from"./chunk-Q3ZGTWEX.js";import"./chunk-Z5QM5T22.js";import{Ma as m,j as p}from"./chunk-N7OQJWUZ.js";import"./chunk-CAZ242LS.js";var n,l;function B(){return n=d("highlightPlayersNearMyLvl"),n}function F(){return l=w(),l}var G=[()=>n||B(),e=>f(e)||e!==(l||F()),(e,t)=>t.last_login>=u-604800,(e,t)=>t.virtual_level>=L(),(e,t)=>t.virtual_level<=T()];function H(e){if(e.rows[0].cells[0].children[0])return Number(p.exec(e.rows[0].cells[0].children[0].href)[1])}function M(e,t){return G.every(o=>o(e,t))}function s(e,t){let o=H(e);c(e.rows[0],`<td>${P({last_login:t.last_login})}</td>`),M(o,t)&&e.parentNode.parentNode.classList.add("lvlHighlight")}var R=e=>[_(e),i(e)];function j(e){O(e);let t=E({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'});return e.parentNode.replaceChild(t,e),t}async function A([e,t]){let o=await I(t);s(e,o)}async function U(){let e=g(m,r).map(R);await N(e.map(A))}async function a(e){C("toprated","FindOnlinePlayers");let t=j(e.target);await U(),t.remove()}function b(){let e=h("td",r)[0];e.children[0].className="fshTopListWrap";let t=x({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}});k(e,t),v(t,a)}var Q=[()=>y(),()=>r,()=>r.children[0],()=>r.children[0].rows,()=>r.children[0].rows.length>2,()=>i(r.children[0].rows[1]).startsWith("Last Updated")];function W(){return Q.every(S)}function q(){W()&&b()}export{q as default};
//# sourceMappingURL=toprated-J6YZPUH3.js.map
