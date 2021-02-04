import{d as t}from"./doSortParams-e8f4d1fb.js"
import{H as e,aw as n,A as i,y as r,g as s,v as a,i as o,t as c,B as d,bc as p,ay as u,J as f,m,h,u as l,x as g,o as b,p as $}from"./calfSystem-37f70deb.js"
import{s as v,g as x}from"./idb-416129aa.js"
import{s as y}from"./shouldBeArray-e66dc473.js"
import{a as _}from"./stringSort-19c5e617.js"
import{a as N}from"./all-978030c9.js"
import"./csvSplit-d4535156.js"
import"./alpha-187fa6c5.js"
import"./toLowerCase-abb30c3b.js"
let j,w=[]
function k(t){return`<div class="rmItem"><img class="tip-dynamic" data-tipped="fetchitem.php?item_id=${t.id}&inv_id=-1&t=2&p=${j}&vcode=${t.verify}" src="${t.img}" height="20px" width="20px"><p>${t.amountPresent}/${t.amountNeeded}</p></div>`}function C(t){return`<div class="rmItem"><img class="tip-dynamic" data-tipped="fetchitem.php?item_id=${t.id}&inv_id=-1&t=2&p=${j}&vcode=${t.verify}" src="${t.img}" height="20px" width="20px"><p>${t.amountPresent}/${t.amountNeeded}</p></div>`}function S(t){return!w.includes(t.name)}function T(t){return`<tr class="rmTr"><td class="rmTd"><a href="${t.link}"><img src="${t.img}" height="30px" width="30px"></a></td><td class="rmTd"><a href="${t.link}">${t.name}</a></td><td class="rmTd">${function(t){return t.items?t.items.map(k).join(""):""}(t)}</td><td class="rmTd">${function(t){return t.components?t.components.map(C).join(""):""}(t)}</td><td class="rmTd">${function(t){return t.target?` <img class="tip-dynamic" data-tipped="fetchitem.php?item_id=${t.target.id}&inv_id=-1&t=2&p=${j}&vcode=${t.target.verify}" src="${t.target.img}" height="30px" width="30px"><br/>`:""}(t)}</td></tr>`}function B(t,r){r&&(e("hideRecipes")&&(w=y("hideRecipeNames")),function(t,e){j=n()
let r='<table width="100%"><tr class="rmTh"><th>Recipe</th><th><span id="sortName" class="fshLink" sortkey="name">Name</span></th><th>Items</th><th>Components</th><th>Target</th></tr>'
r+=e.recipe.filter(S).map(T).join(""),r+="</table>",i(r,t),v("fsh_recipeBook",e)}(t,r))}function A(t){const e=r("pCC",t).children[0].rows[4].cells[0].children[0]
return s("img",e)}const I=/fetchitem.php\?item_id=(\d+)&inv_id=-1&t=2&p=(\d+)&vcode=([a-z0-9]+)/i
function P(t,e){const n=e.getAttribute("background")
return n&&n.includes(t)}function R(t){const e=t.children[0].children[0],n=function(t){return t.dataset.tipped.match(I)}(e),i=function(t,e){return{img:t.getAttribute("src"),id:e[1],verify:e[3]}}(e,n)
return function(t,e){if(e){const n=d(e).split("/")
t.amountPresent=parseInt(n[0],10),t.amountNeeded=parseInt(n[1],10)}}(i,t.parentNode.nextElementSibling),i}function E(t,e){return t.filter(c(P,e)).map(R)}function F(t,e,n,i){const c=a(i)
o(t,`Parsing blueprint ${n.name}...<br>`)
const d=function(t){return s("td",r("pCC",t))}(c)
n.items=E(d,"/inventory/2x3."),n.components=E(d,"/inventory/1x1mini."),[n.target]=E(d,"/hellforge/2x3."),e.recipe.push(n)}function L(t,e,n){o(t,`Found blueprint "${d(n)}".<br>`)
const i=function(t){return{img:t.parentNode.previousElementSibling.children[0].getAttribute("src"),link:t.href,name:d(t),id:p(t.search,"recipe_id")}}(n)
return u(n.href).then(c(F,t,e,i))}function q(t,e,n){const i=function(t){const e=r("pCC",t).children[0].rows[6].cells[0].children[0]
return s("a",e)}(a(n)).map(c(L,t,e))
return N(i)}function z(t){return/\/folder_on\./.test(t.getAttribute("src"))}function H(t,e){return 0!==e}function J(t){return t.value}function M(t,e,n){return u(`${t}&page=${n}`).then(e)}function D(t,e,n){return function(t){return s("option",f("customselect",r("pCC",t))[0]).filter(H).map(J)}(t).map(c(M,e,n))}function G(t,e,n){const i=a(n),r=function(t){return A(t).find(z).parentNode.href}(i),s=c(q,t,e),o=D(i,r,s)
return o.push(s(n)),N(o)}function K(t){return"-1"!==p(t.parentNode.search,"folder_id")}function O(t,e){const n=d(e.parentNode.nextElementSibling.nextElementSibling.firstChild),i=/quest/i.test(n)
return i&&o(t,`Skipping folder "${n}"  as it has the word "quest" in folder name.<br>`),!i}function Q(t,e){return u(e.parentNode.href).then(t)}function U(t,e,n){const i=c(G,t,e),r=function(t,e,n){return A(a(e)).filter(K).filter(c(O,t)).map(c(Q,n))}(t,n,i)
return r.push(i(n)),N(r)}let V,W
function X(){o(W,"Finished parsing ... formatting ..."),v("fsh_recipeBook",V),B(W,V)}function Y(){V={},V.recipe=[],i("<br>Parsing inventing screen ...<br>",W),l({cmd:"inventing"}).then(c(U,W,V)).then(X)}function Z(t,e){V=e,i('<table class="fshInvFilter"><thead><tr><th width="90%"><b>&nbsp;Recipe Manager</b></th><th width="10%" class="fshBtnBox">[<span id="rfsh" class="fshLink">Refresh</span>]</th></tr></thead></table>',t),W=m(),h(t,W),V?B(W,V):Y()}function tt(e){"rfsh"===e.target.id&&Y(),"sortName"===e.target.id&&function(e){t(e.target),V.recipe.sort(_),B(W,V)}(e)}function et(t){if(g())return
const e=t||$
x("fsh_recipeBook").then(c(Z,e)),b(e,tt)}export default et
//# sourceMappingURL=recipeMgr-243127ae.js.map
