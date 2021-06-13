import{E as o,t as a,ay as f}from"./calfSystem-ae2e69af.js"
import{g as t,m as c}from"./monkeyBp-c65b4af7.js"
function n(o,a){const t=`${f}ui/misc/${a}.png`
o.src!==t&&(o.src=t)}function r(o,a){a.dataset.folder===o?n(a,"folder_on"):n(a,"folder")}function s(f){o(".backpackFolderImage").forEach(a(r,String(f.folderId)))}function e(){const o=t()
o&&c(o,s)}export default e
//# sourceMappingURL=fixFolders-62786385.js.map
