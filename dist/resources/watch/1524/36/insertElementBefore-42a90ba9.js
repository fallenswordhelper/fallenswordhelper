function validRef(referenceNode) {
  return referenceNode instanceof Node
    && referenceNode.parentNode instanceof Node;
}

function insertElementBefore(newNode, referenceNode) {
  if (validRef(referenceNode)) {
    return referenceNode.parentNode.insertBefore(newNode, referenceNode);
  }
}

export { insertElementBefore as i };
//# sourceMappingURL=insertElementBefore-42a90ba9.js.map
