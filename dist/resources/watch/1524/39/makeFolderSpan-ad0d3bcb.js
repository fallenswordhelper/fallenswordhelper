function spacer(key) {
  if (key === '0') { return ''; }
  return ' &ensp;';
}

function makeFolderSpan(key, value) {
  return `${spacer(key)
  }<span class="fshLink fshNoWrap fshFolder fshVMid" data-folder="${
    key}">${value}</span>`;
}

export { makeFolderSpan as m };
//# sourceMappingURL=makeFolderSpan-ad0d3bcb.js.map
