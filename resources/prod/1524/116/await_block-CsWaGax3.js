import{cc as c,cd as e,ce as n,b5 as t,b7 as o,b6 as r,b4 as s,cf as l}from"./calfSystem-ZGMc097r.js"
function a(a,u){const b=u.token={}
function i(c,e,n,a){if(u.token!==b)return
u.resolved=a
let i=u.ctx
void 0!==n&&(i=i.slice(),i[n]=a)
const h=c&&(u.current=c)(i)
let f=!1
u.block&&(u.blocks?u.blocks.forEach(((c,n)=>{n!==e&&c&&(t(),o(c,1,1,(()=>{u.blocks[n]===c&&(u.blocks[n]=null)})),r())})):u.block.d(1),h.c(),s(h,1),h.m(u.mount(),u.anchor),f=!0),u.block=h,u.blocks&&(u.blocks[e]=h),f&&l()}if(c(a)){const c=e()
if(a.then((e=>{n(c),i(u.then,1,u.value,e),n(null)}),(e=>{if(n(c),i(u.catch,2,u.error,e),n(null),!u.hasCatch)throw e})),u.current!==u.pending)return i(u.pending,0),!0}else{if(u.current!==u.then)return i(u.then,1,u.value,a),!0
u.resolved=a}}function u(c,e,n){const t=e.slice(),{resolved:o}=c
c.current===c.then&&(t[c.value]=o),c.current===c.catch&&(t[c.error]=o),c.block.p(t,n)}export{a as h,u}
//# sourceMappingURL=await_block-CsWaGax3.js.map
