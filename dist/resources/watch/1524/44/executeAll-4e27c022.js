function execute(fn) {
  fn();
}

function executeAll(ary) {
  ary.forEach(execute);
}

export { executeAll as e };
//# sourceMappingURL=executeAll-4e27c022.js.map
