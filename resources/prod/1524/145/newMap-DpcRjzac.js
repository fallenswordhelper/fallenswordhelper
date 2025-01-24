import{e}from"./executeAll-DIAWIge1.js"
import{am as t,m as n,g as a,aT as r,ad as o,aD as s,i,ar as l,c,w as u,ab as f,o as d,s as m,aU as p,aW as h,H as g,aX as b,aY as v,aZ as k,a_ as y,z as w,b as C,ao as L,a$ as D,aG as V,b0 as M,b1 as x,b2 as A,b3 as S,aj as N,k as H,b4 as B,q as T,b5 as E,b6 as G,b7 as P,b8 as _,F as R,b9 as F,ba as O,bb as I,bc as j,bd as W,be as q,bf as Y,bg as K,bh as z,bi as U,bj as Q,bk as X,ap as J,ac as Z,bl as ee,bm as te,bn as ne,a as ae,$ as re,S as oe,O as se,P as ie,as as le,av as ce,W as ue,at as fe,a3 as de,a4 as me,R as pe,a7 as he,bo as ge,X as be,a8 as ve,Q as ke,T as ye,U as we,bp as Ce,bq as $e,br as Le,bs as De,a1 as Ve,a2 as Me,_ as xe,bt as Ae,bu as Se,bv as Ne,d as He,ay as Be,bw as Te,bx as Ee,by as Ge,bz as Pe,G as _e,bA as Re,bB as Fe,bC as Oe,bD as Ie,bE as je,bF as We,bG as qe,bH as Ye,bI as Ke,bJ as ze,bK as Ue,ak as Qe,bL as Xe,bM as Je,u as Ze,bN as et,bO as tt,bP as nt,bQ as at,bR as rt,bS as ot,bT as st,bU as it,bV as lt,bW as ct,bX as ut,bY as ft,bZ as dt,b_ as mt,b$ as pt,c0 as ht,c1 as gt,c2 as bt,c3 as vt,c4 as kt,c5 as yt,c6 as wt,c7 as Ct,c8 as $t,c9 as Lt,ca as Dt,cb as Vt,an as Mt,cc as xt}from"./calfSystem-CvwhhJv4.js"
import{t as At}from"./toggleForce-br4z9gGd.js"
import{r as St,a as Nt}from"./roundToString-_HLuWg7Z.js"
import{a as Ht}from"./addCommas-C_h2HN8s.js"
import{d as Bt,q as Tt}from"./quickbuffSuccess-BhSTita6.js"
import{c as Et}from"./createInput-DheNsgVc.js"
import{c as Gt}from"./createLabel-BAHYMagq.js"
import{r as Pt}from"./rnd-D_QmA-Fa.js"
import{c as _t}from"./createStyle-C59SxshO.js"
import{c as Rt}from"./createTable-DRk_KQFM.js"
import{g as Ft,t as Ot,a as It}from"./getTitanString-DvEb_zLX.js"
import{L as jt}from"./LinkButton-DGK9y3f9.js"
import{r as Wt}from"./reduceBuffArray-Diy1E3zc.js"
import{r as qt}from"./reliclist-DWO0fSxH.js"
import{d as Yt}from"./daGroupStats-DZ6wzgTb.js"
import{d as Kt,m as zt}from"./mercEffect-CAwtttRs.js"
import{a as Ut}from"./attribsToArray-CCkwLQAu.js"
import{r as Qt}from"./remainingPages-BzskAxSU.js"
import{t as Xt}from"./testQuant-CN9BdfvH.js"
import{s as Jt,j as Zt}from"./simpleCheckbox-n2TKkJvn.js"
import{i as en}from"./isSelected-BWnMzKlW.js"
import{b as tn}from"./bitwiseAnd-C5gmj-aX.js"
import"./buffReportParser-C9MhHbeW.js"
import"./buffObj-BIwiFUIW.js"
import"./view-JsYojE3X.js"
import"./isChecked-D_0do7nT.js"
let nn=0
function an(e){return e}function rn(e){if(function(e){return t.showBuffInfo&&e.some(an)}(e))return function(){if(nn)At(nn,!1)
else{nn=n({className:"fshActionBox",innerHTML:"<div></div><div></div><div></div><div></div><div></div>"})
const e=a("actionContainer")
r(nn,e.children[2])}return nn}()
nn&&At(nn,!0)}function on(e,t,n,a){t&&(e.className=t),o(n,e)
const r=s()
return i(e,r),l(e,a),r}let sn=0,ln=0
function cn(e,t){sn?At(sn,!1):function(e){sn=e.children[3],ln=on(sn,"fshBlue","CA "," active")}(e),o(t.level,ln)}function un(e,t){t?cn(e,t):sn&&At(sn,!0)}let fn=0,dn=0
function mn(e,t){fn?At(fn,!1):function(e){fn=e.children[4],dn=on(fn,"fshRed","Doubler "," active")}(e),o(t.level,dn)}function pn(e,t){t?mn(e,t):fn&&At(fn,!0)}let hn=0,gn=0
function bn(e,t,n){hn?At(hn,!1):function(e){hn=e.children[2],gn=on(hn,"","Damage bonus: ","%")}(e),o(function(e,t){if(e){const n=Math.min(.01*Math.round(Math.floor(t/5)*Number(e.level)),20)
return St(n,2).toString()}return"0"}(t,Number(n)),gn)}function vn(e,t,n){t?bn(e,t,n):hn&&At(hn,!0)}let kn=0,yn=0
function wn(e,t){kn?At(kn,!1):function(e){kn=e.children[1],yn=on(kn,"","Kill Streak: ","")}(e),function(e,t){o(Ht(e),t)}(t,yn)}function Cn(e,t,n,a){t||n?wn(e,a):kn&&At(kn,!0)}function $n(e,t){return t.name===e}function Ln(e){const{buffs:t}=GameData.player()
if(t)return t.find(c($n,e))}const Dn=["red","orange","yellow"]
let Vn=0,Mn=0
async function xn(){if(m("NewMap","recastClick"),Ln("Summon Shield Imp"))return
!function(e){Tt(e)&&GameData.fetch(h)}(await Bt([p()],[55]))}const An=["imp-0","imp-1","imp-1"]
function Sn(e,t){Vn?At(Vn,!1):function(e){[Vn]=e.children,o("Shield Imps Remaining: ",Vn),Mn=s(),i(Vn,Mn),u(Vn,"&nbsp;")
const t=f({className:"xSmallLink",textContent:"Recast"})
i(Vn,t),d(t,xn)}(e)
const n=function(e){return e?Number(e.stack):0}(t)
Vn.className=function(e){return An[e]??"fshGreen"}(n),o(n,Mn)}function Nn(e,t,n){t||n?Sn(e,t):Vn&&At(Vn,!0)}function Hn(e){return 0===e.type}let Bn=0,Tn=0,En=0,Gn=0,Pn=0,_n=0
function Rn(){Bn=Ln("Death Dealer"),Tn=Ln("Doubler"),En=Ln("Counter Attack"),Gn=Ln("Summon Shield Imp"),Pn=function(){const{dynamic:e}=GameData.realm()
return g(e)&&e.some(Hn)}(),_n=GameData.player().killStreak}function Fn(){!function(){const e=$("#actionlist-shield-imp")
1===e.length&&e.css("background-color",Dn[e.text()]||"#ad8043")}(),Rn()
const e=rn([Bn,Tn,En,Gn,Pn])
e&&(Nn(e,Gn,Bn),Cn(e,Bn,Pn,_n),vn(e,Bn,_n),un(e,En),pn(e,Tn))}function On(e){return s({textContent:e})}function In(){window.GameController&&GameController.Realm&&!GameController.Realm.footprintTileList&&(GameController.Realm.footprintTileList=[])}function jn(e,t,n){return Gt({className:`fshCurveEle fshCurveLbl fshPoint tip-static ${e}`,dataset:{tipped:t},htmlFor:n})}function Wn(e){const t=n({className:"fshToggle"}),a=Et({checked:e.prefVal,id:e.checkId,type:"checkbox"})
i(t,a)
const r=jn(e.onClass,e.onTip,e.checkId)
i(t,r)
const o=jn(e.offClass,e.offTip,e.checkId)
return i(t,o),i(e.worldName,t),a}let qn=0,Yn=0,Kn=0,zn=0,Un=0,Qn=0,Xn=0,Jn=0,Zn=0
const ea=e=>On(e?e.toString():"?")
function ta(e,t,a){const r=n({textContent:`${t} Lvl: `})
i(r,a),i(e,r)}function na(e,t,n){const a=f({className:`fshCurveEle fshCurveBtn fshPoint tip-static ${e}`,dataset:{tipped:t}})
return i(n,a),a}function aa(e){!function(e){const t=n({className:"fshFsty"})
Yn=ea(GameData.realm().minlevel),ta(t,"Min",Yn),Kn=ea(GameData.player().level),ta(t,"Your",Kn),i(e,t)}(e),zn=na("fshFormGroup","Quick Create Attack Group",e),Un=na("fshQuickBuff","Open Quick Buff Popup",e),Qn=na("fshRealmMap","Open Realm Map",e),Xn=na("fshTempleOne","Search map in Ultimate FSG",e)}function ra(){aa(qn),function(e){if(L("showSpeakerOnWorld")){const t=L("playNewMessageSound")
Jn=Wn({prefVal:t,checkId:"fshSoundCheck",onClass:"soundOn",onTip:"Turn Off Sound when you have a new log message",offClass:"soundOff",offTip:"Turn On Sound when you have a new log message",worldName:e})}}(qn),function(e){const n=t.huntingMode
Zn=Wn({prefVal:n,checkId:"fshHuntCheck",onClass:"huntOn",onTip:"Hunting mode is ON",offClass:"huntOff",offTip:"Hunting mode is OFF",worldName:e})}(qn)}const oa=[[()=>Jn,function(){m("NewMap","toggleSound"),N("playNewMessageSound",!L("playNewMessageSound"))}],[()=>Zn,function(){m("NewMap","toggleHuntMode"),t.huntingMode=!t.huntingMode,N("huntingMode",t.huntingMode)}]],sa=[[()=>zn,function(e){m("NewMap","doFormGroup"),D(e),GameData.doAction(12,401,{},0)}],[()=>Un,function(){m("NewMap","openQuickBuff"),V(M())}],[()=>Qn,function(){m("NewMap","openRealmMap"),window.open(`${x+A}map`,"fsMap")}],[()=>Xn,function(){m("NewMap","openUfsgMap")
const e=GameData.realm()
window.open(`${S}realms${A}view&realm_id=${e.id}`,"mapUfsg")}]]
function ia(e,t){const{target:n}=t,[,a]=e.find((([e])=>e()===n))??[]
a&&(n.blur(),a(n))}function la(e){return c(ia,e)}function ca(){qn||(qn=n({className:"fshCurveContainer",id:"fshWorldButtonContainer"}),ra(),d(qn,la(sa)),C(qn,"change",la(oa)),w(qn,a("worldCoord")))}function ua(e,t){Yn&&t.b.minlevel&&(In(),o(t.b.minlevel,Yn))}function fa(e,t){Kn&&o(t.b,Kn)}const da=["NORMAL","CHAMPION","ELITE","SUPER ELITE","TITAN","LEGENDARY"],ma=`url("${E}ui/world/icon_action_attack_`
let pa=!1
function ha(e){return T(".verb.attack",e)}function ga(e){const t=da.indexOf(e.toUpperCase())
return H(`#actionList .actionListItem.creature.creature-${t}`)}function ba(e){e.classList.remove("attack-1","attack-2","attack-3","attack-4","attack-5","attack-6","attack-7","attack-8"),e.style.backgroundImage=""}function va(e,t){null!==e&&(e.classList.add(`attack-${t+1}`),e.style.backgroundImage=`${ma}${t+1}.png")`)}function ka(e){const t=["LEGENDARY","NORMAL"].flatMap(ga),n=ga("CHAMPION"),[a,r]=e?[t,n]:[n,t]
a.map(ha).filter((e=>null!==e)).forEach(ba),r.slice(0,8).map(ha).forEach(va)}function ya(e){if(!e.altKey||!e.shiftKey||"INPUT"===e.target.tagName||"TEXTAREA"===e.target.tagName)return
if(pa||ka(!0),pa=!0,!/(?:Digit|Numpad)[1-8]/.test(e.code))return
const t=ga("CHAMPION"),n=parseInt(e.code.slice(-1),10)-1
n<t.length&&function(e){const t=ha(e)
t&&(m("NewMap","ChampionAttack"),B(t))}(t[n])}function wa(e){!pa||e.ctrlKey&&e.shiftKey||(pa=!1,ka(!1))}const Ca=["Breaker","Protection","Master Thief","Protect Gold","Disarm","Duelist","Thievery","Master Blacksmith","Master Crafter","Fury Caster","Master Inventor","Sustain"]
let $a=[],La=0
function Da(e){54!==e.id&&26!==e.id||(La.player.buffs[e.id]=parseInt(e.level,10))}function Va(e){-1===Ca.indexOf(e.name)&&(La.player.enhancements[e.name]=e.value)}function Ma(e){La={},La.combat=e.response.data,La.combat.inventory_id&&(La.combat.drop=La.combat.item.id),La.player={},La.player.buffs={},La.player.enhancements={},function(e){e.player.buffs&&e.player.buffs.forEach(Da)}(e),function(e){e.player.enhancements&&e.player.enhancements.forEach(Va)}(e),La.time=e.time,$a.push(La),_("fsh_combatLog",$a)}function xa(e,t){0===t.response.response&&Ma(t)}function Aa(e){return!e?.response?.data}async function Sa(e){const t=await F({cache:!1,url:"fetchdata.php",data:{...e,fshrnd:Pt()},dataType:"text"})
return O(t)??{response:{msg:"Server Error",response:1}}}const Na=[]
const Ha=(e,t)=>e===Number(t.response.data.id)
function Ba(e,t){e(t)}async function Ta(e,t){const n=Na.find(c(Ha,e))
if(n)return function(e){return new Promise((t=>{I(3,Ba,[t,e])}))}(n)
const a=await Sa({a:1,d:0,id:e,passback:t})
return function(e){Aa(e)||Na.push(e)}(a),a}let Ea=0,Ga=0,Pa=0,_a=0,Ra=0,Fa=0
const Oa=()=>Ea,Ia=()=>Ga,ja=()=>Pa,Wa=()=>_a,qa=()=>Ra,Ya=()=>Fa
function Ka(e,t){return j(W(t,e))}function za(){var e
Ea=GameData.player().level,e=a("statbar-character-tooltip-stats"),Pa=Ka(e,q),Ga=Ka(e,Y),Ra=Ka(e,K),_a=Ka(e,z),Fa=Ka(e,U)}const Ua=e=>`<td>${e}:&nbsp;</td>`,Qa=e=>`<td width="40%">${e}</td>`
function Xa([e,t,n,a,r]){return[Ua(e),Qa(`${t} (your ${n}:<span class="${a}">${r()}</span>)`)]}function Ja(e){return["<tr>",...e,"</tr>"].join("")}function Za(e,t){return Ja([...Xa(e),...Xa(t)])}const er='<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Enhancements</td></tr>'
function tr(e){return`<tr><td colspan="2">${e.name}:</td><td colspan="2">${e.value}</td></tr>`}function nr(e,t,n){return function(e){return`<table><tr><td><img src="${E}creatures/${e.image_id}.png" height="200" width="200"></td><td rowspan="2"><table width="400"><tr><td class="header" colspan="4" class="fshCenter">Statistics</td></tr>`}(e)+function(e,t){return Ja([Ua("Class"),Qa(e.creature_class),...Xa(["Level",e.level,"level",t,Oa])])}(e,n)+function(e){return Za(["Attack",e.attack,"defense","fshYellow",Ia],["Defense",e.defense,"attack","fshYellow",ja])}(e)+function(e){return Za(["Armor",e.armor,"damage","fshYellow",Wa],["Damage",e.damage,"armor","fshYellow",qa])}(e)+function(e,t){return Ja([Ua("HP"),Qa(`${e.hp} (your HP:<span class="fshYellow">${Ya()}</span>)(1H: <span class="fshRed">${t}</span>)`),Ua("Gold"),Qa(e.gold)])}(e,t)+er+function(e){return 0===e.enhancements.length?'<tr><td colspan="4">[no enhancements]</td></tr>':e.enhancements.map(tr).join("")}(e)+function(e){return`<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Description</td></tr><tr><td colspan="4">${e.description}</td></tr><tr><td colspan="4" height="5"></td></tr></table></td></tr><tr><td class="fshCenter"><b>${e.name}</b></td></tr></table>`}(e)}function ar(e){if(!Aa(e))return function(e){const n=Math.ceil(e.hp*t.hpVariable+e.armor*t.generalVariable)
let a="fshYellow"
return za(),Oa()>e.level&&(a="fshRed"),nr(e,n,a)}(e.response.data)}const rr=["verb","view","tip-static"]
async function or(e,t){const n=function(e){return Q(e.parentNode.children).indexOf(e)}(e),a=await Ta(GameData.actions()[n].data.id,n)
Aa(a)||function(e,t){const n=ar(t)
e.set("content.text",n)}(t,a)}function sr(e,t){m("NewMap","CreatureInfo"),e.classList.add("fshTip")
var n
const a=(n="Loading...",$(e).qtip({overwrite:!0,show:{event:"mouseover",ready:!0},style:{classes:"qtip-tipsy qtip-custom"},position:{my:"center right",at:"center left",effect:!1,viewport:$(window)},content:{text:n},hide:{effect:!1}})).qtip("api")
a&&or(t,a)}function ir(e,t){return n=e,rr.every((e=>R(e,n)))&&!R("fshTip",e)&&R("creature",t)
var n}function lr(e){if(!t.showCreatureInfo)return
const{target:n}=e,a=n.parentNode.parentNode.parentNode
ir(n,a)&&sr(n,a)}function cr(e){return t.doNotKillList.includes(X(e))}function ur(e){e.classList.toggle("fshBlue",cr(Z(e)))}function fr(){const e=a("actionList")
J("creature",e).forEach(ur)}function dr(e){const t=GameData.actions()[e]
if(t)return function(e,t){if(cr(e))return m("NewMap","creatureOnList"),a("actionList").children[t].children[0].children[1].classList.remove("loading"),!0}(t.data.name,e)}const mr={2:function(e){return function(t,n,a,r){dr(a.passback)||e(t,n,a,r)}}}
function pr(e){return function(t,n,a,r){const o=mr[t];(function(e){return e&&te(e)})(o)&&function(e){return ee(e)||0===e}(r)?o(e)(t,n,a,r):e(t,n,a,r)}}function hr(){return e={subcmd:"contrib"},ae({cmd:"globalquests",...e})
var e}function gr(e){e[1]=e[2].r}function br(e,t,n){const a=e.slice()
return a[3]=t[n].player,a[4]=t[n].value,a[6]=n,a}function vr(e){let t,n,a=e[7].message+""
return{c(){t=pe("p"),n=he(a),ge(t,"color","red")},m(e,a){ue(e,t,a),be(t,n)},p(e,t){1&t&&a!==(a=e[7].message+"")&&ve(n,a)},d(e){e&&me(t)}}}function kr(e){let t,n
function a(e,n){return 1&n&&(t=null),null==t&&(t=!!g(e[1])),t?wr:yr}gr(e)
let r=a(e,-1),o=r(e)
return{c(){o.c(),n=ce()},m(e,t){o.m(e,t),ue(e,n,t)},p(e,t){gr(e),r===(r=a(e,t))&&o?o.p(e,t):(o.d(1),o=r(e),o&&(o.c(),o.m(n.parentNode,n)))},d(e){e&&me(n),o.d(e)}}}function yr(e){let t
return{c(){t=he("Server Error")},m(e,n){ue(e,t,n)},p:de,d(e){e&&me(t)}}}function wr(e){let t,n,a,r,o=ke(e[1]),s=[]
for(let t=0;t<o.length;t+=1)s[t]=$r(br(e,o,t))
return{c(){t=pe("table"),n=pe("tbody"),a=pe("tr"),a.innerHTML='<td class="header"></td> <td class="header"></td> <td class="header">Username</td> <td class="header">Kills</td>',r=ye()
for(let e=0;e<s.length;e+=1)s[e].c()
we(a,"class","svelte-2qtc6g"),we(t,"id","world-event-contrib-table"),we(t,"class","svelte-2qtc6g")},m(e,o){ue(e,t,o),be(t,n),be(n,a),be(n,r)
for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(n,null)},p(e,t){if(1&t){let a
for(o=ke(e[1]),a=0;a<o.length;a+=1){const r=br(e,o,a)
s[a]?s[a].p(r,t):(s[a]=$r(r),s[a].c(),s[a].m(n,null))}for(;a<s.length;a+=1)s[a].d(1)
s.length=o.length}},d(e){e&&me(t),Ce(s,e)}}}function Cr(e){let t,n,a,r
return{c(){t=pe("a"),n=pe("img"),Le(n.src,a=E+"guilds/"+e[3].guild_id+"_mini.png")||we(n,"src",a),we(n,"alt","guild logo"),we(n,"class","svelte-2qtc6g"),we(t,"href",r=""+(De+e[3].guild_id))},m(e,a){ue(e,t,a),be(t,n)},p(e,o){1&o&&!Le(n.src,a=E+"guilds/"+e[3].guild_id+"_mini.png")&&we(n,"src",a),1&o&&r!==(r=""+(De+e[3].guild_id))&&we(t,"href",r)},d(e){e&&me(t)}}}function $r(e){let t,n,a,r,o,s,i,l,c,u,f,d,m,p=e[3].name+"",h=e[4]+"",g=e[3].guild_id&&Cr(e)
return{c(){t=pe("tr"),n=pe("td"),n.textContent=`${e[6]+1}`,a=ye(),r=pe("td"),g&&g.c(),o=ye(),s=pe("td"),i=pe("a"),l=he(p),u=ye(),f=pe("td"),d=he(h),m=ye(),we(i,"href",c=""+($e+e[3].name)),we(t,"class","svelte-2qtc6g")},m(e,c){ue(e,t,c),be(t,n),be(t,a),be(t,r),g&&g.m(r,null),be(t,o),be(t,s),be(s,i),be(i,l),be(t,u),be(t,f),be(f,d),be(t,m)},p(e,t){e[3].guild_id?g?g.p(e,t):(g=Cr(e),g.c(),g.m(r,null)):g&&(g.d(1),g=null),1&t&&p!==(p=e[3].name+"")&&ve(l,p),1&t&&c!==(c=""+($e+e[3].name))&&we(i,"href",c),1&t&&h!==(h=e[4]+"")&&ve(d,h)},d(e){e&&me(t),g&&g.d()}}}function Lr(e){let t
return{c(){t=he("Loading...")},m(e,n){ue(e,t,n)},p:de,d(e){e&&me(t)}}}function Dr(e){let t,n,a={ctx:e,current:null,token:null,hasCatch:!0,pending:Lr,then:kr,catch:vr,value:2,error:7}
return le(n=e[0],a),{c(){t=ce(),a.block.c()},m(e,n){ue(e,t,n),a.block.m(e,a.anchor=n),a.mount=()=>t.parentNode,a.anchor=t},p(t,[r]){e=t,a.ctx=e,1&r&&n!==(n=e[0])&&le(n,a)||fe(a,e,r)},i:de,o:de,d(e){e&&me(t),a.block.d(e),a.token=null,a=null}}}function Vr(e,t,n){let{promise:a}=t
return e.$$set=e=>{"promise"in e&&n(0,a=e.promise)},[a]}class Mr extends oe{constructor(e){super(),se(this,e,Vr,Dr,ie,{promise:0})}}let xr=0
const Ar=()=>({promise:re(hr)})
function Sr(){m("NewMap","GlobalTop")
const e=a("world-event-contrib")
var t
t=e,xr?xr.$set(Ar()):xr=new Mr({props:Ar(),target:t}),$(e).dialog({title:"Top 100 Event Contributers",minWidth:300,height:300,zIndex:9999})}function Nr(e){$(`#actionList li.creature-${e.toString()} a.create-group`).hide()}const Hr=["hideChampionsGroup","hideElitesGroup","hideSEGroup","hideTitanGroup","hideLegendaryGroup"]
function Br(e,t){var n
L(e)&&(n=t+1,$.subscribe(ne,c(Nr,n)),Nr(t+1))}function Tr(e,t,n){const a=e.slice()
return a[9]=t[n].msg,a[10]=t[n].type,a[11]=t[n].count,a}function Er(e){let t,n,a,r=e[11]+""
return{c(){t=pe("div"),n=he("x"),a=he(r),we(t,"class","count svelte-1t9oc1")},m(e,r){ue(e,t,r),be(t,n),be(t,a)},p(e,t){1&t&&r!==(r=e[11]+"")&&ve(a,r)},d(e){e&&me(t)}}}function Gr(e,t){let n,a,r,o,s,i,l,c=t[9]+"",u=t[11]>1&&Er(t)
function f(){return t[3](t[9])}return{key:e,first:null,c(){n=pe("div"),a=he(c),r=ye(),u&&u.c(),o=ye(),we(n,"class",s="fsh-message "+t[10]+" svelte-1t9oc1"),this.first=n},m(e,t){ue(e,n,t),be(n,a),be(n,r),u&&u.m(n,null),be(n,o),i||(l=xe(n,"click",f),i=!0)},p(e,r){t=e,1&r&&c!==(c=t[9]+"")&&ve(a,c),t[11]>1?u?u.p(t,r):(u=Er(t),u.c(),u.m(n,o)):u&&(u.d(1),u=null),1&r&&s!==(s="fsh-message "+t[10]+" svelte-1t9oc1")&&we(n,"class",s)},d(e){e&&me(n),u&&u.d(),i=!1,l()}}}function Pr(e){let t,n=[],a=new Map,r=ke(e[1](e[0]))
const o=e=>e[9]
for(let t=0;t<r.length;t+=1){let s=Tr(e,r,t),i=o(s)
a.set(i,n[t]=Gr(i,s))}return{c(){for(let e=0;e<n.length;e+=1)n[e].c()
t=ce()},m(e,a){for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(e,a)
ue(e,t,a)},p(e,[s]){7&s&&(r=ke(e[1](e[0])),n=Ve(n,s,o,1,e,r,a,t.parentNode,Me,Gr,t,Tr))},i:de,o:de,d(e){e&&me(t)
for(let t=0;t<n.length;t+=1)n[t].d(e)}}}function _r(e,t,n){let a=[]
const r=window.$("#messageCenter").data().hcsWorldMessageCenter,o=function*(){for(let e=0;;e++)yield e}()
function s(){r._reposition()}function i(e){n(0,a=a.filter((({msg:t})=>t!==e))),s()}r._displayMessage=async function(e,t,r=3e3){const i=o.next().value
n(0,a=[...a,{msg:e,type:t,expire:i}]),setTimeout((()=>{n(0,a=a.filter((({expire:e})=>e!==i)))}),r),await Ae(),s()}
return[a,e=>Se(e,"msg").map((({msg:t,type:n})=>({msg:t,type:n,count:e.filter((({msg:e})=>e===t)).length}))),i,e=>i(e)]}class Rr extends oe{constructor(e){super(),se(this,e,_r,Pr,ie,{})}}let Fr=0
function Or(e){Fr[e.name]?Fr[e.name].seen&&(Fr[e.name].seen+=1):(Fr[e.name]={seen:1},function(e,t){t.creature_class=e.creature_class,t.image_id=e.image_id,t.level=Number(e.level),t.type=e.type}(e,Fr[e.name]))}function Ir(e,t,n){return t?e(t,n):n}function jr(e,t){const n=e||{}
return n.min=Ir(Math.min,n.min,t),n.max=Ir(Math.max,n.max,t),n}const Wr=["attack","armor","damage","defense","hp"]
function qr(e,t,n){const a=jr(t[n],Number(e[n]));(function(e,t){return!e||e.min!==t.min||e.max!==t.max})(t[n],a)&&(t[n]=a)}function Yr(e,t){e[t.name]=jr(e[t.name],Number(t.value))}function Kr(e){Fr||(Fr={}),Or(e),function(e,t){Wr.forEach(c(qr,e,t))}(e,Fr[e.name]),function(e,t){(function(e){return e.enhancements&&e.enhancements.length>0})(e)&&(t.enhancements=t.enhancements||{},e.enhancements.forEach(c(Yr,t.enhancements)))}(e,Fr[e.name]),_("fsh_monsterLog",Fr)}async function zr(){!function(e){Fr=e||{}}(await G("fsh_monsterLog"))}const Ur=[]
function Qr(e){var n
Aa(e)||(n=e.response.data,t.showMonsterLog&&Kr(n))}function Xr(e,t){return e.id===t.id}async function Jr(e,t){if(6!==e.type||function(e){if(Ur.find(c(Xr,e.data)))return!0
Ur.push(e.data)}(e))return
Qr(await Ta(e.data.id,t))}function Zr(){t.showMonsterLog&&(GameData.actions().forEach(Jr),m("NewMap","MonsterLog"))}let eo=""
const to=()=>eo
function no(){return Ne({subcmd:"scouttower"})}function ao(e,[t,n,a]){const r=e.insertCell(-1)
return r.colSpan=t,a&&(r.className="header"),i(r,n()),r}function ro(e,t,n){const a=e.insertRow(-1)
return n&&(a.className="fshBlue"),function(e,t){t.forEach(c(ao,e))}(a,t),a}function oo(e,t){ro(e,t[0],t[1])}function so(e,t){t.forEach(c(oo,e))}let io=0,lo=0,co=0,uo=0,fo=0,mo=0,po=0,ho=0
const go=()=>io,bo=()=>po
function vo(){io=On("Current"),lo=On("Kills"),co=On("Member"),uo=On("% of Total"),fo=On("Status"),mo=On("Titan HP"),po=On("Total"),ho=On("Your Guild")}let ko=0,yo=0,wo=0,Co=0,$o=0,Lo=0,Do=0,Vo=0,Mo=0
const xo=()=>ko,Ao=()=>yo,So=()=>wo,No=()=>Co,Ho=()=>$o,Bo=()=>Lo,To=()=>Do,Eo=()=>Vo,Go=()=>Mo
function Po(){ko=s({innerHTML:"&nbsp;"}),yo=s({innerHTML:"&nbsp;"}),wo=s(),Co=s(),$o=s(),Lo=s(),Do=s(),Vo=s(),Mo=s()}let _o=0
const Ro=()=>_o
function Fo(){for(;_o.rows.length>8;)_o.deleteRow(8)}function Oo(e){const t=s()
return i(t,e),l(t,"%"),t}const Io=[[[5,xo,!0],[1,Ao,!0]]],jo=[[[2,()=>mo,!0],[4,()=>ho,!0]]],Wo=[[[2,function(){const e=s()
return i(e,So()),l(e,"/"),i(e,No()),e}],[4,Ho]]],qo=()=>[[[2,go,!0],[4,c(Oo,Bo())]],!0],Yo=()=>[[[2,bo,!0],[4,c(Oo,To())]],!0],Ko=[[[2,()=>fo,!0],[4,Eo]],!0],zo=[[[2,()=>co,!0],[2,()=>lo,!0],[2,()=>uo,!0]]]
let Uo=0,Qo=0,Xo=""
const Jo=()=>Qo,Zo=()=>Xo
function es(){Qo=null,Uo&&!R("fshHide",Uo)&&(At(Uo,!0),He("&nbsp;",ko),He("&nbsp;",yo),o("",wo),o("",Co),o("",$o),o("",Lo),o("",Do),He("",Vo),He("",Mo),Fo())}function ts(e){return 0===e.type&&(Qo=e.base_creature_id,Xo=`(${e.x},${e.y})`,!0)}function ns(){if(Uo)At(Uo,!1)
else{const e=a("actionContainer")
Uo=n({className:"fshActionBox titanInfo"}),Po(),_o=Rt({className:"fshCenter"}),vo(),so(_o,[Io,jo,Wo,qo(),Yo(),Ko,[[[6,Go]]],zo]),i(Uo,Ro()),i(e,Uo)}}function as(e){return e<=0?'<span class="fshGreen cooldown">No active cooldown</span>':`<span class="fshMaroon cooldown">Cooldown until: ${function(e){const t=new Date(Be()+1e3*e)
return`${Te(t.getHours())}:${Te(t.getMinutes())} ${Te(t.getDate())}/${Ee[t.getMonth()]}/${t.getFullYear()}`}(e)}</span>`}function rs(e){return Nt(It(e.max_hp-e.current_hp,e.kills),2)}function os(e){return Nt(100*e.kills/e.max_hp,2)}function ss(e){!function(e){[[Ot(e.creature.name),xo],[Zo(),Ao],[e.current_hp,So],[e.max_hp,No],[e.kills,Ho],[rs(e),Bo],[os(e),To]].forEach((([e,t])=>o(e,t())))}(e),He(function(e){return Ft(e.kills,e.max_hp,e.current_hp)}(e),Eo()),He(as(e.cooldown),Go())}function is(e,t){return[[[2,()=>On(t.player.name)],[2,()=>On(t.kills.toString())],[2,()=>On(`${Nt(100*t.kills/e.kills,2)}%`)]]]}function ls(e){return e.realm&&e.creature.base_id===Jo()&&e.realm===to()}function cs(e){const t=e.find(ls)
t&&(ss(t),function(e){if(Fo(),!e.contributors)return
const t=e.contributors.map(c(is,e))
so(Ro(),t)}(t))}let us=null
const fs=e=>e?.s&&g(e.r),ds=e=>t.showTitanInfo&&g(e)&&e.some(ts)
async function ms(){!function(e,t){fs(t)&&(cs(t.r),ds(GameData.realm().dynamic)?us=window.setTimeout(e,3e4):es())}(ms,await re(no))}function ps(e){us&&(window.clearTimeout(us),us=null),ds(e)?(ns(),ms()):es()}function hs(e){var t
e.dynamic&&(t=e.name,eo=t,ps(e.dynamic))}function gs(e,t){t.realm?.name&&hs(t.realm)}function bs(e,t,n){const a=e.slice()
return a[5]=t[n],a[7]=n,a}function vs(e){let t,n=e[1](e[7])+""
return{c(){t=he(n)},m(e,n){ue(e,t,n)},p:de,d(e){e&&me(t)}}}function ks(e){let t,n,a,r
return n=new jt({props:{$$slots:{default:[vs]},$$scope:{ctx:e}}}),n.$on("click",(function(...t){return e[3](e[5],e[7],...t)})),{c(){t=pe("li"),We(n.$$.fragment),a=ye()},m(e,o){ue(e,t,o),qe(n,t,null),be(t,a),r=!0},p(t,a){e=t
const r={}
256&a&&(r.$$scope={dirty:a,ctx:e}),n.$set(r)},i(e){r||(Re(n.$$.fragment,e),r=!0)},o(e){Ie(n.$$.fragment,e),r=!1},d(e){e&&me(t),Ye(n)}}}function ys(e){let t,n,a=ke(_e(16,e[0])),r=[]
for(let t=0;t<a.length;t+=1)r[t]=ks(bs(e,a,t))
const o=e=>Ie(r[e],1,1,(()=>{r[e]=null}))
return{c(){t=pe("ul")
for(let e=0;e<r.length;e+=1)r[e].c()
we(t,"class","svelte-1k3xw12")},m(e,a){ue(e,t,a)
for(let e=0;e<r.length;e+=1)r[e]&&r[e].m(t,null)
n=!0},p(e,[n]){if(7&n){let s
for(a=ke(_e(16,e[0])),s=0;s<a.length;s+=1){const o=bs(e,a,s)
r[s]?(r[s].p(o,n),Re(r[s],1)):(r[s]=ks(o),r[s].c(),Re(r[s],1),r[s].m(t,null))}for(Fe(),s=a.length;s<r.length;s+=1)o(s)
Oe()}},i(e){if(!n){for(let e=0;e<a.length;e+=1)Re(r[e])
n=!0}},o(e){r=r.filter(Boolean)
for(let e=0;e<r.length;e+=1)Ie(r[e])
n=!1},d(e){e&&me(t),Ce(r,e)}}}function ws(e,t,n){const a=je()
let{members:r=[]}=t
const o=e=>`Buff ${Ke[e]} 16`
function s(e,t,n){n.target.blur(),ze(`${Ue}&players=${e.join(",")}`,"fsQuickBuff",618,1e3,",scrollbars"),a("buffBatch",o(t))}return e.$$set=e=>{"members"in e&&n(0,r=e.members)},[r,o,s,(e,t,n)=>s(e,t,n)]}class Cs extends oe{constructor(e){super(),se(this,e,ws,ys,ie,{members:0})}}function $s(e,t){return e>10*t||e<t?e:10*t}const Ls=[["levelValue","level"],["attackValue","attack"],["attackBonus","bonus_attack"],["defenseValue","defense"],["defenseBonus","bonus_defense"],["armorValue","armor"],["armorBonus","bonus_armor"],["damageValue","damage"],["damageBonus","bonus_damage"],["hpValue","hp"],["hpBonus","bonus_hp"],["killStreakValue","killstreak"]]
function Ds(e,t,n){e[n[0]]=Number(t[n[1]])}const Vs=[["counterAttackLevel","Counter Attack"],["doublerLevel","Doubler"],["deathDealerLevel","Death Dealer"],["darkCurseLevel","Dark Curse"],["holyFlameLevel","Holy Flame"],["constitutionLevel","Constitution"],["sanctuaryLevel","Sanctuary"],["flinchLevel","Flinch"],["nightmareVisageLevel","Nightmare Visage"],["superEliteSlayerLevel","Super Elite Slayer"],["fortitudeLevel","Fortitude"],["chiStrikeLevel","Chi Strike"],["terrorizeLevel","Terrorize"],["barricadeLevel","Barricade"],["reignOfTerrorLevel","Reign Of Terror"],["anchoredLevel","Anchored"],["severeConditionLevel","Severe Condition"],["entrenchLevel","Entrench"],["cloakLevel","Cloak"]]
function Ms(e,t,n){e[n[0]]=t[n[1]]||0}function xs(e){if(!e._skills)return
const t=Wt(e._skills),n={}
return function(e,t){Ls.forEach(c(Ds,e,t))}(n,e),function(e,t){Vs.forEach(c(Ms,e,t))}(n,t),n.superEliteSlayerMultiplier=St(.002*n.superEliteSlayerLevel,2),Qe(n.armorValue)&&function(e){e.attackValue=$s(e.attackBonus,e.levelValue),e.defenseValue=$s(e.defenseBonus,e.levelValue),e.armorValue=$s(e.armorBonus,e.levelValue),e.damageValue=$s(e.damageBonus,e.levelValue),e.hpValue=e.hpBonus}(n),n}const As=Je(["statusStore","Done."])
let Ss=[]
const Ns=Xe(As,((e,t)=>{const n=Ss.find((([t])=>t===e[0]))
n?[,n[1]]=e:Ss=[...Ss,e]
const a=Ss.find((([,e])=>"Done."!==e))
t(a?.[1]??"Done.")})),Hs=Je(0)
const Bs=Xe(Hs,((e,t)=>{!async function(e,t){if(!e)return
As.set(["relicStore","Processing defending guild relics ... "])
const n=await qt(e)
if(!n?.r?.relics)return void As.set(["relicStore","AJAX Error"])
const a=n.r.relics.length,r=1===a?1.5:St(1-a/10,2)
t({noOfRelics:a,relicMultiplier:r,leadDefenderBonus:`${String(100*r)}%`}),As.set(["relicStore","Done."])}(e,t)})),Ts=Je([])
const Es=Xe(Ts,((e,t)=>{!async function(e,t){if(!e.length)return
As.set(["defendersStore","Processing defending group stats ... "])
const n=[]
await Ze(e.map((async(e,a)=>{const r=await et(e)
n.push([a,xs(r)]),t(n)}))),As.set(["defendersStore","Done."])}(e,t)})),Gs=Xe(Es,((e,t)=>{const n=e?.find((([e])=>0===e))
n&&t(n[1])})),Ps=(e,t,n)=>Math.ceil(n*(0===t?e:tt))
function _s(e,t,[n,a]){return{armorValue:t.armorValue+Ps(e,n,a.armorValue),attackValue:t.attackValue+Ps(e,n,a.attackValue),damageValue:t.damageValue+Ps(e,n,a.damageValue),cloaked:t.cloaked+(a.cloakLevel?1:0),defenseValue:t.defenseValue+Ps(e,n,a.defenseValue),hpValue:t.hpValue+Ps(e,n,a.hpValue)}}const Rs=Xe([Bs,Es],(([e,t],n)=>{if(!e?.relicMultiplier||!t?.length)return
const a=t?.reduce(c(_s,e.relicMultiplier),{armorValue:0,attackValue:0,damageValue:0,cloaked:0,defenseValue:0,hpValue:0})
n(a)})),Fs=Je(0),Os=e=>e.members[0].name===GameData.player().username
async function Is(e,t){if(!e)return
As.set(["groupStore","Processing attacking group stats ... "])
const n=await async function(){const e=await nt()
return e?.r?.find(Os)?.id}(),a=n&&await async function(e){const t=await Yt(e)
return Ut(t?.r?.attributes)}(n),r=a&&await async function(e){const t=await Kt(),n=zt(t)
return e?.map(((e,t)=>e-n[t]))}(a)
r&&t({attack:r[0],defense:r[1],armor:r[2],hp:r[3],damage:r[4]}),As.set(["groupStore","Done."])}const js=Xe(Fs,((e,t)=>{Is(e,t)})),Ws=(e,t,n)=>Math.ceil(e*at(t,0)*n),qs=(e,t)=>Ws(e,t,.0025),Ys=(e,t)=>Ws(e,t,.001),Ks=Ys,zs=Ys,Us=Ys,Qs=Ys,Xs=Ys,Js=(e,t)=>Math.ceil(e*(1+.001*at(t,0))),Zs=(e,t)=>Math.ceil(e*(1-t*rt)),ei=Je([]),ti=Xe(ei,((e,t)=>{e&&t(Wt(e))})),ni=Xe([ti,js],(([e,t],n)=>{if(!e||!t)return
const a=Js(t.defense,e.Constitution),r=t.hp+Ks(a,e.Fortitude)
n({dmgWithChiStrike:t.damage+zs(r,e["Chi Strike"]),defWithConst:a,hpWithFortitude:r,nmv:qs(t.attack,e["Nightmare Visage"]),sanctuary:Us(t.armor,e.Sanctuary)})}))
const ai=Xe([ni,Gs,js],(function([e,t,n],a){if(!e||!t||!n)return
const r=n.attack-e.nmv,o=Qs(r,t.flinchLevel),s=Xs(e.dmgWithChiStrike,t.terrorizeLevel)
a({attack:r-o,defense:e.defWithConst+e.nmv,armor:n.armor+e.sanctuary,hp:e.hpWithFortitude,damage:e.dmgWithChiStrike-s})}))
const ri=Xe([Gs,Rs],(([e,t],n)=>{if(!e||!t)return
const a=qs(t.attackValue,e.nightmareVisageLevel),r=Js(t.defenseValue,e.constitutionLevel)
!function([e,t,n,a,r,o]){n({attackWithNmv:t.attackValue-a,chiStrike:e.chiStrikeLevel,cloak:e.cloakLevel?"Yes":"No",dmgWithChiStrike:t.damageValue+zs(o,e.chiStrikeLevel),defWithConst:r,hpWithFortitude:o,nmv:a,sanctuary:Us(t.armorValue,e.sanctuaryLevel)})}([e,t,n,a,r,t.hpValue+Ks(r,e.fortitudeLevel)])}))
const oi=Xe([ti,ri,Rs],(function([e,t,n],a){if(!e||!t||!n)return
const r=Qs(t.attackWithNmv,e.Flinch),o=t.defWithConst+t.nmv,s=Xs(t.dmgWithChiStrike,e.Terrorize)
a({attack:t.attackWithNmv-r,dc225:Zs(o,225),dc175:Zs(o,175),defense:o,armor:n.armorValue+t.sanctuary,hp:t.hpWithFortitude,damage:t.dmgWithChiStrike-s})})),si=Xe(Bs,((e,t)=>{t({noOfRelics:e?.noOfRelics??"",leadDefenderBonus:e?.leadDefenderBonus??""})})),ii=Xe(Gs,((e,t)=>{if(!e)return t("")
e.cloakLevel?t("Yes"):t("No")})),li=Xe(Rs,((e,t)=>{t({armorValue:e?.armorValue??"",attackValue:e?.attackValue??"",damageValue:e?.damageValue??"",cloaked:e?.cloaked??"",defenseValue:e?.defenseValue??"",hpValue:e?.hpValue??""})})),ci=Xe(Es,((e,t)=>{t(e?.length??"")})),ui=Xe(oi,((e,t)=>{t({attack:e?.attack??"",dc225:e?.dc225??"",dc175:e?.dc175??"",defense:e?.defense??"",armor:e?.armor??"",hp:e?.hp??"",damage:e?.damage??""})})),fi=e=>({attack:e?.attack??"",defense:e?.defense??"",armor:e?.armor??"",hp:e?.hp??"",damage:e?.damage??""}),di=Xe(js,((e,t)=>{t(fi(e))})),mi=Xe(ai,((e,t)=>{t(fi(e))}))
function pi(e,t,n){const a=e.slice()
return a[6]=t[n].id,a[7]=t[n].username,a}function hi(e){let t,n,a,r,o=e[7]+""
return{c(){t=pe("a"),n=he(o),r=he(" "),we(t,"href",a=""+(ot+e[6])),we(t,"class","svelte-3priew")},m(e,a){ue(e,t,a),be(t,n),ue(e,r,a)},p(e,r){1&r&&o!==(o=e[7]+"")&&ve(n,o),1&r&&a!==(a=""+(ot+e[6]))&&we(t,"href",a)},d(e){e&&(me(t),me(r))}}}function gi(e){let t,n,a,r=(e[0].length||"")+"",o=ke(e[0]),s=[]
for(let t=0;t<o.length;t+=1)s[t]=hi(pi(e,o,t))
return{c(){t=he(r),n=he(" Offline guild members not at relic:\n"),a=pe("div")
for(let e=0;e<s.length;e+=1)s[e].c()
we(a,"class","missing svelte-3priew")},m(e,r){ue(e,t,r),ue(e,n,r),ue(e,a,r)
for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(a,null)},p(e,[n]){if(1&n&&r!==(r=(e[0].length||"")+"")&&ve(t,r),1&n){let t
for(o=ke(e[0]),t=0;t<o.length;t+=1){const r=pi(e,o,t)
s[t]?s[t].p(r,n):(s[t]=hi(r),s[t].c(),s[t].m(a,null))}for(;t<s.length;t+=1)s[t].d(1)
s.length=o.length}},i:de,o:de,d(e){e&&(me(t),me(n),me(a)),Ce(s,e)}}}function bi(e,t,n){let{members:a=[]}=t,r=[]
const o=[({username:e})=>!a.includes(e),({last_login:e})=>e,({last_login:e})=>e<lt(),({last_login:e})=>e>ct(),({level:e})=>e<400||e>421,({level:e})=>e<441||e>450],s=e=>o.every((t=>t(e))),i=({username:e},{username:t})=>it(e,t)
return Hs.subscribe((e=>{!async function(e){const t=await st(e)
g(t)&&n(0,r=t.filter(s).sort(i))}(e)})),e.$$set=e=>{"members"in e&&n(1,a=e.members)},[r,a]}class vi extends oe{constructor(e){super(),se(this,e,bi,gi,ie,{members:1})}}function ki(e){let t,n,a
return n=new Cs({props:{members:e[10]}}),n.$on("buffBatch",e[11]),{c(){t=pe("div"),We(n.$$.fragment),we(t,"class","buff-links svelte-2rn368")},m(e,r){ue(e,t,r),qe(n,t,null),a=!0},p:de,i(e){a||(Re(n.$$.fragment,e),a=!0)},o(e){Ie(n.$$.fragment,e),a=!1},d(e){e&&me(t),Ye(n)}}}function yi(e){let t,n,a,r,o,s,i,l
return{c(){t=pe("div"),t.textContent="Processing",n=ye(),a=pe("div"),r=he(e[2]),o=ye(),s=pe("div"),s.textContent="Assumptions",i=ye(),l=pe("div"),l.textContent="Above calculations include Constitution, Fortitude, Nightmare Visage,\n        Chi Strike, Sanctuary, Terrorize and Flinch bonus calculations (in that\n        order) on both the defending group and attacking group.",we(t,"class","b-top svelte-2rn368"),we(a,"class","proc-stat svelte-2rn368"),we(s,"class","b-top svelte-2rn368"),we(l,"class","assume svelte-2rn368")},m(e,c){ue(e,t,c),ue(e,n,c),ue(e,a,c),be(a,r),ue(e,o,c),ue(e,s,c),ue(e,i,c),ue(e,l,c)},p(e,t){4&t&&ve(r,e[2])},d(e){e&&(me(t),me(n),me(a),me(o),me(s),me(i),me(l))}}}function wi(e){let t,n,a
return{c(){t=pe("button"),t.textContent="Fetch Stats",we(t,"class","custombutton"),we(t,"type","button")},m(r,o){ue(r,t,o),n||(a=xe(t,"click",e[12]),n=!0)},p:de,d(e){e&&me(t),n=!1,a()}}}function Ci(e){let t,n,a,r,o,s,i,l,c,u,f,d,m,p,h,g,b,v,k,y,w,C,$,L,D,V,M,x,A,S,N,H,B,T,E,G,P,_,R,F,O,I,j,W,q,Y,K,z,U,Q,X,J,Z,ee,te,ne,ae,re,oe,se,ie,le,ce,fe,de,ge,ke,Ce,$e,Le,De,Ve,Me,xe,Ae,Se,Ne,He,Be,Te,Ee,Ge,Pe,_e,Fe,Oe,je,Ke,ze,Ue,Qe,Xe,Je,Ze,et,tt,nt,at,rt,ot,st,it,lt,ct,ut,ft,dt,mt,pt,ht,gt,bt,vt,kt,yt,wt,Ct,$t,Lt,Dt,Vt,Mt,xt,At,St,Nt,Ht,Bt,Tt,Et,Gt,Pt,_t,Rt,Ft,Ot,It,jt,Wt,qt,Yt,Kt,zt,Ut,Qt,Xt,Jt,Zt,en,tn,nn,an,rn,on,sn=e[3].noOfRelics+"",ln=e[3].leadDefenderBonus+"",cn=e[5].attackValue+"",un=e[6].attack+"",fn=e[5].defenseValue+"",dn=e[6].defense+"",mn=e[5].armorValue+"",pn=e[6].armor+"",hn=e[5].damageValue+"",gn=e[6].damage+"",bn=e[5].hpValue+"",vn=e[6].hp+"",kn=e[5].cloaked+"",yn=e[6].dc225+"",wn=e[6].dc175+"",Cn=e[8].attack+"",$n=e[9].attack+"",Ln=e[8].defense+"",Dn=e[9].defense+"",Vn=e[8].armor+"",Mn=e[9].armor+"",xn=e[8].damage+"",An=e[9].damage+"",Sn=e[8].hp+"",Nn=e[9].hp+""
return rn=new vi({props:{members:e[10]}}),{c(){t=pe("div"),n=pe("div"),n.textContent="Defending Guild Stats",a=ye(),r=pe("div"),o=pe("div"),o.textContent="Relic Count:",s=ye(),i=pe("div"),l=he(sn),c=ye(),u=pe("div"),u.textContent="Lead Defender Bonus:",f=ye(),d=pe("div"),m=he(ln),p=ye(),h=pe("div"),h.textContent="Lead Defender Cloaked:",g=ye(),b=pe("div"),v=he(e[4]),k=ye(),y=pe("div"),y.textContent="Other Defender Stats",w=ye(),C=pe("div"),$=pe("div"),$.textContent="Raw Attack:",L=ye(),D=pe("div"),V=he(cn),M=ye(),x=pe("div"),x.textContent="Attack w/ buffs:",A=ye(),S=pe("div"),N=he(un),H=ye(),B=pe("div"),B.textContent="Raw Defense:",T=ye(),E=pe("div"),G=he(fn),P=ye(),_=pe("div"),_.textContent="Defense w/buffs:",R=ye(),F=pe("div"),O=he(dn),I=ye(),j=pe("div"),j.textContent="Raw Armor:",W=ye(),q=pe("div"),Y=he(mn),K=ye(),z=pe("div"),z.textContent="Armor w/ buffs:",U=ye(),Q=pe("div"),X=he(pn),J=ye(),Z=pe("div"),Z.textContent="Raw Damage:",ee=ye(),te=pe("div"),ne=he(hn),ae=ye(),re=pe("div"),re.textContent="Damage w/ buffs:",oe=ye(),se=pe("div"),ie=he(gn),le=ye(),ce=pe("div"),ce.textContent="Raw HP:",fe=ye(),de=pe("div"),ge=he(bn),ke=ye(),Ce=pe("div"),Ce.textContent="HP w/ buffs:",$e=ye(),Le=pe("div"),De=he(vn),Ve=ye(),Me=pe("div"),Me.textContent="Cloaked:",xe=ye(),Ae=pe("div"),Se=he(kn),Ne=ye(),He=pe("div"),He.textContent="Processed:",Be=ye(),Te=pe("div"),Ee=he(e[7]),Ge=ye(),Pe=pe("div"),_e=pe("div"),_e.textContent="Adjusted Defense Values",Fe=ye(),Oe=pe("div"),je=pe("div"),je.textContent="DC225:",Ke=ye(),ze=pe("div"),Ue=he(yn),Qe=ye(),Xe=pe("div"),Xe.textContent="DC175:",Je=ye(),Ze=pe("div"),et=he(wn),tt=ye(),nt=pe("div"),nt.textContent=" ",at=ye(),rt=pe("div"),rt.textContent="Attacking Group Stats",ot=ye(),st=pe("div"),it=pe("div"),it.textContent="Raw Group Attack:",lt=ye(),ct=pe("div"),ut=he(Cn),ft=ye(),dt=pe("div"),dt.textContent="Group Attack w/ buffs:",mt=ye(),pt=pe("div"),ht=he($n),gt=ye(),bt=pe("div"),bt.textContent="Raw Group Defense:",vt=ye(),kt=pe("div"),yt=he(Ln),wt=ye(),Ct=pe("div"),Ct.textContent="Group Defense w/ buffs:",$t=ye(),Lt=pe("div"),Dt=he(Dn),Vt=ye(),Mt=pe("div"),Mt.textContent="Raw Group Armor:",xt=ye(),At=pe("div"),St=he(Vn),Nt=ye(),Ht=pe("div"),Ht.textContent="Group Armor w/ buffs:",Bt=ye(),Tt=pe("div"),Et=he(Mn),Gt=ye(),Pt=pe("div"),Pt.textContent="Raw Group Damage:",_t=ye(),Rt=pe("div"),Ft=he(xn),Ot=ye(),It=pe("div"),It.textContent="Group Damage w/ buffs:",jt=ye(),Wt=pe("div"),qt=he(An),Yt=ye(),Kt=pe("div"),Kt.textContent="Raw Group HP:",zt=ye(),Ut=pe("div"),Qt=he(Sn),Xt=ye(),Jt=pe("div"),Jt.textContent="Group HP w/ buffs:",Zt=ye(),en=pe("div"),tn=he(Nn),nn=ye(),an=pe("div"),We(rn.$$.fragment),we(n,"class","b-top svelte-2rn368"),we(o,"class","svelte-2rn368"),we(i,"class","svelte-2rn368"),we(u,"class","svelte-2rn368"),we(d,"class","svelte-2rn368"),we(h,"class","svelte-2rn368"),we(b,"class","svelte-2rn368"),we(r,"class","stat-grid svelte-2rn368"),we(y,"class","b-top svelte-2rn368"),we($,"class","svelte-2rn368"),we(D,"class","svelte-2rn368"),we(x,"class","svelte-2rn368"),we(S,"class","svelte-2rn368"),we(B,"class","svelte-2rn368"),we(E,"class","svelte-2rn368"),we(_,"class","svelte-2rn368"),we(F,"class","svelte-2rn368"),we(j,"class","svelte-2rn368"),we(q,"class","svelte-2rn368"),we(z,"class","svelte-2rn368"),we(Q,"class","svelte-2rn368"),we(Z,"class","svelte-2rn368"),we(te,"class","svelte-2rn368"),we(re,"class","svelte-2rn368"),we(se,"class","svelte-2rn368"),we(ce,"class","svelte-2rn368"),we(de,"class","svelte-2rn368"),we(Ce,"class","svelte-2rn368"),we(Le,"class","svelte-2rn368"),we(Me,"class","svelte-2rn368"),we(Ae,"class","svelte-2rn368"),we(He,"class","svelte-2rn368"),we(Te,"class","svelte-2rn368"),we(C,"class","stat-grid svelte-2rn368"),we(t,"class","middle svelte-2rn368"),we(_e,"class","b-top svelte-2rn368"),we(je,"class","svelte-2rn368"),we(ze,"class","svelte-2rn368"),we(Xe,"class","svelte-2rn368"),we(Ze,"class","svelte-2rn368"),we(nt,"class","svelte-2rn368"),we(Oe,"class","stat-grid svelte-2rn368"),we(rt,"class","b-top svelte-2rn368"),we(it,"class","svelte-2rn368"),we(ct,"class","svelte-2rn368"),we(dt,"class","svelte-2rn368"),we(pt,"class","svelte-2rn368"),we(bt,"class","svelte-2rn368"),we(kt,"class","svelte-2rn368"),we(Ct,"class","svelte-2rn368"),we(Lt,"class","svelte-2rn368"),we(Mt,"class","svelte-2rn368"),we(At,"class","svelte-2rn368"),we(Ht,"class","svelte-2rn368"),we(Tt,"class","svelte-2rn368"),we(Pt,"class","svelte-2rn368"),we(Rt,"class","svelte-2rn368"),we(It,"class","svelte-2rn368"),we(Wt,"class","svelte-2rn368"),we(Kt,"class","svelte-2rn368"),we(Ut,"class","svelte-2rn368"),we(Jt,"class","svelte-2rn368"),we(en,"class","svelte-2rn368"),we(st,"class","stat-grid svelte-2rn368"),we(Pe,"class","right svelte-2rn368"),we(an,"class","bottom b-top svelte-2rn368")},m(e,me){ue(e,t,me),be(t,n),be(t,a),be(t,r),be(r,o),be(r,s),be(r,i),be(i,l),be(r,c),be(r,u),be(r,f),be(r,d),be(d,m),be(r,p),be(r,h),be(r,g),be(r,b),be(b,v),be(t,k),be(t,y),be(t,w),be(t,C),be(C,$),be(C,L),be(C,D),be(D,V),be(C,M),be(C,x),be(C,A),be(C,S),be(S,N),be(C,H),be(C,B),be(C,T),be(C,E),be(E,G),be(C,P),be(C,_),be(C,R),be(C,F),be(F,O),be(C,I),be(C,j),be(C,W),be(C,q),be(q,Y),be(C,K),be(C,z),be(C,U),be(C,Q),be(Q,X),be(C,J),be(C,Z),be(C,ee),be(C,te),be(te,ne),be(C,ae),be(C,re),be(C,oe),be(C,se),be(se,ie),be(C,le),be(C,ce),be(C,fe),be(C,de),be(de,ge),be(C,ke),be(C,Ce),be(C,$e),be(C,Le),be(Le,De),be(C,Ve),be(C,Me),be(C,xe),be(C,Ae),be(Ae,Se),be(C,Ne),be(C,He),be(C,Be),be(C,Te),be(Te,Ee),ue(e,Ge,me),ue(e,Pe,me),be(Pe,_e),be(Pe,Fe),be(Pe,Oe),be(Oe,je),be(Oe,Ke),be(Oe,ze),be(ze,Ue),be(Oe,Qe),be(Oe,Xe),be(Oe,Je),be(Oe,Ze),be(Ze,et),be(Oe,tt),be(Oe,nt),be(Pe,at),be(Pe,rt),be(Pe,ot),be(Pe,st),be(st,it),be(st,lt),be(st,ct),be(ct,ut),be(st,ft),be(st,dt),be(st,mt),be(st,pt),be(pt,ht),be(st,gt),be(st,bt),be(st,vt),be(st,kt),be(kt,yt),be(st,wt),be(st,Ct),be(st,$t),be(st,Lt),be(Lt,Dt),be(st,Vt),be(st,Mt),be(st,xt),be(st,At),be(At,St),be(st,Nt),be(st,Ht),be(st,Bt),be(st,Tt),be(Tt,Et),be(st,Gt),be(st,Pt),be(st,_t),be(st,Rt),be(Rt,Ft),be(st,Ot),be(st,It),be(st,jt),be(st,Wt),be(Wt,qt),be(st,Yt),be(st,Kt),be(st,zt),be(st,Ut),be(Ut,Qt),be(st,Xt),be(st,Jt),be(st,Zt),be(st,en),be(en,tn),ue(e,nn,me),ue(e,an,me),qe(rn,an,null),on=!0},p(e,t){(!on||8&t)&&sn!==(sn=e[3].noOfRelics+"")&&ve(l,sn),(!on||8&t)&&ln!==(ln=e[3].leadDefenderBonus+"")&&ve(m,ln),(!on||16&t)&&ve(v,e[4]),(!on||32&t)&&cn!==(cn=e[5].attackValue+"")&&ve(V,cn),(!on||64&t)&&un!==(un=e[6].attack+"")&&ve(N,un),(!on||32&t)&&fn!==(fn=e[5].defenseValue+"")&&ve(G,fn),(!on||64&t)&&dn!==(dn=e[6].defense+"")&&ve(O,dn),(!on||32&t)&&mn!==(mn=e[5].armorValue+"")&&ve(Y,mn),(!on||64&t)&&pn!==(pn=e[6].armor+"")&&ve(X,pn),(!on||32&t)&&hn!==(hn=e[5].damageValue+"")&&ve(ne,hn),(!on||64&t)&&gn!==(gn=e[6].damage+"")&&ve(ie,gn),(!on||32&t)&&bn!==(bn=e[5].hpValue+"")&&ve(ge,bn),(!on||64&t)&&vn!==(vn=e[6].hp+"")&&ve(De,vn),(!on||32&t)&&kn!==(kn=e[5].cloaked+"")&&ve(Se,kn),(!on||128&t)&&ve(Ee,e[7]),(!on||64&t)&&yn!==(yn=e[6].dc225+"")&&ve(Ue,yn),(!on||64&t)&&wn!==(wn=e[6].dc175+"")&&ve(et,wn),(!on||256&t)&&Cn!==(Cn=e[8].attack+"")&&ve(ut,Cn),(!on||512&t)&&$n!==($n=e[9].attack+"")&&ve(ht,$n),(!on||256&t)&&Ln!==(Ln=e[8].defense+"")&&ve(yt,Ln),(!on||512&t)&&Dn!==(Dn=e[9].defense+"")&&ve(Dt,Dn),(!on||256&t)&&Vn!==(Vn=e[8].armor+"")&&ve(St,Vn),(!on||512&t)&&Mn!==(Mn=e[9].armor+"")&&ve(Et,Mn),(!on||256&t)&&xn!==(xn=e[8].damage+"")&&ve(Ft,xn),(!on||512&t)&&An!==(An=e[9].damage+"")&&ve(qt,An),(!on||256&t)&&Sn!==(Sn=e[8].hp+"")&&ve(Qt,Sn),(!on||512&t)&&Nn!==(Nn=e[9].hp+"")&&ve(tn,Nn)},i(e){on||(Re(rn.$$.fragment,e),on=!0)},o(e){Ie(rn.$$.fragment,e),on=!1},d(e){e&&(me(t),me(Ge),me(Pe),me(nn),me(an)),Ye(rn)}}}function $i(e){let t,n,a,r,o,s=e[0].is_owner&&ki(e)
function i(e,t){return e[1]?yi:wi}let l=i(e),c=l(e),u=e[1]&&Ci(e)
return{c(){t=pe("div"),n=pe("div"),s&&s.c(),a=ye(),c.c(),r=ye(),u&&u.c(),we(n,"class","left svelte-2rn368"),we(t,"class","body svelte-2rn368")},m(e,i){ue(e,t,i),be(t,n),s&&s.m(n,null),be(n,a),c.m(n,null),be(t,r),u&&u.m(t,null),o=!0},p(e,[r]){e[0].is_owner?s?(s.p(e,r),1&r&&Re(s,1)):(s=ki(e),s.c(),Re(s,1),s.m(n,a)):s&&(Fe(),Ie(s,1,1,(()=>{s=null})),Oe()),l===(l=i(e))&&c?c.p(e,r):(c.d(1),c=l(e),c&&(c.c(),c.m(n,null))),e[1]?u?(u.p(e,r),2&r&&Re(u,1)):(u=Ci(e),u.c(),Re(u,1),u.m(t,null)):u&&(Fe(),Ie(u,1,1,(()=>{u=null})),Oe())},i(e){o||(Re(s),Re(u),o=!0)},o(e){Ie(s),Ie(u),o=!1},d(e){e&&me(t),s&&s.d(),c.d(),u&&u.d()}}}function Li(e,t,n){let a,r,o,s,i,l,c,u
ut(e,Ns,(e=>n(2,a=e))),ut(e,si,(e=>n(3,r=e))),ut(e,ii,(e=>n(4,o=e))),ut(e,li,(e=>n(5,s=e))),ut(e,ui,(e=>n(6,i=e))),ut(e,ci,(e=>n(7,l=e))),ut(e,di,(e=>n(8,c=e))),ut(e,mi,(e=>n(9,u=e)))
let{relicData:f={}}=t
const d=f.defenders.map((e=>e.player_name))
let p=!1
return ft((()=>{n(1,p=!1),Hs.set(0),Ts.set([]),Fs.set(0),ei.set([])})),e.$$set=e=>{"relicData"in e&&n(0,f=e.relicData)},[f,p,a,r,o,s,i,l,c,u,d,function(e){m("relic",e.detail)},function(){m("relic","fetchStats"),n(1,p=!0),Hs.set(f.controlled_by.guild_id),Ts.set(d),Fs.set(GameData.player().hasGroup),ei.set(GameData.player().buffs)}]}class Di extends oe{constructor(e){super(),se(this,e,Li,$i,ie,{relicData:0})}}let Vi=0
function Mi(e,t){var n,r
t?.response?.data?.defenders?.length>0&&(n=a("dialog-relic"),r=t.response.data,Vi&&Vi.$destroy(),Vi=new Di({props:{relicData:r},target:n}))}function xi(e,t){"ACT_REPAIR"===t&&GameData.fetch(pt+h+ht+gt)}let Ai=!1
function Si(e,t,n,a,r,o,s,i,l){return e.beginPath(),e.arc(o+i/2,s+l/2,i/6,0,2*Math.PI,!1),e.fillStyle=this.color,e.fill(),e.lineWidth=1,e.strokeStyle="black",e.stroke(),!0}function Ni(){if(!Ai){const e=GameController.Realm.footprintTexture
e.color=L("footprintColor"),e.Draw=Si,Ai=!0}}function Hi(){GameController?.Realm?.footprintTexture&&(Ni(),$.unsubscribe("fixed.realm",Hi))}let Bi=0
function Ti(e){$("#statbar-gold").css("background-color",e)}function Ei(){$("#HelperSendTotal").html(Ht(L("currentGoldSentTotal"))),Number(GameData.player().gold)>Bi?Ti("red"):Ti("inherit")}function Gi(){Bi=L("goldAmount"),$("#statbar-gold-tooltip-general").append(`<dt class="stat-gold-sendTo">Send To:</dt><dd id="HelperSendTo">${L("goldRecipient")}</dd><dt class="stat-gold-sendAmt">Amount:</dt><dd id="HelperSendAmt">${Ht(Bi)}</dd><dt class="stat-gold-sendTo">Send?</dt><dd><input id="HelperSendGold" value="Send!" class="custombutton" type="submit"><input type="hidden" id="xc" value=""</dd><dt class="stat-gold-sendTotal">Total Sent:</dt><dd id="HelperSendTotal">${Ht(L("currentGoldSentTotal"))}</dd>`),$("#HelperSendGold").on("click",kt),Ei(),$.subscribe(yt,Ei)}let Pi=0,_i=0,Ri=0,Fi=0,Oi=0,Ii=0
async function ji(){const e=await Sa({a:14,d:0,id:Pi.id,item_id:Pi.itemId}),t=e.response.response,n=e.response.msg
let a=n
if(0!==t){const e=n.indexOf("<");-1!==e&&(a=n.substring(0,e))}else a=`You purchased ${e.response.data.name} for ${Ht(e.response.data.cost)} gold.`
u(Ii,`${a}<br>`)}async function Wi(){const e=Xt(Oi.value)
e&&(m("NewMap","quickBuy"),await Ze(Qt(e,ji)),GameData.doAction(14,3,{id:Pi.id,item_id:Pi.itemId},0),Ri.close())}function qi(){Fi?o("",Ii):function(){Fi=n({className:"fshClear",textContent:"Select how many to quick-buy:"}),Oi=Et({id:"buyAmount",className:"fshNumberInput",min:1,max:99,value:1,type:"number"}),i(Fi,Oi)
const e=f({textContent:"Quick-buy"})
d(e,Wi),i(Fi,e),Ii=n(),i(Fi,Ii),i(_i,Fi)}()}function Yi(e,t){Pi=t,_i=_i||a("shopDialogConfirm"),_i&&(Ri=Ri||$(_i).data("hcsWorldDialogShopConfirm"),Ri&&qi())}function Ki(e){let t,n
return{c(){t=pe("div"),n=he(e[0]),we(t,"id","tp-overlay"),we(t,"class","svelte-1lrosbw")},m(e,a){ue(e,t,a),be(t,n)},p(e,t){1&t&&ve(n,e[0])},d(e){e&&me(t)}}}function zi(e){let t,n=e[1]&&Ki(e)
return{c(){n&&n.c(),t=ce()},m(e,a){n&&n.m(e,a),ue(e,t,a)},p(e,[a]){e[1]?n?n.p(e,a):(n=Ki(e),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:de,o:de,d(e){e&&me(t),n&&n.d(e)}}}function Ui(e,t,n){let{tpButton:a}=t,r=0,o=0,s=!1
function i(){const e=GameData.player().teleportCooldown
n(0,r=e-$t()+o),r>0||(clearInterval(s),n(1,s=!1),a.classList.remove("cooldown"))}return window.$.subscribe("stats.player",i),window.$.subscribe(Ct,(function(e,t){o=$t(),i(),s||0!==t.response.response||n(1,s=setInterval((()=>{i()}),1e3))})),e.$$set=e=>{"tpButton"in e&&n(2,a=e.tpButton)},[r,s,a]}class Qi extends oe{constructor(e){super(),se(this,e,Ui,zi,ie,{tpButton:2})}}function Xi(e){return e.numberOfCreatureHitsTillDead-e.numberOfHitsRequired<=1?", dies on miss":", survives a miss"}function Ji(e,t){return"-"===t?e:"-"===e||e>t?"-":e}const Zi=[[e=>"-"===e.playerHits&&"-"===e.creatureHits,()=>"Unresolved"],[e=>"-"===e.playerHits,()=>"Player dies"],[e=>1===e.playerHits,e=>`Player 1 hits${Xi(e)}`],[e=>e.playerHits>1,e=>`Player > 1 hits${Xi(e)}`]]
function el(e,t){return t[0](e)}function tl(e){e.playerHits=Ji(e.numberOfHitsRequired,e.numberOfCreatureHitsTillDead),e.creatureHits=Ji(e.numberOfCreatureHitsTillDead,e.numberOfHitsRequired),e.fightStatus=function(e){const t=Zi.find(c(el,e))
return t?t[1](e):"Unknown"}(e)}function nl(e,t,n){return e.callback.groupExists?t:n}function al(e,t,n,a){t>0&&(e.extraNotes+=`${n} = ${Math.floor(a*t*.001)}<br>`)}const rl=e=>nl(e,e.callback.groupArmorValue,e.player.armorValue)
function ol(e){e.creatureHitByHowMuch>=0?function(e){const t=e.generalVariable*e.creature.damage
t<e.overallArmorValue?e.numberOfCreatureHitsTillDead=e.overallHPValue:e.numberOfCreatureHitsTillDead=Math.ceil(e.overallHPValue/(t-e.overallArmorValue))}(e):e.numberOfCreatureHitsTillDead="-"}function sl(e){!function(e){const t=rl(e)
e.overallArmorValue=t+Math.floor(e.player.armorValue*e.player.sanctuaryLevel*.001)}(e),function(e){al(e,e.player.sanctuaryLevel,"Sanc Bonus Armor",e.player.armorValue)}(e),function(e){e.terrorizeEffect=Math.floor(e.creature.damage*e.player.terrorizeLevel*.001)}(e),function(e){e.player.terrorizeLevel>0&&(e.extraNotes+=`Terrorize Creature Damage Effect = ${-1*e.terrorizeEffect}<br>`)}(e),e.creature.damage-=e.terrorizeEffect,function(e){e.creatureDamageDone=Math.ceil(e.generalVariable*e.creature.damage-e.overallArmorValue+e.overallHPValue)}(e),ol(e)}const il=e=>nl(e,e.callback.groupAttackValue,e.player.attackValue)
function ll(e){return Math.floor(e.creature.defense*e.player.darkCurseLevel*rt)}function cl(e){const t=il(e)
e.player.darkCurseLevel>0&&(e.extraNotes+=`DC Bonus Attack = ${ll(e)}<br>`),e.nightmareVisageAttackMovedToDefense=Math.floor((t+e.counterAttackBonusAttack)*e.player.nightmareVisageLevel*.0025),e.player.nightmareVisageLevel>0&&(e.extraNotes+=`NMV Attack moved to Defense = ${e.nightmareVisageAttackMovedToDefense}<br>`),e.overallAttackValue=t+e.counterAttackBonusAttack-e.nightmareVisageAttackMovedToDefense,e.hitByHowMuch=function(e){const t=e.creature.defense-ll(e)
return 3===e.combatEvaluatorBias?e.overallAttackValue-Math.ceil(t)-50:e.overallAttackValue-Math.ceil(e.attackVariable*t)}(e)}const ul=(e,t,n)=>Math.max(Math.ceil((e-t+1)/n/.0025),0)
function fl(e){e.lowestCALevelToStillHit=ul(e.counterAttackBonusAttack,e.hitByHowMuch,e.player.attackValue),e.lowestCALevelToStillKill=ul(e.counterAttackBonusDamage,e.damageDone,e.player.damageValue)}function dl(e){fl(e),e.lowestFeasibleCALevel=Math.max(e.lowestCALevelToStillHit,e.lowestCALevelToStillKill),e.extraNotes+=`Lowest CA to still 1-hit this creature = ${e.lowestFeasibleCALevel}<br>`,0!==e.lowestFeasibleCALevel&&function(e){e.extraAttackAtLowestFeasibleCALevel=Math.floor(.0025*e.player.attackValue*e.lowestFeasibleCALevel),e.extraDamageAtLowestFeasibleCALevel=Math.floor(.0025*e.player.damageValue*e.lowestFeasibleCALevel),e.extraNotes+=`Extra CA Att/Dam at this lowered CA level = ${e.extraAttackAtLowestFeasibleCALevel} / ${e.extraDamageAtLowestFeasibleCALevel}<br>`}(e),e.extraStaminaPerHitAtLowestFeasibleCALevel=function(e){return e.player.counterAttackLevel>0?Math.ceil(.0025*(1+e.player.doublerLevel/50)*e.lowestFeasibleCALevel):0}(e),e.extraStaminaPerHitAtLowestFeasibleCALevel<e.extraStaminaPerHit?e.extraNotes+=`Extra Stam Used at this lowered CA level = ${e.extraStaminaPerHitAtLowestFeasibleCALevel}<br>`:e.extraNotes+="No reduction of stam used at the lower CA level<br>"}function ml(e,t,n){e[t]>203?e.extraNotes+=`Even with CA203 you cannot ${n} this creature<br>`:0!==e[t]&&(e.extraNotes+=`You need a minimum of CA${e[t]} to ${n} this creature<br>`)}function pl(e){(function(e){return e.player.counterAttackLevel>0&&1===e.numberOfHitsRequired})(e)&&dl(e),function(e){return"-"===e.numberOfHitsRequired||1!==e.numberOfHitsRequired}(e)&&function(e){fl(e),ml(e,"lowestCALevelToStillHit","hit"),ml(e,"lowestCALevelToStillKill","1-hit kill")}(e)}const hl=e=>nl(e,e.callback.groupHPValue,e.player.hpValue)
const gl=e=>nl(e,e.callback.groupDamageValue,e.player.damageValue)+e.deathDealerBonusDamage+e.counterAttackBonusDamage+e.holyFlameBonusDamage+e.chiStrikeExtraDamage,bl=e=>Math.floor(e.overallDamageValue-(e.generalVariable*e.creature.armor+e.hpVariable*e.creature.hp))
function vl(e){if(function(e){const t=hl(e),{fortitudeLevel:n}=e.player
e.fortitudeExtraHPs=Math.floor(t*n*.001),n>0&&(e.extraNotes+=`Fortitude Bonus HP = ${e.fortitudeExtraHPs}<br>`),e.overallHPValue=t+e.fortitudeExtraHPs}(e),function(e){const{chiStrikeLevel:t}=e.player
e.chiStrikeExtraDamage=Math.floor(e.overallHPValue*t*.001),t>0&&(e.extraNotes+=`Chi Strike Bonus Damage = ${e.chiStrikeExtraDamage}<br>`)}(e),e.overallDamageValue=gl(e),e.damageDone=bl(e),e.hitByHowMuch>0){let t=1
e.overallDamageValue>=e.generalVariable*e.creature.armor&&(t=e.overallDamageValue-e.generalVariable*e.creature.armor),e.numberOfHitsRequired=Math.ceil(e.hpVariable*e.creature.hp/t)}else e.numberOfHitsRequired="-"}const kl=e=>nl(e,e.callback.groupDefenseValue,e.player.defenseValue),yl=e=>Math.floor(kl(e)*e.player.constitutionLevel*.001)
const wl=e=>e.creature.attack-e.creature.attack*e.player.flinchLevel*.001-e.overallDefenseValue
function Cl(e){e.overallDefenseValue=kl(e)+yl(e)+e.nightmareVisageAttackMovedToDefense,function(e){e.player.constitutionLevel>0&&(e.extraNotes+=`Constitution Bonus Defense = ${yl(e)}<br>`)}(e),function(e){al(e,e.player.flinchLevel,"Flinch Bonus Attack Reduction",e.creature.attack)}(e),e.creatureHitByHowMuch=Math.floor(e.attackVariable*wl(e)),3===e.combatEvaluatorBias&&(e.creatureHitByHowMuch=Math.floor(wl(e)-50))}function $l(e){e.extraNotes="",function(e){e.player.superEliteSlayerLevel>0&&(e.extraNotes+=`SES Stat Reduction Multiplier = ${e.player.superEliteSlayerMultiplier}<br>`)}(e),function(e){e.holyFlameBonusDamage=0,"Undead"===e.creature.class&&(e.holyFlameBonusDamage=Math.max(Math.floor((e.player.damageValue-e.creature.armor)*e.player.holyFlameLevel*.002),0),e.player.holyFlameLevel>0&&(e.extraNotes+=`HF Bonus Damage = ${e.holyFlameBonusDamage}<br>`))}(e),function(e){e.deathDealerBonusDamage=Math.floor(e.player.damageValue*(Math.min(.01*Math.floor(e.player.killStreakValue/5)*e.player.deathDealerLevel,20)/100))}(e),function(e){e.counterAttackBonusAttack=Math.floor(.0025*e.player.attackValue*e.player.counterAttackLevel),e.counterAttackBonusDamage=Math.floor(.0025*e.player.damageValue*e.player.counterAttackLevel)}(e),function(e){e.extraStaminaPerHit=0,e.player.counterAttackLevel>0&&(e.extraStaminaPerHit=Math.ceil(.0025*(1+e.player.doublerLevel/50)*e.player.counterAttackLevel))}(e),function(e){e.player.deathDealerLevel>0&&(e.extraNotes+=`DD Bonus Damage = ${e.deathDealerBonusDamage}<br>`)}(e),function(e){e.player.counterAttackLevel>0&&(e.extraNotes+=`CA Bonus Attack/Damage = ${e.counterAttackBonusAttack} / ${e.counterAttackBonusDamage}<br>CA Extra Stam Used = ${e.extraStaminaPerHit}<br>`)}(e)}const Ll=e=>e.creatureHitByHowMuch>=0?"Yes":"No",Dl=e=>e.hitByHowMuch>0?"Yes":"No",Vl=e=>`<span style="color:#333333">${e}</span>`,Ml=e=>`<tr>${e}</tr>`,xl=(e,t)=>`<td${t%2?"":' class="fshRight"'}>${e}</td>`,Al=e=>Ml(e.map(xl).join("")),Sl=e=>Ml(`<td bgcolor="#CD9E4B" colspan="4" align="center">${(e=>e.callback.groupExists?"Group ":"")(e)}Combat Evaluation</td>`),Nl=e=>Al([Vl("Will I hit it?"),Dl(e),Vl("Extra Attack:"),`( ${e.hitByHowMuch} )`]),Hl=e=>Al([Vl("# Hits to kill it?"),e.numberOfHitsRequired,Vl("Extra Damage:"),`( ${e.damageDone} )`]),Bl=e=>Al([Vl("Will I be hit?"),Ll(e),Vl("Extra Defense:"),`( ${-1*e.creatureHitByHowMuch} )`]),Tl=e=>Al([Vl("# Hits to kill me?"),e.numberOfCreatureHitsTillDead,Vl("Extra Armor + HP:"),`( ${-1*e.creatureDamageDone} )`]),El=e=>Al([Vl("# Player Hits?"),e.playerHits,Vl("# Creature Hits?"),e.creatureHits]),Gl=e=>Ml(`${xl(Vl("Fight Status:"),0)}<td colspan="3"><span>${e.fightStatus}</span></td>`),Pl=e=>Ml(`${xl(Vl("Notes:"),0)}<td colspan="3"><span style="font-size:x-small;">${e.extraNotes}</span></td>`)
let _l=0,Rl=0,Fl=0
function Ol(){return cr(Rl)?"Remove from do not kill list":"Add to the do not kill list"}function Il(){o(Ol(),Fl)}function jl(){m("NewMap","doNotKillLink")
const e=t.doNotKillList.indexOf(Rl);-1===e?t.doNotKillList.push(Rl):t.doNotKillList.splice(e,1),Il(),N("doNotKillList",t.doNotKillList.join()),fr()}function Wl(){Fl?Il():function(){Fl=f({className:"fshBl",textContent:Ol()})
const e=n({className:"description",innerHTML:'<span class="ui-helper-hidden-accessible"><input type="text"></span>'})
i(e,Fl),i(_l,e),d(Fl,jl)}()}function ql(e,t){!function(e){if(!_l){const t=W("body",e)
1===t.length&&([_l]=t)}}(t),_l&&(Rl=X(e),Wl())}let Yl=0,Kl=0,zl=0,Ul=0
function Ql(){zl||(Kl||(Kl=n(),i(Yl,Kl),i(Yl,n({innerHTML:'<span class="fshFooter">*Does include CA, DD, HF, DC, Flinch, Super Elite Slayer, NMV, Sanctuary, Constitution, Fortitude, Chi Strike and Terrorize (if active) and allow for randomness (1.1053). Constitution, NMV, Fortitude and Chi Strike apply to group stats.</span>'}))),zl=n(),i(Kl,zl))}function Xl(e){Ql(),He(e,zl)}function Jl(e){Ul||(Ql(),Ul=n(),i(Kl,Ul)),He(e,Ul)}function Zl(e,t){const n={name:e.name,class:e.creature_class,attack:Number(e.attack),defense:Number(e.defense),armor:Number(e.armor),damage:Number(e.damage),hp:Number(e.hp)}
return function(e,t,n){3===n&&(t.attack-=Math.ceil(t.attack*e),t.defense-=Math.ceil(t.defense*e),t.armor-=Math.ceil(t.armor*e),t.damage-=Math.ceil(t.damage*e),t.hp-=Math.ceil(t.hp*e))}(t,n,e.type),n}function ec(e,n,a){const r={}
r.callback=a,r.player=xs(n),function(e){e.combatEvaluatorBias=t.combatEvaluatorBias,e.attackVariable=1.1053,e.generalVariable=t.generalVariable,e.hpVariable=t.hpVariable}(r),r.creature=Zl(e.response.data,r.player.superEliteSlayerMultiplier),function(e){var t
t=e,[$l,cl,vl,Cl,sl,tl,pl].forEach((e=>e(t)))}(r),r.evaluatorHTML=function(e){return`<table width="100%"><tbody>${Sl(e)}${Nl(e)}${Hl(e)}${Bl(e)}${Tl(e)}${El(e)}${Gl(e)}${Pl(e)}</tbody></table>`}(r),a.groupExists?Jl(r.evaluatorHTML):Xl(r.evaluatorHTML)}function tc(e){return e.members[0].name===p()}async function nc(e,t,n){if(n){!function(e,t,n){if(!n.r?.attributes)return
const a=n.r.attributes
ec(e,t,{groupExists:!0,groupAttackValue:a[0].value,groupDefenseValue:a[1].value,groupArmorValue:a[2].value,groupDamageValue:a[3].value,groupHPValue:a[4].value})}(e,t,await Yt(n))}}async function ac(e,t){const n=function(e){if(g(e.r))return e.r.find(tc)?.id}(await nt())
nc(e,t,n)}async function rc(e,t){if(Yl||(Yl=a("dialog-viewcreature")),Yl&&(Xl(""),Jl(""),t?.response?.data)){ql(t.response.data.name,Yl)
const e=await Dt(!0)
e?._skills&&function(e,t){e.player.hasGroup&&ac(e,t),ec(e,t,{groupExists:!1})}(t,e)}}let oc=0
function sc(e){const t=W("verbs",e)
1===t.length&&Vt(t[0])}function ic(){if(!oc)return
const e=a("actionList")
J("player",e).forEach(sc)}const lc="showHuntingBuffs"
function cc(){return`${Jt(lc)} ${Zt("enabledHuntingMode")}<select name="enabledHuntingMode"><option value="1"${en(t.enabledHuntingMode,"1")}>${t.buffsName}</option><option value="2"${en(t.enabledHuntingMode,"2")}>${t.buffs2Name}</option><option value="3"${en(t.enabledHuntingMode,"3")}>${t.buffs3Name}</option></select>`}let uc=0,fc=""
const dc=()=>uc,mc=()=>fc
function pc(){const e=[null,[t.buffs,t.buffsName],[t.buffs2,t.buffs2Name],[t.buffs3,t.buffs3Name]][t.enabledHuntingMode]
g(e)&&([uc,fc]=e)}function hc(e){"enabledHuntingMode"===e.target.name&&(m("NewMap","toggleEnabledHuntingMode"),t.enabledHuntingMode=e.target.value,N("enabledHuntingMode",t.enabledHuntingMode),pc(),GameData.fetch(h))}function gc(e){m("NewMap","togglePref"),t[e]=!t[e],N(e,t[e])}const bc={hideSubLvlCreature:function(){gc("hideSubLvlCreature"),GameData.fetch(gt)},hidePlayerActions:function(){m("NewMap","toggleHidePlayerActions"),oc=!oc,N("hidePlayerActions",oc),GameData.fetch(gt)},showCreatureInfo:()=>gc("showCreatureInfo"),showHuntingBuffs:function(){gc("showHuntingBuffs"),GameData.fetch(h)},showMonsterLog:()=>gc("showMonsterLog"),showTitanInfo:function(){gc("showTitanInfo"),ps(GameData.realm().dynamic)},showBuffInfo:function(){gc("showBuffInfo"),Fn()}}
function vc(e){const t=bc[e.target.name]
te(t)&&(e.target.blur(),t(e))}function kc(){const e=a("worldPage")
if(!e)return
const t=n({className:"fshCenter fshFten"}),r=n({id:"fshWorldPrefs",innerHTML:`${Jt("showCreatureInfo")}&nbsp;&nbsp;${Jt("showMonsterLog")}&nbsp;&nbsp;${Jt("showTitanInfo")}&nbsp;&nbsp;${Jt("showBuffInfo")}<br>${Jt("hideSubLvlCreature")}&nbsp;&nbsp;${Jt("hidePlayerActions")}&nbsp;&nbsp;${cc()}`})
d(r,vc),C(r,"change",hc),i(t,r)
const o=n()
return i(t,o),i(e,t),o}const yc=[{generalVariable:1.1053,hpVariable:1.1},{generalVariable:1.1,hpVariable:1.053},{generalVariable:1.053,hpVariable:1},{generalVariable:1.1053,hpVariable:1}]
function wc(){var e
t.combatEvaluatorBias=L("combatEvaluatorBias"),t.generalVariable=(e=t.combatEvaluatorBias,yc[e]?yc[e].generalVariable:1.1053),t.hpVariable=function(e){return yc[e]?yc[e].hpVariable:1.1}(t.combatEvaluatorBias)}function Cc(e,t){return e[t.name]=!0,e}function $c(e,t,n){return e[X(n)]||t.push(n),t}function Lc(e){He("",e)}function Dc(e,t){const n=t.b.reduce(Cc,{}),a=dc().reduce(c($c,n),[])
a.length>0?function(e,t){He(`You are missing some ${mc()} hunting buffs<br>(${t.join(", ")})`,e)}(e,a):Lc(e)}function Vc(e,n,a){dc()&&function(e,n){t.showHuntingBuffs?Dc(e,n):Lc(e)}(e,a)}function Mc(e,t){return 6!==t.type||(0!==t.data.creature_type||t.data.level>=e)}function xc(e){const t=O(e)
return t?.actions?.length?(t.actions=t.actions.filter(c(Mc,function(e){return e.realm?.minlevel||GameData.realm().minlevel}(t))),Mt(t)):e}function Ac(e,n){t.hideSubLvlCreature&&function(e){return e.data?.d&&tn(e.data.d,gt)}(n)&&(e.dataFilter=xc)}function Sc(e){t[e[0]]=xt(e[1])}function Nc(e){t[e]=xt(e)}function Hc(){[["buffs","huntingBuffs"],["buffs2","huntingBuffs2"],["buffs3","huntingBuffs3"]].forEach(Sc),["doNotKillList"].forEach(Nc)}function Bc(e){t[e[0]]=L(e[1])}function Tc(e){t[e]=L(e)}function Ec(){[["buffsName","huntingBuffsName"],["buffs2Name","huntingBuffs2Name"],["buffs3Name","huntingBuffs3Name"],["showHuntingBuffs","showHuntingBuffs"]].forEach(Bc),["enabledHuntingMode","hideSubLvlCreature","showTitanInfo","showBuffInfo","showMonsterLog","showCreatureInfo"].forEach(Tc)}const Gc=[function(){let e=0
window.requestAnimationFrame=t=>{const n=window.performance.now(),a=Math.max(e+16,n)
return e=a,setTimeout((()=>{t(e)}),a-n)},window.cancelAnimationFrame=clearTimeout},function(){wc(),Hc(),Ec()
const e=kc()
$.ajaxPrefilter("JSON",Ac),t.hideSubLvlCreature&&GameData.fetch(gt),function(e){pc()
const n=c(Vc,e)
$.subscribe(b,n),t.showHuntingBuffs&&window.initialGameData&&n(null,{b:window.initialGameData.player.buffs})}(e),oc=L("hidePlayerActions"),$.subscribe(ne,ic),ic()},function(){bt(),vt()&&Gi()},function(){$.subscribe(Lt,rc)},function(){Hr.forEach(Br)},function(){L("enableCreatureColoring")&&i(document.body,_t("#actionList .creature-1 {color: green;}\n#actionList .creature-2 {color: yellow;}\n#actionList .creature-3 {color: red;}"))},function(){$.subscribe(ne,fr),fr(),function(){const e=GameData.doAction
GameData.doAction=pr(e)}()},function(){zr(),$.subscribe("-1-success.action-response 4-success.action-response 5-success.action-response 25-success.action-response",Zr),Zr()},function(){$.subscribe(mt,xi)},async function(){if(L("keepLogs")){!function(e){e&&($a=e),$.subscribe(P,xa)}(await G("fsh_combatLog"))}},function(){window.initialGameData&&gs(0,window.initialGameData),$.subscribe(`${Ge} ${Pe}`,gs)},function(){$.subscribe(wt,Yi)},function(){$.subscribe(dt,Mi)},function(){$("#messageCenter").worldMessageCenter({offset:"0 60"})},function(){D("#mapTooltip")},function(){ca(),$.subscribe(k,ua),$.subscribe(y,fa)},function(){Fn(),$.subscribe(`${b} ${v}`,Fn)},function(){C(a("actionList"),"mouseover",lr)},function(){const{body:e}=document
C(e,"keydown",ya),C(e,"keyup",wa)},function(){const e=$("#world-event-badge")
e.length&&(e.off(),d(e[0],Sr))},function(){const e=T(".actionListHeaderButton.teleport")
!function(e,t){new Qi({target:e,props:t})}(e,{tpButton:e})},function(){var e
L("messageStack")&&(e=a("messageCenter"),new Rr({target:e}))},function(){GameController?.Realm?.footprintTexture?Ni():$.subscribe("fixed.realm",Hi)}]
function Pc(){e(Gc)}export{Pc as default}
//# sourceMappingURL=newMap-DpcRjzac.js.map
