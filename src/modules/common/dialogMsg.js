export default function dialogMsg(msg) {
  const dm = $('#dialog_msg');
  if (dm.dialog('instance')) {
    dm.html(msg).dialog('open');
  }
}
