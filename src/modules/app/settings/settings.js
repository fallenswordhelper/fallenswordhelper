import callApp from '../callApp';
import extend from '../../common/extend';

export default function settings(data) {
  return callApp(extend({ cmd: 'settings' }, data));
}
