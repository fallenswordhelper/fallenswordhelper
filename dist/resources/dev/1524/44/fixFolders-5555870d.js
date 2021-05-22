import{E as o,t as f,ay as a}from"./calfSystem-f7cf24f6.js"
import{g as t,m as c}from"./monkeyBp-99d97af3.js"
function n(o,f){const t=`${a}ui/misc/${f}.png`
o.src!==t&&(o.src=t)}function r(o,f){f.dataset.folder===o?n(f,"folder_on"):n(f,"folder")}function s(a){o(".backpackFolderImage").forEach(f(r,String(a.folderId)))}function e(){const o=t()
o&&c(o,s)}export default e
//# sourceMappingURL=fixFolders-5555870d.js.map
