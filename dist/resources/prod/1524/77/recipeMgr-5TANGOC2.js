import{a as Q}from"./chunk-5MFIR2R5.js";import{a as O}from"./chunk-MFLWHROG.js";import{a as x}from"./chunk-6SA2V4IJ.js";import{a}from"./chunk-DJURCDAC.js";import"./chunk-K4A73PNG.js";import{a as _}from"./chunk-MPQTMPMU.js";import{a as E}from"./chunk-U6JCSF56.js";import"./chunk-XAX5HKDY.js";import"./chunk-ADYMHPX2.js";import{a as v}from"./chunk-ISHIO47H.js";import"./chunk-APHEMB2A.js";import"./chunk-ZXTXYIKP.js";import{a as u}from"./chunk-4ULUKIZ4.js";import{a as q}from"./chunk-ZL7L5RNG.js";import{a as y}from"./chunk-WSSW4LE4.js";import"./chunk-XAK3RXQ4.js";import{a as p}from"./chunk-JKCGPSLU.js";import{a as H}from"./chunk-KZMROKUM.js";import"./chunk-LJGQ6BIE.js";import{a as d}from"./chunk-RXZ343DN.js";import"./chunk-YYF4XEZN.js";import{a as f}from"./chunk-ODP3NXYP.js";import"./chunk-3FN7LFWY.js";import{a as w}from"./chunk-YXNNMQHM.js";import{a as M}from"./chunk-VJYLVZ6M.js";import{c as D}from"./chunk-YJUUYDRB.js";import"./chunk-4K4XF5GZ.js";import"./chunk-M5RWLFYI.js";import{b as C}from"./chunk-MXS6U56Z.js";import{a as g}from"./chunk-4Q2W2AV2.js";import{a as b}from"./chunk-QJIXYOVR.js";import"./chunk-UHDN7CXZ.js";import"./chunk-PVJ32AKX.js";import"./chunk-QMUMVPKQ.js";import{a as n}from"./chunk-ANHXFVGQ.js";import{a as j,b as $}from"./chunk-BWQ25E6K.js";import"./chunk-CU6VQLH4.js";import"./chunk-2XSC56S6.js";import"./chunk-4D7SULLS.js";import"./chunk-RGJLWSH5.js";import"./chunk-IHC7UOJU.js";import{a as S}from"./chunk-D545QQO5.js";import{b as B}from"./chunk-PIEHJDPR.js";import"./chunk-Q3ZGTWEX.js";import"./chunk-Z5QM5T22.js";import"./chunk-N7OQJWUZ.js";import"./chunk-CAZ242LS.js";var I,U=[];function z(t){return`<div class="rmItem"><img class="tip-dynamic" data-tipped="fetchitem.php?item_id=${t.id}&inv_id=-1&t=2&p=${I}&vcode=${t.verify}" src="${t.img}" height="20px" width="20px"><p>${t.amountPresent}/${t.amountNeeded}</p></div>`}function V(t){return t.items?t.items.map(z).join(""):""}function G(t){return`<div class="rmItem"><img class="tip-dynamic" data-tipped="fetchitem.php?item_id=${t.id}&inv_id=-1&t=2&p=${I}&vcode=${t.verify}" src="${t.img}" height="20px" width="20px"><p>${t.amountPresent}/${t.amountNeeded}</p></div>`}function J(t){return t.components?t.components.map(G).join(""):""}function K(t){return t.target?` <img class="tip-dynamic" data-tipped="fetchitem.php?item_id=${t.target.id}&inv_id=-1&t=2&p=${I}&vcode=${t.target.verify}" src="${t.target.img}" height="30px" width="30px"><br/>`:""}function W(t){return!U.includes(t.name)}function X(t){return`<tr class="rmTr"><td class="rmTd"><a href="${t.link}"><img src="${t.img}" height="30px" width="30px"></a></td><td class="rmTd"><a href="${t.link}">${t.name}</a></td><td class="rmTd">${V(t)}</td><td class="rmTd">${J(t)}</td><td class="rmTd">${K(t)}</td></tr>`}function Y(t,e){I=O();let r='<table width="100%"><tr class="rmTh"><th>Recipe</th><th><span id="sortName" class="fshLink" sortkey="name">Name</span></th><th>Items</th><th>Components</th><th>Target</th></tr>';r+=e.recipe.filter(W).map(X).join(""),r+="</table>",g(r,t),$("fsh_recipeBook",e)}function l(t,e){e&&(B("hideRecipes")&&(U=Q("hideRecipeNames")),Y(t,e))}function h(t){return v('#pCC img[src*="/folder"]',t)}var Z=/fetchitem.php\?item_id=(\d+)&inv_id=-1&t=2&p=(\d+)&vcode=([a-z0-9]+)/i;function tt(t){return y("td",b("pCC",t))}function et(t,e){let r=e.getAttribute("background");return r&&r.includes(t)}function rt(t){return t.dataset.tipped.match(Z)}function ot(t,e){return{img:t.getAttribute("src"),id:e[1],verify:e[3]}}function nt(t,e){if(e){let r=f(e).split("/");t.amountPresent=parseInt(r[0],10),t.amountNeeded=parseInt(r[1],10)}}function it(t){let e=t.children[0].children[0],r=rt(e),o=ot(e,r);return nt(o,t.parentNode.nextElementSibling),o}function P(t,e){return t.filter(n(et,e)).map(it)}function R(t,e,r,o){let m=p(o);a(t,`Parsing blueprint ${r.name}...<br>`);let c=tt(m);r.items=P(c,"/inventory/2x3."),r.components=P(c,"/inventory/1x1mini."),[r.target]=P(c,"/hellforge/2x3."),e.recipe.push(r)}function mt(t){return v('#pCC a[href*="=viewrecipe&"]',t)}function st(t){return{img:t.parentNode.previousElementSibling.children[0].getAttribute("src"),link:t.href,name:f(t),id:x(t.search,"recipe_id")}}function at(t,e,r){a(t,`Found blueprint "${f(r)}".<br>`);let o=st(r);return d(r.href).then(n(R,t,e,o))}function A(t,e,r){let o=p(r),m=mt(o).map(n(at,t,e));return u(m)}function pt(t){return/\/folder_on\./.test(t.getAttribute("src"))}function ft(t){return h(t).find(pt).parentNode.href}function ct(t,e){return e!==0}function dt(t){return t.value}function ut(t){return y("option",q("customselect",b("pCC",t))[0]).filter(ct).map(dt)}function lt(t,e,r){return d(`${t}&page=${r}`).then(e)}function gt(t,e,r){return ut(t).map(n(lt,e,r))}function F(t,e,r){let o=p(r),m=ft(o),c=n(A,t,e),k=gt(o,m,c);return k.push(c(r)),u(k)}function ht(t){return x(t.parentNode.search,"folder_id")!=="-1"}function bt(t,e){let r=f(e.parentNode.parentNode.nextElementSibling),o=/quest/i.test(r);return o&&a(t,`Skipping folder "${r}"  as it has the word "quest" in folder name.<br>`),!o}function xt(t,e){return d(e.parentNode.href).then(t)}function yt(t,e,r){let o=p(e);return h(o).filter(ht).filter(n(bt,t)).map(n(xt,r))}function N(t,e,r){let o=n(F,t,e),m=yt(t,r,o);return m.push(o(r)),u(m)}var i,s;function vt(){a(s,"Finished parsing ... formatting ..."),$("fsh_recipeBook",i),l(s,i)}function T(){i={},i.recipe=[],g("<br>Parsing inventing screen ...<br>",s),H({cmd:"inventing"}).then(n(N,s,i)).then(vt)}function L(t,e){i=e,g('<table class="fshInvFilter"><thead><tr><th width="90%"><b>&nbsp;Recipe Manager</b></th><th width="10%" class="fshBtnBox">[<span id="rfsh" class="fshLink">Refresh</span>]</th></tr></thead></table>',t),s=_(),E(t,s),i?l(s,i):T()}function $t(t){M(t.target),i.recipe.sort(D),l(s,i)}function It(t){t.target.id==="rfsh"&&T(),t.target.id==="sortName"&&$t(t)}function Pt(t){if(w())return;let e=t||C;j("fsh_recipeBook").then(n(L,e)),S(e,It)}export{Pt as default};
//# sourceMappingURL=recipeMgr-5TANGOC2.js.map
