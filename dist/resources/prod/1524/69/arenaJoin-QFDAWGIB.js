import{a as w}from"./chunk-CNPMTL5D.js";import{a as T}from"./chunk-ONF3JU5I.js";import{a as E,b as C,c as _}from"./chunk-GDCZG23S.js";import"./chunk-QF77W62O.js";import"./chunk-CKYIEIZV.js";import{a as y}from"./chunk-KYFS7S76.js";import"./chunk-5E667BOY.js";import"./chunk-VVOKZZ3L.js";import"./chunk-NJ6B7L4B.js";import"./chunk-CBKI7QWO.js";import"./chunk-KU3UKZKC.js";import{a as h}from"./chunk-7FEHBWYJ.js";import"./chunk-DP4CEH2A.js";import"./chunk-OYYOAYMV.js";import"./chunk-736UJAHD.js";import"./chunk-UMJF22Y4.js";import{a as S}from"./chunk-SOOOSDEG.js";import"./chunk-YCWFRS2T.js";import{a as m}from"./chunk-EC54LTKY.js";import"./chunk-ZX43UBSI.js";import"./chunk-CXVCNN2I.js";import"./chunk-QLTDWVXW.js";import{a as s}from"./chunk-OX54JKUE.js";import{a}from"./chunk-DIPZYR4B.js";import"./chunk-R5RY2C2T.js";import"./chunk-ZNCQG5ZF.js";import{a as b}from"./chunk-HNUCXATC.js";import"./chunk-4RYOLX4Q.js";import"./chunk-REF22G3S.js";import"./chunk-ZGORUKJK.js";import"./chunk-CUX5IHHK.js";import"./chunk-V7HQRWBP.js";import"./chunk-ZS4UMFEX.js";import"./chunk-343V7Q36.js";import"./chunk-2RDTH7U3.js";import"./chunk-NALZIN2F.js";import"./chunk-I6BQR2GZ.js";import"./chunk-C2EU36VT.js";import"./chunk-P2FYCUOG.js";import"./chunk-R2V5M2SX.js";import"./chunk-VUJR46HY.js";import"./chunk-VHX5BADE.js";import{a as x}from"./chunk-MQKWHXHK.js";import"./chunk-CLZYOHU5.js";import{a as $}from"./chunk-NWZ7NAGE.js";import{a as g}from"./chunk-QXMVYJN6.js";import"./chunk-C6PSWFF5.js";import"./chunk-KD4PPF2P.js";import{a as i}from"./chunk-L4MPHVE4.js";import"./chunk-Z7YJKURW.js";import"./chunk-JGGUTXQ5.js";import"./chunk-C3DMTIKU.js";import"./chunk-REHXFZMP.js";import"./chunk-WYX2VQXF.js";import"./chunk-KYNUAHCU.js";import"./chunk-X53ITBGR.js";import"./chunk-VB2T76EA.js";import{a as v}from"./chunk-B6YTNR7S.js";import"./chunk-2PDPTZUM.js";import{b as n}from"./chunk-RRAQGRWM.js";import"./chunk-UMFA3PXI.js";var N=()=>Number(h("pvp_id")),B=N;function f(t){let e=B();return t.arenas.find(o=>o.id===e)}function p(t){return E({subcmd:"usesetup",set_id:t})}var c;function I(t){return c||(c=a(t,s())),c}function q(t,e){let o=String(e-1);e===0&&(o="x"),m(t,`<img src="${n}arena/${o}.png" class="moveImg">`)}function j(t,e){return`<option value="${String(e.id)}"${w(t.slots.join(),e.slots.join())}>${e.name}</option>`}function H(t,e){let o=I(e);$("",o),t.slots.forEach(i(q,o))}function A(t,e,o){p(e.target.value).then(r=>{r.s&&H(o,t)})}function L(t,e,o){let r=t.sets.find(M=>M.id===Number(o.target.value));r&&A(e,o,r)}function P(t,e){if(t.sets.length>0){let o=T({innerHTML:t.sets.map(i(j,t.current_set)).join("")});v(o,"change",i(L,t,e));let r=s({className:"flex"});a(r,o),S(e,r)}}function l(t,e,o){if(o.specials){let r=s({className:"flex"});P(t,r),H(t.current_set,r),a(e,r)}}var D=t=>String(Number(t));function u(t,e){return`<div><div>${t}</div><div><img src="${n}ui/arena/specials_${D(e)}.png"></div></div>`}function F(t){return`<div class="flex"><div><div>Players</div><div>${t.players.length} / ${t.max_players}</div></div>${u("Specials",t.specials)}${u("Hell Forge",t.hellforge)}${u("Epic",t.epic)}<div><div>Max Equip Level</div><div>${x(t.equip_level)}</div></div></div>`}function d(t){let e=b("#pCC > form > table tr:nth-of-type(4) td");if(t.r&&e){e.setAttribute("align","center");let o=f(t.r);m(e,F(o)),l(t.r,e,o)}}function J(){g("arenaTypeTabs")?_():(y(),C().catch(()=>({})).then(d))}export{J as default};
//# sourceMappingURL=arenaJoin-QFDAWGIB.js.map