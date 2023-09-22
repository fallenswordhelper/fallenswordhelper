import{e}from"./executeAll-ef9da8be.js"
import{ab as t,l as n,g as a,a4 as r,i as o,c as s,v as l,o as i,ax as c,ay as u,az as f,aA as d,aB as m,aC as p,y as h,b as g,ad as v,aD as b,aE as w,aF as y,aG as k,aH as C,a9 as L,j as V,n as D,av as x,q as A,aI as S,aJ as M,D as N,aK as H,aL as B,aM as q,aN as T,aO as E,aP as G,aQ as j,aR as P,aS as F,aT as R,aU as _,ae as I,a3 as O,aV as W,aW as Y,aX as K,a as z,$ as U,S as Q,J,K as X,ah as Z,P as ee,W as te,X as ne,L as ae,_ as re,aY as oe,Q as se,a0 as le,M as ie,N as ce,aZ as ue,a_ as fe,a$ as de,b0 as me,U as pe,b1 as he,s as ge,b2 as ve,b3 as be,b4 as we,b5 as ye,b6 as ke,b7 as Ce,b8 as $e,b9 as Le,ba as Ve,bb as De,bc as xe,bd as Ae,be as Se,bf as Me,bg as Ne,bh as He,bi as Be,bj as qe,bk as Te,bl as Ee,bm as Ge,bn as je,bo as Pe,bp as Fe,bq as Re,br as _e,bs as Ie,bt as Oe,bu as We,bv as Ye,bw as Ke,bx as ze,by as Ue,bz as Qe,ac as Je}from"./calfSystem-4830a18d.js"
import{i as Xe}from"./insertElementAfter-f17e432f.js"
import{t as Ze}from"./toggleForce-6124e333.js"
import{c as et}from"./createSpan-0da7a190.js"
import{i as tt}from"./insertTextBeforeEnd-1af4f779.js"
import{r as nt,a as at}from"./roundToString-b56b87fd.js"
import{a as rt}from"./addCommas-47d6aaa1.js"
import{d as ot,q as st}from"./quickbuffSuccess-0768f6e8.js"
import{c as lt}from"./createButton-30c5ecee.js"
import{i as it}from"./isArray-09a53da7.js"
import{o as ct}from"./openQuickBuffById-8cca49b4.js"
import{c as ut}from"./createInput-08b5e815.js"
import{c as ft}from"./createLabel-3172b889.js"
import{g as dt,s as mt}from"./idb-7e56faaa.js"
import{r as pt}from"./rnd-6f762303.js"
import{v as ht}from"./valueText-ddd10c6c.js"
import{c as gt}from"./createStyle-79b7cdab.js"
import{h as vt,u as bt}from"./await_block-31b017e2.js"
import{e as wt,u as yt,d as kt}from"./each-1f09c43f.js"
import{u as Ct}from"./uniq-e12b948a.js"
import{g as $t}from"./guild-8e58b9bf.js"
import{c as Lt}from"./createTable-67896158.js"
import{g as Vt,t as Dt,a as xt}from"./getTitanString-4524f909.js"
import{n as At,a as St,s as Mt,r as Nt}from"./now-6f22aec9.js"
import{p as Ht}from"./padZ-e55b66a2.js"
import{f as Bt}from"./fshOpen-c0e91392.js"
import{c as qt}from"./chunk-cd03a005.js"
import{L as Tt}from"./LinkButton-59368dc4.js"
import{r as Et}from"./reduceBuffArray-e31428bc.js"
import{p as Gt}from"./profile-3abe08ab.js"
import{a as jt}from"./all-414e0607.js"
import{n as Pt}from"./numberIsNaN-a40c3bbb.js"
import{r as Ft}from"./reliclist-a1980364.js"
import{d as Rt}from"./daGroupStats-6bce852a.js"
import{d as _t,m as It}from"./mercEffect-5c38f51d.js"
import{d as Ot}from"./daViewGroups-db877128.js"
import{a as Wt}from"./attribsToArray-a01ba54f.js"
import{g as Yt}from"./guildMembers-7edbe4e6.js"
import{r as Kt}from"./remainingPages-9b4c19bf.js"
import{t as zt}from"./testQuant-69a26f83.js"
import{m as Ut}from"./myStats-e8c505b6.js"
import{s as Qt}from"./shouldBeArray-7acde5b3.js"
import{h as Jt}from"./hideElement-85f33001.js"
import{s as Xt,j as Zt}from"./simpleCheckbox-ed7e63fb.js"
import{i as en}from"./isSelected-5d9f5edf.js"
import{b as tn}from"./bitwiseAnd-0aa6eeb8.js"
import"./buffReportParser-f8c4899c.js"
import"./buffObj-18893259.js"
import"./guildGroups-c61054e3.js"
import"./view-2d0b7523.js"
import"./intValue-e1798d0a.js"
import"./csvSplit-81e99601.js"
import"./isChecked-3968d2ec.js"
let nn=0
function an(e){return e}function rn(e){if(function(e){return t.showBuffInfo&&e.some(an)}(e))return function(){if(nn)Ze(nn,!1)
else{nn=n({className:"fshActionBox",innerHTML:"<div></div><div></div><div></div><div></div><div></div>"})
const e=a("actionContainer")
Xe(nn,e.children[2])}return nn}()
nn&&Ze(nn,!0)}function on(e,t,n,a){t&&(e.className=t),r(n,e)
const s=et()
return o(e,s),tt(e,a),s}let sn=0,ln=0
function cn(e,t){sn?Ze(sn,!1):function(e){sn=e.children[3],ln=on(sn,"fshBlue","CA "," active")}(e),r(t.level,ln)}function un(e,t){t?cn(e,t):sn&&Ze(sn,!0)}let fn=0,dn=0
function mn(e,t){fn?Ze(fn,!1):function(e){fn=e.children[4],dn=on(fn,"fshRed","Doubler "," active")}(e),r(t.level,dn)}function pn(e,t){t?mn(e,t):fn&&Ze(fn,!0)}let hn=0,gn=0
function vn(e,t,n){hn?Ze(hn,!1):function(e){hn=e.children[2],gn=on(hn,"","Damage bonus: ","%")}(e),r(function(e,t){if(e){const n=Math.min(.01*Math.round(Math.floor(t/5)*Number(e.level)),20)
return nt(n,2).toString()}return"0"}(t,Number(n)),gn)}function bn(e,t,n){t?vn(e,t,n):hn&&Ze(hn,!0)}let wn=0,yn=0
function kn(e,t){wn?Ze(wn,!1):function(e){wn=e.children[1],yn=on(wn,"","Kill Streak: ","")}(e),function(e,t){r(rt(e),t)}(t,yn)}function Cn(e,t,n,a){t||n?kn(e,a):wn&&Ze(wn,!0)}function $n(e,t){return t.name===e}function Ln(e){const{buffs:t}=GameData.player()
if(t)return t.find(s($n,e))}const Vn=["red","orange","yellow"]
let Dn=0,xn=0
async function An(){if(Ln("Summon Shield Imp"))return
!function(e){st(e)&&GameData.fetch(u)}(await ot([c()],[55]))}const Sn=["imp-0","imp-1","imp-1"]
function Mn(e,t){Dn?Ze(Dn,!1):function(e){[Dn]=e.children,r("Shield Imps Remaining: ",Dn),xn=et(),o(Dn,xn),l(Dn,"&nbsp;")
const t=lt({className:"xSmallLink",textContent:"Recast"})
o(Dn,t),i(t,An)}(e)
const n=function(e){return e?Number(e.stack):0}(t)
Dn.className=function(e){return Sn[e]||"fshGreen"}(n),r(n,xn)}function Nn(e,t,n){t||n?Mn(e,t):Dn&&Ze(Dn,!0)}function Hn(e){return 0===e.type}let Bn=0,qn=0,Tn=0,En=0,Gn=0,jn=0
function Pn(){Bn=Ln("Death Dealer"),qn=Ln("Doubler"),Tn=Ln("Counter Attack"),En=Ln("Summon Shield Imp"),Gn=function(){const{dynamic:e}=GameData.realm()
return it(e)&&e.some(Hn)}(),jn=GameData.player().killStreak}function Fn(){!function(){const e=$("#actionlist-shield-imp")
1===e.length&&e.css("background-color",Vn[e.text()]||"#ad8043")}(),Pn()
const e=rn([Bn,qn,Tn,En,Gn])
e&&(Nn(e,En,Bn),Cn(e,Bn,Gn,jn),bn(e,Bn,jn),un(e,Tn),pn(e,qn))}function Rn(e){return et({textContent:e})}function _n(){window.GameController&&GameController.Realm&&!GameController.Realm.footprintTileList&&(GameController.Realm.footprintTileList=[])}function In(e,t,n){return ft({className:`fshCurveEle fshCurveLbl fshPoint tip-static ${e}`,dataset:{tipped:t},htmlFor:n})}function On(e){const t=n({className:"fshToggle"}),a=ut({checked:e.prefVal,id:e.checkId,type:"checkbox"})
o(t,a)
const r=In(e.onClass,e.onTip,e.checkId)
o(t,r)
const s=In(e.offClass,e.offTip,e.checkId)
return o(t,s),o(e.worldName,t),a}let Wn=0,Yn=0,Kn=0,zn=0,Un=0,Qn=0,Jn=0,Xn=0,Zn=0
const ea=e=>Rn(e?e.toString():"?")
function ta(e,t,a){const r=n({textContent:`${t} Lvl: `})
o(r,a),o(e,r)}function na(e,t,n){const a=lt({className:`fshCurveEle fshCurveBtn fshPoint tip-static ${e}`,dataset:{tipped:t}})
return o(n,a),a}function aa(e){!function(e){const t=n({className:"fshFsty"})
Yn=ea(GameData.realm().minlevel),ta(t,"Min",Yn),Kn=ea(GameData.player().level),ta(t,"Your",Kn),o(e,t)}(e),zn=na("fshFormGroup","Quick Create Attack Group",e),Un=na("fshQuickBuff","Open Quick Buff Popup",e),Qn=na("fshRealmMap","Open Realm Map",e),Jn=na("fshTempleOne","Search map in Ultimate FSG",e)}function ra(){aa(Wn),function(e){if(v("showSpeakerOnWorld")){const t=v("playNewMessageSound")
Xn=On({prefVal:t,checkId:"fshSoundCheck",onClass:"soundOn",onTip:"Turn Off Sound when you have a new log message",offClass:"soundOff",offTip:"Turn On Sound when you have a new log message",worldName:e})}}(Wn),function(e){const n=t.huntingMode
Zn=On({prefVal:n,checkId:"fshHuntCheck",onClass:"huntOn",onTip:"Hunting mode is ON",offClass:"huntOff",offTip:"Hunting mode is OFF",worldName:e})}(Wn)}const oa=[[()=>Xn,function(){L("playNewMessageSound",!v("playNewMessageSound"))}],[()=>Zn,function(){t.huntingMode=!t.huntingMode,L("huntingMode",t.huntingMode)}]],sa=[[()=>zn,function(e){b(e),GameData.doAction(12,401,{},0)}],[()=>Un,function(){ct(w())}],[()=>Qn,function(){window.open(`${y+k}map`,"fsMap")}],[()=>Jn,function(){const e=GameData.realm()
window.open(`${C}realms${k}view&realm_id=${e.id}`,"mapUfsg")}]]
function la(e,t){const{target:n}=t,[,a]=e.find((([e])=>e()===n))??[]
a&&(n.blur(),a(n))}function ia(e){return s(la,e)}function ca(){Wn||(Wn=n({className:"fshCurveContainer",id:"fshWorldButtonContainer"}),ra(),i(Wn,ia(sa)),g(Wn,"change",ia(oa)),h(Wn,a("worldCoord")))}function ua(e,t){Yn&&t.b.minlevel&&(_n(),r(t.b.minlevel,Yn))}function fa(e,t){Kn&&r(t.b,Kn)}const da=["NORMAL","CHAMPION","ELITE","SUPER ELITE","TITAN","LEGENDARY"],ma=`url("${S}ui/world/icon_action_attack_`
let pa=!1
function ha(e){return A(".verb.attack",e)}function ga(e){const t=da.indexOf(e.toUpperCase())
return V(`#actionList .actionListItem.creature.creature-${t}`)}function va(e){e.classList.remove("attack-1","attack-2","attack-3","attack-4","attack-5","attack-6","attack-7","attack-8"),e.style.backgroundImage=""}function ba(e,t){null!==e&&(e.classList.add(`attack-${t+1}`),e.style.backgroundImage=`${ma}${t+1}.png")`)}function wa(e){const t=["LEGENDARY","NORMAL"].flatMap(ga),n=ga("CHAMPION"),[a,r]=e?[t,n]:[n,t]
a.map(ha).filter((e=>null!==e)).forEach(va),r.slice(0,8).map(ha).forEach(ba)}function ya(e){if(!e.altKey||!e.shiftKey||"INPUT"===e.target.tagName||"TEXTAREA"===e.target.tagName)return
if(pa||wa(!0),pa=!0,!/(?:Digit|Numpad)[1-8]/.test(e.code))return
const t=ga("CHAMPION"),n=parseInt(e.code.slice(-1),10)-1
n<t.length&&function(e){const t=ha(e)
t&&(D("world","ChampionAttack"),x(t))}(t[n])}function ka(e){!pa||e.ctrlKey&&e.shiftKey||(pa=!1,wa(!1))}const Ca=["Breaker","Protection","Master Thief","Protect Gold","Disarm","Duelist","Thievery","Master Blacksmith","Master Crafter","Fury Caster","Master Inventor","Sustain"]
let $a=[],La=0
function Va(e){54!==e.id&&26!==e.id||(La.player.buffs[e.id]=parseInt(e.level,10))}function Da(e){-1===Ca.indexOf(e.name)&&(La.player.enhancements[e.name]=e.value)}function xa(e){La={},La.combat=e.response.data,La.combat.inventory_id&&(La.combat.drop=La.combat.item.id),La.player={},La.player.buffs={},La.player.enhancements={},function(e){e.player.buffs&&e.player.buffs.forEach(Va)}(e),function(e){e.player.enhancements&&e.player.enhancements.forEach(Da)}(e),La.time=e.time,$a.push(La),mt("fsh_combatLog",$a)}function Aa(e,t){0===t.response.response&&xa(t)}function Sa(e){return!e?.response?.data}async function Ma(e){const t=await H({cache:!1,url:"fetchdata.php",data:{...e,fshrnd:pt()},dataType:"text"})
return B(t)??{response:{msg:"Server Error",response:1}}}const Na=[]
const Ha=(e,t)=>e===Number(t.response.data.id)
function Ba(e,t){e(t)}async function qa(e,t){const n=Na.find(s(Ha,e))
if(n)return function(e){return new Promise((t=>{q(3,Ba,[t,e])}))}(n)
const a=await Ma({a:1,d:0,id:e,passback:t})
return function(e){Sa(e)||Na.push(e)}(a),a}let Ta=0,Ea=0,Ga=0,ja=0,Pa=0,Fa=0
const Ra=()=>Ta,_a=()=>Ea,Ia=()=>Ga,Oa=()=>ja,Wa=()=>Pa,Ya=()=>Fa
function Ka(e,t){return ht(T(t,e))}function za(){var e
Ta=GameData.player().level,e=a("statbar-character-tooltip-stats"),Ga=Ka(e,E),Ea=Ka(e,G),Pa=Ka(e,j),ja=Ka(e,P),Fa=Ka(e,F)}const Ua=e=>`<td>${e}:&nbsp;</td>`,Qa=e=>`<td width="40%">${e}</td>`
function Ja([e,t,n,a,r]){return[Ua(e),Qa(`${t} (your ${n}:<span class="${a}">${r()}</span>)`)]}function Xa(e){return["<tr>",...e,"</tr>"].join("")}function Za(e,t){return Xa([...Ja(e),...Ja(t)])}const er='<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Enhancements</td></tr>'
function tr(e){return`<tr><td colspan="2">${e.name}:</td><td colspan="2">${e.value}</td></tr>`}function nr(e,t,n){return function(e){return`<table><tr><td><img src="${S}creatures/${e.image_id}.png" height="200" width="200"></td><td rowspan="2"><table width="400"><tr><td class="header" colspan="4" class="fshCenter">Statistics</td></tr>`}(e)+function(e,t){return Xa([Ua("Class"),Qa(e.creature_class),...Ja(["Level",e.level,"level",t,Ra])])}(e,n)+function(e){return Za(["Attack",e.attack,"defense","fshYellow",_a],["Defense",e.defense,"attack","fshYellow",Ia])}(e)+function(e){return Za(["Armor",e.armor,"damage","fshYellow",Oa],["Damage",e.damage,"armor","fshYellow",Wa])}(e)+function(e,t){return Xa([Ua("HP"),Qa(`${e.hp} (your HP:<span class="fshYellow">${Ya()}</span>)(1H: <span class="fshRed">${t}</span>)`),Ua("Gold"),Qa(e.gold)])}(e,t)+er+function(e){return 0===e.enhancements.length?'<tr><td colspan="4">[no enhancements]</td></tr>':e.enhancements.map(tr).join("")}(e)+function(e){return`<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Description</td></tr><tr><td colspan="4">${e.description}</td></tr><tr><td colspan="4" height="5"></td></tr></table></td></tr><tr><td class="fshCenter"><b>${e.name}</b></td></tr></table>`}(e)}function ar(e){if(!Sa(e))return function(e){const n=Math.ceil(e.hp*t.hpVariable+e.armor*t.generalVariable)
let a="fshYellow"
return za(),Ra()>e.level&&(a="fshRed"),nr(e,n,a)}(e.response.data)}const rr=["verb","view","tip-static"]
async function or(e,t){const n=function(e){return R(e.parentNode.children).indexOf(e)}(e),a=await qa(GameData.actions()[n].data.id,n)
Sa(a)||function(e,t){const n=ar(t)
e.set("content.text",n)}(t,a)}function sr(e,t){D("NewMap","CreatureInfo"),e.classList.add("fshTip")
var n
const a=(n="Loading...",$(e).qtip({overwrite:!0,show:{event:"mouseover",ready:!0},style:{classes:"qtip-tipsy qtip-custom"},position:{my:"center right",at:"center left",effect:!1,viewport:$(window)},content:{text:n},hide:{effect:!1}})).qtip("api")
a&&or(t,a)}function lr(e,t){return n=e,rr.every((e=>N(e,n)))&&!N("fshTip",e)&&N("creature",t)
var n}function ir(e){if(!t.showCreatureInfo)return
const{target:n}=e,a=n.parentNode.parentNode.parentNode
lr(n,a)&&sr(n,a)}function cr(e){return t.doNotKillList.includes(_(e))}function ur(e){e.classList.toggle("fshBlue",cr(O(e)))}function fr(){const e=a("actionList")
I("creature",e).forEach(ur)}function dr(e){const t=GameData.actions()[e]
if(t)return function(e,t){if(cr(e))return a("actionList").children[t].children[0].children[1].classList.remove("loading"),!0}(t.data.name,e)}const mr={2:function(e){return function(t,n,a,r){dr(a.passback)||e(t,n,a,r)}}}
function pr(e){return function(t,n,a,r){const o=mr[t];(function(e){return e&&Y(e)})(o)&&function(e){return W(e)||0===e}(r)?o(e)(t,n,a,r):e(t,n,a,r)}}function hr(){return e={subcmd:"contrib"},z({cmd:"globalquests",...e})
var e}function gr(e){e[1]=e[2].r}function vr(e,t,n){const a=e.slice()
return a[3]=t[n].player,a[4]=t[n].value,a[6]=n,a}function br(e){let t,n,a=e[7].message+""
return{c(){t=ae("p"),n=re(a),oe(t,"color","red")},m(e,a){ee(e,t,a),se(t,n)},p(e,t){1&t&&a!==(a=e[7].message+"")&&le(n,a)},d(e){e&&ne(t)}}}function wr(e){let t,n
function a(e,n){return 1&n&&(t=null),null==t&&(t=!!it(e[1])),t?kr:yr}gr(e)
let r=a(e,-1),o=r(e)
return{c(){o.c(),n=Z()},m(e,t){o.m(e,t),ee(e,n,t)},p(e,t){gr(e),r===(r=a(e,t))&&o?o.p(e,t):(o.d(1),o=r(e),o&&(o.c(),o.m(n.parentNode,n)))},d(e){e&&ne(n),o.d(e)}}}function yr(e){let t
return{c(){t=re("Server Error")},m(e,n){ee(e,t,n)},p:te,d(e){e&&ne(t)}}}function kr(e){let t,n,a,r=wt(e[1]),o=[]
for(let t=0;t<r.length;t+=1)o[t]=$r(vr(e,r,t))
return{c(){t=ae("table"),n=ae("tr"),n.innerHTML='<td class="header"></td> <td class="header"></td> <td class="header">Username</td> <td class="header">Kills</td>',a=ie()
for(let e=0;e<o.length;e+=1)o[e].c()
ce(n,"class","svelte-1p6satm"),ce(t,"id","world-event-contrib-table"),ce(t,"class","svelte-1p6satm")},m(e,r){ee(e,t,r),se(t,n),se(t,a)
for(let e=0;e<o.length;e+=1)o[e]&&o[e].m(t,null)},p(e,n){if(1&n){let a
for(r=wt(e[1]),a=0;a<r.length;a+=1){const s=vr(e,r,a)
o[a]?o[a].p(s,n):(o[a]=$r(s),o[a].c(),o[a].m(t,null))}for(;a<o.length;a+=1)o[a].d(1)
o.length=r.length}},d(e){e&&ne(t),ue(o,e)}}}function Cr(e){let t,n,a,r
return{c(){t=ae("a"),n=ae("img"),de(n.src,a=S+"guilds/"+e[3].guild_id+"_mini.png")||ce(n,"src",a),ce(n,"alt","guild logo"),ce(n,"class","svelte-1p6satm"),ce(t,"href",r=""+(me+e[3].guild_id))},m(e,a){ee(e,t,a),se(t,n)},p(e,o){1&o&&!de(n.src,a=S+"guilds/"+e[3].guild_id+"_mini.png")&&ce(n,"src",a),1&o&&r!==(r=""+(me+e[3].guild_id))&&ce(t,"href",r)},d(e){e&&ne(t)}}}function $r(e){let t,n,a,r,o,s,l,i,c,u,f,d,m,p=e[3].name+"",h=e[4]+"",g=e[3].guild_id&&Cr(e)
return{c(){t=ae("tr"),n=ae("td"),n.textContent=`${e[6]+1}`,a=ie(),r=ae("td"),g&&g.c(),o=ie(),s=ae("td"),l=ae("a"),i=re(p),u=ie(),f=ae("td"),d=re(h),m=ie(),ce(l,"href",c=""+(fe+e[3].name)),ce(t,"class","svelte-1p6satm")},m(e,c){ee(e,t,c),se(t,n),se(t,a),se(t,r),g&&g.m(r,null),se(t,o),se(t,s),se(s,l),se(l,i),se(t,u),se(t,f),se(f,d),se(t,m)},p(e,t){e[3].guild_id?g?g.p(e,t):(g=Cr(e),g.c(),g.m(r,null)):g&&(g.d(1),g=null),1&t&&p!==(p=e[3].name+"")&&le(i,p),1&t&&c!==(c=""+(fe+e[3].name))&&ce(l,"href",c),1&t&&h!==(h=e[4]+"")&&le(d,h)},d(e){e&&ne(t),g&&g.d()}}}function Lr(e){let t
return{c(){t=re("Loading...")},m(e,n){ee(e,t,n)},p:te,d(e){e&&ne(t)}}}function Vr(e){let t,n,a={ctx:e,current:null,token:null,hasCatch:!0,pending:Lr,then:wr,catch:br,value:2,error:7}
return vt(n=e[0],a),{c(){t=Z(),a.block.c()},m(e,n){ee(e,t,n),a.block.m(e,a.anchor=n),a.mount=()=>t.parentNode,a.anchor=t},p(t,[r]){e=t,a.ctx=e,1&r&&n!==(n=e[0])&&vt(n,a)||bt(a,e,r)},i:te,o:te,d(e){e&&ne(t),a.block.d(e),a.token=null,a=null}}}function Dr(e,t,n){let{promise:a}=t
return e.$$set=e=>{"promise"in e&&n(0,a=e.promise)},[a]}class xr extends Q{constructor(e){super(),J(this,e,Dr,Vr,X,{promise:0})}}let Ar=0
const Sr=()=>({promise:U(hr)})
function Mr(){const e=a("world-event-contrib")
var t
t=e,Ar?Ar.$set(Sr()):Ar=new xr({props:Sr(),target:t}),$(e).dialog({title:"Top 100 Event Contributers",minWidth:300,height:300,zIndex:9999})}function Nr(e){$(`#actionList li.creature-${e.toString()} a.create-group`).hide()}const Hr=["hideChampionsGroup","hideElitesGroup","hideSEGroup","hideTitanGroup","hideLegendaryGroup"]
function Br(e,t){var n
v(e)&&(n=t+1,$.subscribe(K,s(Nr,n)),Nr(t+1))}function qr(e,t,n){const a=e.slice()
return a[10]=t[n].msg,a[11]=t[n].type,a[12]=t[n].count,a}function Tr(e){let t,n,a,r=e[12]+""
return{c(){t=ae("div"),n=re("x"),a=re(r),ce(t,"class","count svelte-1leyf3b")},m(e,r){ee(e,t,r),se(t,n),se(t,a)},p(e,t){1&t&&r!==(r=e[12]+"")&&le(a,r)},d(e){e&&ne(t)}}}function Er(e,t){let n,a,r,o,s,l,i,c=t[10]+"",u=t[12]>1&&Tr(t)
function f(){return t[3](t[10])}return{key:e,first:null,c(){n=ae("div"),a=re(c),r=ie(),u&&u.c(),o=ie(),ce(n,"class",s="fsh-message "+t[11]+" svelte-1leyf3b"),this.first=n},m(e,t){ee(e,n,t),se(n,a),se(n,r),u&&u.m(n,null),se(n,o),l||(i=pe(n,"click",f),l=!0)},p(e,r){t=e,1&r&&c!==(c=t[10]+"")&&le(a,c),t[12]>1?u?u.p(t,r):(u=Tr(t),u.c(),u.m(n,o)):u&&(u.d(1),u=null),1&r&&s!==(s="fsh-message "+t[11]+" svelte-1leyf3b")&&ce(n,"class",s)},d(e){e&&ne(n),u&&u.d(),l=!1,i()}}}function Gr(e){let t,n=[],a=new Map,r=wt(e[1](e[0]))
const o=e=>e[10]
for(let t=0;t<r.length;t+=1){let s=qr(e,r,t),l=o(s)
a.set(l,n[t]=Er(l,s))}return{c(){for(let e=0;e<n.length;e+=1)n[e].c()
t=Z()},m(e,a){for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(e,a)
ee(e,t,a)},p(e,[s]){7&s&&(r=wt(e[1](e[0])),n=yt(n,s,o,1,e,r,a,t.parentNode,kt,Er,t,qr))},i:te,o:te,d(e){e&&ne(t)
for(let t=0;t<n.length;t+=1)n[t].d(e)}}}function jr(e,t,n){const a=document.body.appendChild(document.createElement("iframe"))
window.requestAnimationFrame=a.contentWindow.requestAnimationFrame,window.cancelAnimationFrame=a.contentWindow.cancelAnimationFrame,a.hidden=!0
let r=[]
const o=window.$("#messageCenter").data().hcsWorldMessageCenter,s=function*(){for(let e=0;;e++)yield e}()
function l(){o._reposition()}function i(e){n(0,r=r.filter((({msg:t})=>t!==e))),l()}o._displayMessage=async function(e,t,a=3e3){const o=s.next().value
n(0,r=[...r,{msg:e,type:t,expire:o}]),setTimeout((()=>{n(0,r=r.filter((({expire:e})=>e!==o)))}),a),await he(),l()}
return[r,e=>Ct(e,"msg").map((({msg:t,type:n})=>({msg:t,type:n,count:e.filter((({msg:e})=>e===t)).length}))),i,e=>i(e)]}class Pr extends Q{constructor(e){super(),J(this,e,jr,Gr,X,{})}}let Fr=0
function Rr(e){Fr[e.name]?Fr[e.name].seen&&(Fr[e.name].seen+=1):(Fr[e.name]={seen:1},function(e,t){t.creature_class=e.creature_class,t.image_id=e.image_id,t.level=Number(e.level),t.type=e.type}(e,Fr[e.name]))}function _r(e,t,n){return t?e(t,n):n}function Ir(e,t){const n=e||{}
return n.min=_r(Math.min,n.min,t),n.max=_r(Math.max,n.max,t),n}const Or=["attack","armor","damage","defense","hp"]
function Wr(e,t,n){const a=Ir(t[n],Number(e[n]));(function(e,t){return!e||e.min!==t.min||e.max!==t.max})(t[n],a)&&(t[n]=a)}function Yr(e,t){e[t.name]=Ir(e[t.name],Number(t.value))}function Kr(e){Fr||(Fr={}),Rr(e),function(e,t){Or.forEach(s(Wr,e,t))}(e,Fr[e.name]),function(e,t){(function(e){return e.enhancements&&e.enhancements.length>0})(e)&&(t.enhancements=t.enhancements||{},e.enhancements.forEach(s(Yr,t.enhancements)))}(e,Fr[e.name]),mt("fsh_monsterLog",Fr)}async function zr(){!function(e){Fr=e||{}}(await dt("fsh_monsterLog"))}const Ur=[]
function Qr(e){var n
Sa(e)||(n=e.response.data,t.showMonsterLog&&Kr(n))}function Jr(e,t){return e.id===t.id}async function Xr(e,t){if(6!==e.type||function(e){if(Ur.find(s(Jr,e.data)))return!0
Ur.push(e.data)}(e))return
Qr(await qa(e.data.id,t))}function Zr(){t.showMonsterLog&&(GameData.actions().forEach(Xr),D("NewMap","MonsterLog"))}let eo=""
const to=()=>eo
function no(){return $t({subcmd:"scouttower"})}function ao(e,[t,n,a]){const r=e.insertCell(-1)
return r.colSpan=t,a&&(r.className="header"),o(r,n()),r}function ro(e,t,n){const a=e.insertRow(-1)
return n&&(a.className="fshBlue"),function(e,t){t.forEach(s(ao,e))}(a,t),a}function oo(e,t){ro(e,t[0],t[1])}function so(e,t){t.forEach(s(oo,e))}let lo=0,io=0,co=0,uo=0,fo=0,mo=0,po=0,ho=0
const go=()=>lo,vo=()=>io,bo=()=>co,wo=()=>uo,yo=()=>fo,ko=()=>mo,Co=()=>po,$o=()=>ho
function Lo(){lo=Rn("Current"),io=Rn("Kills"),co=Rn("Member"),uo=Rn("% of Total"),fo=Rn("Status"),mo=Rn("Titan HP"),po=Rn("Total"),ho=Rn("Your Guild")}let Vo=0,Do=0,xo=0,Ao=0,So=0,Mo=0,No=0,Ho=0,Bo=0
const qo=()=>Vo,To=()=>Do,Eo=()=>xo,Go=()=>Ao,jo=()=>So,Po=()=>Mo,Fo=()=>No,Ro=()=>Ho,_o=()=>Bo
function Io(){Vo=et({innerHTML:"&nbsp;"}),Do=et({innerHTML:"&nbsp;"}),xo=et(),Ao=et(),So=et(),Mo=et(),No=et(),Ho=et(),Bo=et()}let Oo=0
const Wo=()=>Oo
function Yo(){for(;Oo.rows.length>8;)Oo.deleteRow(8)}function Ko(){const e=et()
return o(e,Eo()),tt(e,"/"),o(e,Go()),e}function zo(e){const t=et()
return o(t,e),tt(t,"%"),t}let Uo=0,Qo=0,Jo=""
const Xo=()=>Qo,Zo=()=>Jo
function es(){Qo=null,Uo&&!N("fshHide",Uo)&&(Ze(Uo,!0),ge("&nbsp;",Vo),ge("&nbsp;",Do),r("",xo),r("",Ao),r("",So),r("",Mo),r("",No),ge("",Ho),ge("",Bo),Yo())}function ts(e){return 0===e.type&&(Qo=e.base_creature_id,Jo=`(${e.x},${e.y})`,!0)}function ns(){if(Uo)Ze(Uo,!1)
else{const e=a("actionContainer")
Uo=n({className:"fshActionBox titanInfo"}),Io(),Oo=Lt({className:"fshCenter"}),Lo(),so(Oo,[[[[5,qo,!0],[1,To,!0]]],[[[2,ko,!0],[4,$o,!0]]],[[[2,Ko],[4,jo]]],[[[2,go,!0],[4,s(zo,Po())]],!0],[[[2,Co,!0],[4,s(zo,Fo())]],!0],[[[2,yo,!0],[4,Ro]],!0],[[[6,_o]]],[[[2,bo,!0],[2,vo,!0],[2,wo,!0]]]]),o(Uo,Wo()),o(e,Uo)}}function as(e){return e<=0?'<span class="fshGreen cooldown">No active cooldown</span>':`<span class="fshMaroon cooldown">Cooldown until: ${function(e){const t=new Date(At()+1e3*e)
return`${Ht(t.getHours())}:${Ht(t.getMinutes())} ${Ht(t.getDate())}/${ve[t.getMonth()]}/${t.getFullYear()}`}(e)}</span>`}function rs(e){return at(xt(e.max_hp-e.current_hp,e.kills),2)}function os(e){return at(100*e.kills/e.max_hp,2)}function ss(e){!function(e){[[Dt(e.creature.name),qo],[Zo(),To],[e.current_hp,Eo],[e.max_hp,Go],[e.kills,jo],[rs(e),Po],[os(e),Fo]].forEach((([e,t])=>r(e,t())))}(e),ge(function(e){return Vt(e.kills,e.max_hp,e.current_hp)}(e),Ro()),ge(as(e.cooldown),_o())}function ls(e,t){return[[[2,()=>Rn(t.player.name)],[2,()=>Rn(t.kills.toString())],[2,()=>Rn(`${at(100*t.kills/e.kills,2)}%`)]]]}function is(e){return e.realm&&e.creature.base_id===Xo()&&e.realm===to()}function cs(e){const t=e.find(is)
t&&(ss(t),function(e){if(Yo(),!e.contributors)return
const t=e.contributors.map(s(ls,e))
so(Wo(),t)}(t))}let us=null
const fs=e=>e?.s&&it(e.r),ds=e=>t.showTitanInfo&&it(e)&&e.some(ts)
async function ms(){!function(e,t){fs(t)&&(cs(t.r),ds(GameData.realm().dynamic)?us=window.setTimeout(e,3e4):es())}(ms,await U(no))}function ps(e){us&&(window.clearTimeout(us),us=null),ds(e)?(ns(),ms()):es()}function hs(e){var t
e.dynamic&&(t=e.name,eo=t,ps(e.dynamic))}function gs(e,t){t.realm?.name&&hs(t.realm)}function vs(e,t,n){const a=e.slice()
return a[5]=t[n],a[7]=n,a}function bs(e){let t,n=e[1](e[7])+""
return{c(){t=re(n)},m(e,n){ee(e,t,n)},p:te,d(e){e&&ne(t)}}}function ws(e){let t,n,a,r
return n=new Tt({props:{$$slots:{default:[bs]},$$scope:{ctx:e}}}),n.$on("click",(function(...t){return e[3](e[5],e[7],...t)})),{c(){t=ae("li"),Ve(n.$$.fragment),a=ie()},m(e,o){ee(e,t,o),De(n,t,null),se(t,a),r=!0},p(t,a){e=t
const r={}
256&a&&(r.$$scope={dirty:a,ctx:e}),n.$set(r)},i(e){r||(ye(n.$$.fragment,e),r=!0)},o(e){$e(n.$$.fragment,e),r=!1},d(e){e&&ne(t),xe(n)}}}function ys(e){let t,n,a=wt(qt(16,e[0])),r=[]
for(let t=0;t<a.length;t+=1)r[t]=ws(vs(e,a,t))
const o=e=>$e(r[e],1,1,(()=>{r[e]=null}))
return{c(){t=ae("ul")
for(let e=0;e<r.length;e+=1)r[e].c()
ce(t,"class","svelte-1k3xw12")},m(e,a){ee(e,t,a)
for(let e=0;e<r.length;e+=1)r[e]&&r[e].m(t,null)
n=!0},p(e,[n]){if(7&n){let s
for(a=wt(qt(16,e[0])),s=0;s<a.length;s+=1){const o=vs(e,a,s)
r[s]?(r[s].p(o,n),ye(r[s],1)):(r[s]=ws(o),r[s].c(),ye(r[s],1),r[s].m(t,null))}for(ke(),s=a.length;s<r.length;s+=1)o(s)
Ce()}},i(e){if(!n){for(let e=0;e<a.length;e+=1)ye(r[e])
n=!0}},o(e){r=r.filter(Boolean)
for(let e=0;e<r.length;e+=1)$e(r[e])
n=!1},d(e){e&&ne(t),ue(r,e)}}}function ks(e,t,n){const a=Le()
let{members:r=[]}=t
const o=e=>`Buff ${Ae[e]} 16`
function s(e,t,n){n.target.blur(),Bt(`${Se}&players=${e.join(",")}`,"fsQuickBuff",618,1e3,",scrollbars"),a("buffBatch",o(t))}return e.$$set=e=>{"members"in e&&n(0,r=e.members)},[r,o,s,(e,t,n)=>s(e,t,n)]}class Cs extends Q{constructor(e){super(),J(this,e,ks,ys,X,{members:0})}}function $s(e,t){return e>10*t||e<t?e:10*t}const Ls=[["levelValue","level"],["attackValue","attack"],["attackBonus","bonus_attack"],["defenseValue","defense"],["defenseBonus","bonus_defense"],["armorValue","armor"],["armorBonus","bonus_armor"],["damageValue","damage"],["damageBonus","bonus_damage"],["hpValue","hp"],["hpBonus","bonus_hp"],["killStreakValue","killstreak"]]
function Vs(e,t,n){e[n[0]]=Number(t[n[1]])}const Ds=[["counterAttackLevel","Counter Attack"],["doublerLevel","Doubler"],["deathDealerLevel","Death Dealer"],["darkCurseLevel","Dark Curse"],["holyFlameLevel","Holy Flame"],["constitutionLevel","Constitution"],["sanctuaryLevel","Sanctuary"],["flinchLevel","Flinch"],["nightmareVisageLevel","Nightmare Visage"],["superEliteSlayerLevel","Super Elite Slayer"],["fortitudeLevel","Fortitude"],["chiStrikeLevel","Chi Strike"],["terrorizeLevel","Terrorize"],["barricadeLevel","Barricade"],["reignOfTerrorLevel","Reign Of Terror"],["anchoredLevel","Anchored"],["severeConditionLevel","Severe Condition"],["entrenchLevel","Entrench"],["cloakLevel","Cloak"]]
function xs(e,t,n){e[n[0]]=t[n[1]]||0}function As(e){if(!e)return
const t=Et(e._skills),n={}
return function(e,t){Ls.forEach(s(Vs,e,t))}(n,e),function(e,t){Ds.forEach(s(xs,e,t))}(n,t),n.superEliteSlayerMultiplier=nt(.002*n.superEliteSlayerLevel,2),Pt(n.armorValue)&&function(e){e.attackValue=$s(e.attackBonus,e.levelValue),e.defenseValue=$s(e.defenseBonus,e.levelValue),e.armorValue=$s(e.armorBonus,e.levelValue),e.damageValue=$s(e.damageBonus,e.levelValue),e.hpValue=e.hpBonus}(n),n}const Ss=Ne(["statusStore","Done."])
let Ms=[]
const Ns=Me(Ss,((e,t)=>{const n=Ms.find((([t])=>t===e[0]))
n?[,n[1]]=e:Ms=[...Ms,e]
const a=Ms.find((([,e])=>"Done."!==e))
t(a?.[1]??"Done.")})),Hs=Ne(0)
const Bs=Me(Hs,((e,t)=>{!async function(e,t){if(!e)return
Ss.set(["relicStore","Processing defending guild relics ... "])
const n=await Ft(e)
if(!n)return void Ss.set(["relicStore","AJAX Error"])
const a=n.r.relics.length,r=1===a?1.5:nt(1-a/10,2)
t({noOfRelics:a,relicMultiplier:r,leadDefenderBonus:`${String(100*r)}%`}),Ss.set(["relicStore","Done."])}(e,t)})),qs=Ne([])
const Ts=Me(qs,((e,t)=>{!async function(e,t){if(!e.length)return
Ss.set(["defendersStore","Processing defending group stats ... "])
const n=[]
await jt(e.map((async(e,a)=>{const r=await Gt(e)
n.push([a,As(r)]),t(n)}))),Ss.set(["defendersStore","Done."])}(e,t)})),Es=Me(Ts,((e,t)=>{const n=e?.find((([e])=>0===e))
n&&t(n[1])})),Gs=(e,t,n)=>Math.ceil(n*(0===t?e:He))
function js(e,t,[n,a]){return{armorValue:t.armorValue+Gs(e,n,a.armorValue),attackValue:t.attackValue+Gs(e,n,a.attackValue),damageValue:t.damageValue+Gs(e,n,a.damageValue),cloaked:t.cloaked+(a.cloakLevel?1:0),defenseValue:t.defenseValue+Gs(e,n,a.defenseValue),hpValue:t.hpValue+Gs(e,n,a.hpValue)}}const Ps=Me([Bs,Ts],(([e,t],n)=>{if(!e?.relicMultiplier||!t?.length)return
const a=t?.reduce(s(js,e.relicMultiplier),{armorValue:0,attackValue:0,damageValue:0,cloaked:0,defenseValue:0,hpValue:0})
n(a)})),Fs=Ne(0),Rs=e=>e.members[0].name===GameData.player().username
async function _s(e,t){if(!e)return
Ss.set(["groupStore","Processing attacking group stats ... "])
const n=await async function(){const e=await Ot()
return e?.r?.find(Rs)?.id}(),a=n&&await async function(e){const t=await Rt(e)
return Wt(t?.r?.attributes)}(n),r=a&&await async function(e){const t=await _t(),n=It(t)
return e?.map(((e,t)=>e-n[t]))}(a)
r&&t({attack:r[0],defense:r[1],armor:r[2],hp:r[3],damage:r[4]}),Ss.set(["groupStore","Done."])}const Is=Me(Fs,((e,t)=>{_s(e,t)})),Os=(e,t,n)=>Math.ceil(e*Be(t,0)*n),Ws=(e,t)=>Os(e,t,.0025),Ys=(e,t)=>Os(e,t,.001),Ks=Ys,zs=Ys,Us=Ys,Qs=Ys,Js=Ys,Xs=(e,t)=>Math.ceil(e*(1+.001*Be(t,0))),Zs=(e,t)=>Math.ceil(e*(1-t*qe)),el=Ne([]),tl=Me(el,((e,t)=>{e&&t(Et(e))})),nl=Me([tl,Is],(([e,t],n)=>{if(!e||!t)return
const a=Xs(t.defense,e.Constitution),r=Ks(a,e.Fortitude),o=t.hp+r,s=zs(o,e["Chi Strike"])
n({dmgWithChiStrike:t.damage+s,defWithConst:a,hpWithFortitude:o,nmv:Ws(t.attack,e["Nightmare Visage"]),sanctuary:Us(t.armor,e.Sanctuary)})}))
const al=Me([nl,Es,Is],(function([e,t,n],a){if(!e||!t||!n)return
const r=n.attack-e.nmv,o=Qs(r,t.flinchLevel),s=Js(e.dmgWithChiStrike,t.terrorizeLevel)
a({attack:r-o,defense:e.defWithConst+e.nmv,armor:n.armor+e.sanctuary,hp:e.hpWithFortitude,damage:e.dmgWithChiStrike-s})})),rl=Me([Es,Ps],(([e,t],n)=>{if(!e||!t)return
const a=Ws(t.attackValue,e.nightmareVisageLevel),r=Xs(t.defenseValue,e.constitutionLevel),o=Ks(r,e.fortitudeLevel),s=t.hpValue+o,l=zs(s,e.chiStrikeLevel),i=t.damageValue+l
n({attackWithNmv:t.attackValue-a,chiStrike:e.chiStrikeLevel,cloak:e.cloakLevel?"Yes":"No",dmgWithChiStrike:i,defWithConst:r,hpWithFortitude:s,nmv:a,sanctuary:Us(t.armorValue,e.sanctuaryLevel)})}))
const ol=Me([tl,rl,Ps],(function([e,t,n],a){if(!e||!t||!n)return
const r=Qs(t.attackWithNmv,e.Flinch),o=t.defWithConst+t.nmv,s=Js(t.dmgWithChiStrike,e.Terrorize)
a({attack:t.attackWithNmv-r,dc225:Zs(o,225),dc175:Zs(o,175),defense:o,armor:n.armorValue+t.sanctuary,hp:t.hpWithFortitude,damage:t.dmgWithChiStrike-s})})),sl=Me(Bs,((e,t)=>{t({noOfRelics:e?.noOfRelics??"",leadDefenderBonus:e?.leadDefenderBonus??""})})),ll=Me(Es,((e,t)=>{if(!e)return t("")
e.cloakLevel?t("Yes"):t("No")})),il=Me(Ps,((e,t)=>{t({armorValue:e?.armorValue??"",attackValue:e?.attackValue??"",damageValue:e?.damageValue??"",cloaked:e?.cloaked??"",defenseValue:e?.defenseValue??"",hpValue:e?.hpValue??""})})),cl=Me(Ts,((e,t)=>{t(e?.length??"")})),ul=Me(ol,((e,t)=>{t({attack:e?.attack??"",dc225:e?.dc225??"",dc175:e?.dc175??"",defense:e?.defense??"",armor:e?.armor??"",hp:e?.hp??"",damage:e?.damage??""})})),fl=e=>({attack:e?.attack??"",defense:e?.defense??"",armor:e?.armor??"",hp:e?.hp??"",damage:e?.damage??""}),dl=Me(Is,((e,t)=>{t(fl(e))})),ml=Me(al,((e,t)=>{t(fl(e))}))
function pl(e,t,n){const a=e.slice()
return a[6]=t[n].id,a[7]=t[n].username,a}function hl(e){let t,n,a,r,o=e[7]+""
return{c(){t=ae("a"),n=re(o),r=re(" "),ce(t,"href",a=""+(Te+e[6])),ce(t,"class","svelte-3priew")},m(e,a){ee(e,t,a),se(t,n),ee(e,r,a)},p(e,r){1&r&&o!==(o=e[7]+"")&&le(n,o),1&r&&a!==(a=""+(Te+e[6]))&&ce(t,"href",a)},d(e){e&&(ne(t),ne(r))}}}function gl(e){let t,n,a,r=(e[0].length||"")+"",o=wt(e[0]),s=[]
for(let t=0;t<o.length;t+=1)s[t]=hl(pl(e,o,t))
return{c(){t=re(r),n=re(" Offline guild members not at relic:\n"),a=ae("div")
for(let e=0;e<s.length;e+=1)s[e].c()
ce(a,"class","missing svelte-3priew")},m(e,r){ee(e,t,r),ee(e,n,r),ee(e,a,r)
for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(a,null)},p(e,[n]){if(1&n&&r!==(r=(e[0].length||"")+"")&&le(t,r),1&n){let t
for(o=wt(e[0]),t=0;t<o.length;t+=1){const r=pl(e,o,t)
s[t]?s[t].p(r,n):(s[t]=hl(r),s[t].c(),s[t].m(a,null))}for(;t<s.length;t+=1)s[t].d(1)
s.length=o.length}},i:te,o:te,d(e){e&&(ne(t),ne(n),ne(a)),ue(s,e)}}}function vl(e,t,n){let{members:a=[]}=t,r=[]
const o=[({username:e})=>!a.includes(e),({last_login:e})=>e,({last_login:e})=>e<St(),({last_login:e})=>e>Mt(),({level:e})=>e<400||e>421,({level:e})=>e<441||e>450],s=e=>o.every((t=>t(e))),l=({username:e},{username:t})=>Ee(e,t)
return Hs.subscribe((e=>{!async function(e){const t=await Yt(e)
it(t)&&n(0,r=t.filter(s).sort(l))}(e)})),e.$$set=e=>{"members"in e&&n(1,a=e.members)},[r,a]}class bl extends Q{constructor(e){super(),J(this,e,vl,gl,X,{members:1})}}function wl(e){let t,n,a
return n=new Cs({props:{members:e[10]}}),n.$on("buffBatch",e[11]),{c(){t=ae("div"),Ve(n.$$.fragment),ce(t,"class","buff-links svelte-1qul0wc")},m(e,r){ee(e,t,r),De(n,t,null),a=!0},p:te,i(e){a||(ye(n.$$.fragment,e),a=!0)},o(e){$e(n.$$.fragment,e),a=!1},d(e){e&&ne(t),xe(n)}}}function yl(e){let t,n,a,r,o,s,l,i
return{c(){t=ae("div"),t.textContent="Processing",n=ie(),a=ae("div"),r=re(e[2]),o=ie(),s=ae("div"),s.textContent="Assumptions",l=ie(),i=ae("div"),i.textContent="Above calculations include Constitution, Fortitude, Nightmare Visage, Chi Strike, Sanctuary,\n        Terrorize and Flinch bonus calculations (in that order) on both the defending group and\n        attacking group.",ce(t,"class","b-top svelte-1qul0wc"),ce(a,"class","proc-stat svelte-1qul0wc"),ce(s,"class","b-top svelte-1qul0wc"),ce(i,"class","assume svelte-1qul0wc")},m(e,c){ee(e,t,c),ee(e,n,c),ee(e,a,c),se(a,r),ee(e,o,c),ee(e,s,c),ee(e,l,c),ee(e,i,c)},p(e,t){4&t&&le(r,e[2])},d(e){e&&(ne(t),ne(n),ne(a),ne(o),ne(s),ne(l),ne(i))}}}function kl(e){let t,n,a
return{c(){t=ae("button"),t.textContent="Fetch Stats",ce(t,"class","custombutton"),ce(t,"type","button")},m(r,o){ee(r,t,o),n||(a=pe(t,"click",e[12]),n=!0)},p:te,d(e){e&&ne(t),n=!1,a()}}}function Cl(e){let t,n,a,r,o,s,l,i,c,u,f,d,m,p,h,g,v,b,w,y,k,C,$,L,V,D,x,A,S,M,N,H,B,q,T,E,G,j,P,F,R,_,I,O,W,Y,K,z,U,Q,J,X,Z,te,oe,ue,fe,de,me,pe,he,ge,ve,be,we,ke,Ce,Le,Ae,Se,Me,Ne,He,Be,qe,Te,Ee,Ge,je,Pe,Fe,Re,_e,Ie,Oe,We,Ye,Ke,ze,Ue,Qe,Je,Xe,Ze,et,tt,nt,at,rt,ot,st,lt,it,ct,ut,ft,dt,mt,pt,ht,gt,vt,bt,wt,yt,kt,Ct,$t,Lt,Vt,Dt,xt,At,St,Mt,Nt,Ht,Bt=e[3].noOfRelics+"",qt=e[3].leadDefenderBonus+"",Tt=e[5].attackValue+"",Et=e[6].attack+"",Gt=e[5].defenseValue+"",jt=e[6].defense+"",Pt=e[5].armorValue+"",Ft=e[6].armor+"",Rt=e[5].damageValue+"",_t=e[6].damage+"",It=e[5].hpValue+"",Ot=e[6].hp+"",Wt=e[5].cloaked+"",Yt=e[6].dc225+"",Kt=e[6].dc175+"",zt=e[8].attack+"",Ut=e[9].attack+"",Qt=e[8].defense+"",Jt=e[9].defense+"",Xt=e[8].armor+"",Zt=e[9].armor+"",en=e[8].damage+"",tn=e[9].damage+"",nn=e[8].hp+"",an=e[9].hp+""
return Nt=new bl({props:{members:e[10]}}),{c(){t=ae("div"),n=ae("div"),n.textContent="Defending Guild Stats",a=ie(),r=ae("div"),o=ae("div"),o.textContent="Relic Count:",s=ae("div"),l=re(Bt),i=ie(),c=ae("div"),c.textContent="Lead Defender Bonus:",u=ae("div"),f=re(qt),d=ie(),m=ae("div"),m.textContent="Lead Defender Cloaked:",p=ae("div"),h=re(e[4]),g=ie(),v=ae("div"),v.textContent="Other Defender Stats",b=ie(),w=ae("div"),y=ae("div"),y.textContent="Raw Attack:",k=ae("div"),C=re(Tt),$=ie(),L=ae("div"),L.textContent="Attack w/ buffs:",V=ae("div"),D=re(Et),x=ie(),A=ae("div"),A.textContent="Raw Defense:",S=ae("div"),M=re(Gt),N=ie(),H=ae("div"),H.textContent="Defense w/buffs:",B=ae("div"),q=re(jt),T=ie(),E=ae("div"),E.textContent="Raw Armor:",G=ae("div"),j=re(Pt),P=ie(),F=ae("div"),F.textContent="Armor w/ buffs:",R=ae("div"),_=re(Ft),I=ie(),O=ae("div"),O.textContent="Raw Damage:",W=ae("div"),Y=re(Rt),K=ie(),z=ae("div"),z.textContent="Damage w/ buffs:",U=ae("div"),Q=re(_t),J=ie(),X=ae("div"),X.textContent="Raw HP:",Z=ae("div"),te=re(It),oe=ie(),ue=ae("div"),ue.textContent="HP w/ buffs:",fe=ae("div"),de=re(Ot),me=ie(),pe=ae("div"),pe.textContent="Cloaked:",he=ae("div"),ge=re(Wt),ve=ie(),be=ae("div"),be.textContent="Processed:",we=ae("div"),ke=re(e[7]),Ce=ie(),Le=ae("div"),Ae=ae("div"),Ae.textContent="Adjusted Defense Values",Se=ie(),Me=ae("div"),Ne=ae("div"),Ne.textContent="DC225:",He=ae("div"),Be=re(Yt),qe=ie(),Te=ae("div"),Te.textContent="DC175:",Ee=ae("div"),Ge=re(Kt),je=ie(),Pe=ae("div"),Pe.textContent=" ",Fe=ie(),Re=ae("div"),Re.textContent="Attacking Group Stats",_e=ie(),Ie=ae("div"),Oe=ae("div"),Oe.textContent="Raw Group Attack:",We=ae("div"),Ye=re(zt),Ke=ie(),ze=ae("div"),ze.textContent="Group Attack w/ buffs:",Ue=ae("div"),Qe=re(Ut),Je=ie(),Xe=ae("div"),Xe.textContent="Raw Group Defense:",Ze=ae("div"),et=re(Qt),tt=ie(),nt=ae("div"),nt.textContent="Group Defense w/ buffs:",at=ae("div"),rt=re(Jt),ot=ie(),st=ae("div"),st.textContent="Raw Group Armor:",lt=ae("div"),it=re(Xt),ct=ie(),ut=ae("div"),ut.textContent="Group Armor w/ buffs:",ft=ae("div"),dt=re(Zt),mt=ie(),pt=ae("div"),pt.textContent="Raw Group Damage:",ht=ae("div"),gt=re(en),vt=ie(),bt=ae("div"),bt.textContent="Group Damage w/ buffs:",wt=ae("div"),yt=re(tn),kt=ie(),Ct=ae("div"),Ct.textContent="Raw Group HP:",$t=ae("div"),Lt=re(nn),Vt=ie(),Dt=ae("div"),Dt.textContent="Group HP w/ buffs:",xt=ae("div"),At=re(an),St=ie(),Mt=ae("div"),Ve(Nt.$$.fragment),ce(n,"class","b-top svelte-1qul0wc"),ce(o,"class","svelte-1qul0wc"),ce(s,"class","svelte-1qul0wc"),ce(c,"class","svelte-1qul0wc"),ce(u,"class","svelte-1qul0wc"),ce(m,"class","svelte-1qul0wc"),ce(p,"class","svelte-1qul0wc"),ce(r,"class","stat-grid svelte-1qul0wc"),ce(v,"class","b-top svelte-1qul0wc"),ce(y,"class","svelte-1qul0wc"),ce(k,"class","svelte-1qul0wc"),ce(L,"class","svelte-1qul0wc"),ce(V,"class","svelte-1qul0wc"),ce(A,"class","svelte-1qul0wc"),ce(S,"class","svelte-1qul0wc"),ce(H,"class","svelte-1qul0wc"),ce(B,"class","svelte-1qul0wc"),ce(E,"class","svelte-1qul0wc"),ce(G,"class","svelte-1qul0wc"),ce(F,"class","svelte-1qul0wc"),ce(R,"class","svelte-1qul0wc"),ce(O,"class","svelte-1qul0wc"),ce(W,"class","svelte-1qul0wc"),ce(z,"class","svelte-1qul0wc"),ce(U,"class","svelte-1qul0wc"),ce(X,"class","svelte-1qul0wc"),ce(Z,"class","svelte-1qul0wc"),ce(ue,"class","svelte-1qul0wc"),ce(fe,"class","svelte-1qul0wc"),ce(pe,"class","svelte-1qul0wc"),ce(he,"class","svelte-1qul0wc"),ce(be,"class","svelte-1qul0wc"),ce(we,"class","svelte-1qul0wc"),ce(w,"class","stat-grid svelte-1qul0wc"),ce(t,"class","middle svelte-1qul0wc"),ce(Ae,"class","b-top svelte-1qul0wc"),ce(Ne,"class","svelte-1qul0wc"),ce(He,"class","svelte-1qul0wc"),ce(Te,"class","svelte-1qul0wc"),ce(Ee,"class","svelte-1qul0wc"),ce(Pe,"class","svelte-1qul0wc"),ce(Me,"class","stat-grid svelte-1qul0wc"),ce(Re,"class","b-top svelte-1qul0wc"),ce(Oe,"class","svelte-1qul0wc"),ce(We,"class","svelte-1qul0wc"),ce(ze,"class","svelte-1qul0wc"),ce(Ue,"class","svelte-1qul0wc"),ce(Xe,"class","svelte-1qul0wc"),ce(Ze,"class","svelte-1qul0wc"),ce(nt,"class","svelte-1qul0wc"),ce(at,"class","svelte-1qul0wc"),ce(st,"class","svelte-1qul0wc"),ce(lt,"class","svelte-1qul0wc"),ce(ut,"class","svelte-1qul0wc"),ce(ft,"class","svelte-1qul0wc"),ce(pt,"class","svelte-1qul0wc"),ce(ht,"class","svelte-1qul0wc"),ce(bt,"class","svelte-1qul0wc"),ce(wt,"class","svelte-1qul0wc"),ce(Ct,"class","svelte-1qul0wc"),ce($t,"class","svelte-1qul0wc"),ce(Dt,"class","svelte-1qul0wc"),ce(xt,"class","svelte-1qul0wc"),ce(Ie,"class","stat-grid svelte-1qul0wc"),ce(Le,"class","right svelte-1qul0wc"),ce(Mt,"class","bottom b-top svelte-1qul0wc")},m(e,ne){ee(e,t,ne),se(t,n),se(t,a),se(t,r),se(r,o),se(r,s),se(s,l),se(r,i),se(r,c),se(r,u),se(u,f),se(r,d),se(r,m),se(r,p),se(p,h),se(t,g),se(t,v),se(t,b),se(t,w),se(w,y),se(w,k),se(k,C),se(w,$),se(w,L),se(w,V),se(V,D),se(w,x),se(w,A),se(w,S),se(S,M),se(w,N),se(w,H),se(w,B),se(B,q),se(w,T),se(w,E),se(w,G),se(G,j),se(w,P),se(w,F),se(w,R),se(R,_),se(w,I),se(w,O),se(w,W),se(W,Y),se(w,K),se(w,z),se(w,U),se(U,Q),se(w,J),se(w,X),se(w,Z),se(Z,te),se(w,oe),se(w,ue),se(w,fe),se(fe,de),se(w,me),se(w,pe),se(w,he),se(he,ge),se(w,ve),se(w,be),se(w,we),se(we,ke),ee(e,Ce,ne),ee(e,Le,ne),se(Le,Ae),se(Le,Se),se(Le,Me),se(Me,Ne),se(Me,He),se(He,Be),se(Me,qe),se(Me,Te),se(Me,Ee),se(Ee,Ge),se(Me,je),se(Me,Pe),se(Le,Fe),se(Le,Re),se(Le,_e),se(Le,Ie),se(Ie,Oe),se(Ie,We),se(We,Ye),se(Ie,Ke),se(Ie,ze),se(Ie,Ue),se(Ue,Qe),se(Ie,Je),se(Ie,Xe),se(Ie,Ze),se(Ze,et),se(Ie,tt),se(Ie,nt),se(Ie,at),se(at,rt),se(Ie,ot),se(Ie,st),se(Ie,lt),se(lt,it),se(Ie,ct),se(Ie,ut),se(Ie,ft),se(ft,dt),se(Ie,mt),se(Ie,pt),se(Ie,ht),se(ht,gt),se(Ie,vt),se(Ie,bt),se(Ie,wt),se(wt,yt),se(Ie,kt),se(Ie,Ct),se(Ie,$t),se($t,Lt),se(Ie,Vt),se(Ie,Dt),se(Ie,xt),se(xt,At),ee(e,St,ne),ee(e,Mt,ne),De(Nt,Mt,null),Ht=!0},p(e,t){(!Ht||8&t)&&Bt!==(Bt=e[3].noOfRelics+"")&&le(l,Bt),(!Ht||8&t)&&qt!==(qt=e[3].leadDefenderBonus+"")&&le(f,qt),(!Ht||16&t)&&le(h,e[4]),(!Ht||32&t)&&Tt!==(Tt=e[5].attackValue+"")&&le(C,Tt),(!Ht||64&t)&&Et!==(Et=e[6].attack+"")&&le(D,Et),(!Ht||32&t)&&Gt!==(Gt=e[5].defenseValue+"")&&le(M,Gt),(!Ht||64&t)&&jt!==(jt=e[6].defense+"")&&le(q,jt),(!Ht||32&t)&&Pt!==(Pt=e[5].armorValue+"")&&le(j,Pt),(!Ht||64&t)&&Ft!==(Ft=e[6].armor+"")&&le(_,Ft),(!Ht||32&t)&&Rt!==(Rt=e[5].damageValue+"")&&le(Y,Rt),(!Ht||64&t)&&_t!==(_t=e[6].damage+"")&&le(Q,_t),(!Ht||32&t)&&It!==(It=e[5].hpValue+"")&&le(te,It),(!Ht||64&t)&&Ot!==(Ot=e[6].hp+"")&&le(de,Ot),(!Ht||32&t)&&Wt!==(Wt=e[5].cloaked+"")&&le(ge,Wt),(!Ht||128&t)&&le(ke,e[7]),(!Ht||64&t)&&Yt!==(Yt=e[6].dc225+"")&&le(Be,Yt),(!Ht||64&t)&&Kt!==(Kt=e[6].dc175+"")&&le(Ge,Kt),(!Ht||256&t)&&zt!==(zt=e[8].attack+"")&&le(Ye,zt),(!Ht||512&t)&&Ut!==(Ut=e[9].attack+"")&&le(Qe,Ut),(!Ht||256&t)&&Qt!==(Qt=e[8].defense+"")&&le(et,Qt),(!Ht||512&t)&&Jt!==(Jt=e[9].defense+"")&&le(rt,Jt),(!Ht||256&t)&&Xt!==(Xt=e[8].armor+"")&&le(it,Xt),(!Ht||512&t)&&Zt!==(Zt=e[9].armor+"")&&le(dt,Zt),(!Ht||256&t)&&en!==(en=e[8].damage+"")&&le(gt,en),(!Ht||512&t)&&tn!==(tn=e[9].damage+"")&&le(yt,tn),(!Ht||256&t)&&nn!==(nn=e[8].hp+"")&&le(Lt,nn),(!Ht||512&t)&&an!==(an=e[9].hp+"")&&le(At,an)},i(e){Ht||(ye(Nt.$$.fragment,e),Ht=!0)},o(e){$e(Nt.$$.fragment,e),Ht=!1},d(e){e&&(ne(t),ne(Ce),ne(Le),ne(St),ne(Mt)),xe(Nt)}}}function $l(e){let t,n,a,r,o,s=e[0].is_owner&&wl(e)
function l(e,t){return e[1]?yl:kl}let i=l(e),c=i(e),u=e[1]&&Cl(e)
return{c(){t=ae("div"),n=ae("div"),s&&s.c(),a=ie(),c.c(),r=ie(),u&&u.c(),ce(n,"class","left svelte-1qul0wc"),ce(t,"class","body svelte-1qul0wc")},m(e,l){ee(e,t,l),se(t,n),s&&s.m(n,null),se(n,a),c.m(n,null),se(t,r),u&&u.m(t,null),o=!0},p(e,[r]){e[0].is_owner?s?(s.p(e,r),1&r&&ye(s,1)):(s=wl(e),s.c(),ye(s,1),s.m(n,a)):s&&(ke(),$e(s,1,1,(()=>{s=null})),Ce()),i===(i=l(e))&&c?c.p(e,r):(c.d(1),c=i(e),c&&(c.c(),c.m(n,null))),e[1]?u?(u.p(e,r),2&r&&ye(u,1)):(u=Cl(e),u.c(),ye(u,1),u.m(t,null)):u&&(ke(),$e(u,1,1,(()=>{u=null})),Ce())},i(e){o||(ye(s),ye(u),o=!0)},o(e){$e(s),$e(u),o=!1},d(e){e&&ne(t),s&&s.d(),c.d(),u&&u.d()}}}function Ll(e,t,n){let a,r,o,s,l,i,c,u
Ge(e,Ns,(e=>n(2,a=e))),Ge(e,sl,(e=>n(3,r=e))),Ge(e,ll,(e=>n(4,o=e))),Ge(e,il,(e=>n(5,s=e))),Ge(e,ul,(e=>n(6,l=e))),Ge(e,cl,(e=>n(7,i=e))),Ge(e,dl,(e=>n(8,c=e))),Ge(e,ml,(e=>n(9,u=e)))
let{relicData:f={}}=t
const d=f.defenders.map((e=>e.player_name))
let m=!1
return je((()=>{n(1,m=!1),Hs.set(0),qs.set([]),Fs.set(0),el.set([])})),e.$$set=e=>{"relicData"in e&&n(0,f=e.relicData)},[f,m,a,r,o,s,l,i,c,u,d,function(e){D("relic",e.detail)},function(){D("relic","fetchStats"),n(1,m=!0),Hs.set(f.controlled_by.guild_id),qs.set(d),Fs.set(GameData.player().hasGroup),el.set(GameData.player().buffs)}]}class Vl extends Q{constructor(e){super(),J(this,e,Ll,$l,X,{relicData:0})}}let Dl=0
function xl(e,t){var n,r
t?.response?.data?.defenders?.length>0&&(n=a("dialog-relic"),r=t.response.data,Dl&&Dl.$destroy(),Dl=new Vl({props:{relicData:r},target:n}))}function Al(e,t){"ACT_REPAIR"===t&&GameData.fetch(Re+u+_e+Ie)}let Sl=!1
function Ml(e,t,n,a,r,o,s,l,i){return e.beginPath(),e.arc(o+l/2,s+i/2,l/6,0,2*Math.PI,!1),e.fillStyle=this.color,e.fill(),e.lineWidth=1,e.strokeStyle="black",e.stroke(),!0}function Nl(){if(!Sl){const e=GameController.Realm.footprintTexture
e.color=v("footprintColor"),e.Draw=Ml,Sl=!0}}function Hl(){GameController?.Realm?.footprintTexture&&(Nl(),$.unsubscribe("fixed.realm",Hl))}let Bl=0
function ql(e){$("#statbar-gold").css("background-color",e)}function Tl(){$("#HelperSendTotal").html(rt(v("currentGoldSentTotal"))),Number(GameData.player().gold)>Bl?ql("red"):ql("inherit")}function El(){Bl=v("goldAmount"),$("#statbar-gold-tooltip-general").append(`<dt class="stat-gold-sendTo">Send To:</dt><dd id="HelperSendTo">${v("goldRecipient")}</dd><dt class="stat-gold-sendAmt">Amount:</dt><dd id="HelperSendAmt">${rt(Bl)}</dd><dt class="stat-gold-sendTo">Send?</dt><dd><input id="HelperSendGold" value="Send!" class="custombutton" type="submit"><input type="hidden" id="xc" value=""</dd><dt class="stat-gold-sendTotal">Total Sent:</dt><dd id="HelperSendTotal">${rt(v("currentGoldSentTotal"))}</dd>`),$("#HelperSendGold").on("click",Ye),Tl(),$.subscribe(Ke,Tl)}let Gl=0,jl=0,Pl=0,Fl=0,Rl=0,_l=0
async function Il(){const e=await Ma({a:14,d:0,id:Gl.id,item_id:Gl.itemId}),t=e.response.response,n=e.response.msg
let a=n
if(0!==t){const e=n.indexOf("<");-1!==e&&(a=n.substring(0,e))}else a=`You purchased ${e.response.data.name} for ${rt(e.response.data.cost)} gold.`
l(_l,`${a}<br>`)}async function Ol(){const e=zt(Rl.value)
e&&(await jt(Kt(e,Il)),GameData.doAction(14,3,{id:Gl.id,item_id:Gl.itemId},0),Pl.close())}function Wl(){Fl?r("",_l):function(){Fl=n({className:"fshClear",textContent:"Select how many to quick-buy:"}),Rl=ut({id:"buyAmount",className:"fshNumberInput",min:1,max:99,value:1,type:"number"}),o(Fl,Rl)
const e=lt({textContent:"Quick-buy"})
i(e,Ol),o(Fl,e),_l=n(),o(Fl,_l),o(jl,Fl)}()}function Yl(e,t){Gl=t,jl=jl||a("shopDialogConfirm"),jl&&(Pl=Pl||$(jl).data("hcsWorldDialogShopConfirm"),Pl&&Wl())}function Kl(e){let t,n
return{c(){t=ae("div"),n=re(e[0]),ce(t,"id","tp-overlay"),ce(t,"class","svelte-dcwx64")},m(e,a){ee(e,t,a),se(t,n)},p(e,t){1&t&&le(n,e[0])},d(e){e&&ne(t)}}}function zl(e){let t,n=e[1]&&Kl(e)
return{c(){n&&n.c(),t=Z()},m(e,a){n&&n.m(e,a),ee(e,t,a)},p(e,[a]){e[1]?n?n.p(e,a):(n=Kl(e),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:te,o:te,d(e){e&&ne(t),n&&n.d(e)}}}function Ul(e,t,n){let{tpButton:a}=t,r=0,o=0,s=!1
function l(){const e=GameData.player().teleportCooldown
n(0,r=e-Nt()+o),r>0||(clearInterval(s),n(1,s=!1),a.classList.remove("cooldown"))}return window.$.subscribe("stats.player",l),window.$.subscribe(Ue,(function(e,t){o=Nt(),l(),s||0!==t.response.response||n(1,s=setInterval((()=>{l()}),1e3))})),e.$$set=e=>{"tpButton"in e&&n(2,a=e.tpButton)},[r,s,a]}class Ql extends Q{constructor(e){super(),J(this,e,Ul,zl,X,{tpButton:2})}}function Jl(e){return e.numberOfCreatureHitsTillDead-e.numberOfHitsRequired<=1?", dies on miss":", survives a miss"}function Xl(e,t){return"-"===t?e:"-"===e||e>t?"-":e}const Zl=[[e=>"-"===e.playerHits&&"-"===e.creatureHits,()=>"Unresolved"],[e=>"-"===e.playerHits,()=>"Player dies"],[e=>1===e.playerHits,e=>`Player 1 hits${Jl(e)}`],[e=>e.playerHits>1,e=>`Player > 1 hits${Jl(e)}`]]
function ei(e,t){return t[0](e)}function ti(e){e.playerHits=Xl(e.numberOfHitsRequired,e.numberOfCreatureHitsTillDead),e.creatureHits=Xl(e.numberOfCreatureHitsTillDead,e.numberOfHitsRequired),e.fightStatus=function(e){const t=Zl.find(s(ei,e))
return t?t[1](e):"Unknown"}(e)}function ni(e,t,n){return e.callback.groupExists?t:n}function ai(e,t,n,a){t>0&&(e.extraNotes+=`${n} = ${Math.floor(a*t*.001)}<br>`)}const ri=e=>ni(e,e.callback.groupArmorValue,e.player.armorValue)
function oi(e){e.creatureHitByHowMuch>=0?function(e){const t=e.generalVariable*e.creature.damage
t<e.overallArmorValue?e.numberOfCreatureHitsTillDead=e.overallHPValue:e.numberOfCreatureHitsTillDead=Math.ceil(e.overallHPValue/(t-e.overallArmorValue))}(e):e.numberOfCreatureHitsTillDead="-"}function si(e){!function(e){const t=ri(e)
e.overallArmorValue=t+Math.floor(e.player.armorValue*e.player.sanctuaryLevel*.001)}(e),function(e){ai(e,e.player.sanctuaryLevel,"Sanc Bonus Armor",e.player.armorValue)}(e),function(e){e.terrorizeEffect=Math.floor(e.creature.damage*e.player.terrorizeLevel*.001)}(e),function(e){e.player.terrorizeLevel>0&&(e.extraNotes+=`Terrorize Creature Damage Effect = ${-1*e.terrorizeEffect}<br>`)}(e),e.creature.damage-=e.terrorizeEffect,function(e){e.creatureDamageDone=Math.ceil(e.generalVariable*e.creature.damage-e.overallArmorValue+e.overallHPValue)}(e),oi(e)}const li=e=>ni(e,e.callback.groupAttackValue,e.player.attackValue)
function ii(e){return Math.floor(e.creature.defense*e.player.darkCurseLevel*qe)}function ci(e){const t=li(e)
e.player.darkCurseLevel>0&&(e.extraNotes+=`DC Bonus Attack = ${ii(e)}<br>`),e.nightmareVisageAttackMovedToDefense=Math.floor((t+e.counterAttackBonusAttack)*e.player.nightmareVisageLevel*.0025),e.player.nightmareVisageLevel>0&&(e.extraNotes+=`NMV Attack moved to Defense = ${e.nightmareVisageAttackMovedToDefense}<br>`),e.overallAttackValue=t+e.counterAttackBonusAttack-e.nightmareVisageAttackMovedToDefense,e.hitByHowMuch=function(e){const t=e.creature.defense-ii(e)
return 3===e.combatEvaluatorBias?e.overallAttackValue-Math.ceil(t)-50:e.overallAttackValue-Math.ceil(e.attackVariable*t)}(e)}const ui=(e,t,n)=>Math.max(Math.ceil((e-t+1)/n/.0025),0)
function fi(e){e.lowestCALevelToStillHit=ui(e.counterAttackBonusAttack,e.hitByHowMuch,e.player.attackValue),e.lowestCALevelToStillKill=ui(e.counterAttackBonusDamage,e.damageDone,e.player.damageValue)}function di(e){fi(e),e.lowestFeasibleCALevel=Math.max(e.lowestCALevelToStillHit,e.lowestCALevelToStillKill),e.extraNotes+=`Lowest CA to still 1-hit this creature = ${e.lowestFeasibleCALevel}<br>`,0!==e.lowestFeasibleCALevel&&function(e){e.extraAttackAtLowestFeasibleCALevel=Math.floor(.0025*e.player.attackValue*e.lowestFeasibleCALevel),e.extraDamageAtLowestFeasibleCALevel=Math.floor(.0025*e.player.damageValue*e.lowestFeasibleCALevel),e.extraNotes+=`Extra CA Att/Dam at this lowered CA level = ${e.extraAttackAtLowestFeasibleCALevel} / ${e.extraDamageAtLowestFeasibleCALevel}<br>`}(e),e.extraStaminaPerHitAtLowestFeasibleCALevel=function(e){return e.player.counterAttackLevel>0?Math.ceil(.0025*(1+e.player.doublerLevel/50)*e.lowestFeasibleCALevel):0}(e),e.extraStaminaPerHitAtLowestFeasibleCALevel<e.extraStaminaPerHit?e.extraNotes+=`Extra Stam Used at this lowered CA level = ${e.extraStaminaPerHitAtLowestFeasibleCALevel}<br>`:e.extraNotes+="No reduction of stam used at the lower CA level<br>"}function mi(e,t,n){e[t]>203?e.extraNotes+=`Even with CA203 you cannot ${n} this creature<br>`:0!==e[t]&&(e.extraNotes+=`You need a minimum of CA${e[t]} to ${n} this creature<br>`)}function pi(e){(function(e){return e.player.counterAttackLevel>0&&1===e.numberOfHitsRequired})(e)&&di(e),function(e){return"-"===e.numberOfHitsRequired||1!==e.numberOfHitsRequired}(e)&&function(e){fi(e),mi(e,"lowestCALevelToStillHit","hit"),mi(e,"lowestCALevelToStillKill","1-hit kill")}(e)}const hi=e=>ni(e,e.callback.groupHPValue,e.player.hpValue),gi=e=>ni(e,e.callback.groupDamageValue,e.player.damageValue)
function vi(e){if(function(e){const t=hi(e),{fortitudeLevel:n}=e.player
e.fortitudeExtraHPs=Math.floor(t*n*.001),n>0&&(e.extraNotes+=`Fortitude Bonus HP = ${e.fortitudeExtraHPs}<br>`),e.overallHPValue=t+e.fortitudeExtraHPs}(e),function(e){const{chiStrikeLevel:t}=e.player
e.chiStrikeExtraDamage=Math.floor(e.overallHPValue*t*.001),t>0&&(e.extraNotes+=`Chi Strike Bonus Damage = ${e.chiStrikeExtraDamage}<br>`)}(e),e.overallDamageValue=gi(e)+e.deathDealerBonusDamage+e.counterAttackBonusDamage+e.holyFlameBonusDamage+e.chiStrikeExtraDamage,e.damageDone=Math.floor(e.overallDamageValue-(e.generalVariable*e.creature.armor+e.hpVariable*e.creature.hp)),e.hitByHowMuch>0){let t=1
e.overallDamageValue>=e.generalVariable*e.creature.armor&&(t=e.overallDamageValue-e.generalVariable*e.creature.armor),e.numberOfHitsRequired=Math.ceil(e.hpVariable*e.creature.hp/t)}else e.numberOfHitsRequired="-"}const bi=e=>ni(e,e.callback.groupDefenseValue,e.player.defenseValue),wi=e=>Math.floor(bi(e)*e.player.constitutionLevel*.001)
const yi=e=>e.creature.attack-e.creature.attack*e.player.flinchLevel*.001-e.overallDefenseValue
function ki(e){e.overallDefenseValue=bi(e)+wi(e)+e.nightmareVisageAttackMovedToDefense,function(e){e.player.constitutionLevel>0&&(e.extraNotes+=`Constitution Bonus Defense = ${wi(e)}<br>`)}(e),function(e){ai(e,e.player.flinchLevel,"Flinch Bonus Attack Reduction",e.creature.attack)}(e),e.creatureHitByHowMuch=Math.floor(e.attackVariable*yi(e)),3===e.combatEvaluatorBias&&(e.creatureHitByHowMuch=Math.floor(yi(e)-50))}function Ci(e){e.extraNotes="",function(e){e.player.superEliteSlayerLevel>0&&(e.extraNotes+=`SES Stat Reduction Multiplier = ${e.player.superEliteSlayerMultiplier}<br>`)}(e),function(e){e.holyFlameBonusDamage=0,"Undead"===e.creature.class&&(e.holyFlameBonusDamage=Math.max(Math.floor((e.player.damageValue-e.creature.armor)*e.player.holyFlameLevel*.002),0),e.player.holyFlameLevel>0&&(e.extraNotes+=`HF Bonus Damage = ${e.holyFlameBonusDamage}<br>`))}(e),function(e){e.deathDealerBonusDamage=Math.floor(e.player.damageValue*(Math.min(.01*Math.floor(e.player.killStreakValue/5)*e.player.deathDealerLevel,20)/100))}(e),function(e){e.counterAttackBonusAttack=Math.floor(.0025*e.player.attackValue*e.player.counterAttackLevel),e.counterAttackBonusDamage=Math.floor(.0025*e.player.damageValue*e.player.counterAttackLevel)}(e),function(e){e.extraStaminaPerHit=0,e.player.counterAttackLevel>0&&(e.extraStaminaPerHit=Math.ceil(.0025*(1+e.player.doublerLevel/50)*e.player.counterAttackLevel))}(e),function(e){e.player.deathDealerLevel>0&&(e.extraNotes+=`DD Bonus Damage = ${e.deathDealerBonusDamage}<br>`)}(e),function(e){e.player.counterAttackLevel>0&&(e.extraNotes+=`CA Bonus Attack/Damage = ${e.counterAttackBonusAttack} / ${e.counterAttackBonusDamage}<br>CA Extra Stam Used = ${e.extraStaminaPerHit}<br>`)}(e)}const $i=e=>e.creatureHitByHowMuch>=0?"Yes":"No",Li=e=>e.hitByHowMuch>0?"Yes":"No",Vi=e=>`<span style="color:#333333">${e}</span>`,Di=e=>`<tr>${e}</tr>`,xi=(e,t)=>`<td${t%2?"":' class="fshRight"'}>${e}</td>`,Ai=e=>Di(e.map(xi).join("")),Si=e=>Di(`<td bgcolor="#CD9E4B" colspan="4" align="center">${(e=>e.callback.groupExists?"Group ":"")(e)}Combat Evaluation</td>`),Mi=e=>Ai([Vi("Will I hit it?"),Li(e),Vi("Extra Attack:"),`( ${e.hitByHowMuch} )`]),Ni=e=>Ai([Vi("# Hits to kill it?"),e.numberOfHitsRequired,Vi("Extra Damage:"),`( ${e.damageDone} )`]),Hi=e=>Ai([Vi("Will I be hit?"),$i(e),Vi("Extra Defense:"),`( ${-1*e.creatureHitByHowMuch} )`]),Bi=e=>Ai([Vi("# Hits to kill me?"),e.numberOfCreatureHitsTillDead,Vi("Extra Armor + HP:"),`( ${-1*e.creatureDamageDone} )`]),qi=e=>Ai([Vi("# Player Hits?"),e.playerHits,Vi("# Creature Hits?"),e.creatureHits]),Ti=e=>Di(`${xi(Vi("Fight Status:"),0)}<td colspan="3"><span>${e.fightStatus}</span></td>`),Ei=e=>Di(`${xi(Vi("Notes:"),0)}<td colspan="3"><span style="font-size:x-small;">${e.extraNotes}</span></td>`)
let Gi=0,ji=0,Pi=0
function Fi(){return cr(ji)?"Remove from do not kill list":"Add to the do not kill list"}function Ri(){r(Fi(),Pi)}function _i(){const e=t.doNotKillList.indexOf(ji);-1===e?t.doNotKillList.push(ji):t.doNotKillList.splice(e,1),Ri(),L("doNotKillList",t.doNotKillList.join()),fr()}function Ii(){Pi?Ri():function(){Pi=lt({className:"fshBl",textContent:Fi()})
const e=n({className:"description",innerHTML:'<span class="ui-helper-hidden-accessible"><input type="text"></span>'})
o(e,Pi),o(Gi,e),i(Pi,_i)}()}function Oi(e,t){!function(e){if(!Gi){const t=T("body",e)
1===t.length&&([Gi]=t)}}(t),Gi&&(ji=_(e),Ii())}let Wi=0,Yi=0,Ki=0,zi=0
function Ui(){Ki||(Yi||(Yi=n(),o(Wi,Yi),o(Wi,n({innerHTML:'<span class="fshFooter">*Does include CA, DD, HF, DC, Flinch, Super Elite Slayer, NMV, Sanctuary, Constitution, Fortitude, Chi Strike and Terrorize (if active) and allow for randomness (1.1053). Constitution, NMV, Fortitude and Chi Strike apply to group stats.</span>'}))),Ki=n(),o(Yi,Ki))}function Qi(e){Ui(),ge(e,Ki)}function Ji(e){zi||(Ui(),zi=n(),o(Yi,zi)),ge(e,zi)}function Xi(e,t){const n={name:e.name,class:e.creature_class,attack:Number(e.attack),defense:Number(e.defense),armor:Number(e.armor),damage:Number(e.damage),hp:Number(e.hp)}
return function(e,t,n){3===n&&(t.attack-=Math.ceil(t.attack*e),t.defense-=Math.ceil(t.defense*e),t.armor-=Math.ceil(t.armor*e),t.damage-=Math.ceil(t.damage*e),t.hp-=Math.ceil(t.hp*e))}(t,n,e.type),n}function Zi(e,n,a){const r={}
r.callback=a,r.player=As(n),function(e){e.combatEvaluatorBias=t.combatEvaluatorBias,e.attackVariable=1.1053,e.generalVariable=t.generalVariable,e.hpVariable=t.hpVariable}(r),r.creature=Xi(e.response.data,r.player.superEliteSlayerMultiplier),function(e){var t
t=e,[Ci,ci,vi,ki,si,ti,pi].forEach((e=>e(t)))}(r),r.evaluatorHTML=function(e){return`<table width="100%"><tbody>${Si(e)}${Mi(e)}${Ni(e)}${Hi(e)}${Bi(e)}${qi(e)}${Ti(e)}${Ei(e)}</tbody></table>`}(r),a.groupExists?Ji(r.evaluatorHTML):Qi(r.evaluatorHTML)}function ec(e){return e.members[0].name===c()}async function tc(e,t,n){if(n){!function(e,t,n){if(!n.r?.attributes)return
const a=n.r.attributes
Zi(e,t,{groupExists:!0,groupAttackValue:a[0].value,groupDefenseValue:a[1].value,groupArmorValue:a[2].value,groupDamageValue:a[3].value,groupHPValue:a[4].value})}(e,t,await Rt(n))}}async function nc(e,t){const n=function(e){if(it(e.r))return e.r.find(ec).id}(await Ot())
tc(e,t,n)}async function ac(e,t){if(Wi||(Wi=a("dialog-viewcreature")),Wi&&(Qi(""),Ji(""),t?.response?.data)){Oi(t.response.data.name,Wi)
const e=await Ut(!0)
e&&function(e,t){e.player.hasGroup&&nc(e,t),Zi(e,t,{groupExists:!1})}(t,e)}}let rc=0
function oc(e){const t=T("verbs",e)
1===t.length&&Jt(t[0])}function sc(){if(!rc)return
const e=a("actionList")
I("player",e).forEach(oc)}const lc="showHuntingBuffs"
function ic(){return`${Xt(lc)} ${Zt("enabledHuntingMode")}<select name="enabledHuntingMode"><option value="1"${en(t.enabledHuntingMode,"1")}>${t.buffsName}</option><option value="2"${en(t.enabledHuntingMode,"2")}>${t.buffs2Name}</option><option value="3"${en(t.enabledHuntingMode,"3")}>${t.buffs3Name}</option></select>`}let cc=0,uc=""
const fc=()=>cc,dc=()=>uc
function mc(){const e=[null,[t.buffs,t.buffsName],[t.buffs2,t.buffs2Name],[t.buffs3,t.buffs3Name]][t.enabledHuntingMode]
it(e)&&([cc,uc]=e)}function pc(e){"enabledHuntingMode"===e.target.name&&(t.enabledHuntingMode=e.target.value,L("enabledHuntingMode",t.enabledHuntingMode),mc(),GameData.fetch(u))}function hc(e){t[e]=!t[e],L(e,t[e])}const gc={hideSubLvlCreature:function(){hc("hideSubLvlCreature"),GameData.fetch(Ie)},hidePlayerActions:function(){rc=!rc,L("hidePlayerActions",rc),GameData.fetch(Ie)},showCreatureInfo:()=>hc("showCreatureInfo"),showHuntingBuffs:function(){hc("showHuntingBuffs"),GameData.fetch(u)},showMonsterLog:()=>hc("showMonsterLog"),showTitanInfo:function(){hc("showTitanInfo"),ps(GameData.realm().dynamic)},showBuffInfo:function(){hc("showBuffInfo"),Fn()}}
function vc(e){const t=gc[e.target.name]
Y(t)&&(e.target.blur(),t(e))}function bc(){const e=a("worldPage")
if(!e)return
const t=n({className:"fshCenter fshFten"}),r=n({id:"fshWorldPrefs",innerHTML:`${Xt("showCreatureInfo")}&nbsp;&nbsp;${Xt("showMonsterLog")}&nbsp;&nbsp;${Xt("showTitanInfo")}&nbsp;&nbsp;${Xt("showBuffInfo")}<br>${Xt("hideSubLvlCreature")}&nbsp;&nbsp;${Xt("hidePlayerActions")}&nbsp;&nbsp;${ic()}`})
i(r,vc),g(r,"change",pc),o(t,r)
const s=n()
return o(t,s),o(e,t),s}const wc=[{generalVariable:1.1053,hpVariable:1.1},{generalVariable:1.1,hpVariable:1.053},{generalVariable:1.053,hpVariable:1},{generalVariable:1.1053,hpVariable:1}]
function yc(){var e
t.combatEvaluatorBias=v("combatEvaluatorBias"),t.generalVariable=(e=t.combatEvaluatorBias,wc[e]?wc[e].generalVariable:1.1053),t.hpVariable=function(e){return wc[e]?wc[e].hpVariable:1.1}(t.combatEvaluatorBias)}function kc(e,t){return e[t.name]=!0,e}function Cc(e,t,n){return e[_(n)]||t.push(n),t}function $c(e){ge("",e)}function Lc(e,t){const n=t.b.reduce(kc,{}),a=fc().reduce(s(Cc,n),[])
a.length>0?function(e,t){ge(`You are missing some ${dc()} hunting buffs<br>(${t.join(", ")})`,e)}(e,a):$c(e)}function Vc(e,n,a){fc()&&function(e,n){t.showHuntingBuffs?Lc(e,n):$c(e)}(e,a)}function Dc(e,t){return 6!==t.type||(0!==t.data.creature_type||t.data.level>=e)}function xc(e){const t=B(e)
return t?.actions?.length?(t.actions=t.actions.filter(s(Dc,function(e){return e.realm?.minlevel||GameData.realm().minlevel}(t))),Je(t)):e}function Ac(e,n){t.hideSubLvlCreature&&function(e){return e.data?.d&&tn(e.data.d,Ie)}(n)&&(e.dataFilter=xc)}function Sc(e){t[e[0]]=Qt(e[1])}function Mc(e){t[e]=Qt(e)}function Nc(){[["buffs","huntingBuffs"],["buffs2","huntingBuffs2"],["buffs3","huntingBuffs3"]].forEach(Sc),["doNotKillList"].forEach(Mc)}function Hc(e){t[e[0]]=v(e[1])}function Bc(e){t[e]=v(e)}function qc(){[["buffsName","huntingBuffsName"],["buffs2Name","huntingBuffs2Name"],["buffs3Name","huntingBuffs3Name"],["showHuntingBuffs","showHuntingBuffs"]].forEach(Hc),["enabledHuntingMode","hideSubLvlCreature","showTitanInfo","showBuffInfo","showMonsterLog","showCreatureInfo"].forEach(Bc)}const Tc=[function(){yc(),Nc(),qc()
const e=bc()
$.ajaxPrefilter("JSON",Ac),t.hideSubLvlCreature&&GameData.fetch(Ie),function(e){mc()
const n=s(Vc,e)
$.subscribe(f,n),t.showHuntingBuffs&&window.initialGameData&&n(null,{b:window.initialGameData.player.buffs})}(e),rc=v("hidePlayerActions"),$.subscribe(K,sc),sc()},function(){Oe(),We()&&El()},function(){$.subscribe(Qe,ac)},function(){Hr.forEach(Br)},function(){v("enableCreatureColoring")&&o(document.body,gt("#actionList .creature-1 {color: green;}\n#actionList .creature-2 {color: yellow;}\n#actionList .creature-3 {color: red;}"))},function(){$.subscribe(K,fr),fr(),function(){const e=GameData.doAction
GameData.doAction=pr(e)}()},function(){zr(),$.subscribe("-1-success.action-response 4-success.action-response 5-success.action-response 25-success.action-response",Zr),Zr()},function(){$.subscribe(Fe,Al)},async function(){if(v("keepLogs")){!function(e){e&&($a=e),$.subscribe(M,Aa)}(await dt("fsh_combatLog"))}},function(){window.initialGameData&&gs(0,window.initialGameData),$.subscribe(`${be} ${we}`,gs)},function(){$.subscribe(ze,Yl)},function(){$.subscribe(Pe,xl)},function(){$("#messageCenter").worldMessageCenter({offset:"0 60"})},function(){b("#mapTooltip")},function(){ca(),$.subscribe(m,ua),$.subscribe(p,fa)},function(){Fn(),$.subscribe(`${f} ${d}`,Fn)},function(){g(a("actionList"),"mouseover",ir)},function(){const{body:e}=document
g(e,"keydown",ya),g(e,"keyup",ka)},function(){const e=$("#world-event-badge")
e.length&&(e.off(),i(e[0],Mr))},function(){const e=A(".actionListHeaderButton.teleport")
!function(e,t){new Ql({target:e,props:t})}(e,{tpButton:e})},function(){var e
v("messageStack")&&(e=a("messageCenter"),new Pr({target:e}))},function(){GameController?.Realm?.footprintTexture?Nl():$.subscribe("fixed.realm",Hl)}]
function Ec(){e(Tc)}export{Ec as default}
//# sourceMappingURL=newMap-a6b7dd47.js.map
