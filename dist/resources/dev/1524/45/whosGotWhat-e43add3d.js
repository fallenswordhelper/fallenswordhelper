import{a as t}from"./allthen-b379c12a.js"
import{c as e}from"./createButton-82ecce7c.js"
import{a4 as a,t as s,af as r,V as n,B as o,p as c,h as i,m as l,f as d,o as u}from"./calfSystem-6a3c85e0.js"
import{c as g}from"./createInput-9bf3eee1.js"
import{c as f}from"./createSelect-b818c7c0.js"
import{c as p}from"./createTable-e4a467a3.js"
import{l as h,d as E}from"./lastActivityToDays-5d34266c.js"
import{c as m}from"./createTBody-55670960.js"
import{c as b}from"./createTr-1f4adf11.js"
import{g as A}from"./guildStore-fcb25778.js"
import{a as y}from"./addCommas-c0fbc0a2.js"
import"./all-47be5400.js"
import"./guild-7eedd9cd.js"
import"./cmdExport-cce4a501.js"
import"./indexAjaxJson-c7dd57d3.js"
function _(t,e,s){const r=t.tBodies[0],n=m()
for(const t of s)n.appendChild((o=t.value,c=void 0,o.dom||(o.dom=b({innerHTML:(c=o,`<td>${c.slot}</td><td><a href="${a}${c.id}">${c.name}</a></td><td>${c.level}</td><td>${c.rank_name}</td><td>${c.gxp}</td><td>${c.activity}</td><td>${c.pack}</td><td>${c.stam}</td>`)})),o.dom))
var o,c
t.replaceChild(n,r)}function v(t,e){return e.equipped||(t[e.player_id]=t[e.player_id]||[],t[e.player_id].push(e)),t}function C(t,e){return{...e,rank_name:t}}function N(t){return t.members.map(s(C,t.name))}function S(t,e,a){return{...e,slot:a+1,name_lower:r(e.name),lvl_reverse:0-e.level,rank_lower:r(e.rank_name.trim()),gxp:y(e.guild_xp),gxp_reverse:0-e.guild_xp,activity:h(e.last_activity),act:e.last_activity-n,pack:(t[e.id]||[]).length,pack_reverse:0-(t[e.id]||[]).length,stam:y(e.max_stamina),stam_reverse:0-e.max_stamina}}function T([t,e]){const a=t.items.reduce(v,{})
return function(t){return t.r.ranks.flatMap(N)}(e).map(s(S,a))}const O=(t,...e)=>(...a)=>e.reduce(((t,e)=>e(t)),t(...a)),G=(t,e)=>{const a=e||t.length
return(...e)=>{const s=e.length||1
if(a===s)return t(...e)
return G(((...a)=>t(...e,...a)),a-e.length)}},H=t=>e=>(t(e),e),R=t=>{const e=t.split("."),a=(t={},e=[])=>{const s=t[e.shift()]
return null==s||0===e.length?s:a(s,e)}
return{get:t=>a(t,[...e]),set:(t,a)=>{let s=t
const[r,...n]=e.reverse()
for(const t of n.reverse())void 0===s[t]&&(s[t]={},s=s[t])
return s[r]=a,t}}},L=(t,e)=>t===e?0:void 0===t?1:void 0===e||t<e?-1:1
var D
!function(t){t.ASC="asc",t.DESC="desc",t.NONE="none"}(D||(D={}))
const P=(t,e)=>{const a=R(t).get
return(t,s)=>e(a(t),a(s))},j=t=>{const{pointer:e,direction:a="asc",comparator:s=L}=t
if(!e||"none"===a)return t=>[...t]
const r=P(e,s),n="desc"===a?(o=r,(t,e)=>o(e,t)):r
var o
return t=>[...t].sort(n)}
var x
!function(t){t.BOOLEAN="boolean",t.NUMBER="number",t.DATE="date",t.STRING="string"}(x||(x={}))
var M
!function(t){t.INCLUDES="includes",t.IS="is",t.IS_NOT="isNot",t.LOWER_THAN="lt",t.GREATER_THAN="gt",t.GREATER_THAN_OR_EQUAL="gte",t.LOWER_THAN_OR_EQUAL="lte",t.EQUALS="equals",t.NOT_EQUALS="notEquals",t.ANY_OF="anyOf"}(M||(M={}))
const w=t=>e=>!t(e),k=t=>e=>Object.is(t,e),F=t=>e=>e<t,I=t=>e=>e>t,$=t=>e=>t===e,z={includes:t=>e=>e.includes(t),is:k,isNot:O(k,w),lt:F,gte:O(F,w),gt:I,lte:O(I,w),equals:$,notEquals:O($,w),anyOf:t=>e=>t.includes(e)},U=t=>(...e)=>t.every((t=>t(...e))),B=({value:t="",operator:e="includes",type:a})=>{const s=(t=>{switch(t){case x.BOOLEAN:return Boolean
case x.NUMBER:return Number
case x.DATE:return t=>new Date(t)
case x.STRING:return O(String,(t=>t.toLowerCase()))
default:return t=>t}})(a),r=O(s,z[e])(t)
return O(s,r)},Y=t=>{const e=(t=>{const e={}
return Object.keys(t).filter((e=>Array.isArray(t[e]))).forEach((a=>{const s=t[a].filter((t=>""!==t.value))
s.length>0&&(e[a]=s)})),e})(t),a=Object.keys(e).map((t=>{const a=R(t).get,s=e[t].map(B)
return O(a,U(s))})),s=U(a)
return t=>t.filter(s)}
function X(t,...e){let a=q(t.raw[0])
for(const[s,r]of e.entries()){if(r instanceof RegExp)a+=r.source
else{if("string"!=typeof r)throw new Error("Illegal substitution: "+r)
a+=r.replace(/[\\^$.*+?()[\]{}|=!<>:-]/g,"\\$&")}a+=q(t.raw[s+1])}let s=""
if(a.startsWith("/")){const t=a.lastIndexOf("/")
if(0===t)throw new Error("If the `re` string starts with a slash, it must end with a second slash and zero or more flags: "+a)
s=a.slice(t+1),a=a.slice(1,t)}return new RegExp(a,s)}function q(t){return t.replace(/\\`/g,"`")}const Q=t=>{const{value:e,scope:a=[],escape:s=!1,flags:r=""}=t,n=a.map((t=>R(t).get))
if(0===a.length||!e)return t=>t
const o=!0===s?X`/${e}/${r}`:new RegExp(e,r)
return t=>t.filter((t=>n.some((e=>o.test(String(e(t)))))))},W=t=>({emitter:e})=>{const a={},s={off:t=>(t||Object.keys(a).forEach((t=>s.off(t))),a[t]&&e.off(t,...a[t]),s)}
for(const r of Object.keys(t)){const n=t[r]
a[r]=[],s[n]=function(...t){return a[r]=a[r].concat(t),e.on(r,...t),s}}return s},J=({page:t=1,size:e}={page:1})=>(a=[])=>{const s=e||a.length,r=(t-1)*s
return a.slice(r,r+s)}
var V
!function(t){t.TOGGLE_SORT="TOGGLE_SORT",t.DISPLAY_CHANGED="DISPLAY_CHANGED",t.PAGE_CHANGED="CHANGE_PAGE",t.EXEC_CHANGED="EXEC_CHANGED",t.FILTER_CHANGED="FILTER_CHANGED",t.SUMMARY_CHANGED="SUMMARY_CHANGED",t.SEARCH_CHANGED="SEARCH_CHANGED",t.EXEC_ERROR="EXEC_ERROR"}(V||(V={}))
const K=t=>{const{get:e,set:a}=R(t)
return{get:e,set:G(a)}},Z=({sortFactory:t,tableState:e,data:a,filterFactory:s,searchFactory:r})=>{let n=a.length,o=a
const c=(()=>{const t={},e={on:(a,...s)=>(t[a]=(t[a]||[]).concat(s),e),dispatch(a,...s){const r=t[a]||[]
for(const t of r)t(...s)
return e},off(a,...s){if(void 0===a)Object.keys(t).forEach((t=>e.off(t)))
else{const e=t[a]||[]
t[a]=s.length?e.filter((t=>!s.includes(t))):[]}return e}}
return e})(),i=K("sort"),l=K("slice"),d=K("filter"),u=K("search")
c.on("SUMMARY_CHANGED",(({filteredCount:t})=>{n=t}))
const g=t=>Object.assign({},t),f=G(c.dispatch,2),p=t=>(o=t,f("SUMMARY_CHANGED",{page:e.slice.page,size:e.slice.size,filteredCount:t.length})),h=G(((t,a,s)=>O(g,H(f(a)),t.set(e))(s))),E=()=>h(l,"CHANGE_PAGE",Object.assign({},l.get(e),{page:1})),m=(t,e)=>{const a=O(h(t,e),E,(()=>c.exec()))
return(t={})=>a(t)},b={sort:m(i,"TOGGLE_SORT"),filter:m(d,"FILTER_CHANGED"),search:m(u,"SEARCH_CHANGED"),slice:O(h(l,"CHANGE_PAGE"),(()=>c.exec())),exec:({processingDelay:n=20}={processingDelay:20})=>{c.dispatch("EXEC_CHANGED",{working:!0}),setTimeout((()=>{try{const n=s(d.get(e)),o=r(u.get(e)),g=t(i.get(e)),f=J(l.get(e)),h=O(n,o,H(p),g,f)(a)
c.dispatch("DISPLAY_CHANGED",h.map((t=>({index:a.indexOf(t),value:t}))))}catch(t){c.dispatch("EXEC_ERROR",t)}finally{c.dispatch("EXEC_CHANGED",{working:!1})}}),n)},async eval(n=e){const o=t(i.get(n)),c=r(u.get(n)),g=s(d.get(n)),f=J(l.get(n))
return O(g,c,o,f)(a).map((t=>({index:a.indexOf(t),value:t})))},onDisplayChange(t){c.on("DISPLAY_CHANGED",t)},getTableState:()=>JSON.parse(JSON.stringify(e)),getMatchingItems:()=>[...o]},A=Object.assign(c,b)
return Object.defineProperties(A,{filteredCount:{get:()=>n},length:{get:()=>a.length}}),A},tt=W({FILTER_CHANGED:"onFilterChange"})
var et
!function(t){t.BOOLEAN="boolean",t.NUMBER="number",t.DATE="date",t.STRING="string"}(et||(et={}))
const at=({table:t,pointer:e,operator:a="includes",type:s="string"})=>{const r=tt({emitter:t})
return Object.assign({filter(r){const n=this.state()
return void 0===r?delete n[e]:Object.assign(n,{[e]:[{value:r,operator:a,type:s}]}),t.filter(n)},state:()=>t.getTableState().filter||{}},r)},st=W({SEARCH_CHANGED:"onSearchChange"}),rt=({table:t,scope:e=[]})=>{const a=st({emitter:t})
return Object.assign(a,{search:(a,s={})=>t.search(Object.assign({},{value:a,scope:e},s)),state:()=>t.getTableState().search},a)},nt=W({CHANGE_PAGE:"onPageChange",SUMMARY_CHANGED:"onSummaryChange"}),ot=({table:t})=>{let{slice:{page:e,size:a}}=t.getTableState(),s=t.filteredCount,r=a?Math.ceil(s/a):1
const n=nt({emitter:t}),o={selectPage:e=>t.slice({page:e,size:a}),selectNextPage:()=>o.selectPage(e+1),selectPreviousPage:()=>o.selectPage(e-1),changePageSize:e=>t.slice({page:1,size:e}),isPreviousPageEnabled:()=>e>1,isNextPageEnabled:()=>r>e,state:()=>Object.assign(t.getTableState().slice,{filteredCount:s,pageCount:r})},c=Object.assign(o,n)
return c.onSummaryChange((({page:t,size:n,filteredCount:o})=>{e=t,a=n,s=o,r=a?Math.ceil(s/a):1})),c},ct=W({TOGGLE_SORT:"onSortToggle"}),it=["asc","desc"],lt=({pointer:t,table:e,cycle:a=!1,debounceTime:s=0})=>{const r=!0===a?["none"].concat(it):[...it].reverse(),n=((t,e)=>{let a=null
return(...s)=>{null!==a&&clearTimeout(a),a=setTimeout((()=>t(...s)),e)}})(e.sort,s)
let o=0
const c=ct({emitter:e}),i=Object.assign({toggle(){o++
const e=r[o%r.length]
return n({pointer:t,direction:e})},state:()=>e.getTableState().sort},c)
i.onSortToggle((({pointer:e})=>{o=t!==e?0:o}))
const{pointer:l,direction:d="asc"}=i.state()
return o=l===t?"asc"===d?1:2:0,i},dt=W({EXEC_CHANGED:"onExecutionChange"}),ut=({table:t,el:e})=>{const a=(({table:t})=>dt({emitter:t}))({table:t})
return a.onExecutionChange((function({working:t}){e.classList.remove("st-working"),!0===t&&e.classList.add("st-working")})),a},gt=({el:t,table:e,conf:a={}})=>{const s=a.pointer||t.getAttribute("data-st-sort"),r=a.cycle||t.hasAttribute("data-st-sort-cycle"),n=lt({pointer:s,table:e,cycle:r})
n.onSortToggle((({pointer:e,direction:a})=>{if(t.classList.remove("st-sort-asc","st-sort-desc"),s===e&&"none"!==a){const e="asc"===a?"st-sort-asc":"st-sort-desc"
t.classList.add(e)}}))
return t.addEventListener("click",(()=>n.toggle())),n}
function ft(t,e){let a
return s=>{a&&clearTimeout(a),a=setTimeout((function(){t(s)}),e)}}const pt=({table:t,el:e,delay:a=400,conf:s={}})=>{const r=s.pointer||e.getAttribute("data-st-filter"),n=s.operator||e.getAttribute("data-st-filter-operator")||"includes",o=e.hasAttribute("type")?e.getAttribute("type"):"string"
let c=s.type||e.getAttribute("data-st-filter-type")
c||(c=["date","number"].includes(o)?o:"string")
const i=at({table:t,pointer:r,type:c,operator:n}),l=ft((t=>i.filter(e.value)),a)
return e.addEventListener("input",l),"SELECT"===e.tagName&&e.addEventListener("change",l),i},ht=({el:t,table:e,delay:a=400,conf:s={}})=>{const r=s.scope||(t.getAttribute("data-st-search")||"").split(",").map((t=>t.trim())),n=s.flags||t.getAttribute("data-st-search-flags")||"",o=rt({table:e,scope:r}),c=ft((()=>{o.search(t.value,{flags:n})}),a)
t.addEventListener("input",c)}
function Et(t){const a=T(t)
o("",c)
const r=i(c,l()),n=i(r,l({className:"st-top-container"})),h=function(t){return i(t,p({className:"whosGotWhat",innerHTML:'<thead><tr><th data-st-sort="slot" class="st-sort-asc">Slot</th><th data-st-sort="name_lower">Name</th><th class="st-sort-reverse" data-st-sort="lvl_reverse">Level</th><th data-st-sort="rank_lower">Rank</th><th class="st-sort-reverse" data-st-sort="gxp_reverse">GXP</th><th class="st-sort-reverse" data-st-sort="act">Activity</th><th class="st-sort-reverse" data-st-sort="pack_reverse">Pack</th><th class="st-sort-reverse" data-st-sort="stam_reverse">Stam</th></tr></thead><tbody></tbody>'}))}(i(r,l())),E=i(r,l({className:"st-bottom-container"})),m=(({sortFactory:t=j,filterFactory:e=Y,searchFactory:a=Q,tableState:s={sort:{},slice:{page:1},filter:{},search:{}},data:r=[]}={sortFactory:j,filterFactory:Y,searchFactory:Q,tableState:{sort:{},slice:{page:1},filter:{},search:{}},data:[]},...n)=>{const o=Z({sortFactory:t,filterFactory:e,tableState:s,data:r,searchFactory:a})
return n.reduce(((n,c)=>Object.assign(n,c({sortFactory:t,filterFactory:e,searchFactory:a,tableState:s,data:r,table:o}))),o)})({data:a,tableState:{sort:{pointer:"slot",direction:"asc"},slice:{page:1,size:0},filter:{},search:{}}})
!function(t,e){const a=f({innerHTML:'<option value="25">25</option><option value="50">50</option><option value="0" selected>All</option>'}),s=l()
i(s,a),i(t,s)
const r=ot({table:e})
d(a,"change",(t=>{r.changePageSize(Number(t.target.value))}))}(n,m),function(t,a){const s=l({className:"fsh-search-wrapper"}),r=g({dataset:{stSearch:"name, rank_name",stSearchFlags:"i"},placeholder:"Enter search term",required:!0,type:"text"}),n=e({innerHTML:"&times;",type:"button"}),o=rt({table:a})
u(n,(()=>{r.value="",r.focus(),o.search("")})),i(s,r),i(s,n),i(t,s)}(n,m),function(t,e,a){const s=l()
i(t,s),ot({table:e}).onSummaryChange((({page:t,size:e,filteredCount:r})=>{let n=0
r&&(n=1),o(`showing ${(t-1)*e+n} - ${Math.min(r,t*e)} of ${r} (${a.length} total)`,s)}))}(E,m,a),function(t,a){const s=l(),r=e({innerHTML:"«"}),n=e({innerHTML:"‹"}),c=e({disabled:!0,innerHTML:"1"}),d=e({innerHTML:"›"}),g=e({innerHTML:"»"})
let f=1
const p=ot({table:a})
p.onSummaryChange((({page:t,size:e,filteredCount:a})=>{r.disabled=!p.isPreviousPageEnabled(),n.disabled=!p.isPreviousPageEnabled(),d.disabled=!p.isNextPageEnabled(),g.disabled=!p.isNextPageEnabled(),o(t,c),f=Math.ceil(a/e)})),u(r,(()=>p.selectPage(1))),u(n,(()=>p.selectPreviousPage())),u(d,(()=>p.selectNextPage())),u(g,(()=>p.selectPage(f))),i(s,r),i(s,n),i(s,c),i(s,d),i(s,g),i(t,s)}(E,m)
const b=(({el:t,table:e})=>{const a=(a,s)=>Array.from(t.querySelectorAll(s)).forEach((t=>a({el:t,table:e})))
return a(gt,"[data-st-sort]"),a(ut,"[data-st-loading-indicator]"),a(ht,"[data-st-search]"),a(pt,"[data-st-filter]"),e})({el:r,table:m})
b.onDisplayChange(s(_,h,m)),b.exec()}function mt(){o("Loading...",c),t([A(),E()],Et)}export default mt
//# sourceMappingURL=whosGotWhat-e43add3d.js.map
