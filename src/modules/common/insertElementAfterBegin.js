import insertElement from './insertElement';
import insertElementBefore from './insertElementBefore';

function noChildren(parentNode, newNode) {
  if (parentNode.firstChild instanceof Node) { // Text Node
    return insertElementBefore(newNode, parentNode.firstChild); // Text Node
  }
  return insertElement(parentNode, newNode);
}

export default function insertElementAfterBegin(parentNode, newNode) {
  if (parentNode instanceof Element) {
    return noChildren(parentNode, newNode);
  }
}
