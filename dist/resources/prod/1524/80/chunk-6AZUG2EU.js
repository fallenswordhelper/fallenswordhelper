import{a as se}from"./chunk-A6GU6MET.js";import{a as v}from"./chunk-XOO2LWTN.js";import{a as ae}from"./chunk-4TUCGNT3.js";import{a as oe,b as ne}from"./chunk-WRWWDLW3.js";import{a as ie}from"./chunk-GSAO5JD5.js";import{a as re}from"./chunk-PLAURLQ3.js";import{a as s}from"./chunk-GAJ7W4PY.js";import{a as te}from"./chunk-IZN4VWOX.js";import{a as c}from"./chunk-PEQUAGB2.js";import{a as ee}from"./chunk-FNBCAVVI.js";import{a as J}from"./chunk-YNGMMT7C.js";import{a as Z}from"./chunk-TNZ4IZQ7.js";import{a as h}from"./chunk-AH6ETHJX.js";import{a as C}from"./chunk-WIZVYCBC.js";import{a as W}from"./chunk-KOGBQXFO.js";import{a as w}from"./chunk-P46IDWBX.js";import{a as n}from"./chunk-74YO2Y7V.js";import{a}from"./chunk-D7DBYYVV.js";import{a as N}from"./chunk-2ZEFTA6B.js";import{a as Q}from"./chunk-47BUGNNO.js";import{a as X}from"./chunk-4XBIOIJL.js";import{b as f}from"./chunk-JSOCZFF7.js";import{a as y}from"./chunk-5JKG2KXO.js";import{a as O}from"./chunk-JBCK4LKH.js";import{a as z}from"./chunk-QC67ERFU.js";import{a as F}from"./chunk-7ZTLT5ES.js";import{a as M}from"./chunk-KUKFZGKL.js";import{a as b}from"./chunk-OPXVQRDJ.js";import{a as u}from"./chunk-KQGQROK7.js";import{a as K,b as L}from"./chunk-ZGNC6ELN.js";import{b as g}from"./chunk-ET6NKS7B.js";import{Ja as Y,Ka as j,La as d,S as U,sa as k,u as V}from"./chunk-I6XFTTZH.js";var fe=e=>[e,c(e.href,"target_username")],pe=async([e,t])=>[e,t,await oe(t)],ue=e=>e?' class="pmAttackUrl"':"";function de(e,[t,r]){re(t,` | <a${ue(e)} href="${U}${r}">Attack</a>`)}async function P(e,t){let r=n('a[href*="=createsecure&"]',e);if(!r.length)return;let o=r.map(fe);(await Promise.all(o.map(pe))).filter(([,,m])=>!m).forEach(m=>de(t,m))}var ge=e=>e?' class="pmIgnoreUrl"':"",he=(e,t)=>`<a${ge(e)} href="${V}${a(t)}" data-tooltip="Add to Ignore List">Ignore</a>`;function ye(e,[t,r]){h(r.cells[1],`<font size="1"><br>[ ${he(e,t)} ]</font>`)}function S(e,t){let r=n(d,e);if(r.length===0)return;r.map(i=>[i,s(i)]).forEach(i=>ye(t,i))}function x(e){return Z({cmd:"combat",subcmd:"view",combat_id:e})}function A(e){return X({cmd:"combat",subcmd:"view",combat_id:e})}function me(e){return Number(e.getAttribute("background").match(/\/(\d+)/)?.[1])}function l(e,t){let r=new RegExp(`${t} = (\\d+)`);return Number(e.match(r)[1])}function be(e){let t=[[18,"leeched"],[21,"Spell"]].map(([r,o])=>[r,e.includes(o),e.split(" ")[0],e.split("'")[1]]).find(([,r])=>r);return t?{id:t[0],params:[t[2],t[3]]}:(ee("Logs","Missing PvP Special",e),{id:-1,params:["-1","-1"]})}function we(e){return n("#specialsDiv",e).map(a).filter(i=>["leeched","Spell"].some(m=>i.includes(m))).map(be)}function ve(e){return{id:me(e.rows[1].cells[0]),name:a(e.rows[0].cells[0])}}function Te(e){return{id:me(e.rows[1].cells[2]),name:a(e.rows[0].cells[2])}}function ke(e,t){let r=t.children[0].rows[5].cells[0].children[0];return{attacker:ve(r),defender:Te(r),id:Number(e),specials:we(t)}}function Ce(e){let t=y(e.children[1]);return{gold_gain:l(t,"goldGain"),gold_stolen:l(t,"goldStolen"),pvp_prestige_gain:l(t,"prestigeGain"),pvp_rating_change:l(t,"pvpRatingChange"),winner:l(t,"winner"),xp_gain:l(t,"xpGain")}}function Le(e,t){return{...ke(e,t),...Ce(t)}}function Pe(e,t){let r=Q(t),o=M("pCC",r);return{r:{combat:Le(e,o)},s:!0}}async function $(e){let t=await A(e);return Pe(e,t)}function _(e){return J(x,$,e)}var E="fsh_pvpCombat",R,T;function Se(e,[t,r]){return t==="lastCheck"||r.logTime&&r.logTime>e}function xe(e){let t=f-604800,o=b(e).filter(u(Se,t)),i={...te(o),lastCheck:f};return L(E,i),i}async function Ae(){let e=await K(E);if(!e)return{lastCheck:f};let t=f-24*60*60;return!e.lastCheck||e.lastCheck<t?xe(e):e}async function $e(e,t,r){let o=await _(t);if(!(!o||!o.s))return T||(T={...r}),T[t]={...o,logTime:v(a(e.cells[1]))/1e3},L(E,T),o}async function I(e,t){R||(R=Ae());let r=await R;return r[t]&&r[t].logTime?r[t]:$e(e,t,r)}var ce="fshGreen",le="fshRed",_e=([,e])=>N(Y,e),Re=async([e,t,r])=>[t,r,await I(t,c(e.href,"combat_id"))];function Ee(e){return e.includes("You were victorious over")?[ce,`You were <span class="${ce}">victorious</span> over `]:e.includes("You were defeated by")?[le,`You were <span class="${le}">defeated</span> by `]:["",null]}function p(e,t,r){return e!==0?`${t}:<span class="${r}">${F(e)}</span> `:""}var Ie=e=>[18,21].includes(e.id);function Be(e){return e.id===18?`<span class="fshRed fshBold">${e.params[0]} leeched the buff '${e.params[1]}'.</span>`:`<span class="fshRed fshBold">${e.params[0]} was mesmerized by Spell Breaker, losing the '${e.params[1]}' buff.</span>`}function Ge(e,t){let r=e.specials.filter(Ie).map(Be),o=p(e.xp_gain,"XP stolen",t)+p(e.gold_gain,"Gold lost",t)+p(e.gold_stolen,"Gold stolen",t)+p(e.pvp_prestige_gain,"Prestige gain",t)+p(e.pvp_rating_change,"PvP change",t);return o+(o&&r.length?"<br>":"")+(r.length?`${r.join("<br>")}`:"")}function De([e,t,r]){let[o,i]=Ee(t);if(i){let m=Ge(r.r.combat,o);e.cells[2].firstChild.remove(),ie(e.cells[2],i),w(e.cells[2],W({innerHTML:m}))}}function qe(e){return e.map(t=>[t,s(t)]).filter(_e).map(([t,r])=>[t,r,r.cells[2].innerHTML]).map(Re)}var He=([,,e])=>e&&e.s;async function B(e){let t=n('a[href*="&combat_id="]',e);if(t.length===0)return;(await Promise.all(qe(t))).filter(He).forEach(De)}function G(e){n('a[href*="=trade&"]',e).filter(t=>!c(t.href,"subcmd")).forEach(t=>C("Trade",t)),n('a[href*="=createsecure&"]',e).forEach(t=>C("ST",t))}function Me(e,t){let[,,r]=e.rows[0].cells;r&&!t&&h(r,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}async function Ve(e){let[,t]=await ne(e);return[`.fshPlayerColoring tr:nth-of-type(${s(e).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,t]}function Ue(e,[t,r]){return e[r]?e[r].push(t):e[r]=[t],e}var Ye={guild:"green",ally:"blue",enemy:"red"};function je([e,t]){return`${t.join(", ")} { color: ${Ye[e]}; }`}var Ne=([,e])=>e;function We(e){return b(e.filter(Ne).reduce(Ue,{})).map(je)}function ze(e,t,r){let o=We(t);o.length&&(Me(e,r),e.classList.add("fshPlayerColoring"),w(document.body,ae(o.join(`
`))))}async function D(e,t){let r=n(d,e);if(!r.length)return;let o=await Promise.all(r.map(Ve));ze(e,o,t)}var q,Ke=/You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/;function Oe(e){return Ke.test(y(e.cells[2]))}function Qe(e){let t=v(a(e.cells[1]));t>q&&(O(k,t),q=t)}function H(e){q=g(k),n(j,e).map(s).filter(Oe).forEach(Qe)}var Xe=[["addIgnoreLink",S],["colorPlayerNames",D],["addAttackLinkToLog",P],["changeButtonLabels",G],["trackLadderReset",H],["showPvPSummaryInLog",B]];function Fe(e,t,[r,o]){g(r)&&o(e,t)}function Je(e,t){Xe.forEach(u(Fe,e,t))}function Ze(e){if(z())return;let t=se();t&&Je(t,e)}export{Ze as a};
//# sourceMappingURL=chunk-6AZUG2EU.js.map