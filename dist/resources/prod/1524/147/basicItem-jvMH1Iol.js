const e=["Perfect","Excellent","Very Good","Good","Average","Poor","Uncrafted"],d=d=>({bound:d.bn??!1,craft:d.cr?e[d.cf]:"",...null!==(d.cd??null)&&{durability:d.cd},equipped:d.equipped??!1}),r=e=>({...e.folder_id&&{folder_id:e.folder_id},forge:e.hf??0,guild_tag:e.tg??-1,inv_id:e.a,item_id:e.b,item_name:e.n,...e.md&&{max_durability:e.md},...e.player?.id&&{player_id:e.player.id},rarity:e.r,stats:{min_level:e.l,set_name:""},type:e.t})
function i(e){return e?{...d(e),...r(e)}:{}}export{i as b}
//# sourceMappingURL=basicItem-jvMH1Iol.js.map
