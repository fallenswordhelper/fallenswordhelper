import{D as o,t as a,al as f}from"./calfSystem-c07e3259.js"
import{g as t,m as c}from"./monkeyBp-a04f3fb3.js"
function n(o,a){const t=`${f}ui/misc/${a}.png`
o.src!==t&&(o.src=t)}function r(o,a){a.dataset.folder===o?n(a,"folder_on"):n(a,"folder")}function s(f){o(".backpackFolderImage").forEach(a(r,String(f.folderId)))}function e(){const o=t()
o&&c(o,s)}export default e
//# sourceMappingURL=fixFolders-7cc4a594.js.map
