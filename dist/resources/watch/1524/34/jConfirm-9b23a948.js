import { y as getElementById, b as createDiv, i as insertElement, z as setText } from './calfSystem-d1de1997.js';

function makeFshMsg() {
  let fshMsg = getElementById('fshmsg');
  if (!fshMsg) {
    fshMsg = createDiv({ id: 'fshmsg' });
    insertElement(document.body, fshMsg);
    $(fshMsg).dialog({
      autoOpen: false,
      dialogClass: 'no-close',
      draggable: false,
      modal: true,
      resizable: false,
    });
  }
  return fshMsg;
}

function openFshMsg(title, fn, fshMsg) {
  $(fshMsg).dialog('option', {
    buttons: {
      Yes() {
        fn();
        $(this).dialog('close');
      },
      No() { $(this).dialog('close'); },
    },
    title,
  }).dialog('open');
}

function jConfirm(title, msgText, fn) { // jQuery
  const fshMsg = makeFshMsg();
  setText(msgText, fshMsg);
  openFshMsg(title, fn, fshMsg);
}

export { jConfirm as j };
//# sourceMappingURL=jConfirm-9b23a948.js.map
