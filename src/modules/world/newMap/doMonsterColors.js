import createStyle from '../../common/cElement/createStyle';
import insertElement from '../../common/insertElement';
import getValue from '../../system/getValue';

function injectMonsterStyle() {
  insertElement(document.body, createStyle(
    '#actionList .creature-1 {color: green;}\n'
    + '#actionList .creature-2 {color: yellow;}\n'
    + '#actionList .creature-3 {color: red;}',
  ));
}

export default function doMonsterColors() {
  if (getValue('enableCreatureColoring')) injectMonsterStyle();
}
