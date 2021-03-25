function makePageHeader(title, comment, spanId, button) {
  let commentGuard = '';
  if (comment !== '') { commentGuard = `&nbsp;(${comment})`; }
  let spanGuard = '';
  if (spanId) {
    spanGuard = `[<span class="fshLink" id="${
      spanId}">${button}</span>]`;
  }
  return '<table width=100%><tbody><tr class="fshHeader"><td width="90%">'
    + `<b>&nbsp;${title}</b>${commentGuard}<td width="10%" class="fshBtnBox">${
      spanGuard}</td></tr><tbody></table>`;
}

function makePageTemplate(o) {
  return `${makePageHeader(o.title, o.comment, o.spanId, o.button)
  }<div class="fshSmall" id="${o.divId}"></div>`;
}

export { makePageHeader as a, makePageTemplate as m };
//# sourceMappingURL=makePageTemplate-b79624dd.js.map
