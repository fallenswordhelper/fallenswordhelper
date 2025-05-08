function validRef(referenceNode) {
  return referenceNode instanceof Node
    && referenceNode.parentNode instanceof Node;
}

export default function insertElementBefore(newNode, referenceNode) {
  if (validRef(referenceNode)) {
    return referenceNode.parentNode.insertBefore(newNode, referenceNode);
  }
}
