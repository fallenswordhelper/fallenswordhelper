import clickThis from '../../common/clickThis';
import querySelector from '../../common/querySelector';
import keyHandlerEvent from './keyHandlerEvent';

export default function movePage(dir) {
  const dirButton = querySelector(`#pCC input[value="${dir}"]`);
  if (!dirButton) { return; }
  keyHandlerEvent('movePage');
  clickThis(dirButton);
}
