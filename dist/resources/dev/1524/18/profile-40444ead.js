import{o as t,p as n,s as e,aR as o,bw as s,x as a,b1 as r,T as i,M as c,z as f,f as u,i as l,aG as p,b8 as d,k as m,y as b,F as h,g,h as k,A as N,N as j,bx as C,U as v,by as y,P as T,D as S,aq as x,aa as B,a4 as E,a as D,I as A,bq as L,X as M,bz as _,bj as q,bA as R,bB as w,bv as I,r as G,a2 as H,b as P,d as J,a9 as U,bC as Q,bD as W,bE as F,G as z,E as O,a3 as V,w as X,e as K,a1 as Y,O as Z,J as tt}from"./calfSystem-5545a3e6.js"
import{n as nt}from"./numberIsNaN-0d2994c6.js"
import"./round-aab1479f.js"
import"./roundToString-199787f3.js"
import{r as et,b as ot}from"./render-c27b6e2f.js"
import{p as st}from"./playerName-546a1209.js"
import{t as at}from"./toLowerCase-57ae178d.js"
import"./createInput-836d9f1f.js"
import{i as rt}from"./insertTextBeforeEnd-5a32dd2a.js"
import"./onlineDot-2be3f424.js"
import{s as it}from"./setTipped-b17b5374.js"
import"./batch-21ff5577.js"
import{c as ct,a as ft}from"./compressBio-32476650.js"
import"./createLabel-062664fb.js"
import{c as ut}from"./currentGuildId-2b105bba.js"
import{i as lt}from"./intValue-02f9213d.js"
import{v as pt}from"./valueText-3403f71f.js"
import{c as dt}from"./createTBody-14d36590.js"
import{c as mt}from"./createTable-b1e7ce39.js"
import{c as bt}from"./createButton-8ad42cc5.js"
import"./dialogMsg-e3924e5b.js"
import{c as ht}from"./createSpan-2a3ac8a5.js"
import{h as gt}from"./hideElement-f7434a50.js"
import"./closest-b938ab98.js"
import"./closestTable-86204b76.js"
import"./insertHtmlBeforeBegin-e7607ccd.js"
import{a as kt}from"./addStatTotalToMouseover-1cef3558.js"
import{c as Nt}from"./closestForm-eb32a866.js"
import"./all-d45d8a77.js"
import{a as $t}from"./allthen-d56c46ae.js"
import{c as jt}from"./chunk-4374bd2f.js"
import{e as Ct}from"./errorDialog-506fd27f.js"
import{g as vt}from"./getArrayByClassName-8790cbe5.js"
import"./rnd-f854f242.js"
import{f as yt}from"./fetchdata-1d88ff25.js"
import{j as Tt}from"./jConfirm-90c5c1b1.js"
import"./dialog-30daca30.js"
import"./indexAjaxJson-06c0d970.js"
import{e as St,u as xt}from"./useItem-d1797c01.js"
import"./ajaxReturnCode-d5cc1480.js"
import"./daUseItem-d3bafccd.js"
import{r as Bt}from"./replaceDoubleSpace-5327cd63.js"
import"./csvSplit-cc97bdc6.js"
import{s as Et}from"./shouldBeArray-6cd3cc6c.js"
import{i as Dt}from"./insertHtmlAfterEnd-489f5b87.js"
import{q as At}from"./quickBuffHref-a1c4d4e6.js"
import{t as Lt}from"./textNodes-58103331.js"
let Mt
const _t=[t=>"A"===t.tagName,t=>Boolean(t.href),t=>t.href.includes("togglesection")]
function qt(t,n){return n(t)}function Rt(t){t.hasAttribute("style")?function(t){"block"===t.style.display&&gt(t),t.removeAttribute("style")}(t):t.classList.toggle("fshHide")}function wt(t){Rt(5===Number(s(t.href,"section_id"))?(Mt||(Mt=a("backpackContainer")),Mt):t.parentNode.parentNode.nextElementSibling)}function It(t){const{target:n}=t;(function(t){return _t.every(e(qt,t))})(n)&&(wt(n),o(n.href),t.preventDefault())}function Gt(){return r({subcmd:"loadcomponents"})}let Ht,Pt,Jt
function Ut(t,n){return t[n.b]=t[n.b]||{a:n.a,b:n.b,count:0,del:[],v:n.v},t[n.b].count+=1,t[n.b].del.push(n.a),t}function Qt(t,n){return`${t}<tr><td><img src="${p}items/${n.b}.gif" class="fshTblCenter tip-dynamic" data-tipped="fetchitem.php?item_id=${n.b}&inv_id=${n.a}&t=2&p=${d()}&vcode=${n.v}"></td><td>${n.count}</td><td>[<span class="sendLink compDelType" data-compid="${n.b}">Del</span>]</td></tr>`}function Wt(t){const n=dt()
return function(t){Ht=t.r.reduce(Ut,{})}(t),l(n,'<tr><td colspan="3">Component Summary</td></tr>'+Object.values(Ht).reduce(Qt,"")),n}function Ft(t,n){const e=function(t){const n=t.insertRow(-1)
l(n,"<td>Total:</td>")
const e=n.insertCell(-1)
return e.colSpan=2,e}(t)
u(e,function(t){const n=t.r.length,e=ht()
return f(n,e),e}(n)),rt(e," / "+n.h.cm.toString())}function zt(t,n){if(!c(n.r))return
const e=t.parentNode
e&&(f("",e),u(e,function(t){const n=mt({className:"fshTblCenter",id:"fshTally"})
return u(n,Wt(t)),Ft(n,t),n}(n)))}function Ot(t){const n=m(),e=ht({className:"sendLink "+at(t).replace(/ /g,"-"),textContent:t})
return b("[",n),u(n,e),l(n,"]"),n}function Vt(t){return function(t){return r({subcmd:"destroycomponent",removeIndex:t})}(t)}function Xt(){if(!Pt){const t=h("inventory-table",a("profileRightColumn"))
2===t.length&&([,Pt]=t)}return Pt}function Kt(t,n){return t[n.dataset.tipped.match(k)[2]]=n.parentNode.parentNode,t}function Yt(t,n){t[n]&&f("",t[n])}function Zt(t){t.forEach(e(Yt,function(){if(!Jt){const t=g("img",Xt())
Jt=t.reduce(Kt,{})}return Jt}()))}function tn(t){const n=Xt().parentNode
if(!n)return
const e=n.children[2].children[1].children[0]
if("TABLE"!==e.tagName)return
const o=e.rows,s=o[o.length-1].cells[1].children[0]
let a=Number(N(s))
a-=t,b(a,s)}function nn(t){t.s&&c(t.r)&&(Zt(t.r),tn(t.r.length))}function en(t){t.parentNode.remove()}function on(t){return Vt(t).then(nn)}function sn(t,n,e){e.s&&(!function(t){const n=j(`#fshTally [data-compid="${t}"]`)
if(!n)return
const e=n.parentNode.parentNode.children[1],o=Number(N(e))-1
b(o,e)}(n),tn(1),t.parentNode&&f("",t.parentNode))}const an=["Enable Quick Del","Count Components","Quick Extract Components"]
function rn(t,n){return u(t,Ot(n)),t}function cn(t){l(t.parentNode.parentNode,'<span class="compDelBtn">Del</span>')}const fn=[["quick-extract-components",function(){i("components","insertQuickExtract"),v(y)}],["enable-quick-del",function(t){i("components","enableDelComponent")
const n=t.parentNode
gt(n)
const e=n.parentNode
u(e,Ot("Delete All Visible")),g("img",Xt()).forEach(cn)}],["delete-all-visible",function(t){i("components","delAllComponent")
const n=t.parentNode.parentNode.parentNode.children[0]
vt("compDelBtn",n).forEach(T)}],["compDelBtn",function(t){const{tipped:n}=t.parentNode.children[0].children[0].dataset,o=n.match(k),s=o[1]
Vt([o[2]]).then(Ct).then(e(sn,t,s))}],["count-components",function(t){i("components","countComponent"),Gt().then(e(zt,t))}],["compDelType",function(t){const n=Ht[t.dataset.compid].del,o=t.parentNode
!function(t){f("",t),t.className="guildTagSpinner",t.style.backgroundImage=`url('${p}ui/misc/spinner.gif')`}(o)
const s=jt(30,n).map(on)
$t(s,e(en,o))}]]
function un(n){const e=n.parentNode
u(e,an.reduce(rn,m({className:"fshCenter"}))),t(e,C(fn))}let ln
function pn(t,n){(t=>t&&t.response&&0===t.response.response)(n)&&f("",t.parentNode)}function dn(t){i("profile","doDebuff");(t=>yt({a:22,id:t}))(t.href.match(/(\d+)$/)[1]).then(Ct).then(e(pn,t))}function mn(t){ln?dn(t):function(t){const n=t.getAttribute("onclick").match(/Are you sure you wish to remove the .* skill\?/)[0]
Tt("Remove Skill",n,e(dn,t))}(t)}function bn(t){let n=t.target
if("IMG"===n.tagName)x(t.target),n=n.parentNode
else if("A"!==n.tagName)return
t.stopPropagation(),t.preventDefault(),mn(n)}function hn(t,n){return n.a===t}function gn(t,n){0===n.r?(!function(t,n){const o=t.srcData.findIndex(e(hn,Number(n)));-1!==o&&t.srcData.splice(o,1)}(t[0],t[3]),t[2].classList.remove("fshSpinner"),f(`<span class="fastWorn">${t[1]}</span>`,t[2].parentNode)):t[2].remove()}function kn(t,n,o,s){i("profile","fastAction - "+s)
const{target:a}=n,r=a.parentNode.parentNode.children[0].dataset.inv
b("",a),a.className="fastAction fshSpinner fshSpinner12",o(r).then(e(gn,[t,s,a,r]))}function Nn(t,n){n.target.classList.contains("fastWear")&&kn(t,n,St,"Worn"),n.target.classList.contains("fastUse")&&kn(t,n,xt,"Used")}function $n(t){return t?"Use":"Wear"}function jn(t,n){const e=n.classList.contains("backpackContextMenuUsable"),o=m({className:"fastDiv",innerHTML:`<span class="sendLink fastAction ${s=e,s?"fastUse":"fastWear"}">${$n(e)}</span>`})
var s
t.options.checkboxesEnabled&&u(o,n.parentNode.nextElementSibling.nextElementSibling),u(n.parentNode.parentNode,o)}function Cn(t){A(`#backpackTab_${t.type.toString()} .backpackContextMenuEquippable,.backpackContextMenuUsable`).forEach(e(jn,t))}function vn(t,n){const e=`${p}ui/misc/${n}.png`
t.src!==e&&(t.src=e)}function yn(t,n){n.dataset.folder===t?vn(n,"folder_on"):vn(n,"folder")}function Tn(n,o){const s=o._showPage
o._showPage=function(t,n){o.tabData&&(!function(t){A(".backpackFolderImage").forEach(e(yn,String(t.folderId)))}(o),s.call(o,t,n),Cn(o))},0!==N(a("backpack_current")).length&&D(3,Cn,[o]),t(n,e(Nn,o))}function Sn(){S("enableQuickDrink")&&(function(){const t=a("backpack")
t.className="fshBackpack",t.removeAttribute("style")}(),function(){const t=a("backpackContainer"),n=$(t).data("hcsBackpack")
n&&Tn(t,n)}())}function xn(t){return function(t){return r({subcmd:"unequipitem",inventory_id:t})}(t)}let Bn,En,Dn
function An(t,n){n.s&&f("",t.parentNode)}function Ln(t){const n=/inventory_id=(\d+)/.exec(t.href)[1]
n&&xn(n).then(e(An,t))}function Mn(){i("profile","nekidBtn")
const t=Bn.nextElementSibling
g("a",t).forEach(Ln)}function _n(){const n=a("profileRightColumn")
Bn=a("profileCombatSetDiv")
const e=Bn.parentNode.nextElementSibling,o=function(){const n=m({className:"fshCenter"}),e=bt({className:"fshBl fshBls",textContent:"Nekid"})
return rt(n,"[ "),u(n,e),rt(n," ]"),t(e,Mn),n}()
n.replaceChild(o,e)}const qn=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],Rn=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function wn(t){const n=Et(t)
return n?n.map(Bt).map(at):[]}function In(t){return[wn(t[0]),t[1]]}function Gn(t,n){return n[0].includes(t)}function Hn(t){const n=Rn.map(In),o=Bt(at(t)),s=n.find(e(Gn,o))
if(s)return s[1]}function Pn(t){return En=function(t){const n=/guild_id=([0-9]+)/i.exec(t.href)
if(n)return Number(n[1])}(t),En&&En===ut()?(M("guildSelf",N(t)),"self"):Hn(N(t))}function Jn(t){return t[0]===Dn}function Un(t){Dn=Pn(t),Dn&&function(t){const n=qn.find(Jn)
t.parentNode.classList.add(n[1]),l(t.parentNode,"<br>"+S(n[2]))}(t)}function Qn(t,n,e){let o='<div align="center">'
o+=`<a class="quickButton buttonQuickBuff tip-static fshQuickBuff" ${At(n)}data-tipped="Buff ${e}"></a>&nbsp;&nbsp;`,o+=function(){if(!S("enableMaxGroupSizeToJoin"))return`<a class="quickButton buttonJoinAll tip-static fshJoin" href="${R}" data-tipped="Join All Groups"></a>&nbsp;&nbsp;`
const t=S("maxGroupSizeToJoin")
return`<a class="quickButton buttonJoinUnder tip-static fshJoin" href="${w}" data-tipped="Join All Groups < ${t} Members"></a>&nbsp;&nbsp;`}(),o+=`<a class="quickButton tip-static fshGold" href="${_}&type=-3&tid=${n}" data-tipped="Go to ${e}'s auctions"></a>&nbsp;&nbsp;`,o+=`<a class="quickButton tip-static fshTempleTwo" href="${q}${e}" data-tipped="Create Secure Trade to ${e}"></a>&nbsp;&nbsp;`,o+=function(t){return"self"===Dn?`<a class="quickButton tip-static fshTempleThree" href="${I}${t}" data-tipped="Recall items from ${t}"></a>&nbsp;&nbsp;`:""}(e),o+=function(t,n){return"self"===Dn&&S("showAdmin")?`<a class="quickButton buttonGuildRank tip-static" href="${G}members&subcmd2=changerank&member_id=${t}" data-tipped="Rank ${n}" style="background-image: url('${p}guilds/${En}_mini.png');"></a>&nbsp;&nbsp;`:""}(n,e),o+="</div>",Dt(t,o)}function Wn(t,n){const e=n.parentNode,o=P(J,e.nextElementSibling).length-1
l(e,`<span class="fshBlue">&nbsp;${o.toString()}${function(t,n){return n&&n>=t?"/"+n:""}(o,S(function(t){return t?"alliestotal":"enemiestotal"}(t)))}</span>`)}function Fn(t){return function(t){return t&&S("renderSelfBio")}(t)||function(t){return!t&&S("renderOtherBios")}(t)}function zn(t,n){Fn(t)&&function(t){let n=t.innerHTML
n=et(n),n&&f(n,t)}(n)}function On(n){const e=a("profile-bio")
e&&(zn(n,e),S("enableBioCompressor")&&D(3,ct,[e]),t(e,ot))}function Vn(){i("profile","insertQuickWear"),v(Q)}function Xn(){const t=a("backpack_tabs"),n=h("tab-selected",t)[0].getAttribute("data-type")
let e=A(`#backpackTab_${n} li:not(.hcsPaginate_hidden) .backpackItem`)
if(0===e.length)return
const o=A(`#backpackTab_${n} li:not(.hcsPaginate_hidden) .backpackCheckbox:not(:disabled)`)
o.length>0&&(e=o),e.forEach(T)}function Kn(){const t=parseInt(N(a(F)),10)
!function(t){return lt(pt(h(z)))===t}(t)?M(O,t):M(O,"")}const Yn=98,Zn=85,te=60
function ne(t){return Number(V(a("stat-"+t.toLowerCase()).childNodes).filter(Lt).map(E).join(""))}function ee(t){const n=m({innerHTML:t.dataset.tipped}),e=g("b",n).map(t=>E(t)),o=ne(e[2])
nt(o)||function(t,n,e){const o=ne(n[3]),s=Math.floor(e*(Number(n[1].replace(/[+%]/g,""))/100))
it(t.dataset.tipped.replace("</center></div>",`<br>Buff Effect: ${String(s)}<br>${n[2]}: ${String(e-s)}&nbsp;&nbsp;${n[3]}: ${String(o+s)}$&`),t)}(t,e,o)}function oe(t){const n=j(`#profileRightColumn img[src$="/${String(t)}.png"]`)
n&&ee(n)}function se(t){const n=P("td",t)
f(`<span id="${n[0].id}">${n[0].innerHTML.replace(/&nbsp;/g," ").trim()}</span> <div class="profile-stat-bonus">${N(n[1])}</div>`,t.parentNode)}function ae(o){o&&(!function(){const n=a("profileRightColumn")
n&&(ln=S("disableDeactivatePrompts"),t(n.lastElementChild,bn,!0))}(),function(){const t=A("#profileLeftColumn strong")
t.filter(H("Allies")).forEach(e(Wn,!0)),t.filter(H("Enemies")).forEach(e(Wn,!1))}(),Sn(),function(){const t=Xt()
t&&un(t)}(),function(){const n=j(`#profileRightColumn a[href="${U}profile&subcmd=togglesection&section_id=2"]`)
if(!n)return
const e=ht({innerHTML:"&nbsp;["}),o=ht({className:"sendLink",innerHTML:"Quick&nbsp;Wear"})
u(e,o),rt(e,"]"),u(n.parentNode,e),t(o,Vn)}(),function(){const n=j(`#profileRightColumn a[href="${W}"]`)
if(!n)return
const e=ht({className:"smallLink",textContent:"All"})
t(e,Xn)
const o=ht({innerHTML:"[&nbsp;"})
u(o,e),l(o,"&nbsp;]&nbsp;"),u(n.parentNode,o)}(),Kn(),_n(),t(n,It))}function re(t,n,e){!function(t){const n=j(`#pCC a[href^="${L}"]`)
n?Un(n):t&&M("guildSelf","")}(e)
Qn(t,Y(Z("player_id"),d()),n)}function ie(t,n,e){ae(e),re(t,n,e),[Yn,Zn,te].forEach(oe),function(){const t=P(J,a("profileLeftColumn"))[0]
g(J,t).forEach(se)}(),function(){if(!S("highlightPvpProtection"))return
const t=j(`#profileLeftColumn a[href="${B}"]`)
"N/A"!==E(t.parentNode.nextSibling)&&(t.parentNode.parentNode.style.cssText="border: 3px solid red")}(),D(3,On,[e]),kt(),D(3,ft)}function ce(t){t.preventDefault()
const n=V(Nt(t.target).elements).filter(t=>"submit"!==t.type).map(t=>`${t.name}=${t.value}`).join("&")
window.location=`${tt}?${n}`}export default function(){if(X())return
const t=j('#profileLeftColumn img[src*="/avatars/"][width="200"]')
if(!t)return
const e=N(P("h1",n)[0]),o=e===st()
ie(t,e,o),function(t){t||K(j("#profileRightColumn"),"submit",ce)}(o)}
//# sourceMappingURL=profile-40444ead.js.map
