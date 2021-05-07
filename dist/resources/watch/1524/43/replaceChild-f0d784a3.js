function replaceChild(newChild, oldChild) {
  if (newChild instanceof Node && oldChild instanceof Node) {
    oldChild.parentNode.replaceChild(newChild, oldChild);
  }
  return oldChild;
}

export { replaceChild as r };
//# sourceMappingURL=replaceChild-f0d784a3.js.map
