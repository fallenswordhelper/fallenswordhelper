import getElementById from '../../common/getElementById';

let quickMsgDialog;

export default function getQuickMessageDialog() {
  if (!quickMsgDialog) {
    quickMsgDialog = getElementById('quickMessageDialog');
  }
  return quickMsgDialog;
}
