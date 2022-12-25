import{a as v}from"./chunk-J7E77O4O.js";import{a as C}from"./chunk-TWEQZVC2.js";import{a as p,b as L,c as A}from"./chunk-35M6ZE3G.js";import"./chunk-P6EW3726.js";import"./chunk-RAUMC5JB.js";import{b}from"./chunk-PWSQLISA.js";import{a as i}from"./chunk-HPU5ZEP3.js";import{a as d}from"./chunk-5HI4ILOP.js";import{a}from"./chunk-X4VDSDVS.js";import"./chunk-MI5ERUAI.js";import"./chunk-MT2H2XVD.js";import{a as y}from"./chunk-LGDJTMPN.js";import{a as E,b as S}from"./chunk-KCGDJ5EJ.js";import"./chunk-6ME2NWD5.js";import"./chunk-IFV2NFCC.js";import{a as $}from"./chunk-6YW6FXRF.js";import"./chunk-GDLA3KMJ.js";import{a as w}from"./chunk-CRWX7KCS.js";import{a as k}from"./chunk-VATGSWZQ.js";import{a as g}from"./chunk-HYLQEGZ4.js";import"./chunk-7I6ASYKS.js";import"./chunk-R2OFDU54.js";import"./chunk-CEGJSIVU.js";import"./chunk-G6TPLPCG.js";import{a as l}from"./chunk-IMGI5UI2.js";import"./chunk-E53ZSUER.js";import{b as h}from"./chunk-UYN3LUIY.js";import"./chunk-U6BMTRHL.js";import{a as n}from"./chunk-3WE6KSRQ.js";function H(t){return typeof t=="string"?parseInt(t.replace(/[,#]/g,""),10):t}function x(t){return!l(t.type)&&t.type>8}function I(t,r){return!l(t.type)&&r.type>8}function f(t,r){if(x(t))return 1;if(I(t,r))return-1;let m=p(t,n.sortBy,1),c=p(r,n.sortBy,1);m=H(m),c=H(c);let T=m-c;return L(T)}function P(t){return`<img class="tip-static" src="${h}creatures/${t}.png" data-tipped="<img src='${h}creatures/${t}.png' width=200 height=200>" width=40 height=40>`}function _(t){return t&&a(t).length>0}function s(t){return`${t.min.toString()} - ${t.max.toString()}`}function j(t){return`<span class="fshNoWrap">${t[0]}: ${s(t[1])}</span>`}function N(t){if(_(t)){let r='<span class="fshXXSmall">';return r+=y(t).map(j).join("<br>"),`${r}</span>`}return'<span class="fshGrey">**Missing**</span>'}function u(t,r){return{...t[r],name:r,image:P(t[r].image_id),level:k(t[r].level),attack:s(t[r].attack),defense:s(t[r].defense),armor:s(t[r].armor),damage:s(t[r].damage),hp:s(t[r].hp),enhancements:N(t[r].enhancements)}}var o=0,e=0;function M(){i("<span>No monster information! Please enable entity log and travel a bit to see the world</span>",o)}function q(t){return`<tr><td class="fshCenter">${t.image}</td><td>${t.name}</td><td class="fshCenter">${t.creature_class}</td><td class="fshCenter">${t.level}</td><td class="fshCenter">${t.attack}</td><td class="fshCenter">${t.defense}</td><td class="fshCenter">${t.armor}</td><td class="fshCenter">${t.damage}</td><td class="fshCenter">${t.hp}</td><td class="fshCenter">${t.enhancements}</td></tr>`}function D(){return e.map(q).join("")}function B(){let t=d("entityTableOutput");!e||!t||i(D(),t)}function O(t){return t.getAttribute("sortType")||"string"}function R(t){t==="string"?e.sort(A):e.sort(f)}function W(t){v(t);let r=O(t);R(r),B()}function X(t){return C("fshLink",t)&&t.hasAttribute("sortkey")}function z(t){let{target:r}=t;if(r.id==="clearEntityLog"){S("fsh_monsterLog",""),M();return}X(r)&&W(r)}function F(){e&&(i('<table cellspacing="0" cellpadding="0" border="0" width="100%"><tr class="fshBlack fshWhite"><td width="90%" class="fshCenter"><b>Entity Information</b></td><td width="10%">[<span id="clearEntityLog" class="fshPoint">Clear</span>]</td></tr></table><table cellspacing="1" cellpadding="2" border="0"><thead><tr class="fshVerySoftOrange"><th width="25%" class="fshLink" sortkey="name" colspan="2">Entity</th><th class="fshCenter fshLink" sortkey="creature_class">Class</th><th class="fshCenter fshLink" sortkey="level" sorttype="number">Lvl</th><th class="fshCenter">Attack</th><th class="fshCenter">Defence</th><th class="fshCenter">Armor</th><th class="fshCenter">Damage</th><th class="fshCenter">HP</th><th class="fshCenter">Enhancements</th></tr></thead><tbody id="entityTableOutput"></tbody></table>',o),w(o,z))}function G(t){e=a(t).map(g(u,t))}function J(t){if(!t){M();return}G(t),n.sortBy="level",n.sortAsc=!0,e.sort(f),F(),B()}function Q(t){o=t||b(),o&&E("fsh_monsterLog").then(J)}function U(t){$()&&Q(t)}export{U as default};
//# sourceMappingURL=monstorLog-QRICGI6N.js.map
