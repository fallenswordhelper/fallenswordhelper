import{a as O}from"./chunk-45EWONWO.js";import{a as N}from"./chunk-WKYCC6BP.js";import{a as m}from"./chunk-OXDYW6FF.js";import{a as _}from"./chunk-5HH7GGGJ.js";import{a as R}from"./chunk-IAPLFRFL.js";import{a as E}from"./chunk-DQJLU6BH.js";import{a as n}from"./chunk-YMX6UH45.js";import{a as f}from"./chunk-2Y5VLTIC.js";import{a as x}from"./chunk-L4YLDFIV.js";import{a as M}from"./chunk-4BKRRB5O.js";import{b as h,c as k,f as P}from"./chunk-V56KALMS.js";import{a as w}from"./chunk-C257UEHM.js";import{b as D}from"./chunk-NIE6URWE.js";import{a as A}from"./chunk-EOP2LXLP.js";import{a as y}from"./chunk-ARPRWHND.js";import{a as L,b as T}from"./chunk-VOI5HXP6.js";function l(){return E({cmd:"superelite"})}function q(t){let e=t.replace("<br>"," ").split(/[: /]/);return O([e[2],e[1],e[0],e[3],e[4]])}function C(t){return Math.floor((k()-q(t))/1e3)}function $(t){return{time:C(t.cells[0].innerHTML),creature:{name:M(t.cells[1])}}}function F(t){let e=w("#pCC table table",t);return e?{r:N(e,4,1).map($),s:!0,t:`0 ${String(P())}`}:{s:!1}}async function u(){return F(await _({cmd:"superelite"}))}function d(){return R(l,u)}function b(t){return A(t?.se??{}).flatMap(([e,r])=>x(r)?r.map(([o,s])=>[o,e,s,t?.loc[s]]):[[r,e.replaceAll(" ","_"),0,""]])}var U=t=>t.join("|"),H=(t,e)=>t.r.map(r=>[e-r.time,r.creature.name.replace(" (Super Elite)","").replaceAll(" ","_"),r.realm.realm.id,r.realm.realm.name]),v=(t,e)=>n(t.map(U).concat(e.map(U))).map(r=>r.split("|")).map(([r,o,s,c])=>[Number(r),o,Number(s),c]).sort(([r],[o])=>o-r),z=t=>f(n(t.map(([,e])=>e)).map(e=>[e,t.filter(([,r])=>r===e).map(([r,,o])=>[r,o]).slice(0,10)])),B=t=>f(n(t.map(([,,e])=>e)).map(e=>[e,t.find(([,,r])=>r===e)[3]])),G=t=>({se:z(t),loc:B(t)});function g(t,e){let r=Number(e.t.split(" ")[1]),o=H(e,r),s=b(t),c=v(o,s),j=G(c);return{lastUpdate:r,...j}}var J=m(),S=J;var p=!1,a={},i=!1,K=t=>Math.max(0,600-(h()-(t?.lastUpdate??0)));async function Q(){let t=await d();t&&(a=g(a,t),T("fsh_seLog",a),S.set(a))}async function V(){for(p=!0,a=await L("fsh_seLog"),S.set(a);i;)p=!0,await D(K(a)*1e3),i&&await Q(),p=!1}function W(t,e){i=e,t(i),i&&!p&&V()}function X(){let{subscribe:t,set:e}=m(0);return{subscribe:t,set:y(W,e)}}var Y=X(),Pt=Y;export{b as a,S as b,Pt as c};
//# sourceMappingURL=chunk-PGJQSNBX.js.map
