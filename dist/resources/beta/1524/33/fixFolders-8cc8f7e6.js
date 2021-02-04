import{D as o,t as c,ak as a}from"./calfSystem-c91a5c89.js"
import{g as t,m as f}from"./monkeyBp-cc1930fa.js"
function n(o,c){const t=`${a}ui/misc/${c}.png`
o.src!==t&&(o.src=t)}function r(o,c){c.dataset.folder===o?n(c,"folder_on"):n(c,"folder")}function s(a){o(".backpackFolderImage").forEach(c(r,String(a.folderId)))}function e(){const o=t()
o&&f(o,s)}export default e
//# sourceMappingURL=fixFolders-8cc8f7e6.js.map
