import{D as o,t as a,ak as f}from"./calfSystem-dfa26790.js"
import{g as t,m as c}from"./monkeyBp-e12cf30a.js"
function n(o,a){const t=`${f}ui/misc/${a}.png`
o.src!==t&&(o.src=t)}function r(o,a){a.dataset.folder===o?n(a,"folder_on"):n(a,"folder")}function s(f){o(".backpackFolderImage").forEach(a(r,String(f.folderId)))}function e(){const o=t()
o&&c(o,s)}export default e
//# sourceMappingURL=fixFolders-74dd9baa.js.map
