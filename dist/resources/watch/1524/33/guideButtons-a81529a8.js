import { aD as guideUrl } from './calfSystem-cc2b30b5.js';

var css = ".parent {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-end;\n}\n.parent a {\n  height: 17.4px;\n  width: 17.4px;\n  background-size: contain;\n  border: solid 1px #4f3717;\n  border-radius: 2px;\n}\n";
var modules_dd5d330b = {};

function guideButtons(questID, questName) {
  return '<div class="parent">'
    + `<a href="${guideUrl}quests&`
    + `subcmd=view&quest_id=${questID}" class="tip-static fshTempleOne" `
    + 'data-tipped="Search for this quest on the Ultimate Fallen Sword Guide" '
    + 'target="_blank"></a>&nbsp;'
    + `<a href="https://wiki.fallensword.com/index.php?title=${
      questName.replace(/ /g, '_')}" class="tip-static fshWiki" `
    + 'data-tipped="Search for this quest on the Wiki" '
    + 'target="_blank"></a></div>';
}

export { guideButtons as g };
//# sourceMappingURL=guideButtons-a81529a8.js.map
