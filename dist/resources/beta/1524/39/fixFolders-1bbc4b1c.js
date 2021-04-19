import{E as o,t as a,av as f}from"./calfSystem-26fbeaeb.js"
import{g as t,m as c}from"./monkeyBp-fd09cd11.js"
function n(o,a){const t=`${f}ui/misc/${a}.png`
o.src!==t&&(o.src=t)}function r(o,a){a.dataset.folder===o?n(a,"folder_on"):n(a,"folder")}function s(f){o(".backpackFolderImage").forEach(a(r,String(f.folderId)))}function e(){const o=t()
o&&c(o,s)}export default e
//# sourceMappingURL=fixFolders-1bbc4b1c.js.map
