import{E as o,t as c,ax as t}from"./calfSystem-3cb2f93e.js"
import{g as a,m as f}from"./monkeyBp-b8342c22.js"
function n(o,c){const a=`${t}ui/misc/${c}.png`
o.src!==a&&(o.src=a)}function r(o,c){c.dataset.folder===o?n(c,"folder_on"):n(c,"folder")}function s(t){o(".backpackFolderImage").forEach(c(r,String(t.folderId)))}function e(){const o=a()
o&&f(o,s)}export default e
//# sourceMappingURL=fixFolders-4286d25f.js.map
