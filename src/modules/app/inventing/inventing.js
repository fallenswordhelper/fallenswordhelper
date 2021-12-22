import callApp from '../callApp';
import extend from '../../common/extend';

export default function inventing(data) {
  return callApp(extend({ cmd: 'inventing' }, data));
}
