import{a as p}from"./chunk-26ZXOKMI.js";import{a as J}from"./chunk-JDIFASPY.js";import{a as _}from"./chunk-7YBBGNO5.js";import"./chunk-GUSC4GDE.js";import{a as Q}from"./chunk-YJMONPHD.js";import{a as X}from"./chunk-TT2QC3MQ.js";import{a as U}from"./chunk-JDGRIKWP.js";import"./chunk-RSHL5TEX.js";import{b as d,c as f}from"./chunk-6XBHVXKT.js";import"./chunk-SNJY6WFE.js";import{a as g}from"./chunk-KN743HJH.js";import"./chunk-SZUEAQD6.js";import"./chunk-RWEKY74O.js";import{a as S}from"./chunk-VTXK2OMK.js";import{a as q}from"./chunk-TGDLGIAS.js";import"./chunk-V7YJKIIO.js";import"./chunk-PD6SZCQT.js";import"./chunk-B3CGSESQ.js";import{a as M}from"./chunk-SJ4JHGNU.js";import{a as l}from"./chunk-4KLZTRYV.js";import{a as I}from"./chunk-AHV2UEZ3.js";import"./chunk-3JDXB3EI.js";import{a as H}from"./chunk-W5R4CDPA.js";import{a as n}from"./chunk-AX2MQ55Q.js";import{a as N}from"./chunk-XUS25RRF.js";import{a as L}from"./chunk-XCFUVUC4.js";import"./chunk-2U4UTP4T.js";import"./chunk-YD4Q4HJF.js";import"./chunk-LMDZSBH3.js";import{a as W}from"./chunk-PYVS5VYO.js";import"./chunk-RJ63T2CH.js";import{a as j}from"./chunk-HGV77SOI.js";import{a as O}from"./chunk-WO4JQIFY.js";import{a as V}from"./chunk-N6BPKERE.js";import"./chunk-JPF23T2W.js";import"./chunk-CWXW6BIP.js";import"./chunk-B4ELP4GT.js";import{a as E}from"./chunk-RYU7Q6YO.js";import"./chunk-YWEOEFMO.js";import"./chunk-3T3NCQXQ.js";import{a as G}from"./chunk-S4QW6F63.js";import{a as A}from"./chunk-FLDADVNP.js";import{b}from"./chunk-JRL4EUGF.js";import{a as F}from"./chunk-KEMOKZCE.js";import"./chunk-EGI62KCW.js";import"./chunk-2CPSGTYM.js";import"./chunk-XFCSBA6U.js";import"./chunk-4L4BW6XC.js";import{a as o}from"./chunk-6OIRWEPN.js";import"./chunk-LR3ZNNXD.js";import"./chunk-GMG2NTG6.js";import"./chunk-VQMOGQ7P.js";import"./chunk-WNDIM2XK.js";import"./chunk-DA7DPQEG.js";import"./chunk-26GFOSBF.js";import{b as m}from"./chunk-WAWYOTCQ.js";import"./chunk-LYEPPGHA.js";import"./chunk-EHGMFAOI.js";import{a as P}from"./chunk-LAQBU75H.js";import{a as i}from"./chunk-S7INW7PN.js";import{o as B,x as R}from"./chunk-J2ILMRN6.js";import{a as D}from"./chunk-ZDQ6OSIO.js";function c(t){return I("tfoot",t)}function T(t){return J({subcmd:"advisor",subcmd2:"view",period:t})}var K=t=>W(n(t));function Y(t){return{player:{level:0,name:n(t.cells[0])},stats:[3,4,5,6,7,9,1,2,8].map(e=>K(t.cells[e]))}}function Z(t){let e=O(t),r=H("#pCC table table",e);return{r:i(r.rows).slice(1,-1).map(Y),s:!0}}function x(t){return V({cmd:"guild",subcmd:"advisor",subcmd2:"view",period:t}).then(Z)}function C(t){return q(T,x,t)}function k(t,e){return e?.parentNode?.replaceChild?.(t,e)}var tt=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}];function u(t,e){return e[t]?`<a href="${R}${e[t].id}">${t}</a>`:t}function v(t,e){return e[t]?e[t].level:""}function h(t,e){return e[t]?`<div class="fshAdvRank">${N(e[t].rank_name)}</div>`:""}function et(t,e,r){$(t).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:tt,data:e,deferRender:!0,initComplete:r,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}function rt(t,e){g(3,o(k,t,e))}function y(t,e,r){let a=M(),s=U({className:"fshDataTable fshXSmall hover"});return l(a,s),l(s,e),g(3,et,[s,r,o(rt,a,t)]),a}function ot(t,e,r){return S(t.lastElementChild.lastElementChild,` day ${e},`),r.r}function at(t,e){return C(e).then(o(ot,t,e))}function z(t,e,r){return e+t[r]}function st(t,e,r){return{...e,stats:e.stats.map(o(z,t[r].stats))}}function it(t,e){return t.map(o(st,e))}function nt(t){return{player:t.player,stats:[t.stats[6],t.stats[7],t.stats[6]+t.stats[7],t.stats[1],t.stats[2],t.stats[3],t.stats[4],t.stats[8],t.stats[5]]}}function lt(t){return t.slice(1).reduce(it,t[0]).map(nt)}function ct(t,e){return e.stats.map(o(z,t))}function mt(t,e){return`${t}<td><u>${e}</u></td>`}function dt(t){let e=t.slice(1).reduce(ct,t[0].stats).map(A);return c({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${e.reduce(mt,"")}</tr>`})}function ft(t,e){let r=e.stats.map(A);return[u(e.player.name,t),v(e.player.name,t),h(e.player.name,t)].concat(r)}function pt(t,[e,...r]){let a=lt(r);y(t,dt(a),a.map(o(ft,e)))}function ut(t){F('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t);let e=[p(!1)].concat([1,2,3,4,5,6,7,8].map(o(at,t)));Q(e,o(pt,t))}function w(t){let e=m("betaOptIn");e&&d("guildAdvisor.injectAdvisorWeekly"),ut(t),e&&f("guildAdvisor.injectAdvisorWeekly")}function vt(t){let r=t.rows[t.rows.length-1].cloneNode(!0),a=c();l(a,r);let s=r.cells[0];return s.className="fshRight",s.setAttribute("colspan","3"),a}function ht(t,e){return e===0?n(t):E(t)}function yt(t,e){let r=i(e.cells,ht);return r.splice(0,1,u(r[0],t),v(r[0],t),h(r[0],t)),r}function gt(t,e){return i(t.rows).slice(1,-1).map(o(yt,e))}function bt(){let t=P("custombutton",b);t.length!==0&&X(t[0],`<span> <a href="${B}guild&subcmd=advisor&subcmd2=weekly">7-Day Summary</a></span>`)}function At(t,e){let r=m("betaOptIn");r&&d("guildAdvisor.injectAdvisorDaily");let a=gt(t,e),s=vt(t);y(t,s,a),bt(),r&&f("guildAdvisor.injectAdvisorDaily")}function Tt(t){D.subcmd2==="weekly"?w(t):p(!1).then(o(At,t))}function xt(){if(G())return;let t=j("table",b)[1];!t||(L().then(()=>Tt(t)),_())}export{xt as default};
//# sourceMappingURL=guildAdvisor-MTZJ2IGL.js.map
