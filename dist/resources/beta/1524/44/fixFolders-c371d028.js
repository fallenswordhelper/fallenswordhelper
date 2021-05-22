import{E as o,t as a,ax as t}from"./calfSystem-a8d582b6.js"
import{g as c,m as n}from"./monkeyBp-c5606ad2.js"
function r(o,a){const c=`${t}ui/misc/${a}.png`
o.src!==c&&(o.src=c)}function s(o,a){a.dataset.folder===o?r(a,"folder_on"):r(a,"folder")}function f(t){o(".backpackFolderImage").forEach(a(s,String(t.folderId)))}function e(){const o=c()
o&&n(o,f)}export default e
//# sourceMappingURL=fixFolders-c371d028.js.map
