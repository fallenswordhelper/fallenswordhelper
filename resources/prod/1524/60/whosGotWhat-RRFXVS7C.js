import{a as lt}from"./chunk-ZCB2U33I.js";import{a as it}from"./chunk-YGCJBEGQ.js";import{a as at}from"./chunk-3R7JUPKR.js";import{b as ct}from"./chunk-HEOL2JE6.js";import"./chunk-65SQLHIT.js";import{a as ot}from"./chunk-YB2NK3P7.js";import"./chunk-2JNINSRM.js";import{a as st}from"./chunk-CWPAI435.js";import"./chunk-32G6YU5T.js";import{a as rt}from"./chunk-3GKBEOYO.js";import{a as nt}from"./chunk-YSLN4J5T.js";import{a as B}from"./chunk-WUCE7CZ7.js";import{a as y}from"./chunk-WTQIB3L7.js";import{b as Z}from"./chunk-5NBSFLUX.js";import"./chunk-Q4XXYB5L.js";import{a as M}from"./chunk-WGKTKSM6.js";import{b as D}from"./chunk-ZPKDX2TA.js";import{a as et}from"./chunk-MZ4RO2BZ.js";import{a as tt}from"./chunk-EFQ65JH2.js";import"./chunk-KNYHE7TV.js";import{a as u}from"./chunk-3GV55PFT.js";import{a as h}from"./chunk-S6Z6AK6H.js";import"./chunk-4WLRCDD6.js";import"./chunk-INSIMFVG.js";import"./chunk-V7EDYNK5.js";import"./chunk-AU7HVVRL.js";import"./chunk-7D7PUCSG.js";import"./chunk-NTW3JDM6.js";import"./chunk-NORPNMTZ.js";import"./chunk-GZ5MHZSO.js";import"./chunk-ECTWXQFU.js";import"./chunk-ARNYHQX3.js";import{a as S}from"./chunk-5YV4PH6I.js";import{a as C}from"./chunk-6MKXC6ON.js";import{a as V}from"./chunk-HVC7S5PE.js";import"./chunk-NC4XYYGB.js";import"./chunk-E5FOTTRM.js";import"./chunk-OEATIPCL.js";import"./chunk-HVPMEAYK.js";import"./chunk-Q6VOFYH2.js";import"./chunk-QH6YIHH4.js";import"./chunk-3RYC2EKK.js";import"./chunk-OACBWC2H.js";import"./chunk-VEFZUGNI.js";import"./chunk-FJEDYAWH.js";import"./chunk-WV7FHD63.js";import{v as K}from"./chunk-OOFTOHPO.js";import"./chunk-L5TVV64R.js";import{a as b}from"./chunk-TQN6MN4F.js";function Mt(t){return`<td>${t.slot}</td><td><a href="${K}${t.id}">${t.name}</a></td><td>${t.level}</td><td>${t.rank_name}</td><td>${t.gxp}</td><td>${t.activity}</td><td>${t.pack}</td><td>${t.stam}</td>`}function Bt(t){return t.dom||(t.dom=lt({innerHTML:Mt(t)})),t.dom}function $(t,e,r){let n=t.tBodies[0],o=rt();for(let s of r)o.appendChild(Bt(s.value));t.replaceChild(o,n)}function $t(t,e){return e.equipped||(t[e.player_id]=t[e.player_id]||[],t[e.player_id].push(e)),t}function Ft(t,e){return{...e,rank_name:t}}function Ut(t){return t.members.map(b(Ft,t.name))}function zt(t){return t.r.flatMap(Ut)}function Yt(t,e,r){return{...e,slot:r+1,name_lower:M(e.name),lvl_reverse:0-e.level,rank_lower:M(tt(e.rank_name)),gxp:B(e.guild_xp),gxp_reverse:0-e.guild_xp,activity:at(e.last_activity),act:e.last_activity-Z,pack:(t[e.id]||[]).length,pack_reverse:0-(t[e.id]||[]).length,stam:B(e.max_stamina),stam_reverse:0-e.max_stamina}}function F([t,e]){let r=t.items.reduce($t,{});return zt(e).map(b(Yt,r))}var mt=t=>(e,r)=>t(r,e),p=(t,...e)=>(...r)=>e.reduce((n,o)=>o(n),t(...r)),N=(t,e)=>{let r=e||t.length;return(...n)=>{let o=n.length||1;return r===o?t(...n):N((...c)=>t(...n,...c),r-n.length)}};var U=t=>e=>(t(e),e);var E=t=>{let e=t.split("."),r=(o={},s=[])=>{let c=s.shift(),a=o[c];return a==null||s.length===0?a:r(a,s)};return{get(o){return r(o,[...e])},set:(o,s)=>{let c=o,[a,...i]=e.reverse();for(let l of i.reverse())c[l]===void 0&&(c[l]={},c=c[l]);return c[a]=s,o}}};var qt=(t,e)=>t===e?0:t===void 0?1:e===void 0||t<e?-1:1,z;(function(t){t.ASC="asc",t.DESC="desc",t.NONE="none"})(z||(z={}));var Xt=(t,e)=>{let r=E(t).get;return(n,o)=>e(r(n),r(o))},Y=t=>{let{pointer:e,direction:r="asc",comparator:n=qt}=t;if(!e||r==="none")return c=>[...c];let o=Xt(e,n),s=r==="desc"?mt(o):o;return c=>[...c].sort(s)};var x;(function(t){t.BOOLEAN="boolean",t.NUMBER="number",t.DATE="date",t.STRING="string"})(x||(x={}));var Wt=t=>{switch(t){case x.BOOLEAN:return Boolean;case x.NUMBER:return Number;case x.DATE:return e=>new Date(e);case x.STRING:return p(String,e=>e.toLowerCase());default:return e=>e}},q;(function(t){t.INCLUDES="includes",t.IS="is",t.IS_NOT="isNot",t.LOWER_THAN="lt",t.GREATER_THAN="gt",t.GREATER_THAN_OR_EQUAL="gte",t.LOWER_THAN_OR_EQUAL="lte",t.EQUALS="equals",t.NOT_EQUALS="notEquals",t.ANY_OF="anyOf"})(q||(q={}));var T=t=>e=>!t(e),ut=t=>e=>Object.is(t,e),pt=t=>e=>e<t,ft=t=>e=>e>t,dt=t=>e=>t===e,Qt=t=>e=>e.includes(t),jt=t=>e=>t.includes(e),Jt={includes:Qt,is:ut,isNot:p(ut,T),lt:pt,gte:p(pt,T),gt:ft,lte:p(ft,T),equals:dt,notEquals:p(dt,T),anyOf:jt},gt=t=>(...e)=>t.every(r=>r(...e)),Vt=({value:t="",operator:e="includes",type:r})=>{let n=Wt(r),s=p(n,Jt[e])(t);return p(n,s)},Kt=t=>{let e={};return Object.keys(t).filter(n=>Array.isArray(t[n])).forEach(n=>{let o=t[n].filter(s=>s.value!=="");o.length>0&&(e[n]=o)}),e},X=t=>{let e=Kt(t),r=Object.keys(e).map(o=>{let s=E(o).get,c=e[o].map(Vt);return p(s,gt(c))}),n=gt(r);return o=>o.filter(n)};function Zt(t,...e){let r=ht(t.raw[0]);for(let[o,s]of e.entries()){if(s instanceof RegExp)r+=s.source;else if(typeof s=="string")r+=te(s);else throw new Error("Illegal substitution: "+s);r+=ht(t.raw[o+1])}let n="";if(r.startsWith("/")){let o=r.lastIndexOf("/");if(o===0)throw new Error("If the `re` string starts with a slash, it must end with a second slash and zero or more flags: "+r);n=r.slice(o+1),r=r.slice(1,o)}return new RegExp(r,n)}function ht(t){return t.replace(/\\`/g,"`")}function te(t){return t.replace(/[\\^$.*+?()[\]{}|=!<>:-]/g,"\\$&")}var W=t=>{let{value:e,scope:r=[],escape:n=!1,flags:o=""}=t,s=r.map(a=>E(a).get);if(r.length===0||!e)return a=>a;let c=n===!0?Zt`/${e}/${o}`:new RegExp(e,o);return a=>a.filter(i=>s.some(l=>c.test(String(l(i)))))};var Et=()=>{let t={},e={on(r,...n){return t[r]=(t[r]||[]).concat(n),e},dispatch(r,...n){let o=t[r]||[];for(let s of o)s(...n);return e},off(r,...n){if(r===void 0)Object.keys(t).forEach(o=>e.off(o));else{let o=t[r]||[];t[r]=n.length?o.filter(s=>!n.includes(s)):[]}return e}};return e},A=t=>({emitter:e})=>{let r={},n={off(o){return o||Object.keys(r).forEach(s=>n.off(s)),r[o]&&e.off(o,...r[o]),n}};for(let o of Object.keys(t)){let s=t[o];r[o]=[],n[s]=function(...c){return r[o]=r[o].concat(c),e.on(o,...c),n}}return n};var vt=({page:t=1,size:e}={page:1})=>(r=[])=>{let n=e||r.length,o=(t-1)*n;return r.slice(o,o+n)},yt;(function(t){t.TOGGLE_SORT="TOGGLE_SORT",t.DISPLAY_CHANGED="DISPLAY_CHANGED",t.PAGE_CHANGED="CHANGE_PAGE",t.EXEC_CHANGED="EXEC_CHANGED",t.FILTER_CHANGED="FILTER_CHANGED",t.SUMMARY_CHANGED="SUMMARY_CHANGED",t.SEARCH_CHANGED="SEARCH_CHANGED",t.EXEC_ERROR="EXEC_ERROR"})(yt||(yt={}));var G=t=>{let{get:e,set:r}=E(t);return{get:e,set:N(r)}},ee=({sortFactory:t,tableState:e,data:r,filterFactory:n,searchFactory:o})=>{let s=r.length,c=r,a=Et(),i=G("sort"),l=G("slice"),f=G("filter"),d=G("search");a.on("SUMMARY_CHANGED",({filteredCount:m})=>{s=m});let R=m=>Object.assign({},m),Q=N(a.dispatch,2),Ot=m=>(c=m,Q("SUMMARY_CHANGED",{page:e.slice.page,size:e.slice.size,filteredCount:m.length})),Rt=({processingDelay:m=20}={processingDelay:20})=>{a.dispatch("EXEC_CHANGED",{working:!0}),setTimeout(()=>{try{let g=n(f.get(e)),v=o(d.get(e)),_=t(i.get(e)),I=vt(l.get(e)),L=p(g,v,U(Ot),_,I)(r);a.dispatch("DISPLAY_CHANGED",L.map(J=>({index:r.indexOf(J),value:J})))}catch(g){a.dispatch("EXEC_ERROR",g)}finally{a.dispatch("EXEC_CHANGED",{working:!1})}},m)},w=N((m,g,v)=>p(R,U(Q(g)),m.set(e))(v)),wt=()=>w(l,"CHANGE_PAGE",Object.assign({},l.get(e),{page:1})),k=(m,g)=>{let v=p(w(m,g),wt,()=>a.exec());return(_={})=>v(_)},kt={sort:k(i,"TOGGLE_SORT"),filter:k(f,"FILTER_CHANGED"),search:k(d,"SEARCH_CHANGED"),slice:p(w(l,"CHANGE_PAGE"),()=>a.exec()),exec:Rt,async eval(m=e){let g=t(i.get(m)),v=o(d.get(m)),_=n(f.get(m)),I=vt(l.get(m));return p(_,v,g,I)(r).map(L=>({index:r.indexOf(L),value:L}))},onDisplayChange(m){a.on("DISPLAY_CHANGED",m)},getTableState(){return JSON.parse(JSON.stringify(e))},getMatchingItems(){return[...c]}},j=Object.assign(a,kt);return Object.defineProperties(j,{filteredCount:{get(){return s}},length:{get(){return r.length}}}),j},re=A({FILTER_CHANGED:"onFilterChange"}),At;(function(t){t.BOOLEAN="boolean",t.NUMBER="number",t.DATE="date",t.STRING="string"})(At||(At={}));var Ct=({table:t,pointer:e,operator:r="includes",type:n="string"})=>{let o=re({emitter:t});return Object.assign({filter(s){let c=this.state();return s===void 0?delete c[e]:Object.assign(c,{[e]:[{value:s,operator:r,type:n}]}),t.filter(c)},state(){return t.getTableState().filter||{}}},o)},ne=A({SEARCH_CHANGED:"onSearchChange"}),P=({table:t,scope:e=[]})=>{let r=ne({emitter:t});return Object.assign(r,{search(n,o={}){return t.search(Object.assign({},{value:n,scope:e},o))},state(){return t.getTableState().search}},r)},oe=A({CHANGE_PAGE:"onPageChange",SUMMARY_CHANGED:"onSummaryChange"}),H=({table:t})=>{let{slice:{page:e,size:r}}=t.getTableState(),n=t.filteredCount,o=r?Math.ceil(n/r):1,s=oe({emitter:t}),c={selectPage(i){return t.slice({page:i,size:r})},selectNextPage(){return c.selectPage(e+1)},selectPreviousPage(){return c.selectPage(e-1)},changePageSize(i){return t.slice({page:1,size:i})},isPreviousPageEnabled(){return e>1},isNextPageEnabled(){return o>e},state(){return Object.assign(t.getTableState().slice,{filteredCount:n,pageCount:o})}},a=Object.assign(c,s);return a.onSummaryChange(({page:i,size:l,filteredCount:f})=>{e=i,r=l,n=f,o=r?Math.ceil(n/r):1}),a},se=(t,e)=>{let r=null;return(...n)=>{r!==null&&clearTimeout(r),r=setTimeout(()=>t(...n),e)}},ce=A({TOGGLE_SORT:"onSortToggle"}),xt=["asc","desc"],_t=({pointer:t,table:e,cycle:r=!1,debounceTime:n=0})=>{let o=r===!0?["none"].concat(xt):[...xt].reverse(),s=se(e.sort,n),c=0,a=ce({emitter:e}),i=Object.assign({toggle(){c++;let d=o[c%o.length];return s({pointer:t,direction:d})},state(){return e.getTableState().sort}},a);i.onSortToggle(({pointer:d})=>{c=t!==d?0:c});let{pointer:l,direction:f="asc"}=i.state();return c=l===t?f==="asc"?1:2:0,i},Xe=A({SUMMARY_CHANGED:"onSummaryChange"});var ae=A({EXEC_CHANGED:"onExecutionChange"}),bt=({table:t})=>ae({emitter:t}),St=()=>({sort:{},slice:{page:1},filter:{},search:{}}),Nt=({sortFactory:t=Y,filterFactory:e=X,searchFactory:r=W,tableState:n=St(),data:o=[]}={sortFactory:Y,filterFactory:X,searchFactory:W,tableState:St(),data:[]},...s)=>{let c=ee({sortFactory:t,filterFactory:e,tableState:n,data:o,searchFactory:r});return s.reduce((a,i)=>Object.assign(a,i({sortFactory:t,filterFactory:e,searchFactory:r,tableState:n,data:o,table:c})),c)};var Lt=({table:t,el:e})=>{let r=bt({table:t});return r.onExecutionChange(function({working:n}){e.classList.remove("st-working"),n===!0&&e.classList.add("st-working")}),r};var Dt=({el:t,table:e,conf:r={}})=>{let n=r.pointer||t.getAttribute("data-st-sort"),o=r.cycle||t.hasAttribute("data-st-sort-cycle"),s=_t({pointer:n,table:e,cycle:o});s.onSortToggle(({pointer:a,direction:i})=>{if(t.classList.remove("st-sort-asc","st-sort-desc"),n===a&&i!=="none"){let l=i==="asc"?"st-sort-asc":"st-sort-desc";t.classList.add(l)}});let c=()=>s.toggle();return t.addEventListener("click",c),s};function O(t,e){let r;return n=>{r&&clearTimeout(r),r=setTimeout(function(){t(n)},e)}}var Tt=({table:t,el:e,delay:r=400,conf:n={}})=>{let o=n.pointer||e.getAttribute("data-st-filter"),s=n.operator||e.getAttribute("data-st-filter-operator")||"includes",c=e.hasAttribute("type")?e.getAttribute("type"):"string",a=n.type||e.getAttribute("data-st-filter-type");a||(a=["date","number"].includes(c)?c:"string");let i=Ct({table:t,pointer:o,type:a,operator:s}),l=O(f=>i.filter(e.value),r);return e.addEventListener("input",l),e.tagName==="SELECT"&&e.addEventListener("change",l),i};var Gt=({el:t,table:e,delay:r=400,conf:n={}})=>{let o=n.scope||(t.getAttribute("data-st-search")||"").split(",").map(i=>i.trim()),s=n.flags||t.getAttribute("data-st-search-flags")||"",c=P({table:e,scope:o}),a=O(()=>{c.search(t.value,{flags:s})},r);t.addEventListener("input",a)};var Pt=({el:t,table:e})=>{let r=(n,o)=>Array.from(t.querySelectorAll(o)).forEach(s=>n({el:s,table:e}));return r(Dt,"[data-st-sort]"),r(Lt,"[data-st-loading-indicator]"),r(Gt,"[data-st-search]"),r(Tt,"[data-st-filter]"),e};var ie='<thead><tr><th data-st-sort="slot" class="st-sort-asc">Slot</th><th data-st-sort="name_lower">Name</th><th class="st-sort-reverse" data-st-sort="lvl_reverse">Level</th><th data-st-sort="rank_lower">Rank</th><th class="st-sort-reverse" data-st-sort="gxp_reverse">GXP</th><th class="st-sort-reverse" data-st-sort="act">Activity</th><th class="st-sort-reverse" data-st-sort="pack_reverse">Pack</th><th class="st-sort-reverse" data-st-sort="stam_reverse">Stam</th></tr></thead><tbody></tbody>',Ht=ie;function le(t){return u(t,nt({className:"whosGotWhat",innerHTML:Ht}))}function me(t,e){let r=it({innerHTML:'<option value="25">25</option><option value="50">50</option><option value="0" selected>All</option>'}),n=h();u(n,r),u(t,n);let o=H({table:e});V(r,"change",s=>{o.changePageSize(Number(s.target.value))})}function ue(t,e){let r=h({className:"fsh-search-wrapper"}),n=et({dataset:{stSearch:"name, rank_name",stSearchFlags:"i"},placeholder:"Enter search term",required:!0,type:"text"}),o=y({innerHTML:"&times;",type:"button"}),s=P({table:e});C(o,()=>{n.value="",n.focus(),s.search("")}),u(r,n),u(r,o),u(t,r)}function pe(t,e,r){let n=h();u(t,n),H({table:e}).onSummaryChange(({page:s,size:c,filteredCount:a})=>{let i=0;a&&(i=1),S(`showing ${(s-1)*c+i} - ${Math.min(a,s*c)} of ${a} (${r.length} total)`,n)})}function fe(t,e){let r=h(),n=y({innerHTML:"\xAB"}),o=y({innerHTML:"\u2039"}),s=y({disabled:!0,innerHTML:"1"}),c=y({innerHTML:"\u203A"}),a=y({innerHTML:"\xBB"}),i=1,l=H({table:e});l.onSummaryChange(({page:f,size:d,filteredCount:R})=>{n.disabled=!l.isPreviousPageEnabled(),o.disabled=!l.isPreviousPageEnabled(),c.disabled=!l.isNextPageEnabled(),a.disabled=!l.isNextPageEnabled(),S(f,s),i=Math.ceil(R/d)}),C(n,()=>l.selectPage(1)),C(o,()=>l.selectPreviousPage()),C(c,()=>l.selectNextPage()),C(a,()=>l.selectPage(i)),u(r,n),u(r,o),u(r,s),u(r,c),u(r,a),u(t,r)}function de(t){let e=F(t);S("",D);let r=u(D,h()),n=u(r,h({className:"st-top-container"})),o=u(r,h()),s=le(o),c=u(r,h({className:"st-bottom-container"})),i=Nt({data:e,tableState:{sort:{pointer:"slot",direction:"asc"},slice:{page:1,size:0},filter:{},search:{}}});me(n,i),ue(n,i),pe(c,i,e),fe(c,i);let l=Pt({el:r,table:i});l.onDisplayChange(b($,s,i)),l.exec()}function ge(){S("Loading...",D),ot([st(),ct()],de)}export{ge as default};
//# sourceMappingURL=whosGotWhat-RRFXVS7C.js.map
