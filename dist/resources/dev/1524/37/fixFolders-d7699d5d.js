import{E as o,t as a,an as c}from"./calfSystem-5d0c721b.js"
import{g as n,m as t}from"./monkeyBp-869c7da2.js"
function r(o,a){const n=`${c}ui/misc/${a}.png`
o.src!==n&&(o.src=n)}function s(o,a){a.dataset.folder===o?r(a,"folder_on"):r(a,"folder")}function f(c){o(".backpackFolderImage").forEach(a(s,String(c.folderId)))}function e(){const o=n()
o&&t(o,f)}export default e
//# sourceMappingURL=fixFolders-d7699d5d.js.map
