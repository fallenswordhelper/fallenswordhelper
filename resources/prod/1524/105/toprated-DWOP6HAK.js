import{a as B}from"./chunk-UEOY3DEU.js";import{a as A}from"./chunk-BWC3ASDO.js";import"./chunk-B57AH4QQ.js";import{a as S}from"./chunk-4HHGCDES.js";import{a as _}from"./chunk-KHQRPRKG.js";import{a as C,b as E}from"./chunk-YUEFMISM.js";import"./chunk-LX7ZFTP3.js";import"./chunk-LT7Q3DRH.js";import{a as O}from"./chunk-GPANXWBJ.js";import{a as F}from"./chunk-MMFYEUFF.js";import"./chunk-VIYL46Q6.js";import"./chunk-JWVJSOBO.js";import{a as k}from"./chunk-UKC3WBSJ.js";import"./chunk-RN6NICJ7.js";import{a as f}from"./chunk-WP265O3M.js";import"./chunk-TZIXO72F.js";import{a as N}from"./chunk-3UNKZDTI.js";import{a as T}from"./chunk-LBMN7XL3.js";import"./chunk-3R32ULME.js";import"./chunk-KTI2IMEY.js";import"./chunk-GXOFVYKC.js";import"./chunk-A6LP6MUS.js";import{a as g}from"./chunk-Y5EGDMIB.js";import"./chunk-Z5JYB3FL.js";import"./chunk-MHWHHESW.js";import{a as x}from"./chunk-5HGBKHLV.js";import"./chunk-MZORVVMZ.js";import{i as w}from"./chunk-FR27OJE5.js";import{a as v}from"./chunk-E3BH7XBT.js";import"./chunk-IUVEXKRJ.js";import{a as i}from"./chunk-JG7KZ32H.js";import"./chunk-35MRBVSX.js";import"./chunk-5UBD44K5.js";import{a as y}from"./chunk-AH7GU5B4.js";import"./chunk-NRW7AT6T.js";import"./chunk-DPECAWNM.js";import"./chunk-KOM3R443.js";import"./chunk-NIOVFM2M.js";import"./chunk-6ZCA6D63.js";import"./chunk-YXAOTQ2S.js";import{a as L}from"./chunk-V45UJIF2.js";import"./chunk-64PLTPQD.js";import"./chunk-OHAOQZFW.js";import{a as p}from"./chunk-PJWDCLVE.js";import{b as o}from"./chunk-Q3ULPWYK.js";import{a as P}from"./chunk-JCK66TTB.js";import"./chunk-SY4ES3W2.js";import"./chunk-TFKKNJKY.js";import{a as c,c as h}from"./chunk-R7J7NY4A.js";import{Na as u,h as d}from"./chunk-5ELKH2XV.js";import"./chunk-5ORZS6IQ.js";import{a as m}from"./chunk-BRQN5OZB.js";import"./chunk-BZJZQFW2.js";import"./chunk-QCTVAEOV.js";import"./chunk-VQDTHLUC.js";var n=null,l=0;function G(){return c(n)&&(n=h("highlightPlayersNearMyLvl")),n}function H(){return l=T(),l}var I=[()=>G(),(e,t)=>m(t)||t!==(l||H()),e=>e.last_login>=w(),e=>e.virtual_level>=C(),e=>e.virtual_level<=E()];function M(e){if(e.rows[0].cells[0].children[0])return Number(p(d,e.rows[0].cells[0].children[0].href))}function R(e,t){return I.every(r=>r(t,e))}function s(e,t){let r=M(e);f(e.rows[0],`<td>${x({last_login:t.last_login})}</td>`),R(r,t)&&e.parentNode.parentNode.classList.add("lvlHighlight")}var j=e=>[A(e),i(e)];function U(e){k(e);let t=_({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'});return e.parentNode.replaceChild(t,e),t}async function b([e,t]){let r=await B(t);r&&s(e,r)}async function D(){let e=L(u,o()).map(j);await N(e.map(b))}async function a(e){g("toprated","FindOnlinePlayers");let t=U(e.target);await D(),t.remove()}function Q(){let e=y("td",o())[0];e.children[0].className="fshTopListWrap";let t=O({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}});F(e,t),P(t,a)}var W=[()=>v(),()=>o()?.children?.[0]?.rows?.length>2,()=>i(o().children[0].rows[1]).startsWith("Last Updated")];function q(){return W.every(S)}function V(){q()&&Q()}export{V as default};
//# sourceMappingURL=toprated-DWOP6HAK.js.map
