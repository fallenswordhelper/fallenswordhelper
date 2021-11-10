import insertHtmlBeforeEnd from './insertHtmlBeforeEnd';

export default function outputResult(result, handle) {
  insertHtmlBeforeEnd(handle, `<li class="fshNbrList">${result}</li>`);
}
