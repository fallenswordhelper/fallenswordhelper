import{g as n,p as e,a as i,i as t,b as s,c as r,e as a,f as c,h as o,j as l,k as u,m as d,l as f,n as p,o as h,t as m,q as k,r as v,s as S,u as b,v as g,w as L,x as E,y as N,z as H,A,B as j,C as I,D as w,E as D,F as T,G as x,H as M,I as _,J as O,K as C,L as Q,M as R,N as F,O as U,P as q,Q as y,R as G}from"./calfSystem-1144979b.js"
const P=n=>n.src.includes("/folder.png")
function V(n){return"<option value="+n.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]+">"+s(n.parentNode.parentNode)+"</option>"}var Y,z
function B(n,e){e.checked=!e.disabled&&!e.checked}var J,K=[["guild",function(n,e){e.checked=!e.disabled&&-1!==Y[n.invid].guild_tag}],["item",function(n,e){Y[n.invid]&&Y[n.invid].item_id===z&&B(0,e)}],["checkAll",B]]
function W(n,e){return e[0]===n}function X(n,e){e.injectHere&&(e.injectHere.parentNode.classList.contains("fshHide")||n(e,e.el.parentNode.parentNode.previousElementSibling.children[0]))}function Z(n,e,i,t){Y=e
var s=K.find(r(W,i))[1]
z=Number(t),n.forEach(r(X,s))}function $(i){if("storeitems"===a.subcmd2){var t=n("form",e)[0]
if(t){var s=c({className:"fshCenter"}),r=o({colSpan:3})
l(s,r),u(s,t),r.innerHTML=d(i),h=n(f,e)[0].rows,p(h[h.length-2].cells[0],'<input id="fshChkAll" value="Check All" type="button">&nbsp;')}}var h}function nn(n){return n?"Hide":"Show"}function en(i,t){if(function(){if(!J){var i=n("form",e)
i.length>0&&(J=i[0].previousElementSibling.children[0])}}(),J){var s='[<span id="fshShowExtraLinks" class="sendLink">'+nn(i)+' AH and UFSG links</span>]&nbsp;[<span id="fshShowQuickDropLinks" class="sendLink">'+nn(t)+" Quick Drop links</span>]&nbsp;"
"storeitems"===a.subcmd2&&(s+='[<span id="fshSelectAllGuildLocked" class="sendLink"> Select All Guild Locked</span>]&nbsp;'),J.innerHTML=s}}function tn(n,e,i){i.el.parentNode.parentNode.previousElementSibling.children[0].checked=!1,function(n,e,i){var t=i.injectHere.parentNode,s=n[i.invid].folder_id,r=0!==e&&e!==s
m(t,r),m(t.nextElementSibling,r)}(n,e,i)}function sn(n,e,i){h([2,3,n,0,r(tn,e,Number(i.dataset.folder))])}function rn(n){if(n.injectHere)return n.injectHere.previousElementSibling.previousElementSibling.children[0].checked}const an=n=>n.invid
function cn(n,e){return n.toString()===e.invid}function on(n,e){var i=n.find(r(cn,e))
if(i){var t=i.injectHere.parentNode
t.nextElementSibling.remove(),t.remove(),i.el=null,i.invid=null,i.injectHere=null}}function ln(n,e){b(e.r)&&e.r.forEach(r(on,n))}function un(n,e,i){S(e,i).then(r(ln,n))}function dn(n){var e=k("selectFolderId").value
v(30,n.filter(rn).map(an)).forEach(r(un,n,e))}function fn(n,e,i){1!==i.r&&(n.style.color="green",n.innerHTML=e)}function pn(n,e,i,t){t.className="quickAction",function(n,e,i){e([n.getAttribute("itemInvId")]).then(r(fn,n,i))}(t,n,e),g(t),function(n){n.innerHTML='<img class="quickActionSpinner" src="'+L+'ui/misc/spinner.gif" width="15" height="15">'}(t)
var s=t.parentNode
!function(n,e){var i=E(e,n)
i&&(i.className="quickAction",i.innerHTML="")}(s,i),function(n){var e=n.parentNode.children[0].children[0]
e.checked=!1,e.disabled=!0}(s)}var hn,mn,kn,vn,Sn,bn,gn,Ln,En,Nn,Hn,An
function jn(n){return n.dataset.tipped}function In(n){var e=n.dataset.tipped.match(j)
return[n,e[1],e[2]]}function wn(n,e){return n[e[1]]=(n[e[1]]||0)+1,n}function Dn(n){return{el:n[0],invid:n[2],injectHere:n[0].parentNode.parentNode.nextElementSibling}}function Tn(){A(),hn=N("disableItemColoring"),mn=N("showExtraLinks"),kn=N("showQuickDropLinks"),vn=N("showQuickSendLinks"),en(mn,kn)
var t,s,r=(t=n(f,e),s=t[t.length-1],i("img",s)).filter(jn).map(In)
Sn=r.map(Dn),(bn=r.reduce(wn,{}))[13699]=1}var xn=[[function(n){return!Ln&&1!==bn[n.item_id]},function(n,e){return' [<span linkto="'+e.item_id+'" class="fshLink">Check all</span>]'}],[function(n){return!An&&vn&&!n.bound},function(n){return' <span class="quickAction sendLink tip-static" itemInvId="'+n.invid+'" data-tipped="INSTANTLY SENDS THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk.">[Quick Send]</span>'}],[function(n){return!En&&kn&&-1===n.guild_tag},function(n){return' <span class="quickAction dropLink tip-static" itemInvId="'+n.invid+'" data-tipped="INSTANTLY DROP THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk.">[Quick Drop]</span>'}]]
function Mn(n,e){return e[0](n)}function _n(n,e,i){return i[1](n,e)}function On(n,e){!function(n,e){Hn||hn||n.injectHere.classList.add(G[e.rarity].clas)}(n,e)
var i=xn.filter(r(Mn,e)).map(r(_n,n,e)).join("")
""!==i&&y(n.injectHere,i)}function Cn(n){var e=Nn[n.invid]
e?(!function(n,e){if(!R(gn,!mn)){var i='<span><span class="aHLink">'
e.bound||(i+='[<a href="'+F+encodeURIComponent(e.item_name)+'">AH</a>]'),i+='</span>[<a href="'+U+"items"+q+"view&item_id="+e.item_id+'" target="_blank">UFSG</a>]</span>',p(n.injectHere,i)}}(n,e),On(n,e)):Q("injectStoreItems: Item not found",!1)}function Qn(){mn&&(gn=!0),Ln=!0,Hn=!0,kn&&(En=!0),An=!0}function Rn(n){m(n.injectHere.children[0],!mn)}function Fn(){H("showExtraLinks",mn=!mn),en(mn,kn),gn?Sn.forEach(Rn):h([5,3,Sn,0,Cn,Qn])}function Un(n){m(E(".dropLink",n.injectHere),!kn)}function qn(){H("showQuickDropLinks",kn=!kn),en(mn,kn),En?Sn.forEach(Un):h([5,3,Sn,0,Cn,Qn])}function yn(n,e){Z(Sn,Nn,n,e)}function Gn(){return[[M("fshShowExtraLinks"),Fn],[M("fshShowQuickDropLinks"),qn],[M("fshSelectAllGuildLocked"),r(yn,"guild",null)],[M("fshMove"),r(dn,Sn)],[M("fshChkAll"),r(yn,"checkAll",null)]].concat([[function(n){return n.hasAttribute("linkto")},function(n){yn("item",n.getAttribute("linkto"))}],[r(_,"sendLink"),r(pn,O,"Sent",".dropLink")],[r(_,"dropLink"),r(pn,C,"Dropped",".sendLink")],[r(_,"fshFolder"),r(sn,Sn,Nn)]])}function Pn(n){!function(n){return!n||!n.items||!n.folders}(n)&&Sn&&(gn=!1,Ln=!1,Nn=n.items,Hn=!1,En=!1,An=!1,h([5,3,Sn,0,Cn,Qn]),$(n.folders),T(e,x(Gn())))}export default function(){var s,r
I()||(w().then(Pn),D(3,Tn)),"dropitems"===a.subcmd&&(s=n("form",e)[0].nextElementSibling.nextElementSibling.nextElementSibling,0!==(r=i("img",s).filter(P)).length&&t(s,'<tr><td class="fshCenter">Move selected items to: <select name="folder" id="selectFolderId" class="customselect">'+r.map(V).join("")+'</select>&nbsp;<input type="button" class="custombutton" id="fshMove" value="Move"></td></tr>'))}
//# sourceMappingURL=injectProfileDropItems-65b99cba.js.map