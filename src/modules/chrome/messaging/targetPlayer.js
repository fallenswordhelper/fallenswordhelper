import getElementById from '../../common/getElementById';
import setText from '../../dom/setText';

let targetPlayer = null;

export function getName() {
  return targetPlayer;
}

export function setName(name) {
  targetPlayer = name;
  setText(name, getElementById('quickMsgDialog_targetUsername'));
}
