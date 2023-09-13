import{b_ as t,ct as e,l as s,o as a,i as r,s as n,b as o,c,ao as i,aX as l,p as u,cs as g}from"./calfSystem-2f15e074.js"
import{l as d,r as p}from"./lastActivityToDays-2b210b69.js"
import{a as f}from"./all-414e0607.js"
import{c as E}from"./createTable-3747e7e3.js"
import{c as h}from"./createButton-afda5474.js"
import{c as m}from"./createInput-7756e4ea.js"
import{b}from"./now-6f22aec9.js"
import{a as A}from"./addCommas-47d6aaa1.js"
import"./guildManage-9b6c7211.js"
import"./closestTr-ce435b3a.js"
import"./lastActivity-f32257d7.js"
import"./regExpGroups-54cf6a6f.js"
import"./uniq-9cddbf0f.js"
const y=(t,...e)=>(...s)=>e.reduce(((t,e)=>e(t)),t(...s)),_=(t,e)=>{const s=e||t.length
return(...e)=>{const a=e.length||1
if(s===a)return t(...e)
return _(((...s)=>t(...e,...s)),s-e.length)}},v=t=>e=>(t(e),e),C=t=>{const e=t.split("."),s=(t={},e=[])=>{const a=t[e.shift()]
return null==a||0===e.length?a:s(a,e)}
return{get:t=>s(t,[...e]),set:(t,s)=>{let a=t
const[r,...n]=e.reverse()
for(const t of n.reverse())void 0===a[t]&&(a[t]={},a=a[t])
return a[r]=s,t}}},N=(t,e)=>t===e?0:void 0===t?1:void 0===e||t<e?-1:1
var S
!function(t){t.ASC="asc",t.DESC="desc",t.NONE="none"}(S||(S={}))
const T=(t,e)=>{const s=C(t).get
return(t,a)=>e(s(t),s(a))},O=t=>{const{pointer:e,direction:s="asc",comparator:a=N}=t
if(!e||"none"===s)return t=>[...t]
const r=T(e,a),n="desc"===s?(o=r,(t,e)=>o(e,t)):r
var o
return t=>[...t].sort(n)}
var G
!function(t){t.BOOLEAN="boolean",t.NUMBER="number",t.DATE="date",t.STRING="string"}(G||(G={}))
var H
!function(t){t.INCLUDES="includes",t.IS="is",t.IS_NOT="isNot",t.LOWER_THAN="lt",t.GREATER_THAN="gt",t.GREATER_THAN_OR_EQUAL="gte",t.LOWER_THAN_OR_EQUAL="lte",t.EQUALS="equals",t.NOT_EQUALS="notEquals",t.ANY_OF="anyOf"}(H||(H={}))
const R=t=>e=>!t(e),L=t=>e=>Object.is(t,e),D=t=>e=>e<t,P=t=>e=>e>t,j=t=>e=>t===e,x={includes:t=>e=>e.includes(t),is:L,isNot:y(L,R),lt:D,gte:y(D,R),gt:P,lte:y(P,R),equals:j,notEquals:y(j,R),anyOf:t=>e=>t.includes(e)},M=t=>(...e)=>t.every((t=>t(...e))),w=({value:t="",operator:e="includes",type:s})=>{const a=(t=>{switch(t){case G.BOOLEAN:return Boolean
case G.NUMBER:return Number
case G.DATE:return t=>new Date(t)
case G.STRING:return y(String,(t=>t.toLowerCase()))
default:return t=>t}})(s),r=y(a,x[e])(t)
return y(a,r)},k=t=>{const e=(t=>{const e={}
return Object.keys(t).filter((e=>Array.isArray(t[e]))).forEach((s=>{const a=t[s].filter((t=>""!==t.value))
a.length>0&&(e[s]=a)})),e})(t),s=Object.keys(e).map((t=>{const s=C(t).get,a=e[t].map(w)
return y(s,M(a))})),a=M(s)
return t=>t.filter(a)}
function F(t,...e){let s=I(t.raw[0])
for(const[a,r]of e.entries()){if(r instanceof RegExp)s+=r.source
else{if("string"!=typeof r)throw new Error("Illegal substitution: "+r)
s+=r.replace(/[\\^$.*+?()[\]{}|=!<>:-]/g,"\\$&")}s+=I(t.raw[a+1])}let a=""
if(s.startsWith("/")){const t=s.lastIndexOf("/")
if(0===t)throw new Error("If the `re` string starts with a slash, it must end with a second slash and zero or more flags: "+s)
a=s.slice(t+1),s=s.slice(1,t)}return new RegExp(s,a)}function I(t){return t.replace(/\\`/g,"`")}const $=t=>{const{value:e,scope:s=[],escape:a=!1,flags:r=""}=t,n=s.map((t=>C(t).get))
if(0===s.length||!e)return t=>t
const o=!0===a?F`/${e}/${r}`:new RegExp(e,r)
return t=>t.filter((t=>n.some((e=>o.test(String(e(t)))))))},U=t=>({emitter:e})=>{const s={},a={off:t=>(t||Object.keys(s).forEach((t=>a.off(t))),s[t]&&e.off(t,...s[t]),a)}
for(const r of Object.keys(t)){const n=t[r]
s[r]=[],a[n]=function(...t){return s[r]=s[r].concat(t),e.on(r,...t),a}}return a},z=({page:t=1,size:e}={page:1})=>(s=[])=>{const a=e||s.length,r=(t-1)*a
return s.slice(r,r+a)}
var Y
!function(t){t.TOGGLE_SORT="TOGGLE_SORT",t.DISPLAY_CHANGED="DISPLAY_CHANGED",t.PAGE_CHANGED="CHANGE_PAGE",t.EXEC_CHANGED="EXEC_CHANGED",t.FILTER_CHANGED="FILTER_CHANGED",t.SUMMARY_CHANGED="SUMMARY_CHANGED",t.SEARCH_CHANGED="SEARCH_CHANGED",t.EXEC_ERROR="EXEC_ERROR"}(Y||(Y={}))
const X=t=>{const{get:e,set:s}=C(t)
return{get:e,set:_(s)}},B=({sortFactory:t,tableState:e,data:s,filterFactory:a,searchFactory:r})=>{let n=s.length,o=s
const c=(()=>{const t={},e={on:(s,...a)=>(t[s]=(t[s]||[]).concat(a),e),dispatch(s,...a){const r=t[s]||[]
for(const t of r)t(...a)
return e},off(s,...a){if(void 0===s)Object.keys(t).forEach((t=>e.off(t)))
else{const e=t[s]||[]
t[s]=a.length?e.filter((t=>!a.includes(t))):[]}return e}}
return e})(),i=X("sort"),l=X("slice"),u=X("filter"),g=X("search")
c.on("SUMMARY_CHANGED",(({filteredCount:t})=>{n=t}))
const d=t=>Object.assign({},t),p=_(c.dispatch,2),f=t=>(o=t,p("SUMMARY_CHANGED",{page:e.slice.page,size:e.slice.size,filteredCount:t.length})),E=_(((t,s,a)=>y(d,v(p(s)),t.set(e))(a))),h=()=>E(l,"CHANGE_PAGE",Object.assign({},l.get(e),{page:1})),m=(t,e)=>{const s=y(E(t,e),h,(()=>c.exec()))
return(t={})=>s(t)},b={sort:m(i,"TOGGLE_SORT"),filter:m(u,"FILTER_CHANGED"),search:m(g,"SEARCH_CHANGED"),slice:y(E(l,"CHANGE_PAGE"),(()=>c.exec())),exec:({processingDelay:n=20}={processingDelay:20})=>{c.dispatch("EXEC_CHANGED",{working:!0}),setTimeout((()=>{try{const n=a(u.get(e)),o=r(g.get(e)),d=t(i.get(e)),p=z(l.get(e)),E=y(n,o,v(f),d,p)(s)
c.dispatch("DISPLAY_CHANGED",E.map((t=>({index:s.indexOf(t),value:t}))))}catch(t){c.dispatch("EXEC_ERROR",t)}finally{c.dispatch("EXEC_CHANGED",{working:!1})}}),n)},async eval(n=e){const o=t(i.get(n)),c=r(g.get(n)),d=a(u.get(n)),p=z(l.get(n))
return y(d,c,o,p)(s).map((t=>({index:s.indexOf(t),value:t})))},onDisplayChange(t){c.on("DISPLAY_CHANGED",t)},getTableState:()=>JSON.parse(JSON.stringify(e)),getMatchingItems:()=>[...o]},A=Object.assign(c,b)
return Object.defineProperties(A,{filteredCount:{get:()=>n},length:{get:()=>s.length}}),A},q=U({FILTER_CHANGED:"onFilterChange"})
var Q
!function(t){t.BOOLEAN="boolean",t.NUMBER="number",t.DATE="date",t.STRING="string"}(Q||(Q={}))
const W=({table:t,pointer:e,operator:s="includes",type:a="string"})=>{const r=q({emitter:t})
return Object.assign({filter(r){const n=this.state()
return void 0===r?delete n[e]:Object.assign(n,{[e]:[{value:r,operator:s,type:a}]}),t.filter(n)},state:()=>t.getTableState().filter||{}},r)},J=U({SEARCH_CHANGED:"onSearchChange"}),V=({table:t,scope:e=[]})=>{const s=J({emitter:t})
return Object.assign(s,{search:(s,a={})=>t.search(Object.assign({},{value:s,scope:e},a)),state:()=>t.getTableState().search},s)},Z=U({CHANGE_PAGE:"onPageChange",SUMMARY_CHANGED:"onSummaryChange"}),K=({table:t})=>{let{slice:{page:e,size:s}}=t.getTableState(),a=t.filteredCount,r=s?Math.ceil(a/s):1
const n=Z({emitter:t}),o={selectPage:e=>t.slice({page:e,size:s}),selectNextPage:()=>o.selectPage(e+1),selectPreviousPage:()=>o.selectPage(e-1),changePageSize:e=>t.slice({page:1,size:e}),isPreviousPageEnabled:()=>e>1,isNextPageEnabled:()=>r>e,state:()=>Object.assign(t.getTableState().slice,{filteredCount:a,pageCount:r})},c=Object.assign(o,n)
return c.onSummaryChange((({page:t,size:n,filteredCount:o})=>{e=t,s=n,a=o,r=s?Math.ceil(a/s):1})),c},tt=U({TOGGLE_SORT:"onSortToggle"}),et=["asc","desc"],st=({pointer:t,table:e,cycle:s=!1,debounceTime:a=0})=>{const r=!0===s?["none"].concat(et):[...et].reverse(),n=((t,e)=>{let s=null
return(...a)=>{null!==s&&clearTimeout(s),s=setTimeout((()=>t(...a)),e)}})(e.sort,a)
let o=0
const c=tt({emitter:e}),i=Object.assign({toggle(){o++
const e=r[o%r.length]
return n({pointer:t,direction:e})},state:()=>e.getTableState().sort},c)
i.onSortToggle((({pointer:e})=>{o=t!==e?0:o}))
const{pointer:l,direction:u="asc"}=i.state()
return o=l===t?"asc"===u?1:2:0,i},at=U({EXEC_CHANGED:"onExecutionChange"}),rt=({sortFactory:t=O,filterFactory:e=k,searchFactory:s=$,tableState:a={sort:{},slice:{page:1},filter:{},search:{}},data:r=[]}={sortFactory:O,filterFactory:k,searchFactory:$,tableState:{sort:{},slice:{page:1},filter:{},search:{}},data:[]},...n)=>{const o=B({sortFactory:t,filterFactory:e,tableState:a,data:r,searchFactory:s})
return n.reduce(((n,c)=>Object.assign(n,c({sortFactory:t,filterFactory:e,searchFactory:s,tableState:a,data:r,table:o}))),o)},nt=({table:t,el:e})=>{const s=(({table:t})=>at({emitter:t}))({table:t})
return s.onExecutionChange((function({working:t}){e.classList.remove("st-working"),!0===t&&e.classList.add("st-working")})),s},ot=({el:t,table:e,conf:s={}})=>{const a=s.pointer||t.getAttribute("data-st-sort"),r=s.cycle||t.hasAttribute("data-st-sort-cycle"),n=st({pointer:a,table:e,cycle:r})
n.onSortToggle((({pointer:e,direction:s})=>{if(t.classList.remove("st-sort-asc","st-sort-desc"),a===e&&"none"!==s){const e="asc"===s?"st-sort-asc":"st-sort-desc"
t.classList.add(e)}}))
return t.addEventListener("click",(()=>n.toggle())),n}
function ct(t,e){let s
return a=>{s&&clearTimeout(s),s=setTimeout((function(){t(a)}),e)}}const it=({table:t,el:e,delay:s=400,conf:a={}})=>{const r=a.pointer||e.getAttribute("data-st-filter"),n=a.operator||e.getAttribute("data-st-filter-operator")||"includes",o=e.hasAttribute("type")?e.getAttribute("type"):"string"
let c=a.type||e.getAttribute("data-st-filter-type")
c||(c=["date","number"].includes(o)?o:"string")
const i=W({table:t,pointer:r,type:c,operator:n}),l=ct((t=>i.filter(e.value)),s)
return e.addEventListener("input",l),"SELECT"===e.tagName&&e.addEventListener("change",l),i},lt=({el:t,table:e,delay:s=400,conf:a={}})=>{const r=a.scope||(t.getAttribute("data-st-search")||"").split(",").map((t=>t.trim())),n=a.flags||t.getAttribute("data-st-search-flags")||"",o=V({table:e,scope:r}),c=ct((()=>{o.search(t.value,{flags:n})}),s)
t.addEventListener("input",c)},ut=({el:t,table:e})=>{const s=(s,a)=>Array.from(t.querySelectorAll(a)).forEach((t=>s({el:t,table:e})))
return s(ot,"[data-st-sort]"),s(nt,"[data-st-loading-indicator]"),s(lt,"[data-st-search]"),s(it,"[data-st-filter]"),e}
function gt(s){var a,r
return s.dom||(s.dom=(a={innerHTML:(r=s,`<td>${r.slot}</td><td>${e(r.id,r.name)}</td><td>${r.level}</td><td>${r.rank_name}</td><td>${r.gxp}</td><td>${r.activity}</td><td>${r.pack}</td><td>${r.stam}</td>`)},t("tr",a))),s.dom}function dt(e,s,a){const r=e.tBodies[0],n=t("tbody",o)
var o
for(const t of a)n.appendChild(gt(t.value))
e.replaceChild(n,r)}const pt=s(),ft=h({innerHTML:"«"}),Et=h({innerHTML:"‹"}),ht=h({disabled:!0,innerHTML:"1"}),mt=h({innerHTML:"›"}),bt=h({innerHTML:"»"})
function At(t,e){const s=function(t){let e=1
const s=K({table:t})
return s.onSummaryChange((({page:t,size:a,filteredCount:r})=>{ft.disabled=!s.isPreviousPageEnabled(),Et.disabled=!s.isPreviousPageEnabled(),mt.disabled=!s.isNextPageEnabled(),bt.disabled=!s.isNextPageEnabled(),n(t,ht),e=Math.ceil(r/a)})),a(bt,(()=>s.selectPage(e))),s}(e)
a(ft,(()=>s.selectPage(1))),a(Et,(()=>s.selectPreviousPage())),a(mt,(()=>s.selectNextPage())),r(pt,ft),r(pt,Et),r(pt,ht),r(pt,mt),r(pt,bt),r(t,pt)}const yt=()=>m({dataset:{stSearch:"name, rank_name",stSearchFlags:"i"},placeholder:"Enter search term",required:!0,type:"text"})
function _t(e,a){const n=t("select",{innerHTML:'<option value="25">25</option><option value="50">50</option><option value="0" selected>All</option>'})
const c=s()
r(c,n),r(e,c)
const i=K({table:a})
o(n,"change",(t=>{i.changePageSize(Number(t.target.value))}))}function vt(t,e){return e.equipped||(t[e.player_id]=t[e.player_id]||[],t[e.player_id].push(e)),t}const Ct=(t,e)=>({...e,rank_name:t}),Nt=t=>t.members.map(c(Ct,t.name)),St=t=>t.r.flatMap(Nt)
function Tt(t,e,s){return{...e,slot:s+1,name_lower:i(e.name),lvl_reverse:0-e.level,rank_lower:i(l(e.rank_name)),gxp:A(e.guild_xp),gxp_reverse:0-e.guild_xp,activity:d(e.last_activity),act:e.last_activity-b(),pack:(t[e.id]||[]).length,pack_reverse:0-(t[e.id]||[]).length,stam:A(e.max_stamina),stam_reverse:0-e.max_stamina}}const Ot='<thead><tr><th data-st-sort="slot" class="st-sort-asc">Slot</th><th data-st-sort="name_lower">Name</th><th class="st-sort-reverse" data-st-sort="lvl_reverse">Level</th><th data-st-sort="rank_lower">Rank</th><th class="st-sort-reverse" data-st-sort="gxp_reverse">GXP</th><th class="st-sort-reverse" data-st-sort="act">Activity</th><th class="st-sort-reverse" data-st-sort="pack_reverse">Pack</th><th class="st-sort-reverse" data-st-sort="stam_reverse">Stam</th></tr></thead><tbody></tbody>'
function Gt(t){const e=r(t,s({className:"st-top-container"})),a=function(t){return r(t,E({className:"whosGotWhat",innerHTML:Ot}))}(r(t,s()))
return{top:e,domTable:a,bottom:r(t,s({className:"st-bottom-container"}))}}function Ht(t,e,o,c){_t(e,c),function(t,e){const n=s({className:"fsh-search-wrapper"}),o=yt(),c=h({innerHTML:"&times;"}),i=V({table:e})
a(c,(()=>{o.value="",o.focus(),i.search("")})),r(n,o),r(n,c),r(t,n)}(e,c),function(t,e,a){const o=s()
r(t,o),K({table:e}).onSummaryChange((({page:t,size:e,filteredCount:s})=>{let r=0
s&&(r=1),n(`showing ${(t-1)*e+r} - ${Math.min(s,t*e)} of ${s} (${a.length} total)`,o)}))}(o,c,t),At(o,c)}function Rt(t,e,s){const a=ut({el:t,table:e})
a.onDisplayChange(c(dt,s,e)),a.exec()}function Lt(t,e){const a=function([t,e]){const s=t.items.reduce(vt,{})
return St(e).map(c(Tt,s))}(e)
n("",t)
const o=r(t,s()),{top:i,domTable:l,bottom:u}=Gt(o),g=function(t){return rt({data:t,tableState:{sort:{pointer:"slot",direction:"asc"},slice:{page:1,size:0},filter:{},search:{}}})}(a)
Ht(a,i,u,g),Rt(o,g,l)}async function Dt(){const t=u()
n("Loading...",t)
let e=[]
try{e=await f([g(),p()])}catch(e){n(e.message,t)}(([t,e])=>t?.guild_id&&e?.s)(e)&&Lt(t,e)}export{Dt as default}
//# sourceMappingURL=whosGotWhat-fee4e3ef.js.map
