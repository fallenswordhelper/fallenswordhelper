import{a as e}from"./calfSystem-Bit7wh4p.js"
function r(r){return e({cmd:"trade",...r})}const d=["Perfect","Excellent","Very Good","Good","Average","Poor","Uncrafted"],t=e=>({bound:e.bn??!1,craft:e.cr?d[e.cf]:"",...null!==(e.cd??null)&&{durability:e.cd},equipped:e.equipped??!1}),i=e=>({...e.folder_id&&{folder_id:e.folder_id},forge:e.hf??0,guild_tag:e.tg??-1,inv_id:e.a,item_id:e.b,item_name:e.n,...e.md&&{max_durability:e.md},...e.player?.id&&{player_id:e.player.id},rarity:e.r,stats:{min_level:e.l,set_name:""},type:e.t})
function a(e){return e?{...t(e),...i(e)}:{}}export{a as b,r as t}
//# sourceMappingURL=basicItem-Dcz7UpP9.js.map
