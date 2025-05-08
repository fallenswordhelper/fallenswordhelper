import alert from './alert';
import mountAlert from './mountAlert';

export default function dynamicAlert(msg) {
  if (msg) {
    mountAlert();
    alert.set(msg);
  }
}
