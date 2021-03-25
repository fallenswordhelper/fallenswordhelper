import{E as o,t as a,am as c}from"./calfSystem-cb2a6f39.js"
import{g as t,m as f}from"./monkeyBp-8cba5bb6.js"
function n(o,a){const t=`${c}ui/misc/${a}.png`
o.src!==t&&(o.src=t)}function r(o,a){a.dataset.folder===o?n(a,"folder_on"):n(a,"folder")}function s(c){o(".backpackFolderImage").forEach(a(r,String(c.folderId)))}function e(){const o=t()
o&&f(o,s)}export default e
//# sourceMappingURL=fixFolders-95f3669e.js.map
