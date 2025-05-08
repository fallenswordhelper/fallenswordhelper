import getElementById from '../../common/getElementById';

let dialogMsg;

export default function getMsg() {
  if (!dialogMsg) {
    dialogMsg = getElementById('quickMsgDialog_msg');
    dialogMsg.maxLength = 512;
  }
  return dialogMsg;
}
