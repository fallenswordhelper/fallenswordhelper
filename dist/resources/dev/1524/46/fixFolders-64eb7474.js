import{E as o,t as a,az as f}from"./calfSystem-d3f0a380.js"
import{g as t,m as n}from"./monkeyBp-f9a88226.js"
function r(o,a){const t=`${f}ui/misc/${a}.png`
o.src!==t&&(o.src=t)}function s(o,a){a.dataset.folder===o?r(a,"folder_on"):r(a,"folder")}function c(f){o(".backpackFolderImage").forEach(a(s,String(f.folderId)))}function e(){const o=t()
o&&n(o,c)}export default e
//# sourceMappingURL=fixFolders-64eb7474.js.map
