import { i as insertElement } from './calfSystem-d1de1997.js';
import { i as insertElementBefore } from './insertElementBefore-9e5d02cd.js';

function noChildren(parentNode, newNode) {
  if (parentNode.firstChild instanceof Node) { // Text Node
    return insertElementBefore(newNode, parentNode.firstChild); // Text Node
  }
  return insertElement(parentNode, newNode);
}

function insertElementAfterBegin(parentNode, newNode) {
  if (parentNode instanceof Element) {
    return noChildren(parentNode, newNode);
  }
}

export { insertElementAfterBegin as i };
//# sourceMappingURL=insertElementAfterBegin-9cc685b5.js.map
