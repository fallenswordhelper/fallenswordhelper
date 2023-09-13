import{u as e,ae as t,f as i,af as r,$ as a}from"./calfSystem-2f15e074.js"
import{d as n}from"./dialog-d1c54012.js"
import{s as d,a as o}from"./sendItems-fd48f4bf.js"
async function s(i,r){const a=await e({cmd:"profile",subcmd:"sendtofolder",inv_list:t(i),folder_id:r,ajax:1})
return n(a)}const c=["Perfect","Excellent","Very Good","Good","Average","Poor","Uncrafted"],f=e=>({bound:e.bn??!1,craft:e.cr?c[e.cf]:"",durability:e.cd,equipped:e.equipped??!1,...e.folder_id&&{folder_id:e.folder_id},forge:e.hf??0,guild_tag:e.tg??-1,inv_id:e.a}),m=e=>({item_id:e.b,item_name:e.n,max_durability:e.md,...e.player?.id&&{player_id:e.player.id},rarity:e.r,stats:{min_level:e.l,set_name:""},type:e.t})
function u(e){return{...f(e),...m(e)}}const l=({id:e,name:t})=>[e,t]
function p(e){return i(e.inventories.filter((({id:e})=>-1!==e)).map(l))}function _(e){return d(r("itemRecipient"),e)}function y(e){return o(r("itemRecipient"),e)}function b(e){return a(_,y,e)}async function g(t){const i=await e({cmd:"profile",subcmd:"dodropitems",removeIndex:t,ajax:1})
return n(i)}export{g as a,u as b,b as d,p as e,s as m}
//# sourceMappingURL=dropItem-e1f6f6f1.js.map
