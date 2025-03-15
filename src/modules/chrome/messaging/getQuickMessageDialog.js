import getElementById from '../../common/getElementById';

let quickMsgDialog = null;

export default function getQuickMessageDialog() {
  if (!quickMsgDialog) {
    quickMsgDialog = getElementById('quickMessageDialog');
  }
  return quickMsgDialog;
}
