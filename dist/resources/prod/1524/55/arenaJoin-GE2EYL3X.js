import{a as H}from"./chunk-3JJPFBLQ.js";import{a as C}from"./chunk-HAU6OF4I.js";import{a as x,b as B,c as w}from"./chunk-7BRHKMW5.js";import"./chunk-BVLDUWHE.js";import"./chunk-7TR3VYN4.js";import"./chunk-RHP4VH3X.js";import"./chunk-QOTC7P7B.js";import"./chunk-BGRUH4VX.js";import{a as $}from"./chunk-FGF45BX5.js";import"./chunk-B2CV3LZL.js";import"./chunk-5KDEBU7Z.js";import"./chunk-BV2MYMF5.js";import"./chunk-F3MT6GZT.js";import"./chunk-LZ23YXGK.js";import{a as E}from"./chunk-SKPCNIUM.js";import{a as S}from"./chunk-EGMW5FEC.js";import"./chunk-4JPLNJXC.js";import"./chunk-YOD3ZLZJ.js";import"./chunk-EQEDSKYN.js";import"./chunk-FSJKGO56.js";import"./chunk-RT5GGQZO.js";import"./chunk-I3HDBAJB.js";import{a as h}from"./chunk-VAJJ3B4H.js";import"./chunk-2J7BLPNB.js";import{a as b}from"./chunk-3IZSRBVW.js";import"./chunk-WKB7UAH3.js";import"./chunk-WZOINAX5.js";import"./chunk-VVT2NY3X.js";import"./chunk-J4SAIAEQ.js";import"./chunk-MF5BZBCN.js";import"./chunk-RLNK6TGZ.js";import{a as m}from"./chunk-EQNCUII2.js";import"./chunk-5NIAUQBB.js";import"./chunk-FIYDSWPU.js";import"./chunk-OO7D5SQF.js";import"./chunk-SKB75UHJ.js";import"./chunk-D6P46ZXI.js";import{a}from"./chunk-ZD6KR2JJ.js";import{a as s}from"./chunk-TV5KWDG5.js";import"./chunk-EXPYEXEP.js";import"./chunk-QJQL33BB.js";import"./chunk-FMNM33OL.js";import"./chunk-7FXPMHZ5.js";import"./chunk-TUWDUCWH.js";import"./chunk-TEW6YNEY.js";import{a as y}from"./chunk-BUYHT5WE.js";import{a as v}from"./chunk-SNSTWQSS.js";import"./chunk-LFXZGYGZ.js";import"./chunk-B5XQQNQZ.js";import{a as g}from"./chunk-OCPSJVCN.js";import"./chunk-NIYIBTJZ.js";import"./chunk-V5W6AOGE.js";import"./chunk-LFCR6ZTM.js";import"./chunk-6UVNJJZQ.js";import"./chunk-Z4OUE4BH.js";import"./chunk-CN4P2KLK.js";import"./chunk-BGO273GM.js";import"./chunk-XJX3OTSZ.js";import"./chunk-GUUYKSUL.js";import"./chunk-D6HZ4P35.js";import"./chunk-E72VSDOE.js";import{b as i}from"./chunk-U4WGNCSF.js";import{a as n}from"./chunk-3XQ73JET.js";var M=()=>Number(h("pvp_id")),T=M;function c(e){let t=T();return e.arenas.find(o=>o.id===t)}function f(e){return x({subcmd:"usesetup",set_id:e})}var l;function A(e){return l||(l=a(e,s())),l}function N(e,t){let o=String(t-1);t===0&&(o="x"),m(e,`<img src="${i}arena/${o}.png" class="moveImg">`)}function q(e,t){return`<option value="${String(t.id)}"${H(e.slots.join(),t.slots.join())}>${t.name}</option>`}function _(e,t){let o=A(t);y("",o),e.slots.forEach(n(N,o))}function P(e,t,o){f(t.target.value).then(r=>{r.s&&_(o,e)})}function j(e,t,o){let r=e.sets.find(I=>I.id===Number(o.target.value));r&&P(t,o,r)}function D(e,t){if(e.sets.length>0){let o=C({innerHTML:e.sets.map(n(q,e.current_set)).join("")});v(o,"change",n(j,e,t));let r=s({className:"flex"});a(r,o),E(t,r)}}function p(e,t,o){if(o.specials){let r=s({className:"flex"});D(e,r),_(e.current_set,r),a(t,r)}}var J=e=>String(Number(e));function d(e,t){return`<div><div>${e}</div><div><img src="${i}ui/arena/specials_${J(t)}.png"></div></div>`}function L(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${d("Specials",e.specials)}${d("Hell Forge",e.hellforge)}${d("Epic",e.epic)}<div><div>Max Equip Level</div><div>${S(e.equip_level)}</div></div></div>`}function u(e){let t=b("#pCC > form > table tr:nth-of-type(4) td");if(e.r&&t){t.setAttribute("align","center");let o=c(e.r);m(t,L(o)),p(e.r,t,o)}}function U(){g("arenaTypeTabs")?w():($(),B().catch(()=>({})).then(u))}export{U as default};
//# sourceMappingURL=arenaJoin-GE2EYL3X.js.map
