import{a as u}from"./chunk-N5W7WX6D.js";import{a as p}from"./chunk-YLSMYMHL.js";import{a as U}from"./chunk-52I2ZSDI.js";import"./chunk-LFXHGP2O.js";import{a as J}from"./chunk-CVHE5B2Q.js";import"./chunk-JMXZ3WGQ.js";import{a as X}from"./chunk-XWPCAUWH.js";import{a as q}from"./chunk-MHHQGJDF.js";import"./chunk-U2UI62VQ.js";import{b as c,c as d}from"./chunk-NPAGYJGL.js";import"./chunk-CFVNMPKS.js";import{a as H}from"./chunk-GCO363NO.js";import"./chunk-Q3GHEBJN.js";import{a as W}from"./chunk-L4KRSPGL.js";import"./chunk-JD2UY4F4.js";import{a as g}from"./chunk-A7L7OPQH.js";import"./chunk-XMXBPRPQ.js";import{a as R}from"./chunk-26GD3BL3.js";import"./chunk-4X6UL4LD.js";import{a as M}from"./chunk-GM6FB5OC.js";import{a as l}from"./chunk-DCYW4AFF.js";import{a as L}from"./chunk-J5PO4CUK.js";import"./chunk-RUMS66DZ.js";import{a as n}from"./chunk-UEEKDGD3.js";import{a as F}from"./chunk-NJPXPCO5.js";import{b}from"./chunk-2K77RJ6H.js";import{a as N}from"./chunk-UAVPZSJA.js";import"./chunk-TA6AFEKU.js";import{a as O}from"./chunk-STXZMUWJ.js";import"./chunk-YB6VV2BH.js";import"./chunk-66Q5ZTCC.js";import"./chunk-BEJFA25O.js";import{a as I}from"./chunk-BTRHHESW.js";import{a as G}from"./chunk-KP5BBFSI.js";import"./chunk-BG6WQKOZ.js";import{a as E}from"./chunk-WGREHNUQ.js";import"./chunk-QKZE4S7D.js";import{a as j}from"./chunk-MW5GUP64.js";import"./chunk-KXOTQ6FX.js";import"./chunk-MJTY2SNM.js";import"./chunk-SNUUUJ2J.js";import{a as D}from"./chunk-GDFIPJIS.js";import"./chunk-3OWYIURB.js";import"./chunk-JRO7QTDC.js";import"./chunk-L2YJ66JH.js";import"./chunk-CIXFZBIO.js";import"./chunk-NCZIWHZ3.js";import"./chunk-YV475WB4.js";import"./chunk-3A3FUFV2.js";import{a as P}from"./chunk-KJAAAA67.js";import"./chunk-6YDFSD45.js";import"./chunk-VBLJ4QNC.js";import{a as V}from"./chunk-7CONRVJ5.js";import{a as A}from"./chunk-JZGF6K4J.js";import"./chunk-4JMLF5JM.js";import"./chunk-G7U3SZPH.js";import"./chunk-PR3JB7ZG.js";import{a as i}from"./chunk-B5FNPBUP.js";import"./chunk-VWHQXFZ5.js";import{a as o}from"./chunk-FNUCRPZA.js";import"./chunk-WFGYEXIY.js";import"./chunk-Y4WR2IKW.js";import"./chunk-MS5TR5HI.js";import{b as f}from"./chunk-WULU2HSE.js";import"./chunk-GCBAZDNZ.js";import"./chunk-UVAAI4KD.js";import{q as S}from"./chunk-KOVMYOV5.js";import"./chunk-SC26BEBT.js";import{a as B}from"./chunk-AXUZC3IG.js";function m(t){return L("tfoot",t)}function T(t,r){return r?.parentNode?.replaceChild?.(t,r)}var _=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}];function v(t,r){return r[t]?r[t].level:""}function h(t,r){return r[t]?`<div class="fshAdvRank">${F(r[t].rank_name)}</div>`:""}function z(t,r,e){$(t).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:_,data:r,deferRender:!0,initComplete:e,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}function K(t,r){g(3,o(T,t,r))}function y(t,r,e){let s=M(),a=U({className:"fshDataTable fshXSmall hover"});return l(s,a),l(a,r),g(3,z,[a,e,o(K,s,t)]),s}function k(t){return V({subcmd:"advisor",subcmd2:"view",period:t})}var Y=t=>G(n(t));function Z(t){return{player:{level:0,name:n(t.cells[0])},stats:[3,4,5,6,7,9,1,2,8].map(r=>Y(t.cells[r]))}}function tt(t){let r=j("#pCC table table",t);return{r:i(r.rows).slice(1,-1).map(Z),s:!0}}async function x(t){return tt(await H({cmd:"guild",subcmd:"advisor",subcmd2:"view",period:t}))}function w(t){return W(k,x,t)}function rt(t,r,e){return R(t.lastElementChild.lastElementChild,` day ${r},`),e.r}function et(t,r){return w(r).then(o(rt,t,r))}function Q(t,r,e){return r+t[e]}function ot(t,r,e){return{...r,stats:r.stats.map(o(Q,t[e].stats))}}function st(t,r){return t.map(o(ot,r))}function at(t){return{player:t.player,stats:[t.stats[6],t.stats[7],t.stats[6]+t.stats[7],t.stats[1],t.stats[2],t.stats[3],t.stats[4],t.stats[8],t.stats[5]]}}function it(t){return t.slice(1).reduce(st,t[0]).map(at)}function nt(t,r){return r.stats.map(o(Q,t))}function lt(t,r){return`${t}<td><u>${r}</u></td>`}function mt(t){let r=t.slice(1).reduce(nt,t[0].stats).map(A);return m({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${r.reduce(lt,"")}</tr>`})}function ct(t,r){let e=r.stats.map(A);return[u(t,r.player.name),v(r.player.name,t),h(r.player.name,t)].concat(e)}function dt(t,[r,...e]){let s=it(e);y(t,mt(s),s.map(o(ct,r)))}function ft(t){N('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t);let r=[p(!1)].concat([1,2,3,4,5,6,7,8].map(o(et,t)));X(r,o(dt,t))}function C(t){let r=f("betaOptIn");r&&c("guildAdvisor.injectAdvisorWeekly"),ft(t),r&&d("guildAdvisor.injectAdvisorWeekly")}function pt(t){let e=t.rows[t.rows.length-1].cloneNode(!0),s=m();l(s,e);let a=e.cells[0];return a.className="fshRight",a.setAttribute("colspan","3"),s}function ut(t,r){return r===0?n(t):D(t)}function vt(t,r){let e=i(r.cells,ut);return e.splice(0,1,u(t,e[0]),v(e[0],t),h(e[0],t)),e}function ht(t,r){return i(t.rows).slice(1,-1).map(o(vt,r))}function yt(){let t=I("custombutton",b());t.length!==0&&q(t[0],`<span> <a href="${S}guild&subcmd=advisor&subcmd2=weekly">7-Day Summary</a></span>`)}function gt(t,r){let e=f("betaOptIn");e&&c("guildAdvisor.injectAdvisorDaily");let s=ht(t,r),a=pt(t);y(t,a,s),yt(),e&&d("guildAdvisor.injectAdvisorDaily")}function bt(t){B.subcmd2==="weekly"?C(t):p(!1).then(o(gt,t))}function At(){if(P())return;let t=E("table",b())[1];!t||(O().then(()=>bt(t)),J())}export{At as default};
//# sourceMappingURL=guildAdvisor-NCK73R3B.js.map
